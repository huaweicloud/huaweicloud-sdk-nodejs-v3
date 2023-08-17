import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { BatchCreateResourceTagsRequest } from './model/BatchCreateResourceTagsRequest';
import { BatchCreateResourceTagsResponse } from './model/BatchCreateResourceTagsResponse';
import { BatchOperateResourceTagsRequestBody } from './model/BatchOperateResourceTagsRequestBody';
import { CreateHostedDirectConnect } from './model/CreateHostedDirectConnect';
import { CreateHostedDirectConnectRequest } from './model/CreateHostedDirectConnectRequest';
import { CreateHostedDirectConnectRequestBody } from './model/CreateHostedDirectConnectRequestBody';
import { CreateHostedDirectConnectResponse } from './model/CreateHostedDirectConnectResponse';
import { CreateResourceTagRequest } from './model/CreateResourceTagRequest';
import { CreateResourceTagRequestBody } from './model/CreateResourceTagRequestBody';
import { CreateResourceTagResponse } from './model/CreateResourceTagResponse';
import { CreateVirtualGateway } from './model/CreateVirtualGateway';
import { CreateVirtualGatewayRequest } from './model/CreateVirtualGatewayRequest';
import { CreateVirtualGatewayRequestBody } from './model/CreateVirtualGatewayRequestBody';
import { CreateVirtualGatewayResponse } from './model/CreateVirtualGatewayResponse';
import { CreateVirtualInterface } from './model/CreateVirtualInterface';
import { CreateVirtualInterfaceRequest } from './model/CreateVirtualInterfaceRequest';
import { CreateVirtualInterfaceRequestBody } from './model/CreateVirtualInterfaceRequestBody';
import { CreateVirtualInterfaceResponse } from './model/CreateVirtualInterfaceResponse';
import { DeleteDirectConnectRequest } from './model/DeleteDirectConnectRequest';
import { DeleteDirectConnectResponse } from './model/DeleteDirectConnectResponse';
import { DeleteHostedDirectConnectRequest } from './model/DeleteHostedDirectConnectRequest';
import { DeleteHostedDirectConnectResponse } from './model/DeleteHostedDirectConnectResponse';
import { DeleteResourceTagRequest } from './model/DeleteResourceTagRequest';
import { DeleteResourceTagResponse } from './model/DeleteResourceTagResponse';
import { DeleteVirtualGatewayRequest } from './model/DeleteVirtualGatewayRequest';
import { DeleteVirtualGatewayResponse } from './model/DeleteVirtualGatewayResponse';
import { DeleteVirtualInterfaceRequest } from './model/DeleteVirtualInterfaceRequest';
import { DeleteVirtualInterfaceResponse } from './model/DeleteVirtualInterfaceResponse';
import { DirectConnect } from './model/DirectConnect';
import { HostedDirectConnect } from './model/HostedDirectConnect';
import { ListDirectConnectsRequest } from './model/ListDirectConnectsRequest';
import { ListDirectConnectsResponse } from './model/ListDirectConnectsResponse';
import { ListHostedDirectConnectsRequest } from './model/ListHostedDirectConnectsRequest';
import { ListHostedDirectConnectsResponse } from './model/ListHostedDirectConnectsResponse';
import { ListProjectTagsRequest } from './model/ListProjectTagsRequest';
import { ListProjectTagsResponse } from './model/ListProjectTagsResponse';
import { ListTagResourceInstancesRequest } from './model/ListTagResourceInstancesRequest';
import { ListTagResourceInstancesRequestBody } from './model/ListTagResourceInstancesRequestBody';
import { ListTagResourceInstancesResponse } from './model/ListTagResourceInstancesResponse';
import { ListVirtualGatewaysRequest } from './model/ListVirtualGatewaysRequest';
import { ListVirtualGatewaysResponse } from './model/ListVirtualGatewaysResponse';
import { ListVirtualInterfacesRequest } from './model/ListVirtualInterfacesRequest';
import { ListVirtualInterfacesResponse } from './model/ListVirtualInterfacesResponse';
import { Match } from './model/Match';
import { PageInfo } from './model/PageInfo';
import { Resource } from './model/Resource';
import { ShowDirectConnectRequest } from './model/ShowDirectConnectRequest';
import { ShowDirectConnectResponse } from './model/ShowDirectConnectResponse';
import { ShowHostedDirectConnectRequest } from './model/ShowHostedDirectConnectRequest';
import { ShowHostedDirectConnectResponse } from './model/ShowHostedDirectConnectResponse';
import { ShowResourceTagRequest } from './model/ShowResourceTagRequest';
import { ShowResourceTagResponse } from './model/ShowResourceTagResponse';
import { ShowVirtualGatewayRequest } from './model/ShowVirtualGatewayRequest';
import { ShowVirtualGatewayResponse } from './model/ShowVirtualGatewayResponse';
import { ShowVirtualInterfaceRequest } from './model/ShowVirtualInterfaceRequest';
import { ShowVirtualInterfaceResponse } from './model/ShowVirtualInterfaceResponse';
import { Tag } from './model/Tag';
import { Tags } from './model/Tags';
import { TenantIdDef } from './model/TenantIdDef';
import { UpdateDirectConnect } from './model/UpdateDirectConnect';
import { UpdateDirectConnectRequest } from './model/UpdateDirectConnectRequest';
import { UpdateDirectConnectRequestBody } from './model/UpdateDirectConnectRequestBody';
import { UpdateDirectConnectResponse } from './model/UpdateDirectConnectResponse';
import { UpdateHostedDirectConnect } from './model/UpdateHostedDirectConnect';
import { UpdateHostedDirectConnectRequest } from './model/UpdateHostedDirectConnectRequest';
import { UpdateHostedDirectConnectRequestBody } from './model/UpdateHostedDirectConnectRequestBody';
import { UpdateHostedDirectConnectResponse } from './model/UpdateHostedDirectConnectResponse';
import { UpdateVirtualGateway } from './model/UpdateVirtualGateway';
import { UpdateVirtualGatewayRequest } from './model/UpdateVirtualGatewayRequest';
import { UpdateVirtualGatewayRequestBody } from './model/UpdateVirtualGatewayRequestBody';
import { UpdateVirtualGatewayResponse } from './model/UpdateVirtualGatewayResponse';
import { UpdateVirtualInterface } from './model/UpdateVirtualInterface';
import { UpdateVirtualInterfaceRequest } from './model/UpdateVirtualInterfaceRequest';
import { UpdateVirtualInterfaceRequestBody } from './model/UpdateVirtualInterfaceRequestBody';
import { UpdateVirtualInterfaceResponse } from './model/UpdateVirtualInterfaceResponse';
import { VifExtendAttribute } from './model/VifExtendAttribute';
import { VifPeer } from './model/VifPeer';
import { VirtualGateway } from './model/VirtualGateway';
import { VirtualInterface } from './model/VirtualInterface';

