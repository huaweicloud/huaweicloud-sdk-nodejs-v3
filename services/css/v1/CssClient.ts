import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { Actions } from './model/Actions';
import { AddFavoriteReq } from './model/AddFavoriteReq';
import { AddFavoriteReqTemplate } from './model/AddFavoriteReqTemplate';
import { AddFavoriteRequest } from './model/AddFavoriteRequest';
import { AddFavoriteResponse } from './model/AddFavoriteResponse';
import { AddIndependentNodeRequest } from './model/AddIndependentNodeRequest';
import { AddIndependentNodeResponse } from './model/AddIndependentNodeResponse';
import { AddressAndPorts } from './model/AddressAndPorts';
import { BackupRsp } from './model/BackupRsp';
import { BatchAddOrDeleteTagOnClusterReq } from './model/BatchAddOrDeleteTagOnClusterReq';
import { BindPublicReq } from './model/BindPublicReq';
import { BindPublicReqEip } from './model/BindPublicReqEip';
import { BindPublicReqEipBandWidth } from './model/BindPublicReqEipBandWidth';
import { BindPublicReqEipReq } from './model/BindPublicReqEipReq';
import { ChangeModeReq } from './model/ChangeModeReq';
import { ChangeModeRequest } from './model/ChangeModeRequest';
import { ChangeModeResponse } from './model/ChangeModeResponse';
import { ChangeSecurityGroupReq } from './model/ChangeSecurityGroupReq';
import { ChangeSecurityGroupRequest } from './model/ChangeSecurityGroupRequest';
import { ChangeSecurityGroupResponse } from './model/ChangeSecurityGroupResponse';
import { CloseKibanaPublicReq } from './model/CloseKibanaPublicReq';
import { ClusterDetailDatastore } from './model/ClusterDetailDatastore';
import { ClusterDetailFailedReasons } from './model/ClusterDetailFailedReasons';
import { ClusterDetailInstances } from './model/ClusterDetailInstances';
import { ClusterDetailTags } from './model/ClusterDetailTags';
import { ClusterList } from './model/ClusterList';
import { ClusterListDatastore } from './model/ClusterListDatastore';
import { ClusterListFailedReasons } from './model/ClusterListFailedReasons';
import { ClusterListInstances } from './model/ClusterListInstances';
import { ClusterListTags } from './model/ClusterListTags';
import { ClusterLogRecord } from './model/ClusterLogRecord';
import { ClusterVolumeRsp } from './model/ClusterVolumeRsp';
import { ConfigListRsp } from './model/ConfigListRsp';
import { Confs } from './model/Confs';
import { Connections } from './model/Connections';
import { CreateAutoCreatePolicyRequest } from './model/CreateAutoCreatePolicyRequest';
import { CreateAutoCreatePolicyResponse } from './model/CreateAutoCreatePolicyResponse';
import { CreateBindPublicRequest } from './model/CreateBindPublicRequest';
import { CreateBindPublicResponse } from './model/CreateBindPublicResponse';
import { CreateClusterBackupStrategyBody } from './model/CreateClusterBackupStrategyBody';
import { CreateClusterBody } from './model/CreateClusterBody';
import { CreateClusterClusterResponse } from './model/CreateClusterClusterResponse';
import { CreateClusterDatastoreBody } from './model/CreateClusterDatastoreBody';
import { CreateClusterInstanceBody } from './model/CreateClusterInstanceBody';
import { CreateClusterInstanceNicsBody } from './model/CreateClusterInstanceNicsBody';
import { CreateClusterInstanceVolumeBody } from './model/CreateClusterInstanceVolumeBody';
import { CreateClusterReq } from './model/CreateClusterReq';
import { CreateClusterRequest } from './model/CreateClusterRequest';
import { CreateClusterResponse } from './model/CreateClusterResponse';
import { CreateClusterTagsBody } from './model/CreateClusterTagsBody';
import { CreateClustersTagsRequest } from './model/CreateClustersTagsRequest';
import { CreateClustersTagsResponse } from './model/CreateClustersTagsResponse';
import { CreateCnfReq } from './model/CreateCnfReq';
import { CreateCnfRequest } from './model/CreateCnfRequest';
import { CreateCnfResponse } from './model/CreateCnfResponse';
import { CreateLoadIkThesaurusRequest } from './model/CreateLoadIkThesaurusRequest';
import { CreateLoadIkThesaurusResponse } from './model/CreateLoadIkThesaurusResponse';
import { CreateLogBackupRequest } from './model/CreateLogBackupRequest';
import { CreateLogBackupResponse } from './model/CreateLogBackupResponse';
import { CreateSnapshotReq } from './model/CreateSnapshotReq';
import { CreateSnapshotRequest } from './model/CreateSnapshotRequest';
import { CreateSnapshotResponse } from './model/CreateSnapshotResponse';
import { CustomTemplates } from './model/CustomTemplates';
import { DeleteClusterRequest } from './model/DeleteClusterRequest';
import { DeleteClusterResponse } from './model/DeleteClusterResponse';
import { DeleteClustersTagsRequest } from './model/DeleteClustersTagsRequest';
import { DeleteClustersTagsResponse } from './model/DeleteClustersTagsResponse';
import { DeleteConfReq } from './model/DeleteConfReq';
import { DeleteConfRequest } from './model/DeleteConfRequest';
import { DeleteConfResponse } from './model/DeleteConfResponse';
import { DeleteIkThesaurusRequest } from './model/DeleteIkThesaurusRequest';
import { DeleteIkThesaurusResponse } from './model/DeleteIkThesaurusResponse';
import { DeleteSnapshotRequest } from './model/DeleteSnapshotRequest';
import { DeleteSnapshotResponse } from './model/DeleteSnapshotResponse';
import { DeleteTemplateReq } from './model/DeleteTemplateReq';
import { DeleteTemplateRequest } from './model/DeleteTemplateRequest';
import { DeleteTemplateResponse } from './model/DeleteTemplateResponse';
import { DownloadCertRequest } from './model/DownloadCertRequest';
import { DownloadCertResponse } from './model/DownloadCertResponse';
import { ElbWhiteListResp } from './model/ElbWhiteListResp';
import { EsflavorsVersionsFlavorsResp } from './model/EsflavorsVersionsFlavorsResp';
import { EsflavorsVersionsResp } from './model/EsflavorsVersionsResp';
import { ExtendClusterGrowReq } from './model/ExtendClusterGrowReq';
import { ExtendClusterReq } from './model/ExtendClusterReq';
import { GetLogBackupReq } from './model/GetLogBackupReq';
import { IndependentBodyReq } from './model/IndependentBodyReq';
import { IndependentReq } from './model/IndependentReq';
import { KibanaElbWhiteListResp } from './model/KibanaElbWhiteListResp';
import { ListActionsRequest } from './model/ListActionsRequest';
import { ListActionsResponse } from './model/ListActionsResponse';
import { ListClustersDetailsRequest } from './model/ListClustersDetailsRequest';
import { ListClustersDetailsResponse } from './model/ListClustersDetailsResponse';
import { ListClustersTagsRequest } from './model/ListClustersTagsRequest';
import { ListClustersTagsResponse } from './model/ListClustersTagsResponse';
import { ListConfsRequest } from './model/ListConfsRequest';
import { ListConfsResponse } from './model/ListConfsResponse';
import { ListFlavorsRequest } from './model/ListFlavorsRequest';
import { ListFlavorsResponse } from './model/ListFlavorsResponse';
import { ListLogsJobRequest } from './model/ListLogsJobRequest';
import { ListLogsJobResponse } from './model/ListLogsJobResponse';
import { ListPipelinesRequest } from './model/ListPipelinesRequest';
import { ListPipelinesResponse } from './model/ListPipelinesResponse';
import { ListSnapshotBackupsDatastoreResp } from './model/ListSnapshotBackupsDatastoreResp';
import { ListSnapshotBackupsResp } from './model/ListSnapshotBackupsResp';
import { ListSnapshotsRequest } from './model/ListSnapshotsRequest';
import { ListSnapshotsResponse } from './model/ListSnapshotsResponse';
import { ListTemplatesRequest } from './model/ListTemplatesRequest';
import { ListTemplatesResponse } from './model/ListTemplatesResponse';
import { ListYmlsJobRequest } from './model/ListYmlsJobRequest';
import { ListYmlsJobResponse } from './model/ListYmlsJobResponse';
import { ListYmlsRequest } from './model/ListYmlsRequest';
import { ListYmlsResponse } from './model/ListYmlsResponse';
import { LoadCustomThesaurusReq } from './model/LoadCustomThesaurusReq';
import { LogConfiguration } from './model/LogConfiguration';
import { LogList } from './model/LogList';
import { PayInfoBody } from './model/PayInfoBody';
import { PeriodReq } from './model/PeriodReq';
import { Pipelines } from './model/Pipelines';
import { PublicKibanaRespBody } from './model/PublicKibanaRespBody';
import { ResetPasswordReq } from './model/ResetPasswordReq';
import { ResetPasswordRequest } from './model/ResetPasswordRequest';
import { ResetPasswordResponse } from './model/ResetPasswordResponse';
import { RestartClusterRequest } from './model/RestartClusterRequest';
import { RestartClusterResponse } from './model/RestartClusterResponse';
import { RestoreSnapshotReq } from './model/RestoreSnapshotReq';
import { RestoreSnapshotRequest } from './model/RestoreSnapshotRequest';
import { RestoreSnapshotResponse } from './model/RestoreSnapshotResponse';
import { Result } from './model/Result';
import { RoleExtendGrowReq } from './model/RoleExtendGrowReq';
import { RoleExtendReq } from './model/RoleExtendReq';
import { SetRDSBackupCnfReq } from './model/SetRDSBackupCnfReq';
import { Setting } from './model/Setting';
import { ShowAllTagsTagsResp } from './model/ShowAllTagsTagsResp';
import { ShowAutoCreatePolicyRequest } from './model/ShowAutoCreatePolicyRequest';
import { ShowAutoCreatePolicyResponse } from './model/ShowAutoCreatePolicyResponse';
import { ShowClusterDetailRequest } from './model/ShowClusterDetailRequest';
import { ShowClusterDetailResponse } from './model/ShowClusterDetailResponse';
import { ShowClusterTagRequest } from './model/ShowClusterTagRequest';
import { ShowClusterTagResponse } from './model/ShowClusterTagResponse';
import { ShowClusterVolumeRsp } from './model/ShowClusterVolumeRsp';
import { ShowGetConfDetailRequest } from './model/ShowGetConfDetailRequest';
import { ShowGetConfDetailResponse } from './model/ShowGetConfDetailResponse';
import { ShowGetLogSettingRequest } from './model/ShowGetLogSettingRequest';
import { ShowGetLogSettingResponse } from './model/ShowGetLogSettingResponse';
import { ShowIkThesaurusRequest } from './model/ShowIkThesaurusRequest';
import { ShowIkThesaurusResponse } from './model/ShowIkThesaurusResponse';
import { ShowLogBackupRequest } from './model/ShowLogBackupRequest';
import { ShowLogBackupResponse } from './model/ShowLogBackupResponse';
import { ShowTagsTagsResp } from './model/ShowTagsTagsResp';
import { ShowVpcepConnectionRequest } from './model/ShowVpcepConnectionRequest';
import { ShowVpcepConnectionResponse } from './model/ShowVpcepConnectionResponse';
import { ShrinkClusterReq } from './model/ShrinkClusterReq';
import { ShrinkNodeReq } from './model/ShrinkNodeReq';
import { ShrinkNodesReq } from './model/ShrinkNodesReq';
import { StartAutoSettingRequest } from './model/StartAutoSettingRequest';
import { StartAutoSettingResponse } from './model/StartAutoSettingResponse';
import { StartConnectivityTestReq } from './model/StartConnectivityTestReq';
import { StartConnectivityTestRequest } from './model/StartConnectivityTestRequest';
import { StartConnectivityTestResponse } from './model/StartConnectivityTestResponse';
import { StartKibanaPublicReq } from './model/StartKibanaPublicReq';
import { StartKibanaPublicReqElbWhitelist } from './model/StartKibanaPublicReqElbWhitelist';
import { StartKibanaPublicRequest } from './model/StartKibanaPublicRequest';
import { StartKibanaPublicResponse } from './model/StartKibanaPublicResponse';
import { StartLogAutoBackupPolicyReq } from './model/StartLogAutoBackupPolicyReq';
import { StartLogAutoBackupPolicyRequest } from './model/StartLogAutoBackupPolicyRequest';
import { StartLogAutoBackupPolicyResponse } from './model/StartLogAutoBackupPolicyResponse';
import { StartLogsReq } from './model/StartLogsReq';
import { StartLogsRequest } from './model/StartLogsRequest';
import { StartLogsResponse } from './model/StartLogsResponse';
import { StartPipelineReq } from './model/StartPipelineReq';
import { StartPipelineRequest } from './model/StartPipelineRequest';
import { StartPipelineResponse } from './model/StartPipelineResponse';
import { StartPublicWhitelistReq } from './model/StartPublicWhitelistReq';
import { StartPublicWhitelistRequest } from './model/StartPublicWhitelistRequest';
import { StartPublicWhitelistResponse } from './model/StartPublicWhitelistResponse';
import { StartVpecpReq } from './model/StartVpecpReq';
import { StartVpecpRequest } from './model/StartVpecpRequest';
import { StartVpecpResponse } from './model/StartVpecpResponse';
import { StopLogAutoBackupPolicyRequest } from './model/StopLogAutoBackupPolicyRequest';
import { StopLogAutoBackupPolicyResponse } from './model/StopLogAutoBackupPolicyResponse';
import { StopLogsRequest } from './model/StopLogsRequest';
import { StopLogsResponse } from './model/StopLogsResponse';
import { StopPipelineRequest } from './model/StopPipelineRequest';
import { StopPipelineResponse } from './model/StopPipelineResponse';
import { StopPublicKibanaWhitelistRequest } from './model/StopPublicKibanaWhitelistRequest';
import { StopPublicKibanaWhitelistResponse } from './model/StopPublicKibanaWhitelistResponse';
import { StopPublicWhitelistRequest } from './model/StopPublicWhitelistRequest';
import { StopPublicWhitelistResponse } from './model/StopPublicWhitelistResponse';
import { StopSnapshotRequest } from './model/StopSnapshotRequest';
import { StopSnapshotResponse } from './model/StopSnapshotResponse';
import { StopVpecpRequest } from './model/StopVpecpRequest';
import { StopVpecpResponse } from './model/StopVpecpResponse';
import { SysTags } from './model/SysTags';
import { SystemTemplates } from './model/SystemTemplates';
import { Tag } from './model/Tag';
import { TagReq } from './model/TagReq';
import { UnBindPublicReq } from './model/UnBindPublicReq';
import { UnBindPublicReqEipReq } from './model/UnBindPublicReqEipReq';
import { UpdateAlterKibanaRequest } from './model/UpdateAlterKibanaRequest';
import { UpdateAlterKibanaResponse } from './model/UpdateAlterKibanaResponse';
import { UpdateBatchClustersTagsRequest } from './model/UpdateBatchClustersTagsRequest';
import { UpdateBatchClustersTagsResponse } from './model/UpdateBatchClustersTagsResponse';
import { UpdateCloseKibanaRequest } from './model/UpdateCloseKibanaRequest';
import { UpdateCloseKibanaResponse } from './model/UpdateCloseKibanaResponse';
import { UpdateClusterNameReq } from './model/UpdateClusterNameReq';
import { UpdateClusterNameRequest } from './model/UpdateClusterNameRequest';
import { UpdateClusterNameResponse } from './model/UpdateClusterNameResponse';
import { UpdateCnfRequest } from './model/UpdateCnfRequest';
import { UpdateCnfResponse } from './model/UpdateCnfResponse';
import { UpdateExtendClusterRequest } from './model/UpdateExtendClusterRequest';
import { UpdateExtendClusterResponse } from './model/UpdateExtendClusterResponse';
import { UpdateExtendInstanceStorageRequest } from './model/UpdateExtendInstanceStorageRequest';
import { UpdateExtendInstanceStorageResponse } from './model/UpdateExtendInstanceStorageResponse';
import { UpdateFlavorByTypeReq } from './model/UpdateFlavorByTypeReq';
import { UpdateFlavorByTypeRequest } from './model/UpdateFlavorByTypeRequest';
import { UpdateFlavorByTypeResponse } from './model/UpdateFlavorByTypeResponse';
import { UpdateFlavorReq } from './model/UpdateFlavorReq';
import { UpdateFlavorRequest } from './model/UpdateFlavorRequest';
import { UpdateFlavorResponse } from './model/UpdateFlavorResponse';
import { UpdateInstanceRequest } from './model/UpdateInstanceRequest';
import { UpdateInstanceResponse } from './model/UpdateInstanceResponse';
import { UpdateLogSettingReq } from './model/UpdateLogSettingReq';
import { UpdateLogSettingRequest } from './model/UpdateLogSettingRequest';
import { UpdateLogSettingResponse } from './model/UpdateLogSettingResponse';
import { UpdateOndemandClusterToPeriodRequest } from './model/UpdateOndemandClusterToPeriodRequest';
import { UpdateOndemandClusterToPeriodResponse } from './model/UpdateOndemandClusterToPeriodResponse';
import { UpdatePublicBandWidthRequest } from './model/UpdatePublicBandWidthRequest';
import { UpdatePublicBandWidthResponse } from './model/UpdatePublicBandWidthResponse';
import { UpdatePublicKibanaBandwidthReq } from './model/UpdatePublicKibanaBandwidthReq';
import { UpdatePublicKibanaBandwidthReqBandWidth } from './model/UpdatePublicKibanaBandwidthReqBandWidth';
import { UpdatePublicKibanaWhitelistReq } from './model/UpdatePublicKibanaWhitelistReq';
import { UpdatePublicKibanaWhitelistRequest } from './model/UpdatePublicKibanaWhitelistRequest';
import { UpdatePublicKibanaWhitelistResponse } from './model/UpdatePublicKibanaWhitelistResponse';
import { UpdateShrinkClusterRequest } from './model/UpdateShrinkClusterRequest';
import { UpdateShrinkClusterResponse } from './model/UpdateShrinkClusterResponse';
import { UpdateShrinkNodesRequest } from './model/UpdateShrinkNodesRequest';
import { UpdateShrinkNodesResponse } from './model/UpdateShrinkNodesResponse';
import { UpdateSnapshotSettingReq } from './model/UpdateSnapshotSettingReq';
import { UpdateSnapshotSettingRequest } from './model/UpdateSnapshotSettingRequest';
import { UpdateSnapshotSettingResponse } from './model/UpdateSnapshotSettingResponse';
import { UpdateUnbindPublicRequest } from './model/UpdateUnbindPublicRequest';
import { UpdateUnbindPublicResponse } from './model/UpdateUnbindPublicResponse';
import { UpdateVpcepConnectionReq } from './model/UpdateVpcepConnectionReq';
import { UpdateVpcepConnectionRequest } from './model/UpdateVpcepConnectionRequest';
import { UpdateVpcepConnectionResponse } from './model/UpdateVpcepConnectionResponse';
import { UpdateVpcepWhitelistReq } from './model/UpdateVpcepWhitelistReq';
import { UpdateVpcepWhitelistRequest } from './model/UpdateVpcepWhitelistRequest';
import { UpdateVpcepWhitelistResponse } from './model/UpdateVpcepWhitelistResponse';
import { UpdateYmlsReq } from './model/UpdateYmlsReq';
import { UpdateYmlsReqEdit } from './model/UpdateYmlsReqEdit';
import { UpdateYmlsReqEditModify } from './model/UpdateYmlsReqEditModify';
import { UpdateYmlsRequest } from './model/UpdateYmlsRequest';
import { UpdateYmlsResponse } from './model/UpdateYmlsResponse';

