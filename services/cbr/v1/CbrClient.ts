import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AddAgentPathRequest } from './model/AddAgentPathRequest';
import { AddAgentPathResponse } from './model/AddAgentPathResponse';
import { AddMemberRequest } from './model/AddMemberRequest';
import { AddMemberResponse } from './model/AddMemberResponse';
import { AddMembersReq } from './model/AddMembersReq';
import { AddVaultResourceRequest } from './model/AddVaultResourceRequest';
import { AddVaultResourceResponse } from './model/AddVaultResourceResponse';
import { Agent } from './model/Agent';
import { AgentAddPathReq } from './model/AgentAddPathReq';
import { AgentRegister } from './model/AgentRegister';
import { AgentRegisterReq } from './model/AgentRegisterReq';
import { AgentRemovePathReq } from './model/AgentRemovePathReq';
import { AgentUpdate } from './model/AgentUpdate';
import { AgentUpdateReq } from './model/AgentUpdateReq';
import { AssociateVaultPolicyRequest } from './model/AssociateVaultPolicyRequest';
import { AssociateVaultPolicyResponse } from './model/AssociateVaultPolicyResponse';
import { BackupExtendInfo } from './model/BackupExtendInfo';
import { BackupReplicateReq } from './model/BackupReplicateReq';
import { BackupReplicateReqBody } from './model/BackupReplicateReqBody';
import { BackupReplicateRespBody } from './model/BackupReplicateRespBody';
import { BackupResp } from './model/BackupResp';
import { BackupRestore } from './model/BackupRestore';
import { BackupRestoreReq } from './model/BackupRestoreReq';
import { BackupRestoreServerMapping } from './model/BackupRestoreServerMapping';
import { BackupSync } from './model/BackupSync';
import { BackupSyncReq } from './model/BackupSyncReq';
import { BackupSyncRespBody } from './model/BackupSyncRespBody';
import { BackupUpdate } from './model/BackupUpdate';
import { BackupUpdateReq } from './model/BackupUpdateReq';
import { BatchCreateAndDeleteVaultTagsRequest } from './model/BatchCreateAndDeleteVaultTagsRequest';
import { BatchCreateAndDeleteVaultTagsResponse } from './model/BatchCreateAndDeleteVaultTagsResponse';
import { BatchUpdateVaultRequest } from './model/BatchUpdateVaultRequest';
import { BatchUpdateVaultRequestBody } from './model/BatchUpdateVaultRequestBody';
import { BatchUpdateVaultResponse } from './model/BatchUpdateVaultResponse';
import { Billing } from './model/Billing';
import { BillingCreate } from './model/BillingCreate';
import { BillingUpdate } from './model/BillingUpdate';
import { BindRulesTags } from './model/BindRulesTags';
import { BulkCreateAndDeleteVaultTagsReq } from './model/BulkCreateAndDeleteVaultTagsReq';
import { CbcOrderResult } from './model/CbcOrderResult';
import { CbcProductInfoUpdate } from './model/CbcProductInfoUpdate';
import { CbcUpdate } from './model/CbcUpdate';
import { CheckAgentRequest } from './model/CheckAgentRequest';
import { CheckAgentResponse } from './model/CheckAgentResponse';
import { CheckpointCreate } from './model/CheckpointCreate';
import { CheckpointCreateSkippedResource } from './model/CheckpointCreateSkippedResource';
import { CheckpointExtraInfoResp } from './model/CheckpointExtraInfoResp';
import { CheckpointParam } from './model/CheckpointParam';
import { CheckpointPlanCreate } from './model/CheckpointPlanCreate';
import { CheckpointReplicateParam } from './model/CheckpointReplicateParam';
import { CheckpointReplicateReq } from './model/CheckpointReplicateReq';
import { CheckpointReplicateRespBody } from './model/CheckpointReplicateRespBody';
import { CheckpointReplicateRespbackups } from './model/CheckpointReplicateRespbackups';
import { CheckpointResourceResp } from './model/CheckpointResourceResp';
import { CombinedOrder } from './model/CombinedOrder';
import { CopyBackupRequest } from './model/CopyBackupRequest';
import { CopyBackupResponse } from './model/CopyBackupResponse';
import { CopyCheckpointRequest } from './model/CopyCheckpointRequest';
import { CopyCheckpointResponse } from './model/CopyCheckpointResponse';
import { CreateCheckpointRequest } from './model/CreateCheckpointRequest';
import { CreateCheckpointResponse } from './model/CreateCheckpointResponse';
import { CreatePolicyRequest } from './model/CreatePolicyRequest';
import { CreatePolicyResponse } from './model/CreatePolicyResponse';
import { CreatePostPaidVaultRequest } from './model/CreatePostPaidVaultRequest';
import { CreatePostPaidVaultResponse } from './model/CreatePostPaidVaultResponse';
import { CreateVaultRequest } from './model/CreateVaultRequest';
import { CreateVaultResponse } from './model/CreateVaultResponse';
import { CreateVaultTagsRequest } from './model/CreateVaultTagsRequest';
import { CreateVaultTagsResponse } from './model/CreateVaultTagsResponse';
import { DeleteBackupRequest } from './model/DeleteBackupRequest';
import { DeleteBackupResponse } from './model/DeleteBackupResponse';
import { DeleteMemberRequest } from './model/DeleteMemberRequest';
import { DeleteMemberResponse } from './model/DeleteMemberResponse';
import { DeletePolicyRequest } from './model/DeletePolicyRequest';
import { DeletePolicyResponse } from './model/DeletePolicyResponse';
import { DeleteVaultRequest } from './model/DeleteVaultRequest';
import { DeleteVaultResponse } from './model/DeleteVaultResponse';
import { DeleteVaultTagRequest } from './model/DeleteVaultTagRequest';
import { DeleteVaultTagResponse } from './model/DeleteVaultTagResponse';
import { DisassociateVaultPolicyRequest } from './model/DisassociateVaultPolicyRequest';
import { DisassociateVaultPolicyResponse } from './model/DisassociateVaultPolicyResponse';
import { DomainMigrate } from './model/DomainMigrate';
import { DomainMigrateProjectStatus } from './model/DomainMigrateProjectStatus';
import { DomainProjectsInfo } from './model/DomainProjectsInfo';
import { ImageData } from './model/ImageData';
import { ImportBackupRequest } from './model/ImportBackupRequest';
import { ImportBackupResponse } from './model/ImportBackupResponse';
import { ImportCheckpointRequest } from './model/ImportCheckpointRequest';
import { ImportCheckpointResponse } from './model/ImportCheckpointResponse';
import { InstancesResourceDetail } from './model/InstancesResourceDetail';
import { ListAgentRequest } from './model/ListAgentRequest';
import { ListAgentResponse } from './model/ListAgentResponse';
import { ListBackupsRequest } from './model/ListBackupsRequest';
import { ListBackupsResponse } from './model/ListBackupsResponse';
import { ListDomainProjectsRequest } from './model/ListDomainProjectsRequest';
import { ListDomainProjectsResponse } from './model/ListDomainProjectsResponse';
import { ListExternalVaultRequest } from './model/ListExternalVaultRequest';
import { ListExternalVaultResponse } from './model/ListExternalVaultResponse';
import { ListOpLogsRequest } from './model/ListOpLogsRequest';
import { ListOpLogsResponse } from './model/ListOpLogsResponse';
import { ListPoliciesRequest } from './model/ListPoliciesRequest';
import { ListPoliciesResponse } from './model/ListPoliciesResponse';
import { ListProjectsRequest } from './model/ListProjectsRequest';
import { ListProjectsResponse } from './model/ListProjectsResponse';
import { ListProtectableRequest } from './model/ListProtectableRequest';
import { ListProtectableResponse } from './model/ListProtectableResponse';
import { ListVaultRequest } from './model/ListVaultRequest';
import { ListVaultResponse } from './model/ListVaultResponse';
import { Match } from './model/Match';
import { Member } from './model/Member';
import { MigrateDomainRequest } from './model/MigrateDomainRequest';
import { MigrateDomainResponse } from './model/MigrateDomainResponse';
import { MigrateVaultResourceRequest } from './model/MigrateVaultResourceRequest';
import { MigrateVaultResourceResponse } from './model/MigrateVaultResourceResponse';
import { OpErrorInfo } from './model/OpErrorInfo';
import { OpExtendInfoBckup } from './model/OpExtendInfoBckup';
import { OpExtendInfoCommon } from './model/OpExtendInfoCommon';
import { OpExtendInfoDelete } from './model/OpExtendInfoDelete';
import { OpExtendInfoRemoveResources } from './model/OpExtendInfoRemoveResources';
import { OpExtendInfoReplication } from './model/OpExtendInfoReplication';
import { OpExtendInfoRestore } from './model/OpExtendInfoRestore';
import { OpExtendInfoSync } from './model/OpExtendInfoSync';
import { OpExtendInfoVaultDelete } from './model/OpExtendInfoVaultDelete';
import { OpExtraInfo } from './model/OpExtraInfo';
import { OperationLog } from './model/OperationLog';
import { Path } from './model/Path';
import { Policy } from './model/Policy';
import { PolicyAssociateVault } from './model/PolicyAssociateVault';
import { PolicyCreate } from './model/PolicyCreate';
import { PolicyCreateReq } from './model/PolicyCreateReq';
import { PolicyTriggerPropertiesReq } from './model/PolicyTriggerPropertiesReq';
import { PolicyTriggerPropertiesResp } from './model/PolicyTriggerPropertiesResp';
import { PolicyTriggerReq } from './model/PolicyTriggerReq';
import { PolicyTriggerResp } from './model/PolicyTriggerResp';
import { PolicyUpdate } from './model/PolicyUpdate';
import { PolicyUpdateReq } from './model/PolicyUpdateReq';
import { PolicyoODCreate } from './model/PolicyoODCreate';
import { ProjectsListInfo } from './model/ProjectsListInfo';
import { ProtectableAgentReq } from './model/ProtectableAgentReq';
import { ProtectableAgentStatus } from './model/ProtectableAgentStatus';
import { ProtectableAgentStatusResource } from './model/ProtectableAgentStatusResource';
import { ProtectableReplicationCapabilitiesRespRegion } from './model/ProtectableReplicationCapabilitiesRespRegion';
import { ProtectableResult } from './model/ProtectableResult';
import { ProtectablesResp } from './model/ProtectablesResp';
import { RegisterAgentRequest } from './model/RegisterAgentRequest';
import { RegisterAgentResponse } from './model/RegisterAgentResponse';
import { RemoveAgentPathRequest } from './model/RemoveAgentPathRequest';
import { RemoveAgentPathResponse } from './model/RemoveAgentPathResponse';
import { RemoveVaultResourceRequest } from './model/RemoveVaultResourceRequest';
import { RemoveVaultResourceResponse } from './model/RemoveVaultResourceResponse';
import { ReplicationRecordGet } from './model/ReplicationRecordGet';
import { ReplicationRecordsExtraInfo } from './model/ReplicationRecordsExtraInfo';
import { Resource } from './model/Resource';
import { ResourceCreate } from './model/ResourceCreate';
import { ResourceExtraInfo } from './model/ResourceExtraInfo';
import { ResourceExtraInfoIncludeVolumes } from './model/ResourceExtraInfoIncludeVolumes';
import { ResourceResp } from './model/ResourceResp';
import { RestoreBackupRequest } from './model/RestoreBackupRequest';
import { RestoreBackupResponse } from './model/RestoreBackupResponse';
import { SelfLinksInfo } from './model/SelfLinksInfo';
import { SetVaultResourceRequest } from './model/SetVaultResourceRequest';
import { SetVaultResourceResponse } from './model/SetVaultResourceResponse';
import { ShowAgentRequest } from './model/ShowAgentRequest';
import { ShowAgentResponse } from './model/ShowAgentResponse';
import { ShowBackupRequest } from './model/ShowBackupRequest';
import { ShowBackupResponse } from './model/ShowBackupResponse';
import { ShowCheckpointRequest } from './model/ShowCheckpointRequest';
import { ShowCheckpointResponse } from './model/ShowCheckpointResponse';
import { ShowDomainRequest } from './model/ShowDomainRequest';
import { ShowDomainResponse } from './model/ShowDomainResponse';
import { ShowMemberDetailRequest } from './model/ShowMemberDetailRequest';
import { ShowMemberDetailResponse } from './model/ShowMemberDetailResponse';
import { ShowMembersDetailRequest } from './model/ShowMembersDetailRequest';
import { ShowMembersDetailResponse } from './model/ShowMembersDetailResponse';
import { ShowMetadataRequest } from './model/ShowMetadataRequest';
import { ShowMetadataResponse } from './model/ShowMetadataResponse';
import { ShowMigrateStatusRequest } from './model/ShowMigrateStatusRequest';
import { ShowMigrateStatusResponse } from './model/ShowMigrateStatusResponse';
import { ShowOpLogRequest } from './model/ShowOpLogRequest';
import { ShowOpLogResponse } from './model/ShowOpLogResponse';
import { ShowPolicyRequest } from './model/ShowPolicyRequest';
import { ShowPolicyResponse } from './model/ShowPolicyResponse';
import { ShowProtectableRequest } from './model/ShowProtectableRequest';
import { ShowProtectableResponse } from './model/ShowProtectableResponse';
import { ShowReplicationCapabilitiesRequest } from './model/ShowReplicationCapabilitiesRequest';
import { ShowReplicationCapabilitiesResponse } from './model/ShowReplicationCapabilitiesResponse';
import { ShowStorageUsageRequest } from './model/ShowStorageUsageRequest';
import { ShowStorageUsageResponse } from './model/ShowStorageUsageResponse';
import { ShowVaultProjectTagRequest } from './model/ShowVaultProjectTagRequest';
import { ShowVaultProjectTagResponse } from './model/ShowVaultProjectTagResponse';
import { ShowVaultRequest } from './model/ShowVaultRequest';
import { ShowVaultResourceInstancesRequest } from './model/ShowVaultResourceInstancesRequest';
import { ShowVaultResourceInstancesResponse } from './model/ShowVaultResourceInstancesResponse';
import { ShowVaultResponse } from './model/ShowVaultResponse';
import { ShowVaultTagRequest } from './model/ShowVaultTagRequest';
import { ShowVaultTagResponse } from './model/ShowVaultTagResponse';
import { StorageUsage } from './model/StorageUsage';
import { SyncParam } from './model/SyncParam';
import { SyncReq } from './model/SyncReq';
import { SyncRespBody } from './model/SyncRespBody';
import { SysTag } from './model/SysTag';
import { SysTags } from './model/SysTags';
import { Tag } from './model/Tag';
import { TagResource } from './model/TagResource';
import { TagsReq } from './model/TagsReq';
import { TagsResp } from './model/TagsResp';
import { UnregisterAgentRequest } from './model/UnregisterAgentRequest';
import { UnregisterAgentResponse } from './model/UnregisterAgentResponse';
import { UpdateAgentRequest } from './model/UpdateAgentRequest';
import { UpdateAgentResponse } from './model/UpdateAgentResponse';
import { UpdateBackupRequest } from './model/UpdateBackupRequest';
import { UpdateBackupResponse } from './model/UpdateBackupResponse';
import { UpdateMember } from './model/UpdateMember';
import { UpdateMemberStatusRequest } from './model/UpdateMemberStatusRequest';
import { UpdateMemberStatusResponse } from './model/UpdateMemberStatusResponse';
import { UpdateOrderRequest } from './model/UpdateOrderRequest';
import { UpdateOrderResponse } from './model/UpdateOrderResponse';
import { UpdatePolicyRequest } from './model/UpdatePolicyRequest';
import { UpdatePolicyResponse } from './model/UpdatePolicyResponse';
import { UpdateVaultRequest } from './model/UpdateVaultRequest';
import { UpdateVaultResponse } from './model/UpdateVaultResponse';
import { Vault } from './model/Vault';
import { VaultAddResourceReq } from './model/VaultAddResourceReq';
import { VaultAssociate } from './model/VaultAssociate';
import { VaultBackup } from './model/VaultBackup';
import { VaultBackupReq } from './model/VaultBackupReq';
import { VaultBatchUpdate } from './model/VaultBatchUpdate';
import { VaultBindRules } from './model/VaultBindRules';
import { VaultCreate } from './model/VaultCreate';
import { VaultCreateParameters } from './model/VaultCreateParameters';
import { VaultCreateReq } from './model/VaultCreateReq';
import { VaultCreateResource } from './model/VaultCreateResource';
import { VaultDissociate } from './model/VaultDissociate';
import { VaultGet } from './model/VaultGet';
import { VaultMigrateResourceReq } from './model/VaultMigrateResourceReq';
import { VaultOrder } from './model/VaultOrder';
import { VaultOrderCreateReqs } from './model/VaultOrderCreateReqs';
import { VaultPolicyResp } from './model/VaultPolicyResp';
import { VaultRemoveResourceReq } from './model/VaultRemoveResourceReq';
import { VaultResourceInstancesReq } from './model/VaultResourceInstancesReq';
import { VaultSetResourceReq } from './model/VaultSetResourceReq';
import { VaultTagsCreateReq } from './model/VaultTagsCreateReq';
import { VaultUpdate } from './model/VaultUpdate';
import { VaultUpdateReq } from './model/VaultUpdateReq';

