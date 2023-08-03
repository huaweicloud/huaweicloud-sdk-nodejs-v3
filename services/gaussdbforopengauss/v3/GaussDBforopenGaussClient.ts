import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AddInstanceTagsRequest } from './model/AddInstanceTagsRequest';
import { AddInstanceTagsResponse } from './model/AddInstanceTagsResponse';
import { AddTagsRequestBody } from './model/AddTagsRequestBody';
import { AllowDbPrivilegesRequest } from './model/AllowDbPrivilegesRequest';
import { AllowDbPrivilegesResponse } from './model/AllowDbPrivilegesResponse';
import { AppliedHistoriesResult } from './model/AppliedHistoriesResult';
import { ApplyConfigurationRequestBody } from './model/ApplyConfigurationRequestBody';
import { AttachEipRequest } from './model/AttachEipRequest';
import { AttachEipResponse } from './model/AttachEipResponse';
import { AvailableFlavorInfoResult } from './model/AvailableFlavorInfoResult';
import { BackupInfo } from './model/BackupInfo';
import { BackupPolicy } from './model/BackupPolicy';
import { BackupPolicyErrorResponse } from './model/BackupPolicyErrorResponse';
import { Backups } from './model/Backups';
import { BackupsResult } from './model/BackupsResult';
import { BindEIPRequestBody } from './model/BindEIPRequestBody';
import { BindedEipResult } from './model/BindedEipResult';
import { Components } from './model/Components';
import { ConfigurationParameter } from './model/ConfigurationParameter';
import { ConfigurationResult } from './model/ConfigurationResult';
import { ConfigurationSummary } from './model/ConfigurationSummary';
import { CopyConfigurationRequest } from './model/CopyConfigurationRequest';
import { CopyConfigurationResponse } from './model/CopyConfigurationResponse';
import { CreateConfigurationTemplateRequest } from './model/CreateConfigurationTemplateRequest';
import { CreateConfigurationTemplateRequestBody } from './model/CreateConfigurationTemplateRequestBody';
import { CreateConfigurationTemplateResponse } from './model/CreateConfigurationTemplateResponse';
import { CreateDatabaseRequest } from './model/CreateDatabaseRequest';
import { CreateDatabaseResponse } from './model/CreateDatabaseResponse';
import { CreateDatabaseSchemasRequest } from './model/CreateDatabaseSchemasRequest';
import { CreateDatabaseSchemasResponse } from './model/CreateDatabaseSchemasResponse';
import { CreateDbInstanceRequest } from './model/CreateDbInstanceRequest';
import { CreateDbInstanceResponse } from './model/CreateDbInstanceResponse';
import { CreateDbUserRequest } from './model/CreateDbUserRequest';
import { CreateDbUserResponse } from './model/CreateDbUserResponse';
import { CreateInstanceRequest } from './model/CreateInstanceRequest';
import { CreateInstanceRespItem } from './model/CreateInstanceRespItem';
import { CreateInstanceResponse } from './model/CreateInstanceResponse';
import { CreateManualBackupRequest } from './model/CreateManualBackupRequest';
import { CreateManualBackupRequestBody } from './model/CreateManualBackupRequestBody';
import { CreateManualBackupResponse } from './model/CreateManualBackupResponse';
import { CreateRestoreInstanceRequest } from './model/CreateRestoreInstanceRequest';
import { CreateRestoreInstanceResponse } from './model/CreateRestoreInstanceResponse';
import { DataStroeErrorResponse } from './model/DataStroeErrorResponse';
import { DatastoreOption } from './model/DatastoreOption';
import { DatastoresResult } from './model/DatastoresResult';
import { DbUserPwdRequest } from './model/DbUserPwdRequest';
import { DeleteBackupErrorResponse } from './model/DeleteBackupErrorResponse';
import { DeleteConfigurationRequest } from './model/DeleteConfigurationRequest';
import { DeleteConfigurationResponse } from './model/DeleteConfigurationResponse';
import { DeleteInstanceRequest } from './model/DeleteInstanceRequest';
import { DeleteInstanceResponse } from './model/DeleteInstanceResponse';
import { DeleteJobRequest } from './model/DeleteJobRequest';
import { DeleteJobResponse } from './model/DeleteJobResponse';
import { DeleteManualBackupRequest } from './model/DeleteManualBackupRequest';
import { DeleteManualBackupResponse } from './model/DeleteManualBackupResponse';
import { DownloadBackupErrorResponse } from './model/DownloadBackupErrorResponse';
import { DownloadBackupRequest } from './model/DownloadBackupRequest';
import { DownloadBackupResponse } from './model/DownloadBackupResponse';
import { DownloadObject } from './model/DownloadObject';
import { EpsQuotasOption } from './model/EpsQuotasOption';
import { Flavor } from './model/Flavor';
import { FlavorErrorResponse } from './model/FlavorErrorResponse';
import { FlavorResult } from './model/FlavorResult';
import { GaussDBforOpenDatabaseForCreation } from './model/GaussDBforOpenDatabaseForCreation';
import { GaussDBforOpenGaussCreateSchemaReq } from './model/GaussDBforOpenGaussCreateSchemaReq';
import { GaussDBforOpenGaussDatabaseForListSchema } from './model/GaussDBforOpenGaussDatabaseForListSchema';
import { GaussDBforOpenGaussDatabaseSchemaReq } from './model/GaussDBforOpenGaussDatabaseSchemaReq';
import { GaussDBforOpenGaussGrantRequest } from './model/GaussDBforOpenGaussGrantRequest';
import { GaussDBforOpenGaussListDatabase } from './model/GaussDBforOpenGaussListDatabase';
import { GaussDBforOpenGaussUserForCreation } from './model/GaussDBforOpenGaussUserForCreation';
import { GaussDBforOpenGaussUserForList } from './model/GaussDBforOpenGaussUserForList';
import { GaussDBforOpenGaussUserForListAttributes } from './model/GaussDBforOpenGaussUserForListAttributes';
import { GaussDBforOpenGaussUserWithPrivilege } from './model/GaussDBforOpenGaussUserWithPrivilege';
import { GetRestoreTimeResponseRestoreTime } from './model/GetRestoreTimeResponseRestoreTime';
import { InstanceInfoResult } from './model/InstanceInfoResult';
import { InstancesListResult } from './model/InstancesListResult';
import { InstancesResult } from './model/InstancesResult';
import { JobDetail } from './model/JobDetail';
import { JobInstanceInfo } from './model/JobInstanceInfo';
import { ListApplicableInstancesRequest } from './model/ListApplicableInstancesRequest';
import { ListApplicableInstancesResponse } from './model/ListApplicableInstancesResponse';
import { ListAppliedHistoriesRequest } from './model/ListAppliedHistoriesRequest';
import { ListAppliedHistoriesResponse } from './model/ListAppliedHistoriesResponse';
import { ListAvailableFlavorsRequest } from './model/ListAvailableFlavorsRequest';
import { ListAvailableFlavorsResponse } from './model/ListAvailableFlavorsResponse';
import { ListBackupsRequest } from './model/ListBackupsRequest';
import { ListBackupsResponse } from './model/ListBackupsResponse';
import { ListBindedEipsRequest } from './model/ListBindedEipsRequest';
import { ListBindedEipsResponse } from './model/ListBindedEipsResponse';
import { ListComponentInfosRequest } from './model/ListComponentInfosRequest';
import { ListComponentInfosResponse } from './model/ListComponentInfosResponse';
import { ListConfigurationsDiffRequest } from './model/ListConfigurationsDiffRequest';
import { ListConfigurationsDiffResponse } from './model/ListConfigurationsDiffResponse';
import { ListConfigurationsRequest } from './model/ListConfigurationsRequest';
import { ListConfigurationsResponse } from './model/ListConfigurationsResponse';
import { ListDatabaseSchemasRequest } from './model/ListDatabaseSchemasRequest';
import { ListDatabaseSchemasResponse } from './model/ListDatabaseSchemasResponse';
import { ListDatabasesRequest } from './model/ListDatabasesRequest';
import { ListDatabasesResponse } from './model/ListDatabasesResponse';
import { ListDatastore } from './model/ListDatastore';
import { ListDatastoresRequest } from './model/ListDatastoresRequest';
import { ListDatastoresResponse } from './model/ListDatastoresResponse';
import { ListDbBackupsRequest } from './model/ListDbBackupsRequest';
import { ListDbBackupsResponse } from './model/ListDbBackupsResponse';
import { ListDbFlavorsRequest } from './model/ListDbFlavorsRequest';
import { ListDbFlavorsResponse } from './model/ListDbFlavorsResponse';
import { ListDbUsersRequest } from './model/ListDbUsersRequest';
import { ListDbUsersResponse } from './model/ListDbUsersResponse';
import { ListDiffDetailsResult } from './model/ListDiffDetailsResult';
import { ListEpsQuotasRequest } from './model/ListEpsQuotasRequest';
import { ListEpsQuotasResponse } from './model/ListEpsQuotasResponse';
import { ListFlavorInfo } from './model/ListFlavorInfo';
import { ListFlavorsRequest } from './model/ListFlavorsRequest';
import { ListFlavorsResponse } from './model/ListFlavorsResponse';
import { ListGaussDbDatastoresRequest } from './model/ListGaussDbDatastoresRequest';
import { ListGaussDbDatastoresResponse } from './model/ListGaussDbDatastoresResponse';
import { ListHa } from './model/ListHa';
import { ListHaResult } from './model/ListHaResult';
import { ListHistoryOperationsRequest } from './model/ListHistoryOperationsRequest';
import { ListHistoryOperationsResponse } from './model/ListHistoryOperationsResponse';
import { ListHistoryOperationsResult } from './model/ListHistoryOperationsResult';
import { ListInstanceResponse } from './model/ListInstanceResponse';
import { ListInstanceResult } from './model/ListInstanceResult';
import { ListInstanceTagsRequest } from './model/ListInstanceTagsRequest';
import { ListInstanceTagsResponse } from './model/ListInstanceTagsResponse';
import { ListInstancesDetailsRequest } from './model/ListInstancesDetailsRequest';
import { ListInstancesDetailsResponse } from './model/ListInstancesDetailsResponse';
import { ListInstancesRequest } from './model/ListInstancesRequest';
import { ListInstancesResponse } from './model/ListInstancesResponse';
import { ListParamGroupTemplatesRequest } from './model/ListParamGroupTemplatesRequest';
import { ListParamGroupTemplatesResponse } from './model/ListParamGroupTemplatesResponse';
import { ListPredefinedTagsRequest } from './model/ListPredefinedTagsRequest';
import { ListPredefinedTagsResponse } from './model/ListPredefinedTagsResponse';
import { ListProjectTagsRequest } from './model/ListProjectTagsRequest';
import { ListProjectTagsResponse } from './model/ListProjectTagsResponse';
import { ListQuotaResult } from './model/ListQuotaResult';
import { ListRecycleInstancesRequest } from './model/ListRecycleInstancesRequest';
import { ListRecycleInstancesResponse } from './model/ListRecycleInstancesResponse';
import { ListRestorableInstancesRequest } from './model/ListRestorableInstancesRequest';
import { ListRestorableInstancesResponse } from './model/ListRestorableInstancesResponse';
import { ListRestoreTimesRequest } from './model/ListRestoreTimesRequest';
import { ListRestoreTimesResponse } from './model/ListRestoreTimesResponse';
import { ListStorageTypesRequest } from './model/ListStorageTypesRequest';
import { ListStorageTypesResponse } from './model/ListStorageTypesResponse';
import { ListTasksRequest } from './model/ListTasksRequest';
import { ListTasksResponse } from './model/ListTasksResponse';
import { ListVolume } from './model/ListVolume';
import { ModifyEpsQuotaRequest } from './model/ModifyEpsQuotaRequest';
import { ModifyEpsQuotaRequestBody } from './model/ModifyEpsQuotaRequestBody';
import { ModifyEpsQuotaResponse } from './model/ModifyEpsQuotaResponse';
import { NodeResult } from './model/NodeResult';
import { Nodes } from './model/Nodes';
import { OpenGaussBackupStrategy } from './model/OpenGaussBackupStrategy';
import { OpenGaussBackupStrategyForListResponse } from './model/OpenGaussBackupStrategyForListResponse';
import { OpenGaussBackupStrategyForResponse } from './model/OpenGaussBackupStrategyForResponse';
import { OpenGaussChargeInfo } from './model/OpenGaussChargeInfo';
import { OpenGaussChargeInfoListResponse } from './model/OpenGaussChargeInfoListResponse';
import { OpenGaussChargeInfoResponse } from './model/OpenGaussChargeInfoResponse';
import { OpenGaussCoordinators } from './model/OpenGaussCoordinators';
import { OpenGaussDatastore } from './model/OpenGaussDatastore';
import { OpenGaussDatastoreOption } from './model/OpenGaussDatastoreOption';
import { OpenGaussDatastoreResponse } from './model/OpenGaussDatastoreResponse';
import { OpenGaussDatastoreResult } from './model/OpenGaussDatastoreResult';
import { OpenGaussEnlargeVolume } from './model/OpenGaussEnlargeVolume';
import { OpenGaussErrorResponse } from './model/OpenGaussErrorResponse';
import { OpenGaussExpandCluster } from './model/OpenGaussExpandCluster';
import { OpenGaussHa } from './model/OpenGaussHa';
import { OpenGaussHaOption } from './model/OpenGaussHaOption';
import { OpenGaussHaResponse } from './model/OpenGaussHaResponse';
import { OpenGaussHaResult } from './model/OpenGaussHaResult';
import { OpenGaussInstanceActionRequest } from './model/OpenGaussInstanceActionRequest';
import { OpenGaussInstanceRequest } from './model/OpenGaussInstanceRequest';
import { OpenGaussInstanceRequestBody } from './model/OpenGaussInstanceRequestBody';
import { OpenGaussInstanceResponse } from './model/OpenGaussInstanceResponse';
import { OpenGaussInstanceResult } from './model/OpenGaussInstanceResult';
import { OpenGaussModifyInstanceConfigurationRequest } from './model/OpenGaussModifyInstanceConfigurationRequest';
import { OpenGaussResizeRequest } from './model/OpenGaussResizeRequest';
import { OpenGaussShard } from './model/OpenGaussShard';
import { OpenGaussVolume } from './model/OpenGaussVolume';
import { OpenGaussVolumeResponse } from './model/OpenGaussVolumeResponse';
import { OpenGaussVolumeResult } from './model/OpenGaussVolumeResult';
import { OpengaussRestoreInstanceRequest } from './model/OpengaussRestoreInstanceRequest';
import { ParaErrorResponse } from './model/ParaErrorResponse';
import { ParaErrorResponseBody } from './model/ParaErrorResponseBody';
import { ParaGroupParameterResult } from './model/ParaGroupParameterResult';
import { ParamGroupCopyRequestBody } from './model/ParamGroupCopyRequestBody';
import { ParamGroupDiffRequestBody } from './model/ParamGroupDiffRequestBody';
import { ProjectQuotasResult } from './model/ProjectQuotasResult';
import { PwdResetRequest } from './model/PwdResetRequest';
import { RecycleInstancesDetailResult } from './model/RecycleInstancesDetailResult';
import { RecyclePolicy } from './model/RecyclePolicy';
import { RecyclePolicyRequestBody } from './model/RecyclePolicyRequestBody';
import { ResetConfigurationRequest } from './model/ResetConfigurationRequest';
import { ResetConfigurationResponse } from './model/ResetConfigurationResponse';
import { ResetPwdRequest } from './model/ResetPwdRequest';
import { ResetPwdResponse } from './model/ResetPwdResponse';
import { ResizeInstanceFlavorRequest } from './model/ResizeInstanceFlavorRequest';
import { ResizeInstanceFlavorResponse } from './model/ResizeInstanceFlavorResponse';
import { ResourceErrorResponse } from './model/ResourceErrorResponse';
import { ResourceResult } from './model/ResourceResult';
import { RestartInstanceRequest } from './model/RestartInstanceRequest';
import { RestartInstanceResponse } from './model/RestartInstanceResponse';
import { RestorePoint } from './model/RestorePoint';
import { RunInstanceActionRequest } from './model/RunInstanceActionRequest';
import { RunInstanceActionResponse } from './model/RunInstanceActionResponse';
import { SetBackupPolicyRequest } from './model/SetBackupPolicyRequest';
import { SetBackupPolicyRequestBody } from './model/SetBackupPolicyRequestBody';
import { SetBackupPolicyResponse } from './model/SetBackupPolicyResponse';
import { SetDbUserPwdRequest } from './model/SetDbUserPwdRequest';
import { SetDbUserPwdResponse } from './model/SetDbUserPwdResponse';
import { SetRecyclePolicyRequest } from './model/SetRecyclePolicyRequest';
import { SetRecyclePolicyResponse } from './model/SetRecyclePolicyResponse';
import { Shards } from './model/Shards';
import { ShowBackupPolicy } from './model/ShowBackupPolicy';
import { ShowBackupPolicyRequest } from './model/ShowBackupPolicyRequest';
import { ShowBackupPolicyResponse } from './model/ShowBackupPolicyResponse';
import { ShowBalanceStatusRequest } from './model/ShowBalanceStatusRequest';
import { ShowBalanceStatusResponse } from './model/ShowBalanceStatusResponse';
import { ShowConfigurationDetailRequest } from './model/ShowConfigurationDetailRequest';
import { ShowConfigurationDetailResponse } from './model/ShowConfigurationDetailResponse';
import { ShowDeploymentFormRequest } from './model/ShowDeploymentFormRequest';
import { ShowDeploymentFormResponse } from './model/ShowDeploymentFormResponse';
import { ShowInstanceConfigurationRequest } from './model/ShowInstanceConfigurationRequest';
import { ShowInstanceConfigurationResponse } from './model/ShowInstanceConfigurationResponse';
import { ShowInstanceDiskRequest } from './model/ShowInstanceDiskRequest';
import { ShowInstanceDiskResponse } from './model/ShowInstanceDiskResponse';
import { ShowInstanceParamGroupRequest } from './model/ShowInstanceParamGroupRequest';
import { ShowInstanceParamGroupResponse } from './model/ShowInstanceParamGroupResponse';
import { ShowInstanceSnapshotRequest } from './model/ShowInstanceSnapshotRequest';
import { ShowInstanceSnapshotResponse } from './model/ShowInstanceSnapshotResponse';
import { ShowJobDetailRequest } from './model/ShowJobDetailRequest';
import { ShowJobDetailResponse } from './model/ShowJobDetailResponse';
import { ShowProjectQuotasRequest } from './model/ShowProjectQuotasRequest';
import { ShowProjectQuotasResponse } from './model/ShowProjectQuotasResponse';
import { ShowRecyclePolicyRequest } from './model/ShowRecyclePolicyRequest';
import { ShowRecyclePolicyResponse } from './model/ShowRecyclePolicyResponse';
import { ShowSslCertDownloadLinkRequest } from './model/ShowSslCertDownloadLinkRequest';
import { ShowSslCertDownloadLinkResponse } from './model/ShowSslCertDownloadLinkResponse';
import { Storage } from './model/Storage';
import { SwitchConfigurationRequest } from './model/SwitchConfigurationRequest';
import { SwitchConfigurationResponse } from './model/SwitchConfigurationResponse';
import { SwitchShardRequest } from './model/SwitchShardRequest';
import { SwitchShardRequestBody } from './model/SwitchShardRequestBody';
import { SwitchShardResponse } from './model/SwitchShardResponse';
import { TagResult } from './model/TagResult';
import { TagsOption } from './model/TagsOption';
import { TagsResult } from './model/TagsResult';
import { TaskDetailResult } from './model/TaskDetailResult';
import { UpdateInstanceConfigurationRequest } from './model/UpdateInstanceConfigurationRequest';
import { UpdateInstanceConfigurationResponse } from './model/UpdateInstanceConfigurationResponse';
import { UpdateInstanceNameRequest } from './model/UpdateInstanceNameRequest';
import { UpdateInstanceNameResponse } from './model/UpdateInstanceNameResponse';
import { UpdateNameRequestBody } from './model/UpdateNameRequestBody';
import { ValidateParaGroupNameRequest } from './model/ValidateParaGroupNameRequest';
import { ValidateParaGroupNameResponse } from './model/ValidateParaGroupNameResponse';
import { ValidateWeakPasswordRequest } from './model/ValidateWeakPasswordRequest';
import { ValidateWeakPasswordResponse } from './model/ValidateWeakPasswordResponse';
import { WeakPasswordRequestBody } from './model/WeakPasswordRequestBody';

