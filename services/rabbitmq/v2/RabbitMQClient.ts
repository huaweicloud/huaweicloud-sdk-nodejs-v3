import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AMQPUser } from './model/AMQPUser';
import { AMQPUserPerm } from './model/AMQPUserPerm';
import { BatchCreateOrDeleteRabbitMqTagRequest } from './model/BatchCreateOrDeleteRabbitMqTagRequest';
import { BatchCreateOrDeleteRabbitMqTagResponse } from './model/BatchCreateOrDeleteRabbitMqTagResponse';
import { BatchCreateOrDeleteTagReq } from './model/BatchCreateOrDeleteTagReq';
import { BatchDeleteBody } from './model/BatchDeleteBody';
import { BatchDeleteExchangesRequest } from './model/BatchDeleteExchangesRequest';
import { BatchDeleteExchangesResponse } from './model/BatchDeleteExchangesResponse';
import { BatchDeleteQueuesRequest } from './model/BatchDeleteQueuesRequest';
import { BatchDeleteQueuesResponse } from './model/BatchDeleteQueuesResponse';
import { BatchDeleteVhostsRequest } from './model/BatchDeleteVhostsRequest';
import { BatchDeleteVhostsResponse } from './model/BatchDeleteVhostsResponse';
import { BatchRestartOrDeleteInstanceReq } from './model/BatchRestartOrDeleteInstanceReq';
import { BatchRestartOrDeleteInstanceRespResults } from './model/BatchRestartOrDeleteInstanceRespResults';
import { BatchRestartOrDeleteInstancesRequest } from './model/BatchRestartOrDeleteInstancesRequest';
import { BatchRestartOrDeleteInstancesResponse } from './model/BatchRestartOrDeleteInstancesResponse';
import { BindingsDetails } from './model/BindingsDetails';
import { BssParam } from './model/BssParam';
import { ChannelDetails } from './model/ChannelDetails';
import { ConsumerDetails } from './model/ConsumerDetails';
import { CreateBindingBody } from './model/CreateBindingBody';
import { CreateBindingRequest } from './model/CreateBindingRequest';
import { CreateBindingResponse } from './model/CreateBindingResponse';
import { CreateExchangeBody } from './model/CreateExchangeBody';
import { CreateExchangeRequest } from './model/CreateExchangeRequest';
import { CreateExchangeResponse } from './model/CreateExchangeResponse';
import { CreateInstanceReq } from './model/CreateInstanceReq';
import { CreatePostPaidInstanceByEngineRequest } from './model/CreatePostPaidInstanceByEngineRequest';
import { CreatePostPaidInstanceByEngineResponse } from './model/CreatePostPaidInstanceByEngineResponse';
import { CreatePostPaidInstanceRequest } from './model/CreatePostPaidInstanceRequest';
import { CreatePostPaidInstanceResponse } from './model/CreatePostPaidInstanceResponse';
import { CreateQueueBody } from './model/CreateQueueBody';
import { CreateQueueRequest } from './model/CreateQueueRequest';
import { CreateQueueResponse } from './model/CreateQueueResponse';
import { CreateUserRequest } from './model/CreateUserRequest';
import { CreateUserResponse } from './model/CreateUserResponse';
import { CreateVhostBody } from './model/CreateVhostBody';
import { CreateVhostRequest } from './model/CreateVhostRequest';
import { CreateVhostResponse } from './model/CreateVhostResponse';
import { DeleteBackgroundTaskRequest } from './model/DeleteBackgroundTaskRequest';
import { DeleteBackgroundTaskResponse } from './model/DeleteBackgroundTaskResponse';
import { DeleteBindingRequest } from './model/DeleteBindingRequest';
import { DeleteBindingResponse } from './model/DeleteBindingResponse';
import { DeleteInstanceRequest } from './model/DeleteInstanceRequest';
import { DeleteInstanceResponse } from './model/DeleteInstanceResponse';
import { DeleteQueueInfoRequest } from './model/DeleteQueueInfoRequest';
import { DeleteQueueInfoResponse } from './model/DeleteQueueInfoResponse';
import { DeleteUserRequest } from './model/DeleteUserRequest';
import { DeleteUserResponse } from './model/DeleteUserResponse';
import { ExchangeDetails } from './model/ExchangeDetails';
import { ListAvailableZonesRequest } from './model/ListAvailableZonesRequest';
import { ListAvailableZonesRespAvailableZones } from './model/ListAvailableZonesRespAvailableZones';
import { ListAvailableZonesResponse } from './model/ListAvailableZonesResponse';
import { ListBackgroundTasksRequest } from './model/ListBackgroundTasksRequest';
import { ListBackgroundTasksRespTasks } from './model/ListBackgroundTasksRespTasks';
import { ListBackgroundTasksResponse } from './model/ListBackgroundTasksResponse';
import { ListBindingsRequest } from './model/ListBindingsRequest';
import { ListBindingsResponse } from './model/ListBindingsResponse';
import { ListEngineIosEntity } from './model/ListEngineIosEntity';
import { ListEngineProductsEntity } from './model/ListEngineProductsEntity';
import { ListEngineProductsRequest } from './model/ListEngineProductsRequest';
import { ListEngineProductsResponse } from './model/ListEngineProductsResponse';
import { ListEnginePropertiesEntity } from './model/ListEnginePropertiesEntity';
import { ListExchangesRequest } from './model/ListExchangesRequest';
import { ListExchangesResponse } from './model/ListExchangesResponse';
import { ListInstancesDetailsRequest } from './model/ListInstancesDetailsRequest';
import { ListInstancesDetailsResponse } from './model/ListInstancesDetailsResponse';
import { ListPluginsRequest } from './model/ListPluginsRequest';
import { ListPluginsResponse } from './model/ListPluginsResponse';
import { ListProductsRequest } from './model/ListProductsRequest';
import { ListProductsRespDetail } from './model/ListProductsRespDetail';
import { ListProductsRespHourly } from './model/ListProductsRespHourly';
import { ListProductsRespIo } from './model/ListProductsRespIo';
import { ListProductsRespValues } from './model/ListProductsRespValues';
import { ListProductsResponse } from './model/ListProductsResponse';
import { ListQueuesRequest } from './model/ListQueuesRequest';
import { ListQueuesResponse } from './model/ListQueuesResponse';
import { ListUserRequest } from './model/ListUserRequest';
import { ListUserResponse } from './model/ListUserResponse';
import { ListVhostsRequest } from './model/ListVhostsRequest';
import { ListVhostsResponse } from './model/ListVhostsResponse';
import { MaintainWindowsEntity } from './model/MaintainWindowsEntity';
import { PluginEntity } from './model/PluginEntity';
import { QueueArguments } from './model/QueueArguments';
import { QueueDetails } from './model/QueueDetails';
import { QuotaResourceEntity } from './model/QuotaResourceEntity';
import { QuotasRespQuotas } from './model/QuotasRespQuotas';
import { RabbitMQExtendProductInfoEntity } from './model/RabbitMQExtendProductInfoEntity';
import { RabbitMQExtendProductIosEntity } from './model/RabbitMQExtendProductIosEntity';
import { RabbitMQExtendProductPropertiesEntity } from './model/RabbitMQExtendProductPropertiesEntity';
import { RabbitMQProductSupportFeaturesEntity } from './model/RabbitMQProductSupportFeaturesEntity';
import { ResetPasswordReq } from './model/ResetPasswordReq';
import { ResetPasswordRequest } from './model/ResetPasswordRequest';
import { ResetPasswordResponse } from './model/ResetPasswordResponse';
import { ResizeEngineInstanceReq } from './model/ResizeEngineInstanceReq';
import { ResizeEngineInstanceRequest } from './model/ResizeEngineInstanceRequest';
import { ResizeEngineInstanceResponse } from './model/ResizeEngineInstanceResponse';
import { ResizeInstanceReq } from './model/ResizeInstanceReq';
import { ResizeInstanceRequest } from './model/ResizeInstanceRequest';
import { ResizeInstanceResponse } from './model/ResizeInstanceResponse';
import { ShowBackgroundTaskRequest } from './model/ShowBackgroundTaskRequest';
import { ShowBackgroundTaskResponse } from './model/ShowBackgroundTaskResponse';
import { ShowCesHierarchyRequest } from './model/ShowCesHierarchyRequest';
import { ShowCesHierarchyResponse } from './model/ShowCesHierarchyResponse';
import { ShowCeshierarchyRespChildren } from './model/ShowCeshierarchyRespChildren';
import { ShowCeshierarchyRespDimensions } from './model/ShowCeshierarchyRespDimensions';
import { ShowCeshierarchyRespExchanges } from './model/ShowCeshierarchyRespExchanges';
import { ShowCeshierarchyRespGroups } from './model/ShowCeshierarchyRespGroups';
import { ShowCeshierarchyRespInstanceIds } from './model/ShowCeshierarchyRespInstanceIds';
import { ShowCeshierarchyRespNodes } from './model/ShowCeshierarchyRespNodes';
import { ShowCeshierarchyRespQueues } from './model/ShowCeshierarchyRespQueues';
import { ShowCeshierarchyRespVhosts } from './model/ShowCeshierarchyRespVhosts';
import { ShowEngineInstanceExtendProductInfoRequest } from './model/ShowEngineInstanceExtendProductInfoRequest';
import { ShowEngineInstanceExtendProductInfoResponse } from './model/ShowEngineInstanceExtendProductInfoResponse';
import { ShowInstanceExtendProductInfoRequest } from './model/ShowInstanceExtendProductInfoRequest';
import { ShowInstanceExtendProductInfoRespHourly } from './model/ShowInstanceExtendProductInfoRespHourly';
import { ShowInstanceExtendProductInfoRespMonthly } from './model/ShowInstanceExtendProductInfoRespMonthly';
import { ShowInstanceExtendProductInfoResponse } from './model/ShowInstanceExtendProductInfoResponse';
import { ShowInstanceRequest } from './model/ShowInstanceRequest';
import { ShowInstanceResp } from './model/ShowInstanceResp';
import { ShowInstanceResponse } from './model/ShowInstanceResponse';
import { ShowMaintainWindowsRequest } from './model/ShowMaintainWindowsRequest';
import { ShowMaintainWindowsResponse } from './model/ShowMaintainWindowsResponse';
import { ShowQueueDetailsRequest } from './model/ShowQueueDetailsRequest';
import { ShowQueueDetailsResponse } from './model/ShowQueueDetailsResponse';
import { ShowQuotasRequest } from './model/ShowQuotasRequest';
import { ShowQuotasResponse } from './model/ShowQuotasResponse';
import { ShowRabbitMqProductCoresRequest } from './model/ShowRabbitMqProductCoresRequest';
import { ShowRabbitMqProductCoresResponse } from './model/ShowRabbitMqProductCoresResponse';
import { ShowRabbitMqProjectTagsRequest } from './model/ShowRabbitMqProjectTagsRequest';
import { ShowRabbitMqProjectTagsResponse } from './model/ShowRabbitMqProjectTagsResponse';
import { ShowRabbitMqTagsRequest } from './model/ShowRabbitMqTagsRequest';
import { ShowRabbitMqTagsResponse } from './model/ShowRabbitMqTagsResponse';
import { ShowVhostDetailResp } from './model/ShowVhostDetailResp';
import { TagEntity } from './model/TagEntity';
import { TagMultyValueEntity } from './model/TagMultyValueEntity';
import { UpdateInstanceReq } from './model/UpdateInstanceReq';
import { UpdateInstanceRequest } from './model/UpdateInstanceRequest';
import { UpdateInstanceResponse } from './model/UpdateInstanceResponse';
import { UpdatePluginsReq } from './model/UpdatePluginsReq';
import { UpdatePluginsRequest } from './model/UpdatePluginsRequest';
import { UpdatePluginsResponse } from './model/UpdatePluginsResponse';
import { UpdateUserRequest } from './model/UpdateUserRequest';
import { UpdateUserResponse } from './model/UpdateUserResponse';

