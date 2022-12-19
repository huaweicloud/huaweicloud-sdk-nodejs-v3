import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { APIVersionDetail } from './model/APIVersionDetail';
import { APIVersionLink } from './model/APIVersionLink';
import { AddNode } from './model/AddNode';
import { AddNodeList } from './model/AddNodeList';
import { AddNodeRequest } from './model/AddNodeRequest';
import { AddNodeResponse } from './model/AddNodeResponse';
import { AddonInstance } from './model/AddonInstance';
import { AddonInstanceStatus } from './model/AddonInstanceStatus';
import { AddonTemplate } from './model/AddonTemplate';
import { AuthenticatingProxy } from './model/AuthenticatingProxy';
import { Authentication } from './model/Authentication';
import { AwakeClusterRequest } from './model/AwakeClusterRequest';
import { AwakeClusterResponse } from './model/AwakeClusterResponse';
import { CertDuration } from './model/CertDuration';
import { Cluster } from './model/Cluster';
import { ClusterCert } from './model/ClusterCert';
import { ClusterEndpoints } from './model/ClusterEndpoints';
import { ClusterExtendParam } from './model/ClusterExtendParam';
import { ClusterInformation } from './model/ClusterInformation';
import { ClusterInformationSpec } from './model/ClusterInformationSpec';
import { ClusterInformationSpecHostNetwork } from './model/ClusterInformationSpecHostNetwork';
import { ClusterMetadata } from './model/ClusterMetadata';
import { ClusterNodeInformation } from './model/ClusterNodeInformation';
import { ClusterNodeInformationMetadata } from './model/ClusterNodeInformationMetadata';
import { ClusterSpec } from './model/ClusterSpec';
import { ClusterStatus } from './model/ClusterStatus';
import { ClusterUpgradeAction } from './model/ClusterUpgradeAction';
import { Clusters } from './model/Clusters';
import { ConfigurationItem } from './model/ConfigurationItem';
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
import { CreateClusterRequest } from './model/CreateClusterRequest';
import { CreateClusterResponse } from './model/CreateClusterResponse';
import { CreateKubernetesClusterCertRequest } from './model/CreateKubernetesClusterCertRequest';
import { CreateKubernetesClusterCertResponse } from './model/CreateKubernetesClusterCertResponse';
import { CreateNodePoolRequest } from './model/CreateNodePoolRequest';
import { CreateNodePoolResponse } from './model/CreateNodePoolResponse';
import { CreateNodeRequest } from './model/CreateNodeRequest';
import { CreateNodeResponse } from './model/CreateNodeResponse';
import { DeleteAddonInstanceRequest } from './model/DeleteAddonInstanceRequest';
import { DeleteAddonInstanceResponse } from './model/DeleteAddonInstanceResponse';
import { DeleteCloudPersistentVolumeClaimsRequest } from './model/DeleteCloudPersistentVolumeClaimsRequest';
import { DeleteCloudPersistentVolumeClaimsResponse } from './model/DeleteCloudPersistentVolumeClaimsResponse';
import { DeleteClusterRequest } from './model/DeleteClusterRequest';
import { DeleteClusterResponse } from './model/DeleteClusterResponse';
import { DeleteNodePoolRequest } from './model/DeleteNodePoolRequest';
import { DeleteNodePoolResponse } from './model/DeleteNodePoolResponse';
import { DeleteNodeRequest } from './model/DeleteNodeRequest';
import { DeleteNodeResponse } from './model/DeleteNodeResponse';
import { DeleteStatus } from './model/DeleteStatus';
import { EipSpec } from './model/EipSpec';
import { EipSpecBandwidth } from './model/EipSpecBandwidth';
import { EniNetwork } from './model/EniNetwork';
import { EniNetworkUpdate } from './model/EniNetworkUpdate';
import { HibernateClusterRequest } from './model/HibernateClusterRequest';
import { HibernateClusterResponse } from './model/HibernateClusterResponse';
import { HostNetwork } from './model/HostNetwork';
import { InPlaceRollingUpdate } from './model/InPlaceRollingUpdate';
import { InstanceRequest } from './model/InstanceRequest';
import { InstanceRequestSpec } from './model/InstanceRequestSpec';
import { InstanceSpec } from './model/InstanceSpec';
import { Job } from './model/Job';
import { JobMetadata } from './model/JobMetadata';
import { JobSpec } from './model/JobSpec';
import { JobStatus } from './model/JobStatus';
import { LVMConfig } from './model/LVMConfig';
import { ListAddonInstancesRequest } from './model/ListAddonInstancesRequest';
import { ListAddonInstancesResponse } from './model/ListAddonInstancesResponse';
import { ListAddonTemplatesRequest } from './model/ListAddonTemplatesRequest';
import { ListAddonTemplatesResponse } from './model/ListAddonTemplatesResponse';
import { ListClustersRequest } from './model/ListClustersRequest';
import { ListClustersResponse } from './model/ListClustersResponse';
import { ListNodePoolsRequest } from './model/ListNodePoolsRequest';
import { ListNodePoolsResponse } from './model/ListNodePoolsResponse';
import { ListNodesRequest } from './model/ListNodesRequest';
import { ListNodesResponse } from './model/ListNodesResponse';
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
import { NodeCreateRequest } from './model/NodeCreateRequest';
import { NodeEIPSpec } from './model/NodeEIPSpec';
import { NodeExtendParam } from './model/NodeExtendParam';
import { NodeItem } from './model/NodeItem';
import { NodeLifecycleConfig } from './model/NodeLifecycleConfig';
import { NodeManagement } from './model/NodeManagement';
import { NodeMetadata } from './model/NodeMetadata';
import { NodeNicSpec } from './model/NodeNicSpec';
import { NodePool } from './model/NodePool';
import { NodePoolCondition } from './model/NodePoolCondition';
import { NodePoolMetadata } from './model/NodePoolMetadata';
import { NodePoolMetadataUpdate } from './model/NodePoolMetadataUpdate';
import { NodePoolNodeAutoscaling } from './model/NodePoolNodeAutoscaling';
import { NodePoolSpec } from './model/NodePoolSpec';
import { NodePoolSpecUpdate } from './model/NodePoolSpecUpdate';
import { NodePoolStatus } from './model/NodePoolStatus';
import { NodePoolUpdate } from './model/NodePoolUpdate';
import { NodePriority } from './model/NodePriority';
import { NodePublicIP } from './model/NodePublicIP';
import { NodeSelector } from './model/NodeSelector';
import { NodeSpec } from './model/NodeSpec';
import { NodeSpecUpdate } from './model/NodeSpecUpdate';
import { NodeStatus } from './model/NodeStatus';
import { OpenAPIResponseSpec } from './model/OpenAPIResponseSpec';
import { OpenAPIResponseSpecSpec } from './model/OpenAPIResponseSpecSpec';
import { PackageConfiguration } from './model/PackageConfiguration';
import { PauseUpgradeClusterTaskRequest } from './model/PauseUpgradeClusterTaskRequest';
import { PauseUpgradeClusterTaskResponse } from './model/PauseUpgradeClusterTaskResponse';
import { PersistentVolumeClaim } from './model/PersistentVolumeClaim';
import { PersistentVolumeClaimMetadata } from './model/PersistentVolumeClaimMetadata';
import { PersistentVolumeClaimSpec } from './model/PersistentVolumeClaimSpec';
import { PersistentVolumeClaimStatus } from './model/PersistentVolumeClaimStatus';
import { QuotaResource } from './model/QuotaResource';
import { ReinstallExtendParam } from './model/ReinstallExtendParam';
import { ReinstallK8sOptionsConfig } from './model/ReinstallK8sOptionsConfig';
import { ReinstallNodeSpec } from './model/ReinstallNodeSpec';
import { ReinstallRuntimeConfig } from './model/ReinstallRuntimeConfig';
import { ReinstallServerConfig } from './model/ReinstallServerConfig';
import { ReinstallVolumeConfig } from './model/ReinstallVolumeConfig';
import { ReinstallVolumeSpec } from './model/ReinstallVolumeSpec';
import { RemoveNodeRequest } from './model/RemoveNodeRequest';
import { RemoveNodeResponse } from './model/RemoveNodeResponse';
import { RemoveNodesSpec } from './model/RemoveNodesSpec';
import { RemoveNodesTask } from './model/RemoveNodesTask';
import { ResetNode } from './model/ResetNode';
import { ResetNodeList } from './model/ResetNodeList';
import { ResetNodeRequest } from './model/ResetNodeRequest';
import { ResetNodeResponse } from './model/ResetNodeResponse';
import { ResourceRequirements } from './model/ResourceRequirements';
import { ResourceTag } from './model/ResourceTag';
import { RetryUpgradeClusterTaskRequest } from './model/RetryUpgradeClusterTaskRequest';
import { RetryUpgradeClusterTaskResponse } from './model/RetryUpgradeClusterTaskResponse';
import { Runtime } from './model/Runtime';
import { RuntimeConfig } from './model/RuntimeConfig';
import { SecurityID } from './model/SecurityID';
import { ShowAddonInstanceRequest } from './model/ShowAddonInstanceRequest';
import { ShowAddonInstanceResponse } from './model/ShowAddonInstanceResponse';
import { ShowClusterEndpointsRequest } from './model/ShowClusterEndpointsRequest';
import { ShowClusterEndpointsResponse } from './model/ShowClusterEndpointsResponse';
import { ShowClusterRequest } from './model/ShowClusterRequest';
import { ShowClusterResponse } from './model/ShowClusterResponse';
import { ShowJobRequest } from './model/ShowJobRequest';
import { ShowJobResponse } from './model/ShowJobResponse';
import { ShowNodePoolRequest } from './model/ShowNodePoolRequest';
import { ShowNodePoolResponse } from './model/ShowNodePoolResponse';
import { ShowNodeRequest } from './model/ShowNodeRequest';
import { ShowNodeResponse } from './model/ShowNodeResponse';
import { ShowQuotasRequest } from './model/ShowQuotasRequest';
import { ShowQuotasResponse } from './model/ShowQuotasResponse';
import { ShowUpgradeClusterTaskRequest } from './model/ShowUpgradeClusterTaskRequest';
import { ShowUpgradeClusterTaskResponse } from './model/ShowUpgradeClusterTaskResponse';
import { ShowVersionRequest } from './model/ShowVersionRequest';
import { ShowVersionResponse } from './model/ShowVersionResponse';
import { Storage } from './model/Storage';
import { StorageGroups } from './model/StorageGroups';
import { StorageSelectors } from './model/StorageSelectors';
import { StorageSelectorsMatchLabels } from './model/StorageSelectorsMatchLabels';
import { SupportVersions } from './model/SupportVersions';
import { Taint } from './model/Taint';
import { TaskStatus } from './model/TaskStatus';
import { Templatespec } from './model/Templatespec';
import { UpdateAddonInstanceRequest } from './model/UpdateAddonInstanceRequest';
import { UpdateAddonInstanceResponse } from './model/UpdateAddonInstanceResponse';
import { UpdateClusterEipRequest } from './model/UpdateClusterEipRequest';
import { UpdateClusterEipResponse } from './model/UpdateClusterEipResponse';
import { UpdateClusterRequest } from './model/UpdateClusterRequest';
import { UpdateClusterResponse } from './model/UpdateClusterResponse';
import { UpdateNodePoolRequest } from './model/UpdateNodePoolRequest';
import { UpdateNodePoolResponse } from './model/UpdateNodePoolResponse';
import { UpdateNodeRequest } from './model/UpdateNodeRequest';
import { UpdateNodeResponse } from './model/UpdateNodeResponse';
import { UpgradeAddonConfig } from './model/UpgradeAddonConfig';
import { UpgradeClusterRequest } from './model/UpgradeClusterRequest';
import { UpgradeClusterRequestBody } from './model/UpgradeClusterRequestBody';
import { UpgradeClusterRequestMetadata } from './model/UpgradeClusterRequestMetadata';
import { UpgradeClusterResponse } from './model/UpgradeClusterResponse';
import { UpgradeSpec } from './model/UpgradeSpec';
import { UpgradeStrategy } from './model/UpgradeStrategy';
import { UpgradeTaskMetadata } from './model/UpgradeTaskMetadata';
import { UpgradeTaskSpec } from './model/UpgradeTaskSpec';
import { UpgradeTaskStatus } from './model/UpgradeTaskStatus';
import { User } from './model/User';
import { UserPassword } from './model/UserPassword';
import { UserTag } from './model/UserTag';
import { Users } from './model/Users';
import { Versions } from './model/Versions';
import { VirtualSpace } from './model/VirtualSpace';
import { Volume } from './model/Volume';
import { VolumeMetadata } from './model/VolumeMetadata';

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
        options['responseHeaders'] = [''];
        // @ts-ignore
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
    public awakeCluster(awakeClusterRequest?: AwakeClusterRequest): Promise<void> {
        const options = ParamCreater().awakeCluster(awakeClusterRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
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
    public continueUpgradeClusterTask(continueUpgradeClusterTaskRequest?: ContinueUpgradeClusterTaskRequest): Promise<void> {
        const options = ParamCreater().continueUpgradeClusterTask(continueUpgradeClusterTaskRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
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
        options['responseHeaders'] = [''];
        // @ts-ignore
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
        options['responseHeaders'] = [''];
        // @ts-ignore
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
        options['responseHeaders'] = [''];
        // @ts-ignore
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
        options['responseHeaders'] = ['Port-ID'];
        // @ts-ignore
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
        options['responseHeaders'] = [''];
        // @ts-ignore
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
        options['responseHeaders'] = [''];
        // @ts-ignore
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
    public deleteAddonInstance(deleteAddonInstanceRequest?: DeleteAddonInstanceRequest): Promise<string> {
        const options = ParamCreater().deleteAddonInstance(deleteAddonInstanceRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
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
        options['responseHeaders'] = [''];
        // @ts-ignore
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
     * @param {'true'} [tobedeleted] 是否使用包周期集群删除参数预置模式（仅对包周期集群生效）。  需要和其他删除选项参数一起使用，未指定的参数，则使用默认值。  使用该参数，集群不执行真正的删除，仅将本次请求的全部query参数都预置到集群数据库中，用于包周期集群退订时识别用户要删除的资源。  允许重复执行，覆盖预置的删除参数。  枚举取值： - true  (预置模式，仅预置query参数，不执行删除)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteCluster(deleteClusterRequest?: DeleteClusterRequest): Promise<DeleteClusterResponse> {
        const options = ParamCreater().deleteCluster(deleteClusterRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
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
        options['responseHeaders'] = [''];
        // @ts-ignore
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
        options['responseHeaders'] = [''];
        // @ts-ignore
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
    public hibernateCluster(hibernateClusterRequest?: HibernateClusterRequest): Promise<void> {
        const options = ParamCreater().hibernateCluster(hibernateClusterRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
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
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 插件模板查询接口，查询插件信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询AddonTemplates列表
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} [addonTemplateName] 指定的模板名称，不填写则查询列表。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAddonTemplates(listAddonTemplatesRequest?: ListAddonTemplatesRequest): Promise<ListAddonTemplatesResponse> {
        const options = ParamCreater().listAddonTemplates(listAddonTemplatesRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
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
     * @param {'Available' | 'Unavailable' | 'ScalingUp' | 'ScalingDown' | 'Creating' | 'Deleting' | 'Upgrading' | 'Resizing' | 'RollingBack' | 'RollbackFailed' | 'Empty'} [status] 集群状态，取值如下 - Available：可用，表示集群处于正常状态。 - Unavailable：不可用，表示集群异常，需手动删除。 - ScalingUp：扩容中，表示集群正处于扩容过程中。 - ScalingDown：缩容中，表示集群正处于缩容过程中。 - Creating：创建中，表示集群正处于创建过程中。 - Deleting：删除中，表示集群正处于删除过程中。 - Upgrading：升级中，表示集群正处于升级过程中。 - Resizing：规格变更中，表示集群正处于变更规格中。 - RollingBack：回滚中，表示集群正处于回滚过程中。 - RollbackFailed：回滚异常，表示集群回滚异常。 - Empty：集群无任何资源
     * @param {'VirtualMachine' | 'ARM64'} [type] 集群类型： - VirtualMachine：CCE集群 - ARM64：鲲鹏集群
     * @param {string} [version] 集群版本过滤
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listClusters(listClustersRequest?: ListClustersRequest): Promise<ListClustersResponse> {
        const options = ParamCreater().listClusters(listClustersRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
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
        options['responseHeaders'] = [''];
        // @ts-ignore
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
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于在指定集群下迁移节点到另一集群（仅支持在同一VPC下的不同集群之间进行迁移）。
     * [CCE Turbo集群下弹性云服务-物理机类型节点不支持迁移。](tag:hws,hws_hk,dt)
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
        options['responseHeaders'] = [''];
        // @ts-ignore
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
    public pauseUpgradeClusterTask(pauseUpgradeClusterTaskRequest?: PauseUpgradeClusterTaskRequest): Promise<void> {
        const options = ParamCreater().pauseUpgradeClusterTask(pauseUpgradeClusterTaskRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
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
        options['responseHeaders'] = [''];
        // @ts-ignore
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
        options['responseHeaders'] = [''];
        // @ts-ignore
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
    public retryUpgradeClusterTask(retryUpgradeClusterTaskRequest?: RetryUpgradeClusterTaskRequest): Promise<void> {
        const options = ParamCreater().retryUpgradeClusterTask(retryUpgradeClusterTaskRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
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
        options['responseHeaders'] = [''];
        // @ts-ignore
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
        options['responseHeaders'] = [''];
        // @ts-ignore
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
        options['responseHeaders'] = [''];
        // @ts-ignore
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
        options['responseHeaders'] = [''];
        // @ts-ignore
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
        options['responseHeaders'] = [''];
        // @ts-ignore
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
        options['responseHeaders'] = [''];
        // @ts-ignore
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
        options['responseHeaders'] = [''];
        // @ts-ignore
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
        options['responseHeaders'] = [''];
        // @ts-ignore
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
        options['responseHeaders'] = [''];
        // @ts-ignore
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
        options['responseHeaders'] = [''];
        // @ts-ignore
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
        options['responseHeaders'] = [''];
        // @ts-ignore
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
        options['responseHeaders'] = [''];
        // @ts-ignore
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
        options['responseHeaders'] = [''];
        // @ts-ignore
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
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于查询CCE服务当前支持的API版本信息列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询API版本信息列表。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVersion(): Promise<ShowVersionResponse> {
        const options = ParamCreater().showVersion();
        options['responseHeaders'] = [''];
        // @ts-ignore
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

            var body: any;
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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

            var body: any;
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

            var body: any;
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

            var body: any;
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

            var body: any;
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
            var body: any;
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

            var body: any;
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
            let tobedeleted;

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
                    tobedeleted = deleteClusterRequest.tobedeleted;
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
                    tobedeleted = deleteClusterRequest['tobedeleted'];
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
            if (tobedeleted !== null && tobedeleted !== undefined) {
                localVarQueryParameter['tobedeleted'] = tobedeleted;
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
         * 该API用于在指定集群下迁移节点到另一集群（仅支持在同一VPC下的不同集群之间进行迁移）。
         * [CCE Turbo集群下弹性云服务-物理机类型节点不支持迁移。](tag:hws,hws_hk,dt)
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

            var body: any;
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
                headers: {},
                data: {}
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

            var body: any;
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

            var body: any;
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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

            var body: any;
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

            var body: any;
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

            var body: any;
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

            var body: any;
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

            var body: any;
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

            var body: any;
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
                headers: {},
                data: {}
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