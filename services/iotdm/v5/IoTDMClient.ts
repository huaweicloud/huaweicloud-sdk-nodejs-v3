import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AccessInfo } from './model/AccessInfo';
import { AdditionalParams } from './model/AdditionalParams';
import { AdditionalParamsResp } from './model/AdditionalParamsResp';
import { BindInstanceTags } from './model/BindInstanceTags';
import { BindInstanceTagsRequest } from './model/BindInstanceTagsRequest';
import { BindInstanceTagsResponse } from './model/BindInstanceTagsResponse';
import { ChangeInstanceChargeMode } from './model/ChangeInstanceChargeMode';
import { ChangeInstanceChargeModeRequest } from './model/ChangeInstanceChargeModeRequest';
import { ChangeInstanceChargeModeResponse } from './model/ChangeInstanceChargeModeResponse';
import { ChargeInfo } from './model/ChargeInfo';
import { CreateInstance } from './model/CreateInstance';
import { CreateInstanceRequest } from './model/CreateInstanceRequest';
import { CreateInstanceResponse } from './model/CreateInstanceResponse';
import { DeleteInstanceRequest } from './model/DeleteInstanceRequest';
import { DeleteInstanceResponse } from './model/DeleteInstanceResponse';
import { Flavor } from './model/Flavor';
import { ForwardingInfo } from './model/ForwardingInfo';
import { IPWhiteList } from './model/IPWhiteList';
import { InstanceFlavor } from './model/InstanceFlavor';
import { InstanceTask } from './model/InstanceTask';
import { IpAllowList } from './model/IpAllowList';
import { ListInstanceFlavorsRequest } from './model/ListInstanceFlavorsRequest';
import { ListInstanceFlavorsResponse } from './model/ListInstanceFlavorsResponse';
import { ListInstanceTasksRequest } from './model/ListInstanceTasksRequest';
import { ListInstanceTasksResponse } from './model/ListInstanceTasksResponse';
import { ListInstancesRequest } from './model/ListInstancesRequest';
import { ListInstancesResponse } from './model/ListInstancesResponse';
import { OperateWindow } from './model/OperateWindow';
import { Page } from './model/Page';
import { Port } from './model/Port';
import { QueryInstanceSimplify } from './model/QueryInstanceSimplify';
import { ResizeInstance } from './model/ResizeInstance';
import { ResizeInstanceRequest } from './model/ResizeInstanceRequest';
import { ResizeInstanceResponse } from './model/ResizeInstanceResponse';
import { RetryInstanceTaskRequest } from './model/RetryInstanceTaskRequest';
import { RetryInstanceTaskResponse } from './model/RetryInstanceTaskResponse';
import { ShowInstanceRequest } from './model/ShowInstanceRequest';
import { ShowInstanceResponse } from './model/ShowInstanceResponse';
import { ShowInstanceTaskRequest } from './model/ShowInstanceTaskRequest';
import { ShowInstanceTaskResponse } from './model/ShowInstanceTaskResponse';
import { Tag } from './model/Tag';
import { TargetConfig } from './model/TargetConfig';
import { UnbindInstanceTags } from './model/UnbindInstanceTags';
import { UnbindInstanceTagsRequest } from './model/UnbindInstanceTagsRequest';
import { UnbindInstanceTagsResponse } from './model/UnbindInstanceTagsResponse';
import { UpdateAccessInfo } from './model/UpdateAccessInfo';
import { UpdateForwardingInfo } from './model/UpdateForwardingInfo';
import { UpdateInstance } from './model/UpdateInstance';
import { UpdateInstanceRequest } from './model/UpdateInstanceRequest';
import { UpdateInstanceResponse } from './model/UpdateInstanceResponse';

