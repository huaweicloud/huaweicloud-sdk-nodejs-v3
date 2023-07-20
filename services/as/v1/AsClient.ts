import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AllQuotas } from './model/AllQuotas';
import { AllResources } from './model/AllResources';
import { AllowedAddressPair } from './model/AllowedAddressPair';
import { AttachCallbackInstanceLifeCycleHookRequest } from './model/AttachCallbackInstanceLifeCycleHookRequest';
import { AttachCallbackInstanceLifeCycleHookResponse } from './model/AttachCallbackInstanceLifeCycleHookResponse';
import { BandwidthInfo } from './model/BandwidthInfo';
import { BandwidthResult } from './model/BandwidthResult';
import { BatchAddInstancesOption } from './model/BatchAddInstancesOption';
import { BatchAddScalingInstancesRequest } from './model/BatchAddScalingInstancesRequest';
import { BatchAddScalingInstancesResponse } from './model/BatchAddScalingInstancesResponse';
import { BatchDeleteScalingConfigOption } from './model/BatchDeleteScalingConfigOption';
import { BatchDeleteScalingConfigsRequest } from './model/BatchDeleteScalingConfigsRequest';
import { BatchDeleteScalingConfigsResponse } from './model/BatchDeleteScalingConfigsResponse';
import { BatchDeleteScalingPoliciesOption } from './model/BatchDeleteScalingPoliciesOption';
import { BatchDeleteScalingPoliciesRequest } from './model/BatchDeleteScalingPoliciesRequest';
import { BatchDeleteScalingPoliciesResponse } from './model/BatchDeleteScalingPoliciesResponse';
import { BatchEnterStandbyInstancesOption } from './model/BatchEnterStandbyInstancesOption';
import { BatchExitStandByInstancesOption } from './model/BatchExitStandByInstancesOption';
import { BatchPauseScalingPoliciesOption } from './model/BatchPauseScalingPoliciesOption';
import { BatchPauseScalingPoliciesRequest } from './model/BatchPauseScalingPoliciesRequest';
import { BatchPauseScalingPoliciesResponse } from './model/BatchPauseScalingPoliciesResponse';
import { BatchProtectInstancesOption } from './model/BatchProtectInstancesOption';
import { BatchProtectScalingInstancesRequest } from './model/BatchProtectScalingInstancesRequest';
import { BatchProtectScalingInstancesResponse } from './model/BatchProtectScalingInstancesResponse';
import { BatchRemoveInstancesOption } from './model/BatchRemoveInstancesOption';
import { BatchRemoveScalingInstancesRequest } from './model/BatchRemoveScalingInstancesRequest';
import { BatchRemoveScalingInstancesResponse } from './model/BatchRemoveScalingInstancesResponse';
import { BatchResumeScalingPoliciesOption } from './model/BatchResumeScalingPoliciesOption';
import { BatchResumeScalingPoliciesRequest } from './model/BatchResumeScalingPoliciesRequest';
import { BatchResumeScalingPoliciesResponse } from './model/BatchResumeScalingPoliciesResponse';
import { BatchSetScalingInstancesStandbyRequest } from './model/BatchSetScalingInstancesStandbyRequest';
import { BatchSetScalingInstancesStandbyResponse } from './model/BatchSetScalingInstancesStandbyResponse';
import { BatchUnprotectInstancesOption } from './model/BatchUnprotectInstancesOption';
import { BatchUnprotectScalingInstancesRequest } from './model/BatchUnprotectScalingInstancesRequest';
import { BatchUnprotectScalingInstancesResponse } from './model/BatchUnprotectScalingInstancesResponse';
import { BatchUnsetScalingInstancesStantbyRequest } from './model/BatchUnsetScalingInstancesStantbyRequest';
import { BatchUnsetScalingInstancesStantbyResponse } from './model/BatchUnsetScalingInstancesStantbyResponse';
import { CallbackLifeCycleHookOption } from './model/CallbackLifeCycleHookOption';
import { CreateGroupScheduledTaskRequest } from './model/CreateGroupScheduledTaskRequest';
import { CreateGroupScheduledTaskResponse } from './model/CreateGroupScheduledTaskResponse';
import { CreateLifeCycleHookOption } from './model/CreateLifeCycleHookOption';
import { CreateLifyCycleHookRequest } from './model/CreateLifyCycleHookRequest';
import { CreateLifyCycleHookResponse } from './model/CreateLifyCycleHookResponse';
import { CreateNotificationOption } from './model/CreateNotificationOption';
import { CreateScalingConfigOption } from './model/CreateScalingConfigOption';
import { CreateScalingConfigRequest } from './model/CreateScalingConfigRequest';
import { CreateScalingConfigResponse } from './model/CreateScalingConfigResponse';
import { CreateScalingGroupOption } from './model/CreateScalingGroupOption';
import { CreateScalingGroupRequest } from './model/CreateScalingGroupRequest';
import { CreateScalingGroupResponse } from './model/CreateScalingGroupResponse';
import { CreateScalingNotificationRequest } from './model/CreateScalingNotificationRequest';
import { CreateScalingNotificationResponse } from './model/CreateScalingNotificationResponse';
import { CreateScalingPolicyOption } from './model/CreateScalingPolicyOption';
import { CreateScalingPolicyRequest } from './model/CreateScalingPolicyRequest';
import { CreateScalingPolicyResponse } from './model/CreateScalingPolicyResponse';
import { CreateScalingPolicyV2Option } from './model/CreateScalingPolicyV2Option';
import { CreateScalingTagInfoRequest } from './model/CreateScalingTagInfoRequest';
import { CreateScalingTagInfoResponse } from './model/CreateScalingTagInfoResponse';
import { CreateScalingV2PolicyRequest } from './model/CreateScalingV2PolicyRequest';
import { CreateScalingV2PolicyResponse } from './model/CreateScalingV2PolicyResponse';
import { CreateScheduledTaskOption } from './model/CreateScheduledTaskOption';
import { CreateTagsOption } from './model/CreateTagsOption';
import { DeleteGroupScheduledTaskRequest } from './model/DeleteGroupScheduledTaskRequest';
import { DeleteGroupScheduledTaskResponse } from './model/DeleteGroupScheduledTaskResponse';
import { DeleteLifecycleHookRequest } from './model/DeleteLifecycleHookRequest';
import { DeleteLifecycleHookResponse } from './model/DeleteLifecycleHookResponse';
import { DeleteScalingConfigRequest } from './model/DeleteScalingConfigRequest';
import { DeleteScalingConfigResponse } from './model/DeleteScalingConfigResponse';
import { DeleteScalingGroupRequest } from './model/DeleteScalingGroupRequest';
import { DeleteScalingGroupResponse } from './model/DeleteScalingGroupResponse';
import { DeleteScalingInstanceRequest } from './model/DeleteScalingInstanceRequest';
import { DeleteScalingInstanceResponse } from './model/DeleteScalingInstanceResponse';
import { DeleteScalingNotificationRequest } from './model/DeleteScalingNotificationRequest';
import { DeleteScalingNotificationResponse } from './model/DeleteScalingNotificationResponse';
import { DeleteScalingPolicyRequest } from './model/DeleteScalingPolicyRequest';
import { DeleteScalingPolicyResponse } from './model/DeleteScalingPolicyResponse';
import { DeleteScalingTagInfoRequest } from './model/DeleteScalingTagInfoRequest';
import { DeleteScalingTagInfoResponse } from './model/DeleteScalingTagInfoResponse';
import { DeleteTagsOption } from './model/DeleteTagsOption';
import { DiskInfo } from './model/DiskInfo';
import { DiskResult } from './model/DiskResult';
import { EipInfo } from './model/EipInfo';
import { EipMetaData } from './model/EipMetaData';
import { EipResult } from './model/EipResult';
import { ExecuteScalingPolicyOption } from './model/ExecuteScalingPolicyOption';
import { ExecuteScalingPolicyRequest } from './model/ExecuteScalingPolicyRequest';
import { ExecuteScalingPolicyResponse } from './model/ExecuteScalingPolicyResponse';
import { InstanceConfig } from './model/InstanceConfig';
import { InstanceConfigResult } from './model/InstanceConfigResult';
import { InstanceHangingInfos } from './model/InstanceHangingInfos';
import { IntegerRange } from './model/IntegerRange';
import { Ipv6Bandwidth } from './model/Ipv6Bandwidth';
import { JobRecords } from './model/JobRecords';
import { LbaasListener } from './model/LbaasListener';
import { LbaasListeners } from './model/LbaasListeners';
import { LbaasListenersResult } from './model/LbaasListenersResult';
import { LifecycleHookList } from './model/LifecycleHookList';
import { Links } from './model/Links';
import { ListAllScalingV2PoliciesRequest } from './model/ListAllScalingV2PoliciesRequest';
import { ListAllScalingV2PoliciesResponse } from './model/ListAllScalingV2PoliciesResponse';
import { ListApiVersionsRequest } from './model/ListApiVersionsRequest';
import { ListApiVersionsResponse } from './model/ListApiVersionsResponse';
import { ListGroupScheduledTasksRequest } from './model/ListGroupScheduledTasksRequest';
import { ListGroupScheduledTasksResponse } from './model/ListGroupScheduledTasksResponse';
import { ListHookInstancesRequest } from './model/ListHookInstancesRequest';
import { ListHookInstancesResponse } from './model/ListHookInstancesResponse';
import { ListLifeCycleHooksRequest } from './model/ListLifeCycleHooksRequest';
import { ListLifeCycleHooksResponse } from './model/ListLifeCycleHooksResponse';
import { ListResourceInstancesRequest } from './model/ListResourceInstancesRequest';
import { ListResourceInstancesResponse } from './model/ListResourceInstancesResponse';
import { ListScalingActivityLogsRequest } from './model/ListScalingActivityLogsRequest';
import { ListScalingActivityLogsResponse } from './model/ListScalingActivityLogsResponse';
import { ListScalingActivityV2LogsRequest } from './model/ListScalingActivityV2LogsRequest';
import { ListScalingActivityV2LogsResponse } from './model/ListScalingActivityV2LogsResponse';
import { ListScalingConfigsRequest } from './model/ListScalingConfigsRequest';
import { ListScalingConfigsResponse } from './model/ListScalingConfigsResponse';
import { ListScalingGroupsRequest } from './model/ListScalingGroupsRequest';
import { ListScalingGroupsResponse } from './model/ListScalingGroupsResponse';
import { ListScalingInstancesRequest } from './model/ListScalingInstancesRequest';
import { ListScalingInstancesResponse } from './model/ListScalingInstancesResponse';
import { ListScalingNotificationsRequest } from './model/ListScalingNotificationsRequest';
import { ListScalingNotificationsResponse } from './model/ListScalingNotificationsResponse';
import { ListScalingPoliciesRequest } from './model/ListScalingPoliciesRequest';
import { ListScalingPoliciesResponse } from './model/ListScalingPoliciesResponse';
import { ListScalingPolicyExecuteLogsRequest } from './model/ListScalingPolicyExecuteLogsRequest';
import { ListScalingPolicyExecuteLogsResponse } from './model/ListScalingPolicyExecuteLogsResponse';
import { ListScalingTagInfosByResourceIdRequest } from './model/ListScalingTagInfosByResourceIdRequest';
import { ListScalingTagInfosByResourceIdResponse } from './model/ListScalingTagInfosByResourceIdResponse';
import { ListScalingTagInfosByTenantIdRequest } from './model/ListScalingTagInfosByTenantIdRequest';
import { ListScalingTagInfosByTenantIdResponse } from './model/ListScalingTagInfosByTenantIdResponse';
import { ListScalingV2PoliciesRequest } from './model/ListScalingV2PoliciesRequest';
import { ListScalingV2PoliciesResponse } from './model/ListScalingV2PoliciesResponse';
import { Matches } from './model/Matches';
import { MetaData } from './model/MetaData';
import { ModifyLb } from './model/ModifyLb';
import { Networks } from './model/Networks';
import { NetworksResult } from './model/NetworksResult';
import { PageInfo } from './model/PageInfo';
import { PauseScalingGroupOption } from './model/PauseScalingGroupOption';
import { PauseScalingGroupRequest } from './model/PauseScalingGroupRequest';
import { PauseScalingGroupResponse } from './model/PauseScalingGroupResponse';
import { PauseScalingPolicyOption } from './model/PauseScalingPolicyOption';
import { PauseScalingPolicyRequest } from './model/PauseScalingPolicyRequest';
import { PauseScalingPolicyResponse } from './model/PauseScalingPolicyResponse';
import { PersonalityInfo } from './model/PersonalityInfo';
import { PersonalityResult } from './model/PersonalityResult';
import { PolicyInstanceQuotas } from './model/PolicyInstanceQuotas';
import { PolicyInstanceResources } from './model/PolicyInstanceResources';
import { PublicIp } from './model/PublicIp';
import { PublicipResult } from './model/PublicipResult';
import { QueryTagsOption } from './model/QueryTagsOption';
import { ResourceTags } from './model/ResourceTags';
import { Resources } from './model/Resources';
import { ResumeScalingGroupOption } from './model/ResumeScalingGroupOption';
import { ResumeScalingGroupRequest } from './model/ResumeScalingGroupRequest';
import { ResumeScalingGroupResponse } from './model/ResumeScalingGroupResponse';
import { ResumeScalingPolicyOption } from './model/ResumeScalingPolicyOption';
import { ResumeScalingPolicyRequest } from './model/ResumeScalingPolicyRequest';
import { ResumeScalingPolicyResponse } from './model/ResumeScalingPolicyResponse';
import { ScalingActivityLogList } from './model/ScalingActivityLogList';
import { ScalingActivityLogV2 } from './model/ScalingActivityLogV2';
import { ScalingAllPolicyDetail } from './model/ScalingAllPolicyDetail';
import { ScalingConfiguration } from './model/ScalingConfiguration';
import { ScalingGroupInstance } from './model/ScalingGroupInstance';
import { ScalingGroups } from './model/ScalingGroups';
import { ScalingInstance } from './model/ScalingInstance';
import { ScalingPoliciesV2 } from './model/ScalingPoliciesV2';
import { ScalingPolicyActionV1 } from './model/ScalingPolicyActionV1';
import { ScalingPolicyActionV2 } from './model/ScalingPolicyActionV2';
import { ScalingPolicyExecuteLogList } from './model/ScalingPolicyExecuteLogList';
import { ScalingPolicyV2MetaData } from './model/ScalingPolicyV2MetaData';
import { ScalingV1PolicyDetail } from './model/ScalingV1PolicyDetail';
import { ScalingV2PolicyDetail } from './model/ScalingV2PolicyDetail';
import { ScheduledPolicy } from './model/ScheduledPolicy';
import { ScheduledTaskDetail } from './model/ScheduledTaskDetail';
import { SecurityGroup } from './model/SecurityGroup';
import { SecurityGroups } from './model/SecurityGroups';
import { SecurityGroupsResult } from './model/SecurityGroupsResult';
import { ShowApiVersionRequest } from './model/ShowApiVersionRequest';
import { ShowApiVersionResponse } from './model/ShowApiVersionResponse';
import { ShowLifeCycleHookRequest } from './model/ShowLifeCycleHookRequest';
import { ShowLifeCycleHookResponse } from './model/ShowLifeCycleHookResponse';
import { ShowPolicyAndInstanceQuotaRequest } from './model/ShowPolicyAndInstanceQuotaRequest';
import { ShowPolicyAndInstanceQuotaResponse } from './model/ShowPolicyAndInstanceQuotaResponse';
import { ShowResourceQuotaRequest } from './model/ShowResourceQuotaRequest';
import { ShowResourceQuotaResponse } from './model/ShowResourceQuotaResponse';
import { ShowScalingConfigRequest } from './model/ShowScalingConfigRequest';
import { ShowScalingConfigResponse } from './model/ShowScalingConfigResponse';
import { ShowScalingGroupRequest } from './model/ShowScalingGroupRequest';
import { ShowScalingGroupResponse } from './model/ShowScalingGroupResponse';
import { ShowScalingPolicyRequest } from './model/ShowScalingPolicyRequest';
import { ShowScalingPolicyResponse } from './model/ShowScalingPolicyResponse';
import { ShowScalingV2PolicyRequest } from './model/ShowScalingV2PolicyRequest';
import { ShowScalingV2PolicyResponse } from './model/ShowScalingV2PolicyResponse';
import { TagsMultiValue } from './model/TagsMultiValue';
import { TagsSingleValue } from './model/TagsSingleValue';
import { Topics } from './model/Topics';
import { UpdateGroupScheduledTaskRequest } from './model/UpdateGroupScheduledTaskRequest';
import { UpdateGroupScheduledTaskResponse } from './model/UpdateGroupScheduledTaskResponse';
import { UpdateLifeCycleHookOption } from './model/UpdateLifeCycleHookOption';
import { UpdateLifeCycleHookRequest } from './model/UpdateLifeCycleHookRequest';
import { UpdateLifeCycleHookResponse } from './model/UpdateLifeCycleHookResponse';
import { UpdateScalingGroupOption } from './model/UpdateScalingGroupOption';
import { UpdateScalingGroupRequest } from './model/UpdateScalingGroupRequest';
import { UpdateScalingGroupResponse } from './model/UpdateScalingGroupResponse';
import { UpdateScalingPolicyOption } from './model/UpdateScalingPolicyOption';
import { UpdateScalingPolicyRequest } from './model/UpdateScalingPolicyRequest';
import { UpdateScalingPolicyResponse } from './model/UpdateScalingPolicyResponse';
import { UpdateScalingV2PolicyOption } from './model/UpdateScalingV2PolicyOption';
import { UpdateScalingV2PolicyRequest } from './model/UpdateScalingV2PolicyRequest';
import { UpdateScalingV2PolicyResponse } from './model/UpdateScalingV2PolicyResponse';
import { UpdateScheduledTaskOption } from './model/UpdateScheduledTaskOption';
import { VersionInfo } from './model/VersionInfo';
import { VmMetaData } from './model/VmMetaData';

