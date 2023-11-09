import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AccessPolicyEntity } from './model/AccessPolicyEntity';
import { AccessPolicyTopicEntity } from './model/AccessPolicyTopicEntity';
import { BatchCreateOrDeleteKafkaTagRequest } from './model/BatchCreateOrDeleteKafkaTagRequest';
import { BatchCreateOrDeleteKafkaTagResponse } from './model/BatchCreateOrDeleteKafkaTagResponse';
import { BatchCreateOrDeleteTagReq } from './model/BatchCreateOrDeleteTagReq';
import { BatchDeleteGroupReq } from './model/BatchDeleteGroupReq';
import { BatchDeleteGroupRequest } from './model/BatchDeleteGroupRequest';
import { BatchDeleteGroupRespFailedGroups } from './model/BatchDeleteGroupRespFailedGroups';
import { BatchDeleteGroupResponse } from './model/BatchDeleteGroupResponse';
import { BatchDeleteInstanceTopicReq } from './model/BatchDeleteInstanceTopicReq';
import { BatchDeleteInstanceTopicRequest } from './model/BatchDeleteInstanceTopicRequest';
import { BatchDeleteInstanceTopicRespTopics } from './model/BatchDeleteInstanceTopicRespTopics';
import { BatchDeleteInstanceTopicResponse } from './model/BatchDeleteInstanceTopicResponse';
import { BatchDeleteInstanceUsersReq } from './model/BatchDeleteInstanceUsersReq';
import { BatchDeleteInstanceUsersRequest } from './model/BatchDeleteInstanceUsersRequest';
import { BatchDeleteInstanceUsersResponse } from './model/BatchDeleteInstanceUsersResponse';
import { BatchRestartOrDeleteInstanceReq } from './model/BatchRestartOrDeleteInstanceReq';
import { BatchRestartOrDeleteInstanceRespResults } from './model/BatchRestartOrDeleteInstanceRespResults';
import { BatchRestartOrDeleteInstancesRequest } from './model/BatchRestartOrDeleteInstancesRequest';
import { BatchRestartOrDeleteInstancesResponse } from './model/BatchRestartOrDeleteInstancesResponse';
import { BssParam } from './model/BssParam';
import { CloseKafkaManagerRequest } from './model/CloseKafkaManagerRequest';
import { CloseKafkaManagerResponse } from './model/CloseKafkaManagerResponse';
import { ConnectorOrderRequestBody } from './model/ConnectorOrderRequestBody';
import { CreateConnectorReq } from './model/CreateConnectorReq';
import { CreateConnectorRequest } from './model/CreateConnectorRequest';
import { CreateConnectorResponse } from './model/CreateConnectorResponse';
import { CreateDeleteConnectorOrderRequest } from './model/CreateDeleteConnectorOrderRequest';
import { CreateDeleteConnectorOrderResponse } from './model/CreateDeleteConnectorOrderResponse';
import { CreateGroupReq } from './model/CreateGroupReq';
import { CreateGroupResp } from './model/CreateGroupResp';
import { CreateInstanceByEngineReq } from './model/CreateInstanceByEngineReq';
import { CreateInstanceByEngineRequest } from './model/CreateInstanceByEngineRequest';
import { CreateInstanceByEngineResponse } from './model/CreateInstanceByEngineResponse';
import { CreateInstanceTopicReq } from './model/CreateInstanceTopicReq';
import { CreateInstanceTopicReqTopicOtherConfigs } from './model/CreateInstanceTopicReqTopicOtherConfigs';
import { CreateInstanceTopicRequest } from './model/CreateInstanceTopicRequest';
import { CreateInstanceTopicResponse } from './model/CreateInstanceTopicResponse';
import { CreateInstanceUserReq } from './model/CreateInstanceUserReq';
import { CreateInstanceUserRequest } from './model/CreateInstanceUserRequest';
import { CreateInstanceUserResponse } from './model/CreateInstanceUserResponse';
import { CreateKafkaConsumerGroupRequest } from './model/CreateKafkaConsumerGroupRequest';
import { CreateKafkaConsumerGroupResponse } from './model/CreateKafkaConsumerGroupResponse';
import { CreatePartitionReq } from './model/CreatePartitionReq';
import { CreatePartitionRequest } from './model/CreatePartitionRequest';
import { CreatePartitionResponse } from './model/CreatePartitionResponse';
import { CreatePostPaidInstanceReq } from './model/CreatePostPaidInstanceReq';
import { CreatePostPaidInstanceRequest } from './model/CreatePostPaidInstanceRequest';
import { CreatePostPaidInstanceResponse } from './model/CreatePostPaidInstanceResponse';
import { CreateReassignmentTaskRequest } from './model/CreateReassignmentTaskRequest';
import { CreateReassignmentTaskResponse } from './model/CreateReassignmentTaskResponse';
import { CreateSinkTaskReq } from './model/CreateSinkTaskReq';
import { CreateSinkTaskRequest } from './model/CreateSinkTaskRequest';
import { CreateSinkTaskResponse } from './model/CreateSinkTaskResponse';
import { DeleteBackgroundTaskRequest } from './model/DeleteBackgroundTaskRequest';
import { DeleteBackgroundTaskResponse } from './model/DeleteBackgroundTaskResponse';
import { DeleteConnectorRequest } from './model/DeleteConnectorRequest';
import { DeleteConnectorResponse } from './model/DeleteConnectorResponse';
import { DeleteInstanceRequest } from './model/DeleteInstanceRequest';
import { DeleteInstanceResponse } from './model/DeleteInstanceResponse';
import { DeleteSinkTaskRequest } from './model/DeleteSinkTaskRequest';
import { DeleteSinkTaskResponse } from './model/DeleteSinkTaskResponse';
import { DiskusageEntity } from './model/DiskusageEntity';
import { DiskusageTopicEntity } from './model/DiskusageTopicEntity';
import { ExtendProductInfoEntity } from './model/ExtendProductInfoEntity';
import { ExtendProductIosEntity } from './model/ExtendProductIosEntity';
import { ExtendProductPropertiesEntity } from './model/ExtendProductPropertiesEntity';
import { ExtendProductSupportFeaturesEntity } from './model/ExtendProductSupportFeaturesEntity';
import { GroupInfoSimple } from './model/GroupInfoSimple';
import { InstanceConfig } from './model/InstanceConfig';
import { KafkaTopicPartitionResponsePartitions } from './model/KafkaTopicPartitionResponsePartitions';
import { KafkaTopicProducerResponseProducers } from './model/KafkaTopicProducerResponseProducers';
import { ListAvailableZonesRequest } from './model/ListAvailableZonesRequest';
import { ListAvailableZonesRespAvailableZones } from './model/ListAvailableZonesRespAvailableZones';
import { ListAvailableZonesResponse } from './model/ListAvailableZonesResponse';
import { ListBackgroundTasksRequest } from './model/ListBackgroundTasksRequest';
import { ListBackgroundTasksRespTasks } from './model/ListBackgroundTasksRespTasks';
import { ListBackgroundTasksResponse } from './model/ListBackgroundTasksResponse';
import { ListEngineIosEntity } from './model/ListEngineIosEntity';
import { ListEngineProductsEntity } from './model/ListEngineProductsEntity';
import { ListEngineProductsRequest } from './model/ListEngineProductsRequest';
import { ListEngineProductsResponse } from './model/ListEngineProductsResponse';
import { ListEnginePropertiesEntity } from './model/ListEnginePropertiesEntity';
import { ListEngineSupportFeaturesEntity } from './model/ListEngineSupportFeaturesEntity';
import { ListEngineSupportFeaturesPropertiesEntity } from './model/ListEngineSupportFeaturesPropertiesEntity';
import { ListInstanceConsumerGroupsRequest } from './model/ListInstanceConsumerGroupsRequest';
import { ListInstanceConsumerGroupsResponse } from './model/ListInstanceConsumerGroupsResponse';
import { ListInstanceTopicsRequest } from './model/ListInstanceTopicsRequest';
import { ListInstanceTopicsResponse } from './model/ListInstanceTopicsResponse';
import { ListInstancesRequest } from './model/ListInstancesRequest';
import { ListInstancesResponse } from './model/ListInstancesResponse';
import { ListProductsRequest } from './model/ListProductsRequest';
import { ListProductsRespDetail } from './model/ListProductsRespDetail';
import { ListProductsRespHourly } from './model/ListProductsRespHourly';
import { ListProductsRespIo } from './model/ListProductsRespIo';
import { ListProductsRespValues } from './model/ListProductsRespValues';
import { ListProductsResponse } from './model/ListProductsResponse';
import { ListSinkTasksRequest } from './model/ListSinkTasksRequest';
import { ListSinkTasksRespTasks } from './model/ListSinkTasksRespTasks';
import { ListSinkTasksResponse } from './model/ListSinkTasksResponse';
import { ListTopicPartitionsRequest } from './model/ListTopicPartitionsRequest';
import { ListTopicPartitionsResponse } from './model/ListTopicPartitionsResponse';
import { ListTopicProducersRequest } from './model/ListTopicProducersRequest';
import { ListTopicProducersResponse } from './model/ListTopicProducersResponse';
import { MaintainWindowsEntity } from './model/MaintainWindowsEntity';
import { MessagesEntity } from './model/MessagesEntity';
import { ModifyInstanceConfig } from './model/ModifyInstanceConfig';
import { ModifyInstanceConfigsReq } from './model/ModifyInstanceConfigsReq';
import { ModifyInstanceConfigsRequest } from './model/ModifyInstanceConfigsRequest';
import { ModifyInstanceConfigsResponse } from './model/ModifyInstanceConfigsResponse';
import { ObsDestinationDescriptor } from './model/ObsDestinationDescriptor';
import { PartitionReassignEntity } from './model/PartitionReassignEntity';
import { PartitionReassignRequest } from './model/PartitionReassignRequest';
import { PolicyEntity } from './model/PolicyEntity';
import { ResetManagerPasswordReq } from './model/ResetManagerPasswordReq';
import { ResetManagerPasswordRequest } from './model/ResetManagerPasswordRequest';
import { ResetManagerPasswordResponse } from './model/ResetManagerPasswordResponse';
import { ResetMessageOffsetReq } from './model/ResetMessageOffsetReq';
import { ResetMessageOffsetRequest } from './model/ResetMessageOffsetRequest';
import { ResetMessageOffsetResponse } from './model/ResetMessageOffsetResponse';
import { ResetPasswordReq } from './model/ResetPasswordReq';
import { ResetPasswordRequest } from './model/ResetPasswordRequest';
import { ResetPasswordResponse } from './model/ResetPasswordResponse';
import { ResetReplicaReq } from './model/ResetReplicaReq';
import { ResetReplicaReqPartitions } from './model/ResetReplicaReqPartitions';
import { ResetUserPasswrodReq } from './model/ResetUserPasswrodReq';
import { ResetUserPasswrodRequest } from './model/ResetUserPasswrodRequest';
import { ResetUserPasswrodResponse } from './model/ResetUserPasswrodResponse';
import { ResizeEngineInstanceReq } from './model/ResizeEngineInstanceReq';
import { ResizeEngineInstanceRequest } from './model/ResizeEngineInstanceRequest';
import { ResizeEngineInstanceResponse } from './model/ResizeEngineInstanceResponse';
import { ResizeInstanceReq } from './model/ResizeInstanceReq';
import { ResizeInstanceRequest } from './model/ResizeInstanceRequest';
import { ResizeInstanceResponse } from './model/ResizeInstanceResponse';
import { RestartManagerRequest } from './model/RestartManagerRequest';
import { RestartManagerResponse } from './model/RestartManagerResponse';
import { ShowBackgroundTaskRequest } from './model/ShowBackgroundTaskRequest';
import { ShowBackgroundTaskResponse } from './model/ShowBackgroundTaskResponse';
import { ShowCesHierarchyRequest } from './model/ShowCesHierarchyRequest';
import { ShowCesHierarchyResponse } from './model/ShowCesHierarchyResponse';
import { ShowCeshierarchyRespChildren } from './model/ShowCeshierarchyRespChildren';
import { ShowCeshierarchyRespDimensions } from './model/ShowCeshierarchyRespDimensions';
import { ShowCeshierarchyRespGroups } from './model/ShowCeshierarchyRespGroups';
import { ShowCeshierarchyRespInstanceIds } from './model/ShowCeshierarchyRespInstanceIds';
import { ShowCeshierarchyRespNodes } from './model/ShowCeshierarchyRespNodes';
import { ShowCeshierarchyRespPartitions } from './model/ShowCeshierarchyRespPartitions';
import { ShowCeshierarchyRespQueues } from './model/ShowCeshierarchyRespQueues';
import { ShowCeshierarchyRespQueues1 } from './model/ShowCeshierarchyRespQueues1';
import { ShowClusterRequest } from './model/ShowClusterRequest';
import { ShowClusterRespCluster } from './model/ShowClusterRespCluster';
import { ShowClusterRespClusterBrokers } from './model/ShowClusterRespClusterBrokers';
import { ShowClusterResponse } from './model/ShowClusterResponse';
import { ShowCoordinatorsRequest } from './model/ShowCoordinatorsRequest';
import { ShowCoordinatorsRespCoordinators } from './model/ShowCoordinatorsRespCoordinators';
import { ShowCoordinatorsResponse } from './model/ShowCoordinatorsResponse';
import { ShowEngineInstanceExtendProductInfoRequest } from './model/ShowEngineInstanceExtendProductInfoRequest';
import { ShowEngineInstanceExtendProductInfoResponse } from './model/ShowEngineInstanceExtendProductInfoResponse';
import { ShowGroupsRequest } from './model/ShowGroupsRequest';
import { ShowGroupsRespGroup } from './model/ShowGroupsRespGroup';
import { ShowGroupsRespGroupAssignment } from './model/ShowGroupsRespGroupAssignment';
import { ShowGroupsRespGroupGroupMessageOffsets } from './model/ShowGroupsRespGroupGroupMessageOffsets';
import { ShowGroupsRespGroupMembers } from './model/ShowGroupsRespGroupMembers';
import { ShowGroupsResponse } from './model/ShowGroupsResponse';
import { ShowInstanceConfigsRequest } from './model/ShowInstanceConfigsRequest';
import { ShowInstanceConfigsResponse } from './model/ShowInstanceConfigsResponse';
import { ShowInstanceExtendProductInfoRequest } from './model/ShowInstanceExtendProductInfoRequest';
import { ShowInstanceExtendProductInfoRespDetail } from './model/ShowInstanceExtendProductInfoRespDetail';
import { ShowInstanceExtendProductInfoRespHourly } from './model/ShowInstanceExtendProductInfoRespHourly';
import { ShowInstanceExtendProductInfoRespValues } from './model/ShowInstanceExtendProductInfoRespValues';
import { ShowInstanceExtendProductInfoResponse } from './model/ShowInstanceExtendProductInfoResponse';
import { ShowInstanceMessagesRequest } from './model/ShowInstanceMessagesRequest';
import { ShowInstanceMessagesResponse } from './model/ShowInstanceMessagesResponse';
import { ShowInstanceRequest } from './model/ShowInstanceRequest';
import { ShowInstanceResp } from './model/ShowInstanceResp';
import { ShowInstanceResponse } from './model/ShowInstanceResponse';
import { ShowInstanceTopicDetailRequest } from './model/ShowInstanceTopicDetailRequest';
import { ShowInstanceTopicDetailRespPartitions } from './model/ShowInstanceTopicDetailRespPartitions';
import { ShowInstanceTopicDetailRespReplicas } from './model/ShowInstanceTopicDetailRespReplicas';
import { ShowInstanceTopicDetailResponse } from './model/ShowInstanceTopicDetailResponse';
import { ShowInstanceUsersEntity } from './model/ShowInstanceUsersEntity';
import { ShowInstanceUsersRequest } from './model/ShowInstanceUsersRequest';
import { ShowInstanceUsersResponse } from './model/ShowInstanceUsersResponse';
import { ShowKafkaProjectTagsRequest } from './model/ShowKafkaProjectTagsRequest';
import { ShowKafkaProjectTagsResponse } from './model/ShowKafkaProjectTagsResponse';
import { ShowKafkaTagsRequest } from './model/ShowKafkaTagsRequest';
import { ShowKafkaTagsResponse } from './model/ShowKafkaTagsResponse';
import { ShowKafkaTopicPartitionDiskusageRequest } from './model/ShowKafkaTopicPartitionDiskusageRequest';
import { ShowKafkaTopicPartitionDiskusageResponse } from './model/ShowKafkaTopicPartitionDiskusageResponse';
import { ShowMaintainWindowsRequest } from './model/ShowMaintainWindowsRequest';
import { ShowMaintainWindowsResponse } from './model/ShowMaintainWindowsResponse';
import { ShowMessagesRequest } from './model/ShowMessagesRequest';
import { ShowMessagesRespMessages } from './model/ShowMessagesRespMessages';
import { ShowMessagesResponse } from './model/ShowMessagesResponse';
import { ShowPartitionBeginningMessageRequest } from './model/ShowPartitionBeginningMessageRequest';
import { ShowPartitionBeginningMessageResponse } from './model/ShowPartitionBeginningMessageResponse';
import { ShowPartitionEndMessageRequest } from './model/ShowPartitionEndMessageRequest';
import { ShowPartitionEndMessageResponse } from './model/ShowPartitionEndMessageResponse';
import { ShowPartitionMessageEntity } from './model/ShowPartitionMessageEntity';
import { ShowPartitionMessageRequest } from './model/ShowPartitionMessageRequest';
import { ShowPartitionMessageResponse } from './model/ShowPartitionMessageResponse';
import { ShowSinkTaskDetailRequest } from './model/ShowSinkTaskDetailRequest';
import { ShowSinkTaskDetailRespObsDestinationDescriptor } from './model/ShowSinkTaskDetailRespObsDestinationDescriptor';
import { ShowSinkTaskDetailRespPartitions } from './model/ShowSinkTaskDetailRespPartitions';
import { ShowSinkTaskDetailRespTopicsInfo } from './model/ShowSinkTaskDetailRespTopicsInfo';
import { ShowSinkTaskDetailResponse } from './model/ShowSinkTaskDetailResponse';
import { ShowTopicAccessPolicyRequest } from './model/ShowTopicAccessPolicyRequest';
import { ShowTopicAccessPolicyResponse } from './model/ShowTopicAccessPolicyResponse';
import { TagEntity } from './model/TagEntity';
import { TagMultyValueEntity } from './model/TagMultyValueEntity';
import { TopicAssignment } from './model/TopicAssignment';
import { TopicEntity } from './model/TopicEntity';
import { TopicEntityTopicOtherConfigs } from './model/TopicEntityTopicOtherConfigs';
import { UpdateInstanceAutoCreateTopicReq } from './model/UpdateInstanceAutoCreateTopicReq';
import { UpdateInstanceAutoCreateTopicRequest } from './model/UpdateInstanceAutoCreateTopicRequest';
import { UpdateInstanceAutoCreateTopicResponse } from './model/UpdateInstanceAutoCreateTopicResponse';
import { UpdateInstanceConsumerGroupRequest } from './model/UpdateInstanceConsumerGroupRequest';
import { UpdateInstanceConsumerGroupResponse } from './model/UpdateInstanceConsumerGroupResponse';
import { UpdateInstanceCrossVpcIpReq } from './model/UpdateInstanceCrossVpcIpReq';
import { UpdateInstanceCrossVpcIpRequest } from './model/UpdateInstanceCrossVpcIpRequest';
import { UpdateInstanceCrossVpcIpRespResults } from './model/UpdateInstanceCrossVpcIpRespResults';
import { UpdateInstanceCrossVpcIpResponse } from './model/UpdateInstanceCrossVpcIpResponse';
import { UpdateInstanceReq } from './model/UpdateInstanceReq';
import { UpdateInstanceRequest } from './model/UpdateInstanceRequest';
import { UpdateInstanceResponse } from './model/UpdateInstanceResponse';
import { UpdateInstanceTopicReq } from './model/UpdateInstanceTopicReq';
import { UpdateInstanceTopicReqTopics } from './model/UpdateInstanceTopicReqTopics';
import { UpdateInstanceTopicRequest } from './model/UpdateInstanceTopicRequest';
import { UpdateInstanceTopicResponse } from './model/UpdateInstanceTopicResponse';
import { UpdateInstanceUserRequest } from './model/UpdateInstanceUserRequest';
import { UpdateInstanceUserResponse } from './model/UpdateInstanceUserResponse';
import { UpdateSinkTaskQuotaReq } from './model/UpdateSinkTaskQuotaReq';
import { UpdateSinkTaskQuotaRequest } from './model/UpdateSinkTaskQuotaRequest';
import { UpdateSinkTaskQuotaResponse } from './model/UpdateSinkTaskQuotaResponse';
import { UpdateTopicAccessPolicyReq } from './model/UpdateTopicAccessPolicyReq';
import { UpdateTopicAccessPolicyRequest } from './model/UpdateTopicAccessPolicyRequest';
import { UpdateTopicAccessPolicyResponse } from './model/UpdateTopicAccessPolicyResponse';
import { UpdateTopicReplicaRequest } from './model/UpdateTopicReplicaRequest';
import { UpdateTopicReplicaResponse } from './model/UpdateTopicReplicaResponse';
import { UpdateUserReq } from './model/UpdateUserReq';

