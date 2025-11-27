import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AvailabilityZone } from './model/AvailabilityZone';
import { AvailabilityZones } from './model/AvailabilityZones';
import { BindVportRequest } from './model/BindVportRequest';
import { BindVportRequestBody } from './model/BindVportRequestBody';
import { BindVportResponse } from './model/BindVportResponse';
import { Connection } from './model/Connection';
import { CreateConnectionOption } from './model/CreateConnectionOption';
import { CreateConnectionRequest } from './model/CreateConnectionRequest';
import { CreateConnectionRequestBody } from './model/CreateConnectionRequestBody';
import { CreateConnectionResponse } from './model/CreateConnectionResponse';
import { CreateInstanceRequest } from './model/CreateInstanceRequest';
import { CreateInstanceResponse } from './model/CreateInstanceResponse';
import { CreatePostPaidInstanceRequestBody } from './model/CreatePostPaidInstanceRequestBody';
import { CreatePostpaidInstanceOption } from './model/CreatePostpaidInstanceOption';
import { DeleteConnectionRequest } from './model/DeleteConnectionRequest';
import { DeleteConnectionResponse } from './model/DeleteConnectionResponse';
import { DeleteInstanceRequest } from './model/DeleteInstanceRequest';
import { DeleteInstanceResponse } from './model/DeleteInstanceResponse';
import { Flavor } from './model/Flavor';
import { Instance } from './model/Instance';
import { Job } from './model/Job';
import { ListAvailabilityZonesRequest } from './model/ListAvailabilityZonesRequest';
import { ListAvailabilityZonesResponse } from './model/ListAvailabilityZonesResponse';
import { ListConnectionsAllInstancesRequest } from './model/ListConnectionsAllInstancesRequest';
import { ListConnectionsAllInstancesResponse } from './model/ListConnectionsAllInstancesResponse';
import { ListConnectionsRequest } from './model/ListConnectionsRequest';
import { ListConnectionsResponse } from './model/ListConnectionsResponse';
import { ListFlavorsRequest } from './model/ListFlavorsRequest';
import { ListFlavorsResponse } from './model/ListFlavorsResponse';
import { ListInstancesRequest } from './model/ListInstancesRequest';
import { ListInstancesResponse } from './model/ListInstancesResponse';
import { ListQuotasRequest } from './model/ListQuotasRequest';
import { ListQuotasResponse } from './model/ListQuotasResponse';
import { ListResourceJobsRequest } from './model/ListResourceJobsRequest';
import { ListResourceJobsResponse } from './model/ListResourceJobsResponse';
import { PageInfo } from './model/PageInfo';
import { PostPaidChargeInfos } from './model/PostPaidChargeInfos';
import { QuotaObject } from './model/QuotaObject';
import { Quotas } from './model/Quotas';
import { RemoteInfosOption } from './model/RemoteInfosOption';
import { RemoteInfosResult } from './model/RemoteInfosResult';
import { ShowConnectionRequest } from './model/ShowConnectionRequest';
import { ShowConnectionResponse } from './model/ShowConnectionResponse';
import { ShowInstanceRequest } from './model/ShowInstanceRequest';
import { ShowInstanceResponse } from './model/ShowInstanceResponse';
import { TunnelInfoOption } from './model/TunnelInfoOption';
import { TunnelInfoResult } from './model/TunnelInfoResult';
import { UnbindVportRequest } from './model/UnbindVportRequest';
import { UnbindVportRequestBody } from './model/UnbindVportRequestBody';
import { UnbindVportResponse } from './model/UnbindVportResponse';
import { UpdateConnectionOption } from './model/UpdateConnectionOption';
import { UpdateConnectionRequest } from './model/UpdateConnectionRequest';
import { UpdateConnectionRequestBody } from './model/UpdateConnectionRequestBody';
import { UpdateConnectionResponse } from './model/UpdateConnectionResponse';
import { UpdateInstanceOption } from './model/UpdateInstanceOption';
import { UpdateInstanceRequest } from './model/UpdateInstanceRequest';
import { UpdateInstanceRequestBody } from './model/UpdateInstanceRequestBody';
import { UpdateInstanceResponse } from './model/UpdateInstanceResponse';
import { Vport } from './model/Vport';