export class CbrClient {
    public static newBuilder(): ClientBuilder<CbrClient> {
            return new ClientBuilder<CbrClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 对客户端新增备份路径，新增的路径不会校验是否存在。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新增备份路径
     * @param {string} agentId 客户端ID
     * @param {AgentAddPathReq} addAgentPathRequestBody 新增文件备份路径参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addAgentPath(addAgentPathRequest?: AddAgentPathRequest): Promise<AddAgentPathResponse> {
        const options = ParamCreater().addAgentPath(addAgentPathRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加备份可共享的成员，只有云服务器备份可以添加备份共享成员，且仅支持在同一区域的不同用户间共享。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加备份成员
     * @param {string} backupId 备份副本id
     * @param {AddMembersReq} addMemberRequestBody 添加备份共享成员请求body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addMember(addMemberRequest?: AddMemberRequest): Promise<AddMemberResponse> {
        const options = ParamCreater().addMember(addMemberRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 存储库添加资源
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加资源
     * @param {string} vaultId 存储库ID
     * @param {VaultAddResourceReq} addVaultResourceRequestBody 存储库添加资源参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addVaultResource(addVaultResourceRequest?: AddVaultResourceRequest): Promise<AddVaultResourceResponse> {
        const options = ParamCreater().addVaultResource(addVaultResourceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 存储库设置策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置存储库策略
     * @param {string} vaultId 存储库ID
     * @param {VaultAssociate} associateVaultPolicyRequestBody 关联策略ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associateVaultPolicy(associateVaultPolicyRequest?: AssociateVaultPolicyRequest): Promise<AssociateVaultPolicyResponse> {
        const options = ParamCreater().associateVaultPolicy(associateVaultPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 为指定实例批量添加或删除标签
     * 标签管理服务需要使用该接口批量管理实例的标签。
     * 一个资源上最多有10个标签。
     * 此接口为幂等接口：
     *     创建时如果请求体中存在重复key则报错。
     *     创建时，不允许重复key，如果数据库存在就覆盖。
     *     删除时，允许重复key。
     *     删除时，如果删除的标签不存在，默认处理成功,删除时不对标签字符集范围做校验。key长度127个字符，value为255个字符。删除时tags结构体不能缺失，key不能为空，或者空字符串。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加删除存储库资源标签
     * @param {string} vaultId 资源id
     * @param {BulkCreateAndDeleteVaultTagsReq} [batchCreateAndDeleteVaultTagsRequestBody] 批量添加删除存储库资源标签请求body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateAndDeleteVaultTags(batchCreateAndDeleteVaultTagsRequest?: BatchCreateAndDeleteVaultTagsRequest): Promise<BatchCreateAndDeleteVaultTagsResponse> {
        const options = ParamCreater().batchCreateAndDeleteVaultTags(batchCreateAndDeleteVaultTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量修改项目下所有存储库
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量修改存储库
     * @param {BatchUpdateVaultRequestBody} updateVaultRequestBody 存储批量修改参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchUpdateVault(batchUpdateVaultRequest?: BatchUpdateVaultRequest): Promise<BatchUpdateVaultResponse> {
        const options = ParamCreater().batchUpdateVault(batchUpdateVaultRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 检查应用一致性Agent状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询agent状态
     * @param {ProtectableAgentReq} checkAgentRequestBody Agent状态检查参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkAgent(checkAgentRequest?: CheckAgentRequest): Promise<CheckAgentResponse> {
        const options = ParamCreater().checkAgent(checkAgentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 跨区域复制备份。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 复制备份
     * @param {string} backupId 复制的备份ID
     * @param {BackupReplicateReq} copyBackupRequestBody 复制备份请求body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public copyBackup(copyBackupRequest?: CopyBackupRequest): Promise<CopyBackupResponse> {
        const options = ParamCreater().copyBackup(copyBackupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 执行复制
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 复制备份还原点
     * @param {CheckpointReplicateReq} copyCheckpointRequestBody 创建复制
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public copyCheckpoint(copyCheckpointRequest?: CopyCheckpointRequest): Promise<CopyCheckpointResponse> {
        const options = ParamCreater().copyCheckpoint(copyCheckpointRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 对存储库执行备份，生成备份还原点
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建备份还原点
     * @param {VaultBackupReq} createCheckpointRequestBody vault维度执行备份
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCheckpoint(createCheckpointRequest?: CreateCheckpointRequest): Promise<CreateCheckpointResponse> {
        const options = ParamCreater().createCheckpoint(createCheckpointRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建策略，策略分为备份策略和复制策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建策略
     * @param {PolicyCreateReq} createPolicyRequestBody 创建策略body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPolicy(createPolicyRequest?: CreatePolicyRequest): Promise<CreatePolicyResponse> {
        const options = ParamCreater().createPolicy(createPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建包周期存储库
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建包周期存储库
     * @param {VaultOrderCreateReqs} createPostPaidVaultRequestBody 请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPostPaidVault(createPostPaidVaultRequest?: CreatePostPaidVaultRequest): Promise<CreatePostPaidVaultResponse> {
        const options = ParamCreater().createPostPaidVault(createPostPaidVaultRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建存储库
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建存储库
     * @param {VaultCreateReq} createVaultRequestBody 存储库创建参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createVault(createVaultRequest?: CreateVaultRequest): Promise<CreateVaultResponse> {
        const options = ParamCreater().createVault(createVaultRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 一个资源上最多有10个标签。
     * 此接口为幂等接口：创建时，如果创建的标签已经存在（key相同），则覆盖。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加存储库资源标签
     * @param {string} vaultId 资源id
     * @param {VaultTagsCreateReq} [createVaultTagsRequestBody] 添加存储库资源标签参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createVaultTags(createVaultTagsRequest?: CreateVaultTagsRequest): Promise<CreateVaultTagsResponse> {
        const options = ParamCreater().createVaultTags(createVaultTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除单个备份。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除备份
     * @param {string} backupId 指定删除的备份ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteBackup(deleteBackupRequest?: DeleteBackupRequest): Promise<DeleteBackupResponse> {
        const options = ParamCreater().deleteBackup(deleteBackupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定的备份共享成员
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除指定备份成员
     * @param {string} backupId 备份副本id
     * @param {string} memberId 成员id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteMember(deleteMemberRequest?: DeleteMemberRequest): Promise<DeleteMemberResponse> {
        const options = ParamCreater().deleteMember(deleteMemberRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除策略
     * @param {string} policyId 策略ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePolicy(deletePolicyRequest?: DeletePolicyRequest): Promise<DeletePolicyResponse> {
        const options = ParamCreater().deletePolicy(deletePolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除存储库。若删除储存库，将一并删除存储库中的所有备份。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除存储库
     * @param {string} vaultId 存储库ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteVault(deleteVaultRequest?: DeleteVaultRequest): Promise<DeleteVaultResponse> {
        const options = ParamCreater().deleteVault(deleteVaultRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 幂等接口：删除时，如果删除的标签不存在，返回404。Key不能为空或者空字符串。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除存储库资源标签
     * @param {string} key 不能为空或空字符串，不检查长度和字符集，去掉key前后的空格后检查，去掉key前后的空格后使用。 即使底层存在非法的tag也要能删。
     * @param {string} vaultId 资源id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteVaultTag(deleteVaultTagRequest?: DeleteVaultTagRequest): Promise<DeleteVaultTagResponse> {
        const options = ParamCreater().deleteVaultTag(deleteVaultTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 存储库解除策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解除存储库策略
     * @param {string} vaultId 存储库ID
     * @param {VaultDissociate} disassociateVaultPolicyRequestBody 解除策略参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disassociateVaultPolicy(disassociateVaultPolicyRequest?: DisassociateVaultPolicyRequest): Promise<DisassociateVaultPolicyResponse> {
        const options = ParamCreater().disassociateVaultPolicy(disassociateVaultPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 同步线下混合云VMware备份副本
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 同步备份
     * @param {BackupSyncReq} importBackupRequestBody 同步备份请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public importBackup(importBackupRequest?: ImportBackupRequest): Promise<ImportBackupResponse> {
        const options = ParamCreater().importBackup(importBackupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 针对vault同步备份副本
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 同步备份还原点
     * @param {SyncReq} importCheckpointRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public importCheckpoint(importCheckpointRequest?: ImportCheckpointRequest): Promise<ImportCheckpointResponse> {
        const options = ParamCreater().importCheckpoint(importCheckpointRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询客户端列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询客户端列表
     * @param {string} [limit] 每页显示条目数，正整数
     * @param {number} [offset] 偏移值,正整数
     * @param {string} [status] 状态
     * @param {string} [agentId] 客户端ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAgent(listAgentRequest?: ListAgentRequest): Promise<ListAgentResponse> {
        const options = ParamCreater().listAgent(listAgentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询所有副本
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有备份
     * @param {string} [checkpointId] 还原点ID
     * @param {boolean} [dec] 专属云 （专属云场景使用，非专属云场景不生效）
     * @param {string} [endTime] 备份产生时间范围的结束时间，格式为%YYYY-%mm-%ddT%HH:%MM:%SSZ，例如2018-02-01T12:00:00Z
     * @param {'backup' | 'replication'} [imageType] 备份类型
     * @param {number} [limit] 每页显示的条目数量，正整数
     * @param {string} [marker] 上一次查询最后一条的id
     * @param {string} [name] 名称
     * @param {number} [offset] 偏移值，正整数
     * @param {string} [resourceAz] 支持按az来过滤
     * @param {string} [resourceId] 资源ID
     * @param {string} [resourceName] 资源名称
     * @param {'OS::Cinder::Volume' | 'OS::Nova::Server' | 'OS::Workspace::DesktopV2'} [resourceType] 资源类型: 云服务器: OS::Nova::Server, 云硬盘: OS::Cinder::Volume, 云桌面：OS::Workspace::DesktopV2
     * @param {string} [sort] sort的内容为一组由逗号分隔的属性及可选排序方向组成，形如&lt;key1&gt;[:&lt;direction&gt;],&lt;key2&gt;[:&lt;direction&gt;],其中direction的取值为asc (升序) 或 desc (降序),如没有传入direction参数，默认为降序，sort内容的长度限制为255个字符。key取值范围:[created_at，updated_at，name，status，protected_at，id]
     * @param {string} [startTime] 备份产生时间范围的开始时间，格式为%YYYY-%mm-%ddT%HH:%MM:%SSZ，例如2018-02-01T12:00:00Z
     * @param {'available' | 'protecting' | 'deleting' | 'restoring' | 'error' | 'waiting_protect' | 'waiting_delete' | 'waiting_restore'} [status] 状态。 调用API时，支持通过传多个status值进行过滤。例如：status&#x3D;available&amp;status&#x3D;error
     * @param {string} [vaultId] 存储库ID
     * @param {string} [enterpriseProjectId] 企业项目id或all_granted_eps，all_granted_eps表示查询用户有权限的所有企业项目id
     * @param {'all_granted' | 'private' | 'shared'} [ownType] 持有类型，私有的private/共享的shared/全部all_granted，默认只查询private。
     * @param {'pending' | 'accepted' | 'rejected'} [memberStatus] 共享状态
     * @param {string} [parentId] 父备份ID
     * @param {string} [usedPercent] 根据存储库使用率过滤备份，取值范围 [1, 100]，含1和100。例如，used_percent&#x3D;80，表示筛选所属存储库使用率大于等于80%的所有备份。
     * @param {boolean} [showReplication] 是否返回复制记录
     * @param {boolean} [incremental] 是否是增备
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
     * 根据指定租户名称查询项目列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户项目列表
     * @param {string} domainName 租户名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDomainProjects(listDomainProjectsRequest?: ListDomainProjectsRequest): Promise<ListDomainProjectsResponse> {
        const options = ParamCreater().listDomainProjects(listDomainProjectsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询其他区域的存储库列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询其他区域存储库列表
     * @param {string} externalProjectId 其他区域的项目ID
     * @param {string} regionId 区域ID
     * @param {number} [limit] 每页显示条目数
     * @param {number} [offset] 偏移值
     * @param {'backup;replication;hybrid'} [protectType] [保护类型。取值为backup，replication和hybrid。](tag:hws,hws_hk) [保护类型。取值为backup和replication。](tag:ocb) [保护类型。取值为backup。](tag:g42,hk-g42,sbc,dt,fcs_vm,ctc,tm,tlf,cmcc,hcso_dt)
     * @param {string} [objcetType] 资源类型
     * @param {string} [cloudType] [云类型。取值为public和hybrid。](tag:hws,hws_hk) [云类型。取值为public。](tag:g42,hk-g42,sbc,dt,fcs_vm,ctc,ocb,tm,tlf,cmcc,hcso_dt)
     * @param {string} [vaultId] 存储库ID，指定存储ID时其他过滤条件不生效。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listExternalVault(listExternalVaultRequest?: ListExternalVaultRequest): Promise<ListExternalVaultResponse> {
        const options = ParamCreater().listExternalVault(listExternalVaultRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询任务列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询任务列表
     * @param {string} [endTime] 任务结束时间，格式为%YYYY-%mm-%ddT%HH:%MM:%SSZ，例如2018-02-01T12:00:00Z
     * @param {number} [limit] 每页显示的条目数量，正整数
     * @param {number} [offset] 偏移值，正整数
     * @param {'backup' | 'copy' | 'replication' | 'delete' | 'restore' | 'vault_delete' | 'remove_resource' | 'sync'} [operationType] 任务类型
     * @param {string} [providerId] 备份提供商ID
     * @param {string} [resourceId] 该任务操作的资源ID
     * @param {string} [resourceName] 该任务操作的资源名称
     * @param {string} [startTime] 任务开始时间，格式为%YYYY-%mm-%ddT%HH:%MM:%SSZ，例如2018-01-01T12:00:00Z
     * @param {'success' | 'skipped' | 'failed' | 'running' | 'timeout' | 'waiting'} [status] 任务状态
     * @param {string} [vaultId] 存储库ID,该任务操作的资源所属绑定的存储库。
     * @param {string} [vaultName] 存储库名称，该任务操作资源所绑定的存储库名称。
     * @param {string} [enterpriseProjectId] 企业项目id或all_granted_eps，all_granted_eps表示查询用户有权限的所有企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listOpLogs(listOpLogsRequest?: ListOpLogsRequest): Promise<ListOpLogsResponse> {
        const options = ParamCreater().listOpLogs(listOpLogsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询策略列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询策略列表
     * @param {'backup' | 'replication'} [operationType] 策略类型：备份（backup）、复制(replication)
     * @param {string} [vaultId] 存储库ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPolicies(listPoliciesRequest?: ListPoliciesRequest): Promise<ListPoliciesResponse> {
        const options = ParamCreater().listPolicies(listPoliciesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户的企业项目信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户的项目信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProjects(): Promise<ListProjectsResponse> {
        const options = ParamCreater().listProjects();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询可保护性资源列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可保护资源
     * @param {'server' | 'disk'} protectableType 对象类型
     * @param {number} [limit] 每页显示的条目数量，每页最多支持50条
     * @param {string} [marker] 上一次查询最后一条的ID
     * @param {string} [name] 按名称过滤
     * @param {number} [offset] 偏移值
     * @param {string} [status] 资源的状态，如available，error 等
     * @param {string} [id] 根据资源id过滤
     * @param {string} [serverId] 根据该id过滤属于该服务器的所有磁盘，支持企业多项目的用户才能传入此参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProtectable(listProtectableRequest?: ListProtectableRequest): Promise<ListProtectableResponse> {
        const options = ParamCreater().listProtectable(listProtectableRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询存储库列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询存储库列表
     * @param {number} [limit] 每页显示条目数，正整数
     * @param {string} [name] 存储库名称
     * @param {number} [offset] 偏移值,正整数
     * @param {'public' | 'hybrid'} [cloudType] 云类型
     * @param {'backup' | 'replication'} [protectType] 保护类型
     * @param {string} [objectType] 对象类型：云服务器（server），云硬盘（disk），文件系统（turbo），云桌面（workspace），VMware（vmware），关系型数据库（rds），文件（file）。
     * @param {string} [enterpriseProjectId] 企业项目id或all_granted_eps，all_granted_eps表示查询用户有权限的所有企业项目id
     * @param {string} [id] 存储库ID
     * @param {string} [policyId] 策略ID
     * @param {string} [status] 状态
     * @param {string} [resourceIds] 资源id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVault(listVaultRequest?: ListVaultRequest): Promise<ListVaultResponse> {
        const options = ParamCreater().listVault(listVaultRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将CSBS/VBS资源迁移到CBR。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 租户迁移
     * @param {DomainMigrate} migrateDomainRequestBody 迁移参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public migrateDomain(migrateDomainRequest?: MigrateDomainRequest): Promise<MigrateDomainResponse> {
        const options = ParamCreater().migrateDomain(migrateDomainRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 支持资源迁移到另一个存储库，不删除备份。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 迁移资源
     * @param {string} vaultId 
     * @param {VaultMigrateResourceReq} migrateVaultResourceRequestBody 迁移资源请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public migrateVaultResource(migrateVaultResourceRequest?: MigrateVaultResourceRequest): Promise<MigrateVaultResourceResponse> {
        const options = ParamCreater().migrateVaultResource(migrateVaultResourceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 注册客户端，安装时候由Agent调用，无需手动注册。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 注册客户端
     * @param {AgentRegisterReq} registerAgentRequestBody 注册客户端参数明细
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public registerAgent(registerAgentRequest?: RegisterAgentRequest): Promise<RegisterAgentResponse> {
        const options = ParamCreater().registerAgent(registerAgentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 移除已添加的文件备份路径。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 移除备份路径
     * @param {string} agentId 客户端ID
     * @param {AgentRemovePathReq} removeAgentPathRequestBody 移除文件备份路径参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public removeAgentPath(removeAgentPathRequest?: RemoveAgentPathRequest): Promise<RemoveAgentPathResponse> {
        const options = ParamCreater().removeAgentPath(removeAgentPathRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 移除存储库中的资源，若移除资源，将一并删除该资源在保管库中的备份
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 移除资源
     * @param {string} vaultId 存储库ID
     * @param {VaultRemoveResourceReq} removeVaultResourceRequestBody 存储库移除资源参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public removeVaultResource(removeVaultResourceRequest?: RemoveVaultResourceRequest): Promise<RemoveVaultResourceResponse> {
        const options = ParamCreater().removeVaultResource(removeVaultResourceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 恢复备份数据
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 备份恢复
     * @param {string} backupId 备份id
     * @param {BackupRestoreReq} restoreBackupRequestBody 恢复请求body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public restoreBackup(restoreBackupRequest?: RestoreBackupRequest): Promise<RestoreBackupResponse> {
        const options = ParamCreater().restoreBackup(restoreBackupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置存储库资源是否自动备份
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置存储库资源
     * @param {string} vaultId 存储库id
     * @param {VaultSetResourceReq} vaultSetResourceBody 存储库设置资源请求body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setVaultResource(setVaultResourceRequest?: SetVaultResourceRequest): Promise<SetVaultResourceResponse> {
        const options = ParamCreater().setVaultResource(setVaultResourceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定客户端
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定客户端
     * @param {string} agentId 客户端ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAgent(showAgentRequest?: ShowAgentRequest): Promise<ShowAgentResponse> {
        const options = ParamCreater().showAgent(showAgentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据指定id查询单个副本。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定备份
     * @param {string} backupId 备份ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBackup(showBackupRequest?: ShowBackupRequest): Promise<ShowBackupResponse> {
        const options = ParamCreater().showBackup(showBackupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据还原点ID查询指定还原点
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询备份还原点
     * @param {string} checkpointId 还原点ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCheckpoint(showCheckpointRequest?: ShowCheckpointRequest): Promise<ShowCheckpointResponse> {
        const options = ParamCreater().showCheckpoint(showCheckpointRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 由控制台调用的内部接口，用于仅在查询共享备份时获取源project_id的域名信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户信息
     * @param {string} sourceProjectId 源项目ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDomain(showDomainRequest?: ShowDomainRequest): Promise<ShowDomainResponse> {
        const options = ParamCreater().showDomain(showDomainRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取备份成员的详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取备份成员详情
     * @param {string} backupId 备份副本id
     * @param {string} memberId 成员id，为接收方的project_id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMemberDetail(showMemberDetailRequest?: ShowMemberDetailRequest): Promise<ShowMemberDetailResponse> {
        const options = ParamCreater().showMemberDetail(showMemberDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取备份共享成员的列表信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取备份成员列表
     * @param {string} backupId 备份id
     * @param {string} [destProjectId] 接受备份共享的项目id
     * @param {string} [imageId] 接受的共享备份副本注册的镜像id
     * @param {string} [status] 备份共享状态
     * @param {string} [vaultId] 目标端接受共享备份的存储库id，仅支持uuid
     * @param {number} [limit] 每页显示的条目数量，正整数
     * @param {string} [marker] 上一次查询最后一条的id，仅支持uuid
     * @param {number} [offset] 偏移值，正整数
     * @param {string} [sort] sort的内容为一组由逗号分隔的属性及可选排序方向组成，形如&lt;key1&gt;[:&lt;direction&gt;],&lt;key2&gt;[:&lt;direction&gt;],其中direction的取值为asc (升序) 或 desc (降序),如没有传入direction参数，默认为降序，sort内容的长度限制为255个字符。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMembersDetail(showMembersDetailRequest?: ShowMembersDetailRequest): Promise<ShowMembersDetailResponse> {
        const options = ParamCreater().showMembersDetail(showMembersDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询备份时资源的元数据
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询备份元数据
     * @param {string} backupId 备份ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMetadata(showMetadataRequest?: ShowMetadataRequest): Promise<ShowMetadataResponse> {
        const options = ParamCreater().showMetadata(showMetadataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询迁移结果
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询迁移
     * @param {boolean} [allRegions] 是否查询其他区域结果
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMigrateStatus(showMigrateStatusRequest?: ShowMigrateStatusRequest): Promise<ShowMigrateStatusResponse> {
        const options = ParamCreater().showMigrateStatus(showMigrateStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据指定任务ID查询任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询单个任务
     * @param {string} operationLogId 任务ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showOpLog(showOpLogRequest?: ShowOpLogRequest): Promise<ShowOpLogResponse> {
        const options = ParamCreater().showOpLog(showOpLogRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询单个策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询单个策略
     * @param {string} policyId 策略ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPolicy(showPolicyRequest?: ShowPolicyRequest): Promise<ShowPolicyResponse> {
        const options = ParamCreater().showPolicy(showPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据ID查询可保护性资源
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定可保护资源
     * @param {string} instanceId 资源ID
     * @param {'server' | 'disk'} protectableType 可保护性类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showProtectable(showProtectableRequest?: ShowProtectableRequest): Promise<ShowProtectableResponse> {
        const options = ParamCreater().showProtectable(showProtectableRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询本区域的复制能力
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询复制能力
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showReplicationCapabilities(): Promise<ShowReplicationCapabilitiesResponse> {
        const options = ParamCreater().showReplicationCapabilities();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询容量统计
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询容量统计
     * @param {number} [limit] 查询条数
     * @param {number} [offset] 偏移值
     * @param {string} [resourceId] 支持按照备份对象ID过滤
     * @param {'OS::Nova::Server' | 'OS::Ironic::BareMetalServer'} [resourceType] 支持按照备份对象类型过滤
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showStorageUsage(showStorageUsageRequest?: ShowStorageUsageRequest): Promise<ShowStorageUsageResponse> {
        const options = ParamCreater().showStorageUsage(showStorageUsageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据ID查询指定存储库
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定存储库
     * @param {string} vaultId 存储库ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVault(showVaultRequest?: ShowVaultRequest): Promise<ShowVaultResponse> {
        const options = ParamCreater().showVault(showVaultRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户在指定Region和实例类型的所有标签集合
     * 标签管理服务需要能够列出当前租户全部已使用的标签集合，为各服务Console打标签和过滤实例时提供标签联想功能
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询存储库项目标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVaultProjectTag(): Promise<ShowVaultProjectTagResponse> {
        const options = ParamCreater().showVaultProjectTag();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 使用标签过滤实例
     * 标签管理服务需要提供按标签过滤各服务实例并汇总显示在列表中，需要各服务提供查询能力
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询存储库资源实例
     * @param {VaultResourceInstancesReq} showVaultResourceInstancesRequestBody 查询存储库资源实例参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVaultResourceInstances(showVaultResourceInstancesRequest?: ShowVaultResourceInstancesRequest): Promise<ShowVaultResourceInstancesResponse> {
        const options = ParamCreater().showVaultResourceInstances(showVaultResourceInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定实例的标签信息
     * 标签管理服务需要使用该接口查询指定实例的全部标签数据
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询存储库资源标签
     * @param {string} vaultId 资源id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVaultTag(showVaultTagRequest?: ShowVaultTagRequest): Promise<ShowVaultTagResponse> {
        const options = ParamCreater().showVaultTag(showVaultTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 移除客户端，移除客户端时将会删除该客户端所有备份，请谨慎操作。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 移除客户端
     * @param {string} agentId 客户端ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public unregisterAgent(unregisterAgentRequest?: UnregisterAgentRequest): Promise<UnregisterAgentResponse> {
        const options = ParamCreater().unregisterAgent(unregisterAgentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改客户端状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改客户端
     * @param {string} agentId 
     * @param {AgentUpdateReq} updateAgentRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAgent(updateAgentRequest?: UpdateAgentRequest): Promise<UpdateAgentResponse> {
        const options = ParamCreater().updateAgent(updateAgentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据备份id更改备份
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新备份
     * @param {string} backupId 备份ID
     * @param {BackupUpdateReq} [backupUpdateRequestBody] 备份修改参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateBackup(updateBackupRequest?: UpdateBackupRequest): Promise<UpdateBackupResponse> {
        const options = ParamCreater().updateBackup(updateBackupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新备份共享成员的状态，需要接收方执行此API。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新备份成员状态
     * @param {string} memberId 成员id，成员id与项目id为同一个。
     * @param {string} backupId 备份副本id
     * @param {UpdateMember} [updateMemberStatusRequestBody] 备份共享更新请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateMemberStatus(updateMemberStatusRequest?: UpdateMemberStatusRequest): Promise<UpdateMemberStatusResponse> {
        const options = ParamCreater().updateMemberStatus(updateMemberStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 订单更新，支付cbc订单后，调用该接口更新包周期产品订单信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 变更
     * @param {string} orderId 订单ID
     * @param {CbcUpdate} updateOrderRequestBody 变更请求body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateOrder(updateOrderRequest?: UpdateOrderRequest): Promise<UpdateOrderResponse> {
        const options = ParamCreater().updateOrder(updateOrderRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改策略
     * @param {string} policyId 策略ID
     * @param {PolicyUpdateReq} updatePolicyRequestBody 修改策略body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePolicy(updatePolicyRequest?: UpdatePolicyRequest): Promise<UpdatePolicyResponse> {
        const options = ParamCreater().updatePolicy(updatePolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据存储库ID修改存储库
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改存储库
     * @param {string} vaultId 存储库ID
     * @param {VaultUpdateReq} updateVaultRequestBody 存储修改参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateVault(updateVaultRequest?: UpdateVaultRequest): Promise<UpdateVaultResponse> {
        const options = ParamCreater().updateVault(updateVaultRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 对客户端新增备份路径，新增的路径不会校验是否存在。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addAgentPath(addAgentPathRequest?: AddAgentPathRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/agents/{agent_id}/add-path",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let agentId;

            if (addAgentPathRequest !== null && addAgentPathRequest !== undefined) {
                if (addAgentPathRequest instanceof AddAgentPathRequest) {
                    agentId = addAgentPathRequest.agentId;
                    body = addAgentPathRequest.body
                } else {
                    agentId = addAgentPathRequest['agent_id'];
                    body = addAgentPathRequest['body'];
                }
            }

        
            if (agentId === null || agentId === undefined) {
            throw new RequiredError('agentId','Required parameter agentId was null or undefined when calling addAgentPath.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'agent_id': agentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加备份可共享的成员，只有云服务器备份可以添加备份共享成员，且仅支持在同一区域的不同用户间共享。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addMember(addMemberRequest?: AddMemberRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/backups/{backup_id}/members",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let backupId;

            if (addMemberRequest !== null && addMemberRequest !== undefined) {
                if (addMemberRequest instanceof AddMemberRequest) {
                    backupId = addMemberRequest.backupId;
                    body = addMemberRequest.body
                } else {
                    backupId = addMemberRequest['backup_id'];
                    body = addMemberRequest['body'];
                }
            }

        
            if (backupId === null || backupId === undefined) {
            throw new RequiredError('backupId','Required parameter backupId was null or undefined when calling addMember.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'backup_id': backupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 存储库添加资源
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addVaultResource(addVaultResourceRequest?: AddVaultResourceRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/vaults/{vault_id}/addresources",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let vaultId;

            if (addVaultResourceRequest !== null && addVaultResourceRequest !== undefined) {
                if (addVaultResourceRequest instanceof AddVaultResourceRequest) {
                    vaultId = addVaultResourceRequest.vaultId;
                    body = addVaultResourceRequest.body
                } else {
                    vaultId = addVaultResourceRequest['vault_id'];
                    body = addVaultResourceRequest['body'];
                }
            }

        
            if (vaultId === null || vaultId === undefined) {
            throw new RequiredError('vaultId','Required parameter vaultId was null or undefined when calling addVaultResource.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vault_id': vaultId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 存储库设置策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associateVaultPolicy(associateVaultPolicyRequest?: AssociateVaultPolicyRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/vaults/{vault_id}/associatepolicy",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let vaultId;

            if (associateVaultPolicyRequest !== null && associateVaultPolicyRequest !== undefined) {
                if (associateVaultPolicyRequest instanceof AssociateVaultPolicyRequest) {
                    vaultId = associateVaultPolicyRequest.vaultId;
                    body = associateVaultPolicyRequest.body
                } else {
                    vaultId = associateVaultPolicyRequest['vault_id'];
                    body = associateVaultPolicyRequest['body'];
                }
            }

        
            if (vaultId === null || vaultId === undefined) {
            throw new RequiredError('vaultId','Required parameter vaultId was null or undefined when calling associateVaultPolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vault_id': vaultId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 为指定实例批量添加或删除标签
         * 标签管理服务需要使用该接口批量管理实例的标签。
         * 一个资源上最多有10个标签。
         * 此接口为幂等接口：
         *     创建时如果请求体中存在重复key则报错。
         *     创建时，不允许重复key，如果数据库存在就覆盖。
         *     删除时，允许重复key。
         *     删除时，如果删除的标签不存在，默认处理成功,删除时不对标签字符集范围做校验。key长度127个字符，value为255个字符。删除时tags结构体不能缺失，key不能为空，或者空字符串。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateAndDeleteVaultTags(batchCreateAndDeleteVaultTagsRequest?: BatchCreateAndDeleteVaultTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/vault/{vault_id}/tags/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let vaultId;

            if (batchCreateAndDeleteVaultTagsRequest !== null && batchCreateAndDeleteVaultTagsRequest !== undefined) {
                if (batchCreateAndDeleteVaultTagsRequest instanceof BatchCreateAndDeleteVaultTagsRequest) {
                    vaultId = batchCreateAndDeleteVaultTagsRequest.vaultId;
                    body = batchCreateAndDeleteVaultTagsRequest.body
                } else {
                    vaultId = batchCreateAndDeleteVaultTagsRequest['vault_id'];
                    body = batchCreateAndDeleteVaultTagsRequest['body'];
                }
            }

        
            if (vaultId === null || vaultId === undefined) {
            throw new RequiredError('vaultId','Required parameter vaultId was null or undefined when calling batchCreateAndDeleteVaultTags.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vault_id': vaultId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量修改项目下所有存储库
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchUpdateVault(batchUpdateVaultRequest?: BatchUpdateVaultRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/vaults/batch-update",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchUpdateVaultRequest !== null && batchUpdateVaultRequest !== undefined) {
                if (batchUpdateVaultRequest instanceof BatchUpdateVaultRequest) {
                    body = batchUpdateVaultRequest.body
                } else {
                    body = batchUpdateVaultRequest['body'];
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
         * 检查应用一致性Agent状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkAgent(checkAgentRequest?: CheckAgentRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/agent/check",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (checkAgentRequest !== null && checkAgentRequest !== undefined) {
                if (checkAgentRequest instanceof CheckAgentRequest) {
                    body = checkAgentRequest.body
                } else {
                    body = checkAgentRequest['body'];
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
         * 跨区域复制备份。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        copyBackup(copyBackupRequest?: CopyBackupRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/backups/{backup_id}/replicate",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let backupId;

            if (copyBackupRequest !== null && copyBackupRequest !== undefined) {
                if (copyBackupRequest instanceof CopyBackupRequest) {
                    backupId = copyBackupRequest.backupId;
                    body = copyBackupRequest.body
                } else {
                    backupId = copyBackupRequest['backup_id'];
                    body = copyBackupRequest['body'];
                }
            }

        
            if (backupId === null || backupId === undefined) {
            throw new RequiredError('backupId','Required parameter backupId was null or undefined when calling copyBackup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'backup_id': backupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 执行复制
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        copyCheckpoint(copyCheckpointRequest?: CopyCheckpointRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/checkpoints/replicate",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (copyCheckpointRequest !== null && copyCheckpointRequest !== undefined) {
                if (copyCheckpointRequest instanceof CopyCheckpointRequest) {
                    body = copyCheckpointRequest.body
                } else {
                    body = copyCheckpointRequest['body'];
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
         * 对存储库执行备份，生成备份还原点
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCheckpoint(createCheckpointRequest?: CreateCheckpointRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/checkpoints",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createCheckpointRequest !== null && createCheckpointRequest !== undefined) {
                if (createCheckpointRequest instanceof CreateCheckpointRequest) {
                    body = createCheckpointRequest.body
                } else {
                    body = createCheckpointRequest['body'];
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
         * 创建策略，策略分为备份策略和复制策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPolicy(createPolicyRequest?: CreatePolicyRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/policies",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createPolicyRequest !== null && createPolicyRequest !== undefined) {
                if (createPolicyRequest instanceof CreatePolicyRequest) {
                    body = createPolicyRequest.body
                } else {
                    body = createPolicyRequest['body'];
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
         * 创建包周期存储库
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPostPaidVault(createPostPaidVaultRequest?: CreatePostPaidVaultRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/vaults/order",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createPostPaidVaultRequest !== null && createPostPaidVaultRequest !== undefined) {
                if (createPostPaidVaultRequest instanceof CreatePostPaidVaultRequest) {
                    body = createPostPaidVaultRequest.body
                } else {
                    body = createPostPaidVaultRequest['body'];
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
         * 创建存储库
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createVault(createVaultRequest?: CreateVaultRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/vaults",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createVaultRequest !== null && createVaultRequest !== undefined) {
                if (createVaultRequest instanceof CreateVaultRequest) {
                    body = createVaultRequest.body
                } else {
                    body = createVaultRequest['body'];
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
         * 一个资源上最多有10个标签。
         * 此接口为幂等接口：创建时，如果创建的标签已经存在（key相同），则覆盖。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createVaultTags(createVaultTagsRequest?: CreateVaultTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/vault/{vault_id}/tags",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let vaultId;

            if (createVaultTagsRequest !== null && createVaultTagsRequest !== undefined) {
                if (createVaultTagsRequest instanceof CreateVaultTagsRequest) {
                    vaultId = createVaultTagsRequest.vaultId;
                    body = createVaultTagsRequest.body
                } else {
                    vaultId = createVaultTagsRequest['vault_id'];
                    body = createVaultTagsRequest['body'];
                }
            }

        
            if (vaultId === null || vaultId === undefined) {
            throw new RequiredError('vaultId','Required parameter vaultId was null or undefined when calling createVaultTags.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vault_id': vaultId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除单个备份。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteBackup(deleteBackupRequest?: DeleteBackupRequest) {
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

            if (deleteBackupRequest !== null && deleteBackupRequest !== undefined) {
                if (deleteBackupRequest instanceof DeleteBackupRequest) {
                    backupId = deleteBackupRequest.backupId;
                } else {
                    backupId = deleteBackupRequest['backup_id'];
                }
            }

        
            if (backupId === null || backupId === undefined) {
            throw new RequiredError('backupId','Required parameter backupId was null or undefined when calling deleteBackup.');
            }

            options.pathParams = { 'backup_id': backupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定的备份共享成员
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteMember(deleteMemberRequest?: DeleteMemberRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/backups/{backup_id}/members/{member_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let backupId;
            
            let memberId;

            if (deleteMemberRequest !== null && deleteMemberRequest !== undefined) {
                if (deleteMemberRequest instanceof DeleteMemberRequest) {
                    backupId = deleteMemberRequest.backupId;
                    memberId = deleteMemberRequest.memberId;
                } else {
                    backupId = deleteMemberRequest['backup_id'];
                    memberId = deleteMemberRequest['member_id'];
                }
            }

        
            if (backupId === null || backupId === undefined) {
            throw new RequiredError('backupId','Required parameter backupId was null or undefined when calling deleteMember.');
            }
            if (memberId === null || memberId === undefined) {
            throw new RequiredError('memberId','Required parameter memberId was null or undefined when calling deleteMember.');
            }

            options.pathParams = { 'backup_id': backupId,'member_id': memberId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePolicy(deletePolicyRequest?: DeletePolicyRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/policies/{policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let policyId;

            if (deletePolicyRequest !== null && deletePolicyRequest !== undefined) {
                if (deletePolicyRequest instanceof DeletePolicyRequest) {
                    policyId = deletePolicyRequest.policyId;
                } else {
                    policyId = deletePolicyRequest['policy_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling deletePolicy.');
            }

            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除存储库。若删除储存库，将一并删除存储库中的所有备份。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteVault(deleteVaultRequest?: DeleteVaultRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/vaults/{vault_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let vaultId;

            if (deleteVaultRequest !== null && deleteVaultRequest !== undefined) {
                if (deleteVaultRequest instanceof DeleteVaultRequest) {
                    vaultId = deleteVaultRequest.vaultId;
                } else {
                    vaultId = deleteVaultRequest['vault_id'];
                }
            }

        
            if (vaultId === null || vaultId === undefined) {
            throw new RequiredError('vaultId','Required parameter vaultId was null or undefined when calling deleteVault.');
            }

            options.pathParams = { 'vault_id': vaultId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 幂等接口：删除时，如果删除的标签不存在，返回404。Key不能为空或者空字符串。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteVaultTag(deleteVaultTagRequest?: DeleteVaultTagRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/vault/{vault_id}/tags/{key}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let key;
            
            let vaultId;

            if (deleteVaultTagRequest !== null && deleteVaultTagRequest !== undefined) {
                if (deleteVaultTagRequest instanceof DeleteVaultTagRequest) {
                    key = deleteVaultTagRequest.key;
                    vaultId = deleteVaultTagRequest.vaultId;
                } else {
                    key = deleteVaultTagRequest['key'];
                    vaultId = deleteVaultTagRequest['vault_id'];
                }
            }

        
            if (key === null || key === undefined) {
            throw new RequiredError('key','Required parameter key was null or undefined when calling deleteVaultTag.');
            }
            if (vaultId === null || vaultId === undefined) {
            throw new RequiredError('vaultId','Required parameter vaultId was null or undefined when calling deleteVaultTag.');
            }

            options.pathParams = { 'key': key,'vault_id': vaultId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 存储库解除策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disassociateVaultPolicy(disassociateVaultPolicyRequest?: DisassociateVaultPolicyRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/vaults/{vault_id}/dissociatepolicy",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let vaultId;

            if (disassociateVaultPolicyRequest !== null && disassociateVaultPolicyRequest !== undefined) {
                if (disassociateVaultPolicyRequest instanceof DisassociateVaultPolicyRequest) {
                    vaultId = disassociateVaultPolicyRequest.vaultId;
                    body = disassociateVaultPolicyRequest.body
                } else {
                    vaultId = disassociateVaultPolicyRequest['vault_id'];
                    body = disassociateVaultPolicyRequest['body'];
                }
            }

        
            if (vaultId === null || vaultId === undefined) {
            throw new RequiredError('vaultId','Required parameter vaultId was null or undefined when calling disassociateVaultPolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vault_id': vaultId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 同步线下混合云VMware备份副本
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        importBackup(importBackupRequest?: ImportBackupRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/backups/sync",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (importBackupRequest !== null && importBackupRequest !== undefined) {
                if (importBackupRequest instanceof ImportBackupRequest) {
                    body = importBackupRequest.body
                } else {
                    body = importBackupRequest['body'];
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
         * 针对vault同步备份副本
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        importCheckpoint(importCheckpointRequest?: ImportCheckpointRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/checkpoints/sync",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (importCheckpointRequest !== null && importCheckpointRequest !== undefined) {
                if (importCheckpointRequest instanceof ImportCheckpointRequest) {
                    body = importCheckpointRequest.body
                } else {
                    body = importCheckpointRequest['body'];
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
         * 查询客户端列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAgent(listAgentRequest?: ListAgentRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/agents",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;
            
            let status;
            
            let agentId;

            if (listAgentRequest !== null && listAgentRequest !== undefined) {
                if (listAgentRequest instanceof ListAgentRequest) {
                    limit = listAgentRequest.limit;
                    offset = listAgentRequest.offset;
                    status = listAgentRequest.status;
                    agentId = listAgentRequest.agentId;
                } else {
                    limit = listAgentRequest['limit'];
                    offset = listAgentRequest['offset'];
                    status = listAgentRequest['status'];
                    agentId = listAgentRequest['agent_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (agentId !== null && agentId !== undefined) {
                localVarQueryParameter['agent_id'] = agentId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询所有副本
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
            
            let checkpointId;
            
            let dec;
            
            let endTime;
            
            let imageType;
            
            let limit;
            
            let marker;
            
            let name;
            
            let offset;
            
            let resourceAz;
            
            let resourceId;
            
            let resourceName;
            
            let resourceType;
            
            let sort;
            
            let startTime;
            
            let status;
            
            let vaultId;
            
            let enterpriseProjectId;
            
            let ownType;
            
            let memberStatus;
            
            let parentId;
            
            let usedPercent;
            
            let showReplication;
            
            let incremental;

            if (listBackupsRequest !== null && listBackupsRequest !== undefined) {
                if (listBackupsRequest instanceof ListBackupsRequest) {
                    checkpointId = listBackupsRequest.checkpointId;
                    dec = listBackupsRequest.dec;
                    endTime = listBackupsRequest.endTime;
                    imageType = listBackupsRequest.imageType;
                    limit = listBackupsRequest.limit;
                    marker = listBackupsRequest.marker;
                    name = listBackupsRequest.name;
                    offset = listBackupsRequest.offset;
                    resourceAz = listBackupsRequest.resourceAz;
                    resourceId = listBackupsRequest.resourceId;
                    resourceName = listBackupsRequest.resourceName;
                    resourceType = listBackupsRequest.resourceType;
                    sort = listBackupsRequest.sort;
                    startTime = listBackupsRequest.startTime;
                    status = listBackupsRequest.status;
                    vaultId = listBackupsRequest.vaultId;
                    enterpriseProjectId = listBackupsRequest.enterpriseProjectId;
                    ownType = listBackupsRequest.ownType;
                    memberStatus = listBackupsRequest.memberStatus;
                    parentId = listBackupsRequest.parentId;
                    usedPercent = listBackupsRequest.usedPercent;
                    showReplication = listBackupsRequest.showReplication;
                    incremental = listBackupsRequest.incremental;
                } else {
                    checkpointId = listBackupsRequest['checkpoint_id'];
                    dec = listBackupsRequest['dec'];
                    endTime = listBackupsRequest['end_time'];
                    imageType = listBackupsRequest['image_type'];
                    limit = listBackupsRequest['limit'];
                    marker = listBackupsRequest['marker'];
                    name = listBackupsRequest['name'];
                    offset = listBackupsRequest['offset'];
                    resourceAz = listBackupsRequest['resource_az'];
                    resourceId = listBackupsRequest['resource_id'];
                    resourceName = listBackupsRequest['resource_name'];
                    resourceType = listBackupsRequest['resource_type'];
                    sort = listBackupsRequest['sort'];
                    startTime = listBackupsRequest['start_time'];
                    status = listBackupsRequest['status'];
                    vaultId = listBackupsRequest['vault_id'];
                    enterpriseProjectId = listBackupsRequest['enterprise_project_id'];
                    ownType = listBackupsRequest['own_type'];
                    memberStatus = listBackupsRequest['member_status'];
                    parentId = listBackupsRequest['parent_id'];
                    usedPercent = listBackupsRequest['used_percent'];
                    showReplication = listBackupsRequest['show_replication'];
                    incremental = listBackupsRequest['incremental'];
                }
            }

        
            if (checkpointId !== null && checkpointId !== undefined) {
                localVarQueryParameter['checkpoint_id'] = checkpointId;
            }
            if (dec !== null && dec !== undefined) {
                localVarQueryParameter['dec'] = dec;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (imageType !== null && imageType !== undefined) {
                localVarQueryParameter['image_type'] = imageType;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (resourceAz !== null && resourceAz !== undefined) {
                localVarQueryParameter['resource_az'] = resourceAz;
            }
            if (resourceId !== null && resourceId !== undefined) {
                localVarQueryParameter['resource_id'] = resourceId;
            }
            if (resourceName !== null && resourceName !== undefined) {
                localVarQueryParameter['resource_name'] = resourceName;
            }
            if (resourceType !== null && resourceType !== undefined) {
                localVarQueryParameter['resource_type'] = resourceType;
            }
            if (sort !== null && sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (vaultId !== null && vaultId !== undefined) {
                localVarQueryParameter['vault_id'] = vaultId;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (ownType !== null && ownType !== undefined) {
                localVarQueryParameter['own_type'] = ownType;
            }
            if (memberStatus !== null && memberStatus !== undefined) {
                localVarQueryParameter['member_status'] = memberStatus;
            }
            if (parentId !== null && parentId !== undefined) {
                localVarQueryParameter['parent_id'] = parentId;
            }
            if (usedPercent !== null && usedPercent !== undefined) {
                localVarQueryParameter['used_percent'] = usedPercent;
            }
            if (showReplication !== null && showReplication !== undefined) {
                localVarQueryParameter['show_replication'] = showReplication;
            }
            if (incremental !== null && incremental !== undefined) {
                localVarQueryParameter['incremental'] = incremental;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据指定租户名称查询项目列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDomainProjects(listDomainProjectsRequest?: ListDomainProjectsRequest) {
            const options = {
                method: "GET",
                url: "/v3/domain/{domain_name}/projects",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let domainName;

            if (listDomainProjectsRequest !== null && listDomainProjectsRequest !== undefined) {
                if (listDomainProjectsRequest instanceof ListDomainProjectsRequest) {
                    domainName = listDomainProjectsRequest.domainName;
                } else {
                    domainName = listDomainProjectsRequest['domain_name'];
                }
            }

        
            if (domainName === null || domainName === undefined) {
            throw new RequiredError('domainName','Required parameter domainName was null or undefined when calling listDomainProjects.');
            }

            options.pathParams = { 'domain_name': domainName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询其他区域的存储库列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listExternalVault(listExternalVaultRequest?: ListExternalVaultRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/vaults/external",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let externalProjectId;
            
            let regionId;
            
            let limit;
            
            let offset;
            
            let protectType;
            
            let objcetType;
            
            let cloudType;
            
            let vaultId;

            if (listExternalVaultRequest !== null && listExternalVaultRequest !== undefined) {
                if (listExternalVaultRequest instanceof ListExternalVaultRequest) {
                    externalProjectId = listExternalVaultRequest.externalProjectId;
                    regionId = listExternalVaultRequest.regionId;
                    limit = listExternalVaultRequest.limit;
                    offset = listExternalVaultRequest.offset;
                    protectType = listExternalVaultRequest.protectType;
                    objcetType = listExternalVaultRequest.objcetType;
                    cloudType = listExternalVaultRequest.cloudType;
                    vaultId = listExternalVaultRequest.vaultId;
                } else {
                    externalProjectId = listExternalVaultRequest['external_project_id'];
                    regionId = listExternalVaultRequest['region_id'];
                    limit = listExternalVaultRequest['limit'];
                    offset = listExternalVaultRequest['offset'];
                    protectType = listExternalVaultRequest['protect_type'];
                    objcetType = listExternalVaultRequest['objcet_type'];
                    cloudType = listExternalVaultRequest['cloud_type'];
                    vaultId = listExternalVaultRequest['vault_id'];
                }
            }

        
            if (externalProjectId === null || externalProjectId === undefined) {
                throw new RequiredError('externalProjectId','Required parameter externalProjectId was null or undefined when calling listExternalVault.');
            }
            if (externalProjectId !== null && externalProjectId !== undefined) {
                localVarQueryParameter['external_project_id'] = externalProjectId;
            }
            if (regionId === null || regionId === undefined) {
                throw new RequiredError('regionId','Required parameter regionId was null or undefined when calling listExternalVault.');
            }
            if (regionId !== null && regionId !== undefined) {
                localVarQueryParameter['region_id'] = regionId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (protectType !== null && protectType !== undefined) {
                localVarQueryParameter['protect_type'] = protectType;
            }
            if (objcetType !== null && objcetType !== undefined) {
                localVarQueryParameter['objcet_type'] = objcetType;
            }
            if (cloudType !== null && cloudType !== undefined) {
                localVarQueryParameter['cloud_type'] = cloudType;
            }
            if (vaultId !== null && vaultId !== undefined) {
                localVarQueryParameter['vault_id'] = vaultId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询任务列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listOpLogs(listOpLogsRequest?: ListOpLogsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/operation-logs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let endTime;
            
            let limit;
            
            let offset;
            
            let operationType;
            
            let providerId;
            
            let resourceId;
            
            let resourceName;
            
            let startTime;
            
            let status;
            
            let vaultId;
            
            let vaultName;
            
            let enterpriseProjectId;

            if (listOpLogsRequest !== null && listOpLogsRequest !== undefined) {
                if (listOpLogsRequest instanceof ListOpLogsRequest) {
                    endTime = listOpLogsRequest.endTime;
                    limit = listOpLogsRequest.limit;
                    offset = listOpLogsRequest.offset;
                    operationType = listOpLogsRequest.operationType;
                    providerId = listOpLogsRequest.providerId;
                    resourceId = listOpLogsRequest.resourceId;
                    resourceName = listOpLogsRequest.resourceName;
                    startTime = listOpLogsRequest.startTime;
                    status = listOpLogsRequest.status;
                    vaultId = listOpLogsRequest.vaultId;
                    vaultName = listOpLogsRequest.vaultName;
                    enterpriseProjectId = listOpLogsRequest.enterpriseProjectId;
                } else {
                    endTime = listOpLogsRequest['end_time'];
                    limit = listOpLogsRequest['limit'];
                    offset = listOpLogsRequest['offset'];
                    operationType = listOpLogsRequest['operation_type'];
                    providerId = listOpLogsRequest['provider_id'];
                    resourceId = listOpLogsRequest['resource_id'];
                    resourceName = listOpLogsRequest['resource_name'];
                    startTime = listOpLogsRequest['start_time'];
                    status = listOpLogsRequest['status'];
                    vaultId = listOpLogsRequest['vault_id'];
                    vaultName = listOpLogsRequest['vault_name'];
                    enterpriseProjectId = listOpLogsRequest['enterprise_project_id'];
                }
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
            if (operationType !== null && operationType !== undefined) {
                localVarQueryParameter['operation_type'] = operationType;
            }
            if (providerId !== null && providerId !== undefined) {
                localVarQueryParameter['provider_id'] = providerId;
            }
            if (resourceId !== null && resourceId !== undefined) {
                localVarQueryParameter['resource_id'] = resourceId;
            }
            if (resourceName !== null && resourceName !== undefined) {
                localVarQueryParameter['resource_name'] = resourceName;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (vaultId !== null && vaultId !== undefined) {
                localVarQueryParameter['vault_id'] = vaultId;
            }
            if (vaultName !== null && vaultName !== undefined) {
                localVarQueryParameter['vault_name'] = vaultName;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询策略列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPolicies(listPoliciesRequest?: ListPoliciesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/policies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let operationType;
            
            let vaultId;

            if (listPoliciesRequest !== null && listPoliciesRequest !== undefined) {
                if (listPoliciesRequest instanceof ListPoliciesRequest) {
                    operationType = listPoliciesRequest.operationType;
                    vaultId = listPoliciesRequest.vaultId;
                } else {
                    operationType = listPoliciesRequest['operation_type'];
                    vaultId = listPoliciesRequest['vault_id'];
                }
            }

        
            if (operationType !== null && operationType !== undefined) {
                localVarQueryParameter['operation_type'] = operationType;
            }
            if (vaultId !== null && vaultId !== undefined) {
                localVarQueryParameter['vault_id'] = vaultId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户的企业项目信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProjects() {
            const options = {
                method: "GET",
                url: "/v3/region-projects",
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
         * 查询可保护性资源列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProtectable(listProtectableRequest?: ListProtectableRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/protectables/{protectable_type}/instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let protectableType;
            
            let limit;
            
            let marker;
            
            let name;
            
            let offset;
            
            let status;
            
            let id;
            
            let serverId;

            if (listProtectableRequest !== null && listProtectableRequest !== undefined) {
                if (listProtectableRequest instanceof ListProtectableRequest) {
                    protectableType = listProtectableRequest.protectableType;
                    limit = listProtectableRequest.limit;
                    marker = listProtectableRequest.marker;
                    name = listProtectableRequest.name;
                    offset = listProtectableRequest.offset;
                    status = listProtectableRequest.status;
                    id = listProtectableRequest.id;
                    serverId = listProtectableRequest.serverId;
                } else {
                    protectableType = listProtectableRequest['protectable_type'];
                    limit = listProtectableRequest['limit'];
                    marker = listProtectableRequest['marker'];
                    name = listProtectableRequest['name'];
                    offset = listProtectableRequest['offset'];
                    status = listProtectableRequest['status'];
                    id = listProtectableRequest['id'];
                    serverId = listProtectableRequest['server_id'];
                }
            }

        
            if (protectableType === null || protectableType === undefined) {
            throw new RequiredError('protectableType','Required parameter protectableType was null or undefined when calling listProtectable.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (serverId !== null && serverId !== undefined) {
                localVarQueryParameter['server_id'] = serverId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'protectable_type': protectableType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询存储库列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVault(listVaultRequest?: ListVaultRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/vaults",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let name;
            
            let offset;
            
            let cloudType;
            
            let protectType;
            
            let objectType;
            
            let enterpriseProjectId;
            
            let id;
            
            let policyId;
            
            let status;
            
            let resourceIds;

            if (listVaultRequest !== null && listVaultRequest !== undefined) {
                if (listVaultRequest instanceof ListVaultRequest) {
                    limit = listVaultRequest.limit;
                    name = listVaultRequest.name;
                    offset = listVaultRequest.offset;
                    cloudType = listVaultRequest.cloudType;
                    protectType = listVaultRequest.protectType;
                    objectType = listVaultRequest.objectType;
                    enterpriseProjectId = listVaultRequest.enterpriseProjectId;
                    id = listVaultRequest.id;
                    policyId = listVaultRequest.policyId;
                    status = listVaultRequest.status;
                    resourceIds = listVaultRequest.resourceIds;
                } else {
                    limit = listVaultRequest['limit'];
                    name = listVaultRequest['name'];
                    offset = listVaultRequest['offset'];
                    cloudType = listVaultRequest['cloud_type'];
                    protectType = listVaultRequest['protect_type'];
                    objectType = listVaultRequest['object_type'];
                    enterpriseProjectId = listVaultRequest['enterprise_project_id'];
                    id = listVaultRequest['id'];
                    policyId = listVaultRequest['policy_id'];
                    status = listVaultRequest['status'];
                    resourceIds = listVaultRequest['resource_ids'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (cloudType !== null && cloudType !== undefined) {
                localVarQueryParameter['cloud_type'] = cloudType;
            }
            if (protectType !== null && protectType !== undefined) {
                localVarQueryParameter['protect_type'] = protectType;
            }
            if (objectType !== null && objectType !== undefined) {
                localVarQueryParameter['object_type'] = objectType;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (policyId !== null && policyId !== undefined) {
                localVarQueryParameter['policy_id'] = policyId;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (resourceIds !== null && resourceIds !== undefined) {
                localVarQueryParameter['resource_ids'] = resourceIds;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 将CSBS/VBS资源迁移到CBR。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        migrateDomain(migrateDomainRequest?: MigrateDomainRequest) {
            const options = {
                method: "POST",
                url: "/v3/migrates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (migrateDomainRequest !== null && migrateDomainRequest !== undefined) {
                if (migrateDomainRequest instanceof MigrateDomainRequest) {
                    body = migrateDomainRequest.body
                } else {
                    body = migrateDomainRequest['body'];
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
         * 支持资源迁移到另一个存储库，不删除备份。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        migrateVaultResource(migrateVaultResourceRequest?: MigrateVaultResourceRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/vaults/{vault_id}/migrateresources",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let vaultId;

            if (migrateVaultResourceRequest !== null && migrateVaultResourceRequest !== undefined) {
                if (migrateVaultResourceRequest instanceof MigrateVaultResourceRequest) {
                    vaultId = migrateVaultResourceRequest.vaultId;
                    body = migrateVaultResourceRequest.body
                } else {
                    vaultId = migrateVaultResourceRequest['vault_id'];
                    body = migrateVaultResourceRequest['body'];
                }
            }

        
            if (vaultId === null || vaultId === undefined) {
            throw new RequiredError('vaultId','Required parameter vaultId was null or undefined when calling migrateVaultResource.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vault_id': vaultId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 注册客户端，安装时候由Agent调用，无需手动注册。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        registerAgent(registerAgentRequest?: RegisterAgentRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/agents",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (registerAgentRequest !== null && registerAgentRequest !== undefined) {
                if (registerAgentRequest instanceof RegisterAgentRequest) {
                    body = registerAgentRequest.body
                } else {
                    body = registerAgentRequest['body'];
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
         * 移除已添加的文件备份路径。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        removeAgentPath(removeAgentPathRequest?: RemoveAgentPathRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/agents/{agent_id}/remove-path",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let agentId;

            if (removeAgentPathRequest !== null && removeAgentPathRequest !== undefined) {
                if (removeAgentPathRequest instanceof RemoveAgentPathRequest) {
                    agentId = removeAgentPathRequest.agentId;
                    body = removeAgentPathRequest.body
                } else {
                    agentId = removeAgentPathRequest['agent_id'];
                    body = removeAgentPathRequest['body'];
                }
            }

        
            if (agentId === null || agentId === undefined) {
            throw new RequiredError('agentId','Required parameter agentId was null or undefined when calling removeAgentPath.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'agent_id': agentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 移除存储库中的资源，若移除资源，将一并删除该资源在保管库中的备份
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        removeVaultResource(removeVaultResourceRequest?: RemoveVaultResourceRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/vaults/{vault_id}/removeresources",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let vaultId;

            if (removeVaultResourceRequest !== null && removeVaultResourceRequest !== undefined) {
                if (removeVaultResourceRequest instanceof RemoveVaultResourceRequest) {
                    vaultId = removeVaultResourceRequest.vaultId;
                    body = removeVaultResourceRequest.body
                } else {
                    vaultId = removeVaultResourceRequest['vault_id'];
                    body = removeVaultResourceRequest['body'];
                }
            }

        
            if (vaultId === null || vaultId === undefined) {
            throw new RequiredError('vaultId','Required parameter vaultId was null or undefined when calling removeVaultResource.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vault_id': vaultId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 恢复备份数据
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restoreBackup(restoreBackupRequest?: RestoreBackupRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/backups/{backup_id}/restore",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let backupId;

            if (restoreBackupRequest !== null && restoreBackupRequest !== undefined) {
                if (restoreBackupRequest instanceof RestoreBackupRequest) {
                    backupId = restoreBackupRequest.backupId;
                    body = restoreBackupRequest.body
                } else {
                    backupId = restoreBackupRequest['backup_id'];
                    body = restoreBackupRequest['body'];
                }
            }

        
            if (backupId === null || backupId === undefined) {
            throw new RequiredError('backupId','Required parameter backupId was null or undefined when calling restoreBackup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'backup_id': backupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设置存储库资源是否自动备份
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setVaultResource(setVaultResourceRequest?: SetVaultResourceRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/vaults/{vault_id}/set-resources",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let vaultId;

            if (setVaultResourceRequest !== null && setVaultResourceRequest !== undefined) {
                if (setVaultResourceRequest instanceof SetVaultResourceRequest) {
                    vaultId = setVaultResourceRequest.vaultId;
                    body = setVaultResourceRequest.body
                } else {
                    vaultId = setVaultResourceRequest['vault_id'];
                    body = setVaultResourceRequest['body'];
                }
            }

        
            if (vaultId === null || vaultId === undefined) {
            throw new RequiredError('vaultId','Required parameter vaultId was null or undefined when calling setVaultResource.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vault_id': vaultId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定客户端
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAgent(showAgentRequest?: ShowAgentRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/agents/{agent_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let agentId;

            if (showAgentRequest !== null && showAgentRequest !== undefined) {
                if (showAgentRequest instanceof ShowAgentRequest) {
                    agentId = showAgentRequest.agentId;
                } else {
                    agentId = showAgentRequest['agent_id'];
                }
            }

        
            if (agentId === null || agentId === undefined) {
            throw new RequiredError('agentId','Required parameter agentId was null or undefined when calling showAgent.');
            }

            options.pathParams = { 'agent_id': agentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据指定id查询单个副本。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBackup(showBackupRequest?: ShowBackupRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/backups/{backup_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let backupId;

            if (showBackupRequest !== null && showBackupRequest !== undefined) {
                if (showBackupRequest instanceof ShowBackupRequest) {
                    backupId = showBackupRequest.backupId;
                } else {
                    backupId = showBackupRequest['backup_id'];
                }
            }

        
            if (backupId === null || backupId === undefined) {
            throw new RequiredError('backupId','Required parameter backupId was null or undefined when calling showBackup.');
            }

            options.pathParams = { 'backup_id': backupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据还原点ID查询指定还原点
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCheckpoint(showCheckpointRequest?: ShowCheckpointRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/checkpoints/{checkpoint_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let checkpointId;

            if (showCheckpointRequest !== null && showCheckpointRequest !== undefined) {
                if (showCheckpointRequest instanceof ShowCheckpointRequest) {
                    checkpointId = showCheckpointRequest.checkpointId;
                } else {
                    checkpointId = showCheckpointRequest['checkpoint_id'];
                }
            }

        
            if (checkpointId === null || checkpointId === undefined) {
            throw new RequiredError('checkpointId','Required parameter checkpointId was null or undefined when calling showCheckpoint.');
            }

            options.pathParams = { 'checkpoint_id': checkpointId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 由控制台调用的内部接口，用于仅在查询共享备份时获取源project_id的域名信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDomain(showDomainRequest?: ShowDomainRequest) {
            const options = {
                method: "GET",
                url: "/v3/domain/{source_project_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let sourceProjectId;

            if (showDomainRequest !== null && showDomainRequest !== undefined) {
                if (showDomainRequest instanceof ShowDomainRequest) {
                    sourceProjectId = showDomainRequest.sourceProjectId;
                } else {
                    sourceProjectId = showDomainRequest['source_project_id'];
                }
            }

        
            if (sourceProjectId === null || sourceProjectId === undefined) {
            throw new RequiredError('sourceProjectId','Required parameter sourceProjectId was null or undefined when calling showDomain.');
            }

            options.pathParams = { 'source_project_id': sourceProjectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取备份成员的详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMemberDetail(showMemberDetailRequest?: ShowMemberDetailRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/backups/{backup_id}/members/{member_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let backupId;
            
            let memberId;

            if (showMemberDetailRequest !== null && showMemberDetailRequest !== undefined) {
                if (showMemberDetailRequest instanceof ShowMemberDetailRequest) {
                    backupId = showMemberDetailRequest.backupId;
                    memberId = showMemberDetailRequest.memberId;
                } else {
                    backupId = showMemberDetailRequest['backup_id'];
                    memberId = showMemberDetailRequest['member_id'];
                }
            }

        
            if (backupId === null || backupId === undefined) {
            throw new RequiredError('backupId','Required parameter backupId was null or undefined when calling showMemberDetail.');
            }
            if (memberId === null || memberId === undefined) {
            throw new RequiredError('memberId','Required parameter memberId was null or undefined when calling showMemberDetail.');
            }

            options.pathParams = { 'backup_id': backupId,'member_id': memberId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取备份共享成员的列表信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMembersDetail(showMembersDetailRequest?: ShowMembersDetailRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/backups/{backup_id}/members",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let backupId;
            
            let destProjectId;
            
            let imageId;
            
            let status;
            
            let vaultId;
            
            let limit;
            
            let marker;
            
            let offset;
            
            let sort;

            if (showMembersDetailRequest !== null && showMembersDetailRequest !== undefined) {
                if (showMembersDetailRequest instanceof ShowMembersDetailRequest) {
                    backupId = showMembersDetailRequest.backupId;
                    destProjectId = showMembersDetailRequest.destProjectId;
                    imageId = showMembersDetailRequest.imageId;
                    status = showMembersDetailRequest.status;
                    vaultId = showMembersDetailRequest.vaultId;
                    limit = showMembersDetailRequest.limit;
                    marker = showMembersDetailRequest.marker;
                    offset = showMembersDetailRequest.offset;
                    sort = showMembersDetailRequest.sort;
                } else {
                    backupId = showMembersDetailRequest['backup_id'];
                    destProjectId = showMembersDetailRequest['dest_project_id'];
                    imageId = showMembersDetailRequest['image_id'];
                    status = showMembersDetailRequest['status'];
                    vaultId = showMembersDetailRequest['vault_id'];
                    limit = showMembersDetailRequest['limit'];
                    marker = showMembersDetailRequest['marker'];
                    offset = showMembersDetailRequest['offset'];
                    sort = showMembersDetailRequest['sort'];
                }
            }

        
            if (backupId === null || backupId === undefined) {
            throw new RequiredError('backupId','Required parameter backupId was null or undefined when calling showMembersDetail.');
            }
            if (destProjectId !== null && destProjectId !== undefined) {
                localVarQueryParameter['dest_project_id'] = destProjectId;
            }
            if (imageId !== null && imageId !== undefined) {
                localVarQueryParameter['image_id'] = imageId;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (vaultId !== null && vaultId !== undefined) {
                localVarQueryParameter['vault_id'] = vaultId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (sort !== null && sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'backup_id': backupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询备份时资源的元数据
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMetadata(showMetadataRequest?: ShowMetadataRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/backups/{backup_id}/metadata",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let backupId;

            if (showMetadataRequest !== null && showMetadataRequest !== undefined) {
                if (showMetadataRequest instanceof ShowMetadataRequest) {
                    backupId = showMetadataRequest.backupId;
                } else {
                    backupId = showMetadataRequest['backup_id'];
                }
            }

        
            if (backupId === null || backupId === undefined) {
            throw new RequiredError('backupId','Required parameter backupId was null or undefined when calling showMetadata.');
            }

            options.pathParams = { 'backup_id': backupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询迁移结果
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMigrateStatus(showMigrateStatusRequest?: ShowMigrateStatusRequest) {
            const options = {
                method: "GET",
                url: "/v3/migrates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let allRegions;

            if (showMigrateStatusRequest !== null && showMigrateStatusRequest !== undefined) {
                if (showMigrateStatusRequest instanceof ShowMigrateStatusRequest) {
                    allRegions = showMigrateStatusRequest.allRegions;
                } else {
                    allRegions = showMigrateStatusRequest['all_regions'];
                }
            }

        
            if (allRegions !== null && allRegions !== undefined) {
                localVarQueryParameter['all_regions'] = allRegions;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据指定任务ID查询任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showOpLog(showOpLogRequest?: ShowOpLogRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/operation-logs/{operation_log_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let operationLogId;

            if (showOpLogRequest !== null && showOpLogRequest !== undefined) {
                if (showOpLogRequest instanceof ShowOpLogRequest) {
                    operationLogId = showOpLogRequest.operationLogId;
                } else {
                    operationLogId = showOpLogRequest['operation_log_id'];
                }
            }

        
            if (operationLogId === null || operationLogId === undefined) {
            throw new RequiredError('operationLogId','Required parameter operationLogId was null or undefined when calling showOpLog.');
            }

            options.pathParams = { 'operation_log_id': operationLogId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询单个策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPolicy(showPolicyRequest?: ShowPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/policies/{policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let policyId;

            if (showPolicyRequest !== null && showPolicyRequest !== undefined) {
                if (showPolicyRequest instanceof ShowPolicyRequest) {
                    policyId = showPolicyRequest.policyId;
                } else {
                    policyId = showPolicyRequest['policy_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling showPolicy.');
            }

            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据ID查询可保护性资源
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showProtectable(showProtectableRequest?: ShowProtectableRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/protectables/{protectable_type}/instances/{instance_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let protectableType;

            if (showProtectableRequest !== null && showProtectableRequest !== undefined) {
                if (showProtectableRequest instanceof ShowProtectableRequest) {
                    instanceId = showProtectableRequest.instanceId;
                    protectableType = showProtectableRequest.protectableType;
                } else {
                    instanceId = showProtectableRequest['instance_id'];
                    protectableType = showProtectableRequest['protectable_type'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showProtectable.');
            }
            if (protectableType === null || protectableType === undefined) {
            throw new RequiredError('protectableType','Required parameter protectableType was null or undefined when calling showProtectable.');
            }

            options.pathParams = { 'instance_id': instanceId,'protectable_type': protectableType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询本区域的复制能力
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showReplicationCapabilities() {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/replication-capabilities",
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
         * 查询容量统计
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showStorageUsage(showStorageUsageRequest?: ShowStorageUsageRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/storage_usage",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;
            
            let resourceId;
            
            let resourceType;

            if (showStorageUsageRequest !== null && showStorageUsageRequest !== undefined) {
                if (showStorageUsageRequest instanceof ShowStorageUsageRequest) {
                    limit = showStorageUsageRequest.limit;
                    offset = showStorageUsageRequest.offset;
                    resourceId = showStorageUsageRequest.resourceId;
                    resourceType = showStorageUsageRequest.resourceType;
                } else {
                    limit = showStorageUsageRequest['limit'];
                    offset = showStorageUsageRequest['offset'];
                    resourceId = showStorageUsageRequest['resource_id'];
                    resourceType = showStorageUsageRequest['resource_type'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (resourceId !== null && resourceId !== undefined) {
                localVarQueryParameter['resource_id'] = resourceId;
            }
            if (resourceType !== null && resourceType !== undefined) {
                localVarQueryParameter['resource_type'] = resourceType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据ID查询指定存储库
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVault(showVaultRequest?: ShowVaultRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/vaults/{vault_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let vaultId;

            if (showVaultRequest !== null && showVaultRequest !== undefined) {
                if (showVaultRequest instanceof ShowVaultRequest) {
                    vaultId = showVaultRequest.vaultId;
                } else {
                    vaultId = showVaultRequest['vault_id'];
                }
            }

        
            if (vaultId === null || vaultId === undefined) {
            throw new RequiredError('vaultId','Required parameter vaultId was null or undefined when calling showVault.');
            }

            options.pathParams = { 'vault_id': vaultId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户在指定Region和实例类型的所有标签集合
         * 标签管理服务需要能够列出当前租户全部已使用的标签集合，为各服务Console打标签和过滤实例时提供标签联想功能
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVaultProjectTag() {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/vault/tags",
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
         * 使用标签过滤实例
         * 标签管理服务需要提供按标签过滤各服务实例并汇总显示在列表中，需要各服务提供查询能力
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVaultResourceInstances(showVaultResourceInstancesRequest?: ShowVaultResourceInstancesRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/vault/resource_instances/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (showVaultResourceInstancesRequest !== null && showVaultResourceInstancesRequest !== undefined) {
                if (showVaultResourceInstancesRequest instanceof ShowVaultResourceInstancesRequest) {
                    body = showVaultResourceInstancesRequest.body
                } else {
                    body = showVaultResourceInstancesRequest['body'];
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
         * 查询指定实例的标签信息
         * 标签管理服务需要使用该接口查询指定实例的全部标签数据
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVaultTag(showVaultTagRequest?: ShowVaultTagRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/vault/{vault_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let vaultId;

            if (showVaultTagRequest !== null && showVaultTagRequest !== undefined) {
                if (showVaultTagRequest instanceof ShowVaultTagRequest) {
                    vaultId = showVaultTagRequest.vaultId;
                } else {
                    vaultId = showVaultTagRequest['vault_id'];
                }
            }

        
            if (vaultId === null || vaultId === undefined) {
            throw new RequiredError('vaultId','Required parameter vaultId was null or undefined when calling showVaultTag.');
            }

            options.pathParams = { 'vault_id': vaultId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 移除客户端，移除客户端时将会删除该客户端所有备份，请谨慎操作。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        unregisterAgent(unregisterAgentRequest?: UnregisterAgentRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/agents/{agent_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let agentId;

            if (unregisterAgentRequest !== null && unregisterAgentRequest !== undefined) {
                if (unregisterAgentRequest instanceof UnregisterAgentRequest) {
                    agentId = unregisterAgentRequest.agentId;
                } else {
                    agentId = unregisterAgentRequest['agent_id'];
                }
            }

        
            if (agentId === null || agentId === undefined) {
            throw new RequiredError('agentId','Required parameter agentId was null or undefined when calling unregisterAgent.');
            }

            options.pathParams = { 'agent_id': agentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改客户端状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAgent(updateAgentRequest?: UpdateAgentRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/agents/{agent_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let agentId;

            if (updateAgentRequest !== null && updateAgentRequest !== undefined) {
                if (updateAgentRequest instanceof UpdateAgentRequest) {
                    agentId = updateAgentRequest.agentId;
                    body = updateAgentRequest.body
                } else {
                    agentId = updateAgentRequest['agent_id'];
                    body = updateAgentRequest['body'];
                }
            }

        
            if (agentId === null || agentId === undefined) {
            throw new RequiredError('agentId','Required parameter agentId was null or undefined when calling updateAgent.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'agent_id': agentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据备份id更改备份
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateBackup(updateBackupRequest?: UpdateBackupRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/backups/{backup_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let backupId;

            if (updateBackupRequest !== null && updateBackupRequest !== undefined) {
                if (updateBackupRequest instanceof UpdateBackupRequest) {
                    backupId = updateBackupRequest.backupId;
                    body = updateBackupRequest.body
                } else {
                    backupId = updateBackupRequest['backup_id'];
                    body = updateBackupRequest['body'];
                }
            }

        
            if (backupId === null || backupId === undefined) {
            throw new RequiredError('backupId','Required parameter backupId was null or undefined when calling updateBackup.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'backup_id': backupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新备份共享成员的状态，需要接收方执行此API。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateMemberStatus(updateMemberStatusRequest?: UpdateMemberStatusRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/backups/{backup_id}/members/{member_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let memberId;
            
            let backupId;

            if (updateMemberStatusRequest !== null && updateMemberStatusRequest !== undefined) {
                if (updateMemberStatusRequest instanceof UpdateMemberStatusRequest) {
                    memberId = updateMemberStatusRequest.memberId;
                    backupId = updateMemberStatusRequest.backupId;
                    body = updateMemberStatusRequest.body
                } else {
                    memberId = updateMemberStatusRequest['member_id'];
                    backupId = updateMemberStatusRequest['backup_id'];
                    body = updateMemberStatusRequest['body'];
                }
            }

        
            if (memberId === null || memberId === undefined) {
            throw new RequiredError('memberId','Required parameter memberId was null or undefined when calling updateMemberStatus.');
            }
            if (backupId === null || backupId === undefined) {
            throw new RequiredError('backupId','Required parameter backupId was null or undefined when calling updateMemberStatus.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'member_id': memberId,'backup_id': backupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 订单更新，支付cbc订单后，调用该接口更新包周期产品订单信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateOrder(updateOrderRequest?: UpdateOrderRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/orders/{order_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let orderId;

            if (updateOrderRequest !== null && updateOrderRequest !== undefined) {
                if (updateOrderRequest instanceof UpdateOrderRequest) {
                    orderId = updateOrderRequest.orderId;
                    body = updateOrderRequest.body
                } else {
                    orderId = updateOrderRequest['order_id'];
                    body = updateOrderRequest['body'];
                }
            }

        
            if (orderId === null || orderId === undefined) {
            throw new RequiredError('orderId','Required parameter orderId was null or undefined when calling updateOrder.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'order_id': orderId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePolicy(updatePolicyRequest?: UpdatePolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/policies/{policy_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let policyId;

            if (updatePolicyRequest !== null && updatePolicyRequest !== undefined) {
                if (updatePolicyRequest instanceof UpdatePolicyRequest) {
                    policyId = updatePolicyRequest.policyId;
                    body = updatePolicyRequest.body
                } else {
                    policyId = updatePolicyRequest['policy_id'];
                    body = updatePolicyRequest['body'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling updatePolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据存储库ID修改存储库
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateVault(updateVaultRequest?: UpdateVaultRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/vaults/{vault_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let vaultId;

            if (updateVaultRequest !== null && updateVaultRequest !== undefined) {
                if (updateVaultRequest instanceof UpdateVaultRequest) {
                    vaultId = updateVaultRequest.vaultId;
                    body = updateVaultRequest.body
                } else {
                    vaultId = updateVaultRequest['vault_id'];
                    body = updateVaultRequest['body'];
                }
            }

        
            if (vaultId === null || vaultId === undefined) {
            throw new RequiredError('vaultId','Required parameter vaultId was null or undefined when calling updateVault.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vault_id': vaultId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): CbrClient {
    return new CbrClient(client);
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