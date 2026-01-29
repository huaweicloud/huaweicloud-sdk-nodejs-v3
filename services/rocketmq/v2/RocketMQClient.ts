import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AlterAutoVolumeExpandConfig } from './model/AlterAutoVolumeExpandConfig';
import { BatchCreateOrDeleteRocketmqTagRequest } from './model/BatchCreateOrDeleteRocketmqTagRequest';
import { BatchCreateOrDeleteRocketmqTagResponse } from './model/BatchCreateOrDeleteRocketmqTagResponse';
import { BatchCreateOrDeleteTagReq } from './model/BatchCreateOrDeleteTagReq';
import { BatchDeleteConsumerGroupReq } from './model/BatchDeleteConsumerGroupReq';
import { BatchDeleteConsumerGroupResp } from './model/BatchDeleteConsumerGroupResp';
import { BatchDeleteDiagnosisRecordsForRocketMqRequest } from './model/BatchDeleteDiagnosisRecordsForRocketMqRequest';
import { BatchDeleteDiagnosisRecordsForRocketMqResponse } from './model/BatchDeleteDiagnosisRecordsForRocketMqResponse';
import { BatchDeleteDiagnosisRecordsRequest } from './model/BatchDeleteDiagnosisRecordsRequest';
import { BatchDeleteDiagnosisRecordsResponse } from './model/BatchDeleteDiagnosisRecordsResponse';
import { BatchDeleteDiagnosisReportReq } from './model/BatchDeleteDiagnosisReportReq';
import { BatchDeleteInstanceReq } from './model/BatchDeleteInstanceReq';
import { BatchDeleteInstanceRespResults } from './model/BatchDeleteInstanceRespResults';
import { BatchDeleteInstancesRequest } from './model/BatchDeleteInstancesRequest';
import { BatchDeleteInstancesResponse } from './model/BatchDeleteInstancesResponse';
import { BatchDeleteRocketMqMigrationTaskRequest } from './model/BatchDeleteRocketMqMigrationTaskRequest';
import { BatchDeleteRocketMqMigrationTaskResponse } from './model/BatchDeleteRocketMqMigrationTaskResponse';
import { BatchDeleteTopicReq } from './model/BatchDeleteTopicReq';
import { BatchDeleteTopicResp } from './model/BatchDeleteTopicResp';
import { BatchResumeInstanceReq } from './model/BatchResumeInstanceReq';
import { BatchUpdateConsumerGroup } from './model/BatchUpdateConsumerGroup';
import { BatchUpdateConsumerGroupReq } from './model/BatchUpdateConsumerGroupReq';
import { BatchUpdateConsumerGroupRequest } from './model/BatchUpdateConsumerGroupRequest';
import { BatchUpdateConsumerGroupResponse } from './model/BatchUpdateConsumerGroupResponse';
import { Brokers } from './model/Brokers';
import { BssParam } from './model/BssParam';
import { ClientData } from './model/ClientData';
import { ConsumerDetailResp } from './model/ConsumerDetailResp';
import { ConsumerGroup } from './model/ConsumerGroup';
import { ConsumerList } from './model/ConsumerList';
import { ConsumersInTagEntity } from './model/ConsumersInTagEntity';
import { CreateConsumerGroupOrBatchDeleteConsumerGroupReq } from './model/CreateConsumerGroupOrBatchDeleteConsumerGroupReq';
import { CreateConsumerGroupOrBatchDeleteConsumerGroupRequest } from './model/CreateConsumerGroupOrBatchDeleteConsumerGroupRequest';
import { CreateConsumerGroupOrBatchDeleteConsumerGroupResponse } from './model/CreateConsumerGroupOrBatchDeleteConsumerGroupResponse';
import { CreateDiagnosisTaskForRocketMqRequest } from './model/CreateDiagnosisTaskForRocketMqRequest';
import { CreateDiagnosisTaskForRocketMqResponse } from './model/CreateDiagnosisTaskForRocketMqResponse';
import { CreateDiagnosisTaskRequest } from './model/CreateDiagnosisTaskRequest';
import { CreateDiagnosisTaskResponse } from './model/CreateDiagnosisTaskResponse';
import { CreateGroupResp } from './model/CreateGroupResp';
import { CreateInstanceByEngineReq } from './model/CreateInstanceByEngineReq';
import { CreateInstanceByEngineRequest } from './model/CreateInstanceByEngineRequest';
import { CreateInstanceByEngineResponse } from './model/CreateInstanceByEngineResponse';
import { CreateOrUpdateConsumerGroup } from './model/CreateOrUpdateConsumerGroup';
import { CreatePostPaidInstanceForRocketMqRequest } from './model/CreatePostPaidInstanceForRocketMqRequest';
import { CreatePostPaidInstanceForRocketMqResponse } from './model/CreatePostPaidInstanceForRocketMqResponse';
import { CreatePostPaidInstanceReq } from './model/CreatePostPaidInstanceReq';
import { CreatePostPaidInstanceRequest } from './model/CreatePostPaidInstanceRequest';
import { CreatePostPaidInstanceResponse } from './model/CreatePostPaidInstanceResponse';
import { CreateRocketMqMigrationTaskReq } from './model/CreateRocketMqMigrationTaskReq';
import { CreateRocketMqMigrationTaskRequest } from './model/CreateRocketMqMigrationTaskRequest';
import { CreateRocketMqMigrationTaskResponse } from './model/CreateRocketMqMigrationTaskResponse';
import { CreateTopicOrBatchDeleteTopicReq } from './model/CreateTopicOrBatchDeleteTopicReq';
import { CreateTopicOrBatchDeleteTopicRequest } from './model/CreateTopicOrBatchDeleteTopicRequest';
import { CreateTopicOrBatchDeleteTopicResponse } from './model/CreateTopicOrBatchDeleteTopicResponse';
import { CreateTopicReq } from './model/CreateTopicReq';
import { CreateTopicReqQueues } from './model/CreateTopicReqQueues';
import { CreateTopicResp } from './model/CreateTopicResp';
import { CreateUserRequest } from './model/CreateUserRequest';
import { CreateUserResponse } from './model/CreateUserResponse';
import { DeadletterResendReq } from './model/DeadletterResendReq';
import { DeadletterResendRespResendResults } from './model/DeadletterResendRespResendResults';
import { DeleteBackgroundTaskRequest } from './model/DeleteBackgroundTaskRequest';
import { DeleteBackgroundTaskResponse } from './model/DeleteBackgroundTaskResponse';
import { DeleteConsumerGroupRequest } from './model/DeleteConsumerGroupRequest';
import { DeleteConsumerGroupResponse } from './model/DeleteConsumerGroupResponse';
import { DeleteInstanceRequest } from './model/DeleteInstanceRequest';
import { DeleteInstanceResponse } from './model/DeleteInstanceResponse';
import { DeleteScheduledTaskRequest } from './model/DeleteScheduledTaskRequest';
import { DeleteScheduledTaskResponse } from './model/DeleteScheduledTaskResponse';
import { DeleteTopicRequest } from './model/DeleteTopicRequest';
import { DeleteTopicResponse } from './model/DeleteTopicResponse';
import { DeleteUserRequest } from './model/DeleteUserRequest';
import { DeleteUserResponse } from './model/DeleteUserResponse';
import { DiagnosisNodeReportEntity } from './model/DiagnosisNodeReportEntity';
import { DiagnosisReportResp } from './model/DiagnosisReportResp';
import { DiagnosisReq } from './model/DiagnosisReq';
import { EnableDnsRequest } from './model/EnableDnsRequest';
import { EnableDnsResponse } from './model/EnableDnsResponse';
import { IOSEntity } from './model/IOSEntity';
import { InstanceDetail } from './model/InstanceDetail';
import { InstanceRecycleInfo } from './model/InstanceRecycleInfo';
import { InstanceResumeResult } from './model/InstanceResumeResult';
import { ListAccessPolicyRespPolicies } from './model/ListAccessPolicyRespPolicies';
import { ListAvailableZonesElements } from './model/ListAvailableZonesElements';
import { ListAvailableZonesRequest } from './model/ListAvailableZonesRequest';
import { ListAvailableZonesResponse } from './model/ListAvailableZonesResponse';
import { ListBackgroundTasksRequest } from './model/ListBackgroundTasksRequest';
import { ListBackgroundTasksRespTasks } from './model/ListBackgroundTasksRespTasks';
import { ListBackgroundTasksResponse } from './model/ListBackgroundTasksResponse';
import { ListBrokersRequest } from './model/ListBrokersRequest';
import { ListBrokersRespBrokers } from './model/ListBrokersRespBrokers';
import { ListBrokersResponse } from './model/ListBrokersResponse';
import { ListConfigFeatures } from './model/ListConfigFeatures';
import { ListConfigFeaturesRequest } from './model/ListConfigFeaturesRequest';
import { ListConfigFeaturesResponse } from './model/ListConfigFeaturesResponse';
import { ListConsumeGroupAccessPolicyForRocketMqRequest } from './model/ListConsumeGroupAccessPolicyForRocketMqRequest';
import { ListConsumeGroupAccessPolicyForRocketMqResponse } from './model/ListConsumeGroupAccessPolicyForRocketMqResponse';
import { ListConsumeGroupAccessPolicyRequest } from './model/ListConsumeGroupAccessPolicyRequest';
import { ListConsumeGroupAccessPolicyResponse } from './model/ListConsumeGroupAccessPolicyResponse';
import { ListConsumerGroupOfTopicRequest } from './model/ListConsumerGroupOfTopicRequest';
import { ListConsumerGroupOfTopicResponse } from './model/ListConsumerGroupOfTopicResponse';
import { ListDiagnosisReportsForRocketMqRequest } from './model/ListDiagnosisReportsForRocketMqRequest';
import { ListDiagnosisReportsForRocketMqResponse } from './model/ListDiagnosisReportsForRocketMqResponse';
import { ListDiagnosisReportsRequest } from './model/ListDiagnosisReportsRequest';
import { ListDiagnosisReportsResponse } from './model/ListDiagnosisReportsResponse';
import { ListEngineProductsRequest } from './model/ListEngineProductsRequest';
import { ListEngineProductsResponse } from './model/ListEngineProductsResponse';
import { ListInstanceConsumerGroupsRequest } from './model/ListInstanceConsumerGroupsRequest';
import { ListInstanceConsumerGroupsResponse } from './model/ListInstanceConsumerGroupsResponse';
import { ListInstancesRequest } from './model/ListInstancesRequest';
import { ListInstancesResponse } from './model/ListInstancesResponse';
import { ListMessageTraceForRocketMqRequest } from './model/ListMessageTraceForRocketMqRequest';
import { ListMessageTraceForRocketMqResponse } from './model/ListMessageTraceForRocketMqResponse';
import { ListMessageTraceRequest } from './model/ListMessageTraceRequest';
import { ListMessageTraceRespTrace } from './model/ListMessageTraceRespTrace';
import { ListMessageTraceResponse } from './model/ListMessageTraceResponse';
import { ListMessagesForRocketMqRequest } from './model/ListMessagesForRocketMqRequest';
import { ListMessagesForRocketMqResponse } from './model/ListMessagesForRocketMqResponse';
import { ListMessagesRequest } from './model/ListMessagesRequest';
import { ListMessagesResponse } from './model/ListMessagesResponse';
import { ListRocketInstanceTopicsRequest } from './model/ListRocketInstanceTopicsRequest';
import { ListRocketInstanceTopicsResponse } from './model/ListRocketInstanceTopicsResponse';
import { ListRocketMqMigrationTaskRequest } from './model/ListRocketMqMigrationTaskRequest';
import { ListRocketMqMigrationTaskResponse } from './model/ListRocketMqMigrationTaskResponse';
import { ListScheduledTasksRequest } from './model/ListScheduledTasksRequest';
import { ListScheduledTasksResponse } from './model/ListScheduledTasksResponse';
import { ListTopicAccessPolicyRequest } from './model/ListTopicAccessPolicyRequest';
import { ListTopicAccessPolicyResponse } from './model/ListTopicAccessPolicyResponse';
import { ListUserRequest } from './model/ListUserRequest';
import { ListUserResponse } from './model/ListUserResponse';
import { Message } from './model/Message';
import { MessagePropertyList } from './model/MessagePropertyList';
import { MetadataDeleteReq } from './model/MetadataDeleteReq';
import { MetadataTask } from './model/MetadataTask';
import { MigrationRabbitBindingMetadata } from './model/MigrationRabbitBindingMetadata';
import { MigrationRabbitExchangeMetadata } from './model/MigrationRabbitExchangeMetadata';
import { MigrationRabbitQueueMetadata } from './model/MigrationRabbitQueueMetadata';
import { MigrationRabbitVhostMetadata } from './model/MigrationRabbitVhostMetadata';
import { MigrationRocketMqSubscriptionGroup } from './model/MigrationRocketMqSubscriptionGroup';
import { MigrationRocketMqTopicConfig } from './model/MigrationRocketMqTopicConfig';
import { ModifyConfigReq } from './model/ModifyConfigReq';
import { ModifyInstanceSslConfigRequest } from './model/ModifyInstanceSslConfigRequest';
import { ModifyInstanceSslConfigResponse } from './model/ModifyInstanceSslConfigResponse';
import { ModifyRecyclePolicyReq } from './model/ModifyRecyclePolicyReq';
import { ModifyRecyclePolicyRequest } from './model/ModifyRecyclePolicyRequest';
import { ModifyRecyclePolicyResponse } from './model/ModifyRecyclePolicyResponse';
import { NodeContextEntity } from './model/NodeContextEntity';
import { PlainSSLSwitchRep } from './model/PlainSSLSwitchRep';
import { ProductEntity } from './model/ProductEntity';
import { ProductEntityProperties } from './model/ProductEntityProperties';
import { Queue } from './model/Queue';
import { QuotaResourceEntity } from './model/QuotaResourceEntity';
import { QuotasRespQuotas } from './model/QuotasRespQuotas';
import { ResendReq } from './model/ResendReq';
import { ResetConsumeOffsetForRocketMqRequest } from './model/ResetConsumeOffsetForRocketMqRequest';
import { ResetConsumeOffsetForRocketMqResponse } from './model/ResetConsumeOffsetForRocketMqResponse';
import { ResetConsumeOffsetReq } from './model/ResetConsumeOffsetReq';
import { ResetConsumeOffsetRequest } from './model/ResetConsumeOffsetRequest';
import { ResetConsumeOffsetRespQueues } from './model/ResetConsumeOffsetRespQueues';
import { ResetConsumeOffsetResponse } from './model/ResetConsumeOffsetResponse';
import { ResizeEngineInstanceReq } from './model/ResizeEngineInstanceReq';
import { ResizeInstanceForRocketMqRequest } from './model/ResizeInstanceForRocketMqRequest';
import { ResizeInstanceForRocketMqResponse } from './model/ResizeInstanceForRocketMqResponse';
import { ResizeInstanceRequest } from './model/ResizeInstanceRequest';
import { ResizeInstanceResponse } from './model/ResizeInstanceResponse';
import { RestoreRecycleInstanceRequest } from './model/RestoreRecycleInstanceRequest';
import { RestoreRecycleInstanceResponse } from './model/RestoreRecycleInstanceResponse';
import { RocketMQConfigReq } from './model/RocketMQConfigReq';
import { RocketMQConfigResp } from './model/RocketMQConfigResp';
import { RocketMQExtendProductInfoEntity } from './model/RocketMQExtendProductInfoEntity';
import { RocketMQExtendProductIosEntity } from './model/RocketMQExtendProductIosEntity';
import { RocketMQExtendProductPropertiesEntity } from './model/RocketMQExtendProductPropertiesEntity';
import { RocketMQProductSupportFeaturesEntity } from './model/RocketMQProductSupportFeaturesEntity';
import { ScheduledTaskEntity } from './model/ScheduledTaskEntity';
import { SendDlqMessageForRocketMqRequest } from './model/SendDlqMessageForRocketMqRequest';
import { SendDlqMessageForRocketMqResponse } from './model/SendDlqMessageForRocketMqResponse';
import { SendDlqMessageRequest } from './model/SendDlqMessageRequest';
import { SendDlqMessageResponse } from './model/SendDlqMessageResponse';
import { SendMessageForRocketMqRequest } from './model/SendMessageForRocketMqRequest';
import { SendMessageForRocketMqResponse } from './model/SendMessageForRocketMqResponse';
import { SendMessageProperties } from './model/SendMessageProperties';
import { SendMessageReq } from './model/SendMessageReq';
import { SendMessageRequest } from './model/SendMessageRequest';
import { SendMessageResponse } from './model/SendMessageResponse';
import { ShowBackgroundTaskProgressRequest } from './model/ShowBackgroundTaskProgressRequest';
import { ShowBackgroundTaskProgressResponse } from './model/ShowBackgroundTaskProgressResponse';
import { ShowBackgroundTaskRequest } from './model/ShowBackgroundTaskRequest';
import { ShowBackgroundTaskResponse } from './model/ShowBackgroundTaskResponse';
import { ShowCesHierarchyRequest } from './model/ShowCesHierarchyRequest';
import { ShowCesHierarchyRespInstanceIds } from './model/ShowCesHierarchyRespInstanceIds';
import { ShowCesHierarchyRespNodes } from './model/ShowCesHierarchyRespNodes';
import { ShowCesHierarchyResponse } from './model/ShowCesHierarchyResponse';
import { ShowCeshierarchyRespChildren } from './model/ShowCeshierarchyRespChildren';
import { ShowCeshierarchyRespDimensions } from './model/ShowCeshierarchyRespDimensions';
import { ShowCeshierarchyRespDlq } from './model/ShowCeshierarchyRespDlq';
import { ShowCeshierarchyRespGroups } from './model/ShowCeshierarchyRespGroups';
import { ShowCeshierarchyRespTopics } from './model/ShowCeshierarchyRespTopics';
import { ShowConsumerConnectionsForRocketMqRequest } from './model/ShowConsumerConnectionsForRocketMqRequest';
import { ShowConsumerConnectionsForRocketMqResponse } from './model/ShowConsumerConnectionsForRocketMqResponse';
import { ShowConsumerConnectionsRequest } from './model/ShowConsumerConnectionsRequest';
import { ShowConsumerConnectionsResponse } from './model/ShowConsumerConnectionsResponse';
import { ShowConsumerListOrDetailsRequest } from './model/ShowConsumerListOrDetailsRequest';
import { ShowConsumerListOrDetailsResponse } from './model/ShowConsumerListOrDetailsResponse';
import { ShowDiagnosisReportForRocketMqRequest } from './model/ShowDiagnosisReportForRocketMqRequest';
import { ShowDiagnosisReportForRocketMqResponse } from './model/ShowDiagnosisReportForRocketMqResponse';
import { ShowDiagnosisReportRequest } from './model/ShowDiagnosisReportRequest';
import { ShowDiagnosisReportResponse } from './model/ShowDiagnosisReportResponse';
import { ShowDiagnosisStackForRocketMqRequest } from './model/ShowDiagnosisStackForRocketMqRequest';
import { ShowDiagnosisStackForRocketMqResponse } from './model/ShowDiagnosisStackForRocketMqResponse';
import { ShowDiagnosisStackRequest } from './model/ShowDiagnosisStackRequest';
import { ShowDiagnosisStackResponse } from './model/ShowDiagnosisStackResponse';
import { ShowEngineInstanceExtendProductInfoForRocketMqRequest } from './model/ShowEngineInstanceExtendProductInfoForRocketMqRequest';
import { ShowEngineInstanceExtendProductInfoForRocketMqResponse } from './model/ShowEngineInstanceExtendProductInfoForRocketMqResponse';
import { ShowEngineInstanceExtendProductInfoRequest } from './model/ShowEngineInstanceExtendProductInfoRequest';
import { ShowEngineInstanceExtendProductInfoResponse } from './model/ShowEngineInstanceExtendProductInfoResponse';
import { ShowGroupRequest } from './model/ShowGroupRequest';
import { ShowGroupResponse } from './model/ShowGroupResponse';
import { ShowInstanceNodesRequest } from './model/ShowInstanceNodesRequest';
import { ShowInstanceNodesResponse } from './model/ShowInstanceNodesResponse';
import { ShowInstanceRequest } from './model/ShowInstanceRequest';
import { ShowInstanceResponse } from './model/ShowInstanceResponse';
import { ShowOneTopicRequest } from './model/ShowOneTopicRequest';
import { ShowOneTopicResponse } from './model/ShowOneTopicResponse';
import { ShowQuotasRequest } from './model/ShowQuotasRequest';
import { ShowQuotasResponse } from './model/ShowQuotasResponse';
import { ShowRecycleInstancesRequest } from './model/ShowRecycleInstancesRequest';
import { ShowRecycleInstancesResponse } from './model/ShowRecycleInstancesResponse';
import { ShowRocketMqConfigsRequest } from './model/ShowRocketMqConfigsRequest';
import { ShowRocketMqConfigsResponse } from './model/ShowRocketMqConfigsResponse';
import { ShowRocketMqProductCoresRequest } from './model/ShowRocketMqProductCoresRequest';
import { ShowRocketMqProductCoresResponse } from './model/ShowRocketMqProductCoresResponse';
import { ShowRocketMqScalePreCheckInfoRequest } from './model/ShowRocketMqScalePreCheckInfoRequest';
import { ShowRocketMqScalePreCheckInfoResponse } from './model/ShowRocketMqScalePreCheckInfoResponse';
import { ShowRocketmqProjectTagsRequest } from './model/ShowRocketmqProjectTagsRequest';
import { ShowRocketmqProjectTagsResponse } from './model/ShowRocketmqProjectTagsResponse';
import { ShowRocketmqTagsRequest } from './model/ShowRocketmqTagsRequest';
import { ShowRocketmqTagsResponse } from './model/ShowRocketmqTagsResponse';
import { ShowTopicStatusRequest } from './model/ShowTopicStatusRequest';
import { ShowTopicStatusRespBrokers } from './model/ShowTopicStatusRespBrokers';
import { ShowTopicStatusRespQueues } from './model/ShowTopicStatusRespQueues';
import { ShowTopicStatusResponse } from './model/ShowTopicStatusResponse';
import { ShowUserRequest } from './model/ShowUserRequest';
import { ShowUserResponse } from './model/ShowUserResponse';
import { ShowVolumeExpandConfigRequest } from './model/ShowVolumeExpandConfigRequest';
import { ShowVolumeExpandConfigResponse } from './model/ShowVolumeExpandConfigResponse';
import { StepDetail } from './model/StepDetail';
import { Subscription } from './model/Subscription';
import { SubscriptionEntity } from './model/SubscriptionEntity';
import { TagEntity } from './model/TagEntity';
import { TagMultyValueEntity } from './model/TagMultyValueEntity';
import { Topic } from './model/Topic';
import { TopicBrokers } from './model/TopicBrokers';
import { UpdateConsumerGroup } from './model/UpdateConsumerGroup';
import { UpdateConsumerGroupRequest } from './model/UpdateConsumerGroupRequest';
import { UpdateConsumerGroupResponse } from './model/UpdateConsumerGroupResponse';
import { UpdateInstanceReq } from './model/UpdateInstanceReq';
import { UpdateInstanceRequest } from './model/UpdateInstanceRequest';
import { UpdateInstanceResponse } from './model/UpdateInstanceResponse';
import { UpdateRocketMqConfigsRequest } from './model/UpdateRocketMqConfigsRequest';
import { UpdateRocketMqConfigsResponse } from './model/UpdateRocketMqConfigsResponse';
import { UpdateScheduledTaskRequest } from './model/UpdateScheduledTaskRequest';
import { UpdateScheduledTaskResponse } from './model/UpdateScheduledTaskResponse';
import { UpdateTopicQueueEntity } from './model/UpdateTopicQueueEntity';
import { UpdateTopicReq } from './model/UpdateTopicReq';
import { UpdateTopicRequest } from './model/UpdateTopicRequest';
import { UpdateTopicResponse } from './model/UpdateTopicResponse';
import { UpdateUserRequest } from './model/UpdateUserRequest';
import { UpdateUserResponse } from './model/UpdateUserResponse';
import { UpdateVolumeExpansionConfigRequest } from './model/UpdateVolumeExpansionConfigRequest';
import { UpdateVolumeExpansionConfigResponse } from './model/UpdateVolumeExpansionConfigResponse';
import { User } from './model/User';
import { UserGroupPerms } from './model/UserGroupPerms';
import { UserResp } from './model/UserResp';
import { UserRespGroupPerms } from './model/UserRespGroupPerms';
import { UserTopicPerms } from './model/UserTopicPerms';
import { ValidateConsumedMessageForRocketMqRequest } from './model/ValidateConsumedMessageForRocketMqRequest';
import { ValidateConsumedMessageForRocketMqResponse } from './model/ValidateConsumedMessageForRocketMqResponse';
import { ValidateConsumedMessageRequest } from './model/ValidateConsumedMessageRequest';
import { ValidateConsumedMessageResponse } from './model/ValidateConsumedMessageResponse';