export class AsClient {
    public static newBuilder(): ClientBuilder<AsClient> {
            return new ClientBuilder<AsClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 通过生命周期操作令牌或者通过实例ID和生命周期挂钩名称对伸缩实例指定的挂钩进行回调操作。如果在超时时间结束前已完成自定义操作，选择终止或继续完成生命周期操作。如果需要更多时间完成自定义操作，选择延长超时时间，实例保持等待状态的时间将增加1小时。只有实例的生命周期挂钩状态为 HANGING 时才可以进行回调操作。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 伸缩实例生命周期回调
     * @param {string} scalingGroupId 伸缩组标识。
     * @param {CallbackLifeCycleHookOption} bodyparam Bodyparameters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public attachCallbackInstanceLifeCycleHook(attachCallbackInstanceLifeCycleHookRequest?: AttachCallbackInstanceLifeCycleHookRequest): Promise<AttachCallbackInstanceLifeCycleHookResponse> {
        const options = ParamCreater().attachCallbackInstanceLifeCycleHook(attachCallbackInstanceLifeCycleHookRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量移出伸缩组中的实例或批量添加伸缩组外的实例。批量对伸缩组中的实例设置或取消其实例保护属性。批量将伸缩组中的实例转入或移出备用状态。说明：- 单次最多批量操作实例个数为10。批量添加后实例数不能大于伸缩组的最大实例数，批量移出后实例数不能小于伸缩组的最小实例数。- 当伸缩组处于INSERVICE状态且没有伸缩活动时，才能添加实例。- 当伸缩组没有伸缩活动时，才能移出实例。- 向伸缩组中添加实例时，必须保证实例所在的可用区包含于伸缩组的可用区内。- 实例处于INSERVICE状态时才可以进行移出、设置或取消实例保护属性等操作。- 当伸缩组发生自动缩容活动时，设置了实例保护的实例不会被移出伸缩组。- 批量移出弹性伸缩组中的实例时，若该实例加入伸缩组时绑定的监听器和伸缩组本身的监听器相同，会解绑定实例和监听器。若该实例加入伸缩组时绑定的监听器和伸缩组本身的监听器不同，会保留实例和监听器的绑定关系。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加实例
     * @param {string} scalingGroupId 实例ID。
     * @param {BatchAddInstancesOption} bodyparam BodyParameters。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchAddScalingInstances(batchAddScalingInstancesRequest?: BatchAddScalingInstancesRequest): Promise<BatchAddScalingInstancesResponse> {
        const options = ParamCreater().batchAddScalingInstances(batchAddScalingInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除指定弹性伸缩配置。被伸缩组使用的伸缩配置不能被删除。单次最多删除伸缩配置个数为50。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除弹性伸缩配置
     * @param {BatchDeleteScalingConfigOption} bodyparam BodyParameters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteScalingConfigs(batchDeleteScalingConfigsRequest?: BatchDeleteScalingConfigsRequest): Promise<BatchDeleteScalingConfigsResponse> {
        const options = ParamCreater().batchDeleteScalingConfigs(batchDeleteScalingConfigsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量启用、停用或者删除弹性伸缩策略。单次最多批量操作伸缩策略个数为20。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除弹性伸缩策略。
     * @param {BatchDeleteScalingPoliciesOption} bodyparam BodyParameters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteScalingPolicies(batchDeleteScalingPoliciesRequest?: BatchDeleteScalingPoliciesRequest): Promise<BatchDeleteScalingPoliciesResponse> {
        const options = ParamCreater().batchDeleteScalingPolicies(batchDeleteScalingPoliciesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量启用、停用或者删除弹性伸缩策略。单次最多批量操作伸缩策略个数为20。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量停用弹性伸缩策略。
     * @param {BatchPauseScalingPoliciesOption} bodyparam BodyParameters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchPauseScalingPolicies(batchPauseScalingPoliciesRequest?: BatchPauseScalingPoliciesRequest): Promise<BatchPauseScalingPoliciesResponse> {
        const options = ParamCreater().batchPauseScalingPolicies(batchPauseScalingPoliciesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量移出伸缩组中的实例或批量添加伸缩组外的实例。批量对伸缩组中的实例设置或取消其实例保护属性。批量将伸缩组中的实例转入或移出备用状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量设置实例保护
     * @param {string} scalingGroupId 实例ID。
     * @param {BatchProtectInstancesOption} bodyparam BodyParameters。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchProtectScalingInstances(batchProtectScalingInstancesRequest?: BatchProtectScalingInstancesRequest): Promise<BatchProtectScalingInstancesResponse> {
        const options = ParamCreater().batchProtectScalingInstances(batchProtectScalingInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量移出伸缩组中的实例或批量添加伸缩组外的实例。批量对伸缩组中的实例设置或取消其实例保护属性。批量将伸缩组中的实例转入或移出备用状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量移除实例
     * @param {string} scalingGroupId 实例ID。
     * @param {BatchRemoveInstancesOption} bodyparam BodyParameters。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchRemoveScalingInstances(batchRemoveScalingInstancesRequest?: BatchRemoveScalingInstancesRequest): Promise<BatchRemoveScalingInstancesResponse> {
        const options = ParamCreater().batchRemoveScalingInstances(batchRemoveScalingInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量启用、停用或者删除弹性伸缩策略。单次最多批量操作伸缩策略个数为20。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量启用弹性伸缩策略。
     * @param {BatchResumeScalingPoliciesOption} bodyparam BodyParameters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchResumeScalingPolicies(batchResumeScalingPoliciesRequest?: BatchResumeScalingPoliciesRequest): Promise<BatchResumeScalingPoliciesResponse> {
        const options = ParamCreater().batchResumeScalingPolicies(batchResumeScalingPoliciesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量移出伸缩组中的实例或批量添加伸缩组外的实例。批量对伸缩组中的实例设置或取消其实例保护属性。批量将伸缩组中的实例转入或移出备用状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量将实例转为备用状态
     * @param {string} scalingGroupId 实例ID。
     * @param {BatchEnterStandbyInstancesOption} bodyparam BodyParameters。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchSetScalingInstancesStandby(batchSetScalingInstancesStandbyRequest?: BatchSetScalingInstancesStandbyRequest): Promise<BatchSetScalingInstancesStandbyResponse> {
        const options = ParamCreater().batchSetScalingInstancesStandby(batchSetScalingInstancesStandbyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量移出伸缩组中的实例或批量添加伸缩组外的实例。批量对伸缩组中的实例设置或取消其实例保护属性。批量将伸缩组中的实例转入或移出备用状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量取消实例保护
     * @param {string} scalingGroupId 实例ID。
     * @param {BatchUnprotectInstancesOption} bodyparam BodyParameters。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchUnprotectScalingInstances(batchUnprotectScalingInstancesRequest?: BatchUnprotectScalingInstancesRequest): Promise<BatchUnprotectScalingInstancesResponse> {
        const options = ParamCreater().batchUnprotectScalingInstances(batchUnprotectScalingInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量移出伸缩组中的实例或批量添加伸缩组外的实例。批量对伸缩组中的实例设置或取消其实例保护属性。批量将伸缩组中的实例转入或移出备用状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量将实例移出备用状态
     * @param {string} scalingGroupId 实例ID。
     * @param {BatchExitStandByInstancesOption} bodyparam BodyParameters。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchUnsetScalingInstancesStantby(batchUnsetScalingInstancesStantbyRequest?: BatchUnsetScalingInstancesStantbyRequest): Promise<BatchUnsetScalingInstancesStantbyResponse> {
        const options = ParamCreater().batchUnsetScalingInstancesStantby(batchUnsetScalingInstancesStantbyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建计划任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建计划任务
     * @param {string} scalingGroupId 伸缩组ID
     * @param {CreateScheduledTaskOption} bodyparam 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createGroupScheduledTask(createGroupScheduledTaskRequest?: CreateGroupScheduledTaskRequest): Promise<CreateGroupScheduledTaskResponse> {
        const options = ParamCreater().createGroupScheduledTask(createGroupScheduledTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建生命周期挂钩，可为伸缩组添加一个或多个生命周期挂钩，最多添加5个。添加生命周期挂钩后，当伸缩组进行伸缩活动时，实例将被生命周期挂钩挂起并置于等待状态（正在加入伸缩组或正在移出伸缩组），实例将保持此状态直至超时时间结束或者用户手动回调。用户能够在实例保持等待状态的时间段内执行自定义操作，例如，用户可以在新启动的实例上安装或配置软件，也可以在实例终止前从实例中下载日志文件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建生命周期挂钩
     * @param {string} scalingGroupId 伸缩组标识。
     * @param {CreateLifeCycleHookOption} bodyparam BodyParameters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createLifyCycleHook(createLifyCycleHookRequest?: CreateLifyCycleHookRequest): Promise<CreateLifyCycleHookResponse> {
        const options = ParamCreater().createLifyCycleHook(createLifyCycleHookRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建弹性伸缩配置。伸缩配置是伸缩组内实例（弹性云服务器云主机）的模板，定义了伸缩组内待添加的实例的规格数据。伸缩配置与伸缩组是解耦的，同一伸缩配置可以被多个伸缩组使用。默认最多可以创建100个伸缩配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建弹性伸缩配置
     * @param {CreateScalingConfigOption} bodyparam BodyParameters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createScalingConfig(createScalingConfigRequest?: CreateScalingConfigRequest): Promise<CreateScalingConfigResponse> {
        const options = ParamCreater().createScalingConfig(createScalingConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 伸缩组是具有相同应用场景的实例的集合，是启停伸缩策略和进行伸缩活动的基本单位。伸缩组内定义了最大实例数、期望实例数、最小实例数、虚拟私有云、子网、负载均衡等信息。默认最多可以创建10个伸缩组。如果伸缩组配置了负载均衡，在添加或移除实例时，会自动为实例绑定或解绑负载均衡监听器。如果伸缩组使用负载均衡健康检查方式，伸缩组中的实例需要启用负载均衡器的监听端口才能通过健康检查。端口启用可在安全组中进行配置，可参考添加安全组规则进行操作。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建弹性伸缩组
     * @param {CreateScalingGroupOption} bodyparam BodyParameters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createScalingGroup(createScalingGroupRequest?: CreateScalingGroupRequest): Promise<CreateScalingGroupResponse> {
        const options = ParamCreater().createScalingGroup(createScalingGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 给弹性伸缩组配置通知功能。每调用一次该接口，伸缩组即配置一个通知主题及其通知场景，每个伸缩组最多可以增加5个主题。通知主题由用户事先在SMN创建并进行订阅，当通知主题对应的通知场景出现时，伸缩组会向用户的订阅终端发送通知。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 配置伸缩组通知
     * @param {string} scalingGroupId 伸缩组标识。
     * @param {CreateNotificationOption} bodyparam BodyParameters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createScalingNotification(createScalingNotificationRequest?: CreateScalingNotificationRequest): Promise<CreateScalingNotificationResponse> {
        const options = ParamCreater().createScalingNotification(createScalingNotificationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建弹性伸缩策略。伸缩策略定义了伸缩组内实例的扩张和收缩操作。如果执行伸缩策略造成伸缩组期望实例数与伸缩组内实例数不符，弹性伸缩会自动调整实例资源，以匹配期望实例数。当前伸缩策略支持告警触发策略，周期触发策略，定时触发策略。在策略执行具体动作中，可设置实例变化的个数，或根据当前实例的百分比数进行伸缩。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建弹性伸缩策略
     * @param {CreateScalingPolicyOption} bodyparam BodyParameters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createScalingPolicy(createScalingPolicyRequest?: CreateScalingPolicyRequest): Promise<CreateScalingPolicyResponse> {
        const options = ParamCreater().createScalingPolicy(createScalingPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建或删除指定资源的标签。每个伸缩组最多添加10个标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建标签
     * @param {'scaling_group_tag'} resourceType 资源类型，枚举类：scaling_group_tag。scaling_group_tag表示资源类型为伸缩组。
     * @param {string} resourceId 资源ID。
     * @param {CreateTagsOption} bodyparam BodyParameters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createScalingTagInfo(createScalingTagInfoRequest?: CreateScalingTagInfoRequest): Promise<CreateScalingTagInfoResponse> {
        const options = ParamCreater().createScalingTagInfo(createScalingTagInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除计划任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除计划任务
     * @param {string} scalingGroupId 伸缩组ID
     * @param {string} scheduledTaskId 计划任务ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteGroupScheduledTask(deleteGroupScheduledTaskRequest?: DeleteGroupScheduledTaskRequest): Promise<DeleteGroupScheduledTaskResponse> {
        const options = ParamCreater().deleteGroupScheduledTask(deleteGroupScheduledTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除一个指定生命周期挂钩。伸缩组进行伸缩活动时，不允许删除该伸缩组内的生命周期挂钩。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除生命周期挂钩
     * @param {string} scalingGroupId 伸缩组标识。
     * @param {string} lifecycleHookName 生命周期挂钩标识。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteLifecycleHook(deleteLifecycleHookRequest?: DeleteLifecycleHookRequest): Promise<DeleteLifecycleHookResponse> {
        const options = ParamCreater().deleteLifecycleHook(deleteLifecycleHookRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除一个指定弹性伸缩配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除弹性伸缩配置
     * @param {string} scalingConfigurationId 伸缩配置ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteScalingConfig(deleteScalingConfigRequest?: DeleteScalingConfigRequest): Promise<DeleteScalingConfigResponse> {
        const options = ParamCreater().deleteScalingConfig(deleteScalingConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除一个指定弹性伸缩组。force_delete属性表示如果伸缩组存在ECS实例或正在进行伸缩活动，是否强制删除伸缩组并移出和释放ECS实例。默认值为no，表示不强制删除伸缩组。如果force_delete的值为no，必须满足以下两个条件，才能删除伸缩组：条件一：伸缩组没有正在进行的伸缩活动。条件二：伸缩组当前的ECS实例数量（current_instance_number）为0。如果force_delete的值为yes，伸缩组会被置于DELETING状态，拒绝接收新的伸缩活动请求，然后等待已有的伸缩活动完成，最后将伸缩组内所有ECS实例移出伸缩组（用户手动添加的ECS实例会被移出伸缩组，弹性伸缩自动创建的ECS实例会被自动删除）并删除伸缩组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除弹性伸缩组
     * @param {string} scalingGroupId 伸缩组ID。
     * @param {'yes' | 'no'} [forceDelete] 是否强制删除伸缩组。默认为no；可选值为yes或no。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteScalingGroup(deleteScalingGroupRequest?: DeleteScalingGroupRequest): Promise<DeleteScalingGroupResponse> {
        const options = ParamCreater().deleteScalingGroup(deleteScalingGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 从弹性伸缩组中移出一个指定实例。实例处于INSERVICE且移出后实例数不能小于伸缩组的最小实例数时才可以移出。当伸缩组没有伸缩活动时，才能移出实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 移出弹性伸缩组实例
     * @param {string} instanceId 实例ID，可参考[查询弹性伸缩组中的实例列表](https://support.huaweicloud.com/api-as/as_06_0301.html)获取。
     * @param {'yes' | 'no'} [instanceDelete] 实例移出伸缩组，是否删除云服务器实例。默认为no；可选值为yes或no。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteScalingInstance(deleteScalingInstanceRequest?: DeleteScalingInstanceRequest): Promise<DeleteScalingInstanceResponse> {
        const options = ParamCreater().deleteScalingInstance(deleteScalingInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定的弹性伸缩组中指定的通知。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除伸缩组通知
     * @param {string} scalingGroupId 伸缩组标识。
     * @param {string} topicUrn SMN服务中Topic的唯一的资源标识。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteScalingNotification(deleteScalingNotificationRequest?: DeleteScalingNotificationRequest): Promise<DeleteScalingNotificationResponse> {
        const options = ParamCreater().deleteScalingNotification(deleteScalingNotificationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除一个指定弹性伸缩策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除弹性伸缩策略
     * @param {string} scalingPolicyId 伸缩策略ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteScalingPolicy(deleteScalingPolicyRequest?: DeleteScalingPolicyRequest): Promise<DeleteScalingPolicyResponse> {
        const options = ParamCreater().deleteScalingPolicy(deleteScalingPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建或删除指定资源的标签。每个伸缩组最多添加10个标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除标签
     * @param {'scaling_group_tag'} resourceType 资源类型，枚举类：scaling_group_tag。scaling_group_tag表示资源类型为伸缩组。
     * @param {string} resourceId 资源ID。
     * @param {DeleteTagsOption} bodyparam BodyParameters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteScalingTagInfo(deleteScalingTagInfoRequest?: DeleteScalingTagInfoRequest): Promise<DeleteScalingTagInfoResponse> {
        const options = ParamCreater().deleteScalingTagInfo(deleteScalingTagInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 立即执行或启用或停止一个指定弹性伸缩策略。当伸缩组、伸缩策略状态处于INSERVICE时，伸缩策略才能被正确执行，否则会执行失败。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 执行弹性伸缩策略。
     * @param {string} scalingPolicyId 伸缩策略ID。
     * @param {ExecuteScalingPolicyOption} bodyparam BodyParameters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public executeScalingPolicy(executeScalingPolicyRequest?: ExecuteScalingPolicyRequest): Promise<ExecuteScalingPolicyResponse> {
        const options = ParamCreater().executeScalingPolicy(executeScalingPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询计划任务列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询计划任务列表
     * @param {string} scalingGroupId 伸缩组ID
     * @param {number} [limit] 查询的记录条数
     * @param {string} [marker] 查询的分页marker
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGroupScheduledTasks(listGroupScheduledTasksRequest?: ListGroupScheduledTasksRequest): Promise<ListGroupScheduledTasksResponse> {
        const options = ParamCreater().listGroupScheduledTasks(listGroupScheduledTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加生命周期挂钩后，当伸缩组进行伸缩活动时，实例将被挂钩挂起并置于等待状态，根据输入条件过滤查询弹性伸缩组中伸缩实例的挂起信息。可根据实例ID进行条件过滤查询。若不加过滤条件默认查询指定伸缩组内所有实例挂起信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询伸缩实例挂起信息
     * @param {string} scalingGroupId 伸缩组ID。
     * @param {string} [instanceId] 伸缩实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHookInstances(listHookInstancesRequest?: ListHookInstancesRequest): Promise<ListHookInstancesResponse> {
        const options = ParamCreater().listHookInstances(listHookInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据伸缩组ID查询生命周期挂钩列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询生命周期挂钩列表
     * @param {string} scalingGroupId 伸缩组标识。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLifeCycleHooks(listLifeCycleHooksRequest?: ListLifeCycleHooksRequest): Promise<ListLifeCycleHooksResponse> {
        const options = ParamCreater().listLifeCycleHooks(listLifeCycleHooksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据项目ID查询指定资源类型的资源实例。资源、资源tag默认按照创建时间倒序。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源实例
     * @param {'scaling_group_tag'} resourceType 资源类型，枚举类：SCALING_GROUP_TAG。
     * @param {QueryTagsOption} bodyparam BodyParameters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listResourceInstances(listResourceInstancesRequest?: ListResourceInstancesRequest): Promise<ListResourceInstancesResponse> {
        const options = ParamCreater().listResourceInstances(listResourceInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据输入条件过滤查询伸缩活动日志。查询结果分页显示。可根据起始时间，截止时间，起始行号，记录数进行条件过滤查询。若不加过滤条件默认查询最多20条伸缩活动日志信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询伸缩活动日志
     * @param {string} scalingGroupId 伸缩组ID。
     * @param {string} [startTime] 查询的起始时间，格式是“yyyy-MM-ddThh:mm:ssZ”。
     * @param {string} [endTime] 查询的截止时间，格式是“yyyy-MM-ddThh:mm:ssZ”。
     * @param {number} [startNumber] 查询的起始行号，默认为0。
     * @param {number} [limit] 查询记录数，默认20，最大100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listScalingActivityLogs(listScalingActivityLogsRequest?: ListScalingActivityLogsRequest): Promise<ListScalingActivityLogsResponse> {
        const options = ParamCreater().listScalingActivityLogs(listScalingActivityLogsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据输入条件过滤查询伸缩活动日志，支持查询实例伸缩、ELB迁移、实例备用等类型活动。查询结果分页显示。查询伸缩活动日志V2版本与V1版本区别在于，V2版本展示了更详细的实例伸缩日志，如ELB迁移日志，实例备用日志信息。可根据起始时间，截止时间，起始行号，记录数，伸缩活动类型等作为条件过滤查询。若不加过滤条件默认查询最多20条伸缩活动日志信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询伸缩活动日志v2版本
     * @param {string} scalingGroupId 伸缩组ID。
     * @param {string} [logId] 伸缩活动日志ID
     * @param {string} [startTime] 查询的起始时间，格式是“yyyy-MM-ddThh:mm:ssZ”。
     * @param {string} [endTime] 查询的截止时间，格式是“yyyy-MM-ddThh:mm:ssZ”。
     * @param {number} [startNumber] 查询的起始行号，默认为0。
     * @param {number} [limit] 查询记录数，默认20，最大100。
     * @param {'NORMAL' | 'MANNUAL_REMOVE' | 'MANNUAL_DELETE' | 'MANNUAL_ADD' | 'ELB_CHECK_DELETE' | 'AUDIT_CHECK_DELETE' | 'MODIFY_ELB'} [type] 查询的伸缩活动类型（查询多类型使用逗号分隔）： - NORMAL：普通伸缩活动 - MANNUAL_REMOVE：从伸缩组手动移除实例 - MANNUAL_DELETE：从伸缩组手动移除并删除实例 - MANNUAL_ADD：实例手动加入伸缩组。 - ELB_CHECK_DELETE：ELB检查移除并删除实例。 - AUDIT_CHECK_DELETE：通过审计openstack移除并删除实例。 - DIFF：期望实例数与实际实例数不一致。 - MODIFY_ELB：LB迁移。 - ENTER_STANDBY：实例转入备用。 - EXIT_STANDBY：实例移出备用。
     * @param {'SUCCESS' | 'FAIL' | 'DOING'} [status] 查询的伸缩活动状态：SUCCESS：成功；FAIL：失败；DOING：伸缩中
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listScalingActivityV2Logs(listScalingActivityV2LogsRequest?: ListScalingActivityV2LogsRequest): Promise<ListScalingActivityV2LogsResponse> {
        const options = ParamCreater().listScalingActivityV2Logs(listScalingActivityV2LogsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据输入条件过滤查询弹性伸缩配置。查询结果分页显示。可以根据伸缩配置名称，镜像ID，起始行号，记录条数进行条件过滤查询。若不加过滤条件默认最多查询租户下20条伸缩配置信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询弹性伸缩配置列表
     * @param {string} [scalingConfigurationName] 伸缩配置名称。
     * @param {string} [imageId] 镜像ID，同imageRef。
     * @param {number} [startNumber] 查询的起始行号，默认为0。
     * @param {number} [limit] 查询的记录条数，默认为20。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listScalingConfigs(listScalingConfigsRequest?: ListScalingConfigsRequest): Promise<ListScalingConfigsResponse> {
        const options = ParamCreater().listScalingConfigs(listScalingConfigsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据输入条件过滤查询弹性伸缩组列表。查询结果分页显示。可根据伸缩组名称，伸缩配置ID，伸缩组状态，企业项目ID，起始行号，记录条数进行条件过滤查询。若不加过滤条件默认最多查询租户下20条伸缩组信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询弹性伸缩组列表
     * @param {string} [scalingGroupName] 伸缩组名称
     * @param {string} [scalingConfigurationId] 伸缩配置ID，通过查询弹性伸缩配置列表接口获取，详见[查询弹性伸缩配置列表](https://support.huaweicloud.com/api-as/as_06_0202.html)。
     * @param {'INSERVICE' | 'PAUSED' | 'ERROR' | 'DELETING'} [scalingGroupStatus] 伸缩组状态，取值如下：  - INSERVICE：正常状态 - PAUSED：停用状态 - ERROR：异常状态 - DELETING：删除中 - FREEZED：已冻结
     * @param {number} [startNumber] 查询的起始行号，默认为0。最小值为0，最大值没有限制。
     * @param {number} [limit] 查询的记录条数，默认为20。取值范围为：0~100。
     * @param {string} [enterpriseProjectId] 企业项目ID，当传入all_granted_eps时表示查询该用户所有授权的企业项目下的伸缩组列表，如何获取企业项目ID，请参考[查询企业项目列表](https://support.huaweicloud.com/api-em/zh-cn_topic_0121230880.html)。说明：华为云帐号和拥有全局权限的IAM用户可以查询该用户所有伸缩组列表。授予部分企业项目的IAM用户，如果拥有超过100个企业项目，则只能返回有权限的前100个企业项目对应的伸缩组列表。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listScalingGroups(listScalingGroupsRequest?: ListScalingGroupsRequest): Promise<ListScalingGroupsResponse> {
        const options = ParamCreater().listScalingGroups(listScalingGroupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据输入条件过滤查询弹性伸缩组中实例信息。查询结果分页显示。可根据实例在伸缩组中的生命周期状态，实例健康状态，实例保护状态，起始行号，记录条数进行条件过滤查询。若不加过滤条件默认查询组内最多20条实例信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询弹性伸缩组中的实例列表
     * @param {string} scalingGroupId 伸缩组ID。
     * @param {'INSERVICE' | 'PENDING' | 'REMOVING' | 'PENDING_WAIT' | 'REMOVING_WAIT' | 'STANDBY' | 'ENTERING_STANDBY'} [lifeCycleState] 实例在伸缩组中的生命周期状态：INSERVICE： 正在使用。PENDING：正在加入伸缩组。REMOVING：正在移出伸缩组。PENDING_WAIT：正在加入伸缩组：等待。REMOVING_WAIT：正在移出伸缩组：等待。
     * @param {'INITIALIZING' | 'NORMAL' | 'ERROR'} [healthStatus] 实例健康状态：INITIALIZING：初始化。NORMAL：正常。ERROR：异常
     * @param {'true' | 'false'} [protectFromScalingDown] 实例保护状态：true：已设置实例保护。false：未设置实例保护。
     * @param {number} [startNumber] 查询的起始行号，默认为0。
     * @param {number} [limit] 查询的记录条数，默认为20。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listScalingInstances(listScalingInstancesRequest?: ListScalingInstancesRequest): Promise<ListScalingInstancesResponse> {
        const options = ParamCreater().listScalingInstances(listScalingInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据伸缩组ID查询指定弹性伸缩组的通知列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询伸缩组通知列表
     * @param {string} scalingGroupId 伸缩组标识。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listScalingNotifications(listScalingNotificationsRequest?: ListScalingNotificationsRequest): Promise<ListScalingNotificationsResponse> {
        const options = ParamCreater().listScalingNotifications(listScalingNotificationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据输入条件过滤查询弹性伸缩策略。查询结果分页显示。可根据伸缩策略名称，策略类型，伸缩策略ID，起始行号，记录数进行条件过滤查询。若不加过滤条件默认查询租户下指定伸缩组内最多20条伸缩策略信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询弹性伸缩策略列表
     * @param {string} scalingGroupId 伸缩组ID。
     * @param {string} [scalingPolicyName] 伸缩策略名称。
     * @param {'ALARM' | 'SCHEDULED' | 'RECURRENCE'} [scalingPolicyType] 策略类型。
     * @param {string} [scalingPolicyId] 伸缩策略ID。
     * @param {number} [startNumber] 查询的起始行号，默认为0。
     * @param {number} [limit] 查询记录数，默认20，最大100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listScalingPolicies(listScalingPoliciesRequest?: ListScalingPoliciesRequest): Promise<ListScalingPoliciesResponse> {
        const options = ParamCreater().listScalingPolicies(listScalingPoliciesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据输入条件过滤查询策略执行的历史记录。查询结果分页显示。可根据日志ID，伸缩资源类型，伸缩资源ID，策略执行类型，查询额起始，查询截止时间，查询起始行号，查询记录数进行条件过滤查询。若不加过滤条件默认查询最多20条策略执行日志信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询策略执行日志
     * @param {string} scalingPolicyId 伸缩策略ID。
     * @param {string} [logId] 日志ID。
     * @param {'SCALING_GROUP' | 'BANDWIDTH'} [scalingResourceType] 伸缩资源类型：伸缩组：SCALING_GROUP。带宽：BANDWIDTH
     * @param {string} [scalingResourceId] 伸缩资源ID。
     * @param {'SCHEDULED' | 'RECURRENCE' | 'ALARM' | 'MANUAL'} [executeType] 策略执行类型：SCHEDULED：自动触发（定时）。RECURRENCE：自动触发（周期）。ALARM：自动触发（告警）。MANUAL：手动触发。
     * @param {string} [startTime] 查询的起始时间，格式是“yyyy-MM-ddThh:mm:ssZ”。
     * @param {string} [endTime] 查询的截止时间，格式是“yyyy-MM-ddThh:mm:ssZ”。
     * @param {number} [startNumber] 查询的起始行号，默认为0。
     * @param {number} [limit] 查询记录数，默认20，最大100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listScalingPolicyExecuteLogs(listScalingPolicyExecuteLogsRequest?: ListScalingPolicyExecuteLogsRequest): Promise<ListScalingPolicyExecuteLogsResponse> {
        const options = ParamCreater().listScalingPolicyExecuteLogs(listScalingPolicyExecuteLogsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据项目ID和资源ID查询指定资源类型的资源标签列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源标签
     * @param {'scaling_group_tag'} resourceType 资源类型，枚举类：scaling_group_tag。scaling_group_tag表示资源类型为伸缩组。
     * @param {string} resourceId 资源ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listScalingTagInfosByResourceId(listScalingTagInfosByResourceIdRequest?: ListScalingTagInfosByResourceIdRequest): Promise<ListScalingTagInfosByResourceIdResponse> {
        const options = ParamCreater().listScalingTagInfosByResourceId(listScalingTagInfosByResourceIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据项目ID查询指定资源类型的标签列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询标签
     * @param {'scaling_group_tag'} resourceType 资源类型，枚举类：scaling_group_tag。scaling_group_tag表示资源类型为伸缩组。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listScalingTagInfosByTenantId(listScalingTagInfosByTenantIdRequest?: ListScalingTagInfosByTenantIdRequest): Promise<ListScalingTagInfosByTenantIdResponse> {
        const options = ParamCreater().listScalingTagInfosByTenantId(listScalingTagInfosByTenantIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 启用或停止一个指定弹性伸缩组。已停用状态的伸缩组，不会自动触发任何伸缩活动。当伸缩组正在进行伸缩活动，即使停用，正在进行的伸缩活动也不会立即停止。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停止弹性伸缩组
     * @param {string} scalingGroupId 伸缩组ID
     * @param {PauseScalingGroupOption} bodyParam BodyParamters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public pauseScalingGroup(pauseScalingGroupRequest?: PauseScalingGroupRequest): Promise<PauseScalingGroupResponse> {
        const options = ParamCreater().pauseScalingGroup(pauseScalingGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 立即执行或启用或停止一个指定弹性伸缩策略。当伸缩组、伸缩策略状态处于INSERVICE时，伸缩策略才能被正确执行，否则会执行失败。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停止弹性伸缩策略。
     * @param {string} scalingPolicyId 伸缩策略ID。
     * @param {PauseScalingPolicyOption} bodyparam BodyParameters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public pauseScalingPolicy(pauseScalingPolicyRequest?: PauseScalingPolicyRequest): Promise<PauseScalingPolicyResponse> {
        const options = ParamCreater().pauseScalingPolicy(pauseScalingPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 启用或停止一个指定弹性伸缩组。已停用状态的伸缩组，不会自动触发任何伸缩活动。当伸缩组正在进行伸缩活动，即使停用，正在进行的伸缩活动也不会立即停止。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启用弹性伸缩组
     * @param {string} scalingGroupId 伸缩组ID
     * @param {ResumeScalingGroupOption} bodyParam BodyParamters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resumeScalingGroup(resumeScalingGroupRequest?: ResumeScalingGroupRequest): Promise<ResumeScalingGroupResponse> {
        const options = ParamCreater().resumeScalingGroup(resumeScalingGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 立即执行或启用或停止一个指定弹性伸缩策略。当伸缩组、伸缩策略状态处于INSERVICE时，伸缩策略才能被正确执行，否则会执行失败。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启用弹性伸缩策略。
     * @param {string} scalingPolicyId 伸缩策略ID。
     * @param {ResumeScalingPolicyOption} bodyparam BodyParameters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resumeScalingPolicy(resumeScalingPolicyRequest?: ResumeScalingPolicyRequest): Promise<ResumeScalingPolicyResponse> {
        const options = ParamCreater().resumeScalingPolicy(resumeScalingPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据伸缩组ID及生命周期挂钩名称查询指定的生命周期挂钩详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询生命周期挂钩详情
     * @param {string} scalingGroupId 伸缩组标识。
     * @param {string} lifecycleHookName 生命周期挂钩标识。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showLifeCycleHook(showLifeCycleHookRequest?: ShowLifeCycleHookRequest): Promise<ShowLifeCycleHookResponse> {
        const options = ParamCreater().showLifeCycleHook(showLifeCycleHookRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据伸缩组ID查询指定弹性伸缩组下的伸缩策略和伸缩实例的配额总数及已使用配额数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询弹性伸缩策略和伸缩实例配额
     * @param {string} scalingGroupId 伸缩组ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPolicyAndInstanceQuota(showPolicyAndInstanceQuotaRequest?: ShowPolicyAndInstanceQuotaRequest): Promise<ShowPolicyAndInstanceQuotaResponse> {
        const options = ParamCreater().showPolicyAndInstanceQuota(showPolicyAndInstanceQuotaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定租户下的弹性伸缩组、伸缩配置、伸缩带宽策略、伸缩策略和伸缩实例的配额总数及已使用配额数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询配额
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showResourceQuota(showResourceQuotaRequest?: ShowResourceQuotaRequest): Promise<ShowResourceQuotaResponse> {
        const options = ParamCreater().showResourceQuota();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据伸缩配置ID查询一个弹性伸缩配置的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询弹性伸缩配置详情
     * @param {string} scalingConfigurationId 伸缩配置ID，查询唯一配置。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showScalingConfig(showScalingConfigRequest?: ShowScalingConfigRequest): Promise<ShowScalingConfigResponse> {
        const options = ParamCreater().showScalingConfig(showScalingConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询一个指定弹性伸缩组详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询弹性伸缩组详情
     * @param {string} scalingGroupId 伸缩组ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showScalingGroup(showScalingGroupRequest?: ShowScalingGroupRequest): Promise<ShowScalingGroupResponse> {
        const options = ParamCreater().showScalingGroup(showScalingGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定弹性伸缩策略信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询弹性伸缩策略详情
     * @param {string} scalingPolicyId 伸缩组ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showScalingPolicy(showScalingPolicyRequest?: ShowScalingPolicyRequest): Promise<ShowScalingPolicyResponse> {
        const options = ParamCreater().showScalingPolicy(showScalingPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新计划任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新计划任务
     * @param {string} scalingGroupId 伸缩组ID
     * @param {string} scheduledTaskId 计划任务ID
     * @param {UpdateScheduledTaskOption} bodyparam BodyParameters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateGroupScheduledTask(updateGroupScheduledTaskRequest?: UpdateGroupScheduledTaskRequest): Promise<UpdateGroupScheduledTaskResponse> {
        const options = ParamCreater().updateGroupScheduledTask(updateGroupScheduledTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改一个指定生命周期挂钩中的信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改生命周期挂钩
     * @param {string} scalingGroupId 伸缩组标识。
     * @param {string} lifecycleHookName 生命周期挂钩标识。
     * @param {UpdateLifeCycleHookOption} bodyparam Bodyparameters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateLifeCycleHook(updateLifeCycleHookRequest?: UpdateLifeCycleHookRequest): Promise<UpdateLifeCycleHookResponse> {
        const options = ParamCreater().updateLifeCycleHook(updateLifeCycleHookRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改一个指定弹性伸缩组中的信息。更换伸缩组的伸缩配置，伸缩组中已经存在的使用之前伸缩配置创建的云服务器云主机不受影响。伸缩组为没有正在进行的伸缩活动时，可以修改伸缩组的子网、可用区和负载均衡配置。当伸缩组的期望实例数改变时，会触发伸缩活动加入或移出实例。期望实例数必须大于或等于最小实例数，必须小于或等于最大实例数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改弹性伸缩组
     * @param {string} scalingGroupId 伸缩组ID
     * @param {UpdateScalingGroupOption} bodyparam BodyParameters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateScalingGroup(updateScalingGroupRequest?: UpdateScalingGroupRequest): Promise<UpdateScalingGroupResponse> {
        const options = ParamCreater().updateScalingGroup(updateScalingGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改指定弹性伸缩策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改弹性伸缩策略
     * @param {string} scalingPolicyId 伸缩策略ID。
     * @param {UpdateScalingPolicyOption} bodyparam BodyParameters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateScalingPolicy(updateScalingPolicyRequest?: UpdateScalingPolicyRequest): Promise<UpdateScalingPolicyResponse> {
        const options = ParamCreater().updateScalingPolicy(updateScalingPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询弹性伸缩API所有版本信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询弹性伸缩API所有版本信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApiVersions(listApiVersionsRequest?: ListApiVersionsRequest): Promise<ListApiVersionsResponse> {
        const options = ParamCreater().listApiVersions();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据租户id和资源id查询指定资源类型的标签列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询弹性伸缩API指定版本信息
     * @param {'v1' | 'v2'} apiVersion API版本ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showApiVersion(showApiVersionRequest?: ShowApiVersionRequest): Promise<ShowApiVersionResponse> {
        const options = ParamCreater().showApiVersion(showApiVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 可针对不同类型资源如伸缩组或带宽，创建弹性伸缩策略。创建弹性伸缩策略V2版本与V1版本的区别在于，V2版本支持创建对带宽资源进行调整的策略，通过伸缩资源类型区分伸缩资源。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建弹性伸缩策略（V2版本）
     * @param {CreateScalingPolicyV2Option} bodyparam BodyParameters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createScalingV2Policy(createScalingV2PolicyRequest?: CreateScalingV2PolicyRequest): Promise<CreateScalingV2PolicyResponse> {
        const options = ParamCreater().createScalingV2Policy(createScalingV2PolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据输入条件过滤查询弹性伸缩策略，支持查询当前租户下全量伸缩策略。查询结果分页显示。可根据伸缩资源ID，伸缩资源类型，伸缩策略名称，伸缩策略ID，告警ID，企业项目ID，起始行号，记录数，排序方式等条件进行过滤查询。若不加过滤添加默认查询该租户下最多20条伸缩策略信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询弹性伸缩策略全量列表（V2版本）
     * @param {string} [scalingResourceId] 伸缩组ID。
     * @param {'SCALING_GROUP' | 'BANDWIDTH'} [scalingResourceType] 伸缩资源类型：伸缩组：SCALING_GROUP；带宽：BANDWIDTH
     * @param {string} [scalingPolicyName] 伸缩策略名称。
     * @param {'ALARM' | 'SCHEDULED' | 'RECURRENCE'} [scalingPolicyType] 策略类型。  告警策略：ALARM ,定时策略：SCHEDULED, 周期策略：RECURRENCE
     * @param {string} [scalingPolicyId] 伸缩策略ID。
     * @param {number} [startNumber] 查询的起始行号，默认为0。
     * @param {number} [limit] 查询记录数，默认20，最大100。
     * @param {'POLICY_NAME' | 'TRIGGER_CONDITION' | 'CREATE_TIME'} [sortBy] 排序方法POLICY_NAME：根据策略名称排序;TRIGGER_CONDITION：根据触发条件排序，如升序下，告警策略最先，其余根据最近一次触发时间升序排列;CREATE_TIME：根据策略的创建时间排序。
     * @param {'ASC' | 'DESC'} [order] 排序顺序ASC：升序；DESC：降序
     * @param {string} [enterpriseProjectId] 企业项目ID。当scaling_resource_type指定为：SCALING_GROUP传入all_granted_eps时：华为云帐号和拥有全局权限的IAM用户可以查询该用户所有的伸缩组对应的伸缩策略。授予部分企业项目的IAM用户，可以查询该用户所有授权企业项目下的伸缩组对应的伸缩策略。说明：如果授予部分企业项目的IAM用户拥有超过100个企业项目，则只能返回有权限的前100个企业项目对应伸缩组的伸缩策略列表。当scaling_resource_type指定为：BANDWIDTH传入all_granted_eps时:华为云帐号和拥有全局权限的IAM用户可以查询该用户所有带宽对应的伸缩策略。授予部分企业项目的IAM用户，可以查询该用户所有授权企业项目下的带宽对应的伸缩策略，带宽在all_granted_eps场景下返回策略请参见[《EIP接口参口》查询带宽列表](https://support.huaweicloud.com/api-eip/eip_apiBandwidth_0002.html)。不指定scaling_resource_type当传入all_granted_eps时：华为云帐号和拥有全局权限的IAM用户可以查询该用户所有的伸缩组和带宽对应的伸缩策略。授予部分企业项目的IAM用户，可以查询该用户所有授权企业项目下的伸缩组和带宽对应的伸缩策略。说明：如果授予部分企业项目的IAM用户拥有超过100个企业项目，则只能返回有权限的前100个企业项目对应伸缩组的伸缩策略列表；带宽在all_granted_eps场景下返回策略请参见[《EIP接口参口》查询带宽列表](https://support.huaweicloud.com/api-eip/eip_apiBandwidth_0002.html)。
     * @param {string} [alarmId] 告警ID，即告警规则的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAllScalingV2Policies(listAllScalingV2PoliciesRequest?: ListAllScalingV2PoliciesRequest): Promise<ListAllScalingV2PoliciesResponse> {
        const options = ParamCreater().listAllScalingV2Policies(listAllScalingV2PoliciesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据输入条件过滤查询弹性伸缩策略。查询结果分页显示。查询弹性伸缩策略V2版本与V1版本的区别在于，V2版本响应含伸缩资源类型。可根据伸缩策略名称，策略类型，伸缩策略ID，起始行号，记录数进行条件过滤查询。若不加过滤条件默认查询该租户下指定资源下最多20条伸缩策略信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询弹性伸缩策略列表（V2版本）
     * @param {string} scalingResourceId 伸缩组ID。
     * @param {string} [scalingPolicyName] 伸缩策略名称。
     * @param {string} [scalingPolicyType] 策略类型：  - 告警策略：ALARM - 定时策略：SCHEDULED - 周期策略：RECURRENCE
     * @param {string} [scalingPolicyId] 伸缩策略ID。
     * @param {number} [startNumber] 查询的起始行号，默认为0。
     * @param {number} [limit] 查询记录数，默认20，最大100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listScalingV2Policies(listScalingV2PoliciesRequest?: ListScalingV2PoliciesRequest): Promise<ListScalingV2PoliciesResponse> {
        const options = ParamCreater().listScalingV2Policies(listScalingV2PoliciesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定弹性伸缩策略信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定弹性伸缩策略详情（V2版本）
     * @param {string} scalingPolicyId 伸缩组ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showScalingV2Policy(showScalingV2PolicyRequest?: ShowScalingV2PolicyRequest): Promise<ShowScalingV2PolicyResponse> {
        const options = ParamCreater().showScalingV2Policy(showScalingV2PolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改指定弹性伸缩策略。修改弹性伸缩策略V2版本与V1版本的区别在于，V2版本支持修改伸缩资源类型。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改弹性伸缩策略（V2版本）
     * @param {string} scalingPolicyId 伸缩策略ID。
     * @param {UpdateScalingV2PolicyOption} bodyparam BodyParameters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateScalingV2Policy(updateScalingV2PolicyRequest?: UpdateScalingV2PolicyRequest): Promise<UpdateScalingV2PolicyResponse> {
        const options = ParamCreater().updateScalingV2Policy(updateScalingV2PolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 通过生命周期操作令牌或者通过实例ID和生命周期挂钩名称对伸缩实例指定的挂钩进行回调操作。如果在超时时间结束前已完成自定义操作，选择终止或继续完成生命周期操作。如果需要更多时间完成自定义操作，选择延长超时时间，实例保持等待状态的时间将增加1小时。只有实例的生命周期挂钩状态为 HANGING 时才可以进行回调操作。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        attachCallbackInstanceLifeCycleHook(attachCallbackInstanceLifeCycleHookRequest?: AttachCallbackInstanceLifeCycleHookRequest) {
            const options = {
                method: "PUT",
                url: "/autoscaling-api/v1/{project_id}/scaling_instance_hook/{scaling_group_id}/callback",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let scalingGroupId;

            if (attachCallbackInstanceLifeCycleHookRequest !== null && attachCallbackInstanceLifeCycleHookRequest !== undefined) {
                if (attachCallbackInstanceLifeCycleHookRequest instanceof AttachCallbackInstanceLifeCycleHookRequest) {
                    scalingGroupId = attachCallbackInstanceLifeCycleHookRequest.scalingGroupId;
                    body = attachCallbackInstanceLifeCycleHookRequest.body
                } else {
                    scalingGroupId = attachCallbackInstanceLifeCycleHookRequest['scaling_group_id'];
                    body = attachCallbackInstanceLifeCycleHookRequest['body'];
                }
            }

        
            if (scalingGroupId === null || scalingGroupId === undefined) {
            throw new RequiredError('scalingGroupId','Required parameter scalingGroupId was null or undefined when calling attachCallbackInstanceLifeCycleHook.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'scaling_group_id': scalingGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量移出伸缩组中的实例或批量添加伸缩组外的实例。批量对伸缩组中的实例设置或取消其实例保护属性。批量将伸缩组中的实例转入或移出备用状态。说明：- 单次最多批量操作实例个数为10。批量添加后实例数不能大于伸缩组的最大实例数，批量移出后实例数不能小于伸缩组的最小实例数。- 当伸缩组处于INSERVICE状态且没有伸缩活动时，才能添加实例。- 当伸缩组没有伸缩活动时，才能移出实例。- 向伸缩组中添加实例时，必须保证实例所在的可用区包含于伸缩组的可用区内。- 实例处于INSERVICE状态时才可以进行移出、设置或取消实例保护属性等操作。- 当伸缩组发生自动缩容活动时，设置了实例保护的实例不会被移出伸缩组。- 批量移出弹性伸缩组中的实例时，若该实例加入伸缩组时绑定的监听器和伸缩组本身的监听器相同，会解绑定实例和监听器。若该实例加入伸缩组时绑定的监听器和伸缩组本身的监听器不同，会保留实例和监听器的绑定关系。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchAddScalingInstances(batchAddScalingInstancesRequest?: BatchAddScalingInstancesRequest) {
            const options = {
                method: "POST",
                url: "/autoscaling-api/v1/{project_id}/scaling_group_instance/{scaling_group_id}/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let scalingGroupId;

            if (batchAddScalingInstancesRequest !== null && batchAddScalingInstancesRequest !== undefined) {
                if (batchAddScalingInstancesRequest instanceof BatchAddScalingInstancesRequest) {
                    scalingGroupId = batchAddScalingInstancesRequest.scalingGroupId;
                    body = batchAddScalingInstancesRequest.body
                } else {
                    scalingGroupId = batchAddScalingInstancesRequest['scaling_group_id'];
                    body = batchAddScalingInstancesRequest['body'];
                }
            }

        
            if (scalingGroupId === null || scalingGroupId === undefined) {
            throw new RequiredError('scalingGroupId','Required parameter scalingGroupId was null or undefined when calling batchAddScalingInstances.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'scaling_group_id': scalingGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除指定弹性伸缩配置。被伸缩组使用的伸缩配置不能被删除。单次最多删除伸缩配置个数为50。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteScalingConfigs(batchDeleteScalingConfigsRequest?: BatchDeleteScalingConfigsRequest) {
            const options = {
                method: "POST",
                url: "/autoscaling-api/v1/{project_id}/scaling_configurations",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchDeleteScalingConfigsRequest !== null && batchDeleteScalingConfigsRequest !== undefined) {
                if (batchDeleteScalingConfigsRequest instanceof BatchDeleteScalingConfigsRequest) {
                    body = batchDeleteScalingConfigsRequest.body
                } else {
                    body = batchDeleteScalingConfigsRequest['body'];
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
         * 批量启用、停用或者删除弹性伸缩策略。单次最多批量操作伸缩策略个数为20。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteScalingPolicies(batchDeleteScalingPoliciesRequest?: BatchDeleteScalingPoliciesRequest) {
            const options = {
                method: "POST",
                url: "/autoscaling-api/v1/{project_id}/scaling_policies/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchDeleteScalingPoliciesRequest !== null && batchDeleteScalingPoliciesRequest !== undefined) {
                if (batchDeleteScalingPoliciesRequest instanceof BatchDeleteScalingPoliciesRequest) {
                    body = batchDeleteScalingPoliciesRequest.body
                } else {
                    body = batchDeleteScalingPoliciesRequest['body'];
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
         * 批量启用、停用或者删除弹性伸缩策略。单次最多批量操作伸缩策略个数为20。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchPauseScalingPolicies(batchPauseScalingPoliciesRequest?: BatchPauseScalingPoliciesRequest) {
            const options = {
                method: "POST",
                url: "/autoscaling-api/v1/{project_id}/scaling_policies/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchPauseScalingPoliciesRequest !== null && batchPauseScalingPoliciesRequest !== undefined) {
                if (batchPauseScalingPoliciesRequest instanceof BatchPauseScalingPoliciesRequest) {
                    body = batchPauseScalingPoliciesRequest.body
                } else {
                    body = batchPauseScalingPoliciesRequest['body'];
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
         * 批量移出伸缩组中的实例或批量添加伸缩组外的实例。批量对伸缩组中的实例设置或取消其实例保护属性。批量将伸缩组中的实例转入或移出备用状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchProtectScalingInstances(batchProtectScalingInstancesRequest?: BatchProtectScalingInstancesRequest) {
            const options = {
                method: "POST",
                url: "/autoscaling-api/v1/{project_id}/scaling_group_instance/{scaling_group_id}/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let scalingGroupId;

            if (batchProtectScalingInstancesRequest !== null && batchProtectScalingInstancesRequest !== undefined) {
                if (batchProtectScalingInstancesRequest instanceof BatchProtectScalingInstancesRequest) {
                    scalingGroupId = batchProtectScalingInstancesRequest.scalingGroupId;
                    body = batchProtectScalingInstancesRequest.body
                } else {
                    scalingGroupId = batchProtectScalingInstancesRequest['scaling_group_id'];
                    body = batchProtectScalingInstancesRequest['body'];
                }
            }

        
            if (scalingGroupId === null || scalingGroupId === undefined) {
            throw new RequiredError('scalingGroupId','Required parameter scalingGroupId was null or undefined when calling batchProtectScalingInstances.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'scaling_group_id': scalingGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量移出伸缩组中的实例或批量添加伸缩组外的实例。批量对伸缩组中的实例设置或取消其实例保护属性。批量将伸缩组中的实例转入或移出备用状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchRemoveScalingInstances(batchRemoveScalingInstancesRequest?: BatchRemoveScalingInstancesRequest) {
            const options = {
                method: "POST",
                url: "/autoscaling-api/v1/{project_id}/scaling_group_instance/{scaling_group_id}/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let scalingGroupId;

            if (batchRemoveScalingInstancesRequest !== null && batchRemoveScalingInstancesRequest !== undefined) {
                if (batchRemoveScalingInstancesRequest instanceof BatchRemoveScalingInstancesRequest) {
                    scalingGroupId = batchRemoveScalingInstancesRequest.scalingGroupId;
                    body = batchRemoveScalingInstancesRequest.body
                } else {
                    scalingGroupId = batchRemoveScalingInstancesRequest['scaling_group_id'];
                    body = batchRemoveScalingInstancesRequest['body'];
                }
            }

        
            if (scalingGroupId === null || scalingGroupId === undefined) {
            throw new RequiredError('scalingGroupId','Required parameter scalingGroupId was null or undefined when calling batchRemoveScalingInstances.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'scaling_group_id': scalingGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量启用、停用或者删除弹性伸缩策略。单次最多批量操作伸缩策略个数为20。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchResumeScalingPolicies(batchResumeScalingPoliciesRequest?: BatchResumeScalingPoliciesRequest) {
            const options = {
                method: "POST",
                url: "/autoscaling-api/v1/{project_id}/scaling_policies/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchResumeScalingPoliciesRequest !== null && batchResumeScalingPoliciesRequest !== undefined) {
                if (batchResumeScalingPoliciesRequest instanceof BatchResumeScalingPoliciesRequest) {
                    body = batchResumeScalingPoliciesRequest.body
                } else {
                    body = batchResumeScalingPoliciesRequest['body'];
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
         * 批量移出伸缩组中的实例或批量添加伸缩组外的实例。批量对伸缩组中的实例设置或取消其实例保护属性。批量将伸缩组中的实例转入或移出备用状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchSetScalingInstancesStandby(batchSetScalingInstancesStandbyRequest?: BatchSetScalingInstancesStandbyRequest) {
            const options = {
                method: "POST",
                url: "/autoscaling-api/v1/{project_id}/scaling_group_instance/{scaling_group_id}/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let scalingGroupId;

            if (batchSetScalingInstancesStandbyRequest !== null && batchSetScalingInstancesStandbyRequest !== undefined) {
                if (batchSetScalingInstancesStandbyRequest instanceof BatchSetScalingInstancesStandbyRequest) {
                    scalingGroupId = batchSetScalingInstancesStandbyRequest.scalingGroupId;
                    body = batchSetScalingInstancesStandbyRequest.body
                } else {
                    scalingGroupId = batchSetScalingInstancesStandbyRequest['scaling_group_id'];
                    body = batchSetScalingInstancesStandbyRequest['body'];
                }
            }

        
            if (scalingGroupId === null || scalingGroupId === undefined) {
            throw new RequiredError('scalingGroupId','Required parameter scalingGroupId was null or undefined when calling batchSetScalingInstancesStandby.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'scaling_group_id': scalingGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量移出伸缩组中的实例或批量添加伸缩组外的实例。批量对伸缩组中的实例设置或取消其实例保护属性。批量将伸缩组中的实例转入或移出备用状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchUnprotectScalingInstances(batchUnprotectScalingInstancesRequest?: BatchUnprotectScalingInstancesRequest) {
            const options = {
                method: "POST",
                url: "/autoscaling-api/v1/{project_id}/scaling_group_instance/{scaling_group_id}/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let scalingGroupId;

            if (batchUnprotectScalingInstancesRequest !== null && batchUnprotectScalingInstancesRequest !== undefined) {
                if (batchUnprotectScalingInstancesRequest instanceof BatchUnprotectScalingInstancesRequest) {
                    scalingGroupId = batchUnprotectScalingInstancesRequest.scalingGroupId;
                    body = batchUnprotectScalingInstancesRequest.body
                } else {
                    scalingGroupId = batchUnprotectScalingInstancesRequest['scaling_group_id'];
                    body = batchUnprotectScalingInstancesRequest['body'];
                }
            }

        
            if (scalingGroupId === null || scalingGroupId === undefined) {
            throw new RequiredError('scalingGroupId','Required parameter scalingGroupId was null or undefined when calling batchUnprotectScalingInstances.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'scaling_group_id': scalingGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量移出伸缩组中的实例或批量添加伸缩组外的实例。批量对伸缩组中的实例设置或取消其实例保护属性。批量将伸缩组中的实例转入或移出备用状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchUnsetScalingInstancesStantby(batchUnsetScalingInstancesStantbyRequest?: BatchUnsetScalingInstancesStantbyRequest) {
            const options = {
                method: "POST",
                url: "/autoscaling-api/v1/{project_id}/scaling_group_instance/{scaling_group_id}/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let scalingGroupId;

            if (batchUnsetScalingInstancesStantbyRequest !== null && batchUnsetScalingInstancesStantbyRequest !== undefined) {
                if (batchUnsetScalingInstancesStantbyRequest instanceof BatchUnsetScalingInstancesStantbyRequest) {
                    scalingGroupId = batchUnsetScalingInstancesStantbyRequest.scalingGroupId;
                    body = batchUnsetScalingInstancesStantbyRequest.body
                } else {
                    scalingGroupId = batchUnsetScalingInstancesStantbyRequest['scaling_group_id'];
                    body = batchUnsetScalingInstancesStantbyRequest['body'];
                }
            }

        
            if (scalingGroupId === null || scalingGroupId === undefined) {
            throw new RequiredError('scalingGroupId','Required parameter scalingGroupId was null or undefined when calling batchUnsetScalingInstancesStantby.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'scaling_group_id': scalingGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建计划任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createGroupScheduledTask(createGroupScheduledTaskRequest?: CreateGroupScheduledTaskRequest) {
            const options = {
                method: "POST",
                url: "/autoscaling-api/v1/{project_id}/scaling-groups/{scaling_group_id}/scheduled-tasks",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let scalingGroupId;

            if (createGroupScheduledTaskRequest !== null && createGroupScheduledTaskRequest !== undefined) {
                if (createGroupScheduledTaskRequest instanceof CreateGroupScheduledTaskRequest) {
                    scalingGroupId = createGroupScheduledTaskRequest.scalingGroupId;
                    body = createGroupScheduledTaskRequest.body
                } else {
                    scalingGroupId = createGroupScheduledTaskRequest['scaling_group_id'];
                    body = createGroupScheduledTaskRequest['body'];
                }
            }

        
            if (scalingGroupId === null || scalingGroupId === undefined) {
            throw new RequiredError('scalingGroupId','Required parameter scalingGroupId was null or undefined when calling createGroupScheduledTask.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'scaling_group_id': scalingGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建生命周期挂钩，可为伸缩组添加一个或多个生命周期挂钩，最多添加5个。添加生命周期挂钩后，当伸缩组进行伸缩活动时，实例将被生命周期挂钩挂起并置于等待状态（正在加入伸缩组或正在移出伸缩组），实例将保持此状态直至超时时间结束或者用户手动回调。用户能够在实例保持等待状态的时间段内执行自定义操作，例如，用户可以在新启动的实例上安装或配置软件，也可以在实例终止前从实例中下载日志文件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createLifyCycleHook(createLifyCycleHookRequest?: CreateLifyCycleHookRequest) {
            const options = {
                method: "POST",
                url: "/autoscaling-api/v1/{project_id}/scaling_lifecycle_hook/{scaling_group_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let scalingGroupId;

            if (createLifyCycleHookRequest !== null && createLifyCycleHookRequest !== undefined) {
                if (createLifyCycleHookRequest instanceof CreateLifyCycleHookRequest) {
                    scalingGroupId = createLifyCycleHookRequest.scalingGroupId;
                    body = createLifyCycleHookRequest.body
                } else {
                    scalingGroupId = createLifyCycleHookRequest['scaling_group_id'];
                    body = createLifyCycleHookRequest['body'];
                }
            }

        
            if (scalingGroupId === null || scalingGroupId === undefined) {
            throw new RequiredError('scalingGroupId','Required parameter scalingGroupId was null or undefined when calling createLifyCycleHook.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'scaling_group_id': scalingGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建弹性伸缩配置。伸缩配置是伸缩组内实例（弹性云服务器云主机）的模板，定义了伸缩组内待添加的实例的规格数据。伸缩配置与伸缩组是解耦的，同一伸缩配置可以被多个伸缩组使用。默认最多可以创建100个伸缩配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createScalingConfig(createScalingConfigRequest?: CreateScalingConfigRequest) {
            const options = {
                method: "POST",
                url: "/autoscaling-api/v1/{project_id}/scaling_configuration",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createScalingConfigRequest !== null && createScalingConfigRequest !== undefined) {
                if (createScalingConfigRequest instanceof CreateScalingConfigRequest) {
                    body = createScalingConfigRequest.body
                } else {
                    body = createScalingConfigRequest['body'];
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
         * 伸缩组是具有相同应用场景的实例的集合，是启停伸缩策略和进行伸缩活动的基本单位。伸缩组内定义了最大实例数、期望实例数、最小实例数、虚拟私有云、子网、负载均衡等信息。默认最多可以创建10个伸缩组。如果伸缩组配置了负载均衡，在添加或移除实例时，会自动为实例绑定或解绑负载均衡监听器。如果伸缩组使用负载均衡健康检查方式，伸缩组中的实例需要启用负载均衡器的监听端口才能通过健康检查。端口启用可在安全组中进行配置，可参考添加安全组规则进行操作。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createScalingGroup(createScalingGroupRequest?: CreateScalingGroupRequest) {
            const options = {
                method: "POST",
                url: "/autoscaling-api/v1/{project_id}/scaling_group",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createScalingGroupRequest !== null && createScalingGroupRequest !== undefined) {
                if (createScalingGroupRequest instanceof CreateScalingGroupRequest) {
                    body = createScalingGroupRequest.body
                } else {
                    body = createScalingGroupRequest['body'];
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
         * 给弹性伸缩组配置通知功能。每调用一次该接口，伸缩组即配置一个通知主题及其通知场景，每个伸缩组最多可以增加5个主题。通知主题由用户事先在SMN创建并进行订阅，当通知主题对应的通知场景出现时，伸缩组会向用户的订阅终端发送通知。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createScalingNotification(createScalingNotificationRequest?: CreateScalingNotificationRequest) {
            const options = {
                method: "PUT",
                url: "/autoscaling-api/v1/{project_id}/scaling_notification/{scaling_group_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let scalingGroupId;

            if (createScalingNotificationRequest !== null && createScalingNotificationRequest !== undefined) {
                if (createScalingNotificationRequest instanceof CreateScalingNotificationRequest) {
                    scalingGroupId = createScalingNotificationRequest.scalingGroupId;
                    body = createScalingNotificationRequest.body
                } else {
                    scalingGroupId = createScalingNotificationRequest['scaling_group_id'];
                    body = createScalingNotificationRequest['body'];
                }
            }

        
            if (scalingGroupId === null || scalingGroupId === undefined) {
            throw new RequiredError('scalingGroupId','Required parameter scalingGroupId was null or undefined when calling createScalingNotification.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'scaling_group_id': scalingGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建弹性伸缩策略。伸缩策略定义了伸缩组内实例的扩张和收缩操作。如果执行伸缩策略造成伸缩组期望实例数与伸缩组内实例数不符，弹性伸缩会自动调整实例资源，以匹配期望实例数。当前伸缩策略支持告警触发策略，周期触发策略，定时触发策略。在策略执行具体动作中，可设置实例变化的个数，或根据当前实例的百分比数进行伸缩。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createScalingPolicy(createScalingPolicyRequest?: CreateScalingPolicyRequest) {
            const options = {
                method: "POST",
                url: "/autoscaling-api/v1/{project_id}/scaling_policy",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createScalingPolicyRequest !== null && createScalingPolicyRequest !== undefined) {
                if (createScalingPolicyRequest instanceof CreateScalingPolicyRequest) {
                    body = createScalingPolicyRequest.body
                } else {
                    body = createScalingPolicyRequest['body'];
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
         * 创建或删除指定资源的标签。每个伸缩组最多添加10个标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createScalingTagInfo(createScalingTagInfoRequest?: CreateScalingTagInfoRequest) {
            const options = {
                method: "POST",
                url: "/autoscaling-api/v1/{project_id}/{resource_type}/{resource_id}/tags/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceType;
            
            let resourceId;

            if (createScalingTagInfoRequest !== null && createScalingTagInfoRequest !== undefined) {
                if (createScalingTagInfoRequest instanceof CreateScalingTagInfoRequest) {
                    resourceType = createScalingTagInfoRequest.resourceType;
                    resourceId = createScalingTagInfoRequest.resourceId;
                    body = createScalingTagInfoRequest.body
                } else {
                    resourceType = createScalingTagInfoRequest['resource_type'];
                    resourceId = createScalingTagInfoRequest['resource_id'];
                    body = createScalingTagInfoRequest['body'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling createScalingTagInfo.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling createScalingTagInfo.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除计划任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteGroupScheduledTask(deleteGroupScheduledTaskRequest?: DeleteGroupScheduledTaskRequest) {
            const options = {
                method: "DELETE",
                url: "/autoscaling-api/v1/{project_id}/scaling-groups/{scaling_group_id}/scheduled-tasks/{scheduled_task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let scalingGroupId;
            
            let scheduledTaskId;

            if (deleteGroupScheduledTaskRequest !== null && deleteGroupScheduledTaskRequest !== undefined) {
                if (deleteGroupScheduledTaskRequest instanceof DeleteGroupScheduledTaskRequest) {
                    scalingGroupId = deleteGroupScheduledTaskRequest.scalingGroupId;
                    scheduledTaskId = deleteGroupScheduledTaskRequest.scheduledTaskId;
                } else {
                    scalingGroupId = deleteGroupScheduledTaskRequest['scaling_group_id'];
                    scheduledTaskId = deleteGroupScheduledTaskRequest['scheduled_task_id'];
                }
            }

        
            if (scalingGroupId === null || scalingGroupId === undefined) {
            throw new RequiredError('scalingGroupId','Required parameter scalingGroupId was null or undefined when calling deleteGroupScheduledTask.');
            }
            if (scheduledTaskId === null || scheduledTaskId === undefined) {
            throw new RequiredError('scheduledTaskId','Required parameter scheduledTaskId was null or undefined when calling deleteGroupScheduledTask.');
            }

            options.pathParams = { 'scaling_group_id': scalingGroupId,'scheduled_task_id': scheduledTaskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除一个指定生命周期挂钩。伸缩组进行伸缩活动时，不允许删除该伸缩组内的生命周期挂钩。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteLifecycleHook(deleteLifecycleHookRequest?: DeleteLifecycleHookRequest) {
            const options = {
                method: "DELETE",
                url: "/autoscaling-api/v1/{project_id}/scaling_lifecycle_hook/{scaling_group_id}/{lifecycle_hook_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let scalingGroupId;
            
            let lifecycleHookName;

            if (deleteLifecycleHookRequest !== null && deleteLifecycleHookRequest !== undefined) {
                if (deleteLifecycleHookRequest instanceof DeleteLifecycleHookRequest) {
                    scalingGroupId = deleteLifecycleHookRequest.scalingGroupId;
                    lifecycleHookName = deleteLifecycleHookRequest.lifecycleHookName;
                } else {
                    scalingGroupId = deleteLifecycleHookRequest['scaling_group_id'];
                    lifecycleHookName = deleteLifecycleHookRequest['lifecycle_hook_name'];
                }
            }

        
            if (scalingGroupId === null || scalingGroupId === undefined) {
            throw new RequiredError('scalingGroupId','Required parameter scalingGroupId was null or undefined when calling deleteLifecycleHook.');
            }
            if (lifecycleHookName === null || lifecycleHookName === undefined) {
            throw new RequiredError('lifecycleHookName','Required parameter lifecycleHookName was null or undefined when calling deleteLifecycleHook.');
            }

            options.pathParams = { 'scaling_group_id': scalingGroupId,'lifecycle_hook_name': lifecycleHookName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除一个指定弹性伸缩配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteScalingConfig(deleteScalingConfigRequest?: DeleteScalingConfigRequest) {
            const options = {
                method: "DELETE",
                url: "/autoscaling-api/v1/{project_id}/scaling_configuration/{scaling_configuration_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let scalingConfigurationId;

            if (deleteScalingConfigRequest !== null && deleteScalingConfigRequest !== undefined) {
                if (deleteScalingConfigRequest instanceof DeleteScalingConfigRequest) {
                    scalingConfigurationId = deleteScalingConfigRequest.scalingConfigurationId;
                } else {
                    scalingConfigurationId = deleteScalingConfigRequest['scaling_configuration_id'];
                }
            }

        
            if (scalingConfigurationId === null || scalingConfigurationId === undefined) {
            throw new RequiredError('scalingConfigurationId','Required parameter scalingConfigurationId was null or undefined when calling deleteScalingConfig.');
            }

            options.pathParams = { 'scaling_configuration_id': scalingConfigurationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除一个指定弹性伸缩组。force_delete属性表示如果伸缩组存在ECS实例或正在进行伸缩活动，是否强制删除伸缩组并移出和释放ECS实例。默认值为no，表示不强制删除伸缩组。如果force_delete的值为no，必须满足以下两个条件，才能删除伸缩组：条件一：伸缩组没有正在进行的伸缩活动。条件二：伸缩组当前的ECS实例数量（current_instance_number）为0。如果force_delete的值为yes，伸缩组会被置于DELETING状态，拒绝接收新的伸缩活动请求，然后等待已有的伸缩活动完成，最后将伸缩组内所有ECS实例移出伸缩组（用户手动添加的ECS实例会被移出伸缩组，弹性伸缩自动创建的ECS实例会被自动删除）并删除伸缩组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteScalingGroup(deleteScalingGroupRequest?: DeleteScalingGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/autoscaling-api/v1/{project_id}/scaling_group/{scaling_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let scalingGroupId;
            
            let forceDelete;

            if (deleteScalingGroupRequest !== null && deleteScalingGroupRequest !== undefined) {
                if (deleteScalingGroupRequest instanceof DeleteScalingGroupRequest) {
                    scalingGroupId = deleteScalingGroupRequest.scalingGroupId;
                    forceDelete = deleteScalingGroupRequest.forceDelete;
                } else {
                    scalingGroupId = deleteScalingGroupRequest['scaling_group_id'];
                    forceDelete = deleteScalingGroupRequest['force_delete'];
                }
            }

        
            if (scalingGroupId === null || scalingGroupId === undefined) {
            throw new RequiredError('scalingGroupId','Required parameter scalingGroupId was null or undefined when calling deleteScalingGroup.');
            }
            if (forceDelete !== null && forceDelete !== undefined) {
                localVarQueryParameter['force_delete'] = forceDelete;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'scaling_group_id': scalingGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 从弹性伸缩组中移出一个指定实例。实例处于INSERVICE且移出后实例数不能小于伸缩组的最小实例数时才可以移出。当伸缩组没有伸缩活动时，才能移出实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteScalingInstance(deleteScalingInstanceRequest?: DeleteScalingInstanceRequest) {
            const options = {
                method: "DELETE",
                url: "/autoscaling-api/v1/{project_id}/scaling_group_instance/{instance_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let instanceDelete;

            if (deleteScalingInstanceRequest !== null && deleteScalingInstanceRequest !== undefined) {
                if (deleteScalingInstanceRequest instanceof DeleteScalingInstanceRequest) {
                    instanceId = deleteScalingInstanceRequest.instanceId;
                    instanceDelete = deleteScalingInstanceRequest.instanceDelete;
                } else {
                    instanceId = deleteScalingInstanceRequest['instance_id'];
                    instanceDelete = deleteScalingInstanceRequest['instance_delete'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteScalingInstance.');
            }
            if (instanceDelete !== null && instanceDelete !== undefined) {
                localVarQueryParameter['instance_delete'] = instanceDelete;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定的弹性伸缩组中指定的通知。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteScalingNotification(deleteScalingNotificationRequest?: DeleteScalingNotificationRequest) {
            const options = {
                method: "DELETE",
                url: "/autoscaling-api/v1/{project_id}/scaling_notification/{scaling_group_id}/{topic_urn}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let scalingGroupId;
            
            let topicUrn;

            if (deleteScalingNotificationRequest !== null && deleteScalingNotificationRequest !== undefined) {
                if (deleteScalingNotificationRequest instanceof DeleteScalingNotificationRequest) {
                    scalingGroupId = deleteScalingNotificationRequest.scalingGroupId;
                    topicUrn = deleteScalingNotificationRequest.topicUrn;
                } else {
                    scalingGroupId = deleteScalingNotificationRequest['scaling_group_id'];
                    topicUrn = deleteScalingNotificationRequest['topic_urn'];
                }
            }

        
            if (scalingGroupId === null || scalingGroupId === undefined) {
            throw new RequiredError('scalingGroupId','Required parameter scalingGroupId was null or undefined when calling deleteScalingNotification.');
            }
            if (topicUrn === null || topicUrn === undefined) {
            throw new RequiredError('topicUrn','Required parameter topicUrn was null or undefined when calling deleteScalingNotification.');
            }

            options.pathParams = { 'scaling_group_id': scalingGroupId,'topic_urn': topicUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除一个指定弹性伸缩策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteScalingPolicy(deleteScalingPolicyRequest?: DeleteScalingPolicyRequest) {
            const options = {
                method: "DELETE",
                url: "/autoscaling-api/v1/{project_id}/scaling_policy/{scaling_policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let scalingPolicyId;

            if (deleteScalingPolicyRequest !== null && deleteScalingPolicyRequest !== undefined) {
                if (deleteScalingPolicyRequest instanceof DeleteScalingPolicyRequest) {
                    scalingPolicyId = deleteScalingPolicyRequest.scalingPolicyId;
                } else {
                    scalingPolicyId = deleteScalingPolicyRequest['scaling_policy_id'];
                }
            }

        
            if (scalingPolicyId === null || scalingPolicyId === undefined) {
            throw new RequiredError('scalingPolicyId','Required parameter scalingPolicyId was null or undefined when calling deleteScalingPolicy.');
            }

            options.pathParams = { 'scaling_policy_id': scalingPolicyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建或删除指定资源的标签。每个伸缩组最多添加10个标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteScalingTagInfo(deleteScalingTagInfoRequest?: DeleteScalingTagInfoRequest) {
            const options = {
                method: "POST",
                url: "/autoscaling-api/v1/{project_id}/{resource_type}/{resource_id}/tags/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceType;
            
            let resourceId;

            if (deleteScalingTagInfoRequest !== null && deleteScalingTagInfoRequest !== undefined) {
                if (deleteScalingTagInfoRequest instanceof DeleteScalingTagInfoRequest) {
                    resourceType = deleteScalingTagInfoRequest.resourceType;
                    resourceId = deleteScalingTagInfoRequest.resourceId;
                    body = deleteScalingTagInfoRequest.body
                } else {
                    resourceType = deleteScalingTagInfoRequest['resource_type'];
                    resourceId = deleteScalingTagInfoRequest['resource_id'];
                    body = deleteScalingTagInfoRequest['body'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling deleteScalingTagInfo.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling deleteScalingTagInfo.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 立即执行或启用或停止一个指定弹性伸缩策略。当伸缩组、伸缩策略状态处于INSERVICE时，伸缩策略才能被正确执行，否则会执行失败。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        executeScalingPolicy(executeScalingPolicyRequest?: ExecuteScalingPolicyRequest) {
            const options = {
                method: "POST",
                url: "/autoscaling-api/v1/{project_id}/scaling_policy/{scaling_policy_id}/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let scalingPolicyId;

            if (executeScalingPolicyRequest !== null && executeScalingPolicyRequest !== undefined) {
                if (executeScalingPolicyRequest instanceof ExecuteScalingPolicyRequest) {
                    scalingPolicyId = executeScalingPolicyRequest.scalingPolicyId;
                    body = executeScalingPolicyRequest.body
                } else {
                    scalingPolicyId = executeScalingPolicyRequest['scaling_policy_id'];
                    body = executeScalingPolicyRequest['body'];
                }
            }

        
            if (scalingPolicyId === null || scalingPolicyId === undefined) {
            throw new RequiredError('scalingPolicyId','Required parameter scalingPolicyId was null or undefined when calling executeScalingPolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'scaling_policy_id': scalingPolicyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询计划任务列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGroupScheduledTasks(listGroupScheduledTasksRequest?: ListGroupScheduledTasksRequest) {
            const options = {
                method: "GET",
                url: "/autoscaling-api/v1/{project_id}/scaling-groups/{scaling_group_id}/scheduled-tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let scalingGroupId;
            
            let limit;
            
            let marker;

            if (listGroupScheduledTasksRequest !== null && listGroupScheduledTasksRequest !== undefined) {
                if (listGroupScheduledTasksRequest instanceof ListGroupScheduledTasksRequest) {
                    scalingGroupId = listGroupScheduledTasksRequest.scalingGroupId;
                    limit = listGroupScheduledTasksRequest.limit;
                    marker = listGroupScheduledTasksRequest.marker;
                } else {
                    scalingGroupId = listGroupScheduledTasksRequest['scaling_group_id'];
                    limit = listGroupScheduledTasksRequest['limit'];
                    marker = listGroupScheduledTasksRequest['marker'];
                }
            }

        
            if (scalingGroupId === null || scalingGroupId === undefined) {
            throw new RequiredError('scalingGroupId','Required parameter scalingGroupId was null or undefined when calling listGroupScheduledTasks.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'scaling_group_id': scalingGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加生命周期挂钩后，当伸缩组进行伸缩活动时，实例将被挂钩挂起并置于等待状态，根据输入条件过滤查询弹性伸缩组中伸缩实例的挂起信息。可根据实例ID进行条件过滤查询。若不加过滤条件默认查询指定伸缩组内所有实例挂起信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHookInstances(listHookInstancesRequest?: ListHookInstancesRequest) {
            const options = {
                method: "GET",
                url: "/autoscaling-api/v1/{project_id}/scaling_instance_hook/{scaling_group_id}/list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let scalingGroupId;
            
            let instanceId;

            if (listHookInstancesRequest !== null && listHookInstancesRequest !== undefined) {
                if (listHookInstancesRequest instanceof ListHookInstancesRequest) {
                    scalingGroupId = listHookInstancesRequest.scalingGroupId;
                    instanceId = listHookInstancesRequest.instanceId;
                } else {
                    scalingGroupId = listHookInstancesRequest['scaling_group_id'];
                    instanceId = listHookInstancesRequest['instance_id'];
                }
            }

        
            if (scalingGroupId === null || scalingGroupId === undefined) {
            throw new RequiredError('scalingGroupId','Required parameter scalingGroupId was null or undefined when calling listHookInstances.');
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'scaling_group_id': scalingGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据伸缩组ID查询生命周期挂钩列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLifeCycleHooks(listLifeCycleHooksRequest?: ListLifeCycleHooksRequest) {
            const options = {
                method: "GET",
                url: "/autoscaling-api/v1/{project_id}/scaling_lifecycle_hook/{scaling_group_id}/list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let scalingGroupId;

            if (listLifeCycleHooksRequest !== null && listLifeCycleHooksRequest !== undefined) {
                if (listLifeCycleHooksRequest instanceof ListLifeCycleHooksRequest) {
                    scalingGroupId = listLifeCycleHooksRequest.scalingGroupId;
                } else {
                    scalingGroupId = listLifeCycleHooksRequest['scaling_group_id'];
                }
            }

        
            if (scalingGroupId === null || scalingGroupId === undefined) {
            throw new RequiredError('scalingGroupId','Required parameter scalingGroupId was null or undefined when calling listLifeCycleHooks.');
            }

            options.pathParams = { 'scaling_group_id': scalingGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据项目ID查询指定资源类型的资源实例。资源、资源tag默认按照创建时间倒序。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listResourceInstances(listResourceInstancesRequest?: ListResourceInstancesRequest) {
            const options = {
                method: "POST",
                url: "/autoscaling-api/v1/{project_id}/{resource_type}/resource_instances/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceType;

            if (listResourceInstancesRequest !== null && listResourceInstancesRequest !== undefined) {
                if (listResourceInstancesRequest instanceof ListResourceInstancesRequest) {
                    resourceType = listResourceInstancesRequest.resourceType;
                    body = listResourceInstancesRequest.body
                } else {
                    resourceType = listResourceInstancesRequest['resource_type'];
                    body = listResourceInstancesRequest['body'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling listResourceInstances.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据输入条件过滤查询伸缩活动日志。查询结果分页显示。可根据起始时间，截止时间，起始行号，记录数进行条件过滤查询。若不加过滤条件默认查询最多20条伸缩活动日志信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listScalingActivityLogs(listScalingActivityLogsRequest?: ListScalingActivityLogsRequest) {
            const options = {
                method: "GET",
                url: "/autoscaling-api/v1/{project_id}/scaling_activity_log/{scaling_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let scalingGroupId;
            
            let startTime;
            
            let endTime;
            
            let startNumber;
            
            let limit;

            if (listScalingActivityLogsRequest !== null && listScalingActivityLogsRequest !== undefined) {
                if (listScalingActivityLogsRequest instanceof ListScalingActivityLogsRequest) {
                    scalingGroupId = listScalingActivityLogsRequest.scalingGroupId;
                    startTime = listScalingActivityLogsRequest.startTime;
                    endTime = listScalingActivityLogsRequest.endTime;
                    startNumber = listScalingActivityLogsRequest.startNumber;
                    limit = listScalingActivityLogsRequest.limit;
                } else {
                    scalingGroupId = listScalingActivityLogsRequest['scaling_group_id'];
                    startTime = listScalingActivityLogsRequest['start_time'];
                    endTime = listScalingActivityLogsRequest['end_time'];
                    startNumber = listScalingActivityLogsRequest['start_number'];
                    limit = listScalingActivityLogsRequest['limit'];
                }
            }

        
            if (scalingGroupId === null || scalingGroupId === undefined) {
            throw new RequiredError('scalingGroupId','Required parameter scalingGroupId was null or undefined when calling listScalingActivityLogs.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (startNumber !== null && startNumber !== undefined) {
                localVarQueryParameter['start_number'] = startNumber;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'scaling_group_id': scalingGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据输入条件过滤查询伸缩活动日志，支持查询实例伸缩、ELB迁移、实例备用等类型活动。查询结果分页显示。查询伸缩活动日志V2版本与V1版本区别在于，V2版本展示了更详细的实例伸缩日志，如ELB迁移日志，实例备用日志信息。可根据起始时间，截止时间，起始行号，记录数，伸缩活动类型等作为条件过滤查询。若不加过滤条件默认查询最多20条伸缩活动日志信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listScalingActivityV2Logs(listScalingActivityV2LogsRequest?: ListScalingActivityV2LogsRequest) {
            const options = {
                method: "GET",
                url: "/autoscaling-api/v2/{project_id}/scaling_activity_log/{scaling_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let scalingGroupId;
            
            let logId;
            
            let startTime;
            
            let endTime;
            
            let startNumber;
            
            let limit;
            
            let type;
            
            let status;

            if (listScalingActivityV2LogsRequest !== null && listScalingActivityV2LogsRequest !== undefined) {
                if (listScalingActivityV2LogsRequest instanceof ListScalingActivityV2LogsRequest) {
                    scalingGroupId = listScalingActivityV2LogsRequest.scalingGroupId;
                    logId = listScalingActivityV2LogsRequest.logId;
                    startTime = listScalingActivityV2LogsRequest.startTime;
                    endTime = listScalingActivityV2LogsRequest.endTime;
                    startNumber = listScalingActivityV2LogsRequest.startNumber;
                    limit = listScalingActivityV2LogsRequest.limit;
                    type = listScalingActivityV2LogsRequest.type;
                    status = listScalingActivityV2LogsRequest.status;
                } else {
                    scalingGroupId = listScalingActivityV2LogsRequest['scaling_group_id'];
                    logId = listScalingActivityV2LogsRequest['log_id'];
                    startTime = listScalingActivityV2LogsRequest['start_time'];
                    endTime = listScalingActivityV2LogsRequest['end_time'];
                    startNumber = listScalingActivityV2LogsRequest['start_number'];
                    limit = listScalingActivityV2LogsRequest['limit'];
                    type = listScalingActivityV2LogsRequest['type'];
                    status = listScalingActivityV2LogsRequest['status'];
                }
            }

        
            if (scalingGroupId === null || scalingGroupId === undefined) {
            throw new RequiredError('scalingGroupId','Required parameter scalingGroupId was null or undefined when calling listScalingActivityV2Logs.');
            }
            if (logId !== null && logId !== undefined) {
                localVarQueryParameter['log_id'] = logId;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (startNumber !== null && startNumber !== undefined) {
                localVarQueryParameter['start_number'] = startNumber;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'scaling_group_id': scalingGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据输入条件过滤查询弹性伸缩配置。查询结果分页显示。可以根据伸缩配置名称，镜像ID，起始行号，记录条数进行条件过滤查询。若不加过滤条件默认最多查询租户下20条伸缩配置信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listScalingConfigs(listScalingConfigsRequest?: ListScalingConfigsRequest) {
            const options = {
                method: "GET",
                url: "/autoscaling-api/v1/{project_id}/scaling_configuration",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let scalingConfigurationName;
            
            let imageId;
            
            let startNumber;
            
            let limit;

            if (listScalingConfigsRequest !== null && listScalingConfigsRequest !== undefined) {
                if (listScalingConfigsRequest instanceof ListScalingConfigsRequest) {
                    scalingConfigurationName = listScalingConfigsRequest.scalingConfigurationName;
                    imageId = listScalingConfigsRequest.imageId;
                    startNumber = listScalingConfigsRequest.startNumber;
                    limit = listScalingConfigsRequest.limit;
                } else {
                    scalingConfigurationName = listScalingConfigsRequest['scaling_configuration_name'];
                    imageId = listScalingConfigsRequest['image_id'];
                    startNumber = listScalingConfigsRequest['start_number'];
                    limit = listScalingConfigsRequest['limit'];
                }
            }

        
            if (scalingConfigurationName !== null && scalingConfigurationName !== undefined) {
                localVarQueryParameter['scaling_configuration_name'] = scalingConfigurationName;
            }
            if (imageId !== null && imageId !== undefined) {
                localVarQueryParameter['image_id'] = imageId;
            }
            if (startNumber !== null && startNumber !== undefined) {
                localVarQueryParameter['start_number'] = startNumber;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据输入条件过滤查询弹性伸缩组列表。查询结果分页显示。可根据伸缩组名称，伸缩配置ID，伸缩组状态，企业项目ID，起始行号，记录条数进行条件过滤查询。若不加过滤条件默认最多查询租户下20条伸缩组信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listScalingGroups(listScalingGroupsRequest?: ListScalingGroupsRequest) {
            const options = {
                method: "GET",
                url: "/autoscaling-api/v1/{project_id}/scaling_group",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let scalingGroupName;
            
            let scalingConfigurationId;
            
            let scalingGroupStatus;
            
            let startNumber;
            
            let limit;
            
            let enterpriseProjectId;

            if (listScalingGroupsRequest !== null && listScalingGroupsRequest !== undefined) {
                if (listScalingGroupsRequest instanceof ListScalingGroupsRequest) {
                    scalingGroupName = listScalingGroupsRequest.scalingGroupName;
                    scalingConfigurationId = listScalingGroupsRequest.scalingConfigurationId;
                    scalingGroupStatus = listScalingGroupsRequest.scalingGroupStatus;
                    startNumber = listScalingGroupsRequest.startNumber;
                    limit = listScalingGroupsRequest.limit;
                    enterpriseProjectId = listScalingGroupsRequest.enterpriseProjectId;
                } else {
                    scalingGroupName = listScalingGroupsRequest['scaling_group_name'];
                    scalingConfigurationId = listScalingGroupsRequest['scaling_configuration_id'];
                    scalingGroupStatus = listScalingGroupsRequest['scaling_group_status'];
                    startNumber = listScalingGroupsRequest['start_number'];
                    limit = listScalingGroupsRequest['limit'];
                    enterpriseProjectId = listScalingGroupsRequest['enterprise_project_id'];
                }
            }

        
            if (scalingGroupName !== null && scalingGroupName !== undefined) {
                localVarQueryParameter['scaling_group_name'] = scalingGroupName;
            }
            if (scalingConfigurationId !== null && scalingConfigurationId !== undefined) {
                localVarQueryParameter['scaling_configuration_id'] = scalingConfigurationId;
            }
            if (scalingGroupStatus !== null && scalingGroupStatus !== undefined) {
                localVarQueryParameter['scaling_group_status'] = scalingGroupStatus;
            }
            if (startNumber !== null && startNumber !== undefined) {
                localVarQueryParameter['start_number'] = startNumber;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据输入条件过滤查询弹性伸缩组中实例信息。查询结果分页显示。可根据实例在伸缩组中的生命周期状态，实例健康状态，实例保护状态，起始行号，记录条数进行条件过滤查询。若不加过滤条件默认查询组内最多20条实例信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listScalingInstances(listScalingInstancesRequest?: ListScalingInstancesRequest) {
            const options = {
                method: "GET",
                url: "/autoscaling-api/v1/{project_id}/scaling_group_instance/{scaling_group_id}/list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let scalingGroupId;
            
            let lifeCycleState;
            
            let healthStatus;
            
            let protectFromScalingDown;
            
            let startNumber;
            
            let limit;

            if (listScalingInstancesRequest !== null && listScalingInstancesRequest !== undefined) {
                if (listScalingInstancesRequest instanceof ListScalingInstancesRequest) {
                    scalingGroupId = listScalingInstancesRequest.scalingGroupId;
                    lifeCycleState = listScalingInstancesRequest.lifeCycleState;
                    healthStatus = listScalingInstancesRequest.healthStatus;
                    protectFromScalingDown = listScalingInstancesRequest.protectFromScalingDown;
                    startNumber = listScalingInstancesRequest.startNumber;
                    limit = listScalingInstancesRequest.limit;
                } else {
                    scalingGroupId = listScalingInstancesRequest['scaling_group_id'];
                    lifeCycleState = listScalingInstancesRequest['life_cycle_state'];
                    healthStatus = listScalingInstancesRequest['health_status'];
                    protectFromScalingDown = listScalingInstancesRequest['protect_from_scaling_down'];
                    startNumber = listScalingInstancesRequest['start_number'];
                    limit = listScalingInstancesRequest['limit'];
                }
            }

        
            if (scalingGroupId === null || scalingGroupId === undefined) {
            throw new RequiredError('scalingGroupId','Required parameter scalingGroupId was null or undefined when calling listScalingInstances.');
            }
            if (lifeCycleState !== null && lifeCycleState !== undefined) {
                localVarQueryParameter['life_cycle_state'] = lifeCycleState;
            }
            if (healthStatus !== null && healthStatus !== undefined) {
                localVarQueryParameter['health_status'] = healthStatus;
            }
            if (protectFromScalingDown !== null && protectFromScalingDown !== undefined) {
                localVarQueryParameter['protect_from_scaling_down'] = protectFromScalingDown;
            }
            if (startNumber !== null && startNumber !== undefined) {
                localVarQueryParameter['start_number'] = startNumber;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'scaling_group_id': scalingGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据伸缩组ID查询指定弹性伸缩组的通知列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listScalingNotifications(listScalingNotificationsRequest?: ListScalingNotificationsRequest) {
            const options = {
                method: "GET",
                url: "/autoscaling-api/v1/{project_id}/scaling_notification/{scaling_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let scalingGroupId;

            if (listScalingNotificationsRequest !== null && listScalingNotificationsRequest !== undefined) {
                if (listScalingNotificationsRequest instanceof ListScalingNotificationsRequest) {
                    scalingGroupId = listScalingNotificationsRequest.scalingGroupId;
                } else {
                    scalingGroupId = listScalingNotificationsRequest['scaling_group_id'];
                }
            }

        
            if (scalingGroupId === null || scalingGroupId === undefined) {
            throw new RequiredError('scalingGroupId','Required parameter scalingGroupId was null or undefined when calling listScalingNotifications.');
            }

            options.pathParams = { 'scaling_group_id': scalingGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据输入条件过滤查询弹性伸缩策略。查询结果分页显示。可根据伸缩策略名称，策略类型，伸缩策略ID，起始行号，记录数进行条件过滤查询。若不加过滤条件默认查询租户下指定伸缩组内最多20条伸缩策略信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listScalingPolicies(listScalingPoliciesRequest?: ListScalingPoliciesRequest) {
            const options = {
                method: "GET",
                url: "/autoscaling-api/v1/{project_id}/scaling_policy/{scaling_group_id}/list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let scalingGroupId;
            
            let scalingPolicyName;
            
            let scalingPolicyType;
            
            let scalingPolicyId;
            
            let startNumber;
            
            let limit;

            if (listScalingPoliciesRequest !== null && listScalingPoliciesRequest !== undefined) {
                if (listScalingPoliciesRequest instanceof ListScalingPoliciesRequest) {
                    scalingGroupId = listScalingPoliciesRequest.scalingGroupId;
                    scalingPolicyName = listScalingPoliciesRequest.scalingPolicyName;
                    scalingPolicyType = listScalingPoliciesRequest.scalingPolicyType;
                    scalingPolicyId = listScalingPoliciesRequest.scalingPolicyId;
                    startNumber = listScalingPoliciesRequest.startNumber;
                    limit = listScalingPoliciesRequest.limit;
                } else {
                    scalingGroupId = listScalingPoliciesRequest['scaling_group_id'];
                    scalingPolicyName = listScalingPoliciesRequest['scaling_policy_name'];
                    scalingPolicyType = listScalingPoliciesRequest['scaling_policy_type'];
                    scalingPolicyId = listScalingPoliciesRequest['scaling_policy_id'];
                    startNumber = listScalingPoliciesRequest['start_number'];
                    limit = listScalingPoliciesRequest['limit'];
                }
            }

        
            if (scalingGroupId === null || scalingGroupId === undefined) {
            throw new RequiredError('scalingGroupId','Required parameter scalingGroupId was null or undefined when calling listScalingPolicies.');
            }
            if (scalingPolicyName !== null && scalingPolicyName !== undefined) {
                localVarQueryParameter['scaling_policy_name'] = scalingPolicyName;
            }
            if (scalingPolicyType !== null && scalingPolicyType !== undefined) {
                localVarQueryParameter['scaling_policy_type'] = scalingPolicyType;
            }
            if (scalingPolicyId !== null && scalingPolicyId !== undefined) {
                localVarQueryParameter['scaling_policy_id'] = scalingPolicyId;
            }
            if (startNumber !== null && startNumber !== undefined) {
                localVarQueryParameter['start_number'] = startNumber;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'scaling_group_id': scalingGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据输入条件过滤查询策略执行的历史记录。查询结果分页显示。可根据日志ID，伸缩资源类型，伸缩资源ID，策略执行类型，查询额起始，查询截止时间，查询起始行号，查询记录数进行条件过滤查询。若不加过滤条件默认查询最多20条策略执行日志信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listScalingPolicyExecuteLogs(listScalingPolicyExecuteLogsRequest?: ListScalingPolicyExecuteLogsRequest) {
            const options = {
                method: "GET",
                url: "/autoscaling-api/v1/{project_id}/scaling_policy_execute_log/{scaling_policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let scalingPolicyId;
            
            let logId;
            
            let scalingResourceType;
            
            let scalingResourceId;
            
            let executeType;
            
            let startTime;
            
            let endTime;
            
            let startNumber;
            
            let limit;

            if (listScalingPolicyExecuteLogsRequest !== null && listScalingPolicyExecuteLogsRequest !== undefined) {
                if (listScalingPolicyExecuteLogsRequest instanceof ListScalingPolicyExecuteLogsRequest) {
                    scalingPolicyId = listScalingPolicyExecuteLogsRequest.scalingPolicyId;
                    logId = listScalingPolicyExecuteLogsRequest.logId;
                    scalingResourceType = listScalingPolicyExecuteLogsRequest.scalingResourceType;
                    scalingResourceId = listScalingPolicyExecuteLogsRequest.scalingResourceId;
                    executeType = listScalingPolicyExecuteLogsRequest.executeType;
                    startTime = listScalingPolicyExecuteLogsRequest.startTime;
                    endTime = listScalingPolicyExecuteLogsRequest.endTime;
                    startNumber = listScalingPolicyExecuteLogsRequest.startNumber;
                    limit = listScalingPolicyExecuteLogsRequest.limit;
                } else {
                    scalingPolicyId = listScalingPolicyExecuteLogsRequest['scaling_policy_id'];
                    logId = listScalingPolicyExecuteLogsRequest['log_id'];
                    scalingResourceType = listScalingPolicyExecuteLogsRequest['scaling_resource_type'];
                    scalingResourceId = listScalingPolicyExecuteLogsRequest['scaling_resource_id'];
                    executeType = listScalingPolicyExecuteLogsRequest['execute_type'];
                    startTime = listScalingPolicyExecuteLogsRequest['start_time'];
                    endTime = listScalingPolicyExecuteLogsRequest['end_time'];
                    startNumber = listScalingPolicyExecuteLogsRequest['start_number'];
                    limit = listScalingPolicyExecuteLogsRequest['limit'];
                }
            }

        
            if (scalingPolicyId === null || scalingPolicyId === undefined) {
            throw new RequiredError('scalingPolicyId','Required parameter scalingPolicyId was null or undefined when calling listScalingPolicyExecuteLogs.');
            }
            if (logId !== null && logId !== undefined) {
                localVarQueryParameter['log_id'] = logId;
            }
            if (scalingResourceType !== null && scalingResourceType !== undefined) {
                localVarQueryParameter['scaling_resource_type'] = scalingResourceType;
            }
            if (scalingResourceId !== null && scalingResourceId !== undefined) {
                localVarQueryParameter['scaling_resource_id'] = scalingResourceId;
            }
            if (executeType !== null && executeType !== undefined) {
                localVarQueryParameter['execute_type'] = executeType;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (startNumber !== null && startNumber !== undefined) {
                localVarQueryParameter['start_number'] = startNumber;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'scaling_policy_id': scalingPolicyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据项目ID和资源ID查询指定资源类型的资源标签列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listScalingTagInfosByResourceId(listScalingTagInfosByResourceIdRequest?: ListScalingTagInfosByResourceIdRequest) {
            const options = {
                method: "GET",
                url: "/autoscaling-api/v1/{project_id}/{resource_type}/{resource_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceType;
            
            let resourceId;

            if (listScalingTagInfosByResourceIdRequest !== null && listScalingTagInfosByResourceIdRequest !== undefined) {
                if (listScalingTagInfosByResourceIdRequest instanceof ListScalingTagInfosByResourceIdRequest) {
                    resourceType = listScalingTagInfosByResourceIdRequest.resourceType;
                    resourceId = listScalingTagInfosByResourceIdRequest.resourceId;
                } else {
                    resourceType = listScalingTagInfosByResourceIdRequest['resource_type'];
                    resourceId = listScalingTagInfosByResourceIdRequest['resource_id'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling listScalingTagInfosByResourceId.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling listScalingTagInfosByResourceId.');
            }

            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据项目ID查询指定资源类型的标签列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listScalingTagInfosByTenantId(listScalingTagInfosByTenantIdRequest?: ListScalingTagInfosByTenantIdRequest) {
            const options = {
                method: "GET",
                url: "/autoscaling-api/v1/{project_id}/{resource_type}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceType;

            if (listScalingTagInfosByTenantIdRequest !== null && listScalingTagInfosByTenantIdRequest !== undefined) {
                if (listScalingTagInfosByTenantIdRequest instanceof ListScalingTagInfosByTenantIdRequest) {
                    resourceType = listScalingTagInfosByTenantIdRequest.resourceType;
                } else {
                    resourceType = listScalingTagInfosByTenantIdRequest['resource_type'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling listScalingTagInfosByTenantId.');
            }

            options.pathParams = { 'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 启用或停止一个指定弹性伸缩组。已停用状态的伸缩组，不会自动触发任何伸缩活动。当伸缩组正在进行伸缩活动，即使停用，正在进行的伸缩活动也不会立即停止。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        pauseScalingGroup(pauseScalingGroupRequest?: PauseScalingGroupRequest) {
            const options = {
                method: "POST",
                url: "/autoscaling-api/v1/{project_id}/scaling_group/{scaling_group_id}/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let scalingGroupId;

            if (pauseScalingGroupRequest !== null && pauseScalingGroupRequest !== undefined) {
                if (pauseScalingGroupRequest instanceof PauseScalingGroupRequest) {
                    scalingGroupId = pauseScalingGroupRequest.scalingGroupId;
                    body = pauseScalingGroupRequest.body
                } else {
                    scalingGroupId = pauseScalingGroupRequest['scaling_group_id'];
                    body = pauseScalingGroupRequest['body'];
                }
            }

        
            if (scalingGroupId === null || scalingGroupId === undefined) {
            throw new RequiredError('scalingGroupId','Required parameter scalingGroupId was null or undefined when calling pauseScalingGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'scaling_group_id': scalingGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 立即执行或启用或停止一个指定弹性伸缩策略。当伸缩组、伸缩策略状态处于INSERVICE时，伸缩策略才能被正确执行，否则会执行失败。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        pauseScalingPolicy(pauseScalingPolicyRequest?: PauseScalingPolicyRequest) {
            const options = {
                method: "POST",
                url: "/autoscaling-api/v1/{project_id}/scaling_policy/{scaling_policy_id}/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let scalingPolicyId;

            if (pauseScalingPolicyRequest !== null && pauseScalingPolicyRequest !== undefined) {
                if (pauseScalingPolicyRequest instanceof PauseScalingPolicyRequest) {
                    scalingPolicyId = pauseScalingPolicyRequest.scalingPolicyId;
                    body = pauseScalingPolicyRequest.body
                } else {
                    scalingPolicyId = pauseScalingPolicyRequest['scaling_policy_id'];
                    body = pauseScalingPolicyRequest['body'];
                }
            }

        
            if (scalingPolicyId === null || scalingPolicyId === undefined) {
            throw new RequiredError('scalingPolicyId','Required parameter scalingPolicyId was null or undefined when calling pauseScalingPolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'scaling_policy_id': scalingPolicyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 启用或停止一个指定弹性伸缩组。已停用状态的伸缩组，不会自动触发任何伸缩活动。当伸缩组正在进行伸缩活动，即使停用，正在进行的伸缩活动也不会立即停止。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resumeScalingGroup(resumeScalingGroupRequest?: ResumeScalingGroupRequest) {
            const options = {
                method: "POST",
                url: "/autoscaling-api/v1/{project_id}/scaling_group/{scaling_group_id}/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let scalingGroupId;

            if (resumeScalingGroupRequest !== null && resumeScalingGroupRequest !== undefined) {
                if (resumeScalingGroupRequest instanceof ResumeScalingGroupRequest) {
                    scalingGroupId = resumeScalingGroupRequest.scalingGroupId;
                    body = resumeScalingGroupRequest.body
                } else {
                    scalingGroupId = resumeScalingGroupRequest['scaling_group_id'];
                    body = resumeScalingGroupRequest['body'];
                }
            }

        
            if (scalingGroupId === null || scalingGroupId === undefined) {
            throw new RequiredError('scalingGroupId','Required parameter scalingGroupId was null or undefined when calling resumeScalingGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'scaling_group_id': scalingGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 立即执行或启用或停止一个指定弹性伸缩策略。当伸缩组、伸缩策略状态处于INSERVICE时，伸缩策略才能被正确执行，否则会执行失败。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resumeScalingPolicy(resumeScalingPolicyRequest?: ResumeScalingPolicyRequest) {
            const options = {
                method: "POST",
                url: "/autoscaling-api/v1/{project_id}/scaling_policy/{scaling_policy_id}/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let scalingPolicyId;

            if (resumeScalingPolicyRequest !== null && resumeScalingPolicyRequest !== undefined) {
                if (resumeScalingPolicyRequest instanceof ResumeScalingPolicyRequest) {
                    scalingPolicyId = resumeScalingPolicyRequest.scalingPolicyId;
                    body = resumeScalingPolicyRequest.body
                } else {
                    scalingPolicyId = resumeScalingPolicyRequest['scaling_policy_id'];
                    body = resumeScalingPolicyRequest['body'];
                }
            }

        
            if (scalingPolicyId === null || scalingPolicyId === undefined) {
            throw new RequiredError('scalingPolicyId','Required parameter scalingPolicyId was null or undefined when calling resumeScalingPolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'scaling_policy_id': scalingPolicyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据伸缩组ID及生命周期挂钩名称查询指定的生命周期挂钩详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showLifeCycleHook(showLifeCycleHookRequest?: ShowLifeCycleHookRequest) {
            const options = {
                method: "GET",
                url: "/autoscaling-api/v1/{project_id}/scaling_lifecycle_hook/{scaling_group_id}/{lifecycle_hook_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let scalingGroupId;
            
            let lifecycleHookName;

            if (showLifeCycleHookRequest !== null && showLifeCycleHookRequest !== undefined) {
                if (showLifeCycleHookRequest instanceof ShowLifeCycleHookRequest) {
                    scalingGroupId = showLifeCycleHookRequest.scalingGroupId;
                    lifecycleHookName = showLifeCycleHookRequest.lifecycleHookName;
                } else {
                    scalingGroupId = showLifeCycleHookRequest['scaling_group_id'];
                    lifecycleHookName = showLifeCycleHookRequest['lifecycle_hook_name'];
                }
            }

        
            if (scalingGroupId === null || scalingGroupId === undefined) {
            throw new RequiredError('scalingGroupId','Required parameter scalingGroupId was null or undefined when calling showLifeCycleHook.');
            }
            if (lifecycleHookName === null || lifecycleHookName === undefined) {
            throw new RequiredError('lifecycleHookName','Required parameter lifecycleHookName was null or undefined when calling showLifeCycleHook.');
            }

            options.pathParams = { 'scaling_group_id': scalingGroupId,'lifecycle_hook_name': lifecycleHookName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据伸缩组ID查询指定弹性伸缩组下的伸缩策略和伸缩实例的配额总数及已使用配额数。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPolicyAndInstanceQuota(showPolicyAndInstanceQuotaRequest?: ShowPolicyAndInstanceQuotaRequest) {
            const options = {
                method: "GET",
                url: "/autoscaling-api/v1/{project_id}/quotas/{scaling_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let scalingGroupId;

            if (showPolicyAndInstanceQuotaRequest !== null && showPolicyAndInstanceQuotaRequest !== undefined) {
                if (showPolicyAndInstanceQuotaRequest instanceof ShowPolicyAndInstanceQuotaRequest) {
                    scalingGroupId = showPolicyAndInstanceQuotaRequest.scalingGroupId;
                } else {
                    scalingGroupId = showPolicyAndInstanceQuotaRequest['scaling_group_id'];
                }
            }

        
            if (scalingGroupId === null || scalingGroupId === undefined) {
            throw new RequiredError('scalingGroupId','Required parameter scalingGroupId was null or undefined when calling showPolicyAndInstanceQuota.');
            }

            options.pathParams = { 'scaling_group_id': scalingGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定租户下的弹性伸缩组、伸缩配置、伸缩带宽策略、伸缩策略和伸缩实例的配额总数及已使用配额数。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showResourceQuota() {
            const options = {
                method: "GET",
                url: "/autoscaling-api/v1/{project_id}/quotas",
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
         * 根据伸缩配置ID查询一个弹性伸缩配置的详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showScalingConfig(showScalingConfigRequest?: ShowScalingConfigRequest) {
            const options = {
                method: "GET",
                url: "/autoscaling-api/v1/{project_id}/scaling_configuration/{scaling_configuration_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let scalingConfigurationId;

            if (showScalingConfigRequest !== null && showScalingConfigRequest !== undefined) {
                if (showScalingConfigRequest instanceof ShowScalingConfigRequest) {
                    scalingConfigurationId = showScalingConfigRequest.scalingConfigurationId;
                } else {
                    scalingConfigurationId = showScalingConfigRequest['scaling_configuration_id'];
                }
            }

        
            if (scalingConfigurationId === null || scalingConfigurationId === undefined) {
            throw new RequiredError('scalingConfigurationId','Required parameter scalingConfigurationId was null or undefined when calling showScalingConfig.');
            }

            options.pathParams = { 'scaling_configuration_id': scalingConfigurationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询一个指定弹性伸缩组详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showScalingGroup(showScalingGroupRequest?: ShowScalingGroupRequest) {
            const options = {
                method: "GET",
                url: "/autoscaling-api/v1/{project_id}/scaling_group/{scaling_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let scalingGroupId;

            if (showScalingGroupRequest !== null && showScalingGroupRequest !== undefined) {
                if (showScalingGroupRequest instanceof ShowScalingGroupRequest) {
                    scalingGroupId = showScalingGroupRequest.scalingGroupId;
                } else {
                    scalingGroupId = showScalingGroupRequest['scaling_group_id'];
                }
            }

        
            if (scalingGroupId === null || scalingGroupId === undefined) {
            throw new RequiredError('scalingGroupId','Required parameter scalingGroupId was null or undefined when calling showScalingGroup.');
            }

            options.pathParams = { 'scaling_group_id': scalingGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定弹性伸缩策略信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showScalingPolicy(showScalingPolicyRequest?: ShowScalingPolicyRequest) {
            const options = {
                method: "GET",
                url: "/autoscaling-api/v1/{project_id}/scaling_policy/{scaling_policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let scalingPolicyId;

            if (showScalingPolicyRequest !== null && showScalingPolicyRequest !== undefined) {
                if (showScalingPolicyRequest instanceof ShowScalingPolicyRequest) {
                    scalingPolicyId = showScalingPolicyRequest.scalingPolicyId;
                } else {
                    scalingPolicyId = showScalingPolicyRequest['scaling_policy_id'];
                }
            }

        
            if (scalingPolicyId === null || scalingPolicyId === undefined) {
            throw new RequiredError('scalingPolicyId','Required parameter scalingPolicyId was null or undefined when calling showScalingPolicy.');
            }

            options.pathParams = { 'scaling_policy_id': scalingPolicyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新计划任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateGroupScheduledTask(updateGroupScheduledTaskRequest?: UpdateGroupScheduledTaskRequest) {
            const options = {
                method: "PUT",
                url: "/autoscaling-api/v1/{project_id}/scaling-groups/{scaling_group_id}/scheduled-tasks/{scheduled_task_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let scalingGroupId;
            
            let scheduledTaskId;

            if (updateGroupScheduledTaskRequest !== null && updateGroupScheduledTaskRequest !== undefined) {
                if (updateGroupScheduledTaskRequest instanceof UpdateGroupScheduledTaskRequest) {
                    scalingGroupId = updateGroupScheduledTaskRequest.scalingGroupId;
                    scheduledTaskId = updateGroupScheduledTaskRequest.scheduledTaskId;
                    body = updateGroupScheduledTaskRequest.body
                } else {
                    scalingGroupId = updateGroupScheduledTaskRequest['scaling_group_id'];
                    scheduledTaskId = updateGroupScheduledTaskRequest['scheduled_task_id'];
                    body = updateGroupScheduledTaskRequest['body'];
                }
            }

        
            if (scalingGroupId === null || scalingGroupId === undefined) {
            throw new RequiredError('scalingGroupId','Required parameter scalingGroupId was null or undefined when calling updateGroupScheduledTask.');
            }
            if (scheduledTaskId === null || scheduledTaskId === undefined) {
            throw new RequiredError('scheduledTaskId','Required parameter scheduledTaskId was null or undefined when calling updateGroupScheduledTask.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'scaling_group_id': scalingGroupId,'scheduled_task_id': scheduledTaskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改一个指定生命周期挂钩中的信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateLifeCycleHook(updateLifeCycleHookRequest?: UpdateLifeCycleHookRequest) {
            const options = {
                method: "PUT",
                url: "/autoscaling-api/v1/{project_id}/scaling_lifecycle_hook/{scaling_group_id}/{lifecycle_hook_name}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let scalingGroupId;
            
            let lifecycleHookName;

            if (updateLifeCycleHookRequest !== null && updateLifeCycleHookRequest !== undefined) {
                if (updateLifeCycleHookRequest instanceof UpdateLifeCycleHookRequest) {
                    scalingGroupId = updateLifeCycleHookRequest.scalingGroupId;
                    lifecycleHookName = updateLifeCycleHookRequest.lifecycleHookName;
                    body = updateLifeCycleHookRequest.body
                } else {
                    scalingGroupId = updateLifeCycleHookRequest['scaling_group_id'];
                    lifecycleHookName = updateLifeCycleHookRequest['lifecycle_hook_name'];
                    body = updateLifeCycleHookRequest['body'];
                }
            }

        
            if (scalingGroupId === null || scalingGroupId === undefined) {
            throw new RequiredError('scalingGroupId','Required parameter scalingGroupId was null or undefined when calling updateLifeCycleHook.');
            }
            if (lifecycleHookName === null || lifecycleHookName === undefined) {
            throw new RequiredError('lifecycleHookName','Required parameter lifecycleHookName was null or undefined when calling updateLifeCycleHook.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'scaling_group_id': scalingGroupId,'lifecycle_hook_name': lifecycleHookName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改一个指定弹性伸缩组中的信息。更换伸缩组的伸缩配置，伸缩组中已经存在的使用之前伸缩配置创建的云服务器云主机不受影响。伸缩组为没有正在进行的伸缩活动时，可以修改伸缩组的子网、可用区和负载均衡配置。当伸缩组的期望实例数改变时，会触发伸缩活动加入或移出实例。期望实例数必须大于或等于最小实例数，必须小于或等于最大实例数。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateScalingGroup(updateScalingGroupRequest?: UpdateScalingGroupRequest) {
            const options = {
                method: "PUT",
                url: "/autoscaling-api/v1/{project_id}/scaling_group/{scaling_group_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let scalingGroupId;

            if (updateScalingGroupRequest !== null && updateScalingGroupRequest !== undefined) {
                if (updateScalingGroupRequest instanceof UpdateScalingGroupRequest) {
                    scalingGroupId = updateScalingGroupRequest.scalingGroupId;
                    body = updateScalingGroupRequest.body
                } else {
                    scalingGroupId = updateScalingGroupRequest['scaling_group_id'];
                    body = updateScalingGroupRequest['body'];
                }
            }

        
            if (scalingGroupId === null || scalingGroupId === undefined) {
            throw new RequiredError('scalingGroupId','Required parameter scalingGroupId was null or undefined when calling updateScalingGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'scaling_group_id': scalingGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改指定弹性伸缩策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateScalingPolicy(updateScalingPolicyRequest?: UpdateScalingPolicyRequest) {
            const options = {
                method: "PUT",
                url: "/autoscaling-api/v1/{project_id}/scaling_policy/{scaling_policy_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let scalingPolicyId;

            if (updateScalingPolicyRequest !== null && updateScalingPolicyRequest !== undefined) {
                if (updateScalingPolicyRequest instanceof UpdateScalingPolicyRequest) {
                    scalingPolicyId = updateScalingPolicyRequest.scalingPolicyId;
                    body = updateScalingPolicyRequest.body
                } else {
                    scalingPolicyId = updateScalingPolicyRequest['scaling_policy_id'];
                    body = updateScalingPolicyRequest['body'];
                }
            }

        
            if (scalingPolicyId === null || scalingPolicyId === undefined) {
            throw new RequiredError('scalingPolicyId','Required parameter scalingPolicyId was null or undefined when calling updateScalingPolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'scaling_policy_id': scalingPolicyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询弹性伸缩API所有版本信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApiVersions() {
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
         * 根据租户id和资源id查询指定资源类型的标签列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showApiVersion(showApiVersionRequest?: ShowApiVersionRequest) {
            const options = {
                method: "GET",
                url: "/{api_version}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let apiVersion;

            if (showApiVersionRequest !== null && showApiVersionRequest !== undefined) {
                if (showApiVersionRequest instanceof ShowApiVersionRequest) {
                    apiVersion = showApiVersionRequest.apiVersion;
                } else {
                    apiVersion = showApiVersionRequest['api_version'];
                }
            }

        
            if (apiVersion === null || apiVersion === undefined) {
            throw new RequiredError('apiVersion','Required parameter apiVersion was null or undefined when calling showApiVersion.');
            }

            options.pathParams = { 'api_version': apiVersion, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 可针对不同类型资源如伸缩组或带宽，创建弹性伸缩策略。创建弹性伸缩策略V2版本与V1版本的区别在于，V2版本支持创建对带宽资源进行调整的策略，通过伸缩资源类型区分伸缩资源。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createScalingV2Policy(createScalingV2PolicyRequest?: CreateScalingV2PolicyRequest) {
            const options = {
                method: "POST",
                url: "/autoscaling-api/v2/{project_id}/scaling_policy",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createScalingV2PolicyRequest !== null && createScalingV2PolicyRequest !== undefined) {
                if (createScalingV2PolicyRequest instanceof CreateScalingV2PolicyRequest) {
                    body = createScalingV2PolicyRequest.body
                } else {
                    body = createScalingV2PolicyRequest['body'];
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
         * 根据输入条件过滤查询弹性伸缩策略，支持查询当前租户下全量伸缩策略。查询结果分页显示。可根据伸缩资源ID，伸缩资源类型，伸缩策略名称，伸缩策略ID，告警ID，企业项目ID，起始行号，记录数，排序方式等条件进行过滤查询。若不加过滤添加默认查询该租户下最多20条伸缩策略信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAllScalingV2Policies(listAllScalingV2PoliciesRequest?: ListAllScalingV2PoliciesRequest) {
            const options = {
                method: "GET",
                url: "/autoscaling-api/v2/{project_id}/scaling_policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let scalingResourceId;
            
            let scalingResourceType;
            
            let scalingPolicyName;
            
            let scalingPolicyType;
            
            let scalingPolicyId;
            
            let startNumber;
            
            let limit;
            
            let sortBy;
            
            let order;
            
            let enterpriseProjectId;
            
            let alarmId;

            if (listAllScalingV2PoliciesRequest !== null && listAllScalingV2PoliciesRequest !== undefined) {
                if (listAllScalingV2PoliciesRequest instanceof ListAllScalingV2PoliciesRequest) {
                    scalingResourceId = listAllScalingV2PoliciesRequest.scalingResourceId;
                    scalingResourceType = listAllScalingV2PoliciesRequest.scalingResourceType;
                    scalingPolicyName = listAllScalingV2PoliciesRequest.scalingPolicyName;
                    scalingPolicyType = listAllScalingV2PoliciesRequest.scalingPolicyType;
                    scalingPolicyId = listAllScalingV2PoliciesRequest.scalingPolicyId;
                    startNumber = listAllScalingV2PoliciesRequest.startNumber;
                    limit = listAllScalingV2PoliciesRequest.limit;
                    sortBy = listAllScalingV2PoliciesRequest.sortBy;
                    order = listAllScalingV2PoliciesRequest.order;
                    enterpriseProjectId = listAllScalingV2PoliciesRequest.enterpriseProjectId;
                    alarmId = listAllScalingV2PoliciesRequest.alarmId;
                } else {
                    scalingResourceId = listAllScalingV2PoliciesRequest['scaling_resource_id'];
                    scalingResourceType = listAllScalingV2PoliciesRequest['scaling_resource_type'];
                    scalingPolicyName = listAllScalingV2PoliciesRequest['scaling_policy_name'];
                    scalingPolicyType = listAllScalingV2PoliciesRequest['scaling_policy_type'];
                    scalingPolicyId = listAllScalingV2PoliciesRequest['scaling_policy_id'];
                    startNumber = listAllScalingV2PoliciesRequest['start_number'];
                    limit = listAllScalingV2PoliciesRequest['limit'];
                    sortBy = listAllScalingV2PoliciesRequest['sort_by'];
                    order = listAllScalingV2PoliciesRequest['order'];
                    enterpriseProjectId = listAllScalingV2PoliciesRequest['enterprise_project_id'];
                    alarmId = listAllScalingV2PoliciesRequest['alarm_id'];
                }
            }

        
            if (scalingResourceId !== null && scalingResourceId !== undefined) {
                localVarQueryParameter['scaling_resource_id'] = scalingResourceId;
            }
            if (scalingResourceType !== null && scalingResourceType !== undefined) {
                localVarQueryParameter['scaling_resource_type'] = scalingResourceType;
            }
            if (scalingPolicyName !== null && scalingPolicyName !== undefined) {
                localVarQueryParameter['scaling_policy_name'] = scalingPolicyName;
            }
            if (scalingPolicyType !== null && scalingPolicyType !== undefined) {
                localVarQueryParameter['scaling_policy_type'] = scalingPolicyType;
            }
            if (scalingPolicyId !== null && scalingPolicyId !== undefined) {
                localVarQueryParameter['scaling_policy_id'] = scalingPolicyId;
            }
            if (startNumber !== null && startNumber !== undefined) {
                localVarQueryParameter['start_number'] = startNumber;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (sortBy !== null && sortBy !== undefined) {
                localVarQueryParameter['sort_by'] = sortBy;
            }
            if (order !== null && order !== undefined) {
                localVarQueryParameter['order'] = order;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (alarmId !== null && alarmId !== undefined) {
                localVarQueryParameter['alarm_id'] = alarmId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据输入条件过滤查询弹性伸缩策略。查询结果分页显示。查询弹性伸缩策略V2版本与V1版本的区别在于，V2版本响应含伸缩资源类型。可根据伸缩策略名称，策略类型，伸缩策略ID，起始行号，记录数进行条件过滤查询。若不加过滤条件默认查询该租户下指定资源下最多20条伸缩策略信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listScalingV2Policies(listScalingV2PoliciesRequest?: ListScalingV2PoliciesRequest) {
            const options = {
                method: "GET",
                url: "/autoscaling-api/v2/{project_id}/scaling_policy/{scaling_resource_id}/list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let scalingResourceId;
            
            let scalingPolicyName;
            
            let scalingPolicyType;
            
            let scalingPolicyId;
            
            let startNumber;
            
            let limit;

            if (listScalingV2PoliciesRequest !== null && listScalingV2PoliciesRequest !== undefined) {
                if (listScalingV2PoliciesRequest instanceof ListScalingV2PoliciesRequest) {
                    scalingResourceId = listScalingV2PoliciesRequest.scalingResourceId;
                    scalingPolicyName = listScalingV2PoliciesRequest.scalingPolicyName;
                    scalingPolicyType = listScalingV2PoliciesRequest.scalingPolicyType;
                    scalingPolicyId = listScalingV2PoliciesRequest.scalingPolicyId;
                    startNumber = listScalingV2PoliciesRequest.startNumber;
                    limit = listScalingV2PoliciesRequest.limit;
                } else {
                    scalingResourceId = listScalingV2PoliciesRequest['scaling_resource_id'];
                    scalingPolicyName = listScalingV2PoliciesRequest['scaling_policy_name'];
                    scalingPolicyType = listScalingV2PoliciesRequest['scaling_policy_type'];
                    scalingPolicyId = listScalingV2PoliciesRequest['scaling_policy_id'];
                    startNumber = listScalingV2PoliciesRequest['start_number'];
                    limit = listScalingV2PoliciesRequest['limit'];
                }
            }

        
            if (scalingResourceId === null || scalingResourceId === undefined) {
            throw new RequiredError('scalingResourceId','Required parameter scalingResourceId was null or undefined when calling listScalingV2Policies.');
            }
            if (scalingPolicyName !== null && scalingPolicyName !== undefined) {
                localVarQueryParameter['scaling_policy_name'] = scalingPolicyName;
            }
            if (scalingPolicyType !== null && scalingPolicyType !== undefined) {
                localVarQueryParameter['scaling_policy_type'] = scalingPolicyType;
            }
            if (scalingPolicyId !== null && scalingPolicyId !== undefined) {
                localVarQueryParameter['scaling_policy_id'] = scalingPolicyId;
            }
            if (startNumber !== null && startNumber !== undefined) {
                localVarQueryParameter['start_number'] = startNumber;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'scaling_resource_id': scalingResourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定弹性伸缩策略信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showScalingV2Policy(showScalingV2PolicyRequest?: ShowScalingV2PolicyRequest) {
            const options = {
                method: "GET",
                url: "/autoscaling-api/v2/{project_id}/scaling_policy/{scaling_policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let scalingPolicyId;

            if (showScalingV2PolicyRequest !== null && showScalingV2PolicyRequest !== undefined) {
                if (showScalingV2PolicyRequest instanceof ShowScalingV2PolicyRequest) {
                    scalingPolicyId = showScalingV2PolicyRequest.scalingPolicyId;
                } else {
                    scalingPolicyId = showScalingV2PolicyRequest['scaling_policy_id'];
                }
            }

        
            if (scalingPolicyId === null || scalingPolicyId === undefined) {
            throw new RequiredError('scalingPolicyId','Required parameter scalingPolicyId was null or undefined when calling showScalingV2Policy.');
            }

            options.pathParams = { 'scaling_policy_id': scalingPolicyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改指定弹性伸缩策略。修改弹性伸缩策略V2版本与V1版本的区别在于，V2版本支持修改伸缩资源类型。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateScalingV2Policy(updateScalingV2PolicyRequest?: UpdateScalingV2PolicyRequest) {
            const options = {
                method: "PUT",
                url: "/autoscaling-api/v2/{project_id}/scaling_policy/{scaling_policy_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let scalingPolicyId;

            if (updateScalingV2PolicyRequest !== null && updateScalingV2PolicyRequest !== undefined) {
                if (updateScalingV2PolicyRequest instanceof UpdateScalingV2PolicyRequest) {
                    scalingPolicyId = updateScalingV2PolicyRequest.scalingPolicyId;
                    body = updateScalingV2PolicyRequest.body
                } else {
                    scalingPolicyId = updateScalingV2PolicyRequest['scaling_policy_id'];
                    body = updateScalingV2PolicyRequest['body'];
                }
            }

        
            if (scalingPolicyId === null || scalingPolicyId === undefined) {
            throw new RequiredError('scalingPolicyId','Required parameter scalingPolicyId was null or undefined when calling updateScalingV2Policy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'scaling_policy_id': scalingPolicyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): AsClient {
    return new AsClient(client);
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