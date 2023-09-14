import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { BatchCreateOrDeleteRabbitMqTagRequest } from './model/BatchCreateOrDeleteRabbitMqTagRequest';
import { BatchCreateOrDeleteRabbitMqTagResponse } from './model/BatchCreateOrDeleteRabbitMqTagResponse';
import { BatchCreateOrDeleteTagReq } from './model/BatchCreateOrDeleteTagReq';
import { BatchRestartOrDeleteInstanceReq } from './model/BatchRestartOrDeleteInstanceReq';
import { BatchRestartOrDeleteInstanceRespResults } from './model/BatchRestartOrDeleteInstanceRespResults';
import { BatchRestartOrDeleteInstancesRequest } from './model/BatchRestartOrDeleteInstancesRequest';
import { BatchRestartOrDeleteInstancesResponse } from './model/BatchRestartOrDeleteInstancesResponse';
import { BssParam } from './model/BssParam';
import { CreateInstanceReq } from './model/CreateInstanceReq';
import { CreatePostPaidInstanceByEngineRequest } from './model/CreatePostPaidInstanceByEngineRequest';
import { CreatePostPaidInstanceByEngineResponse } from './model/CreatePostPaidInstanceByEngineResponse';
import { CreatePostPaidInstanceRequest } from './model/CreatePostPaidInstanceRequest';
import { CreatePostPaidInstanceResponse } from './model/CreatePostPaidInstanceResponse';
import { DeleteBackgroundTaskRequest } from './model/DeleteBackgroundTaskRequest';
import { DeleteBackgroundTaskResponse } from './model/DeleteBackgroundTaskResponse';
import { DeleteInstanceRequest } from './model/DeleteInstanceRequest';
import { DeleteInstanceResponse } from './model/DeleteInstanceResponse';
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
import { MaintainWindowsEntity } from './model/MaintainWindowsEntity';
import { PluginEntity } from './model/PluginEntity';
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
import { ShowRabbitMqProjectTagsRequest } from './model/ShowRabbitMqProjectTagsRequest';
import { ShowRabbitMqProjectTagsResponse } from './model/ShowRabbitMqProjectTagsResponse';
import { ShowRabbitMqTagsRequest } from './model/ShowRabbitMqTagsRequest';
import { ShowRabbitMqTagsResponse } from './model/ShowRabbitMqTagsResponse';
import { TagEntity } from './model/TagEntity';
import { TagMultyValueEntity } from './model/TagMultyValueEntity';
import { UpdateInstanceReq } from './model/UpdateInstanceReq';
import { UpdateInstanceRequest } from './model/UpdateInstanceRequest';
import { UpdateInstanceResponse } from './model/UpdateInstanceResponse';
import { UpdatePluginsReq } from './model/UpdatePluginsReq';
import { UpdatePluginsRequest } from './model/UpdatePluginsRequest';
import { UpdatePluginsResponse } from './model/UpdatePluginsResponse';

export class RabbitMQClient {
    public static newBuilder(): ClientBuilder<RabbitMQClient> {
            return new ClientBuilder<RabbitMQClient>(newClient);
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
     * 创建实例，该接口支持创建按需[和包周期](tag:hws,hws_eu,hws_hk,ctc,cmcc)计费方式的实例。
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
     * @param {string} [engine] 引擎类型：rabbitmq，参数缺失查询所有实例。
     * @param {string} [name] 实例名称。
     * @param {string} [instanceId] 实例ID。
     * @param {'CREATING' | 'CREATEFAILED' | 'RUNNING' | 'ERROR' | 'STARTING' | 'RESTARTING' | 'CLOSING' | 'FROZEN'} [status] 实例状态，详细状态说明请参考[实例状态说明](rabbitmq-api-180514012.xml)。
     * @param {'true' | 'false'} [includeFailure] 是否返回创建失败的实例数。  当参数值为“true”时，返回创建失败的实例数。参数值为“false”或者其他值，不返回创建失败的实例数。
     * @param {'true' | 'false'} [exactMatchName] 是否按照实例名称进行精确匹配查询。  默认为“false”，表示模糊匹配实例名称查询。若参数值为“true”表示按照实例名称进行精确匹配查询。
     * @param {string} [enterpriseProjectId] 企业项目ID。
     * @param {string} [offset] 偏移量，表示从此偏移量开始查询， offset大于等于0。
     * @param {string} [limit] 当次查询返回的最大实例个数，默认值为10，取值范围为1~50。
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
     * @param {'advanced' | 'platinum' | 'dec' | 'exp'} type 产品的类型。   - advanced：专享版   - platinum：铂金版   - dec：专属云版   - exp：体验版
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
         * 创建实例，该接口支持创建按需[和包周期](tag:hws,hws_eu,hws_hk,ctc,cmcc)计费方式的实例。
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