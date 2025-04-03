import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AddVpnUserToGroupRequestBody } from './model/AddVpnUserToGroupRequestBody';
import { AddVpnUsersToGroupRequest } from './model/AddVpnUsersToGroupRequest';
import { AddVpnUsersToGroupResponse } from './model/AddVpnUsersToGroupResponse';
import { AvailabilityZones } from './model/AvailabilityZones';
import { AvailableSpec } from './model/AvailableSpec';
import { BatchCreateResourceTagsRequest } from './model/BatchCreateResourceTagsRequest';
import { BatchCreateResourceTagsResponse } from './model/BatchCreateResourceTagsResponse';
import { BatchCreateVpnUsersRequest } from './model/BatchCreateVpnUsersRequest';
import { BatchCreateVpnUsersRequestBody } from './model/BatchCreateVpnUsersRequestBody';
import { BatchCreateVpnUsersResponse } from './model/BatchCreateVpnUsersResponse';
import { BatchDeleteResourceTagsRequest } from './model/BatchDeleteResourceTagsRequest';
import { BatchDeleteResourceTagsResponse } from './model/BatchDeleteResourceTagsResponse';
import { BatchDeleteVpnUsersRequest } from './model/BatchDeleteVpnUsersRequest';
import { BatchDeleteVpnUsersRequestBody } from './model/BatchDeleteVpnUsersRequestBody';
import { BatchDeleteVpnUsersResponse } from './model/BatchDeleteVpnUsersResponse';
import { CaCertificate } from './model/CaCertificate';
import { CaCertificateRequest } from './model/CaCertificateRequest';
import { CheckClientCaCertificateRequest } from './model/CheckClientCaCertificateRequest';
import { CheckClientCaCertificateResponse } from './model/CheckClientCaCertificateResponse';
import { Connection } from './model/Connection';
import { ConnectionMonitorInfo } from './model/ConnectionMonitorInfo';
import { ConnectionsLogConfig } from './model/ConnectionsLogConfig';
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
import { CreateServerRequest } from './model/CreateServerRequest';
import { CreateServerRequestBody } from './model/CreateServerRequestBody';
import { CreateServerRequestClientCaCertificates } from './model/CreateServerRequestClientCaCertificates';
import { CreateServerRequestServerCertificate } from './model/CreateServerRequestServerCertificate';
import { CreateServerRequestSslOptions } from './model/CreateServerRequestSslOptions';
import { CreateServerResponseBodyVpnServer } from './model/CreateServerResponseBodyVpnServer';
import { CreateVgwCertificateRequest } from './model/CreateVgwCertificateRequest';
import { CreateVgwCertificateResponse } from './model/CreateVgwCertificateResponse';
import { CreateVgwRequest } from './model/CreateVgwRequest';
import { CreateVgwRequestBody } from './model/CreateVgwRequestBody';
import { CreateVgwRequestBodyContent } from './model/CreateVgwRequestBodyContent';
import { CreateVgwResponse } from './model/CreateVgwResponse';
import { CreateVpnAccessPolicyRequest } from './model/CreateVpnAccessPolicyRequest';
import { CreateVpnAccessPolicyRequestBody } from './model/CreateVpnAccessPolicyRequestBody';
import { CreateVpnAccessPolicyRequestBodyContent } from './model/CreateVpnAccessPolicyRequestBodyContent';
import { CreateVpnAccessPolicyResponse } from './model/CreateVpnAccessPolicyResponse';
import { CreateVpnAccessPolicyResponseBodyAccessPolicy } from './model/CreateVpnAccessPolicyResponseBodyAccessPolicy';
import { CreateVpnConnectionRequest } from './model/CreateVpnConnectionRequest';
import { CreateVpnConnectionRequestBody } from './model/CreateVpnConnectionRequestBody';
import { CreateVpnConnectionRequestBodyContent } from './model/CreateVpnConnectionRequestBodyContent';
import { CreateVpnConnectionResponse } from './model/CreateVpnConnectionResponse';
import { CreateVpnGatewayCertificateRequestBody } from './model/CreateVpnGatewayCertificateRequestBody';
import { CreateVpnGatewayCertificateRequestBodyContent } from './model/CreateVpnGatewayCertificateRequestBodyContent';
import { CreateVpnServerRequest } from './model/CreateVpnServerRequest';
import { CreateVpnServerResponse } from './model/CreateVpnServerResponse';
import { CreateVpnUser } from './model/CreateVpnUser';
import { CreateVpnUserGroupRequest } from './model/CreateVpnUserGroupRequest';
import { CreateVpnUserGroupRequestBody } from './model/CreateVpnUserGroupRequestBody';
import { CreateVpnUserGroupRequestBodyContent } from './model/CreateVpnUserGroupRequestBodyContent';
import { CreateVpnUserGroupResponse } from './model/CreateVpnUserGroupResponse';
import { CreateVpnUserGroupResponseBodyUserGroup } from './model/CreateVpnUserGroupResponseBodyUserGroup';
import { CreateVpnUserRequest } from './model/CreateVpnUserRequest';
import { CreateVpnUserRequestBody } from './model/CreateVpnUserRequestBody';
import { CreateVpnUserRequestBodyContent } from './model/CreateVpnUserRequestBodyContent';
import { CreateVpnUserResponse } from './model/CreateVpnUserResponse';
import { CreateVpnUserResponseBodyUser } from './model/CreateVpnUserResponseBodyUser';
import { DeleteCgwRequest } from './model/DeleteCgwRequest';
import { DeleteCgwResponse } from './model/DeleteCgwResponse';
import { DeleteClientCaRequest } from './model/DeleteClientCaRequest';
import { DeleteClientCaResponse } from './model/DeleteClientCaResponse';
import { DeleteConnectionMonitorRequest } from './model/DeleteConnectionMonitorRequest';
import { DeleteConnectionMonitorResponse } from './model/DeleteConnectionMonitorResponse';
import { DeleteP2cVgwConnectionRequest } from './model/DeleteP2cVgwConnectionRequest';
import { DeleteP2cVgwConnectionResponse } from './model/DeleteP2cVgwConnectionResponse';
import { DeleteResourcesTagsRequestBody } from './model/DeleteResourcesTagsRequestBody';
import { DeleteVgwRequest } from './model/DeleteVgwRequest';
import { DeleteVgwResponse } from './model/DeleteVgwResponse';
import { DeleteVpnAccessPolicyRequest } from './model/DeleteVpnAccessPolicyRequest';
import { DeleteVpnAccessPolicyResponse } from './model/DeleteVpnAccessPolicyResponse';
import { DeleteVpnConnectionRequest } from './model/DeleteVpnConnectionRequest';
import { DeleteVpnConnectionResponse } from './model/DeleteVpnConnectionResponse';
import { DeleteVpnConnectionsLogConfigRequest } from './model/DeleteVpnConnectionsLogConfigRequest';
import { DeleteVpnConnectionsLogConfigResponse } from './model/DeleteVpnConnectionsLogConfigResponse';
import { DeleteVpnUserGroupRequest } from './model/DeleteVpnUserGroupRequest';
import { DeleteVpnUserGroupResponse } from './model/DeleteVpnUserGroupResponse';
import { DeleteVpnUserRequest } from './model/DeleteVpnUserRequest';
import { DeleteVpnUserResponse } from './model/DeleteVpnUserResponse';
import { Dpd } from './model/Dpd';
import { ExportClientConfigRequest } from './model/ExportClientConfigRequest';
import { ExportClientConfigRequestBody } from './model/ExportClientConfigRequestBody';
import { ExportClientConfigResponse } from './model/ExportClientConfigResponse';
import { ExtendedAvailabilityZone } from './model/ExtendedAvailabilityZone';
import { IkePolicy } from './model/IkePolicy';
import { ImportClientCaCertificateRequestBody } from './model/ImportClientCaCertificateRequestBody';
import { ImportClientCaCertificateRequestBodyClientCaCertificate } from './model/ImportClientCaCertificateRequestBodyClientCaCertificate';
import { ImportClientCaCertificateResponseBodyClientCaCertificate } from './model/ImportClientCaCertificateResponseBodyClientCaCertificate';
import { ImportClientCaRequest } from './model/ImportClientCaRequest';
import { ImportClientCaResponse } from './model/ImportClientCaResponse';
import { InvalidVpnUser } from './model/InvalidVpnUser';
import { IpsecPolicy } from './model/IpsecPolicy';
import { ListAvailabilityZonesRequest } from './model/ListAvailabilityZonesRequest';
import { ListAvailabilityZonesResponse } from './model/ListAvailabilityZonesResponse';
import { ListCgwsRequest } from './model/ListCgwsRequest';
import { ListCgwsResponse } from './model/ListCgwsResponse';
import { ListConnectionMonitorsRequest } from './model/ListConnectionMonitorsRequest';
import { ListConnectionMonitorsResponse } from './model/ListConnectionMonitorsResponse';
import { ListExtendedAvailabilityZonesRequest } from './model/ListExtendedAvailabilityZonesRequest';
import { ListExtendedAvailabilityZonesResponse } from './model/ListExtendedAvailabilityZonesResponse';
import { ListP2cVgwAvailabilityZonesRequest } from './model/ListP2cVgwAvailabilityZonesRequest';
import { ListP2cVgwAvailabilityZonesResponse } from './model/ListP2cVgwAvailabilityZonesResponse';
import { ListP2cVgwConnectionsRequest } from './model/ListP2cVgwConnectionsRequest';
import { ListP2cVgwConnectionsResponse } from './model/ListP2cVgwConnectionsResponse';
import { ListP2cVgwsRequest } from './model/ListP2cVgwsRequest';
import { ListP2cVgwsResponse } from './model/ListP2cVgwsResponse';
import { ListProjectTagsRequest } from './model/ListProjectTagsRequest';
import { ListProjectTagsResponse } from './model/ListProjectTagsResponse';
import { ListResourcesByTagsRequest } from './model/ListResourcesByTagsRequest';
import { ListResourcesByTagsResponse } from './model/ListResourcesByTagsResponse';
import { ListVgwsRequest } from './model/ListVgwsRequest';
import { ListVgwsResponse } from './model/ListVgwsResponse';
import { ListVpnAccessPoliciesRequest } from './model/ListVpnAccessPoliciesRequest';
import { ListVpnAccessPoliciesResponse } from './model/ListVpnAccessPoliciesResponse';
import { ListVpnConnectionsRequest } from './model/ListVpnConnectionsRequest';
import { ListVpnConnectionsResponse } from './model/ListVpnConnectionsResponse';
import { ListVpnServersByProjectRequest } from './model/ListVpnServersByProjectRequest';
import { ListVpnServersByProjectResponse } from './model/ListVpnServersByProjectResponse';
import { ListVpnServersByVgwRequest } from './model/ListVpnServersByVgwRequest';
import { ListVpnServersByVgwResponse } from './model/ListVpnServersByVgwResponse';
import { ListVpnUserGroupsRequest } from './model/ListVpnUserGroupsRequest';
import { ListVpnUserGroupsResponse } from './model/ListVpnUserGroupsResponse';
import { ListVpnUsersInGroupRequest } from './model/ListVpnUsersInGroupRequest';
import { ListVpnUsersInGroupResponse } from './model/ListVpnUsersInGroupResponse';
import { ListVpnUsersRequest } from './model/ListVpnUsersRequest';
import { ListVpnUsersResponse } from './model/ListVpnUsersResponse';
import { Log } from './model/Log';
import { Match } from './model/Match';
import { NexthopResourceVo } from './model/NexthopResourceVo';
import { OpVpnUser } from './model/OpVpnUser';
import { PageInfo } from './model/PageInfo';
import { PolicyRule } from './model/PolicyRule';
import { PolicyTemplate } from './model/PolicyTemplate';
import { QueryClientCaCertificateBody } from './model/QueryClientCaCertificateBody';
import { QueryResourcesRequestBody } from './model/QueryResourcesRequestBody';
import { QuotaInfo } from './model/QuotaInfo';
import { Quotas } from './model/Quotas';
import { RemoveVpnUserFromGroupRequestBody } from './model/RemoveVpnUserFromGroupRequestBody';
import { RemoveVpnUsersFromGroupRequest } from './model/RemoveVpnUsersFromGroupRequest';
import { RemoveVpnUsersFromGroupResponse } from './model/RemoveVpnUsersFromGroupResponse';
import { ResetVpnUserPasswordRequest } from './model/ResetVpnUserPasswordRequest';
import { ResetVpnUserPasswordRequestBody } from './model/ResetVpnUserPasswordRequestBody';
import { ResetVpnUserPasswordResponse } from './model/ResetVpnUserPasswordResponse';
import { Resource } from './model/Resource';
import { ResourceTag } from './model/ResourceTag';
import { ResponseCustomerGateway } from './model/ResponseCustomerGateway';
import { ResponseEip } from './model/ResponseEip';
import { ResponseEipInfo } from './model/ResponseEipInfo';
import { ResponseP2cVgw } from './model/ResponseP2cVgw';
import { ResponseVpnConnection } from './model/ResponseVpnConnection';
import { ResponseVpnGateway } from './model/ResponseVpnGateway';
import { ShowCgwRequest } from './model/ShowCgwRequest';
import { ShowCgwResponse } from './model/ShowCgwResponse';
import { ShowClientCaRequest } from './model/ShowClientCaRequest';
import { ShowClientCaResponse } from './model/ShowClientCaResponse';
import { ShowConnectionMonitorRequest } from './model/ShowConnectionMonitorRequest';
import { ShowConnectionMonitorResponse } from './model/ShowConnectionMonitorResponse';
import { ShowP2cVgwRequest } from './model/ShowP2cVgwRequest';
import { ShowP2cVgwResponse } from './model/ShowP2cVgwResponse';
import { ShowQuotasInfoRequest } from './model/ShowQuotasInfoRequest';
import { ShowQuotasInfoResponse } from './model/ShowQuotasInfoResponse';
import { ShowResourceTagsRequest } from './model/ShowResourceTagsRequest';
import { ShowResourceTagsResponse } from './model/ShowResourceTagsResponse';
import { ShowResponseP2cVgw } from './model/ShowResponseP2cVgw';
import { ShowServerResponse } from './model/ShowServerResponse';
import { ShowServerResponseServerCertificate } from './model/ShowServerResponseServerCertificate';
import { ShowServerResponseSslOptions } from './model/ShowServerResponseSslOptions';
import { ShowVgwRequest } from './model/ShowVgwRequest';
import { ShowVgwResponse } from './model/ShowVgwResponse';
import { ShowVpnAccessPolicyRequest } from './model/ShowVpnAccessPolicyRequest';
import { ShowVpnAccessPolicyResponse } from './model/ShowVpnAccessPolicyResponse';
import { ShowVpnConnectionLogRequest } from './model/ShowVpnConnectionLogRequest';
import { ShowVpnConnectionLogResponse } from './model/ShowVpnConnectionLogResponse';
import { ShowVpnConnectionRequest } from './model/ShowVpnConnectionRequest';
import { ShowVpnConnectionResponse } from './model/ShowVpnConnectionResponse';
import { ShowVpnConnectionsLogConfigRequest } from './model/ShowVpnConnectionsLogConfigRequest';
import { ShowVpnConnectionsLogConfigResponse } from './model/ShowVpnConnectionsLogConfigResponse';
import { ShowVpnGatewayCertificateRequest } from './model/ShowVpnGatewayCertificateRequest';
import { ShowVpnGatewayCertificateResponse } from './model/ShowVpnGatewayCertificateResponse';
import { ShowVpnGatewayRoutingTableRequest } from './model/ShowVpnGatewayRoutingTableRequest';
import { ShowVpnGatewayRoutingTableResponse } from './model/ShowVpnGatewayRoutingTableResponse';
import { ShowVpnUserGroupRequest } from './model/ShowVpnUserGroupRequest';
import { ShowVpnUserGroupResponse } from './model/ShowVpnUserGroupResponse';
import { ShowVpnUserRequest } from './model/ShowVpnUserRequest';
import { ShowVpnUserResponse } from './model/ShowVpnUserResponse';
import { Tag } from './model/Tag';
import { UpdateCgwRequest } from './model/UpdateCgwRequest';
import { UpdateCgwRequestBody } from './model/UpdateCgwRequestBody';
import { UpdateCgwRequestBodyContent } from './model/UpdateCgwRequestBodyContent';
import { UpdateCgwResponse } from './model/UpdateCgwResponse';
import { UpdateClientCaCertificateRequestBody } from './model/UpdateClientCaCertificateRequestBody';
import { UpdateClientCaCertificateRequestBodyClientCaCertificate } from './model/UpdateClientCaCertificateRequestBodyClientCaCertificate';
import { UpdateClientCaRequest } from './model/UpdateClientCaRequest';
import { UpdateClientCaResponse } from './model/UpdateClientCaResponse';
import { UpdateDpd } from './model/UpdateDpd';
import { UpdateIkePolicy } from './model/UpdateIkePolicy';
import { UpdateIpsecPolicy } from './model/UpdateIpsecPolicy';
import { UpdateP2cVgwRequest } from './model/UpdateP2cVgwRequest';
import { UpdateP2cVgwRequestBody } from './model/UpdateP2cVgwRequestBody';
import { UpdateP2cVgwRequestBodyContent } from './model/UpdateP2cVgwRequestBodyContent';
import { UpdateP2cVgwResponse } from './model/UpdateP2cVgwResponse';
import { UpdatePostpaidVgwSpecificationRequest } from './model/UpdatePostpaidVgwSpecificationRequest';
import { UpdatePostpaidVgwSpecificationResponse } from './model/UpdatePostpaidVgwSpecificationResponse';
import { UpdateRequestPolicyTemplate } from './model/UpdateRequestPolicyTemplate';
import { UpdateResponseVpnConnection } from './model/UpdateResponseVpnConnection';
import { UpdateResponseVpnGateway } from './model/UpdateResponseVpnGateway';
import { UpdateServerRequest } from './model/UpdateServerRequest';
import { UpdateServerRequestBody } from './model/UpdateServerRequestBody';
import { UpdateServerRequestServerCertificate } from './model/UpdateServerRequestServerCertificate';
import { UpdateServerRequestSslOptions } from './model/UpdateServerRequestSslOptions';
import { UpdateVgwCertificateRequest } from './model/UpdateVgwCertificateRequest';
import { UpdateVgwCertificateResponse } from './model/UpdateVgwCertificateResponse';
import { UpdateVgwIkePolicy } from './model/UpdateVgwIkePolicy';
import { UpdateVgwIpsecPolicy } from './model/UpdateVgwIpsecPolicy';
import { UpdateVgwRequest } from './model/UpdateVgwRequest';
import { UpdateVgwRequestBody } from './model/UpdateVgwRequestBody';
import { UpdateVgwRequestBodyContent } from './model/UpdateVgwRequestBodyContent';
import { UpdateVgwResponse } from './model/UpdateVgwResponse';
import { UpdateVgwSpecificationRequestBody } from './model/UpdateVgwSpecificationRequestBody';
import { UpdateVgwSpecificationRequestBodyContent } from './model/UpdateVgwSpecificationRequestBodyContent';
import { UpdateVpnAccessPolicyRequest } from './model/UpdateVpnAccessPolicyRequest';
import { UpdateVpnAccessPolicyRequestBody } from './model/UpdateVpnAccessPolicyRequestBody';
import { UpdateVpnAccessPolicyRequestBodyContent } from './model/UpdateVpnAccessPolicyRequestBodyContent';
import { UpdateVpnAccessPolicyResponse } from './model/UpdateVpnAccessPolicyResponse';
import { UpdateVpnConnectionRequest } from './model/UpdateVpnConnectionRequest';
import { UpdateVpnConnectionRequestBody } from './model/UpdateVpnConnectionRequestBody';
import { UpdateVpnConnectionRequestBodyContent } from './model/UpdateVpnConnectionRequestBodyContent';
import { UpdateVpnConnectionResponse } from './model/UpdateVpnConnectionResponse';
import { UpdateVpnConnectionsLogConfigRequest } from './model/UpdateVpnConnectionsLogConfigRequest';
import { UpdateVpnConnectionsLogConfigResponse } from './model/UpdateVpnConnectionsLogConfigResponse';
import { UpdateVpnGatewayCertificateRequestBody } from './model/UpdateVpnGatewayCertificateRequestBody';
import { UpdateVpnGatewayCertificateRequestBodyContent } from './model/UpdateVpnGatewayCertificateRequestBodyContent';
import { UpdateVpnLogConfigRequestBody } from './model/UpdateVpnLogConfigRequestBody';
import { UpdateVpnLogConfigRequestBodyContent } from './model/UpdateVpnLogConfigRequestBodyContent';
import { UpdateVpnServerRequest } from './model/UpdateVpnServerRequest';
import { UpdateVpnServerResponse } from './model/UpdateVpnServerResponse';
import { UpdateVpnUserGroupRequest } from './model/UpdateVpnUserGroupRequest';
import { UpdateVpnUserGroupRequestBody } from './model/UpdateVpnUserGroupRequestBody';
import { UpdateVpnUserGroupRequestBodyContent } from './model/UpdateVpnUserGroupRequestBodyContent';
import { UpdateVpnUserGroupResponse } from './model/UpdateVpnUserGroupResponse';
import { UpdateVpnUserPasswordRequest } from './model/UpdateVpnUserPasswordRequest';
import { UpdateVpnUserPasswordRequestBody } from './model/UpdateVpnUserPasswordRequestBody';
import { UpdateVpnUserPasswordResponse } from './model/UpdateVpnUserPasswordResponse';
import { UpdateVpnUserRequest } from './model/UpdateVpnUserRequest';
import { UpdateVpnUserRequestBody } from './model/UpdateVpnUserRequestBody';
import { UpdateVpnUserRequestBodyContent } from './model/UpdateVpnUserRequestBodyContent';
import { UpdateVpnUserResponse } from './model/UpdateVpnUserResponse';
import { VgwIkePolicy } from './model/VgwIkePolicy';
import { VgwIpsecPolicy } from './model/VgwIpsecPolicy';
import { VpnAccessPolicy } from './model/VpnAccessPolicy';
import { VpnGatewayAvailabilityZones } from './model/VpnGatewayAvailabilityZones';
import { VpnGatewayCertificate } from './model/VpnGatewayCertificate';
import { VpnGatewayCertificateConfig } from './model/VpnGatewayCertificateConfig';
import { VpnGatewayRoutingTableEntryVo } from './model/VpnGatewayRoutingTableEntryVo';
import { VpnResourceTag } from './model/VpnResourceTag';
import { VpnUser } from './model/VpnUser';
import { VpnUserGroup } from './model/VpnUserGroup';
import { VpnUserInGroup } from './model/VpnUserInGroup';