export class RocketMQClient {
    public static newBuilder(): ClientBuilder<RocketMQClient> {
            let client = new ClientBuilder<RocketMQClient>(newClient);
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
     * 批量添加或删除实例标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加或删除实例标签
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {BatchCreateOrDeleteTagReq} batchCreateOrDeleteRocketmqTagRequestBody **参数解释**： 请求信息。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateOrDeleteRocketmqTag(batchCreateOrDeleteRocketmqTagRequest?: BatchCreateOrDeleteRocketmqTagRequest): Promise<BatchCreateOrDeleteRocketmqTagResponse> {
        const options = ParamCreater().batchCreateOrDeleteRocketmqTag(batchCreateOrDeleteRocketmqTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除实例诊断报告。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除实例诊断报告
     * @param {string} engine **参数解释**： 引擎。 **约束限制**： 不涉及。 **取值范围**： - rocketmq：RocketMQ消息引擎。 - reliability：RocketMQ消息引擎别称。 **默认取值**： 不涉及。
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {BatchDeleteDiagnosisReportReq} batchDeleteDiagnosisRecordsRequestBody **参数解释**： 批量删除诊断报告请求体。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteDiagnosisRecords(batchDeleteDiagnosisRecordsRequest?: BatchDeleteDiagnosisRecordsRequest): Promise<BatchDeleteDiagnosisRecordsResponse> {
        const options = ParamCreater().batchDeleteDiagnosisRecords(batchDeleteDiagnosisRecordsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除实例诊断报告。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除实例诊断报告
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {BatchDeleteDiagnosisReportReq} batchDeleteDiagnosisRecordsForRocketMqRequestBody **参数解释**： 批量删除诊断报告请求体。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteDiagnosisRecordsForRocketMq(batchDeleteDiagnosisRecordsForRocketMqRequest?: BatchDeleteDiagnosisRecordsForRocketMqRequest): Promise<BatchDeleteDiagnosisRecordsForRocketMqResponse> {
        const options = ParamCreater().batchDeleteDiagnosisRecordsForRocketMq(batchDeleteDiagnosisRecordsForRocketMqRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除实例。**实例删除后，实例中原有的数据将被删除，且没有备份，请谨慎操作。**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除实例
     * @param {BatchDeleteInstanceReq} batchDeleteInstancesRequestBody **参数解释**： 请求消息。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
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
     * 批量删除元数据迁移任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除元数据迁移任务
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {MetadataDeleteReq} batchDeleteRocketMqMigrationTaskRequestBody **参数解释**： 任务ID列表。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteRocketMqMigrationTask(batchDeleteRocketMqMigrationTaskRequest?: BatchDeleteRocketMqMigrationTaskRequest): Promise<BatchDeleteRocketMqMigrationTaskResponse> {
        const options = ParamCreater().batchDeleteRocketMqMigrationTask(batchDeleteRocketMqMigrationTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量修改消费组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量修改消费组
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {BatchUpdateConsumerGroupReq} batchUpdateConsumerGroupRequestBody **参数解释**： 请求消息。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchUpdateConsumerGroup(batchUpdateConsumerGroupRequest?: BatchUpdateConsumerGroupRequest): Promise<BatchUpdateConsumerGroupResponse> {
        const options = ParamCreater().batchUpdateConsumerGroup(batchUpdateConsumerGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建消费组或批量删除消费组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建消费组或批量删除消费组
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {CreateConsumerGroupOrBatchDeleteConsumerGroupReq} createConsumerGroupOrBatchDeleteConsumerGroupRequestBody **参数解释**： 请求消息。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [action] **参数解释**： 批量删除消费组时使用，不配置则为创建接口。 **约束限制**： 不涉及。 **取值范围**： - delete：删除。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createConsumerGroupOrBatchDeleteConsumerGroup(createConsumerGroupOrBatchDeleteConsumerGroupRequest?: CreateConsumerGroupOrBatchDeleteConsumerGroupRequest): Promise<CreateConsumerGroupOrBatchDeleteConsumerGroupResponse> {
        const options = ParamCreater().createConsumerGroupOrBatchDeleteConsumerGroup(createConsumerGroupOrBatchDeleteConsumerGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建实例诊断任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建实例诊断任务
     * @param {string} engine **参数解释**： 引擎。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {DiagnosisReq} createDiagnosisTaskRequestBody **参数解释**： 创建诊断任务请求体。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
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
     * 创建实例诊断任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建实例诊断任务
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {DiagnosisReq} createDiagnosisTaskForRocketMqRequestBody **参数解释**： 创建诊断任务请求体。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDiagnosisTaskForRocketMq(createDiagnosisTaskForRocketMqRequest?: CreateDiagnosisTaskForRocketMqRequest): Promise<CreateDiagnosisTaskForRocketMqResponse> {
        const options = ParamCreater().createDiagnosisTaskForRocketMq(createDiagnosisTaskForRocketMqRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建实例[，该接口支持创建按需和包周期两种计费方式的实例](tag:hws,hws_eu,hws_hk,ocb,hws_ocb,ctc,g42,hk_g42,tm,hk_tm,cmcc,ax)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建实例
     * @param {'rocketmq' | 'reliability'} engine **参数解释**： 消息引擎。 **约束限制**： 不涉及。 **取值范围**： - rocketmq：RocketMQ消息引擎。 - reliability：RocketMQ消息引擎别称。 **默认取值**： 不涉及。
     * @param {CreateInstanceByEngineReq} createInstanceByEngineRequestBody **参数解释**： 请求消息。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createInstanceByEngine(createInstanceByEngineRequest?: CreateInstanceByEngineRequest): Promise<CreateInstanceByEngineResponse> {
        const options = ParamCreater().createInstanceByEngine(createInstanceByEngineRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建实例，该接口创建的实例为按需计费的方式。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建实例（按需）
     * @param {CreatePostPaidInstanceReq} createPostPaidInstanceRequestBody **参数解释**： 请求消息。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPostPaidInstance(createPostPaidInstanceRequest?: CreatePostPaidInstanceRequest): Promise<CreatePostPaidInstanceResponse> {
        const options = ParamCreater().createPostPaidInstance(createPostPaidInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建实例[，该接口支持创建按需和包周期两种计费方式的实例](tag:hws,hws_eu,hws_hk,ocb,hws_ocb,ctc,g42,hk_g42,tm,hk_tm,cmcc,ax)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建实例
     * @param {CreateInstanceByEngineReq} createPostPaidInstanceForRocketMqRequestBody **参数解释**： 请求消息。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPostPaidInstanceForRocketMq(createPostPaidInstanceForRocketMqRequest?: CreatePostPaidInstanceForRocketMqRequest): Promise<CreatePostPaidInstanceForRocketMqResponse> {
        const options = ParamCreater().createPostPaidInstanceForRocketMq(createPostPaidInstanceForRocketMqRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 新建元数据迁移任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新建元数据迁移任务
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {'true' | 'false'} overwrite **参数解释**： true开启同名覆盖，会对已有的同名元数据的配置进行修改，false时当Topic或group已存在则会报错。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} name **参数解释**： 迁移任务名称，名称规则参考创建实例。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {'rocketmq' | 'rabbitToRocket'} type **参数解释**： 迁移任务类型，分为自建RocketMQ上云(rocketmq)、自建RabbitMQ上云(rabbitToRocket) **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {CreateRocketMqMigrationTaskReq} createRocketMqMigrationTaskRequestBody **参数解释**： 元数据json文件。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRocketMqMigrationTask(createRocketMqMigrationTaskRequest?: CreateRocketMqMigrationTaskRequest): Promise<CreateRocketMqMigrationTaskResponse> {
        const options = ParamCreater().createRocketMqMigrationTask(createRocketMqMigrationTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建用户。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建用户
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {User} createUserRequestBody **参数解释**： 请求消息。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createUser(createUserRequest?: CreateUserRequest): Promise<CreateUserResponse> {
        const options = ParamCreater().createUser(createUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除后台任务管理中的指定记录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除后台任务管理中的指定记录
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} taskId **参数解释**： 任务ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteBackgroundTask(deleteBackgroundTaskRequest?: DeleteBackgroundTaskRequest): Promise<DeleteBackgroundTaskResponse> {
        const options = ParamCreater().deleteBackgroundTask(deleteBackgroundTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定消费组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除指定消费组
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} group **参数解释**： 消费组名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteConsumerGroup(deleteConsumerGroupRequest?: DeleteConsumerGroupRequest): Promise<DeleteConsumerGroupResponse> {
        const options = ParamCreater().deleteConsumerGroup(deleteConsumerGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定的实例，释放该实例的所有资源。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除指定的实例
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
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
     * 删除定时任务管理中的指定记录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除定时任务管理中的指定记录
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} taskId **参数解释**： 定时任务ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteScheduledTask(deleteScheduledTaskRequest?: DeleteScheduledTaskRequest): Promise<DeleteScheduledTaskResponse> {
        const options = ParamCreater().deleteScheduledTask(deleteScheduledTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除用户。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除用户
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} userName **参数解释**： 用户名。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteUser(deleteUserRequest?: DeleteUserRequest): Promise<DeleteUserResponse> {
        const options = ParamCreater().deleteUser(deleteUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开启RocketMQ实例域名访问能力。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启RocketMQ实例域名访问能力
     * @param {string} instanceId 实例ID，从[查询所有实例列表](ListInstances.xml)获取实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public enableDns(enableDnsRequest?: EnableDnsRequest): Promise<EnableDnsResponse> {
        const options = ParamCreater().enableDns(enableDnsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在创建实例时，需要配置实例所在的可用区ID，可通过该接口查询可用区的ID。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可用区信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAvailableZones(listAvailableZonesRequest?: ListAvailableZonesRequest): Promise<ListAvailableZonesResponse> {
        const options = ParamCreater().listAvailableZones();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例的后台任务列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例的后台任务列表
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [offset] **参数解释**： 开启查询的任务编号。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 不涉及。
     * @param {number} [limit] **参数解释**： 查询数量。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [beginTime] **参数解释**： 查询任务的最小时间，格式为YYYYMMDDHHmmss。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 不涉及。
     * @param {string} [endTime] **参数解释**： 查询任务的最大时间，格式为YYYYMMDDHHmmss。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBackgroundTasks(listBackgroundTasksRequest?: ListBackgroundTasksRequest): Promise<ListBackgroundTasksResponse> {
        const options = ParamCreater().listBackgroundTasks(listBackgroundTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询代理列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询代理列表
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [limit] **参数解释**： 查询数量。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [offset] **参数解释**： 偏移量，表示从此偏移量开始查询，offset大于等于0。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBrokers(listBrokersRequest?: ListBrokersRequest): Promise<ListBrokersResponse> {
        const options = ParamCreater().listBrokers(listBrokersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取特性开关列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取特性开关列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listConfigFeatures(listConfigFeaturesRequest?: ListConfigFeaturesRequest): Promise<ListConfigFeaturesResponse> {
        const options = ParamCreater().listConfigFeatures();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询消费组的授权用户列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询消费组的授权用户列表
     * @param {string} engine **参数解释**： 消息引擎。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： rocketmq。
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} group **参数解释**： 消费组。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [offset] **参数解释**： 偏移量，表示从此偏移量开始查询， offset大于等于0。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [limit] **参数解释**： 查询数量。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listConsumeGroupAccessPolicy(listConsumeGroupAccessPolicyRequest?: ListConsumeGroupAccessPolicyRequest): Promise<ListConsumeGroupAccessPolicyResponse> {
        const options = ParamCreater().listConsumeGroupAccessPolicy(listConsumeGroupAccessPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询消费组的授权用户列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询消费组的授权用户列表
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} group **参数解释**： 消费组。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [offset] **参数解释**： 偏移量，表示从此偏移量开始查询， offset大于等于0。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [limit] **参数解释**： 查询数量。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listConsumeGroupAccessPolicyForRocketMq(listConsumeGroupAccessPolicyForRocketMqRequest?: ListConsumeGroupAccessPolicyForRocketMqRequest): Promise<ListConsumeGroupAccessPolicyForRocketMqResponse> {
        const options = ParamCreater().listConsumeGroupAccessPolicyForRocketMq(listConsumeGroupAccessPolicyForRocketMqRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例诊断报告列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例诊断报告列表
     * @param {string} engine **参数解释**： 引擎。 **约束限制**： 不涉及。 **取值范围**： - rocketmq：RocketMQ消息引擎。 - reliability：RocketMQ消息引擎别称。 **默认取值**： 不涉及。
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [offset] **参数解释**： 偏移量，表示从此偏移量开始查询。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 不涉及。
     * @param {number} [limit] **参数解释**： 查询数量。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDiagnosisReports(listDiagnosisReportsRequest?: ListDiagnosisReportsRequest): Promise<ListDiagnosisReportsResponse> {
        const options = ParamCreater().listDiagnosisReports(listDiagnosisReportsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例诊断报告列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例诊断报告列表
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [offset] **参数解释**： 偏移量，表示从此偏移量开始查询。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 不涉及。
     * @param {number} [limit] **参数解释**： 查询数量。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDiagnosisReportsForRocketMq(listDiagnosisReportsForRocketMqRequest?: ListDiagnosisReportsForRocketMqRequest): Promise<ListDiagnosisReportsForRocketMqResponse> {
        const options = ParamCreater().listDiagnosisReportsForRocketMq(listDiagnosisReportsForRocketMqRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询相应引擎的产品规格列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询产品规格列表
     * @param {string} engine **参数解释**： 消息引擎的类型。 **约束限制**： 不涉及。 **取值范围**： - rocketmq：RocketMQ消息引擎。 - reliability：RocketMQ消息引擎别称。 **默认取值**： rocketmq。
     * @param {string} [type] **参数解释**： 产品类型。 **约束限制**： 不涉及。 **取值范围**： - advanced：[华为云服务类型。](tag:hws,hws_hk)[服务类型。](tag:ctc,hws_eu,ocb,g42,hk_g42,tm,sbc,hk_sbc,cmcc,hk_tm,hcs,fcs,hcs_oemout,ax,srg) [- dec：专属云服务类型。](tag:hws,hws_hk) **默认取值**： 不涉及。
     * @param {string} [productId] **参数解释**： RocketMQ实例规格。[x86环境后缀为.x86，arm环境为.arm。single表示单机，cluster表示集群。](tag:hcs,fcs,hcs_oemout)  **约束限制**： 不涉及。  **取值范围**： [当“type”为“single.basic”选择单机规格；当“type”为“cluster.basic”选择集群规格。](tag:dt) [- c6.2u8g.cluster.x86或c6.2u8g.cluster.arm：单个代理最大分区数50，单个代理最大消费组数100](tag:fcs) [- c6.4u8g.cluster.small：单个代理最大Topic数2000，单个代理最大消费组数2000](tag:hws,hws_eu,hws_hk,ocb,hws_ocb,ctc,g42,hk_g42,tm,sbc,hk_sbc,hk_tm,cmcc,ax,srg) [- c6.4u8g.cluster：单个代理最大Topic数4000，单个代理最大消费组数4000](tag:hws,hws_eu,hws_hk,ocb,hws_ocb,ctc,g42,hk_g42,tm,sbc,hk_sbc,hk_tm,cmcc,ax,srg) [- c6.4u16g.cluster.x86或c6.4u16g.cluster.arm：单个代理最大分区数100，单个代理最大消费组数200](tag:hcs,hcs_oemout) [- c6.8u16g.cluster：单个代理最大Topic数8000，单个代理最大消费组数8000](tag:hws,hws_eu,hws_hk,ocb,hws_ocb,ctc,g42,hk_g42,tm,sbc,hk_sbc,hk_tm,cmcc,ax,srg) [- c6.8u32g.cluster.x86或c6.8u32g.cluster.arm：单个代理最大Topic数200，单个代理最大消费组数400](tag:hcs,fcs,hcs_oemout) [- c6.12u24g.cluster：单个代理最大Topic数12000，单个代理最大消费组数12000](tag:hws,hws_eu,hws_hk,ocb,hws_ocb,ctc,g42,hk_g42,tm,sbc,hk_sbc,hk_tm,cmcc,ax,srg) [- c6.16u64g.cluster.x86或c6.16u64g.cluster.arm：单个代理最大Topic数300，单个代理最大消费组数600](tag:hcs,fcs,hcs_oemout) [- c6.16u32g.cluster：单个代理最大Topic数16000，单个代理最大消费组数16000](tag:hws,hws_eu,hws_hk,ocb,hws_ocb,ctc,g42,hk_g42,tm,sbc,hk_sbc,hk_tm,cmcc,ax,srg) [- c6.32u128g.cluster.x86或c6.32u128g.cluster.arm：单个代理最大Topic数400，单个代理最大消费组数800](tag:hcs,fcs,hcs_oemout) [- rocketmq.b1.large.1：RocketMQ 5.x 基础版单机规格，实例TPS 500](tag:hws,hws_eu,hws_hk,ocb,hws_ocb,ctc,g42,hk_g42,tm,sbc,hk_sbc,hk_tm,dt,srg) [- rocketmq.b2.large.4：RocketMQ 5.x 基础版集群规格，实例TPS 2000](tag:hws,hws_eu,hws_hk,ocb,hws_ocb,ctc,g42,hk_g42,tm,sbc,hk_sbc,hk_tm,dt,srg) [- rocketmq.b2.large.8：RocketMQ 5.x 基础版集群规格，实例TPS 4000](tag:hws,hws_eu,hws_hk,ocb,hws_ocb,ctc,g42,hk_g42,tm,sbc,hk_sbc,hk_tm,dt,srg) [- rocketmq.b2.large.12：RocketMQ 5.x 基础版集群规格，实例TPS 6000](tag:hws,hws_eu,hws_hk,ocb,hws_ocb,ctc,g42,hk_g42,tm,sbc,hk_sbc,hk_tm,dt,srg) [- rocketmq.p1.large.1：RocketMQ 5.x 专业版单机规格，实例TPS 500](tag:hws,hws_eu,hws_hk,ctc,srg) [- rocketmq.p2.large.8：RocketMQ 5.x 专业版集群规格，实例TPS 4000](tag:hws,hws_eu,hws_hk,ctc,srg) [- rocketmq.p2.large.12：RocketMQ 5.x 专业版集群规格，实例TPS 6000](tag:hws,hws_eu,hws_hk,ctc,srg) [- rocketmq.p2.large.20：RocketMQ 5.x 专业版集群规格，实例TPS 10000](tag:hws,hws_eu,hws_hk,ctc,srg) [- rocketmq.p2.large.40：RocketMQ 5.x 专业版集群规格，实例TPS 20000](tag:hws,hws_eu,hws_hk,ctc,srg) [- rocketmq.p2.large.100：RocketMQ 5.x 专业版集群规格，实例TPS 50000](tag:hws,hws_eu,hws_hk,ctc,srg) [- rocketmq.p2.large.150：RocketMQ 5.x 专业版集群规格，实例TPS 75000](tag:hws,hws_eu,hws_hk,ctc,srg) [- rocketmq.p2.large.200：RocketMQ 5.x 专业版集群规格，实例TPS 100000](tag:hws,hws_eu,hws_hk,ctc,srg) [- rocketmq.p2.large.300：RocketMQ 5.x 专业版集群规格，实例TPS 150000](tag:hws,hws_eu,hws_hk,ctc,srg) **默认取值**： 不涉及。
     * @param {number} [limit] **参数解释**： 查询数量。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 10。
     * @param {number} [offset] **参数解释**： 偏移量，表示从此偏移量开始查询。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEngineProducts(listEngineProductsRequest?: ListEngineProductsRequest): Promise<ListEngineProductsResponse> {
        const options = ParamCreater().listEngineProducts(listEngineProductsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询消费组列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询消费组列表
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [group] **参数解释**： 消费组名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [limit] **参数解释**： 查询数量。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 10。
     * @param {number} [offset] **参数解释**： 偏移量，表示从此偏移量开始查询。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceConsumerGroups(listInstanceConsumerGroupsRequest?: ListInstanceConsumerGroupsRequest): Promise<ListInstanceConsumerGroupsResponse> {
        const options = ParamCreater().listInstanceConsumerGroups(listInstanceConsumerGroupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户的实例列表，支持按照条件查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有实例列表
     * @param {'rocketmq'} engine **参数解释**： 消息引擎类型。 **约束限制**： 不涉及。 **取值范围**： - rocketmq：RocketMQ引擎。 - reliability：RocketMQ引擎别称。 **默认取值**： 不涉及。
     * @param {string} [name] **参数解释**： 实例名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [instanceId] **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {'CREATING' | 'RUNNING' | 'RESTARTING' | 'DELETING' | 'ERROR' | 'CREATEFAILED' | 'FREEZING' | 'FROZEN' | 'EXTENDING' | 'SHRINKING' | 'EXTENDEDFAILED' | 'CONFIGURING' | 'ROLLBACK' | 'ROLLBACKFAILED' | 'VOLUMETYPECHANGING'} [status] **参数解释**： 实例状态。 **约束限制**： 不涉及。 **取值范围**： [详细状态说明请参考[实例状态说明](hrm-api-0010.xml)。](tag:hws,hws_hk,ctc,hws_eu,ocb,g42,hk_g42,tm,sbc,hk_sbc,cmcc,hk_tm,dt,ax,srg)[详细状态说明请参考[实例状态说明](kafka-api-180514012.xml)。](tag:hcs,fcs,hcs_oemout) **默认取值**： 不涉及。
     * @param {'true' | 'false'} [includeFailure] **参数解释**： 是否返回创建失败的实例数。 **约束限制**： 不涉及。 **取值范围**： - \&#39;true\&#39;：返回创建失败的实例数。 - \&#39;false\&#39;：不返回创建失败的实例数。  **默认取值**： 不涉及。
     * @param {'true' | 'false'} [exactMatchName] **参数解释**： 是否按照实例名称进行精确匹配查询。 **约束限制**： 不涉及。 **取值范围**： - \&#39;true\&#39;：表示按照实例名称进行精确匹配查询。 - \&#39;false\&#39;：表示模糊匹配实例名称查询。  **默认取值**： \&#39;false\&#39;。
     * @param {string} [enterpriseProjectId] **参数解释**： 企业项目ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [limit] **参数解释**： 当次查询返回的实例最大个数。 **约束限制**： 不涉及。 **取值范围**： 1~50。 **默认取值**： 10。
     * @param {number} [offset] **参数解释**： 偏移量，表示从此偏移量开始查询。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 不涉及。
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
     * 查询消息轨迹。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询消息轨迹
     * @param {string} engine **参数解释**： 消息引擎。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： reliability。
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} msgId **参数解释**：  消息ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [limit] **参数解释**：  查询数量。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 10。
     * @param {number} [offset] **参数解释**：  偏移量，表示从此偏移量开始查询，offset大于等于0。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMessageTrace(listMessageTraceRequest?: ListMessageTraceRequest): Promise<ListMessageTraceResponse> {
        const options = ParamCreater().listMessageTrace(listMessageTraceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询消息轨迹。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询消息轨迹
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} msgId **参数解释**：  消息ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [limit] **参数解释**：  查询数量。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 10。
     * @param {number} [offset] **参数解释**：  偏移量，表示从此偏移量开始查询，offset大于等于0。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMessageTraceForRocketMq(listMessageTraceForRocketMqRequest?: ListMessageTraceForRocketMqRequest): Promise<ListMessageTraceForRocketMqResponse> {
        const options = ParamCreater().listMessageTraceForRocketMq(listMessageTraceForRocketMqRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询消息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询消息
     * @param {string} engine **参数解释**： 消息引擎。 **约束限制**： 不涉及。 **取值范围**： - rocketmq：RocketMQ消息引擎。 - reliability：RocketMQ消息引擎别称。 **默认取值**： 不涉及。
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} topic **参数解释**： 主题名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [queue] **参数解释**： 队列。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [limit] **参数解释**： 查询数量。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [offset] **参数解释**： 偏移量。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 不涉及。
     * @param {string} [key] **参数解释**： 消息的key。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [startTime] **参数解释**： 开始时间。 **约束限制**： 不通过msg_id精确查询消息时，此参数必填。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [endTime] **参数解释**： 结束时间。 **约束限制**： 不通过msg_id精确查询消息时，此参数必填。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [msgId] **参数解释**： 消息ID。 **约束限制**： 不通过时间范围查询消息时，此参数必填。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMessages(listMessagesRequest?: ListMessagesRequest): Promise<ListMessagesResponse> {
        const options = ParamCreater().listMessages(listMessagesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询消息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询消息
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} topic **参数解释**： 主题名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [queue] **参数解释**： 队列。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [limit] **参数解释**： 查询数量。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [offset] **参数解释**： 偏移量。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 不涉及。
     * @param {string} [key] **参数解释**： 消息的key。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [startTime] **参数解释**： 开始时间。 **约束限制**： 不通过msg_id精确查询消息时，此参数必填。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [endTime] **参数解释**： 结束时间。 **约束限制**： 不通过msg_id精确查询消息时，此参数必填。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [msgId] **参数解释**： 消息ID。 **约束限制**： 不通过时间范围查询消息时，此参数必填。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMessagesForRocketMq(listMessagesForRocketMqRequest?: ListMessagesForRocketMqRequest): Promise<ListMessagesForRocketMqResponse> {
        const options = ParamCreater().listMessagesForRocketMq(listMessagesForRocketMqRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 1. 查询实例下所有迁移任务
     * 2. 查询指定迁移任务信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例下所有迁移任务或查询指定迁移任务信息
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [id] **参数解释**： 任务ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {'vhost' | 'exchange' | 'queue' | 'all'} [type] **参数解释**： 查询类型。 **约束限制**： 不涉及。 **取值范围**： - vhost：虚拟主机。 - exchange：交换机。 - queue：队列。 - all：所有。            **默认取值**： 不涉及。
     * @param {number} [offset] **参数解释**： 当前页，从1开始。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [limit] **参数解释**： 当前页大小。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [name] **参数解释**： vhost名称 **约束限制**： - 查询vhost列表时，该字段可为空。 - 查询exchange列表时，该字段为exchange所属vhost名称。 - 查询queue列表时，该字段为queue所属vhost-所属exchange，例vhost1-exchange1。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRocketMqMigrationTask(listRocketMqMigrationTaskRequest?: ListRocketMqMigrationTaskRequest): Promise<ListRocketMqMigrationTaskResponse> {
        const options = ParamCreater().listRocketMqMigrationTask(listRocketMqMigrationTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例的定时任务列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例的定时任务列表
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [start] **参数解释**： 开启查询的定时任务编号。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [limit] **参数解释**： 查询的定时任务个数。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [beginTime] **参数解释**： 查询定时任务的最小时间，格式为YYYYMMDDHHmmss。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [endTime] **参数解释**： 查询定时任务的最大时间，格式为YYYYMMDDHHmmss。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listScheduledTasks(listScheduledTasksRequest?: ListScheduledTasksRequest): Promise<ListScheduledTasksResponse> {
        const options = ParamCreater().listScheduledTasks(listScheduledTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询主题的授权用户列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询主题的授权用户列表
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} topic **参数解释**： 主题名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [offset] **参数解释**： 偏移量，表示从此偏移量开始查询， offset大于等于0。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [limit] **参数解释**： 查询数量。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTopicAccessPolicy(listTopicAccessPolicyRequest?: ListTopicAccessPolicyRequest): Promise<ListTopicAccessPolicyResponse> {
        const options = ParamCreater().listTopicAccessPolicy(listTopicAccessPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用户列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户列表
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [limit] **参数解释**： 当次查询返回的实例最大个数。 **约束限制**： 不涉及。 **取值范围**： 1~50。 **默认取值**： 10。
     * @param {number} [offset] **参数解释**： 偏移量，表示从此偏移量开始查询。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listUser(listUserRequest?: ListUserRequest): Promise<ListUserResponse> {
        const options = ParamCreater().listUser(listUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改实例SSL相关配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改实例SSL相关配置
     * @param {string} engine **参数解释**： 引擎。 **约束限制**： 不涉及。 **取值范围**： - rocketmq：RocketMQ消息引擎。 - reliability：RocketMQ消息引擎别称。 **默认取值**： 不涉及。
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {PlainSSLSwitchRep} modifyInstanceSslConfigRequestBody **参数解释**： 修改实例ssl配置请求体。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public modifyInstanceSslConfig(modifyInstanceSslConfigRequest?: ModifyInstanceSslConfigRequest): Promise<ModifyInstanceSslConfigResponse> {
        const options = ParamCreater().modifyInstanceSslConfig(modifyInstanceSslConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新回收站策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新回收站策略
     * @param {ModifyRecyclePolicyReq} [modifyRecyclePolicyRequestBody] **参数解释**： 更新回收站策略请求体 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public modifyRecyclePolicy(modifyRecyclePolicyRequest?: ModifyRecyclePolicyRequest): Promise<ModifyRecyclePolicyResponse> {
        const options = ParamCreater().modifyRecyclePolicy(modifyRecyclePolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重置消费进度。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重置消费进度
     * @param {string} engine **参数解释**： 引擎。 **约束限制**： 不涉及。 **取值范围**： - rocketmq：RocketMQ消息引擎。 - reliability：RocketMQ消息引擎别称。 **默认取值**： 不涉及。
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} group **参数解释**： 消费组名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {ResetConsumeOffsetReq} resetConsumeOffsetRequestBody **参数解释**： 请求消息。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resetConsumeOffset(resetConsumeOffsetRequest?: ResetConsumeOffsetRequest): Promise<ResetConsumeOffsetResponse> {
        const options = ParamCreater().resetConsumeOffset(resetConsumeOffsetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重置消费进度。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重置消费进度
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} group **参数解释**： 消费组名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {ResetConsumeOffsetReq} resetConsumeOffsetForRocketMqRequestBody **参数解释**： 请求消息。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resetConsumeOffsetForRocketMq(resetConsumeOffsetForRocketMqRequest?: ResetConsumeOffsetForRocketMqRequest): Promise<ResetConsumeOffsetForRocketMqResponse> {
        const options = ParamCreater().resetConsumeOffsetForRocketMq(resetConsumeOffsetForRocketMqRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 实例规格变更。
     * 
     * [**当前通过调用API，只支持按需实例进行实例规格变更。**](tag:hws,hws_hk,ctc,cmcc,ax)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 实例规格变更
     * @param {string} engine **参数解释**： 消息引擎的类型。支持的类型为rocketmq。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {ResizeEngineInstanceReq} resizeInstanceRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resizeInstance(resizeInstanceRequest?: ResizeInstanceRequest): Promise<ResizeInstanceResponse> {
        const options = ParamCreater().resizeInstance(resizeInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 实例规格变更。
     * 
     * [**当前通过调用API，只支持按需实例进行实例规格变更。**](tag:hws,hws_hk,ctc,cmcc)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 实例规格变更
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {ResizeEngineInstanceReq} resizeInstanceForRocketMqRequestBody **参数解释**： 请求消息。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resizeInstanceForRocketMq(resizeInstanceForRocketMqRequest?: ResizeInstanceForRocketMqRequest): Promise<ResizeInstanceForRocketMqResponse> {
        const options = ParamCreater().resizeInstanceForRocketMq(resizeInstanceForRocketMqRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 恢复回收站实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 恢复回收站实例
     * @param {BatchResumeInstanceReq} [restoreRecycleInstanceRequestBody] **参数解释**： 恢复回收站实例请求体 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public restoreRecycleInstance(restoreRecycleInstanceRequest?: RestoreRecycleInstanceRequest): Promise<RestoreRecycleInstanceResponse> {
        const options = ParamCreater().restoreRecycleInstance(restoreRecycleInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重发死信消息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重发死信消息
     * @param {string} engine **参数解释**： 消息引擎。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {DeadletterResendReq} sendDlqMessageRequestBody **参数解释**： 请求消息。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public sendDlqMessage(sendDlqMessageRequest?: SendDlqMessageRequest): Promise<SendDlqMessageResponse> {
        const options = ParamCreater().sendDlqMessage(sendDlqMessageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重发死信消息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重发死信消息
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {DeadletterResendReq} sendDlqMessageForRocketMqRequestBody **参数解释**： 请求消息。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public sendDlqMessageForRocketMq(sendDlqMessageForRocketMqRequest?: SendDlqMessageForRocketMqRequest): Promise<SendDlqMessageForRocketMqResponse> {
        const options = ParamCreater().sendDlqMessageForRocketMq(sendDlqMessageForRocketMqRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 发送消息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 发送消息
     * @param {string} engine **参数解释**： 引擎。 **约束限制**： 不涉及。 **取值范围**： - rocketmq：RocketMQ消息引擎。 - reliability：RocketMQ消息引擎别称。 **默认取值**： 不涉及。
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {SendMessageReq} sendMessageRequestBody **参数解释**： 发送消息请求体。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public sendMessage(sendMessageRequest?: SendMessageRequest): Promise<SendMessageResponse> {
        const options = ParamCreater().sendMessage(sendMessageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 发送消息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 发送消息
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {SendMessageReq} sendMessageForRocketMqRequestBody **参数解释**： 发送消息请求体。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public sendMessageForRocketMq(sendMessageForRocketMqRequest?: SendMessageForRocketMqRequest): Promise<SendMessageForRocketMqResponse> {
        const options = ParamCreater().sendMessageForRocketMq(sendMessageForRocketMqRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询后台任务管理中的指定记录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询后台任务管理中的指定记录
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} taskId **参数解释**： 任务ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBackgroundTask(showBackgroundTaskRequest?: ShowBackgroundTaskRequest): Promise<ShowBackgroundTaskResponse> {
        const options = ParamCreater().showBackgroundTask(showBackgroundTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询后台任务管理中的指定实例变更记录的进度。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例变更记录的进度
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} taskId **参数解释**： 任务ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBackgroundTaskProgress(showBackgroundTaskProgressRequest?: ShowBackgroundTaskProgressRequest): Promise<ShowBackgroundTaskProgressResponse> {
        const options = ParamCreater().showBackgroundTaskProgress(showBackgroundTaskProgressRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例在CES的监控层级关系。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例在CES的监控层级关系
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCesHierarchy(showCesHierarchyRequest?: ShowCesHierarchyRequest): Promise<ShowCesHierarchyResponse> {
        const options = ParamCreater().showCesHierarchy(showCesHierarchyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询消费组内消费者列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询消费者列表
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} group **参数解释**： 消费组名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [limit] **参数解释**： 查询数量。 **约束限制**： 不涉及。 **取值范围**： 1~50。 **默认取值**： 不涉及。
     * @param {number} [offset] **参数解释**： 偏移量，表示从此偏移量开始查询， offset大于等于0。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {boolean} [isDetail] **参数解释**： 是否查询消费者详细列表，参数为“true”则表示查询详细列表，否则表示查询简易列表。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showConsumerConnections(showConsumerConnectionsRequest?: ShowConsumerConnectionsRequest): Promise<ShowConsumerConnectionsResponse> {
        const options = ParamCreater().showConsumerConnections(showConsumerConnectionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询消费组内消费者列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询消费者列表
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} group **参数解释**： 消费组名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [limit] **参数解释**： 查询数量。 **约束限制**： 不涉及。 **取值范围**： 1~50。 **默认取值**： 不涉及。
     * @param {number} [offset] **参数解释**： 偏移量，表示从此偏移量开始查询， offset大于等于0。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {boolean} [isDetail] **参数解释**： 是否查询消费者详细列表，参数为“true”则表示查询详细列表，否则表示查询简易列表。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showConsumerConnectionsForRocketMq(showConsumerConnectionsForRocketMqRequest?: ShowConsumerConnectionsForRocketMqRequest): Promise<ShowConsumerConnectionsForRocketMqResponse> {
        const options = ParamCreater().showConsumerConnectionsForRocketMq(showConsumerConnectionsForRocketMqRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询消费列表或详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询消费列表或详情
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} group **参数解释**： 消费组名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [topic] **参数解释**： 待查询的Topic，不指定时查询Topic列表，指定时查询详情。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [limit] **参数解释**： 当次查询返回Topic的最大个数。 **约束限制**： 不涉及。 **取值范围**： 1~50。 **默认取值**： 10。
     * @param {number} [offset] **参数解释**： 偏移量，表示从此偏移量开始查询。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showConsumerListOrDetails(showConsumerListOrDetailsRequest?: ShowConsumerListOrDetailsRequest): Promise<ShowConsumerListOrDetailsResponse> {
        const options = ParamCreater().showConsumerListOrDetails(showConsumerListOrDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例诊断报告。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例诊断报告
     * @param {string} engine **参数解释**： 引擎。 **约束限制**： 不涉及。 **取值范围**： - rocketmq：RocketMQ消息引擎。 - reliability：RocketMQ消息引擎别称。 **默认取值**： 不涉及。
     * @param {string} reportId **参数解释**： 报告ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDiagnosisReport(showDiagnosisReportRequest?: ShowDiagnosisReportRequest): Promise<ShowDiagnosisReportResponse> {
        const options = ParamCreater().showDiagnosisReport(showDiagnosisReportRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例诊断报告。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例诊断报告
     * @param {string} reportId **参数解释**： 报告ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDiagnosisReportForRocketMq(showDiagnosisReportForRocketMqRequest?: ShowDiagnosisReportForRocketMqRequest): Promise<ShowDiagnosisReportForRocketMqResponse> {
        const options = ParamCreater().showDiagnosisReportForRocketMq(showDiagnosisReportForRocketMqRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询stack信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询stack信息
     * @param {string} engine **参数解释**： 引擎。 **约束限制**： 不涉及。 **取值范围**： - rocketmq：RocketMQ消息引擎。 - reliability：RocketMQ消息引擎别称。 **默认取值**： 不涉及。
     * @param {string} stackId **参数解释**： 堆ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDiagnosisStack(showDiagnosisStackRequest?: ShowDiagnosisStackRequest): Promise<ShowDiagnosisStackResponse> {
        const options = ParamCreater().showDiagnosisStack(showDiagnosisStackRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询stack信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询stack信息
     * @param {string} stackId **参数解释**： 堆ID。 从查询实例诊断报告接口获取。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDiagnosisStackForRocketMq(showDiagnosisStackForRocketMqRequest?: ShowDiagnosisStackForRocketMqRequest): Promise<ShowDiagnosisStackForRocketMqResponse> {
        const options = ParamCreater().showDiagnosisStackForRocketMq(showDiagnosisStackForRocketMqRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例的扩容规格列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例的扩容规格列表
     * @param {string} engine **参数解释**： 消息引擎的类型。支持的类型为rocketmq。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {'advanced'} [type] **参数解释**： 产品的类型。 advanced：专享版。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [limit] **参数解释**： 查询数量。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 10。
     * @param {number} [offset] **参数解释**： 偏移量，表示从此偏移量开始查询，offset大于等于0。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showEngineInstanceExtendProductInfo(showEngineInstanceExtendProductInfoRequest?: ShowEngineInstanceExtendProductInfoRequest): Promise<ShowEngineInstanceExtendProductInfoResponse> {
        const options = ParamCreater().showEngineInstanceExtendProductInfo(showEngineInstanceExtendProductInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例的扩容规格列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例的扩容规格列表
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {'advanced'} [type] **参数解释**： 产品的类型。 advanced：专享版。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： advanced。
     * @param {number} [limit] **参数解释**： 查询数量。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 10。
     * @param {number} [offset] **参数解释**： 偏移量，表示从此偏移量开始查询，offset大于等于0。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showEngineInstanceExtendProductInfoForRocketMq(showEngineInstanceExtendProductInfoForRocketMqRequest?: ShowEngineInstanceExtendProductInfoForRocketMqRequest): Promise<ShowEngineInstanceExtendProductInfoForRocketMqResponse> {
        const options = ParamCreater().showEngineInstanceExtendProductInfoForRocketMq(showEngineInstanceExtendProductInfoForRocketMqRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定消费组详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定消费组
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} group **参数解释**： 消费组名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showGroup(showGroupRequest?: ShowGroupRequest): Promise<ShowGroupResponse> {
        const options = ParamCreater().showGroup(showGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定实例的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定实例
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
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
     * 查询实例节点信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例节点
     * @param {string} engine **参数解释**： 消息引擎类型。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [limit] **参数解释**： 查询数量。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 10。
     * @param {number} [offset] **参数解释**： 偏移量，表示从此偏移量开始查询，offset大于等于0。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceNodes(showInstanceNodesRequest?: ShowInstanceNodesRequest): Promise<ShowInstanceNodesResponse> {
        const options = ParamCreater().showInstanceNodes(showInstanceNodesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户最大可以创建的实例个数和已创建的实例个数，以及每个实例最大可以创建标签的个数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看租户配额
     * @param {string} [includeTagsQuota] **参数解释**： 是否包含标签配额标志。 **约束限制**： 不涉及。 **取值范围**： - true：包含配额。 - false：不包含配额。 **默认取值**： true。
     * @param {string} [onlyQuota] **参数解释**： 查询指定配额引擎。 **约束限制**： 不涉及。 **取值范围**： - reliability：RocketMQ消息引擎别称。 - kafka：kafka消息引擎别称。 **默认取值**： 不涉及。
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
     * 查询回收站实例列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询回收站实例列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRecycleInstances(showRecycleInstancesRequest?: ShowRecycleInstancesRequest): Promise<ShowRecycleInstancesResponse> {
        const options = ParamCreater().showRecycleInstances();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询RocketMQ配置，若成功则返回配置的相关信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询RocketMQ配置
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [limit] **参数解释**： 查询数量。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [offset] **参数解释**： 偏移量，表示从此偏移量开始查询，offset大于等于0。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRocketMqConfigs(showRocketMqConfigsRequest?: ShowRocketMqConfigsRequest): Promise<ShowRocketMqConfigsResponse> {
        const options = ParamCreater().showRocketMqConfigs(showRocketMqConfigsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询RocketMQ产品规格核数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询RocketMQ产品规格核数
     * @param {string} productId **参数解释**： 产品ID。[x86环境后缀为.x86，arm环境为.arm。single表示单机，cluster表示集群。](tag:hcs,fcs,hcs_oemout)  **约束限制**： 不涉及。  **取值范围**： [当“type”为“single.basic”选择单机规格；当“type”为“cluster.basic”选择集群规格。](tag:dt) [- c6.2u8g.cluster.x86或c6.2u8g.cluster.arm：单个代理最大分区数50，单个代理最大消费组数100](tag:fcs) [- c6.4u8g.cluster.small：单个代理最大Topic数2000，单个代理最大消费组数2000](tag:hws,hws_eu,hws_hk,ocb,hws_ocb,ctc,g42,hk_g42,tm,sbc,hk_sbc,hk_tm,cmcc,ax,srg) [- c6.4u8g.cluster：单个代理最大Topic数4000，单个代理最大消费组数4000](tag:hws,hws_eu,hws_hk,ocb,hws_ocb,ctc,g42,hk_g42,tm,sbc,hk_sbc,hk_tm,cmcc,ax,srg) [- c6.4u16g.cluster.x86或c6.4u16g.cluster.arm：单个代理最大分区数100，单个代理最大消费组数200](tag:hcs,fcs,hcs_oemout) [- c6.8u16g.cluster：单个代理最大Topic数8000，单个代理最大消费组数8000](tag:hws,hws_eu,hws_hk,ocb,hws_ocb,ctc,g42,hk_g42,tm,sbc,hk_sbc,hk_tm,cmcc,ax,srg) [- c6.8u32g.cluster.x86或c6.8u32g.cluster.arm：单个代理最大Topic数200，单个代理最大消费组数400](tag:hcs,fcs,hcs_oemout) [- c6.12u24g.cluster：单个代理最大Topic数12000，单个代理最大消费组数12000](tag:hws,hws_eu,hws_hk,ocb,hws_ocb,ctc,g42,hk_g42,tm,sbc,hk_sbc,hk_tm,cmcc,ax,srg) [- c6.16u64g.cluster.x86或c6.16u64g.cluster.arm：单个代理最大Topic数300，单个代理最大消费组数600](tag:hcs,fcs,hcs_oemout) [- c6.16u32g.cluster：单个代理最大Topic数16000，单个代理最大消费组数16000](tag:hws,hws_eu,hws_hk,ocb,hws_ocb,ctc,g42,hk_g42,tm,sbc,hk_sbc,hk_tm,cmcc,ax,srg) [- c6.32u128g.cluster.x86或c6.32u128g.cluster.arm：单个代理最大Topic数400，单个代理最大消费组数800](tag:hcs,fcs,hcs_oemout) [- rocketmq.b1.large.1：RocketMQ 5.x 基础版单机规格，实例TPS 500](tag:hws,hws_eu,hws_hk,ocb,hws_ocb,ctc,g42,hk_g42,tm,sbc,hk_sbc,hk_tm,dt,srg) [- rocketmq.b2.large.4：RocketMQ 5.x 基础版集群规格，实例TPS 2000](tag:hws,hws_eu,hws_hk,ocb,hws_ocb,ctc,g42,hk_g42,tm,sbc,hk_sbc,hk_tm,dt,srg) [- rocketmq.b2.large.8：RocketMQ 5.x 基础版集群规格，实例TPS 4000](tag:hws,hws_eu,hws_hk,ocb,hws_ocb,ctc,g42,hk_g42,tm,sbc,hk_sbc,hk_tm,dt,srg) [- rocketmq.b2.large.12：RocketMQ 5.x 基础版集群规格，实例TPS 6000](tag:hws,hws_eu,hws_hk,ocb,hws_ocb,ctc,g42,hk_g42,tm,sbc,hk_sbc,hk_tm,dt,srg) [- rocketmq.p1.large.1：RocketMQ 5.x 专业版单机规格，实例TPS 500](tag:hws,hws_eu,hws_hk,ctc,srg) [- rocketmq.p2.large.8：RocketMQ 5.x 专业版集群规格，实例TPS 4000](tag:hws,hws_eu,hws_hk,ctc,srg) [- rocketmq.p2.large.12：RocketMQ 5.x 专业版集群规格，实例TPS 6000](tag:hws,hws_eu,hws_hk,ctc,srg) [- rocketmq.p2.large.20：RocketMQ 5.x 专业版集群规格，实例TPS 10000](tag:hws,hws_eu,hws_hk,ctc,srg) [- rocketmq.p2.large.40：RocketMQ 5.x 专业版集群规格，实例TPS 20000](tag:hws,hws_eu,hws_hk,ctc,srg) [- rocketmq.p2.large.100：RocketMQ 5.x 专业版集群规格，实例TPS 50000](tag:hws,hws_eu,hws_hk,ctc,srg) [- rocketmq.p2.large.150：RocketMQ 5.x 专业版集群规格，实例TPS 75000](tag:hws,hws_eu,hws_hk,ctc,srg) [- rocketmq.p2.large.200：RocketMQ 5.x 专业版集群规格，实例TPS 100000](tag:hws,hws_eu,hws_hk,ctc,srg) [- rocketmq.p2.large.300：RocketMQ 5.x 专业版集群规格，实例TPS 150000](tag:hws,hws_eu,hws_hk,ctc,srg)  **默认取值**： 不涉及。
     * @param {string} brokerNum **参数解释**： Broker数量。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 1。
     * @param {string} [instanceId] **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。实例ID非必填项，只有填写实例ID响应体才会返回total_extend_storage_space。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRocketMqProductCores(showRocketMqProductCoresRequest?: ShowRocketMqProductCoresRequest): Promise<ShowRocketMqProductCoresResponse> {
        const options = ParamCreater().showRocketMqProductCores(showRocketMqProductCoresRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取RocketMQ实例扩容前置检查信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询RocketMQ实例扩容前置检查信息
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRocketMqScalePreCheckInfo(showRocketMqScalePreCheckInfoRequest?: ShowRocketMqScalePreCheckInfoRequest): Promise<ShowRocketMqScalePreCheckInfoResponse> {
        const options = ParamCreater().showRocketMqScalePreCheckInfo(showRocketMqScalePreCheckInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询项目标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目标签
     * @param {number} [limit] **参数解释**： 查询数量。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 10。
     * @param {number} [offset] **参数解释**： 偏移量，表示从此偏移量开始查询。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRocketmqProjectTags(showRocketmqProjectTagsRequest?: ShowRocketmqProjectTagsRequest): Promise<ShowRocketmqProjectTagsResponse> {
        const options = ParamCreater().showRocketmqProjectTags(showRocketmqProjectTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例标签
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [limit] **参数解释**： 查询数量。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 10。
     * @param {number} [offset] **参数解释**： 偏移量，表示从此偏移量开始查询，offset大于等于0。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRocketmqTags(showRocketmqTagsRequest?: ShowRocketmqTagsRequest): Promise<ShowRocketmqTagsResponse> {
        const options = ParamCreater().showRocketmqTags(showRocketmqTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用户详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户详情
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} userName **参数解释**： 用户名。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showUser(showUserRequest?: ShowUserRequest): Promise<ShowUserResponse> {
        const options = ParamCreater().showUser(showUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询磁盘自动扩容配置，包括磁盘自动扩容是否开启，以及开启后的扩容阈值、扩容步长、扩容上限信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询磁盘自动扩容配置
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVolumeExpandConfig(showVolumeExpandConfigRequest?: ShowVolumeExpandConfigRequest): Promise<ShowVolumeExpandConfigResponse> {
        const options = ParamCreater().showVolumeExpandConfig(showVolumeExpandConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改指定消费组参数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改消费组
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} group **参数解释**： 消费组名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {UpdateConsumerGroup} updateConsumerGroupRequestBody **参数解释**： 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateConsumerGroup(updateConsumerGroupRequest?: UpdateConsumerGroupRequest): Promise<UpdateConsumerGroupResponse> {
        const options = ParamCreater().updateConsumerGroup(updateConsumerGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改实例相关信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改实例信息
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {UpdateInstanceReq} updateInstanceRequestBody **参数解释**： 请求消息。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
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
     * 该接口用于修改RocketMQ配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改RocketMQ配置
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {ModifyConfigReq} updateRocketMqConfigsRequestBody **参数解释**： 请求消息。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateRocketMqConfigs(updateRocketMqConfigsRequest?: UpdateRocketMqConfigsRequest): Promise<UpdateRocketMqConfigsResponse> {
        const options = ParamCreater().updateRocketMqConfigs(updateRocketMqConfigsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改定时任务管理中的指定记录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改定时任务管理中的指定记录
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} taskId **参数解释**： 定时任务ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [executeAt] **参数解释**： 修改定时任务的执行时间。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [status] **参数解释**： 修改定时任务状态。 **约束限制**： 不涉及。 **取值范围**： - CANCELLED。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateScheduledTask(updateScheduledTaskRequest?: UpdateScheduledTaskRequest): Promise<UpdateScheduledTaskResponse> {
        const options = ParamCreater().updateScheduledTask(updateScheduledTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改用户参数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改用户参数
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} userName **参数解释**： 用户名。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {User} updateUserRequestBody **参数解释**： 请求消息。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateUser(updateUserRequest?: UpdateUserRequest): Promise<UpdateUserResponse> {
        const options = ParamCreater().updateUser(updateUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于修改磁盘自动扩容配置，包含磁盘自动扩容是否开启、扩容阈值、扩容步长，以及扩容上限的配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改磁盘自动扩容配置
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {AlterAutoVolumeExpandConfig} updateVolumeExpansionConfigRequestBody **参数解释**： 自动磁盘扩容配置 **约束限制**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateVolumeExpansionConfig(updateVolumeExpansionConfigRequest?: UpdateVolumeExpansionConfigRequest): Promise<UpdateVolumeExpansionConfigResponse> {
        const options = ParamCreater().updateVolumeExpansionConfig(updateVolumeExpansionConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 消费验证。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 消费验证
     * @param {string} engine **参数解释**： 消息引擎。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： reliability。
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {ResendReq} validateConsumedMessageRequestBody **参数解释**： 请求消息。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： reliability。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public validateConsumedMessage(validateConsumedMessageRequest?: ValidateConsumedMessageRequest): Promise<ValidateConsumedMessageResponse> {
        const options = ParamCreater().validateConsumedMessage(validateConsumedMessageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 消费验证。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 消费验证
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {ResendReq} validateConsumedMessageForRocketMqRequestBody **参数解释**： 请求消息。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： reliability。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public validateConsumedMessageForRocketMq(validateConsumedMessageForRocketMqRequest?: ValidateConsumedMessageForRocketMqRequest): Promise<ValidateConsumedMessageForRocketMqResponse> {
        const options = ParamCreater().validateConsumedMessageForRocketMq(validateConsumedMessageForRocketMqRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建主题或批量删除主题。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建主题或批量删除主题
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {CreateTopicOrBatchDeleteTopicReq} createTopicOrBatchDeleteTopicRequestBody **参数解释**： 请求消息。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [action] **参数解释**： 批量删除Topic时使用，不配置则为创建接口。 **约束限制**： 不涉及。 **取值范围**： - delete：批量删除Topic。 - 不填：创建Topic。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTopicOrBatchDeleteTopic(createTopicOrBatchDeleteTopicRequest?: CreateTopicOrBatchDeleteTopicRequest): Promise<CreateTopicOrBatchDeleteTopicResponse> {
        const options = ParamCreater().createTopicOrBatchDeleteTopic(createTopicOrBatchDeleteTopicRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定主题。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除指定主题
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} topic **参数解释**： 主题名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTopic(deleteTopicRequest?: DeleteTopicRequest): Promise<DeleteTopicResponse> {
        const options = ParamCreater().deleteTopic(deleteTopicRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询主题消费组列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询主题消费组列表
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} topic **参数解释**： 主题名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [limit] **参数解释**： 当次查询返回的最大个数。 **约束限制**： 不涉及。 **取值范围**： 1~50。 **默认取值**： 10。
     * @param {number} [offset] **参数解释**： 偏移量，表示从此偏移量开始查询。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listConsumerGroupOfTopic(listConsumerGroupOfTopicRequest?: ListConsumerGroupOfTopicRequest): Promise<ListConsumerGroupOfTopicResponse> {
        const options = ParamCreater().listConsumerGroupOfTopic(listConsumerGroupOfTopicRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询指定RocketMQ实例的Topic列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询主题列表
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [limit] **参数解释**： 查询数量。 **约束限制**： 不涉及。 **取值范围**： 1~50。 **默认取值**： 不涉及。
     * @param {number} [offset] **参数解释**： 偏移量，表示从此偏移量开始查询。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRocketInstanceTopics(listRocketInstanceTopicsRequest?: ListRocketInstanceTopicsRequest): Promise<ListRocketInstanceTopicsResponse> {
        const options = ParamCreater().listRocketInstanceTopics(listRocketInstanceTopicsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询单个主题。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询单个主题
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} topic **参数解释**： 主题名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showOneTopic(showOneTopicRequest?: ShowOneTopicRequest): Promise<ShowOneTopicResponse> {
        const options = ParamCreater().showOneTopic(showOneTopicRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询主题的消息数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询主题的消息数
     * @param {string} instanceId **参数解释**： 实例ID获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} topic **参数解释**： 主题名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTopicStatus(showTopicStatusRequest?: ShowTopicStatusRequest): Promise<ShowTopicStatusResponse> {
        const options = ParamCreater().showTopicStatus(showTopicStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改主题。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改主题
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} topic **参数解释**： 主题名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {UpdateTopicReq} updateTopicRequestBody **参数解释**： 请求消息。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTopic(updateTopicRequest?: UpdateTopicRequest): Promise<UpdateTopicResponse> {
        const options = ParamCreater().updateTopic(updateTopicRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 批量添加或删除实例标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateOrDeleteRocketmqTag(batchCreateOrDeleteRocketmqTagRequest?: BatchCreateOrDeleteRocketmqTagRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/rocketmq/{instance_id}/tags/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (batchCreateOrDeleteRocketmqTagRequest !== null && batchCreateOrDeleteRocketmqTagRequest !== undefined) {
                if (batchCreateOrDeleteRocketmqTagRequest instanceof BatchCreateOrDeleteRocketmqTagRequest) {
                    instanceId = batchCreateOrDeleteRocketmqTagRequest.instanceId;
                    body = batchCreateOrDeleteRocketmqTagRequest.body
                } else {
                    instanceId = batchCreateOrDeleteRocketmqTagRequest['instance_id'];
                    body = batchCreateOrDeleteRocketmqTagRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling batchCreateOrDeleteRocketmqTag.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除实例诊断报告。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteDiagnosisRecords(batchDeleteDiagnosisRecordsRequest?: BatchDeleteDiagnosisRecordsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/{engine}/instances/{instance_id}/diagnosis/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let engine;
            
            let instanceId;

            if (batchDeleteDiagnosisRecordsRequest !== null && batchDeleteDiagnosisRecordsRequest !== undefined) {
                if (batchDeleteDiagnosisRecordsRequest instanceof BatchDeleteDiagnosisRecordsRequest) {
                    engine = batchDeleteDiagnosisRecordsRequest.engine;
                    instanceId = batchDeleteDiagnosisRecordsRequest.instanceId;
                    body = batchDeleteDiagnosisRecordsRequest.body
                } else {
                    engine = batchDeleteDiagnosisRecordsRequest['engine'];
                    instanceId = batchDeleteDiagnosisRecordsRequest['instance_id'];
                    body = batchDeleteDiagnosisRecordsRequest['body'];
                }
            }

        
            if (engine === null || engine === undefined) {
            throw new RequiredError('engine','Required parameter engine was null or undefined when calling batchDeleteDiagnosisRecords.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling batchDeleteDiagnosisRecords.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'engine': engine,'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除实例诊断报告。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteDiagnosisRecordsForRocketMq(batchDeleteDiagnosisRecordsForRocketMqRequest?: BatchDeleteDiagnosisRecordsForRocketMqRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/rocketmq/instances/{instance_id}/diagnosis/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (batchDeleteDiagnosisRecordsForRocketMqRequest !== null && batchDeleteDiagnosisRecordsForRocketMqRequest !== undefined) {
                if (batchDeleteDiagnosisRecordsForRocketMqRequest instanceof BatchDeleteDiagnosisRecordsForRocketMqRequest) {
                    instanceId = batchDeleteDiagnosisRecordsForRocketMqRequest.instanceId;
                    body = batchDeleteDiagnosisRecordsForRocketMqRequest.body
                } else {
                    instanceId = batchDeleteDiagnosisRecordsForRocketMqRequest['instance_id'];
                    body = batchDeleteDiagnosisRecordsForRocketMqRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling batchDeleteDiagnosisRecordsForRocketMq.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除实例。**实例删除后，实例中原有的数据将被删除，且没有备份，请谨慎操作。**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteInstances(batchDeleteInstancesRequest?: BatchDeleteInstancesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchDeleteInstancesRequest !== null && batchDeleteInstancesRequest !== undefined) {
                if (batchDeleteInstancesRequest instanceof BatchDeleteInstancesRequest) {
                    body = batchDeleteInstancesRequest.body
                } else {
                    body = batchDeleteInstancesRequest['body'];
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
         * 批量删除元数据迁移任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteRocketMqMigrationTask(batchDeleteRocketMqMigrationTaskRequest?: BatchDeleteRocketMqMigrationTaskRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/metadata/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (batchDeleteRocketMqMigrationTaskRequest !== null && batchDeleteRocketMqMigrationTaskRequest !== undefined) {
                if (batchDeleteRocketMqMigrationTaskRequest instanceof BatchDeleteRocketMqMigrationTaskRequest) {
                    instanceId = batchDeleteRocketMqMigrationTaskRequest.instanceId;
                    body = batchDeleteRocketMqMigrationTaskRequest.body
                } else {
                    instanceId = batchDeleteRocketMqMigrationTaskRequest['instance_id'];
                    body = batchDeleteRocketMqMigrationTaskRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling batchDeleteRocketMqMigrationTask.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量修改消费组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchUpdateConsumerGroup(batchUpdateConsumerGroupRequest?: BatchUpdateConsumerGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instances/{instance_id}/groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (batchUpdateConsumerGroupRequest !== null && batchUpdateConsumerGroupRequest !== undefined) {
                if (batchUpdateConsumerGroupRequest instanceof BatchUpdateConsumerGroupRequest) {
                    instanceId = batchUpdateConsumerGroupRequest.instanceId;
                    body = batchUpdateConsumerGroupRequest.body
                } else {
                    instanceId = batchUpdateConsumerGroupRequest['instance_id'];
                    body = batchUpdateConsumerGroupRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling batchUpdateConsumerGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建消费组或批量删除消费组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createConsumerGroupOrBatchDeleteConsumerGroup(createConsumerGroupOrBatchDeleteConsumerGroupRequest?: CreateConsumerGroupOrBatchDeleteConsumerGroupRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let instanceId;
            
            let action;

            if (createConsumerGroupOrBatchDeleteConsumerGroupRequest !== null && createConsumerGroupOrBatchDeleteConsumerGroupRequest !== undefined) {
                if (createConsumerGroupOrBatchDeleteConsumerGroupRequest instanceof CreateConsumerGroupOrBatchDeleteConsumerGroupRequest) {
                    instanceId = createConsumerGroupOrBatchDeleteConsumerGroupRequest.instanceId;
                    body = createConsumerGroupOrBatchDeleteConsumerGroupRequest.body
                    action = createConsumerGroupOrBatchDeleteConsumerGroupRequest.action;
                } else {
                    instanceId = createConsumerGroupOrBatchDeleteConsumerGroupRequest['instance_id'];
                    body = createConsumerGroupOrBatchDeleteConsumerGroupRequest['body'];
                    action = createConsumerGroupOrBatchDeleteConsumerGroupRequest['action'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createConsumerGroupOrBatchDeleteConsumerGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (action !== null && action !== undefined) {
                localVarQueryParameter['action'] = action;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建实例诊断任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDiagnosisTask(createDiagnosisTaskRequest?: CreateDiagnosisTaskRequest) {
            const options = {
                method: "POST",
                url: "/v2/{engine}/{project_id}/instances/{instance_id}/diagnosis",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let engine;
            
            let instanceId;

            if (createDiagnosisTaskRequest !== null && createDiagnosisTaskRequest !== undefined) {
                if (createDiagnosisTaskRequest instanceof CreateDiagnosisTaskRequest) {
                    engine = createDiagnosisTaskRequest.engine;
                    instanceId = createDiagnosisTaskRequest.instanceId;
                    body = createDiagnosisTaskRequest.body
                } else {
                    engine = createDiagnosisTaskRequest['engine'];
                    instanceId = createDiagnosisTaskRequest['instance_id'];
                    body = createDiagnosisTaskRequest['body'];
                }
            }

        
            if (engine === null || engine === undefined) {
            throw new RequiredError('engine','Required parameter engine was null or undefined when calling createDiagnosisTask.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createDiagnosisTask.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'engine': engine,'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建实例诊断任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDiagnosisTaskForRocketMq(createDiagnosisTaskForRocketMqRequest?: CreateDiagnosisTaskForRocketMqRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/rocketmq/instances/{instance_id}/diagnosis",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createDiagnosisTaskForRocketMqRequest !== null && createDiagnosisTaskForRocketMqRequest !== undefined) {
                if (createDiagnosisTaskForRocketMqRequest instanceof CreateDiagnosisTaskForRocketMqRequest) {
                    instanceId = createDiagnosisTaskForRocketMqRequest.instanceId;
                    body = createDiagnosisTaskForRocketMqRequest.body
                } else {
                    instanceId = createDiagnosisTaskForRocketMqRequest['instance_id'];
                    body = createDiagnosisTaskForRocketMqRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createDiagnosisTaskForRocketMq.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建实例[，该接口支持创建按需和包周期两种计费方式的实例](tag:hws,hws_eu,hws_hk,ocb,hws_ocb,ctc,g42,hk_g42,tm,hk_tm,cmcc,ax)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createInstanceByEngine(createInstanceByEngineRequest?: CreateInstanceByEngineRequest) {
            const options = {
                method: "POST",
                url: "/v2/{engine}/{project_id}/instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let engine;

            if (createInstanceByEngineRequest !== null && createInstanceByEngineRequest !== undefined) {
                if (createInstanceByEngineRequest instanceof CreateInstanceByEngineRequest) {
                    engine = createInstanceByEngineRequest.engine;
                    body = createInstanceByEngineRequest.body
                } else {
                    engine = createInstanceByEngineRequest['engine'];
                    body = createInstanceByEngineRequest['body'];
                }
            }

        
            if (engine === null || engine === undefined) {
            throw new RequiredError('engine','Required parameter engine was null or undefined when calling createInstanceByEngine.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'engine': engine, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建实例，该接口创建的实例为按需计费的方式。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPostPaidInstance(createPostPaidInstanceRequest?: CreatePostPaidInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createPostPaidInstanceRequest !== null && createPostPaidInstanceRequest !== undefined) {
                if (createPostPaidInstanceRequest instanceof CreatePostPaidInstanceRequest) {
                    body = createPostPaidInstanceRequest.body
                } else {
                    body = createPostPaidInstanceRequest['body'];
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
         * 创建实例[，该接口支持创建按需和包周期两种计费方式的实例](tag:hws,hws_eu,hws_hk,ocb,hws_ocb,ctc,g42,hk_g42,tm,hk_tm,cmcc,ax)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPostPaidInstanceForRocketMq(createPostPaidInstanceForRocketMqRequest?: CreatePostPaidInstanceForRocketMqRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/rocketmq/instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createPostPaidInstanceForRocketMqRequest !== null && createPostPaidInstanceForRocketMqRequest !== undefined) {
                if (createPostPaidInstanceForRocketMqRequest instanceof CreatePostPaidInstanceForRocketMqRequest) {
                    body = createPostPaidInstanceForRocketMqRequest.body
                } else {
                    body = createPostPaidInstanceForRocketMqRequest['body'];
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
         * 新建元数据迁移任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createRocketMqMigrationTask(createRocketMqMigrationTaskRequest?: CreateRocketMqMigrationTaskRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/metadata",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let instanceId;
            
            let overwrite;
            
            let name;
            
            let type;

            if (createRocketMqMigrationTaskRequest !== null && createRocketMqMigrationTaskRequest !== undefined) {
                if (createRocketMqMigrationTaskRequest instanceof CreateRocketMqMigrationTaskRequest) {
                    instanceId = createRocketMqMigrationTaskRequest.instanceId;
                    overwrite = createRocketMqMigrationTaskRequest.overwrite;
                    name = createRocketMqMigrationTaskRequest.name;
                    type = createRocketMqMigrationTaskRequest.type;
                    body = createRocketMqMigrationTaskRequest.body
                } else {
                    instanceId = createRocketMqMigrationTaskRequest['instance_id'];
                    overwrite = createRocketMqMigrationTaskRequest['overwrite'];
                    name = createRocketMqMigrationTaskRequest['name'];
                    type = createRocketMqMigrationTaskRequest['type'];
                    body = createRocketMqMigrationTaskRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createRocketMqMigrationTask.');
            }
            if (overwrite === null || overwrite === undefined) {
                throw new RequiredError('overwrite','Required parameter overwrite was null or undefined when calling createRocketMqMigrationTask.');
            }
            if (overwrite !== null && overwrite !== undefined) {
                localVarQueryParameter['overwrite'] = overwrite;
            }
            if (name === null || name === undefined) {
                throw new RequiredError('name','Required parameter name was null or undefined when calling createRocketMqMigrationTask.');
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling createRocketMqMigrationTask.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建用户。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createUser(createUserRequest?: CreateUserRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createUserRequest !== null && createUserRequest !== undefined) {
                if (createUserRequest instanceof CreateUserRequest) {
                    instanceId = createUserRequest.instanceId;
                    body = createUserRequest.body
                } else {
                    instanceId = createUserRequest['instance_id'];
                    body = createUserRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createUser.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除后台任务管理中的指定记录。
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
                headers: {}
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
         * 删除指定消费组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteConsumerGroup(deleteConsumerGroupRequest?: DeleteConsumerGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/instances/{instance_id}/groups/{group}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let group;

            if (deleteConsumerGroupRequest !== null && deleteConsumerGroupRequest !== undefined) {
                if (deleteConsumerGroupRequest instanceof DeleteConsumerGroupRequest) {
                    instanceId = deleteConsumerGroupRequest.instanceId;
                    group = deleteConsumerGroupRequest.group;
                } else {
                    instanceId = deleteConsumerGroupRequest['instance_id'];
                    group = deleteConsumerGroupRequest['group'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteConsumerGroup.');
            }
            if (group === null || group === undefined) {
            throw new RequiredError('group','Required parameter group was null or undefined when calling deleteConsumerGroup.');
            }

            options.pathParams = { 'instance_id': instanceId,'group': group, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定的实例，释放该实例的所有资源。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteInstance(deleteInstanceRequest?: DeleteInstanceRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/instances/{instance_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (deleteInstanceRequest !== null && deleteInstanceRequest !== undefined) {
                if (deleteInstanceRequest instanceof DeleteInstanceRequest) {
                    instanceId = deleteInstanceRequest.instanceId;
                } else {
                    instanceId = deleteInstanceRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteInstance.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除定时任务管理中的指定记录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteScheduledTask(deleteScheduledTaskRequest?: DeleteScheduledTaskRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/instances/{instance_id}/scheduled-tasks/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let taskId;

            if (deleteScheduledTaskRequest !== null && deleteScheduledTaskRequest !== undefined) {
                if (deleteScheduledTaskRequest instanceof DeleteScheduledTaskRequest) {
                    instanceId = deleteScheduledTaskRequest.instanceId;
                    taskId = deleteScheduledTaskRequest.taskId;
                } else {
                    instanceId = deleteScheduledTaskRequest['instance_id'];
                    taskId = deleteScheduledTaskRequest['task_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteScheduledTask.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling deleteScheduledTask.');
            }

            options.pathParams = { 'instance_id': instanceId,'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除用户。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteUser(deleteUserRequest?: DeleteUserRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/instances/{instance_id}/users/{user_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let userName;

            if (deleteUserRequest !== null && deleteUserRequest !== undefined) {
                if (deleteUserRequest instanceof DeleteUserRequest) {
                    instanceId = deleteUserRequest.instanceId;
                    userName = deleteUserRequest.userName;
                } else {
                    instanceId = deleteUserRequest['instance_id'];
                    userName = deleteUserRequest['user_name'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteUser.');
            }
            if (userName === null || userName === undefined) {
            throw new RequiredError('userName','Required parameter userName was null or undefined when calling deleteUser.');
            }

            options.pathParams = { 'instance_id': instanceId,'user_name': userName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 开启RocketMQ实例域名访问能力。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        enableDns(enableDnsRequest?: EnableDnsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/rocketmq/instances/{instance_id}/dns",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (enableDnsRequest !== null && enableDnsRequest !== undefined) {
                if (enableDnsRequest instanceof EnableDnsRequest) {
                    instanceId = enableDnsRequest.instanceId;
                } else {
                    instanceId = enableDnsRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling enableDns.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在创建实例时，需要配置实例所在的可用区ID，可通过该接口查询可用区的ID。
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
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例的后台任务列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBackgroundTasks(listBackgroundTasksRequest?: ListBackgroundTasksRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let offset;
            
            let limit;
            
            let beginTime;
            
            let endTime;

            if (listBackgroundTasksRequest !== null && listBackgroundTasksRequest !== undefined) {
                if (listBackgroundTasksRequest instanceof ListBackgroundTasksRequest) {
                    instanceId = listBackgroundTasksRequest.instanceId;
                    offset = listBackgroundTasksRequest.offset;
                    limit = listBackgroundTasksRequest.limit;
                    beginTime = listBackgroundTasksRequest.beginTime;
                    endTime = listBackgroundTasksRequest.endTime;
                } else {
                    instanceId = listBackgroundTasksRequest['instance_id'];
                    offset = listBackgroundTasksRequest['offset'];
                    limit = listBackgroundTasksRequest['limit'];
                    beginTime = listBackgroundTasksRequest['begin_time'];
                    endTime = listBackgroundTasksRequest['end_time'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listBackgroundTasks.');
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

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询代理列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBrokers(listBrokersRequest?: ListBrokersRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/brokers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let limit;
            
            let offset;

            if (listBrokersRequest !== null && listBrokersRequest !== undefined) {
                if (listBrokersRequest instanceof ListBrokersRequest) {
                    instanceId = listBrokersRequest.instanceId;
                    limit = listBrokersRequest.limit;
                    offset = listBrokersRequest.offset;
                } else {
                    instanceId = listBrokersRequest['instance_id'];
                    limit = listBrokersRequest['limit'];
                    offset = listBrokersRequest['offset'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listBrokers.');
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
         * 获取特性开关列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listConfigFeatures() {
            const options = {
                method: "GET",
                url: "/v2/config/features",
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
         * 查询消费组的授权用户列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listConsumeGroupAccessPolicy(listConsumeGroupAccessPolicyRequest?: ListConsumeGroupAccessPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v2/{engine}/{project_id}/instances/{instance_id}/groups/{group}/accesspolicy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let engine;
            
            let instanceId;
            
            let group;
            
            let offset;
            
            let limit;

            if (listConsumeGroupAccessPolicyRequest !== null && listConsumeGroupAccessPolicyRequest !== undefined) {
                if (listConsumeGroupAccessPolicyRequest instanceof ListConsumeGroupAccessPolicyRequest) {
                    engine = listConsumeGroupAccessPolicyRequest.engine;
                    instanceId = listConsumeGroupAccessPolicyRequest.instanceId;
                    group = listConsumeGroupAccessPolicyRequest.group;
                    offset = listConsumeGroupAccessPolicyRequest.offset;
                    limit = listConsumeGroupAccessPolicyRequest.limit;
                } else {
                    engine = listConsumeGroupAccessPolicyRequest['engine'];
                    instanceId = listConsumeGroupAccessPolicyRequest['instance_id'];
                    group = listConsumeGroupAccessPolicyRequest['group'];
                    offset = listConsumeGroupAccessPolicyRequest['offset'];
                    limit = listConsumeGroupAccessPolicyRequest['limit'];
                }
            }

        
            if (engine === null || engine === undefined) {
            throw new RequiredError('engine','Required parameter engine was null or undefined when calling listConsumeGroupAccessPolicy.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listConsumeGroupAccessPolicy.');
            }
            if (group === null || group === undefined) {
            throw new RequiredError('group','Required parameter group was null or undefined when calling listConsumeGroupAccessPolicy.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'engine': engine,'instance_id': instanceId,'group': group, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询消费组的授权用户列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listConsumeGroupAccessPolicyForRocketMq(listConsumeGroupAccessPolicyForRocketMqRequest?: ListConsumeGroupAccessPolicyForRocketMqRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/rocketmq/instances/{instance_id}/groups/{group}/accesspolicy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let group;
            
            let offset;
            
            let limit;

            if (listConsumeGroupAccessPolicyForRocketMqRequest !== null && listConsumeGroupAccessPolicyForRocketMqRequest !== undefined) {
                if (listConsumeGroupAccessPolicyForRocketMqRequest instanceof ListConsumeGroupAccessPolicyForRocketMqRequest) {
                    instanceId = listConsumeGroupAccessPolicyForRocketMqRequest.instanceId;
                    group = listConsumeGroupAccessPolicyForRocketMqRequest.group;
                    offset = listConsumeGroupAccessPolicyForRocketMqRequest.offset;
                    limit = listConsumeGroupAccessPolicyForRocketMqRequest.limit;
                } else {
                    instanceId = listConsumeGroupAccessPolicyForRocketMqRequest['instance_id'];
                    group = listConsumeGroupAccessPolicyForRocketMqRequest['group'];
                    offset = listConsumeGroupAccessPolicyForRocketMqRequest['offset'];
                    limit = listConsumeGroupAccessPolicyForRocketMqRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listConsumeGroupAccessPolicyForRocketMq.');
            }
            if (group === null || group === undefined) {
            throw new RequiredError('group','Required parameter group was null or undefined when calling listConsumeGroupAccessPolicyForRocketMq.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'group': group, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例诊断报告列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDiagnosisReports(listDiagnosisReportsRequest?: ListDiagnosisReportsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{engine}/{project_id}/instances/{instance_id}/diagnosis",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let engine;
            
            let instanceId;
            
            let offset;
            
            let limit;

            if (listDiagnosisReportsRequest !== null && listDiagnosisReportsRequest !== undefined) {
                if (listDiagnosisReportsRequest instanceof ListDiagnosisReportsRequest) {
                    engine = listDiagnosisReportsRequest.engine;
                    instanceId = listDiagnosisReportsRequest.instanceId;
                    offset = listDiagnosisReportsRequest.offset;
                    limit = listDiagnosisReportsRequest.limit;
                } else {
                    engine = listDiagnosisReportsRequest['engine'];
                    instanceId = listDiagnosisReportsRequest['instance_id'];
                    offset = listDiagnosisReportsRequest['offset'];
                    limit = listDiagnosisReportsRequest['limit'];
                }
            }

        
            if (engine === null || engine === undefined) {
            throw new RequiredError('engine','Required parameter engine was null or undefined when calling listDiagnosisReports.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listDiagnosisReports.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'engine': engine,'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例诊断报告列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDiagnosisReportsForRocketMq(listDiagnosisReportsForRocketMqRequest?: ListDiagnosisReportsForRocketMqRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/rocketmq/instances/{instance_id}/diagnosis",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let offset;
            
            let limit;

            if (listDiagnosisReportsForRocketMqRequest !== null && listDiagnosisReportsForRocketMqRequest !== undefined) {
                if (listDiagnosisReportsForRocketMqRequest instanceof ListDiagnosisReportsForRocketMqRequest) {
                    instanceId = listDiagnosisReportsForRocketMqRequest.instanceId;
                    offset = listDiagnosisReportsForRocketMqRequest.offset;
                    limit = listDiagnosisReportsForRocketMqRequest.limit;
                } else {
                    instanceId = listDiagnosisReportsForRocketMqRequest['instance_id'];
                    offset = listDiagnosisReportsForRocketMqRequest['offset'];
                    limit = listDiagnosisReportsForRocketMqRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listDiagnosisReportsForRocketMq.');
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
         * 查询相应引擎的产品规格列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEngineProducts(listEngineProductsRequest?: ListEngineProductsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{engine}/products",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let engine;
            
            let type;
            
            let productId;
            
            let limit;
            
            let offset;

            if (listEngineProductsRequest !== null && listEngineProductsRequest !== undefined) {
                if (listEngineProductsRequest instanceof ListEngineProductsRequest) {
                    engine = listEngineProductsRequest.engine;
                    type = listEngineProductsRequest.type;
                    productId = listEngineProductsRequest.productId;
                    limit = listEngineProductsRequest.limit;
                    offset = listEngineProductsRequest.offset;
                } else {
                    engine = listEngineProductsRequest['engine'];
                    type = listEngineProductsRequest['type'];
                    productId = listEngineProductsRequest['product_id'];
                    limit = listEngineProductsRequest['limit'];
                    offset = listEngineProductsRequest['offset'];
                }
            }

        
            if (engine === null || engine === undefined) {
            throw new RequiredError('engine','Required parameter engine was null or undefined when calling listEngineProducts.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (productId !== null && productId !== undefined) {
                localVarQueryParameter['product_id'] = productId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'engine': engine, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询消费组列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceConsumerGroups(listInstanceConsumerGroupsRequest?: ListInstanceConsumerGroupsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let group;
            
            let limit;
            
            let offset;

            if (listInstanceConsumerGroupsRequest !== null && listInstanceConsumerGroupsRequest !== undefined) {
                if (listInstanceConsumerGroupsRequest instanceof ListInstanceConsumerGroupsRequest) {
                    instanceId = listInstanceConsumerGroupsRequest.instanceId;
                    group = listInstanceConsumerGroupsRequest.group;
                    limit = listInstanceConsumerGroupsRequest.limit;
                    offset = listInstanceConsumerGroupsRequest.offset;
                } else {
                    instanceId = listInstanceConsumerGroupsRequest['instance_id'];
                    group = listInstanceConsumerGroupsRequest['group'];
                    limit = listInstanceConsumerGroupsRequest['limit'];
                    offset = listInstanceConsumerGroupsRequest['offset'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceConsumerGroups.');
            }
            if (group !== null && group !== undefined) {
                localVarQueryParameter['group'] = group;
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
         * 查询租户的实例列表，支持按照条件查询。
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
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let engine;
            
            let name;
            
            let instanceId;
            
            let status;
            
            let includeFailure;
            
            let exactMatchName;
            
            let enterpriseProjectId;
            
            let limit;
            
            let offset;

            if (listInstancesRequest !== null && listInstancesRequest !== undefined) {
                if (listInstancesRequest instanceof ListInstancesRequest) {
                    engine = listInstancesRequest.engine;
                    name = listInstancesRequest.name;
                    instanceId = listInstancesRequest.instanceId;
                    status = listInstancesRequest.status;
                    includeFailure = listInstancesRequest.includeFailure;
                    exactMatchName = listInstancesRequest.exactMatchName;
                    enterpriseProjectId = listInstancesRequest.enterpriseProjectId;
                    limit = listInstancesRequest.limit;
                    offset = listInstancesRequest.offset;
                } else {
                    engine = listInstancesRequest['engine'];
                    name = listInstancesRequest['name'];
                    instanceId = listInstancesRequest['instance_id'];
                    status = listInstancesRequest['status'];
                    includeFailure = listInstancesRequest['include_failure'];
                    exactMatchName = listInstancesRequest['exact_match_name'];
                    enterpriseProjectId = listInstancesRequest['enterprise_project_id'];
                    limit = listInstancesRequest['limit'];
                    offset = listInstancesRequest['offset'];
                }
            }

        
            if (engine === null || engine === undefined) {
                throw new RequiredError('engine','Required parameter engine was null or undefined when calling listInstances.');
            }
            if (engine !== null && engine !== undefined) {
                localVarQueryParameter['engine'] = engine;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (includeFailure !== null && includeFailure !== undefined) {
                localVarQueryParameter['include_failure'] = includeFailure;
            }
            if (exactMatchName !== null && exactMatchName !== undefined) {
                localVarQueryParameter['exact_match_name'] = exactMatchName;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
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
         * 查询消息轨迹。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMessageTrace(listMessageTraceRequest?: ListMessageTraceRequest) {
            const options = {
                method: "GET",
                url: "/v2/{engine}/{project_id}/instances/{instance_id}/trace",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let engine;
            
            let instanceId;
            
            let msgId;
            
            let limit;
            
            let offset;

            if (listMessageTraceRequest !== null && listMessageTraceRequest !== undefined) {
                if (listMessageTraceRequest instanceof ListMessageTraceRequest) {
                    engine = listMessageTraceRequest.engine;
                    instanceId = listMessageTraceRequest.instanceId;
                    msgId = listMessageTraceRequest.msgId;
                    limit = listMessageTraceRequest.limit;
                    offset = listMessageTraceRequest.offset;
                } else {
                    engine = listMessageTraceRequest['engine'];
                    instanceId = listMessageTraceRequest['instance_id'];
                    msgId = listMessageTraceRequest['msg_id'];
                    limit = listMessageTraceRequest['limit'];
                    offset = listMessageTraceRequest['offset'];
                }
            }

        
            if (engine === null || engine === undefined) {
            throw new RequiredError('engine','Required parameter engine was null or undefined when calling listMessageTrace.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listMessageTrace.');
            }
            if (msgId === null || msgId === undefined) {
                throw new RequiredError('msgId','Required parameter msgId was null or undefined when calling listMessageTrace.');
            }
            if (msgId !== null && msgId !== undefined) {
                localVarQueryParameter['msg_id'] = msgId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'engine': engine,'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询消息轨迹。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMessageTraceForRocketMq(listMessageTraceForRocketMqRequest?: ListMessageTraceForRocketMqRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/rocketmq/instances/{instance_id}/trace",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let msgId;
            
            let limit;
            
            let offset;

            if (listMessageTraceForRocketMqRequest !== null && listMessageTraceForRocketMqRequest !== undefined) {
                if (listMessageTraceForRocketMqRequest instanceof ListMessageTraceForRocketMqRequest) {
                    instanceId = listMessageTraceForRocketMqRequest.instanceId;
                    msgId = listMessageTraceForRocketMqRequest.msgId;
                    limit = listMessageTraceForRocketMqRequest.limit;
                    offset = listMessageTraceForRocketMqRequest.offset;
                } else {
                    instanceId = listMessageTraceForRocketMqRequest['instance_id'];
                    msgId = listMessageTraceForRocketMqRequest['msg_id'];
                    limit = listMessageTraceForRocketMqRequest['limit'];
                    offset = listMessageTraceForRocketMqRequest['offset'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listMessageTraceForRocketMq.');
            }
            if (msgId === null || msgId === undefined) {
                throw new RequiredError('msgId','Required parameter msgId was null or undefined when calling listMessageTraceForRocketMq.');
            }
            if (msgId !== null && msgId !== undefined) {
                localVarQueryParameter['msg_id'] = msgId;
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
         * 查询消息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMessages(listMessagesRequest?: ListMessagesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{engine}/{project_id}/instances/{instance_id}/messages",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let engine;
            
            let instanceId;
            
            let topic;
            
            let queue;
            
            let limit;
            
            let offset;
            
            let key;
            
            let startTime;
            
            let endTime;
            
            let msgId;

            if (listMessagesRequest !== null && listMessagesRequest !== undefined) {
                if (listMessagesRequest instanceof ListMessagesRequest) {
                    engine = listMessagesRequest.engine;
                    instanceId = listMessagesRequest.instanceId;
                    topic = listMessagesRequest.topic;
                    queue = listMessagesRequest.queue;
                    limit = listMessagesRequest.limit;
                    offset = listMessagesRequest.offset;
                    key = listMessagesRequest.key;
                    startTime = listMessagesRequest.startTime;
                    endTime = listMessagesRequest.endTime;
                    msgId = listMessagesRequest.msgId;
                } else {
                    engine = listMessagesRequest['engine'];
                    instanceId = listMessagesRequest['instance_id'];
                    topic = listMessagesRequest['topic'];
                    queue = listMessagesRequest['queue'];
                    limit = listMessagesRequest['limit'];
                    offset = listMessagesRequest['offset'];
                    key = listMessagesRequest['key'];
                    startTime = listMessagesRequest['start_time'];
                    endTime = listMessagesRequest['end_time'];
                    msgId = listMessagesRequest['msg_id'];
                }
            }

        
            if (engine === null || engine === undefined) {
            throw new RequiredError('engine','Required parameter engine was null or undefined when calling listMessages.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listMessages.');
            }
            if (topic === null || topic === undefined) {
                throw new RequiredError('topic','Required parameter topic was null or undefined when calling listMessages.');
            }
            if (topic !== null && topic !== undefined) {
                localVarQueryParameter['topic'] = topic;
            }
            if (queue !== null && queue !== undefined) {
                localVarQueryParameter['queue'] = queue;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (key !== null && key !== undefined) {
                localVarQueryParameter['key'] = key;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (msgId !== null && msgId !== undefined) {
                localVarQueryParameter['msg_id'] = msgId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'engine': engine,'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询消息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMessagesForRocketMq(listMessagesForRocketMqRequest?: ListMessagesForRocketMqRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/rocketmq/instances/{instance_id}/messages",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let topic;
            
            let queue;
            
            let limit;
            
            let offset;
            
            let key;
            
            let startTime;
            
            let endTime;
            
            let msgId;

            if (listMessagesForRocketMqRequest !== null && listMessagesForRocketMqRequest !== undefined) {
                if (listMessagesForRocketMqRequest instanceof ListMessagesForRocketMqRequest) {
                    instanceId = listMessagesForRocketMqRequest.instanceId;
                    topic = listMessagesForRocketMqRequest.topic;
                    queue = listMessagesForRocketMqRequest.queue;
                    limit = listMessagesForRocketMqRequest.limit;
                    offset = listMessagesForRocketMqRequest.offset;
                    key = listMessagesForRocketMqRequest.key;
                    startTime = listMessagesForRocketMqRequest.startTime;
                    endTime = listMessagesForRocketMqRequest.endTime;
                    msgId = listMessagesForRocketMqRequest.msgId;
                } else {
                    instanceId = listMessagesForRocketMqRequest['instance_id'];
                    topic = listMessagesForRocketMqRequest['topic'];
                    queue = listMessagesForRocketMqRequest['queue'];
                    limit = listMessagesForRocketMqRequest['limit'];
                    offset = listMessagesForRocketMqRequest['offset'];
                    key = listMessagesForRocketMqRequest['key'];
                    startTime = listMessagesForRocketMqRequest['start_time'];
                    endTime = listMessagesForRocketMqRequest['end_time'];
                    msgId = listMessagesForRocketMqRequest['msg_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listMessagesForRocketMq.');
            }
            if (topic === null || topic === undefined) {
                throw new RequiredError('topic','Required parameter topic was null or undefined when calling listMessagesForRocketMq.');
            }
            if (topic !== null && topic !== undefined) {
                localVarQueryParameter['topic'] = topic;
            }
            if (queue !== null && queue !== undefined) {
                localVarQueryParameter['queue'] = queue;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (key !== null && key !== undefined) {
                localVarQueryParameter['key'] = key;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (msgId !== null && msgId !== undefined) {
                localVarQueryParameter['msg_id'] = msgId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 1. 查询实例下所有迁移任务
         * 2. 查询指定迁移任务信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRocketMqMigrationTask(listRocketMqMigrationTaskRequest?: ListRocketMqMigrationTaskRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/metadata",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let id;
            
            let type;
            
            let offset;
            
            let limit;
            
            let name;

            if (listRocketMqMigrationTaskRequest !== null && listRocketMqMigrationTaskRequest !== undefined) {
                if (listRocketMqMigrationTaskRequest instanceof ListRocketMqMigrationTaskRequest) {
                    instanceId = listRocketMqMigrationTaskRequest.instanceId;
                    id = listRocketMqMigrationTaskRequest.id;
                    type = listRocketMqMigrationTaskRequest.type;
                    offset = listRocketMqMigrationTaskRequest.offset;
                    limit = listRocketMqMigrationTaskRequest.limit;
                    name = listRocketMqMigrationTaskRequest.name;
                } else {
                    instanceId = listRocketMqMigrationTaskRequest['instance_id'];
                    id = listRocketMqMigrationTaskRequest['id'];
                    type = listRocketMqMigrationTaskRequest['type'];
                    offset = listRocketMqMigrationTaskRequest['offset'];
                    limit = listRocketMqMigrationTaskRequest['limit'];
                    name = listRocketMqMigrationTaskRequest['name'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listRocketMqMigrationTask.');
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
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
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例的定时任务列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listScheduledTasks(listScheduledTasksRequest?: ListScheduledTasksRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/scheduled-tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let start;
            
            let limit;
            
            let beginTime;
            
            let endTime;

            if (listScheduledTasksRequest !== null && listScheduledTasksRequest !== undefined) {
                if (listScheduledTasksRequest instanceof ListScheduledTasksRequest) {
                    instanceId = listScheduledTasksRequest.instanceId;
                    start = listScheduledTasksRequest.start;
                    limit = listScheduledTasksRequest.limit;
                    beginTime = listScheduledTasksRequest.beginTime;
                    endTime = listScheduledTasksRequest.endTime;
                } else {
                    instanceId = listScheduledTasksRequest['instance_id'];
                    start = listScheduledTasksRequest['start'];
                    limit = listScheduledTasksRequest['limit'];
                    beginTime = listScheduledTasksRequest['begin_time'];
                    endTime = listScheduledTasksRequest['end_time'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listScheduledTasks.');
            }
            if (start !== null && start !== undefined) {
                localVarQueryParameter['start'] = start;
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

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询主题的授权用户列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTopicAccessPolicy(listTopicAccessPolicyRequest?: ListTopicAccessPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/topics/{topic}/accesspolicy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let topic;
            
            let offset;
            
            let limit;

            if (listTopicAccessPolicyRequest !== null && listTopicAccessPolicyRequest !== undefined) {
                if (listTopicAccessPolicyRequest instanceof ListTopicAccessPolicyRequest) {
                    instanceId = listTopicAccessPolicyRequest.instanceId;
                    topic = listTopicAccessPolicyRequest.topic;
                    offset = listTopicAccessPolicyRequest.offset;
                    limit = listTopicAccessPolicyRequest.limit;
                } else {
                    instanceId = listTopicAccessPolicyRequest['instance_id'];
                    topic = listTopicAccessPolicyRequest['topic'];
                    offset = listTopicAccessPolicyRequest['offset'];
                    limit = listTopicAccessPolicyRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listTopicAccessPolicy.');
            }
            if (topic === null || topic === undefined) {
            throw new RequiredError('topic','Required parameter topic was null or undefined when calling listTopicAccessPolicy.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'topic': topic, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询用户列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listUser(listUserRequest?: ListUserRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let limit;
            
            let offset;

            if (listUserRequest !== null && listUserRequest !== undefined) {
                if (listUserRequest instanceof ListUserRequest) {
                    instanceId = listUserRequest.instanceId;
                    limit = listUserRequest.limit;
                    offset = listUserRequest.offset;
                } else {
                    instanceId = listUserRequest['instance_id'];
                    limit = listUserRequest['limit'];
                    offset = listUserRequest['offset'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listUser.');
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
         * 修改实例SSL相关配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        modifyInstanceSslConfig(modifyInstanceSslConfigRequest?: ModifyInstanceSslConfigRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/{engine}/instances/{instance_id}/plain-ssl-switch",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let engine;
            
            let instanceId;

            if (modifyInstanceSslConfigRequest !== null && modifyInstanceSslConfigRequest !== undefined) {
                if (modifyInstanceSslConfigRequest instanceof ModifyInstanceSslConfigRequest) {
                    engine = modifyInstanceSslConfigRequest.engine;
                    instanceId = modifyInstanceSslConfigRequest.instanceId;
                    body = modifyInstanceSslConfigRequest.body
                } else {
                    engine = modifyInstanceSslConfigRequest['engine'];
                    instanceId = modifyInstanceSslConfigRequest['instance_id'];
                    body = modifyInstanceSslConfigRequest['body'];
                }
            }

        
            if (engine === null || engine === undefined) {
            throw new RequiredError('engine','Required parameter engine was null or undefined when calling modifyInstanceSslConfig.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling modifyInstanceSslConfig.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'engine': engine,'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新回收站策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        modifyRecyclePolicy(modifyRecyclePolicyRequest?: ModifyRecyclePolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/recycle",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (modifyRecyclePolicyRequest !== null && modifyRecyclePolicyRequest !== undefined) {
                if (modifyRecyclePolicyRequest instanceof ModifyRecyclePolicyRequest) {
                    body = modifyRecyclePolicyRequest.body
                } else {
                    body = modifyRecyclePolicyRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重置消费进度。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetConsumeOffset(resetConsumeOffsetRequest?: ResetConsumeOffsetRequest) {
            const options = {
                method: "POST",
                url: "/v2/{engine}/{project_id}/instances/{instance_id}/groups/{group}/reset-message-offset",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let engine;
            
            let instanceId;
            
            let group;

            if (resetConsumeOffsetRequest !== null && resetConsumeOffsetRequest !== undefined) {
                if (resetConsumeOffsetRequest instanceof ResetConsumeOffsetRequest) {
                    engine = resetConsumeOffsetRequest.engine;
                    instanceId = resetConsumeOffsetRequest.instanceId;
                    group = resetConsumeOffsetRequest.group;
                    body = resetConsumeOffsetRequest.body
                } else {
                    engine = resetConsumeOffsetRequest['engine'];
                    instanceId = resetConsumeOffsetRequest['instance_id'];
                    group = resetConsumeOffsetRequest['group'];
                    body = resetConsumeOffsetRequest['body'];
                }
            }

        
            if (engine === null || engine === undefined) {
            throw new RequiredError('engine','Required parameter engine was null or undefined when calling resetConsumeOffset.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling resetConsumeOffset.');
            }
            if (group === null || group === undefined) {
            throw new RequiredError('group','Required parameter group was null or undefined when calling resetConsumeOffset.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'engine': engine,'instance_id': instanceId,'group': group, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重置消费进度。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetConsumeOffsetForRocketMq(resetConsumeOffsetForRocketMqRequest?: ResetConsumeOffsetForRocketMqRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/rocketmq/instances/{instance_id}/groups/{group}/reset-message-offset",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let group;

            if (resetConsumeOffsetForRocketMqRequest !== null && resetConsumeOffsetForRocketMqRequest !== undefined) {
                if (resetConsumeOffsetForRocketMqRequest instanceof ResetConsumeOffsetForRocketMqRequest) {
                    instanceId = resetConsumeOffsetForRocketMqRequest.instanceId;
                    group = resetConsumeOffsetForRocketMqRequest.group;
                    body = resetConsumeOffsetForRocketMqRequest.body
                } else {
                    instanceId = resetConsumeOffsetForRocketMqRequest['instance_id'];
                    group = resetConsumeOffsetForRocketMqRequest['group'];
                    body = resetConsumeOffsetForRocketMqRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling resetConsumeOffsetForRocketMq.');
            }
            if (group === null || group === undefined) {
            throw new RequiredError('group','Required parameter group was null or undefined when calling resetConsumeOffsetForRocketMq.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'group': group, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 实例规格变更。
         * 
         * [**当前通过调用API，只支持按需实例进行实例规格变更。**](tag:hws,hws_hk,ctc,cmcc,ax)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resizeInstance(resizeInstanceRequest?: ResizeInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v2/{engine}/{project_id}/instances/{instance_id}/extend",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let engine;
            
            let instanceId;

            if (resizeInstanceRequest !== null && resizeInstanceRequest !== undefined) {
                if (resizeInstanceRequest instanceof ResizeInstanceRequest) {
                    engine = resizeInstanceRequest.engine;
                    instanceId = resizeInstanceRequest.instanceId;
                    body = resizeInstanceRequest.body
                } else {
                    engine = resizeInstanceRequest['engine'];
                    instanceId = resizeInstanceRequest['instance_id'];
                    body = resizeInstanceRequest['body'];
                }
            }

        
            if (engine === null || engine === undefined) {
            throw new RequiredError('engine','Required parameter engine was null or undefined when calling resizeInstance.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling resizeInstance.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'engine': engine,'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 实例规格变更。
         * 
         * [**当前通过调用API，只支持按需实例进行实例规格变更。**](tag:hws,hws_hk,ctc,cmcc)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resizeInstanceForRocketMq(resizeInstanceForRocketMqRequest?: ResizeInstanceForRocketMqRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/rocketmq/instances/{instance_id}/extend",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (resizeInstanceForRocketMqRequest !== null && resizeInstanceForRocketMqRequest !== undefined) {
                if (resizeInstanceForRocketMqRequest instanceof ResizeInstanceForRocketMqRequest) {
                    instanceId = resizeInstanceForRocketMqRequest.instanceId;
                    body = resizeInstanceForRocketMqRequest.body
                } else {
                    instanceId = resizeInstanceForRocketMqRequest['instance_id'];
                    body = resizeInstanceForRocketMqRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling resizeInstanceForRocketMq.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 恢复回收站实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restoreRecycleInstance(restoreRecycleInstanceRequest?: RestoreRecycleInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/recycle",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (restoreRecycleInstanceRequest !== null && restoreRecycleInstanceRequest !== undefined) {
                if (restoreRecycleInstanceRequest instanceof RestoreRecycleInstanceRequest) {
                    body = restoreRecycleInstanceRequest.body
                } else {
                    body = restoreRecycleInstanceRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重发死信消息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        sendDlqMessage(sendDlqMessageRequest?: SendDlqMessageRequest) {
            const options = {
                method: "POST",
                url: "/v2/{engine}/{project_id}/instances/{instance_id}/messages/deadletter-resend",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let engine;
            
            let instanceId;

            if (sendDlqMessageRequest !== null && sendDlqMessageRequest !== undefined) {
                if (sendDlqMessageRequest instanceof SendDlqMessageRequest) {
                    engine = sendDlqMessageRequest.engine;
                    instanceId = sendDlqMessageRequest.instanceId;
                    body = sendDlqMessageRequest.body
                } else {
                    engine = sendDlqMessageRequest['engine'];
                    instanceId = sendDlqMessageRequest['instance_id'];
                    body = sendDlqMessageRequest['body'];
                }
            }

        
            if (engine === null || engine === undefined) {
            throw new RequiredError('engine','Required parameter engine was null or undefined when calling sendDlqMessage.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling sendDlqMessage.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'engine': engine,'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重发死信消息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        sendDlqMessageForRocketMq(sendDlqMessageForRocketMqRequest?: SendDlqMessageForRocketMqRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/rocketmq/instances/{instance_id}/messages/deadletter-resend",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (sendDlqMessageForRocketMqRequest !== null && sendDlqMessageForRocketMqRequest !== undefined) {
                if (sendDlqMessageForRocketMqRequest instanceof SendDlqMessageForRocketMqRequest) {
                    instanceId = sendDlqMessageForRocketMqRequest.instanceId;
                    body = sendDlqMessageForRocketMqRequest.body
                } else {
                    instanceId = sendDlqMessageForRocketMqRequest['instance_id'];
                    body = sendDlqMessageForRocketMqRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling sendDlqMessageForRocketMq.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 发送消息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        sendMessage(sendMessageRequest?: SendMessageRequest) {
            const options = {
                method: "POST",
                url: "/v2/{engine}/{project_id}/instances/{instance_id}/messages",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let engine;
            
            let instanceId;

            if (sendMessageRequest !== null && sendMessageRequest !== undefined) {
                if (sendMessageRequest instanceof SendMessageRequest) {
                    engine = sendMessageRequest.engine;
                    instanceId = sendMessageRequest.instanceId;
                    body = sendMessageRequest.body
                } else {
                    engine = sendMessageRequest['engine'];
                    instanceId = sendMessageRequest['instance_id'];
                    body = sendMessageRequest['body'];
                }
            }

        
            if (engine === null || engine === undefined) {
            throw new RequiredError('engine','Required parameter engine was null or undefined when calling sendMessage.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling sendMessage.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'engine': engine,'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 发送消息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        sendMessageForRocketMq(sendMessageForRocketMqRequest?: SendMessageForRocketMqRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/rocketmq/instances/{instance_id}/messages",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (sendMessageForRocketMqRequest !== null && sendMessageForRocketMqRequest !== undefined) {
                if (sendMessageForRocketMqRequest instanceof SendMessageForRocketMqRequest) {
                    instanceId = sendMessageForRocketMqRequest.instanceId;
                    body = sendMessageForRocketMqRequest.body
                } else {
                    instanceId = sendMessageForRocketMqRequest['instance_id'];
                    body = sendMessageForRocketMqRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling sendMessageForRocketMq.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询后台任务管理中的指定记录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBackgroundTask(showBackgroundTaskRequest?: ShowBackgroundTaskRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/tasks/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let taskId;

            if (showBackgroundTaskRequest !== null && showBackgroundTaskRequest !== undefined) {
                if (showBackgroundTaskRequest instanceof ShowBackgroundTaskRequest) {
                    instanceId = showBackgroundTaskRequest.instanceId;
                    taskId = showBackgroundTaskRequest.taskId;
                } else {
                    instanceId = showBackgroundTaskRequest['instance_id'];
                    taskId = showBackgroundTaskRequest['task_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showBackgroundTask.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showBackgroundTask.');
            }

            options.pathParams = { 'instance_id': instanceId,'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询后台任务管理中的指定实例变更记录的进度。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBackgroundTaskProgress(showBackgroundTaskProgressRequest?: ShowBackgroundTaskProgressRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/tasks/{task_id}/progress",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let taskId;

            if (showBackgroundTaskProgressRequest !== null && showBackgroundTaskProgressRequest !== undefined) {
                if (showBackgroundTaskProgressRequest instanceof ShowBackgroundTaskProgressRequest) {
                    instanceId = showBackgroundTaskProgressRequest.instanceId;
                    taskId = showBackgroundTaskProgressRequest.taskId;
                } else {
                    instanceId = showBackgroundTaskProgressRequest['instance_id'];
                    taskId = showBackgroundTaskProgressRequest['task_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showBackgroundTaskProgress.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showBackgroundTaskProgress.');
            }

            options.pathParams = { 'instance_id': instanceId,'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例在CES的监控层级关系。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCesHierarchy(showCesHierarchyRequest?: ShowCesHierarchyRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/ces-hierarchy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showCesHierarchyRequest !== null && showCesHierarchyRequest !== undefined) {
                if (showCesHierarchyRequest instanceof ShowCesHierarchyRequest) {
                    instanceId = showCesHierarchyRequest.instanceId;
                } else {
                    instanceId = showCesHierarchyRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showCesHierarchy.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询消费组内消费者列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showConsumerConnections(showConsumerConnectionsRequest?: ShowConsumerConnectionsRequest) {
            const options = {
                method: "GET",
                url: "/v2/rocketmq/{project_id}/instances/{instance_id}/groups/{group}/clients",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let group;
            
            let limit;
            
            let offset;
            
            let isDetail;

            if (showConsumerConnectionsRequest !== null && showConsumerConnectionsRequest !== undefined) {
                if (showConsumerConnectionsRequest instanceof ShowConsumerConnectionsRequest) {
                    instanceId = showConsumerConnectionsRequest.instanceId;
                    group = showConsumerConnectionsRequest.group;
                    limit = showConsumerConnectionsRequest.limit;
                    offset = showConsumerConnectionsRequest.offset;
                    isDetail = showConsumerConnectionsRequest.isDetail;
                } else {
                    instanceId = showConsumerConnectionsRequest['instance_id'];
                    group = showConsumerConnectionsRequest['group'];
                    limit = showConsumerConnectionsRequest['limit'];
                    offset = showConsumerConnectionsRequest['offset'];
                    isDetail = showConsumerConnectionsRequest['is_detail'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showConsumerConnections.');
            }
            if (group === null || group === undefined) {
            throw new RequiredError('group','Required parameter group was null or undefined when calling showConsumerConnections.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (isDetail !== null && isDetail !== undefined) {
                localVarQueryParameter['is_detail'] = isDetail;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'group': group, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询消费组内消费者列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showConsumerConnectionsForRocketMq(showConsumerConnectionsForRocketMqRequest?: ShowConsumerConnectionsForRocketMqRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/rocketmq/instances/{instance_id}/groups/{group}/clients",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let group;
            
            let limit;
            
            let offset;
            
            let isDetail;

            if (showConsumerConnectionsForRocketMqRequest !== null && showConsumerConnectionsForRocketMqRequest !== undefined) {
                if (showConsumerConnectionsForRocketMqRequest instanceof ShowConsumerConnectionsForRocketMqRequest) {
                    instanceId = showConsumerConnectionsForRocketMqRequest.instanceId;
                    group = showConsumerConnectionsForRocketMqRequest.group;
                    limit = showConsumerConnectionsForRocketMqRequest.limit;
                    offset = showConsumerConnectionsForRocketMqRequest.offset;
                    isDetail = showConsumerConnectionsForRocketMqRequest.isDetail;
                } else {
                    instanceId = showConsumerConnectionsForRocketMqRequest['instance_id'];
                    group = showConsumerConnectionsForRocketMqRequest['group'];
                    limit = showConsumerConnectionsForRocketMqRequest['limit'];
                    offset = showConsumerConnectionsForRocketMqRequest['offset'];
                    isDetail = showConsumerConnectionsForRocketMqRequest['is_detail'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showConsumerConnectionsForRocketMq.');
            }
            if (group === null || group === undefined) {
            throw new RequiredError('group','Required parameter group was null or undefined when calling showConsumerConnectionsForRocketMq.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (isDetail !== null && isDetail !== undefined) {
                localVarQueryParameter['is_detail'] = isDetail;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'group': group, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询消费列表或详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showConsumerListOrDetails(showConsumerListOrDetailsRequest?: ShowConsumerListOrDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/groups/{group}/topics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let group;
            
            let topic;
            
            let limit;
            
            let offset;

            if (showConsumerListOrDetailsRequest !== null && showConsumerListOrDetailsRequest !== undefined) {
                if (showConsumerListOrDetailsRequest instanceof ShowConsumerListOrDetailsRequest) {
                    instanceId = showConsumerListOrDetailsRequest.instanceId;
                    group = showConsumerListOrDetailsRequest.group;
                    topic = showConsumerListOrDetailsRequest.topic;
                    limit = showConsumerListOrDetailsRequest.limit;
                    offset = showConsumerListOrDetailsRequest.offset;
                } else {
                    instanceId = showConsumerListOrDetailsRequest['instance_id'];
                    group = showConsumerListOrDetailsRequest['group'];
                    topic = showConsumerListOrDetailsRequest['topic'];
                    limit = showConsumerListOrDetailsRequest['limit'];
                    offset = showConsumerListOrDetailsRequest['offset'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showConsumerListOrDetails.');
            }
            if (group === null || group === undefined) {
            throw new RequiredError('group','Required parameter group was null or undefined when calling showConsumerListOrDetails.');
            }
            if (topic !== null && topic !== undefined) {
                localVarQueryParameter['topic'] = topic;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'group': group, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例诊断报告。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDiagnosisReport(showDiagnosisReportRequest?: ShowDiagnosisReportRequest) {
            const options = {
                method: "GET",
                url: "/v2/{engine}/{project_id}/diagnosis/{report_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let engine;
            
            let reportId;

            if (showDiagnosisReportRequest !== null && showDiagnosisReportRequest !== undefined) {
                if (showDiagnosisReportRequest instanceof ShowDiagnosisReportRequest) {
                    engine = showDiagnosisReportRequest.engine;
                    reportId = showDiagnosisReportRequest.reportId;
                } else {
                    engine = showDiagnosisReportRequest['engine'];
                    reportId = showDiagnosisReportRequest['report_id'];
                }
            }

        
            if (engine === null || engine === undefined) {
            throw new RequiredError('engine','Required parameter engine was null or undefined when calling showDiagnosisReport.');
            }
            if (reportId === null || reportId === undefined) {
            throw new RequiredError('reportId','Required parameter reportId was null or undefined when calling showDiagnosisReport.');
            }

            options.pathParams = { 'engine': engine,'report_id': reportId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例诊断报告。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDiagnosisReportForRocketMq(showDiagnosisReportForRocketMqRequest?: ShowDiagnosisReportForRocketMqRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/rocketmq/diagnosis/{report_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let reportId;

            if (showDiagnosisReportForRocketMqRequest !== null && showDiagnosisReportForRocketMqRequest !== undefined) {
                if (showDiagnosisReportForRocketMqRequest instanceof ShowDiagnosisReportForRocketMqRequest) {
                    reportId = showDiagnosisReportForRocketMqRequest.reportId;
                } else {
                    reportId = showDiagnosisReportForRocketMqRequest['report_id'];
                }
            }

        
            if (reportId === null || reportId === undefined) {
            throw new RequiredError('reportId','Required parameter reportId was null or undefined when calling showDiagnosisReportForRocketMq.');
            }

            options.pathParams = { 'report_id': reportId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询stack信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDiagnosisStack(showDiagnosisStackRequest?: ShowDiagnosisStackRequest) {
            const options = {
                method: "GET",
                url: "/v2/{engine}/{project_id}/diagnosis/stack/{stack_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let engine;
            
            let stackId;

            if (showDiagnosisStackRequest !== null && showDiagnosisStackRequest !== undefined) {
                if (showDiagnosisStackRequest instanceof ShowDiagnosisStackRequest) {
                    engine = showDiagnosisStackRequest.engine;
                    stackId = showDiagnosisStackRequest.stackId;
                } else {
                    engine = showDiagnosisStackRequest['engine'];
                    stackId = showDiagnosisStackRequest['stack_id'];
                }
            }

        
            if (engine === null || engine === undefined) {
            throw new RequiredError('engine','Required parameter engine was null or undefined when calling showDiagnosisStack.');
            }
            if (stackId === null || stackId === undefined) {
            throw new RequiredError('stackId','Required parameter stackId was null or undefined when calling showDiagnosisStack.');
            }

            options.pathParams = { 'engine': engine,'stack_id': stackId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询stack信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDiagnosisStackForRocketMq(showDiagnosisStackForRocketMqRequest?: ShowDiagnosisStackForRocketMqRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/rocketmq/diagnosis/stack/{stack_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let stackId;

            if (showDiagnosisStackForRocketMqRequest !== null && showDiagnosisStackForRocketMqRequest !== undefined) {
                if (showDiagnosisStackForRocketMqRequest instanceof ShowDiagnosisStackForRocketMqRequest) {
                    stackId = showDiagnosisStackForRocketMqRequest.stackId;
                } else {
                    stackId = showDiagnosisStackForRocketMqRequest['stack_id'];
                }
            }

        
            if (stackId === null || stackId === undefined) {
            throw new RequiredError('stackId','Required parameter stackId was null or undefined when calling showDiagnosisStackForRocketMq.');
            }

            options.pathParams = { 'stack_id': stackId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例的扩容规格列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showEngineInstanceExtendProductInfo(showEngineInstanceExtendProductInfoRequest?: ShowEngineInstanceExtendProductInfoRequest) {
            const options = {
                method: "GET",
                url: "/v2/{engine}/{project_id}/instances/{instance_id}/extend",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let engine;
            
            let instanceId;
            
            let type;
            
            let limit;
            
            let offset;

            if (showEngineInstanceExtendProductInfoRequest !== null && showEngineInstanceExtendProductInfoRequest !== undefined) {
                if (showEngineInstanceExtendProductInfoRequest instanceof ShowEngineInstanceExtendProductInfoRequest) {
                    engine = showEngineInstanceExtendProductInfoRequest.engine;
                    instanceId = showEngineInstanceExtendProductInfoRequest.instanceId;
                    type = showEngineInstanceExtendProductInfoRequest.type;
                    limit = showEngineInstanceExtendProductInfoRequest.limit;
                    offset = showEngineInstanceExtendProductInfoRequest.offset;
                } else {
                    engine = showEngineInstanceExtendProductInfoRequest['engine'];
                    instanceId = showEngineInstanceExtendProductInfoRequest['instance_id'];
                    type = showEngineInstanceExtendProductInfoRequest['type'];
                    limit = showEngineInstanceExtendProductInfoRequest['limit'];
                    offset = showEngineInstanceExtendProductInfoRequest['offset'];
                }
            }

        
            if (engine === null || engine === undefined) {
            throw new RequiredError('engine','Required parameter engine was null or undefined when calling showEngineInstanceExtendProductInfo.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showEngineInstanceExtendProductInfo.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'engine': engine,'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例的扩容规格列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showEngineInstanceExtendProductInfoForRocketMq(showEngineInstanceExtendProductInfoForRocketMqRequest?: ShowEngineInstanceExtendProductInfoForRocketMqRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/rocketmq/instances/{instance_id}/extend",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let type;
            
            let limit;
            
            let offset;

            if (showEngineInstanceExtendProductInfoForRocketMqRequest !== null && showEngineInstanceExtendProductInfoForRocketMqRequest !== undefined) {
                if (showEngineInstanceExtendProductInfoForRocketMqRequest instanceof ShowEngineInstanceExtendProductInfoForRocketMqRequest) {
                    instanceId = showEngineInstanceExtendProductInfoForRocketMqRequest.instanceId;
                    type = showEngineInstanceExtendProductInfoForRocketMqRequest.type;
                    limit = showEngineInstanceExtendProductInfoForRocketMqRequest.limit;
                    offset = showEngineInstanceExtendProductInfoForRocketMqRequest.offset;
                } else {
                    instanceId = showEngineInstanceExtendProductInfoForRocketMqRequest['instance_id'];
                    type = showEngineInstanceExtendProductInfoForRocketMqRequest['type'];
                    limit = showEngineInstanceExtendProductInfoForRocketMqRequest['limit'];
                    offset = showEngineInstanceExtendProductInfoForRocketMqRequest['offset'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showEngineInstanceExtendProductInfoForRocketMq.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
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
         * 查询指定消费组详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showGroup(showGroupRequest?: ShowGroupRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/groups/{group}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let group;

            if (showGroupRequest !== null && showGroupRequest !== undefined) {
                if (showGroupRequest instanceof ShowGroupRequest) {
                    instanceId = showGroupRequest.instanceId;
                    group = showGroupRequest.group;
                } else {
                    instanceId = showGroupRequest['instance_id'];
                    group = showGroupRequest['group'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showGroup.');
            }
            if (group === null || group === undefined) {
            throw new RequiredError('group','Required parameter group was null or undefined when calling showGroup.');
            }

            options.pathParams = { 'instance_id': instanceId,'group': group, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定实例的详细信息。
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
                headers: {}
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
         * 查询实例节点信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceNodes(showInstanceNodesRequest?: ShowInstanceNodesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/{engine}/instances/{instance_id}/nodes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let engine;
            
            let instanceId;
            
            let limit;
            
            let offset;

            if (showInstanceNodesRequest !== null && showInstanceNodesRequest !== undefined) {
                if (showInstanceNodesRequest instanceof ShowInstanceNodesRequest) {
                    engine = showInstanceNodesRequest.engine;
                    instanceId = showInstanceNodesRequest.instanceId;
                    limit = showInstanceNodesRequest.limit;
                    offset = showInstanceNodesRequest.offset;
                } else {
                    engine = showInstanceNodesRequest['engine'];
                    instanceId = showInstanceNodesRequest['instance_id'];
                    limit = showInstanceNodesRequest['limit'];
                    offset = showInstanceNodesRequest['offset'];
                }
            }

        
            if (engine === null || engine === undefined) {
            throw new RequiredError('engine','Required parameter engine was null or undefined when calling showInstanceNodes.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInstanceNodes.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'engine': engine,'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户最大可以创建的实例个数和已创建的实例个数，以及每个实例最大可以创建标签的个数。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showQuotas(showQuotasRequest?: ShowQuotasRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/quotas",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let includeTagsQuota;
            
            let onlyQuota;

            if (showQuotasRequest !== null && showQuotasRequest !== undefined) {
                if (showQuotasRequest instanceof ShowQuotasRequest) {
                    includeTagsQuota = showQuotasRequest.includeTagsQuota;
                    onlyQuota = showQuotasRequest.onlyQuota;
                } else {
                    includeTagsQuota = showQuotasRequest['includeTagsQuota'];
                    onlyQuota = showQuotasRequest['onlyQuota'];
                }
            }

        
            if (includeTagsQuota !== null && includeTagsQuota !== undefined) {
                localVarQueryParameter['includeTagsQuota'] = includeTagsQuota;
            }
            if (onlyQuota !== null && onlyQuota !== undefined) {
                localVarQueryParameter['onlyQuota'] = onlyQuota;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询回收站实例列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRecycleInstances() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/recycle",
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
         * 该接口用于查询RocketMQ配置，若成功则返回配置的相关信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRocketMqConfigs(showRocketMqConfigsRequest?: ShowRocketMqConfigsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/rocketmq/instances/{instance_id}/configs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let limit;
            
            let offset;

            if (showRocketMqConfigsRequest !== null && showRocketMqConfigsRequest !== undefined) {
                if (showRocketMqConfigsRequest instanceof ShowRocketMqConfigsRequest) {
                    instanceId = showRocketMqConfigsRequest.instanceId;
                    limit = showRocketMqConfigsRequest.limit;
                    offset = showRocketMqConfigsRequest.offset;
                } else {
                    instanceId = showRocketMqConfigsRequest['instance_id'];
                    limit = showRocketMqConfigsRequest['limit'];
                    offset = showRocketMqConfigsRequest['offset'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showRocketMqConfigs.');
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
         * 查询RocketMQ产品规格核数。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRocketMqProductCores(showRocketMqProductCoresRequest?: ShowRocketMqProductCoresRequest) {
            const options = {
                method: "GET",
                url: "/v2/rocketmq/products/cores",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let productId;
            
            let brokerNum;
            
            let instanceId;

            if (showRocketMqProductCoresRequest !== null && showRocketMqProductCoresRequest !== undefined) {
                if (showRocketMqProductCoresRequest instanceof ShowRocketMqProductCoresRequest) {
                    productId = showRocketMqProductCoresRequest.productId;
                    brokerNum = showRocketMqProductCoresRequest.brokerNum;
                    instanceId = showRocketMqProductCoresRequest.instanceId;
                } else {
                    productId = showRocketMqProductCoresRequest['product_id'];
                    brokerNum = showRocketMqProductCoresRequest['broker_num'];
                    instanceId = showRocketMqProductCoresRequest['instance_id'];
                }
            }

        
            if (productId === null || productId === undefined) {
                throw new RequiredError('productId','Required parameter productId was null or undefined when calling showRocketMqProductCores.');
            }
            if (productId !== null && productId !== undefined) {
                localVarQueryParameter['product_id'] = productId;
            }
            if (brokerNum === null || brokerNum === undefined) {
                throw new RequiredError('brokerNum','Required parameter brokerNum was null or undefined when calling showRocketMqProductCores.');
            }
            if (brokerNum !== null && brokerNum !== undefined) {
                localVarQueryParameter['broker_num'] = brokerNum;
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取RocketMQ实例扩容前置检查信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRocketMqScalePreCheckInfo(showRocketMqScalePreCheckInfoRequest?: ShowRocketMqScalePreCheckInfoRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/rocketmq/instances/{instance_id}/extend-check",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showRocketMqScalePreCheckInfoRequest !== null && showRocketMqScalePreCheckInfoRequest !== undefined) {
                if (showRocketMqScalePreCheckInfoRequest instanceof ShowRocketMqScalePreCheckInfoRequest) {
                    instanceId = showRocketMqScalePreCheckInfoRequest.instanceId;
                } else {
                    instanceId = showRocketMqScalePreCheckInfoRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showRocketMqScalePreCheckInfo.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询项目标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRocketmqProjectTags(showRocketmqProjectTagsRequest?: ShowRocketmqProjectTagsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/rocketmq/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;

            if (showRocketmqProjectTagsRequest !== null && showRocketmqProjectTagsRequest !== undefined) {
                if (showRocketmqProjectTagsRequest instanceof ShowRocketmqProjectTagsRequest) {
                    limit = showRocketmqProjectTagsRequest.limit;
                    offset = showRocketmqProjectTagsRequest.offset;
                } else {
                    limit = showRocketmqProjectTagsRequest['limit'];
                    offset = showRocketmqProjectTagsRequest['offset'];
                }
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
         * 查询实例标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRocketmqTags(showRocketmqTagsRequest?: ShowRocketmqTagsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/rocketmq/{instance_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let limit;
            
            let offset;

            if (showRocketmqTagsRequest !== null && showRocketmqTagsRequest !== undefined) {
                if (showRocketmqTagsRequest instanceof ShowRocketmqTagsRequest) {
                    instanceId = showRocketmqTagsRequest.instanceId;
                    limit = showRocketmqTagsRequest.limit;
                    offset = showRocketmqTagsRequest.offset;
                } else {
                    instanceId = showRocketmqTagsRequest['instance_id'];
                    limit = showRocketmqTagsRequest['limit'];
                    offset = showRocketmqTagsRequest['offset'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showRocketmqTags.');
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
         * 查询用户详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showUser(showUserRequest?: ShowUserRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/users/{user_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let userName;

            if (showUserRequest !== null && showUserRequest !== undefined) {
                if (showUserRequest instanceof ShowUserRequest) {
                    instanceId = showUserRequest.instanceId;
                    userName = showUserRequest.userName;
                } else {
                    instanceId = showUserRequest['instance_id'];
                    userName = showUserRequest['user_name'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showUser.');
            }
            if (userName === null || userName === undefined) {
            throw new RequiredError('userName','Required parameter userName was null or undefined when calling showUser.');
            }

            options.pathParams = { 'instance_id': instanceId,'user_name': userName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询磁盘自动扩容配置，包括磁盘自动扩容是否开启，以及开启后的扩容阈值、扩容步长、扩容上限信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVolumeExpandConfig(showVolumeExpandConfigRequest?: ShowVolumeExpandConfigRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/auto-volume-expand",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showVolumeExpandConfigRequest !== null && showVolumeExpandConfigRequest !== undefined) {
                if (showVolumeExpandConfigRequest instanceof ShowVolumeExpandConfigRequest) {
                    instanceId = showVolumeExpandConfigRequest.instanceId;
                } else {
                    instanceId = showVolumeExpandConfigRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showVolumeExpandConfig.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改指定消费组参数。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateConsumerGroup(updateConsumerGroupRequest?: UpdateConsumerGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instances/{instance_id}/groups/{group}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let group;

            if (updateConsumerGroupRequest !== null && updateConsumerGroupRequest !== undefined) {
                if (updateConsumerGroupRequest instanceof UpdateConsumerGroupRequest) {
                    instanceId = updateConsumerGroupRequest.instanceId;
                    group = updateConsumerGroupRequest.group;
                    body = updateConsumerGroupRequest.body
                } else {
                    instanceId = updateConsumerGroupRequest['instance_id'];
                    group = updateConsumerGroupRequest['group'];
                    body = updateConsumerGroupRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateConsumerGroup.');
            }
            if (group === null || group === undefined) {
            throw new RequiredError('group','Required parameter group was null or undefined when calling updateConsumerGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'group': group, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改实例相关信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInstance(updateInstanceRequest?: UpdateInstanceRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instances/{instance_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
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
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于修改RocketMQ配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateRocketMqConfigs(updateRocketMqConfigsRequest?: UpdateRocketMqConfigsRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/rocketmq/instances/{instance_id}/configs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updateRocketMqConfigsRequest !== null && updateRocketMqConfigsRequest !== undefined) {
                if (updateRocketMqConfigsRequest instanceof UpdateRocketMqConfigsRequest) {
                    instanceId = updateRocketMqConfigsRequest.instanceId;
                    body = updateRocketMqConfigsRequest.body
                } else {
                    instanceId = updateRocketMqConfigsRequest['instance_id'];
                    body = updateRocketMqConfigsRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateRocketMqConfigs.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改定时任务管理中的指定记录
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateScheduledTask(updateScheduledTaskRequest?: UpdateScheduledTaskRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instances/{instance_id}/scheduled-tasks/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let taskId;
            
            let executeAt;
            
            let status;

            if (updateScheduledTaskRequest !== null && updateScheduledTaskRequest !== undefined) {
                if (updateScheduledTaskRequest instanceof UpdateScheduledTaskRequest) {
                    instanceId = updateScheduledTaskRequest.instanceId;
                    taskId = updateScheduledTaskRequest.taskId;
                    executeAt = updateScheduledTaskRequest.executeAt;
                    status = updateScheduledTaskRequest.status;
                } else {
                    instanceId = updateScheduledTaskRequest['instance_id'];
                    taskId = updateScheduledTaskRequest['task_id'];
                    executeAt = updateScheduledTaskRequest['execute_at'];
                    status = updateScheduledTaskRequest['status'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateScheduledTask.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling updateScheduledTask.');
            }
            if (executeAt !== null && executeAt !== undefined) {
                localVarQueryParameter['execute_at'] = executeAt;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改用户参数。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateUser(updateUserRequest?: UpdateUserRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instances/{instance_id}/users/{user_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let userName;

            if (updateUserRequest !== null && updateUserRequest !== undefined) {
                if (updateUserRequest instanceof UpdateUserRequest) {
                    instanceId = updateUserRequest.instanceId;
                    userName = updateUserRequest.userName;
                    body = updateUserRequest.body
                } else {
                    instanceId = updateUserRequest['instance_id'];
                    userName = updateUserRequest['user_name'];
                    body = updateUserRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateUser.');
            }
            if (userName === null || userName === undefined) {
            throw new RequiredError('userName','Required parameter userName was null or undefined when calling updateUser.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'user_name': userName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于修改磁盘自动扩容配置，包含磁盘自动扩容是否开启、扩容阈值、扩容步长，以及扩容上限的配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateVolumeExpansionConfig(updateVolumeExpansionConfigRequest?: UpdateVolumeExpansionConfigRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instances/{instance_id}/auto-volume-expand",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updateVolumeExpansionConfigRequest !== null && updateVolumeExpansionConfigRequest !== undefined) {
                if (updateVolumeExpansionConfigRequest instanceof UpdateVolumeExpansionConfigRequest) {
                    instanceId = updateVolumeExpansionConfigRequest.instanceId;
                    body = updateVolumeExpansionConfigRequest.body
                } else {
                    instanceId = updateVolumeExpansionConfigRequest['instance_id'];
                    body = updateVolumeExpansionConfigRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateVolumeExpansionConfig.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 消费验证。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        validateConsumedMessage(validateConsumedMessageRequest?: ValidateConsumedMessageRequest) {
            const options = {
                method: "POST",
                url: "/v2/{engine}/{project_id}/instances/{instance_id}/messages/resend",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let engine;
            
            let instanceId;

            if (validateConsumedMessageRequest !== null && validateConsumedMessageRequest !== undefined) {
                if (validateConsumedMessageRequest instanceof ValidateConsumedMessageRequest) {
                    engine = validateConsumedMessageRequest.engine;
                    instanceId = validateConsumedMessageRequest.instanceId;
                    body = validateConsumedMessageRequest.body
                } else {
                    engine = validateConsumedMessageRequest['engine'];
                    instanceId = validateConsumedMessageRequest['instance_id'];
                    body = validateConsumedMessageRequest['body'];
                }
            }

        
            if (engine === null || engine === undefined) {
            throw new RequiredError('engine','Required parameter engine was null or undefined when calling validateConsumedMessage.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling validateConsumedMessage.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'engine': engine,'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 消费验证。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        validateConsumedMessageForRocketMq(validateConsumedMessageForRocketMqRequest?: ValidateConsumedMessageForRocketMqRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/rocketmq/instances/{instance_id}/messages/resend",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (validateConsumedMessageForRocketMqRequest !== null && validateConsumedMessageForRocketMqRequest !== undefined) {
                if (validateConsumedMessageForRocketMqRequest instanceof ValidateConsumedMessageForRocketMqRequest) {
                    instanceId = validateConsumedMessageForRocketMqRequest.instanceId;
                    body = validateConsumedMessageForRocketMqRequest.body
                } else {
                    instanceId = validateConsumedMessageForRocketMqRequest['instance_id'];
                    body = validateConsumedMessageForRocketMqRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling validateConsumedMessageForRocketMq.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建主题或批量删除主题。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTopicOrBatchDeleteTopic(createTopicOrBatchDeleteTopicRequest?: CreateTopicOrBatchDeleteTopicRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/topics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let instanceId;
            
            let action;

            if (createTopicOrBatchDeleteTopicRequest !== null && createTopicOrBatchDeleteTopicRequest !== undefined) {
                if (createTopicOrBatchDeleteTopicRequest instanceof CreateTopicOrBatchDeleteTopicRequest) {
                    instanceId = createTopicOrBatchDeleteTopicRequest.instanceId;
                    body = createTopicOrBatchDeleteTopicRequest.body
                    action = createTopicOrBatchDeleteTopicRequest.action;
                } else {
                    instanceId = createTopicOrBatchDeleteTopicRequest['instance_id'];
                    body = createTopicOrBatchDeleteTopicRequest['body'];
                    action = createTopicOrBatchDeleteTopicRequest['action'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createTopicOrBatchDeleteTopic.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (action !== null && action !== undefined) {
                localVarQueryParameter['action'] = action;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定主题。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTopic(deleteTopicRequest?: DeleteTopicRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/instances/{instance_id}/topics/{topic}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let topic;

            if (deleteTopicRequest !== null && deleteTopicRequest !== undefined) {
                if (deleteTopicRequest instanceof DeleteTopicRequest) {
                    instanceId = deleteTopicRequest.instanceId;
                    topic = deleteTopicRequest.topic;
                } else {
                    instanceId = deleteTopicRequest['instance_id'];
                    topic = deleteTopicRequest['topic'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteTopic.');
            }
            if (topic === null || topic === undefined) {
            throw new RequiredError('topic','Required parameter topic was null or undefined when calling deleteTopic.');
            }

            options.pathParams = { 'instance_id': instanceId,'topic': topic, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询主题消费组列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listConsumerGroupOfTopic(listConsumerGroupOfTopicRequest?: ListConsumerGroupOfTopicRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/topics/{topic}/groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let topic;
            
            let limit;
            
            let offset;

            if (listConsumerGroupOfTopicRequest !== null && listConsumerGroupOfTopicRequest !== undefined) {
                if (listConsumerGroupOfTopicRequest instanceof ListConsumerGroupOfTopicRequest) {
                    instanceId = listConsumerGroupOfTopicRequest.instanceId;
                    topic = listConsumerGroupOfTopicRequest.topic;
                    limit = listConsumerGroupOfTopicRequest.limit;
                    offset = listConsumerGroupOfTopicRequest.offset;
                } else {
                    instanceId = listConsumerGroupOfTopicRequest['instance_id'];
                    topic = listConsumerGroupOfTopicRequest['topic'];
                    limit = listConsumerGroupOfTopicRequest['limit'];
                    offset = listConsumerGroupOfTopicRequest['offset'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listConsumerGroupOfTopic.');
            }
            if (topic === null || topic === undefined) {
            throw new RequiredError('topic','Required parameter topic was null or undefined when calling listConsumerGroupOfTopic.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'topic': topic, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询指定RocketMQ实例的Topic列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRocketInstanceTopics(listRocketInstanceTopicsRequest?: ListRocketInstanceTopicsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/topics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let limit;
            
            let offset;

            if (listRocketInstanceTopicsRequest !== null && listRocketInstanceTopicsRequest !== undefined) {
                if (listRocketInstanceTopicsRequest instanceof ListRocketInstanceTopicsRequest) {
                    instanceId = listRocketInstanceTopicsRequest.instanceId;
                    limit = listRocketInstanceTopicsRequest.limit;
                    offset = listRocketInstanceTopicsRequest.offset;
                } else {
                    instanceId = listRocketInstanceTopicsRequest['instance_id'];
                    limit = listRocketInstanceTopicsRequest['limit'];
                    offset = listRocketInstanceTopicsRequest['offset'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listRocketInstanceTopics.');
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
         * 查询单个主题。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showOneTopic(showOneTopicRequest?: ShowOneTopicRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/topics/{topic}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let topic;

            if (showOneTopicRequest !== null && showOneTopicRequest !== undefined) {
                if (showOneTopicRequest instanceof ShowOneTopicRequest) {
                    instanceId = showOneTopicRequest.instanceId;
                    topic = showOneTopicRequest.topic;
                } else {
                    instanceId = showOneTopicRequest['instance_id'];
                    topic = showOneTopicRequest['topic'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showOneTopic.');
            }
            if (topic === null || topic === undefined) {
            throw new RequiredError('topic','Required parameter topic was null or undefined when calling showOneTopic.');
            }

            options.pathParams = { 'instance_id': instanceId,'topic': topic, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询主题的消息数。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTopicStatus(showTopicStatusRequest?: ShowTopicStatusRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/topics/{topic}/status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let topic;

            if (showTopicStatusRequest !== null && showTopicStatusRequest !== undefined) {
                if (showTopicStatusRequest instanceof ShowTopicStatusRequest) {
                    instanceId = showTopicStatusRequest.instanceId;
                    topic = showTopicStatusRequest.topic;
                } else {
                    instanceId = showTopicStatusRequest['instance_id'];
                    topic = showTopicStatusRequest['topic'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showTopicStatus.');
            }
            if (topic === null || topic === undefined) {
            throw new RequiredError('topic','Required parameter topic was null or undefined when calling showTopicStatus.');
            }

            options.pathParams = { 'instance_id': instanceId,'topic': topic, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改主题。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTopic(updateTopicRequest?: UpdateTopicRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instances/{instance_id}/topics/{topic}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let topic;

            if (updateTopicRequest !== null && updateTopicRequest !== undefined) {
                if (updateTopicRequest instanceof UpdateTopicRequest) {
                    instanceId = updateTopicRequest.instanceId;
                    topic = updateTopicRequest.topic;
                    body = updateTopicRequest.body
                } else {
                    instanceId = updateTopicRequest['instance_id'];
                    topic = updateTopicRequest['topic'];
                    body = updateTopicRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateTopic.');
            }
            if (topic === null || topic === undefined) {
            throw new RequiredError('topic','Required parameter topic was null or undefined when calling updateTopic.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'topic': topic, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): RocketMQClient {
    return new RocketMQClient(client);
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