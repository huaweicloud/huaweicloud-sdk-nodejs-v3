import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { APIEnablement } from './model/APIEnablement';
import { APIResource } from './model/APIResource';
import { AddonInstance } from './model/AddonInstance';
import { AddonInstanceSpec } from './model/AddonInstanceSpec';
import { AddonInstanceStatus } from './model/AddonInstanceStatus';
import { AddonObjectMeta } from './model/AddonObjectMeta';
import { AddonTemplate } from './model/AddonTemplate';
import { AddonTemplateSpec } from './model/AddonTemplateSpec';
import { AddonVersion } from './model/AddonVersion';
import { Artifact } from './model/Artifact';
import { AuthInfo } from './model/AuthInfo';
import { Cluster } from './model/Cluster';
import { ClusterAffinity } from './model/ClusterAffinity';
import { ClusterCert } from './model/ClusterCert';
import { ClusterGroup } from './model/ClusterGroup';
import { ClusterGroupCondition } from './model/ClusterGroupCondition';
import { ClusterGroupSpec } from './model/ClusterGroupSpec';
import { ClusterGroupStatus } from './model/ClusterGroupStatus';
import { ClusterInfo } from './model/ClusterInfo';
import { ClusterJoinGroupRequestBody } from './model/ClusterJoinGroupRequestBody';
import { ClusterReconcileStatus } from './model/ClusterReconcileStatus';
import { ClusterSpec } from './model/ClusterSpec';
import { ClusterStatus } from './model/ClusterStatus';
import { CommonQuotas } from './model/CommonQuotas';
import { ConditionStatus } from './model/ConditionStatus';
import { ConfigSetResponse } from './model/ConfigSetResponse';
import { ConnectEndpoint } from './model/ConnectEndpoint';
import { Constraint } from './model/Constraint';
import { ConstraintSpec } from './model/ConstraintSpec';
import { ContainerStatus } from './model/ContainerStatus';
import { Content } from './model/Content';
import { Context } from './model/Context';
import { CreateAddonInstanceRequest } from './model/CreateAddonInstanceRequest';
import { CreateAddonInstanceResponse } from './model/CreateAddonInstanceResponse';
import { CreateClusterConfRequest } from './model/CreateClusterConfRequest';
import { CreateClusterConfResponse } from './model/CreateClusterConfResponse';
import { CreateClusterGroupPolicyInstanceRequest } from './model/CreateClusterGroupPolicyInstanceRequest';
import { CreateClusterGroupPolicyInstanceResponse } from './model/CreateClusterGroupPolicyInstanceResponse';
import { CreateClusterKubeconfigRequest } from './model/CreateClusterKubeconfigRequest';
import { CreateClusterKubeconfigResponse } from './model/CreateClusterKubeconfigResponse';
import { CreateClusterPolicyInstanceRequest } from './model/CreateClusterPolicyInstanceRequest';
import { CreateClusterPolicyInstanceResponse } from './model/CreateClusterPolicyInstanceResponse';
import { CreateConfigSetRequest } from './model/CreateConfigSetRequest';
import { CreateConfigSetRequestBody } from './model/CreateConfigSetRequestBody';
import { CreateConfigSetResponse } from './model/CreateConfigSetResponse';
import { CreateFederationCertRequest } from './model/CreateFederationCertRequest';
import { CreateFederationCertRequestBody } from './model/CreateFederationCertRequestBody';
import { CreateFederationCertResponse } from './model/CreateFederationCertResponse';
import { CreateFederationConnectionRequest } from './model/CreateFederationConnectionRequest';
import { CreateFederationConnectionRequestBody } from './model/CreateFederationConnectionRequestBody';
import { CreateFederationConnectionResponse } from './model/CreateFederationConnectionResponse';
import { CreateProxyUnitedWorkloadRequest } from './model/CreateProxyUnitedWorkloadRequest';
import { CreateProxyUnitedWorkloadResponse } from './model/CreateProxyUnitedWorkloadResponse';
import { CreateRecordSetRequest } from './model/CreateRecordSetRequest';
import { CreateRecordSetRequestBody } from './model/CreateRecordSetRequestBody';
import { CreateRecordSetResponse } from './model/CreateRecordSetResponse';
import { CreateRepoRequest } from './model/CreateRepoRequest';
import { CreateRepoRequestBody } from './model/CreateRepoRequestBody';
import { CreateRepoResponse } from './model/CreateRepoResponse';
import { CreateRuleObjectMeta } from './model/CreateRuleObjectMeta';
import { CreateRuleRequest } from './model/CreateRuleRequest';
import { CreateRuleRequestBody } from './model/CreateRuleRequestBody';
import { CreateRuleResponse } from './model/CreateRuleResponse';
import { DeleteAddonInstanceRequest } from './model/DeleteAddonInstanceRequest';
import { DeleteAddonInstanceResponse } from './model/DeleteAddonInstanceResponse';
import { DeleteClusterGroupRequest } from './model/DeleteClusterGroupRequest';
import { DeleteClusterGroupResponse } from './model/DeleteClusterGroupResponse';
import { DeleteClusterRequest } from './model/DeleteClusterRequest';
import { DeleteClusterResponse } from './model/DeleteClusterResponse';
import { DeleteConfigSetRequest } from './model/DeleteConfigSetRequest';
import { DeleteConfigSetResponse } from './model/DeleteConfigSetResponse';
import { DeletePolicyInstanceRequest } from './model/DeletePolicyInstanceRequest';
import { DeletePolicyInstanceResponse } from './model/DeletePolicyInstanceResponse';
import { DeleteProxyUnitedWorkloadRequest } from './model/DeleteProxyUnitedWorkloadRequest';
import { DeleteProxyUnitedWorkloadResponse } from './model/DeleteProxyUnitedWorkloadResponse';
import { DeleteRepoRequest } from './model/DeleteRepoRequest';
import { DeleteRepoResponse } from './model/DeleteRepoResponse';
import { DeleteRuleRequest } from './model/DeleteRuleRequest';
import { DeleteRuleResponse } from './model/DeleteRuleResponse';
import { DisableClusterPolicyRequest } from './model/DisableClusterPolicyRequest';
import { DisableClusterPolicyResponse } from './model/DisableClusterPolicyResponse';
import { DisableClustergroupPolicyRequest } from './model/DisableClustergroupPolicyRequest';
import { DisableClustergroupPolicyResponse } from './model/DisableClustergroupPolicyResponse';
import { DisableFederationRequest } from './model/DisableFederationRequest';
import { DisableFederationResponse } from './model/DisableFederationResponse';
import { DisableGitOpsRequest } from './model/DisableGitOpsRequest';
import { DisableGitOpsResponse } from './model/DisableGitOpsResponse';
import { DownloadFederationKubeconfigRequest } from './model/DownloadFederationKubeconfigRequest';
import { DownloadFederationKubeconfigRequestBody } from './model/DownloadFederationKubeconfigRequestBody';
import { DownloadFederationKubeconfigResponse } from './model/DownloadFederationKubeconfigResponse';
import { EnableClusterPolicyRequest } from './model/EnableClusterPolicyRequest';
import { EnableClusterPolicyResponse } from './model/EnableClusterPolicyResponse';
import { EnableClustergroupPolicyRequest } from './model/EnableClustergroupPolicyRequest';
import { EnableClustergroupPolicyResponse } from './model/EnableClustergroupPolicyResponse';
import { EnableFederationRequest } from './model/EnableFederationRequest';
import { EnableFederationResponse } from './model/EnableFederationResponse';
import { EnableGitOpsRequest } from './model/EnableGitOpsRequest';
import { EnableGitOpsResponse } from './model/EnableGitOpsResponse';
import { FederationConfig } from './model/FederationConfig';
import { FederationVersionInfo } from './model/FederationVersionInfo';
import { FederationVersionSpec } from './model/FederationVersionSpec';
import { GitRepository } from './model/GitRepository';
import { GitRepositoryMetaData } from './model/GitRepositoryMetaData';
import { GitRepositoryRef } from './model/GitRepositoryRef';
import { GitRepositorySpec } from './model/GitRepositorySpec';
import { GitRepositoryStatus } from './model/GitRepositoryStatus';
import { Job } from './model/Job';
import { JobSpec } from './model/JobSpec';
import { JobStatus } from './model/JobStatus';
import { JoinGroupRequest } from './model/JoinGroupRequest';
import { JoinGroupResponse } from './model/JoinGroupResponse';
import { Kustomization } from './model/Kustomization';
import { KustomizationMetaData } from './model/KustomizationMetaData';
import { KustomizationSpec } from './model/KustomizationSpec';
import { KustomizationStatus } from './model/KustomizationStatus';
import { LeaveGroupRequest } from './model/LeaveGroupRequest';
import { LeaveGroupResponse } from './model/LeaveGroupResponse';
import { Links } from './model/Links';
import { ListAddonInstancesRequest } from './model/ListAddonInstancesRequest';
import { ListAddonInstancesResponse } from './model/ListAddonInstancesResponse';
import { ListAddonTemplatesRequest } from './model/ListAddonTemplatesRequest';
import { ListAddonTemplatesResponse } from './model/ListAddonTemplatesResponse';
import { ListClusterGroupRequest } from './model/ListClusterGroupRequest';
import { ListClusterGroupResponse } from './model/ListClusterGroupResponse';
import { ListConfigSetsRequest } from './model/ListConfigSetsRequest';
import { ListConfigSetsResponse } from './model/ListConfigSetsResponse';
import { ListManagedClustersRequest } from './model/ListManagedClustersRequest';
import { ListManagedClustersResponse } from './model/ListManagedClustersResponse';
import { ListMeta } from './model/ListMeta';
import { ListPolicyDefinitionsRequest } from './model/ListPolicyDefinitionsRequest';
import { ListPolicyDefinitionsResponse } from './model/ListPolicyDefinitionsResponse';
import { ListPolicyInstancesRequest } from './model/ListPolicyInstancesRequest';
import { ListPolicyInstancesResponse } from './model/ListPolicyInstancesResponse';
import { ListPolicyJobsRequest } from './model/ListPolicyJobsRequest';
import { ListPolicyJobsResponse } from './model/ListPolicyJobsResponse';
import { ListRecordSetsRequest } from './model/ListRecordSetsRequest';
import { ListRecordSetsResponse } from './model/ListRecordSetsResponse';
import { ListRegisteredClusterVersionsRequest } from './model/ListRegisteredClusterVersionsRequest';
import { ListRegisteredClusterVersionsResponse } from './model/ListRegisteredClusterVersionsResponse';
import { ListReposRequest } from './model/ListReposRequest';
import { ListReposResponse } from './model/ListReposResponse';
import { ListRuleRequest } from './model/ListRuleRequest';
import { ListRuleResponse } from './model/ListRuleResponse';
import { ListServerConfigsRequest } from './model/ListServerConfigsRequest';
import { ListServerConfigsResponse } from './model/ListServerConfigsResponse';
import { LocalObjectReference } from './model/LocalObjectReference';
import { LocalSecretReference } from './model/LocalSecretReference';
import { ManagedFieldsEntry } from './model/ManagedFieldsEntry';
import { Match } from './model/Match';
import { Metadata } from './model/Metadata';
import { MutiWorkload } from './model/MutiWorkload';
import { NamedAuthInfo } from './model/NamedAuthInfo';
import { NamedCluster } from './model/NamedCluster';
import { NamedContext } from './model/NamedContext';
import { NetworkConfig } from './model/NetworkConfig';
import { NodeSummary } from './model/NodeSummary';
import { NodeUpgradeStrategy } from './model/NodeUpgradeStrategy';
import { ObjectMeta } from './model/ObjectMeta';
import { OnPremisesConfig } from './model/OnPremisesConfig';
import { OnPremisesVersionInfo } from './model/OnPremisesVersionInfo';
import { OverridePolicy } from './model/OverridePolicy';
import { OverrideSpec } from './model/OverrideSpec';
import { OverviewReconcileStatus } from './model/OverviewReconcileStatus';
import { OwnerReference } from './model/OwnerReference';
import { Placement } from './model/Placement';
import { Pod } from './model/Pod';
import { PodSpec } from './model/PodSpec';
import { PodStatus } from './model/PodStatus';
import { PropagationPolicy } from './model/PropagationPolicy';
import { PropagationSpec } from './model/PropagationSpec';
import { QuotaResource } from './model/QuotaResource';
import { RecordSet } from './model/RecordSet';
import { RegisterCluster } from './model/RegisterCluster';
import { RegisterClusterGroup } from './model/RegisterClusterGroup';
import { RegisterClusterGroupObjectMeta } from './model/RegisterClusterGroupObjectMeta';
import { RegisterClusterGroupRequest } from './model/RegisterClusterGroupRequest';
import { RegisterClusterGroupResponse } from './model/RegisterClusterGroupResponse';
import { RegisterClusterGroupSpec } from './model/RegisterClusterGroupSpec';
import { RegisterClusterMetadata } from './model/RegisterClusterMetadata';
import { RegisterClusterRequest } from './model/RegisterClusterRequest';
import { RegisterClusterResponse } from './model/RegisterClusterResponse';
import { RegisterClusterSpec } from './model/RegisterClusterSpec';
import { ReleaseParams } from './model/ReleaseParams';
import { RepoResponse } from './model/RepoResponse';
import { RequiredInput } from './model/RequiredInput';
import { ResourceBinding } from './model/ResourceBinding';
import { ResourceBindingSpec } from './model/ResourceBindingSpec';
import { ResourceBindingStatus } from './model/ResourceBindingStatus';
import { ResourceKinds } from './model/ResourceKinds';
import { ResourceSelector } from './model/ResourceSelector';
import { ResourceSummary } from './model/ResourceSummary';
import { RetryClusterActivationRequest } from './model/RetryClusterActivationRequest';
import { RetryClusterActivationResponse } from './model/RetryClusterActivationResponse';
import { RollingUpdateNodeUpgradeStrategy } from './model/RollingUpdateNodeUpgradeStrategy';
import { Rule } from './model/Rule';
import { RuleIDNamespaces } from './model/RuleIDNamespaces';
import { RuleInfo } from './model/RuleInfo';
import { RuleNamespace } from './model/RuleNamespace';
import { RuleSpec } from './model/RuleSpec';
import { SecretInfo } from './model/SecretInfo';
import { ShowAddonInstanceRequest } from './model/ShowAddonInstanceRequest';
import { ShowAddonInstanceResponse } from './model/ShowAddonInstanceResponse';
import { ShowClusterAccessInfoRequest } from './model/ShowClusterAccessInfoRequest';
import { ShowClusterAccessInfoResponse } from './model/ShowClusterAccessInfoResponse';
import { ShowClusterGroupRequest } from './model/ShowClusterGroupRequest';
import { ShowClusterGroupResponse } from './model/ShowClusterGroupResponse';
import { ShowClusterListRequest } from './model/ShowClusterListRequest';
import { ShowClusterListResponse } from './model/ShowClusterListResponse';
import { ShowClusterRequest } from './model/ShowClusterRequest';
import { ShowClusterResponse } from './model/ShowClusterResponse';
import { ShowConfigSetRequest } from './model/ShowConfigSetRequest';
import { ShowConfigSetResponse } from './model/ShowConfigSetResponse';
import { ShowFederationProgressRequest } from './model/ShowFederationProgressRequest';
import { ShowFederationProgressResponse } from './model/ShowFederationProgressResponse';
import { ShowGitOpsStatusRequest } from './model/ShowGitOpsStatusRequest';
import { ShowGitOpsStatusResponse } from './model/ShowGitOpsStatusResponse';
import { ShowGitopsStatisticsRequest } from './model/ShowGitopsStatisticsRequest';
import { ShowGitopsStatisticsResponse } from './model/ShowGitopsStatisticsResponse';
import { ShowPolicyDefinitionRequest } from './model/ShowPolicyDefinitionRequest';
import { ShowPolicyDefinitionResponse } from './model/ShowPolicyDefinitionResponse';
import { ShowPolicyInstanceRequest } from './model/ShowPolicyInstanceRequest';
import { ShowPolicyInstanceResponse } from './model/ShowPolicyInstanceResponse';
import { ShowPolicyJobRequest } from './model/ShowPolicyJobRequest';
import { ShowPolicyJobResponse } from './model/ShowPolicyJobResponse';
import { ShowProxyUnitedWorkloadRequest } from './model/ShowProxyUnitedWorkloadRequest';
import { ShowProxyUnitedWorkloadResponse } from './model/ShowProxyUnitedWorkloadResponse';
import { ShowQuotaRequest } from './model/ShowQuotaRequest';
import { ShowQuotaResponse } from './model/ShowQuotaResponse';
import { SourceRef } from './model/SourceRef';
import { StatusEvent } from './model/StatusEvent';
import { StatusViolation } from './model/StatusViolation';
import { SupportVersion } from './model/SupportVersion';
import { Taint } from './model/Taint';
import { TargetCluster } from './model/TargetCluster';
import { Toleration } from './model/Toleration';
import { UCSConstraint } from './model/UCSConstraint';
import { UCSConstraintRequest } from './model/UCSConstraintRequest';
import { UCSConstraintSpec } from './model/UCSConstraintSpec';
import { UCSConstraintStatus } from './model/UCSConstraintStatus';
import { UCSConstraintTemplate } from './model/UCSConstraintTemplate';
import { UCSConstraintTemplateTagRequest } from './model/UCSConstraintTemplateTagRequest';
import { UCSJob } from './model/UCSJob';
import { UCSJobSpec } from './model/UCSJobSpec';
import { UCSJobStatus } from './model/UCSJobStatus';
import { UCSStatusViolation } from './model/UCSStatusViolation';
import { UCSTask } from './model/UCSTask';
import { UCSTaskSpec } from './model/UCSTaskSpec';
import { UCSTaskStatus } from './model/UCSTaskStatus';
import { UpdateAddonInstanceRequest } from './model/UpdateAddonInstanceRequest';
import { UpdateAddonInstanceResponse } from './model/UpdateAddonInstanceResponse';
import { UpdateAssociatedRulesRequest } from './model/UpdateAssociatedRulesRequest';
import { UpdateAssociatedZonesRequest } from './model/UpdateAssociatedZonesRequest';
import { UpdateClusterGroupAssociatedClustersRequest } from './model/UpdateClusterGroupAssociatedClustersRequest';
import { UpdateClusterGroupAssociatedClustersRequestBody } from './model/UpdateClusterGroupAssociatedClustersRequestBody';
import { UpdateClusterGroupAssociatedClustersResponse } from './model/UpdateClusterGroupAssociatedClustersResponse';
import { UpdateClusterGroupAssociatedRulesRequest } from './model/UpdateClusterGroupAssociatedRulesRequest';
import { UpdateClusterGroupAssociatedRulesResponse } from './model/UpdateClusterGroupAssociatedRulesResponse';
import { UpdateClusterGroupAssociatedZonesRequest } from './model/UpdateClusterGroupAssociatedZonesRequest';
import { UpdateClusterGroupAssociatedZonesResponse } from './model/UpdateClusterGroupAssociatedZonesResponse';
import { UpdateClusterGroupDescriptionRequest } from './model/UpdateClusterGroupDescriptionRequest';
import { UpdateClusterGroupRequest } from './model/UpdateClusterGroupRequest';
import { UpdateClusterGroupResponse } from './model/UpdateClusterGroupResponse';
import { UpdateClusterRequest } from './model/UpdateClusterRequest';
import { UpdateClusterRequestBody } from './model/UpdateClusterRequestBody';
import { UpdateClusterResponse } from './model/UpdateClusterResponse';
import { UpdateClusterRulesRequest } from './model/UpdateClusterRulesRequest';
import { UpdateClusterRulesResponse } from './model/UpdateClusterRulesResponse';
import { UpdateClusterSpec } from './model/UpdateClusterSpec';
import { UpdateConfigSetRequest } from './model/UpdateConfigSetRequest';
import { UpdateConfigSetRequestBody } from './model/UpdateConfigSetRequestBody';
import { UpdateConfigSetResponse } from './model/UpdateConfigSetResponse';
import { UpdateObjectMeta } from './model/UpdateObjectMeta';
import { UpdatePolicyDefinationRequest } from './model/UpdatePolicyDefinationRequest';
import { UpdatePolicyDefinationResponse } from './model/UpdatePolicyDefinationResponse';
import { UpdatePolicyInstanceRequest } from './model/UpdatePolicyInstanceRequest';
import { UpdatePolicyInstanceResponse } from './model/UpdatePolicyInstanceResponse';
import { UpdateProxyUnitedWorkloadRequest } from './model/UpdateProxyUnitedWorkloadRequest';
import { UpdateProxyUnitedWorkloadResponse } from './model/UpdateProxyUnitedWorkloadResponse';
import { UpdateRepoRequest } from './model/UpdateRepoRequest';
import { UpdateRepoRequestBody } from './model/UpdateRepoRequestBody';
import { UpdateRepoResponse } from './model/UpdateRepoResponse';
import { UpdateRuleRequest } from './model/UpdateRuleRequest';
import { UpdateRuleRequestBody } from './model/UpdateRuleRequestBody';
import { UpdateRuleResponse } from './model/UpdateRuleResponse';
import { UpgradeFederationRequest } from './model/UpgradeFederationRequest';
import { UpgradeFederationRequestBody } from './model/UpgradeFederationRequestBody';
import { UpgradeFederationResponse } from './model/UpgradeFederationResponse';
import { WorkerConfig } from './model/WorkerConfig';