export class VpnClient {
    public static newBuilder(): ClientBuilder<VpnClient> {
            let client = new ClientBuilder<VpnClient>(newClient);
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
     * 创建服务端时，可以先调用客户端CA的预校验API，检查CA的合法性
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 校验客户端CA
     * @param {ImportClientCaCertificateRequestBody} importClientCaCertificateRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkClientCaCertificate(checkClientCaCertificateRequest?: CheckClientCaCertificateRequest): Promise<CheckClientCaCertificateResponse> {
        const options = ParamCreater().checkClientCaCertificate(checkClientCaCertificateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除客户端CA证书
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除客户端的CA证书
     * @param {string} vpnServerId VPN服务端 ID
     * @param {string} clientCaCertificateId 客户端 CA 证书 ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteClientCa(deleteClientCaRequest?: DeleteClientCaRequest): Promise<DeleteClientCaResponse> {
        const options = ParamCreater().deleteClientCa(deleteClientCaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 导入客户端 CA 证书
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导入客户端 CA 证书
     * @param {string} vpnServerId VPN服务端 ID
     * @param {ImportClientCaCertificateRequestBody} importClientCaCertificateRequestBody 请求参数对象
     * @param {string} [xClientToken] 幂等性标识
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public importClientCa(importClientCaRequest?: ImportClientCaRequest): Promise<ImportClientCaResponse> {
        const options = ParamCreater().importClientCa(importClientCaRequest);

         // @ts-ignore
        options['responseHeaders'] = ['header-response-token'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询客户端CA证书
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询客户端的CA证书
     * @param {string} vpnServerId VPN服务端 ID
     * @param {string} clientCaCertificateId 客户端 CA 证书 ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showClientCa(showClientCaRequest?: ShowClientCaRequest): Promise<ShowClientCaResponse> {
        const options = ParamCreater().showClientCa(showClientCaRequest);

         // @ts-ignore
        options['responseHeaders'] = ['header-response-token'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改客户端CA证书
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改客户端的CA证书
     * @param {string} vpnServerId VPN服务端 ID
     * @param {string} clientCaCertificateId 客户端 CA 证书 ID
     * @param {UpdateClientCaCertificateRequestBody} updateClientCaCertificateRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateClientCa(updateClientCaRequest?: UpdateClientCaRequest): Promise<UpdateClientCaResponse> {
        const options = ParamCreater().updateClientCa(updateClientCaRequest);

         // @ts-ignore
        options['responseHeaders'] = ['header-response-token'];

        return this.hcClient.sendRequest(options);
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
     * 断开P2C VPN网关连接
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 断开P2C VPN网关连接
     * @param {string} p2cVgwId P2C VPN网关实例ID
     * @param {string} connectionId 连接ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteP2cVgwConnection(deleteP2cVgwConnectionRequest?: DeleteP2cVgwConnectionRequest): Promise<DeleteP2cVgwConnectionResponse> {
        const options = ParamCreater().deleteP2cVgwConnection(deleteP2cVgwConnectionRequest);

         // @ts-ignore
        options['responseHeaders'] = ['header-response-token'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询P2C VPN网关可用区
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询P2C VPN网关可用区
     * @param {'Professional1'} [flavor] flavor规格
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listP2cVgwAvailabilityZones(listP2cVgwAvailabilityZonesRequest?: ListP2cVgwAvailabilityZonesRequest): Promise<ListP2cVgwAvailabilityZonesResponse> {
        const options = ParamCreater().listP2cVgwAvailabilityZones(listP2cVgwAvailabilityZonesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * List p2c vpn gateway connections
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询P2C VPN网关连接信息列表
     * @param {string} p2cVgwId P2C VPN网关实例ID
     * @param {number} [limit] 分页查询时每页返回的记录数量
     * @param {number} [offset] 分页查询的偏移量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listP2cVgwConnections(listP2cVgwConnectionsRequest?: ListP2cVgwConnectionsRequest): Promise<ListP2cVgwConnectionsResponse> {
        const options = ParamCreater().listP2cVgwConnections(listP2cVgwConnectionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询P2C VPN网关列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询P2C VPN网关列表
     * @param {number} [limit] 分页查询时每页返回的记录数量
     * @param {string} [marker] 上一页最后一条记录的id，为空时为查询第一页。使用说明：必须与limit一起使用。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listP2cVgws(listP2cVgwsRequest?: ListP2cVgwsRequest): Promise<ListP2cVgwsResponse> {
        const options = ParamCreater().listP2cVgws(listP2cVgwsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据P2C VPN网关ID，查询指定的VPN网关
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询P2C VPN网关
     * @param {string} p2cVgwId P2C VPN网关实例ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showP2cVgw(showP2cVgwRequest?: ShowP2cVgwRequest): Promise<ShowP2cVgwResponse> {
        const options = ParamCreater().showP2cVgw(showP2cVgwRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据P2C VPN网关ID，更新指定的P2C VPN网关
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新P2C VPN网关
     * @param {string} p2cVgwId P2C VPN网关实例ID
     * @param {UpdateP2cVgwRequestBody} updateP2cVgwRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateP2cVgw(updateP2cVgwRequest?: UpdateP2cVgwRequest): Promise<UpdateP2cVgwResponse> {
        const options = ParamCreater().updateP2cVgw(updateP2cVgwRequest);

         // @ts-ignore
        options['responseHeaders'] = ['header-response-token'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 为指定实例批量添加标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加资源标签
     * @param {'vpn-gateway' | 'vpn-connection' | 'customer-gateway' | 'p2c-vpn-gateways'} resourceType 资源类型
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
     * 为指定实例批量删除标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除资源标签
     * @param {'vpn-gateway' | 'vpn-connection' | 'customer-gateway' | 'p2c-vpn-gateways'} resourceType 资源类型
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
     * 根据标签查询资源实例数量
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源实例数量
     * @param {'vpn-gateway' | 'vpn-connection' | 'customer-gateway' | 'p2c-vpn-gateways'} resourceType 资源类型
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
     * 查询租户在指定项目中指定资源类型下的所有标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目标签
     * @param {'vpn-gateway' | 'vpn-connection' | 'customer-gateway' | 'p2c-vpn-gateways'} resourceType 资源类型
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
     * 根据标签查询资源实例列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源实例列表
     * @param {'vpn-gateway' | 'vpn-connection' | 'customer-gateway' | 'p2c-vpn-gateways'} resourceType 资源类型
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
     * 查询指定实例的标签信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源标签
     * @param {'vpn-gateway' | 'vpn-connection' | 'customer-gateway' | 'p2c-vpn-gateways'} resourceType 资源类型
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
     * 创建VPN访问策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建VPN访问策略
     * @param {string} vpnServerId VPN服务端 ID
     * @param {CreateVpnAccessPolicyRequestBody} createVpnAccessPolicyRequestBody 请求参数对象
     * @param {string} [xClientToken] 幂等性标识
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createVpnAccessPolicy(createVpnAccessPolicyRequest?: CreateVpnAccessPolicyRequest): Promise<CreateVpnAccessPolicyResponse> {
        const options = ParamCreater().createVpnAccessPolicy(createVpnAccessPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = ['header-response-token'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除VPN访问策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除VPN访问策略
     * @param {string} vpnServerId VPN服务端 ID
     * @param {string} policyId VPN访问策略ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteVpnAccessPolicy(deleteVpnAccessPolicyRequest?: DeleteVpnAccessPolicyRequest): Promise<DeleteVpnAccessPolicyResponse> {
        const options = ParamCreater().deleteVpnAccessPolicy(deleteVpnAccessPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询VPN访问策略列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询VPN访问策略列表
     * @param {string} vpnServerId VPN服务端 ID
     * @param {number} [limit] 分页查询时每页返回的记录数量
     * @param {string} [marker] 上一页最后一条记录的id，为空时为查询第一页。使用说明：必须与limit一起使用。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVpnAccessPolicies(listVpnAccessPoliciesRequest?: ListVpnAccessPoliciesRequest): Promise<ListVpnAccessPoliciesResponse> {
        const options = ParamCreater().listVpnAccessPolicies(listVpnAccessPoliciesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询VPN访问策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询VPN访问策略
     * @param {string} vpnServerId VPN服务端 ID
     * @param {string} policyId VPN访问策略ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVpnAccessPolicy(showVpnAccessPolicyRequest?: ShowVpnAccessPolicyRequest): Promise<ShowVpnAccessPolicyResponse> {
        const options = ParamCreater().showVpnAccessPolicy(showVpnAccessPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = ['header-response-token'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改VPN访问策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改VPN访问策略
     * @param {string} vpnServerId VPN服务端 ID
     * @param {string} policyId VPN访问策略ID
     * @param {UpdateVpnAccessPolicyRequestBody} updateVpnAccessPolicyRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateVpnAccessPolicy(updateVpnAccessPolicyRequest?: UpdateVpnAccessPolicyRequest): Promise<UpdateVpnAccessPolicyResponse> {
        const options = ParamCreater().updateVpnAccessPolicy(updateVpnAccessPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = ['header-response-token'];

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
     * 根据连接ID，查询指定的VPN连接日志
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询VPN连接日志
     * @param {string} vpnConnectionId vpn连接ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVpnConnectionLog(showVpnConnectionLogRequest?: ShowVpnConnectionLogRequest): Promise<ShowVpnConnectionLogResponse> {
        const options = ParamCreater().showVpnConnectionLog(showVpnConnectionLogRequest);

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
     * 删除VPN连接日志配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除VPN连接日志配置
     * @param {string} p2cVgwId P2C VPN网关实例ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteVpnConnectionsLogConfig(deleteVpnConnectionsLogConfigRequest?: DeleteVpnConnectionsLogConfigRequest): Promise<DeleteVpnConnectionsLogConfigResponse> {
        const options = ParamCreater().deleteVpnConnectionsLogConfig(deleteVpnConnectionsLogConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询VPN连接日志配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询VPN连接日志配置
     * @param {string} p2cVgwId P2C VPN网关实例ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVpnConnectionsLogConfig(showVpnConnectionsLogConfigRequest?: ShowVpnConnectionsLogConfigRequest): Promise<ShowVpnConnectionsLogConfigResponse> {
        const options = ParamCreater().showVpnConnectionsLogConfig(showVpnConnectionsLogConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = ['header-response-token'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新VPN连接日志配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新VPN连接日志配置
     * @param {string} p2cVgwId P2C VPN网关实例ID
     * @param {UpdateVpnLogConfigRequestBody} updateVpnLogConfigRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateVpnConnectionsLogConfig(updateVpnConnectionsLogConfigRequest?: UpdateVpnConnectionsLogConfigRequest): Promise<UpdateVpnConnectionsLogConfigResponse> {
        const options = ParamCreater().updateVpnConnectionsLogConfig(updateVpnConnectionsLogConfigRequest);

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
     * 查询VPN网关可用区
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询VPN网关可用区
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listExtendedAvailabilityZones(listExtendedAvailabilityZonesRequest?: ListExtendedAvailabilityZonesRequest): Promise<ListExtendedAvailabilityZonesResponse> {
        const options = ParamCreater().listExtendedAvailabilityZones();

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
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询VPN网关路由表
     * @param {string} vgwId VPN网关实例ID
     * @param {number} [limit] 分页查询时每页返回的记录数量
     * @param {string} [marker] 上一页最后一条记录的id，为空时为查询第一页。使用说明：必须与limit一起使用。
     * @param {number} [offset] 分页查询的偏移量
     * @param {boolean} [isIncludeNexthopResource] 是否包含下一跳资源信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVpnGatewayRoutingTable(showVpnGatewayRoutingTableRequest?: ShowVpnGatewayRoutingTableRequest): Promise<ShowVpnGatewayRoutingTableResponse> {
        const options = ParamCreater().showVpnGatewayRoutingTable(showVpnGatewayRoutingTableRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 对单个网关规格进行修改，可以升配或降配
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改网关规格
     * @param {string} vgwId VPN网关实例ID
     * @param {UpdateVgwSpecificationRequestBody} updateVgwSpecificationRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePostpaidVgwSpecification(updatePostpaidVgwSpecificationRequest?: UpdatePostpaidVgwSpecificationRequest): Promise<UpdatePostpaidVgwSpecificationResponse> {
        const options = ParamCreater().updatePostpaidVgwSpecification(updatePostpaidVgwSpecificationRequest);

         // @ts-ignore
        options['responseHeaders'] = ['header-response-token'];

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
     * @param {CreateVpnGatewayCertificateRequestBody} createVpnGatewayCertificateRequestBody 请求参数对象
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
     * @param {UpdateVpnGatewayCertificateRequestBody} updateVpnGatewayCertificateRequestBody 请求参数对象
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

    /**
     * 创建一个VPN 服务端
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建一个VPN 服务端
     * @param {string} p2cVgwId P2C VPN网关实例ID
     * @param {CreateServerRequestBody} createServerRequestBody 请求参数对象
     * @param {string} [xClientToken] 幂等性标识
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createVpnServer(createVpnServerRequest?: CreateVpnServerRequest): Promise<CreateVpnServerResponse> {
        const options = ParamCreater().createVpnServer(createVpnServerRequest);

         // @ts-ignore
        options['responseHeaders'] = ['header-response-token'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 导出客户端配置信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导出服务端对应的客户端配置信息
     * @param {string} vpnServerId VPN服务端 ID
     * @param {ExportClientConfigRequestBody} exportClientConfigRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public exportClientConfig(exportClientConfigRequest?: ExportClientConfigRequest): Promise<ExportClientConfigResponse> {
        const options = ParamCreater().exportClientConfig(exportClientConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = ['header-response-token'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户下的所有服务端信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户下的所有服务端信息
     * @param {number} [limit] 分页查询时每页返回的记录数量
     * @param {string} [marker] 上一页最后一条记录的id，为空时为查询第一页。使用说明：必须与limit一起使用。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVpnServersByProject(listVpnServersByProjectRequest?: ListVpnServersByProjectRequest): Promise<ListVpnServersByProjectResponse> {
        const options = ParamCreater().listVpnServersByProject(listVpnServersByProjectRequest);

         // @ts-ignore
        options['responseHeaders'] = ['header-response-token'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询一个网关下的服务端信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询一个网关下的服务端信息
     * @param {string} p2cVgwId P2C VPN网关实例ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVpnServersByVgw(listVpnServersByVgwRequest?: ListVpnServersByVgwRequest): Promise<ListVpnServersByVgwResponse> {
        const options = ParamCreater().listVpnServersByVgw(listVpnServersByVgwRequest);

         // @ts-ignore
        options['responseHeaders'] = ['header-response-token'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新指定VPN 服务端
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新指定VPN 服务端
     * @param {string} vpnServerId VPN服务端 ID
     * @param {UpdateServerRequestBody} updateServerRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateVpnServer(updateVpnServerRequest?: UpdateVpnServerRequest): Promise<UpdateVpnServerResponse> {
        const options = ParamCreater().updateVpnServer(updateVpnServerRequest);

         // @ts-ignore
        options['responseHeaders'] = ['header-response-token'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量创建P2C VPN用户
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量创建VPN用户
     * @param {string} vpnServerId VPN服务端 ID
     * @param {BatchCreateVpnUsersRequestBody} batchCreateVpnUsersRequestBody 请求参数对象
     * @param {string} [xClientToken] 幂等性标识
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateVpnUsers(batchCreateVpnUsersRequest?: BatchCreateVpnUsersRequest): Promise<BatchCreateVpnUsersResponse> {
        const options = ParamCreater().batchCreateVpnUsers(batchCreateVpnUsersRequest);

         // @ts-ignore
        options['responseHeaders'] = ['header-response-token'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除P2C VPN用户
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除VPN用户
     * @param {string} vpnServerId VPN服务端 ID
     * @param {BatchDeleteVpnUsersRequestBody} batchDeleteVpnUsersRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteVpnUsers(batchDeleteVpnUsersRequest?: BatchDeleteVpnUsersRequest): Promise<BatchDeleteVpnUsersResponse> {
        const options = ParamCreater().batchDeleteVpnUsers(batchDeleteVpnUsersRequest);

         // @ts-ignore
        options['responseHeaders'] = ['header-response-token'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建VPN用户
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建VPN用户
     * @param {string} vpnServerId VPN服务端 ID
     * @param {CreateVpnUserRequestBody} createVpnUserRequestBody 请求参数对象
     * @param {string} [xClientToken] 幂等性标识
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createVpnUser(createVpnUserRequest?: CreateVpnUserRequest): Promise<CreateVpnUserResponse> {
        const options = ParamCreater().createVpnUser(createVpnUserRequest);

         // @ts-ignore
        options['responseHeaders'] = ['header-response-token'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除VPN用户
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除VPN用户
     * @param {string} vpnServerId VPN服务端 ID
     * @param {string} userId 用户ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteVpnUser(deleteVpnUserRequest?: DeleteVpnUserRequest): Promise<DeleteVpnUserResponse> {
        const options = ParamCreater().deleteVpnUser(deleteVpnUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询VPN用户列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询VPN用户列表
     * @param {string} vpnServerId VPN服务端 ID
     * @param {number} [limit] 分页查询时每页返回的记录数量
     * @param {string} [marker] 上一页最后一条记录的id，为空时为查询第一页。使用说明：必须与limit一起使用。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVpnUsers(listVpnUsersRequest?: ListVpnUsersRequest): Promise<ListVpnUsersResponse> {
        const options = ParamCreater().listVpnUsers(listVpnUsersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重置VPN用户密码
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重置VPN用户密码
     * @param {string} vpnServerId VPN服务端 ID
     * @param {string} userId 用户ID
     * @param {ResetVpnUserPasswordRequestBody} resetVpnUserPasswordRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resetVpnUserPassword(resetVpnUserPasswordRequest?: ResetVpnUserPasswordRequest): Promise<ResetVpnUserPasswordResponse> {
        const options = ParamCreater().resetVpnUserPassword(resetVpnUserPasswordRequest);

         // @ts-ignore
        options['responseHeaders'] = ['header-response-token'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询VPN用户
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询VPN用户
     * @param {string} vpnServerId VPN服务端 ID
     * @param {string} userId 用户ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVpnUser(showVpnUserRequest?: ShowVpnUserRequest): Promise<ShowVpnUserResponse> {
        const options = ParamCreater().showVpnUser(showVpnUserRequest);

         // @ts-ignore
        options['responseHeaders'] = ['header-response-token'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改VPN用户
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改VPN用户
     * @param {string} vpnServerId VPN服务端 ID
     * @param {string} userId 用户ID
     * @param {UpdateVpnUserRequestBody} updateVpnUserRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateVpnUser(updateVpnUserRequest?: UpdateVpnUserRequest): Promise<UpdateVpnUserResponse> {
        const options = ParamCreater().updateVpnUser(updateVpnUserRequest);

         // @ts-ignore
        options['responseHeaders'] = ['header-response-token'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改VPN用户密码
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改VPN用户密码
     * @param {string} vpnServerId VPN服务端 ID
     * @param {string} userId 用户ID
     * @param {UpdateVpnUserPasswordRequestBody} updateVpnUserPasswordRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateVpnUserPassword(updateVpnUserPasswordRequest?: UpdateVpnUserPasswordRequest): Promise<UpdateVpnUserPasswordResponse> {
        const options = ParamCreater().updateVpnUserPassword(updateVpnUserPasswordRequest);

         // @ts-ignore
        options['responseHeaders'] = ['header-response-token'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加VPN用户到组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加VPN用户到组
     * @param {string} vpnServerId VPN服务端 ID
     * @param {string} groupId 用户组ID
     * @param {AddVpnUserToGroupRequestBody} addVpnUserToGroupRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addVpnUsersToGroup(addVpnUsersToGroupRequest?: AddVpnUsersToGroupRequest): Promise<AddVpnUsersToGroupResponse> {
        const options = ParamCreater().addVpnUsersToGroup(addVpnUsersToGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = ['header-response-token'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建VPN用户组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建VPN用户组
     * @param {string} vpnServerId VPN服务端 ID
     * @param {CreateVpnUserGroupRequestBody} createVpnUserGroupRequestBody 请求参数对象
     * @param {string} [xClientToken] 幂等性标识
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createVpnUserGroup(createVpnUserGroupRequest?: CreateVpnUserGroupRequest): Promise<CreateVpnUserGroupResponse> {
        const options = ParamCreater().createVpnUserGroup(createVpnUserGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = ['header-response-token'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除VPN用户组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除VPN用户组
     * @param {string} vpnServerId VPN服务端 ID
     * @param {string} groupId 用户组ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteVpnUserGroup(deleteVpnUserGroupRequest?: DeleteVpnUserGroupRequest): Promise<DeleteVpnUserGroupResponse> {
        const options = ParamCreater().deleteVpnUserGroup(deleteVpnUserGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询VPN用户组列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询VPN用户组列表
     * @param {string} vpnServerId VPN服务端 ID
     * @param {number} [limit] 分页查询时每页返回的记录数量
     * @param {string} [marker] 上一页最后一条记录的id，为空时为查询第一页。使用说明：必须与limit一起使用。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVpnUserGroups(listVpnUserGroupsRequest?: ListVpnUserGroupsRequest): Promise<ListVpnUserGroupsResponse> {
        const options = ParamCreater().listVpnUserGroups(listVpnUserGroupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询组内VPN用户
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询组内VPN用户
     * @param {string} vpnServerId VPN服务端 ID
     * @param {string} groupId 用户组ID
     * @param {number} [limit] 分页查询时每页返回的记录数量
     * @param {string} [marker] 上一页最后一条记录的id，为空时为查询第一页。使用说明：必须与limit一起使用。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVpnUsersInGroup(listVpnUsersInGroupRequest?: ListVpnUsersInGroupRequest): Promise<ListVpnUsersInGroupResponse> {
        const options = ParamCreater().listVpnUsersInGroup(listVpnUsersInGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = ['header-response-token'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除组内VPN用户
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除组内VPN用户
     * @param {string} vpnServerId VPN服务端 ID
     * @param {string} groupId 用户组ID
     * @param {RemoveVpnUserFromGroupRequestBody} removeVpnUserFromGroupRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public removeVpnUsersFromGroup(removeVpnUsersFromGroupRequest?: RemoveVpnUsersFromGroupRequest): Promise<RemoveVpnUsersFromGroupResponse> {
        const options = ParamCreater().removeVpnUsersFromGroup(removeVpnUsersFromGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = ['header-response-token'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询VPN用户组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询VPN用户组
     * @param {string} vpnServerId VPN服务端 ID
     * @param {string} groupId 用户组ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVpnUserGroup(showVpnUserGroupRequest?: ShowVpnUserGroupRequest): Promise<ShowVpnUserGroupResponse> {
        const options = ParamCreater().showVpnUserGroup(showVpnUserGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = ['header-response-token'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改VPN用户组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改VPN用户组
     * @param {string} vpnServerId VPN服务端 ID
     * @param {string} groupId 用户组ID
     * @param {UpdateVpnUserGroupRequestBody} updateVpnUserGroupRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateVpnUserGroup(updateVpnUserGroupRequest?: UpdateVpnUserGroupRequest): Promise<UpdateVpnUserGroupResponse> {
        const options = ParamCreater().updateVpnUserGroup(updateVpnUserGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = ['header-response-token'];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 创建服务端时，可以先调用客户端CA的预校验API，检查CA的合法性
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkClientCaCertificate(checkClientCaCertificateRequest?: CheckClientCaCertificateRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/p2c-vpn-gateways/vpn-servers/client-ca-certificates/check",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (checkClientCaCertificateRequest !== null && checkClientCaCertificateRequest !== undefined) {
                if (checkClientCaCertificateRequest instanceof CheckClientCaCertificateRequest) {
                    body = checkClientCaCertificateRequest.body
                } else {
                    body = checkClientCaCertificateRequest['body'];
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
         * 删除客户端CA证书
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteClientCa(deleteClientCaRequest?: DeleteClientCaRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/{project_id}/p2c-vpn-gateways/vpn-servers/{vpn_server_id}/client-ca-certificates/{client_ca_certificate_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let vpnServerId;
            
            let clientCaCertificateId;

            if (deleteClientCaRequest !== null && deleteClientCaRequest !== undefined) {
                if (deleteClientCaRequest instanceof DeleteClientCaRequest) {
                    vpnServerId = deleteClientCaRequest.vpnServerId;
                    clientCaCertificateId = deleteClientCaRequest.clientCaCertificateId;
                } else {
                    vpnServerId = deleteClientCaRequest['vpn_server_id'];
                    clientCaCertificateId = deleteClientCaRequest['client_ca_certificate_id'];
                }
            }

        
            if (vpnServerId === null || vpnServerId === undefined) {
            throw new RequiredError('vpnServerId','Required parameter vpnServerId was null or undefined when calling deleteClientCa.');
            }
            if (clientCaCertificateId === null || clientCaCertificateId === undefined) {
            throw new RequiredError('clientCaCertificateId','Required parameter clientCaCertificateId was null or undefined when calling deleteClientCa.');
            }

            options.pathParams = { 'vpn_server_id': vpnServerId,'client_ca_certificate_id': clientCaCertificateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 导入客户端 CA 证书
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        importClientCa(importClientCaRequest?: ImportClientCaRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/p2c-vpn-gateways/vpn-servers/{vpn_server_id}/client-ca-certificates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let vpnServerId;
            
            let xClientToken;

            if (importClientCaRequest !== null && importClientCaRequest !== undefined) {
                if (importClientCaRequest instanceof ImportClientCaRequest) {
                    vpnServerId = importClientCaRequest.vpnServerId;
                    body = importClientCaRequest.body
                    xClientToken = importClientCaRequest.xClientToken;
                } else {
                    vpnServerId = importClientCaRequest['vpn_server_id'];
                    body = importClientCaRequest['body'];
                    xClientToken = importClientCaRequest['X-Client-Token'];
                }
            }

        
            if (vpnServerId === null || vpnServerId === undefined) {
            throw new RequiredError('vpnServerId','Required parameter vpnServerId was null or undefined when calling importClientCa.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xClientToken !== undefined && xClientToken !== null) {
                localVarHeaderParameter['X-Client-Token'] = String(xClientToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vpn_server_id': vpnServerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询客户端CA证书
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showClientCa(showClientCaRequest?: ShowClientCaRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/p2c-vpn-gateways/vpn-servers/{vpn_server_id}/client-ca-certificates/{client_ca_certificate_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let vpnServerId;
            
            let clientCaCertificateId;

            if (showClientCaRequest !== null && showClientCaRequest !== undefined) {
                if (showClientCaRequest instanceof ShowClientCaRequest) {
                    vpnServerId = showClientCaRequest.vpnServerId;
                    clientCaCertificateId = showClientCaRequest.clientCaCertificateId;
                } else {
                    vpnServerId = showClientCaRequest['vpn_server_id'];
                    clientCaCertificateId = showClientCaRequest['client_ca_certificate_id'];
                }
            }

        
            if (vpnServerId === null || vpnServerId === undefined) {
            throw new RequiredError('vpnServerId','Required parameter vpnServerId was null or undefined when calling showClientCa.');
            }
            if (clientCaCertificateId === null || clientCaCertificateId === undefined) {
            throw new RequiredError('clientCaCertificateId','Required parameter clientCaCertificateId was null or undefined when calling showClientCa.');
            }

            options.pathParams = { 'vpn_server_id': vpnServerId,'client_ca_certificate_id': clientCaCertificateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改客户端CA证书
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateClientCa(updateClientCaRequest?: UpdateClientCaRequest) {
            const options = {
                method: "PUT",
                url: "/v5/{project_id}/p2c-vpn-gateways/vpn-servers/{vpn_server_id}/client-ca-certificates/{client_ca_certificate_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let vpnServerId;
            
            let clientCaCertificateId;

            if (updateClientCaRequest !== null && updateClientCaRequest !== undefined) {
                if (updateClientCaRequest instanceof UpdateClientCaRequest) {
                    vpnServerId = updateClientCaRequest.vpnServerId;
                    clientCaCertificateId = updateClientCaRequest.clientCaCertificateId;
                    body = updateClientCaRequest.body
                } else {
                    vpnServerId = updateClientCaRequest['vpn_server_id'];
                    clientCaCertificateId = updateClientCaRequest['client_ca_certificate_id'];
                    body = updateClientCaRequest['body'];
                }
            }

        
            if (vpnServerId === null || vpnServerId === undefined) {
            throw new RequiredError('vpnServerId','Required parameter vpnServerId was null or undefined when calling updateClientCa.');
            }
            if (clientCaCertificateId === null || clientCaCertificateId === undefined) {
            throw new RequiredError('clientCaCertificateId','Required parameter clientCaCertificateId was null or undefined when calling updateClientCa.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vpn_server_id': vpnServerId,'client_ca_certificate_id': clientCaCertificateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
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
         * 断开P2C VPN网关连接
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteP2cVgwConnection(deleteP2cVgwConnectionRequest?: DeleteP2cVgwConnectionRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/p2c-vpn-gateways/{p2c_vgw_id}/connections/{connection_id}/disconnect",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let p2cVgwId;
            
            let connectionId;

            if (deleteP2cVgwConnectionRequest !== null && deleteP2cVgwConnectionRequest !== undefined) {
                if (deleteP2cVgwConnectionRequest instanceof DeleteP2cVgwConnectionRequest) {
                    p2cVgwId = deleteP2cVgwConnectionRequest.p2cVgwId;
                    connectionId = deleteP2cVgwConnectionRequest.connectionId;
                } else {
                    p2cVgwId = deleteP2cVgwConnectionRequest['p2c_vgw_id'];
                    connectionId = deleteP2cVgwConnectionRequest['connection_id'];
                }
            }

        
            if (p2cVgwId === null || p2cVgwId === undefined) {
            throw new RequiredError('p2cVgwId','Required parameter p2cVgwId was null or undefined when calling deleteP2cVgwConnection.');
            }
            if (connectionId === null || connectionId === undefined) {
            throw new RequiredError('connectionId','Required parameter connectionId was null or undefined when calling deleteP2cVgwConnection.');
            }

            options.pathParams = { 'p2c_vgw_id': p2cVgwId,'connection_id': connectionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询P2C VPN网关可用区
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listP2cVgwAvailabilityZones(listP2cVgwAvailabilityZonesRequest?: ListP2cVgwAvailabilityZonesRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/p2c-vpn-gateways/availability-zones",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let flavor;

            if (listP2cVgwAvailabilityZonesRequest !== null && listP2cVgwAvailabilityZonesRequest !== undefined) {
                if (listP2cVgwAvailabilityZonesRequest instanceof ListP2cVgwAvailabilityZonesRequest) {
                    flavor = listP2cVgwAvailabilityZonesRequest.flavor;
                } else {
                    flavor = listP2cVgwAvailabilityZonesRequest['flavor'];
                }
            }

        
            if (flavor !== null && flavor !== undefined) {
                localVarQueryParameter['flavor'] = flavor;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * List p2c vpn gateway connections
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listP2cVgwConnections(listP2cVgwConnectionsRequest?: ListP2cVgwConnectionsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/p2c-vpn-gateways/{p2c_vgw_id}/connections",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let p2cVgwId;
            
            let limit;
            
            let offset;

            if (listP2cVgwConnectionsRequest !== null && listP2cVgwConnectionsRequest !== undefined) {
                if (listP2cVgwConnectionsRequest instanceof ListP2cVgwConnectionsRequest) {
                    p2cVgwId = listP2cVgwConnectionsRequest.p2cVgwId;
                    limit = listP2cVgwConnectionsRequest.limit;
                    offset = listP2cVgwConnectionsRequest.offset;
                } else {
                    p2cVgwId = listP2cVgwConnectionsRequest['p2c_vgw_id'];
                    limit = listP2cVgwConnectionsRequest['limit'];
                    offset = listP2cVgwConnectionsRequest['offset'];
                }
            }

        
            if (p2cVgwId === null || p2cVgwId === undefined) {
            throw new RequiredError('p2cVgwId','Required parameter p2cVgwId was null or undefined when calling listP2cVgwConnections.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'p2c_vgw_id': p2cVgwId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询P2C VPN网关列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listP2cVgws(listP2cVgwsRequest?: ListP2cVgwsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/p2c-vpn-gateways",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;

            if (listP2cVgwsRequest !== null && listP2cVgwsRequest !== undefined) {
                if (listP2cVgwsRequest instanceof ListP2cVgwsRequest) {
                    limit = listP2cVgwsRequest.limit;
                    marker = listP2cVgwsRequest.marker;
                } else {
                    limit = listP2cVgwsRequest['limit'];
                    marker = listP2cVgwsRequest['marker'];
                }
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
         * 根据P2C VPN网关ID，查询指定的VPN网关
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showP2cVgw(showP2cVgwRequest?: ShowP2cVgwRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/p2c-vpn-gateways/{p2c_vgw_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let p2cVgwId;

            if (showP2cVgwRequest !== null && showP2cVgwRequest !== undefined) {
                if (showP2cVgwRequest instanceof ShowP2cVgwRequest) {
                    p2cVgwId = showP2cVgwRequest.p2cVgwId;
                } else {
                    p2cVgwId = showP2cVgwRequest['p2c_vgw_id'];
                }
            }

        
            if (p2cVgwId === null || p2cVgwId === undefined) {
            throw new RequiredError('p2cVgwId','Required parameter p2cVgwId was null or undefined when calling showP2cVgw.');
            }

            options.pathParams = { 'p2c_vgw_id': p2cVgwId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据P2C VPN网关ID，更新指定的P2C VPN网关
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateP2cVgw(updateP2cVgwRequest?: UpdateP2cVgwRequest) {
            const options = {
                method: "PUT",
                url: "/v5/{project_id}/p2c-vpn-gateways/{p2c_vgw_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let p2cVgwId;

            if (updateP2cVgwRequest !== null && updateP2cVgwRequest !== undefined) {
                if (updateP2cVgwRequest instanceof UpdateP2cVgwRequest) {
                    p2cVgwId = updateP2cVgwRequest.p2cVgwId;
                    body = updateP2cVgwRequest.body
                } else {
                    p2cVgwId = updateP2cVgwRequest['p2c_vgw_id'];
                    body = updateP2cVgwRequest['body'];
                }
            }

        
            if (p2cVgwId === null || p2cVgwId === undefined) {
            throw new RequiredError('p2cVgwId','Required parameter p2cVgwId was null or undefined when calling updateP2cVgw.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'p2c_vgw_id': p2cVgwId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 为指定实例批量添加标签
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
         * 为指定实例批量删除标签
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
         * 根据标签查询资源实例数量
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
         * 查询租户在指定项目中指定资源类型下的所有标签
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
         * 根据标签查询资源实例列表
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
         * 查询指定实例的标签信息
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
         * 创建VPN访问策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createVpnAccessPolicy(createVpnAccessPolicyRequest?: CreateVpnAccessPolicyRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/p2c-vpn-gateways/vpn-servers/{vpn_server_id}/access-policies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let vpnServerId;
            
            let xClientToken;

            if (createVpnAccessPolicyRequest !== null && createVpnAccessPolicyRequest !== undefined) {
                if (createVpnAccessPolicyRequest instanceof CreateVpnAccessPolicyRequest) {
                    vpnServerId = createVpnAccessPolicyRequest.vpnServerId;
                    body = createVpnAccessPolicyRequest.body
                    xClientToken = createVpnAccessPolicyRequest.xClientToken;
                } else {
                    vpnServerId = createVpnAccessPolicyRequest['vpn_server_id'];
                    body = createVpnAccessPolicyRequest['body'];
                    xClientToken = createVpnAccessPolicyRequest['X-Client-Token'];
                }
            }

        
            if (vpnServerId === null || vpnServerId === undefined) {
            throw new RequiredError('vpnServerId','Required parameter vpnServerId was null or undefined when calling createVpnAccessPolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xClientToken !== undefined && xClientToken !== null) {
                localVarHeaderParameter['X-Client-Token'] = String(xClientToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vpn_server_id': vpnServerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除VPN访问策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteVpnAccessPolicy(deleteVpnAccessPolicyRequest?: DeleteVpnAccessPolicyRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/{project_id}/p2c-vpn-gateways/vpn-servers/{vpn_server_id}/access-policies/{policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let vpnServerId;
            
            let policyId;

            if (deleteVpnAccessPolicyRequest !== null && deleteVpnAccessPolicyRequest !== undefined) {
                if (deleteVpnAccessPolicyRequest instanceof DeleteVpnAccessPolicyRequest) {
                    vpnServerId = deleteVpnAccessPolicyRequest.vpnServerId;
                    policyId = deleteVpnAccessPolicyRequest.policyId;
                } else {
                    vpnServerId = deleteVpnAccessPolicyRequest['vpn_server_id'];
                    policyId = deleteVpnAccessPolicyRequest['policy_id'];
                }
            }

        
            if (vpnServerId === null || vpnServerId === undefined) {
            throw new RequiredError('vpnServerId','Required parameter vpnServerId was null or undefined when calling deleteVpnAccessPolicy.');
            }
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling deleteVpnAccessPolicy.');
            }

            options.pathParams = { 'vpn_server_id': vpnServerId,'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询VPN访问策略列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVpnAccessPolicies(listVpnAccessPoliciesRequest?: ListVpnAccessPoliciesRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/p2c-vpn-gateways/vpn-servers/{vpn_server_id}/access-policies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let vpnServerId;
            
            let limit;
            
            let marker;

            if (listVpnAccessPoliciesRequest !== null && listVpnAccessPoliciesRequest !== undefined) {
                if (listVpnAccessPoliciesRequest instanceof ListVpnAccessPoliciesRequest) {
                    vpnServerId = listVpnAccessPoliciesRequest.vpnServerId;
                    limit = listVpnAccessPoliciesRequest.limit;
                    marker = listVpnAccessPoliciesRequest.marker;
                } else {
                    vpnServerId = listVpnAccessPoliciesRequest['vpn_server_id'];
                    limit = listVpnAccessPoliciesRequest['limit'];
                    marker = listVpnAccessPoliciesRequest['marker'];
                }
            }

        
            if (vpnServerId === null || vpnServerId === undefined) {
            throw new RequiredError('vpnServerId','Required parameter vpnServerId was null or undefined when calling listVpnAccessPolicies.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'vpn_server_id': vpnServerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询VPN访问策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVpnAccessPolicy(showVpnAccessPolicyRequest?: ShowVpnAccessPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/p2c-vpn-gateways/vpn-servers/{vpn_server_id}/access-policies/{policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let vpnServerId;
            
            let policyId;

            if (showVpnAccessPolicyRequest !== null && showVpnAccessPolicyRequest !== undefined) {
                if (showVpnAccessPolicyRequest instanceof ShowVpnAccessPolicyRequest) {
                    vpnServerId = showVpnAccessPolicyRequest.vpnServerId;
                    policyId = showVpnAccessPolicyRequest.policyId;
                } else {
                    vpnServerId = showVpnAccessPolicyRequest['vpn_server_id'];
                    policyId = showVpnAccessPolicyRequest['policy_id'];
                }
            }

        
            if (vpnServerId === null || vpnServerId === undefined) {
            throw new RequiredError('vpnServerId','Required parameter vpnServerId was null or undefined when calling showVpnAccessPolicy.');
            }
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling showVpnAccessPolicy.');
            }

            options.pathParams = { 'vpn_server_id': vpnServerId,'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改VPN访问策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateVpnAccessPolicy(updateVpnAccessPolicyRequest?: UpdateVpnAccessPolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v5/{project_id}/p2c-vpn-gateways/vpn-servers/{vpn_server_id}/access-policies/{policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let vpnServerId;
            
            let policyId;

            if (updateVpnAccessPolicyRequest !== null && updateVpnAccessPolicyRequest !== undefined) {
                if (updateVpnAccessPolicyRequest instanceof UpdateVpnAccessPolicyRequest) {
                    vpnServerId = updateVpnAccessPolicyRequest.vpnServerId;
                    policyId = updateVpnAccessPolicyRequest.policyId;
                    body = updateVpnAccessPolicyRequest.body
                } else {
                    vpnServerId = updateVpnAccessPolicyRequest['vpn_server_id'];
                    policyId = updateVpnAccessPolicyRequest['policy_id'];
                    body = updateVpnAccessPolicyRequest['body'];
                }
            }

        
            if (vpnServerId === null || vpnServerId === undefined) {
            throw new RequiredError('vpnServerId','Required parameter vpnServerId was null or undefined when calling updateVpnAccessPolicy.');
            }
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling updateVpnAccessPolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vpn_server_id': vpnServerId,'policy_id': policyId, };
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
         * 根据连接ID，查询指定的VPN连接日志
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVpnConnectionLog(showVpnConnectionLogRequest?: ShowVpnConnectionLogRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/vpn-connection/{vpn_connection_id}/log",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let vpnConnectionId;

            if (showVpnConnectionLogRequest !== null && showVpnConnectionLogRequest !== undefined) {
                if (showVpnConnectionLogRequest instanceof ShowVpnConnectionLogRequest) {
                    vpnConnectionId = showVpnConnectionLogRequest.vpnConnectionId;
                } else {
                    vpnConnectionId = showVpnConnectionLogRequest['vpn_connection_id'];
                }
            }

        
            if (vpnConnectionId === null || vpnConnectionId === undefined) {
            throw new RequiredError('vpnConnectionId','Required parameter vpnConnectionId was null or undefined when calling showVpnConnectionLog.');
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
         * 删除VPN连接日志配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteVpnConnectionsLogConfig(deleteVpnConnectionsLogConfigRequest?: DeleteVpnConnectionsLogConfigRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/{project_id}/p2c-vpn-gateways/{p2c_vgw_id}/log-config",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let p2cVgwId;

            if (deleteVpnConnectionsLogConfigRequest !== null && deleteVpnConnectionsLogConfigRequest !== undefined) {
                if (deleteVpnConnectionsLogConfigRequest instanceof DeleteVpnConnectionsLogConfigRequest) {
                    p2cVgwId = deleteVpnConnectionsLogConfigRequest.p2cVgwId;
                } else {
                    p2cVgwId = deleteVpnConnectionsLogConfigRequest['p2c_vgw_id'];
                }
            }

        
            if (p2cVgwId === null || p2cVgwId === undefined) {
            throw new RequiredError('p2cVgwId','Required parameter p2cVgwId was null or undefined when calling deleteVpnConnectionsLogConfig.');
            }

            options.pathParams = { 'p2c_vgw_id': p2cVgwId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询VPN连接日志配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVpnConnectionsLogConfig(showVpnConnectionsLogConfigRequest?: ShowVpnConnectionsLogConfigRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/p2c-vpn-gateways/{p2c_vgw_id}/log-config",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let p2cVgwId;

            if (showVpnConnectionsLogConfigRequest !== null && showVpnConnectionsLogConfigRequest !== undefined) {
                if (showVpnConnectionsLogConfigRequest instanceof ShowVpnConnectionsLogConfigRequest) {
                    p2cVgwId = showVpnConnectionsLogConfigRequest.p2cVgwId;
                } else {
                    p2cVgwId = showVpnConnectionsLogConfigRequest['p2c_vgw_id'];
                }
            }

        
            if (p2cVgwId === null || p2cVgwId === undefined) {
            throw new RequiredError('p2cVgwId','Required parameter p2cVgwId was null or undefined when calling showVpnConnectionsLogConfig.');
            }

            options.pathParams = { 'p2c_vgw_id': p2cVgwId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新VPN连接日志配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateVpnConnectionsLogConfig(updateVpnConnectionsLogConfigRequest?: UpdateVpnConnectionsLogConfigRequest) {
            const options = {
                method: "PUT",
                url: "/v5/{project_id}/p2c-vpn-gateways/{p2c_vgw_id}/log-config",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let p2cVgwId;

            if (updateVpnConnectionsLogConfigRequest !== null && updateVpnConnectionsLogConfigRequest !== undefined) {
                if (updateVpnConnectionsLogConfigRequest instanceof UpdateVpnConnectionsLogConfigRequest) {
                    p2cVgwId = updateVpnConnectionsLogConfigRequest.p2cVgwId;
                    body = updateVpnConnectionsLogConfigRequest.body
                } else {
                    p2cVgwId = updateVpnConnectionsLogConfigRequest['p2c_vgw_id'];
                    body = updateVpnConnectionsLogConfigRequest['body'];
                }
            }

        
            if (p2cVgwId === null || p2cVgwId === undefined) {
            throw new RequiredError('p2cVgwId','Required parameter p2cVgwId was null or undefined when calling updateVpnConnectionsLogConfig.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'p2c_vgw_id': p2cVgwId, };
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
         * 查询VPN网关可用区
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listExtendedAvailabilityZones() {
            const options = {
                method: "GET",
                url: "/v5.1/{project_id}/vpn-gateways/availability-zones",
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
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVpnGatewayRoutingTable(showVpnGatewayRoutingTableRequest?: ShowVpnGatewayRoutingTableRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/vpn-gateways/{vgw_id}/routing-table",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let vgwId;
            
            let limit;
            
            let marker;
            
            let offset;
            
            let isIncludeNexthopResource;

            if (showVpnGatewayRoutingTableRequest !== null && showVpnGatewayRoutingTableRequest !== undefined) {
                if (showVpnGatewayRoutingTableRequest instanceof ShowVpnGatewayRoutingTableRequest) {
                    vgwId = showVpnGatewayRoutingTableRequest.vgwId;
                    limit = showVpnGatewayRoutingTableRequest.limit;
                    marker = showVpnGatewayRoutingTableRequest.marker;
                    offset = showVpnGatewayRoutingTableRequest.offset;
                    isIncludeNexthopResource = showVpnGatewayRoutingTableRequest.isIncludeNexthopResource;
                } else {
                    vgwId = showVpnGatewayRoutingTableRequest['vgw_id'];
                    limit = showVpnGatewayRoutingTableRequest['limit'];
                    marker = showVpnGatewayRoutingTableRequest['marker'];
                    offset = showVpnGatewayRoutingTableRequest['offset'];
                    isIncludeNexthopResource = showVpnGatewayRoutingTableRequest['is_include_nexthop_resource'];
                }
            }

        
            if (vgwId === null || vgwId === undefined) {
            throw new RequiredError('vgwId','Required parameter vgwId was null or undefined when calling showVpnGatewayRoutingTable.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (isIncludeNexthopResource !== null && isIncludeNexthopResource !== undefined) {
                localVarQueryParameter['is_include_nexthop_resource'] = isIncludeNexthopResource;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'vgw_id': vgwId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 对单个网关规格进行修改，可以升配或降配
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePostpaidVgwSpecification(updatePostpaidVgwSpecificationRequest?: UpdatePostpaidVgwSpecificationRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/vpn-gateways/{vgw_id}/update-specification",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let vgwId;

            if (updatePostpaidVgwSpecificationRequest !== null && updatePostpaidVgwSpecificationRequest !== undefined) {
                if (updatePostpaidVgwSpecificationRequest instanceof UpdatePostpaidVgwSpecificationRequest) {
                    vgwId = updatePostpaidVgwSpecificationRequest.vgwId;
                    body = updatePostpaidVgwSpecificationRequest.body
                } else {
                    vgwId = updatePostpaidVgwSpecificationRequest['vgw_id'];
                    body = updatePostpaidVgwSpecificationRequest['body'];
                }
            }

        
            if (vgwId === null || vgwId === undefined) {
            throw new RequiredError('vgwId','Required parameter vgwId was null or undefined when calling updatePostpaidVgwSpecification.');
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
    
        /**
         * 创建一个VPN 服务端
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createVpnServer(createVpnServerRequest?: CreateVpnServerRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/p2c-vpn-gateways/{p2c_vgw_id}/vpn-servers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let p2cVgwId;
            
            let xClientToken;

            if (createVpnServerRequest !== null && createVpnServerRequest !== undefined) {
                if (createVpnServerRequest instanceof CreateVpnServerRequest) {
                    p2cVgwId = createVpnServerRequest.p2cVgwId;
                    body = createVpnServerRequest.body
                    xClientToken = createVpnServerRequest.xClientToken;
                } else {
                    p2cVgwId = createVpnServerRequest['p2c_vgw_id'];
                    body = createVpnServerRequest['body'];
                    xClientToken = createVpnServerRequest['X-Client-Token'];
                }
            }

        
            if (p2cVgwId === null || p2cVgwId === undefined) {
            throw new RequiredError('p2cVgwId','Required parameter p2cVgwId was null or undefined when calling createVpnServer.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xClientToken !== undefined && xClientToken !== null) {
                localVarHeaderParameter['X-Client-Token'] = String(xClientToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'p2c_vgw_id': p2cVgwId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 导出客户端配置信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        exportClientConfig(exportClientConfigRequest?: ExportClientConfigRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/p2c-vpn-gateways/vpn-servers/{vpn_server_id}/client-config/export",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let vpnServerId;

            if (exportClientConfigRequest !== null && exportClientConfigRequest !== undefined) {
                if (exportClientConfigRequest instanceof ExportClientConfigRequest) {
                    vpnServerId = exportClientConfigRequest.vpnServerId;
                    body = exportClientConfigRequest.body
                } else {
                    vpnServerId = exportClientConfigRequest['vpn_server_id'];
                    body = exportClientConfigRequest['body'];
                }
            }

        
            if (vpnServerId === null || vpnServerId === undefined) {
            throw new RequiredError('vpnServerId','Required parameter vpnServerId was null or undefined when calling exportClientConfig.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vpn_server_id': vpnServerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户下的所有服务端信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVpnServersByProject(listVpnServersByProjectRequest?: ListVpnServersByProjectRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/vpn-servers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;

            if (listVpnServersByProjectRequest !== null && listVpnServersByProjectRequest !== undefined) {
                if (listVpnServersByProjectRequest instanceof ListVpnServersByProjectRequest) {
                    limit = listVpnServersByProjectRequest.limit;
                    marker = listVpnServersByProjectRequest.marker;
                } else {
                    limit = listVpnServersByProjectRequest['limit'];
                    marker = listVpnServersByProjectRequest['marker'];
                }
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
         * 查询一个网关下的服务端信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVpnServersByVgw(listVpnServersByVgwRequest?: ListVpnServersByVgwRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/p2c-vpn-gateways/{p2c_vgw_id}/vpn-servers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let p2cVgwId;

            if (listVpnServersByVgwRequest !== null && listVpnServersByVgwRequest !== undefined) {
                if (listVpnServersByVgwRequest instanceof ListVpnServersByVgwRequest) {
                    p2cVgwId = listVpnServersByVgwRequest.p2cVgwId;
                } else {
                    p2cVgwId = listVpnServersByVgwRequest['p2c_vgw_id'];
                }
            }

        
            if (p2cVgwId === null || p2cVgwId === undefined) {
            throw new RequiredError('p2cVgwId','Required parameter p2cVgwId was null or undefined when calling listVpnServersByVgw.');
            }

            options.pathParams = { 'p2c_vgw_id': p2cVgwId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新指定VPN 服务端
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateVpnServer(updateVpnServerRequest?: UpdateVpnServerRequest) {
            const options = {
                method: "PUT",
                url: "/v5/{project_id}/p2c-vpn-gateways/vpn-servers/{vpn_server_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let vpnServerId;

            if (updateVpnServerRequest !== null && updateVpnServerRequest !== undefined) {
                if (updateVpnServerRequest instanceof UpdateVpnServerRequest) {
                    vpnServerId = updateVpnServerRequest.vpnServerId;
                    body = updateVpnServerRequest.body
                } else {
                    vpnServerId = updateVpnServerRequest['vpn_server_id'];
                    body = updateVpnServerRequest['body'];
                }
            }

        
            if (vpnServerId === null || vpnServerId === undefined) {
            throw new RequiredError('vpnServerId','Required parameter vpnServerId was null or undefined when calling updateVpnServer.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vpn_server_id': vpnServerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量创建P2C VPN用户
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateVpnUsers(batchCreateVpnUsersRequest?: BatchCreateVpnUsersRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/p2c-vpn-gateways/vpn-servers/{vpn_server_id}/users/batch-create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let vpnServerId;
            
            let xClientToken;

            if (batchCreateVpnUsersRequest !== null && batchCreateVpnUsersRequest !== undefined) {
                if (batchCreateVpnUsersRequest instanceof BatchCreateVpnUsersRequest) {
                    vpnServerId = batchCreateVpnUsersRequest.vpnServerId;
                    body = batchCreateVpnUsersRequest.body
                    xClientToken = batchCreateVpnUsersRequest.xClientToken;
                } else {
                    vpnServerId = batchCreateVpnUsersRequest['vpn_server_id'];
                    body = batchCreateVpnUsersRequest['body'];
                    xClientToken = batchCreateVpnUsersRequest['X-Client-Token'];
                }
            }

        
            if (vpnServerId === null || vpnServerId === undefined) {
            throw new RequiredError('vpnServerId','Required parameter vpnServerId was null or undefined when calling batchCreateVpnUsers.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xClientToken !== undefined && xClientToken !== null) {
                localVarHeaderParameter['X-Client-Token'] = String(xClientToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vpn_server_id': vpnServerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除P2C VPN用户
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteVpnUsers(batchDeleteVpnUsersRequest?: BatchDeleteVpnUsersRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/p2c-vpn-gateways/vpn-servers/{vpn_server_id}/users/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let vpnServerId;

            if (batchDeleteVpnUsersRequest !== null && batchDeleteVpnUsersRequest !== undefined) {
                if (batchDeleteVpnUsersRequest instanceof BatchDeleteVpnUsersRequest) {
                    vpnServerId = batchDeleteVpnUsersRequest.vpnServerId;
                    body = batchDeleteVpnUsersRequest.body
                } else {
                    vpnServerId = batchDeleteVpnUsersRequest['vpn_server_id'];
                    body = batchDeleteVpnUsersRequest['body'];
                }
            }

        
            if (vpnServerId === null || vpnServerId === undefined) {
            throw new RequiredError('vpnServerId','Required parameter vpnServerId was null or undefined when calling batchDeleteVpnUsers.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vpn_server_id': vpnServerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建VPN用户
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createVpnUser(createVpnUserRequest?: CreateVpnUserRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/p2c-vpn-gateways/vpn-servers/{vpn_server_id}/users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let vpnServerId;
            
            let xClientToken;

            if (createVpnUserRequest !== null && createVpnUserRequest !== undefined) {
                if (createVpnUserRequest instanceof CreateVpnUserRequest) {
                    vpnServerId = createVpnUserRequest.vpnServerId;
                    body = createVpnUserRequest.body
                    xClientToken = createVpnUserRequest.xClientToken;
                } else {
                    vpnServerId = createVpnUserRequest['vpn_server_id'];
                    body = createVpnUserRequest['body'];
                    xClientToken = createVpnUserRequest['X-Client-Token'];
                }
            }

        
            if (vpnServerId === null || vpnServerId === undefined) {
            throw new RequiredError('vpnServerId','Required parameter vpnServerId was null or undefined when calling createVpnUser.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xClientToken !== undefined && xClientToken !== null) {
                localVarHeaderParameter['X-Client-Token'] = String(xClientToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vpn_server_id': vpnServerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除VPN用户
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteVpnUser(deleteVpnUserRequest?: DeleteVpnUserRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/{project_id}/p2c-vpn-gateways/vpn-servers/{vpn_server_id}/users/{user_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let vpnServerId;
            
            let userId;

            if (deleteVpnUserRequest !== null && deleteVpnUserRequest !== undefined) {
                if (deleteVpnUserRequest instanceof DeleteVpnUserRequest) {
                    vpnServerId = deleteVpnUserRequest.vpnServerId;
                    userId = deleteVpnUserRequest.userId;
                } else {
                    vpnServerId = deleteVpnUserRequest['vpn_server_id'];
                    userId = deleteVpnUserRequest['user_id'];
                }
            }

        
            if (vpnServerId === null || vpnServerId === undefined) {
            throw new RequiredError('vpnServerId','Required parameter vpnServerId was null or undefined when calling deleteVpnUser.');
            }
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling deleteVpnUser.');
            }

            options.pathParams = { 'vpn_server_id': vpnServerId,'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询VPN用户列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVpnUsers(listVpnUsersRequest?: ListVpnUsersRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/p2c-vpn-gateways/vpn-servers/{vpn_server_id}/users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let vpnServerId;
            
            let limit;
            
            let marker;

            if (listVpnUsersRequest !== null && listVpnUsersRequest !== undefined) {
                if (listVpnUsersRequest instanceof ListVpnUsersRequest) {
                    vpnServerId = listVpnUsersRequest.vpnServerId;
                    limit = listVpnUsersRequest.limit;
                    marker = listVpnUsersRequest.marker;
                } else {
                    vpnServerId = listVpnUsersRequest['vpn_server_id'];
                    limit = listVpnUsersRequest['limit'];
                    marker = listVpnUsersRequest['marker'];
                }
            }

        
            if (vpnServerId === null || vpnServerId === undefined) {
            throw new RequiredError('vpnServerId','Required parameter vpnServerId was null or undefined when calling listVpnUsers.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'vpn_server_id': vpnServerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重置VPN用户密码
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetVpnUserPassword(resetVpnUserPasswordRequest?: ResetVpnUserPasswordRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/p2c-vpn-gateways/vpn-servers/{vpn_server_id}/users/{user_id}/reset-password",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let vpnServerId;
            
            let userId;

            if (resetVpnUserPasswordRequest !== null && resetVpnUserPasswordRequest !== undefined) {
                if (resetVpnUserPasswordRequest instanceof ResetVpnUserPasswordRequest) {
                    vpnServerId = resetVpnUserPasswordRequest.vpnServerId;
                    userId = resetVpnUserPasswordRequest.userId;
                    body = resetVpnUserPasswordRequest.body
                } else {
                    vpnServerId = resetVpnUserPasswordRequest['vpn_server_id'];
                    userId = resetVpnUserPasswordRequest['user_id'];
                    body = resetVpnUserPasswordRequest['body'];
                }
            }

        
            if (vpnServerId === null || vpnServerId === undefined) {
            throw new RequiredError('vpnServerId','Required parameter vpnServerId was null or undefined when calling resetVpnUserPassword.');
            }
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling resetVpnUserPassword.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vpn_server_id': vpnServerId,'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询VPN用户
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVpnUser(showVpnUserRequest?: ShowVpnUserRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/p2c-vpn-gateways/vpn-servers/{vpn_server_id}/users/{user_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let vpnServerId;
            
            let userId;

            if (showVpnUserRequest !== null && showVpnUserRequest !== undefined) {
                if (showVpnUserRequest instanceof ShowVpnUserRequest) {
                    vpnServerId = showVpnUserRequest.vpnServerId;
                    userId = showVpnUserRequest.userId;
                } else {
                    vpnServerId = showVpnUserRequest['vpn_server_id'];
                    userId = showVpnUserRequest['user_id'];
                }
            }

        
            if (vpnServerId === null || vpnServerId === undefined) {
            throw new RequiredError('vpnServerId','Required parameter vpnServerId was null or undefined when calling showVpnUser.');
            }
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling showVpnUser.');
            }

            options.pathParams = { 'vpn_server_id': vpnServerId,'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改VPN用户
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateVpnUser(updateVpnUserRequest?: UpdateVpnUserRequest) {
            const options = {
                method: "PUT",
                url: "/v5/{project_id}/p2c-vpn-gateways/vpn-servers/{vpn_server_id}/users/{user_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let vpnServerId;
            
            let userId;

            if (updateVpnUserRequest !== null && updateVpnUserRequest !== undefined) {
                if (updateVpnUserRequest instanceof UpdateVpnUserRequest) {
                    vpnServerId = updateVpnUserRequest.vpnServerId;
                    userId = updateVpnUserRequest.userId;
                    body = updateVpnUserRequest.body
                } else {
                    vpnServerId = updateVpnUserRequest['vpn_server_id'];
                    userId = updateVpnUserRequest['user_id'];
                    body = updateVpnUserRequest['body'];
                }
            }

        
            if (vpnServerId === null || vpnServerId === undefined) {
            throw new RequiredError('vpnServerId','Required parameter vpnServerId was null or undefined when calling updateVpnUser.');
            }
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling updateVpnUser.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vpn_server_id': vpnServerId,'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改VPN用户密码
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateVpnUserPassword(updateVpnUserPasswordRequest?: UpdateVpnUserPasswordRequest) {
            const options = {
                method: "PUT",
                url: "/v5/{project_id}/p2c-vpn-gateways/vpn-servers/{vpn_server_id}/users/{user_id}/password",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let vpnServerId;
            
            let userId;

            if (updateVpnUserPasswordRequest !== null && updateVpnUserPasswordRequest !== undefined) {
                if (updateVpnUserPasswordRequest instanceof UpdateVpnUserPasswordRequest) {
                    vpnServerId = updateVpnUserPasswordRequest.vpnServerId;
                    userId = updateVpnUserPasswordRequest.userId;
                    body = updateVpnUserPasswordRequest.body
                } else {
                    vpnServerId = updateVpnUserPasswordRequest['vpn_server_id'];
                    userId = updateVpnUserPasswordRequest['user_id'];
                    body = updateVpnUserPasswordRequest['body'];
                }
            }

        
            if (vpnServerId === null || vpnServerId === undefined) {
            throw new RequiredError('vpnServerId','Required parameter vpnServerId was null or undefined when calling updateVpnUserPassword.');
            }
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling updateVpnUserPassword.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vpn_server_id': vpnServerId,'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加VPN用户到组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addVpnUsersToGroup(addVpnUsersToGroupRequest?: AddVpnUsersToGroupRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/p2c-vpn-gateways/vpn-servers/{vpn_server_id}/groups/{group_id}/add-users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let vpnServerId;
            
            let groupId;

            if (addVpnUsersToGroupRequest !== null && addVpnUsersToGroupRequest !== undefined) {
                if (addVpnUsersToGroupRequest instanceof AddVpnUsersToGroupRequest) {
                    vpnServerId = addVpnUsersToGroupRequest.vpnServerId;
                    groupId = addVpnUsersToGroupRequest.groupId;
                    body = addVpnUsersToGroupRequest.body
                } else {
                    vpnServerId = addVpnUsersToGroupRequest['vpn_server_id'];
                    groupId = addVpnUsersToGroupRequest['group_id'];
                    body = addVpnUsersToGroupRequest['body'];
                }
            }

        
            if (vpnServerId === null || vpnServerId === undefined) {
            throw new RequiredError('vpnServerId','Required parameter vpnServerId was null or undefined when calling addVpnUsersToGroup.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling addVpnUsersToGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vpn_server_id': vpnServerId,'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建VPN用户组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createVpnUserGroup(createVpnUserGroupRequest?: CreateVpnUserGroupRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/p2c-vpn-gateways/vpn-servers/{vpn_server_id}/groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let vpnServerId;
            
            let xClientToken;

            if (createVpnUserGroupRequest !== null && createVpnUserGroupRequest !== undefined) {
                if (createVpnUserGroupRequest instanceof CreateVpnUserGroupRequest) {
                    vpnServerId = createVpnUserGroupRequest.vpnServerId;
                    body = createVpnUserGroupRequest.body
                    xClientToken = createVpnUserGroupRequest.xClientToken;
                } else {
                    vpnServerId = createVpnUserGroupRequest['vpn_server_id'];
                    body = createVpnUserGroupRequest['body'];
                    xClientToken = createVpnUserGroupRequest['X-Client-Token'];
                }
            }

        
            if (vpnServerId === null || vpnServerId === undefined) {
            throw new RequiredError('vpnServerId','Required parameter vpnServerId was null or undefined when calling createVpnUserGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xClientToken !== undefined && xClientToken !== null) {
                localVarHeaderParameter['X-Client-Token'] = String(xClientToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vpn_server_id': vpnServerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除VPN用户组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteVpnUserGroup(deleteVpnUserGroupRequest?: DeleteVpnUserGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/{project_id}/p2c-vpn-gateways/vpn-servers/{vpn_server_id}/groups/{group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let vpnServerId;
            
            let groupId;

            if (deleteVpnUserGroupRequest !== null && deleteVpnUserGroupRequest !== undefined) {
                if (deleteVpnUserGroupRequest instanceof DeleteVpnUserGroupRequest) {
                    vpnServerId = deleteVpnUserGroupRequest.vpnServerId;
                    groupId = deleteVpnUserGroupRequest.groupId;
                } else {
                    vpnServerId = deleteVpnUserGroupRequest['vpn_server_id'];
                    groupId = deleteVpnUserGroupRequest['group_id'];
                }
            }

        
            if (vpnServerId === null || vpnServerId === undefined) {
            throw new RequiredError('vpnServerId','Required parameter vpnServerId was null or undefined when calling deleteVpnUserGroup.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling deleteVpnUserGroup.');
            }

            options.pathParams = { 'vpn_server_id': vpnServerId,'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询VPN用户组列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVpnUserGroups(listVpnUserGroupsRequest?: ListVpnUserGroupsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/p2c-vpn-gateways/vpn-servers/{vpn_server_id}/groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let vpnServerId;
            
            let limit;
            
            let marker;

            if (listVpnUserGroupsRequest !== null && listVpnUserGroupsRequest !== undefined) {
                if (listVpnUserGroupsRequest instanceof ListVpnUserGroupsRequest) {
                    vpnServerId = listVpnUserGroupsRequest.vpnServerId;
                    limit = listVpnUserGroupsRequest.limit;
                    marker = listVpnUserGroupsRequest.marker;
                } else {
                    vpnServerId = listVpnUserGroupsRequest['vpn_server_id'];
                    limit = listVpnUserGroupsRequest['limit'];
                    marker = listVpnUserGroupsRequest['marker'];
                }
            }

        
            if (vpnServerId === null || vpnServerId === undefined) {
            throw new RequiredError('vpnServerId','Required parameter vpnServerId was null or undefined when calling listVpnUserGroups.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'vpn_server_id': vpnServerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询组内VPN用户
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVpnUsersInGroup(listVpnUsersInGroupRequest?: ListVpnUsersInGroupRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/p2c-vpn-gateways/vpn-servers/{vpn_server_id}/groups/{group_id}/users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let vpnServerId;
            
            let groupId;
            
            let limit;
            
            let marker;

            if (listVpnUsersInGroupRequest !== null && listVpnUsersInGroupRequest !== undefined) {
                if (listVpnUsersInGroupRequest instanceof ListVpnUsersInGroupRequest) {
                    vpnServerId = listVpnUsersInGroupRequest.vpnServerId;
                    groupId = listVpnUsersInGroupRequest.groupId;
                    limit = listVpnUsersInGroupRequest.limit;
                    marker = listVpnUsersInGroupRequest.marker;
                } else {
                    vpnServerId = listVpnUsersInGroupRequest['vpn_server_id'];
                    groupId = listVpnUsersInGroupRequest['group_id'];
                    limit = listVpnUsersInGroupRequest['limit'];
                    marker = listVpnUsersInGroupRequest['marker'];
                }
            }

        
            if (vpnServerId === null || vpnServerId === undefined) {
            throw new RequiredError('vpnServerId','Required parameter vpnServerId was null or undefined when calling listVpnUsersInGroup.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling listVpnUsersInGroup.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'vpn_server_id': vpnServerId,'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除组内VPN用户
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        removeVpnUsersFromGroup(removeVpnUsersFromGroupRequest?: RemoveVpnUsersFromGroupRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/p2c-vpn-gateways/vpn-servers/{vpn_server_id}/groups/{group_id}/remove-users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let vpnServerId;
            
            let groupId;

            if (removeVpnUsersFromGroupRequest !== null && removeVpnUsersFromGroupRequest !== undefined) {
                if (removeVpnUsersFromGroupRequest instanceof RemoveVpnUsersFromGroupRequest) {
                    vpnServerId = removeVpnUsersFromGroupRequest.vpnServerId;
                    groupId = removeVpnUsersFromGroupRequest.groupId;
                    body = removeVpnUsersFromGroupRequest.body
                } else {
                    vpnServerId = removeVpnUsersFromGroupRequest['vpn_server_id'];
                    groupId = removeVpnUsersFromGroupRequest['group_id'];
                    body = removeVpnUsersFromGroupRequest['body'];
                }
            }

        
            if (vpnServerId === null || vpnServerId === undefined) {
            throw new RequiredError('vpnServerId','Required parameter vpnServerId was null or undefined when calling removeVpnUsersFromGroup.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling removeVpnUsersFromGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vpn_server_id': vpnServerId,'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询VPN用户组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVpnUserGroup(showVpnUserGroupRequest?: ShowVpnUserGroupRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/p2c-vpn-gateways/vpn-servers/{vpn_server_id}/groups/{group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let vpnServerId;
            
            let groupId;

            if (showVpnUserGroupRequest !== null && showVpnUserGroupRequest !== undefined) {
                if (showVpnUserGroupRequest instanceof ShowVpnUserGroupRequest) {
                    vpnServerId = showVpnUserGroupRequest.vpnServerId;
                    groupId = showVpnUserGroupRequest.groupId;
                } else {
                    vpnServerId = showVpnUserGroupRequest['vpn_server_id'];
                    groupId = showVpnUserGroupRequest['group_id'];
                }
            }

        
            if (vpnServerId === null || vpnServerId === undefined) {
            throw new RequiredError('vpnServerId','Required parameter vpnServerId was null or undefined when calling showVpnUserGroup.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling showVpnUserGroup.');
            }

            options.pathParams = { 'vpn_server_id': vpnServerId,'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改VPN用户组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateVpnUserGroup(updateVpnUserGroupRequest?: UpdateVpnUserGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v5/{project_id}/p2c-vpn-gateways/vpn-servers/{vpn_server_id}/groups/{group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let vpnServerId;
            
            let groupId;

            if (updateVpnUserGroupRequest !== null && updateVpnUserGroupRequest !== undefined) {
                if (updateVpnUserGroupRequest instanceof UpdateVpnUserGroupRequest) {
                    vpnServerId = updateVpnUserGroupRequest.vpnServerId;
                    groupId = updateVpnUserGroupRequest.groupId;
                    body = updateVpnUserGroupRequest.body
                } else {
                    vpnServerId = updateVpnUserGroupRequest['vpn_server_id'];
                    groupId = updateVpnUserGroupRequest['group_id'];
                    body = updateVpnUserGroupRequest['body'];
                }
            }

        
            if (vpnServerId === null || vpnServerId === undefined) {
            throw new RequiredError('vpnServerId','Required parameter vpnServerId was null or undefined when calling updateVpnUserGroup.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling updateVpnUserGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vpn_server_id': vpnServerId,'group_id': groupId, };
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