export class EswClient {
    public static newBuilder(): ClientBuilder<EswClient> {
            let client = new ClientBuilder<EswClient>(newClient);
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
     * 当您的二层连接创建成功后，您可以通过调用此接口将一个虚拟IP绑定到二层连接上。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 将一个虚拟IP绑定到二层连接上
     * @param {string} connectionId - 参数解释：二层连接的唯一标识。 - 约束限制：带“-”的UUID格式。 - 取值范围：不涉及。 - 默认取值：不涉及。
     * @param {BindVportRequestBody} bindVportRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public bindVport(bindVportRequest?: BindVportRequest): Promise<BindVportResponse> {
        const options = ParamCreater().bindVport(bindVportRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当您的ESW实例创建成功后，您可以通过调用此接口在该实例上创建一个二层连接。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建二层连接
     * @param {string} instanceId - 参数解释：ESW实例的唯一标识。 - 约束限制：带“-”的UUID格式。 - 取值范围：不涉及。 - 默认取值：不涉及。
     * @param {CreateConnectionRequestBody} createConnectionRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createConnection(createConnectionRequest?: CreateConnectionRequest): Promise<CreateConnectionResponse> {
        const options = ParamCreater().createConnection(createConnectionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 您可通过调用本接口创建一个ESW实例。该接口是一个异步接口，当前创建ESW实例的请求下发成功后，会响应job_id以及实例ID等信息，需要通过[调用查询任务的执行状态查询job状态](ListResourceJobs.xml)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建ESW实例
     * @param {CreatePostPaidInstanceRequestBody} createInstanceRequestBody 
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
     * 当您已创建的二层连接不再使用时，您可以通过调用该接口删除二层连接。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除二层连接
     * @param {string} connectionId - 参数解释：二层连接的唯一标识。 - 约束限制：带“-”的UUID格式。 - 取值范围：不涉及。 - 默认取值：不涉及。
     * @param {string} instanceId - 参数解释：ESW实例的唯一标识。 - 约束限制：带“-”的UUID格式。 - 取值范围：不涉及。 - 默认取值：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteConnection(deleteConnectionRequest?: DeleteConnectionRequest): Promise<DeleteConnectionResponse> {
        const options = ParamCreater().deleteConnection(deleteConnectionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当您创建的ESW实例不再使用时，您可以通过调用该接口删除ESW实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除ESW实例
     * @param {string} instanceId - 参数解释：ESW实例的唯一标识。 - 约束限制：带“-”的UUID格式。 - 取值范围：不涉及。 - 默认取值：不涉及。
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
     * 当您在创建ESW实例时，需要通过调用本接口获取ESW实例主备节点可分布的可用区列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询ESW实例可用区
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAvailabilityZones(listAvailabilityZonesRequest?: ListAvailabilityZonesRequest): Promise<ListAvailabilityZonesResponse> {
        const options = ParamCreater().listAvailabilityZones();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当您的二层连接创建成功后，您可以通过调用此接口查询ESW实例下的二层连接列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例下的二层连接列表
     * @param {string} instanceId - 参数解释：ESW实例的唯一标识。 - 约束限制：带“-”的UUID格式。 - 取值范围：不涉及。 - 默认取值：不涉及。
     * @param {string} [id] - 参数解释：二层连接资源ID。二层连接创建成功后，会生成一个ID，是二层连接对应的唯一标识。 - 约束限制：带“-”的UUID格式。 - 取值范围：不涉及。 - 默认取值：不涉及。
     * @param {string} [name] - 参数解释：二层连接的名称。 - 约束限制：   - 长度范围为1~64个字符。   - 名称由中文、英文字母、数字、下划线（_）、中划线（-）、点（.）组成。 - 取值范围：不涉及。 - 默认取值：不涉及。
     * @param {number} [limit] - 参数解释：分页查询每页返回的记录个数。 - 约束限制：limit需要和marker配合使用，详细规则请见marker的参数说明。 - 取值范围：0~2^31-1。 - 默认取值：2000。
     * @param {string} [marker] - 参数解释：分页查询的起始资源ID，表示从指定资源的下一条记录开始查询。 - 约束限制：marker需要和limit配合使用。   - 若不传入marker和limit参数，查询结果返回第一页全部资源记录。   - 若不传入marker参数，limit为10，查询结果返回第1~10条资源记录。   - 若marker为第10条记录的资源ID，limit为10，查询结果返回第11~20条资源记录。   - 若marker为第10条记录的资源ID，不传入limit参数，查询结果返回第11~2000条（limit默认值2000）资源记录。 - 取值范围：不涉及。 - 默认取值：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listConnections(listConnectionsRequest?: ListConnectionsRequest): Promise<ListConnectionsResponse> {
        const options = ParamCreater().listConnections(listConnectionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当您的二层连接创建成功后，您可以通过调用此接口查询租户所有二层连接信息列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询二层连接列表
     * @param {string} [id] - 参数解释：二层连接资源ID。二层连接创建成功后，会生成一个ID，是二层连接对应的唯一标识。 - 约束限制：带“-”的UUID格式。 - 取值范围：不涉及。 - 默认取值：不涉及。
     * @param {string} [name] - 参数解释：二层连接的名称。 - 约束限制：   - 长度范围为1~64个字符。   - 名称由中文、英文字母、数字、下划线（_）、中划线（-）、点（.）组成。 - 取值范围：不涉及。 - 默认取值：不涉及。
     * @param {string} [instanceId] - 参数解释：ESW资源ID。ESW创建成功后，会生成一个ESW ID，是ESW对应的唯一标识。 - 约束限制：带“-”的UUID格式。 - 取值范围：不涉及。 - 默认取值：不涉及。
     * @param {string} [vpcId] - 参数解释：ESW所在VPC资源ID。 - 约束限制：   - 需要使用本租户下可操作的VPC资源的ID。   - 带“-”的UUID格式。 - 取值范围：不涉及。 - 默认取值：不涉及。
     * @param {string} [virsubnetId] - 参数解释：二层连接关联的二层子网ID。 - 约束限制：   - 需要使用本租户下可操作的子网资源的ID；此值即为子网详情中的“网络ID”参数值。   - 带“-”的UUID格式。 - 取值范围：不涉及。 - 默认取值：不涉及。
     * @param {number} [limit] - 参数解释：分页查询每页返回的记录个数。 - 约束限制：limit需要和marker配合使用，详细规则请见marker的参数说明。 - 取值范围：0~2^31-1。 - 默认取值：2000。
     * @param {string} [marker] - 参数解释：分页查询的起始资源ID，表示从指定资源的下一条记录开始查询。 - 约束限制：marker需要和limit配合使用。   - 若不传入marker和limit参数，查询结果返回第一页全部资源记录。   - 若不传入marker参数，limit为10，查询结果返回第1~10条资源记录。   - 若marker为第10条记录的资源ID，limit为10，查询结果返回第11~20条资源记录。   - 若marker为第10条记录的资源ID，不传入limit参数，查询结果返回第11~2000条（limit默认值2000）资源记录。 - 取值范围：不涉及。 - 默认取值：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listConnectionsAllInstances(listConnectionsAllInstancesRequest?: ListConnectionsAllInstancesRequest): Promise<ListConnectionsAllInstancesResponse> {
        const options = ParamCreater().listConnectionsAllInstances(listConnectionsAllInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户可选用的ESW实例规格
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询ESW实例规格列表
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
     * 当您的ESW实例创建成功后，您可以通过调用此接口查询所有ESW实例的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询ESW实例列表
     * @param {string} [id] - 参数解释：ESW资源ID。ESW创建成功后，会生成一个ESW ID，是ESW对应的唯一标识。 - 约束限制：带“-”的UUID格式。 - 取值范围：不涉及。 - 默认取值：不涉及。
     * @param {string} [name] - 参数解释：ESW实例的名称。 - 约束限制：   - 长度范围为1~64个字符。   - 名称由中文、英文字母、数字、下划线（_）、中划线（-）、点（.）组成。 - 取值范围：不涉及。 - 默认取值：不涉及。
     * @param {string} [description] - 参数解释：ESW的描述信息。 - 约束限制：   - 长度范围为0~255个字符。   - 不能包含“&lt;”和“&gt;”。 - 取值范围：不涉及。 - 默认取值：不涉及。
     * @param {number} [limit] - 参数解释：分页查询每页返回的记录个数。 - 约束限制：limit需要和marker配合使用，详细规则请见marker的参数说明。 - 取值范围：0~2^31-1。 - 默认取值：2000。
     * @param {string} [marker] - 参数解释：分页查询的起始资源ID，表示从指定资源的下一条记录开始查询。 - 约束限制：marker需要和limit配合使用。   - 若不传入marker和limit参数，查询结果返回第一页全部资源记录。   - 若不传入marker参数，limit为10，查询结果返回第1~10条资源记录。   - 若marker为第10条记录的资源ID，limit为10，查询结果返回第11~20条资源记录。   - 若marker为第10条记录的资源ID，不传入limit参数，查询结果返回第11~2000条（limit默认值2000）资源记录。 - 取值范围：不涉及。 - 默认取值：不涉及。
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
     * 查询租户的ESW实例配额
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询ESW实例配额
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listQuotas(listQuotasRequest?: ListQuotasRequest): Promise<ListQuotasResponse> {
        const options = ParamCreater().listQuotas();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户指定资源相关的任务信息列表，COMPLETED表示任务已成功完成，RUNNING表示任务正在执行中，FAILED表示任务执行失败。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询任务的执行状态
     * @param {string} resourceId - 参数解释：ESW实例的唯一标识。 - 约束限制：带“-”的UUID格式。 - 取值范围：不涉及。 - 默认取值：不涉及。
     * @param {number} [limit] - 参数解释：分页查询每页返回的记录个数。 - 约束限制：limit需要和marker配合使用，详细规则请见marker的参数说明。 - 取值范围：0~2^31-1。 - 默认取值：2000。
     * @param {string} [marker] - 参数解释：分页查询的起始资源ID，表示从指定资源的下一条记录开始查询。 - 约束限制：marker需要和limit配合使用。   - 若不传入marker和limit参数，查询结果返回第一页全部资源记录。   - 若不传入marker参数，limit为10，查询结果返回第1~10条资源记录。   - 若marker为第10条记录的资源ID，limit为10，查询结果返回第11~20条资源记录。   - 若marker为第10条记录的资源ID，不传入limit参数，查询结果返回第11~2000条（limit默认值2000）资源记录。 - 取值范围：不涉及。 - 默认取值：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listResourceJobs(listResourceJobsRequest?: ListResourceJobsRequest): Promise<ListResourceJobsResponse> {
        const options = ParamCreater().listResourceJobs(listResourceJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当您的二层连接创建成功后，您可以通过调用此接口查询单二层连接的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询二层连接详情
     * @param {string} connectionId - 参数解释：二层连接的唯一标识。 - 约束限制：带“-”的UUID格式。 - 取值范围：不涉及。 - 默认取值：不涉及。
     * @param {string} instanceId - 参数解释：ESW实例的唯一标识。 - 约束限制：带“-”的UUID格式。 - 取值范围：不涉及。 - 默认取值：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showConnection(showConnectionRequest?: ShowConnectionRequest): Promise<ShowConnectionResponse> {
        const options = ParamCreater().showConnection(showConnectionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当您的ESW实例创建成功后，您可以通过调用此接口查询单个ESW实例的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询ESW实例详情
     * @param {string} instanceId - 参数解释：ESW实例的唯一标识。 - 约束限制：带“-”的UUID格式。 - 取值范围：不涉及。 - 默认取值：不涉及。
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
     * 当您的二层连接已经绑定虚拟IP时，您可以通过调用此接口将虚拟IP与二层连接解绑。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 将一个虚拟IP从二层连接解绑
     * @param {string} connectionId - 参数解释：二层连接的唯一标识。 - 约束限制：带“-”的UUID格式。 - 取值范围：不涉及。 - 默认取值：不涉及。
     * @param {UnbindVportRequestBody} unbindVportRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public unbindVport(unbindVportRequest?: UnbindVportRequest): Promise<UnbindVportResponse> {
        const options = ParamCreater().unbindVport(unbindVportRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当您的二层连接创建成功后，您可以通过调用此接口更新一个二层连接的名称。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新二层连接
     * @param {string} connectionId - 参数解释：二层连接的唯一标识。 - 约束限制：带“-”的UUID格式。 - 取值范围：不涉及。 - 默认取值：不涉及。
     * @param {string} instanceId - 参数解释：ESW实例的唯一标识。 - 约束限制：带“-”的UUID格式。 - 取值范围：不涉及。 - 默认取值：不涉及。
     * @param {UpdateConnectionRequestBody} updateConnectionRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateConnection(updateConnectionRequest?: UpdateConnectionRequest): Promise<UpdateConnectionResponse> {
        const options = ParamCreater().updateConnection(updateConnectionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当您的ESW实例创建成功后，您可以通过调用此接口更新一个ESW实例的名称或者描述信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新ESW实例
     * @param {string} instanceId - 参数解释：ESW实例的唯一标识。 - 约束限制：带“-”的UUID格式。 - 取值范围：不涉及。 - 默认取值：不涉及。
     * @param {UpdateInstanceRequestBody} updateInstanceRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInstance(updateInstanceRequest?: UpdateInstanceRequest): Promise<UpdateInstanceResponse> {
        const options = ParamCreater().updateInstance(updateInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 当您的二层连接创建成功后，您可以通过调用此接口将一个虚拟IP绑定到二层连接上。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        bindVport(bindVportRequest?: BindVportRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/l2cg/connections/{connection_id}/vports/bind",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let connectionId;

            if (bindVportRequest !== null && bindVportRequest !== undefined) {
                if (bindVportRequest instanceof BindVportRequest) {
                    connectionId = bindVportRequest.connectionId;
                    body = bindVportRequest.body
                } else {
                    connectionId = bindVportRequest['connection_id'];
                    body = bindVportRequest['body'];
                }
            }

        
            if (connectionId === null || connectionId === undefined) {
            throw new RequiredError('connectionId','Required parameter connectionId was null or undefined when calling bindVport.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'connection_id': connectionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当您的ESW实例创建成功后，您可以通过调用此接口在该实例上创建一个二层连接。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createConnection(createConnectionRequest?: CreateConnectionRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/l2cg/instances/{instance_id}/connections",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createConnectionRequest !== null && createConnectionRequest !== undefined) {
                if (createConnectionRequest instanceof CreateConnectionRequest) {
                    instanceId = createConnectionRequest.instanceId;
                    body = createConnectionRequest.body
                } else {
                    instanceId = createConnectionRequest['instance_id'];
                    body = createConnectionRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createConnection.');
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
         * 您可通过调用本接口创建一个ESW实例。该接口是一个异步接口，当前创建ESW实例的请求下发成功后，会响应job_id以及实例ID等信息，需要通过[调用查询任务的执行状态查询job状态](ListResourceJobs.xml)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createInstance(createInstanceRequest?: CreateInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/l2cg/instances",
                contentType: "application/json",
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
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当您已创建的二层连接不再使用时，您可以通过调用该接口删除二层连接。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteConnection(deleteConnectionRequest?: DeleteConnectionRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/l2cg/instances/{instance_id}/connections/{connection_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let connectionId;
            
            let instanceId;

            if (deleteConnectionRequest !== null && deleteConnectionRequest !== undefined) {
                if (deleteConnectionRequest instanceof DeleteConnectionRequest) {
                    connectionId = deleteConnectionRequest.connectionId;
                    instanceId = deleteConnectionRequest.instanceId;
                } else {
                    connectionId = deleteConnectionRequest['connection_id'];
                    instanceId = deleteConnectionRequest['instance_id'];
                }
            }

        
            if (connectionId === null || connectionId === undefined) {
            throw new RequiredError('connectionId','Required parameter connectionId was null or undefined when calling deleteConnection.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteConnection.');
            }

            options.pathParams = { 'connection_id': connectionId,'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当您创建的ESW实例不再使用时，您可以通过调用该接口删除ESW实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteInstance(deleteInstanceRequest?: DeleteInstanceRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/l2cg/instances/{instance_id}",
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
         * 当您在创建ESW实例时，需要通过调用本接口获取ESW实例主备节点可分布的可用区列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAvailabilityZones() {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/l2cg/availability-zones",
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
         * 当您的二层连接创建成功后，您可以通过调用此接口查询ESW实例下的二层连接列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listConnections(listConnectionsRequest?: ListConnectionsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/l2cg/instances/{instance_id}/connections",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let id;
            
            let name;
            
            let limit;
            
            let marker;

            if (listConnectionsRequest !== null && listConnectionsRequest !== undefined) {
                if (listConnectionsRequest instanceof ListConnectionsRequest) {
                    instanceId = listConnectionsRequest.instanceId;
                    id = listConnectionsRequest.id;
                    name = listConnectionsRequest.name;
                    limit = listConnectionsRequest.limit;
                    marker = listConnectionsRequest.marker;
                } else {
                    instanceId = listConnectionsRequest['instance_id'];
                    id = listConnectionsRequest['id'];
                    name = listConnectionsRequest['name'];
                    limit = listConnectionsRequest['limit'];
                    marker = listConnectionsRequest['marker'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listConnections.');
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
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
         * 当您的二层连接创建成功后，您可以通过调用此接口查询租户所有二层连接信息列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listConnectionsAllInstances(listConnectionsAllInstancesRequest?: ListConnectionsAllInstancesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/l2cg/connections",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let id;
            
            let name;
            
            let instanceId;
            
            let vpcId;
            
            let virsubnetId;
            
            let limit;
            
            let marker;

            if (listConnectionsAllInstancesRequest !== null && listConnectionsAllInstancesRequest !== undefined) {
                if (listConnectionsAllInstancesRequest instanceof ListConnectionsAllInstancesRequest) {
                    id = listConnectionsAllInstancesRequest.id;
                    name = listConnectionsAllInstancesRequest.name;
                    instanceId = listConnectionsAllInstancesRequest.instanceId;
                    vpcId = listConnectionsAllInstancesRequest.vpcId;
                    virsubnetId = listConnectionsAllInstancesRequest.virsubnetId;
                    limit = listConnectionsAllInstancesRequest.limit;
                    marker = listConnectionsAllInstancesRequest.marker;
                } else {
                    id = listConnectionsAllInstancesRequest['id'];
                    name = listConnectionsAllInstancesRequest['name'];
                    instanceId = listConnectionsAllInstancesRequest['instance_id'];
                    vpcId = listConnectionsAllInstancesRequest['vpc_id'];
                    virsubnetId = listConnectionsAllInstancesRequest['virsubnet_id'];
                    limit = listConnectionsAllInstancesRequest['limit'];
                    marker = listConnectionsAllInstancesRequest['marker'];
                }
            }

        
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (vpcId !== null && vpcId !== undefined) {
                localVarQueryParameter['vpc_id'] = vpcId;
            }
            if (virsubnetId !== null && virsubnetId !== undefined) {
                localVarQueryParameter['virsubnet_id'] = virsubnetId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户可选用的ESW实例规格
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFlavors() {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/l2cg/flavors",
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
         * 当您的ESW实例创建成功后，您可以通过调用此接口查询所有ESW实例的详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstances(listInstancesRequest?: ListInstancesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/l2cg/instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let id;
            
            let name;
            
            let description;
            
            let limit;
            
            let marker;

            if (listInstancesRequest !== null && listInstancesRequest !== undefined) {
                if (listInstancesRequest instanceof ListInstancesRequest) {
                    id = listInstancesRequest.id;
                    name = listInstancesRequest.name;
                    description = listInstancesRequest.description;
                    limit = listInstancesRequest.limit;
                    marker = listInstancesRequest.marker;
                } else {
                    id = listInstancesRequest['id'];
                    name = listInstancesRequest['name'];
                    description = listInstancesRequest['description'];
                    limit = listInstancesRequest['limit'];
                    marker = listInstancesRequest['marker'];
                }
            }

        
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户的ESW实例配额
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listQuotas() {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/l2cg/quotas",
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
         * 查询租户指定资源相关的任务信息列表，COMPLETED表示任务已成功完成，RUNNING表示任务正在执行中，FAILED表示任务执行失败。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listResourceJobs(listResourceJobsRequest?: ListResourceJobsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/l2cg/resources/{resource_id}/jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let resourceId;
            
            let limit;
            
            let marker;

            if (listResourceJobsRequest !== null && listResourceJobsRequest !== undefined) {
                if (listResourceJobsRequest instanceof ListResourceJobsRequest) {
                    resourceId = listResourceJobsRequest.resourceId;
                    limit = listResourceJobsRequest.limit;
                    marker = listResourceJobsRequest.marker;
                } else {
                    resourceId = listResourceJobsRequest['resource_id'];
                    limit = listResourceJobsRequest['limit'];
                    marker = listResourceJobsRequest['marker'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling listResourceJobs.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当您的二层连接创建成功后，您可以通过调用此接口查询单二层连接的详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showConnection(showConnectionRequest?: ShowConnectionRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/l2cg/instances/{instance_id}/connections/{connection_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let connectionId;
            
            let instanceId;

            if (showConnectionRequest !== null && showConnectionRequest !== undefined) {
                if (showConnectionRequest instanceof ShowConnectionRequest) {
                    connectionId = showConnectionRequest.connectionId;
                    instanceId = showConnectionRequest.instanceId;
                } else {
                    connectionId = showConnectionRequest['connection_id'];
                    instanceId = showConnectionRequest['instance_id'];
                }
            }

        
            if (connectionId === null || connectionId === undefined) {
            throw new RequiredError('connectionId','Required parameter connectionId was null or undefined when calling showConnection.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showConnection.');
            }

            options.pathParams = { 'connection_id': connectionId,'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当您的ESW实例创建成功后，您可以通过调用此接口查询单个ESW实例的详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstance(showInstanceRequest?: ShowInstanceRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/l2cg/instances/{instance_id}",
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
         * 当您的二层连接已经绑定虚拟IP时，您可以通过调用此接口将虚拟IP与二层连接解绑。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        unbindVport(unbindVportRequest?: UnbindVportRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/l2cg/connections/{connection_id}/vports/unbind",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let connectionId;

            if (unbindVportRequest !== null && unbindVportRequest !== undefined) {
                if (unbindVportRequest instanceof UnbindVportRequest) {
                    connectionId = unbindVportRequest.connectionId;
                    body = unbindVportRequest.body
                } else {
                    connectionId = unbindVportRequest['connection_id'];
                    body = unbindVportRequest['body'];
                }
            }

        
            if (connectionId === null || connectionId === undefined) {
            throw new RequiredError('connectionId','Required parameter connectionId was null or undefined when calling unbindVport.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'connection_id': connectionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当您的二层连接创建成功后，您可以通过调用此接口更新一个二层连接的名称。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateConnection(updateConnectionRequest?: UpdateConnectionRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/l2cg/instances/{instance_id}/connections/{connection_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let connectionId;
            
            let instanceId;

            if (updateConnectionRequest !== null && updateConnectionRequest !== undefined) {
                if (updateConnectionRequest instanceof UpdateConnectionRequest) {
                    connectionId = updateConnectionRequest.connectionId;
                    instanceId = updateConnectionRequest.instanceId;
                    body = updateConnectionRequest.body
                } else {
                    connectionId = updateConnectionRequest['connection_id'];
                    instanceId = updateConnectionRequest['instance_id'];
                    body = updateConnectionRequest['body'];
                }
            }

        
            if (connectionId === null || connectionId === undefined) {
            throw new RequiredError('connectionId','Required parameter connectionId was null or undefined when calling updateConnection.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateConnection.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'connection_id': connectionId,'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当您的ESW实例创建成功后，您可以通过调用此接口更新一个ESW实例的名称或者描述信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInstance(updateInstanceRequest?: UpdateInstanceRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/l2cg/instances/{instance_id}",
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
    
    }
};

function newClient(client: HcClient): EswClient {
    return new EswClient(client);
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