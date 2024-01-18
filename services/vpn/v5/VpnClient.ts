import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AvailabilityZones } from './model/AvailabilityZones';
import { BatchCreateResourceTagsRequest } from './model/BatchCreateResourceTagsRequest';
import { BatchCreateResourceTagsResponse } from './model/BatchCreateResourceTagsResponse';
import { BatchDeleteResourceTagsRequest } from './model/BatchDeleteResourceTagsRequest';
import { BatchDeleteResourceTagsResponse } from './model/BatchDeleteResourceTagsResponse';
import { CaCertificate } from './model/CaCertificate';
import { CaCertificateRequest } from './model/CaCertificateRequest';
import { ConnectionMonitorInfo } from './model/ConnectionMonitorInfo';
import { CountResourcesByTagsRequest } from './model/CountResourcesByTagsRequest';
import { CountResourcesByTagsResponse } from './model/CountResourcesByTagsResponse';
import { CreateCgwRequest } from './model/CreateCgwRequest';
import { CreateCgwRequestBody } from './model/CreateCgwRequestBody';
import { CreateCgwRequestBodyContent } from './model/CreateCgwRequestBodyContent';
import { CreateCgwResponse } from './model/CreateCgwResponse';
import { CreateConnectionMonitorInfo } from './model/CreateConnectionMonitorInfo';
import { CreateConnectionMonitorRequest } from './model/CreateConnectionMonitorRequest';
import { CreateConnectionMonitorRequestBody } from './model/CreateConnectionMonitorRequestBody';
import { CreateConnectionMonitorRequestBodyContent } from './model/CreateConnectionMonitorRequestBodyContent';
import { CreateConnectionMonitorResponse } from './model/CreateConnectionMonitorResponse';
import { CreateRequestEip } from './model/CreateRequestEip';
import { CreateResourcesTagsRequestBody } from './model/CreateResourcesTagsRequestBody';
import { CreateResponseVpnConnection } from './model/CreateResponseVpnConnection';
import { CreateResponseVpnGateway } from './model/CreateResponseVpnGateway';
import { CreateVgwCertificateRequest } from './model/CreateVgwCertificateRequest';
import { CreateVgwCertificateResponse } from './model/CreateVgwCertificateResponse';
import { CreateVgwRequest } from './model/CreateVgwRequest';
import { CreateVgwRequestBody } from './model/CreateVgwRequestBody';
import { CreateVgwRequestBodyContent } from './model/CreateVgwRequestBodyContent';
import { CreateVgwResponse } from './model/CreateVgwResponse';
import { CreateVpnConnectionRequest } from './model/CreateVpnConnectionRequest';
import { CreateVpnConnectionRequestBody } from './model/CreateVpnConnectionRequestBody';
import { CreateVpnConnectionRequestBodyContent } from './model/CreateVpnConnectionRequestBodyContent';
import { CreateVpnConnectionResponse } from './model/CreateVpnConnectionResponse';
import { DeleteCgwRequest } from './model/DeleteCgwRequest';
import { DeleteCgwResponse } from './model/DeleteCgwResponse';
import { DeleteConnectionMonitorRequest } from './model/DeleteConnectionMonitorRequest';
import { DeleteConnectionMonitorResponse } from './model/DeleteConnectionMonitorResponse';
import { DeleteResourcesTagsRequestBody } from './model/DeleteResourcesTagsRequestBody';
import { DeleteVgwRequest } from './model/DeleteVgwRequest';
import { DeleteVgwResponse } from './model/DeleteVgwResponse';
import { DeleteVpnConnectionRequest } from './model/DeleteVpnConnectionRequest';
import { DeleteVpnConnectionResponse } from './model/DeleteVpnConnectionResponse';
import { Dpd } from './model/Dpd';
import { IkePolicy } from './model/IkePolicy';
import { IpsecPolicy } from './model/IpsecPolicy';
import { ListAvailabilityZonesRequest } from './model/ListAvailabilityZonesRequest';
import { ListAvailabilityZonesResponse } from './model/ListAvailabilityZonesResponse';
import { ListCgwsRequest } from './model/ListCgwsRequest';
import { ListCgwsResponse } from './model/ListCgwsResponse';
import { ListConnectionMonitorsRequest } from './model/ListConnectionMonitorsRequest';
import { ListConnectionMonitorsResponse } from './model/ListConnectionMonitorsResponse';
import { ListProjectTagsRequest } from './model/ListProjectTagsRequest';
import { ListProjectTagsResponse } from './model/ListProjectTagsResponse';
import { ListResourcesByTagsRequest } from './model/ListResourcesByTagsRequest';
import { ListResourcesByTagsResponse } from './model/ListResourcesByTagsResponse';
import { ListVgwsRequest } from './model/ListVgwsRequest';
import { ListVgwsResponse } from './model/ListVgwsResponse';
import { ListVpnConnectionsRequest } from './model/ListVpnConnectionsRequest';
import { ListVpnConnectionsResponse } from './model/ListVpnConnectionsResponse';
import { Match } from './model/Match';
import { PageInfo } from './model/PageInfo';
import { PolicyRule } from './model/PolicyRule';
import { PolicyTemplate } from './model/PolicyTemplate';
import { QueryResourcesRequestBody } from './model/QueryResourcesRequestBody';
import { Quota } from './model/Quota';
import { Quotas } from './model/Quotas';
import { Resource } from './model/Resource';
import { ResourceTag } from './model/ResourceTag';
import { ResponseCustomerGateway } from './model/ResponseCustomerGateway';
import { ResponseEip } from './model/ResponseEip';
import { ResponseVpnConnection } from './model/ResponseVpnConnection';
import { ResponseVpnGateway } from './model/ResponseVpnGateway';
import { ShowCgwRequest } from './model/ShowCgwRequest';
import { ShowCgwResponse } from './model/ShowCgwResponse';
import { ShowConnectionMonitorRequest } from './model/ShowConnectionMonitorRequest';
import { ShowConnectionMonitorResponse } from './model/ShowConnectionMonitorResponse';
import { ShowQuotasInfoRequest } from './model/ShowQuotasInfoRequest';
import { ShowQuotasInfoResponse } from './model/ShowQuotasInfoResponse';
import { ShowResourceTagsRequest } from './model/ShowResourceTagsRequest';
import { ShowResourceTagsResponse } from './model/ShowResourceTagsResponse';
import { ShowVgwRequest } from './model/ShowVgwRequest';
import { ShowVgwResponse } from './model/ShowVgwResponse';
import { ShowVpnConnectionRequest } from './model/ShowVpnConnectionRequest';
import { ShowVpnConnectionResponse } from './model/ShowVpnConnectionResponse';
import { ShowVpnGatewayCertificateRequest } from './model/ShowVpnGatewayCertificateRequest';
import { ShowVpnGatewayCertificateResponse } from './model/ShowVpnGatewayCertificateResponse';
import { Tag } from './model/Tag';
import { UpdateCgwRequest } from './model/UpdateCgwRequest';
import { UpdateCgwRequestBody } from './model/UpdateCgwRequestBody';
import { UpdateCgwRequestBodyContent } from './model/UpdateCgwRequestBodyContent';
import { UpdateCgwResponse } from './model/UpdateCgwResponse';
import { UpdateDpd } from './model/UpdateDpd';
import { UpdateIkePolicy } from './model/UpdateIkePolicy';
import { UpdateIpsecPolicy } from './model/UpdateIpsecPolicy';
import { UpdateRequestPolicyTemplate } from './model/UpdateRequestPolicyTemplate';
import { UpdateResponseVpnConnection } from './model/UpdateResponseVpnConnection';
import { UpdateResponseVpnGateway } from './model/UpdateResponseVpnGateway';
import { UpdateVgwCertificateRequest } from './model/UpdateVgwCertificateRequest';
import { UpdateVgwCertificateResponse } from './model/UpdateVgwCertificateResponse';
import { UpdateVgwIkePolicy } from './model/UpdateVgwIkePolicy';
import { UpdateVgwIpsecPolicy } from './model/UpdateVgwIpsecPolicy';
import { UpdateVgwRequest } from './model/UpdateVgwRequest';
import { UpdateVgwRequestBody } from './model/UpdateVgwRequestBody';
import { UpdateVgwRequestBodyContent } from './model/UpdateVgwRequestBodyContent';
import { UpdateVgwResponse } from './model/UpdateVgwResponse';
import { UpdateVpnConnectionRequest } from './model/UpdateVpnConnectionRequest';
import { UpdateVpnConnectionRequestBody } from './model/UpdateVpnConnectionRequestBody';
import { UpdateVpnConnectionRequestBodyContent } from './model/UpdateVpnConnectionRequestBodyContent';
import { UpdateVpnConnectionResponse } from './model/UpdateVpnConnectionResponse';
import { VgwIkePolicy } from './model/VgwIkePolicy';
import { VgwIpsecPolicy } from './model/VgwIpsecPolicy';
import { VpnGatewayAvailabilityZones } from './model/VpnGatewayAvailabilityZones';
import { VpnGatewayCertificate } from './model/VpnGatewayCertificate';
import { VpnGatewayCertificateConfig } from './model/VpnGatewayCertificateConfig';
import { VpnGatewayCertificateRequestBody } from './model/VpnGatewayCertificateRequestBody';
import { VpnGatewayCertificateRequestBodyContent } from './model/VpnGatewayCertificateRequestBodyContent';
import { VpnResourceTag } from './model/VpnResourceTag';

