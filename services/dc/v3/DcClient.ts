import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { BandwidthInfoExternal } from './model/BandwidthInfoExternal';
import { BatchCreateResourceTagsRequest } from './model/BatchCreateResourceTagsRequest';
import { BatchCreateResourceTagsResponse } from './model/BatchCreateResourceTagsResponse';
import { BatchOperateResourceTagsRequestBody } from './model/BatchOperateResourceTagsRequestBody';
import { BindGlobalEipsRequest } from './model/BindGlobalEipsRequest';
import { BindGlobalEipsResponse } from './model/BindGlobalEipsResponse';
import { BindingGeipBody } from './model/BindingGeipBody';
import { ConnectGatewayResponse } from './model/ConnectGatewayResponse';
import { CreateBindingGeipRequestBody } from './model/CreateBindingGeipRequestBody';
import { CreateConnectGateway } from './model/CreateConnectGateway';
import { CreateConnectGatewayRequest } from './model/CreateConnectGatewayRequest';
import { CreateConnectGatewayRequestBody } from './model/CreateConnectGatewayRequestBody';
import { CreateConnectGatewayResponse } from './model/CreateConnectGatewayResponse';
import { CreateGlobalDcGatewayRequest } from './model/CreateGlobalDcGatewayRequest';
import { CreateGlobalDcGatewayRequestBody } from './model/CreateGlobalDcGatewayRequestBody';
import { CreateGlobalDcGatewayRequestBodyGlobalDcGateway } from './model/CreateGlobalDcGatewayRequestBodyGlobalDcGateway';
import { CreateGlobalDcGatewayRequestBodyGlobalDcGatewayTags } from './model/CreateGlobalDcGatewayRequestBodyGlobalDcGatewayTags';
import { CreateGlobalDcGatewayResponse } from './model/CreateGlobalDcGatewayResponse';
import { CreateHostedDirectConnect } from './model/CreateHostedDirectConnect';
import { CreateHostedDirectConnectRequest } from './model/CreateHostedDirectConnectRequest';
import { CreateHostedDirectConnectRequestBody } from './model/CreateHostedDirectConnectRequestBody';
import { CreateHostedDirectConnectResponse } from './model/CreateHostedDirectConnectResponse';
import { CreatePeerLinkRequest } from './model/CreatePeerLinkRequest';
import { CreatePeerLinkRequestBody } from './model/CreatePeerLinkRequestBody';
import { CreatePeerLinkRequestBodyPeerLink } from './model/CreatePeerLinkRequestBodyPeerLink';
import { CreatePeerLinkRequestBodyPeerLinkPeerSite } from './model/CreatePeerLinkRequestBodyPeerLinkPeerSite';
import { CreatePeerLinkResponse } from './model/CreatePeerLinkResponse';
import { CreateResourceTagRequest } from './model/CreateResourceTagRequest';
import { CreateResourceTagRequestBody } from './model/CreateResourceTagRequestBody';
import { CreateResourceTagResponse } from './model/CreateResourceTagResponse';
import { CreateSwitchoverTest } from './model/CreateSwitchoverTest';
import { CreateSwitchoverTestRequestBody } from './model/CreateSwitchoverTestRequestBody';
import { CreateUnbindingGeipRequestBody } from './model/CreateUnbindingGeipRequestBody';
import { CreateVifPeer } from './model/CreateVifPeer';
import { CreateVifPeerRequest } from './model/CreateVifPeerRequest';
import { CreateVifPeerRequestBody } from './model/CreateVifPeerRequestBody';
import { CreateVifPeerResponse } from './model/CreateVifPeerResponse';
import { CreateVirtualGateway } from './model/CreateVirtualGateway';
import { CreateVirtualGatewayRequest } from './model/CreateVirtualGatewayRequest';
import { CreateVirtualGatewayRequestBody } from './model/CreateVirtualGatewayRequestBody';
import { CreateVirtualGatewayResponse } from './model/CreateVirtualGatewayResponse';
import { CreateVirtualInterface } from './model/CreateVirtualInterface';
import { CreateVirtualInterfaceRequest } from './model/CreateVirtualInterfaceRequest';
import { CreateVirtualInterfaceRequestBody } from './model/CreateVirtualInterfaceRequestBody';
import { CreateVirtualInterfaceResponse } from './model/CreateVirtualInterfaceResponse';
import { DeleteConnectGatewayRequest } from './model/DeleteConnectGatewayRequest';
import { DeleteConnectGatewayResponse } from './model/DeleteConnectGatewayResponse';
import { DeleteDirectConnectRequest } from './model/DeleteDirectConnectRequest';
import { DeleteDirectConnectResponse } from './model/DeleteDirectConnectResponse';
import { DeleteGlobalDcGatewayRequest } from './model/DeleteGlobalDcGatewayRequest';
import { DeleteGlobalDcGatewayResponse } from './model/DeleteGlobalDcGatewayResponse';
import { DeleteHostedDirectConnectRequest } from './model/DeleteHostedDirectConnectRequest';
import { DeleteHostedDirectConnectResponse } from './model/DeleteHostedDirectConnectResponse';
import { DeletePeerLinkRequest } from './model/DeletePeerLinkRequest';
import { DeletePeerLinkResponse } from './model/DeletePeerLinkResponse';
import { DeleteResourceTagRequest } from './model/DeleteResourceTagRequest';
import { DeleteResourceTagResponse } from './model/DeleteResourceTagResponse';
import { DeleteVifPeerRequest } from './model/DeleteVifPeerRequest';
import { DeleteVifPeerResponse } from './model/DeleteVifPeerResponse';
import { DeleteVirtualGatewayRequest } from './model/DeleteVirtualGatewayRequest';
import { DeleteVirtualGatewayResponse } from './model/DeleteVirtualGatewayResponse';
import { DeleteVirtualInterfaceRequest } from './model/DeleteVirtualInterfaceRequest';
import { DeleteVirtualInterfaceResponse } from './model/DeleteVirtualInterfaceResponse';
import { DirectConnect } from './model/DirectConnect';
import { ExternalCreateGlobalDcGateway } from './model/ExternalCreateGlobalDcGateway';
import { ExternalCreatePeerLink } from './model/ExternalCreatePeerLink';
import { ExternalListGlobalDcGateways } from './model/ExternalListGlobalDcGateways';
import { ExternalListPeerLinks } from './model/ExternalListPeerLinks';
import { ExternalShowGlobalDcGateway } from './model/ExternalShowGlobalDcGateway';
import { ExternalShowPeerLink } from './model/ExternalShowPeerLink';
import { ExternalUpdateGlobalDcGateway } from './model/ExternalUpdateGlobalDcGateway';
import { ExternalUpdatePeerLink } from './model/ExternalUpdatePeerLink';
import { HostedDirectConnect } from './model/HostedDirectConnect';
import { Info } from './model/Info';
import { ListBindingGeip } from './model/ListBindingGeip';
import { ListConnectGatewaysRequest } from './model/ListConnectGatewaysRequest';
import { ListConnectGatewaysResponse } from './model/ListConnectGatewaysResponse';
import { ListDirectConnectsRequest } from './model/ListDirectConnectsRequest';
import { ListDirectConnectsResponse } from './model/ListDirectConnectsResponse';
import { ListGdgwRouteTablesRequest } from './model/ListGdgwRouteTablesRequest';
import { ListGdgwRouteTablesResponse } from './model/ListGdgwRouteTablesResponse';
import { ListGlobalDcGatewayRequest } from './model/ListGlobalDcGatewayRequest';
import { ListGlobalDcGatewayResponse } from './model/ListGlobalDcGatewayResponse';
import { ListGlobalEipsRequest } from './model/ListGlobalEipsRequest';
import { ListGlobalEipsResponse } from './model/ListGlobalEipsResponse';
import { ListHostedDirectConnectsRequest } from './model/ListHostedDirectConnectsRequest';
import { ListHostedDirectConnectsResponse } from './model/ListHostedDirectConnectsResponse';
import { ListPeerLinksRequest } from './model/ListPeerLinksRequest';
import { ListPeerLinksResponse } from './model/ListPeerLinksResponse';
import { ListProjectTagsRequest } from './model/ListProjectTagsRequest';
import { ListProjectTagsResponse } from './model/ListProjectTagsResponse';
import { ListRmsGlobalDcGatewayRequest } from './model/ListRmsGlobalDcGatewayRequest';
import { ListRmsGlobalDcGatewayResponse } from './model/ListRmsGlobalDcGatewayResponse';
import { ListSwitchoverTestRecordsRequest } from './model/ListSwitchoverTestRecordsRequest';
import { ListSwitchoverTestRecordsResponse } from './model/ListSwitchoverTestRecordsResponse';
import { ListTagResourceInstancesRequest } from './model/ListTagResourceInstancesRequest';
import { ListTagResourceInstancesRequestBody } from './model/ListTagResourceInstancesRequestBody';
import { ListTagResourceInstancesResponse } from './model/ListTagResourceInstancesResponse';
import { ListVirtualGatewaysRequest } from './model/ListVirtualGatewaysRequest';
import { ListVirtualGatewaysResponse } from './model/ListVirtualGatewaysResponse';
import { ListVirtualInterfacesRequest } from './model/ListVirtualInterfacesRequest';
import { ListVirtualInterfacesResponse } from './model/ListVirtualInterfacesResponse';
import { Locale } from './model/Locale';
import { LocalesBody } from './model/LocalesBody';
import { Match } from './model/Match';
import { PageInfo } from './model/PageInfo';
import { PeerSiteExternal } from './model/PeerSiteExternal';
import { Resource } from './model/Resource';
import { RmsListGlobalDcGateways } from './model/RmsListGlobalDcGateways';
import { RmsShowGlobalDcGateway } from './model/RmsShowGlobalDcGateway';
import { ShowConnectGatewayRequest } from './model/ShowConnectGatewayRequest';
import { ShowConnectGatewayResponse } from './model/ShowConnectGatewayResponse';
import { ShowDirectConnectRequest } from './model/ShowDirectConnectRequest';
import { ShowDirectConnectResponse } from './model/ShowDirectConnectResponse';
import { ShowGdgwRoutetable } from './model/ShowGdgwRoutetable';
import { ShowGlobalDcGatewayRequest } from './model/ShowGlobalDcGatewayRequest';
import { ShowGlobalDcGatewayResponse } from './model/ShowGlobalDcGatewayResponse';
import { ShowHostedDirectConnectRequest } from './model/ShowHostedDirectConnectRequest';
import { ShowHostedDirectConnectResponse } from './model/ShowHostedDirectConnectResponse';
import { ShowPeerLinkRequest } from './model/ShowPeerLinkRequest';
import { ShowPeerLinkResponse } from './model/ShowPeerLinkResponse';
import { ShowQuotasRequest } from './model/ShowQuotasRequest';
import { ShowQuotasResponse } from './model/ShowQuotasResponse';
import { ShowQuotasResponseBodyQuotas } from './model/ShowQuotasResponseBodyQuotas';
import { ShowResourceTagRequest } from './model/ShowResourceTagRequest';
import { ShowResourceTagResponse } from './model/ShowResourceTagResponse';
import { ShowRmsGlobalDcGatewayRequest } from './model/ShowRmsGlobalDcGatewayRequest';
import { ShowRmsGlobalDcGatewayResponse } from './model/ShowRmsGlobalDcGatewayResponse';
import { ShowVirtualGatewayRequest } from './model/ShowVirtualGatewayRequest';
import { ShowVirtualGatewayResponse } from './model/ShowVirtualGatewayResponse';
import { ShowVirtualInterfaceRequest } from './model/ShowVirtualInterfaceRequest';
import { ShowVirtualInterfaceResponse } from './model/ShowVirtualInterfaceResponse';
import { SwitchoverTestRecord } from './model/SwitchoverTestRecord';
import { SwitchoverTestRequest } from './model/SwitchoverTestRequest';
import { SwitchoverTestResponse } from './model/SwitchoverTestResponse';
import { Tag } from './model/Tag';
import { Tags } from './model/Tags';
import { TenantIdDef } from './model/TenantIdDef';
import { UnbindGlobalEipsRequest } from './model/UnbindGlobalEipsRequest';
import { UnbindGlobalEipsResponse } from './model/UnbindGlobalEipsResponse';
import { UnbindingGeipBody } from './model/UnbindingGeipBody';
import { UpdateConnectGateway } from './model/UpdateConnectGateway';
import { UpdateConnectGatewayRequest } from './model/UpdateConnectGatewayRequest';
import { UpdateConnectGatewayRequestBody } from './model/UpdateConnectGatewayRequestBody';
import { UpdateConnectGatewayResponse } from './model/UpdateConnectGatewayResponse';
import { UpdateDirectConnect } from './model/UpdateDirectConnect';
import { UpdateDirectConnectRequest } from './model/UpdateDirectConnectRequest';
import { UpdateDirectConnectRequestBody } from './model/UpdateDirectConnectRequestBody';
import { UpdateDirectConnectResponse } from './model/UpdateDirectConnectResponse';
import { UpdateGdgwRouteTableRequest } from './model/UpdateGdgwRouteTableRequest';
import { UpdateGdgwRouteTableResponse } from './model/UpdateGdgwRouteTableResponse';
import { UpdateGdgwRoutetableRequestBody } from './model/UpdateGdgwRoutetableRequestBody';
import { UpdateGdgwRoutetableRequestBodyGdgwRoutetable } from './model/UpdateGdgwRoutetableRequestBodyGdgwRoutetable';
import { UpdateGdgwRoutetableRequestBodyGdgwRoutetableAddRoutes } from './model/UpdateGdgwRoutetableRequestBodyGdgwRoutetableAddRoutes';
import { UpdateGdgwRoutetableRequestBodyGdgwRoutetableDelRoutes } from './model/UpdateGdgwRoutetableRequestBodyGdgwRoutetableDelRoutes';
import { UpdateGdgwRoutetableRequestBodyGdgwRoutetableUpdateRoutes } from './model/UpdateGdgwRoutetableRequestBodyGdgwRoutetableUpdateRoutes';
import { UpdateGlobalDcGatewayRequest } from './model/UpdateGlobalDcGatewayRequest';
import { UpdateGlobalDcGatewayRequestBody } from './model/UpdateGlobalDcGatewayRequestBody';
import { UpdateGlobalDcGatewayRequestBodyGlobalDcGateway } from './model/UpdateGlobalDcGatewayRequestBodyGlobalDcGateway';
import { UpdateGlobalDcGatewayResponse } from './model/UpdateGlobalDcGatewayResponse';
import { UpdateHostedDirectConnect } from './model/UpdateHostedDirectConnect';
import { UpdateHostedDirectConnectRequest } from './model/UpdateHostedDirectConnectRequest';
import { UpdateHostedDirectConnectRequestBody } from './model/UpdateHostedDirectConnectRequestBody';
import { UpdateHostedDirectConnectResponse } from './model/UpdateHostedDirectConnectResponse';
import { UpdatePeerLinkRequest } from './model/UpdatePeerLinkRequest';
import { UpdatePeerLinkRequestBody } from './model/UpdatePeerLinkRequestBody';
import { UpdatePeerLinkRequestBodyPeerLink } from './model/UpdatePeerLinkRequestBodyPeerLink';
import { UpdatePeerLinkResponse } from './model/UpdatePeerLinkResponse';
import { UpdateVifPeer } from './model/UpdateVifPeer';
import { UpdateVifPeerRequest } from './model/UpdateVifPeerRequest';
import { UpdateVifPeerRequestBody } from './model/UpdateVifPeerRequestBody';
import { UpdateVifPeerResponse } from './model/UpdateVifPeerResponse';
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
            let client = new ClientBuilder<DcClient>(newClient);
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
     * 绑定GEIP操作
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 绑定GEIP操作
     * @param {string} connectGatewayId 互联网关ID
     * @param {CreateBindingGeipRequestBody} createBindingGeipRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public bindGlobalEips(bindGlobalEipsRequest?: BindGlobalEipsRequest): Promise<BindGlobalEipsResponse> {
        const options = ParamCreater().bindGlobalEips(bindGlobalEipsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询已经绑定的GEIP列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询已经绑定的GEIP列表
     * @param {string} connectGatewayId 互联网关ID
     * @param {number} [limit] 每页返回的个数。 取值范围：1~2000。
     * @param {number} [offset] 
     * @param {string} [marker] 上一页最后一条资源记录的ID，为空时为查询第一页。 使用说明：必须与limit一起使用。
     * @param {boolean} [pageReverse] 
     * @param {Array<string>} [fields] 显示字段列表
     * @param {Array<string>} [extFields] show response ext-fields
     * @param {string} [sortKey] 排序字段。
     * @param {Array<'asc' | 'desc'>} [sortDir] 返回结果按照升序(asc)或降序(desc)排列，默认为asc
     * @param {Array<string>} [status] 根椐资源状态过淲实例
     * @param {Array<string>} [globalEipId] 全局弹性IP的ID
     * @param {Array<string>} [globalEipSegmentId] 全局弹性IP(有掩码)的ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGlobalEips(listGlobalEipsRequest?: ListGlobalEipsRequest): Promise<ListGlobalEipsResponse> {
        const options = ParamCreater().listGlobalEips(listGlobalEipsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 解绑GEIP
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解绑GEIP
     * @param {string} connectGatewayId 互联网关ID
     * @param {CreateUnbindingGeipRequestBody} createUnbindingGeipRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public unbindGlobalEips(unbindGlobalEipsRequest?: UnbindGlobalEipsRequest): Promise<UnbindGlobalEipsResponse> {
        const options = ParamCreater().unbindGlobalEips(unbindGlobalEipsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建互联网关
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建互联网关
     * @param {CreateConnectGatewayRequestBody} createConnectGatewayRequestBody 创建Connect Gateway
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createConnectGateway(createConnectGatewayRequest?: CreateConnectGatewayRequest): Promise<CreateConnectGatewayResponse> {
        const options = ParamCreater().createConnectGateway(createConnectGatewayRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除互联网关
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除互联网关
     * @param {string} connectGatewayId 互联网关ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteConnectGateway(deleteConnectGatewayRequest?: DeleteConnectGatewayRequest): Promise<DeleteConnectGatewayResponse> {
        const options = ParamCreater().deleteConnectGateway(deleteConnectGatewayRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询互联网关列表信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询互联网关列表信息
     * @param {number} [limit] 每页返回的个数。 取值范围：1~2000。
     * @param {number} [offset] 
     * @param {string} [marker] 上一页最后一条资源记录的ID，为空时为查询第一页。 使用说明：必须与limit一起使用。
     * @param {boolean} [pageReverse] 
     * @param {Array<string>} [fields] 显示字段列表
     * @param {Array<string>} [extFields] show response ext-fields
     * @param {string} [sortKey] 排序字段。
     * @param {Array<'asc' | 'desc'>} [sortDir] 返回结果按照升序(asc)或降序(desc)排列，默认为asc
     * @param {Array<string>} [id] 根据资源ID过滤实例
     * @param {Array<string>} [name] 根据名字过滤查询，可查询多个名字。
     * @param {Array<string>} [status] 根椐资源状态过淲实例
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listConnectGateways(listConnectGatewaysRequest?: ListConnectGatewaysRequest): Promise<ListConnectGatewaysResponse> {
        const options = ParamCreater().listConnectGateways(listConnectGatewaysRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询互联网关详细信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询互联网关详细信息
     * @param {string} connectGatewayId 互联网关ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showConnectGateway(showConnectGatewayRequest?: ShowConnectGatewayRequest): Promise<ShowConnectGatewayResponse> {
        const options = ParamCreater().showConnectGateway(showConnectGatewayRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新互联网关
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新互联网关
     * @param {string} connectGatewayId 互联网关ID
     * @param {UpdateConnectGatewayRequestBody} [updateConnectGatewayRequestBody] 创建Connect Gateway
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateConnectGateway(updateConnectGatewayRequest?: UpdateConnectGatewayRequest): Promise<UpdateConnectGatewayResponse> {
        const options = ParamCreater().updateConnectGateway(updateConnectGatewayRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
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
     * @param {Array<string>} [enterpriseProjectId] 根据企业项目ID过滤资源实例
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
     * 合作伙伴更新托管专线.
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
     * 查询全球接入网关路由表，返回查询到的全球接入网关路由表的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询全球接入网关路由表
     * @param {string} gdgwId 全球接入网关ID
     * @param {Array<string>} [fields] 显示字段列表
     * @param {Array<string>} [extFields] show response ext-fields
     * @param {Array<string>} [nexthop] 下一条ID
     * @param {Array<string>} [destination] 目的地址
     * @param {Array<'ipv4' | 'ipv6'>} [addressFamily] 地址簇
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGdgwRouteTables(listGdgwRouteTablesRequest?: ListGdgwRouteTablesRequest): Promise<ListGdgwRouteTablesResponse> {
        const options = ParamCreater().listGdgwRouteTables(listGdgwRouteTablesRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改全球接入网关路由表，返回修改全球接入网关路由表的结果。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改全球接入网关路由表
     * @param {string} gdgwId 全球接入网关ID
     * @param {UpdateGdgwRoutetableRequestBody} updateGdgwRoutetableRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateGdgwRouteTable(updateGdgwRouteTableRequest?: UpdateGdgwRouteTableRequest): Promise<UpdateGdgwRouteTableResponse> {
        const options = ParamCreater().updateGdgwRouteTable(updateGdgwRouteTableRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建全球接入网关，返回创建全球接入网关的结果。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建全球接入网关
     * @param {CreateGlobalDcGatewayRequestBody} createGlobalDcGatewayRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createGlobalDcGateway(createGlobalDcGatewayRequest?: CreateGlobalDcGatewayRequest): Promise<CreateGlobalDcGatewayResponse> {
        const options = ParamCreater().createGlobalDcGateway(createGlobalDcGatewayRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建全球接入网关对等链接，返回创建全球接入网关对等链接的结果。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建全球接入网关对等链接
     * @param {string} globalDcGatewayId 全球接入网关ID
     * @param {CreatePeerLinkRequestBody} createPeerLinkRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPeerLink(createPeerLinkRequest?: CreatePeerLinkRequest): Promise<CreatePeerLinkResponse> {
        const options = ParamCreater().createPeerLink(createPeerLinkRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据ID删除全球接入网关，返回删除全球接入网关的结果。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除全球接入网关
     * @param {string} globalDcGatewayId 全球接入网关ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteGlobalDcGateway(deleteGlobalDcGatewayRequest?: DeleteGlobalDcGatewayRequest): Promise<DeleteGlobalDcGatewayResponse> {
        const options = ParamCreater().deleteGlobalDcGateway(deleteGlobalDcGatewayRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据ID删除全球接入网关对等链接，返回删除全球接入网关对等链接的结果。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除全球接入网关对等链接
     * @param {string} globalDcGatewayId 全球接入网关ID
     * @param {string} peerLinkId 全球接入网关对等体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePeerLink(deletePeerLinkRequest?: DeletePeerLinkRequest): Promise<DeletePeerLinkResponse> {
        const options = ParamCreater().deletePeerLink(deletePeerLinkRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询 全球接入网关列表，返回列表中包含全球接入网关的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询全球接入网关列表
     * @param {number} [limit] 每页返回的个数。 取值范围：1~2000。
     * @param {string} [marker] 上一页最后一条资源记录的ID，为空时为查询第一页。 使用说明：必须与limit一起使用。
     * @param {Array<string>} [fields] 显示字段列表
     * @param {string} [sortKey] 排序字段。
     * @param {Array<'asc' | 'desc'>} [sortDir] 返回结果按照升序(asc)或降序(desc)排列，默认为asc
     * @param {Array<string>} [hostingId] 根椐运营专线ID过滤托管专线列表
     * @param {Array<string>} [enterpriseProjectId] 根据企业项目ID过滤资源实例
     * @param {Array<string>} [id] 根据资源ID过滤实例
     * @param {Array<string>} [name] 根据名字过滤查询，可查询多个名字。
     * @param {Array<string>} [globalCenterNetworkId] 全球中心网络ID
     * @param {Array<string>} [siteNetworkId] 站点网络ID
     * @param {Array<string>} [cloudConnectionId] 云连接ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGlobalDcGateway(listGlobalDcGatewayRequest?: ListGlobalDcGatewayRequest): Promise<ListGlobalDcGatewayResponse> {
        const options = ParamCreater().listGlobalDcGateway(listGlobalDcGatewayRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询全球接入网关对等链接，返回查询到的全球接入网关对等链接的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询全球接入网关对等链接
     * @param {string} globalDcGatewayId 全球接入网关ID
     * @param {number} [limit] 每页返回的个数。 取值范围：1~2000。
     * @param {number} [offset] 
     * @param {string} [marker] 上一页最后一条资源记录的ID，为空时为查询第一页。 使用说明：必须与limit一起使用。
     * @param {boolean} [pageReverse] 
     * @param {Array<string>} [fields] 显示字段列表
     * @param {Array<string>} [extFields] show response ext-fields
     * @param {string} [sortKey] 排序字段。
     * @param {Array<'asc' | 'desc'>} [sortDir] 返回结果按照升序(asc)或降序(desc)排列，默认为asc
     * @param {Array<string>} [id] 根据资源ID过滤实例
     * @param {Array<string>} [name] 根据名字过滤查询，可查询多个名字。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPeerLinks(listPeerLinksRequest?: ListPeerLinksRequest): Promise<ListPeerLinksResponse> {
        const options = ParamCreater().listPeerLinks(listPeerLinksRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据类型、domain_id、region_id,资源类型查询资源，返回查询到的资源的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询RMS全球接入网关
     * @param {string} rpName 通过rp_name过滤记录
     * @param {string} domainId domain_id
     * @param {string} regionId region_id
     * @param {string} resourceType resource_type
     * @param {number} [limit] 每页返回的个数。 取值范围：1~2000。
     * @param {number} [offset] 
     * @param {string} [marker] 上一页最后一条资源记录的ID，为空时为查询第一页。 使用说明：必须与limit一起使用。
     * @param {boolean} [pageReverse] 
     * @param {Array<string>} [fields] 显示字段列表
     * @param {Array<string>} [extFields] show response ext-fields
     * @param {string} [sortKey] 排序字段。
     * @param {Array<'asc' | 'desc'>} [sortDir] 返回结果按照升序(asc)或降序(desc)排列，默认为asc
     * @param {Array<string>} [id] 根据资源ID过滤实例
     * @param {Array<string>} [name] 根据名字过滤查询，可查询多个名字。
     * @param {Array<string>} [status] 根椐资源状态过淲实例
     * @param {Array<string>} [enterpriseProjectId] 根据企业项目ID过滤资源实例
     * @param {Array<string>} [globalCenterNetworkId] 全球中心网络ID
     * @param {Array<string>} [siteNetworkId] 站点网络ID
     * @param {Array<string>} [cloudConnectionId] 云连接ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRmsGlobalDcGateway(listRmsGlobalDcGatewayRequest?: ListRmsGlobalDcGatewayRequest): Promise<ListRmsGlobalDcGatewayResponse> {
        const options = ParamCreater().listRmsGlobalDcGateway(listRmsGlobalDcGatewayRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据ID查询全球接入网关，返回查询到的全球接入网关的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询全球接入网关详情
     * @param {string} globalDcGatewayId 全球接入网关ID
     * @param {Array<string>} [fields] 显示字段列表
     * @param {Array<string>} [extFields] show response ext-fields
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showGlobalDcGateway(showGlobalDcGatewayRequest?: ShowGlobalDcGatewayRequest): Promise<ShowGlobalDcGatewayResponse> {
        const options = ParamCreater().showGlobalDcGateway(showGlobalDcGatewayRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据ID查询全球接入网关对等链接，返回查询到的全球接入网关对等链接的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询全球接入网关对等链接
     * @param {string} globalDcGatewayId 全球接入网关ID
     * @param {string} peerLinkId 全球接入网关对等体
     * @param {Array<string>} [fields] 显示字段列表
     * @param {Array<string>} [extFields] show response ext-fields
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPeerLink(showPeerLinkRequest?: ShowPeerLinkRequest): Promise<ShowPeerLinkResponse> {
        const options = ParamCreater().showPeerLink(showPeerLinkRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据类型、domain_id、region_id,资源类型，全球接入网关ID查询资源,返回查询到的资源的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询RMS全球接入网关
     * @param {string} rpName 通过rp_name过滤记录
     * @param {string} domainId domain_id
     * @param {string} regionId region_id
     * @param {string} resourceType resource_type
     * @param {string} globalDcGatewayId 全球接入网关ID
     * @param {Array<string>} [fields] 显示字段列表
     * @param {Array<string>} [extFields] show response ext-fields
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRmsGlobalDcGateway(showRmsGlobalDcGatewayRequest?: ShowRmsGlobalDcGatewayRequest): Promise<ShowRmsGlobalDcGatewayResponse> {
        const options = ParamCreater().showRmsGlobalDcGateway(showRmsGlobalDcGatewayRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据ID修改全球接入网关，返回修改全球接入网关的结果。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改全球接入网关
     * @param {string} globalDcGatewayId 全球接入网关ID
     * @param {UpdateGlobalDcGatewayRequestBody} updateGlobalDcGatewayRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateGlobalDcGateway(updateGlobalDcGatewayRequest?: UpdateGlobalDcGatewayRequest): Promise<UpdateGlobalDcGatewayResponse> {
        const options = ParamCreater().updateGlobalDcGateway(updateGlobalDcGatewayRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据ID修改全球接入网关对等链接，返回修改全球接入网关对等链接的结果。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改全球接入网关对等链接
     * @param {string} globalDcGatewayId 全球接入网关ID
     * @param {string} peerLinkId 全球接入网关对等体
     * @param {UpdatePeerLinkRequestBody} updatePeerLinkRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePeerLink(updatePeerLinkRequest?: UpdatePeerLinkRequest): Promise<UpdatePeerLinkResponse> {
        const options = ParamCreater().updatePeerLink(updatePeerLinkRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户各类资源的使用情况，如Directconnect的使用量，虚拟接口的使用量等。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询配额
     * @param {Array<string>} [type] 支持过滤的配额类型： - [physicalConnect:  物理连接direct_connect实例的配额和使用量] - [virtualInterface: 虚拟接口virtual-interface的配额和使用量] - [connectGateway: 连接网关（用于关联GEIP）的配额和使用量](tag:hws) - [geip: 每租户可以关联GEIP的配额和使用量](tag:hws) - [globalDcGateway 专线全球接入网关的配额和使用量] - [peerLinkPerGdgw: 接入网关的关联连接的配额和使用量]
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
     * - 为指定实例批量添加或删除标签
     * - 标签管理服务需要使用该接口批量管理实例的标签。
     * - 一个资源上最多有10个标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加删除资源标签
     * @param {string} resourceId 资源实例ID
     * @param {'dc-directconnect' | 'dc-vgw' | 'dc-vif'} resourceType - 专线服务资源类型，包括dc-directconnect/dc-vgw/dc-vif - dc-directconnect: 专线物理连接 - dc-vgw： 虚拟网关 - dc-vif： 虚拟接口
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
     * @param {'dc-directconnect' | 'dc-vgw' | 'dc-vif'} resourceType - 专线服务资源类型，包括dc-directconnect/dc-vgw/dc-vif - dc-directconnect: 专线物理连接 - dc-vgw： 虚拟网关 - dc-vif： 虚拟接口
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
     * @param {'dc-directconnect' | 'dc-vgw' | 'dc-vif'} resourceType - 专线服务资源类型，包括dc-directconnect/dc-vgw/dc-vif - dc-directconnect: 专线物理连接 - dc-vgw： 虚拟网关 - dc-vif： 虚拟接口
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
     * @param {'dc-directconnect' | 'dc-vgw' | 'dc-vif'} resourceType - 专线服务资源类型，包括dc-directconnect/dc-vgw/dc-vif - dc-directconnect: 专线物理连接 - dc-vgw： 虚拟网关 - dc-vif： 虚拟接口
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
     * @param {'dc-directconnect' | 'dc-vgw' | 'dc-vif'} resourceType - 专线服务资源类型，包括dc-directconnect/dc-vgw/dc-vif - dc-directconnect: 专线物理连接 - dc-vgw： 虚拟网关 - dc-vif： 虚拟接口
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
     * @param {'dc-directconnect' | 'dc-vgw' | 'dc-vif'} resourceType - 专线服务资源类型，包括dc-directconnect/dc-vgw/dc-vif - dc-directconnect: 专线物理连接 - dc-vgw： 虚拟网关 - dc-vif： 虚拟接口
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
     * @param {Array<string>} [enterpriseProjectId] 根据企业项目ID过滤资源实例
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
     * 每个虚拟接口可支持两个对等体，IPv4和IPv6对等体，在创建虚拟接口时默认创建IPv4对等体， 本接口一般用于增加ipv6对等体。创建虚拟接口对接体之后，可以通过虚拟接口查询配置结果 本接口只在支持Ipv6的区域开放，如需要使用请联系客服
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建虚拟接口对等体
     * @param {CreateVifPeerRequestBody} [createVifPeerRequestBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createVifPeer(createVifPeerRequest?: CreateVifPeerRequest): Promise<CreateVifPeerResponse> {
        const options = ParamCreater().createVifPeer(createVifPeerRequest);

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
     * 删除虚拟接口对等体信息,虚拟接口到少要含一个对等体,最后一个对等体不能删除 本接口只在支持Ipv6的区域开放，如需要使用请联系客服
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除虚拟接口对应的对等体
     * @param {string} vifPeerId 虚拟接口对等体ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteVifPeer(deleteVifPeerRequest?: DeleteVifPeerRequest): Promise<DeleteVifPeerResponse> {
        const options = ParamCreater().deleteVifPeer(deleteVifPeerRequest);

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
     * 查询倒换测试记录列表，只展示operate_status为COMPELTE的记录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询虚拟接口倒换测试记录列表
     * @param {number} [limit] 每页返回的个数。 取值范围：1~2000。
     * @param {string} [marker] 上一页最后一条资源记录的ID，为空时为查询第一页。 使用说明：必须与limit一起使用。
     * @param {Array<string>} [fields] 显示字段列表
     * @param {Array<'asc' | 'desc'>} [sortDir] 返回结果按照升序(asc)或降序(desc)排列，默认为asc
     * @param {string} [sortKey] 排序字段。
     * @param {Array<string>} [resourceId] 通过RESOURCE-ID过虑倒换测试记录信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSwitchoverTestRecords(listSwitchoverTestRecordsRequest?: ListSwitchoverTestRecordsRequest): Promise<ListSwitchoverTestRecordsResponse> {
        const options = ParamCreater().listSwitchoverTestRecords(listSwitchoverTestRecordsRequest);

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
     * @param {Array<string>} [enterpriseProjectId] 根据企业项目ID过滤资源实例
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
     * 客户双专线接入，需要支持双线自动倒换，方便进行功能测试。 虚拟接口进行倒换测试会导致接口关闭，业务流量中断。 对于虚拟接口，支持“关闭接口”和“开放接口”两种操作。 1、关闭接口：下发shutdown命令，关闭接口； 2、开放接口：下发undo_shutdown命令，使能接口。 倒换测试选择shutdown时，虚拟接口的状态为ADMIN_SHUTDOWN，此状态不允许虚拟接口的其他操作。 倒换测试选择undo_shutdown时，虚拟接口的状态为ACTIVE。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 执行虚拟接口倒换测试
     * @param {CreateSwitchoverTestRequestBody} createSwitchoverTestRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public switchoverTest(switchoverTestRequest?: SwitchoverTestRequest): Promise<SwitchoverTestResponse> {
        const options = ParamCreater().switchoverTest(switchoverTestRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新虚拟接口对等体信息,包括远端子网，名字和描述等。 本接口只在支持Ipv6的区域开放，如需要使用请联系客服
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新虚拟接口对等体
     * @param {string} vifPeerId 虚拟接口对等体ID
     * @param {UpdateVifPeerRequestBody} [updateVifPeerRequestBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateVifPeer(updateVifPeerRequest?: UpdateVifPeerRequest): Promise<UpdateVifPeerResponse> {
        const options = ParamCreater().updateVifPeer(updateVifPeerRequest);

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
         * 绑定GEIP操作
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        bindGlobalEips(bindGlobalEipsRequest?: BindGlobalEipsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/dcaas/connect-gateways/{connect_gateway_id}/binding-global-eips",
                contentType: "application/json; charset=utf-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let connectGatewayId;

            if (bindGlobalEipsRequest !== null && bindGlobalEipsRequest !== undefined) {
                if (bindGlobalEipsRequest instanceof BindGlobalEipsRequest) {
                    connectGatewayId = bindGlobalEipsRequest.connectGatewayId;
                    body = bindGlobalEipsRequest.body
                } else {
                    connectGatewayId = bindGlobalEipsRequest['connect_gateway_id'];
                    body = bindGlobalEipsRequest['body'];
                }
            }

        
            if (connectGatewayId === null || connectGatewayId === undefined) {
            throw new RequiredError('connectGatewayId','Required parameter connectGatewayId was null or undefined when calling bindGlobalEips.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json; charset=utf-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'connect_gateway_id': connectGatewayId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询已经绑定的GEIP列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGlobalEips(listGlobalEipsRequest?: ListGlobalEipsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/dcaas/connect-gateways/{connect_gateway_id}/binding-global-eips",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let connectGatewayId;
            
            let limit;
            
            let offset;
            
            let marker;
            
            let pageReverse;
            
            let fields;
            
            let extFields;
            
            let sortKey;
            
            let sortDir;
            
            let status;
            
            let globalEipId;
            
            let globalEipSegmentId;

            if (listGlobalEipsRequest !== null && listGlobalEipsRequest !== undefined) {
                if (listGlobalEipsRequest instanceof ListGlobalEipsRequest) {
                    connectGatewayId = listGlobalEipsRequest.connectGatewayId;
                    limit = listGlobalEipsRequest.limit;
                    offset = listGlobalEipsRequest.offset;
                    marker = listGlobalEipsRequest.marker;
                    pageReverse = listGlobalEipsRequest.pageReverse;
                    fields = listGlobalEipsRequest.fields;
                    extFields = listGlobalEipsRequest.extFields;
                    sortKey = listGlobalEipsRequest.sortKey;
                    sortDir = listGlobalEipsRequest.sortDir;
                    status = listGlobalEipsRequest.status;
                    globalEipId = listGlobalEipsRequest.globalEipId;
                    globalEipSegmentId = listGlobalEipsRequest.globalEipSegmentId;
                } else {
                    connectGatewayId = listGlobalEipsRequest['connect_gateway_id'];
                    limit = listGlobalEipsRequest['limit'];
                    offset = listGlobalEipsRequest['offset'];
                    marker = listGlobalEipsRequest['marker'];
                    pageReverse = listGlobalEipsRequest['page_reverse'];
                    fields = listGlobalEipsRequest['fields'];
                    extFields = listGlobalEipsRequest['ext_fields'];
                    sortKey = listGlobalEipsRequest['sort_key'];
                    sortDir = listGlobalEipsRequest['sort_dir'];
                    status = listGlobalEipsRequest['status'];
                    globalEipId = listGlobalEipsRequest['global_eip_id'];
                    globalEipSegmentId = listGlobalEipsRequest['global_eip_segment_id'];
                }
            }

        
            if (connectGatewayId === null || connectGatewayId === undefined) {
            throw new RequiredError('connectGatewayId','Required parameter connectGatewayId was null or undefined when calling listGlobalEips.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (pageReverse !== null && pageReverse !== undefined) {
                localVarQueryParameter['page_reverse'] = pageReverse;
            }
            if (fields !== null && fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }
            if (extFields !== null && extFields !== undefined) {
                localVarQueryParameter['ext_fields'] = extFields;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (globalEipId !== null && globalEipId !== undefined) {
                localVarQueryParameter['global_eip_id'] = globalEipId;
            }
            if (globalEipSegmentId !== null && globalEipSegmentId !== undefined) {
                localVarQueryParameter['global_eip_segment_id'] = globalEipSegmentId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'connect_gateway_id': connectGatewayId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 解绑GEIP
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        unbindGlobalEips(unbindGlobalEipsRequest?: UnbindGlobalEipsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/dcaas/connect-gateways/{connect_gateway_id}/unbinding-global-eips",
                contentType: "application/json; charset=utf-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let connectGatewayId;

            if (unbindGlobalEipsRequest !== null && unbindGlobalEipsRequest !== undefined) {
                if (unbindGlobalEipsRequest instanceof UnbindGlobalEipsRequest) {
                    connectGatewayId = unbindGlobalEipsRequest.connectGatewayId;
                    body = unbindGlobalEipsRequest.body
                } else {
                    connectGatewayId = unbindGlobalEipsRequest['connect_gateway_id'];
                    body = unbindGlobalEipsRequest['body'];
                }
            }

        
            if (connectGatewayId === null || connectGatewayId === undefined) {
            throw new RequiredError('connectGatewayId','Required parameter connectGatewayId was null or undefined when calling unbindGlobalEips.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json; charset=utf-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'connect_gateway_id': connectGatewayId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建互联网关
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createConnectGateway(createConnectGatewayRequest?: CreateConnectGatewayRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/dcaas/connect-gateways",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createConnectGatewayRequest !== null && createConnectGatewayRequest !== undefined) {
                if (createConnectGatewayRequest instanceof CreateConnectGatewayRequest) {
                    body = createConnectGatewayRequest.body
                } else {
                    body = createConnectGatewayRequest['body'];
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
         * 删除互联网关
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteConnectGateway(deleteConnectGatewayRequest?: DeleteConnectGatewayRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/dcaas/connect-gateways/{connect_gateway_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let connectGatewayId;

            if (deleteConnectGatewayRequest !== null && deleteConnectGatewayRequest !== undefined) {
                if (deleteConnectGatewayRequest instanceof DeleteConnectGatewayRequest) {
                    connectGatewayId = deleteConnectGatewayRequest.connectGatewayId;
                } else {
                    connectGatewayId = deleteConnectGatewayRequest['connect_gateway_id'];
                }
            }

        
            if (connectGatewayId === null || connectGatewayId === undefined) {
            throw new RequiredError('connectGatewayId','Required parameter connectGatewayId was null or undefined when calling deleteConnectGateway.');
            }

            options.pathParams = { 'connect_gateway_id': connectGatewayId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询互联网关列表信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listConnectGateways(listConnectGatewaysRequest?: ListConnectGatewaysRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/dcaas/connect-gateways",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;
            
            let marker;
            
            let pageReverse;
            
            let fields;
            
            let extFields;
            
            let sortKey;
            
            let sortDir;
            
            let id;
            
            let name;
            
            let status;

            if (listConnectGatewaysRequest !== null && listConnectGatewaysRequest !== undefined) {
                if (listConnectGatewaysRequest instanceof ListConnectGatewaysRequest) {
                    limit = listConnectGatewaysRequest.limit;
                    offset = listConnectGatewaysRequest.offset;
                    marker = listConnectGatewaysRequest.marker;
                    pageReverse = listConnectGatewaysRequest.pageReverse;
                    fields = listConnectGatewaysRequest.fields;
                    extFields = listConnectGatewaysRequest.extFields;
                    sortKey = listConnectGatewaysRequest.sortKey;
                    sortDir = listConnectGatewaysRequest.sortDir;
                    id = listConnectGatewaysRequest.id;
                    name = listConnectGatewaysRequest.name;
                    status = listConnectGatewaysRequest.status;
                } else {
                    limit = listConnectGatewaysRequest['limit'];
                    offset = listConnectGatewaysRequest['offset'];
                    marker = listConnectGatewaysRequest['marker'];
                    pageReverse = listConnectGatewaysRequest['page_reverse'];
                    fields = listConnectGatewaysRequest['fields'];
                    extFields = listConnectGatewaysRequest['ext_fields'];
                    sortKey = listConnectGatewaysRequest['sort_key'];
                    sortDir = listConnectGatewaysRequest['sort_dir'];
                    id = listConnectGatewaysRequest['id'];
                    name = listConnectGatewaysRequest['name'];
                    status = listConnectGatewaysRequest['status'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (pageReverse !== null && pageReverse !== undefined) {
                localVarQueryParameter['page_reverse'] = pageReverse;
            }
            if (fields !== null && fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }
            if (extFields !== null && extFields !== undefined) {
                localVarQueryParameter['ext_fields'] = extFields;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询互联网关详细信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showConnectGateway(showConnectGatewayRequest?: ShowConnectGatewayRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/dcaas/connect-gateways/{connect_gateway_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let connectGatewayId;

            if (showConnectGatewayRequest !== null && showConnectGatewayRequest !== undefined) {
                if (showConnectGatewayRequest instanceof ShowConnectGatewayRequest) {
                    connectGatewayId = showConnectGatewayRequest.connectGatewayId;
                } else {
                    connectGatewayId = showConnectGatewayRequest['connect_gateway_id'];
                }
            }

        
            if (connectGatewayId === null || connectGatewayId === undefined) {
            throw new RequiredError('connectGatewayId','Required parameter connectGatewayId was null or undefined when calling showConnectGateway.');
            }

            options.pathParams = { 'connect_gateway_id': connectGatewayId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新互联网关
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateConnectGateway(updateConnectGatewayRequest?: UpdateConnectGatewayRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/dcaas/connect-gateways/{connect_gateway_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let connectGatewayId;

            if (updateConnectGatewayRequest !== null && updateConnectGatewayRequest !== undefined) {
                if (updateConnectGatewayRequest instanceof UpdateConnectGatewayRequest) {
                    connectGatewayId = updateConnectGatewayRequest.connectGatewayId;
                    body = updateConnectGatewayRequest.body
                } else {
                    connectGatewayId = updateConnectGatewayRequest['connect_gateway_id'];
                    body = updateConnectGatewayRequest['body'];
                }
            }

        
            if (connectGatewayId === null || connectGatewayId === undefined) {
            throw new RequiredError('connectGatewayId','Required parameter connectGatewayId was null or undefined when calling updateConnectGateway.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'connect_gateway_id': connectGatewayId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
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
            
            let fields;

            if (showDirectConnectRequest !== null && showDirectConnectRequest !== undefined) {
                if (showDirectConnectRequest instanceof ShowDirectConnectRequest) {
                    directConnectId = showDirectConnectRequest.directConnectId;
                    fields = showDirectConnectRequest.fields;
                } else {
                    directConnectId = showDirectConnectRequest['direct_connect_id'];
                    fields = showDirectConnectRequest['fields'];
                }
            }

        
            if (directConnectId === null || directConnectId === undefined) {
            throw new RequiredError('directConnectId','Required parameter directConnectId was null or undefined when calling showDirectConnect.');
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
         * 合作伙伴更新托管专线.
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
         * 查询全球接入网关路由表，返回查询到的全球接入网关路由表的详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGdgwRouteTables(listGdgwRouteTablesRequest?: ListGdgwRouteTablesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/dcaas/gdgw/{gdgw_id}/routetables",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let gdgwId;
            
            let fields;
            
            let extFields;
            
            let nexthop;
            
            let destination;
            
            let addressFamily;

            if (listGdgwRouteTablesRequest !== null && listGdgwRouteTablesRequest !== undefined) {
                if (listGdgwRouteTablesRequest instanceof ListGdgwRouteTablesRequest) {
                    gdgwId = listGdgwRouteTablesRequest.gdgwId;
                    fields = listGdgwRouteTablesRequest.fields;
                    extFields = listGdgwRouteTablesRequest.extFields;
                    nexthop = listGdgwRouteTablesRequest.nexthop;
                    destination = listGdgwRouteTablesRequest.destination;
                    addressFamily = listGdgwRouteTablesRequest.addressFamily;
                } else {
                    gdgwId = listGdgwRouteTablesRequest['gdgw_id'];
                    fields = listGdgwRouteTablesRequest['fields'];
                    extFields = listGdgwRouteTablesRequest['ext_fields'];
                    nexthop = listGdgwRouteTablesRequest['nexthop'];
                    destination = listGdgwRouteTablesRequest['destination'];
                    addressFamily = listGdgwRouteTablesRequest['address_family'];
                }
            }

        
            if (gdgwId === null || gdgwId === undefined) {
            throw new RequiredError('gdgwId','Required parameter gdgwId was null or undefined when calling listGdgwRouteTables.');
            }
            if (fields !== null && fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }
            if (extFields !== null && extFields !== undefined) {
                localVarQueryParameter['ext_fields'] = extFields;
            }
            if (nexthop !== null && nexthop !== undefined) {
                localVarQueryParameter['nexthop'] = nexthop;
            }
            if (destination !== null && destination !== undefined) {
                localVarQueryParameter['destination'] = destination;
            }
            if (addressFamily !== null && addressFamily !== undefined) {
                localVarQueryParameter['address_family'] = addressFamily;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'gdgw_id': gdgwId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改全球接入网关路由表，返回修改全球接入网关路由表的结果。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateGdgwRouteTable(updateGdgwRouteTableRequest?: UpdateGdgwRouteTableRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/dcaas/gdgw/{gdgw_id}/routetables",
                contentType: "application/json; charset=utf-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let gdgwId;

            if (updateGdgwRouteTableRequest !== null && updateGdgwRouteTableRequest !== undefined) {
                if (updateGdgwRouteTableRequest instanceof UpdateGdgwRouteTableRequest) {
                    gdgwId = updateGdgwRouteTableRequest.gdgwId;
                    body = updateGdgwRouteTableRequest.body
                } else {
                    gdgwId = updateGdgwRouteTableRequest['gdgw_id'];
                    body = updateGdgwRouteTableRequest['body'];
                }
            }

        
            if (gdgwId === null || gdgwId === undefined) {
            throw new RequiredError('gdgwId','Required parameter gdgwId was null or undefined when calling updateGdgwRouteTable.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json; charset=utf-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'gdgw_id': gdgwId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建全球接入网关，返回创建全球接入网关的结果。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createGlobalDcGateway(createGlobalDcGatewayRequest?: CreateGlobalDcGatewayRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/dcaas/global-dc-gateways",
                contentType: "application/json; charset=utf-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createGlobalDcGatewayRequest !== null && createGlobalDcGatewayRequest !== undefined) {
                if (createGlobalDcGatewayRequest instanceof CreateGlobalDcGatewayRequest) {
                    body = createGlobalDcGatewayRequest.body
                } else {
                    body = createGlobalDcGatewayRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json; charset=utf-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建全球接入网关对等链接，返回创建全球接入网关对等链接的结果。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPeerLink(createPeerLinkRequest?: CreatePeerLinkRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/dcaas/global-dc-gateways/{global_dc_gateway_id}/peer-links",
                contentType: "application/json; charset=utf-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let globalDcGatewayId;

            if (createPeerLinkRequest !== null && createPeerLinkRequest !== undefined) {
                if (createPeerLinkRequest instanceof CreatePeerLinkRequest) {
                    globalDcGatewayId = createPeerLinkRequest.globalDcGatewayId;
                    body = createPeerLinkRequest.body
                } else {
                    globalDcGatewayId = createPeerLinkRequest['global_dc_gateway_id'];
                    body = createPeerLinkRequest['body'];
                }
            }

        
            if (globalDcGatewayId === null || globalDcGatewayId === undefined) {
            throw new RequiredError('globalDcGatewayId','Required parameter globalDcGatewayId was null or undefined when calling createPeerLink.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json; charset=utf-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'global_dc_gateway_id': globalDcGatewayId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据ID删除全球接入网关，返回删除全球接入网关的结果。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteGlobalDcGateway(deleteGlobalDcGatewayRequest?: DeleteGlobalDcGatewayRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/dcaas/global-dc-gateways/{global_dc_gateway_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let globalDcGatewayId;

            if (deleteGlobalDcGatewayRequest !== null && deleteGlobalDcGatewayRequest !== undefined) {
                if (deleteGlobalDcGatewayRequest instanceof DeleteGlobalDcGatewayRequest) {
                    globalDcGatewayId = deleteGlobalDcGatewayRequest.globalDcGatewayId;
                } else {
                    globalDcGatewayId = deleteGlobalDcGatewayRequest['global_dc_gateway_id'];
                }
            }

        
            if (globalDcGatewayId === null || globalDcGatewayId === undefined) {
            throw new RequiredError('globalDcGatewayId','Required parameter globalDcGatewayId was null or undefined when calling deleteGlobalDcGateway.');
            }

            options.pathParams = { 'global_dc_gateway_id': globalDcGatewayId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据ID删除全球接入网关对等链接，返回删除全球接入网关对等链接的结果。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePeerLink(deletePeerLinkRequest?: DeletePeerLinkRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/dcaas/global-dc-gateways/{global_dc_gateway_id}/peer-links/{peer_link_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let globalDcGatewayId;
            
            let peerLinkId;

            if (deletePeerLinkRequest !== null && deletePeerLinkRequest !== undefined) {
                if (deletePeerLinkRequest instanceof DeletePeerLinkRequest) {
                    globalDcGatewayId = deletePeerLinkRequest.globalDcGatewayId;
                    peerLinkId = deletePeerLinkRequest.peerLinkId;
                } else {
                    globalDcGatewayId = deletePeerLinkRequest['global_dc_gateway_id'];
                    peerLinkId = deletePeerLinkRequest['peer_link_id'];
                }
            }

        
            if (globalDcGatewayId === null || globalDcGatewayId === undefined) {
            throw new RequiredError('globalDcGatewayId','Required parameter globalDcGatewayId was null or undefined when calling deletePeerLink.');
            }
            if (peerLinkId === null || peerLinkId === undefined) {
            throw new RequiredError('peerLinkId','Required parameter peerLinkId was null or undefined when calling deletePeerLink.');
            }

            options.pathParams = { 'global_dc_gateway_id': globalDcGatewayId,'peer_link_id': peerLinkId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询 全球接入网关列表，返回列表中包含全球接入网关的详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGlobalDcGateway(listGlobalDcGatewayRequest?: ListGlobalDcGatewayRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/dcaas/global-dc-gateways",
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
            
            let globalCenterNetworkId;
            
            let siteNetworkId;
            
            let cloudConnectionId;

            if (listGlobalDcGatewayRequest !== null && listGlobalDcGatewayRequest !== undefined) {
                if (listGlobalDcGatewayRequest instanceof ListGlobalDcGatewayRequest) {
                    limit = listGlobalDcGatewayRequest.limit;
                    marker = listGlobalDcGatewayRequest.marker;
                    fields = listGlobalDcGatewayRequest.fields;
                    sortKey = listGlobalDcGatewayRequest.sortKey;
                    sortDir = listGlobalDcGatewayRequest.sortDir;
                    hostingId = listGlobalDcGatewayRequest.hostingId;
                    enterpriseProjectId = listGlobalDcGatewayRequest.enterpriseProjectId;
                    id = listGlobalDcGatewayRequest.id;
                    name = listGlobalDcGatewayRequest.name;
                    globalCenterNetworkId = listGlobalDcGatewayRequest.globalCenterNetworkId;
                    siteNetworkId = listGlobalDcGatewayRequest.siteNetworkId;
                    cloudConnectionId = listGlobalDcGatewayRequest.cloudConnectionId;
                } else {
                    limit = listGlobalDcGatewayRequest['limit'];
                    marker = listGlobalDcGatewayRequest['marker'];
                    fields = listGlobalDcGatewayRequest['fields'];
                    sortKey = listGlobalDcGatewayRequest['sort_key'];
                    sortDir = listGlobalDcGatewayRequest['sort_dir'];
                    hostingId = listGlobalDcGatewayRequest['hosting_id'];
                    enterpriseProjectId = listGlobalDcGatewayRequest['enterprise_project_id'];
                    id = listGlobalDcGatewayRequest['id'];
                    name = listGlobalDcGatewayRequest['name'];
                    globalCenterNetworkId = listGlobalDcGatewayRequest['global_center_network_id'];
                    siteNetworkId = listGlobalDcGatewayRequest['site_network_id'];
                    cloudConnectionId = listGlobalDcGatewayRequest['cloud_connection_id'];
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
            if (globalCenterNetworkId !== null && globalCenterNetworkId !== undefined) {
                localVarQueryParameter['global_center_network_id'] = globalCenterNetworkId;
            }
            if (siteNetworkId !== null && siteNetworkId !== undefined) {
                localVarQueryParameter['site_network_id'] = siteNetworkId;
            }
            if (cloudConnectionId !== null && cloudConnectionId !== undefined) {
                localVarQueryParameter['cloud_connection_id'] = cloudConnectionId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询全球接入网关对等链接，返回查询到的全球接入网关对等链接的详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPeerLinks(listPeerLinksRequest?: ListPeerLinksRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/dcaas/global-dc-gateways/{global_dc_gateway_id}/peer-links",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let globalDcGatewayId;
            
            let limit;
            
            let offset;
            
            let marker;
            
            let pageReverse;
            
            let fields;
            
            let extFields;
            
            let sortKey;
            
            let sortDir;
            
            let id;
            
            let name;

            if (listPeerLinksRequest !== null && listPeerLinksRequest !== undefined) {
                if (listPeerLinksRequest instanceof ListPeerLinksRequest) {
                    globalDcGatewayId = listPeerLinksRequest.globalDcGatewayId;
                    limit = listPeerLinksRequest.limit;
                    offset = listPeerLinksRequest.offset;
                    marker = listPeerLinksRequest.marker;
                    pageReverse = listPeerLinksRequest.pageReverse;
                    fields = listPeerLinksRequest.fields;
                    extFields = listPeerLinksRequest.extFields;
                    sortKey = listPeerLinksRequest.sortKey;
                    sortDir = listPeerLinksRequest.sortDir;
                    id = listPeerLinksRequest.id;
                    name = listPeerLinksRequest.name;
                } else {
                    globalDcGatewayId = listPeerLinksRequest['global_dc_gateway_id'];
                    limit = listPeerLinksRequest['limit'];
                    offset = listPeerLinksRequest['offset'];
                    marker = listPeerLinksRequest['marker'];
                    pageReverse = listPeerLinksRequest['page_reverse'];
                    fields = listPeerLinksRequest['fields'];
                    extFields = listPeerLinksRequest['ext_fields'];
                    sortKey = listPeerLinksRequest['sort_key'];
                    sortDir = listPeerLinksRequest['sort_dir'];
                    id = listPeerLinksRequest['id'];
                    name = listPeerLinksRequest['name'];
                }
            }

        
            if (globalDcGatewayId === null || globalDcGatewayId === undefined) {
            throw new RequiredError('globalDcGatewayId','Required parameter globalDcGatewayId was null or undefined when calling listPeerLinks.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (pageReverse !== null && pageReverse !== undefined) {
                localVarQueryParameter['page_reverse'] = pageReverse;
            }
            if (fields !== null && fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }
            if (extFields !== null && extFields !== undefined) {
                localVarQueryParameter['ext_fields'] = extFields;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'global_dc_gateway_id': globalDcGatewayId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据类型、domain_id、region_id,资源类型查询资源，返回查询到的资源的详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRmsGlobalDcGateway(listRmsGlobalDcGatewayRequest?: ListRmsGlobalDcGatewayRequest) {
            const options = {
                method: "GET",
                url: "/v3/providers/{rp_name}/domains/{domain_id}/regions/{region_id}/{resource_type}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let rpName;
            
            let domainId;
            
            let regionId;
            
            let resourceType;
            
            let limit;
            
            let offset;
            
            let marker;
            
            let pageReverse;
            
            let fields;
            
            let extFields;
            
            let sortKey;
            
            let sortDir;
            
            let id;
            
            let name;
            
            let status;
            
            let enterpriseProjectId;
            
            let globalCenterNetworkId;
            
            let siteNetworkId;
            
            let cloudConnectionId;

            if (listRmsGlobalDcGatewayRequest !== null && listRmsGlobalDcGatewayRequest !== undefined) {
                if (listRmsGlobalDcGatewayRequest instanceof ListRmsGlobalDcGatewayRequest) {
                    rpName = listRmsGlobalDcGatewayRequest.rpName;
                    domainId = listRmsGlobalDcGatewayRequest.domainId;
                    regionId = listRmsGlobalDcGatewayRequest.regionId;
                    resourceType = listRmsGlobalDcGatewayRequest.resourceType;
                    limit = listRmsGlobalDcGatewayRequest.limit;
                    offset = listRmsGlobalDcGatewayRequest.offset;
                    marker = listRmsGlobalDcGatewayRequest.marker;
                    pageReverse = listRmsGlobalDcGatewayRequest.pageReverse;
                    fields = listRmsGlobalDcGatewayRequest.fields;
                    extFields = listRmsGlobalDcGatewayRequest.extFields;
                    sortKey = listRmsGlobalDcGatewayRequest.sortKey;
                    sortDir = listRmsGlobalDcGatewayRequest.sortDir;
                    id = listRmsGlobalDcGatewayRequest.id;
                    name = listRmsGlobalDcGatewayRequest.name;
                    status = listRmsGlobalDcGatewayRequest.status;
                    enterpriseProjectId = listRmsGlobalDcGatewayRequest.enterpriseProjectId;
                    globalCenterNetworkId = listRmsGlobalDcGatewayRequest.globalCenterNetworkId;
                    siteNetworkId = listRmsGlobalDcGatewayRequest.siteNetworkId;
                    cloudConnectionId = listRmsGlobalDcGatewayRequest.cloudConnectionId;
                } else {
                    rpName = listRmsGlobalDcGatewayRequest['rp_name'];
                    domainId = listRmsGlobalDcGatewayRequest['domain_id'];
                    regionId = listRmsGlobalDcGatewayRequest['region_id'];
                    resourceType = listRmsGlobalDcGatewayRequest['resource_type'];
                    limit = listRmsGlobalDcGatewayRequest['limit'];
                    offset = listRmsGlobalDcGatewayRequest['offset'];
                    marker = listRmsGlobalDcGatewayRequest['marker'];
                    pageReverse = listRmsGlobalDcGatewayRequest['page_reverse'];
                    fields = listRmsGlobalDcGatewayRequest['fields'];
                    extFields = listRmsGlobalDcGatewayRequest['ext_fields'];
                    sortKey = listRmsGlobalDcGatewayRequest['sort_key'];
                    sortDir = listRmsGlobalDcGatewayRequest['sort_dir'];
                    id = listRmsGlobalDcGatewayRequest['id'];
                    name = listRmsGlobalDcGatewayRequest['name'];
                    status = listRmsGlobalDcGatewayRequest['status'];
                    enterpriseProjectId = listRmsGlobalDcGatewayRequest['enterprise_project_id'];
                    globalCenterNetworkId = listRmsGlobalDcGatewayRequest['global_center_network_id'];
                    siteNetworkId = listRmsGlobalDcGatewayRequest['site_network_id'];
                    cloudConnectionId = listRmsGlobalDcGatewayRequest['cloud_connection_id'];
                }
            }

        
            if (rpName === null || rpName === undefined) {
            throw new RequiredError('rpName','Required parameter rpName was null or undefined when calling listRmsGlobalDcGateway.');
            }
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling listRmsGlobalDcGateway.');
            }
            if (regionId === null || regionId === undefined) {
            throw new RequiredError('regionId','Required parameter regionId was null or undefined when calling listRmsGlobalDcGateway.');
            }
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling listRmsGlobalDcGateway.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (pageReverse !== null && pageReverse !== undefined) {
                localVarQueryParameter['page_reverse'] = pageReverse;
            }
            if (fields !== null && fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }
            if (extFields !== null && extFields !== undefined) {
                localVarQueryParameter['ext_fields'] = extFields;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (globalCenterNetworkId !== null && globalCenterNetworkId !== undefined) {
                localVarQueryParameter['global_center_network_id'] = globalCenterNetworkId;
            }
            if (siteNetworkId !== null && siteNetworkId !== undefined) {
                localVarQueryParameter['site_network_id'] = siteNetworkId;
            }
            if (cloudConnectionId !== null && cloudConnectionId !== undefined) {
                localVarQueryParameter['cloud_connection_id'] = cloudConnectionId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'rp_name': rpName,'domain_id': domainId,'region_id': regionId,'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据ID查询全球接入网关，返回查询到的全球接入网关的详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showGlobalDcGateway(showGlobalDcGatewayRequest?: ShowGlobalDcGatewayRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/dcaas/global-dc-gateways/{global_dc_gateway_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let globalDcGatewayId;
            
            let fields;
            
            let extFields;

            if (showGlobalDcGatewayRequest !== null && showGlobalDcGatewayRequest !== undefined) {
                if (showGlobalDcGatewayRequest instanceof ShowGlobalDcGatewayRequest) {
                    globalDcGatewayId = showGlobalDcGatewayRequest.globalDcGatewayId;
                    fields = showGlobalDcGatewayRequest.fields;
                    extFields = showGlobalDcGatewayRequest.extFields;
                } else {
                    globalDcGatewayId = showGlobalDcGatewayRequest['global_dc_gateway_id'];
                    fields = showGlobalDcGatewayRequest['fields'];
                    extFields = showGlobalDcGatewayRequest['ext_fields'];
                }
            }

        
            if (globalDcGatewayId === null || globalDcGatewayId === undefined) {
            throw new RequiredError('globalDcGatewayId','Required parameter globalDcGatewayId was null or undefined when calling showGlobalDcGateway.');
            }
            if (fields !== null && fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }
            if (extFields !== null && extFields !== undefined) {
                localVarQueryParameter['ext_fields'] = extFields;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'global_dc_gateway_id': globalDcGatewayId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据ID查询全球接入网关对等链接，返回查询到的全球接入网关对等链接的详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPeerLink(showPeerLinkRequest?: ShowPeerLinkRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/dcaas/global-dc-gateways/{global_dc_gateway_id}/peer-links/{peer_link_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let globalDcGatewayId;
            
            let peerLinkId;
            
            let fields;
            
            let extFields;

            if (showPeerLinkRequest !== null && showPeerLinkRequest !== undefined) {
                if (showPeerLinkRequest instanceof ShowPeerLinkRequest) {
                    globalDcGatewayId = showPeerLinkRequest.globalDcGatewayId;
                    peerLinkId = showPeerLinkRequest.peerLinkId;
                    fields = showPeerLinkRequest.fields;
                    extFields = showPeerLinkRequest.extFields;
                } else {
                    globalDcGatewayId = showPeerLinkRequest['global_dc_gateway_id'];
                    peerLinkId = showPeerLinkRequest['peer_link_id'];
                    fields = showPeerLinkRequest['fields'];
                    extFields = showPeerLinkRequest['ext_fields'];
                }
            }

        
            if (globalDcGatewayId === null || globalDcGatewayId === undefined) {
            throw new RequiredError('globalDcGatewayId','Required parameter globalDcGatewayId was null or undefined when calling showPeerLink.');
            }
            if (peerLinkId === null || peerLinkId === undefined) {
            throw new RequiredError('peerLinkId','Required parameter peerLinkId was null or undefined when calling showPeerLink.');
            }
            if (fields !== null && fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }
            if (extFields !== null && extFields !== undefined) {
                localVarQueryParameter['ext_fields'] = extFields;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'global_dc_gateway_id': globalDcGatewayId,'peer_link_id': peerLinkId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据类型、domain_id、region_id,资源类型，全球接入网关ID查询资源,返回查询到的资源的详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRmsGlobalDcGateway(showRmsGlobalDcGatewayRequest?: ShowRmsGlobalDcGatewayRequest) {
            const options = {
                method: "GET",
                url: "/v3/providers/{rp_name}/domains/{domain_id}/regions/{region_id}/{resource_type}/{global_dc_gateway_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let rpName;
            
            let domainId;
            
            let regionId;
            
            let resourceType;
            
            let globalDcGatewayId;
            
            let fields;
            
            let extFields;

            if (showRmsGlobalDcGatewayRequest !== null && showRmsGlobalDcGatewayRequest !== undefined) {
                if (showRmsGlobalDcGatewayRequest instanceof ShowRmsGlobalDcGatewayRequest) {
                    rpName = showRmsGlobalDcGatewayRequest.rpName;
                    domainId = showRmsGlobalDcGatewayRequest.domainId;
                    regionId = showRmsGlobalDcGatewayRequest.regionId;
                    resourceType = showRmsGlobalDcGatewayRequest.resourceType;
                    globalDcGatewayId = showRmsGlobalDcGatewayRequest.globalDcGatewayId;
                    fields = showRmsGlobalDcGatewayRequest.fields;
                    extFields = showRmsGlobalDcGatewayRequest.extFields;
                } else {
                    rpName = showRmsGlobalDcGatewayRequest['rp_name'];
                    domainId = showRmsGlobalDcGatewayRequest['domain_id'];
                    regionId = showRmsGlobalDcGatewayRequest['region_id'];
                    resourceType = showRmsGlobalDcGatewayRequest['resource_type'];
                    globalDcGatewayId = showRmsGlobalDcGatewayRequest['global_dc_gateway_id'];
                    fields = showRmsGlobalDcGatewayRequest['fields'];
                    extFields = showRmsGlobalDcGatewayRequest['ext_fields'];
                }
            }

        
            if (rpName === null || rpName === undefined) {
            throw new RequiredError('rpName','Required parameter rpName was null or undefined when calling showRmsGlobalDcGateway.');
            }
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling showRmsGlobalDcGateway.');
            }
            if (regionId === null || regionId === undefined) {
            throw new RequiredError('regionId','Required parameter regionId was null or undefined when calling showRmsGlobalDcGateway.');
            }
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling showRmsGlobalDcGateway.');
            }
            if (globalDcGatewayId === null || globalDcGatewayId === undefined) {
            throw new RequiredError('globalDcGatewayId','Required parameter globalDcGatewayId was null or undefined when calling showRmsGlobalDcGateway.');
            }
            if (fields !== null && fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }
            if (extFields !== null && extFields !== undefined) {
                localVarQueryParameter['ext_fields'] = extFields;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'rp_name': rpName,'domain_id': domainId,'region_id': regionId,'resource_type': resourceType,'global_dc_gateway_id': globalDcGatewayId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据ID修改全球接入网关，返回修改全球接入网关的结果。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateGlobalDcGateway(updateGlobalDcGatewayRequest?: UpdateGlobalDcGatewayRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/dcaas/global-dc-gateways/{global_dc_gateway_id}",
                contentType: "application/json; charset=utf-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let globalDcGatewayId;

            if (updateGlobalDcGatewayRequest !== null && updateGlobalDcGatewayRequest !== undefined) {
                if (updateGlobalDcGatewayRequest instanceof UpdateGlobalDcGatewayRequest) {
                    globalDcGatewayId = updateGlobalDcGatewayRequest.globalDcGatewayId;
                    body = updateGlobalDcGatewayRequest.body
                } else {
                    globalDcGatewayId = updateGlobalDcGatewayRequest['global_dc_gateway_id'];
                    body = updateGlobalDcGatewayRequest['body'];
                }
            }

        
            if (globalDcGatewayId === null || globalDcGatewayId === undefined) {
            throw new RequiredError('globalDcGatewayId','Required parameter globalDcGatewayId was null or undefined when calling updateGlobalDcGateway.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json; charset=utf-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'global_dc_gateway_id': globalDcGatewayId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据ID修改全球接入网关对等链接，返回修改全球接入网关对等链接的结果。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePeerLink(updatePeerLinkRequest?: UpdatePeerLinkRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/dcaas/global-dc-gateways/{global_dc_gateway_id}/peer-links/{peer_link_id}",
                contentType: "application/json; charset=utf-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let globalDcGatewayId;
            
            let peerLinkId;

            if (updatePeerLinkRequest !== null && updatePeerLinkRequest !== undefined) {
                if (updatePeerLinkRequest instanceof UpdatePeerLinkRequest) {
                    globalDcGatewayId = updatePeerLinkRequest.globalDcGatewayId;
                    peerLinkId = updatePeerLinkRequest.peerLinkId;
                    body = updatePeerLinkRequest.body
                } else {
                    globalDcGatewayId = updatePeerLinkRequest['global_dc_gateway_id'];
                    peerLinkId = updatePeerLinkRequest['peer_link_id'];
                    body = updatePeerLinkRequest['body'];
                }
            }

        
            if (globalDcGatewayId === null || globalDcGatewayId === undefined) {
            throw new RequiredError('globalDcGatewayId','Required parameter globalDcGatewayId was null or undefined when calling updatePeerLink.');
            }
            if (peerLinkId === null || peerLinkId === undefined) {
            throw new RequiredError('peerLinkId','Required parameter peerLinkId was null or undefined when calling updatePeerLink.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json; charset=utf-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'global_dc_gateway_id': globalDcGatewayId,'peer_link_id': peerLinkId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户各类资源的使用情况，如Directconnect的使用量，虚拟接口的使用量等。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showQuotas(showQuotasRequest?: ShowQuotasRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/dcaas/quotas",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let type;

            if (showQuotasRequest !== null && showQuotasRequest !== undefined) {
                if (showQuotasRequest instanceof ShowQuotasRequest) {
                    type = showQuotasRequest.type;
                } else {
                    type = showQuotasRequest['type'];
                }
            }

        
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            options.queryParams = localVarQueryParameter;
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
            
            let enterpriseProjectId;
            
            let vpcId;

            if (listVirtualGatewaysRequest !== null && listVirtualGatewaysRequest !== undefined) {
                if (listVirtualGatewaysRequest instanceof ListVirtualGatewaysRequest) {
                    limit = listVirtualGatewaysRequest.limit;
                    marker = listVirtualGatewaysRequest.marker;
                    fields = listVirtualGatewaysRequest.fields;
                    sortDir = listVirtualGatewaysRequest.sortDir;
                    sortKey = listVirtualGatewaysRequest.sortKey;
                    id = listVirtualGatewaysRequest.id;
                    enterpriseProjectId = listVirtualGatewaysRequest.enterpriseProjectId;
                    vpcId = listVirtualGatewaysRequest.vpcId;
                } else {
                    limit = listVirtualGatewaysRequest['limit'];
                    marker = listVirtualGatewaysRequest['marker'];
                    fields = listVirtualGatewaysRequest['fields'];
                    sortDir = listVirtualGatewaysRequest['sort_dir'];
                    sortKey = listVirtualGatewaysRequest['sort_key'];
                    id = listVirtualGatewaysRequest['id'];
                    enterpriseProjectId = listVirtualGatewaysRequest['enterprise_project_id'];
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
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
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
         * 每个虚拟接口可支持两个对等体，IPv4和IPv6对等体，在创建虚拟接口时默认创建IPv4对等体， 本接口一般用于增加ipv6对等体。创建虚拟接口对接体之后，可以通过虚拟接口查询配置结果 本接口只在支持Ipv6的区域开放，如需要使用请联系客服
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createVifPeer(createVifPeerRequest?: CreateVifPeerRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/dcaas/vif-peers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createVifPeerRequest !== null && createVifPeerRequest !== undefined) {
                if (createVifPeerRequest instanceof CreateVifPeerRequest) {
                    body = createVifPeerRequest.body
                } else {
                    body = createVifPeerRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
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
         * 删除虚拟接口对等体信息,虚拟接口到少要含一个对等体,最后一个对等体不能删除 本接口只在支持Ipv6的区域开放，如需要使用请联系客服
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteVifPeer(deleteVifPeerRequest?: DeleteVifPeerRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/dcaas/vif-peers/{vif_peer_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let vifPeerId;

            if (deleteVifPeerRequest !== null && deleteVifPeerRequest !== undefined) {
                if (deleteVifPeerRequest instanceof DeleteVifPeerRequest) {
                    vifPeerId = deleteVifPeerRequest.vifPeerId;
                } else {
                    vifPeerId = deleteVifPeerRequest['vif_peer_id'];
                }
            }

        
            if (vifPeerId === null || vifPeerId === undefined) {
            throw new RequiredError('vifPeerId','Required parameter vifPeerId was null or undefined when calling deleteVifPeer.');
            }

            options.pathParams = { 'vif_peer_id': vifPeerId, };
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
         * 查询倒换测试记录列表，只展示operate_status为COMPELTE的记录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSwitchoverTestRecords(listSwitchoverTestRecordsRequest?: ListSwitchoverTestRecordsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/dcaas/switchover-test",
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
            
            let resourceId;

            if (listSwitchoverTestRecordsRequest !== null && listSwitchoverTestRecordsRequest !== undefined) {
                if (listSwitchoverTestRecordsRequest instanceof ListSwitchoverTestRecordsRequest) {
                    limit = listSwitchoverTestRecordsRequest.limit;
                    marker = listSwitchoverTestRecordsRequest.marker;
                    fields = listSwitchoverTestRecordsRequest.fields;
                    sortDir = listSwitchoverTestRecordsRequest.sortDir;
                    sortKey = listSwitchoverTestRecordsRequest.sortKey;
                    resourceId = listSwitchoverTestRecordsRequest.resourceId;
                } else {
                    limit = listSwitchoverTestRecordsRequest['limit'];
                    marker = listSwitchoverTestRecordsRequest['marker'];
                    fields = listSwitchoverTestRecordsRequest['fields'];
                    sortDir = listSwitchoverTestRecordsRequest['sort_dir'];
                    sortKey = listSwitchoverTestRecordsRequest['sort_key'];
                    resourceId = listSwitchoverTestRecordsRequest['resource_id'];
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
            if (resourceId !== null && resourceId !== undefined) {
                localVarQueryParameter['resource_id'] = resourceId;
            }

            options.queryParams = localVarQueryParameter;
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
         * 客户双专线接入，需要支持双线自动倒换，方便进行功能测试。 虚拟接口进行倒换测试会导致接口关闭，业务流量中断。 对于虚拟接口，支持“关闭接口”和“开放接口”两种操作。 1、关闭接口：下发shutdown命令，关闭接口； 2、开放接口：下发undo_shutdown命令，使能接口。 倒换测试选择shutdown时，虚拟接口的状态为ADMIN_SHUTDOWN，此状态不允许虚拟接口的其他操作。 倒换测试选择undo_shutdown时，虚拟接口的状态为ACTIVE。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        switchoverTest(switchoverTestRequest?: SwitchoverTestRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/dcaas/switchover-test",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (switchoverTestRequest !== null && switchoverTestRequest !== undefined) {
                if (switchoverTestRequest instanceof SwitchoverTestRequest) {
                    body = switchoverTestRequest.body
                } else {
                    body = switchoverTestRequest['body'];
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
         * 更新虚拟接口对等体信息,包括远端子网，名字和描述等。 本接口只在支持Ipv6的区域开放，如需要使用请联系客服
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateVifPeer(updateVifPeerRequest?: UpdateVifPeerRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/dcaas/vif-peers/{vif_peer_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let vifPeerId;

            if (updateVifPeerRequest !== null && updateVifPeerRequest !== undefined) {
                if (updateVifPeerRequest instanceof UpdateVifPeerRequest) {
                    vifPeerId = updateVifPeerRequest.vifPeerId;
                    body = updateVifPeerRequest.body
                } else {
                    vifPeerId = updateVifPeerRequest['vif_peer_id'];
                    body = updateVifPeerRequest['body'];
                }
            }

        
            if (vifPeerId === null || vifPeerId === undefined) {
            throw new RequiredError('vifPeerId','Required parameter vifPeerId was null or undefined when calling updateVifPeer.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vif_peer_id': vifPeerId, };
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