export class CssClient {
    public static newBuilder(): ClientBuilder<CssClient> {
            return new ClientBuilder<CssClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 由于集群数据面业务的增长或者不确定性，很难在一开始就能够把集群的规模形态想明白，该接口能够在非独立master和client的集群上面独立master、client角色。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加独立master、client
     * @param {string} clusterId 指定需要独立master或client的集群ID。
     * @param {string} type 指定待新增独立节点类型。 - ess-master：Master节点。 - ess-client：Client节点。
     * @param {IndependentReq} independentReq 独立master或client请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addIndependentNode(addIndependentNodeRequest?: AddIndependentNodeRequest): Promise<AddIndependentNodeResponse> {
        const options = ParamCreater().addIndependentNode(addIndependentNodeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于切换集群的安全模式。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 安全模式修改
     * @param {string} clusterId 指定修改的集群ID。
     * @param {ChangeModeReq} changeModeReq 修改安全模式请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeMode(changeModeRequest?: ChangeModeRequest): Promise<ChangeModeResponse> {
        const options = ParamCreater().changeMode(changeModeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以在集群创建成功后，修改安全组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 切换安全组
     * @param {string} clusterId 待修改安全组的集群ID。
     * @param {ChangeSecurityGroupReq} changeSecurityGroupReq 更改安全组请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeSecurityGroup(changeSecurityGroupRequest?: ChangeSecurityGroupRequest): Promise<ChangeSecurityGroupResponse> {
        const options = ParamCreater().changeSecurityGroup(changeSecurityGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于设置自动创建快照，默认一天创建一个快照。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置自动创建快照策略
     * @param {string} clusterId 指定要自动创建快照的集群ID。
     * @param {SetRDSBackupCnfReq} setRDSBackupCnfReq 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAutoCreatePolicy(createAutoCreatePolicyRequest?: CreateAutoCreatePolicyRequest): Promise<CreateAutoCreatePolicyResponse> {
        const options = ParamCreater().createAutoCreatePolicy(createAutoCreatePolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于开启公网访问。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启公网访问
     * @param {string} clusterId 指定开启公网访问的集群ID。
     * @param {BindPublicReq} bindPublicReq 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createBindPublic(createBindPublicRequest?: CreateBindPublicRequest): Promise<CreateBindPublicResponse> {
        const options = ParamCreater().createBindPublic(createBindPublicRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于创建集群。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建集群
     * @param {CreateClusterReq} createClusterReq 创建集群请求体。
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
     * 该接口用于给指定集群添加标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加指定集群标签
     * @param {string} clusterId 指定待添加标签的集群ID。
     * @param {string} resourceType 资源类型，当前固定值为“css-cluster”，表示是集群类型。
     * @param {TagReq} tag 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createClustersTags(createClustersTagsRequest?: CreateClustersTagsRequest): Promise<CreateClustersTagsResponse> {
        const options = ParamCreater().createClustersTags(createClustersTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于加载存放于OBS的自定义词库。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 加载自定义词库
     * @param {string} clusterId 指定配置自定义词库的集群ID。
     * @param {LoadCustomThesaurusReq} loadCustomThesaurusReq 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createLoadIkThesaurus(createLoadIkThesaurusRequest?: CreateLoadIkThesaurusRequest): Promise<CreateLoadIkThesaurusResponse> {
        const options = ParamCreater().createLoadIkThesaurus(createLoadIkThesaurusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于备份日志。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 备份日志
     * @param {string} clusterId 指定待备份日志的集群ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createLogBackup(createLogBackupRequest?: CreateLogBackupRequest): Promise<CreateLogBackupResponse> {
        const options = ParamCreater().createLogBackup(createLogBackupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于手动创建一个快照。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 手动创建快照
     * @param {string} clusterId 指定要创建快照的集群ID。
     * @param {CreateSnapshotReq} createSnapshotReq 
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
     * 此接口用于删除集群。集群删除将释放此集群的所有资源，包括客户数据。如果需要保留客户集群数据，建议在删除集群前先创建快照。
     * 
     * &gt;此接口亦可用于包年/包月集群退订。公安冻结的集群不能删除。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除集群
     * @param {string} clusterId 指定删除集群ID。
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
     * 此接口用于删除集群标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除集群标签
     * @param {string} clusterId 指定删除标签的集群ID。
     * @param {string} resourceType 资源类型，当前固定值为“css-cluster”，表示是集群类型。
     * @param {string} key 需要删除的标签名。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteClustersTags(deleteClustersTagsRequest?: DeleteClustersTagsRequest): Promise<DeleteClustersTagsResponse> {
        const options = ParamCreater().deleteClustersTags(deleteClustersTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于删除自定义词库。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除自定义词库
     * @param {string} clusterId 指定要删除自定义词库的集群ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteIkThesaurus(deleteIkThesaurusRequest?: DeleteIkThesaurusRequest): Promise<DeleteIkThesaurusResponse> {
        const options = ParamCreater().deleteIkThesaurus(deleteIkThesaurusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于删除快照。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除快照
     * @param {string} clusterId 删除快照所属的集群的ID。
     * @param {string} snapshotId 要删除快照的ID。
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
     * 该接口用于下载安全证书。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 下载安全证书
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public downloadCert(downloadCertRequest?: DownloadCertRequest): Promise<DownloadCertResponse> {
        const options = ParamCreater().downloadCert();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询并显示集群列表以及集群的状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询集群列表
     * @param {number} [start] 指定查询起始值，默认值为1，即从第1个集群开始查询。
     * @param {number} [limit] 指定查询个数，默认值为10，即一次查询10个集群信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listClustersDetails(listClustersDetailsRequest?: ListClustersDetailsRequest): Promise<ListClustersDetailsResponse> {
        const options = ParamCreater().listClustersDetails(listClustersDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询指定region下的所有标签集合。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有标签
     * @param {string} resourceType 资源类型，当前固定值为“css-cluster”，表示是集群类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listClustersTags(listClustersTagsRequest?: ListClustersTagsRequest): Promise<ListClustersTagsResponse> {
        const options = ParamCreater().listClustersTags(listClustersTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询并显示支持的实例规格对应的ID。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取实例规格列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFlavors(listFlavorsRequest?: ListFlavorsRequest): Promise<ListFlavorsResponse> {
        const options = ParamCreater().listFlavors();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询具体某个集群的日志任务记录列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询作业列表
     * @param {string} clusterId 指定查询集群ID。
     * @param {number} [start] 指定查询起始值，默认值为1，即从第1个任务开始查询。
     * @param {number} [limit] 指定查询个数，默认值为10，即一次查询10个任务信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLogsJob(listLogsJobRequest?: ListLogsJobRequest): Promise<ListLogsJobResponse> {
        const options = ParamCreater().listLogsJob(listLogsJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询集群的所有快照。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询快照列表
     * @param {string} clusterId 指定需查询的快照所属的集群的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSnapshots(listSnapshotsRequest?: ListSnapshotsRequest): Promise<ListSnapshotsResponse> {
        const options = ParamCreater().listSnapshots(listSnapshotsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于获取当前集群现有的参数配置列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取参数配置列表
     * @param {string} clusterId 指定查询集群ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listYmls(listYmlsRequest?: ListYmlsRequest): Promise<ListYmlsResponse> {
        const options = ParamCreater().listYmls(listYmlsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可获取参数配置的任务操作列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取参数配置任务列表
     * @param {string} clusterId 指定查询集群ID。
     * @param {number} [start] 指定查询起始值，默认值为1，即从第1个任务开始查询。
     * @param {number} [limit] 指定查询个数，默认值为10，即一次查询10个任务信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listYmlsJob(listYmlsJobRequest?: ListYmlsJobRequest): Promise<ListYmlsJobResponse> {
        const options = ParamCreater().listYmlsJob(listYmlsJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于修改集群密码。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改密码
     * @param {string} clusterId 指定待修改集群密码的集群ID。
     * @param {ResetPasswordReq} resetPasswordReq 
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
     * 此接口用于重启集群，重启集群将导致业务中断。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重启集群
     * @param {string} clusterId 指定重启集群ID。
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
     * 该接口用于手动恢复一个快照。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 恢复快照
     * @param {string} clusterId 恢复快照所属的集群ID。
     * @param {string} snapshotId 快照ID。
     * @param {RestoreSnapshotReq} restoreSnapshotReq 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public restoreSnapshot(restoreSnapshotRequest?: RestoreSnapshotRequest): Promise<RestoreSnapshotResponse> {
        const options = ParamCreater().restoreSnapshot(restoreSnapshotRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询自动创建快照策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询自动创建快照的策略
     * @param {string} clusterId 指定需查询自动创建快照策略的集群ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAutoCreatePolicy(showAutoCreatePolicyRequest?: ShowAutoCreatePolicyRequest): Promise<ShowAutoCreatePolicyResponse> {
        const options = ParamCreater().showAutoCreatePolicy(showAutoCreatePolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询并显示单个集群详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询集群详情
     * @param {string} clusterId 指定查询集群ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showClusterDetail(showClusterDetailRequest?: ShowClusterDetailRequest): Promise<ShowClusterDetailResponse> {
        const options = ParamCreater().showClusterDetail(showClusterDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询指定集群的标签信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定集群的标签
     * @param {string} clusterId 指定待查询的集群ID。
     * @param {string} resourceType 资源类型，当前固定值为“css-cluster”，表示是集群类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showClusterTag(showClusterTagRequest?: ShowClusterTagRequest): Promise<ShowClusterTagResponse> {
        const options = ParamCreater().showClusterTag(showClusterTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于日志基础配置查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询日志基础配置
     * @param {string} clusterId 指定查询集群ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showGetLogSetting(showGetLogSettingRequest?: ShowGetLogSettingRequest): Promise<ShowGetLogSettingResponse> {
        const options = ParamCreater().showGetLogSetting(showGetLogSettingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询自定义词库的加载状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询自定义词库状态
     * @param {string} clusterId 指定需查询词库状态的集群ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showIkThesaurus(showIkThesaurusRequest?: ShowIkThesaurusRequest): Promise<ShowIkThesaurusResponse> {
        const options = ParamCreater().showIkThesaurus(showIkThesaurusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询日志信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询日志
     * @param {string} clusterId 指定查询集群ID。
     * @param {GetLogBackupReq} getLogBackupReq 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showLogBackup(showLogBackupRequest?: ShowLogBackupRequest): Promise<ShowLogBackupResponse> {
        const options = ParamCreater().showLogBackup(showLogBackupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于获取终端节点连接。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取终端节点连接
     * @param {string} clusterId 指定待查询的集群ID。
     * @param {number} [start] 指定查询起始值，默认值为1，即从第1个任务开始查询。
     * @param {number} [limit] 指定查询个数，默认值为10，即一次查询10个任务信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVpcepConnection(showVpcepConnectionRequest?: ShowVpcepConnectionRequest): Promise<ShowVpcepConnectionResponse> {
        const options = ParamCreater().showVpcepConnection(showVpcepConnectionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于自动设置集群快照的基础配置，包括配置OBS桶和IAM委托。
     * 
     * 
     * - “OBS桶”：快照存储的OBS桶位置。
     * 
     * - “备份路径”：快照在OBS桶中的存放路径。
     * 
     * - “IAM委托”：由于需要将快照保存在OBS中，所以需要在IAM中设置对应的委托获取对OBS服务的授权。
     * 
     * &gt;自动设置集群快照接口将会自动创建快照OBS桶和委托。如果有多个集群，每个集群使用这个接口都会创建一个不一样的OBS桶，可能会导致OBS的配额不够，较多的OBS桶也难以维护。建议可以直接使用[修改集群快照的基础配置](UpdateSnapshotSetting.xml)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 自动设置集群快照的基础配置（不推荐使用）
     * @param {string} clusterId 指定要备份的集群ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startAutoSetting(startAutoSettingRequest?: StartAutoSettingRequest): Promise<StartAutoSettingResponse> {
        const options = ParamCreater().startAutoSetting(startAutoSettingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于日志自动备份策略开启。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启日志自动备份策略
     * @param {string} clusterId 指定开启日志备份的集群ID。
     * @param {StartLogAutoBackupPolicyReq} startLogAutoBackupPolicyReq 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startLogAutoBackupPolicy(startLogAutoBackupPolicyRequest?: StartLogAutoBackupPolicyRequest): Promise<StartLogAutoBackupPolicyResponse> {
        const options = ParamCreater().startLogAutoBackupPolicy(startLogAutoBackupPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于开启日志功能。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启日志功能
     * @param {string} clusterId 指定开启日志的集群ID。
     * @param {StartLogsReq} startLogsReq 开启日志请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startLogs(startLogsRequest?: StartLogsRequest): Promise<StartLogsResponse> {
        const options = ParamCreater().startLogs(startLogsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于开启公网访问控制白名单。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启公网访问控制白名单
     * @param {string} clusterId 指定开启公网访问控制白名单集群ID。
     * @param {StartPublicWhitelistReq} startPublicWhitelistReq 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startPublicWhitelist(startPublicWhitelistRequest?: StartPublicWhitelistRequest): Promise<StartPublicWhitelistResponse> {
        const options = ParamCreater().startPublicWhitelist(startPublicWhitelistRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于开启终端节点服务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启终端节点服务
     * @param {string} clusterId 指定开启终端节点的集群ID。
     * @param {StartVpecpReq} startVpecpReq 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startVpecp(startVpecpRequest?: StartVpecpRequest): Promise<StartVpecpResponse> {
        const options = ParamCreater().startVpecp(startVpecpRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于日志自动备份策略关闭。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关闭日志自动备份策略
     * @param {string} clusterId 指定关闭日志自动备份的集群ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopLogAutoBackupPolicy(stopLogAutoBackupPolicyRequest?: StopLogAutoBackupPolicyRequest): Promise<StopLogAutoBackupPolicyResponse> {
        const options = ParamCreater().stopLogAutoBackupPolicy(stopLogAutoBackupPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于关闭日志功能。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关闭日志功能
     * @param {string} clusterId 指定关闭日志的集群ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopLogs(stopLogsRequest?: StopLogsRequest): Promise<StopLogsResponse> {
        const options = ParamCreater().stopLogs(stopLogsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于关闭公网访问控制白名单。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关闭公网访问控制白名单
     * @param {string} clusterId 指定关闭公网访问控制白名单集群ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopPublicWhitelist(stopPublicWhitelistRequest?: StopPublicWhitelistRequest): Promise<StopPublicWhitelistResponse> {
        const options = ParamCreater().stopPublicWhitelist(stopPublicWhitelistRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于停用快照功能。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停用快照功能
     * @param {string} clusterId 停用快照所属的集群的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopSnapshot(stopSnapshotRequest?: StopSnapshotRequest): Promise<StopSnapshotResponse> {
        const options = ParamCreater().stopSnapshot(stopSnapshotRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于关闭终端节点服务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关闭终端节点服务
     * @param {string} clusterId 指定待关闭终端节点的集群ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopVpecp(stopVpecpRequest?: StopVpecpRequest): Promise<StopVpecpResponse> {
        const options = ParamCreater().stopVpecp(stopVpecpRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于对集群批量添加或删除标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加或删除集群标签
     * @param {string} clusterId 指定批量添加标签的集群ID。
     * @param {string} resourceType 资源类型，当前固定值为“css-cluster”，表示是集群类型。
     * @param {BatchAddOrDeleteTagOnClusterReq} batchAddOrDeleteTagOnClusterReq 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateBatchClustersTags(updateBatchClustersTagsRequest?: UpdateBatchClustersTagsRequest): Promise<UpdateBatchClustersTagsResponse> {
        const options = ParamCreater().updateBatchClustersTags(updateBatchClustersTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于修改集群名称。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改集群名称
     * @param {string} clusterId 指定待更改集群名称的集群ID。
     * @param {UpdateClusterNameReq} updateClusterNameReq 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateClusterName(updateClusterNameRequest?: UpdateClusterNameRequest): Promise<UpdateClusterNameResponse> {
        const options = ParamCreater().updateClusterName(updateClusterNameRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于集群扩容实例（仅支持扩容elasticsearch实例）。只扩容普通节点，且只针对要扩容的集群实例不存在特殊节点（Master、Client、冷数据节点）的情况。
     * 
     * 集群扩容实例的数量和存储容量，请参考[扩容实例的数量和存储容量](UpdateExtendInstanceStorage.xml)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 扩容集群
     * @param {string} clusterId 指定待扩容的集群ID。
     * @param {ExtendClusterReq} extendClusterReq 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateExtendCluster(updateExtendClusterRequest?: UpdateExtendClusterRequest): Promise<UpdateExtendClusterResponse> {
        const options = ParamCreater().updateExtendCluster(updateExtendClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于集群扩容不同类型实例的个数以及存储容量。已经存在独立Master、Client、冷数据节点的集群使用该接口扩容。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 扩容实例的数量和存储容量
     * @param {string} clusterId 指定待扩容的集群ID。
     * @param {RoleExtendReq} roleExtendReq 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateExtendInstanceStorage(updateExtendInstanceStorageRequest?: UpdateExtendInstanceStorageRequest): Promise<UpdateExtendInstanceStorageResponse> {
        const options = ParamCreater().updateExtendInstanceStorage(updateExtendInstanceStorageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于变更集群规格。只支持变更ess节点类型。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 变更规格
     * @param {string} clusterId 指定待更改规格的集群ID。
     * @param {UpdateFlavorReq} updateFlavorReq 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateFlavor(updateFlavorRequest?: UpdateFlavorRequest): Promise<UpdateFlavorResponse> {
        const options = ParamCreater().updateFlavor(updateFlavorRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改集群规格。支持修改:
     * - ess： 数据节点。
     * - ess-cold: 冷数据节点。
     * - ess-client: Client节点。
     * - ess-master: Master节点。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 指定节点类型规格变更
     * @param {string} clusterId 指定待更改规格的集群ID。
     * @param {string} types 指定待更改的集群节点类型。 - ess：数据节点。 - ess-cold：冷数据节点。 - ess-client：Client节点。 - ess-master：Master节点。
     * @param {UpdateFlavorByTypeReq} updateFlavorByTypeReq 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateFlavorByType(updateFlavorByTypeRequest?: UpdateFlavorByTypeRequest): Promise<UpdateFlavorByTypeResponse> {
        const options = ParamCreater().updateFlavorByType(updateFlavorByTypeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于替换失败节点。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 节点替换
     * @param {string} clusterId 指定替换集群ID。
     * @param {string} instanceId 指定替换节点ID。
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
     * 该接口用于修改日志基础配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改日志基础配置
     * @param {string} clusterId 指定更改日志基础配置的集群ID。
     * @param {UpdateLogSettingReq} updateLogSettingReq 更新日志配置请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateLogSetting(updateLogSettingRequest?: UpdateLogSettingRequest): Promise<UpdateLogSettingResponse> {
        const options = ParamCreater().updateLogSetting(updateLogSettingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于按需集群转包周期集群。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 按需集群转包周期
     * @param {string} clusterId 指定待转包周期的集群ID。
     * @param {PeriodReq} periodReq 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateOndemandClusterToPeriod(updateOndemandClusterToPeriodRequest?: UpdateOndemandClusterToPeriodRequest): Promise<UpdateOndemandClusterToPeriodResponse> {
        const options = ParamCreater().updateOndemandClusterToPeriod(updateOndemandClusterToPeriodRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于修改公网访问带宽。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改公网访问带宽
     * @param {string} clusterId 指定修改公网访问带宽集群ID。
     * @param {BindPublicReqEipReq} bindPublicReqEip 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePublicBandWidth(updatePublicBandWidthRequest?: UpdatePublicBandWidthRequest): Promise<UpdatePublicBandWidthResponse> {
        const options = ParamCreater().updatePublicBandWidth(updatePublicBandWidthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于集群对不同类型实例的个数以及存储容量进行缩容。包周期类型的集群不支持通过api进行指定节点类型缩容操作。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 指定节点类型缩容
     * @param {string} clusterId 指定待缩容的集群ID。
     * @param {ShrinkClusterReq} shrinkClusterReq 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateShrinkCluster(updateShrinkClusterRequest?: UpdateShrinkClusterRequest): Promise<UpdateShrinkClusterResponse> {
        const options = ParamCreater().updateShrinkCluster(updateShrinkClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以对集群现有节点中指定节点进行缩容。包周期类型的集群不支持通过api进行指定节点缩容操作。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 指定节点缩容
     * @param {string} clusterId 指定待缩容的集群ID。
     * @param {ShrinkNodesReq} shrinkNodesReq 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateShrinkNodes(updateShrinkNodesRequest?: UpdateShrinkNodesRequest): Promise<UpdateShrinkNodesResponse> {
        const options = ParamCreater().updateShrinkNodes(updateShrinkNodesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于修改集群快照的基础配置，可修改OBS桶和IAM委托。
     * 
     * 可以使用该接口开启快照功能。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改集群快照的基础配置
     * @param {string} clusterId 指定待操作的集群ID。
     * @param {UpdateSnapshotSettingReq} updateSnapshotSettingReq 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSnapshotSetting(updateSnapshotSettingRequest?: UpdateSnapshotSettingRequest): Promise<UpdateSnapshotSettingResponse> {
        const options = ParamCreater().updateSnapshotSetting(updateSnapshotSettingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于关闭公网访问。包周期类型的集群不支持通过api进行关闭公网访问。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关闭公网访问
     * @param {string} clusterId 指定关闭公网访问集群ID。
     * @param {UnBindPublicReq} unBindPublicReq 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateUnbindPublic(updateUnbindPublicRequest?: UpdateUnbindPublicRequest): Promise<UpdateUnbindPublicResponse> {
        const options = ParamCreater().updateUnbindPublic(updateUnbindPublicRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于更新终端节点连接。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新终端节点连接
     * @param {string} clusterId 指定更新终端节点的集群ID。
     * @param {UpdateVpcepConnectionReq} updateVpcepConnectionReq 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateVpcepConnection(updateVpcepConnectionRequest?: UpdateVpcepConnectionRequest): Promise<UpdateVpcepConnectionResponse> {
        const options = ParamCreater().updateVpcepConnection(updateVpcepConnectionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于修改终端节点服务白名单。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改终端节点服务白名单
     * @param {string} clusterId 指定待更改的集群ID。
     * @param {UpdateVpcepWhitelistReq} updateVpcepWhitelistReq 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateVpcepWhitelist(updateVpcepWhitelistRequest?: UpdateVpcepWhitelistRequest): Promise<UpdateVpcepWhitelistResponse> {
        const options = ParamCreater().updateVpcepWhitelist(updateVpcepWhitelistRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于修改参数配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改参数配置
     * @param {string} clusterId 指定修改参数配置的集群ID。
     * @param {UpdateYmlsReq} updateYmlsReq 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateYmls(updateYmlsRequest?: UpdateYmlsRequest): Promise<UpdateYmlsResponse> {
        const options = ParamCreater().updateYmls(updateYmlsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于开启Kibana公网访问。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启Kibana公网访问
     * @param {string} clusterId 指定待开启kibana公网访问的集群ID。
     * @param {StartKibanaPublicReq} startKibanaPublicReq 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startKibanaPublic(startKibanaPublicRequest?: StartKibanaPublicRequest): Promise<StartKibanaPublicResponse> {
        const options = ParamCreater().startKibanaPublic(startKibanaPublicRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于关闭Kibana公网访问控制。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关闭Kibana公网访问控制
     * @param {string} clusterId 指定关闭Kibana公网访问控制的集群ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopPublicKibanaWhitelist(stopPublicKibanaWhitelistRequest?: StopPublicKibanaWhitelistRequest): Promise<StopPublicKibanaWhitelistResponse> {
        const options = ParamCreater().stopPublicKibanaWhitelist(stopPublicKibanaWhitelistRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于修改Kibana公网带宽。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改Kibana公网带宽
     * @param {string} clusterId 指定待修改kibana公网带宽的集群ID。
     * @param {UpdatePublicKibanaBandwidthReq} updatePublicKibanaBandwidthReq 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAlterKibana(updateAlterKibanaRequest?: UpdateAlterKibanaRequest): Promise<UpdateAlterKibanaResponse> {
        const options = ParamCreater().updateAlterKibana(updateAlterKibanaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于关闭Kibana公网访问。包周期类型集群不支持通过api进行关闭Kibana公网访问。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关闭Kibana公网访问
     * @param {string} clusterId 指定待关闭的kibana公网访问的集群ID。
     * @param {CloseKibanaPublicReq} closeKibanaPublicReq 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateCloseKibana(updateCloseKibanaRequest?: UpdateCloseKibanaRequest): Promise<UpdateCloseKibanaResponse> {
        const options = ParamCreater().updateCloseKibana(updateCloseKibanaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口通过修改kibana白名单，修改kibana的访问权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改Kibana公网访问控制
     * @param {string} clusterId 指定修改kibana的访问权限的集群ID。
     * @param {UpdatePublicKibanaWhitelistReq} updatePublicKibanaWhitelistReq 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePublicKibanaWhitelist(updatePublicKibanaWhitelistRequest?: UpdatePublicKibanaWhitelistRequest): Promise<UpdatePublicKibanaWhitelistResponse> {
        const options = ParamCreater().updatePublicKibanaWhitelist(updatePublicKibanaWhitelistRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于添加到自定义模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加到自定义模板
     * @param {string} clusterId 指定添加自定义模板的集群ID。
     * @param {AddFavoriteReq} addFavoriteReq 添加自定义模板请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addFavorite(addFavoriteRequest?: AddFavoriteRequest): Promise<AddFavoriteResponse> {
        const options = ParamCreater().addFavorite(addFavoriteRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于创建配置文件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建配置文件
     * @param {string} clusterId 指定创建配置文件的集群ID。
     * @param {CreateCnfReq} createCnfReq 创建配置文件的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCnf(createCnfRequest?: CreateCnfRequest): Promise<CreateCnfResponse> {
        const options = ParamCreater().createCnf(createCnfRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除配置文件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除配置文件
     * @param {string} clusterId 指定删除配置文件的集群ID。
     * @param {DeleteConfReq} deleteConfReq 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteConf(deleteConfRequest?: DeleteConfRequest): Promise<DeleteConfResponse> {
        const options = ParamCreater().deleteConf(deleteConfRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于删除自定义模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除自定义模板
     * @param {DeleteTemplateReq} deleteTemplateReq 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTemplate(deleteTemplateRequest?: DeleteTemplateRequest): Promise<DeleteTemplateResponse> {
        const options = ParamCreater().deleteTemplate(deleteTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询操作记录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询操作记录
     * @param {string} clusterId 指定查询集群ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listActions(listActionsRequest?: ListActionsRequest): Promise<ListActionsResponse> {
        const options = ParamCreater().listActions(listActionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询配置文件列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询配置文件列表
     * @param {string} clusterId 指定查询集群ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listConfs(listConfsRequest?: ListConfsRequest): Promise<ListConfsResponse> {
        const options = ParamCreater().listConfs(listConfsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询pipeline列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询pipeline列表
     * @param {string} clusterId 指定查询集群ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPipelines(listPipelinesRequest?: ListPipelinesRequest): Promise<ListPipelinesResponse> {
        const options = ParamCreater().listPipelines(listPipelinesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询模板列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询模板列表
     * @param {string} [type] 模板类型。custom为自定义模板，system为系统模板。不指定查询模板类型默认查找自定义模板和系统模板。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTemplates(listTemplatesRequest?: ListTemplatesRequest): Promise<ListTemplatesResponse> {
        const options = ParamCreater().listTemplates(listTemplatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询配置文件内容。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询配置文件内容
     * @param {string} clusterId 指定查询集群ID。
     * @param {string} name 配置文件名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showGetConfDetail(showGetConfDetailRequest?: ShowGetConfDetailRequest): Promise<ShowGetConfDetailResponse> {
        const options = ParamCreater().showGetConfDetail(showGetConfDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于连通性测试。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 连通性测试
     * @param {string} clusterId 指定待测试的集群ID。
     * @param {StartConnectivityTestReq} startConnectivityTestReq 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startConnectivityTest(startConnectivityTestRequest?: StartConnectivityTestRequest): Promise<StartConnectivityTestResponse> {
        const options = ParamCreater().startConnectivityTest(startConnectivityTestRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于启动pipeline迁移数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启动pipeline迁移数据
     * @param {string} clusterId 指定开启pipeline的集群ID。
     * @param {StartPipelineReq} startPipelineReq 启动pipeline迁移数据的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startPipeline(startPipelineRequest?: StartPipelineRequest): Promise<StartPipelineResponse> {
        const options = ParamCreater().startPipeline(startPipelineRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于停止pipeline迁移数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停止pipeline迁移数据
     * @param {string} clusterId 指定停止pipeline的集群ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopPipeline(stopPipelineRequest?: StopPipelineRequest): Promise<StopPipelineResponse> {
        const options = ParamCreater().stopPipeline(stopPipelineRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于更新配置文件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新配置文件
     * @param {string} clusterId 指定更新配置文件的集群ID。
     * @param {CreateCnfReq} updateCnfReq 更新配置文件的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateCnf(updateCnfRequest?: UpdateCnfRequest): Promise<UpdateCnfResponse> {
        const options = ParamCreater().updateCnf(updateCnfRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 由于集群数据面业务的增长或者不确定性，很难在一开始就能够把集群的规模形态想明白，该接口能够在非独立master和client的集群上面独立master、client角色。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addIndependentNode(addIndependentNodeRequest?: AddIndependentNodeRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/type/{type}/independent",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;
            
            let type;

            if (addIndependentNodeRequest !== null && addIndependentNodeRequest !== undefined) {
                if (addIndependentNodeRequest instanceof AddIndependentNodeRequest) {
                    clusterId = addIndependentNodeRequest.clusterId;
                    type = addIndependentNodeRequest.type;
                    body = addIndependentNodeRequest.body
                } else {
                    clusterId = addIndependentNodeRequest['cluster_id'];
                    type = addIndependentNodeRequest['type'];
                    body = addIndependentNodeRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling addIndependentNode.');
            }
            if (type === null || type === undefined) {
            throw new RequiredError('type','Required parameter type was null or undefined when calling addIndependentNode.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId,'type': type, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于切换集群的安全模式。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeMode(changeModeRequest?: ChangeModeRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/mode/change",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (changeModeRequest !== null && changeModeRequest !== undefined) {
                if (changeModeRequest instanceof ChangeModeRequest) {
                    clusterId = changeModeRequest.clusterId;
                    body = changeModeRequest.body
                } else {
                    clusterId = changeModeRequest['cluster_id'];
                    body = changeModeRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling changeMode.');
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
         * 该接口可以在集群创建成功后，修改安全组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeSecurityGroup(changeSecurityGroupRequest?: ChangeSecurityGroupRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/sg/change",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (changeSecurityGroupRequest !== null && changeSecurityGroupRequest !== undefined) {
                if (changeSecurityGroupRequest instanceof ChangeSecurityGroupRequest) {
                    clusterId = changeSecurityGroupRequest.clusterId;
                    body = changeSecurityGroupRequest.body
                } else {
                    clusterId = changeSecurityGroupRequest['cluster_id'];
                    body = changeSecurityGroupRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling changeSecurityGroup.');
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
         * 该接口用于设置自动创建快照，默认一天创建一个快照。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAutoCreatePolicy(createAutoCreatePolicyRequest?: CreateAutoCreatePolicyRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/index_snapshot/policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (createAutoCreatePolicyRequest !== null && createAutoCreatePolicyRequest !== undefined) {
                if (createAutoCreatePolicyRequest instanceof CreateAutoCreatePolicyRequest) {
                    clusterId = createAutoCreatePolicyRequest.clusterId;
                    body = createAutoCreatePolicyRequest.body
                } else {
                    clusterId = createAutoCreatePolicyRequest['cluster_id'];
                    body = createAutoCreatePolicyRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling createAutoCreatePolicy.');
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
         * 该接口用于开启公网访问。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createBindPublic(createBindPublicRequest?: CreateBindPublicRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/public/open",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (createBindPublicRequest !== null && createBindPublicRequest !== undefined) {
                if (createBindPublicRequest instanceof CreateBindPublicRequest) {
                    clusterId = createBindPublicRequest.clusterId;
                    body = createBindPublicRequest.body
                } else {
                    clusterId = createBindPublicRequest['cluster_id'];
                    body = createBindPublicRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling createBindPublic.');
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
         * 该接口用于创建集群。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCluster(createClusterRequest?: CreateClusterRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters",
                contentType: "application/json",
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
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于给指定集群添加标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createClustersTags(createClustersTagsRequest?: CreateClustersTagsRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/{resource_type}/{cluster_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;
            
            let resourceType;

            if (createClustersTagsRequest !== null && createClustersTagsRequest !== undefined) {
                if (createClustersTagsRequest instanceof CreateClustersTagsRequest) {
                    clusterId = createClustersTagsRequest.clusterId;
                    resourceType = createClustersTagsRequest.resourceType;
                    body = createClustersTagsRequest.body
                } else {
                    clusterId = createClustersTagsRequest['cluster_id'];
                    resourceType = createClustersTagsRequest['resource_type'];
                    body = createClustersTagsRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling createClustersTags.');
            }
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling createClustersTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId,'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于加载存放于OBS的自定义词库。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createLoadIkThesaurus(createLoadIkThesaurusRequest?: CreateLoadIkThesaurusRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/thesaurus",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (createLoadIkThesaurusRequest !== null && createLoadIkThesaurusRequest !== undefined) {
                if (createLoadIkThesaurusRequest instanceof CreateLoadIkThesaurusRequest) {
                    clusterId = createLoadIkThesaurusRequest.clusterId;
                    body = createLoadIkThesaurusRequest.body
                } else {
                    clusterId = createLoadIkThesaurusRequest['cluster_id'];
                    body = createLoadIkThesaurusRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling createLoadIkThesaurus.');
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
         * 该接口用于备份日志。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createLogBackup(createLogBackupRequest?: CreateLogBackupRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/logs/collect",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (createLogBackupRequest !== null && createLogBackupRequest !== undefined) {
                if (createLogBackupRequest instanceof CreateLogBackupRequest) {
                    clusterId = createLogBackupRequest.clusterId;
                } else {
                    clusterId = createLogBackupRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling createLogBackup.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于手动创建一个快照。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSnapshot(createSnapshotRequest?: CreateSnapshotRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/index_snapshot",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (createSnapshotRequest !== null && createSnapshotRequest !== undefined) {
                if (createSnapshotRequest instanceof CreateSnapshotRequest) {
                    clusterId = createSnapshotRequest.clusterId;
                    body = createSnapshotRequest.body
                } else {
                    clusterId = createSnapshotRequest['cluster_id'];
                    body = createSnapshotRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling createSnapshot.');
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
         * 此接口用于删除集群。集群删除将释放此集群的所有资源，包括客户数据。如果需要保留客户集群数据，建议在删除集群前先创建快照。
         * 
         * &gt;此接口亦可用于包年/包月集群退订。公安冻结的集群不能删除。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteCluster(deleteClusterRequest?: DeleteClusterRequest) {
            const options = {
                method: "DELETE",
                url: "/v1.0/{project_id}/clusters/{cluster_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (deleteClusterRequest !== null && deleteClusterRequest !== undefined) {
                if (deleteClusterRequest instanceof DeleteClusterRequest) {
                    clusterId = deleteClusterRequest.clusterId;
                } else {
                    clusterId = deleteClusterRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling deleteCluster.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 此接口用于删除集群标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteClustersTags(deleteClustersTagsRequest?: DeleteClustersTagsRequest) {
            const options = {
                method: "DELETE",
                url: "/v1.0/{project_id}/{resource_type}/{cluster_id}/tags/{key}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let resourceType;
            
            let key;

            if (deleteClustersTagsRequest !== null && deleteClustersTagsRequest !== undefined) {
                if (deleteClustersTagsRequest instanceof DeleteClustersTagsRequest) {
                    clusterId = deleteClustersTagsRequest.clusterId;
                    resourceType = deleteClustersTagsRequest.resourceType;
                    key = deleteClustersTagsRequest.key;
                } else {
                    clusterId = deleteClustersTagsRequest['cluster_id'];
                    resourceType = deleteClustersTagsRequest['resource_type'];
                    key = deleteClustersTagsRequest['key'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling deleteClustersTags.');
            }
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling deleteClustersTags.');
            }
            if (key === null || key === undefined) {
            throw new RequiredError('key','Required parameter key was null or undefined when calling deleteClustersTags.');
            }

            options.pathParams = { 'cluster_id': clusterId,'resource_type': resourceType,'key': key, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于删除自定义词库。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteIkThesaurus(deleteIkThesaurusRequest?: DeleteIkThesaurusRequest) {
            const options = {
                method: "DELETE",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/thesaurus",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (deleteIkThesaurusRequest !== null && deleteIkThesaurusRequest !== undefined) {
                if (deleteIkThesaurusRequest instanceof DeleteIkThesaurusRequest) {
                    clusterId = deleteIkThesaurusRequest.clusterId;
                } else {
                    clusterId = deleteIkThesaurusRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling deleteIkThesaurus.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于删除快照。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSnapshot(deleteSnapshotRequest?: DeleteSnapshotRequest) {
            const options = {
                method: "DELETE",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/index_snapshot/{snapshot_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let snapshotId;

            if (deleteSnapshotRequest !== null && deleteSnapshotRequest !== undefined) {
                if (deleteSnapshotRequest instanceof DeleteSnapshotRequest) {
                    clusterId = deleteSnapshotRequest.clusterId;
                    snapshotId = deleteSnapshotRequest.snapshotId;
                } else {
                    clusterId = deleteSnapshotRequest['cluster_id'];
                    snapshotId = deleteSnapshotRequest['snapshot_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling deleteSnapshot.');
            }
            if (snapshotId === null || snapshotId === undefined) {
            throw new RequiredError('snapshotId','Required parameter snapshotId was null or undefined when calling deleteSnapshot.');
            }

            options.pathParams = { 'cluster_id': clusterId,'snapshot_id': snapshotId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于下载安全证书。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        downloadCert() {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/cer/download",
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
         * 该接口用于查询并显示集群列表以及集群的状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listClustersDetails(listClustersDetailsRequest?: ListClustersDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/clusters",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let start;
            
            let limit;

            if (listClustersDetailsRequest !== null && listClustersDetailsRequest !== undefined) {
                if (listClustersDetailsRequest instanceof ListClustersDetailsRequest) {
                    start = listClustersDetailsRequest.start;
                    limit = listClustersDetailsRequest.limit;
                } else {
                    start = listClustersDetailsRequest['start'];
                    limit = listClustersDetailsRequest['limit'];
                }
            }

        
            if (start !== null && start !== undefined) {
                localVarQueryParameter['start'] = start;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询指定region下的所有标签集合。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listClustersTags(listClustersTagsRequest?: ListClustersTagsRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/{resource_type}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceType;

            if (listClustersTagsRequest !== null && listClustersTagsRequest !== undefined) {
                if (listClustersTagsRequest instanceof ListClustersTagsRequest) {
                    resourceType = listClustersTagsRequest.resourceType;
                } else {
                    resourceType = listClustersTagsRequest['resource_type'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling listClustersTags.');
            }

            options.pathParams = { 'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询并显示支持的实例规格对应的ID。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFlavors() {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/es-flavors",
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
         * 该接口用于查询具体某个集群的日志任务记录列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLogsJob(listLogsJobRequest?: ListLogsJobRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/logs/records",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let start;
            
            let limit;

            if (listLogsJobRequest !== null && listLogsJobRequest !== undefined) {
                if (listLogsJobRequest instanceof ListLogsJobRequest) {
                    clusterId = listLogsJobRequest.clusterId;
                    start = listLogsJobRequest.start;
                    limit = listLogsJobRequest.limit;
                } else {
                    clusterId = listLogsJobRequest['cluster_id'];
                    start = listLogsJobRequest['start'];
                    limit = listLogsJobRequest['limit'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listLogsJob.');
            }
            if (start !== null && start !== undefined) {
                localVarQueryParameter['start'] = start;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询集群的所有快照。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSnapshots(listSnapshotsRequest?: ListSnapshotsRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/index_snapshots",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (listSnapshotsRequest !== null && listSnapshotsRequest !== undefined) {
                if (listSnapshotsRequest instanceof ListSnapshotsRequest) {
                    clusterId = listSnapshotsRequest.clusterId;
                } else {
                    clusterId = listSnapshotsRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listSnapshots.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于获取当前集群现有的参数配置列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listYmls(listYmlsRequest?: ListYmlsRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/ymls/template",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (listYmlsRequest !== null && listYmlsRequest !== undefined) {
                if (listYmlsRequest instanceof ListYmlsRequest) {
                    clusterId = listYmlsRequest.clusterId;
                } else {
                    clusterId = listYmlsRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listYmls.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可获取参数配置的任务操作列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listYmlsJob(listYmlsJobRequest?: ListYmlsJobRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/ymls/joblists",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let start;
            
            let limit;

            if (listYmlsJobRequest !== null && listYmlsJobRequest !== undefined) {
                if (listYmlsJobRequest instanceof ListYmlsJobRequest) {
                    clusterId = listYmlsJobRequest.clusterId;
                    start = listYmlsJobRequest.start;
                    limit = listYmlsJobRequest.limit;
                } else {
                    clusterId = listYmlsJobRequest['cluster_id'];
                    start = listYmlsJobRequest['start'];
                    limit = listYmlsJobRequest['limit'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listYmlsJob.');
            }
            if (start !== null && start !== undefined) {
                localVarQueryParameter['start'] = start;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于修改集群密码。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetPassword(resetPasswordRequest?: ResetPasswordRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/password/reset",
                contentType: "application/json",
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
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 此接口用于重启集群，重启集群将导致业务中断。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restartCluster(restartClusterRequest?: RestartClusterRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/restart",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (restartClusterRequest !== null && restartClusterRequest !== undefined) {
                if (restartClusterRequest instanceof RestartClusterRequest) {
                    clusterId = restartClusterRequest.clusterId;
                } else {
                    clusterId = restartClusterRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling restartCluster.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于手动恢复一个快照。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restoreSnapshot(restoreSnapshotRequest?: RestoreSnapshotRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/index_snapshot/{snapshot_id}/restore",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;
            
            let snapshotId;

            if (restoreSnapshotRequest !== null && restoreSnapshotRequest !== undefined) {
                if (restoreSnapshotRequest instanceof RestoreSnapshotRequest) {
                    clusterId = restoreSnapshotRequest.clusterId;
                    snapshotId = restoreSnapshotRequest.snapshotId;
                    body = restoreSnapshotRequest.body
                } else {
                    clusterId = restoreSnapshotRequest['cluster_id'];
                    snapshotId = restoreSnapshotRequest['snapshot_id'];
                    body = restoreSnapshotRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling restoreSnapshot.');
            }
            if (snapshotId === null || snapshotId === undefined) {
            throw new RequiredError('snapshotId','Required parameter snapshotId was null or undefined when calling restoreSnapshot.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId,'snapshot_id': snapshotId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询自动创建快照策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAutoCreatePolicy(showAutoCreatePolicyRequest?: ShowAutoCreatePolicyRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/index_snapshot/policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (showAutoCreatePolicyRequest !== null && showAutoCreatePolicyRequest !== undefined) {
                if (showAutoCreatePolicyRequest instanceof ShowAutoCreatePolicyRequest) {
                    clusterId = showAutoCreatePolicyRequest.clusterId;
                } else {
                    clusterId = showAutoCreatePolicyRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showAutoCreatePolicy.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询并显示单个集群详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showClusterDetail(showClusterDetailRequest?: ShowClusterDetailRequest) {
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

            if (showClusterDetailRequest !== null && showClusterDetailRequest !== undefined) {
                if (showClusterDetailRequest instanceof ShowClusterDetailRequest) {
                    clusterId = showClusterDetailRequest.clusterId;
                } else {
                    clusterId = showClusterDetailRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showClusterDetail.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询指定集群的标签信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showClusterTag(showClusterTagRequest?: ShowClusterTagRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/{resource_type}/{cluster_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let resourceType;

            if (showClusterTagRequest !== null && showClusterTagRequest !== undefined) {
                if (showClusterTagRequest instanceof ShowClusterTagRequest) {
                    clusterId = showClusterTagRequest.clusterId;
                    resourceType = showClusterTagRequest.resourceType;
                } else {
                    clusterId = showClusterTagRequest['cluster_id'];
                    resourceType = showClusterTagRequest['resource_type'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showClusterTag.');
            }
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling showClusterTag.');
            }

            options.pathParams = { 'cluster_id': clusterId,'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于日志基础配置查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showGetLogSetting(showGetLogSettingRequest?: ShowGetLogSettingRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/logs/settings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (showGetLogSettingRequest !== null && showGetLogSettingRequest !== undefined) {
                if (showGetLogSettingRequest instanceof ShowGetLogSettingRequest) {
                    clusterId = showGetLogSettingRequest.clusterId;
                } else {
                    clusterId = showGetLogSettingRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showGetLogSetting.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询自定义词库的加载状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showIkThesaurus(showIkThesaurusRequest?: ShowIkThesaurusRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/thesaurus",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (showIkThesaurusRequest !== null && showIkThesaurusRequest !== undefined) {
                if (showIkThesaurusRequest instanceof ShowIkThesaurusRequest) {
                    clusterId = showIkThesaurusRequest.clusterId;
                } else {
                    clusterId = showIkThesaurusRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showIkThesaurus.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询日志信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showLogBackup(showLogBackupRequest?: ShowLogBackupRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/logs/search",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (showLogBackupRequest !== null && showLogBackupRequest !== undefined) {
                if (showLogBackupRequest instanceof ShowLogBackupRequest) {
                    clusterId = showLogBackupRequest.clusterId;
                    body = showLogBackupRequest.body
                } else {
                    clusterId = showLogBackupRequest['cluster_id'];
                    body = showLogBackupRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showLogBackup.');
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
         * 该接口用于获取终端节点连接。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVpcepConnection(showVpcepConnectionRequest?: ShowVpcepConnectionRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/vpcepservice/connections",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let start;
            
            let limit;

            if (showVpcepConnectionRequest !== null && showVpcepConnectionRequest !== undefined) {
                if (showVpcepConnectionRequest instanceof ShowVpcepConnectionRequest) {
                    clusterId = showVpcepConnectionRequest.clusterId;
                    start = showVpcepConnectionRequest.start;
                    limit = showVpcepConnectionRequest.limit;
                } else {
                    clusterId = showVpcepConnectionRequest['cluster_id'];
                    start = showVpcepConnectionRequest['start'];
                    limit = showVpcepConnectionRequest['limit'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showVpcepConnection.');
            }
            if (start !== null && start !== undefined) {
                localVarQueryParameter['start'] = start;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于自动设置集群快照的基础配置，包括配置OBS桶和IAM委托。
         * 
         * 
         * - “OBS桶”：快照存储的OBS桶位置。
         * 
         * - “备份路径”：快照在OBS桶中的存放路径。
         * 
         * - “IAM委托”：由于需要将快照保存在OBS中，所以需要在IAM中设置对应的委托获取对OBS服务的授权。
         * 
         * &gt;自动设置集群快照接口将会自动创建快照OBS桶和委托。如果有多个集群，每个集群使用这个接口都会创建一个不一样的OBS桶，可能会导致OBS的配额不够，较多的OBS桶也难以维护。建议可以直接使用[修改集群快照的基础配置](UpdateSnapshotSetting.xml)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startAutoSetting(startAutoSettingRequest?: StartAutoSettingRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/index_snapshot/auto_setting",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (startAutoSettingRequest !== null && startAutoSettingRequest !== undefined) {
                if (startAutoSettingRequest instanceof StartAutoSettingRequest) {
                    clusterId = startAutoSettingRequest.clusterId;
                } else {
                    clusterId = startAutoSettingRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling startAutoSetting.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于日志自动备份策略开启。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startLogAutoBackupPolicy(startLogAutoBackupPolicyRequest?: StartLogAutoBackupPolicyRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/logs/policy/update",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (startLogAutoBackupPolicyRequest !== null && startLogAutoBackupPolicyRequest !== undefined) {
                if (startLogAutoBackupPolicyRequest instanceof StartLogAutoBackupPolicyRequest) {
                    clusterId = startLogAutoBackupPolicyRequest.clusterId;
                    body = startLogAutoBackupPolicyRequest.body
                } else {
                    clusterId = startLogAutoBackupPolicyRequest['cluster_id'];
                    body = startLogAutoBackupPolicyRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling startLogAutoBackupPolicy.');
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
         * 该接口用于开启日志功能。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startLogs(startLogsRequest?: StartLogsRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/logs/open",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (startLogsRequest !== null && startLogsRequest !== undefined) {
                if (startLogsRequest instanceof StartLogsRequest) {
                    clusterId = startLogsRequest.clusterId;
                    body = startLogsRequest.body
                } else {
                    clusterId = startLogsRequest['cluster_id'];
                    body = startLogsRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling startLogs.');
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
         * 该接口用于开启公网访问控制白名单。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startPublicWhitelist(startPublicWhitelistRequest?: StartPublicWhitelistRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/public/whitelist/update",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (startPublicWhitelistRequest !== null && startPublicWhitelistRequest !== undefined) {
                if (startPublicWhitelistRequest instanceof StartPublicWhitelistRequest) {
                    clusterId = startPublicWhitelistRequest.clusterId;
                    body = startPublicWhitelistRequest.body
                } else {
                    clusterId = startPublicWhitelistRequest['cluster_id'];
                    body = startPublicWhitelistRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling startPublicWhitelist.');
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
         * 该接口用于开启终端节点服务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startVpecp(startVpecpRequest?: StartVpecpRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/vpcepservice/open",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (startVpecpRequest !== null && startVpecpRequest !== undefined) {
                if (startVpecpRequest instanceof StartVpecpRequest) {
                    clusterId = startVpecpRequest.clusterId;
                    body = startVpecpRequest.body
                } else {
                    clusterId = startVpecpRequest['cluster_id'];
                    body = startVpecpRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling startVpecp.');
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
         * 该接口用于日志自动备份策略关闭。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopLogAutoBackupPolicy(stopLogAutoBackupPolicyRequest?: StopLogAutoBackupPolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/logs/policy/close",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (stopLogAutoBackupPolicyRequest !== null && stopLogAutoBackupPolicyRequest !== undefined) {
                if (stopLogAutoBackupPolicyRequest instanceof StopLogAutoBackupPolicyRequest) {
                    clusterId = stopLogAutoBackupPolicyRequest.clusterId;
                } else {
                    clusterId = stopLogAutoBackupPolicyRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling stopLogAutoBackupPolicy.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于关闭日志功能。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopLogs(stopLogsRequest?: StopLogsRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/logs/close",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (stopLogsRequest !== null && stopLogsRequest !== undefined) {
                if (stopLogsRequest instanceof StopLogsRequest) {
                    clusterId = stopLogsRequest.clusterId;
                } else {
                    clusterId = stopLogsRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling stopLogs.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于关闭公网访问控制白名单。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopPublicWhitelist(stopPublicWhitelistRequest?: StopPublicWhitelistRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/public/whitelist/close",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (stopPublicWhitelistRequest !== null && stopPublicWhitelistRequest !== undefined) {
                if (stopPublicWhitelistRequest instanceof StopPublicWhitelistRequest) {
                    clusterId = stopPublicWhitelistRequest.clusterId;
                } else {
                    clusterId = stopPublicWhitelistRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling stopPublicWhitelist.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于停用快照功能。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopSnapshot(stopSnapshotRequest?: StopSnapshotRequest) {
            const options = {
                method: "DELETE",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/index_snapshots",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (stopSnapshotRequest !== null && stopSnapshotRequest !== undefined) {
                if (stopSnapshotRequest instanceof StopSnapshotRequest) {
                    clusterId = stopSnapshotRequest.clusterId;
                } else {
                    clusterId = stopSnapshotRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling stopSnapshot.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于关闭终端节点服务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopVpecp(stopVpecpRequest?: StopVpecpRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/vpcepservice/close",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (stopVpecpRequest !== null && stopVpecpRequest !== undefined) {
                if (stopVpecpRequest instanceof StopVpecpRequest) {
                    clusterId = stopVpecpRequest.clusterId;
                } else {
                    clusterId = stopVpecpRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling stopVpecp.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于对集群批量添加或删除标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateBatchClustersTags(updateBatchClustersTagsRequest?: UpdateBatchClustersTagsRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/{resource_type}/{cluster_id}/tags/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;
            
            let resourceType;

            if (updateBatchClustersTagsRequest !== null && updateBatchClustersTagsRequest !== undefined) {
                if (updateBatchClustersTagsRequest instanceof UpdateBatchClustersTagsRequest) {
                    clusterId = updateBatchClustersTagsRequest.clusterId;
                    resourceType = updateBatchClustersTagsRequest.resourceType;
                    body = updateBatchClustersTagsRequest.body
                } else {
                    clusterId = updateBatchClustersTagsRequest['cluster_id'];
                    resourceType = updateBatchClustersTagsRequest['resource_type'];
                    body = updateBatchClustersTagsRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateBatchClustersTags.');
            }
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling updateBatchClustersTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId,'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于修改集群名称。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateClusterName(updateClusterNameRequest?: UpdateClusterNameRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/changename",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (updateClusterNameRequest !== null && updateClusterNameRequest !== undefined) {
                if (updateClusterNameRequest instanceof UpdateClusterNameRequest) {
                    clusterId = updateClusterNameRequest.clusterId;
                    body = updateClusterNameRequest.body
                } else {
                    clusterId = updateClusterNameRequest['cluster_id'];
                    body = updateClusterNameRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateClusterName.');
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
         * 该接口用于集群扩容实例（仅支持扩容elasticsearch实例）。只扩容普通节点，且只针对要扩容的集群实例不存在特殊节点（Master、Client、冷数据节点）的情况。
         * 
         * 集群扩容实例的数量和存储容量，请参考[扩容实例的数量和存储容量](UpdateExtendInstanceStorage.xml)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateExtendCluster(updateExtendClusterRequest?: UpdateExtendClusterRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/extend",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (updateExtendClusterRequest !== null && updateExtendClusterRequest !== undefined) {
                if (updateExtendClusterRequest instanceof UpdateExtendClusterRequest) {
                    clusterId = updateExtendClusterRequest.clusterId;
                    body = updateExtendClusterRequest.body
                } else {
                    clusterId = updateExtendClusterRequest['cluster_id'];
                    body = updateExtendClusterRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateExtendCluster.');
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
         * 该接口用于集群扩容不同类型实例的个数以及存储容量。已经存在独立Master、Client、冷数据节点的集群使用该接口扩容。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateExtendInstanceStorage(updateExtendInstanceStorageRequest?: UpdateExtendInstanceStorageRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/role_extend",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (updateExtendInstanceStorageRequest !== null && updateExtendInstanceStorageRequest !== undefined) {
                if (updateExtendInstanceStorageRequest instanceof UpdateExtendInstanceStorageRequest) {
                    clusterId = updateExtendInstanceStorageRequest.clusterId;
                    body = updateExtendInstanceStorageRequest.body
                } else {
                    clusterId = updateExtendInstanceStorageRequest['cluster_id'];
                    body = updateExtendInstanceStorageRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateExtendInstanceStorage.');
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
         * 该接口用于变更集群规格。只支持变更ess节点类型。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateFlavor(updateFlavorRequest?: UpdateFlavorRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/flavor",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (updateFlavorRequest !== null && updateFlavorRequest !== undefined) {
                if (updateFlavorRequest instanceof UpdateFlavorRequest) {
                    clusterId = updateFlavorRequest.clusterId;
                    body = updateFlavorRequest.body
                } else {
                    clusterId = updateFlavorRequest['cluster_id'];
                    body = updateFlavorRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateFlavor.');
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
         * 修改集群规格。支持修改:
         * - ess： 数据节点。
         * - ess-cold: 冷数据节点。
         * - ess-client: Client节点。
         * - ess-master: Master节点。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateFlavorByType(updateFlavorByTypeRequest?: UpdateFlavorByTypeRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/{types}/flavor",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;
            
            let types;

            if (updateFlavorByTypeRequest !== null && updateFlavorByTypeRequest !== undefined) {
                if (updateFlavorByTypeRequest instanceof UpdateFlavorByTypeRequest) {
                    clusterId = updateFlavorByTypeRequest.clusterId;
                    types = updateFlavorByTypeRequest.types;
                    body = updateFlavorByTypeRequest.body
                } else {
                    clusterId = updateFlavorByTypeRequest['cluster_id'];
                    types = updateFlavorByTypeRequest['types'];
                    body = updateFlavorByTypeRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateFlavorByType.');
            }
            if (types === null || types === undefined) {
            throw new RequiredError('types','Required parameter types was null or undefined when calling updateFlavorByType.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId,'types': types, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于替换失败节点。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInstance(updateInstanceRequest?: UpdateInstanceRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/instance/{instance_id}/replace",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let instanceId;

            if (updateInstanceRequest !== null && updateInstanceRequest !== undefined) {
                if (updateInstanceRequest instanceof UpdateInstanceRequest) {
                    clusterId = updateInstanceRequest.clusterId;
                    instanceId = updateInstanceRequest.instanceId;
                } else {
                    clusterId = updateInstanceRequest['cluster_id'];
                    instanceId = updateInstanceRequest['instance_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateInstance.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateInstance.');
            }

            options.pathParams = { 'cluster_id': clusterId,'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于修改日志基础配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateLogSetting(updateLogSettingRequest?: UpdateLogSettingRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/logs/settings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (updateLogSettingRequest !== null && updateLogSettingRequest !== undefined) {
                if (updateLogSettingRequest instanceof UpdateLogSettingRequest) {
                    clusterId = updateLogSettingRequest.clusterId;
                    body = updateLogSettingRequest.body
                } else {
                    clusterId = updateLogSettingRequest['cluster_id'];
                    body = updateLogSettingRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateLogSetting.');
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
         * 该接口用于按需集群转包周期集群。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateOndemandClusterToPeriod(updateOndemandClusterToPeriodRequest?: UpdateOndemandClusterToPeriodRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/cluster/{cluster_id}/period",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (updateOndemandClusterToPeriodRequest !== null && updateOndemandClusterToPeriodRequest !== undefined) {
                if (updateOndemandClusterToPeriodRequest instanceof UpdateOndemandClusterToPeriodRequest) {
                    clusterId = updateOndemandClusterToPeriodRequest.clusterId;
                    body = updateOndemandClusterToPeriodRequest.body
                } else {
                    clusterId = updateOndemandClusterToPeriodRequest['cluster_id'];
                    body = updateOndemandClusterToPeriodRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateOndemandClusterToPeriod.');
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
         * 该接口用于修改公网访问带宽。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePublicBandWidth(updatePublicBandWidthRequest?: UpdatePublicBandWidthRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/public/bandwidth",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (updatePublicBandWidthRequest !== null && updatePublicBandWidthRequest !== undefined) {
                if (updatePublicBandWidthRequest instanceof UpdatePublicBandWidthRequest) {
                    clusterId = updatePublicBandWidthRequest.clusterId;
                    body = updatePublicBandWidthRequest.body
                } else {
                    clusterId = updatePublicBandWidthRequest['cluster_id'];
                    body = updatePublicBandWidthRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updatePublicBandWidth.');
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
         * 该接口用于集群对不同类型实例的个数以及存储容量进行缩容。包周期类型的集群不支持通过api进行指定节点类型缩容操作。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateShrinkCluster(updateShrinkClusterRequest?: UpdateShrinkClusterRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/extend/{project_id}/clusters/{cluster_id}/role/shrink",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (updateShrinkClusterRequest !== null && updateShrinkClusterRequest !== undefined) {
                if (updateShrinkClusterRequest instanceof UpdateShrinkClusterRequest) {
                    clusterId = updateShrinkClusterRequest.clusterId;
                    body = updateShrinkClusterRequest.body
                } else {
                    clusterId = updateShrinkClusterRequest['cluster_id'];
                    body = updateShrinkClusterRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateShrinkCluster.');
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
         * 该接口可以对集群现有节点中指定节点进行缩容。包周期类型的集群不支持通过api进行指定节点缩容操作。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateShrinkNodes(updateShrinkNodesRequest?: UpdateShrinkNodesRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/node/offline",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (updateShrinkNodesRequest !== null && updateShrinkNodesRequest !== undefined) {
                if (updateShrinkNodesRequest instanceof UpdateShrinkNodesRequest) {
                    clusterId = updateShrinkNodesRequest.clusterId;
                    body = updateShrinkNodesRequest.body
                } else {
                    clusterId = updateShrinkNodesRequest['cluster_id'];
                    body = updateShrinkNodesRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateShrinkNodes.');
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
         * 该接口用于修改集群快照的基础配置，可修改OBS桶和IAM委托。
         * 
         * 可以使用该接口开启快照功能。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSnapshotSetting(updateSnapshotSettingRequest?: UpdateSnapshotSettingRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/index_snapshot/setting",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (updateSnapshotSettingRequest !== null && updateSnapshotSettingRequest !== undefined) {
                if (updateSnapshotSettingRequest instanceof UpdateSnapshotSettingRequest) {
                    clusterId = updateSnapshotSettingRequest.clusterId;
                    body = updateSnapshotSettingRequest.body
                } else {
                    clusterId = updateSnapshotSettingRequest['cluster_id'];
                    body = updateSnapshotSettingRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateSnapshotSetting.');
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
         * 该接口用于关闭公网访问。包周期类型的集群不支持通过api进行关闭公网访问。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateUnbindPublic(updateUnbindPublicRequest?: UpdateUnbindPublicRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/public/close",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (updateUnbindPublicRequest !== null && updateUnbindPublicRequest !== undefined) {
                if (updateUnbindPublicRequest instanceof UpdateUnbindPublicRequest) {
                    clusterId = updateUnbindPublicRequest.clusterId;
                    body = updateUnbindPublicRequest.body
                } else {
                    clusterId = updateUnbindPublicRequest['cluster_id'];
                    body = updateUnbindPublicRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateUnbindPublic.');
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
         * 该接口用于更新终端节点连接。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateVpcepConnection(updateVpcepConnectionRequest?: UpdateVpcepConnectionRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/vpcepservice/connections",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (updateVpcepConnectionRequest !== null && updateVpcepConnectionRequest !== undefined) {
                if (updateVpcepConnectionRequest instanceof UpdateVpcepConnectionRequest) {
                    clusterId = updateVpcepConnectionRequest.clusterId;
                    body = updateVpcepConnectionRequest.body
                } else {
                    clusterId = updateVpcepConnectionRequest['cluster_id'];
                    body = updateVpcepConnectionRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateVpcepConnection.');
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
         * 该接口用于修改终端节点服务白名单。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateVpcepWhitelist(updateVpcepWhitelistRequest?: UpdateVpcepWhitelistRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/vpcepservice/permissions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (updateVpcepWhitelistRequest !== null && updateVpcepWhitelistRequest !== undefined) {
                if (updateVpcepWhitelistRequest instanceof UpdateVpcepWhitelistRequest) {
                    clusterId = updateVpcepWhitelistRequest.clusterId;
                    body = updateVpcepWhitelistRequest.body
                } else {
                    clusterId = updateVpcepWhitelistRequest['cluster_id'];
                    body = updateVpcepWhitelistRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateVpcepWhitelist.');
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
         * 该接口用于修改参数配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateYmls(updateYmlsRequest?: UpdateYmlsRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/ymls/update",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (updateYmlsRequest !== null && updateYmlsRequest !== undefined) {
                if (updateYmlsRequest instanceof UpdateYmlsRequest) {
                    clusterId = updateYmlsRequest.clusterId;
                    body = updateYmlsRequest.body
                } else {
                    clusterId = updateYmlsRequest['cluster_id'];
                    body = updateYmlsRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateYmls.');
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
         * 该接口用于开启Kibana公网访问。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startKibanaPublic(startKibanaPublicRequest?: StartKibanaPublicRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/publickibana/open",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (startKibanaPublicRequest !== null && startKibanaPublicRequest !== undefined) {
                if (startKibanaPublicRequest instanceof StartKibanaPublicRequest) {
                    clusterId = startKibanaPublicRequest.clusterId;
                    body = startKibanaPublicRequest.body
                } else {
                    clusterId = startKibanaPublicRequest['cluster_id'];
                    body = startKibanaPublicRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling startKibanaPublic.');
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
         * 该接口用于关闭Kibana公网访问控制。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopPublicKibanaWhitelist(stopPublicKibanaWhitelistRequest?: StopPublicKibanaWhitelistRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/publickibana/whitelist/close",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (stopPublicKibanaWhitelistRequest !== null && stopPublicKibanaWhitelistRequest !== undefined) {
                if (stopPublicKibanaWhitelistRequest instanceof StopPublicKibanaWhitelistRequest) {
                    clusterId = stopPublicKibanaWhitelistRequest.clusterId;
                } else {
                    clusterId = stopPublicKibanaWhitelistRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling stopPublicKibanaWhitelist.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于修改Kibana公网带宽。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAlterKibana(updateAlterKibanaRequest?: UpdateAlterKibanaRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/publickibana/bandwidth",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (updateAlterKibanaRequest !== null && updateAlterKibanaRequest !== undefined) {
                if (updateAlterKibanaRequest instanceof UpdateAlterKibanaRequest) {
                    clusterId = updateAlterKibanaRequest.clusterId;
                    body = updateAlterKibanaRequest.body
                } else {
                    clusterId = updateAlterKibanaRequest['cluster_id'];
                    body = updateAlterKibanaRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateAlterKibana.');
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
         * 该接口用于关闭Kibana公网访问。包周期类型集群不支持通过api进行关闭Kibana公网访问。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateCloseKibana(updateCloseKibanaRequest?: UpdateCloseKibanaRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/publickibana/close",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (updateCloseKibanaRequest !== null && updateCloseKibanaRequest !== undefined) {
                if (updateCloseKibanaRequest instanceof UpdateCloseKibanaRequest) {
                    clusterId = updateCloseKibanaRequest.clusterId;
                    body = updateCloseKibanaRequest.body
                } else {
                    clusterId = updateCloseKibanaRequest['cluster_id'];
                    body = updateCloseKibanaRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateCloseKibana.');
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
         * 该接口通过修改kibana白名单，修改kibana的访问权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePublicKibanaWhitelist(updatePublicKibanaWhitelistRequest?: UpdatePublicKibanaWhitelistRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/publickibana/whitelist/update",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (updatePublicKibanaWhitelistRequest !== null && updatePublicKibanaWhitelistRequest !== undefined) {
                if (updatePublicKibanaWhitelistRequest instanceof UpdatePublicKibanaWhitelistRequest) {
                    clusterId = updatePublicKibanaWhitelistRequest.clusterId;
                    body = updatePublicKibanaWhitelistRequest.body
                } else {
                    clusterId = updatePublicKibanaWhitelistRequest['cluster_id'];
                    body = updatePublicKibanaWhitelistRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updatePublicKibanaWhitelist.');
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
         * 该接口用于添加到自定义模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addFavorite(addFavoriteRequest?: AddFavoriteRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/lgsconf/favorite",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (addFavoriteRequest !== null && addFavoriteRequest !== undefined) {
                if (addFavoriteRequest instanceof AddFavoriteRequest) {
                    clusterId = addFavoriteRequest.clusterId;
                    body = addFavoriteRequest.body
                } else {
                    clusterId = addFavoriteRequest['cluster_id'];
                    body = addFavoriteRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling addFavorite.');
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
         * 该接口用于创建配置文件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCnf(createCnfRequest?: CreateCnfRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/lgsconf/submit",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (createCnfRequest !== null && createCnfRequest !== undefined) {
                if (createCnfRequest instanceof CreateCnfRequest) {
                    clusterId = createCnfRequest.clusterId;
                    body = createCnfRequest.body
                } else {
                    clusterId = createCnfRequest['cluster_id'];
                    body = createCnfRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling createCnf.');
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
         * 删除配置文件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteConf(deleteConfRequest?: DeleteConfRequest) {
            const options = {
                method: "DELETE",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/lgsconf/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (deleteConfRequest !== null && deleteConfRequest !== undefined) {
                if (deleteConfRequest instanceof DeleteConfRequest) {
                    clusterId = deleteConfRequest.clusterId;
                    body = deleteConfRequest.body
                } else {
                    clusterId = deleteConfRequest['cluster_id'];
                    body = deleteConfRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling deleteConf.');
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
         * 该接口用于删除自定义模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTemplate(deleteTemplateRequest?: DeleteTemplateRequest) {
            const options = {
                method: "DELETE",
                url: "/v1.0/{project_id}/lgsconf/deletetemplate",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (deleteTemplateRequest !== null && deleteTemplateRequest !== undefined) {
                if (deleteTemplateRequest instanceof DeleteTemplateRequest) {
                    body = deleteTemplateRequest.body
                } else {
                    body = deleteTemplateRequest['body'];
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
         * 该接口用于查询操作记录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listActions(listActionsRequest?: ListActionsRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/lgsconf/listactions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (listActionsRequest !== null && listActionsRequest !== undefined) {
                if (listActionsRequest instanceof ListActionsRequest) {
                    clusterId = listActionsRequest.clusterId;
                } else {
                    clusterId = listActionsRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listActions.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询配置文件列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listConfs(listConfsRequest?: ListConfsRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/lgsconf/listconfs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (listConfsRequest !== null && listConfsRequest !== undefined) {
                if (listConfsRequest instanceof ListConfsRequest) {
                    clusterId = listConfsRequest.clusterId;
                } else {
                    clusterId = listConfsRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listConfs.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询pipeline列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPipelines(listPipelinesRequest?: ListPipelinesRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/lgsconf/listpipelines",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (listPipelinesRequest !== null && listPipelinesRequest !== undefined) {
                if (listPipelinesRequest instanceof ListPipelinesRequest) {
                    clusterId = listPipelinesRequest.clusterId;
                } else {
                    clusterId = listPipelinesRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listPipelines.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询模板列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTemplates(listTemplatesRequest?: ListTemplatesRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/lgsconf/template",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let type;

            if (listTemplatesRequest !== null && listTemplatesRequest !== undefined) {
                if (listTemplatesRequest instanceof ListTemplatesRequest) {
                    type = listTemplatesRequest.type;
                } else {
                    type = listTemplatesRequest['type'];
                }
            }

        
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询配置文件内容。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showGetConfDetail(showGetConfDetailRequest?: ShowGetConfDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/lgsconf/confdetail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let name;

            if (showGetConfDetailRequest !== null && showGetConfDetailRequest !== undefined) {
                if (showGetConfDetailRequest instanceof ShowGetConfDetailRequest) {
                    clusterId = showGetConfDetailRequest.clusterId;
                    name = showGetConfDetailRequest.name;
                } else {
                    clusterId = showGetConfDetailRequest['cluster_id'];
                    name = showGetConfDetailRequest['name'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showGetConfDetail.');
            }
            if (name === null || name === undefined) {
                throw new RequiredError('name','Required parameter name was null or undefined when calling showGetConfDetail.');
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于连通性测试。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startConnectivityTest(startConnectivityTestRequest?: StartConnectivityTestRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/checkconnection",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (startConnectivityTestRequest !== null && startConnectivityTestRequest !== undefined) {
                if (startConnectivityTestRequest instanceof StartConnectivityTestRequest) {
                    clusterId = startConnectivityTestRequest.clusterId;
                    body = startConnectivityTestRequest.body
                } else {
                    clusterId = startConnectivityTestRequest['cluster_id'];
                    body = startConnectivityTestRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling startConnectivityTest.');
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
         * 该接口用于启动pipeline迁移数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startPipeline(startPipelineRequest?: StartPipelineRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/lgsconf/start",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (startPipelineRequest !== null && startPipelineRequest !== undefined) {
                if (startPipelineRequest instanceof StartPipelineRequest) {
                    clusterId = startPipelineRequest.clusterId;
                    body = startPipelineRequest.body
                } else {
                    clusterId = startPipelineRequest['cluster_id'];
                    body = startPipelineRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling startPipeline.');
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
         * 该接口用于停止pipeline迁移数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopPipeline(stopPipelineRequest?: StopPipelineRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/lgsconf/stop",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (stopPipelineRequest !== null && stopPipelineRequest !== undefined) {
                if (stopPipelineRequest instanceof StopPipelineRequest) {
                    clusterId = stopPipelineRequest.clusterId;
                } else {
                    clusterId = stopPipelineRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling stopPipeline.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于更新配置文件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateCnf(updateCnfRequest?: UpdateCnfRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/lgsconf/update",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (updateCnfRequest !== null && updateCnfRequest !== undefined) {
                if (updateCnfRequest instanceof UpdateCnfRequest) {
                    clusterId = updateCnfRequest.clusterId;
                    body = updateCnfRequest.body
                } else {
                    clusterId = updateCnfRequest['cluster_id'];
                    body = updateCnfRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateCnf.');
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
    
    }
};

function newClient(client: HcClient): CssClient {
    return new CssClient(client);
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