export class DcClient {
    public static newBuilder(): ClientBuilder<DcClient> {
            return new ClientBuilder<DcClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 用于合作伙伴用户最终租户创建托管专线
     * 创建者必须拥有合作伙伴资质，并且已经构建好运营(hosting)专线
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建托管专线连接
     * @param {CreateHostedDirectConnectRequestBody} [createHostedDirectConnectRequestBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createHostedDirectConnect(createHostedDirectConnectRequest?: CreateHostedDirectConnectRequest): Promise<CreateHostedDirectConnectResponse> {
        const options = ParamCreater().createHostedDirectConnect(createHostedDirectConnectRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除物理连接，本接口只适用于按需计费物理专线，对于包周期购买的专线通过订单退订的方式删除物理连接
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除物理连接
     * @param {string} directConnectId 物理专线连接ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDirectConnect(deleteDirectConnectRequest?: DeleteDirectConnectRequest): Promise<DeleteDirectConnectResponse> {
        const options = ParamCreater().deleteDirectConnect(deleteDirectConnectRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 合作伙伴删除托管专线
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除托管专线连接
     * @param {string} hostedConnectId 托管专线连接ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteHostedDirectConnect(deleteHostedDirectConnectRequest?: DeleteHostedDirectConnectRequest): Promise<DeleteHostedDirectConnectResponse> {
        const options = ParamCreater().deleteHostedDirectConnect(deleteHostedDirectConnectRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户创建的所有的direct connect对象.
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询物理连接列表
     * @param {number} [limit] 每页返回的个数。 取值范围：1~2000。
     * @param {string} [marker] 上一页最后一条资源记录的ID，为空时为查询第一页。 使用说明：必须与limit一起使用。
     * @param {Array<string>} [fields] 显示字段列表
     * @param {string} [sortKey] 排序字段。
     * @param {Array<'asc' | 'desc'>} [sortDir] 返回结果按照升序(asc)或降序(desc)排列，默认为asc
     * @param {Array<string>} [hostingId] 根椐运营专线ID过滤托管专线列表
     * @param {Array<string>} [enterpriseProjectId] 根据企业项目ID过滤中心网络列表。
     * @param {Array<string>} [id] 根据资源ID过滤实例
     * @param {Array<string>} [name] 根据名字过滤查询，可查询多个名字。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDirectConnects(listDirectConnectsRequest?: ListDirectConnectsRequest): Promise<ListDirectConnectsResponse> {
        const options = ParamCreater().listDirectConnects(listDirectConnectsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询合作伙伴创建的托管专线连接列表.
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户的托管专线列表
     * @param {number} [limit] 每页返回的个数。 取值范围：1~2000。
     * @param {string} [marker] 上一页最后一条资源记录的ID，为空时为查询第一页。 使用说明：必须与limit一起使用。
     * @param {Array<string>} [fields] 显示字段列表
     * @param {Array<'asc' | 'desc'>} [sortDir] 返回结果按照升序(asc)或降序(desc)排列，默认为asc
     * @param {string} [sortKey] 排序字段。
     * @param {Array<string>} [hostingId] 根椐运营专线ID过滤托管专线列表
     * @param {Array<string>} [id] 根据资源ID过滤实例
     * @param {Array<string>} [name] 根据名字过滤查询，可查询多个名字。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHostedDirectConnects(listHostedDirectConnectsRequest?: ListHostedDirectConnectsRequest): Promise<ListHostedDirectConnectsResponse> {
        const options = ParamCreater().listHostedDirectConnects(listHostedDirectConnectsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询物理连接详细信息.
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询物理连接详情
     * @param {string} directConnectId 物理专线连接ID。
     * @param {number} [limit] 每页返回的个数。 取值范围：1~2000。
     * @param {string} [marker] 上一页最后一条资源记录的ID，为空时为查询第一页。 使用说明：必须与limit一起使用。
     * @param {Array<string>} [fields] 显示字段列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDirectConnect(showDirectConnectRequest?: ShowDirectConnectRequest): Promise<ShowDirectConnectResponse> {
        const options = ParamCreater().showDirectConnect(showDirectConnectRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询合法作伙伴的Hosted专线类型.
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户的托管专线详情
     * @param {string} hostedConnectId 托管专线连接ID。
     * @param {number} [limit] 每页返回的个数。 取值范围：1~2000。
     * @param {string} [marker] 上一页最后一条资源记录的ID，为空时为查询第一页。 使用说明：必须与limit一起使用。
     * @param {Array<string>} [fields] 显示字段列表
     * @param {Array<'asc' | 'desc'>} [sortDir] 返回结果按照升序(asc)或降序(desc)排列，默认为asc
     * @param {string} [sortKey] 排序字段。
     * @param {Array<string>} [hostingId] 根椐运营专线ID过滤托管专线列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showHostedDirectConnect(showHostedDirectConnectRequest?: ShowHostedDirectConnectRequest): Promise<ShowHostedDirectConnectResponse> {
        const options = ParamCreater().showHostedDirectConnect(showHostedDirectConnectRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新物理连接信息，包括名字,描述等信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新物理连接信息
     * @param {string} directConnectId 物理专线连接ID。
     * @param {UpdateDirectConnectRequestBody} [updateDirectConnectRequestBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDirectConnect(updateDirectConnectRequest?: UpdateDirectConnectRequest): Promise<UpdateDirectConnectResponse> {
        const options = ParamCreater().updateDirectConnect(updateDirectConnectRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 合作伙伴创建托管专线.
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新托管专线连接
     * @param {string} hostedConnectId 托管专线连接ID。
     * @param {UpdateHostedDirectConnectRequestBody} [updateHostedDirectConnectRequestBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateHostedDirectConnect(updateHostedDirectConnectRequest?: UpdateHostedDirectConnectRequest): Promise<UpdateHostedDirectConnectResponse> {
        const options = ParamCreater().updateHostedDirectConnect(updateHostedDirectConnectRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 为指定实例批量添加或删除标签
     * - 标签管理服务需要使用该接口批量管理实例的标签。
     * - 一个资源上最多有10个标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加删除资源标签
     * @param {string} resourceId 资源实例ID
     * @param {'dc-directconnect' | 'dc-vgw' | 'dc-vif' | 'dc-lag'} resourceType - 专线服务资源类型，包括dc-directconnect/dc-vgw/dc-vif - dc-directconnect: 专线物理连接 - dc-vgw： 虚拟网关 - dc-vif： 虚拟接口
     * @param {BatchOperateResourceTagsRequestBody} batchCreateResourceTagsRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateResourceTags(batchCreateResourceTagsRequest?: BatchCreateResourceTagsRequest): Promise<BatchCreateResourceTagsResponse> {
        const options = ParamCreater().batchCreateResourceTags(batchCreateResourceTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 一个资源上最多有10个标签。
     * - 此接口为幂等接口：
     * - 创建时，如果创建的标签已经存在（key相同），则覆盖。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加资源标签
     * @param {string} resourceId 资源实例ID
     * @param {'dc-directconnect' | 'dc-vgw' | 'dc-vif' | 'dc-lag'} resourceType - 专线服务资源类型，包括dc-directconnect/dc-vgw/dc-vif - dc-directconnect: 专线物理连接 - dc-vgw： 虚拟网关 - dc-vif： 虚拟接口
     * @param {CreateResourceTagRequestBody} createResourceTagRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createResourceTag(createResourceTagRequest?: CreateResourceTagRequest): Promise<CreateResourceTagResponse> {
        const options = ParamCreater().createResourceTag(createResourceTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除时,不对标签字符集做校验，调用接口前必须要做encodeURI，服务端需要对接口uri做decodeURI。删除的key不存在报404，Key不能为空或者空字符串。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除资源标签
     * @param {string} key 标签key。
     * @param {string} resourceId 资源实例ID
     * @param {'dc-directconnect' | 'dc-vgw' | 'dc-vif' | 'dc-lag'} resourceType - 专线服务资源类型，包括dc-directconnect/dc-vgw/dc-vif - dc-directconnect: 专线物理连接 - dc-vgw： 虚拟网关 - dc-vif： 虚拟接口
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteResourceTag(deleteResourceTagRequest?: DeleteResourceTagRequest): Promise<DeleteResourceTagResponse> {
        const options = ParamCreater().deleteResourceTag(deleteResourceTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 查询租户在指定Project中实例类型的所有资源标签集合。
     * - 标签管理服务需要能够列出当前租户全部已使用的资源标签集合，为各服务打资源标签和过滤实例时提供标签联想功能。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目标签
     * @param {'dc-directconnect' | 'dc-vgw' | 'dc-vif' | 'dc-lag'} resourceType - 专线服务资源类型，包括dc-directconnect/dc-vgw/dc-vif - dc-directconnect: 专线物理连接 - dc-vgw： 虚拟网关 - dc-vif： 虚拟接口
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
     * 通过标签查询资源实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 通过标签查询资源实例
     * @param {'dc-directconnect' | 'dc-vgw' | 'dc-vif' | 'dc-lag'} resourceType - 专线服务资源类型，包括dc-directconnect/dc-vgw/dc-vif - dc-directconnect: 专线物理连接 - dc-vgw： 虚拟网关 - dc-vif： 虚拟接口
     * @param {ListTagResourceInstancesRequestBody} listTagResourceInstancesRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTagResourceInstances(listTagResourceInstancesRequest?: ListTagResourceInstancesRequest): Promise<ListTagResourceInstancesResponse> {
        const options = ParamCreater().listTagResourceInstances(listTagResourceInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询资源标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源标签
     * @param {'dc-directconnect' | 'dc-vgw' | 'dc-vif' | 'dc-lag'} resourceType - 专线服务资源类型，包括dc-directconnect/dc-vgw/dc-vif - dc-directconnect: 专线物理连接 - dc-vgw： 虚拟网关 - dc-vif： 虚拟接口
     * @param {string} resourceId 资源实例ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showResourceTag(showResourceTagRequest?: ShowResourceTagRequest): Promise<ShowResourceTagResponse> {
        const options = ParamCreater().showResourceTag(showResourceTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建虚拟网关
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建虚拟网关
     * @param {CreateVirtualGatewayRequestBody} [createVirtualGatewayRequestBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createVirtualGateway(createVirtualGatewayRequest?: CreateVirtualGatewayRequest): Promise<CreateVirtualGatewayResponse> {
        const options = ParamCreater().createVirtualGateway(createVirtualGatewayRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定的虚拟网关
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除虚拟网关
     * @param {string} virtualGatewayId 虚拟网关ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteVirtualGateway(deleteVirtualGatewayRequest?: DeleteVirtualGatewayRequest): Promise<DeleteVirtualGatewayResponse> {
        const options = ParamCreater().deleteVirtualGateway(deleteVirtualGatewayRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询虚拟网关列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询虚拟网关列表
     * @param {number} [limit] 每页返回的个数。 取值范围：1~2000。
     * @param {string} [marker] 上一页最后一条资源记录的ID，为空时为查询第一页。 使用说明：必须与limit一起使用。
     * @param {Array<string>} [fields] 显示字段列表
     * @param {Array<'asc' | 'desc'>} [sortDir] 返回结果按照升序(asc)或降序(desc)排列，默认为asc
     * @param {string} [sortKey] 排序字段。
     * @param {Array<string>} [id] 根据资源ID过滤实例
     * @param {Array<string>} [vpcId] 通过VPC-ID过虑虚拟网关实例
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVirtualGateways(listVirtualGatewaysRequest?: ListVirtualGatewaysRequest): Promise<ListVirtualGatewaysResponse> {
        const options = ParamCreater().listVirtualGateways(listVirtualGatewaysRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定虚拟网关的详细信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询虚拟网关详情
     * @param {string} virtualGatewayId 虚拟网关ID
     * @param {Array<string>} [fields] 显示字段列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVirtualGateway(showVirtualGatewayRequest?: ShowVirtualGatewayRequest): Promise<ShowVirtualGatewayResponse> {
        const options = ParamCreater().showVirtualGateway(showVirtualGatewayRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新虚拟网关的信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新虚拟网关信息
     * @param {string} virtualGatewayId 虚拟网关ID
     * @param {UpdateVirtualGatewayRequestBody} [updateVirtualGatewayRequestBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateVirtualGateway(updateVirtualGatewayRequest?: UpdateVirtualGatewayRequest): Promise<UpdateVirtualGatewayResponse> {
        const options = ParamCreater().updateVirtualGateway(updateVirtualGatewayRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 虚拟接口配置物理专线上与客户互联的IP和路由等相关信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建虚拟接口
     * @param {CreateVirtualInterfaceRequestBody} createVirtualInterfaceRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createVirtualInterface(createVirtualInterfaceRequest?: CreateVirtualInterfaceRequest): Promise<CreateVirtualInterfaceResponse> {
        const options = ParamCreater().createVirtualInterface(createVirtualInterfaceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除虚拟接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除虚拟接口
     * @param {string} virtualInterfaceId 虚拟接口ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteVirtualInterface(deleteVirtualInterfaceRequest?: DeleteVirtualInterfaceRequest): Promise<DeleteVirtualInterfaceResponse> {
        const options = ParamCreater().deleteVirtualInterface(deleteVirtualInterfaceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户所有的虚拟接口列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询虚拟接口列表
     * @param {number} [limit] 每页返回的个数。 取值范围：1~2000。
     * @param {string} [marker] 上一页最后一条资源记录的ID，为空时为查询第一页。 使用说明：必须与limit一起使用。
     * @param {Array<string>} [fields] 显示字段列表
     * @param {Array<'asc' | 'desc'>} [sortDir] 返回结果按照升序(asc)或降序(desc)排列，默认为asc
     * @param {string} [sortKey] 排序字段。
     * @param {Array<string>} [enterpriseProjectId] 根据企业项目ID过滤中心网络列表。
     * @param {Array<string>} [id] 根据资源ID过滤实例
     * @param {Array<string>} [status] 根椐资源状态过淲实例
     * @param {Array<string>} [directConnectId] 根椐物理专线ID过滤查询实例信息
     * @param {Array<string>} [vgwId] 根椐虚拟网关ID过滤查询实例信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVirtualInterfaces(listVirtualInterfacesRequest?: ListVirtualInterfacesRequest): Promise<ListVirtualInterfacesResponse> {
        const options = ParamCreater().listVirtualInterfaces(listVirtualInterfacesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询虚拟接口详细信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询虚拟接口详情
     * @param {string} virtualInterfaceId 虚拟接口ID。
     * @param {Array<string>} [fields] 显示字段列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVirtualInterface(showVirtualInterfaceRequest?: ShowVirtualInterfaceRequest): Promise<ShowVirtualInterfaceResponse> {
        const options = ParamCreater().showVirtualInterface(showVirtualInterfaceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新虚拟接口的详细信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新虚拟接口
     * @param {string} virtualInterfaceId 虚拟接口ID。
     * @param {UpdateVirtualInterfaceRequestBody} updateVirtualInterfaceRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateVirtualInterface(updateVirtualInterfaceRequest?: UpdateVirtualInterfaceRequest): Promise<UpdateVirtualInterfaceResponse> {
        const options = ParamCreater().updateVirtualInterface(updateVirtualInterfaceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 用于合作伙伴用户最终租户创建托管专线
         * 创建者必须拥有合作伙伴资质，并且已经构建好运营(hosting)专线
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createHostedDirectConnect(createHostedDirectConnectRequest?: CreateHostedDirectConnectRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/dcaas/hosted-connects",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createHostedDirectConnectRequest !== null && createHostedDirectConnectRequest !== undefined) {
                if (createHostedDirectConnectRequest instanceof CreateHostedDirectConnectRequest) {
                    body = createHostedDirectConnectRequest.body
                } else {
                    body = createHostedDirectConnectRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除物理连接，本接口只适用于按需计费物理专线，对于包周期购买的专线通过订单退订的方式删除物理连接
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDirectConnect(deleteDirectConnectRequest?: DeleteDirectConnectRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/dcaas/direct-connects/{direct_connect_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let directConnectId;

            if (deleteDirectConnectRequest !== null && deleteDirectConnectRequest !== undefined) {
                if (deleteDirectConnectRequest instanceof DeleteDirectConnectRequest) {
                    directConnectId = deleteDirectConnectRequest.directConnectId;
                } else {
                    directConnectId = deleteDirectConnectRequest['direct_connect_id'];
                }
            }

        
            if (directConnectId === null || directConnectId === undefined) {
            throw new RequiredError('directConnectId','Required parameter directConnectId was null or undefined when calling deleteDirectConnect.');
            }

            options.pathParams = { 'direct_connect_id': directConnectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 合作伙伴删除托管专线
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteHostedDirectConnect(deleteHostedDirectConnectRequest?: DeleteHostedDirectConnectRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/dcaas/hosted-connects/{hosted_connect_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let hostedConnectId;

            if (deleteHostedDirectConnectRequest !== null && deleteHostedDirectConnectRequest !== undefined) {
                if (deleteHostedDirectConnectRequest instanceof DeleteHostedDirectConnectRequest) {
                    hostedConnectId = deleteHostedDirectConnectRequest.hostedConnectId;
                } else {
                    hostedConnectId = deleteHostedDirectConnectRequest['hosted_connect_id'];
                }
            }

        
            if (hostedConnectId === null || hostedConnectId === undefined) {
            throw new RequiredError('hostedConnectId','Required parameter hostedConnectId was null or undefined when calling deleteHostedDirectConnect.');
            }

            options.pathParams = { 'hosted_connect_id': hostedConnectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户创建的所有的direct connect对象.
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDirectConnects(listDirectConnectsRequest?: ListDirectConnectsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/dcaas/direct-connects",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let fields;
            
            let sortKey;
            
            let sortDir;
            
            let hostingId;
            
            let enterpriseProjectId;
            
            let id;
            
            let name;

            if (listDirectConnectsRequest !== null && listDirectConnectsRequest !== undefined) {
                if (listDirectConnectsRequest instanceof ListDirectConnectsRequest) {
                    limit = listDirectConnectsRequest.limit;
                    marker = listDirectConnectsRequest.marker;
                    fields = listDirectConnectsRequest.fields;
                    sortKey = listDirectConnectsRequest.sortKey;
                    sortDir = listDirectConnectsRequest.sortDir;
                    hostingId = listDirectConnectsRequest.hostingId;
                    enterpriseProjectId = listDirectConnectsRequest.enterpriseProjectId;
                    id = listDirectConnectsRequest.id;
                    name = listDirectConnectsRequest.name;
                } else {
                    limit = listDirectConnectsRequest['limit'];
                    marker = listDirectConnectsRequest['marker'];
                    fields = listDirectConnectsRequest['fields'];
                    sortKey = listDirectConnectsRequest['sort_key'];
                    sortDir = listDirectConnectsRequest['sort_dir'];
                    hostingId = listDirectConnectsRequest['hosting_id'];
                    enterpriseProjectId = listDirectConnectsRequest['enterprise_project_id'];
                    id = listDirectConnectsRequest['id'];
                    name = listDirectConnectsRequest['name'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (fields !== null && fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (hostingId !== null && hostingId !== undefined) {
                localVarQueryParameter['hosting_id'] = hostingId;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询合作伙伴创建的托管专线连接列表.
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHostedDirectConnects(listHostedDirectConnectsRequest?: ListHostedDirectConnectsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/dcaas/hosted-connects",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let fields;
            
            let sortDir;
            
            let sortKey;
            
            let hostingId;
            
            let id;
            
            let name;

            if (listHostedDirectConnectsRequest !== null && listHostedDirectConnectsRequest !== undefined) {
                if (listHostedDirectConnectsRequest instanceof ListHostedDirectConnectsRequest) {
                    limit = listHostedDirectConnectsRequest.limit;
                    marker = listHostedDirectConnectsRequest.marker;
                    fields = listHostedDirectConnectsRequest.fields;
                    sortDir = listHostedDirectConnectsRequest.sortDir;
                    sortKey = listHostedDirectConnectsRequest.sortKey;
                    hostingId = listHostedDirectConnectsRequest.hostingId;
                    id = listHostedDirectConnectsRequest.id;
                    name = listHostedDirectConnectsRequest.name;
                } else {
                    limit = listHostedDirectConnectsRequest['limit'];
                    marker = listHostedDirectConnectsRequest['marker'];
                    fields = listHostedDirectConnectsRequest['fields'];
                    sortDir = listHostedDirectConnectsRequest['sort_dir'];
                    sortKey = listHostedDirectConnectsRequest['sort_key'];
                    hostingId = listHostedDirectConnectsRequest['hosting_id'];
                    id = listHostedDirectConnectsRequest['id'];
                    name = listHostedDirectConnectsRequest['name'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (fields !== null && fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (hostingId !== null && hostingId !== undefined) {
                localVarQueryParameter['hosting_id'] = hostingId;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询物理连接详细信息.
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDirectConnect(showDirectConnectRequest?: ShowDirectConnectRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/dcaas/direct-connects/{direct_connect_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let directConnectId;
            
            let limit;
            
            let marker;
            
            let fields;

            if (showDirectConnectRequest !== null && showDirectConnectRequest !== undefined) {
                if (showDirectConnectRequest instanceof ShowDirectConnectRequest) {
                    directConnectId = showDirectConnectRequest.directConnectId;
                    limit = showDirectConnectRequest.limit;
                    marker = showDirectConnectRequest.marker;
                    fields = showDirectConnectRequest.fields;
                } else {
                    directConnectId = showDirectConnectRequest['direct_connect_id'];
                    limit = showDirectConnectRequest['limit'];
                    marker = showDirectConnectRequest['marker'];
                    fields = showDirectConnectRequest['fields'];
                }
            }

        
            if (directConnectId === null || directConnectId === undefined) {
            throw new RequiredError('directConnectId','Required parameter directConnectId was null or undefined when calling showDirectConnect.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (fields !== null && fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'direct_connect_id': directConnectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询合法作伙伴的Hosted专线类型.
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showHostedDirectConnect(showHostedDirectConnectRequest?: ShowHostedDirectConnectRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/dcaas/hosted-connects/{hosted_connect_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let hostedConnectId;
            
            let limit;
            
            let marker;
            
            let fields;
            
            let sortDir;
            
            let sortKey;
            
            let hostingId;

            if (showHostedDirectConnectRequest !== null && showHostedDirectConnectRequest !== undefined) {
                if (showHostedDirectConnectRequest instanceof ShowHostedDirectConnectRequest) {
                    hostedConnectId = showHostedDirectConnectRequest.hostedConnectId;
                    limit = showHostedDirectConnectRequest.limit;
                    marker = showHostedDirectConnectRequest.marker;
                    fields = showHostedDirectConnectRequest.fields;
                    sortDir = showHostedDirectConnectRequest.sortDir;
                    sortKey = showHostedDirectConnectRequest.sortKey;
                    hostingId = showHostedDirectConnectRequest.hostingId;
                } else {
                    hostedConnectId = showHostedDirectConnectRequest['hosted_connect_id'];
                    limit = showHostedDirectConnectRequest['limit'];
                    marker = showHostedDirectConnectRequest['marker'];
                    fields = showHostedDirectConnectRequest['fields'];
                    sortDir = showHostedDirectConnectRequest['sort_dir'];
                    sortKey = showHostedDirectConnectRequest['sort_key'];
                    hostingId = showHostedDirectConnectRequest['hosting_id'];
                }
            }

        
            if (hostedConnectId === null || hostedConnectId === undefined) {
            throw new RequiredError('hostedConnectId','Required parameter hostedConnectId was null or undefined when calling showHostedDirectConnect.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (fields !== null && fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (hostingId !== null && hostingId !== undefined) {
                localVarQueryParameter['hosting_id'] = hostingId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'hosted_connect_id': hostedConnectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新物理连接信息，包括名字,描述等信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDirectConnect(updateDirectConnectRequest?: UpdateDirectConnectRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/dcaas/direct-connects/{direct_connect_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let directConnectId;

            if (updateDirectConnectRequest !== null && updateDirectConnectRequest !== undefined) {
                if (updateDirectConnectRequest instanceof UpdateDirectConnectRequest) {
                    directConnectId = updateDirectConnectRequest.directConnectId;
                    body = updateDirectConnectRequest.body
                } else {
                    directConnectId = updateDirectConnectRequest['direct_connect_id'];
                    body = updateDirectConnectRequest['body'];
                }
            }

        
            if (directConnectId === null || directConnectId === undefined) {
            throw new RequiredError('directConnectId','Required parameter directConnectId was null or undefined when calling updateDirectConnect.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'direct_connect_id': directConnectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 合作伙伴创建托管专线.
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateHostedDirectConnect(updateHostedDirectConnectRequest?: UpdateHostedDirectConnectRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/dcaas/hosted-connects/{hosted_connect_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let hostedConnectId;

            if (updateHostedDirectConnectRequest !== null && updateHostedDirectConnectRequest !== undefined) {
                if (updateHostedDirectConnectRequest instanceof UpdateHostedDirectConnectRequest) {
                    hostedConnectId = updateHostedDirectConnectRequest.hostedConnectId;
                    body = updateHostedDirectConnectRequest.body
                } else {
                    hostedConnectId = updateHostedDirectConnectRequest['hosted_connect_id'];
                    body = updateHostedDirectConnectRequest['body'];
                }
            }

        
            if (hostedConnectId === null || hostedConnectId === undefined) {
            throw new RequiredError('hostedConnectId','Required parameter hostedConnectId was null or undefined when calling updateHostedDirectConnect.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'hosted_connect_id': hostedConnectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 为指定实例批量添加或删除标签
         * - 标签管理服务需要使用该接口批量管理实例的标签。
         * - 一个资源上最多有10个标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateResourceTags(batchCreateResourceTagsRequest?: BatchCreateResourceTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/{resource_type}/{resource_id}/tags/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceId;
            
            let resourceType;

            if (batchCreateResourceTagsRequest !== null && batchCreateResourceTagsRequest !== undefined) {
                if (batchCreateResourceTagsRequest instanceof BatchCreateResourceTagsRequest) {
                    resourceId = batchCreateResourceTagsRequest.resourceId;
                    resourceType = batchCreateResourceTagsRequest.resourceType;
                    body = batchCreateResourceTagsRequest.body
                } else {
                    resourceId = batchCreateResourceTagsRequest['resource_id'];
                    resourceType = batchCreateResourceTagsRequest['resource_type'];
                    body = batchCreateResourceTagsRequest['body'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling batchCreateResourceTags.');
            }
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling batchCreateResourceTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_id': resourceId,'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 一个资源上最多有10个标签。
         * - 此接口为幂等接口：
         * - 创建时，如果创建的标签已经存在（key相同），则覆盖。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createResourceTag(createResourceTagRequest?: CreateResourceTagRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/{resource_type}/{resource_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceId;
            
            let resourceType;

            if (createResourceTagRequest !== null && createResourceTagRequest !== undefined) {
                if (createResourceTagRequest instanceof CreateResourceTagRequest) {
                    resourceId = createResourceTagRequest.resourceId;
                    resourceType = createResourceTagRequest.resourceType;
                    body = createResourceTagRequest.body
                } else {
                    resourceId = createResourceTagRequest['resource_id'];
                    resourceType = createResourceTagRequest['resource_type'];
                    body = createResourceTagRequest['body'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling createResourceTag.');
            }
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling createResourceTag.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_id': resourceId,'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除时,不对标签字符集做校验，调用接口前必须要做encodeURI，服务端需要对接口uri做decodeURI。删除的key不存在报404，Key不能为空或者空字符串。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteResourceTag(deleteResourceTagRequest?: DeleteResourceTagRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/{resource_type}/{resource_id}/tags/{key}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let key;
            
            let resourceId;
            
            let resourceType;

            if (deleteResourceTagRequest !== null && deleteResourceTagRequest !== undefined) {
                if (deleteResourceTagRequest instanceof DeleteResourceTagRequest) {
                    key = deleteResourceTagRequest.key;
                    resourceId = deleteResourceTagRequest.resourceId;
                    resourceType = deleteResourceTagRequest.resourceType;
                } else {
                    key = deleteResourceTagRequest['key'];
                    resourceId = deleteResourceTagRequest['resource_id'];
                    resourceType = deleteResourceTagRequest['resource_type'];
                }
            }

        
            if (key === null || key === undefined) {
            throw new RequiredError('key','Required parameter key was null or undefined when calling deleteResourceTag.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling deleteResourceTag.');
            }
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling deleteResourceTag.');
            }

            options.pathParams = { 'key': key,'resource_id': resourceId,'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 查询租户在指定Project中实例类型的所有资源标签集合。
         * - 标签管理服务需要能够列出当前租户全部已使用的资源标签集合，为各服务打资源标签和过滤实例时提供标签联想功能。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProjectTags(listProjectTagsRequest?: ListProjectTagsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/{resource_type}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceType;

            if (listProjectTagsRequest !== null && listProjectTagsRequest !== undefined) {
                if (listProjectTagsRequest instanceof ListProjectTagsRequest) {
                    resourceType = listProjectTagsRequest.resourceType;
                } else {
                    resourceType = listProjectTagsRequest['resource_type'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling listProjectTags.');
            }

            options.pathParams = { 'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过标签查询资源实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTagResourceInstances(listTagResourceInstancesRequest?: ListTagResourceInstancesRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/{resource_type}/resource-instances/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceType;

            if (listTagResourceInstancesRequest !== null && listTagResourceInstancesRequest !== undefined) {
                if (listTagResourceInstancesRequest instanceof ListTagResourceInstancesRequest) {
                    resourceType = listTagResourceInstancesRequest.resourceType;
                    body = listTagResourceInstancesRequest.body
                } else {
                    resourceType = listTagResourceInstancesRequest['resource_type'];
                    body = listTagResourceInstancesRequest['body'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling listTagResourceInstances.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询资源标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showResourceTag(showResourceTagRequest?: ShowResourceTagRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/{resource_type}/{resource_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceType;
            
            let resourceId;

            if (showResourceTagRequest !== null && showResourceTagRequest !== undefined) {
                if (showResourceTagRequest instanceof ShowResourceTagRequest) {
                    resourceType = showResourceTagRequest.resourceType;
                    resourceId = showResourceTagRequest.resourceId;
                } else {
                    resourceType = showResourceTagRequest['resource_type'];
                    resourceId = showResourceTagRequest['resource_id'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling showResourceTag.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling showResourceTag.');
            }

            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建虚拟网关
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createVirtualGateway(createVirtualGatewayRequest?: CreateVirtualGatewayRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/dcaas/virtual-gateways",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createVirtualGatewayRequest !== null && createVirtualGatewayRequest !== undefined) {
                if (createVirtualGatewayRequest instanceof CreateVirtualGatewayRequest) {
                    body = createVirtualGatewayRequest.body
                } else {
                    body = createVirtualGatewayRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定的虚拟网关
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteVirtualGateway(deleteVirtualGatewayRequest?: DeleteVirtualGatewayRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/dcaas/virtual-gateways/{virtual_gateway_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let virtualGatewayId;

            if (deleteVirtualGatewayRequest !== null && deleteVirtualGatewayRequest !== undefined) {
                if (deleteVirtualGatewayRequest instanceof DeleteVirtualGatewayRequest) {
                    virtualGatewayId = deleteVirtualGatewayRequest.virtualGatewayId;
                } else {
                    virtualGatewayId = deleteVirtualGatewayRequest['virtual_gateway_id'];
                }
            }

        
            if (virtualGatewayId === null || virtualGatewayId === undefined) {
            throw new RequiredError('virtualGatewayId','Required parameter virtualGatewayId was null or undefined when calling deleteVirtualGateway.');
            }

            options.pathParams = { 'virtual_gateway_id': virtualGatewayId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询虚拟网关列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVirtualGateways(listVirtualGatewaysRequest?: ListVirtualGatewaysRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/dcaas/virtual-gateways",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let fields;
            
            let sortDir;
            
            let sortKey;
            
            let id;
            
            let vpcId;

            if (listVirtualGatewaysRequest !== null && listVirtualGatewaysRequest !== undefined) {
                if (listVirtualGatewaysRequest instanceof ListVirtualGatewaysRequest) {
                    limit = listVirtualGatewaysRequest.limit;
                    marker = listVirtualGatewaysRequest.marker;
                    fields = listVirtualGatewaysRequest.fields;
                    sortDir = listVirtualGatewaysRequest.sortDir;
                    sortKey = listVirtualGatewaysRequest.sortKey;
                    id = listVirtualGatewaysRequest.id;
                    vpcId = listVirtualGatewaysRequest.vpcId;
                } else {
                    limit = listVirtualGatewaysRequest['limit'];
                    marker = listVirtualGatewaysRequest['marker'];
                    fields = listVirtualGatewaysRequest['fields'];
                    sortDir = listVirtualGatewaysRequest['sort_dir'];
                    sortKey = listVirtualGatewaysRequest['sort_key'];
                    id = listVirtualGatewaysRequest['id'];
                    vpcId = listVirtualGatewaysRequest['vpc_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (fields !== null && fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (vpcId !== null && vpcId !== undefined) {
                localVarQueryParameter['vpc_id'] = vpcId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定虚拟网关的详细信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVirtualGateway(showVirtualGatewayRequest?: ShowVirtualGatewayRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/dcaas/virtual-gateways/{virtual_gateway_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let virtualGatewayId;
            
            let fields;

            if (showVirtualGatewayRequest !== null && showVirtualGatewayRequest !== undefined) {
                if (showVirtualGatewayRequest instanceof ShowVirtualGatewayRequest) {
                    virtualGatewayId = showVirtualGatewayRequest.virtualGatewayId;
                    fields = showVirtualGatewayRequest.fields;
                } else {
                    virtualGatewayId = showVirtualGatewayRequest['virtual_gateway_id'];
                    fields = showVirtualGatewayRequest['fields'];
                }
            }

        
            if (virtualGatewayId === null || virtualGatewayId === undefined) {
            throw new RequiredError('virtualGatewayId','Required parameter virtualGatewayId was null or undefined when calling showVirtualGateway.');
            }
            if (fields !== null && fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'virtual_gateway_id': virtualGatewayId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新虚拟网关的信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateVirtualGateway(updateVirtualGatewayRequest?: UpdateVirtualGatewayRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/dcaas/virtual-gateways/{virtual_gateway_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let virtualGatewayId;

            if (updateVirtualGatewayRequest !== null && updateVirtualGatewayRequest !== undefined) {
                if (updateVirtualGatewayRequest instanceof UpdateVirtualGatewayRequest) {
                    virtualGatewayId = updateVirtualGatewayRequest.virtualGatewayId;
                    body = updateVirtualGatewayRequest.body
                } else {
                    virtualGatewayId = updateVirtualGatewayRequest['virtual_gateway_id'];
                    body = updateVirtualGatewayRequest['body'];
                }
            }

        
            if (virtualGatewayId === null || virtualGatewayId === undefined) {
            throw new RequiredError('virtualGatewayId','Required parameter virtualGatewayId was null or undefined when calling updateVirtualGateway.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'virtual_gateway_id': virtualGatewayId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 虚拟接口配置物理专线上与客户互联的IP和路由等相关信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createVirtualInterface(createVirtualInterfaceRequest?: CreateVirtualInterfaceRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/dcaas/virtual-interfaces",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createVirtualInterfaceRequest !== null && createVirtualInterfaceRequest !== undefined) {
                if (createVirtualInterfaceRequest instanceof CreateVirtualInterfaceRequest) {
                    body = createVirtualInterfaceRequest.body
                } else {
                    body = createVirtualInterfaceRequest['body'];
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
         * 删除虚拟接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteVirtualInterface(deleteVirtualInterfaceRequest?: DeleteVirtualInterfaceRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/dcaas/virtual-interfaces/{virtual_interface_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let virtualInterfaceId;

            if (deleteVirtualInterfaceRequest !== null && deleteVirtualInterfaceRequest !== undefined) {
                if (deleteVirtualInterfaceRequest instanceof DeleteVirtualInterfaceRequest) {
                    virtualInterfaceId = deleteVirtualInterfaceRequest.virtualInterfaceId;
                } else {
                    virtualInterfaceId = deleteVirtualInterfaceRequest['virtual_interface_id'];
                }
            }

        
            if (virtualInterfaceId === null || virtualInterfaceId === undefined) {
            throw new RequiredError('virtualInterfaceId','Required parameter virtualInterfaceId was null or undefined when calling deleteVirtualInterface.');
            }

            options.pathParams = { 'virtual_interface_id': virtualInterfaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户所有的虚拟接口列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVirtualInterfaces(listVirtualInterfacesRequest?: ListVirtualInterfacesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/dcaas/virtual-interfaces",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let fields;
            
            let sortDir;
            
            let sortKey;
            
            let enterpriseProjectId;
            
            let id;
            
            let status;
            
            let directConnectId;
            
            let vgwId;

            if (listVirtualInterfacesRequest !== null && listVirtualInterfacesRequest !== undefined) {
                if (listVirtualInterfacesRequest instanceof ListVirtualInterfacesRequest) {
                    limit = listVirtualInterfacesRequest.limit;
                    marker = listVirtualInterfacesRequest.marker;
                    fields = listVirtualInterfacesRequest.fields;
                    sortDir = listVirtualInterfacesRequest.sortDir;
                    sortKey = listVirtualInterfacesRequest.sortKey;
                    enterpriseProjectId = listVirtualInterfacesRequest.enterpriseProjectId;
                    id = listVirtualInterfacesRequest.id;
                    status = listVirtualInterfacesRequest.status;
                    directConnectId = listVirtualInterfacesRequest.directConnectId;
                    vgwId = listVirtualInterfacesRequest.vgwId;
                } else {
                    limit = listVirtualInterfacesRequest['limit'];
                    marker = listVirtualInterfacesRequest['marker'];
                    fields = listVirtualInterfacesRequest['fields'];
                    sortDir = listVirtualInterfacesRequest['sort_dir'];
                    sortKey = listVirtualInterfacesRequest['sort_key'];
                    enterpriseProjectId = listVirtualInterfacesRequest['enterprise_project_id'];
                    id = listVirtualInterfacesRequest['id'];
                    status = listVirtualInterfacesRequest['status'];
                    directConnectId = listVirtualInterfacesRequest['direct_connect_id'];
                    vgwId = listVirtualInterfacesRequest['vgw_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (fields !== null && fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (directConnectId !== null && directConnectId !== undefined) {
                localVarQueryParameter['direct_connect_id'] = directConnectId;
            }
            if (vgwId !== null && vgwId !== undefined) {
                localVarQueryParameter['vgw_id'] = vgwId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询虚拟接口详细信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVirtualInterface(showVirtualInterfaceRequest?: ShowVirtualInterfaceRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/dcaas/virtual-interfaces/{virtual_interface_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let virtualInterfaceId;
            
            let fields;

            if (showVirtualInterfaceRequest !== null && showVirtualInterfaceRequest !== undefined) {
                if (showVirtualInterfaceRequest instanceof ShowVirtualInterfaceRequest) {
                    virtualInterfaceId = showVirtualInterfaceRequest.virtualInterfaceId;
                    fields = showVirtualInterfaceRequest.fields;
                } else {
                    virtualInterfaceId = showVirtualInterfaceRequest['virtual_interface_id'];
                    fields = showVirtualInterfaceRequest['fields'];
                }
            }

        
            if (virtualInterfaceId === null || virtualInterfaceId === undefined) {
            throw new RequiredError('virtualInterfaceId','Required parameter virtualInterfaceId was null or undefined when calling showVirtualInterface.');
            }
            if (fields !== null && fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'virtual_interface_id': virtualInterfaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新虚拟接口的详细信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateVirtualInterface(updateVirtualInterfaceRequest?: UpdateVirtualInterfaceRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/dcaas/virtual-interfaces/{virtual_interface_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let virtualInterfaceId;

            if (updateVirtualInterfaceRequest !== null && updateVirtualInterfaceRequest !== undefined) {
                if (updateVirtualInterfaceRequest instanceof UpdateVirtualInterfaceRequest) {
                    virtualInterfaceId = updateVirtualInterfaceRequest.virtualInterfaceId;
                    body = updateVirtualInterfaceRequest.body
                } else {
                    virtualInterfaceId = updateVirtualInterfaceRequest['virtual_interface_id'];
                    body = updateVirtualInterfaceRequest['body'];
                }
            }

        
            if (virtualInterfaceId === null || virtualInterfaceId === undefined) {
            throw new RequiredError('virtualInterfaceId','Required parameter virtualInterfaceId was null or undefined when calling updateVirtualInterface.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'virtual_interface_id': virtualInterfaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): DcClient {
    return new DcClient(client);
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