export class IoTDMClient {
    public static newBuilder(): ClientBuilder<IoTDMClient> {
            let client = new ClientBuilder<IoTDMClient>(newClient);
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
     * 用户可以调用此接口查询设备接入服务支持的实例规格列表。支持的实例规格请参见[[产品规格说明](https://support.huaweicloud.com/productdesc-iothub/iot_04_0014.html)](tag:hws)[[产品规格说明](https://support.huaweicloud.com/intl/zh-cn/productdesc-iothub/iot_04_0014.html)](tag:hws_hk)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例规格列表
     * @param {number} [offset] **参数说明**：表示从marker后偏移offset条记录开始查询。默认为0，取值范围为0-500的整数。当offset为0时，表示从marker后第一条记录开始输出。 - 限制offset最大值是出于API性能考虑，您可以搭配marker使用该参数实现翻页，例如每页50条记录，1-11页内都可以直接使用offset跳转到指定页，但到11页后，由于offset限制为500，您需要使用第11页返回的marker作为下次查询的marker，以实现翻页到12-22页。 取值范围：0-500的整数，默认为0。 
     * @param {number} [limit] **参数说明**：分页查询时每页显示的记录数。 **取值范围**：1-500的整数，默认为500。 
     * @param {string} [marker] 上一次分页查询结果中最后一条记录的ID，在上一次分页查询时由物联网平台返回获得。分页查询时物联网平台是按marker也就是记录ID降序查询的，越新的数据记录ID也会越大。若填写marker，则本次只查询记录ID小于marker的数据记录。若不填写，则从记录ID最大也就是最新的一条数据开始查询。如果需要依次查询所有数据，则每次查询时必须填写上一次查询响应中的marker值。 
     * @param {string} [instanceType] **参数说明**：实例类型。 **取值范围**： - standard：标准版实例 - enterprise：企业版实例 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceFlavors(listInstanceFlavorsRequest?: ListInstanceFlavorsRequest): Promise<ListInstanceFlavorsResponse> {
        const options = ParamCreater().listInstanceFlavors(listInstanceFlavorsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加实例标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加实例标签
     * @param {string} instanceId **参数说明**：实例ID。 **取值范围**：长度不超过36，由小写字母[a-f]、数字、连接符（-）的组成。 
     * @param {BindInstanceTags} bindInstanceTagsRequestBody 添加实例标签请求结构体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public bindInstanceTags(bindInstanceTagsRequest?: BindInstanceTagsRequest): Promise<BindInstanceTagsResponse> {
        const options = ParamCreater().bindInstanceTags(bindInstanceTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改设备接入实例的计费模式，支持将按需计费模式修改为包年/包月计费模式。
     * 接口约束：当前实例的规格支持包年/包月计费模式时，才可以修改实例的计费模式为包年/包月。支持的实例规格请参见[[产品规格说明](https://support.huaweicloud.com/productdesc-iothub/iot_04_0014.html)](tag:hws)[[产品规格说明](https://support.huaweicloud.com/intl/zh-cn/productdesc-iothub/iot_04_0014.html)](tag:hws_hk)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改实例计费模式
     * @param {string} instanceId **参数说明**：实例ID。 **取值范围**：长度不超过36，由小写字母[a-f]、数字、连接符（-）的组成。 
     * @param {ChangeInstanceChargeMode} changeInstanceChargeModeRequestBody 修改实例计费模式请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeInstanceChargeMode(changeInstanceChargeModeRequest?: ChangeInstanceChargeModeRequest): Promise<ChangeInstanceChargeModeResponse> {
        const options = ParamCreater().changeInstanceChargeMode(changeInstanceChargeModeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户可以调用此接口创建一个设备接入实例。支持的实例规格请参见[[产品规格说明](https://support.huaweicloud.com/productdesc-iothub/iot_04_0014.html)](tag:hws)[[产品规格说明](https://support.huaweicloud.com/intl/zh-cn/productdesc-iothub/iot_04_0014.html)](tag:hws_hk)。
     * [接口约束：
     * - 请保证账户余额充足，此接口无法使用优惠券支付，在创建包年/包月实例时，若余额不足会创建一个待支付订单。
     * - 若想使用优惠券，请将请求中的is_auto_pay字段设置为false，参考[支付包年/包月产品订单](https://support.huaweicloud.com/api-bpconsole/api_order_00016.html#section0)进行支付，或者在华为云官网页面使用优惠券进行支付。
     * - 如果您需要退订包年/包月资源，请参考[退订包年/包月资源](https://support.huaweicloud.com/api-bpconsole/api_order_00019.html)。](tag:hws)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建设备接入实例
     * @param {CreateInstance} createInstanceRequestBody CreateInstance
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
     * 删除设备接入实例。约束：此接口仅支持删除按需计费的实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除实例
     * @param {string} instanceId **参数说明**：实例ID。 **取值范围**：长度不超过36，由小写字母[a-f]、数字、连接符（-）的组成。 
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
     * 用户可以调用此接口查询设备接入实例列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例列表
     * @param {number} [offset] **参数说明**：表示从marker后偏移offset条记录开始查询。默认为0，取值范围为0-500的整数。当offset为0时，表示从marker后第一条记录开始输出。 - 限制offset最大值是出于API性能考虑，您可以搭配marker使用该参数实现翻页，例如每页50条记录，1-11页内都可以直接使用offset跳转到指定页，但到11页后，由于offset限制为500，您需要使用第11页返回的marker作为下次查询的marker，以实现翻页到12-22页。 取值范围：0-500的整数，默认为0。 
     * @param {number} [limit] **参数说明**：分页查询时每页显示的记录数。 **取值范围**：1-500的整数，默认为500。 
     * @param {string} [marker] 上一次分页查询结果中最后一条记录的ID，在上一次分页查询时由物联网平台返回获得。分页查询时物联网平台是按marker也就是记录ID降序查询的，越新的数据记录ID也会越大。若填写marker，则本次只查询记录ID小于marker的数据记录。若不填写，则从记录ID最大也就是最新的一条数据开始查询。如果需要依次查询所有数据，则每次查询时必须填写上一次查询响应中的marker值。 
     * @param {string} [name] **参数说明**：设备接入实例名称，匹配规则为模糊匹配。 **取值范围**：由中文字符，英文字母、数字及“_”、“-”组成，且长度为[1-64]个字符。 
     * @param {string} [instanceType] **参数说明**：实例类型。 **取值范围**： - standard：标准版实例 - enterprise：企业版实例 
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
     * 修改设备接入实例的规格。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改实例规格信息
     * @param {string} instanceId **参数说明**：实例ID。 **取值范围**：长度不超过36，由小写字母[a-f]、数字、连接符（-）的组成。 
     * @param {ResizeInstance} resizeInstanceRequestBody 修改实例规格信息请求体
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
     * 查询设备接入实例详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例详情
     * @param {string} instanceId **参数说明**：实例ID。 **取值范围**：长度不超过36，由小写字母[a-f]、数字、连接符（-）的组成。 
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
     * 删除实例标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除实例标签
     * @param {string} instanceId **参数说明**：实例ID。 **取值范围**：长度不超过36，由小写字母[a-f]、数字、连接符（-）的组成。 
     * @param {UnbindInstanceTags} unbindInstanceTagsRequestBody 删除实例标签请求结构体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public unbindInstanceTags(unbindInstanceTagsRequest?: UnbindInstanceTagsRequest): Promise<UnbindInstanceTagsResponse> {
        const options = ParamCreater().unbindInstanceTags(unbindInstanceTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改设备接入实例信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改实例信息
     * @param {string} instanceId **参数说明**：实例ID。 **取值范围**：长度不超过36，由小写字母[a-f]、数字、连接符（-）的组成。 
     * @param {UpdateInstance} updateInstanceRequestBody UpdateInstance
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
     * 用户可以调用此接口查询设备接入实例任务列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例任务列表
     * @param {string} instanceId **参数说明**：实例ID。 **取值范围**：长度不超过36，由小写字母[a-f]、数字、连接符（-）的组成。 
     * @param {number} [offset] **参数说明**：表示从marker后偏移offset条记录开始查询。默认为0，取值范围为0-500的整数。当offset为0时，表示从marker后第一条记录开始输出。 - 限制offset最大值是出于API性能考虑，您可以搭配marker使用该参数实现翻页，例如每页50条记录，1-11页内都可以直接使用offset跳转到指定页，但到11页后，由于offset限制为500，您需要使用第11页返回的marker作为下次查询的marker，以实现翻页到12-22页。 取值范围：0-500的整数，默认为0。 
     * @param {number} [limit] **参数说明**：分页查询时每页显示的记录数。 **取值范围**：1-500的整数，默认为500。 
     * @param {string} [marker] 上一次分页查询结果中最后一条记录的ID，在上一次分页查询时由物联网平台返回获得。分页查询时物联网平台是按marker也就是记录ID降序查询的，越新的数据记录ID也会越大。若填写marker，则本次只查询记录ID小于marker的数据记录。若不填写，则从记录ID最大也就是最新的一条数据开始查询。如果需要依次查询所有数据，则每次查询时必须填写上一次查询响应中的marker值。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceTasks(listInstanceTasksRequest?: ListInstanceTasksRequest): Promise<ListInstanceTasksResponse> {
        const options = ParamCreater().listInstanceTasks(listInstanceTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户可以调用此接口对运行失败的实例任务进行重试。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重试实例任务
     * @param {string} instanceId **参数说明**：实例ID。 **取值范围**：长度不超过36，由小写字母[a-f]、数字、连接符（-）的组成。 
     * @param {string} taskId 任务Id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public retryInstanceTask(retryInstanceTaskRequest?: RetryInstanceTaskRequest): Promise<RetryInstanceTaskResponse> {
        const options = ParamCreater().retryInstanceTask(retryInstanceTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户可以调用此接口查询设备接入实例任务详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例任务详情
     * @param {string} instanceId **参数说明**：实例ID。 **取值范围**：长度不超过36，由小写字母[a-f]、数字、连接符（-）的组成。 
     * @param {string} taskId 任务Id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceTask(showInstanceTaskRequest?: ShowInstanceTaskRequest): Promise<ShowInstanceTaskResponse> {
        const options = ParamCreater().showInstanceTask(showInstanceTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 用户可以调用此接口查询设备接入服务支持的实例规格列表。支持的实例规格请参见[[产品规格说明](https://support.huaweicloud.com/productdesc-iothub/iot_04_0014.html)](tag:hws)[[产品规格说明](https://support.huaweicloud.com/intl/zh-cn/productdesc-iothub/iot_04_0014.html)](tag:hws_hk)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceFlavors(listInstanceFlavorsRequest?: ListInstanceFlavorsRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/iotda-instances/flavors",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let marker;
            
            let instanceType;

            if (listInstanceFlavorsRequest !== null && listInstanceFlavorsRequest !== undefined) {
                if (listInstanceFlavorsRequest instanceof ListInstanceFlavorsRequest) {
                    offset = listInstanceFlavorsRequest.offset;
                    limit = listInstanceFlavorsRequest.limit;
                    marker = listInstanceFlavorsRequest.marker;
                    instanceType = listInstanceFlavorsRequest.instanceType;
                } else {
                    offset = listInstanceFlavorsRequest['offset'];
                    limit = listInstanceFlavorsRequest['limit'];
                    marker = listInstanceFlavorsRequest['marker'];
                    instanceType = listInstanceFlavorsRequest['instance_type'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (instanceType !== null && instanceType !== undefined) {
                localVarQueryParameter['instance_type'] = instanceType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加实例标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        bindInstanceTags(bindInstanceTagsRequest?: BindInstanceTagsRequest) {
            const options = {
                method: "POST",
                url: "/v5/iot/{project_id}/iotda-instances/{instance_id}/bind-tags",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (bindInstanceTagsRequest !== null && bindInstanceTagsRequest !== undefined) {
                if (bindInstanceTagsRequest instanceof BindInstanceTagsRequest) {
                    instanceId = bindInstanceTagsRequest.instanceId;
                    body = bindInstanceTagsRequest.body
                } else {
                    instanceId = bindInstanceTagsRequest['instance_id'];
                    body = bindInstanceTagsRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling bindInstanceTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改设备接入实例的计费模式，支持将按需计费模式修改为包年/包月计费模式。
         * 接口约束：当前实例的规格支持包年/包月计费模式时，才可以修改实例的计费模式为包年/包月。支持的实例规格请参见[[产品规格说明](https://support.huaweicloud.com/productdesc-iothub/iot_04_0014.html)](tag:hws)[[产品规格说明](https://support.huaweicloud.com/intl/zh-cn/productdesc-iothub/iot_04_0014.html)](tag:hws_hk)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeInstanceChargeMode(changeInstanceChargeModeRequest?: ChangeInstanceChargeModeRequest) {
            const options = {
                method: "POST",
                url: "/v5/iot/{project_id}/iotda-instances/{instance_id}/change-charge-mode",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (changeInstanceChargeModeRequest !== null && changeInstanceChargeModeRequest !== undefined) {
                if (changeInstanceChargeModeRequest instanceof ChangeInstanceChargeModeRequest) {
                    instanceId = changeInstanceChargeModeRequest.instanceId;
                    body = changeInstanceChargeModeRequest.body
                } else {
                    instanceId = changeInstanceChargeModeRequest['instance_id'];
                    body = changeInstanceChargeModeRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling changeInstanceChargeMode.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户可以调用此接口创建一个设备接入实例。支持的实例规格请参见[[产品规格说明](https://support.huaweicloud.com/productdesc-iothub/iot_04_0014.html)](tag:hws)[[产品规格说明](https://support.huaweicloud.com/intl/zh-cn/productdesc-iothub/iot_04_0014.html)](tag:hws_hk)。
         * [接口约束：
         * - 请保证账户余额充足，此接口无法使用优惠券支付，在创建包年/包月实例时，若余额不足会创建一个待支付订单。
         * - 若想使用优惠券，请将请求中的is_auto_pay字段设置为false，参考[支付包年/包月产品订单](https://support.huaweicloud.com/api-bpconsole/api_order_00016.html#section0)进行支付，或者在华为云官网页面使用优惠券进行支付。
         * - 如果您需要退订包年/包月资源，请参考[退订包年/包月资源](https://support.huaweicloud.com/api-bpconsole/api_order_00019.html)。](tag:hws)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createInstance(createInstanceRequest?: CreateInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v5/iot/{project_id}/iotda-instances",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createInstanceRequest !== null && createInstanceRequest !== undefined) {
                if (createInstanceRequest instanceof CreateInstanceRequest) {
                    body = createInstanceRequest.body
                } else {
                    body = createInstanceRequest['body'];
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
         * 删除设备接入实例。约束：此接口仅支持删除按需计费的实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteInstance(deleteInstanceRequest?: DeleteInstanceRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/iot/{project_id}/iotda-instances/{instance_id}",
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
         * 用户可以调用此接口查询设备接入实例列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstances(listInstancesRequest?: ListInstancesRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/iotda-instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let marker;
            
            let name;
            
            let instanceType;

            if (listInstancesRequest !== null && listInstancesRequest !== undefined) {
                if (listInstancesRequest instanceof ListInstancesRequest) {
                    offset = listInstancesRequest.offset;
                    limit = listInstancesRequest.limit;
                    marker = listInstancesRequest.marker;
                    name = listInstancesRequest.name;
                    instanceType = listInstancesRequest.instanceType;
                } else {
                    offset = listInstancesRequest['offset'];
                    limit = listInstancesRequest['limit'];
                    marker = listInstancesRequest['marker'];
                    name = listInstancesRequest['name'];
                    instanceType = listInstancesRequest['instance_type'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
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
            if (instanceType !== null && instanceType !== undefined) {
                localVarQueryParameter['instance_type'] = instanceType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改设备接入实例的规格。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resizeInstance(resizeInstanceRequest?: ResizeInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v5/iot/{project_id}/iotda-instances/{instance_id}/resize",
                contentType: "application/json;charset=UTF-8",
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
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询设备接入实例详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstance(showInstanceRequest?: ShowInstanceRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/iotda-instances/{instance_id}",
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
         * 删除实例标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        unbindInstanceTags(unbindInstanceTagsRequest?: UnbindInstanceTagsRequest) {
            const options = {
                method: "POST",
                url: "/v5/iot/{project_id}/iotda-instances/{instance_id}/unbind-tags",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (unbindInstanceTagsRequest !== null && unbindInstanceTagsRequest !== undefined) {
                if (unbindInstanceTagsRequest instanceof UnbindInstanceTagsRequest) {
                    instanceId = unbindInstanceTagsRequest.instanceId;
                    body = unbindInstanceTagsRequest.body
                } else {
                    instanceId = unbindInstanceTagsRequest['instance_id'];
                    body = unbindInstanceTagsRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling unbindInstanceTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改设备接入实例信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInstance(updateInstanceRequest?: UpdateInstanceRequest) {
            const options = {
                method: "PUT",
                url: "/v5/iot/{project_id}/iotda-instances/{instance_id}",
                contentType: "application/json;charset=UTF-8",
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
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户可以调用此接口查询设备接入实例任务列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceTasks(listInstanceTasksRequest?: ListInstanceTasksRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/iotda-instances/{instance_id}/tasks",
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
            
            let marker;

            if (listInstanceTasksRequest !== null && listInstanceTasksRequest !== undefined) {
                if (listInstanceTasksRequest instanceof ListInstanceTasksRequest) {
                    instanceId = listInstanceTasksRequest.instanceId;
                    offset = listInstanceTasksRequest.offset;
                    limit = listInstanceTasksRequest.limit;
                    marker = listInstanceTasksRequest.marker;
                } else {
                    instanceId = listInstanceTasksRequest['instance_id'];
                    offset = listInstanceTasksRequest['offset'];
                    limit = listInstanceTasksRequest['limit'];
                    marker = listInstanceTasksRequest['marker'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceTasks.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户可以调用此接口对运行失败的实例任务进行重试。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        retryInstanceTask(retryInstanceTaskRequest?: RetryInstanceTaskRequest) {
            const options = {
                method: "POST",
                url: "/v5/iot/{project_id}/iotda-instances/{instance_id}/tasks/{task_id}/retry",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let taskId;

            if (retryInstanceTaskRequest !== null && retryInstanceTaskRequest !== undefined) {
                if (retryInstanceTaskRequest instanceof RetryInstanceTaskRequest) {
                    instanceId = retryInstanceTaskRequest.instanceId;
                    taskId = retryInstanceTaskRequest.taskId;
                } else {
                    instanceId = retryInstanceTaskRequest['instance_id'];
                    taskId = retryInstanceTaskRequest['task_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling retryInstanceTask.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling retryInstanceTask.');
            }

            options.pathParams = { 'instance_id': instanceId,'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户可以调用此接口查询设备接入实例任务详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceTask(showInstanceTaskRequest?: ShowInstanceTaskRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/iotda-instances/{instance_id}/tasks/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let taskId;

            if (showInstanceTaskRequest !== null && showInstanceTaskRequest !== undefined) {
                if (showInstanceTaskRequest instanceof ShowInstanceTaskRequest) {
                    instanceId = showInstanceTaskRequest.instanceId;
                    taskId = showInstanceTaskRequest.taskId;
                } else {
                    instanceId = showInstanceTaskRequest['instance_id'];
                    taskId = showInstanceTaskRequest['task_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInstanceTask.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showInstanceTask.');
            }

            options.pathParams = { 'instance_id': instanceId,'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): IoTDMClient {
    return new IoTDMClient(client);
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