export class VpnClient {
    public static newBuilder(): ClientBuilder<VpnClient> {
            return new ClientBuilder<VpnClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 创建VPN连接监控
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建VPN连接监控
     * @param {CreateConnectionMonitorRequestBody} createConnectionMonitorRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createConnectionMonitor(createConnectionMonitorRequest?: CreateConnectionMonitorRequest): Promise<CreateConnectionMonitorResponse> {
        const options = ParamCreater().createConnectionMonitor(createConnectionMonitorRequest);

         // @ts-ignore
        options['responseHeaders'] = ['header-response-token'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据VPN连接监控的ID，删除指定的VPN连接监控
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除VPN连接监控
     * @param {string} connectionMonitorId VPN连接监控的ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteConnectionMonitor(deleteConnectionMonitorRequest?: DeleteConnectionMonitorRequest): Promise<DeleteConnectionMonitorResponse> {
        const options = ParamCreater().deleteConnectionMonitor(deleteConnectionMonitorRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询VPN连接监控列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询VPN连接监控列表
     * @param {string} [vpnConnectionId] VPN连接Id
     * @param {Array<string>} [enterpriseProjectId] 企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listConnectionMonitors(listConnectionMonitorsRequest?: ListConnectionMonitorsRequest): Promise<ListConnectionMonitorsResponse> {
        const options = ParamCreater().listConnectionMonitors(listConnectionMonitorsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据VPN连接监控的ID,查询指定的VPN连接监控
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询VPN连接监控
     * @param {string} connectionMonitorId VPN连接监控的ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showConnectionMonitor(showConnectionMonitorRequest?: ShowConnectionMonitorRequest): Promise<ShowConnectionMonitorResponse> {
        const options = ParamCreater().showConnectionMonitor(showConnectionMonitorRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建租户用于与VPN网关相连的对端网关
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建对端网关
     * @param {CreateCgwRequestBody} createCgwRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCgw(createCgwRequest?: CreateCgwRequest): Promise<CreateCgwResponse> {
        const options = ParamCreater().createCgw(createCgwRequest);

         // @ts-ignore
        options['responseHeaders'] = ['header-response-token'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据对端网关ID，删除指定的对端网关
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除对端网关
     * @param {string} customerGatewayId 对端网关ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteCgw(deleteCgwRequest?: DeleteCgwRequest): Promise<DeleteCgwResponse> {
        const options = ParamCreater().deleteCgw(deleteCgwRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询对端网关列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询对端网关列表
     * @param {string} [cgwId] CustomerGateway ID
     * @param {number} [limit] 分页查询时每页返回的记录数量
     * @param {string} [marker] 上一页最后一条记录的id，为空时为查询第一页。使用说明：必须与limit一起使用。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCgws(listCgwsRequest?: ListCgwsRequest): Promise<ListCgwsResponse> {
        const options = ParamCreater().listCgws(listCgwsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据对端网关ID，查询指定的对端网关
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询对端网关
     * @param {string} customerGatewayId 对端网关ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCgw(showCgwRequest?: ShowCgwRequest): Promise<ShowCgwResponse> {
        const options = ParamCreater().showCgw(showCgwRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据对端网关ID，更新指定的对端网关
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新对端网关
     * @param {string} customerGatewayId 对端网关ID
     * @param {UpdateCgwRequestBody} updateCgwRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateCgw(updateCgwRequest?: UpdateCgwRequest): Promise<UpdateCgwResponse> {
        const options = ParamCreater().updateCgw(updateCgwRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 为指定实例批量添加标签,标签管理服务需要使用该接口批量管理实例的标签.一个资源上最多有20个标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加资源标签
     * @param {'vpn-gateway' | 'vpn-connection' | 'customer-gateway'} resourceType 资源类型
     * @param {string} resourceId 资源ID
     * @param {CreateResourcesTagsRequestBody} createResourcesTagsRequestBody 
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
     * 为指定实例批量删除标签,标签管理服务需要使用该接口批量管理实例的标签.
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除资源标签
     * @param {'vpn-gateway' | 'vpn-connection' | 'customer-gateway'} resourceType 资源类型
     * @param {string} resourceId 资源ID
     * @param {DeleteResourcesTagsRequestBody} deleteResourcesTagsRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteResourceTags(batchDeleteResourceTagsRequest?: BatchDeleteResourceTagsRequest): Promise<BatchDeleteResourceTagsResponse> {
        const options = ParamCreater().batchDeleteResourceTags(batchDeleteResourceTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 使用标签过滤实例,并查询实例数量,需要各服务提供查询
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询标签下资源实例数量
     * @param {'vpn-gateway' | 'vpn-connection' | 'customer-gateway'} resourceType 资源类型
     * @param {QueryResourcesRequestBody} queryResourcesRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public countResourcesByTags(countResourcesByTagsRequest?: CountResourcesByTagsRequest): Promise<CountResourcesByTagsResponse> {
        const options = ParamCreater().countResourcesByTags(countResourcesByTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户在指定Project中实例类型的所有资源标签集合
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目下标签
     * @param {'vpn-gateway' | 'vpn-connection' | 'customer-gateway'} resourceType 资源类型
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
     * 使用标签过滤实例,并查询实例数量,需要各服务提供查询
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 按标签查询资源
     * @param {'vpn-gateway' | 'vpn-connection' | 'customer-gateway'} resourceType 资源类型
     * @param {QueryResourcesRequestBody} queryResourcesRequestBody 
     * @param {string} [limit] limit
     * @param {string} [offset] offset
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listResourcesByTags(listResourcesByTagsRequest?: ListResourcesByTagsRequest): Promise<ListResourcesByTagsResponse> {
        const options = ParamCreater().listResourcesByTags(listResourcesByTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定实例的标签信息,标签管理服务需要使用该接口查询指定实例的全部标签数据
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源标签
     * @param {'vpn-gateway' | 'vpn-connection' | 'customer-gateway'} resourceType 资源类型
     * @param {string} resourceId 资源ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showResourceTags(showResourceTagsRequest?: ShowResourceTagsRequest): Promise<ShowResourceTagsResponse> {
        const options = ParamCreater().showResourceTags(showResourceTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建VPN连接，连接VPN网关与对端网关
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建VPN连接
     * @param {CreateVpnConnectionRequestBody} createVpnConnectionRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createVpnConnection(createVpnConnectionRequest?: CreateVpnConnectionRequest): Promise<CreateVpnConnectionResponse> {
        const options = ParamCreater().createVpnConnection(createVpnConnectionRequest);

         // @ts-ignore
        options['responseHeaders'] = ['header-response-token'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据连接ID，删除指定的VPN连接
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除VPN连接
     * @param {string} vpnConnectionId vpn连接ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteVpnConnection(deleteVpnConnectionRequest?: DeleteVpnConnectionRequest): Promise<DeleteVpnConnectionResponse> {
        const options = ParamCreater().deleteVpnConnection(deleteVpnConnectionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询VPN连接列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询VPN连接列表
     * @param {string} [vpnId] VPN ID
     * @param {string} [eipId] Eip ID
     * @param {string} [vgwIp] VGW IP
     * @param {string} [vgwId] vgw ID
     * @param {Array<string>} [enterpriseProjectId] 企业项目id
     * @param {number} [limit] 分页查询时每页返回的记录数量
     * @param {string} [marker] 上一页最后一条记录的id，为空时为查询第一页。使用说明：必须与limit一起使用。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVpnConnections(listVpnConnectionsRequest?: ListVpnConnectionsRequest): Promise<ListVpnConnectionsResponse> {
        const options = ParamCreater().listVpnConnections(listVpnConnectionsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['header-response-token'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据连接ID，查询指定的VPN连接的参数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询VPN连接
     * @param {string} vpnConnectionId vpn连接ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVpnConnection(showVpnConnectionRequest?: ShowVpnConnectionRequest): Promise<ShowVpnConnectionResponse> {
        const options = ParamCreater().showVpnConnection(showVpnConnectionRequest);

         // @ts-ignore
        options['responseHeaders'] = ['header-response-token'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据连接ID，更新指定的VPN连接的参数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新VPN连接
     * @param {string} vpnConnectionId vpn连接ID
     * @param {UpdateVpnConnectionRequestBody} updateVpnConnectionRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateVpnConnection(updateVpnConnectionRequest?: UpdateVpnConnectionRequest): Promise<UpdateVpnConnectionResponse> {
        const options = ParamCreater().updateVpnConnection(updateVpnConnectionRequest);

         // @ts-ignore
        options['responseHeaders'] = ['header-response-token'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建一个VPN网关
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建VPN网关
     * @param {CreateVgwRequestBody} createVgwRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createVgw(createVgwRequest?: CreateVgwRequest): Promise<CreateVgwResponse> {
        const options = ParamCreater().createVgw(createVgwRequest);

         // @ts-ignore
        options['responseHeaders'] = ['header-response-token'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据VPN网关ID，删除指定的VPN网关
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除VPN网关
     * @param {string} vgwId VPN网关实例ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteVgw(deleteVgwRequest?: DeleteVgwRequest): Promise<DeleteVgwResponse> {
        const options = ParamCreater().deleteVgw(deleteVgwRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询VPN网关可用区
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询VPN网关可用区
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
     * 查询VPN网关列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询VPN网关列表
     * @param {string} [vgwId] vgw ID
     * @param {Array<string>} [enterpriseProjectId] 企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVgws(listVgwsRequest?: ListVgwsRequest): Promise<ListVgwsResponse> {
        const options = ParamCreater().listVgws(listVgwsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据VPN网关ID，查询指定的VPN网关
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询VPN网关
     * @param {string} vgwId VPN网关实例ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVgw(showVgwRequest?: ShowVgwRequest): Promise<ShowVgwResponse> {
        const options = ParamCreater().showVgw(showVgwRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据VPN网关ID，更新指定的VPN网关
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新VPN网关
     * @param {string} vgwId VPN网关实例ID
     * @param {UpdateVgwRequestBody} updateVgwRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateVgw(updateVgwRequest?: UpdateVgwRequest): Promise<UpdateVgwResponse> {
        const options = ParamCreater().updateVgw(updateVgwRequest);

         // @ts-ignore
        options['responseHeaders'] = ['header-response-token'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 导入租户VPN网关所使用的证书，包括签名证书、签名私钥、加密证书、加密私钥和CA证书链。当前只支持国密证书
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导入VPN网关证书
     * @param {string} vgwId VPN网关实例ID
     * @param {VpnGatewayCertificateRequestBody} vpnGatewayCertificateRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createVgwCertificate(createVgwCertificateRequest?: CreateVgwCertificateRequest): Promise<CreateVgwCertificateResponse> {
        const options = ParamCreater().createVgwCertificate(createVgwCertificateRequest);

         // @ts-ignore
        options['responseHeaders'] = ['header-response-token'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据VPN网关ID，查询所指定的VPN网关证书
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询VPN网关证书
     * @param {string} vgwId VPN网关实例ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVpnGatewayCertificate(showVpnGatewayCertificateRequest?: ShowVpnGatewayCertificateRequest): Promise<ShowVpnGatewayCertificateResponse> {
        const options = ParamCreater().showVpnGatewayCertificate(showVpnGatewayCertificateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新租户VPN网关所使用的证书，包括签名证书、签名私钥、加密证书、加密私钥和CA证书链。当前只支持国密证书
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新VPN网关证书
     * @param {string} vgwId VPN网关实例ID
     * @param {string} certificateId VPN网关证书ID
     * @param {VpnGatewayCertificateRequestBody} vpnGatewayCertificateRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateVgwCertificate(updateVgwCertificateRequest?: UpdateVgwCertificateRequest): Promise<UpdateVgwCertificateResponse> {
        const options = ParamCreater().updateVgwCertificate(updateVgwCertificateRequest);

         // @ts-ignore
        options['responseHeaders'] = ['header-response-token'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定租户的配额
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定租户配额
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showQuotasInfo(showQuotasInfoRequest?: ShowQuotasInfoRequest): Promise<ShowQuotasInfoResponse> {
        const options = ParamCreater().showQuotasInfo();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 创建VPN连接监控
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createConnectionMonitor(createConnectionMonitorRequest?: CreateConnectionMonitorRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/connection-monitors",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createConnectionMonitorRequest !== null && createConnectionMonitorRequest !== undefined) {
                if (createConnectionMonitorRequest instanceof CreateConnectionMonitorRequest) {
                    body = createConnectionMonitorRequest.body
                } else {
                    body = createConnectionMonitorRequest['body'];
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
         * 根据VPN连接监控的ID，删除指定的VPN连接监控
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteConnectionMonitor(deleteConnectionMonitorRequest?: DeleteConnectionMonitorRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/{project_id}/connection-monitors/{connection_monitor_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let connectionMonitorId;

            if (deleteConnectionMonitorRequest !== null && deleteConnectionMonitorRequest !== undefined) {
                if (deleteConnectionMonitorRequest instanceof DeleteConnectionMonitorRequest) {
                    connectionMonitorId = deleteConnectionMonitorRequest.connectionMonitorId;
                } else {
                    connectionMonitorId = deleteConnectionMonitorRequest['connection_monitor_id'];
                }
            }

        
            if (connectionMonitorId === null || connectionMonitorId === undefined) {
            throw new RequiredError('connectionMonitorId','Required parameter connectionMonitorId was null or undefined when calling deleteConnectionMonitor.');
            }

            options.pathParams = { 'connection_monitor_id': connectionMonitorId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询VPN连接监控列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listConnectionMonitors(listConnectionMonitorsRequest?: ListConnectionMonitorsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/connection-monitors",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let vpnConnectionId;
            
            let enterpriseProjectId;

            if (listConnectionMonitorsRequest !== null && listConnectionMonitorsRequest !== undefined) {
                if (listConnectionMonitorsRequest instanceof ListConnectionMonitorsRequest) {
                    vpnConnectionId = listConnectionMonitorsRequest.vpnConnectionId;
                    enterpriseProjectId = listConnectionMonitorsRequest.enterpriseProjectId;
                } else {
                    vpnConnectionId = listConnectionMonitorsRequest['vpn_connection_id'];
                    enterpriseProjectId = listConnectionMonitorsRequest['enterprise_project_id'];
                }
            }

        
            if (vpnConnectionId !== null && vpnConnectionId !== undefined) {
                localVarQueryParameter['vpn_connection_id'] = vpnConnectionId;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据VPN连接监控的ID,查询指定的VPN连接监控
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showConnectionMonitor(showConnectionMonitorRequest?: ShowConnectionMonitorRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/connection-monitors/{connection_monitor_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let connectionMonitorId;

            if (showConnectionMonitorRequest !== null && showConnectionMonitorRequest !== undefined) {
                if (showConnectionMonitorRequest instanceof ShowConnectionMonitorRequest) {
                    connectionMonitorId = showConnectionMonitorRequest.connectionMonitorId;
                } else {
                    connectionMonitorId = showConnectionMonitorRequest['connection_monitor_id'];
                }
            }

        
            if (connectionMonitorId === null || connectionMonitorId === undefined) {
            throw new RequiredError('connectionMonitorId','Required parameter connectionMonitorId was null or undefined when calling showConnectionMonitor.');
            }

            options.pathParams = { 'connection_monitor_id': connectionMonitorId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建租户用于与VPN网关相连的对端网关
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCgw(createCgwRequest?: CreateCgwRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/customer-gateways",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createCgwRequest !== null && createCgwRequest !== undefined) {
                if (createCgwRequest instanceof CreateCgwRequest) {
                    body = createCgwRequest.body
                } else {
                    body = createCgwRequest['body'];
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
         * 根据对端网关ID，删除指定的对端网关
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteCgw(deleteCgwRequest?: DeleteCgwRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/{project_id}/customer-gateways/{customer_gateway_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let customerGatewayId;

            if (deleteCgwRequest !== null && deleteCgwRequest !== undefined) {
                if (deleteCgwRequest instanceof DeleteCgwRequest) {
                    customerGatewayId = deleteCgwRequest.customerGatewayId;
                } else {
                    customerGatewayId = deleteCgwRequest['customer_gateway_id'];
                }
            }

        
            if (customerGatewayId === null || customerGatewayId === undefined) {
            throw new RequiredError('customerGatewayId','Required parameter customerGatewayId was null or undefined when calling deleteCgw.');
            }

            options.pathParams = { 'customer_gateway_id': customerGatewayId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询对端网关列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCgws(listCgwsRequest?: ListCgwsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/customer-gateways",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let cgwId;
            
            let limit;
            
            let marker;

            if (listCgwsRequest !== null && listCgwsRequest !== undefined) {
                if (listCgwsRequest instanceof ListCgwsRequest) {
                    cgwId = listCgwsRequest.cgwId;
                    limit = listCgwsRequest.limit;
                    marker = listCgwsRequest.marker;
                } else {
                    cgwId = listCgwsRequest['cgw_id'];
                    limit = listCgwsRequest['limit'];
                    marker = listCgwsRequest['marker'];
                }
            }

        
            if (cgwId !== null && cgwId !== undefined) {
                localVarQueryParameter['cgw_id'] = cgwId;
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
         * 根据对端网关ID，查询指定的对端网关
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCgw(showCgwRequest?: ShowCgwRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/customer-gateways/{customer_gateway_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let customerGatewayId;

            if (showCgwRequest !== null && showCgwRequest !== undefined) {
                if (showCgwRequest instanceof ShowCgwRequest) {
                    customerGatewayId = showCgwRequest.customerGatewayId;
                } else {
                    customerGatewayId = showCgwRequest['customer_gateway_id'];
                }
            }

        
            if (customerGatewayId === null || customerGatewayId === undefined) {
            throw new RequiredError('customerGatewayId','Required parameter customerGatewayId was null or undefined when calling showCgw.');
            }

            options.pathParams = { 'customer_gateway_id': customerGatewayId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据对端网关ID，更新指定的对端网关
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateCgw(updateCgwRequest?: UpdateCgwRequest) {
            const options = {
                method: "PUT",
                url: "/v5/{project_id}/customer-gateways/{customer_gateway_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let customerGatewayId;

            if (updateCgwRequest !== null && updateCgwRequest !== undefined) {
                if (updateCgwRequest instanceof UpdateCgwRequest) {
                    customerGatewayId = updateCgwRequest.customerGatewayId;
                    body = updateCgwRequest.body
                } else {
                    customerGatewayId = updateCgwRequest['customer_gateway_id'];
                    body = updateCgwRequest['body'];
                }
            }

        
            if (customerGatewayId === null || customerGatewayId === undefined) {
            throw new RequiredError('customerGatewayId','Required parameter customerGatewayId was null or undefined when calling updateCgw.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'customer_gateway_id': customerGatewayId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 为指定实例批量添加标签,标签管理服务需要使用该接口批量管理实例的标签.一个资源上最多有20个标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateResourceTags(batchCreateResourceTagsRequest?: BatchCreateResourceTagsRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/{resource_type}/{resource_id}/tags/create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceType;
            
            let resourceId;

            if (batchCreateResourceTagsRequest !== null && batchCreateResourceTagsRequest !== undefined) {
                if (batchCreateResourceTagsRequest instanceof BatchCreateResourceTagsRequest) {
                    resourceType = batchCreateResourceTagsRequest.resourceType;
                    resourceId = batchCreateResourceTagsRequest.resourceId;
                    body = batchCreateResourceTagsRequest.body
                } else {
                    resourceType = batchCreateResourceTagsRequest['resource_type'];
                    resourceId = batchCreateResourceTagsRequest['resource_id'];
                    body = batchCreateResourceTagsRequest['body'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling batchCreateResourceTags.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling batchCreateResourceTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 为指定实例批量删除标签,标签管理服务需要使用该接口批量管理实例的标签.
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteResourceTags(batchDeleteResourceTagsRequest?: BatchDeleteResourceTagsRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/{resource_type}/{resource_id}/tags/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceType;
            
            let resourceId;

            if (batchDeleteResourceTagsRequest !== null && batchDeleteResourceTagsRequest !== undefined) {
                if (batchDeleteResourceTagsRequest instanceof BatchDeleteResourceTagsRequest) {
                    resourceType = batchDeleteResourceTagsRequest.resourceType;
                    resourceId = batchDeleteResourceTagsRequest.resourceId;
                    body = batchDeleteResourceTagsRequest.body
                } else {
                    resourceType = batchDeleteResourceTagsRequest['resource_type'];
                    resourceId = batchDeleteResourceTagsRequest['resource_id'];
                    body = batchDeleteResourceTagsRequest['body'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling batchDeleteResourceTags.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling batchDeleteResourceTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 使用标签过滤实例,并查询实例数量,需要各服务提供查询
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        countResourcesByTags(countResourcesByTagsRequest?: CountResourcesByTagsRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/{resource_type}/resource-instances/count",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceType;

            if (countResourcesByTagsRequest !== null && countResourcesByTagsRequest !== undefined) {
                if (countResourcesByTagsRequest instanceof CountResourcesByTagsRequest) {
                    resourceType = countResourcesByTagsRequest.resourceType;
                    body = countResourcesByTagsRequest.body
                } else {
                    resourceType = countResourcesByTagsRequest['resource_type'];
                    body = countResourcesByTagsRequest['body'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling countResourcesByTags.');
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
         * 查询租户在指定Project中实例类型的所有资源标签集合
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProjectTags(listProjectTagsRequest?: ListProjectTagsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/{resource_type}/tags",
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
         * 使用标签过滤实例,并查询实例数量,需要各服务提供查询
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listResourcesByTags(listResourcesByTagsRequest?: ListResourcesByTagsRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/{resource_type}/resource-instances/filter",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let resourceType;
            
            let limit;
            
            let offset;

            if (listResourcesByTagsRequest !== null && listResourcesByTagsRequest !== undefined) {
                if (listResourcesByTagsRequest instanceof ListResourcesByTagsRequest) {
                    resourceType = listResourcesByTagsRequest.resourceType;
                    body = listResourcesByTagsRequest.body
                    limit = listResourcesByTagsRequest.limit;
                    offset = listResourcesByTagsRequest.offset;
                } else {
                    resourceType = listResourcesByTagsRequest['resource_type'];
                    body = listResourcesByTagsRequest['body'];
                    limit = listResourcesByTagsRequest['limit'];
                    offset = listResourcesByTagsRequest['offset'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling listResourcesByTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定实例的标签信息,标签管理服务需要使用该接口查询指定实例的全部标签数据
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showResourceTags(showResourceTagsRequest?: ShowResourceTagsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/{resource_type}/{resource_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceType;
            
            let resourceId;

            if (showResourceTagsRequest !== null && showResourceTagsRequest !== undefined) {
                if (showResourceTagsRequest instanceof ShowResourceTagsRequest) {
                    resourceType = showResourceTagsRequest.resourceType;
                    resourceId = showResourceTagsRequest.resourceId;
                } else {
                    resourceType = showResourceTagsRequest['resource_type'];
                    resourceId = showResourceTagsRequest['resource_id'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling showResourceTags.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling showResourceTags.');
            }

            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建VPN连接，连接VPN网关与对端网关
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createVpnConnection(createVpnConnectionRequest?: CreateVpnConnectionRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/vpn-connection",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createVpnConnectionRequest !== null && createVpnConnectionRequest !== undefined) {
                if (createVpnConnectionRequest instanceof CreateVpnConnectionRequest) {
                    body = createVpnConnectionRequest.body
                } else {
                    body = createVpnConnectionRequest['body'];
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
         * 根据连接ID，删除指定的VPN连接
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteVpnConnection(deleteVpnConnectionRequest?: DeleteVpnConnectionRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/{project_id}/vpn-connection/{vpn_connection_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let vpnConnectionId;

            if (deleteVpnConnectionRequest !== null && deleteVpnConnectionRequest !== undefined) {
                if (deleteVpnConnectionRequest instanceof DeleteVpnConnectionRequest) {
                    vpnConnectionId = deleteVpnConnectionRequest.vpnConnectionId;
                } else {
                    vpnConnectionId = deleteVpnConnectionRequest['vpn_connection_id'];
                }
            }

        
            if (vpnConnectionId === null || vpnConnectionId === undefined) {
            throw new RequiredError('vpnConnectionId','Required parameter vpnConnectionId was null or undefined when calling deleteVpnConnection.');
            }

            options.pathParams = { 'vpn_connection_id': vpnConnectionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询VPN连接列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVpnConnections(listVpnConnectionsRequest?: ListVpnConnectionsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/vpn-connection",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let vpnId;
            
            let eipId;
            
            let vgwIp;
            
            let vgwId;
            
            let enterpriseProjectId;
            
            let limit;
            
            let marker;

            if (listVpnConnectionsRequest !== null && listVpnConnectionsRequest !== undefined) {
                if (listVpnConnectionsRequest instanceof ListVpnConnectionsRequest) {
                    vpnId = listVpnConnectionsRequest.vpnId;
                    eipId = listVpnConnectionsRequest.eipId;
                    vgwIp = listVpnConnectionsRequest.vgwIp;
                    vgwId = listVpnConnectionsRequest.vgwId;
                    enterpriseProjectId = listVpnConnectionsRequest.enterpriseProjectId;
                    limit = listVpnConnectionsRequest.limit;
                    marker = listVpnConnectionsRequest.marker;
                } else {
                    vpnId = listVpnConnectionsRequest['vpn_id'];
                    eipId = listVpnConnectionsRequest['eip_id'];
                    vgwIp = listVpnConnectionsRequest['vgw_ip'];
                    vgwId = listVpnConnectionsRequest['vgw_id'];
                    enterpriseProjectId = listVpnConnectionsRequest['enterprise_project_id'];
                    limit = listVpnConnectionsRequest['limit'];
                    marker = listVpnConnectionsRequest['marker'];
                }
            }

        
            if (vpnId !== null && vpnId !== undefined) {
                localVarQueryParameter['vpn_id'] = vpnId;
            }
            if (eipId !== null && eipId !== undefined) {
                localVarQueryParameter['eip_id'] = eipId;
            }
            if (vgwIp !== null && vgwIp !== undefined) {
                localVarQueryParameter['vgw_ip'] = vgwIp;
            }
            if (vgwId !== null && vgwId !== undefined) {
                localVarQueryParameter['vgw_id'] = vgwId;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
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
         * 根据连接ID，查询指定的VPN连接的参数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVpnConnection(showVpnConnectionRequest?: ShowVpnConnectionRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/vpn-connection/{vpn_connection_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let vpnConnectionId;

            if (showVpnConnectionRequest !== null && showVpnConnectionRequest !== undefined) {
                if (showVpnConnectionRequest instanceof ShowVpnConnectionRequest) {
                    vpnConnectionId = showVpnConnectionRequest.vpnConnectionId;
                } else {
                    vpnConnectionId = showVpnConnectionRequest['vpn_connection_id'];
                }
            }

        
            if (vpnConnectionId === null || vpnConnectionId === undefined) {
            throw new RequiredError('vpnConnectionId','Required parameter vpnConnectionId was null or undefined when calling showVpnConnection.');
            }

            options.pathParams = { 'vpn_connection_id': vpnConnectionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据连接ID，更新指定的VPN连接的参数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateVpnConnection(updateVpnConnectionRequest?: UpdateVpnConnectionRequest) {
            const options = {
                method: "PUT",
                url: "/v5/{project_id}/vpn-connection/{vpn_connection_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let vpnConnectionId;

            if (updateVpnConnectionRequest !== null && updateVpnConnectionRequest !== undefined) {
                if (updateVpnConnectionRequest instanceof UpdateVpnConnectionRequest) {
                    vpnConnectionId = updateVpnConnectionRequest.vpnConnectionId;
                    body = updateVpnConnectionRequest.body
                } else {
                    vpnConnectionId = updateVpnConnectionRequest['vpn_connection_id'];
                    body = updateVpnConnectionRequest['body'];
                }
            }

        
            if (vpnConnectionId === null || vpnConnectionId === undefined) {
            throw new RequiredError('vpnConnectionId','Required parameter vpnConnectionId was null or undefined when calling updateVpnConnection.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vpn_connection_id': vpnConnectionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建一个VPN网关
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createVgw(createVgwRequest?: CreateVgwRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/vpn-gateways",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createVgwRequest !== null && createVgwRequest !== undefined) {
                if (createVgwRequest instanceof CreateVgwRequest) {
                    body = createVgwRequest.body
                } else {
                    body = createVgwRequest['body'];
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
         * 根据VPN网关ID，删除指定的VPN网关
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteVgw(deleteVgwRequest?: DeleteVgwRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/{project_id}/vpn-gateways/{vgw_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let vgwId;

            if (deleteVgwRequest !== null && deleteVgwRequest !== undefined) {
                if (deleteVgwRequest instanceof DeleteVgwRequest) {
                    vgwId = deleteVgwRequest.vgwId;
                } else {
                    vgwId = deleteVgwRequest['vgw_id'];
                }
            }

        
            if (vgwId === null || vgwId === undefined) {
            throw new RequiredError('vgwId','Required parameter vgwId was null or undefined when calling deleteVgw.');
            }

            options.pathParams = { 'vgw_id': vgwId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询VPN网关可用区
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAvailabilityZones() {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/vpn-gateways/availability-zones",
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
         * 查询VPN网关列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVgws(listVgwsRequest?: ListVgwsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/vpn-gateways",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let vgwId;
            
            let enterpriseProjectId;

            if (listVgwsRequest !== null && listVgwsRequest !== undefined) {
                if (listVgwsRequest instanceof ListVgwsRequest) {
                    vgwId = listVgwsRequest.vgwId;
                    enterpriseProjectId = listVgwsRequest.enterpriseProjectId;
                } else {
                    vgwId = listVgwsRequest['vgw_id'];
                    enterpriseProjectId = listVgwsRequest['enterprise_project_id'];
                }
            }

        
            if (vgwId !== null && vgwId !== undefined) {
                localVarQueryParameter['vgw_id'] = vgwId;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据VPN网关ID，查询指定的VPN网关
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVgw(showVgwRequest?: ShowVgwRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/vpn-gateways/{vgw_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let vgwId;

            if (showVgwRequest !== null && showVgwRequest !== undefined) {
                if (showVgwRequest instanceof ShowVgwRequest) {
                    vgwId = showVgwRequest.vgwId;
                } else {
                    vgwId = showVgwRequest['vgw_id'];
                }
            }

        
            if (vgwId === null || vgwId === undefined) {
            throw new RequiredError('vgwId','Required parameter vgwId was null or undefined when calling showVgw.');
            }

            options.pathParams = { 'vgw_id': vgwId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据VPN网关ID，更新指定的VPN网关
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateVgw(updateVgwRequest?: UpdateVgwRequest) {
            const options = {
                method: "PUT",
                url: "/v5/{project_id}/vpn-gateways/{vgw_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let vgwId;

            if (updateVgwRequest !== null && updateVgwRequest !== undefined) {
                if (updateVgwRequest instanceof UpdateVgwRequest) {
                    vgwId = updateVgwRequest.vgwId;
                    body = updateVgwRequest.body
                } else {
                    vgwId = updateVgwRequest['vgw_id'];
                    body = updateVgwRequest['body'];
                }
            }

        
            if (vgwId === null || vgwId === undefined) {
            throw new RequiredError('vgwId','Required parameter vgwId was null or undefined when calling updateVgw.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vgw_id': vgwId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 导入租户VPN网关所使用的证书，包括签名证书、签名私钥、加密证书、加密私钥和CA证书链。当前只支持国密证书
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createVgwCertificate(createVgwCertificateRequest?: CreateVgwCertificateRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/vpn-gateways/{vgw_id}/certificate",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let vgwId;

            if (createVgwCertificateRequest !== null && createVgwCertificateRequest !== undefined) {
                if (createVgwCertificateRequest instanceof CreateVgwCertificateRequest) {
                    vgwId = createVgwCertificateRequest.vgwId;
                    body = createVgwCertificateRequest.body
                } else {
                    vgwId = createVgwCertificateRequest['vgw_id'];
                    body = createVgwCertificateRequest['body'];
                }
            }

        
            if (vgwId === null || vgwId === undefined) {
            throw new RequiredError('vgwId','Required parameter vgwId was null or undefined when calling createVgwCertificate.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vgw_id': vgwId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据VPN网关ID，查询所指定的VPN网关证书
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVpnGatewayCertificate(showVpnGatewayCertificateRequest?: ShowVpnGatewayCertificateRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/vpn-gateways/{vgw_id}/certificate",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let vgwId;

            if (showVpnGatewayCertificateRequest !== null && showVpnGatewayCertificateRequest !== undefined) {
                if (showVpnGatewayCertificateRequest instanceof ShowVpnGatewayCertificateRequest) {
                    vgwId = showVpnGatewayCertificateRequest.vgwId;
                } else {
                    vgwId = showVpnGatewayCertificateRequest['vgw_id'];
                }
            }

        
            if (vgwId === null || vgwId === undefined) {
            throw new RequiredError('vgwId','Required parameter vgwId was null or undefined when calling showVpnGatewayCertificate.');
            }

            options.pathParams = { 'vgw_id': vgwId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新租户VPN网关所使用的证书，包括签名证书、签名私钥、加密证书、加密私钥和CA证书链。当前只支持国密证书
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateVgwCertificate(updateVgwCertificateRequest?: UpdateVgwCertificateRequest) {
            const options = {
                method: "PUT",
                url: "/v5/{project_id}/vpn-gateways/{vgw_id}/certificate/{certificate_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let vgwId;
            
            let certificateId;

            if (updateVgwCertificateRequest !== null && updateVgwCertificateRequest !== undefined) {
                if (updateVgwCertificateRequest instanceof UpdateVgwCertificateRequest) {
                    vgwId = updateVgwCertificateRequest.vgwId;
                    certificateId = updateVgwCertificateRequest.certificateId;
                    body = updateVgwCertificateRequest.body
                } else {
                    vgwId = updateVgwCertificateRequest['vgw_id'];
                    certificateId = updateVgwCertificateRequest['certificate_id'];
                    body = updateVgwCertificateRequest['body'];
                }
            }

        
            if (vgwId === null || vgwId === undefined) {
            throw new RequiredError('vgwId','Required parameter vgwId was null or undefined when calling updateVgwCertificate.');
            }
            if (certificateId === null || certificateId === undefined) {
            throw new RequiredError('certificateId','Required parameter certificateId was null or undefined when calling updateVgwCertificate.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vgw_id': vgwId,'certificate_id': certificateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定租户的配额
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showQuotasInfo() {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/vpn/quotas",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): VpnClient {
    return new VpnClient(client);
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