export class UcsClient {
    public static newBuilder(): ClientBuilder<UcsClient> {
            let client = new ClientBuilder<UcsClient>(newClient, 'GlobalCredentials');
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
     * 安装插件实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 安装插件实例
     * @param {AddonInstance} [createAddonInstanceRequestBody] 请求体
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
     * 创建舰队策略实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建舰队策略实例
     * @param {string} clustergroupid 容器舰队id
     * @param {UCSConstraintRequest} [uCSConstraintRequest] 策略实例创建请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createClusterGroupPolicyInstance(createClusterGroupPolicyInstanceRequest?: CreateClusterGroupPolicyInstanceRequest): Promise<CreateClusterGroupPolicyInstanceResponse> {
        const options = ParamCreater().createClusterGroupPolicyInstance(createClusterGroupPolicyInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建配置集合
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建配置集合
     * @param {CreateConfigSetRequestBody} createConfigSetRequest 创建配置集合请求信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createConfigSet(createConfigSetRequest?: CreateConfigSetRequest): Promise<CreateConfigSetResponse> {
        const options = ParamCreater().createConfigSet(createConfigSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 舰队开通联邦后，调用此接口，创建vpcep终端节点，连接到联邦apiserver，并下载联邦apiserver的kubeconfig
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建联邦网络连接并下载联邦kubeconfig
     * @param {string} clustergroupid 舰队ID
     * @param {CreateFederationCertRequestBody} createFederationCertRequestBody 下载kubeconfig请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createFederationCert(createFederationCertRequest?: CreateFederationCertRequest): Promise<CreateFederationCertResponse> {
        const options = ParamCreater().createFederationCert(createFederationCertRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 舰队开通联邦后，创建vpcep终端节点连接到联邦apiserver
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建联邦网络连接
     * @param {string} clustergroupid 舰队id
     * @param {CreateFederationConnectionRequestBody} createFederationConnectionRequestBody 创建联邦网络连接请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createFederationConnection(createFederationConnectionRequest?: CreateFederationConnectionRequest): Promise<CreateFederationConnectionResponse> {
        const options = ParamCreater().createFederationConnection(createFederationConnectionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建联邦工作负载
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建联邦工作负载
     * @param {string} clustergroupid 容器舰队id
     * @param {MutiWorkload} [mutiWorkload] 待创建的工作负载信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createProxyUnitedWorkload(createProxyUnitedWorkloadRequest?: CreateProxyUnitedWorkloadRequest): Promise<CreateProxyUnitedWorkloadResponse> {
        const options = ParamCreater().createProxyUnitedWorkload(createProxyUnitedWorkloadRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建域名解析记录集
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建域名解析记录集
     * @param {string} xZoneProjectID 项目ID
     * @param {string} xZoneID DNS区域ID
     * @param {Array<CreateRecordSetRequestBody>} createRecordSetRequestBody 创建域名解析记录集请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRecordSet(createRecordSetRequest?: CreateRecordSetRequest): Promise<CreateRecordSetResponse> {
        const options = ParamCreater().createRecordSet(createRecordSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建仓库源
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建仓库源
     * @param {CreateRepoRequestBody} createRepoRequest 创建仓库源请求信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRepo(createRepoRequest?: CreateRepoRequest): Promise<CreateRepoResponse> {
        const options = ParamCreater().createRepo(createRepoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建权限策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建权限策略
     * @param {CreateRuleObjectMeta} metadata 
     * @param {RuleSpec} spec 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRule(createRuleRequest?: CreateRuleRequest): Promise<CreateRuleResponse> {
        const options = ParamCreater().createRule(createRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 卸载插件实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 卸载插件实例
     * @param {string} id 插件实例id
     * @param {string} [clusterId] cluster_id 为空时，使用 addonInstance 的 cluster_id；不为空时，需要校验addonInstance 的 cluster_id 和 query 中的是否相同
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
     * 容器舰队删除接口，只有在容器舰队为空时才可以删除该容器舰队，若需删除请先将集群移出容器舰队；传入的cluster ID必须符合k8s UUID的格式规则；同时需要用户有对应集群的操作权限，否则会鉴权失败
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除容器舰队
     * @param {string} clustergroupid 容器舰队ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteClusterGroup(deleteClusterGroupRequest?: DeleteClusterGroupRequest): Promise<DeleteClusterGroupResponse> {
        const options = ParamCreater().deleteClusterGroup(deleteClusterGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 仅删除配置集合，不删除仓库源
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除配置集合
     * @param {string} configsetid 配置集合id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteConfigSet(deleteConfigSetRequest?: DeleteConfigSetRequest): Promise<DeleteConfigSetResponse> {
        const options = ParamCreater().deleteConfigSet(deleteConfigSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定策略实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除指定策略实例
     * @param {string} policyinstanceid 策略实例id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePolicyInstance(deletePolicyInstanceRequest?: DeletePolicyInstanceRequest): Promise<DeletePolicyInstanceResponse> {
        const options = ParamCreater().deletePolicyInstance(deletePolicyInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除联邦工作负载
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除联邦工作负载
     * @param {string} clustergroupid 容器舰队id
     * @param {string} kind 工作负载的类型
     * @param {string} [namespace] 命名空间
     * @param {string} [name] 工作负载的名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteProxyUnitedWorkload(deleteProxyUnitedWorkloadRequest?: DeleteProxyUnitedWorkloadRequest): Promise<DeleteProxyUnitedWorkloadResponse> {
        const options = ParamCreater().deleteProxyUnitedWorkload(deleteProxyUnitedWorkloadRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除仓库源
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除仓库源
     * @param {string} repoid 仓库id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRepo(deleteRepoRequest?: DeleteRepoRequest): Promise<DeleteRepoResponse> {
        const options = ParamCreater().deleteRepo(deleteRepoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除权限策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除权限策略
     * @param {string} ruleid 权限策略id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRule(deleteRuleRequest?: DeleteRuleRequest): Promise<DeleteRuleResponse> {
        const options = ParamCreater().deleteRule(deleteRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 舰队关闭策略中心
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 舰队关闭策略中心
     * @param {string} clustergroupid 容器舰队id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disableClustergroupPolicy(disableClustergroupPolicyRequest?: DisableClustergroupPolicyRequest): Promise<DisableClustergroupPolicyResponse> {
        const options = ParamCreater().disableClustergroupPolicy(disableClustergroupPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 关闭容器舰队联邦
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关闭容器集群联邦
     * @param {string} clustergroupid 容器舰队id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disableFederation(disableFederationRequest?: DisableFederationRequest): Promise<DisableFederationResponse> {
        const options = ParamCreater().disableFederation(disableFederationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 舰队开通联邦并且创建网络连接之后，可以使用此接口下载联邦的kubeconfig
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 下载联邦kubeconfig
     * @param {string} clustergroupid 舰队id
     * @param {DownloadFederationKubeconfigRequestBody} downloadFederationKubeconfigRequestBody 下载联邦kubeconfig的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public downloadFederationKubeconfig(downloadFederationKubeconfigRequest?: DownloadFederationKubeconfigRequest): Promise<DownloadFederationKubeconfigResponse> {
        const options = ParamCreater().downloadFederationKubeconfig(downloadFederationKubeconfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 舰队启用策略中心
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 舰队启用策略中心
     * @param {string} clustergroupid 容器舰队id
     * @param {string} [retry] 重试启动策略管理功能
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public enableClustergroupPolicy(enableClustergroupPolicyRequest?: EnableClustergroupPolicyRequest): Promise<EnableClustergroupPolicyResponse> {
        const options = ParamCreater().enableClustergroupPolicy(enableClustergroupPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 启用容器舰队联邦
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启用容器舰队联邦
     * @param {string} clustergroupid 容器舰队id
     * @param {boolean} [retryjoinall] 是否重试集群加入联邦
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public enableFederation(enableFederationRequest?: EnableFederationRequest): Promise<EnableFederationResponse> {
        const options = ParamCreater().enableFederation(enableFederationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 集群加入容器舰队
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 集群加入容器舰队
     * @param {string} clusterid 集群id
     * @param {string} [clusterGroupID] 集群加入目标容器舰队的id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public joinGroup(joinGroupRequest?: JoinGroupRequest): Promise<JoinGroupResponse> {
        const options = ParamCreater().joinGroup(joinGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 集群退出容器舰队
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 集群移出容器舰队
     * @param {string} clusterid 集群id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public leaveGroup(leaveGroupRequest?: LeaveGroupRequest): Promise<LeaveGroupResponse> {
        const options = ParamCreater().leaveGroup(leaveGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取插件实例列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取插件实例列表
     * @param {string} clusterId 集群id
     * @param {string} [addonTemplateName] 是否使用数据库存储的插件状态
     * @param {string} [isDatabaseStatus] 插件包名字
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
     * 获取插件模板列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取插件模板列表
     * @param {string} [version] 插件包版本号
     * @param {string} [newest] 是否获取集群内创建的最新状态
     * @param {string} [clusterId] 集群id
     * @param {string} [addonTemplateName] 插件模板名称
     * @param {string} [baseUpdateAddonVersion] 插件的最低版本
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
     * 获取所有容器舰队信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取容器舰队列表
     * @param {number} [limit] 分页获取列表时，页的大小，默认为-1
     * @param {number} [offset] 分页获取列表时，起始偏移量，默认为0
     * @param {string} [orderBy] 分页获取列表时，排序参数，支持 create_at 和 update_at
     * @param {string} [order] 分页获取列表时，排序方向，支持 desc 和 asc
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listClusterGroup(listClusterGroupRequest?: ListClusterGroupRequest): Promise<ListClusterGroupResponse> {
        const options = ParamCreater().listClusterGroup(listClusterGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取所有配置集合信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取所有配置集合信息
     * @param {string} clusterid 集群id
     * @param {number} [limit] 分页获取列表时，页的大小，默认为-1
     * @param {number} [offset] 分页获取列表时，起始偏移量，默认为0
     * @param {string} [orderBy] 分页获取列表时，排序参数，支持create_at和update_at，默认create_at： - create_at：按创建时间排序 - update_at：按更新时间排序
     * @param {string} [order] 分页获取列表时，排序方向，支持desc和asc，默认desc： - desc：降序排序 - asc：升序排序
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listConfigSets(listConfigSetsRequest?: ListConfigSetsRequest): Promise<ListConfigSetsResponse> {
        const options = ParamCreater().listConfigSets(listConfigSetsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取策略定义列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取策略定义列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPolicyDefinitions(listPolicyDefinitionsRequest?: ListPolicyDefinitionsRequest): Promise<ListPolicyDefinitionsResponse> {
        const options = ParamCreater().listPolicyDefinitions();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取策略实例列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取策略实例列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPolicyInstances(listPolicyInstancesRequest?: ListPolicyInstancesRequest): Promise<ListPolicyInstancesResponse> {
        const options = ParamCreater().listPolicyInstances();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取策略实例任务列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取策略实例任务列表
     * @param {string} [kind] 指定的任务类型，没有则使用默认值EnablePolicy
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPolicyJobs(listPolicyJobsRequest?: ListPolicyJobsRequest): Promise<ListPolicyJobsResponse> {
        const options = ParamCreater().listPolicyJobs(listPolicyJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询域名解析记录集列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询域名解析记录集列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRecordSets(listRecordSetsRequest?: ListRecordSetsRequest): Promise<ListRecordSetsResponse> {
        const options = ParamCreater().listRecordSets();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取仓库源列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取仓库源列表
     * @param {string} clusterid 集群id
     * @param {number} [limit] 分页获取列表时，页的大小，默认为-1
     * @param {number} [offset] 分页获取列表时，起始偏移量，默认为0
     * @param {string} [orderBy] 分页获取列表时，排序参数，支持create_at和update_at，默认create_at： - create_at：按创建时间排序 - update_at：按更新时间排序
     * @param {string} [order] 分页获取列表时，排序方向，支持desc和asc，默认desc： - desc：降序排序 - asc：升序排序
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRepos(listReposRequest?: ListReposRequest): Promise<ListReposResponse> {
        const options = ParamCreater().listRepos(listReposRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取权限策略列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取权限策略列表
     * @param {number} [limit] 分页获取列表时，页的大小，默认为-1
     * @param {number} [offset] 分页获取列表时，起始偏移量，默认为0
     * @param {string} [orderBy] 分页获取列表时，排序参数，支持 create_at 和 update_at
     * @param {string} [order] 分页获取列表时，排序方向，支持 desc 和 asc
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRule(listRuleRequest?: ListRuleRequest): Promise<ListRuleResponse> {
        const options = ParamCreater().listRule(listRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取各个类型集群的全局配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询服务配置信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listServerConfigs(listServerConfigsRequest?: ListServerConfigsRequest): Promise<ListServerConfigsResponse> {
        const options = ParamCreater().listServerConfigs();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 容器舰队创建API，生成容器舰队时可以选择关联的集群
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 注册容器舰队
     * @param {RegisterClusterGroupObjectMeta} metadata 
     * @param {RegisterClusterGroupSpec} [spec] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public registerClusterGroup(registerClusterGroupRequest?: RegisterClusterGroupRequest): Promise<RegisterClusterGroupResponse> {
        const options = ParamCreater().registerClusterGroup(registerClusterGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取插件实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取插件实例
     * @param {string} id 插件示例id
     * @param {string} [isDatabaseStatus] 是否使用数据库存储的插件状态
     * @param {string} [clusterId] 集群id
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
     * 获取单个容器舰队
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取单个容器舰队
     * @param {string} clustergroupid 容器舰队id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showClusterGroup(showClusterGroupRequest?: ShowClusterGroupRequest): Promise<ShowClusterGroupResponse> {
        const options = ParamCreater().showClusterGroup(showClusterGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取配置集合详细信息，包含仓库源信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取配置集合详细信息
     * @param {string} configsetid 配置集合id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showConfigSet(showConfigSetRequest?: ShowConfigSetRequest): Promise<ShowConfigSetResponse> {
        const options = ParamCreater().showConfigSet(showConfigSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询联邦开启进度
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询联邦开启进度
     * @param {string} clustergroupid 容器舰队id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showFederationProgress(showFederationProgressRequest?: ShowFederationProgressRequest): Promise<ShowFederationProgressResponse> {
        const options = ParamCreater().showFederationProgress(showFederationProgressRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 统计某个用户所有配置集合的运行状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 统计某个用户所有配置集合的运行状态
     * @param {number} [limit] 分页获取列表时，页的大小，默认为-1
     * @param {number} [offset] 分页获取列表时，起始偏移量，默认为0
     * @param {string} [orderBy] 分页获取列表时，排序参数，支持create_at和update_at，默认create_at： - create_at：按创建时间排序 - update_at：按更新时间排序
     * @param {string} [order] 分页获取列表时，排序方向，支持desc和asc，默认desc： - desc：降序排序 - asc：升序排序
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showGitopsStatistics(showGitopsStatisticsRequest?: ShowGitopsStatisticsRequest): Promise<ShowGitopsStatisticsResponse> {
        const options = ParamCreater().showGitopsStatistics(showGitopsStatisticsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取策略定义
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取策略定义
     * @param {string} policydefinitionid 策略定义id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPolicyDefinition(showPolicyDefinitionRequest?: ShowPolicyDefinitionRequest): Promise<ShowPolicyDefinitionResponse> {
        const options = ParamCreater().showPolicyDefinition(showPolicyDefinitionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定策略实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定策略实例
     * @param {string} policyinstanceid 策略实例id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPolicyInstance(showPolicyInstanceRequest?: ShowPolicyInstanceRequest): Promise<ShowPolicyInstanceResponse> {
        const options = ParamCreater().showPolicyInstance(showPolicyInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定策略实例相关任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定策略实例相关任务
     * @param {string} jobid 任务id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPolicyJob(showPolicyJobRequest?: ShowPolicyJobRequest): Promise<ShowPolicyJobResponse> {
        const options = ParamCreater().showPolicyJob(showPolicyJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询联邦工作负载
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询联邦工作负载
     * @param {string} clustergroupid 容器舰队id
     * @param {string} kind 工作负载的类型
     * @param {string} [namespace] 命名空间
     * @param {string} [name] 工作负载的名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showProxyUnitedWorkload(showProxyUnitedWorkloadRequest?: ShowProxyUnitedWorkloadRequest): Promise<ShowProxyUnitedWorkloadResponse> {
        const options = ParamCreater().showProxyUnitedWorkload(showProxyUnitedWorkloadRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取UCS配额信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取配额信息
     * @param {string} domainid 账号id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showQuota(showQuotaRequest?: ShowQuotaRequest): Promise<ShowQuotaResponse> {
        const options = ParamCreater().showQuota(showQuotaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新插件实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新插件实例
     * @param {string} id 插件实例id
     * @param {AddonInstance} updateAddonInstanceRequestBody 请求体
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
     * 更新集群所属的容器舰队description信息；需要用户对相应容器舰队有更新权限
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新容器舰队描述信息
     * @param {string} clustergroupid 容器舰队ID
     * @param {UpdateClusterGroupDescriptionRequest} [updateClusterGroupRequestBody] 更新相关的容器舰队信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateClusterGroup(updateClusterGroupRequest?: UpdateClusterGroupRequest): Promise<UpdateClusterGroupResponse> {
        const options = ParamCreater().updateClusterGroup(updateClusterGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 向容器舰队中添加集群，同批次可以添加一个或多个集群，该接口无法清空或减少管理的集群。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 向容器舰队中添加集群
     * @param {string} clustergroupid 容器舰队ID
     * @param {UpdateClusterGroupAssociatedClustersRequestBody} [updateClusterGroupAssociatedClustersRequestBody] 更新容器舰队关联的集群信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateClusterGroupAssociatedClusters(updateClusterGroupAssociatedClustersRequest?: UpdateClusterGroupAssociatedClustersRequest): Promise<UpdateClusterGroupAssociatedClustersResponse> {
        const options = ParamCreater().updateClusterGroupAssociatedClusters(updateClusterGroupAssociatedClustersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新容器舰队关联权限策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新容器舰队关联权限策略
     * @param {string} clustergroupid 容器舰队ID
     * @param {UpdateAssociatedRulesRequest} [updateClusterGroupAssociatedRulesRequestBody] 容器舰队关联权限策略的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateClusterGroupAssociatedRules(updateClusterGroupAssociatedRulesRequest?: UpdateClusterGroupAssociatedRulesRequest): Promise<UpdateClusterGroupAssociatedRulesResponse> {
        const options = ParamCreater().updateClusterGroupAssociatedRules(updateClusterGroupAssociatedRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新容器舰队的集群联邦关联的zone
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新容器舰队的联邦对应的zone
     * @param {string} clustergroupid 容器舰队id
     * @param {UpdateAssociatedZonesRequest} [updateClusterGroupAssociatedZonesRequestBody] 更新zone请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateClusterGroupAssociatedZones(updateClusterGroupAssociatedZonesRequest?: UpdateClusterGroupAssociatedZonesRequest): Promise<UpdateClusterGroupAssociatedZonesResponse> {
        const options = ParamCreater().updateClusterGroupAssociatedZones(updateClusterGroupAssociatedZonesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 仅更新配置集合，不更新仓库源
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新配置集合信息
     * @param {string} configsetid 配置集合id
     * @param {UpdateConfigSetRequestBody} [updateConfigSetRequest] 更新配置集合的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateConfigSet(updateConfigSetRequest?: UpdateConfigSetRequest): Promise<UpdateConfigSetResponse> {
        const options = ParamCreater().updateConfigSet(updateConfigSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新策略定义
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新策略定义
     * @param {string} policydefinitionid 策略定义id
     * @param {UCSConstraintTemplateTagRequest} [uCSConstraintTemplateTagRequest] 策略定义更新请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePolicyDefination(updatePolicyDefinationRequest?: UpdatePolicyDefinationRequest): Promise<UpdatePolicyDefinationResponse> {
        const options = ParamCreater().updatePolicyDefination(updatePolicyDefinationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新指定策略实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新指定策略实例
     * @param {string} policyinstanceid 策略实例id
     * @param {UCSConstraintRequest} [uCSConstraintRequest] 策略实例更新请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePolicyInstance(updatePolicyInstanceRequest?: UpdatePolicyInstanceRequest): Promise<UpdatePolicyInstanceResponse> {
        const options = ParamCreater().updatePolicyInstance(updatePolicyInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新联邦工作负载
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新联邦工作负载
     * @param {string} clustergroupid 容器舰队id
     * @param {MutiWorkload} [mutiWorkload] 待创建的工作负载信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateProxyUnitedWorkload(updateProxyUnitedWorkloadRequest?: UpdateProxyUnitedWorkloadRequest): Promise<UpdateProxyUnitedWorkloadResponse> {
        const options = ParamCreater().updateProxyUnitedWorkload(updateProxyUnitedWorkloadRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新仓库源信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新仓库源信息
     * @param {string} repoid 仓库id
     * @param {UpdateRepoRequestBody} updateRepoRequest 更新仓库的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateRepo(updateRepoRequest?: UpdateRepoRequest): Promise<UpdateRepoResponse> {
        const options = ParamCreater().updateRepo(updateRepoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新权限策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新权限策略
     * @param {string} ruleid 权限策略id
     * @param {UpdateRuleRequestBody} updateRuleRequestBody 属性
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateRule(updateRuleRequest?: UpdateRuleRequest): Promise<UpdateRuleResponse> {
        const options = ParamCreater().updateRule(updateRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 容器舰队联邦版本升级
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 升级容器舰队联邦
     * @param {string} clustergroupid 容器舰队id
     * @param {UpgradeFederationRequestBody} [upgradeFederationRequest] 联邦版本升级请求
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public upgradeFederation(upgradeFederationRequest?: UpgradeFederationRequest): Promise<UpgradeFederationResponse> {
        const options = ParamCreater().upgradeFederation(upgradeFederationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取集群安装时所需的配置信息，当前仅本地集群使用
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取集群安装时所需的配置信息
     * @param {string} clusterid 集群id
     * @param {RequiredInput} [input] 用户从前端的输入参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createClusterConf(createClusterConfRequest?: CreateClusterConfRequest): Promise<CreateClusterConfResponse> {
        const options = ParamCreater().createClusterConf(createClusterConfRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取集群kubeconfig
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取集群kubeconfig
     * @param {string} clusterid 集群id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createClusterKubeconfig(createClusterKubeconfigRequest?: CreateClusterKubeconfigRequest): Promise<CreateClusterKubeconfigResponse> {
        const options = ParamCreater().createClusterKubeconfig(createClusterKubeconfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建集群建策略实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建集群建策略实例
     * @param {string} clusterid 集群id
     * @param {UCSConstraintRequest} [uCSConstraintRequest] 策略实例创建请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createClusterPolicyInstance(createClusterPolicyInstanceRequest?: CreateClusterPolicyInstanceRequest): Promise<CreateClusterPolicyInstanceResponse> {
        const options = ParamCreater().createClusterPolicyInstance(createClusterPolicyInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用于集群解除注册；传入的cluster ID必须符合k8s UUID的格式规则；同时需要用户有对应集群的操作权限，否则会鉴权失败。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除集群
     * @param {string} clusterid 集群ID
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
     * 集群关闭策略中心
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 集群关闭策略中心
     * @param {string} clusterid 集群id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disableClusterPolicy(disableClusterPolicyRequest?: DisableClusterPolicyRequest): Promise<DisableClusterPolicyResponse> {
        const options = ParamCreater().disableClusterPolicy(disableClusterPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 卸载集群gitops插件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 卸载集群gitops插件
     * @param {string} clusterid 集群id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disableGitOps(disableGitOpsRequest?: DisableGitOpsRequest): Promise<DisableGitOpsResponse> {
        const options = ParamCreater().disableGitOps(disableGitOpsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 集群启用策略中心
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 集群启用策略中心
     * @param {string} clusterid 集群id
     * @param {string} [retry] 重试启动策略中心
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public enableClusterPolicy(enableClusterPolicyRequest?: EnableClusterPolicyRequest): Promise<EnableClusterPolicyResponse> {
        const options = ParamCreater().enableClusterPolicy(enableClusterPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 启用Gitops插件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启用Gitops插件
     * @param {string} clusterid 集群id
     * @param {string} [retry] 重试参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public enableGitOps(enableGitOpsRequest?: EnableGitOpsRequest): Promise<EnableGitOpsResponse> {
        const options = ParamCreater().enableGitOps(enableGitOpsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取当前租户的CCE集群列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取租户的CCE集群列表
     * @param {boolean} [unimported] 是否已导入到ucs
     * @param {number} [limit] 分页获取列表时，页的大小，默认为-1
     * @param {number} [offset] 分页获取列表时，起始偏移量，默认为0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listManagedClusters(listManagedClustersRequest?: ListManagedClustersRequest): Promise<ListManagedClustersResponse> {
        const options = ParamCreater().listManagedClusters(listManagedClustersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询支持接入UCS的集群版本列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询支持接入UCS的集群版本列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRegisteredClusterVersions(listRegisteredClusterVersionsRequest?: ListRegisteredClusterVersionsRequest): Promise<ListRegisteredClusterVersionsResponse> {
        const options = ParamCreater().listRegisteredClusterVersions();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 集群注册接口。支持三方集群的注册和CCE导入集群的注册。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 注册集群
     * @param {string} kind 资源类型。注册集群必须填写为Cluster。
     * @param {string} apiVersion API版本信息。现版本仅为v1。
     * @param {RegisterClusterMetadata} metadata 
     * @param {RegisterClusterSpec} spec 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public registerCluster(registerClusterRequest?: RegisterClusterRequest): Promise<RegisterClusterResponse> {
        const options = ParamCreater().registerCluster(registerClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 激活集群接口；传入的cluster ID必须符合k8s UUID的格式规则；同时需要用户有对应集群的更新权限，否则会鉴权失败
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 激活集群
     * @param {string} clusterid 集群ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public retryClusterActivation(retryClusterActivationRequest?: RetryClusterActivationRequest): Promise<RetryClusterActivationResponse> {
        const options = ParamCreater().retryClusterActivation(retryClusterActivationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取集群信息。传入的cluster ID必须符合k8s UUID的格式规则；同时需要用户有对应集群的获取权限，否则会鉴权失败
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取单个集群
     * @param {string} clusterid 集群ID
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
     * 该API接口用于获取集群接入信息；传入的cluster ID必须符合k8s UUID的格式规则；同时需要用户有对应集群证书的获取权限，否则会鉴权失败；agent证书只可以下载一次。仅用于获取三方集群的集群接入信息，CCE集群不从该接口获取，如果传入CCE集群ID，返回码为400
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取集群接入信息
     * @param {string} clusterid 集群ID
     * @param {string} [vpcendpoint] VPC终端节点的IP地址。私网接入的集群必填，且必须是打通线下集群的VPC终端节点。  创建VPC终端节点及查询IP地址的方法请参见[创建终端节点](https://support.huaweicloud.com/usermanual-ucs/ucs_01_0336.html#section2)。
     * @param {string} [region] 接入region，私网接入的集群必填
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showClusterAccessInfo(showClusterAccessInfoRequest?: ShowClusterAccessInfoRequest): Promise<ShowClusterAccessInfoResponse> {
        const options = ParamCreater().showClusterAccessInfo(showClusterAccessInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取集群信息列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取集群列表
     * @param {string} [category] 获取特定category的集群。
     * @param {boolean} [enablestatus] 是否获取集群的资源信息。不填或者填写为true为获取集群资源汇总信息，置为false为不获取集群状态信息；缺省值为true
     * @param {string} [clustergroupid] 容器舰队ID。不填会返回用户所有集群，填了之后会返回属于该容器舰队的集群。
     * @param {number} [limit] 分页获取列表时，页的大小，默认为-1
     * @param {number} [offset] 分页获取列表时，起始偏移量，默认为0
     * @param {string} [orderBy] 分页获取列表时，排序参数，支持 create_at 和 update_at
     * @param {string} [order] 分页获取列表时，排序方向，支持 desc 和 asc
     * @param {string} [managetype] 获取集群列表时，根据集群类型筛选，不传参时默认为 all ，支持 all ，grouped，discrete 三种类型。 - grouped：在舰队中纳管的集群 - discrete：未加入舰队的集群 - all：所有集群
     * @param {string} [clusterids] 集群ID。多个ID以英文逗号分隔。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showClusterList(showClusterListRequest?: ShowClusterListRequest): Promise<ShowClusterListResponse> {
        const options = ParamCreater().showClusterList(showClusterListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取gitops启用进展
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取gitops启用进展
     * @param {string} clusterid 集群id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showGitOpsStatus(showGitOpsStatusRequest?: ShowGitOpsStatusRequest): Promise<ShowGitOpsStatusResponse> {
        const options = ParamCreater().showGitOpsStatus(showGitOpsStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新集群。当前仅允许更新附着集群和本地集群的国家/城市，允许更新多云集群的工作节点个数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新集群
     * @param {string} clusterid 集群ID
     * @param {UpdateClusterRequestBody} updateClusterRequestBody 更新集群的信息
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
     * 集群关联权限策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 集群关联权限策略
     * @param {string} clusterid 集群id
     * @param {UpdateAssociatedRulesRequest} updateClusterRulesRequestBody 更新关联权限的请求结构体信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateClusterRules(updateClusterRulesRequest?: UpdateClusterRulesRequest): Promise<UpdateClusterRulesResponse> {
        const options = ParamCreater().updateClusterRules(updateClusterRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 安装插件实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAddonInstance(createAddonInstanceRequest?: CreateAddonInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v1/addons",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createAddonInstanceRequest !== null && createAddonInstanceRequest !== undefined) {
                if (createAddonInstanceRequest instanceof CreateAddonInstanceRequest) {
                    body = createAddonInstanceRequest.body
                } else {
                    body = createAddonInstanceRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建舰队策略实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createClusterGroupPolicyInstance(createClusterGroupPolicyInstanceRequest?: CreateClusterGroupPolicyInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v1/clustergroups/{clustergroupid}/policyinstance",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clustergroupid;

            if (createClusterGroupPolicyInstanceRequest !== null && createClusterGroupPolicyInstanceRequest !== undefined) {
                if (createClusterGroupPolicyInstanceRequest instanceof CreateClusterGroupPolicyInstanceRequest) {
                    clustergroupid = createClusterGroupPolicyInstanceRequest.clustergroupid;
                    body = createClusterGroupPolicyInstanceRequest.body
                } else {
                    clustergroupid = createClusterGroupPolicyInstanceRequest['clustergroupid'];
                    body = createClusterGroupPolicyInstanceRequest['body'];
                }
            }

        
            if (clustergroupid === null || clustergroupid === undefined) {
            throw new RequiredError('clustergroupid','Required parameter clustergroupid was null or undefined when calling createClusterGroupPolicyInstance.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'clustergroupid': clustergroupid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建配置集合
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createConfigSet(createConfigSetRequest?: CreateConfigSetRequest) {
            const options = {
                method: "POST",
                url: "/v1/configsets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createConfigSetRequest !== null && createConfigSetRequest !== undefined) {
                if (createConfigSetRequest instanceof CreateConfigSetRequest) {
                    body = createConfigSetRequest.body
                } else {
                    body = createConfigSetRequest['body'];
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
         * 舰队开通联邦后，调用此接口，创建vpcep终端节点，连接到联邦apiserver，并下载联邦apiserver的kubeconfig
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createFederationCert(createFederationCertRequest?: CreateFederationCertRequest) {
            const options = {
                method: "POST",
                url: "/v1/clustergroups/{clustergroupid}/cert",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clustergroupid;

            if (createFederationCertRequest !== null && createFederationCertRequest !== undefined) {
                if (createFederationCertRequest instanceof CreateFederationCertRequest) {
                    clustergroupid = createFederationCertRequest.clustergroupid;
                    body = createFederationCertRequest.body
                } else {
                    clustergroupid = createFederationCertRequest['clustergroupid'];
                    body = createFederationCertRequest['body'];
                }
            }

        
            if (clustergroupid === null || clustergroupid === undefined) {
            throw new RequiredError('clustergroupid','Required parameter clustergroupid was null or undefined when calling createFederationCert.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'clustergroupid': clustergroupid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 舰队开通联邦后，创建vpcep终端节点连接到联邦apiserver
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createFederationConnection(createFederationConnectionRequest?: CreateFederationConnectionRequest) {
            const options = {
                method: "POST",
                url: "/v1/clustergroups/{clustergroupid}/connection",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clustergroupid;

            if (createFederationConnectionRequest !== null && createFederationConnectionRequest !== undefined) {
                if (createFederationConnectionRequest instanceof CreateFederationConnectionRequest) {
                    clustergroupid = createFederationConnectionRequest.clustergroupid;
                    body = createFederationConnectionRequest.body
                } else {
                    clustergroupid = createFederationConnectionRequest['clustergroupid'];
                    body = createFederationConnectionRequest['body'];
                }
            }

        
            if (clustergroupid === null || clustergroupid === undefined) {
            throw new RequiredError('clustergroupid','Required parameter clustergroupid was null or undefined when calling createFederationConnection.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'clustergroupid': clustergroupid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建联邦工作负载
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createProxyUnitedWorkload(createProxyUnitedWorkloadRequest?: CreateProxyUnitedWorkloadRequest) {
            const options = {
                method: "POST",
                url: "/v1/clustergroups/{clustergroupid}/unitedworkload",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clustergroupid;

            if (createProxyUnitedWorkloadRequest !== null && createProxyUnitedWorkloadRequest !== undefined) {
                if (createProxyUnitedWorkloadRequest instanceof CreateProxyUnitedWorkloadRequest) {
                    clustergroupid = createProxyUnitedWorkloadRequest.clustergroupid;
                    body = createProxyUnitedWorkloadRequest.body
                } else {
                    clustergroupid = createProxyUnitedWorkloadRequest['clustergroupid'];
                    body = createProxyUnitedWorkloadRequest['body'];
                }
            }

        
            if (clustergroupid === null || clustergroupid === undefined) {
            throw new RequiredError('clustergroupid','Required parameter clustergroupid was null or undefined when calling createProxyUnitedWorkload.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'clustergroupid': clustergroupid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建域名解析记录集
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createRecordSet(createRecordSetRequest?: CreateRecordSetRequest) {
            const options = {
                method: "POST",
                url: "/v1/traffic/recordsets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xZoneProjectID;
            
            let xZoneID;

            if (createRecordSetRequest !== null && createRecordSetRequest !== undefined) {
                if (createRecordSetRequest instanceof CreateRecordSetRequest) {
                    xZoneProjectID = createRecordSetRequest.xZoneProjectID;
                    xZoneID = createRecordSetRequest.xZoneID;
                    body = createRecordSetRequest.body
                } else {
                    xZoneProjectID = createRecordSetRequest['X-Zone-Project-ID'];
                    xZoneID = createRecordSetRequest['X-Zone-ID'];
                    body = createRecordSetRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xZoneProjectID !== undefined && xZoneProjectID !== null) {
                localVarHeaderParameter['X-Zone-Project-ID'] = String(xZoneProjectID);
            }
            if (xZoneID !== undefined && xZoneID !== null) {
                localVarHeaderParameter['X-Zone-ID'] = String(xZoneID);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建仓库源
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createRepo(createRepoRequest?: CreateRepoRequest) {
            const options = {
                method: "POST",
                url: "/v1/configsets/repos",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createRepoRequest !== null && createRepoRequest !== undefined) {
                if (createRepoRequest instanceof CreateRepoRequest) {
                    body = createRepoRequest.body
                } else {
                    body = createRepoRequest['body'];
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
         * 创建权限策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createRule(createRuleRequest?: CreateRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/permissions/rules",
                contentType: "application/x-www-form-urlencoded",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            const localVarFormParams = new URLSearchParams();
            let metadata;
            
            let spec;
            

            if (createRuleRequest !== null && createRuleRequest !== undefined) {
                if (createRuleRequest instanceof CreateRuleRequest) {
                    metadata = createRuleRequest.body?.metadata;
                    spec = createRuleRequest.body?.spec;
                } else {
                    metadata = createRuleRequest['body']['metadata'];
                    spec = createRuleRequest['body']['spec'];
                }
            }

        
            if (metadata === null || metadata === undefined) {
            throw new RequiredError('metadata','Required parameter metadata was null or undefined when calling createRule.');
            }
            if (spec === null || spec === undefined) {
            throw new RequiredError('spec','Required parameter spec was null or undefined when calling createRule.');
            }
            if (metadata !== undefined) { 
                localVarFormParams.set('metadata', metadata as any);
            }
            if (spec !== undefined) { 
                localVarFormParams.set('spec', spec as any);
            }
            options.data = localVarFormParams.toString();
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 卸载插件实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAddonInstance(deleteAddonInstanceRequest?: DeleteAddonInstanceRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/addons/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let id;
            
            let clusterId;

            if (deleteAddonInstanceRequest !== null && deleteAddonInstanceRequest !== undefined) {
                if (deleteAddonInstanceRequest instanceof DeleteAddonInstanceRequest) {
                    id = deleteAddonInstanceRequest.id;
                    clusterId = deleteAddonInstanceRequest.clusterId;
                } else {
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

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 容器舰队删除接口，只有在容器舰队为空时才可以删除该容器舰队，若需删除请先将集群移出容器舰队；传入的cluster ID必须符合k8s UUID的格式规则；同时需要用户有对应集群的操作权限，否则会鉴权失败
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteClusterGroup(deleteClusterGroupRequest?: DeleteClusterGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/clustergroups/{clustergroupid}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clustergroupid;

            if (deleteClusterGroupRequest !== null && deleteClusterGroupRequest !== undefined) {
                if (deleteClusterGroupRequest instanceof DeleteClusterGroupRequest) {
                    clustergroupid = deleteClusterGroupRequest.clustergroupid;
                } else {
                    clustergroupid = deleteClusterGroupRequest['clustergroupid'];
                }
            }

        
            if (clustergroupid === null || clustergroupid === undefined) {
            throw new RequiredError('clustergroupid','Required parameter clustergroupid was null or undefined when calling deleteClusterGroup.');
            }

            options.pathParams = { 'clustergroupid': clustergroupid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 仅删除配置集合，不删除仓库源
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteConfigSet(deleteConfigSetRequest?: DeleteConfigSetRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/configsets/{configsetid}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let configsetid;

            if (deleteConfigSetRequest !== null && deleteConfigSetRequest !== undefined) {
                if (deleteConfigSetRequest instanceof DeleteConfigSetRequest) {
                    configsetid = deleteConfigSetRequest.configsetid;
                } else {
                    configsetid = deleteConfigSetRequest['configsetid'];
                }
            }

        
            if (configsetid === null || configsetid === undefined) {
            throw new RequiredError('configsetid','Required parameter configsetid was null or undefined when calling deleteConfigSet.');
            }

            options.pathParams = { 'configsetid': configsetid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定策略实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePolicyInstance(deletePolicyInstanceRequest?: DeletePolicyInstanceRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/policyinstances/{policyinstanceid}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let policyinstanceid;

            if (deletePolicyInstanceRequest !== null && deletePolicyInstanceRequest !== undefined) {
                if (deletePolicyInstanceRequest instanceof DeletePolicyInstanceRequest) {
                    policyinstanceid = deletePolicyInstanceRequest.policyinstanceid;
                } else {
                    policyinstanceid = deletePolicyInstanceRequest['policyinstanceid'];
                }
            }

        
            if (policyinstanceid === null || policyinstanceid === undefined) {
            throw new RequiredError('policyinstanceid','Required parameter policyinstanceid was null or undefined when calling deletePolicyInstance.');
            }

            options.pathParams = { 'policyinstanceid': policyinstanceid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除联邦工作负载
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteProxyUnitedWorkload(deleteProxyUnitedWorkloadRequest?: DeleteProxyUnitedWorkloadRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/clustergroups/{clustergroupid}/unitedworkload",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clustergroupid;
            
            let kind;
            
            let namespace;
            
            let name;

            if (deleteProxyUnitedWorkloadRequest !== null && deleteProxyUnitedWorkloadRequest !== undefined) {
                if (deleteProxyUnitedWorkloadRequest instanceof DeleteProxyUnitedWorkloadRequest) {
                    clustergroupid = deleteProxyUnitedWorkloadRequest.clustergroupid;
                    kind = deleteProxyUnitedWorkloadRequest.kind;
                    namespace = deleteProxyUnitedWorkloadRequest.namespace;
                    name = deleteProxyUnitedWorkloadRequest.name;
                } else {
                    clustergroupid = deleteProxyUnitedWorkloadRequest['clustergroupid'];
                    kind = deleteProxyUnitedWorkloadRequest['kind'];
                    namespace = deleteProxyUnitedWorkloadRequest['namespace'];
                    name = deleteProxyUnitedWorkloadRequest['name'];
                }
            }

        
            if (clustergroupid === null || clustergroupid === undefined) {
            throw new RequiredError('clustergroupid','Required parameter clustergroupid was null or undefined when calling deleteProxyUnitedWorkload.');
            }
            if (kind === null || kind === undefined) {
                throw new RequiredError('kind','Required parameter kind was null or undefined when calling deleteProxyUnitedWorkload.');
            }
            if (kind !== null && kind !== undefined) {
                localVarQueryParameter['kind'] = kind;
            }
            if (namespace !== null && namespace !== undefined) {
                localVarQueryParameter['namespace'] = namespace;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'clustergroupid': clustergroupid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除仓库源
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteRepo(deleteRepoRequest?: DeleteRepoRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/configsets/repos/{repoid}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let repoid;

            if (deleteRepoRequest !== null && deleteRepoRequest !== undefined) {
                if (deleteRepoRequest instanceof DeleteRepoRequest) {
                    repoid = deleteRepoRequest.repoid;
                } else {
                    repoid = deleteRepoRequest['repoid'];
                }
            }

        
            if (repoid === null || repoid === undefined) {
            throw new RequiredError('repoid','Required parameter repoid was null or undefined when calling deleteRepo.');
            }

            options.pathParams = { 'repoid': repoid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除权限策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteRule(deleteRuleRequest?: DeleteRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/permissions/rules/{ruleid}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let ruleid;

            if (deleteRuleRequest !== null && deleteRuleRequest !== undefined) {
                if (deleteRuleRequest instanceof DeleteRuleRequest) {
                    ruleid = deleteRuleRequest.ruleid;
                } else {
                    ruleid = deleteRuleRequest['ruleid'];
                }
            }

        
            if (ruleid === null || ruleid === undefined) {
            throw new RequiredError('ruleid','Required parameter ruleid was null or undefined when calling deleteRule.');
            }

            options.pathParams = { 'ruleid': ruleid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 舰队关闭策略中心
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disableClustergroupPolicy(disableClustergroupPolicyRequest?: DisableClustergroupPolicyRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/clustergroups/{clustergroupid}/policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clustergroupid;

            if (disableClustergroupPolicyRequest !== null && disableClustergroupPolicyRequest !== undefined) {
                if (disableClustergroupPolicyRequest instanceof DisableClustergroupPolicyRequest) {
                    clustergroupid = disableClustergroupPolicyRequest.clustergroupid;
                } else {
                    clustergroupid = disableClustergroupPolicyRequest['clustergroupid'];
                }
            }

        
            if (clustergroupid === null || clustergroupid === undefined) {
            throw new RequiredError('clustergroupid','Required parameter clustergroupid was null or undefined when calling disableClustergroupPolicy.');
            }

            options.pathParams = { 'clustergroupid': clustergroupid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 关闭容器舰队联邦
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disableFederation(disableFederationRequest?: DisableFederationRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/clustergroups/{clustergroupid}/federations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clustergroupid;

            if (disableFederationRequest !== null && disableFederationRequest !== undefined) {
                if (disableFederationRequest instanceof DisableFederationRequest) {
                    clustergroupid = disableFederationRequest.clustergroupid;
                } else {
                    clustergroupid = disableFederationRequest['clustergroupid'];
                }
            }

        
            if (clustergroupid === null || clustergroupid === undefined) {
            throw new RequiredError('clustergroupid','Required parameter clustergroupid was null or undefined when calling disableFederation.');
            }

            options.pathParams = { 'clustergroupid': clustergroupid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 舰队开通联邦并且创建网络连接之后，可以使用此接口下载联邦的kubeconfig
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        downloadFederationKubeconfig(downloadFederationKubeconfigRequest?: DownloadFederationKubeconfigRequest) {
            const options = {
                method: "POST",
                url: "/v1/clustergroups/{clustergroupid}/kubeconfig",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clustergroupid;

            if (downloadFederationKubeconfigRequest !== null && downloadFederationKubeconfigRequest !== undefined) {
                if (downloadFederationKubeconfigRequest instanceof DownloadFederationKubeconfigRequest) {
                    clustergroupid = downloadFederationKubeconfigRequest.clustergroupid;
                    body = downloadFederationKubeconfigRequest.body
                } else {
                    clustergroupid = downloadFederationKubeconfigRequest['clustergroupid'];
                    body = downloadFederationKubeconfigRequest['body'];
                }
            }

        
            if (clustergroupid === null || clustergroupid === undefined) {
            throw new RequiredError('clustergroupid','Required parameter clustergroupid was null or undefined when calling downloadFederationKubeconfig.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'clustergroupid': clustergroupid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 舰队启用策略中心
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        enableClustergroupPolicy(enableClustergroupPolicyRequest?: EnableClustergroupPolicyRequest) {
            const options = {
                method: "POST",
                url: "/v1/clustergroups/{clustergroupid}/policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clustergroupid;
            
            let retry;

            if (enableClustergroupPolicyRequest !== null && enableClustergroupPolicyRequest !== undefined) {
                if (enableClustergroupPolicyRequest instanceof EnableClustergroupPolicyRequest) {
                    clustergroupid = enableClustergroupPolicyRequest.clustergroupid;
                    retry = enableClustergroupPolicyRequest.retry;
                } else {
                    clustergroupid = enableClustergroupPolicyRequest['clustergroupid'];
                    retry = enableClustergroupPolicyRequest['retry'];
                }
            }

        
            if (clustergroupid === null || clustergroupid === undefined) {
            throw new RequiredError('clustergroupid','Required parameter clustergroupid was null or undefined when calling enableClustergroupPolicy.');
            }
            if (retry !== null && retry !== undefined) {
                localVarQueryParameter['retry'] = retry;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'clustergroupid': clustergroupid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 启用容器舰队联邦
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        enableFederation(enableFederationRequest?: EnableFederationRequest) {
            const options = {
                method: "POST",
                url: "/v1/clustergroups/{clustergroupid}/federations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clustergroupid;
            
            let retryjoinall;

            if (enableFederationRequest !== null && enableFederationRequest !== undefined) {
                if (enableFederationRequest instanceof EnableFederationRequest) {
                    clustergroupid = enableFederationRequest.clustergroupid;
                    retryjoinall = enableFederationRequest.retryjoinall;
                } else {
                    clustergroupid = enableFederationRequest['clustergroupid'];
                    retryjoinall = enableFederationRequest['retryjoinall'];
                }
            }

        
            if (clustergroupid === null || clustergroupid === undefined) {
            throw new RequiredError('clustergroupid','Required parameter clustergroupid was null or undefined when calling enableFederation.');
            }
            if (retryjoinall !== null && retryjoinall !== undefined) {
                localVarQueryParameter['retryjoinall'] = retryjoinall;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'clustergroupid': clustergroupid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 集群加入容器舰队
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        joinGroup(joinGroupRequest?: JoinGroupRequest) {
            const options = {
                method: "POST",
                url: "/v1/clusters/{clusterid}/join",
                contentType: "application/x-www-form-urlencoded",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            const localVarFormParams = new URLSearchParams();
            
            let clusterid;
            let clusterGroupID;
            

            if (joinGroupRequest !== null && joinGroupRequest !== undefined) {
                if (joinGroupRequest instanceof JoinGroupRequest) {
                    clusterid = joinGroupRequest.clusterid;
                    clusterGroupID = joinGroupRequest.body?.clusterGroupID;
                } else {
                    clusterid = joinGroupRequest['clusterid'];
                    clusterGroupID = joinGroupRequest['body']['clusterGroupID'];
                }
            }

        
            if (clusterid === null || clusterid === undefined) {
            throw new RequiredError('clusterid','Required parameter clusterid was null or undefined when calling joinGroup.');
            }
            if (clusterGroupID !== undefined) { 
                localVarFormParams.set('clusterGroupID', clusterGroupID as any);
            }
            options.data = localVarFormParams.toString();
            options.pathParams = { 'clusterid': clusterid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 集群退出容器舰队
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        leaveGroup(leaveGroupRequest?: LeaveGroupRequest) {
            const options = {
                method: "POST",
                url: "/v1/clusters/{clusterid}/unjoin",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterid;

            if (leaveGroupRequest !== null && leaveGroupRequest !== undefined) {
                if (leaveGroupRequest instanceof LeaveGroupRequest) {
                    clusterid = leaveGroupRequest.clusterid;
                } else {
                    clusterid = leaveGroupRequest['clusterid'];
                }
            }

        
            if (clusterid === null || clusterid === undefined) {
            throw new RequiredError('clusterid','Required parameter clusterid was null or undefined when calling leaveGroup.');
            }

            options.pathParams = { 'clusterid': clusterid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取插件实例列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAddonInstances(listAddonInstancesRequest?: ListAddonInstancesRequest) {
            const options = {
                method: "GET",
                url: "/v1/addons",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let addonTemplateName;
            
            let isDatabaseStatus;

            if (listAddonInstancesRequest !== null && listAddonInstancesRequest !== undefined) {
                if (listAddonInstancesRequest instanceof ListAddonInstancesRequest) {
                    clusterId = listAddonInstancesRequest.clusterId;
                    addonTemplateName = listAddonInstancesRequest.addonTemplateName;
                    isDatabaseStatus = listAddonInstancesRequest.isDatabaseStatus;
                } else {
                    clusterId = listAddonInstancesRequest['cluster_id'];
                    addonTemplateName = listAddonInstancesRequest['addon_template_name'];
                    isDatabaseStatus = listAddonInstancesRequest['is_database_status'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
                throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listAddonInstances.');
            }
            if (clusterId !== null && clusterId !== undefined) {
                localVarQueryParameter['cluster_id'] = clusterId;
            }
            if (addonTemplateName !== null && addonTemplateName !== undefined) {
                localVarQueryParameter['addon_template_name'] = addonTemplateName;
            }
            if (isDatabaseStatus !== null && isDatabaseStatus !== undefined) {
                localVarQueryParameter['is_database_status'] = isDatabaseStatus;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取插件模板列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAddonTemplates(listAddonTemplatesRequest?: ListAddonTemplatesRequest) {
            const options = {
                method: "GET",
                url: "/v1/addontemplates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let version;
            
            let newest;
            
            let clusterId;
            
            let addonTemplateName;
            
            let baseUpdateAddonVersion;

            if (listAddonTemplatesRequest !== null && listAddonTemplatesRequest !== undefined) {
                if (listAddonTemplatesRequest instanceof ListAddonTemplatesRequest) {
                    version = listAddonTemplatesRequest.version;
                    newest = listAddonTemplatesRequest.newest;
                    clusterId = listAddonTemplatesRequest.clusterId;
                    addonTemplateName = listAddonTemplatesRequest.addonTemplateName;
                    baseUpdateAddonVersion = listAddonTemplatesRequest.baseUpdateAddonVersion;
                } else {
                    version = listAddonTemplatesRequest['version'];
                    newest = listAddonTemplatesRequest['newest'];
                    clusterId = listAddonTemplatesRequest['cluster_id'];
                    addonTemplateName = listAddonTemplatesRequest['addon_template_name'];
                    baseUpdateAddonVersion = listAddonTemplatesRequest['base_update_addon_version'];
                }
            }

        
            if (version !== null && version !== undefined) {
                localVarQueryParameter['version'] = version;
            }
            if (newest !== null && newest !== undefined) {
                localVarQueryParameter['newest'] = newest;
            }
            if (clusterId !== null && clusterId !== undefined) {
                localVarQueryParameter['cluster_id'] = clusterId;
            }
            if (addonTemplateName !== null && addonTemplateName !== undefined) {
                localVarQueryParameter['addon_template_name'] = addonTemplateName;
            }
            if (baseUpdateAddonVersion !== null && baseUpdateAddonVersion !== undefined) {
                localVarQueryParameter['base_update_addon_version'] = baseUpdateAddonVersion;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取所有容器舰队信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listClusterGroup(listClusterGroupRequest?: ListClusterGroupRequest) {
            const options = {
                method: "GET",
                url: "/v1/clustergroups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;
            
            let orderBy;
            
            let order;

            if (listClusterGroupRequest !== null && listClusterGroupRequest !== undefined) {
                if (listClusterGroupRequest instanceof ListClusterGroupRequest) {
                    limit = listClusterGroupRequest.limit;
                    offset = listClusterGroupRequest.offset;
                    orderBy = listClusterGroupRequest.orderBy;
                    order = listClusterGroupRequest.order;
                } else {
                    limit = listClusterGroupRequest['limit'];
                    offset = listClusterGroupRequest['offset'];
                    orderBy = listClusterGroupRequest['order_by'];
                    order = listClusterGroupRequest['order'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (orderBy !== null && orderBy !== undefined) {
                localVarQueryParameter['order_by'] = orderBy;
            }
            if (order !== null && order !== undefined) {
                localVarQueryParameter['order'] = order;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取所有配置集合信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listConfigSets(listConfigSetsRequest?: ListConfigSetsRequest) {
            const options = {
                method: "GET",
                url: "/v1/configsets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterid;
            
            let limit;
            
            let offset;
            
            let orderBy;
            
            let order;

            if (listConfigSetsRequest !== null && listConfigSetsRequest !== undefined) {
                if (listConfigSetsRequest instanceof ListConfigSetsRequest) {
                    clusterid = listConfigSetsRequest.clusterid;
                    limit = listConfigSetsRequest.limit;
                    offset = listConfigSetsRequest.offset;
                    orderBy = listConfigSetsRequest.orderBy;
                    order = listConfigSetsRequest.order;
                } else {
                    clusterid = listConfigSetsRequest['clusterid'];
                    limit = listConfigSetsRequest['limit'];
                    offset = listConfigSetsRequest['offset'];
                    orderBy = listConfigSetsRequest['order_by'];
                    order = listConfigSetsRequest['order'];
                }
            }

        
            if (clusterid === null || clusterid === undefined) {
                throw new RequiredError('clusterid','Required parameter clusterid was null or undefined when calling listConfigSets.');
            }
            if (clusterid !== null && clusterid !== undefined) {
                localVarQueryParameter['clusterid'] = clusterid;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (orderBy !== null && orderBy !== undefined) {
                localVarQueryParameter['order_by'] = orderBy;
            }
            if (order !== null && order !== undefined) {
                localVarQueryParameter['order'] = order;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取策略定义列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPolicyDefinitions() {
            const options = {
                method: "GET",
                url: "/v1/policydefinitions",
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
         * 获取策略实例列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPolicyInstances() {
            const options = {
                method: "GET",
                url: "/v1/policyinstances",
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
         * 获取策略实例任务列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPolicyJobs(listPolicyJobsRequest?: ListPolicyJobsRequest) {
            const options = {
                method: "GET",
                url: "/v1/policy/jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let kind;

            if (listPolicyJobsRequest !== null && listPolicyJobsRequest !== undefined) {
                if (listPolicyJobsRequest instanceof ListPolicyJobsRequest) {
                    kind = listPolicyJobsRequest.kind;
                } else {
                    kind = listPolicyJobsRequest['kind'];
                }
            }

        
            if (kind !== null && kind !== undefined) {
                localVarQueryParameter['kind'] = kind;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询域名解析记录集列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRecordSets() {
            const options = {
                method: "GET",
                url: "/v1/traffic/recordsets",
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
         * 获取仓库源列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRepos(listReposRequest?: ListReposRequest) {
            const options = {
                method: "GET",
                url: "/v1/configsets/repos",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterid;
            
            let limit;
            
            let offset;
            
            let orderBy;
            
            let order;

            if (listReposRequest !== null && listReposRequest !== undefined) {
                if (listReposRequest instanceof ListReposRequest) {
                    clusterid = listReposRequest.clusterid;
                    limit = listReposRequest.limit;
                    offset = listReposRequest.offset;
                    orderBy = listReposRequest.orderBy;
                    order = listReposRequest.order;
                } else {
                    clusterid = listReposRequest['clusterid'];
                    limit = listReposRequest['limit'];
                    offset = listReposRequest['offset'];
                    orderBy = listReposRequest['order_by'];
                    order = listReposRequest['order'];
                }
            }

        
            if (clusterid === null || clusterid === undefined) {
                throw new RequiredError('clusterid','Required parameter clusterid was null or undefined when calling listRepos.');
            }
            if (clusterid !== null && clusterid !== undefined) {
                localVarQueryParameter['clusterid'] = clusterid;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (orderBy !== null && orderBy !== undefined) {
                localVarQueryParameter['order_by'] = orderBy;
            }
            if (order !== null && order !== undefined) {
                localVarQueryParameter['order'] = order;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取权限策略列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRule(listRuleRequest?: ListRuleRequest) {
            const options = {
                method: "GET",
                url: "/v1/permissions/rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;
            
            let orderBy;
            
            let order;

            if (listRuleRequest !== null && listRuleRequest !== undefined) {
                if (listRuleRequest instanceof ListRuleRequest) {
                    limit = listRuleRequest.limit;
                    offset = listRuleRequest.offset;
                    orderBy = listRuleRequest.orderBy;
                    order = listRuleRequest.order;
                } else {
                    limit = listRuleRequest['limit'];
                    offset = listRuleRequest['offset'];
                    orderBy = listRuleRequest['order_by'];
                    order = listRuleRequest['order'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (orderBy !== null && orderBy !== undefined) {
                localVarQueryParameter['order_by'] = orderBy;
            }
            if (order !== null && order !== undefined) {
                localVarQueryParameter['order'] = order;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取各个类型集群的全局配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listServerConfigs() {
            const options = {
                method: "GET",
                url: "/v1/serverconfig",
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
         * 容器舰队创建API，生成容器舰队时可以选择关联的集群
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        registerClusterGroup(registerClusterGroupRequest?: RegisterClusterGroupRequest) {
            const options = {
                method: "POST",
                url: "/v1/clustergroups",
                contentType: "application/x-www-form-urlencoded",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            const localVarFormParams = new URLSearchParams();
            let metadata;
            
            let spec;
            

            if (registerClusterGroupRequest !== null && registerClusterGroupRequest !== undefined) {
                if (registerClusterGroupRequest instanceof RegisterClusterGroupRequest) {
                    metadata = registerClusterGroupRequest.body?.metadata;
                    spec = registerClusterGroupRequest.body?.spec;
                } else {
                    metadata = registerClusterGroupRequest['body']['metadata'];
                    spec = registerClusterGroupRequest['body']['spec'];
                }
            }

        
            if (metadata === null || metadata === undefined) {
            throw new RequiredError('metadata','Required parameter metadata was null or undefined when calling registerClusterGroup.');
            }
            if (metadata !== undefined) { 
                localVarFormParams.set('metadata', metadata as any);
            }
            if (spec !== undefined) { 
                localVarFormParams.set('spec', spec as any);
            }
            options.data = localVarFormParams.toString();
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取插件实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAddonInstance(showAddonInstanceRequest?: ShowAddonInstanceRequest) {
            const options = {
                method: "GET",
                url: "/v1/addons/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let id;
            
            let isDatabaseStatus;
            
            let clusterId;

            if (showAddonInstanceRequest !== null && showAddonInstanceRequest !== undefined) {
                if (showAddonInstanceRequest instanceof ShowAddonInstanceRequest) {
                    id = showAddonInstanceRequest.id;
                    isDatabaseStatus = showAddonInstanceRequest.isDatabaseStatus;
                    clusterId = showAddonInstanceRequest.clusterId;
                } else {
                    id = showAddonInstanceRequest['id'];
                    isDatabaseStatus = showAddonInstanceRequest['is_database_status'];
                    clusterId = showAddonInstanceRequest['cluster_id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showAddonInstance.');
            }
            if (isDatabaseStatus !== null && isDatabaseStatus !== undefined) {
                localVarQueryParameter['is_database_status'] = isDatabaseStatus;
            }
            if (clusterId !== null && clusterId !== undefined) {
                localVarQueryParameter['cluster_id'] = clusterId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取单个容器舰队
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showClusterGroup(showClusterGroupRequest?: ShowClusterGroupRequest) {
            const options = {
                method: "GET",
                url: "/v1/clustergroups/{clustergroupid}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clustergroupid;

            if (showClusterGroupRequest !== null && showClusterGroupRequest !== undefined) {
                if (showClusterGroupRequest instanceof ShowClusterGroupRequest) {
                    clustergroupid = showClusterGroupRequest.clustergroupid;
                } else {
                    clustergroupid = showClusterGroupRequest['clustergroupid'];
                }
            }

        
            if (clustergroupid === null || clustergroupid === undefined) {
            throw new RequiredError('clustergroupid','Required parameter clustergroupid was null or undefined when calling showClusterGroup.');
            }

            options.pathParams = { 'clustergroupid': clustergroupid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取配置集合详细信息，包含仓库源信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showConfigSet(showConfigSetRequest?: ShowConfigSetRequest) {
            const options = {
                method: "GET",
                url: "/v1/configsets/{configsetid}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let configsetid;

            if (showConfigSetRequest !== null && showConfigSetRequest !== undefined) {
                if (showConfigSetRequest instanceof ShowConfigSetRequest) {
                    configsetid = showConfigSetRequest.configsetid;
                } else {
                    configsetid = showConfigSetRequest['configsetid'];
                }
            }

        
            if (configsetid === null || configsetid === undefined) {
            throw new RequiredError('configsetid','Required parameter configsetid was null or undefined when calling showConfigSet.');
            }

            options.pathParams = { 'configsetid': configsetid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询联邦开启进度
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showFederationProgress(showFederationProgressRequest?: ShowFederationProgressRequest) {
            const options = {
                method: "GET",
                url: "/v1/clustergroups/{clustergroupid}/federations/progress",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clustergroupid;

            if (showFederationProgressRequest !== null && showFederationProgressRequest !== undefined) {
                if (showFederationProgressRequest instanceof ShowFederationProgressRequest) {
                    clustergroupid = showFederationProgressRequest.clustergroupid;
                } else {
                    clustergroupid = showFederationProgressRequest['clustergroupid'];
                }
            }

        
            if (clustergroupid === null || clustergroupid === undefined) {
            throw new RequiredError('clustergroupid','Required parameter clustergroupid was null or undefined when calling showFederationProgress.');
            }

            options.pathParams = { 'clustergroupid': clustergroupid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 统计某个用户所有配置集合的运行状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showGitopsStatistics(showGitopsStatisticsRequest?: ShowGitopsStatisticsRequest) {
            const options = {
                method: "GET",
                url: "/v1/configsets/statistics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;
            
            let orderBy;
            
            let order;

            if (showGitopsStatisticsRequest !== null && showGitopsStatisticsRequest !== undefined) {
                if (showGitopsStatisticsRequest instanceof ShowGitopsStatisticsRequest) {
                    limit = showGitopsStatisticsRequest.limit;
                    offset = showGitopsStatisticsRequest.offset;
                    orderBy = showGitopsStatisticsRequest.orderBy;
                    order = showGitopsStatisticsRequest.order;
                } else {
                    limit = showGitopsStatisticsRequest['limit'];
                    offset = showGitopsStatisticsRequest['offset'];
                    orderBy = showGitopsStatisticsRequest['order_by'];
                    order = showGitopsStatisticsRequest['order'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (orderBy !== null && orderBy !== undefined) {
                localVarQueryParameter['order_by'] = orderBy;
            }
            if (order !== null && order !== undefined) {
                localVarQueryParameter['order'] = order;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取策略定义
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPolicyDefinition(showPolicyDefinitionRequest?: ShowPolicyDefinitionRequest) {
            const options = {
                method: "GET",
                url: "/v1/policydefinitions/{policydefinitionid}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let policydefinitionid;

            if (showPolicyDefinitionRequest !== null && showPolicyDefinitionRequest !== undefined) {
                if (showPolicyDefinitionRequest instanceof ShowPolicyDefinitionRequest) {
                    policydefinitionid = showPolicyDefinitionRequest.policydefinitionid;
                } else {
                    policydefinitionid = showPolicyDefinitionRequest['policydefinitionid'];
                }
            }

        
            if (policydefinitionid === null || policydefinitionid === undefined) {
            throw new RequiredError('policydefinitionid','Required parameter policydefinitionid was null or undefined when calling showPolicyDefinition.');
            }

            options.pathParams = { 'policydefinitionid': policydefinitionid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定策略实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPolicyInstance(showPolicyInstanceRequest?: ShowPolicyInstanceRequest) {
            const options = {
                method: "GET",
                url: "/v1/policyinstances/{policyinstanceid}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let policyinstanceid;

            if (showPolicyInstanceRequest !== null && showPolicyInstanceRequest !== undefined) {
                if (showPolicyInstanceRequest instanceof ShowPolicyInstanceRequest) {
                    policyinstanceid = showPolicyInstanceRequest.policyinstanceid;
                } else {
                    policyinstanceid = showPolicyInstanceRequest['policyinstanceid'];
                }
            }

        
            if (policyinstanceid === null || policyinstanceid === undefined) {
            throw new RequiredError('policyinstanceid','Required parameter policyinstanceid was null or undefined when calling showPolicyInstance.');
            }

            options.pathParams = { 'policyinstanceid': policyinstanceid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定策略实例相关任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPolicyJob(showPolicyJobRequest?: ShowPolicyJobRequest) {
            const options = {
                method: "GET",
                url: "/v1/policy/jobs/{jobid}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobid;

            if (showPolicyJobRequest !== null && showPolicyJobRequest !== undefined) {
                if (showPolicyJobRequest instanceof ShowPolicyJobRequest) {
                    jobid = showPolicyJobRequest.jobid;
                } else {
                    jobid = showPolicyJobRequest['jobid'];
                }
            }

        
            if (jobid === null || jobid === undefined) {
            throw new RequiredError('jobid','Required parameter jobid was null or undefined when calling showPolicyJob.');
            }

            options.pathParams = { 'jobid': jobid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询联邦工作负载
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showProxyUnitedWorkload(showProxyUnitedWorkloadRequest?: ShowProxyUnitedWorkloadRequest) {
            const options = {
                method: "GET",
                url: "/v1/clustergroups/{clustergroupid}/unitedworkload",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clustergroupid;
            
            let kind;
            
            let namespace;
            
            let name;

            if (showProxyUnitedWorkloadRequest !== null && showProxyUnitedWorkloadRequest !== undefined) {
                if (showProxyUnitedWorkloadRequest instanceof ShowProxyUnitedWorkloadRequest) {
                    clustergroupid = showProxyUnitedWorkloadRequest.clustergroupid;
                    kind = showProxyUnitedWorkloadRequest.kind;
                    namespace = showProxyUnitedWorkloadRequest.namespace;
                    name = showProxyUnitedWorkloadRequest.name;
                } else {
                    clustergroupid = showProxyUnitedWorkloadRequest['clustergroupid'];
                    kind = showProxyUnitedWorkloadRequest['kind'];
                    namespace = showProxyUnitedWorkloadRequest['namespace'];
                    name = showProxyUnitedWorkloadRequest['name'];
                }
            }

        
            if (clustergroupid === null || clustergroupid === undefined) {
            throw new RequiredError('clustergroupid','Required parameter clustergroupid was null or undefined when calling showProxyUnitedWorkload.');
            }
            if (kind === null || kind === undefined) {
                throw new RequiredError('kind','Required parameter kind was null or undefined when calling showProxyUnitedWorkload.');
            }
            if (kind !== null && kind !== undefined) {
                localVarQueryParameter['kind'] = kind;
            }
            if (namespace !== null && namespace !== undefined) {
                localVarQueryParameter['namespace'] = namespace;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'clustergroupid': clustergroupid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取UCS配额信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showQuota(showQuotaRequest?: ShowQuotaRequest) {
            const options = {
                method: "GET",
                url: "/v1/maintenance/quota/{domainid}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let domainid;

            if (showQuotaRequest !== null && showQuotaRequest !== undefined) {
                if (showQuotaRequest instanceof ShowQuotaRequest) {
                    domainid = showQuotaRequest.domainid;
                } else {
                    domainid = showQuotaRequest['domainid'];
                }
            }

        
            if (domainid === null || domainid === undefined) {
            throw new RequiredError('domainid','Required parameter domainid was null or undefined when calling showQuota.');
            }

            options.pathParams = { 'domainid': domainid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新插件实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAddonInstance(updateAddonInstanceRequest?: UpdateAddonInstanceRequest) {
            const options = {
                method: "PUT",
                url: "/v1/addons/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (updateAddonInstanceRequest !== null && updateAddonInstanceRequest !== undefined) {
                if (updateAddonInstanceRequest instanceof UpdateAddonInstanceRequest) {
                    id = updateAddonInstanceRequest.id;
                    body = updateAddonInstanceRequest.body
                } else {
                    id = updateAddonInstanceRequest['id'];
                    body = updateAddonInstanceRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling updateAddonInstance.');
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
         * 更新集群所属的容器舰队description信息；需要用户对相应容器舰队有更新权限
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateClusterGroup(updateClusterGroupRequest?: UpdateClusterGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v1/clustergroups/{clustergroupid}/description",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clustergroupid;

            if (updateClusterGroupRequest !== null && updateClusterGroupRequest !== undefined) {
                if (updateClusterGroupRequest instanceof UpdateClusterGroupRequest) {
                    clustergroupid = updateClusterGroupRequest.clustergroupid;
                    body = updateClusterGroupRequest.body
                } else {
                    clustergroupid = updateClusterGroupRequest['clustergroupid'];
                    body = updateClusterGroupRequest['body'];
                }
            }

        
            if (clustergroupid === null || clustergroupid === undefined) {
            throw new RequiredError('clustergroupid','Required parameter clustergroupid was null or undefined when calling updateClusterGroup.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'clustergroupid': clustergroupid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 向容器舰队中添加集群，同批次可以添加一个或多个集群，该接口无法清空或减少管理的集群。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateClusterGroupAssociatedClusters(updateClusterGroupAssociatedClustersRequest?: UpdateClusterGroupAssociatedClustersRequest) {
            const options = {
                method: "PUT",
                url: "/v1/clustergroups/{clustergroupid}/associatedclusters",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clustergroupid;

            if (updateClusterGroupAssociatedClustersRequest !== null && updateClusterGroupAssociatedClustersRequest !== undefined) {
                if (updateClusterGroupAssociatedClustersRequest instanceof UpdateClusterGroupAssociatedClustersRequest) {
                    clustergroupid = updateClusterGroupAssociatedClustersRequest.clustergroupid;
                    body = updateClusterGroupAssociatedClustersRequest.body
                } else {
                    clustergroupid = updateClusterGroupAssociatedClustersRequest['clustergroupid'];
                    body = updateClusterGroupAssociatedClustersRequest['body'];
                }
            }

        
            if (clustergroupid === null || clustergroupid === undefined) {
            throw new RequiredError('clustergroupid','Required parameter clustergroupid was null or undefined when calling updateClusterGroupAssociatedClusters.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'clustergroupid': clustergroupid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新容器舰队关联权限策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateClusterGroupAssociatedRules(updateClusterGroupAssociatedRulesRequest?: UpdateClusterGroupAssociatedRulesRequest) {
            const options = {
                method: "PUT",
                url: "/v1/clustergroups/{clustergroupid}/associatedrules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clustergroupid;

            if (updateClusterGroupAssociatedRulesRequest !== null && updateClusterGroupAssociatedRulesRequest !== undefined) {
                if (updateClusterGroupAssociatedRulesRequest instanceof UpdateClusterGroupAssociatedRulesRequest) {
                    clustergroupid = updateClusterGroupAssociatedRulesRequest.clustergroupid;
                    body = updateClusterGroupAssociatedRulesRequest.body
                } else {
                    clustergroupid = updateClusterGroupAssociatedRulesRequest['clustergroupid'];
                    body = updateClusterGroupAssociatedRulesRequest['body'];
                }
            }

        
            if (clustergroupid === null || clustergroupid === undefined) {
            throw new RequiredError('clustergroupid','Required parameter clustergroupid was null or undefined when calling updateClusterGroupAssociatedRules.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'clustergroupid': clustergroupid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新容器舰队的集群联邦关联的zone
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateClusterGroupAssociatedZones(updateClusterGroupAssociatedZonesRequest?: UpdateClusterGroupAssociatedZonesRequest) {
            const options = {
                method: "PUT",
                url: "/v1/clustergroups/{clustergroupid}/associatedzones",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clustergroupid;

            if (updateClusterGroupAssociatedZonesRequest !== null && updateClusterGroupAssociatedZonesRequest !== undefined) {
                if (updateClusterGroupAssociatedZonesRequest instanceof UpdateClusterGroupAssociatedZonesRequest) {
                    clustergroupid = updateClusterGroupAssociatedZonesRequest.clustergroupid;
                    body = updateClusterGroupAssociatedZonesRequest.body
                } else {
                    clustergroupid = updateClusterGroupAssociatedZonesRequest['clustergroupid'];
                    body = updateClusterGroupAssociatedZonesRequest['body'];
                }
            }

        
            if (clustergroupid === null || clustergroupid === undefined) {
            throw new RequiredError('clustergroupid','Required parameter clustergroupid was null or undefined when calling updateClusterGroupAssociatedZones.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'clustergroupid': clustergroupid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 仅更新配置集合，不更新仓库源
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateConfigSet(updateConfigSetRequest?: UpdateConfigSetRequest) {
            const options = {
                method: "PUT",
                url: "/v1/configsets/{configsetid}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let configsetid;

            if (updateConfigSetRequest !== null && updateConfigSetRequest !== undefined) {
                if (updateConfigSetRequest instanceof UpdateConfigSetRequest) {
                    configsetid = updateConfigSetRequest.configsetid;
                    body = updateConfigSetRequest.body
                } else {
                    configsetid = updateConfigSetRequest['configsetid'];
                    body = updateConfigSetRequest['body'];
                }
            }

        
            if (configsetid === null || configsetid === undefined) {
            throw new RequiredError('configsetid','Required parameter configsetid was null or undefined when calling updateConfigSet.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'configsetid': configsetid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新策略定义
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePolicyDefination(updatePolicyDefinationRequest?: UpdatePolicyDefinationRequest) {
            const options = {
                method: "PUT",
                url: "/v1/policydefinitions/{policydefinitionid}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let policydefinitionid;

            if (updatePolicyDefinationRequest !== null && updatePolicyDefinationRequest !== undefined) {
                if (updatePolicyDefinationRequest instanceof UpdatePolicyDefinationRequest) {
                    policydefinitionid = updatePolicyDefinationRequest.policydefinitionid;
                    body = updatePolicyDefinationRequest.body
                } else {
                    policydefinitionid = updatePolicyDefinationRequest['policydefinitionid'];
                    body = updatePolicyDefinationRequest['body'];
                }
            }

        
            if (policydefinitionid === null || policydefinitionid === undefined) {
            throw new RequiredError('policydefinitionid','Required parameter policydefinitionid was null or undefined when calling updatePolicyDefination.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'policydefinitionid': policydefinitionid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新指定策略实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePolicyInstance(updatePolicyInstanceRequest?: UpdatePolicyInstanceRequest) {
            const options = {
                method: "PUT",
                url: "/v1/policyinstances/{policyinstanceid}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let policyinstanceid;

            if (updatePolicyInstanceRequest !== null && updatePolicyInstanceRequest !== undefined) {
                if (updatePolicyInstanceRequest instanceof UpdatePolicyInstanceRequest) {
                    policyinstanceid = updatePolicyInstanceRequest.policyinstanceid;
                    body = updatePolicyInstanceRequest.body
                } else {
                    policyinstanceid = updatePolicyInstanceRequest['policyinstanceid'];
                    body = updatePolicyInstanceRequest['body'];
                }
            }

        
            if (policyinstanceid === null || policyinstanceid === undefined) {
            throw new RequiredError('policyinstanceid','Required parameter policyinstanceid was null or undefined when calling updatePolicyInstance.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'policyinstanceid': policyinstanceid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新联邦工作负载
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateProxyUnitedWorkload(updateProxyUnitedWorkloadRequest?: UpdateProxyUnitedWorkloadRequest) {
            const options = {
                method: "PUT",
                url: "/v1/clustergroups/{clustergroupid}/unitedworkload",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clustergroupid;

            if (updateProxyUnitedWorkloadRequest !== null && updateProxyUnitedWorkloadRequest !== undefined) {
                if (updateProxyUnitedWorkloadRequest instanceof UpdateProxyUnitedWorkloadRequest) {
                    clustergroupid = updateProxyUnitedWorkloadRequest.clustergroupid;
                    body = updateProxyUnitedWorkloadRequest.body
                } else {
                    clustergroupid = updateProxyUnitedWorkloadRequest['clustergroupid'];
                    body = updateProxyUnitedWorkloadRequest['body'];
                }
            }

        
            if (clustergroupid === null || clustergroupid === undefined) {
            throw new RequiredError('clustergroupid','Required parameter clustergroupid was null or undefined when calling updateProxyUnitedWorkload.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'clustergroupid': clustergroupid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新仓库源信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateRepo(updateRepoRequest?: UpdateRepoRequest) {
            const options = {
                method: "PUT",
                url: "/v1/configsets/repos/{repoid}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let repoid;

            if (updateRepoRequest !== null && updateRepoRequest !== undefined) {
                if (updateRepoRequest instanceof UpdateRepoRequest) {
                    repoid = updateRepoRequest.repoid;
                    body = updateRepoRequest.body
                } else {
                    repoid = updateRepoRequest['repoid'];
                    body = updateRepoRequest['body'];
                }
            }

        
            if (repoid === null || repoid === undefined) {
            throw new RequiredError('repoid','Required parameter repoid was null or undefined when calling updateRepo.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'repoid': repoid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新权限策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateRule(updateRuleRequest?: UpdateRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v1/permissions/rules/{ruleid}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let ruleid;

            if (updateRuleRequest !== null && updateRuleRequest !== undefined) {
                if (updateRuleRequest instanceof UpdateRuleRequest) {
                    ruleid = updateRuleRequest.ruleid;
                    body = updateRuleRequest.body
                } else {
                    ruleid = updateRuleRequest['ruleid'];
                    body = updateRuleRequest['body'];
                }
            }

        
            if (ruleid === null || ruleid === undefined) {
            throw new RequiredError('ruleid','Required parameter ruleid was null or undefined when calling updateRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'ruleid': ruleid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 容器舰队联邦版本升级
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        upgradeFederation(upgradeFederationRequest?: UpgradeFederationRequest) {
            const options = {
                method: "POST",
                url: "/v1/clustergroups/{clustergroupid}/federations/upgrade",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clustergroupid;

            if (upgradeFederationRequest !== null && upgradeFederationRequest !== undefined) {
                if (upgradeFederationRequest instanceof UpgradeFederationRequest) {
                    clustergroupid = upgradeFederationRequest.clustergroupid;
                    body = upgradeFederationRequest.body
                } else {
                    clustergroupid = upgradeFederationRequest['clustergroupid'];
                    body = upgradeFederationRequest['body'];
                }
            }

        
            if (clustergroupid === null || clustergroupid === undefined) {
            throw new RequiredError('clustergroupid','Required parameter clustergroupid was null or undefined when calling upgradeFederation.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'clustergroupid': clustergroupid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取集群安装时所需的配置信息，当前仅本地集群使用
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createClusterConf(createClusterConfRequest?: CreateClusterConfRequest) {
            const options = {
                method: "POST",
                url: "/v1/clusters/{clusterid}/clusterconf",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterid;

            if (createClusterConfRequest !== null && createClusterConfRequest !== undefined) {
                if (createClusterConfRequest instanceof CreateClusterConfRequest) {
                    clusterid = createClusterConfRequest.clusterid;
                    body = createClusterConfRequest.body
                } else {
                    clusterid = createClusterConfRequest['clusterid'];
                    body = createClusterConfRequest['body'];
                }
            }

        
            if (clusterid === null || clusterid === undefined) {
            throw new RequiredError('clusterid','Required parameter clusterid was null or undefined when calling createClusterConf.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'clusterid': clusterid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取集群kubeconfig
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createClusterKubeconfig(createClusterKubeconfigRequest?: CreateClusterKubeconfigRequest) {
            const options = {
                method: "POST",
                url: "/v1/clusters/{clusterid}/kubeconfig",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterid;

            if (createClusterKubeconfigRequest !== null && createClusterKubeconfigRequest !== undefined) {
                if (createClusterKubeconfigRequest instanceof CreateClusterKubeconfigRequest) {
                    clusterid = createClusterKubeconfigRequest.clusterid;
                } else {
                    clusterid = createClusterKubeconfigRequest['clusterid'];
                }
            }

        
            if (clusterid === null || clusterid === undefined) {
            throw new RequiredError('clusterid','Required parameter clusterid was null or undefined when calling createClusterKubeconfig.');
            }

            options.pathParams = { 'clusterid': clusterid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建集群建策略实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createClusterPolicyInstance(createClusterPolicyInstanceRequest?: CreateClusterPolicyInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v1/clusters/{clusterid}/policyinstance",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterid;

            if (createClusterPolicyInstanceRequest !== null && createClusterPolicyInstanceRequest !== undefined) {
                if (createClusterPolicyInstanceRequest instanceof CreateClusterPolicyInstanceRequest) {
                    clusterid = createClusterPolicyInstanceRequest.clusterid;
                    body = createClusterPolicyInstanceRequest.body
                } else {
                    clusterid = createClusterPolicyInstanceRequest['clusterid'];
                    body = createClusterPolicyInstanceRequest['body'];
                }
            }

        
            if (clusterid === null || clusterid === undefined) {
            throw new RequiredError('clusterid','Required parameter clusterid was null or undefined when calling createClusterPolicyInstance.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'clusterid': clusterid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用于集群解除注册；传入的cluster ID必须符合k8s UUID的格式规则；同时需要用户有对应集群的操作权限，否则会鉴权失败。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteCluster(deleteClusterRequest?: DeleteClusterRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/clusters/{clusterid}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterid;

            if (deleteClusterRequest !== null && deleteClusterRequest !== undefined) {
                if (deleteClusterRequest instanceof DeleteClusterRequest) {
                    clusterid = deleteClusterRequest.clusterid;
                } else {
                    clusterid = deleteClusterRequest['clusterid'];
                }
            }

        
            if (clusterid === null || clusterid === undefined) {
            throw new RequiredError('clusterid','Required parameter clusterid was null or undefined when calling deleteCluster.');
            }

            options.pathParams = { 'clusterid': clusterid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 集群关闭策略中心
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disableClusterPolicy(disableClusterPolicyRequest?: DisableClusterPolicyRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/clusters/{clusterid}/policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterid;

            if (disableClusterPolicyRequest !== null && disableClusterPolicyRequest !== undefined) {
                if (disableClusterPolicyRequest instanceof DisableClusterPolicyRequest) {
                    clusterid = disableClusterPolicyRequest.clusterid;
                } else {
                    clusterid = disableClusterPolicyRequest['clusterid'];
                }
            }

        
            if (clusterid === null || clusterid === undefined) {
            throw new RequiredError('clusterid','Required parameter clusterid was null or undefined when calling disableClusterPolicy.');
            }

            options.pathParams = { 'clusterid': clusterid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 卸载集群gitops插件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disableGitOps(disableGitOpsRequest?: DisableGitOpsRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/clusters/{clusterid}/gitops",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterid;

            if (disableGitOpsRequest !== null && disableGitOpsRequest !== undefined) {
                if (disableGitOpsRequest instanceof DisableGitOpsRequest) {
                    clusterid = disableGitOpsRequest.clusterid;
                } else {
                    clusterid = disableGitOpsRequest['clusterid'];
                }
            }

        
            if (clusterid === null || clusterid === undefined) {
            throw new RequiredError('clusterid','Required parameter clusterid was null or undefined when calling disableGitOps.');
            }

            options.pathParams = { 'clusterid': clusterid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 集群启用策略中心
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        enableClusterPolicy(enableClusterPolicyRequest?: EnableClusterPolicyRequest) {
            const options = {
                method: "POST",
                url: "/v1/clusters/{clusterid}/policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterid;
            
            let retry;

            if (enableClusterPolicyRequest !== null && enableClusterPolicyRequest !== undefined) {
                if (enableClusterPolicyRequest instanceof EnableClusterPolicyRequest) {
                    clusterid = enableClusterPolicyRequest.clusterid;
                    retry = enableClusterPolicyRequest.retry;
                } else {
                    clusterid = enableClusterPolicyRequest['clusterid'];
                    retry = enableClusterPolicyRequest['retry'];
                }
            }

        
            if (clusterid === null || clusterid === undefined) {
            throw new RequiredError('clusterid','Required parameter clusterid was null or undefined when calling enableClusterPolicy.');
            }
            if (retry !== null && retry !== undefined) {
                localVarQueryParameter['retry'] = retry;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'clusterid': clusterid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 启用Gitops插件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        enableGitOps(enableGitOpsRequest?: EnableGitOpsRequest) {
            const options = {
                method: "POST",
                url: "/v1/clusters/{clusterid}/gitops",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterid;
            
            let retry;

            if (enableGitOpsRequest !== null && enableGitOpsRequest !== undefined) {
                if (enableGitOpsRequest instanceof EnableGitOpsRequest) {
                    clusterid = enableGitOpsRequest.clusterid;
                    retry = enableGitOpsRequest.retry;
                } else {
                    clusterid = enableGitOpsRequest['clusterid'];
                    retry = enableGitOpsRequest['retry'];
                }
            }

        
            if (clusterid === null || clusterid === undefined) {
            throw new RequiredError('clusterid','Required parameter clusterid was null or undefined when calling enableGitOps.');
            }
            if (retry !== null && retry !== undefined) {
                localVarQueryParameter['retry'] = retry;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'clusterid': clusterid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取当前租户的CCE集群列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listManagedClusters(listManagedClustersRequest?: ListManagedClustersRequest) {
            const options = {
                method: "GET",
                url: "/v1/managedclusters",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let unimported;
            
            let limit;
            
            let offset;

            if (listManagedClustersRequest !== null && listManagedClustersRequest !== undefined) {
                if (listManagedClustersRequest instanceof ListManagedClustersRequest) {
                    unimported = listManagedClustersRequest.unimported;
                    limit = listManagedClustersRequest.limit;
                    offset = listManagedClustersRequest.offset;
                } else {
                    unimported = listManagedClustersRequest['unimported'];
                    limit = listManagedClustersRequest['limit'];
                    offset = listManagedClustersRequest['offset'];
                }
            }

        
            if (unimported !== null && unimported !== undefined) {
                localVarQueryParameter['unimported'] = unimported;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询支持接入UCS的集群版本列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRegisteredClusterVersions() {
            const options = {
                method: "GET",
                url: "/v1/config/registeredclusterversions",
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
         * 集群注册接口。支持三方集群的注册和CCE导入集群的注册。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        registerCluster(registerClusterRequest?: RegisterClusterRequest) {
            const options = {
                method: "POST",
                url: "/v1/clusters",
                contentType: "application/x-www-form-urlencoded",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            const localVarFormParams = new URLSearchParams();
            let kind;
            
            let apiVersion;
            
            let metadata;
            
            let spec;
            

            if (registerClusterRequest !== null && registerClusterRequest !== undefined) {
                if (registerClusterRequest instanceof RegisterClusterRequest) {
                    kind = registerClusterRequest.body?.kind;
                    apiVersion = registerClusterRequest.body?.apiVersion;
                    metadata = registerClusterRequest.body?.metadata;
                    spec = registerClusterRequest.body?.spec;
                } else {
                    kind = registerClusterRequest['body']['kind'];
                    apiVersion = registerClusterRequest['body']['apiVersion'];
                    metadata = registerClusterRequest['body']['metadata'];
                    spec = registerClusterRequest['body']['spec'];
                }
            }

        
            if (kind === null || kind === undefined) {
            throw new RequiredError('kind','Required parameter kind was null or undefined when calling registerCluster.');
            }
            if (apiVersion === null || apiVersion === undefined) {
            throw new RequiredError('apiVersion','Required parameter apiVersion was null or undefined when calling registerCluster.');
            }
            if (metadata === null || metadata === undefined) {
            throw new RequiredError('metadata','Required parameter metadata was null or undefined when calling registerCluster.');
            }
            if (spec === null || spec === undefined) {
            throw new RequiredError('spec','Required parameter spec was null or undefined when calling registerCluster.');
            }
            if (kind !== undefined) { 
                localVarFormParams.set('kind', kind as any);
            }
            if (apiVersion !== undefined) { 
                localVarFormParams.set('apiVersion', apiVersion as any);
            }
            if (metadata !== undefined) { 
                localVarFormParams.set('metadata', metadata as any);
            }
            if (spec !== undefined) { 
                localVarFormParams.set('spec', spec as any);
            }
            options.data = localVarFormParams.toString();
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 激活集群接口；传入的cluster ID必须符合k8s UUID的格式规则；同时需要用户有对应集群的更新权限，否则会鉴权失败
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        retryClusterActivation(retryClusterActivationRequest?: RetryClusterActivationRequest) {
            const options = {
                method: "PUT",
                url: "/v1/clusters/{clusterid}/activation",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterid;

            if (retryClusterActivationRequest !== null && retryClusterActivationRequest !== undefined) {
                if (retryClusterActivationRequest instanceof RetryClusterActivationRequest) {
                    clusterid = retryClusterActivationRequest.clusterid;
                } else {
                    clusterid = retryClusterActivationRequest['clusterid'];
                }
            }

        
            if (clusterid === null || clusterid === undefined) {
            throw new RequiredError('clusterid','Required parameter clusterid was null or undefined when calling retryClusterActivation.');
            }

            options.pathParams = { 'clusterid': clusterid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取集群信息。传入的cluster ID必须符合k8s UUID的格式规则；同时需要用户有对应集群的获取权限，否则会鉴权失败
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCluster(showClusterRequest?: ShowClusterRequest) {
            const options = {
                method: "GET",
                url: "/v1/clusters/{clusterid}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterid;

            if (showClusterRequest !== null && showClusterRequest !== undefined) {
                if (showClusterRequest instanceof ShowClusterRequest) {
                    clusterid = showClusterRequest.clusterid;
                } else {
                    clusterid = showClusterRequest['clusterid'];
                }
            }

        
            if (clusterid === null || clusterid === undefined) {
            throw new RequiredError('clusterid','Required parameter clusterid was null or undefined when calling showCluster.');
            }

            options.pathParams = { 'clusterid': clusterid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API接口用于获取集群接入信息；传入的cluster ID必须符合k8s UUID的格式规则；同时需要用户有对应集群证书的获取权限，否则会鉴权失败；agent证书只可以下载一次。仅用于获取三方集群的集群接入信息，CCE集群不从该接口获取，如果传入CCE集群ID，返回码为400
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showClusterAccessInfo(showClusterAccessInfoRequest?: ShowClusterAccessInfoRequest) {
            const options = {
                method: "GET",
                url: "/v1/clusters/{clusterid}/accessinfo",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterid;
            
            let vpcendpoint;
            
            let region;

            if (showClusterAccessInfoRequest !== null && showClusterAccessInfoRequest !== undefined) {
                if (showClusterAccessInfoRequest instanceof ShowClusterAccessInfoRequest) {
                    clusterid = showClusterAccessInfoRequest.clusterid;
                    vpcendpoint = showClusterAccessInfoRequest.vpcendpoint;
                    region = showClusterAccessInfoRequest.region;
                } else {
                    clusterid = showClusterAccessInfoRequest['clusterid'];
                    vpcendpoint = showClusterAccessInfoRequest['vpcendpoint'];
                    region = showClusterAccessInfoRequest['region'];
                }
            }

        
            if (clusterid === null || clusterid === undefined) {
            throw new RequiredError('clusterid','Required parameter clusterid was null or undefined when calling showClusterAccessInfo.');
            }
            if (vpcendpoint !== null && vpcendpoint !== undefined) {
                localVarQueryParameter['vpcendpoint'] = vpcendpoint;
            }
            if (region !== null && region !== undefined) {
                localVarQueryParameter['region'] = region;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'clusterid': clusterid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取集群信息列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showClusterList(showClusterListRequest?: ShowClusterListRequest) {
            const options = {
                method: "GET",
                url: "/v1/clusters",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let category;
            
            let enablestatus;
            
            let clustergroupid;
            
            let limit;
            
            let offset;
            
            let orderBy;
            
            let order;
            
            let managetype;
            
            let clusterids;

            if (showClusterListRequest !== null && showClusterListRequest !== undefined) {
                if (showClusterListRequest instanceof ShowClusterListRequest) {
                    category = showClusterListRequest.category;
                    enablestatus = showClusterListRequest.enablestatus;
                    clustergroupid = showClusterListRequest.clustergroupid;
                    limit = showClusterListRequest.limit;
                    offset = showClusterListRequest.offset;
                    orderBy = showClusterListRequest.orderBy;
                    order = showClusterListRequest.order;
                    managetype = showClusterListRequest.managetype;
                    clusterids = showClusterListRequest.clusterids;
                } else {
                    category = showClusterListRequest['category'];
                    enablestatus = showClusterListRequest['enablestatus'];
                    clustergroupid = showClusterListRequest['clustergroupid'];
                    limit = showClusterListRequest['limit'];
                    offset = showClusterListRequest['offset'];
                    orderBy = showClusterListRequest['order_by'];
                    order = showClusterListRequest['order'];
                    managetype = showClusterListRequest['managetype'];
                    clusterids = showClusterListRequest['clusterids'];
                }
            }

        
            if (category !== null && category !== undefined) {
                localVarQueryParameter['category'] = category;
            }
            if (enablestatus !== null && enablestatus !== undefined) {
                localVarQueryParameter['enablestatus'] = enablestatus;
            }
            if (clustergroupid !== null && clustergroupid !== undefined) {
                localVarQueryParameter['clustergroupid'] = clustergroupid;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (orderBy !== null && orderBy !== undefined) {
                localVarQueryParameter['order_by'] = orderBy;
            }
            if (order !== null && order !== undefined) {
                localVarQueryParameter['order'] = order;
            }
            if (managetype !== null && managetype !== undefined) {
                localVarQueryParameter['managetype'] = managetype;
            }
            if (clusterids !== null && clusterids !== undefined) {
                localVarQueryParameter['clusterids'] = clusterids;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取gitops启用进展
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showGitOpsStatus(showGitOpsStatusRequest?: ShowGitOpsStatusRequest) {
            const options = {
                method: "GET",
                url: "/v1/clusters/{clusterid}/gitops",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterid;

            if (showGitOpsStatusRequest !== null && showGitOpsStatusRequest !== undefined) {
                if (showGitOpsStatusRequest instanceof ShowGitOpsStatusRequest) {
                    clusterid = showGitOpsStatusRequest.clusterid;
                } else {
                    clusterid = showGitOpsStatusRequest['clusterid'];
                }
            }

        
            if (clusterid === null || clusterid === undefined) {
            throw new RequiredError('clusterid','Required parameter clusterid was null or undefined when calling showGitOpsStatus.');
            }

            options.pathParams = { 'clusterid': clusterid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新集群。当前仅允许更新附着集群和本地集群的国家/城市，允许更新多云集群的工作节点个数。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateCluster(updateClusterRequest?: UpdateClusterRequest) {
            const options = {
                method: "PUT",
                url: "/v1/clusters/{clusterid}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterid;

            if (updateClusterRequest !== null && updateClusterRequest !== undefined) {
                if (updateClusterRequest instanceof UpdateClusterRequest) {
                    clusterid = updateClusterRequest.clusterid;
                    body = updateClusterRequest.body
                } else {
                    clusterid = updateClusterRequest['clusterid'];
                    body = updateClusterRequest['body'];
                }
            }

        
            if (clusterid === null || clusterid === undefined) {
            throw new RequiredError('clusterid','Required parameter clusterid was null or undefined when calling updateCluster.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'clusterid': clusterid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 集群关联权限策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateClusterRules(updateClusterRulesRequest?: UpdateClusterRulesRequest) {
            const options = {
                method: "PUT",
                url: "/v1/clusters/{clusterid}/associatedrules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterid;

            if (updateClusterRulesRequest !== null && updateClusterRulesRequest !== undefined) {
                if (updateClusterRulesRequest instanceof UpdateClusterRulesRequest) {
                    clusterid = updateClusterRulesRequest.clusterid;
                    body = updateClusterRulesRequest.body
                } else {
                    clusterid = updateClusterRulesRequest['clusterid'];
                    body = updateClusterRulesRequest['body'];
                }
            }

        
            if (clusterid === null || clusterid === undefined) {
            throw new RequiredError('clusterid','Required parameter clusterid was null or undefined when calling updateClusterRules.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'clusterid': clusterid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): UcsClient {
    return new UcsClient(client);
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