export class GaussDBforopenGaussClient {
    public static newBuilder(): ClientBuilder<GaussDBforopenGaussClient> {
            return new ClientBuilder<GaussDBforopenGaussClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 对指定实例添加用户标签信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加实例标签。
     * @param {string} instanceId 实例ID。
     * @param {AddTagsRequestBody} addTagsRequestBody 请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addInstanceTags(addInstanceTagsRequest?: AddInstanceTagsRequest): Promise<AddInstanceTagsResponse> {
        const options = ParamCreater().addInstanceTags(addInstanceTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在指定实例的数据库中, 设置帐号的权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 授权数据库帐号
     * @param {string} instanceId 实例ID。
     * @param {GaussDBforOpenGaussGrantRequest} grantRequest 请求体。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public allowDbPrivileges(allowDbPrivilegesRequest?: AllowDbPrivilegesRequest): Promise<AllowDbPrivilegesResponse> {
        const options = ParamCreater().allowDbPrivileges(allowDbPrivilegesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 实例下的节点绑定弹性公网IP/解绑弹性公网IP
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 绑定/解绑弹性公网IP
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {string} nodeId 节点ID
     * @param {BindEIPRequestBody} bindEIPRequestBody 请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public attachEip(attachEipRequest?: AttachEipRequest): Promise<AttachEipResponse> {
        const options = ParamCreater().attachEip(attachEipRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 复制参数模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 复制参数模板
     * @param {string} configId 被复制的参数模板ID。
     * @param {ParamGroupCopyRequestBody} paramGroupCopyRequestBody 复制参数模板请求。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public copyConfiguration(copyConfigurationRequest?: CopyConfigurationRequest): Promise<CopyConfigurationResponse> {
        const options = ParamCreater().copyConfiguration(copyConfigurationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建参数模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建参数模板
     * @param {CreateConfigurationTemplateRequestBody} createConfigurationTemplateRequestbody 请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。默认值：en-us。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createConfigurationTemplate(createConfigurationTemplateRequest?: CreateConfigurationTemplateRequest): Promise<CreateConfigurationTemplateResponse> {
        const options = ParamCreater().createConfigurationTemplate(createConfigurationTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在指定实例中创建数据库。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建数据库
     * @param {string} instanceId 实例ID。
     * @param {GaussDBforOpenDatabaseForCreation} createDatabaseRequest 请求体。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDatabase(createDatabaseRequest?: CreateDatabaseRequest): Promise<CreateDatabaseResponse> {
        const options = ParamCreater().createDatabase(createDatabaseRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在指定实例的数据库中, 创建数据库schema。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建数据库SCHEMA
     * @param {string} instanceId 实例ID。
     * @param {GaussDBforOpenGaussDatabaseSchemaReq} dbSchemaReq 请求体。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDatabaseSchemas(createDatabaseSchemasRequest?: CreateDatabaseSchemasRequest): Promise<CreateDatabaseSchemasResponse> {
        const options = ParamCreater().createDatabaseSchemas(createDatabaseSchemasRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建数据库实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建数据库实例
     * @param {OpenGaussInstanceRequestBody} createDbInstanceRequestBody 请求体
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDbInstance(createDbInstanceRequest?: CreateDbInstanceRequest): Promise<CreateDbInstanceResponse> {
        const options = ParamCreater().createDbInstance(createDbInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在指定实例中创建数据库用户。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建数据库用户
     * @param {string} instanceId 实例ID。
     * @param {GaussDBforOpenGaussUserForCreation} createDbUserRequest 请求体。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDbUser(createDbUserRequest?: CreateDbUserRequest): Promise<CreateDbUserResponse> {
        const options = ParamCreater().createDbUser(createDbUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建数据库企业版和集中式实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建数据库实例
     * @param {OpenGaussInstanceRequest} createInstanceRequest 请求体
     * @param {string} [xLanguage] 语言
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
     * 创建手动备份。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建手动备份
     * @param {CreateManualBackupRequestBody} createManualBackupRequestBody 请求体。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createManualBackup(createManualBackupRequest?: CreateManualBackupRequest): Promise<CreateManualBackupResponse> {
        const options = ParamCreater().createManualBackup(createManualBackupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据备份恢复新实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 恢复到新实例
     * @param {OpengaussRestoreInstanceRequest} createInstanceRequestBody 请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRestoreInstance(createRestoreInstanceRequest?: CreateRestoreInstanceRequest): Promise<CreateRestoreInstanceResponse> {
        const options = ParamCreater().createRestoreInstance(createRestoreInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除参数模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除参数模板
     * @param {string} configId 参数配置模板ID。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteConfiguration(deleteConfigurationRequest?: DeleteConfigurationRequest): Promise<DeleteConfigurationResponse> {
        const options = ParamCreater().deleteConfiguration(deleteConfigurationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除数据库实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除实例
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteInstance(deleteInstanceRequest?: DeleteInstanceRequest): Promise<DeleteInstanceResponse> {
        const options = ParamCreater().deleteInstance(deleteInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除任务记录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除任务记录
     * @param {string} jobId 任务id。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteJob(deleteJobRequest?: DeleteJobRequest): Promise<DeleteJobResponse> {
        const options = ParamCreater().deleteJob(deleteJobRequest);

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
     * @param {string} backupId 备份ID。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteManualBackup(deleteManualBackupRequest?: DeleteManualBackupRequest): Promise<DeleteManualBackupResponse> {
        const options = ParamCreater().deleteManualBackup(deleteManualBackupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取备份下载链接。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取备份下载链接
     * @param {string} backupId 备份ID。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public downloadBackup(downloadBackupRequest?: DownloadBackupRequest): Promise<DownloadBackupResponse> {
        const options = ParamCreater().downloadBackup(downloadBackupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询可应用当前参数组模板的实例列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可应用实例列表
     * @param {string} configId 参数配置模板ID。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApplicableInstances(listApplicableInstancesRequest?: ListApplicableInstancesRequest): Promise<ListApplicableInstancesResponse> {
        const options = ParamCreater().listApplicableInstances(listApplicableInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询参数模板的应用记录，以实例级别为维度。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询参数模板的应用记录
     * @param {string} configId 参数配置模板ID。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。默认值：en-us。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAppliedHistories(listAppliedHistoriesRequest?: ListAppliedHistoriesRequest): Promise<ListAppliedHistoriesResponse> {
        const options = ParamCreater().listAppliedHistories(listAppliedHistoriesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例可变更规格列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例可变更规格
     * @param {string} instanceId 实例ID。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAvailableFlavors(listAvailableFlavorsRequest?: ListAvailableFlavorsRequest): Promise<ListAvailableFlavorsResponse> {
        const options = ParamCreater().listAvailableFlavors(listAvailableFlavorsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取备份列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询备份列表
     * @param {string} [xLanguage] 语言
     * @param {string} [instanceId] 实例ID。
     * @param {string} [backupId] 备份ID。
     * @param {'auto' | 'manual'} [backupType] 备份类型，取值：   \&quot;auto\&quot;：自动全量备份   \&quot;manual\&quot;：手动全量备份
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {string} [beginTime] 查询开始时间，格式为“yyyy-mm-ddThh:mm:ssZ”。其中，T指某个时间的开始；Z指时区偏移量，例如北京时间偏移显示为+0800。与end_time必须同时使用。
     * @param {string} [endTime] 查询结束时间，格式为“yyyy-mm-ddThh:mm:ssZ”，且大于查询开始时间。其中，T指某个时间的开始；Z指时区偏移量，例如北京时间偏移显示为+0800。与begin_time必须同时使用。
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
     * 查询实例已绑定EIP列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例已绑定EIP列表
     * @param {string} instanceId 实例ID。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为50，不能为负数，最小值为1，最大值为50。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBindedEips(listBindedEipsRequest?: ListBindedEipsRequest): Promise<ListBindedEipsResponse> {
        const options = ParamCreater().listBindedEips(listBindedEipsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例的组件列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例的组件列表
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100
     * @param {'ALL' | 'CN' | 'DN' | 'CM' | 'GTM' | 'ETCD'} [componentType] 组件类型，过滤拿到需要的组件类型的组件信息，默认为ALL，传参数会查询对应组件信息。 枚举值：   \&quot;ALL\&quot;: 查询所有组件类型。   \&quot;CN\&quot;: 查询CN组件类型。   \&quot;DN\&quot;: 查询DN组件类型。   \&quot;CM\&quot;: 查询CMS组件类型。   \&quot;GTM\&quot;: 查询GTM组件类型。   \&quot;ETCD\&quot;: 查询ETCD组件类型。
     * @param {string} [availabilityZoneId] 主组件所在可用区编号，筛选符合条件的组件，默认为ALL，查询实例所有可用区上的节点的组件信息。 当调用接口传入可用区编号时：   相对于DN组件，会查询出的DN分片中的主组件在该可用区上的这个分片的所有副本的组件信息。   相对于CN组件，CN组件没有主备关系，会查询出该可用区上的CN组件信息。   相对于其他组件，会查询该可用区上有没有某个组件类型的主组件，有则会返回该组件类型的所有组件信息，没有则不返回该组件类型的信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listComponentInfos(listComponentInfosRequest?: ListComponentInfosRequest): Promise<ListComponentInfosResponse> {
        const options = ParamCreater().listComponentInfos(listComponentInfosRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取参数模板列表，包括所有数据库的默认参数模板和用户创建的参数模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取参数模板列表
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
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
     * 获取两个参数配置模板的差异列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 比较两个参数组模板之间的差异
     * @param {ParamGroupDiffRequestBody} paramGroupDiffRequest 参数组模板比较请求。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listConfigurationsDiff(listConfigurationsDiffRequest?: ListConfigurationsDiffRequest): Promise<ListConfigurationsDiffResponse> {
        const options = ParamCreater().listConfigurationsDiff(listConfigurationsDiffRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定实例的数据库SCHEMA列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库SCHEMA列表
     * @param {string} instanceId 实例ID。
     * @param {string} dbName 数据库名称。
     * @param {string} [xLanguage] 语言
     * @param {number} [offset] 偏移量表示从此偏移量开始查询, offset大于等于0。
     * @param {number} [limit] 每页显示的条目数量,取值范围[1, 100]。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDatabaseSchemas(listDatabaseSchemasRequest?: ListDatabaseSchemasRequest): Promise<ListDatabaseSchemasResponse> {
        const options = ParamCreater().listDatabaseSchemas(listDatabaseSchemasRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定实例中的数据库列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库列表
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言
     * @param {number} [offset] 偏移量表示从此偏移量开始查询, offset大于等于0，默认0。
     * @param {number} [limit] 每页显示的条目数量,取值范围[1, 100]，默认10。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDatabases(listDatabasesRequest?: ListDatabasesRequest): Promise<ListDatabasesResponse> {
        const options = ParamCreater().listDatabases(listDatabasesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定数据库引擎对应的版本信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库引擎的版本
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDatastores(listDatastoresRequest?: ListDatastoresRequest): Promise<ListDatastoresResponse> {
        const options = ParamCreater().listDatastores(listDatastoresRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取备份列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询备份列表
     * @param {string} [xLanguage] 语言
     * @param {string} [instanceId] 实例ID。
     * @param {string} [backupId] 备份ID。
     * @param {'auto' | 'manual'} [backupType] 备份类型，取值：   \&quot;auto\&quot;：自动全量备份   \&quot;manual\&quot;：手动全量备份
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {string} [beginTime] 查询开始时间，格式为“yyyy-mm-ddThh:mm:ssZ”。其中，T指某个时间的开始；Z指时区偏移量，例如北京时间偏移显示为+0800。与end_time必须同时使用。
     * @param {string} [endTime] 查询结束时间，格式为“yyyy-mm-ddThh:mm:ssZ”，且大于查询开始时间。其中，T指某个时间的开始；Z指时区偏移量，例如北京时间偏移显示为+0800。与begin_time必须同时使用。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDbBackups(listDbBackupsRequest?: ListDbBackupsRequest): Promise<ListDbBackupsResponse> {
        const options = ParamCreater().listDbBackups(listDbBackupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据库的规格信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库规格
     * @param {string} [xLanguage] 语言
     * @param {string} [version] 数据库版本号。
     * @param {string} [specCode] 规格编码
     * @param {string} [haMode] 实例类型  集中式centralization_standard  分布式enterprise
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDbFlavors(listDbFlavorsRequest?: ListDbFlavorsRequest): Promise<ListDbFlavorsResponse> {
        const options = ParamCreater().listDbFlavors(listDbFlavorsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在指定实例中查询数据库用户列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库用户列表
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言
     * @param {number} [offset] 偏移量表示从此偏移量开始查询, offset大于等于0。
     * @param {number} [limit] 每页显示的条目数量,取值范围[1, 100]。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDbUsers(listDbUsersRequest?: ListDbUsersRequest): Promise<ListDbUsersResponse> {
        const options = ParamCreater().listDbUsers(listDbUsersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询企业项目配额组信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询企业项目配额组
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言, 默认值为en-us。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {string} [enterpriseProjectId] 企业项目ID。 - 对于未开通企业多项目服务的用户，不传该参数。 - 对于已开通企业多项目服务的用户，不传该参数时，表示为default企业项目。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEpsQuotas(listEpsQuotasRequest?: ListEpsQuotasRequest): Promise<ListEpsQuotasResponse> {
        const options = ParamCreater().listEpsQuotas(listEpsQuotasRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据库的规格信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库规格
     * @param {string} [xLanguage] 语言
     * @param {string} [version] 数据库版本号。
     * @param {string} [specCode] 规格编码
     * @param {string} [haMode] 实例类型  集中式centralization_standard  分布式enterprise
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
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
     * 查询引擎列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询引擎列表
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGaussDbDatastores(listGaussDbDatastoresRequest?: ListGaussDbDatastoresRequest): Promise<ListGaussDbDatastoresResponse> {
        const options = ParamCreater().listGaussDbDatastores(listGaussDbDatastoresRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询参数模板的修改历史记录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询参数模板的修改历史
     * @param {string} configId 参数模板ID。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言, 默认值为en-us。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHistoryOperations(listHistoryOperationsRequest?: ListHistoryOperationsRequest): Promise<ListHistoryOperationsResponse> {
        const options = ParamCreater().listHistoryOperations(listHistoryOperationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定实例的用户标签信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例标签
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言。
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
     * 查询数据库实例列表/查询实例详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库实例列表/查询实例详情
     * @param {string} [xLanguage] 语言
     * @param {string} [id] 实例ID。  “\\*”为系统保留字符，如果id是以“\\*”起始，表示按照\\*后面的值模糊匹配，否则，按照id精确匹配查询。不能只传入“\\*”。
     * @param {string} [name] 实例名称。  “\\*”为系统保留字符，如果name是以“\\*”起始，表示按照\\*后面的值模糊匹配，否则，按照name精确匹配查询。不能只传入“\\*”。
     * @param {'Enterprise' | 'Ha'} [type] 按照实例类型查询。目前仅支持取值“Enterprise”（区分大小写），对应分布式实例（企业版）。当前支持取值\&quot;Ha\&quot;（区分大小写），对应主备式实例。
     * @param {'GaussDB(for openGauss)' | 'GaussDB'} [datastoreType] 数据库类型，区分大小写。  - GaussDB
     * @param {string} [vpcId] 虚拟私有云ID。  方法1：登录虚拟私有云服务的控制台界面，在虚拟私有云的详情页面查找VPC ID。 方法2：通过虚拟私有云服务的API接口查询，具体操作可参考[查询VPC列表](https://support.huaweicloud.com/api-vpc/vpc_api01_0003.html)。
     * @param {string} [subnetId] 子网的网络ID信息。  - 方法1：登录虚拟私有云服务的控制台界面，单击VPC下的子网，进入子网详情页面，查找网络ID。 - 方法2：通过虚拟私有云服务的API接口查询，具体操作可参考[查询子网列表](https://support.huaweicloud.com/api-vpc/vpc_subnet01_0003.html)。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100
     * @param {Array<string>} [tags] 根据实例标签键值对进行查询。  {key}表示标签键，不可以为空或重复。最大长度127个unicode字符。key不能为空或者空字符串，不能为空格，使用之前先trim前后半角空格。不能包含+/?#&amp;&#x3D;,%特殊字符。  {value}表示标签值，可以为空。最大长度255个unicode字符，使用之前先trim 前后半角空格。不能包含+/?#&amp;&#x3D;,%特殊字符。  如果value为空，则表示any_value（查询任意value）。  如果同时使用多个标签键值对进行查询，中间使用逗号分隔开，最多包含10组。
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
     * 查询数据库实例列表/查询实例详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库实例列表/查询实例详情
     * @param {string} [xLanguage] 语言
     * @param {string} [id] 实例ID。  “\\*”为系统保留字符，如果id是以“\\*”起始，表示按照\\*后面的值模糊匹配，否则，按照id精确匹配查询。不能只传入“\\*”。
     * @param {string} [name] 实例名称。  “\\*”为系统保留字符，如果name是以“\\*”起始，表示按照\\*后面的值模糊匹配，否则，按照name精确匹配查询。不能只传入“\\*”。
     * @param {'Enterprise' | 'Ha'} [type] 按照实例类型查询。目前仅支持取值“Enterprise”（区分大小写），对应分布式实例（企业版）。当前支持取值\&quot;Ha\&quot;（区分大小写），对应主备式实例。
     * @param {'GaussDB'} [datastoreType] 数据库类型，区分大小写。  - GaussDB
     * @param {string} [vpcId] 虚拟私有云ID。  方法1：登录虚拟私有云服务的控制台界面，在虚拟私有云的详情页面查找VPC ID。 方法2：通过虚拟私有云服务的API接口查询，具体操作可参考[查询VPC列表](https://support.huaweicloud.com/api-vpc/vpc_api01_0003.html)。
     * @param {string} [subnetId] 子网的网络ID信息。  - 方法1：登录虚拟私有云服务的控制台界面，单击VPC下的子网，进入子网详情页面，查找网络ID。 - 方法2：通过虚拟私有云服务的API接口查询，具体操作可参考[查询子网列表](https://support.huaweicloud.com/api-vpc/vpc_subnet01_0003.html)。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100
     * @param {Array<string>} [tags] 根据实例标签键值对进行查询。  {key}表示标签键，不可以为空或重复。最大长度127个unicode字符。key不能为空或者空字符串，不能为空格，使用之前先trim前后半角空格。不能包含+/?#&amp;&#x3D;,%特殊字符。  {value}表示标签值，可以为空。最大长度255个unicode字符，使用之前先trim 前后半角空格。不能包含+/?#&amp;&#x3D;,%特殊字符。  如果value为空，则表示any_value（查询任意value）。  如果同时使用多个标签键值对进行查询，中间使用逗号分隔开，最多包含10组。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstancesDetails(listInstancesDetailsRequest?: ListInstancesDetailsRequest): Promise<ListInstancesDetailsResponse> {
        const options = ParamCreater().listInstancesDetails(listInstancesDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取参数模板列表，包括所有数据库的默认参数模板和用户创建的参数模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取参数模板列表
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listParamGroupTemplates(listParamGroupTemplatesRequest?: ListParamGroupTemplatesRequest): Promise<ListParamGroupTemplatesResponse> {
        const options = ParamCreater().listParamGroupTemplates(listParamGroupTemplatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询预预定义标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询预定义标签
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPredefinedTags(listPredefinedTagsRequest?: ListPredefinedTagsRequest): Promise<ListPredefinedTagsResponse> {
        const options = ParamCreater().listPredefinedTags(listPredefinedTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询项目下所有用户标签信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目标签
     * @param {string} [xLanguage] 语言
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
     * 查询回收站所有引擎实例列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询回收站所有引擎实例列表。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。默认值：en-us。
     * @param {string} [instanceName] 实例名称。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为50，不能为负数，最小值为1，最大值为50。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRecycleInstances(listRecycleInstancesRequest?: ListRecycleInstancesRequest): Promise<ListRecycleInstancesResponse> {
        const options = ParamCreater().listRecycleInstances(listRecycleInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询可用于备份恢复的实例列表，实例信息要符合备份条件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可用于备份恢复的实例列表
     * @param {string} sourceInstanceId 源实例id，需要恢复的实例ID。
     * @param {string} [xLanguage] 语言。
     * @param {string} [backupId] 实例备份信息ID，根据备份ID查询实例拓扑信息，过滤查询出来的实例，包含节点数，副本数等。参数为空时，根据restore_time查询。。
     * @param {string} [restoreTime] 恢复点，当备份ID为空时，通过此参数查询实例拓扑信息，过滤实例列表。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRestorableInstances(listRestorableInstancesRequest?: ListRestorableInstancesRequest): Promise<ListRestorableInstancesResponse> {
        const options = ParamCreater().listRestorableInstances(listRestorableInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询可恢复时间段。
     * 如果您备份策略中的保存天数设置较长，建议您传入查询日期“date”。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可恢复时间段
     * @param {string} instanceId 实例ID。
     * @param {string} date 所需查询的日期，为yyyy-mm-dd字符串格式，时区为UTC。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRestoreTimes(listRestoreTimesRequest?: ListRestoreTimesRequest): Promise<ListRestoreTimesResponse> {
        const options = ParamCreater().listRestoreTimes(listRestoreTimesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定数据库引擎对应的磁盘类型。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库磁盘类型
     * @param {string} version 数据库版本号。
     * @param {string} [xLanguage] 语言
     * @param {'enterprise' | 'centralization_standard'} [haMode] 实例类型： enterprise(企业版)， centralization_standard(主备版)，不区分大小写。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listStorageTypes(listStorageTypesRequest?: ListStorageTypesRequest): Promise<ListStorageTypesResponse> {
        const options = ParamCreater().listStorageTypes(listStorageTypesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取任务中心的任务列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询任务列表
     * @param {string} [xLanguage] 语言。
     * @param {'Running' | 'Completed' | 'Failed'} [status] 任务状态。
     * @param {'CreateGaussDBV5Instance' | 'BackupSnapshotGaussDBV5InInstance' | 'CloneGaussDBV5NewInstance' | 'RestoreGaussDBV5InInstance' | 'RestoreGaussDBV5InInstanceToExistedInst' | 'DeleteGaussDBV5Instance' | 'EnlargeGaussDBV5Volume' | 'ResizeGaussDBV5Flavor' | 'GaussDBV5ExpandClusterCN' | 'GaussDBV5ExpandClusterDN'} [name] 任务名称。
     * @param {string} [startTime] 开始时间。
     * @param {string} [endTime] 结束时间。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTasks(listTasksRequest?: ListTasksRequest): Promise<ListTasksResponse> {
        const options = ParamCreater().listTasks(listTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改企业项目配额。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改企业项目配额
     * @param {ModifyEpsQuotaRequestBody} modifyEpsQuotaRequestbody 请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。默认值：en-us。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public modifyEpsQuota(modifyEpsQuotaRequest?: ModifyEpsQuotaRequest): Promise<ModifyEpsQuotaResponse> {
        const options = ParamCreater().modifyEpsQuota(modifyEpsQuotaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重置参数模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重置参数模板
     * @param {string} configId 需重置的参数模板ID。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resetConfiguration(resetConfigurationRequest?: ResetConfigurationRequest): Promise<ResetConfigurationResponse> {
        const options = ParamCreater().resetConfiguration(resetConfigurationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重置数据库密码。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重置数据库密码。
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {PwdResetRequest} pwdResetRequestBody 请求体。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resetPwd(resetPwdRequest?: ResetPwdRequest): Promise<ResetPwdResponse> {
        const options = ParamCreater().resetPwd(resetPwdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * GaussDB数据库实例规格变更
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary GaussDB数据库实例规格变更
     * @param {string} instanceId 实例ID。
     * @param {OpenGaussResizeRequest} createInstanceRequest 请求体
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resizeInstanceFlavor(resizeInstanceFlavorRequest?: ResizeInstanceFlavorRequest): Promise<ResizeInstanceFlavorResponse> {
        const options = ParamCreater().resizeInstanceFlavor(resizeInstanceFlavorRequest);

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
     * @param {string} instanceId 实例ID。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public restartInstance(restartInstanceRequest?: RestartInstanceRequest): Promise<RestartInstanceResponse> {
        const options = ParamCreater().restartInstance(restartInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * CN横向扩容/DN分片扩容/磁盘扩容
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary CN横向扩容/DN分片扩容/磁盘扩容
     * @param {string} instanceId 实例ID。
     * @param {OpenGaussInstanceActionRequest} instanceActionRequest 请求体
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runInstanceAction(runInstanceActionRequest?: RunInstanceActionRequest): Promise<RunInstanceActionResponse> {
        const options = ParamCreater().runInstanceAction(runInstanceActionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置自动备份策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置自动备份策略。
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {SetBackupPolicyRequestBody} setBackupPolicyRequestBody 请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。默认值：en-us。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setBackupPolicy(setBackupPolicyRequest?: SetBackupPolicyRequest): Promise<SetBackupPolicyResponse> {
        const options = ParamCreater().setBackupPolicy(setBackupPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重置指定数据库帐号的密码。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重置数据库帐号密码
     * @param {string} instanceId 实例ID。
     * @param {DbUserPwdRequest} dbUserPwdRequestBody 请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setDbUserPwd(setDbUserPwdRequest?: SetDbUserPwdRequest): Promise<SetDbUserPwdResponse> {
        const options = ParamCreater().setDbUserPwd(setDbUserPwdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置回收站策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置回收站策略
     * @param {RecyclePolicyRequestBody} recyclePolicyRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setRecyclePolicy(setRecyclePolicyRequest?: SetRecyclePolicyRequest): Promise<SetRecyclePolicyResponse> {
        const options = ParamCreater().setRecyclePolicy(setRecyclePolicyRequest);

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
     * @param {string} instanceId 实例ID。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。默认值：en-us。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBackupPolicy(showBackupPolicyRequest?: ShowBackupPolicyRequest): Promise<ShowBackupPolicyResponse> {
        const options = ParamCreater().showBackupPolicy(showBackupPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例是否发生过主备切换而导致主机负载不均衡。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例主备平衡状态
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBalanceStatus(showBalanceStatusRequest?: ShowBalanceStatusRequest): Promise<ShowBalanceStatusResponse> {
        const options = ParamCreater().showBalanceStatus(showBalanceStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据参数模板ID获取指定参数模板详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询参数模板详情
     * @param {string} configId 参数模板ID
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言,默认：en-us。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showConfigurationDetail(showConfigurationDetailRequest?: ShowConfigurationDetailRequest): Promise<ShowConfigurationDetailResponse> {
        const options = ParamCreater().showConfigurationDetail(showConfigurationDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据解决方案模板名称或实例ID查询副本数、分片数、节点数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询解决方案模板配置
     * @param {string} [xLanguage] 语言。
     * @param {'triset' | 'single'} [solution] 解决方案模板名称。
     * @param {string} [instanceId] 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDeploymentForm(showDeploymentFormRequest?: ShowDeploymentFormRequest): Promise<ShowDeploymentFormResponse> {
        const options = ParamCreater().showDeploymentForm(showDeploymentFormRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定实例的参数模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定实例的参数模板
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceConfiguration(showInstanceConfigurationRequest?: ShowInstanceConfigurationRequest): Promise<ShowInstanceConfigurationResponse> {
        const options = ParamCreater().showInstanceConfiguration(showInstanceConfigurationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定实例的存储使用空间和最大空间。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例存储空间使用信息
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceDisk(showInstanceDiskRequest?: ShowInstanceDiskRequest): Promise<ShowInstanceDiskResponse> {
        const options = ParamCreater().showInstanceDisk(showInstanceDiskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定实例的参数模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定实例的参数模板
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceParamGroup(showInstanceParamGroupRequest?: ShowInstanceParamGroupRequest): Promise<ShowInstanceParamGroupResponse> {
        const options = ParamCreater().showInstanceParamGroup(showInstanceParamGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据时间点或者备份文件查询原实例信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据时间点或者备份文件查询原实例信息
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。默认值：en-us。
     * @param {string} [instanceId] 原实例ID。  (instance_id 、restore_time为一组)
     * @param {string} [restoreTime] UNIX时间戳格式，单位是毫秒，时区是UTC，某时间点实例的信息。  (instance_id 、restore_time为一组)
     * @param {string} [backupId] 备份ID。  (backup_id为一组)  备份ID不为空时，可以不需要实例ID和时间戳。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceSnapshot(showInstanceSnapshotRequest?: ShowInstanceSnapshotRequest): Promise<ShowInstanceSnapshotResponse> {
        const options = ParamCreater().showInstanceSnapshot(showInstanceSnapshotRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定ID的任务信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定ID的任务信息。
     * @param {string} id 任务ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showJobDetail(showJobDetailRequest?: ShowJobDetailRequest): Promise<ShowJobDetailResponse> {
        const options = ParamCreater().showJobDetail(showJobDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户的实例配额
     * @param {string} [xLanguage] 语言
     * @param {'instance'} [type] \&#39;功能说明：根据type过滤查询指定类型的配额\&#39; 取值范围：instance
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showProjectQuotas(showProjectQuotasRequest?: ShowProjectQuotasRequest): Promise<ShowProjectQuotasResponse> {
        const options = ParamCreater().showProjectQuotas(showProjectQuotasRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看回收站的回收策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看回收站策略
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。默认值：en-us。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRecyclePolicy(showRecyclePolicyRequest?: ShowRecyclePolicyRequest): Promise<ShowRecyclePolicyResponse> {
        const options = ParamCreater().showRecyclePolicy(showRecyclePolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例SSL证书下载地址。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例SSL证书下载地址
     * @param {string} instanceId 实例ID。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSslCertDownloadLink(showSslCertDownloadLinkRequest?: ShowSslCertDownloadLinkRequest): Promise<ShowSslCertDownloadLinkResponse> {
        const options = ParamCreater().showSslCertDownloadLink(showSslCertDownloadLinkRequest);

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
     * @param {string} configId 参数模板ID。
     * @param {ApplyConfigurationRequestBody} applyConfigurationRequestBody 请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public switchConfiguration(switchConfigurationRequest?: SwitchConfigurationRequest): Promise<SwitchConfigurationResponse> {
        const options = ParamCreater().switchConfiguration(switchConfigurationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 支持用户对单个或多个DN分片做主备切换，同一分组内只能指定一个新的备节点进行升主操作。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 分片节点主备切换。
     * @param {string} instanceId 实例ID。
     * @param {SwitchShardRequestBody} switchShardRequestBody 请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public switchShard(switchShardRequest?: SwitchShardRequest): Promise<SwitchShardResponse> {
        const options = ParamCreater().switchShard(switchShardRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改指定实例的参数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改指定实例的参数
     * @param {string} instanceId 实例ID。
     * @param {OpenGaussModifyInstanceConfigurationRequest} modifyInstanceConfigurationRequest 请求体
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInstanceConfiguration(updateInstanceConfigurationRequest?: UpdateInstanceConfigurationRequest): Promise<UpdateInstanceConfigurationResponse> {
        const options = ParamCreater().updateInstanceConfiguration(updateInstanceConfigurationRequest);

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
     * @param {UpdateNameRequestBody} updateNameRequestBody 请求体。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInstanceName(updateInstanceNameRequest?: UpdateInstanceNameRequest): Promise<UpdateInstanceNameResponse> {
        const options = ParamCreater().updateInstanceName(updateInstanceNameRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 校验参数组名称是否存在。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 校验参数组名称是否存在
     * @param {string} name 参数组名称。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public validateParaGroupName(validateParaGroupNameRequest?: ValidateParaGroupNameRequest): Promise<ValidateParaGroupNameResponse> {
        const options = ParamCreater().validateParaGroupName(validateParaGroupNameRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 校验数据库root用户密码的安全性。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 弱密码校验
     * @param {WeakPasswordRequestBody} weakPasswordRequestBody 弱密码请求参数。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。默认值：en-us。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public validateWeakPassword(validateWeakPasswordRequest?: ValidateWeakPasswordRequest): Promise<ValidateWeakPasswordResponse> {
        const options = ParamCreater().validateWeakPassword(validateWeakPasswordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 对指定实例添加用户标签信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addInstanceTags(addInstanceTagsRequest?: AddInstanceTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/tags",
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

            if (addInstanceTagsRequest !== null && addInstanceTagsRequest !== undefined) {
                if (addInstanceTagsRequest instanceof AddInstanceTagsRequest) {
                    instanceId = addInstanceTagsRequest.instanceId;
                    body = addInstanceTagsRequest.body
                    xLanguage = addInstanceTagsRequest.xLanguage;
                } else {
                    instanceId = addInstanceTagsRequest['instance_id'];
                    body = addInstanceTagsRequest['body'];
                    xLanguage = addInstanceTagsRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling addInstanceTags.');
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
         * 在指定实例的数据库中, 设置帐号的权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        allowDbPrivileges(allowDbPrivilegesRequest?: AllowDbPrivilegesRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/db-privilege",
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

            if (allowDbPrivilegesRequest !== null && allowDbPrivilegesRequest !== undefined) {
                if (allowDbPrivilegesRequest instanceof AllowDbPrivilegesRequest) {
                    instanceId = allowDbPrivilegesRequest.instanceId;
                    body = allowDbPrivilegesRequest.body
                    xLanguage = allowDbPrivilegesRequest.xLanguage;
                } else {
                    instanceId = allowDbPrivilegesRequest['instance_id'];
                    body = allowDbPrivilegesRequest['body'];
                    xLanguage = allowDbPrivilegesRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling allowDbPrivileges.');
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
         * 实例下的节点绑定弹性公网IP/解绑弹性公网IP
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        attachEip(attachEipRequest?: AttachEipRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/nodes/{node_id}/public-ip",
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

            if (attachEipRequest !== null && attachEipRequest !== undefined) {
                if (attachEipRequest instanceof AttachEipRequest) {
                    instanceId = attachEipRequest.instanceId;
                    nodeId = attachEipRequest.nodeId;
                    body = attachEipRequest.body
                    xLanguage = attachEipRequest.xLanguage;
                } else {
                    instanceId = attachEipRequest['instance_id'];
                    nodeId = attachEipRequest['node_id'];
                    body = attachEipRequest['body'];
                    xLanguage = attachEipRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling attachEip.');
            }
            if (nodeId === null || nodeId === undefined) {
            throw new RequiredError('nodeId','Required parameter nodeId was null or undefined when calling attachEip.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
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
         * 复制参数模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        copyConfiguration(copyConfigurationRequest?: CopyConfigurationRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/configurations/{config_id}/copy",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let configId;
            
            let xLanguage;

            if (copyConfigurationRequest !== null && copyConfigurationRequest !== undefined) {
                if (copyConfigurationRequest instanceof CopyConfigurationRequest) {
                    configId = copyConfigurationRequest.configId;
                    body = copyConfigurationRequest.body
                    xLanguage = copyConfigurationRequest.xLanguage;
                } else {
                    configId = copyConfigurationRequest['config_id'];
                    body = copyConfigurationRequest['body'];
                    xLanguage = copyConfigurationRequest['X-Language'];
                }
            }

        
            if (configId === null || configId === undefined) {
            throw new RequiredError('configId','Required parameter configId was null or undefined when calling copyConfiguration.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'config_id': configId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建参数模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createConfigurationTemplate(createConfigurationTemplateRequest?: CreateConfigurationTemplateRequest) {
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

            if (createConfigurationTemplateRequest !== null && createConfigurationTemplateRequest !== undefined) {
                if (createConfigurationTemplateRequest instanceof CreateConfigurationTemplateRequest) {
                    body = createConfigurationTemplateRequest.body
                    xLanguage = createConfigurationTemplateRequest.xLanguage;
                } else {
                    body = createConfigurationTemplateRequest['body'];
                    xLanguage = createConfigurationTemplateRequest['X-Language'];
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
         * 在指定实例中创建数据库。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDatabase(createDatabaseRequest?: CreateDatabaseRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/database",
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

            if (createDatabaseRequest !== null && createDatabaseRequest !== undefined) {
                if (createDatabaseRequest instanceof CreateDatabaseRequest) {
                    instanceId = createDatabaseRequest.instanceId;
                    body = createDatabaseRequest.body
                    xLanguage = createDatabaseRequest.xLanguage;
                } else {
                    instanceId = createDatabaseRequest['instance_id'];
                    body = createDatabaseRequest['body'];
                    xLanguage = createDatabaseRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createDatabase.');
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
         * 在指定实例的数据库中, 创建数据库schema。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDatabaseSchemas(createDatabaseSchemasRequest?: CreateDatabaseSchemasRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/schema",
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

            if (createDatabaseSchemasRequest !== null && createDatabaseSchemasRequest !== undefined) {
                if (createDatabaseSchemasRequest instanceof CreateDatabaseSchemasRequest) {
                    instanceId = createDatabaseSchemasRequest.instanceId;
                    body = createDatabaseSchemasRequest.body
                    xLanguage = createDatabaseSchemasRequest.xLanguage;
                } else {
                    instanceId = createDatabaseSchemasRequest['instance_id'];
                    body = createDatabaseSchemasRequest['body'];
                    xLanguage = createDatabaseSchemasRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createDatabaseSchemas.');
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
         * 创建数据库实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDbInstance(createDbInstanceRequest?: CreateDbInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v3.1/{project_id}/instances",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (createDbInstanceRequest !== null && createDbInstanceRequest !== undefined) {
                if (createDbInstanceRequest instanceof CreateDbInstanceRequest) {
                    body = createDbInstanceRequest.body
                    xLanguage = createDbInstanceRequest.xLanguage;
                } else {
                    body = createDbInstanceRequest['body'];
                    xLanguage = createDbInstanceRequest['X-Language'];
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
         * 在指定实例中创建数据库用户。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDbUser(createDbUserRequest?: CreateDbUserRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/db-user",
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

            if (createDbUserRequest !== null && createDbUserRequest !== undefined) {
                if (createDbUserRequest instanceof CreateDbUserRequest) {
                    instanceId = createDbUserRequest.instanceId;
                    body = createDbUserRequest.body
                    xLanguage = createDbUserRequest.xLanguage;
                } else {
                    instanceId = createDbUserRequest['instance_id'];
                    body = createDbUserRequest['body'];
                    xLanguage = createDbUserRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createDbUser.');
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
         * 创建数据库企业版和集中式实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createInstance(createInstanceRequest?: CreateInstanceRequest) {
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

            if (createInstanceRequest !== null && createInstanceRequest !== undefined) {
                if (createInstanceRequest instanceof CreateInstanceRequest) {
                    body = createInstanceRequest.body
                    xLanguage = createInstanceRequest.xLanguage;
                } else {
                    body = createInstanceRequest['body'];
                    xLanguage = createInstanceRequest['X-Language'];
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
         * 创建手动备份。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createManualBackup(createManualBackupRequest?: CreateManualBackupRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/backups",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (createManualBackupRequest !== null && createManualBackupRequest !== undefined) {
                if (createManualBackupRequest instanceof CreateManualBackupRequest) {
                    body = createManualBackupRequest.body
                    xLanguage = createManualBackupRequest.xLanguage;
                } else {
                    body = createManualBackupRequest['body'];
                    xLanguage = createManualBackupRequest['X-Language'];
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
         * 根据备份恢复新实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createRestoreInstance(createRestoreInstanceRequest?: CreateRestoreInstanceRequest) {
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

            if (createRestoreInstanceRequest !== null && createRestoreInstanceRequest !== undefined) {
                if (createRestoreInstanceRequest instanceof CreateRestoreInstanceRequest) {
                    body = createRestoreInstanceRequest.body
                    xLanguage = createRestoreInstanceRequest.xLanguage;
                } else {
                    body = createRestoreInstanceRequest['body'];
                    xLanguage = createRestoreInstanceRequest['X-Language'];
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
         * 删除参数模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteConfiguration(deleteConfigurationRequest?: DeleteConfigurationRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/configurations/{config_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let configId;
            
            let xLanguage;

            if (deleteConfigurationRequest !== null && deleteConfigurationRequest !== undefined) {
                if (deleteConfigurationRequest instanceof DeleteConfigurationRequest) {
                    configId = deleteConfigurationRequest.configId;
                    xLanguage = deleteConfigurationRequest.xLanguage;
                } else {
                    configId = deleteConfigurationRequest['config_id'];
                    xLanguage = deleteConfigurationRequest['X-Language'];
                }
            }

        
            if (configId === null || configId === undefined) {
            throw new RequiredError('configId','Required parameter configId was null or undefined when calling deleteConfiguration.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'config_id': configId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除数据库实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteInstance(deleteInstanceRequest?: DeleteInstanceRequest) {
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

            if (deleteInstanceRequest !== null && deleteInstanceRequest !== undefined) {
                if (deleteInstanceRequest instanceof DeleteInstanceRequest) {
                    instanceId = deleteInstanceRequest.instanceId;
                    xLanguage = deleteInstanceRequest.xLanguage;
                } else {
                    instanceId = deleteInstanceRequest['instance_id'];
                    xLanguage = deleteInstanceRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteInstance.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除任务记录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteJob(deleteJobRequest?: DeleteJobRequest) {
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

            if (deleteJobRequest !== null && deleteJobRequest !== undefined) {
                if (deleteJobRequest instanceof DeleteJobRequest) {
                    jobId = deleteJobRequest.jobId;
                    xLanguage = deleteJobRequest.xLanguage;
                } else {
                    jobId = deleteJobRequest['job_id'];
                    xLanguage = deleteJobRequest['X-Language'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling deleteJob.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除手动备份。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteManualBackup(deleteManualBackupRequest?: DeleteManualBackupRequest) {
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

            if (deleteManualBackupRequest !== null && deleteManualBackupRequest !== undefined) {
                if (deleteManualBackupRequest instanceof DeleteManualBackupRequest) {
                    backupId = deleteManualBackupRequest.backupId;
                    xLanguage = deleteManualBackupRequest.xLanguage;
                } else {
                    backupId = deleteManualBackupRequest['backup_id'];
                    xLanguage = deleteManualBackupRequest['X-Language'];
                }
            }

        
            if (backupId === null || backupId === undefined) {
            throw new RequiredError('backupId','Required parameter backupId was null or undefined when calling deleteManualBackup.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'backup_id': backupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取备份下载链接。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        downloadBackup(downloadBackupRequest?: DownloadBackupRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/backup-files",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let backupId;
            
            let xLanguage;

            if (downloadBackupRequest !== null && downloadBackupRequest !== undefined) {
                if (downloadBackupRequest instanceof DownloadBackupRequest) {
                    backupId = downloadBackupRequest.backupId;
                    xLanguage = downloadBackupRequest.xLanguage;
                } else {
                    backupId = downloadBackupRequest['backup_id'];
                    xLanguage = downloadBackupRequest['X-Language'];
                }
            }

        
            if (backupId === null || backupId === undefined) {
                throw new RequiredError('backupId','Required parameter backupId was null or undefined when calling downloadBackup.');
            }
            if (backupId !== null && backupId !== undefined) {
                localVarQueryParameter['backup_id'] = backupId;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询可应用当前参数组模板的实例列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApplicableInstances(listApplicableInstancesRequest?: ListApplicableInstancesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/configurations/{config_id}/applicable-instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let configId;
            
            let xLanguage;
            
            let offset;
            
            let limit;

            if (listApplicableInstancesRequest !== null && listApplicableInstancesRequest !== undefined) {
                if (listApplicableInstancesRequest instanceof ListApplicableInstancesRequest) {
                    configId = listApplicableInstancesRequest.configId;
                    xLanguage = listApplicableInstancesRequest.xLanguage;
                    offset = listApplicableInstancesRequest.offset;
                    limit = listApplicableInstancesRequest.limit;
                } else {
                    configId = listApplicableInstancesRequest['config_id'];
                    xLanguage = listApplicableInstancesRequest['X-Language'];
                    offset = listApplicableInstancesRequest['offset'];
                    limit = listApplicableInstancesRequest['limit'];
                }
            }

        
            if (configId === null || configId === undefined) {
            throw new RequiredError('configId','Required parameter configId was null or undefined when calling listApplicableInstances.');
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
            options.pathParams = { 'config_id': configId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询参数模板的应用记录，以实例级别为维度。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAppliedHistories(listAppliedHistoriesRequest?: ListAppliedHistoriesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/configurations/{config_id}/applied-histories",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let configId;
            
            let xLanguage;
            
            let offset;
            
            let limit;

            if (listAppliedHistoriesRequest !== null && listAppliedHistoriesRequest !== undefined) {
                if (listAppliedHistoriesRequest instanceof ListAppliedHistoriesRequest) {
                    configId = listAppliedHistoriesRequest.configId;
                    xLanguage = listAppliedHistoriesRequest.xLanguage;
                    offset = listAppliedHistoriesRequest.offset;
                    limit = listAppliedHistoriesRequest.limit;
                } else {
                    configId = listAppliedHistoriesRequest['config_id'];
                    xLanguage = listAppliedHistoriesRequest['X-Language'];
                    offset = listAppliedHistoriesRequest['offset'];
                    limit = listAppliedHistoriesRequest['limit'];
                }
            }

        
            if (configId === null || configId === undefined) {
            throw new RequiredError('configId','Required parameter configId was null or undefined when calling listAppliedHistories.');
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
            options.pathParams = { 'config_id': configId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例可变更规格列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAvailableFlavors(listAvailableFlavorsRequest?: ListAvailableFlavorsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/available-flavors",
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

            if (listAvailableFlavorsRequest !== null && listAvailableFlavorsRequest !== undefined) {
                if (listAvailableFlavorsRequest instanceof ListAvailableFlavorsRequest) {
                    instanceId = listAvailableFlavorsRequest.instanceId;
                    xLanguage = listAvailableFlavorsRequest.xLanguage;
                    offset = listAvailableFlavorsRequest.offset;
                    limit = listAvailableFlavorsRequest.limit;
                } else {
                    instanceId = listAvailableFlavorsRequest['instance_id'];
                    xLanguage = listAvailableFlavorsRequest['X-Language'];
                    offset = listAvailableFlavorsRequest['offset'];
                    limit = listAvailableFlavorsRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAvailableFlavors.');
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
         * 获取备份列表。
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
            
            let xLanguage;
            
            let instanceId;
            
            let backupId;
            
            let backupType;
            
            let offset;
            
            let limit;
            
            let beginTime;
            
            let endTime;

            if (listBackupsRequest !== null && listBackupsRequest !== undefined) {
                if (listBackupsRequest instanceof ListBackupsRequest) {
                    xLanguage = listBackupsRequest.xLanguage;
                    instanceId = listBackupsRequest.instanceId;
                    backupId = listBackupsRequest.backupId;
                    backupType = listBackupsRequest.backupType;
                    offset = listBackupsRequest.offset;
                    limit = listBackupsRequest.limit;
                    beginTime = listBackupsRequest.beginTime;
                    endTime = listBackupsRequest.endTime;
                } else {
                    xLanguage = listBackupsRequest['X-Language'];
                    instanceId = listBackupsRequest['instance_id'];
                    backupId = listBackupsRequest['backup_id'];
                    backupType = listBackupsRequest['backup_type'];
                    offset = listBackupsRequest['offset'];
                    limit = listBackupsRequest['limit'];
                    beginTime = listBackupsRequest['begin_time'];
                    endTime = listBackupsRequest['end_time'];
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
         * 查询实例已绑定EIP列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBindedEips(listBindedEipsRequest?: ListBindedEipsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/public-ips",
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

            if (listBindedEipsRequest !== null && listBindedEipsRequest !== undefined) {
                if (listBindedEipsRequest instanceof ListBindedEipsRequest) {
                    instanceId = listBindedEipsRequest.instanceId;
                    xLanguage = listBindedEipsRequest.xLanguage;
                    offset = listBindedEipsRequest.offset;
                    limit = listBindedEipsRequest.limit;
                } else {
                    instanceId = listBindedEipsRequest['instance_id'];
                    xLanguage = listBindedEipsRequest['X-Language'];
                    offset = listBindedEipsRequest['offset'];
                    limit = listBindedEipsRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listBindedEips.');
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
         * 查询实例的组件列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listComponentInfos(listComponentInfosRequest?: ListComponentInfosRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/components",
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
            
            let componentType;
            
            let availabilityZoneId;

            if (listComponentInfosRequest !== null && listComponentInfosRequest !== undefined) {
                if (listComponentInfosRequest instanceof ListComponentInfosRequest) {
                    instanceId = listComponentInfosRequest.instanceId;
                    xLanguage = listComponentInfosRequest.xLanguage;
                    offset = listComponentInfosRequest.offset;
                    limit = listComponentInfosRequest.limit;
                    componentType = listComponentInfosRequest.componentType;
                    availabilityZoneId = listComponentInfosRequest.availabilityZoneId;
                } else {
                    instanceId = listComponentInfosRequest['instance_id'];
                    xLanguage = listComponentInfosRequest['X-Language'];
                    offset = listComponentInfosRequest['offset'];
                    limit = listComponentInfosRequest['limit'];
                    componentType = listComponentInfosRequest['component_type'];
                    availabilityZoneId = listComponentInfosRequest['availability_zone_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listComponentInfos.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (componentType !== null && componentType !== undefined) {
                localVarQueryParameter['component_type'] = componentType;
            }
            if (availabilityZoneId !== null && availabilityZoneId !== undefined) {
                localVarQueryParameter['availability_zone_id'] = availabilityZoneId;
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
         * 获取参数模板列表，包括所有数据库的默认参数模板和用户创建的参数模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listConfigurations(listConfigurationsRequest?: ListConfigurationsRequest) {
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

            if (listConfigurationsRequest !== null && listConfigurationsRequest !== undefined) {
                if (listConfigurationsRequest instanceof ListConfigurationsRequest) {
                    xLanguage = listConfigurationsRequest.xLanguage;
                    offset = listConfigurationsRequest.offset;
                    limit = listConfigurationsRequest.limit;
                } else {
                    xLanguage = listConfigurationsRequest['X-Language'];
                    offset = listConfigurationsRequest['offset'];
                    limit = listConfigurationsRequest['limit'];
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
         * 获取两个参数配置模板的差异列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listConfigurationsDiff(listConfigurationsDiffRequest?: ListConfigurationsDiffRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/configurations/comparison",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (listConfigurationsDiffRequest !== null && listConfigurationsDiffRequest !== undefined) {
                if (listConfigurationsDiffRequest instanceof ListConfigurationsDiffRequest) {
                    body = listConfigurationsDiffRequest.body
                    xLanguage = listConfigurationsDiffRequest.xLanguage;
                } else {
                    body = listConfigurationsDiffRequest['body'];
                    xLanguage = listConfigurationsDiffRequest['X-Language'];
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
         * 查询指定实例的数据库SCHEMA列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDatabaseSchemas(listDatabaseSchemasRequest?: ListDatabaseSchemasRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/schemas",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let dbName;
            
            let xLanguage;
            
            let offset;
            
            let limit;

            if (listDatabaseSchemasRequest !== null && listDatabaseSchemasRequest !== undefined) {
                if (listDatabaseSchemasRequest instanceof ListDatabaseSchemasRequest) {
                    instanceId = listDatabaseSchemasRequest.instanceId;
                    dbName = listDatabaseSchemasRequest.dbName;
                    xLanguage = listDatabaseSchemasRequest.xLanguage;
                    offset = listDatabaseSchemasRequest.offset;
                    limit = listDatabaseSchemasRequest.limit;
                } else {
                    instanceId = listDatabaseSchemasRequest['instance_id'];
                    dbName = listDatabaseSchemasRequest['db_name'];
                    xLanguage = listDatabaseSchemasRequest['X-Language'];
                    offset = listDatabaseSchemasRequest['offset'];
                    limit = listDatabaseSchemasRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listDatabaseSchemas.');
            }
            if (dbName === null || dbName === undefined) {
                throw new RequiredError('dbName','Required parameter dbName was null or undefined when calling listDatabaseSchemas.');
            }
            if (dbName !== null && dbName !== undefined) {
                localVarQueryParameter['db_name'] = dbName;
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
         * 查询指定实例中的数据库列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDatabases(listDatabasesRequest?: ListDatabasesRequest) {
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

            if (listDatabasesRequest !== null && listDatabasesRequest !== undefined) {
                if (listDatabasesRequest instanceof ListDatabasesRequest) {
                    instanceId = listDatabasesRequest.instanceId;
                    xLanguage = listDatabasesRequest.xLanguage;
                    offset = listDatabasesRequest.offset;
                    limit = listDatabasesRequest.limit;
                } else {
                    instanceId = listDatabasesRequest['instance_id'];
                    xLanguage = listDatabasesRequest['X-Language'];
                    offset = listDatabasesRequest['offset'];
                    limit = listDatabasesRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listDatabases.');
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
         * 查询指定数据库引擎对应的版本信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDatastores(listDatastoresRequest?: ListDatastoresRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/datastore/versions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xLanguage;

            if (listDatastoresRequest !== null && listDatastoresRequest !== undefined) {
                if (listDatastoresRequest instanceof ListDatastoresRequest) {
                    xLanguage = listDatastoresRequest.xLanguage;
                } else {
                    xLanguage = listDatastoresRequest['X-Language'];
                }
            }

        
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取备份列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDbBackups(listDbBackupsRequest?: ListDbBackupsRequest) {
            const options = {
                method: "GET",
                url: "/v3.1/{project_id}/backups",
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

            if (listDbBackupsRequest !== null && listDbBackupsRequest !== undefined) {
                if (listDbBackupsRequest instanceof ListDbBackupsRequest) {
                    xLanguage = listDbBackupsRequest.xLanguage;
                    instanceId = listDbBackupsRequest.instanceId;
                    backupId = listDbBackupsRequest.backupId;
                    backupType = listDbBackupsRequest.backupType;
                    offset = listDbBackupsRequest.offset;
                    limit = listDbBackupsRequest.limit;
                    beginTime = listDbBackupsRequest.beginTime;
                    endTime = listDbBackupsRequest.endTime;
                } else {
                    xLanguage = listDbBackupsRequest['X-Language'];
                    instanceId = listDbBackupsRequest['instance_id'];
                    backupId = listDbBackupsRequest['backup_id'];
                    backupType = listDbBackupsRequest['backup_type'];
                    offset = listDbBackupsRequest['offset'];
                    limit = listDbBackupsRequest['limit'];
                    beginTime = listDbBackupsRequest['begin_time'];
                    endTime = listDbBackupsRequest['end_time'];
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
         * 查询数据库的规格信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDbFlavors(listDbFlavorsRequest?: ListDbFlavorsRequest) {
            const options = {
                method: "GET",
                url: "/v3.1/{project_id}/flavors",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xLanguage;
            
            let version;
            
            let specCode;
            
            let haMode;
            
            let limit;
            
            let offset;

            if (listDbFlavorsRequest !== null && listDbFlavorsRequest !== undefined) {
                if (listDbFlavorsRequest instanceof ListDbFlavorsRequest) {
                    xLanguage = listDbFlavorsRequest.xLanguage;
                    version = listDbFlavorsRequest.version;
                    specCode = listDbFlavorsRequest.specCode;
                    haMode = listDbFlavorsRequest.haMode;
                    limit = listDbFlavorsRequest.limit;
                    offset = listDbFlavorsRequest.offset;
                } else {
                    xLanguage = listDbFlavorsRequest['X-Language'];
                    version = listDbFlavorsRequest['version'];
                    specCode = listDbFlavorsRequest['spec_code'];
                    haMode = listDbFlavorsRequest['ha_mode'];
                    limit = listDbFlavorsRequest['limit'];
                    offset = listDbFlavorsRequest['offset'];
                }
            }

        
            if (version !== null && version !== undefined) {
                localVarQueryParameter['version'] = version;
            }
            if (specCode !== null && specCode !== undefined) {
                localVarQueryParameter['spec_code'] = specCode;
            }
            if (haMode !== null && haMode !== undefined) {
                localVarQueryParameter['ha_mode'] = haMode;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在指定实例中查询数据库用户列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDbUsers(listDbUsersRequest?: ListDbUsersRequest) {
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

            if (listDbUsersRequest !== null && listDbUsersRequest !== undefined) {
                if (listDbUsersRequest instanceof ListDbUsersRequest) {
                    instanceId = listDbUsersRequest.instanceId;
                    xLanguage = listDbUsersRequest.xLanguage;
                    offset = listDbUsersRequest.offset;
                    limit = listDbUsersRequest.limit;
                } else {
                    instanceId = listDbUsersRequest['instance_id'];
                    xLanguage = listDbUsersRequest['X-Language'];
                    offset = listDbUsersRequest['offset'];
                    limit = listDbUsersRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listDbUsers.');
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
         * 查询企业项目配额组信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEpsQuotas(listEpsQuotasRequest?: ListEpsQuotasRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/enterprise-projects/quotas",
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
            
            let enterpriseProjectId;

            if (listEpsQuotasRequest !== null && listEpsQuotasRequest !== undefined) {
                if (listEpsQuotasRequest instanceof ListEpsQuotasRequest) {
                    xLanguage = listEpsQuotasRequest.xLanguage;
                    offset = listEpsQuotasRequest.offset;
                    limit = listEpsQuotasRequest.limit;
                    enterpriseProjectId = listEpsQuotasRequest.enterpriseProjectId;
                } else {
                    xLanguage = listEpsQuotasRequest['X-Language'];
                    offset = listEpsQuotasRequest['offset'];
                    limit = listEpsQuotasRequest['limit'];
                    enterpriseProjectId = listEpsQuotasRequest['enterprise_project_id'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询数据库的规格信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFlavors(listFlavorsRequest?: ListFlavorsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/flavors",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xLanguage;
            
            let version;
            
            let specCode;
            
            let haMode;
            
            let limit;
            
            let offset;

            if (listFlavorsRequest !== null && listFlavorsRequest !== undefined) {
                if (listFlavorsRequest instanceof ListFlavorsRequest) {
                    xLanguage = listFlavorsRequest.xLanguage;
                    version = listFlavorsRequest.version;
                    specCode = listFlavorsRequest.specCode;
                    haMode = listFlavorsRequest.haMode;
                    limit = listFlavorsRequest.limit;
                    offset = listFlavorsRequest.offset;
                } else {
                    xLanguage = listFlavorsRequest['X-Language'];
                    version = listFlavorsRequest['version'];
                    specCode = listFlavorsRequest['spec_code'];
                    haMode = listFlavorsRequest['ha_mode'];
                    limit = listFlavorsRequest['limit'];
                    offset = listFlavorsRequest['offset'];
                }
            }

        
            if (version !== null && version !== undefined) {
                localVarQueryParameter['version'] = version;
            }
            if (specCode !== null && specCode !== undefined) {
                localVarQueryParameter['spec_code'] = specCode;
            }
            if (haMode !== null && haMode !== undefined) {
                localVarQueryParameter['ha_mode'] = haMode;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询引擎列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGaussDbDatastores(listGaussDbDatastoresRequest?: ListGaussDbDatastoresRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/datastores",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xLanguage;

            if (listGaussDbDatastoresRequest !== null && listGaussDbDatastoresRequest !== undefined) {
                if (listGaussDbDatastoresRequest instanceof ListGaussDbDatastoresRequest) {
                    xLanguage = listGaussDbDatastoresRequest.xLanguage;
                } else {
                    xLanguage = listGaussDbDatastoresRequest['X-Language'];
                }
            }

        
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询参数模板的修改历史记录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHistoryOperations(listHistoryOperationsRequest?: ListHistoryOperationsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/configurations/{config_id}/histories",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let configId;
            
            let xLanguage;
            
            let offset;
            
            let limit;

            if (listHistoryOperationsRequest !== null && listHistoryOperationsRequest !== undefined) {
                if (listHistoryOperationsRequest instanceof ListHistoryOperationsRequest) {
                    configId = listHistoryOperationsRequest.configId;
                    xLanguage = listHistoryOperationsRequest.xLanguage;
                    offset = listHistoryOperationsRequest.offset;
                    limit = listHistoryOperationsRequest.limit;
                } else {
                    configId = listHistoryOperationsRequest['config_id'];
                    xLanguage = listHistoryOperationsRequest['X-Language'];
                    offset = listHistoryOperationsRequest['offset'];
                    limit = listHistoryOperationsRequest['limit'];
                }
            }

        
            if (configId === null || configId === undefined) {
            throw new RequiredError('configId','Required parameter configId was null or undefined when calling listHistoryOperations.');
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
            options.pathParams = { 'config_id': configId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定实例的用户标签信息。
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

            
            let instanceId;
            
            let xLanguage;

            if (listInstanceTagsRequest !== null && listInstanceTagsRequest !== undefined) {
                if (listInstanceTagsRequest instanceof ListInstanceTagsRequest) {
                    instanceId = listInstanceTagsRequest.instanceId;
                    xLanguage = listInstanceTagsRequest.xLanguage;
                } else {
                    instanceId = listInstanceTagsRequest['instance_id'];
                    xLanguage = listInstanceTagsRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceTags.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询数据库实例列表/查询实例详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstances(listInstancesRequest?: ListInstancesRequest) {
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
            
            let offset;
            
            let limit;
            
            let tags;

            if (listInstancesRequest !== null && listInstancesRequest !== undefined) {
                if (listInstancesRequest instanceof ListInstancesRequest) {
                    xLanguage = listInstancesRequest.xLanguage;
                    id = listInstancesRequest.id;
                    name = listInstancesRequest.name;
                    type = listInstancesRequest.type;
                    datastoreType = listInstancesRequest.datastoreType;
                    vpcId = listInstancesRequest.vpcId;
                    subnetId = listInstancesRequest.subnetId;
                    offset = listInstancesRequest.offset;
                    limit = listInstancesRequest.limit;
                    tags = listInstancesRequest.tags;
                } else {
                    xLanguage = listInstancesRequest['X-Language'];
                    id = listInstancesRequest['id'];
                    name = listInstancesRequest['name'];
                    type = listInstancesRequest['type'];
                    datastoreType = listInstancesRequest['datastore_type'];
                    vpcId = listInstancesRequest['vpc_id'];
                    subnetId = listInstancesRequest['subnet_id'];
                    offset = listInstancesRequest['offset'];
                    limit = listInstancesRequest['limit'];
                    tags = listInstancesRequest['tags'];
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
         * 查询数据库实例列表/查询实例详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstancesDetails(listInstancesDetailsRequest?: ListInstancesDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v3.1/{project_id}/instances",
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
            
            let offset;
            
            let limit;
            
            let tags;

            if (listInstancesDetailsRequest !== null && listInstancesDetailsRequest !== undefined) {
                if (listInstancesDetailsRequest instanceof ListInstancesDetailsRequest) {
                    xLanguage = listInstancesDetailsRequest.xLanguage;
                    id = listInstancesDetailsRequest.id;
                    name = listInstancesDetailsRequest.name;
                    type = listInstancesDetailsRequest.type;
                    datastoreType = listInstancesDetailsRequest.datastoreType;
                    vpcId = listInstancesDetailsRequest.vpcId;
                    subnetId = listInstancesDetailsRequest.subnetId;
                    offset = listInstancesDetailsRequest.offset;
                    limit = listInstancesDetailsRequest.limit;
                    tags = listInstancesDetailsRequest.tags;
                } else {
                    xLanguage = listInstancesDetailsRequest['X-Language'];
                    id = listInstancesDetailsRequest['id'];
                    name = listInstancesDetailsRequest['name'];
                    type = listInstancesDetailsRequest['type'];
                    datastoreType = listInstancesDetailsRequest['datastore_type'];
                    vpcId = listInstancesDetailsRequest['vpc_id'];
                    subnetId = listInstancesDetailsRequest['subnet_id'];
                    offset = listInstancesDetailsRequest['offset'];
                    limit = listInstancesDetailsRequest['limit'];
                    tags = listInstancesDetailsRequest['tags'];
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
         * 获取参数模板列表，包括所有数据库的默认参数模板和用户创建的参数模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listParamGroupTemplates(listParamGroupTemplatesRequest?: ListParamGroupTemplatesRequest) {
            const options = {
                method: "GET",
                url: "/v3.1/{project_id}/configurations",
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

            if (listParamGroupTemplatesRequest !== null && listParamGroupTemplatesRequest !== undefined) {
                if (listParamGroupTemplatesRequest instanceof ListParamGroupTemplatesRequest) {
                    xLanguage = listParamGroupTemplatesRequest.xLanguage;
                    offset = listParamGroupTemplatesRequest.offset;
                    limit = listParamGroupTemplatesRequest.limit;
                } else {
                    xLanguage = listParamGroupTemplatesRequest['X-Language'];
                    offset = listParamGroupTemplatesRequest['offset'];
                    limit = listParamGroupTemplatesRequest['limit'];
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
         * 查询预预定义标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPredefinedTags(listPredefinedTagsRequest?: ListPredefinedTagsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/predefined-tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xLanguage;

            if (listPredefinedTagsRequest !== null && listPredefinedTagsRequest !== undefined) {
                if (listPredefinedTagsRequest instanceof ListPredefinedTagsRequest) {
                    xLanguage = listPredefinedTagsRequest.xLanguage;
                } else {
                    xLanguage = listPredefinedTagsRequest['X-Language'];
                }
            }

        
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询项目下所有用户标签信息。
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

            
            let xLanguage;

            if (listProjectTagsRequest !== null && listProjectTagsRequest !== undefined) {
                if (listProjectTagsRequest instanceof ListProjectTagsRequest) {
                    xLanguage = listProjectTagsRequest.xLanguage;
                } else {
                    xLanguage = listProjectTagsRequest['X-Language'];
                }
            }

        
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询回收站所有引擎实例列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRecycleInstances(listRecycleInstancesRequest?: ListRecycleInstancesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/recycle-instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xLanguage;
            
            let instanceName;
            
            let offset;
            
            let limit;

            if (listRecycleInstancesRequest !== null && listRecycleInstancesRequest !== undefined) {
                if (listRecycleInstancesRequest instanceof ListRecycleInstancesRequest) {
                    xLanguage = listRecycleInstancesRequest.xLanguage;
                    instanceName = listRecycleInstancesRequest.instanceName;
                    offset = listRecycleInstancesRequest.offset;
                    limit = listRecycleInstancesRequest.limit;
                } else {
                    xLanguage = listRecycleInstancesRequest['X-Language'];
                    instanceName = listRecycleInstancesRequest['instance_name'];
                    offset = listRecycleInstancesRequest['offset'];
                    limit = listRecycleInstancesRequest['limit'];
                }
            }

        
            if (instanceName !== null && instanceName !== undefined) {
                localVarQueryParameter['instance_name'] = instanceName;
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
         * 查询可用于备份恢复的实例列表，实例信息要符合备份条件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRestorableInstances(listRestorableInstancesRequest?: ListRestorableInstancesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/restorable-instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let sourceInstanceId;
            
            let xLanguage;
            
            let backupId;
            
            let restoreTime;
            
            let offset;
            
            let limit;

            if (listRestorableInstancesRequest !== null && listRestorableInstancesRequest !== undefined) {
                if (listRestorableInstancesRequest instanceof ListRestorableInstancesRequest) {
                    sourceInstanceId = listRestorableInstancesRequest.sourceInstanceId;
                    xLanguage = listRestorableInstancesRequest.xLanguage;
                    backupId = listRestorableInstancesRequest.backupId;
                    restoreTime = listRestorableInstancesRequest.restoreTime;
                    offset = listRestorableInstancesRequest.offset;
                    limit = listRestorableInstancesRequest.limit;
                } else {
                    sourceInstanceId = listRestorableInstancesRequest['source_instance_id'];
                    xLanguage = listRestorableInstancesRequest['X-Language'];
                    backupId = listRestorableInstancesRequest['backup_id'];
                    restoreTime = listRestorableInstancesRequest['restore_time'];
                    offset = listRestorableInstancesRequest['offset'];
                    limit = listRestorableInstancesRequest['limit'];
                }
            }

        
            if (sourceInstanceId === null || sourceInstanceId === undefined) {
                throw new RequiredError('sourceInstanceId','Required parameter sourceInstanceId was null or undefined when calling listRestorableInstances.');
            }
            if (sourceInstanceId !== null && sourceInstanceId !== undefined) {
                localVarQueryParameter['source_instance_id'] = sourceInstanceId;
            }
            if (backupId !== null && backupId !== undefined) {
                localVarQueryParameter['backup_id'] = backupId;
            }
            if (restoreTime !== null && restoreTime !== undefined) {
                localVarQueryParameter['restore_time'] = restoreTime;
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
         * 查询可恢复时间段。
         * 如果您备份策略中的保存天数设置较长，建议您传入查询日期“date”。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRestoreTimes(listRestoreTimesRequest?: ListRestoreTimesRequest) {
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
            
            let date;
            
            let xLanguage;

            if (listRestoreTimesRequest !== null && listRestoreTimesRequest !== undefined) {
                if (listRestoreTimesRequest instanceof ListRestoreTimesRequest) {
                    instanceId = listRestoreTimesRequest.instanceId;
                    date = listRestoreTimesRequest.date;
                    xLanguage = listRestoreTimesRequest.xLanguage;
                } else {
                    instanceId = listRestoreTimesRequest['instance_id'];
                    date = listRestoreTimesRequest['date'];
                    xLanguage = listRestoreTimesRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listRestoreTimes.');
            }
            if (date === null || date === undefined) {
                throw new RequiredError('date','Required parameter date was null or undefined when calling listRestoreTimes.');
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
         * 查询指定数据库引擎对应的磁盘类型。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listStorageTypes(listStorageTypesRequest?: ListStorageTypesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/storage-type",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let version;
            
            let xLanguage;
            
            let haMode;

            if (listStorageTypesRequest !== null && listStorageTypesRequest !== undefined) {
                if (listStorageTypesRequest instanceof ListStorageTypesRequest) {
                    version = listStorageTypesRequest.version;
                    xLanguage = listStorageTypesRequest.xLanguage;
                    haMode = listStorageTypesRequest.haMode;
                } else {
                    version = listStorageTypesRequest['version'];
                    xLanguage = listStorageTypesRequest['X-Language'];
                    haMode = listStorageTypesRequest['ha_mode'];
                }
            }

        
            if (version === null || version === undefined) {
                throw new RequiredError('version','Required parameter version was null or undefined when calling listStorageTypes.');
            }
            if (version !== null && version !== undefined) {
                localVarQueryParameter['version'] = version;
            }
            if (haMode !== null && haMode !== undefined) {
                localVarQueryParameter['ha_mode'] = haMode;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取任务中心的任务列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTasks(listTasksRequest?: ListTasksRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xLanguage;
            
            let status;
            
            let name;
            
            let startTime;
            
            let endTime;
            
            let offset;
            
            let limit;

            if (listTasksRequest !== null && listTasksRequest !== undefined) {
                if (listTasksRequest instanceof ListTasksRequest) {
                    xLanguage = listTasksRequest.xLanguage;
                    status = listTasksRequest.status;
                    name = listTasksRequest.name;
                    startTime = listTasksRequest.startTime;
                    endTime = listTasksRequest.endTime;
                    offset = listTasksRequest.offset;
                    limit = listTasksRequest.limit;
                } else {
                    xLanguage = listTasksRequest['X-Language'];
                    status = listTasksRequest['status'];
                    name = listTasksRequest['name'];
                    startTime = listTasksRequest['start_time'];
                    endTime = listTasksRequest['end_time'];
                    offset = listTasksRequest['offset'];
                    limit = listTasksRequest['limit'];
                }
            }

        
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
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
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改企业项目配额。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        modifyEpsQuota(modifyEpsQuotaRequest?: ModifyEpsQuotaRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/enterprise-projects/quotas",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (modifyEpsQuotaRequest !== null && modifyEpsQuotaRequest !== undefined) {
                if (modifyEpsQuotaRequest instanceof ModifyEpsQuotaRequest) {
                    body = modifyEpsQuotaRequest.body
                    xLanguage = modifyEpsQuotaRequest.xLanguage;
                } else {
                    body = modifyEpsQuotaRequest['body'];
                    xLanguage = modifyEpsQuotaRequest['X-Language'];
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
         * 重置参数模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetConfiguration(resetConfigurationRequest?: ResetConfigurationRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/configurations/{config_id}/reset",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let configId;
            
            let xLanguage;

            if (resetConfigurationRequest !== null && resetConfigurationRequest !== undefined) {
                if (resetConfigurationRequest instanceof ResetConfigurationRequest) {
                    configId = resetConfigurationRequest.configId;
                    xLanguage = resetConfigurationRequest.xLanguage;
                } else {
                    configId = resetConfigurationRequest['config_id'];
                    xLanguage = resetConfigurationRequest['X-Language'];
                }
            }

        
            if (configId === null || configId === undefined) {
            throw new RequiredError('configId','Required parameter configId was null or undefined when calling resetConfiguration.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'config_id': configId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重置数据库密码。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetPwd(resetPwdRequest?: ResetPwdRequest) {
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

            if (resetPwdRequest !== null && resetPwdRequest !== undefined) {
                if (resetPwdRequest instanceof ResetPwdRequest) {
                    instanceId = resetPwdRequest.instanceId;
                    body = resetPwdRequest.body
                    xLanguage = resetPwdRequest.xLanguage;
                } else {
                    instanceId = resetPwdRequest['instance_id'];
                    body = resetPwdRequest['body'];
                    xLanguage = resetPwdRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling resetPwd.');
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
         * GaussDB数据库实例规格变更
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resizeInstanceFlavor(resizeInstanceFlavorRequest?: ResizeInstanceFlavorRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instance/{instance_id}/flavor",
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

            if (resizeInstanceFlavorRequest !== null && resizeInstanceFlavorRequest !== undefined) {
                if (resizeInstanceFlavorRequest instanceof ResizeInstanceFlavorRequest) {
                    instanceId = resizeInstanceFlavorRequest.instanceId;
                    body = resizeInstanceFlavorRequest.body
                    xLanguage = resizeInstanceFlavorRequest.xLanguage;
                } else {
                    instanceId = resizeInstanceFlavorRequest['instance_id'];
                    body = resizeInstanceFlavorRequest['body'];
                    xLanguage = resizeInstanceFlavorRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling resizeInstanceFlavor.');
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
        restartInstance(restartInstanceRequest?: RestartInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/restart",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (restartInstanceRequest !== null && restartInstanceRequest !== undefined) {
                if (restartInstanceRequest instanceof RestartInstanceRequest) {
                    instanceId = restartInstanceRequest.instanceId;
                    xLanguage = restartInstanceRequest.xLanguage;
                } else {
                    instanceId = restartInstanceRequest['instance_id'];
                    xLanguage = restartInstanceRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling restartInstance.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * CN横向扩容/DN分片扩容/磁盘扩容
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        runInstanceAction(runInstanceActionRequest?: RunInstanceActionRequest) {
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

            if (runInstanceActionRequest !== null && runInstanceActionRequest !== undefined) {
                if (runInstanceActionRequest instanceof RunInstanceActionRequest) {
                    instanceId = runInstanceActionRequest.instanceId;
                    body = runInstanceActionRequest.body
                    xLanguage = runInstanceActionRequest.xLanguage;
                } else {
                    instanceId = runInstanceActionRequest['instance_id'];
                    body = runInstanceActionRequest['body'];
                    xLanguage = runInstanceActionRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling runInstanceAction.');
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
        setBackupPolicy(setBackupPolicyRequest?: SetBackupPolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/backups/policy",
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

            if (setBackupPolicyRequest !== null && setBackupPolicyRequest !== undefined) {
                if (setBackupPolicyRequest instanceof SetBackupPolicyRequest) {
                    instanceId = setBackupPolicyRequest.instanceId;
                    body = setBackupPolicyRequest.body
                    xLanguage = setBackupPolicyRequest.xLanguage;
                } else {
                    instanceId = setBackupPolicyRequest['instance_id'];
                    body = setBackupPolicyRequest['body'];
                    xLanguage = setBackupPolicyRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling setBackupPolicy.');
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
         * 重置指定数据库帐号的密码。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setDbUserPwd(setDbUserPwdRequest?: SetDbUserPwdRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/db-user/password",
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

            if (setDbUserPwdRequest !== null && setDbUserPwdRequest !== undefined) {
                if (setDbUserPwdRequest instanceof SetDbUserPwdRequest) {
                    instanceId = setDbUserPwdRequest.instanceId;
                    body = setDbUserPwdRequest.body
                    xLanguage = setDbUserPwdRequest.xLanguage;
                } else {
                    instanceId = setDbUserPwdRequest['instance_id'];
                    body = setDbUserPwdRequest['body'];
                    xLanguage = setDbUserPwdRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling setDbUserPwd.');
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
         * 设置回收站策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setRecyclePolicy(setRecyclePolicyRequest?: SetRecyclePolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/recycle-policy",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (setRecyclePolicyRequest !== null && setRecyclePolicyRequest !== undefined) {
                if (setRecyclePolicyRequest instanceof SetRecyclePolicyRequest) {
                    body = setRecyclePolicyRequest.body
                } else {
                    body = setRecyclePolicyRequest['body'];
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
         * 查询自动备份策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBackupPolicy(showBackupPolicyRequest?: ShowBackupPolicyRequest) {
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

            if (showBackupPolicyRequest !== null && showBackupPolicyRequest !== undefined) {
                if (showBackupPolicyRequest instanceof ShowBackupPolicyRequest) {
                    instanceId = showBackupPolicyRequest.instanceId;
                    xLanguage = showBackupPolicyRequest.xLanguage;
                } else {
                    instanceId = showBackupPolicyRequest['instance_id'];
                    xLanguage = showBackupPolicyRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showBackupPolicy.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例是否发生过主备切换而导致主机负载不均衡。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBalanceStatus(showBalanceStatusRequest?: ShowBalanceStatusRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/balance",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (showBalanceStatusRequest !== null && showBalanceStatusRequest !== undefined) {
                if (showBalanceStatusRequest instanceof ShowBalanceStatusRequest) {
                    instanceId = showBalanceStatusRequest.instanceId;
                    xLanguage = showBalanceStatusRequest.xLanguage;
                } else {
                    instanceId = showBalanceStatusRequest['instance_id'];
                    xLanguage = showBalanceStatusRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showBalanceStatus.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据参数模板ID获取指定参数模板详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showConfigurationDetail(showConfigurationDetailRequest?: ShowConfigurationDetailRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/configurations/{config_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let configId;
            
            let xLanguage;

            if (showConfigurationDetailRequest !== null && showConfigurationDetailRequest !== undefined) {
                if (showConfigurationDetailRequest instanceof ShowConfigurationDetailRequest) {
                    configId = showConfigurationDetailRequest.configId;
                    xLanguage = showConfigurationDetailRequest.xLanguage;
                } else {
                    configId = showConfigurationDetailRequest['config_id'];
                    xLanguage = showConfigurationDetailRequest['X-Language'];
                }
            }

        
            if (configId === null || configId === undefined) {
            throw new RequiredError('configId','Required parameter configId was null or undefined when calling showConfigurationDetail.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'config_id': configId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据解决方案模板名称或实例ID查询副本数、分片数、节点数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDeploymentForm(showDeploymentFormRequest?: ShowDeploymentFormRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/deployment-form",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xLanguage;
            
            let solution;
            
            let instanceId;

            if (showDeploymentFormRequest !== null && showDeploymentFormRequest !== undefined) {
                if (showDeploymentFormRequest instanceof ShowDeploymentFormRequest) {
                    xLanguage = showDeploymentFormRequest.xLanguage;
                    solution = showDeploymentFormRequest.solution;
                    instanceId = showDeploymentFormRequest.instanceId;
                } else {
                    xLanguage = showDeploymentFormRequest['X-Language'];
                    solution = showDeploymentFormRequest['solution'];
                    instanceId = showDeploymentFormRequest['instance_id'];
                }
            }

        
            if (solution !== null && solution !== undefined) {
                localVarQueryParameter['solution'] = solution;
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定实例的参数模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceConfiguration(showInstanceConfigurationRequest?: ShowInstanceConfigurationRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/configurations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (showInstanceConfigurationRequest !== null && showInstanceConfigurationRequest !== undefined) {
                if (showInstanceConfigurationRequest instanceof ShowInstanceConfigurationRequest) {
                    instanceId = showInstanceConfigurationRequest.instanceId;
                    xLanguage = showInstanceConfigurationRequest.xLanguage;
                } else {
                    instanceId = showInstanceConfigurationRequest['instance_id'];
                    xLanguage = showInstanceConfigurationRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInstanceConfiguration.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定实例的存储使用空间和最大空间。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceDisk(showInstanceDiskRequest?: ShowInstanceDiskRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/volume-usage",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (showInstanceDiskRequest !== null && showInstanceDiskRequest !== undefined) {
                if (showInstanceDiskRequest instanceof ShowInstanceDiskRequest) {
                    instanceId = showInstanceDiskRequest.instanceId;
                    xLanguage = showInstanceDiskRequest.xLanguage;
                } else {
                    instanceId = showInstanceDiskRequest['instance_id'];
                    xLanguage = showInstanceDiskRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInstanceDisk.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定实例的参数模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceParamGroup(showInstanceParamGroupRequest?: ShowInstanceParamGroupRequest) {
            const options = {
                method: "GET",
                url: "/v3.1/{project_id}/instances/{instance_id}/configurations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (showInstanceParamGroupRequest !== null && showInstanceParamGroupRequest !== undefined) {
                if (showInstanceParamGroupRequest instanceof ShowInstanceParamGroupRequest) {
                    instanceId = showInstanceParamGroupRequest.instanceId;
                    xLanguage = showInstanceParamGroupRequest.xLanguage;
                } else {
                    instanceId = showInstanceParamGroupRequest['instance_id'];
                    xLanguage = showInstanceParamGroupRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInstanceParamGroup.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据时间点或者备份文件查询原实例信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceSnapshot(showInstanceSnapshotRequest?: ShowInstanceSnapshotRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instance-snapshot",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xLanguage;
            
            let instanceId;
            
            let restoreTime;
            
            let backupId;

            if (showInstanceSnapshotRequest !== null && showInstanceSnapshotRequest !== undefined) {
                if (showInstanceSnapshotRequest instanceof ShowInstanceSnapshotRequest) {
                    xLanguage = showInstanceSnapshotRequest.xLanguage;
                    instanceId = showInstanceSnapshotRequest.instanceId;
                    restoreTime = showInstanceSnapshotRequest.restoreTime;
                    backupId = showInstanceSnapshotRequest.backupId;
                } else {
                    xLanguage = showInstanceSnapshotRequest['X-Language'];
                    instanceId = showInstanceSnapshotRequest['instance_id'];
                    restoreTime = showInstanceSnapshotRequest['restore_time'];
                    backupId = showInstanceSnapshotRequest['backup_id'];
                }
            }

        
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (restoreTime !== null && restoreTime !== undefined) {
                localVarQueryParameter['restore_time'] = restoreTime;
            }
            if (backupId !== null && backupId !== undefined) {
                localVarQueryParameter['backup_id'] = backupId;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定ID的任务信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showJobDetail(showJobDetailRequest?: ShowJobDetailRequest) {
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

            if (showJobDetailRequest !== null && showJobDetailRequest !== undefined) {
                if (showJobDetailRequest instanceof ShowJobDetailRequest) {
                    id = showJobDetailRequest.id;
                } else {
                    id = showJobDetailRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling showJobDetail.');
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showProjectQuotas(showProjectQuotasRequest?: ShowProjectQuotasRequest) {
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

            if (showProjectQuotasRequest !== null && showProjectQuotasRequest !== undefined) {
                if (showProjectQuotasRequest instanceof ShowProjectQuotasRequest) {
                    xLanguage = showProjectQuotasRequest.xLanguage;
                    type = showProjectQuotasRequest.type;
                } else {
                    xLanguage = showProjectQuotasRequest['X-Language'];
                    type = showProjectQuotasRequest['type'];
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
         * 查看回收站的回收策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRecyclePolicy(showRecyclePolicyRequest?: ShowRecyclePolicyRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/recycle-policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xLanguage;

            if (showRecyclePolicyRequest !== null && showRecyclePolicyRequest !== undefined) {
                if (showRecyclePolicyRequest instanceof ShowRecyclePolicyRequest) {
                    xLanguage = showRecyclePolicyRequest.xLanguage;
                } else {
                    xLanguage = showRecyclePolicyRequest['X-Language'];
                }
            }

        
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例SSL证书下载地址。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSslCertDownloadLink(showSslCertDownloadLinkRequest?: ShowSslCertDownloadLinkRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/ssl-cert/download-link",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (showSslCertDownloadLinkRequest !== null && showSslCertDownloadLinkRequest !== undefined) {
                if (showSslCertDownloadLinkRequest instanceof ShowSslCertDownloadLinkRequest) {
                    instanceId = showSslCertDownloadLinkRequest.instanceId;
                    xLanguage = showSslCertDownloadLinkRequest.xLanguage;
                } else {
                    instanceId = showSslCertDownloadLinkRequest['instance_id'];
                    xLanguage = showSslCertDownloadLinkRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showSslCertDownloadLink.');
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
        switchConfiguration(switchConfigurationRequest?: SwitchConfigurationRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/configurations/{config_id}/apply",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let configId;
            
            let xLanguage;

            if (switchConfigurationRequest !== null && switchConfigurationRequest !== undefined) {
                if (switchConfigurationRequest instanceof SwitchConfigurationRequest) {
                    configId = switchConfigurationRequest.configId;
                    body = switchConfigurationRequest.body
                    xLanguage = switchConfigurationRequest.xLanguage;
                } else {
                    configId = switchConfigurationRequest['config_id'];
                    body = switchConfigurationRequest['body'];
                    xLanguage = switchConfigurationRequest['X-Language'];
                }
            }

        
            if (configId === null || configId === undefined) {
            throw new RequiredError('configId','Required parameter configId was null or undefined when calling switchConfiguration.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'config_id': configId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 支持用户对单个或多个DN分片做主备切换，同一分组内只能指定一个新的备节点进行升主操作。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        switchShard(switchShardRequest?: SwitchShardRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/switch-shard",
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

            if (switchShardRequest !== null && switchShardRequest !== undefined) {
                if (switchShardRequest instanceof SwitchShardRequest) {
                    instanceId = switchShardRequest.instanceId;
                    body = switchShardRequest.body
                    xLanguage = switchShardRequest.xLanguage;
                } else {
                    instanceId = switchShardRequest['instance_id'];
                    body = switchShardRequest['body'];
                    xLanguage = switchShardRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling switchShard.');
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
         * 修改指定实例的参数。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInstanceConfiguration(updateInstanceConfigurationRequest?: UpdateInstanceConfigurationRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/configurations",
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

            if (updateInstanceConfigurationRequest !== null && updateInstanceConfigurationRequest !== undefined) {
                if (updateInstanceConfigurationRequest instanceof UpdateInstanceConfigurationRequest) {
                    instanceId = updateInstanceConfigurationRequest.instanceId;
                    body = updateInstanceConfigurationRequest.body
                    xLanguage = updateInstanceConfigurationRequest.xLanguage;
                } else {
                    instanceId = updateInstanceConfigurationRequest['instance_id'];
                    body = updateInstanceConfigurationRequest['body'];
                    xLanguage = updateInstanceConfigurationRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateInstanceConfiguration.');
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
        updateInstanceName(updateInstanceNameRequest?: UpdateInstanceNameRequest) {
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

            if (updateInstanceNameRequest !== null && updateInstanceNameRequest !== undefined) {
                if (updateInstanceNameRequest instanceof UpdateInstanceNameRequest) {
                    instanceId = updateInstanceNameRequest.instanceId;
                    body = updateInstanceNameRequest.body
                    xLanguage = updateInstanceNameRequest.xLanguage;
                } else {
                    instanceId = updateInstanceNameRequest['instance_id'];
                    body = updateInstanceNameRequest['body'];
                    xLanguage = updateInstanceNameRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateInstanceName.');
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
         * 校验参数组名称是否存在。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        validateParaGroupName(validateParaGroupNameRequest?: ValidateParaGroupNameRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/configurations/name-validation",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let name;
            
            let xLanguage;

            if (validateParaGroupNameRequest !== null && validateParaGroupNameRequest !== undefined) {
                if (validateParaGroupNameRequest instanceof ValidateParaGroupNameRequest) {
                    name = validateParaGroupNameRequest.name;
                    xLanguage = validateParaGroupNameRequest.xLanguage;
                } else {
                    name = validateParaGroupNameRequest['name'];
                    xLanguage = validateParaGroupNameRequest['X-Language'];
                }
            }

        
            if (name === null || name === undefined) {
                throw new RequiredError('name','Required parameter name was null or undefined when calling validateParaGroupName.');
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 校验数据库root用户密码的安全性。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        validateWeakPassword(validateWeakPasswordRequest?: ValidateWeakPasswordRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/weak-password-verification",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (validateWeakPasswordRequest !== null && validateWeakPasswordRequest !== undefined) {
                if (validateWeakPasswordRequest instanceof ValidateWeakPasswordRequest) {
                    body = validateWeakPasswordRequest.body
                    xLanguage = validateWeakPasswordRequest.xLanguage;
                } else {
                    body = validateWeakPasswordRequest['body'];
                    xLanguage = validateWeakPasswordRequest['X-Language'];
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
    
    }
};

function newClient(client: HcClient): GaussDBforopenGaussClient {
    return new GaussDBforopenGaussClient(client);
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