export class KafkaClient {
    public static newBuilder(): ClientBuilder<KafkaClient> {
            return new ClientBuilder<KafkaClient>(newClient);
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
     * @param {BatchCreateOrDeleteTagReq} batchCreateOrDeleteKafkaTagRequestBody 请求信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateOrDeleteKafkaTag(batchCreateOrDeleteKafkaTagRequest?: BatchCreateOrDeleteKafkaTagRequest): Promise<BatchCreateOrDeleteKafkaTagResponse> {
        const options = ParamCreater().batchCreateOrDeleteKafkaTag(batchCreateOrDeleteKafkaTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于向Kafka实例批量删除Group。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary Kafka实例批量删除Group
     * @param {string} instanceId 实例ID。
     * @param {BatchDeleteGroupReq} batchDeleteGroupRequestBody 待删除的消费组列表。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteGroup(batchDeleteGroupRequest?: BatchDeleteGroupRequest): Promise<BatchDeleteGroupResponse> {
        const options = ParamCreater().batchDeleteGroup(batchDeleteGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于向Kafka实例批量删除Topic。批量删除多个Topic时，部分删除成功，部分失败，此时接口返回删除成功，并在返回中显示删除失败的Topic信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary Kafka实例批量删除Topic
     * @param {string} instanceId 实例ID。
     * @param {BatchDeleteInstanceTopicReq} batchDeleteInstanceTopicRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteInstanceTopic(batchDeleteInstanceTopicRequest?: BatchDeleteInstanceTopicRequest): Promise<BatchDeleteInstanceTopicResponse> {
        const options = ParamCreater().batchDeleteInstanceTopic(batchDeleteInstanceTopicRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除Kafka实例的用户。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除用户
     * @param {string} instanceId 实例ID。
     * @param {BatchDeleteInstanceUsersReq} batchDeleteInstanceUsersRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteInstanceUsers(batchDeleteInstanceUsersRequest?: BatchDeleteInstanceUsersRequest): Promise<BatchDeleteInstanceUsersResponse> {
        const options = ParamCreater().batchDeleteInstanceUsers(batchDeleteInstanceUsersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量重启或删除实例。
     * 
     * 在实例重启过程中，客户端的生产与消费消息等请求会被拒绝。
     * 
     * 实例删除后，实例中原有的数据将被删除，且没有备份，请谨慎操作。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量重启或删除实例
     * @param {BatchRestartOrDeleteInstanceReq} batchRestartOrDeleteInstancesRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchRestartOrDeleteInstances(batchRestartOrDeleteInstancesRequest?: BatchRestartOrDeleteInstancesRequest): Promise<BatchRestartOrDeleteInstancesResponse> {
        const options = ParamCreater().batchRestartOrDeleteInstances(batchRestartOrDeleteInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 关闭kafka manager，相应的原来开放出的management相关接口也将不可用
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关闭kafka manager
     * @param {string} instanceId 实例id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public closeKafkaManager(closeKafkaManagerRequest?: CloseKafkaManagerRequest): Promise<CloseKafkaManagerResponse> {
        const options = ParamCreater().closeKafkaManager(closeKafkaManagerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建实例的转储节点。
     * 
     * **当前通过调用API，只支持按需实例创建转储节点。**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建实例的转储节点
     * @param {string} instanceId 实例ID。
     * @param {CreateConnectorReq} createConnectorRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createConnector(createConnectorRequest?: CreateConnectorRequest): Promise<CreateConnectorResponse> {
        const options = ParamCreater().createConnector(createConnectorRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建删除实例转储节点的订单。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建关闭实例转储节点的订单
     * @param {string} instanceId 实例ID。
     * @param {ConnectorOrderRequestBody} [createDeleteConnectorOrderRequestBody] 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDeleteConnectorOrder(createDeleteConnectorOrderRequest?: CreateDeleteConnectorOrderRequest): Promise<CreateDeleteConnectorOrderResponse> {
        const options = ParamCreater().createDeleteConnectorOrder(createDeleteConnectorOrderRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建实例。
     * 
     * 该接口支持创建按需和包周期两种计费方式的实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建实例
     * @param {'kafka'} engine 消息引擎。
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
     * 该接口用于向Kafka实例创建Topic。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary Kafka实例创建Topic
     * @param {string} instanceId 实例ID。
     * @param {CreateInstanceTopicReq} createInstanceTopicRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createInstanceTopic(createInstanceTopicRequest?: CreateInstanceTopicRequest): Promise<CreateInstanceTopicResponse> {
        const options = ParamCreater().createInstanceTopic(createInstanceTopicRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建Kafka实例的用户，用户可连接开启SASL的Kafka实例。 [ 2023年7月15日前创建的Kafka实例，一个实例最多创建20个用户。2023年7月15日及以后创建的Kafka实例，一个实例最多创建500个用户。](tag:hws,hws_hk)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建用户
     * @param {string} instanceId 实例ID。
     * @param {CreateInstanceUserReq} createInstanceUserRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createInstanceUser(createInstanceUserRequest?: CreateInstanceUserRequest): Promise<CreateInstanceUserResponse> {
        const options = ParamCreater().createInstanceUser(createInstanceUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 实例创建消费组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建消费组
     * @param {string} instanceId 实例ID。
     * @param {CreateGroupReq} createKafkaConsumerGroupRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createKafkaConsumerGroup(createKafkaConsumerGroupRequest?: CreateKafkaConsumerGroupRequest): Promise<CreateKafkaConsumerGroupResponse> {
        const options = ParamCreater().createKafkaConsumerGroup(createKafkaConsumerGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 新增Kafka实例指定Topic分区。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新增Kafka实例指定Topic分区
     * @param {string} instanceId 实例ID。
     * @param {string} topic Topic名称。
     * @param {CreatePartitionReq} createPartitionRequestBody 请求消息。
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
     * [创建按需计费类型的Kafka实例。](tag:sbc,hk_sbc,cmcc)[创建kafka实例。](tag:otc)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建实例
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
     * 该接口用于向Kafka实例提交分区重平衡任务，若成功则返回重平衡任务的job id。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary Kafka实例开始分区重平衡任务
     * @param {string} instanceId 实例ID。
     * @param {PartitionReassignRequest} createReassignmentTaskRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createReassignmentTask(createReassignmentTaskRequest?: CreateReassignmentTaskRequest): Promise<CreateReassignmentTaskResponse> {
        const options = ParamCreater().createReassignmentTask(createReassignmentTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建转储任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建转储任务
     * @param {string} connectorId 实例转储ID。  请参考[查询实例](ShowInstance.xml)返回的数据。
     * @param {CreateSinkTaskReq} createSinkTaskRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSinkTask(createSinkTaskRequest?: CreateSinkTaskRequest): Promise<CreateSinkTaskResponse> {
        const options = ParamCreater().createSinkTask(createSinkTaskRequest);

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
     * @param {string} instanceId 实例ID。
     * @param {string} taskId 任务ID。
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
     * 关闭实例转储节点。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关闭实例转储节点
     * @param {string} instanceId 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteConnector(deleteConnectorRequest?: DeleteConnectorRequest): Promise<DeleteConnectorResponse> {
        const options = ParamCreater().deleteConnector(deleteConnectorRequest);

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
     * 删除单个转储任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除单个转储任务
     * @param {string} connectorId 实例转储ID。  请参考[查询实例](ShowInstance.xml)返回的数据。
     * @param {string} taskId 转储任务ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSinkTask(deleteSinkTaskRequest?: DeleteSinkTaskRequest): Promise<DeleteSinkTaskResponse> {
        const options = ParamCreater().deleteSinkTask(deleteSinkTaskRequest);

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
     * @param {string} instanceId 实例ID。
     * @param {number} [start] 开启查询的任务编号。
     * @param {number} [limit] 查询的任务个数。
     * @param {string} [beginTime] 查询任务的最小时间，格式为YYYYMMDDHHmmss。
     * @param {string} [endTime] 查询任务的最大时间，格式为YYYYMMDDHHmmss。
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
     * 查询产品规格列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询产品规格列表
     * @param {'kafka'} engine 消息引擎的类型。
     * @param {string} [productId] 产品ID。
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
     * 查询所有消费组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有消费组
     * @param {string} instanceId 实例ID。
     * @param {string} [offset] 偏移量，表示从此偏移量开始查询， offset大于等于0。
     * @param {string} [limit] 当次查询返回的最大消费组ID个数，默认值为10，取值范围为1~50。
     * @param {string} [group] 消费组名过滤查询，过滤方式为字段包含过滤。
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
     * 该接口用于查询指定Kafka实例的Topic详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary Kafka实例查询Topic
     * @param {string} instanceId 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceTopics(listInstanceTopicsRequest?: ListInstanceTopicsRequest): Promise<ListInstanceTopicsResponse> {
        const options = ParamCreater().listInstanceTopics(listInstanceTopicsRequest);

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
     * @param {'kafka'} [engine] 消息引擎：kafka。
     * @param {string} [name] 实例名称。
     * @param {string} [instanceId] 实例ID。
     * @param {'CREATING' | 'RUNNING' | 'FAULTY' | 'RESTARTING' | 'RESIZING' | 'RESIZING FAILED' | 'FROZEN'} [status] 实例状态。 详细状态说明请参考[实例状态说明](kafka-api-180514012.xml)。
     * @param {'true' | 'false'} [includeFailure] 是否返回创建失败的实例数。  当参数值为“true”时，返回创建失败的实例数。参数值为“false”或者其他值，不返回创建失败的实例数。
     * @param {'true' | 'false'} [exactMatchName] 是否按照实例名称进行精确匹配查询。  默认为“false”，表示模糊匹配实例名称查询。若参数值为“true”表示按照实例名称进行精确匹配查询。
     * @param {string} [enterpriseProjectId] 企业项目ID。
     * @param {string} [offset] 偏移量，表示从此偏移量开始查询， offset大于等于0。
     * @param {string} [limit] 当次查询返回的最大实例个数，默认值为10，取值范围为1~50。
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
     * 在创建kafka实例时，需要配置订购的产品ID（即product_id），可通过该接口查询产品规格。
     * 
     * 例如，要订购按需计费、基准带宽为100MB的kafka实例，可从接口响应消息中，查找Hourly的消息体，然后找到bandwidth为100MB的记录对应的product_id，该product_id的值即是创建上述kafka实例时需要配置的产品ID。
     * 
     * 同时，unavailable_zones字段表示资源不足的可用区列表，如果为空，则表示所有可用区都有资源，如果不为空，则表示字段值的可用区没有资源。所以必须确保您购买的资源所在的可用区有资源，不在该字段列表内。
     * 
     * [例如，响应消息中bandwidth字段为1200MB的记录，unavailable_zones字段包含cn-east-2b、cn-east-2a和cn-east-2d，表示在华东-上海2的可用区1、可用区2、可用区3都没有该资源。](tag:hws)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询产品规格列表
     * @param {'kafka'} engine 消息引擎的类型。当前只支持kafka类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProducts(listProductsRequest?: ListProductsRequest): Promise<ListProductsResponse> {
        const options = ParamCreater().listProducts(listProductsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询转储任务列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询转储任务列表
     * @param {string} connectorId 实例转储ID。  请参考[查询实例](ShowInstance.xml)返回的数据。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSinkTasks(listSinkTasksRequest?: ListSinkTasksRequest): Promise<ListSinkTasksResponse> {
        const options = ParamCreater().listSinkTasks(listSinkTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Topic的分区列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Topic的分区列表
     * @param {string} instanceId 实例id
     * @param {string} topic 主题
     * @param {number} [offset] 偏移量，表示查询该偏移量后面的记录
     * @param {number} [limit] 查询返回记录的数量限制
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTopicPartitions(listTopicPartitionsRequest?: ListTopicPartitionsRequest): Promise<ListTopicPartitionsResponse> {
        const options = ParamCreater().listTopicPartitions(listTopicPartitionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Topic的当前生产者列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Topic的当前生产者列表
     * @param {string} instanceId 实例id
     * @param {string} topic 主题
     * @param {number} [offset] 偏移量，表示查询该偏移量后面的记录
     * @param {number} [limit] 查询返回记录的数量限制
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTopicProducers(listTopicProducersRequest?: ListTopicProducersRequest): Promise<ListTopicProducersResponse> {
        const options = ParamCreater().listTopicProducers(listTopicProducersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改实例配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改实例配置
     * @param {string} instanceId 实例ID。
     * @param {ModifyInstanceConfigsReq} modifyInstanceConfigsRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public modifyInstanceConfigs(modifyInstanceConfigsRequest?: ModifyInstanceConfigsRequest): Promise<ModifyInstanceConfigsResponse> {
        const options = ParamCreater().modifyInstanceConfigs(modifyInstanceConfigsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重置Manager密码。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重置Manager密码
     * @param {string} instanceId 实例ID。
     * @param {ResetManagerPasswordReq} resetManagerPasswordRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resetManagerPassword(resetManagerPasswordRequest?: ResetManagerPasswordRequest): Promise<ResetManagerPasswordResponse> {
        const options = ParamCreater().resetManagerPassword(resetManagerPasswordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Kafka实例不支持在线重置消费进度。在执行重置消费进度之前，必须停止被重置消费组客户端。
     * 
     * 停止待重置消费组客户端，然后等待一段时间（即ConsumerConfig.SESSION_TIMEOUT_MS_CONFIG配置的时间，默认为1000毫秒）后，服务端才认为此消费组客户端已下线。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重置消费组消费进度到指定位置
     * @param {string} instanceId 实例ID。
     * @param {string} group 消费组名称。
     * @param {ResetMessageOffsetReq} resetMessageOffsetRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resetMessageOffset(resetMessageOffsetRequest?: ResetMessageOffsetRequest): Promise<ResetMessageOffsetResponse> {
        const options = ParamCreater().resetMessageOffset(resetMessageOffsetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重置密码。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重置密码
     * @param {string} instanceId 实例ID。
     * @param {ResetPasswordReq} resetPasswordRequestBody 请求消息。
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
     * 重置用户密码
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重置用户密码
     * @param {string} instanceId 实例ID。
     * @param {string} userName 用户名称。
     * @param {ResetUserPasswrodReq} resetUserPasswrodRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resetUserPasswrod(resetUserPasswrodRequest?: ResetUserPasswrodRequest): Promise<ResetUserPasswrodResponse> {
        const options = ParamCreater().resetUserPasswrod(resetUserPasswrodRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 实例规格变更。[当前通过调用API，只支持按需实例进行实例规格变更。](tag:hws,hws_hk,ctc,cmcc,hws_eu)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 实例规格变更
     * @param {'kafka'} engine 消息引擎。
     * @param {string} instanceId 实例ID。
     * @param {ResizeEngineInstanceReq} resizeEngineInstanceRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resizeEngineInstance(resizeEngineInstanceRequest?: ResizeEngineInstanceRequest): Promise<ResizeEngineInstanceResponse> {
        const options = ParamCreater().resizeEngineInstance(resizeEngineInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 实例规格变更。[当前通过调用API，只支持按需实例进行实例规格变更。](tag:hws,hws_hk,ctc,cmcc,hws_eu)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 实例规格变更
     * @param {string} instanceId 实例ID。
     * @param {ResizeInstanceReq} resizeInstanceRequestBody 请求消息。
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
     * 重启Manager。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重启Manager
     * @param {string} instanceId 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public restartManager(restartManagerRequest?: RestartManagerRequest): Promise<RestartManagerResponse> {
        const options = ParamCreater().restartManager(restartManagerRequest);

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
     * @param {string} instanceId 实例ID。
     * @param {string} taskId 任务ID。
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
     * 查询实例在CES的监控层级关系。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例在CES的监控层级关系
     * @param {string} instanceId 实例ID。
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
     * 查询Kafka集群元数据信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Kafka集群元数据信息
     * @param {string} instanceId 实例ID。
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
     * 查询Kafka实例的协调器信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Kafka实例的协调器信息
     * @param {string} instanceId 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCoordinators(showCoordinatorsRequest?: ShowCoordinatorsRequest): Promise<ShowCoordinatorsResponse> {
        const options = ParamCreater().showCoordinators(showCoordinatorsRequest);

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
     * @param {'kafka'} engine 消息引擎。
     * @param {string} instanceId 实例ID。
     * @param {'advanced'} type 产品的类型。 - advanced: 专享版
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
     * 查询消费组信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询消费组信息
     * @param {string} instanceId 实例ID。
     * @param {string} group 消费组名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showGroups(showGroupsRequest?: ShowGroupsRequest): Promise<ShowGroupsResponse> {
        const options = ParamCreater().showGroups(showGroupsRequest);

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
     * @param {string} instanceId 实例ID。
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
     * 获取实例配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取实例配置
     * @param {string} instanceId 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceConfigs(showInstanceConfigsRequest?: ShowInstanceConfigsRequest): Promise<ShowInstanceConfigsResponse> {
        const options = ParamCreater().showInstanceConfigs(showInstanceConfigsRequest);

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
     * @param {string} instanceId 实例ID。
     * @param {'advanced' | 'platinum' | 'dec' | 'exp'} type [产品的类型。 - advanced: 专享版 - platinum: 铂金版 - dec: 专属云版 - exp: 体验版](tag:hws,hws_hk,ctc,sbc,hk_sbc,cmcc,hws_eu)
     * @param {'kafka'} engine 消息引擎的类型。当前支持的类型为kafka。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceExtendProductInfo(showInstanceExtendProductInfoRequest?: ShowInstanceExtendProductInfoRequest): Promise<ShowInstanceExtendProductInfoResponse> {
        const options = ParamCreater().showInstanceExtendProductInfo(showInstanceExtendProductInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询消息的偏移量和消息内容。
     * 先根据时间戳查询消息的偏移量，再根据偏移量查询消息内容。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询消息
     * @param {string} instanceId 实例ID。
     * @param {string} topic Topic名称。  Topic名称必现以字母开头且只支持大小写字母、中横线、下划线以及数字。
     * @param {boolean} [asc] 是否按照时间排序。
     * @param {string} [startTime] 开始时间。  Unix毫秒时间戳。  查询消息偏移量时，为必选参数。
     * @param {string} [endTime] 结束时间。  Unix毫秒时间戳。  查询消息偏移量时，为必选参数。
     * @param {string} [limit] 每一页显示的message数量。
     * @param {string} [offset] 页数。
     * @param {boolean} [download] 是否下载。
     * @param {string} [messageOffset] 消息偏移量。  **查询消息内容时，为必选参数。**  若start_time、end_time参数不为空，该参数无效。
     * @param {string} [partition] 分区。  **查询消息内容时，为必选参数。**  若start_time、end_time参数不为空，该参数无效。
     * @param {string} [keyword] 关键词。 取值范围为0~50。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceMessages(showInstanceMessagesRequest?: ShowInstanceMessagesRequest): Promise<ShowInstanceMessagesResponse> {
        const options = ParamCreater().showInstanceMessages(showInstanceMessagesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Kafka实例Topic详细信息。(单个实例调用不要超过1s一次)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Kafka实例Topic详细信息
     * @param {string} instanceId 实例ID。
     * @param {string} topic Topic名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceTopicDetail(showInstanceTopicDetailRequest?: ShowInstanceTopicDetailRequest): Promise<ShowInstanceTopicDetailResponse> {
        const options = ParamCreater().showInstanceTopicDetail(showInstanceTopicDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用户列表。
     * 
     * Kafka实例开启SASL功能时，才支持多用户管理的功能。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户列表
     * @param {string} instanceId 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceUsers(showInstanceUsersRequest?: ShowInstanceUsersRequest): Promise<ShowInstanceUsersResponse> {
        const options = ParamCreater().showInstanceUsers(showInstanceUsersRequest);

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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showKafkaProjectTags(showKafkaProjectTagsRequest?: ShowKafkaProjectTagsRequest): Promise<ShowKafkaProjectTagsResponse> {
        const options = ParamCreater().showKafkaProjectTags();

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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showKafkaTags(showKafkaTagsRequest?: ShowKafkaTagsRequest): Promise<ShowKafkaTagsResponse> {
        const options = ParamCreater().showKafkaTags(showKafkaTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询topic在Broker上磁盘占用情况。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询topic的磁盘存储情况
     * @param {string} instanceId 实例ID。
     * @param {string} [minSize] 占用磁盘大小，默认值1G (1K，1M，1G)。
     * @param {string} [top] 占用磁盘大小，查询top N。
     * @param {string} [percentage] 占用磁盘大小，查询大于占比的分区。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showKafkaTopicPartitionDiskusage(showKafkaTopicPartitionDiskusageRequest?: ShowKafkaTopicPartitionDiskusageRequest): Promise<ShowKafkaTopicPartitionDiskusageResponse> {
        const options = ParamCreater().showKafkaTopicPartitionDiskusage(showKafkaTopicPartitionDiskusageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询维护时间窗开始时间和结束时间。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询维护时间窗时间段
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMaintainWindows(showMaintainWindowsRequest?: ShowMaintainWindowsRequest): Promise<ShowMaintainWindowsResponse> {
        const options = ParamCreater().showMaintainWindows();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询分区指定时间段的消息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询分区指定时间段的消息
     * @param {string} instanceId 实例ID。
     * @param {string} topic Topic名称。  Topic名称必现以字母开头且只支持大小写字母、中横线、下划线以及数字。
     * @param {string} [startTime] 查询起始时间，为unix时间戳格式，默认值为0。
     * @param {string} [endTime] 查询结束时间，为unix时间戳格式，默认值为系统当前时间。
     * @param {number} [limit] 单页返回消息数，默认值为10。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询， offset大于等于0。
     * @param {string} [partition] 分区编号，默认值为-1，若传入值为-1，则查询所有分区。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMessages(showMessagesRequest?: ShowMessagesRequest): Promise<ShowMessagesResponse> {
        const options = ParamCreater().showMessages(showMessagesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询分区最早消息的位置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询分区最早消息的位置
     * @param {string} instanceId 实例ID。
     * @param {string} topic Topic名称。  Topic名称必现以字母开头且只支持大小写字母、中横线、下划线以及数字。
     * @param {number} partition 分区编号。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPartitionBeginningMessage(showPartitionBeginningMessageRequest?: ShowPartitionBeginningMessageRequest): Promise<ShowPartitionBeginningMessageResponse> {
        const options = ParamCreater().showPartitionBeginningMessage(showPartitionBeginningMessageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询分区最新消息的位置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询分区最新消息的位置
     * @param {string} instanceId 实例ID。
     * @param {string} topic Topic名称。  Topic名称必现以字母开头且只支持大小写字母、中横线、下划线以及数字。
     * @param {number} partition 分区编号。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPartitionEndMessage(showPartitionEndMessageRequest?: ShowPartitionEndMessageRequest): Promise<ShowPartitionEndMessageResponse> {
        const options = ParamCreater().showPartitionEndMessage(showPartitionEndMessageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询分区指定偏移量的消息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询分区指定偏移量的消息
     * @param {string} instanceId 实例ID。
     * @param {string} topic Topic名称。  Topic名称必现以字母开头且只支持大小写字母、中横线、下划线以及数字。
     * @param {number} partition 分区编号。
     * @param {string} messageOffset 消息位置。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPartitionMessage(showPartitionMessageRequest?: ShowPartitionMessageRequest): Promise<ShowPartitionMessageResponse> {
        const options = ParamCreater().showPartitionMessage(showPartitionMessageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询单个转储任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询单个转储任务
     * @param {string} connectorId 实例转储ID。  请参考[查询实例](ShowInstance.xml)返回的数据。
     * @param {string} taskId 转储任务ID。
     * @param {'true' | 'false'} [topicInfo] 是否包含topic信息。默认是false。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSinkTaskDetail(showSinkTaskDetailRequest?: ShowSinkTaskDetailRequest): Promise<ShowSinkTaskDetailResponse> {
        const options = ParamCreater().showSinkTaskDetail(showSinkTaskDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用户权限。
     * 
     * Kafka实例开启SASL功能时，才支持多用户管理的功能。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户权限
     * @param {string} instanceId 实例ID。
     * @param {string} topicName Topic名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTopicAccessPolicy(showTopicAccessPolicyRequest?: ShowTopicAccessPolicyRequest): Promise<ShowTopicAccessPolicyResponse> {
        const options = ParamCreater().showTopicAccessPolicy(showTopicAccessPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改实例信息。
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
     * 开启或关闭实例自动创建topic功能。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启或关闭实例自动创建topic功能
     * @param {string} instanceId 实例ID。
     * @param {UpdateInstanceAutoCreateTopicReq} updateInstanceAutoCreateTopicRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInstanceAutoCreateTopic(updateInstanceAutoCreateTopicRequest?: UpdateInstanceAutoCreateTopicRequest): Promise<UpdateInstanceAutoCreateTopicResponse> {
        const options = ParamCreater().updateInstanceAutoCreateTopic(updateInstanceAutoCreateTopicRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 编辑消费组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 编辑消费组
     * @param {string} engine 消息中间件类型。
     * @param {string} instanceId 实例ID。
     * @param {string} group 消费者组。
     * @param {CreateGroupReq} updateInstanceConsumerGroupRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInstanceConsumerGroup(updateInstanceConsumerGroupRequest?: UpdateInstanceConsumerGroupRequest): Promise<UpdateInstanceConsumerGroupResponse> {
        const options = ParamCreater().updateInstanceConsumerGroup(updateInstanceConsumerGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改实例跨VPC访问的内网IP。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改实例跨VPC访问的内网IP
     * @param {string} instanceId 实例ID。
     * @param {UpdateInstanceCrossVpcIpReq} updateInstanceCrossVpcIpRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInstanceCrossVpcIp(updateInstanceCrossVpcIpRequest?: UpdateInstanceCrossVpcIpRequest): Promise<UpdateInstanceCrossVpcIpResponse> {
        const options = ParamCreater().updateInstanceCrossVpcIp(updateInstanceCrossVpcIpRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改Kafka实例Topic
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改Kafka实例Topic
     * @param {string} instanceId 实例ID。
     * @param {UpdateInstanceTopicReq} updateInstanceTopicRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInstanceTopic(updateInstanceTopicRequest?: UpdateInstanceTopicRequest): Promise<UpdateInstanceTopicResponse> {
        const options = ParamCreater().updateInstanceTopic(updateInstanceTopicRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改用户参数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改用户参数
     * @param {string} engine 消息中间件。
     * @param {string} instanceId 实例ID。
     * @param {string} userName 用户名称。
     * @param {UpdateUserReq} updateInstanceUserRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInstanceUser(updateInstanceUserRequest?: UpdateInstanceUserRequest): Promise<UpdateInstanceUserResponse> {
        const options = ParamCreater().updateInstanceUser(updateInstanceUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改转储任务的配额。
     * 
     * 2022年9月前创建的实例支持调用此接口新增转储任务配额，2022年9月及以后创建的实例，转储任务配额默认为最大值，由于转储任务配额不支持减少，调用此接口修改转储任务配额会报错。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改转储任务的配额
     * @param {string} connectorId 实例转储ID。  请参考[查询实例](ShowInstance.xml)返回的数据。
     * @param {UpdateSinkTaskQuotaReq} updateSinkTaskQuotaRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSinkTaskQuota(updateSinkTaskQuotaRequest?: UpdateSinkTaskQuotaRequest): Promise<UpdateSinkTaskQuotaResponse> {
        const options = ParamCreater().updateSinkTaskQuota(updateSinkTaskQuotaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置用户权限。
     * 
     * Kafka实例开启SASL功能时，才支持多用户管理的功能。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置用户权限
     * @param {string} instanceId 实例ID。
     * @param {UpdateTopicAccessPolicyReq} updateTopicAccessPolicyRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTopicAccessPolicy(updateTopicAccessPolicyRequest?: UpdateTopicAccessPolicyRequest): Promise<UpdateTopicAccessPolicyResponse> {
        const options = ParamCreater().updateTopicAccessPolicy(updateTopicAccessPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改Kafka实例Topic分区的副本。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改Kafka实例Topic分区的副本
     * @param {string} instanceId 实例ID。
     * @param {string} topic Topic名称。
     * @param {ResetReplicaReq} updateTopicReplicaRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTopicReplica(updateTopicReplicaRequest?: UpdateTopicReplicaRequest): Promise<UpdateTopicReplicaResponse> {
        const options = ParamCreater().updateTopicReplica(updateTopicReplicaRequest);

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
        batchCreateOrDeleteKafkaTag(batchCreateOrDeleteKafkaTagRequest?: BatchCreateOrDeleteKafkaTagRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/kafka/{instance_id}/tags/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (batchCreateOrDeleteKafkaTagRequest !== null && batchCreateOrDeleteKafkaTagRequest !== undefined) {
                if (batchCreateOrDeleteKafkaTagRequest instanceof BatchCreateOrDeleteKafkaTagRequest) {
                    instanceId = batchCreateOrDeleteKafkaTagRequest.instanceId;
                    body = batchCreateOrDeleteKafkaTagRequest.body
                } else {
                    instanceId = batchCreateOrDeleteKafkaTagRequest['instance_id'];
                    body = batchCreateOrDeleteKafkaTagRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling batchCreateOrDeleteKafkaTag.');
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
         * 该接口用于向Kafka实例批量删除Group。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteGroup(batchDeleteGroupRequest?: BatchDeleteGroupRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/groups/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (batchDeleteGroupRequest !== null && batchDeleteGroupRequest !== undefined) {
                if (batchDeleteGroupRequest instanceof BatchDeleteGroupRequest) {
                    instanceId = batchDeleteGroupRequest.instanceId;
                    body = batchDeleteGroupRequest.body
                } else {
                    instanceId = batchDeleteGroupRequest['instance_id'];
                    body = batchDeleteGroupRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling batchDeleteGroup.');
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
         * 该接口用于向Kafka实例批量删除Topic。批量删除多个Topic时，部分删除成功，部分失败，此时接口返回删除成功，并在返回中显示删除失败的Topic信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteInstanceTopic(batchDeleteInstanceTopicRequest?: BatchDeleteInstanceTopicRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/topics/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (batchDeleteInstanceTopicRequest !== null && batchDeleteInstanceTopicRequest !== undefined) {
                if (batchDeleteInstanceTopicRequest instanceof BatchDeleteInstanceTopicRequest) {
                    instanceId = batchDeleteInstanceTopicRequest.instanceId;
                    body = batchDeleteInstanceTopicRequest.body
                } else {
                    instanceId = batchDeleteInstanceTopicRequest['instance_id'];
                    body = batchDeleteInstanceTopicRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling batchDeleteInstanceTopic.');
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
         * 批量删除Kafka实例的用户。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteInstanceUsers(batchDeleteInstanceUsersRequest?: BatchDeleteInstanceUsersRequest) {
            const options = {
                method: "PUT",
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

            if (batchDeleteInstanceUsersRequest !== null && batchDeleteInstanceUsersRequest !== undefined) {
                if (batchDeleteInstanceUsersRequest instanceof BatchDeleteInstanceUsersRequest) {
                    instanceId = batchDeleteInstanceUsersRequest.instanceId;
                    body = batchDeleteInstanceUsersRequest.body
                } else {
                    instanceId = batchDeleteInstanceUsersRequest['instance_id'];
                    body = batchDeleteInstanceUsersRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling batchDeleteInstanceUsers.');
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
         * 批量重启或删除实例。
         * 
         * 在实例重启过程中，客户端的生产与消费消息等请求会被拒绝。
         * 
         * 实例删除后，实例中原有的数据将被删除，且没有备份，请谨慎操作。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchRestartOrDeleteInstances(batchRestartOrDeleteInstancesRequest?: BatchRestartOrDeleteInstancesRequest) {
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

            if (batchRestartOrDeleteInstancesRequest !== null && batchRestartOrDeleteInstancesRequest !== undefined) {
                if (batchRestartOrDeleteInstancesRequest instanceof BatchRestartOrDeleteInstancesRequest) {
                    body = batchRestartOrDeleteInstancesRequest.body
                } else {
                    body = batchRestartOrDeleteInstancesRequest['body'];
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
         * 关闭kafka manager，相应的原来开放出的management相关接口也将不可用
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        closeKafkaManager(closeKafkaManagerRequest?: CloseKafkaManagerRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/kafka/instances/{instance_id}/management",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (closeKafkaManagerRequest !== null && closeKafkaManagerRequest !== undefined) {
                if (closeKafkaManagerRequest instanceof CloseKafkaManagerRequest) {
                    instanceId = closeKafkaManagerRequest.instanceId;
                } else {
                    instanceId = closeKafkaManagerRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling closeKafkaManager.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建实例的转储节点。
         * 
         * **当前通过调用API，只支持按需实例创建转储节点。**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createConnector(createConnectorRequest?: CreateConnectorRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/connector",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createConnectorRequest !== null && createConnectorRequest !== undefined) {
                if (createConnectorRequest instanceof CreateConnectorRequest) {
                    instanceId = createConnectorRequest.instanceId;
                    body = createConnectorRequest.body
                } else {
                    instanceId = createConnectorRequest['instance_id'];
                    body = createConnectorRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createConnector.');
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
         * 创建删除实例转储节点的订单。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDeleteConnectorOrder(createDeleteConnectorOrderRequest?: CreateDeleteConnectorOrderRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/kafka/instances/{instance_id}/delete-connector-order",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createDeleteConnectorOrderRequest !== null && createDeleteConnectorOrderRequest !== undefined) {
                if (createDeleteConnectorOrderRequest instanceof CreateDeleteConnectorOrderRequest) {
                    instanceId = createDeleteConnectorOrderRequest.instanceId;
                    body = createDeleteConnectorOrderRequest.body
                } else {
                    instanceId = createDeleteConnectorOrderRequest['instance_id'];
                    body = createDeleteConnectorOrderRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createDeleteConnectorOrder.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建实例。
         * 
         * 该接口支持创建按需和包周期两种计费方式的实例。
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
         * 该接口用于向Kafka实例创建Topic。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createInstanceTopic(createInstanceTopicRequest?: CreateInstanceTopicRequest) {
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

            let body: any;
            
            let instanceId;

            if (createInstanceTopicRequest !== null && createInstanceTopicRequest !== undefined) {
                if (createInstanceTopicRequest instanceof CreateInstanceTopicRequest) {
                    instanceId = createInstanceTopicRequest.instanceId;
                    body = createInstanceTopicRequest.body
                } else {
                    instanceId = createInstanceTopicRequest['instance_id'];
                    body = createInstanceTopicRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createInstanceTopic.');
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
         * 创建Kafka实例的用户，用户可连接开启SASL的Kafka实例。 [ 2023年7月15日前创建的Kafka实例，一个实例最多创建20个用户。2023年7月15日及以后创建的Kafka实例，一个实例最多创建500个用户。](tag:hws,hws_hk)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createInstanceUser(createInstanceUserRequest?: CreateInstanceUserRequest) {
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

            if (createInstanceUserRequest !== null && createInstanceUserRequest !== undefined) {
                if (createInstanceUserRequest instanceof CreateInstanceUserRequest) {
                    instanceId = createInstanceUserRequest.instanceId;
                    body = createInstanceUserRequest.body
                } else {
                    instanceId = createInstanceUserRequest['instance_id'];
                    body = createInstanceUserRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createInstanceUser.');
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
         * 实例创建消费组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createKafkaConsumerGroup(createKafkaConsumerGroupRequest?: CreateKafkaConsumerGroupRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/kafka/instances/{instance_id}/group",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createKafkaConsumerGroupRequest !== null && createKafkaConsumerGroupRequest !== undefined) {
                if (createKafkaConsumerGroupRequest instanceof CreateKafkaConsumerGroupRequest) {
                    instanceId = createKafkaConsumerGroupRequest.instanceId;
                    body = createKafkaConsumerGroupRequest.body
                } else {
                    instanceId = createKafkaConsumerGroupRequest['instance_id'];
                    body = createKafkaConsumerGroupRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createKafkaConsumerGroup.');
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
         * 新增Kafka实例指定Topic分区。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPartition(createPartitionRequest?: CreatePartitionRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/management/topics/{topic}/partitions-reassignment",
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

            if (createPartitionRequest !== null && createPartitionRequest !== undefined) {
                if (createPartitionRequest instanceof CreatePartitionRequest) {
                    instanceId = createPartitionRequest.instanceId;
                    topic = createPartitionRequest.topic;
                    body = createPartitionRequest.body
                } else {
                    instanceId = createPartitionRequest['instance_id'];
                    topic = createPartitionRequest['topic'];
                    body = createPartitionRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createPartition.');
            }
            if (topic === null || topic === undefined) {
            throw new RequiredError('topic','Required parameter topic was null or undefined when calling createPartition.');
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
    
        /**
         * [创建按需计费类型的Kafka实例。](tag:sbc,hk_sbc,cmcc)[创建kafka实例。](tag:otc)
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
         * 该接口用于向Kafka实例提交分区重平衡任务，若成功则返回重平衡任务的job id。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createReassignmentTask(createReassignmentTaskRequest?: CreateReassignmentTaskRequest) {
            const options = {
                method: "POST",
                url: "/v2/kafka/{project_id}/instances/{instance_id}/reassign",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createReassignmentTaskRequest !== null && createReassignmentTaskRequest !== undefined) {
                if (createReassignmentTaskRequest instanceof CreateReassignmentTaskRequest) {
                    instanceId = createReassignmentTaskRequest.instanceId;
                    body = createReassignmentTaskRequest.body
                } else {
                    instanceId = createReassignmentTaskRequest['instance_id'];
                    body = createReassignmentTaskRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createReassignmentTask.');
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
         * 创建转储任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSinkTask(createSinkTaskRequest?: CreateSinkTaskRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/connectors/{connector_id}/sink-tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let connectorId;

            if (createSinkTaskRequest !== null && createSinkTaskRequest !== undefined) {
                if (createSinkTaskRequest instanceof CreateSinkTaskRequest) {
                    connectorId = createSinkTaskRequest.connectorId;
                    body = createSinkTaskRequest.body
                } else {
                    connectorId = createSinkTaskRequest['connector_id'];
                    body = createSinkTaskRequest['body'];
                }
            }

        
            if (connectorId === null || connectorId === undefined) {
            throw new RequiredError('connectorId','Required parameter connectorId was null or undefined when calling createSinkTask.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'connector_id': connectorId, };
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
         * 关闭实例转储节点。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteConnector(deleteConnectorRequest?: DeleteConnectorRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/kafka/instances/{instance_id}/delete-connector",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (deleteConnectorRequest !== null && deleteConnectorRequest !== undefined) {
                if (deleteConnectorRequest instanceof DeleteConnectorRequest) {
                    instanceId = deleteConnectorRequest.instanceId;
                } else {
                    instanceId = deleteConnectorRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteConnector.');
            }

            options.pathParams = { 'instance_id': instanceId, };
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
         * 删除单个转储任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSinkTask(deleteSinkTaskRequest?: DeleteSinkTaskRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/connectors/{connector_id}/sink-tasks/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let connectorId;
            
            let taskId;

            if (deleteSinkTaskRequest !== null && deleteSinkTaskRequest !== undefined) {
                if (deleteSinkTaskRequest instanceof DeleteSinkTaskRequest) {
                    connectorId = deleteSinkTaskRequest.connectorId;
                    taskId = deleteSinkTaskRequest.taskId;
                } else {
                    connectorId = deleteSinkTaskRequest['connector_id'];
                    taskId = deleteSinkTaskRequest['task_id'];
                }
            }

        
            if (connectorId === null || connectorId === undefined) {
            throw new RequiredError('connectorId','Required parameter connectorId was null or undefined when calling deleteSinkTask.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling deleteSinkTask.');
            }

            options.pathParams = { 'connector_id': connectorId,'task_id': taskId, };
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
         * 查询产品规格列表。
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
            
            let productId;

            if (listEngineProductsRequest !== null && listEngineProductsRequest !== undefined) {
                if (listEngineProductsRequest instanceof ListEngineProductsRequest) {
                    engine = listEngineProductsRequest.engine;
                    productId = listEngineProductsRequest.productId;
                } else {
                    engine = listEngineProductsRequest['engine'];
                    productId = listEngineProductsRequest['product_id'];
                }
            }

        
            if (engine === null || engine === undefined) {
            throw new RequiredError('engine','Required parameter engine was null or undefined when calling listEngineProducts.');
            }
            if (productId !== null && productId !== undefined) {
                localVarQueryParameter['product_id'] = productId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'engine': engine, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询所有消费组。
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
            
            let offset;
            
            let limit;
            
            let group;

            if (listInstanceConsumerGroupsRequest !== null && listInstanceConsumerGroupsRequest !== undefined) {
                if (listInstanceConsumerGroupsRequest instanceof ListInstanceConsumerGroupsRequest) {
                    instanceId = listInstanceConsumerGroupsRequest.instanceId;
                    offset = listInstanceConsumerGroupsRequest.offset;
                    limit = listInstanceConsumerGroupsRequest.limit;
                    group = listInstanceConsumerGroupsRequest.group;
                } else {
                    instanceId = listInstanceConsumerGroupsRequest['instance_id'];
                    offset = listInstanceConsumerGroupsRequest['offset'];
                    limit = listInstanceConsumerGroupsRequest['limit'];
                    group = listInstanceConsumerGroupsRequest['group'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceConsumerGroups.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (group !== null && group !== undefined) {
                localVarQueryParameter['group'] = group;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询指定Kafka实例的Topic详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceTopics(listInstanceTopicsRequest?: ListInstanceTopicsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/topics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (listInstanceTopicsRequest !== null && listInstanceTopicsRequest !== undefined) {
                if (listInstanceTopicsRequest instanceof ListInstanceTopicsRequest) {
                    instanceId = listInstanceTopicsRequest.instanceId;
                } else {
                    instanceId = listInstanceTopicsRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceTopics.');
            }

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
            
            let offset;
            
            let limit;

            if (listInstancesRequest !== null && listInstancesRequest !== undefined) {
                if (listInstancesRequest instanceof ListInstancesRequest) {
                    engine = listInstancesRequest.engine;
                    name = listInstancesRequest.name;
                    instanceId = listInstancesRequest.instanceId;
                    status = listInstancesRequest.status;
                    includeFailure = listInstancesRequest.includeFailure;
                    exactMatchName = listInstancesRequest.exactMatchName;
                    enterpriseProjectId = listInstancesRequest.enterpriseProjectId;
                    offset = listInstancesRequest.offset;
                    limit = listInstancesRequest.limit;
                } else {
                    engine = listInstancesRequest['engine'];
                    name = listInstancesRequest['name'];
                    instanceId = listInstancesRequest['instance_id'];
                    status = listInstancesRequest['status'];
                    includeFailure = listInstancesRequest['include_failure'];
                    exactMatchName = listInstancesRequest['exact_match_name'];
                    enterpriseProjectId = listInstancesRequest['enterprise_project_id'];
                    offset = listInstancesRequest['offset'];
                    limit = listInstancesRequest['limit'];
                }
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
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在创建kafka实例时，需要配置订购的产品ID（即product_id），可通过该接口查询产品规格。
         * 
         * 例如，要订购按需计费、基准带宽为100MB的kafka实例，可从接口响应消息中，查找Hourly的消息体，然后找到bandwidth为100MB的记录对应的product_id，该product_id的值即是创建上述kafka实例时需要配置的产品ID。
         * 
         * 同时，unavailable_zones字段表示资源不足的可用区列表，如果为空，则表示所有可用区都有资源，如果不为空，则表示字段值的可用区没有资源。所以必须确保您购买的资源所在的可用区有资源，不在该字段列表内。
         * 
         * [例如，响应消息中bandwidth字段为1200MB的记录，unavailable_zones字段包含cn-east-2b、cn-east-2a和cn-east-2d，表示在华东-上海2的可用区1、可用区2、可用区3都没有该资源。](tag:hws)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProducts(listProductsRequest?: ListProductsRequest) {
            const options = {
                method: "GET",
                url: "/v2/products",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let engine;

            if (listProductsRequest !== null && listProductsRequest !== undefined) {
                if (listProductsRequest instanceof ListProductsRequest) {
                    engine = listProductsRequest.engine;
                } else {
                    engine = listProductsRequest['engine'];
                }
            }

        
            if (engine === null || engine === undefined) {
                throw new RequiredError('engine','Required parameter engine was null or undefined when calling listProducts.');
            }
            if (engine !== null && engine !== undefined) {
                localVarQueryParameter['engine'] = engine;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询转储任务列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSinkTasks(listSinkTasksRequest?: ListSinkTasksRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/connectors/{connector_id}/sink-tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let connectorId;

            if (listSinkTasksRequest !== null && listSinkTasksRequest !== undefined) {
                if (listSinkTasksRequest instanceof ListSinkTasksRequest) {
                    connectorId = listSinkTasksRequest.connectorId;
                } else {
                    connectorId = listSinkTasksRequest['connector_id'];
                }
            }

        
            if (connectorId === null || connectorId === undefined) {
            throw new RequiredError('connectorId','Required parameter connectorId was null or undefined when calling listSinkTasks.');
            }

            options.pathParams = { 'connector_id': connectorId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Topic的分区列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTopicPartitions(listTopicPartitionsRequest?: ListTopicPartitionsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/kafka/instances/{instance_id}/topics/{topic}/partitions",
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

            if (listTopicPartitionsRequest !== null && listTopicPartitionsRequest !== undefined) {
                if (listTopicPartitionsRequest instanceof ListTopicPartitionsRequest) {
                    instanceId = listTopicPartitionsRequest.instanceId;
                    topic = listTopicPartitionsRequest.topic;
                    offset = listTopicPartitionsRequest.offset;
                    limit = listTopicPartitionsRequest.limit;
                } else {
                    instanceId = listTopicPartitionsRequest['instance_id'];
                    topic = listTopicPartitionsRequest['topic'];
                    offset = listTopicPartitionsRequest['offset'];
                    limit = listTopicPartitionsRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listTopicPartitions.');
            }
            if (topic === null || topic === undefined) {
            throw new RequiredError('topic','Required parameter topic was null or undefined when calling listTopicPartitions.');
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
         * 查询Topic的当前生产者列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTopicProducers(listTopicProducersRequest?: ListTopicProducersRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/kafka/instances/{instance_id}/topics/{topic}/producers",
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

            if (listTopicProducersRequest !== null && listTopicProducersRequest !== undefined) {
                if (listTopicProducersRequest instanceof ListTopicProducersRequest) {
                    instanceId = listTopicProducersRequest.instanceId;
                    topic = listTopicProducersRequest.topic;
                    offset = listTopicProducersRequest.offset;
                    limit = listTopicProducersRequest.limit;
                } else {
                    instanceId = listTopicProducersRequest['instance_id'];
                    topic = listTopicProducersRequest['topic'];
                    offset = listTopicProducersRequest['offset'];
                    limit = listTopicProducersRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listTopicProducers.');
            }
            if (topic === null || topic === undefined) {
            throw new RequiredError('topic','Required parameter topic was null or undefined when calling listTopicProducers.');
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
         * 修改实例配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        modifyInstanceConfigs(modifyInstanceConfigsRequest?: ModifyInstanceConfigsRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instances/{instance_id}/configs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (modifyInstanceConfigsRequest !== null && modifyInstanceConfigsRequest !== undefined) {
                if (modifyInstanceConfigsRequest instanceof ModifyInstanceConfigsRequest) {
                    instanceId = modifyInstanceConfigsRequest.instanceId;
                    body = modifyInstanceConfigsRequest.body
                } else {
                    instanceId = modifyInstanceConfigsRequest['instance_id'];
                    body = modifyInstanceConfigsRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling modifyInstanceConfigs.');
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
         * 重置Manager密码。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetManagerPassword(resetManagerPasswordRequest?: ResetManagerPasswordRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instances/{instance_id}/kafka-manager-password",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (resetManagerPasswordRequest !== null && resetManagerPasswordRequest !== undefined) {
                if (resetManagerPasswordRequest instanceof ResetManagerPasswordRequest) {
                    instanceId = resetManagerPasswordRequest.instanceId;
                    body = resetManagerPasswordRequest.body
                } else {
                    instanceId = resetManagerPasswordRequest['instance_id'];
                    body = resetManagerPasswordRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling resetManagerPassword.');
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
         * Kafka实例不支持在线重置消费进度。在执行重置消费进度之前，必须停止被重置消费组客户端。
         * 
         * 停止待重置消费组客户端，然后等待一段时间（即ConsumerConfig.SESSION_TIMEOUT_MS_CONFIG配置的时间，默认为1000毫秒）后，服务端才认为此消费组客户端已下线。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetMessageOffset(resetMessageOffsetRequest?: ResetMessageOffsetRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/management/groups/{group}/reset-message-offset",
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

            if (resetMessageOffsetRequest !== null && resetMessageOffsetRequest !== undefined) {
                if (resetMessageOffsetRequest instanceof ResetMessageOffsetRequest) {
                    instanceId = resetMessageOffsetRequest.instanceId;
                    group = resetMessageOffsetRequest.group;
                    body = resetMessageOffsetRequest.body
                } else {
                    instanceId = resetMessageOffsetRequest['instance_id'];
                    group = resetMessageOffsetRequest['group'];
                    body = resetMessageOffsetRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling resetMessageOffset.');
            }
            if (group === null || group === undefined) {
            throw new RequiredError('group','Required parameter group was null or undefined when calling resetMessageOffset.');
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
         * 重置密码。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetPassword(resetPasswordRequest?: ResetPasswordRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/password",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (resetPasswordRequest !== null && resetPasswordRequest !== undefined) {
                if (resetPasswordRequest instanceof ResetPasswordRequest) {
                    instanceId = resetPasswordRequest.instanceId;
                    body = resetPasswordRequest.body
                } else {
                    instanceId = resetPasswordRequest['instance_id'];
                    body = resetPasswordRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling resetPassword.');
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
         * 重置用户密码
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetUserPasswrod(resetUserPasswrodRequest?: ResetUserPasswrodRequest) {
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

            if (resetUserPasswrodRequest !== null && resetUserPasswrodRequest !== undefined) {
                if (resetUserPasswrodRequest instanceof ResetUserPasswrodRequest) {
                    instanceId = resetUserPasswrodRequest.instanceId;
                    userName = resetUserPasswrodRequest.userName;
                    body = resetUserPasswrodRequest.body
                } else {
                    instanceId = resetUserPasswrodRequest['instance_id'];
                    userName = resetUserPasswrodRequest['user_name'];
                    body = resetUserPasswrodRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling resetUserPasswrod.');
            }
            if (userName === null || userName === undefined) {
            throw new RequiredError('userName','Required parameter userName was null or undefined when calling resetUserPasswrod.');
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
         * 实例规格变更。[当前通过调用API，只支持按需实例进行实例规格变更。](tag:hws,hws_hk,ctc,cmcc,hws_eu)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resizeEngineInstance(resizeEngineInstanceRequest?: ResizeEngineInstanceRequest) {
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

            if (resizeEngineInstanceRequest !== null && resizeEngineInstanceRequest !== undefined) {
                if (resizeEngineInstanceRequest instanceof ResizeEngineInstanceRequest) {
                    engine = resizeEngineInstanceRequest.engine;
                    instanceId = resizeEngineInstanceRequest.instanceId;
                    body = resizeEngineInstanceRequest.body
                } else {
                    engine = resizeEngineInstanceRequest['engine'];
                    instanceId = resizeEngineInstanceRequest['instance_id'];
                    body = resizeEngineInstanceRequest['body'];
                }
            }

        
            if (engine === null || engine === undefined) {
            throw new RequiredError('engine','Required parameter engine was null or undefined when calling resizeEngineInstance.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling resizeEngineInstance.');
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
         * 实例规格变更。[当前通过调用API，只支持按需实例进行实例规格变更。](tag:hws,hws_hk,ctc,cmcc,hws_eu)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resizeInstance(resizeInstanceRequest?: ResizeInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/extend",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (resizeInstanceRequest !== null && resizeInstanceRequest !== undefined) {
                if (resizeInstanceRequest instanceof ResizeInstanceRequest) {
                    instanceId = resizeInstanceRequest.instanceId;
                    body = resizeInstanceRequest.body
                } else {
                    instanceId = resizeInstanceRequest['instance_id'];
                    body = resizeInstanceRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling resizeInstance.');
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
         * 重启Manager。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restartManager(restartManagerRequest?: RestartManagerRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instances/{instance_id}/restart-kafka-manager",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (restartManagerRequest !== null && restartManagerRequest !== undefined) {
                if (restartManagerRequest instanceof RestartManagerRequest) {
                    instanceId = restartManagerRequest.instanceId;
                } else {
                    instanceId = restartManagerRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling restartManager.');
            }

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
         * 查询Kafka集群元数据信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCluster(showClusterRequest?: ShowClusterRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/management/cluster",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showClusterRequest !== null && showClusterRequest !== undefined) {
                if (showClusterRequest instanceof ShowClusterRequest) {
                    instanceId = showClusterRequest.instanceId;
                } else {
                    instanceId = showClusterRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showCluster.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Kafka实例的协调器信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCoordinators(showCoordinatorsRequest?: ShowCoordinatorsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/management/coordinators",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showCoordinatorsRequest !== null && showCoordinatorsRequest !== undefined) {
                if (showCoordinatorsRequest instanceof ShowCoordinatorsRequest) {
                    instanceId = showCoordinatorsRequest.instanceId;
                } else {
                    instanceId = showCoordinatorsRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showCoordinators.');
            }

            options.pathParams = { 'instance_id': instanceId, };
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

            if (showEngineInstanceExtendProductInfoRequest !== null && showEngineInstanceExtendProductInfoRequest !== undefined) {
                if (showEngineInstanceExtendProductInfoRequest instanceof ShowEngineInstanceExtendProductInfoRequest) {
                    engine = showEngineInstanceExtendProductInfoRequest.engine;
                    instanceId = showEngineInstanceExtendProductInfoRequest.instanceId;
                    type = showEngineInstanceExtendProductInfoRequest.type;
                } else {
                    engine = showEngineInstanceExtendProductInfoRequest['engine'];
                    instanceId = showEngineInstanceExtendProductInfoRequest['instance_id'];
                    type = showEngineInstanceExtendProductInfoRequest['type'];
                }
            }

        
            if (engine === null || engine === undefined) {
            throw new RequiredError('engine','Required parameter engine was null or undefined when calling showEngineInstanceExtendProductInfo.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showEngineInstanceExtendProductInfo.');
            }
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling showEngineInstanceExtendProductInfo.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'engine': engine,'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询消费组信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showGroups(showGroupsRequest?: ShowGroupsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/management/groups/{group}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let group;

            if (showGroupsRequest !== null && showGroupsRequest !== undefined) {
                if (showGroupsRequest instanceof ShowGroupsRequest) {
                    instanceId = showGroupsRequest.instanceId;
                    group = showGroupsRequest.group;
                } else {
                    instanceId = showGroupsRequest['instance_id'];
                    group = showGroupsRequest['group'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showGroups.');
            }
            if (group === null || group === undefined) {
            throw new RequiredError('group','Required parameter group was null or undefined when calling showGroups.');
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
         * 获取实例配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceConfigs(showInstanceConfigsRequest?: ShowInstanceConfigsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/configs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showInstanceConfigsRequest !== null && showInstanceConfigsRequest !== undefined) {
                if (showInstanceConfigsRequest instanceof ShowInstanceConfigsRequest) {
                    instanceId = showInstanceConfigsRequest.instanceId;
                } else {
                    instanceId = showInstanceConfigsRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInstanceConfigs.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例的扩容规格列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceExtendProductInfo(showInstanceExtendProductInfoRequest?: ShowInstanceExtendProductInfoRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/extend",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let type;
            
            let engine;

            if (showInstanceExtendProductInfoRequest !== null && showInstanceExtendProductInfoRequest !== undefined) {
                if (showInstanceExtendProductInfoRequest instanceof ShowInstanceExtendProductInfoRequest) {
                    instanceId = showInstanceExtendProductInfoRequest.instanceId;
                    type = showInstanceExtendProductInfoRequest.type;
                    engine = showInstanceExtendProductInfoRequest.engine;
                } else {
                    instanceId = showInstanceExtendProductInfoRequest['instance_id'];
                    type = showInstanceExtendProductInfoRequest['type'];
                    engine = showInstanceExtendProductInfoRequest['engine'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInstanceExtendProductInfo.');
            }
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling showInstanceExtendProductInfo.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (engine === null || engine === undefined) {
                throw new RequiredError('engine','Required parameter engine was null or undefined when calling showInstanceExtendProductInfo.');
            }
            if (engine !== null && engine !== undefined) {
                localVarQueryParameter['engine'] = engine;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询消息的偏移量和消息内容。
         * 先根据时间戳查询消息的偏移量，再根据偏移量查询消息内容。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceMessages(showInstanceMessagesRequest?: ShowInstanceMessagesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/messages",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let topic;
            
            let asc;
            
            let startTime;
            
            let endTime;
            
            let limit;
            
            let offset;
            
            let download;
            
            let messageOffset;
            
            let partition;
            
            let keyword;

            if (showInstanceMessagesRequest !== null && showInstanceMessagesRequest !== undefined) {
                if (showInstanceMessagesRequest instanceof ShowInstanceMessagesRequest) {
                    instanceId = showInstanceMessagesRequest.instanceId;
                    topic = showInstanceMessagesRequest.topic;
                    asc = showInstanceMessagesRequest.asc;
                    startTime = showInstanceMessagesRequest.startTime;
                    endTime = showInstanceMessagesRequest.endTime;
                    limit = showInstanceMessagesRequest.limit;
                    offset = showInstanceMessagesRequest.offset;
                    download = showInstanceMessagesRequest.download;
                    messageOffset = showInstanceMessagesRequest.messageOffset;
                    partition = showInstanceMessagesRequest.partition;
                    keyword = showInstanceMessagesRequest.keyword;
                } else {
                    instanceId = showInstanceMessagesRequest['instance_id'];
                    topic = showInstanceMessagesRequest['topic'];
                    asc = showInstanceMessagesRequest['asc'];
                    startTime = showInstanceMessagesRequest['start_time'];
                    endTime = showInstanceMessagesRequest['end_time'];
                    limit = showInstanceMessagesRequest['limit'];
                    offset = showInstanceMessagesRequest['offset'];
                    download = showInstanceMessagesRequest['download'];
                    messageOffset = showInstanceMessagesRequest['message_offset'];
                    partition = showInstanceMessagesRequest['partition'];
                    keyword = showInstanceMessagesRequest['keyword'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInstanceMessages.');
            }
            if (topic === null || topic === undefined) {
                throw new RequiredError('topic','Required parameter topic was null or undefined when calling showInstanceMessages.');
            }
            if (topic !== null && topic !== undefined) {
                localVarQueryParameter['topic'] = topic;
            }
            if (asc !== null && asc !== undefined) {
                localVarQueryParameter['asc'] = asc;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
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
            if (download !== null && download !== undefined) {
                localVarQueryParameter['download'] = download;
            }
            if (messageOffset !== null && messageOffset !== undefined) {
                localVarQueryParameter['message_offset'] = messageOffset;
            }
            if (partition !== null && partition !== undefined) {
                localVarQueryParameter['partition'] = partition;
            }
            if (keyword !== null && keyword !== undefined) {
                localVarQueryParameter['keyword'] = keyword;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Kafka实例Topic详细信息。(单个实例调用不要超过1s一次)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceTopicDetail(showInstanceTopicDetailRequest?: ShowInstanceTopicDetailRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/management/topics/{topic}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let topic;

            if (showInstanceTopicDetailRequest !== null && showInstanceTopicDetailRequest !== undefined) {
                if (showInstanceTopicDetailRequest instanceof ShowInstanceTopicDetailRequest) {
                    instanceId = showInstanceTopicDetailRequest.instanceId;
                    topic = showInstanceTopicDetailRequest.topic;
                } else {
                    instanceId = showInstanceTopicDetailRequest['instance_id'];
                    topic = showInstanceTopicDetailRequest['topic'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInstanceTopicDetail.');
            }
            if (topic === null || topic === undefined) {
            throw new RequiredError('topic','Required parameter topic was null or undefined when calling showInstanceTopicDetail.');
            }

            options.pathParams = { 'instance_id': instanceId,'topic': topic, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询用户列表。
         * 
         * Kafka实例开启SASL功能时，才支持多用户管理的功能。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceUsers(showInstanceUsersRequest?: ShowInstanceUsersRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showInstanceUsersRequest !== null && showInstanceUsersRequest !== undefined) {
                if (showInstanceUsersRequest instanceof ShowInstanceUsersRequest) {
                    instanceId = showInstanceUsersRequest.instanceId;
                } else {
                    instanceId = showInstanceUsersRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInstanceUsers.');
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
        showKafkaProjectTags() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/kafka/tags",
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
         * 查询实例标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showKafkaTags(showKafkaTagsRequest?: ShowKafkaTagsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/kafka/{instance_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showKafkaTagsRequest !== null && showKafkaTagsRequest !== undefined) {
                if (showKafkaTagsRequest instanceof ShowKafkaTagsRequest) {
                    instanceId = showKafkaTagsRequest.instanceId;
                } else {
                    instanceId = showKafkaTagsRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showKafkaTags.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询topic在Broker上磁盘占用情况。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showKafkaTopicPartitionDiskusage(showKafkaTopicPartitionDiskusageRequest?: ShowKafkaTopicPartitionDiskusageRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/topics/diskusage",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let minSize;
            
            let top;
            
            let percentage;

            if (showKafkaTopicPartitionDiskusageRequest !== null && showKafkaTopicPartitionDiskusageRequest !== undefined) {
                if (showKafkaTopicPartitionDiskusageRequest instanceof ShowKafkaTopicPartitionDiskusageRequest) {
                    instanceId = showKafkaTopicPartitionDiskusageRequest.instanceId;
                    minSize = showKafkaTopicPartitionDiskusageRequest.minSize;
                    top = showKafkaTopicPartitionDiskusageRequest.top;
                    percentage = showKafkaTopicPartitionDiskusageRequest.percentage;
                } else {
                    instanceId = showKafkaTopicPartitionDiskusageRequest['instance_id'];
                    minSize = showKafkaTopicPartitionDiskusageRequest['minSize'];
                    top = showKafkaTopicPartitionDiskusageRequest['top'];
                    percentage = showKafkaTopicPartitionDiskusageRequest['percentage'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showKafkaTopicPartitionDiskusage.');
            }
            if (minSize !== null && minSize !== undefined) {
                localVarQueryParameter['minSize'] = minSize;
            }
            if (top !== null && top !== undefined) {
                localVarQueryParameter['top'] = top;
            }
            if (percentage !== null && percentage !== undefined) {
                localVarQueryParameter['percentage'] = percentage;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询维护时间窗开始时间和结束时间。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMaintainWindows() {
            const options = {
                method: "GET",
                url: "/v2/instances/maintain-windows",
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
         * 查询分区指定时间段的消息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMessages(showMessagesRequest?: ShowMessagesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/management/topics/{topic}/messages",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let topic;
            
            let startTime;
            
            let endTime;
            
            let limit;
            
            let offset;
            
            let partition;

            if (showMessagesRequest !== null && showMessagesRequest !== undefined) {
                if (showMessagesRequest instanceof ShowMessagesRequest) {
                    instanceId = showMessagesRequest.instanceId;
                    topic = showMessagesRequest.topic;
                    startTime = showMessagesRequest.startTime;
                    endTime = showMessagesRequest.endTime;
                    limit = showMessagesRequest.limit;
                    offset = showMessagesRequest.offset;
                    partition = showMessagesRequest.partition;
                } else {
                    instanceId = showMessagesRequest['instance_id'];
                    topic = showMessagesRequest['topic'];
                    startTime = showMessagesRequest['start_time'];
                    endTime = showMessagesRequest['end_time'];
                    limit = showMessagesRequest['limit'];
                    offset = showMessagesRequest['offset'];
                    partition = showMessagesRequest['partition'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showMessages.');
            }
            if (topic === null || topic === undefined) {
            throw new RequiredError('topic','Required parameter topic was null or undefined when calling showMessages.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
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
            if (partition !== null && partition !== undefined) {
                localVarQueryParameter['partition'] = partition;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'topic': topic, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询分区最早消息的位置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPartitionBeginningMessage(showPartitionBeginningMessageRequest?: ShowPartitionBeginningMessageRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/management/topics/{topic}/partitions/{partition}/beginning-message",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let topic;
            
            let partition;

            if (showPartitionBeginningMessageRequest !== null && showPartitionBeginningMessageRequest !== undefined) {
                if (showPartitionBeginningMessageRequest instanceof ShowPartitionBeginningMessageRequest) {
                    instanceId = showPartitionBeginningMessageRequest.instanceId;
                    topic = showPartitionBeginningMessageRequest.topic;
                    partition = showPartitionBeginningMessageRequest.partition;
                } else {
                    instanceId = showPartitionBeginningMessageRequest['instance_id'];
                    topic = showPartitionBeginningMessageRequest['topic'];
                    partition = showPartitionBeginningMessageRequest['partition'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showPartitionBeginningMessage.');
            }
            if (topic === null || topic === undefined) {
            throw new RequiredError('topic','Required parameter topic was null or undefined when calling showPartitionBeginningMessage.');
            }
            if (partition === null || partition === undefined) {
            throw new RequiredError('partition','Required parameter partition was null or undefined when calling showPartitionBeginningMessage.');
            }

            options.pathParams = { 'instance_id': instanceId,'topic': topic,'partition': partition, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询分区最新消息的位置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPartitionEndMessage(showPartitionEndMessageRequest?: ShowPartitionEndMessageRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/management/topics/{topic}/partitions/{partition}/end-message",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let topic;
            
            let partition;

            if (showPartitionEndMessageRequest !== null && showPartitionEndMessageRequest !== undefined) {
                if (showPartitionEndMessageRequest instanceof ShowPartitionEndMessageRequest) {
                    instanceId = showPartitionEndMessageRequest.instanceId;
                    topic = showPartitionEndMessageRequest.topic;
                    partition = showPartitionEndMessageRequest.partition;
                } else {
                    instanceId = showPartitionEndMessageRequest['instance_id'];
                    topic = showPartitionEndMessageRequest['topic'];
                    partition = showPartitionEndMessageRequest['partition'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showPartitionEndMessage.');
            }
            if (topic === null || topic === undefined) {
            throw new RequiredError('topic','Required parameter topic was null or undefined when calling showPartitionEndMessage.');
            }
            if (partition === null || partition === undefined) {
            throw new RequiredError('partition','Required parameter partition was null or undefined when calling showPartitionEndMessage.');
            }

            options.pathParams = { 'instance_id': instanceId,'topic': topic,'partition': partition, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询分区指定偏移量的消息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPartitionMessage(showPartitionMessageRequest?: ShowPartitionMessageRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/management/topics/{topic}/partitions/{partition}/message",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let topic;
            
            let partition;
            
            let messageOffset;

            if (showPartitionMessageRequest !== null && showPartitionMessageRequest !== undefined) {
                if (showPartitionMessageRequest instanceof ShowPartitionMessageRequest) {
                    instanceId = showPartitionMessageRequest.instanceId;
                    topic = showPartitionMessageRequest.topic;
                    partition = showPartitionMessageRequest.partition;
                    messageOffset = showPartitionMessageRequest.messageOffset;
                } else {
                    instanceId = showPartitionMessageRequest['instance_id'];
                    topic = showPartitionMessageRequest['topic'];
                    partition = showPartitionMessageRequest['partition'];
                    messageOffset = showPartitionMessageRequest['message_offset'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showPartitionMessage.');
            }
            if (topic === null || topic === undefined) {
            throw new RequiredError('topic','Required parameter topic was null or undefined when calling showPartitionMessage.');
            }
            if (partition === null || partition === undefined) {
            throw new RequiredError('partition','Required parameter partition was null or undefined when calling showPartitionMessage.');
            }
            if (messageOffset === null || messageOffset === undefined) {
                throw new RequiredError('messageOffset','Required parameter messageOffset was null or undefined when calling showPartitionMessage.');
            }
            if (messageOffset !== null && messageOffset !== undefined) {
                localVarQueryParameter['message_offset'] = messageOffset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'topic': topic,'partition': partition, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询单个转储任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSinkTaskDetail(showSinkTaskDetailRequest?: ShowSinkTaskDetailRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/connectors/{connector_id}/sink-tasks/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let connectorId;
            
            let taskId;
            
            let topicInfo;

            if (showSinkTaskDetailRequest !== null && showSinkTaskDetailRequest !== undefined) {
                if (showSinkTaskDetailRequest instanceof ShowSinkTaskDetailRequest) {
                    connectorId = showSinkTaskDetailRequest.connectorId;
                    taskId = showSinkTaskDetailRequest.taskId;
                    topicInfo = showSinkTaskDetailRequest.topicInfo;
                } else {
                    connectorId = showSinkTaskDetailRequest['connector_id'];
                    taskId = showSinkTaskDetailRequest['task_id'];
                    topicInfo = showSinkTaskDetailRequest['topic-info'];
                }
            }

        
            if (connectorId === null || connectorId === undefined) {
            throw new RequiredError('connectorId','Required parameter connectorId was null or undefined when calling showSinkTaskDetail.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showSinkTaskDetail.');
            }
            if (topicInfo !== null && topicInfo !== undefined) {
                localVarQueryParameter['topic-info'] = topicInfo;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'connector_id': connectorId,'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询用户权限。
         * 
         * Kafka实例开启SASL功能时，才支持多用户管理的功能。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTopicAccessPolicy(showTopicAccessPolicyRequest?: ShowTopicAccessPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/instances/{instance_id}/topics/{topic_name}/accesspolicy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let topicName;

            if (showTopicAccessPolicyRequest !== null && showTopicAccessPolicyRequest !== undefined) {
                if (showTopicAccessPolicyRequest instanceof ShowTopicAccessPolicyRequest) {
                    instanceId = showTopicAccessPolicyRequest.instanceId;
                    topicName = showTopicAccessPolicyRequest.topicName;
                } else {
                    instanceId = showTopicAccessPolicyRequest['instance_id'];
                    topicName = showTopicAccessPolicyRequest['topic_name'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showTopicAccessPolicy.');
            }
            if (topicName === null || topicName === undefined) {
            throw new RequiredError('topicName','Required parameter topicName was null or undefined when calling showTopicAccessPolicy.');
            }

            options.pathParams = { 'instance_id': instanceId,'topic_name': topicName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改实例信息。
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
         * 开启或关闭实例自动创建topic功能。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInstanceAutoCreateTopic(updateInstanceAutoCreateTopicRequest?: UpdateInstanceAutoCreateTopicRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/autotopic",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updateInstanceAutoCreateTopicRequest !== null && updateInstanceAutoCreateTopicRequest !== undefined) {
                if (updateInstanceAutoCreateTopicRequest instanceof UpdateInstanceAutoCreateTopicRequest) {
                    instanceId = updateInstanceAutoCreateTopicRequest.instanceId;
                    body = updateInstanceAutoCreateTopicRequest.body
                } else {
                    instanceId = updateInstanceAutoCreateTopicRequest['instance_id'];
                    body = updateInstanceAutoCreateTopicRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateInstanceAutoCreateTopic.');
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
         * 编辑消费组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInstanceConsumerGroup(updateInstanceConsumerGroupRequest?: UpdateInstanceConsumerGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{engine}/{project_id}/instances/{instance_id}/groups/{group}",
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

            if (updateInstanceConsumerGroupRequest !== null && updateInstanceConsumerGroupRequest !== undefined) {
                if (updateInstanceConsumerGroupRequest instanceof UpdateInstanceConsumerGroupRequest) {
                    engine = updateInstanceConsumerGroupRequest.engine;
                    instanceId = updateInstanceConsumerGroupRequest.instanceId;
                    group = updateInstanceConsumerGroupRequest.group;
                    body = updateInstanceConsumerGroupRequest.body
                } else {
                    engine = updateInstanceConsumerGroupRequest['engine'];
                    instanceId = updateInstanceConsumerGroupRequest['instance_id'];
                    group = updateInstanceConsumerGroupRequest['group'];
                    body = updateInstanceConsumerGroupRequest['body'];
                }
            }

        
            if (engine === null || engine === undefined) {
            throw new RequiredError('engine','Required parameter engine was null or undefined when calling updateInstanceConsumerGroup.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateInstanceConsumerGroup.');
            }
            if (group === null || group === undefined) {
            throw new RequiredError('group','Required parameter group was null or undefined when calling updateInstanceConsumerGroup.');
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
         * 修改实例跨VPC访问的内网IP。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInstanceCrossVpcIp(updateInstanceCrossVpcIpRequest?: UpdateInstanceCrossVpcIpRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/crossvpc/modify",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updateInstanceCrossVpcIpRequest !== null && updateInstanceCrossVpcIpRequest !== undefined) {
                if (updateInstanceCrossVpcIpRequest instanceof UpdateInstanceCrossVpcIpRequest) {
                    instanceId = updateInstanceCrossVpcIpRequest.instanceId;
                    body = updateInstanceCrossVpcIpRequest.body
                } else {
                    instanceId = updateInstanceCrossVpcIpRequest['instance_id'];
                    body = updateInstanceCrossVpcIpRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateInstanceCrossVpcIp.');
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
         * 修改Kafka实例Topic
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInstanceTopic(updateInstanceTopicRequest?: UpdateInstanceTopicRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instances/{instance_id}/topics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updateInstanceTopicRequest !== null && updateInstanceTopicRequest !== undefined) {
                if (updateInstanceTopicRequest instanceof UpdateInstanceTopicRequest) {
                    instanceId = updateInstanceTopicRequest.instanceId;
                    body = updateInstanceTopicRequest.body
                } else {
                    instanceId = updateInstanceTopicRequest['instance_id'];
                    body = updateInstanceTopicRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateInstanceTopic.');
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
         * 修改用户参数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInstanceUser(updateInstanceUserRequest?: UpdateInstanceUserRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{engine}/{project_id}/instances/{instance_id}/users/{user_name}",
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
            
            let userName;

            if (updateInstanceUserRequest !== null && updateInstanceUserRequest !== undefined) {
                if (updateInstanceUserRequest instanceof UpdateInstanceUserRequest) {
                    engine = updateInstanceUserRequest.engine;
                    instanceId = updateInstanceUserRequest.instanceId;
                    userName = updateInstanceUserRequest.userName;
                    body = updateInstanceUserRequest.body
                } else {
                    engine = updateInstanceUserRequest['engine'];
                    instanceId = updateInstanceUserRequest['instance_id'];
                    userName = updateInstanceUserRequest['user_name'];
                    body = updateInstanceUserRequest['body'];
                }
            }

        
            if (engine === null || engine === undefined) {
            throw new RequiredError('engine','Required parameter engine was null or undefined when calling updateInstanceUser.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateInstanceUser.');
            }
            if (userName === null || userName === undefined) {
            throw new RequiredError('userName','Required parameter userName was null or undefined when calling updateInstanceUser.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'engine': engine,'instance_id': instanceId,'user_name': userName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改转储任务的配额。
         * 
         * 2022年9月前创建的实例支持调用此接口新增转储任务配额，2022年9月及以后创建的实例，转储任务配额默认为最大值，由于转储任务配额不支持减少，调用此接口修改转储任务配额会报错。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSinkTaskQuota(updateSinkTaskQuotaRequest?: UpdateSinkTaskQuotaRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/connectors/{connector_id}/sink-tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let connectorId;

            if (updateSinkTaskQuotaRequest !== null && updateSinkTaskQuotaRequest !== undefined) {
                if (updateSinkTaskQuotaRequest instanceof UpdateSinkTaskQuotaRequest) {
                    connectorId = updateSinkTaskQuotaRequest.connectorId;
                    body = updateSinkTaskQuotaRequest.body
                } else {
                    connectorId = updateSinkTaskQuotaRequest['connector_id'];
                    body = updateSinkTaskQuotaRequest['body'];
                }
            }

        
            if (connectorId === null || connectorId === undefined) {
            throw new RequiredError('connectorId','Required parameter connectorId was null or undefined when calling updateSinkTaskQuota.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'connector_id': connectorId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设置用户权限。
         * 
         * Kafka实例开启SASL功能时，才支持多用户管理的功能。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTopicAccessPolicy(updateTopicAccessPolicyRequest?: UpdateTopicAccessPolicyRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/instances/{instance_id}/topics/accesspolicy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updateTopicAccessPolicyRequest !== null && updateTopicAccessPolicyRequest !== undefined) {
                if (updateTopicAccessPolicyRequest instanceof UpdateTopicAccessPolicyRequest) {
                    instanceId = updateTopicAccessPolicyRequest.instanceId;
                    body = updateTopicAccessPolicyRequest.body
                } else {
                    instanceId = updateTopicAccessPolicyRequest['instance_id'];
                    body = updateTopicAccessPolicyRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateTopicAccessPolicy.');
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
         * 修改Kafka实例Topic分区的副本。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTopicReplica(updateTopicReplicaRequest?: UpdateTopicReplicaRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/management/topics/{topic}/replicas-reassignment",
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

            if (updateTopicReplicaRequest !== null && updateTopicReplicaRequest !== undefined) {
                if (updateTopicReplicaRequest instanceof UpdateTopicReplicaRequest) {
                    instanceId = updateTopicReplicaRequest.instanceId;
                    topic = updateTopicReplicaRequest.topic;
                    body = updateTopicReplicaRequest.body
                } else {
                    instanceId = updateTopicReplicaRequest['instance_id'];
                    topic = updateTopicReplicaRequest['topic'];
                    body = updateTopicReplicaRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateTopicReplica.');
            }
            if (topic === null || topic === undefined) {
            throw new RequiredError('topic','Required parameter topic was null or undefined when calling updateTopicReplica.');
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

function newClient(client: HcClient): KafkaClient {
    return new KafkaClient(client);
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