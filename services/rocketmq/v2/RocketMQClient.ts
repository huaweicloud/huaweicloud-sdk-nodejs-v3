import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { BatchCreateOrDeleteRocketmqTagRequest } from './model/BatchCreateOrDeleteRocketmqTagRequest';
import { BatchCreateOrDeleteRocketmqTagResponse } from './model/BatchCreateOrDeleteRocketmqTagResponse';
import { BatchCreateOrDeleteTagReq } from './model/BatchCreateOrDeleteTagReq';
import { BatchDeleteConsumerGroupReq } from './model/BatchDeleteConsumerGroupReq';
import { BatchDeleteConsumerGroupResp } from './model/BatchDeleteConsumerGroupResp';
import { BatchDeleteDiagnosisReportReq } from './model/BatchDeleteDiagnosisReportReq';
import { BatchDeleteDiagnosisReportRequest } from './model/BatchDeleteDiagnosisReportRequest';
import { BatchDeleteDiagnosisReportResponse } from './model/BatchDeleteDiagnosisReportResponse';
import { BatchDeleteInstanceReq } from './model/BatchDeleteInstanceReq';
import { BatchDeleteInstanceRespResults } from './model/BatchDeleteInstanceRespResults';
import { BatchDeleteInstancesRequest } from './model/BatchDeleteInstancesRequest';
import { BatchDeleteInstancesResponse } from './model/BatchDeleteInstancesResponse';
import { BatchDeleteTopicReq } from './model/BatchDeleteTopicReq';
import { BatchDeleteTopicResp } from './model/BatchDeleteTopicResp';
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
import { CreateConsumerGroupOrBatchDeleteConsumerGroupReq } from './model/CreateConsumerGroupOrBatchDeleteConsumerGroupReq';
import { CreateConsumerGroupOrBatchDeleteConsumerGroupRequest } from './model/CreateConsumerGroupOrBatchDeleteConsumerGroupRequest';
import { CreateConsumerGroupOrBatchDeleteConsumerGroupResponse } from './model/CreateConsumerGroupOrBatchDeleteConsumerGroupResponse';
import { CreateDiagnosisTaskRequest } from './model/CreateDiagnosisTaskRequest';
import { CreateDiagnosisTaskResponse } from './model/CreateDiagnosisTaskResponse';
import { CreateGroupResp } from './model/CreateGroupResp';
import { CreateInstanceByEngineReq } from './model/CreateInstanceByEngineReq';
import { CreateInstanceByEngineRequest } from './model/CreateInstanceByEngineRequest';
import { CreateInstanceByEngineResponse } from './model/CreateInstanceByEngineResponse';
import { CreateOrUpdateConsumerGroup } from './model/CreateOrUpdateConsumerGroup';
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
import { DeleteRocketMqMigrationTaskRequest } from './model/DeleteRocketMqMigrationTaskRequest';
import { DeleteRocketMqMigrationTaskResponse } from './model/DeleteRocketMqMigrationTaskResponse';
import { DeleteTopicRequest } from './model/DeleteTopicRequest';
import { DeleteTopicResponse } from './model/DeleteTopicResponse';
import { DeleteUserRequest } from './model/DeleteUserRequest';
import { DeleteUserResponse } from './model/DeleteUserResponse';
import { DiagnosisRep } from './model/DiagnosisRep';
import { DiagnosisReportResp } from './model/DiagnosisReportResp';
import { EnableDnsRequest } from './model/EnableDnsRequest';
import { EnableDnsResponse } from './model/EnableDnsResponse';
import { ExportDlqMessageReq } from './model/ExportDlqMessageReq';
import { ExportDlqMessageRequest } from './model/ExportDlqMessageRequest';
import { ExportDlqMessageResponse } from './model/ExportDlqMessageResponse';
import { InstanceDetail } from './model/InstanceDetail';
import { ListAccessPolicyRespPolicies } from './model/ListAccessPolicyRespPolicies';
import { ListAvailableZonesRequest } from './model/ListAvailableZonesRequest';
import { ListAvailableZonesRespAvailableZones } from './model/ListAvailableZonesRespAvailableZones';
import { ListAvailableZonesResponse } from './model/ListAvailableZonesResponse';
import { ListBackgroundTasksRequest } from './model/ListBackgroundTasksRequest';
import { ListBackgroundTasksRespTasks } from './model/ListBackgroundTasksRespTasks';
import { ListBackgroundTasksResponse } from './model/ListBackgroundTasksResponse';
import { ListBrokersRequest } from './model/ListBrokersRequest';
import { ListBrokersRespBrokers } from './model/ListBrokersRespBrokers';
import { ListBrokersResponse } from './model/ListBrokersResponse';
import { ListConsumeGroupAccessPolicyRequest } from './model/ListConsumeGroupAccessPolicyRequest';
import { ListConsumeGroupAccessPolicyResponse } from './model/ListConsumeGroupAccessPolicyResponse';
import { ListConsumerGroupOfTopicRequest } from './model/ListConsumerGroupOfTopicRequest';
import { ListConsumerGroupOfTopicResponse } from './model/ListConsumerGroupOfTopicResponse';
import { ListDiagnosisReportsRequest } from './model/ListDiagnosisReportsRequest';
import { ListDiagnosisReportsResponse } from './model/ListDiagnosisReportsResponse';
import { ListEngineProductsRequest } from './model/ListEngineProductsRequest';
import { ListEngineProductsResponse } from './model/ListEngineProductsResponse';
import { ListInstanceConsumerGroupsRequest } from './model/ListInstanceConsumerGroupsRequest';
import { ListInstanceConsumerGroupsResponse } from './model/ListInstanceConsumerGroupsResponse';
import { ListInstancesRequest } from './model/ListInstancesRequest';
import { ListInstancesResponse } from './model/ListInstancesResponse';
import { ListMessageTraceRequest } from './model/ListMessageTraceRequest';
import { ListMessageTraceRespTrace } from './model/ListMessageTraceRespTrace';
import { ListMessageTraceResponse } from './model/ListMessageTraceResponse';
import { ListMessagesRequest } from './model/ListMessagesRequest';
import { ListMessagesResponse } from './model/ListMessagesResponse';
import { ListRocketInstanceTopicsRequest } from './model/ListRocketInstanceTopicsRequest';
import { ListRocketInstanceTopicsResponse } from './model/ListRocketInstanceTopicsResponse';
import { ListRocketMqMigrationTaskRequest } from './model/ListRocketMqMigrationTaskRequest';
import { ListRocketMqMigrationTaskResponse } from './model/ListRocketMqMigrationTaskResponse';
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
import { NodeContextEntity } from './model/NodeContextEntity';
import { PlainSSLSwitchRep } from './model/PlainSSLSwitchRep';
import { ProductEntity } from './model/ProductEntity';
import { Queue } from './model/Queue';
import { QuotaResourceEntity } from './model/QuotaResourceEntity';
import { QuotasRespQuotas } from './model/QuotasRespQuotas';
import { ResendReq } from './model/ResendReq';
import { ResetConsumeOffsetReq } from './model/ResetConsumeOffsetReq';
import { ResetConsumeOffsetRequest } from './model/ResetConsumeOffsetRequest';
import { ResetConsumeOffsetRespQueues } from './model/ResetConsumeOffsetRespQueues';
import { ResetConsumeOffsetResponse } from './model/ResetConsumeOffsetResponse';
import { ResizeEngineInstanceReq } from './model/ResizeEngineInstanceReq';
import { ResizeInstanceRequest } from './model/ResizeInstanceRequest';
import { ResizeInstanceResponse } from './model/ResizeInstanceResponse';
import { RocketMQConfigReq } from './model/RocketMQConfigReq';
import { RocketMQConfigResp } from './model/RocketMQConfigResp';
import { RocketMQExtendProductInfoEntity } from './model/RocketMQExtendProductInfoEntity';
import { RocketMQExtendProductIosEntity } from './model/RocketMQExtendProductIosEntity';
import { RocketMQExtendProductPropertiesEntity } from './model/RocketMQExtendProductPropertiesEntity';
import { RocketMQProductSupportFeaturesEntity } from './model/RocketMQProductSupportFeaturesEntity';
import { SendDlqMessageRequest } from './model/SendDlqMessageRequest';
import { SendDlqMessageResponse } from './model/SendDlqMessageResponse';
import { SendMessageProperties } from './model/SendMessageProperties';
import { SendMessageRequest } from './model/SendMessageRequest';
import { SendMessageResp } from './model/SendMessageResp';
import { SendMessageResponse } from './model/SendMessageResponse';
import { ShowConsumerConnectionsRequest } from './model/ShowConsumerConnectionsRequest';
import { ShowConsumerConnectionsResponse } from './model/ShowConsumerConnectionsResponse';
import { ShowConsumerListOrDetailsRequest } from './model/ShowConsumerListOrDetailsRequest';
import { ShowConsumerListOrDetailsResponse } from './model/ShowConsumerListOrDetailsResponse';
import { ShowDiagnosisReportRequest } from './model/ShowDiagnosisReportRequest';
import { ShowDiagnosisReportResponse } from './model/ShowDiagnosisReportResponse';
import { ShowDiagnosisStackRequest } from './model/ShowDiagnosisStackRequest';
import { ShowDiagnosisStackResponse } from './model/ShowDiagnosisStackResponse';
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
import { ShowRocketMqConfigsRequest } from './model/ShowRocketMqConfigsRequest';
import { ShowRocketMqConfigsResponse } from './model/ShowRocketMqConfigsResponse';
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
import { Subscription } from './model/Subscription';
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
import { UpdateTopicQueueEntity } from './model/UpdateTopicQueueEntity';
import { UpdateTopicReq } from './model/UpdateTopicReq';
import { UpdateTopicRequest } from './model/UpdateTopicRequest';
import { UpdateTopicResponse } from './model/UpdateTopicResponse';
import { UpdateUserRequest } from './model/UpdateUserRequest';
import { UpdateUserResponse } from './model/UpdateUserResponse';
import { User } from './model/User';
import { UserGroupPerms } from './model/UserGroupPerms';
import { UserTopicPerms } from './model/UserTopicPerms';
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
     * @param {string} instanceId 实例ID。
     * @param {BatchCreateOrDeleteTagReq} batchCreateOrDeleteRocketmqTagRequestBody 请求信息。
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
     * 批量删除实例诊断记录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除实例诊断记录
     * @param {string} engine **参数解释**： 引擎。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：登录RocketMQ控制台，在RocketMQ实例详情页面查找实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {BatchDeleteDiagnosisReportReq} batchDeleteDiagnosisReportBody **参数解释**： 批量删除诊断报告请求体。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteDiagnosisReport(batchDeleteDiagnosisReportRequest?: BatchDeleteDiagnosisReportRequest): Promise<BatchDeleteDiagnosisReportResponse> {
        const options = ParamCreater().batchDeleteDiagnosisReport(batchDeleteDiagnosisReportRequest);

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
     * @param {BatchDeleteInstanceReq} batchDeleteInstancesRequestBody 请求消息。
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
     * 批量修改消费组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量修改消费组
     * @param {string} instanceId 实例ID。
     * @param {BatchUpdateConsumerGroupReq} batchUpdateConsumerGroupRequestBody 请求消息。
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
     * @param {string} instanceId 实例ID。
     * @param {CreateConsumerGroupOrBatchDeleteConsumerGroupReq} createConsumerGroupOrBatchDeleteConsumerGroupRequestBody 请求消息。
     * @param {string} [action] 批量删除消费组时使用，不配置则为创建接口。删除操作：delete。
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
     * @param {string} engine 引擎。
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：登录RocketMQ控制台，在RocketMQ实例详情页面查找实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {DiagnosisRep} createDiagnosisTaskBody **参数解释**： 创建诊断任务请求体。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
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
     * 创建实例[，该接口支持创建按需和包周期两种计费方式的实例](tag:hws,hws_eu,hws_hk,ocb,hws_ocb,ctc,g42,hk_g42,tm,hk_tm)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建实例
     * @param {'reliability'} engine 消息引擎。
     * @param {CreateInstanceByEngineReq} createInstanceByEngineRequestBody 请求消息。
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
     * @param {CreatePostPaidInstanceReq} createPostPaidInstanceRequestBody 请求消息。
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
     * 新建元数据迁移任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新建元数据迁移任务
     * @param {string} instanceId 实例ID。
     * @param {'true' | 'false'} overwrite true开启同名覆盖，会对已有的同名元数据的配置进行修改，false时当Topic或group已存在则会报错。
     * @param {string} name 迁移任务名称，名称规则参考创建实例。
     * @param {'rocketmq' | 'rabbitToRocket'} type 迁移任务类型，分为自建RocketMQ上云(rocketmq)、自建RabbitMQ上云(rabbitToRocket)
     * @param {CreateRocketMqMigrationTaskReq} createRocketMqMigrationTaskRequestBody 元数据json文件。
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
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：登录RocketMQ控制台，在RocketMQ实例详情页面查找实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {User} createUserRequestBody 请求消息。
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
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：登录RocketMQ控制台，在RocketMQ实例详情页面查找实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
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
     * @param {string} instanceId 实例ID。
     * @param {string} group 消费组名称。
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
     * @param {string} instanceId 实例ID。
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
     * 删除元数据迁移任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除元数据迁移任务
     * @param {string} instanceId 实例ID。
     * @param {MetadataDeleteReq} deleteRocketMqMigrationTaskRequestBody 任务ID列表。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRocketMqMigrationTask(deleteRocketMqMigrationTaskRequest?: DeleteRocketMqMigrationTaskRequest): Promise<DeleteRocketMqMigrationTaskResponse> {
        const options = ParamCreater().deleteRocketMqMigrationTask(deleteRocketMqMigrationTaskRequest);

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
     * @param {string} instanceId 实例ID。
     * @param {string} userName 用户名。
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
     * 导出死信消息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导出死信消息
     * @param {string} instanceId 实例ID。
     * @param {ExportDlqMessageReq} exportDlqMessageRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public exportDlqMessage(exportDlqMessageRequest?: ExportDlqMessageRequest): Promise<ExportDlqMessageResponse> {
        const options = ParamCreater().exportDlqMessage(exportDlqMessageRequest);

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
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：登录RocketMQ控制台，在RocketMQ实例详情页面查找实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [start] **参数解释**： 开启查询的任务编号。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 不涉及。
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
     * @param {string} instanceId 实例ID。
     * @param {number} [limit] 查询数量。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，offset大于等于0。
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
     * 查询消费组的授权用户列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询消费组的授权用户列表
     * @param {'reliability'} engine 消息引擎。
     * @param {string} instanceId 实例ID。
     * @param {string} groupId 消费组。
     * @param {string} [offset] 偏移量，表示从此偏移量开始查询， offset大于等于0。
     * @param {string} [limit] 查询数量。
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
     * 查询实例诊断报告列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例诊断报告列表
     * @param {string} engine **参数解释**： 引擎。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：登录RocketMQ控制台，在RocketMQ实例详情页面查找实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
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
     * 查询相应引擎的产品规格列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询产品规格列表
     * @param {string} engine **参数解释**： 消息引擎的类型。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} type **参数解释**： 产品类型。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} productId **参数解释**： 产品ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [limit] **参数解释**： 查询数量。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 10。
     * @param {number} [offset] **参数解释**： 偏移量，表示从此偏移量开始查询。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 不涉及。
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
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：登录RocketMQ控制台，在RocketMQ实例详情页面查找实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
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
     * @param {'rocketmq'} engine **参数解释**： 消息引擎。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [name] **参数解释**： 实例名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [instanceId] **参数解释**： 实例ID。获取方法如下：登录RocketMQ控制台，在RocketMQ实例详情页面查找实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {'CREATING' | 'RUNNING' | 'RESTARTING' | 'DELETING' | 'ERROR' | 'CREATEFAILED' | 'FREEZING' | 'FROZEN' | 'EXTENDING' | 'SHRINKING' | 'EXTENDEDFAILED' | 'CONFIGURING' | 'ROLLBACK' | 'ROLLBACKFAILED' | 'VOLUMETYPECHANGING'} [status] **参数解释**： 实例状态，[详细状态说明请参考[实例状态说明](hrm-api-0010.xml)。](tag:hws,hws_hk,ctc,hws_eu,ocb,g42,hk_g42,tm,sbc,hk_sbc,cmcc,hk_tm)[详细状态说明请参考[实例状态说明](kafka-api-180514012.xml)。](tag:hcs,fcs) **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
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
     * @param {'reliability'} engine 消息引擎。
     * @param {string} instanceId 实例ID。
     * @param {string} msgId 消息ID。
     * @param {number} [limit] 查询数量。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，offset大于等于0。
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
     * 查询消息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询消息
     * @param {'reliability'} engine 消息引擎。
     * @param {string} instanceId 实例ID。
     * @param {string} topic 主题名称。
     * @param {string} [queue] 队列。
     * @param {string} [limit] 查询数量。
     * @param {string} [offset] 偏移量，表示从此偏移量开始查询， offset大于等于0。
     * @param {string} [key] 消息的key。
     * @param {string} [startTime] 开始时间（不通过msg_id精确查询消息时，此参数必填）。
     * @param {string} [endTime] 结束时间（不通过msg_id精确查询消息时，此参数必填）。
     * @param {string} [msgId] 消息ID。
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
     * 1. 查询实例下所有迁移任务
     * 2. 查询指定迁移任务信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例下所有迁移任务或查询指定迁移任务信息
     * @param {string} instanceId 实例ID。
     * @param {string} [id] 任务ID。
     * @param {'vhost' | 'exchange' | 'queue' | 'all'} [type] 查询类型。
     * @param {string} [offset] 当前页，从1开始。
     * @param {string} [limit] 当前页大小。
     * @param {string} [name] - 查询vhost列表时，该字段可为空。 - 查询exchange列表时，该字段为exchange所属vhost名称。 - 查询queue列表时，该字段为queue所属vhost-所属exchange，例vhost1-exchange1。
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
     * 查询主题的授权用户列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询主题的授权用户列表
     * @param {string} instanceId 实例ID。
     * @param {string} topic 主题名称。
     * @param {string} [offset] 偏移量，表示从此偏移量开始查询， offset大于等于0。
     * @param {string} [limit] 查询数量。
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
     * @param {string} instanceId 实例ID。
     * @param {string} [offset] 偏移量，表示从此偏移量开始查询， offset大于等于0。
     * @param {string} [limit] 查询数量。
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
     * 修改实例ssl相关配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改实例ssl相关配置
     * @param {string} engine **参数解释**： 引擎。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：登录RocketMQ控制台，在RocketMQ实例详情页面查找实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {PlainSSLSwitchRep} modifyInstanceSslConfigBody **参数解释**： 修改实例ssl配置请求体。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
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
     * 重置消费进度。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重置消费进度
     * @param {'reliability'} engine 引擎类型：reliability。
     * @param {string} instanceId 实例ID。
     * @param {string} groupId 消费组名称。
     * @param {ResetConsumeOffsetReq} resetConsumeOffsetRequestBody 请求消息。
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
     * 实例规格变更。
     * 
     * [**当前通过调用API，只支持按需实例进行实例规格变更。**](tag:hws,hws_hk,ctc)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 实例规格变更
     * @param {string} engine 消息引擎的类型。支持的类型为rocketmq。
     * @param {string} instanceId 实例ID。
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
     * 重发死信消息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重发死信消息
     * @param {'reliability'} engine 消息引擎。
     * @param {string} instanceId 实例ID。
     * @param {DeadletterResendReq} sendDlqMessageRequestBody 请求消息。
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
     * 发送消息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 发送消息
     * @param {string} engine **参数解释**： 引擎。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：登录RocketMQ控制台，在RocketMQ实例详情页面查找实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {SendMessageResp} sendMessageBody **参数解释**： 发送消息请求体。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。。
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
     * 查询消费组内消费者列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询消费者列表
     * @param {string} instanceId 实例ID。
     * @param {string} group 消费组名称。
     * @param {number} [limit] 查询数量，取值范围为1~50。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询， offset大于等于0。
     * @param {boolean} [isDetail] 是否查询消费者详细列表，参数为“true”则表示查询详细列表，否则表示查询简易列表。
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
     * 查询消费列表或详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询消费列表或详情
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：登录RocketMQ控制台，在RocketMQ实例详情页面查找实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
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
     * @param {string} engine **参数解释**： 引擎。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
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
     * 查询stack信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询stack信息
     * @param {string} engine **参数解释**： 引擎。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
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
     * 查询实例的扩容规格列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例的扩容规格列表
     * @param {string} engine 消息引擎的类型。支持的类型为rocketmq。
     * @param {string} instanceId 实例ID。
     * @param {'advanced'} [type] 产品的类型。 advanced：专享版。
     * @param {number} [limit] 查询数量。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，offset大于等于0。
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
     * 查询指定消费组详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定消费组
     * @param {string} instanceId 实例ID。
     * @param {string} group 消费组名称。
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
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：登录RocketMQ控制台，在RocketMQ实例详情页面查找实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
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
     * @param {string} engine 消息引擎类型。
     * @param {string} instanceId 实例id。
     * @param {number} [limit] 查询数量。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，offset大于等于0。
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showQuotas(showQuotasRequest?: ShowQuotasRequest): Promise<ShowQuotasResponse> {
        const options = ParamCreater().showQuotas();

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
     * @param {string} instanceId 实例ID。
     * @param {number} [limit] 查询数量。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，offset大于等于0。
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
     * 查询项目标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目标签
     * @param {number} [limit] **参数解释**： 查询数量。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 10。
     * @param {number} [offset] **参数解释**： 偏移量，表示从此偏移量开始查询。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 不涉及。
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
     * @param {string} instanceId 实例ID。
     * @param {number} [limit] 查询数量。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，offset大于等于0。
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
     * @param {string} instanceId 实例ID。
     * @param {string} userName 用户名。
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
     * 修改指定消费组参数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改消费组
     * @param {string} instanceId 实例ID。
     * @param {string} group 消费组名称。
     * @param {UpdateConsumerGroup} updateConsumerGroupRequestBody 请求消息。
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
     * 修改实例的名称和描述信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改实例信息
     * @param {string} instanceId 实例ID。
     * @param {UpdateInstanceReq} updateInstanceRequestBody 请求消息。
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
     * @param {string} instanceId 实例ID。
     * @param {ModifyConfigReq} updateRocketMqConfigsRequestBody 请求消息。
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
     * 修改用户参数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改用户参数
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：登录RocketMQ控制台，在RocketMQ实例详情页面查找实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
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
     * 消费验证。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 消费验证
     * @param {'reliability'} engine 消息引擎。
     * @param {string} instanceId 实例ID。
     * @param {ResendReq} validateConsumedMessageRequestBody 请求消息。
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
     * 创建主题或批量删除主题。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建主题或批量删除主题
     * @param {string} instanceId 实例ID。
     * @param {CreateTopicOrBatchDeleteTopicReq} createTopicOrBatchDeleteTopicRequestBody 请求消息。
     * @param {string} [action] 批量删除Topic时使用，不配置则为创建接口。删除操作：delete。
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
     * @param {string} instanceId 实例ID。
     * @param {string} topic 主题名称。
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
     * @param {string} instanceId 实例ID。
     * @param {string} topic 主题名称。
     * @param {number} [limit] 当次查询返回的最大个数，默认值为10，取值范围为1~50。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，offset大于等于0。
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
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：登录RocketMQ控制台，在RocketMQ实例详情页面查找实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
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
     * @param {string} instanceId 实例ID。
     * @param {string} topic 主题名称。
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
     * @param {string} instanceId 实例ID。
     * @param {string} topic 主题名称。
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
     * @param {string} instanceId 实例ID。
     * @param {string} topic 主题名称。
     * @param {UpdateTopicReq} updateTopicRequestBody 请求消息。
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
         * 批量删除实例诊断记录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteDiagnosisReport(batchDeleteDiagnosisReportRequest?: BatchDeleteDiagnosisReportRequest) {
            const options = {
                method: "DELETE",
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

            if (batchDeleteDiagnosisReportRequest !== null && batchDeleteDiagnosisReportRequest !== undefined) {
                if (batchDeleteDiagnosisReportRequest instanceof BatchDeleteDiagnosisReportRequest) {
                    engine = batchDeleteDiagnosisReportRequest.engine;
                    instanceId = batchDeleteDiagnosisReportRequest.instanceId;
                    body = batchDeleteDiagnosisReportRequest.body
                } else {
                    engine = batchDeleteDiagnosisReportRequest['engine'];
                    instanceId = batchDeleteDiagnosisReportRequest['instance_id'];
                    body = batchDeleteDiagnosisReportRequest['body'];
                }
            }

        
            if (engine === null || engine === undefined) {
            throw new RequiredError('engine','Required parameter engine was null or undefined when calling batchDeleteDiagnosisReport.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling batchDeleteDiagnosisReport.');
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
         * 创建实例[，该接口支持创建按需和包周期两种计费方式的实例](tag:hws,hws_eu,hws_hk,ocb,hws_ocb,ctc,g42,hk_g42,tm,hk_tm)。
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
         * 删除元数据迁移任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteRocketMqMigrationTask(deleteRocketMqMigrationTaskRequest?: DeleteRocketMqMigrationTaskRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/instances/{instance_id}/metadata",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (deleteRocketMqMigrationTaskRequest !== null && deleteRocketMqMigrationTaskRequest !== undefined) {
                if (deleteRocketMqMigrationTaskRequest instanceof DeleteRocketMqMigrationTaskRequest) {
                    instanceId = deleteRocketMqMigrationTaskRequest.instanceId;
                    body = deleteRocketMqMigrationTaskRequest.body
                } else {
                    instanceId = deleteRocketMqMigrationTaskRequest['instance_id'];
                    body = deleteRocketMqMigrationTaskRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteRocketMqMigrationTask.');
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
         * 导出死信消息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        exportDlqMessage(exportDlqMessageRequest?: ExportDlqMessageRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/messages/export",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (exportDlqMessageRequest !== null && exportDlqMessageRequest !== undefined) {
                if (exportDlqMessageRequest instanceof ExportDlqMessageRequest) {
                    instanceId = exportDlqMessageRequest.instanceId;
                    body = exportDlqMessageRequest.body
                } else {
                    instanceId = exportDlqMessageRequest['instance_id'];
                    body = exportDlqMessageRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling exportDlqMessage.');
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
            
            let start;
            
            let limit;
            
            let beginTime;
            
            let endTime;

            if (listBackgroundTasksRequest !== null && listBackgroundTasksRequest !== undefined) {
                if (listBackgroundTasksRequest instanceof ListBackgroundTasksRequest) {
                    instanceId = listBackgroundTasksRequest.instanceId;
                    start = listBackgroundTasksRequest.start;
                    limit = listBackgroundTasksRequest.limit;
                    beginTime = listBackgroundTasksRequest.beginTime;
                    endTime = listBackgroundTasksRequest.endTime;
                } else {
                    instanceId = listBackgroundTasksRequest['instance_id'];
                    start = listBackgroundTasksRequest['start'];
                    limit = listBackgroundTasksRequest['limit'];
                    beginTime = listBackgroundTasksRequest['begin_time'];
                    endTime = listBackgroundTasksRequest['end_time'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listBackgroundTasks.');
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
         * 查询消费组的授权用户列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listConsumeGroupAccessPolicy(listConsumeGroupAccessPolicyRequest?: ListConsumeGroupAccessPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v2/{engine}/{project_id}/instances/{instance_id}/groups/{group_id}/accesspolicy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let engine;
            
            let instanceId;
            
            let groupId;
            
            let offset;
            
            let limit;

            if (listConsumeGroupAccessPolicyRequest !== null && listConsumeGroupAccessPolicyRequest !== undefined) {
                if (listConsumeGroupAccessPolicyRequest instanceof ListConsumeGroupAccessPolicyRequest) {
                    engine = listConsumeGroupAccessPolicyRequest.engine;
                    instanceId = listConsumeGroupAccessPolicyRequest.instanceId;
                    groupId = listConsumeGroupAccessPolicyRequest.groupId;
                    offset = listConsumeGroupAccessPolicyRequest.offset;
                    limit = listConsumeGroupAccessPolicyRequest.limit;
                } else {
                    engine = listConsumeGroupAccessPolicyRequest['engine'];
                    instanceId = listConsumeGroupAccessPolicyRequest['instance_id'];
                    groupId = listConsumeGroupAccessPolicyRequest['group_id'];
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
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling listConsumeGroupAccessPolicy.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'engine': engine,'instance_id': instanceId,'group_id': groupId, };
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
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling listEngineProducts.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (productId === null || productId === undefined) {
                throw new RequiredError('productId','Required parameter productId was null or undefined when calling listEngineProducts.');
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
            
            let offset;
            
            let limit;

            if (listUserRequest !== null && listUserRequest !== undefined) {
                if (listUserRequest instanceof ListUserRequest) {
                    instanceId = listUserRequest.instanceId;
                    offset = listUserRequest.offset;
                    limit = listUserRequest.limit;
                } else {
                    instanceId = listUserRequest['instance_id'];
                    offset = listUserRequest['offset'];
                    limit = listUserRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listUser.');
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
         * 修改实例ssl相关配置。
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
         * 重置消费进度。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetConsumeOffset(resetConsumeOffsetRequest?: ResetConsumeOffsetRequest) {
            const options = {
                method: "POST",
                url: "/v2/{engine}/{project_id}/instances/{instance_id}/groups/{group_id}/reset-message-offset",
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
            
            let groupId;

            if (resetConsumeOffsetRequest !== null && resetConsumeOffsetRequest !== undefined) {
                if (resetConsumeOffsetRequest instanceof ResetConsumeOffsetRequest) {
                    engine = resetConsumeOffsetRequest.engine;
                    instanceId = resetConsumeOffsetRequest.instanceId;
                    groupId = resetConsumeOffsetRequest.groupId;
                    body = resetConsumeOffsetRequest.body
                } else {
                    engine = resetConsumeOffsetRequest['engine'];
                    instanceId = resetConsumeOffsetRequest['instance_id'];
                    groupId = resetConsumeOffsetRequest['group_id'];
                    body = resetConsumeOffsetRequest['body'];
                }
            }

        
            if (engine === null || engine === undefined) {
            throw new RequiredError('engine','Required parameter engine was null or undefined when calling resetConsumeOffset.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling resetConsumeOffset.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling resetConsumeOffset.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'engine': engine,'instance_id': instanceId,'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 实例规格变更。
         * 
         * [**当前通过调用API，只支持按需实例进行实例规格变更。**](tag:hws,hws_hk,ctc)
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
         * 查询消费组内消费者列表
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
        showQuotas() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/quotas",
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
         * 修改实例的名称和描述信息。
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