export class RabbitMQClient {
    public static newBuilder(): ClientBuilder<RabbitMQClient> {
            let client = new ClientBuilder<RabbitMQClient>(newClient);
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
     * @param {BatchCreateOrDeleteTagReq} batchCreateOrDeleteRabbitMqTagRequestBody 请求信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateOrDeleteRabbitMqTag(batchCreateOrDeleteRabbitMqTagRequest?: BatchCreateOrDeleteRabbitMqTagRequest): Promise<BatchCreateOrDeleteRabbitMqTagResponse> {
        const options = ParamCreater().batchCreateOrDeleteRabbitMqTag(batchCreateOrDeleteRabbitMqTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除实例。
     * 
     * 实例删除后，实例中原有的数据将被删除，且没有备份，请谨慎操作。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除实例
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
     * 创建实例，该接口创建的实例为按需计费的方式。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建实例(按需)
     * @param {CreateInstanceReq} createPostPaidInstanceRequestBody 请求消息。
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
     * 创建实例[，该接口支持创建按需[和包周期](tag:hws,hws_eu,hws_hk,ctc,cmcc)计费方式的实例](tag:hws,hws_eu,hws_hk,ocb,hws_ocb,ctc,g42,hk_g42,tm,hk_tm,cmcc,sbc)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建实例
     * @param {'rabbitmq'} engine 消息引擎。
     * @param {CreateInstanceReq} createPostPaidInstanceByEngineRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPostPaidInstanceByEngine(createPostPaidInstanceByEngineRequest?: CreatePostPaidInstanceByEngineRequest): Promise<CreatePostPaidInstanceByEngineResponse> {
        const options = ParamCreater().createPostPaidInstanceByEngine(createPostPaidInstanceByEngineRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建用户（仅AMQP版本支持）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建用户
     * @param {string} instanceId 实例ID。
     * @param {AMQPUser} createUserRequestBody 请求消息。
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
     * 删除指定实例，释放该实例的所有资源。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除指定实例
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
     * 删除用户（仅AMQP版本支持）。
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
     * @param {'rabbitmq'} engine 消息引擎的类型。
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
     * 查询租户的实例列表，支持按照条件查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有实例列表
     * @param {'rabbitmq'} engine **参数解释**： 引擎类型：rabbitmq。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [name] **参数解释**： 实例名称。获取方式：登录RabbitMQ控制台，在RabbitMQ实例详情页面查找实例名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [instanceId] **参数解释**： 实例ID。获取方法如下：登录RabbitMQ控制台，在RabbitMQ实例详情页面查找实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {'CREATING' | 'RUNNING' | 'RESTARTING' | 'DELETING' | 'ERROR' | 'CREATEFAILED' | 'FREEZING' | 'FROZEN' | 'EXTENDING' | 'SHRINKING' | 'EXTENDEDFAILED' | 'CONFIGURING' | 'ROLLBACK' | 'ROLLBACKFAILED' | 'VOLUMETYPECHANGING'} [status] **参数解释**： 实例状态，[详细状态说明请参考[实例状态说明](rabbitmq-api-180514012.xml)](tag:hws,hws_eu,hws_hk,cmcc,ctc,sbc,hk_sbc,g42,hk_g42,tm,hk_tm)[详细状态说明请参考[实例状态说明](kafka-api-180514012.xml)](tag:hcs)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {'true' | 'false'} [includeFailure] **参数解释**： 是否返回创建失败的实例数。 **约束限制**： 不涉及。 **取值范围**： - true：返回创建失败的实例数。 - false：不返回创建失败的实例数。  **默认取值**： 不涉及。
     * @param {'true' | 'false'} [exactMatchName] **参数解释**： 是否按照实例名称进行精确匹配查询。 **约束限制**： 不涉及。 **取值范围**： - true：按照实例名称进行精确匹配查询。 - false：按照模糊匹配实例名称查询。  **默认取值**： false
     * @param {string} [enterpriseProjectId] **参数解释**： 企业项目ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [offset] **参数解释**： 偏移量，表示从此偏移量开始查询。 **约束限制**： 不涉及。 **取值范围**： 大于等于0 **默认取值**： 不涉及。
     * @param {string} [limit] **参数解释**： 当次查询返回的最大实例个数。 **约束限制**： 不涉及。 **取值范围**： 1~50 **默认取值**： 10
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
     * 查询插件列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询插件列表
     * @param {string} instanceId 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPlugins(listPluginsRequest?: ListPluginsRequest): Promise<ListPluginsResponse> {
        const options = ParamCreater().listPlugins(listPluginsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在创建实例时，需要配置订购的产品ID（即product_id），可通过该接口查询产品规格。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询产品规格列表
     * @param {'rabbitmq'} [engine] 消息引擎的类型。当前只支持rabbitmq。
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
     * 查询用户列表（仅AMQP版本支持）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户列表
     * @param {string} instanceId 实例ID。
     * @param {string} [offset] 分页查询偏移量，表示从此偏移量开始查询，offset大于等于0，默认从0开始查询。
     * @param {string} [limit] 分页查询单页数量，取值范围0~50，默认查询10条。
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
     * 实例规格变更。
     * 
     * [**当前通过调用API，只支持按需实例进行实例规格变更。**](tag:hws,hws_hk,ctc,cmcc,hws_eu)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新规格实例的规格变更
     * @param {string} instanceId 实例ID。
     * @param {'rabbitmq'} engine 消息引擎的类型。支持的类型为rabbitmq。
     * @param {ResizeEngineInstanceReq} resizeEngineInstanceRequestBody 实例规格变更请求体。
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
     * 实例规格变更。
     * 
     * [**当前通过调用API，只支持按需实例进行实例规格变更。**](tag:hws,hws_hk,ctc,cmcc,hws_eu)
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
     * 查询新规格实例可扩容列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询新规格可扩容规格列表
     * @param {'rabbitmq'} engine 消息引擎的类型。支持的类型为rabbitmq。
     * @param {string} instanceId 实例ID。
     * @param {'advanced' | 'platinum' | 'dec' | 'exp'} [type] 产品的类型。   - advanced：专享版   - platinum：铂金版   - dec：专属云版   - exp：体验版
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
     * 查询可扩容规格列表。
     * 
     * RabbtiMQ只支持只增加节点数的扩容方式。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可扩容规格列表
     * @param {string} instanceId 实例ID。
     * @param {'advanced' | 'platinum' | 'dec' | 'exp'} type 产品的类型。   - advanced：专享版
     * @param {'rabbitmq'} engine 消息引擎的类型。支持的类型为rabbitmq。
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
     * 查询RabbitMQ产品规格核数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询RabbitMQ产品规格核数
     * @param {string} instanceId 实例ID。
     * @param {string} productId 产品ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRabbitMqProductCores(showRabbitMqProductCoresRequest?: ShowRabbitMqProductCoresRequest): Promise<ShowRabbitMqProductCoresResponse> {
        const options = ParamCreater().showRabbitMqProductCores(showRabbitMqProductCoresRequest);

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
    public showRabbitMqProjectTags(showRabbitMqProjectTagsRequest?: ShowRabbitMqProjectTagsRequest): Promise<ShowRabbitMqProjectTagsResponse> {
        const options = ParamCreater().showRabbitMqProjectTags();

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
    public showRabbitMqTags(showRabbitMqTagsRequest?: ShowRabbitMqTagsRequest): Promise<ShowRabbitMqTagsResponse> {
        const options = ParamCreater().showRabbitMqTags(showRabbitMqTagsRequest);

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
     * 开启或关闭插件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启或关闭插件
     * @param {string} instanceId 实例ID。
     * @param {UpdatePluginsReq} updatePluginsRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePlugins(updatePluginsRequest?: UpdatePluginsRequest): Promise<UpdatePluginsResponse> {
        const options = ParamCreater().updatePlugins(updatePluginsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改用户参数（仅AMQP版本支持）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改用户参数
     * @param {string} instanceId 实例ID。
     * @param {string} userName 用户名。
     * @param {AMQPUser} updateUserRequestBody 请求消息。
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
     * 添加绑定。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加绑定
     * @param {string} instanceId 实例ID
     * @param {string} vhost Vhost名称
     * @param {string} exchange Exchange名称
     * @param {CreateBindingBody} createBindingRequestBody 创建绑定
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createBinding(createBindingRequest?: CreateBindingRequest): Promise<CreateBindingResponse> {
        const options = ParamCreater().createBinding(createBindingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除绑定。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除绑定
     * @param {string} instanceId 实例ID
     * @param {string} vhost Vhost名称
     * @param {string} exchange Exchange名称
     * @param {string} destinationType 绑定目标端类型，Exchange或Queue。[（AMQP版本只支持Queue绑定类型）](tag:hws,hws_hk)
     * @param {string} destination 绑定的目标端名称
     * @param {string} propertiesKey 绑定路由键，经过URL转译后routing_key，可通过调用[查询Exchange绑定列表](ListBindings.xml)或者[查询指定Queue详情](ShowQueueDetails.xml)接口的响应信息获取。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteBinding(deleteBindingRequest?: DeleteBindingRequest): Promise<DeleteBindingResponse> {
        const options = ParamCreater().deleteBinding(deleteBindingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Exchange绑定信息列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Exchange绑定信息列表
     * @param {string} instanceId 实例ID
     * @param {string} vhost Vhost名称
     * @param {string} exchange Exchange名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBindings(listBindingsRequest?: ListBindingsRequest): Promise<ListBindingsResponse> {
        const options = ParamCreater().listBindings(listBindingsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除指定Exchange。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除指定Exchange
     * @param {string} instanceId 实例ID
     * @param {string} vhost Vhost名称
     * @param {BatchDeleteBody} batchDeleteExchangesRequestBody 需要删除的Exchange名称列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteExchanges(batchDeleteExchangesRequest?: BatchDeleteExchangesRequest): Promise<BatchDeleteExchangesResponse> {
        const options = ParamCreater().batchDeleteExchanges(batchDeleteExchangesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建Exchange。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建Exchange
     * @param {string} instanceId 实例ID
     * @param {string} vhost Vhost名称
     * @param {CreateExchangeBody} createExchangeRequestBody 创建Exchange
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createExchange(createExchangeRequest?: CreateExchangeRequest): Promise<CreateExchangeResponse> {
        const options = ParamCreater().createExchange(createExchangeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Exchange列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Exchange列表
     * @param {string} instanceId 实例ID
     * @param {string} vhost 所属Vhost名称
     * @param {number} [offset] 分页查询偏移量，表示从此偏移量开始查询，offset大于等于0，默认从0开始查询。
     * @param {number} [limit] 分页查询单页数量，取值范围0~50，默认查询10条。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listExchanges(listExchangesRequest?: ListExchangesRequest): Promise<ListExchangesResponse> {
        const options = ParamCreater().listExchanges(listExchangesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除指定Queue。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除指定Queue
     * @param {string} instanceId 实例ID
     * @param {string} vhost Vhost名称
     * @param {BatchDeleteBody} batchDeleteQueuesRequestBody 待删除Queue的名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteQueues(batchDeleteQueuesRequest?: BatchDeleteQueuesRequest): Promise<BatchDeleteQueuesResponse> {
        const options = ParamCreater().batchDeleteQueues(batchDeleteQueuesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建Queue。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建Queue
     * @param {string} instanceId 实例ID
     * @param {string} vhost Vhost名称
     * @param {CreateQueueBody} createQueueRequestBody 创建Queue参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createQueue(createQueueRequest?: CreateQueueRequest): Promise<CreateQueueResponse> {
        const options = ParamCreater().createQueue(createQueueRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 清空Queue消息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 清空Queue消息
     * @param {string} instanceId 实例ID
     * @param {string} vhost Vhost名称
     * @param {string} queue Queue名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteQueueInfo(deleteQueueInfoRequest?: DeleteQueueInfoRequest): Promise<DeleteQueueInfoResponse> {
        const options = ParamCreater().deleteQueueInfo(deleteQueueInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询所属Vhost下Queue的列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所属Vhost下Queue的列表
     * @param {string} instanceId 实例ID
     * @param {string} vhost Vhost名称
     * @param {number} [offset] 分页查询偏移量，表示从此偏移量开始查询，offset大于等于0，默认从0开始查询。
     * @param {number} [limit] 分页查询单页数量，取值范围0~50，默认查询10条。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listQueues(listQueuesRequest?: ListQueuesRequest): Promise<ListQueuesResponse> {
        const options = ParamCreater().listQueues(listQueuesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定Queue详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定Queue详情
     * @param {string} instanceId 实例ID
     * @param {string} vhost 所属Vhost名称
     * @param {string} queue Queue名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showQueueDetails(showQueueDetailsRequest?: ShowQueueDetailsRequest): Promise<ShowQueueDetailsResponse> {
        const options = ParamCreater().showQueueDetails(showQueueDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除指定Vhost。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除指定Vhost
     * @param {string} instanceId 实例ID
     * @param {BatchDeleteBody} batchDeleteVhostsRequestBody 需要删除的Vhost名称列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteVhosts(batchDeleteVhostsRequest?: BatchDeleteVhostsRequest): Promise<BatchDeleteVhostsResponse> {
        const options = ParamCreater().batchDeleteVhosts(batchDeleteVhostsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建Vhost。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建Vhost
     * @param {string} instanceId 实例ID
     * @param {CreateVhostBody} createVhostRequestBody Vhost名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createVhost(createVhostRequest?: CreateVhostRequest): Promise<CreateVhostResponse> {
        const options = ParamCreater().createVhost(createVhostRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Vhost列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Vhost列表
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：登录RabbitMQ控制台，在RabbitMQ实例详情页面查找实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [offset] **参数解释**： 分页查询偏移量，表示从此偏移量开始查询。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 0。
     * @param {number} [limit] **参数解释**： 分页查询单页数量。 **约束限制**： 不涉及。 **取值范围**： 0~50。 **默认取值**： 10。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVhosts(listVhostsRequest?: ListVhostsRequest): Promise<ListVhostsResponse> {
        const options = ParamCreater().listVhosts(listVhostsRequest);

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
        batchCreateOrDeleteRabbitMqTag(batchCreateOrDeleteRabbitMqTagRequest?: BatchCreateOrDeleteRabbitMqTagRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/rabbitmq/{instance_id}/tags/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (batchCreateOrDeleteRabbitMqTagRequest !== null && batchCreateOrDeleteRabbitMqTagRequest !== undefined) {
                if (batchCreateOrDeleteRabbitMqTagRequest instanceof BatchCreateOrDeleteRabbitMqTagRequest) {
                    instanceId = batchCreateOrDeleteRabbitMqTagRequest.instanceId;
                    body = batchCreateOrDeleteRabbitMqTagRequest.body
                } else {
                    instanceId = batchCreateOrDeleteRabbitMqTagRequest['instance_id'];
                    body = batchCreateOrDeleteRabbitMqTagRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling batchCreateOrDeleteRabbitMqTag.');
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
         * 批量删除实例。
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
         * 创建实例[，该接口支持创建按需[和包周期](tag:hws,hws_eu,hws_hk,ctc,cmcc)计费方式的实例](tag:hws,hws_eu,hws_hk,ocb,hws_ocb,ctc,g42,hk_g42,tm,hk_tm,cmcc,sbc)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPostPaidInstanceByEngine(createPostPaidInstanceByEngineRequest?: CreatePostPaidInstanceByEngineRequest) {
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

            if (createPostPaidInstanceByEngineRequest !== null && createPostPaidInstanceByEngineRequest !== undefined) {
                if (createPostPaidInstanceByEngineRequest instanceof CreatePostPaidInstanceByEngineRequest) {
                    engine = createPostPaidInstanceByEngineRequest.engine;
                    body = createPostPaidInstanceByEngineRequest.body
                } else {
                    engine = createPostPaidInstanceByEngineRequest['engine'];
                    body = createPostPaidInstanceByEngineRequest['body'];
                }
            }

        
            if (engine === null || engine === undefined) {
            throw new RequiredError('engine','Required parameter engine was null or undefined when calling createPostPaidInstanceByEngine.');
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
         * 创建用户（仅AMQP版本支持）。
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
         * 删除指定实例，释放该实例的所有资源。
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
         * 删除用户（仅AMQP版本支持）。
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
         * 查询租户的实例列表，支持按照条件查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstancesDetails(listInstancesDetailsRequest?: ListInstancesDetailsRequest) {
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

            if (listInstancesDetailsRequest !== null && listInstancesDetailsRequest !== undefined) {
                if (listInstancesDetailsRequest instanceof ListInstancesDetailsRequest) {
                    engine = listInstancesDetailsRequest.engine;
                    name = listInstancesDetailsRequest.name;
                    instanceId = listInstancesDetailsRequest.instanceId;
                    status = listInstancesDetailsRequest.status;
                    includeFailure = listInstancesDetailsRequest.includeFailure;
                    exactMatchName = listInstancesDetailsRequest.exactMatchName;
                    enterpriseProjectId = listInstancesDetailsRequest.enterpriseProjectId;
                    offset = listInstancesDetailsRequest.offset;
                    limit = listInstancesDetailsRequest.limit;
                } else {
                    engine = listInstancesDetailsRequest['engine'];
                    name = listInstancesDetailsRequest['name'];
                    instanceId = listInstancesDetailsRequest['instance_id'];
                    status = listInstancesDetailsRequest['status'];
                    includeFailure = listInstancesDetailsRequest['include_failure'];
                    exactMatchName = listInstancesDetailsRequest['exact_match_name'];
                    enterpriseProjectId = listInstancesDetailsRequest['enterprise_project_id'];
                    offset = listInstancesDetailsRequest['offset'];
                    limit = listInstancesDetailsRequest['limit'];
                }
            }

        
            if (engine === null || engine === undefined) {
                throw new RequiredError('engine','Required parameter engine was null or undefined when calling listInstancesDetails.');
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
         * 查询插件列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPlugins(listPluginsRequest?: ListPluginsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/rabbitmq/plugins",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (listPluginsRequest !== null && listPluginsRequest !== undefined) {
                if (listPluginsRequest instanceof ListPluginsRequest) {
                    instanceId = listPluginsRequest.instanceId;
                } else {
                    instanceId = listPluginsRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listPlugins.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在创建实例时，需要配置订购的产品ID（即product_id），可通过该接口查询产品规格。
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

        
            if (engine !== null && engine !== undefined) {
                localVarQueryParameter['engine'] = engine;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询用户列表（仅AMQP版本支持）。
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
         * 实例规格变更。
         * 
         * [**当前通过调用API，只支持按需实例进行实例规格变更。**](tag:hws,hws_hk,ctc,cmcc,hws_eu)
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
            
            let instanceId;
            
            let engine;

            if (resizeEngineInstanceRequest !== null && resizeEngineInstanceRequest !== undefined) {
                if (resizeEngineInstanceRequest instanceof ResizeEngineInstanceRequest) {
                    instanceId = resizeEngineInstanceRequest.instanceId;
                    engine = resizeEngineInstanceRequest.engine;
                    body = resizeEngineInstanceRequest.body
                } else {
                    instanceId = resizeEngineInstanceRequest['instance_id'];
                    engine = resizeEngineInstanceRequest['engine'];
                    body = resizeEngineInstanceRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling resizeEngineInstance.');
            }
            if (engine === null || engine === undefined) {
            throw new RequiredError('engine','Required parameter engine was null or undefined when calling resizeEngineInstance.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'engine': engine, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 实例规格变更。
         * 
         * [**当前通过调用API，只支持按需实例进行实例规格变更。**](tag:hws,hws_hk,ctc,cmcc,hws_eu)
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
         * 查询新规格实例可扩容列表
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
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'engine': engine,'instance_id': instanceId, };
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
         * 查询可扩容规格列表。
         * 
         * RabbtiMQ只支持只增加节点数的扩容方式。
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
         * 查询RabbitMQ产品规格核数。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRabbitMqProductCores(showRabbitMqProductCoresRequest?: ShowRabbitMqProductCoresRequest) {
            const options = {
                method: "GET",
                url: "/v2/rabbitmq/products/cores",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let productId;

            if (showRabbitMqProductCoresRequest !== null && showRabbitMqProductCoresRequest !== undefined) {
                if (showRabbitMqProductCoresRequest instanceof ShowRabbitMqProductCoresRequest) {
                    instanceId = showRabbitMqProductCoresRequest.instanceId;
                    productId = showRabbitMqProductCoresRequest.productId;
                } else {
                    instanceId = showRabbitMqProductCoresRequest['instance_id'];
                    productId = showRabbitMqProductCoresRequest['product_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
                throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showRabbitMqProductCores.');
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (productId === null || productId === undefined) {
                throw new RequiredError('productId','Required parameter productId was null or undefined when calling showRabbitMqProductCores.');
            }
            if (productId !== null && productId !== undefined) {
                localVarQueryParameter['product_id'] = productId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询项目标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRabbitMqProjectTags() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/rabbitmq/tags",
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
        showRabbitMqTags(showRabbitMqTagsRequest?: ShowRabbitMqTagsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/rabbitmq/{instance_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showRabbitMqTagsRequest !== null && showRabbitMqTagsRequest !== undefined) {
                if (showRabbitMqTagsRequest instanceof ShowRabbitMqTagsRequest) {
                    instanceId = showRabbitMqTagsRequest.instanceId;
                } else {
                    instanceId = showRabbitMqTagsRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showRabbitMqTags.');
            }

            options.pathParams = { 'instance_id': instanceId, };
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
         * 开启或关闭插件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePlugins(updatePluginsRequest?: UpdatePluginsRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instances/{instance_id}/rabbitmq/plugins",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updatePluginsRequest !== null && updatePluginsRequest !== undefined) {
                if (updatePluginsRequest instanceof UpdatePluginsRequest) {
                    instanceId = updatePluginsRequest.instanceId;
                    body = updatePluginsRequest.body
                } else {
                    instanceId = updatePluginsRequest['instance_id'];
                    body = updatePluginsRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updatePlugins.');
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
         * 修改用户参数（仅AMQP版本支持）。
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
         * 添加绑定。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createBinding(createBindingRequest?: CreateBindingRequest) {
            const options = {
                method: "POST",
                url: "/v2/rabbitmq/{project_id}/instances/{instance_id}/vhosts/{vhost}/exchanges/{exchange}/binding",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let vhost;
            
            let exchange;

            if (createBindingRequest !== null && createBindingRequest !== undefined) {
                if (createBindingRequest instanceof CreateBindingRequest) {
                    instanceId = createBindingRequest.instanceId;
                    vhost = createBindingRequest.vhost;
                    exchange = createBindingRequest.exchange;
                    body = createBindingRequest.body
                } else {
                    instanceId = createBindingRequest['instance_id'];
                    vhost = createBindingRequest['vhost'];
                    exchange = createBindingRequest['exchange'];
                    body = createBindingRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createBinding.');
            }
            if (vhost === null || vhost === undefined) {
            throw new RequiredError('vhost','Required parameter vhost was null or undefined when calling createBinding.');
            }
            if (exchange === null || exchange === undefined) {
            throw new RequiredError('exchange','Required parameter exchange was null or undefined when calling createBinding.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'vhost': vhost,'exchange': exchange, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除绑定。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteBinding(deleteBindingRequest?: DeleteBindingRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/rabbitmq/{project_id}/instances/{instance_id}/vhosts/{vhost}/exchanges/{exchange}/destination-type/{destination_type}/destination/{destination}/properties-key/{properties_key}/unbinding",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let vhost;
            
            let exchange;
            
            let destinationType;
            
            let destination;
            
            let propertiesKey;

            if (deleteBindingRequest !== null && deleteBindingRequest !== undefined) {
                if (deleteBindingRequest instanceof DeleteBindingRequest) {
                    instanceId = deleteBindingRequest.instanceId;
                    vhost = deleteBindingRequest.vhost;
                    exchange = deleteBindingRequest.exchange;
                    destinationType = deleteBindingRequest.destinationType;
                    destination = deleteBindingRequest.destination;
                    propertiesKey = deleteBindingRequest.propertiesKey;
                } else {
                    instanceId = deleteBindingRequest['instance_id'];
                    vhost = deleteBindingRequest['vhost'];
                    exchange = deleteBindingRequest['exchange'];
                    destinationType = deleteBindingRequest['destination_type'];
                    destination = deleteBindingRequest['destination'];
                    propertiesKey = deleteBindingRequest['properties_key'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteBinding.');
            }
            if (vhost === null || vhost === undefined) {
            throw new RequiredError('vhost','Required parameter vhost was null or undefined when calling deleteBinding.');
            }
            if (exchange === null || exchange === undefined) {
            throw new RequiredError('exchange','Required parameter exchange was null or undefined when calling deleteBinding.');
            }
            if (destinationType === null || destinationType === undefined) {
            throw new RequiredError('destinationType','Required parameter destinationType was null or undefined when calling deleteBinding.');
            }
            if (destination === null || destination === undefined) {
            throw new RequiredError('destination','Required parameter destination was null or undefined when calling deleteBinding.');
            }
            if (propertiesKey === null || propertiesKey === undefined) {
            throw new RequiredError('propertiesKey','Required parameter propertiesKey was null or undefined when calling deleteBinding.');
            }

            options.pathParams = { 'instance_id': instanceId,'vhost': vhost,'exchange': exchange,'destination_type': destinationType,'destination': destination,'properties_key': propertiesKey, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Exchange绑定信息列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBindings(listBindingsRequest?: ListBindingsRequest) {
            const options = {
                method: "GET",
                url: "/v2/rabbitmq/{project_id}/instances/{instance_id}/vhosts/{vhost}/exchanges/{exchange}/binding",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let vhost;
            
            let exchange;

            if (listBindingsRequest !== null && listBindingsRequest !== undefined) {
                if (listBindingsRequest instanceof ListBindingsRequest) {
                    instanceId = listBindingsRequest.instanceId;
                    vhost = listBindingsRequest.vhost;
                    exchange = listBindingsRequest.exchange;
                } else {
                    instanceId = listBindingsRequest['instance_id'];
                    vhost = listBindingsRequest['vhost'];
                    exchange = listBindingsRequest['exchange'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listBindings.');
            }
            if (vhost === null || vhost === undefined) {
            throw new RequiredError('vhost','Required parameter vhost was null or undefined when calling listBindings.');
            }
            if (exchange === null || exchange === undefined) {
            throw new RequiredError('exchange','Required parameter exchange was null or undefined when calling listBindings.');
            }

            options.pathParams = { 'instance_id': instanceId,'vhost': vhost,'exchange': exchange, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除指定Exchange。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteExchanges(batchDeleteExchangesRequest?: BatchDeleteExchangesRequest) {
            const options = {
                method: "POST",
                url: "/v2/rabbitmq/{project_id}/instances/{instance_id}/vhosts/{vhost}/exchanges",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let vhost;

            if (batchDeleteExchangesRequest !== null && batchDeleteExchangesRequest !== undefined) {
                if (batchDeleteExchangesRequest instanceof BatchDeleteExchangesRequest) {
                    instanceId = batchDeleteExchangesRequest.instanceId;
                    vhost = batchDeleteExchangesRequest.vhost;
                    body = batchDeleteExchangesRequest.body
                } else {
                    instanceId = batchDeleteExchangesRequest['instance_id'];
                    vhost = batchDeleteExchangesRequest['vhost'];
                    body = batchDeleteExchangesRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling batchDeleteExchanges.');
            }
            if (vhost === null || vhost === undefined) {
            throw new RequiredError('vhost','Required parameter vhost was null or undefined when calling batchDeleteExchanges.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'vhost': vhost, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建Exchange。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createExchange(createExchangeRequest?: CreateExchangeRequest) {
            const options = {
                method: "PUT",
                url: "/v2/rabbitmq/{project_id}/instances/{instance_id}/vhosts/{vhost}/exchanges",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let vhost;

            if (createExchangeRequest !== null && createExchangeRequest !== undefined) {
                if (createExchangeRequest instanceof CreateExchangeRequest) {
                    instanceId = createExchangeRequest.instanceId;
                    vhost = createExchangeRequest.vhost;
                    body = createExchangeRequest.body
                } else {
                    instanceId = createExchangeRequest['instance_id'];
                    vhost = createExchangeRequest['vhost'];
                    body = createExchangeRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createExchange.');
            }
            if (vhost === null || vhost === undefined) {
            throw new RequiredError('vhost','Required parameter vhost was null or undefined when calling createExchange.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'vhost': vhost, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Exchange列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listExchanges(listExchangesRequest?: ListExchangesRequest) {
            const options = {
                method: "GET",
                url: "/v2/rabbitmq/{project_id}/instances/{instance_id}/vhosts/{vhost}/exchanges",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let vhost;
            
            let offset;
            
            let limit;

            if (listExchangesRequest !== null && listExchangesRequest !== undefined) {
                if (listExchangesRequest instanceof ListExchangesRequest) {
                    instanceId = listExchangesRequest.instanceId;
                    vhost = listExchangesRequest.vhost;
                    offset = listExchangesRequest.offset;
                    limit = listExchangesRequest.limit;
                } else {
                    instanceId = listExchangesRequest['instance_id'];
                    vhost = listExchangesRequest['vhost'];
                    offset = listExchangesRequest['offset'];
                    limit = listExchangesRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listExchanges.');
            }
            if (vhost === null || vhost === undefined) {
            throw new RequiredError('vhost','Required parameter vhost was null or undefined when calling listExchanges.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'vhost': vhost, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除指定Queue。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteQueues(batchDeleteQueuesRequest?: BatchDeleteQueuesRequest) {
            const options = {
                method: "POST",
                url: "/v2/rabbitmq/{project_id}/instances/{instance_id}/vhosts/{vhost}/queues",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let vhost;

            if (batchDeleteQueuesRequest !== null && batchDeleteQueuesRequest !== undefined) {
                if (batchDeleteQueuesRequest instanceof BatchDeleteQueuesRequest) {
                    instanceId = batchDeleteQueuesRequest.instanceId;
                    vhost = batchDeleteQueuesRequest.vhost;
                    body = batchDeleteQueuesRequest.body
                } else {
                    instanceId = batchDeleteQueuesRequest['instance_id'];
                    vhost = batchDeleteQueuesRequest['vhost'];
                    body = batchDeleteQueuesRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling batchDeleteQueues.');
            }
            if (vhost === null || vhost === undefined) {
            throw new RequiredError('vhost','Required parameter vhost was null or undefined when calling batchDeleteQueues.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'vhost': vhost, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建Queue。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createQueue(createQueueRequest?: CreateQueueRequest) {
            const options = {
                method: "PUT",
                url: "/v2/rabbitmq/{project_id}/instances/{instance_id}/vhosts/{vhost}/queues",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let vhost;

            if (createQueueRequest !== null && createQueueRequest !== undefined) {
                if (createQueueRequest instanceof CreateQueueRequest) {
                    instanceId = createQueueRequest.instanceId;
                    vhost = createQueueRequest.vhost;
                    body = createQueueRequest.body
                } else {
                    instanceId = createQueueRequest['instance_id'];
                    vhost = createQueueRequest['vhost'];
                    body = createQueueRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createQueue.');
            }
            if (vhost === null || vhost === undefined) {
            throw new RequiredError('vhost','Required parameter vhost was null or undefined when calling createQueue.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'vhost': vhost, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 清空Queue消息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteQueueInfo(deleteQueueInfoRequest?: DeleteQueueInfoRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/rabbitmq/{project_id}/instances/{instance_id}/vhosts/{vhost}/queues/{queue}/contents",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let vhost;
            
            let queue;

            if (deleteQueueInfoRequest !== null && deleteQueueInfoRequest !== undefined) {
                if (deleteQueueInfoRequest instanceof DeleteQueueInfoRequest) {
                    instanceId = deleteQueueInfoRequest.instanceId;
                    vhost = deleteQueueInfoRequest.vhost;
                    queue = deleteQueueInfoRequest.queue;
                } else {
                    instanceId = deleteQueueInfoRequest['instance_id'];
                    vhost = deleteQueueInfoRequest['vhost'];
                    queue = deleteQueueInfoRequest['queue'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteQueueInfo.');
            }
            if (vhost === null || vhost === undefined) {
            throw new RequiredError('vhost','Required parameter vhost was null or undefined when calling deleteQueueInfo.');
            }
            if (queue === null || queue === undefined) {
            throw new RequiredError('queue','Required parameter queue was null or undefined when calling deleteQueueInfo.');
            }

            options.pathParams = { 'instance_id': instanceId,'vhost': vhost,'queue': queue, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询所属Vhost下Queue的列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listQueues(listQueuesRequest?: ListQueuesRequest) {
            const options = {
                method: "GET",
                url: "/v2/rabbitmq/{project_id}/instances/{instance_id}/vhosts/{vhost}/queues",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let vhost;
            
            let offset;
            
            let limit;

            if (listQueuesRequest !== null && listQueuesRequest !== undefined) {
                if (listQueuesRequest instanceof ListQueuesRequest) {
                    instanceId = listQueuesRequest.instanceId;
                    vhost = listQueuesRequest.vhost;
                    offset = listQueuesRequest.offset;
                    limit = listQueuesRequest.limit;
                } else {
                    instanceId = listQueuesRequest['instance_id'];
                    vhost = listQueuesRequest['vhost'];
                    offset = listQueuesRequest['offset'];
                    limit = listQueuesRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listQueues.');
            }
            if (vhost === null || vhost === undefined) {
            throw new RequiredError('vhost','Required parameter vhost was null or undefined when calling listQueues.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'vhost': vhost, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定Queue详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showQueueDetails(showQueueDetailsRequest?: ShowQueueDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v2/rabbitmq/{project_id}/instances/{instance_id}/vhosts/{vhost}/queues/{queue}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let vhost;
            
            let queue;

            if (showQueueDetailsRequest !== null && showQueueDetailsRequest !== undefined) {
                if (showQueueDetailsRequest instanceof ShowQueueDetailsRequest) {
                    instanceId = showQueueDetailsRequest.instanceId;
                    vhost = showQueueDetailsRequest.vhost;
                    queue = showQueueDetailsRequest.queue;
                } else {
                    instanceId = showQueueDetailsRequest['instance_id'];
                    vhost = showQueueDetailsRequest['vhost'];
                    queue = showQueueDetailsRequest['queue'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showQueueDetails.');
            }
            if (vhost === null || vhost === undefined) {
            throw new RequiredError('vhost','Required parameter vhost was null or undefined when calling showQueueDetails.');
            }
            if (queue === null || queue === undefined) {
            throw new RequiredError('queue','Required parameter queue was null or undefined when calling showQueueDetails.');
            }

            options.pathParams = { 'instance_id': instanceId,'vhost': vhost,'queue': queue, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除指定Vhost。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteVhosts(batchDeleteVhostsRequest?: BatchDeleteVhostsRequest) {
            const options = {
                method: "POST",
                url: "/v2/rabbitmq/{project_id}/instances/{instance_id}/vhosts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (batchDeleteVhostsRequest !== null && batchDeleteVhostsRequest !== undefined) {
                if (batchDeleteVhostsRequest instanceof BatchDeleteVhostsRequest) {
                    instanceId = batchDeleteVhostsRequest.instanceId;
                    body = batchDeleteVhostsRequest.body
                } else {
                    instanceId = batchDeleteVhostsRequest['instance_id'];
                    body = batchDeleteVhostsRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling batchDeleteVhosts.');
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
         * 创建Vhost。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createVhost(createVhostRequest?: CreateVhostRequest) {
            const options = {
                method: "PUT",
                url: "/v2/rabbitmq/{project_id}/instances/{instance_id}/vhosts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createVhostRequest !== null && createVhostRequest !== undefined) {
                if (createVhostRequest instanceof CreateVhostRequest) {
                    instanceId = createVhostRequest.instanceId;
                    body = createVhostRequest.body
                } else {
                    instanceId = createVhostRequest['instance_id'];
                    body = createVhostRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createVhost.');
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
         * 查询Vhost列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVhosts(listVhostsRequest?: ListVhostsRequest) {
            const options = {
                method: "GET",
                url: "/v2/rabbitmq/{project_id}/instances/{instance_id}/vhosts",
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

            if (listVhostsRequest !== null && listVhostsRequest !== undefined) {
                if (listVhostsRequest instanceof ListVhostsRequest) {
                    instanceId = listVhostsRequest.instanceId;
                    offset = listVhostsRequest.offset;
                    limit = listVhostsRequest.limit;
                } else {
                    instanceId = listVhostsRequest['instance_id'];
                    offset = listVhostsRequest['offset'];
                    limit = listVhostsRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listVhosts.');
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
    
    }
};

function newClient(client: HcClient): RabbitMQClient {
    return new RabbitMQClient(client);
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