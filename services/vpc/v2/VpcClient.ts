import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AcceptVpcPeeringRequest } from './model/AcceptVpcPeeringRequest';
import { AcceptVpcPeeringResponse } from './model/AcceptVpcPeeringResponse';
import { AllowedAddressPair } from './model/AllowedAddressPair';
import { AsscoiateReq } from './model/AsscoiateReq';
import { AssociateRouteTableAndSubnetReq } from './model/AssociateRouteTableAndSubnetReq';
import { AssociateRouteTableRequest } from './model/AssociateRouteTableRequest';
import { AssociateRouteTableResponse } from './model/AssociateRouteTableResponse';
import { BatchCreateSubnetTagsRequest } from './model/BatchCreateSubnetTagsRequest';
import { BatchCreateSubnetTagsRequestBody } from './model/BatchCreateSubnetTagsRequestBody';
import { BatchCreateSubnetTagsResponse } from './model/BatchCreateSubnetTagsResponse';
import { BatchCreateVpcTagsRequest } from './model/BatchCreateVpcTagsRequest';
import { BatchCreateVpcTagsRequestBody } from './model/BatchCreateVpcTagsRequestBody';
import { BatchCreateVpcTagsResponse } from './model/BatchCreateVpcTagsResponse';
import { BatchDeleteSubnetTagsRequest } from './model/BatchDeleteSubnetTagsRequest';
import { BatchDeleteSubnetTagsRequestBody } from './model/BatchDeleteSubnetTagsRequestBody';
import { BatchDeleteSubnetTagsResponse } from './model/BatchDeleteSubnetTagsResponse';
import { BatchDeleteVpcTagsRequest } from './model/BatchDeleteVpcTagsRequest';
import { BatchDeleteVpcTagsRequestBody } from './model/BatchDeleteVpcTagsRequestBody';
import { BatchDeleteVpcTagsResponse } from './model/BatchDeleteVpcTagsResponse';
import { BindingVifDetails } from './model/BindingVifDetails';
import { CreatePortOption } from './model/CreatePortOption';
import { CreatePortRequest } from './model/CreatePortRequest';
import { CreatePortRequestBody } from './model/CreatePortRequestBody';
import { CreatePortResponse } from './model/CreatePortResponse';
import { CreatePrivateipOption } from './model/CreatePrivateipOption';
import { CreatePrivateipRequest } from './model/CreatePrivateipRequest';
import { CreatePrivateipRequestBody } from './model/CreatePrivateipRequestBody';
import { CreatePrivateipResponse } from './model/CreatePrivateipResponse';
import { CreateRouteTableReq } from './model/CreateRouteTableReq';
import { CreateRouteTableRequest } from './model/CreateRouteTableRequest';
import { CreateRouteTableResponse } from './model/CreateRouteTableResponse';
import { CreateRoutetableReqBody } from './model/CreateRoutetableReqBody';
import { CreateSecurityGroupOption } from './model/CreateSecurityGroupOption';
import { CreateSecurityGroupRequest } from './model/CreateSecurityGroupRequest';
import { CreateSecurityGroupRequestBody } from './model/CreateSecurityGroupRequestBody';
import { CreateSecurityGroupResponse } from './model/CreateSecurityGroupResponse';
import { CreateSecurityGroupRuleOption } from './model/CreateSecurityGroupRuleOption';
import { CreateSecurityGroupRuleRequest } from './model/CreateSecurityGroupRuleRequest';
import { CreateSecurityGroupRuleRequestBody } from './model/CreateSecurityGroupRuleRequestBody';
import { CreateSecurityGroupRuleResponse } from './model/CreateSecurityGroupRuleResponse';
import { CreateSubnetOption } from './model/CreateSubnetOption';
import { CreateSubnetRequest } from './model/CreateSubnetRequest';
import { CreateSubnetRequestBody } from './model/CreateSubnetRequestBody';
import { CreateSubnetResponse } from './model/CreateSubnetResponse';
import { CreateSubnetTagRequest } from './model/CreateSubnetTagRequest';
import { CreateSubnetTagRequestBody } from './model/CreateSubnetTagRequestBody';
import { CreateSubnetTagResponse } from './model/CreateSubnetTagResponse';
import { CreateVpcOption } from './model/CreateVpcOption';
import { CreateVpcPeeringOption } from './model/CreateVpcPeeringOption';
import { CreateVpcPeeringRequest } from './model/CreateVpcPeeringRequest';
import { CreateVpcPeeringRequestBody } from './model/CreateVpcPeeringRequestBody';
import { CreateVpcPeeringResponse } from './model/CreateVpcPeeringResponse';
import { CreateVpcRequest } from './model/CreateVpcRequest';
import { CreateVpcRequestBody } from './model/CreateVpcRequestBody';
import { CreateVpcResourceTagRequest } from './model/CreateVpcResourceTagRequest';
import { CreateVpcResourceTagRequestBody } from './model/CreateVpcResourceTagRequestBody';
import { CreateVpcResourceTagResponse } from './model/CreateVpcResourceTagResponse';
import { CreateVpcResponse } from './model/CreateVpcResponse';
import { CreateVpcRouteOption } from './model/CreateVpcRouteOption';
import { CreateVpcRouteRequest } from './model/CreateVpcRouteRequest';
import { CreateVpcRouteRequestBody } from './model/CreateVpcRouteRequestBody';
import { CreateVpcRouteResponse } from './model/CreateVpcRouteResponse';
import { DeletePortRequest } from './model/DeletePortRequest';
import { DeletePortResponse } from './model/DeletePortResponse';
import { DeletePrivateipRequest } from './model/DeletePrivateipRequest';
import { DeletePrivateipResponse } from './model/DeletePrivateipResponse';
import { DeleteRouteTableRequest } from './model/DeleteRouteTableRequest';
import { DeleteRouteTableResponse } from './model/DeleteRouteTableResponse';
import { DeleteSecurityGroupRequest } from './model/DeleteSecurityGroupRequest';
import { DeleteSecurityGroupResponse } from './model/DeleteSecurityGroupResponse';
import { DeleteSecurityGroupRuleRequest } from './model/DeleteSecurityGroupRuleRequest';
import { DeleteSecurityGroupRuleResponse } from './model/DeleteSecurityGroupRuleResponse';
import { DeleteSubnetRequest } from './model/DeleteSubnetRequest';
import { DeleteSubnetResponse } from './model/DeleteSubnetResponse';
import { DeleteSubnetTagRequest } from './model/DeleteSubnetTagRequest';
import { DeleteSubnetTagResponse } from './model/DeleteSubnetTagResponse';
import { DeleteVpcPeeringRequest } from './model/DeleteVpcPeeringRequest';
import { DeleteVpcPeeringResponse } from './model/DeleteVpcPeeringResponse';
import { DeleteVpcRequest } from './model/DeleteVpcRequest';
import { DeleteVpcResponse } from './model/DeleteVpcResponse';
import { DeleteVpcRouteRequest } from './model/DeleteVpcRouteRequest';
import { DeleteVpcRouteResponse } from './model/DeleteVpcRouteResponse';
import { DeleteVpcTagRequest } from './model/DeleteVpcTagRequest';
import { DeleteVpcTagResponse } from './model/DeleteVpcTagResponse';
import { DisassociateRouteTableRequest } from './model/DisassociateRouteTableRequest';
import { DisassociateRouteTableResponse } from './model/DisassociateRouteTableResponse';
import { DnsAssignMent } from './model/DnsAssignMent';
import { ExtraDhcpOpt } from './model/ExtraDhcpOpt';
import { ExtraDhcpOption } from './model/ExtraDhcpOption';
import { FixedIp } from './model/FixedIp';
import { ListPortsRequest } from './model/ListPortsRequest';
import { ListPortsResponse } from './model/ListPortsResponse';
import { ListPrivateipsRequest } from './model/ListPrivateipsRequest';
import { ListPrivateipsResponse } from './model/ListPrivateipsResponse';
import { ListResourceResp } from './model/ListResourceResp';
import { ListRouteTablesRequest } from './model/ListRouteTablesRequest';
import { ListRouteTablesResponse } from './model/ListRouteTablesResponse';
import { ListSecurityGroupRulesRequest } from './model/ListSecurityGroupRulesRequest';
import { ListSecurityGroupRulesResponse } from './model/ListSecurityGroupRulesResponse';
import { ListSecurityGroupsRequest } from './model/ListSecurityGroupsRequest';
import { ListSecurityGroupsResponse } from './model/ListSecurityGroupsResponse';
import { ListSubnetTagsRequest } from './model/ListSubnetTagsRequest';
import { ListSubnetTagsResponse } from './model/ListSubnetTagsResponse';
import { ListSubnetsByTagsRequest } from './model/ListSubnetsByTagsRequest';
import { ListSubnetsByTagsRequestBody } from './model/ListSubnetsByTagsRequestBody';
import { ListSubnetsByTagsResponse } from './model/ListSubnetsByTagsResponse';
import { ListSubnetsRequest } from './model/ListSubnetsRequest';
import { ListSubnetsResponse } from './model/ListSubnetsResponse';
import { ListTag } from './model/ListTag';
import { ListVpcPeeringsRequest } from './model/ListVpcPeeringsRequest';
import { ListVpcPeeringsResponse } from './model/ListVpcPeeringsResponse';
import { ListVpcRoutesRequest } from './model/ListVpcRoutesRequest';
import { ListVpcRoutesResponse } from './model/ListVpcRoutesResponse';
import { ListVpcTagsRequest } from './model/ListVpcTagsRequest';
import { ListVpcTagsResponse } from './model/ListVpcTagsResponse';
import { ListVpcsByTagsRequest } from './model/ListVpcsByTagsRequest';
import { ListVpcsByTagsRequestBody } from './model/ListVpcsByTagsRequestBody';
import { ListVpcsByTagsResponse } from './model/ListVpcsByTagsResponse';
import { ListVpcsRequest } from './model/ListVpcsRequest';
import { ListVpcsResponse } from './model/ListVpcsResponse';
import { Match } from './model/Match';
import { NetworkIpAvailability } from './model/NetworkIpAvailability';
import { NeutronAddFirewallRuleRequest } from './model/NeutronAddFirewallRuleRequest';
import { NeutronAddFirewallRuleResponse } from './model/NeutronAddFirewallRuleResponse';
import { NeutronCreateFirewallGroupOption } from './model/NeutronCreateFirewallGroupOption';
import { NeutronCreateFirewallGroupRequest } from './model/NeutronCreateFirewallGroupRequest';
import { NeutronCreateFirewallGroupRequestBody } from './model/NeutronCreateFirewallGroupRequestBody';
import { NeutronCreateFirewallGroupResponse } from './model/NeutronCreateFirewallGroupResponse';
import { NeutronCreateFirewallPolicyOption } from './model/NeutronCreateFirewallPolicyOption';
import { NeutronCreateFirewallPolicyRequest } from './model/NeutronCreateFirewallPolicyRequest';
import { NeutronCreateFirewallPolicyRequestBody } from './model/NeutronCreateFirewallPolicyRequestBody';
import { NeutronCreateFirewallPolicyResponse } from './model/NeutronCreateFirewallPolicyResponse';
import { NeutronCreateFirewallRuleOption } from './model/NeutronCreateFirewallRuleOption';
import { NeutronCreateFirewallRuleRequest } from './model/NeutronCreateFirewallRuleRequest';
import { NeutronCreateFirewallRuleRequestBody } from './model/NeutronCreateFirewallRuleRequestBody';
import { NeutronCreateFirewallRuleResponse } from './model/NeutronCreateFirewallRuleResponse';
import { NeutronCreateSecurityGroupOption } from './model/NeutronCreateSecurityGroupOption';
import { NeutronCreateSecurityGroupRequest } from './model/NeutronCreateSecurityGroupRequest';
import { NeutronCreateSecurityGroupRequestBody } from './model/NeutronCreateSecurityGroupRequestBody';
import { NeutronCreateSecurityGroupResponse } from './model/NeutronCreateSecurityGroupResponse';
import { NeutronCreateSecurityGroupRuleOption } from './model/NeutronCreateSecurityGroupRuleOption';
import { NeutronCreateSecurityGroupRuleRequest } from './model/NeutronCreateSecurityGroupRuleRequest';
import { NeutronCreateSecurityGroupRuleRequestBody } from './model/NeutronCreateSecurityGroupRuleRequestBody';
import { NeutronCreateSecurityGroupRuleResponse } from './model/NeutronCreateSecurityGroupRuleResponse';
import { NeutronDeleteFirewallGroupRequest } from './model/NeutronDeleteFirewallGroupRequest';
import { NeutronDeleteFirewallGroupResponse } from './model/NeutronDeleteFirewallGroupResponse';
import { NeutronDeleteFirewallPolicyRequest } from './model/NeutronDeleteFirewallPolicyRequest';
import { NeutronDeleteFirewallPolicyResponse } from './model/NeutronDeleteFirewallPolicyResponse';
import { NeutronDeleteFirewallRuleRequest } from './model/NeutronDeleteFirewallRuleRequest';
import { NeutronDeleteFirewallRuleResponse } from './model/NeutronDeleteFirewallRuleResponse';
import { NeutronDeleteSecurityGroupRequest } from './model/NeutronDeleteSecurityGroupRequest';
import { NeutronDeleteSecurityGroupResponse } from './model/NeutronDeleteSecurityGroupResponse';
import { NeutronDeleteSecurityGroupRuleRequest } from './model/NeutronDeleteSecurityGroupRuleRequest';
import { NeutronDeleteSecurityGroupRuleResponse } from './model/NeutronDeleteSecurityGroupRuleResponse';
import { NeutronFirewallGroup } from './model/NeutronFirewallGroup';
import { NeutronFirewallPolicy } from './model/NeutronFirewallPolicy';
import { NeutronFirewallRule } from './model/NeutronFirewallRule';
import { NeutronInsertFirewallRuleRequestBody } from './model/NeutronInsertFirewallRuleRequestBody';
import { NeutronListFirewallGroupsRequest } from './model/NeutronListFirewallGroupsRequest';
import { NeutronListFirewallGroupsResponse } from './model/NeutronListFirewallGroupsResponse';
import { NeutronListFirewallPoliciesRequest } from './model/NeutronListFirewallPoliciesRequest';
import { NeutronListFirewallPoliciesResponse } from './model/NeutronListFirewallPoliciesResponse';
import { NeutronListFirewallRulesRequest } from './model/NeutronListFirewallRulesRequest';
import { NeutronListFirewallRulesResponse } from './model/NeutronListFirewallRulesResponse';
import { NeutronListSecurityGroupRulesRequest } from './model/NeutronListSecurityGroupRulesRequest';
import { NeutronListSecurityGroupRulesResponse } from './model/NeutronListSecurityGroupRulesResponse';
import { NeutronListSecurityGroupsRequest } from './model/NeutronListSecurityGroupsRequest';
import { NeutronListSecurityGroupsResponse } from './model/NeutronListSecurityGroupsResponse';
import { NeutronPageLink } from './model/NeutronPageLink';
import { NeutronRemoveFirewallRuleRequest } from './model/NeutronRemoveFirewallRuleRequest';
import { NeutronRemoveFirewallRuleRequestBody } from './model/NeutronRemoveFirewallRuleRequestBody';
import { NeutronRemoveFirewallRuleResponse } from './model/NeutronRemoveFirewallRuleResponse';
import { NeutronSecurityGroup } from './model/NeutronSecurityGroup';
import { NeutronSecurityGroupRule } from './model/NeutronSecurityGroupRule';
import { NeutronShowFirewallGroupRequest } from './model/NeutronShowFirewallGroupRequest';
import { NeutronShowFirewallGroupResponse } from './model/NeutronShowFirewallGroupResponse';
import { NeutronShowFirewallPolicyRequest } from './model/NeutronShowFirewallPolicyRequest';
import { NeutronShowFirewallPolicyResponse } from './model/NeutronShowFirewallPolicyResponse';
import { NeutronShowFirewallRuleRequest } from './model/NeutronShowFirewallRuleRequest';
import { NeutronShowFirewallRuleResponse } from './model/NeutronShowFirewallRuleResponse';
import { NeutronShowSecurityGroupRequest } from './model/NeutronShowSecurityGroupRequest';
import { NeutronShowSecurityGroupResponse } from './model/NeutronShowSecurityGroupResponse';
import { NeutronShowSecurityGroupRuleRequest } from './model/NeutronShowSecurityGroupRuleRequest';
import { NeutronShowSecurityGroupRuleResponse } from './model/NeutronShowSecurityGroupRuleResponse';
import { NeutronUpdateFirewallGroupOption } from './model/NeutronUpdateFirewallGroupOption';
import { NeutronUpdateFirewallGroupRequest } from './model/NeutronUpdateFirewallGroupRequest';
import { NeutronUpdateFirewallGroupRequestBody } from './model/NeutronUpdateFirewallGroupRequestBody';
import { NeutronUpdateFirewallGroupResponse } from './model/NeutronUpdateFirewallGroupResponse';
import { NeutronUpdateFirewallPolicyOption } from './model/NeutronUpdateFirewallPolicyOption';
import { NeutronUpdateFirewallPolicyRequest } from './model/NeutronUpdateFirewallPolicyRequest';
import { NeutronUpdateFirewallPolicyRequestBody } from './model/NeutronUpdateFirewallPolicyRequestBody';
import { NeutronUpdateFirewallPolicyResponse } from './model/NeutronUpdateFirewallPolicyResponse';
import { NeutronUpdateFirewallRuleOption } from './model/NeutronUpdateFirewallRuleOption';
import { NeutronUpdateFirewallRuleRequest } from './model/NeutronUpdateFirewallRuleRequest';
import { NeutronUpdateFirewallRuleRequestBody } from './model/NeutronUpdateFirewallRuleRequestBody';
import { NeutronUpdateFirewallRuleResponse } from './model/NeutronUpdateFirewallRuleResponse';
import { NeutronUpdateSecurityGroupOption } from './model/NeutronUpdateSecurityGroupOption';
import { NeutronUpdateSecurityGroupRequest } from './model/NeutronUpdateSecurityGroupRequest';
import { NeutronUpdateSecurityGroupRequestBody } from './model/NeutronUpdateSecurityGroupRequestBody';
import { NeutronUpdateSecurityGroupResponse } from './model/NeutronUpdateSecurityGroupResponse';
import { Port } from './model/Port';
import { Privateip } from './model/Privateip';
import { Quota } from './model/Quota';
import { RejectVpcPeeringRequest } from './model/RejectVpcPeeringRequest';
import { RejectVpcPeeringResponse } from './model/RejectVpcPeeringResponse';
import { ResourceResult } from './model/ResourceResult';
import { ResourceTag } from './model/ResourceTag';
import { Route } from './model/Route';
import { RouteTableListResp } from './model/RouteTableListResp';
import { RouteTableResp } from './model/RouteTableResp';
import { RouteTableRoute } from './model/RouteTableRoute';
import { RoutetableAssociateReqbody } from './model/RoutetableAssociateReqbody';
import { SecurityGroup } from './model/SecurityGroup';
import { SecurityGroupRule } from './model/SecurityGroupRule';
import { ShowNetworkIpAvailabilitiesRequest } from './model/ShowNetworkIpAvailabilitiesRequest';
import { ShowNetworkIpAvailabilitiesResponse } from './model/ShowNetworkIpAvailabilitiesResponse';
import { ShowPortRequest } from './model/ShowPortRequest';
import { ShowPortResponse } from './model/ShowPortResponse';
import { ShowPrivateipRequest } from './model/ShowPrivateipRequest';
import { ShowPrivateipResponse } from './model/ShowPrivateipResponse';
import { ShowQuotaRequest } from './model/ShowQuotaRequest';
import { ShowQuotaResponse } from './model/ShowQuotaResponse';
import { ShowRouteTableRequest } from './model/ShowRouteTableRequest';
import { ShowRouteTableResponse } from './model/ShowRouteTableResponse';
import { ShowSecurityGroupRequest } from './model/ShowSecurityGroupRequest';
import { ShowSecurityGroupResponse } from './model/ShowSecurityGroupResponse';
import { ShowSecurityGroupRuleRequest } from './model/ShowSecurityGroupRuleRequest';
import { ShowSecurityGroupRuleResponse } from './model/ShowSecurityGroupRuleResponse';
import { ShowSubnetRequest } from './model/ShowSubnetRequest';
import { ShowSubnetResponse } from './model/ShowSubnetResponse';
import { ShowSubnetTagsRequest } from './model/ShowSubnetTagsRequest';
import { ShowSubnetTagsResponse } from './model/ShowSubnetTagsResponse';
import { ShowVpcPeeringRequest } from './model/ShowVpcPeeringRequest';
import { ShowVpcPeeringResponse } from './model/ShowVpcPeeringResponse';
import { ShowVpcRequest } from './model/ShowVpcRequest';
import { ShowVpcResponse } from './model/ShowVpcResponse';
import { ShowVpcRouteRequest } from './model/ShowVpcRouteRequest';
import { ShowVpcRouteResponse } from './model/ShowVpcRouteResponse';
import { ShowVpcTagsRequest } from './model/ShowVpcTagsRequest';
import { ShowVpcTagsResponse } from './model/ShowVpcTagsResponse';
import { Subnet } from './model/Subnet';
import { SubnetIpAvailability } from './model/SubnetIpAvailability';
import { SubnetList } from './model/SubnetList';
import { SubnetResult } from './model/SubnetResult';
import { UpdatePortOption } from './model/UpdatePortOption';
import { UpdatePortRequest } from './model/UpdatePortRequest';
import { UpdatePortRequestBody } from './model/UpdatePortRequestBody';
import { UpdatePortResponse } from './model/UpdatePortResponse';
import { UpdateRouteTableReq } from './model/UpdateRouteTableReq';
import { UpdateRouteTableRequest } from './model/UpdateRouteTableRequest';
import { UpdateRouteTableResponse } from './model/UpdateRouteTableResponse';
import { UpdateRoutetableReqBody } from './model/UpdateRoutetableReqBody';
import { UpdateSubnetOption } from './model/UpdateSubnetOption';
import { UpdateSubnetRequest } from './model/UpdateSubnetRequest';
import { UpdateSubnetRequestBody } from './model/UpdateSubnetRequestBody';
import { UpdateSubnetResponse } from './model/UpdateSubnetResponse';
import { UpdateVpcOption } from './model/UpdateVpcOption';
import { UpdateVpcPeeringOption } from './model/UpdateVpcPeeringOption';
import { UpdateVpcPeeringRequest } from './model/UpdateVpcPeeringRequest';
import { UpdateVpcPeeringRequestBody } from './model/UpdateVpcPeeringRequestBody';
import { UpdateVpcPeeringResponse } from './model/UpdateVpcPeeringResponse';
import { UpdateVpcRequest } from './model/UpdateVpcRequest';
import { UpdateVpcRequestBody } from './model/UpdateVpcRequestBody';
import { UpdateVpcResponse } from './model/UpdateVpcResponse';
import { Vpc } from './model/Vpc';
import { VpcInfo } from './model/VpcInfo';
import { VpcPeering } from './model/VpcPeering';
import { VpcRoute } from './model/VpcRoute';

export class VpcClient {
    public static newBuilder(): ClientBuilder<VpcClient> {
        return new ClientBuilder<VpcClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 租户A名下的VPC申请和租户B的VPC建立对等连接，需要等待租户B接受该请求。此接口用于租户接受其他租户发起的对等连接请求。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 接受对等连接请求
     * @param {string} peeringId 对等连接ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public acceptVpcPeering(acceptVpcPeeringRequest?: AcceptVpcPeeringRequest): Promise<AcceptVpcPeeringResponse> {
        const options = ParamCreater().acceptVpcPeering(acceptVpcPeeringRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 路由表关联子网。子网关联路由表A后，再关联B，不需要先跟路由表A解关联再关联路由表B
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 子网关联路由表
     * @param {string} routetableId 路由表ID
     * @param {RoutetableAssociateReqbody} routetableAssociate 关联路由表与子网请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associateRouteTable(associateRouteTableRequest?: AssociateRouteTableRequest): Promise<AssociateRouteTableResponse> {
        const options = ParamCreater().associateRouteTable(associateRouteTableRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 为指定的子网资源实例批量添加标签。
     * 此接口为幂等接口：创建时如果请求体中存在重复key则报错。创建时，不允许设置重复key数据，如果数据库已存在该key，就覆盖value的值。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量创建子网资源标签
     * @param {string} subnetId 子网ID
     * @param {BatchCreateSubnetTagsRequestBody} batchCreateSubnetTagsRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateSubnetTags(batchCreateSubnetTagsRequest?: BatchCreateSubnetTagsRequest): Promise<void> {
        const options = ParamCreater().batchCreateSubnetTags(batchCreateSubnetTagsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 为指定的子网资源实例批量删除标签
     * 此接口为幂等接口：删除时，如果删除的标签不存在，默认处理成功；删除时不对标签字符集范围做校验。删除时tags结构体不能缺失，key不能为空，或者空字符串。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除子网资源标签
     * @param {string} subnetId 子网ID
     * @param {BatchDeleteSubnetTagsRequestBody} batchDeleteSubnetTagsRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteSubnetTags(batchDeleteSubnetTagsRequest?: BatchDeleteSubnetTagsRequest): Promise<void> {
        const options = ParamCreater().batchDeleteSubnetTags(batchDeleteSubnetTagsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建端口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建端口
     * @param {CreatePortRequestBody} port 创建端口对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPort(createPortRequest?: CreatePortRequest): Promise<CreatePortResponse> {
        const options = ParamCreater().createPort(createPortRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建路由表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建路由表
     * @param {CreateRoutetableReqBody} routetable 创建路由表对象，参见CreateRouteTableReq对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRouteTable(createRouteTableRequest?: CreateRouteTableRequest): Promise<CreateRouteTableResponse> {
        const options = ParamCreater().createRouteTable(createRouteTableRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建安全组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建安全组
     * @param {CreateSecurityGroupRequestBody} securityGroup 创建安全组对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSecurityGroup(createSecurityGroupRequest?: CreateSecurityGroupRequest): Promise<CreateSecurityGroupResponse> {
        const options = ParamCreater().createSecurityGroup(createSecurityGroupRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建安全组规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建安全组规则
     * @param {CreateSecurityGroupRuleRequestBody} securityGroupRule 创建安全组规则对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSecurityGroupRule(createSecurityGroupRuleRequest?: CreateSecurityGroupRuleRequest): Promise<CreateSecurityGroupRuleResponse> {
        const options = ParamCreater().createSecurityGroupRule(createSecurityGroupRuleRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建子网。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建子网
     * @param {CreateSubnetRequestBody} subnet 创建子网对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSubnet(createSubnetRequest?: CreateSubnetRequest): Promise<CreateSubnetResponse> {
        const options = ParamCreater().createSubnet(createSubnetRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 给指定子网资源实例增加标签信息。
     * 此接口为幂等接口：创建时，如果创建的标签已经存在（key相同），则覆盖。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建子网资源标签
     * @param {string} subnetId 子网ID
     * @param {CreateSubnetTagRequestBody} createSubnetTagRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSubnetTag(createSubnetTagRequest?: CreateSubnetTagRequest): Promise<void> {
        const options = ParamCreater().createSubnetTag(createSubnetTagRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建对等连接。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建对等连接
     * @param {CreateVpcPeeringRequestBody} peering peering对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createVpcPeering(createVpcPeeringRequest?: CreateVpcPeeringRequest): Promise<CreateVpcPeeringResponse> {
        const options = ParamCreater().createVpcPeering(createVpcPeeringRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除端口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除端口
     * @param {string} portId 端口ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePort(deletePortRequest?: DeletePortRequest): Promise<void> {
        const options = ParamCreater().deletePort(deletePortRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除路由表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除路由表
     * @param {string} routetableId 路由表ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRouteTable(deleteRouteTableRequest?: DeleteRouteTableRequest): Promise<void> {
        const options = ParamCreater().deleteRouteTable(deleteRouteTableRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除安全组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除安全组
     * @param {string} securityGroupId 安全组ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSecurityGroup(deleteSecurityGroupRequest?: DeleteSecurityGroupRequest): Promise<void> {
        const options = ParamCreater().deleteSecurityGroup(deleteSecurityGroupRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除安全组规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除安全组规则
     * @param {string} securityGroupRuleId 安全组规则ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSecurityGroupRule(deleteSecurityGroupRuleRequest?: DeleteSecurityGroupRuleRequest): Promise<void> {
        const options = ParamCreater().deleteSecurityGroupRule(deleteSecurityGroupRuleRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除子网
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除子网
     * @param {string} vpcId 子网对应的vpc_id
     * @param {string} subnetId 子网ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSubnet(deleteSubnetRequest?: DeleteSubnetRequest): Promise<void> {
        const options = ParamCreater().deleteSubnet(deleteSubnetRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定子网资源实例的标签信息。
     * 该接口为幂等接口：删除的key不存在报404，Key不能为空或者空字符串
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除子网资源标签
     * @param {string} subnetId 子网ID
     * @param {string} key 功能说明：键值
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSubnetTag(deleteSubnetTagRequest?: DeleteSubnetTagRequest): Promise<void> {
        const options = ParamCreater().deleteSubnetTag(deleteSubnetTagRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除对等连接。
     * 可以在在本端或对端任何一端删除对等连接。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除对等连接
     * @param {string} peeringId 对等连接ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteVpcPeering(deleteVpcPeeringRequest?: DeleteVpcPeeringRequest): Promise<void> {
        const options = ParamCreater().deleteVpcPeering(deleteVpcPeeringRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 子网解关联路由表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 子网解关联路由表
     * @param {string} routetableId 路由表ID
     * @param {RoutetableAssociateReqbody} routetableAssociate 关联路由表与子网请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disassociateRouteTable(disassociateRouteTableRequest?: DisassociateRouteTableRequest): Promise<DisassociateRouteTableResponse> {
        const options = ParamCreater().disassociateRouteTable(disassociateRouteTableRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询提交请求的租户的所有端口，单次查询最多返回2000条数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询端口列表
     * @param {string} [name] 功能说明：按照name过滤查询  取值范围：最大长度不超过255
     * @param {string} [id] 按照port_id过滤查询
     * @param {number} [limit] 每页返回的个数
     * @param {boolean} [adminStateUp] 按照admin_state_up进行过滤
     * @param {string} [networkId] 按照network_id过滤查询
     * @param {string} [macAddress] 按照mac_address过滤查询
     * @param {string} [deviceId] 按照device_id过滤查询
     * @param {'network:dhcp' | 'neutron:VIP_PORT' | 'network:router_interface_distributed' | 'network:router_centralized_snat'} [deviceOwner] 按照device_owner过滤查询
     * @param {'ACTIVE' | 'BUILD' | 'DOWN'} [status] 功能说明：按照status过滤查询  取值范围：ACTIVE、BUILD、DOWN
     * @param {string} [marker] 分页查询起始的资源ID，为空时查询第一页
     * @param {string} [fixedIps] 按照fixed_ips&#x3D;ip_address或者fixed_ips&#x3D;subnet_id过滤查询
     * @param {string} [enterpriseProjectId] 功能说明：企业项目ID，用于基于企业项目的权限管理。  取值范围：最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。“0”表示默认企业项目。  若需要查询当前用户所有企业项目绑定的端口，请传参all_granted_eps。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPorts(listPortsRequest?: ListPortsRequest): Promise<ListPortsResponse> {
        const options = ParamCreater().listPorts(listPortsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询提交请求的帐户的所有路由表列表，并根据过滤条件进行过滤
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询路由表列表
     * @param {number} [limit] 每页返回的个数
     * @param {string} [marker] 分页查询起始的资源ID，为空时为查询第一页
     * @param {string} [id] 路由表ID，可过滤对应ID的路由表
     * @param {string} [vpcId] 虚拟私有云ID，可过滤对应虚拟私有云包含的路由表
     * @param {string} [subnetId] 子网ID，可过滤对应子网关联的路由表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRouteTables(listRouteTablesRequest?: ListRouteTablesRequest): Promise<ListRouteTablesResponse> {
        const options = ParamCreater().listRouteTables(listRouteTablesRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询安全组规则列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询安全组规则列表
     * @param {string} [marker] 功能说明：分页查询起始的资源ID，为空时查询第一页
     * @param {number} [limit] 每页返回的个数
     * @param {string} [securityGroupId] 安全组ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSecurityGroupRules(listSecurityGroupRulesRequest?: ListSecurityGroupRulesRequest): Promise<ListSecurityGroupRulesResponse> {
        const options = ParamCreater().listSecurityGroupRules(listSecurityGroupRulesRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询安全组列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询安全组列表
     * @param {number} [limit] 每页返回的个数
     * @param {string} [marker] 分页查询起始的资源ID，为空时查询第一页
     * @param {string} [vpcId] 按照vpc_id过滤查询
     * @param {string} [enterpriseProjectId] 功能说明：企业项目ID。可以使用该字段过滤某个企业项目下的安全组。  取值范围：最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。“0”表示默认企业项目。若需要查询当前用户所有企业项目绑定的安全组，或者企业项目子账号需要进行安全组列表展示，请传参all_granted_eps。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSecurityGroups(listSecurityGroupsRequest?: ListSecurityGroupsRequest): Promise<ListSecurityGroupsResponse> {
        const options = ParamCreater().listSecurityGroups(listSecurityGroupsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户在指定区域和实例类型的所有标签集合
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询子网项目标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSubnetTags(): Promise<ListSubnetTagsResponse> {
        const options = ParamCreater().listSubnetTags();
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询子网列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询子网列表
     * @param {number} [limit] 每页返回的个数
     * @param {string} [marker] 分页查询起始的资源id，为空时查询第一页
     * @param {string} [vpcId] 按照vpc_id过滤查询  企业项目细粒度授权场景下，该字段必传
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSubnets(listSubnetsRequest?: ListSubnetsRequest): Promise<ListSubnetsResponse> {
        const options = ParamCreater().listSubnets(listSubnetsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 使用标签过滤实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询子网资源实例
     * @param {ListSubnetsByTagsRequestBody} listSubnetsByTagsRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSubnetsByTags(listSubnetsByTagsRequest?: ListSubnetsByTagsRequest): Promise<ListSubnetsByTagsResponse> {
        const options = ParamCreater().listSubnetsByTags(listSubnetsByTagsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询提交请求的租户的所有对等连接。根据过滤条件进行过滤。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询对等连接列表
     * @param {number} [limit] 每页返回的个数
     * @param {string} [marker] 分页查询起始的资源ID，为空时查询第一页
     * @param {string} [id] 按照peering_id过滤查询
     * @param {string} [name] 功能说明：按照peering_name过查询  取值范围：最大长度不超过64
     * @param {'PENDING_ACCEPTANCE' | 'REJECTED' | 'EXPIRED' | 'DELETED' | 'ACTIVE'} [status] 根据status进行过滤  - PENDING_ACCEPTANCE：等待接受 - REJECTED：已拒绝。 - EXPIRED：已过期。 - DELETED：已删除。 - ACTIVE：活动的。
     * @param {string} [tenantId] 按照项目ID过滤查询
     * @param {string} [vpcId] 根据vpc ID过滤查询
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVpcPeerings(listVpcPeeringsRequest?: ListVpcPeeringsRequest): Promise<ListVpcPeeringsResponse> {
        const options = ParamCreater().listVpcPeerings(listVpcPeeringsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 租户A名下的VPC申请和租户B的VPC建立对等连接，需要等待租户B接受该请求。此接口用于租户拒绝其他租户发起的对等连接请求。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 拒绝对等连接请求
     * @param {string} peeringId 对等连接ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public rejectVpcPeering(rejectVpcPeeringRequest?: RejectVpcPeeringRequest): Promise<RejectVpcPeeringResponse> {
        const options = ParamCreater().rejectVpcPeering(rejectVpcPeeringRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询单个端口详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询端口
     * @param {string} portId 端口ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPort(showPortRequest?: ShowPortRequest): Promise<ShowPortResponse> {
        const options = ParamCreater().showPort(showPortRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询单租户在VPC服务下的网络资源配额，包括vpc配额、子网配额、安全组配额、安全组规则配额、弹性公网IP配额，vpn配额等。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询配额
     * @param {'vpc' | 'subnet' | 'securityGroup' | 'securityGroupRule' | 'publicIp' | 'vpn' | 'vpngw' | 'vpcPeer' | 'firewall' | 'shareBandwidth' | 'shareBandwidthIP' | 'loadbalancer' | 'listener' | 'physicalConnect' | 'virtualInterface' | 'vpcContainRoutetable' | 'routetableContainRoutes'} [type] 功能说明：根据type过滤查询指定类型的配额 取值范围：vpc，subnet，securityGroup，securityGroupRule，publicIp，vpn，vpngw，vpcPeer，firewall，shareBandwidth，shareBandwidthIP，loadbalancer，listener，physicalConnect，virtualInterface，vpcContainRoutetable，routetableContainRoutes
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showQuota(showQuotaRequest?: ShowQuotaRequest): Promise<ShowQuotaResponse> {
        const options = ParamCreater().showQuota(showQuotaRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询路由表详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询路由表
     * @param {string} routetableId 路由表ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRouteTable(showRouteTableRequest?: ShowRouteTableRequest): Promise<ShowRouteTableResponse> {
        const options = ParamCreater().showRouteTable(showRouteTableRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询单个安全组详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询安全组
     * @param {string} securityGroupId 安全组ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSecurityGroup(showSecurityGroupRequest?: ShowSecurityGroupRequest): Promise<ShowSecurityGroupResponse> {
        const options = ParamCreater().showSecurityGroup(showSecurityGroupRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询单个安全组规则详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询安全组规则
     * @param {string} securityGroupRuleId 安全组规则ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSecurityGroupRule(showSecurityGroupRuleRequest?: ShowSecurityGroupRuleRequest): Promise<ShowSecurityGroupRuleResponse> {
        const options = ParamCreater().showSecurityGroupRule(showSecurityGroupRuleRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询子网详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询子网
     * @param {string} subnetId 子网ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSubnet(showSubnetRequest?: ShowSubnetRequest): Promise<ShowSubnetResponse> {
        const options = ParamCreater().showSubnet(showSubnetRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定子网实例的标签信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询子网资源标签
     * @param {string} subnetId 子网ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSubnetTags(showSubnetTagsRequest?: ShowSubnetTagsRequest): Promise<ShowSubnetTagsResponse> {
        const options = ParamCreater().showSubnetTags(showSubnetTagsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询对等连接详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询对等连接
     * @param {string} peeringId 对等连接ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVpcPeering(showVpcPeeringRequest?: ShowVpcPeeringRequest): Promise<ShowVpcPeeringResponse> {
        const options = ParamCreater().showVpcPeering(showVpcPeeringRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新端口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新端口
     * @param {string} portId 端口ID
     * @param {UpdatePortRequestBody} port 更新端口对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePort(updatePortRequest?: UpdatePortRequest): Promise<UpdatePortResponse> {
        const options = ParamCreater().updatePort(updatePortRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新路由表，包括可以更新路由表的名称，描述，以及新增、更新、删除路由条目
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新路由表
     * @param {string} routetableId 路由表ID
     * @param {UpdateRoutetableReqBody} routetable 更新路由表对象，参见UpdateRouteTableReq对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateRouteTable(updateRouteTableRequest?: UpdateRouteTableRequest): Promise<UpdateRouteTableResponse> {
        const options = ParamCreater().updateRouteTable(updateRouteTableRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新子网。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新子网
     * @param {string} vpcId 子网对应的vpc_id
     * @param {string} subnetId 子网ID
     * @param {UpdateSubnetRequestBody} subnet 更新子网对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSubnet(updateSubnetRequest?: UpdateSubnetRequest): Promise<UpdateSubnetResponse> {
        const options = ParamCreater().updateSubnet(updateSubnetRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新对等连接。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新对等连接
     * @param {string} peeringId 对等连接ID
     * @param {UpdateVpcPeeringRequestBody} peering 更新peering对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateVpcPeering(updateVpcPeeringRequest?: UpdateVpcPeeringRequest): Promise<UpdateVpcPeeringResponse> {
        const options = ParamCreater().updateVpcPeering(updateVpcPeeringRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 申请私有IP。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 申请私有IP
     * @param {CreatePrivateipRequestBody} privateips 申请私有IP对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPrivateip(createPrivateipRequest?: CreatePrivateipRequest): Promise<CreatePrivateipResponse> {
        const options = ParamCreater().createPrivateip(createPrivateipRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除私有IP。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除私有IP
     * @param {string} privateipId 私有IP ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePrivateip(deletePrivateipRequest?: DeletePrivateipRequest): Promise<void> {
        const options = ParamCreater().deletePrivateip(deletePrivateipRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定子网下的私有IP列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询私有IP列表
     * @param {string} subnetId 私有IP所在子网的唯一标识
     * @param {number} [limit] 每页返回的个数
     * @param {string} [marker] 分页查询起始的资源id，为空时查询第一页
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPrivateips(listPrivateipsRequest?: ListPrivateipsRequest): Promise<ListPrivateipsResponse> {
        const options = ParamCreater().listPrivateips(listPrivateipsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 显示一个指定网络中的IPv4地址使用情况。
     * 包括此网络中的IP总数以及已用IP总数，以及网络下每一个子网的IP地址总数和可用IP地址总数。
     * 
     * &gt; 须知
     * 
     * - 系统预留地址指的是子网的第1个以及最后4个地址，一般用于网关、DHCP等服务。
     * - 这里以及下文描述的IP地址总数、已用IP地址总数不包含系统预留地址。
     * - 在分配IP时，用户可以指定系统预留的IP地址。但是不论IP是如何分配的，只要是处于系统预留IP地址段的IP均不会被统计到已用IP地址数目和IP地址总数中。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询网络IP使用情况
     * @param {string} networkId 网络ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showNetworkIpAvailabilities(showNetworkIpAvailabilitiesRequest?: ShowNetworkIpAvailabilitiesRequest): Promise<ShowNetworkIpAvailabilitiesResponse> {
        const options = ParamCreater().showNetworkIpAvailabilities(showNetworkIpAvailabilitiesRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 指定ID查询私有IP。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询私有IP
     * @param {string} privateipId 私有IP ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPrivateip(showPrivateipRequest?: ShowPrivateipRequest): Promise<ShowPrivateipResponse> {
        const options = ParamCreater().showPrivateip(showPrivateipRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建安全组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建安全组
     * @param {NeutronCreateSecurityGroupRequestBody} securityGroup 安全组对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronCreateSecurityGroup(neutronCreateSecurityGroupRequest?: NeutronCreateSecurityGroupRequest): Promise<NeutronCreateSecurityGroupResponse> {
        const options = ParamCreater().neutronCreateSecurityGroup(neutronCreateSecurityGroupRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建安全组规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建安全组规则
     * @param {NeutronCreateSecurityGroupRuleRequestBody} securityGroupRule 安全组规则对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronCreateSecurityGroupRule(neutronCreateSecurityGroupRuleRequest?: NeutronCreateSecurityGroupRuleRequest): Promise<NeutronCreateSecurityGroupRuleResponse> {
        const options = ParamCreater().neutronCreateSecurityGroupRule(neutronCreateSecurityGroupRuleRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除安全组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除安全组
     * @param {string} securityGroupId 安全组ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronDeleteSecurityGroup(neutronDeleteSecurityGroupRequest?: NeutronDeleteSecurityGroupRequest): Promise<void> {
        const options = ParamCreater().neutronDeleteSecurityGroup(neutronDeleteSecurityGroupRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除安全组规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除安全组规则
     * @param {string} securityGroupRuleId 安全组规则ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronDeleteSecurityGroupRule(neutronDeleteSecurityGroupRuleRequest?: NeutronDeleteSecurityGroupRuleRequest): Promise<void> {
        const options = ParamCreater().neutronDeleteSecurityGroupRule(neutronDeleteSecurityGroupRuleRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询提交请求的租户有权限查看的所有安全组规则。单次查询最多返回2000条数据，超过2000后会返回分页标记。分页查询请参考分页查询
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询安全组规则列表
     * @param {number} [limit] 每页返回的个数
     * @param {string} [marker] 分页查询起始的资源ID，为空时查询第一页
     * @param {string} [id] 按照安全组规则对应的id过滤查询结果
     * @param {string} [direction] 按照安全组规则的方向过滤查询结果，支持ingress和egress进行过滤
     * @param {string} [protocol] 按照安全组规则的IP协议过滤查询结果
     * @param {string} [ethertype] 按照网络类型过滤查询结果，支持IPv4或者IPv6
     * @param {string} [description] 按照安全组规则的描述过滤查询结果
     * @param {string} [remoteIpPrefix] 按照与此安全组规则匹配的远端IP网段过滤查询结果
     * @param {string} [remoteGroupId] 按照与此安全组规则关联的远端安全组ID过滤查询结果
     * @param {string} [securityGroupId] 按照与此安全组规则所属的安全组ID过滤查询结果
     * @param {string} [portRangeMax] 按照最大端口过滤查询结果
     * @param {string} [portRangeMin] 按照最小端口过滤查询结果
     * @param {string} [tenantId] 按照安全组规则所属的项目ID过滤查询结果
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronListSecurityGroupRules(neutronListSecurityGroupRulesRequest?: NeutronListSecurityGroupRulesRequest): Promise<NeutronListSecurityGroupRulesResponse> {
        const options = ParamCreater().neutronListSecurityGroupRules(neutronListSecurityGroupRulesRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询提交请求租户的所有安全组，单次查询最多返回2000条数据，超过2000后会返回分页标记。分页查询请参考分页查询 。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询安全组列表
     * @param {number} [limit] 每页返回的个数
     * @param {string} [marker] 分页查询起始的资源ID，为空时查询第一页
     * @param {string} [id] 按照安全组对应的ID过滤查询
     * @param {string} [name] 按照安全组的名称过滤查询
     * @param {string} [description] 按照安全组的描述过滤查询
     * @param {string} [tenantId] 按照安全组所属的项目ID过滤查询
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronListSecurityGroups(neutronListSecurityGroupsRequest?: NeutronListSecurityGroupsRequest): Promise<NeutronListSecurityGroupsResponse> {
        const options = ParamCreater().neutronListSecurityGroups(neutronListSecurityGroupsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询安全组详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询安全组
     * @param {string} securityGroupId 安全组ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronShowSecurityGroup(neutronShowSecurityGroupRequest?: NeutronShowSecurityGroupRequest): Promise<NeutronShowSecurityGroupResponse> {
        const options = ParamCreater().neutronShowSecurityGroup(neutronShowSecurityGroupRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询安全组规则详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询安全组规则
     * @param {string} securityGroupRuleId 安全组规则ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronShowSecurityGroupRule(neutronShowSecurityGroupRuleRequest?: NeutronShowSecurityGroupRuleRequest): Promise<NeutronShowSecurityGroupRuleResponse> {
        const options = ParamCreater().neutronShowSecurityGroupRule(neutronShowSecurityGroupRuleRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新安全组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新安全组
     * @param {string} securityGroupId 安全组ID
     * @param {NeutronUpdateSecurityGroupRequestBody} securityGroup 安全组
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronUpdateSecurityGroup(neutronUpdateSecurityGroupRequest?: NeutronUpdateSecurityGroupRequest): Promise<NeutronUpdateSecurityGroupResponse> {
        const options = ParamCreater().neutronUpdateSecurityGroup(neutronUpdateSecurityGroupRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 插入一条网络ACL规则到某一网络ACL策略中。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 插入网络ACL规则
     * @param {string} firewallPolicyId 网络ACL防火墙策略ID
     * @param {NeutronInsertFirewallRuleRequestBody} insertFirewallRule 插入ACL规则请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronAddFirewallRule(neutronAddFirewallRuleRequest?: NeutronAddFirewallRuleRequest): Promise<NeutronAddFirewallRuleResponse> {
        const options = ParamCreater().neutronAddFirewallRule(neutronAddFirewallRuleRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建网络ACL组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建网络ACL组
     * @param {NeutronCreateFirewallGroupRequestBody} firewallGroup firewall group对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronCreateFirewallGroup(neutronCreateFirewallGroupRequest?: NeutronCreateFirewallGroupRequest): Promise<NeutronCreateFirewallGroupResponse> {
        const options = ParamCreater().neutronCreateFirewallGroup(neutronCreateFirewallGroupRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建网络ACL策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建网络ACL策略
     * @param {NeutronCreateFirewallPolicyRequestBody} firewallPolicy firewall policy对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronCreateFirewallPolicy(neutronCreateFirewallPolicyRequest?: NeutronCreateFirewallPolicyRequest): Promise<NeutronCreateFirewallPolicyResponse> {
        const options = ParamCreater().neutronCreateFirewallPolicy(neutronCreateFirewallPolicyRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建网络ACL规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建网络ACL规则
     * @param {NeutronCreateFirewallRuleRequestBody} firewallRule firewall rule对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronCreateFirewallRule(neutronCreateFirewallRuleRequest?: NeutronCreateFirewallRuleRequest): Promise<NeutronCreateFirewallRuleResponse> {
        const options = ParamCreater().neutronCreateFirewallRule(neutronCreateFirewallRuleRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除网络ACL组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除网络ACL组
     * @param {string} firewallGroupId 网络ACL防火墙组ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronDeleteFirewallGroup(neutronDeleteFirewallGroupRequest?: NeutronDeleteFirewallGroupRequest): Promise<void> {
        const options = ParamCreater().neutronDeleteFirewallGroup(neutronDeleteFirewallGroupRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除网络ACL策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除网络ACL策略
     * @param {string} firewallPolicyId 网络ACL防火墙策略ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronDeleteFirewallPolicy(neutronDeleteFirewallPolicyRequest?: NeutronDeleteFirewallPolicyRequest): Promise<void> {
        const options = ParamCreater().neutronDeleteFirewallPolicy(neutronDeleteFirewallPolicyRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除网络ACL规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除网络ACL规则
     * @param {string} firewallRuleId 网络ACL防火墙规则ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronDeleteFirewallRule(neutronDeleteFirewallRuleRequest?: NeutronDeleteFirewallRuleRequest): Promise<void> {
        const options = ParamCreater().neutronDeleteFirewallRule(neutronDeleteFirewallRuleRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询提交请求的租户有权限操作的所有网络ACL组信息。单次查询最多返回2000条数据，超过2000后会返回分页标记。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有网络ACL组
     * @param {string} [marker] 分页查询起始的资源ID，为空时查询第一页
     * @param {number} [limit] 每页返回的个数
     * @param {Array<string>} [id] 使用id过滤网络ACL组
     * @param {Array<string>} [name] 使用name过滤ACL组
     * @param {Array<string>} [description] 使用description过滤ACL组
     * @param {string} [ingressFirewallPolicyId] 使用入方向的网络ACL策略ID过滤网络ACL组
     * @param {string} [egressFirewallPolicyId] 使用出方向的网络ACL策略过滤查询网络ACL组
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronListFirewallGroups(neutronListFirewallGroupsRequest?: NeutronListFirewallGroupsRequest): Promise<NeutronListFirewallGroupsResponse> {
        const options = ParamCreater().neutronListFirewallGroups(neutronListFirewallGroupsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询提交请求的租户有权限操作的所有网络ACL策略信息。单次查询最多返回2000条数据，超过2000后会返回分页标记。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有网络ACL策略
     * @param {number} [limit] 每页返回的个数
     * @param {string} [marker] 分页查询起始的资源ID，为空时查询第一页
     * @param {Array<string>} [id] 使用网络ACL策略ID过滤网络ACL策略
     * @param {Array<string>} [name] 使用name过滤网络ACL策略
     * @param {Array<string>} [description] 使用网络ACL策略描述过滤查询网络ACL策略
     * @param {string} [tenantId] 使用tenant_id过滤查询网络ACL策略
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronListFirewallPolicies(neutronListFirewallPoliciesRequest?: NeutronListFirewallPoliciesRequest): Promise<NeutronListFirewallPoliciesResponse> {
        const options = ParamCreater().neutronListFirewallPolicies(neutronListFirewallPoliciesRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询提交请求的租户有权限操作的所有网络ACL规则信息。单次查询最多返回2000条数据，超过2000后会返回分页标记。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有网络ACL规则
     * @param {string} [marker] 分页查询起始的资源ID，为空时查询第一页
     * @param {number} [limit] 每页返回的个数
     * @param {Array<string>} [id] 使用网络ACL规则ID过滤网络ACL规则
     * @param {Array<string>} [name] 使用网络ACL规则name过滤网络ACL规则
     * @param {Array<string>} [description] 使用网络ACL规则的description过滤网络ACL规则
     * @param {string} [action] 使用action过滤查询网络ACL规则
     * @param {string} [tenantId] 使用tenant_id过滤查询网络ACL规则
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronListFirewallRules(neutronListFirewallRulesRequest?: NeutronListFirewallRulesRequest): Promise<NeutronListFirewallRulesResponse> {
        const options = ParamCreater().neutronListFirewallRules(neutronListFirewallRulesRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 从某一网络ACL策略中移除一条网络ACL规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 移除网络ACL规则
     * @param {string} firewallPolicyId 网络ACL防火墙策略ID
     * @param {NeutronRemoveFirewallRuleRequestBody} removeFirewallRule 移除ACL规则请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronRemoveFirewallRule(neutronRemoveFirewallRuleRequest?: NeutronRemoveFirewallRuleRequest): Promise<NeutronRemoveFirewallRuleResponse> {
        const options = ParamCreater().neutronRemoveFirewallRule(neutronRemoveFirewallRuleRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询特定网络ACL组详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询特定网络ACL组详情
     * @param {string} firewallGroupId 网络ACL防火墙组ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronShowFirewallGroup(neutronShowFirewallGroupRequest?: NeutronShowFirewallGroupRequest): Promise<NeutronShowFirewallGroupResponse> {
        const options = ParamCreater().neutronShowFirewallGroup(neutronShowFirewallGroupRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询特定网络ACL策略详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询特定网络ACL策略详情
     * @param {string} firewallPolicyId 网络ACL防火墙策略ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronShowFirewallPolicy(neutronShowFirewallPolicyRequest?: NeutronShowFirewallPolicyRequest): Promise<NeutronShowFirewallPolicyResponse> {
        const options = ParamCreater().neutronShowFirewallPolicy(neutronShowFirewallPolicyRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询特定网络ACL规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询特定网络ACL规则
     * @param {string} firewallRuleId 网络ACL规则ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronShowFirewallRule(neutronShowFirewallRuleRequest?: NeutronShowFirewallRuleRequest): Promise<NeutronShowFirewallRuleResponse> {
        const options = ParamCreater().neutronShowFirewallRule(neutronShowFirewallRuleRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新网络ACL组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新网络ACL组
     * @param {string} firewallGroupId 网络ACL防火墙组ID
     * @param {NeutronUpdateFirewallGroupRequestBody} firewallGroup firewall group对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronUpdateFirewallGroup(neutronUpdateFirewallGroupRequest?: NeutronUpdateFirewallGroupRequest): Promise<NeutronUpdateFirewallGroupResponse> {
        const options = ParamCreater().neutronUpdateFirewallGroup(neutronUpdateFirewallGroupRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新网络ACL策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新网络ACL策略
     * @param {string} firewallPolicyId 网络ACL防火墙策略ID
     * @param {NeutronUpdateFirewallPolicyRequestBody} firewallPolicy firewall policy对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronUpdateFirewallPolicy(neutronUpdateFirewallPolicyRequest?: NeutronUpdateFirewallPolicyRequest): Promise<NeutronUpdateFirewallPolicyResponse> {
        const options = ParamCreater().neutronUpdateFirewallPolicy(neutronUpdateFirewallPolicyRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新网络ACL规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新网络ACL规则
     * @param {string} firewallRuleId 网络ACL防火墙规则ID
     * @param {NeutronUpdateFirewallRuleRequestBody} firewallRule firewall rule对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronUpdateFirewallRule(neutronUpdateFirewallRuleRequest?: NeutronUpdateFirewallRuleRequest): Promise<NeutronUpdateFirewallRuleResponse> {
        const options = ParamCreater().neutronUpdateFirewallRule(neutronUpdateFirewallRuleRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 为指定的VPC资源实例批量添加标签。
     * 此接口为幂等接口：创建时如果请求体中存在重复key则报错。创建时，不允许设置重复key数据，如果数据库已存在该key，就覆盖value的值。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量创建VPC资源标签
     * @param {string} vpcId 功能说明：虚拟私有云唯一标识 取值范围：合法UUID 约束：ID对应的VPC必须存在
     * @param {BatchCreateVpcTagsRequestBody} batchCreateVpcTagsRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateVpcTags(batchCreateVpcTagsRequest?: BatchCreateVpcTagsRequest): Promise<void> {
        const options = ParamCreater().batchCreateVpcTags(batchCreateVpcTagsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 为指定的VPC资源实例批量删除标签。
     * 此接口为幂等接口：删除时，如果删除的标签不存在，默认处理成功；删除时不对标签字符集范围做校验。删除时tags结构体不能缺失，key不能为空，或者空字符串。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除VPC资源标签
     * @param {string} vpcId 功能说明：虚拟私有云唯一标识 取值范围：合法UUID 约束：ID对应的VPC必须存在
     * @param {BatchDeleteVpcTagsRequestBody} batchDeleteVpcTagsRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteVpcTags(batchDeleteVpcTagsRequest?: BatchDeleteVpcTagsRequest): Promise<void> {
        const options = ParamCreater().batchDeleteVpcTags(batchDeleteVpcTagsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建虚拟私有云。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建VPC
     * @param {CreateVpcRequestBody} vpc 创建VPC对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createVpc(createVpcRequest?: CreateVpcRequest): Promise<CreateVpcResponse> {
        const options = ParamCreater().createVpc(createVpcRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 给指定VPC资源实例增加标签信息
     * 此接口为幂等接口：创建时，如果创建的标签已经存在（key相同），则覆盖。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建VPC资源标签
     * @param {string} vpcId 功能说明：虚拟私有云唯一标识 取值范围：合法UUID 约束：ID对应的VPC必须存在
     * @param {CreateVpcResourceTagRequestBody} createVpcResourceTagRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createVpcResourceTag(createVpcResourceTagRequest?: CreateVpcResourceTagRequest): Promise<void> {
        const options = ParamCreater().createVpcResourceTag(createVpcResourceTagRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建路由
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建VPC路由
     * @param {CreateVpcRouteRequestBody} route route对象，必选字段：destination、nexthop、type、vpc_id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createVpcRoute(createVpcRouteRequest?: CreateVpcRouteRequest): Promise<CreateVpcRouteResponse> {
        const options = ParamCreater().createVpcRoute(createVpcRouteRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除虚拟私有云。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除VPC
     * @param {string} vpcId 虚拟私有云ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteVpc(deleteVpcRequest?: DeleteVpcRequest): Promise<void> {
        const options = ParamCreater().deleteVpc(deleteVpcRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除路由
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除VPC路由
     * @param {string} routeId 路由ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteVpcRoute(deleteVpcRouteRequest?: DeleteVpcRouteRequest): Promise<void> {
        const options = ParamCreater().deleteVpcRoute(deleteVpcRouteRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定VPC资源实例的标签信息
     * 该接口为幂等接口：删除的key不存在报404，Key不能为空或者空字符串
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除VPC资源标签
     * @param {string} vpcId 功能说明：虚拟私有云唯一标识 取值范围：合法UUID 约束：ID对应的VPC必须存在
     * @param {string} key 功能说明：标签键
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteVpcTag(deleteVpcTagRequest?: DeleteVpcTagRequest): Promise<void> {
        const options = ParamCreater().deleteVpcTag(deleteVpcTagRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询提交请求的租户的所有路由列表，并根据过滤条件进行过滤。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询VPC路由列表
     * @param {number} [limit] 每页返回的个数
     * @param {string} [marker] 分页查询起始的资源ID，为空时查询第一页
     * @param {string} [id] 按照routes_id过滤查询
     * @param {'peering'} [type] 功能说明：按照路由类型过滤查询  取值范围：peering
     * @param {string} [vpcId] 按照vpc_id过滤查询
     * @param {string} [destination] 按照路由目的地址CIDR过滤查询
     * @param {string} [tenantId] 按照项目ID过滤查询
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVpcRoutes(listVpcRoutesRequest?: ListVpcRoutesRequest): Promise<ListVpcRoutesResponse> {
        const options = ParamCreater().listVpcRoutes(listVpcRoutesRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户在指定区域和实例类型的所有标签集合
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询VPC项目标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVpcTags(): Promise<ListVpcTagsResponse> {
        const options = ParamCreater().listVpcTags();
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询虚拟私有云列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询VPC列表
     * @param {number} [limit] 每页返回的个数
     * @param {string} [marker] 分页查询起始的资源ID，为空时查询第一页
     * @param {string} [id] 功能说明：虚拟私有云ID。可以使用该字段过滤某个ID的虚拟私有云。
     * @param {string} [enterpriseProjectId] 功能说明：企业项目ID。可以使用该字段过滤某个企业项目下的虚拟私有云。若未传值则默认返回所有企业项目绑定的虚拟私有云。  取值范围：最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。“0”表示默认企业项目。若需要查询当前用户所有企业项目绑定的虚拟私有云，请传参all_granted_eps。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVpcs(listVpcsRequest?: ListVpcsRequest): Promise<ListVpcsResponse> {
        const options = ParamCreater().listVpcs(listVpcsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 使用标签过滤实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询VPC资源实例
     * @param {ListVpcsByTagsRequestBody} listVpcsByTagsRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVpcsByTags(listVpcsByTagsRequest?: ListVpcsByTagsRequest): Promise<ListVpcsByTagsResponse> {
        const options = ParamCreater().listVpcsByTags(listVpcsByTagsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询虚拟私有云。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询VPC
     * @param {string} vpcId 虚拟私有云ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVpc(showVpcRequest?: ShowVpcRequest): Promise<ShowVpcResponse> {
        const options = ParamCreater().showVpc(showVpcRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询路由详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询VPC路由
     * @param {string} routeId 路由ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVpcRoute(showVpcRouteRequest?: ShowVpcRouteRequest): Promise<ShowVpcRouteResponse> {
        const options = ParamCreater().showVpcRoute(showVpcRouteRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定VPC实例的标签信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询VPC资源标签
     * @param {string} vpcId 功能说明：虚拟私有云唯一标识 取值范围：合法UUID 约束：ID对应的VPC必须存在
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVpcTags(showVpcTagsRequest?: ShowVpcTagsRequest): Promise<ShowVpcTagsResponse> {
        const options = ParamCreater().showVpcTags(showVpcTagsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新虚拟私有云。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新VPC
     * @param {string} vpcId 虚拟私有云ID
     * @param {UpdateVpcRequestBody} vpc 更新VPC对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateVpc(updateVpcRequest?: UpdateVpcRequest): Promise<UpdateVpcResponse> {
        const options = ParamCreater().updateVpc(updateVpcRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 租户A名下的VPC申请和租户B的VPC建立对等连接，需要等待租户B接受该请求。此接口用于租户接受其他租户发起的对等连接请求。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        acceptVpcPeering(acceptVpcPeeringRequest?: AcceptVpcPeeringRequest) {
            const options = {
                method: "PUT",
                url: "/v2.0/vpc/peerings/{peering_id}/accept",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let peeringId;

            if (acceptVpcPeeringRequest !== null && acceptVpcPeeringRequest !== undefined) {
                if (acceptVpcPeeringRequest instanceof AcceptVpcPeeringRequest) {
                    peeringId = acceptVpcPeeringRequest.peeringId;
                } else {
                    peeringId = acceptVpcPeeringRequest['peering_id'];
                }
            }

        
            if (peeringId === null || peeringId === undefined) {
            throw new RequiredError('peeringId','Required parameter peeringId was null or undefined when calling acceptVpcPeering.');
            }

            options.pathParams = { 'peering_id': peeringId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 路由表关联子网。子网关联路由表A后，再关联B，不需要先跟路由表A解关联再关联路由表B
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associateRouteTable(associateRouteTableRequest?: AssociateRouteTableRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/routetables/{routetable_id}/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let routetableId;

            if (associateRouteTableRequest !== null && associateRouteTableRequest !== undefined) {
                if (associateRouteTableRequest instanceof AssociateRouteTableRequest) {
                    routetableId = associateRouteTableRequest.routetableId;
                    body = associateRouteTableRequest.body
                } else {
                    routetableId = associateRouteTableRequest['routetable_id'];
                    body = associateRouteTableRequest['body'];
                }
            }

        
            if (routetableId === null || routetableId === undefined) {
            throw new RequiredError('routetableId','Required parameter routetableId was null or undefined when calling associateRouteTable.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'routetable_id': routetableId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 为指定的子网资源实例批量添加标签。
         * 此接口为幂等接口：创建时如果请求体中存在重复key则报错。创建时，不允许设置重复key数据，如果数据库已存在该key，就覆盖value的值。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateSubnetTags(batchCreateSubnetTagsRequest?: BatchCreateSubnetTagsRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/subnets/{subnet_id}/tags/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let subnetId;

            if (batchCreateSubnetTagsRequest !== null && batchCreateSubnetTagsRequest !== undefined) {
                if (batchCreateSubnetTagsRequest instanceof BatchCreateSubnetTagsRequest) {
                    subnetId = batchCreateSubnetTagsRequest.subnetId;
                    body = batchCreateSubnetTagsRequest.body
                } else {
                    subnetId = batchCreateSubnetTagsRequest['subnet_id'];
                    body = batchCreateSubnetTagsRequest['body'];
                }
            }

        
            if (subnetId === null || subnetId === undefined) {
            throw new RequiredError('subnetId','Required parameter subnetId was null or undefined when calling batchCreateSubnetTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'subnet_id': subnetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 为指定的子网资源实例批量删除标签
         * 此接口为幂等接口：删除时，如果删除的标签不存在，默认处理成功；删除时不对标签字符集范围做校验。删除时tags结构体不能缺失，key不能为空，或者空字符串。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteSubnetTags(batchDeleteSubnetTagsRequest?: BatchDeleteSubnetTagsRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/subnets/{subnet_id}/tags/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let subnetId;

            if (batchDeleteSubnetTagsRequest !== null && batchDeleteSubnetTagsRequest !== undefined) {
                if (batchDeleteSubnetTagsRequest instanceof BatchDeleteSubnetTagsRequest) {
                    subnetId = batchDeleteSubnetTagsRequest.subnetId;
                    body = batchDeleteSubnetTagsRequest.body
                } else {
                    subnetId = batchDeleteSubnetTagsRequest['subnet_id'];
                    body = batchDeleteSubnetTagsRequest['body'];
                }
            }

        
            if (subnetId === null || subnetId === undefined) {
            throw new RequiredError('subnetId','Required parameter subnetId was null or undefined when calling batchDeleteSubnetTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'subnet_id': subnetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建端口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPort(createPortRequest?: CreatePortRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/ports",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createPortRequest !== null && createPortRequest !== undefined) {
                if (createPortRequest instanceof CreatePortRequest) {
                    body = createPortRequest.body
                } else {
                    body = createPortRequest['body'];
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
         * 创建路由表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createRouteTable(createRouteTableRequest?: CreateRouteTableRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/routetables",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createRouteTableRequest !== null && createRouteTableRequest !== undefined) {
                if (createRouteTableRequest instanceof CreateRouteTableRequest) {
                    body = createRouteTableRequest.body
                } else {
                    body = createRouteTableRequest['body'];
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
         * 创建安全组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSecurityGroup(createSecurityGroupRequest?: CreateSecurityGroupRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/security-groups",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createSecurityGroupRequest !== null && createSecurityGroupRequest !== undefined) {
                if (createSecurityGroupRequest instanceof CreateSecurityGroupRequest) {
                    body = createSecurityGroupRequest.body
                } else {
                    body = createSecurityGroupRequest['body'];
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
         * 创建安全组规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSecurityGroupRule(createSecurityGroupRuleRequest?: CreateSecurityGroupRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/security-group-rules",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createSecurityGroupRuleRequest !== null && createSecurityGroupRuleRequest !== undefined) {
                if (createSecurityGroupRuleRequest instanceof CreateSecurityGroupRuleRequest) {
                    body = createSecurityGroupRuleRequest.body
                } else {
                    body = createSecurityGroupRuleRequest['body'];
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
         * 创建子网。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSubnet(createSubnetRequest?: CreateSubnetRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/subnets",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createSubnetRequest !== null && createSubnetRequest !== undefined) {
                if (createSubnetRequest instanceof CreateSubnetRequest) {
                    body = createSubnetRequest.body
                } else {
                    body = createSubnetRequest['body'];
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
         * 给指定子网资源实例增加标签信息。
         * 此接口为幂等接口：创建时，如果创建的标签已经存在（key相同），则覆盖。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSubnetTag(createSubnetTagRequest?: CreateSubnetTagRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/subnets/{subnet_id}/tags",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let subnetId;

            if (createSubnetTagRequest !== null && createSubnetTagRequest !== undefined) {
                if (createSubnetTagRequest instanceof CreateSubnetTagRequest) {
                    subnetId = createSubnetTagRequest.subnetId;
                    body = createSubnetTagRequest.body
                } else {
                    subnetId = createSubnetTagRequest['subnet_id'];
                    body = createSubnetTagRequest['body'];
                }
            }

        
            if (subnetId === null || subnetId === undefined) {
            throw new RequiredError('subnetId','Required parameter subnetId was null or undefined when calling createSubnetTag.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'subnet_id': subnetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建对等连接。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createVpcPeering(createVpcPeeringRequest?: CreateVpcPeeringRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/vpc/peerings",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createVpcPeeringRequest !== null && createVpcPeeringRequest !== undefined) {
                if (createVpcPeeringRequest instanceof CreateVpcPeeringRequest) {
                    body = createVpcPeeringRequest.body
                } else {
                    body = createVpcPeeringRequest['body'];
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
         * 删除端口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePort(deletePortRequest?: DeletePortRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/ports/{port_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let portId;

            if (deletePortRequest !== null && deletePortRequest !== undefined) {
                if (deletePortRequest instanceof DeletePortRequest) {
                    portId = deletePortRequest.portId;
                } else {
                    portId = deletePortRequest['port_id'];
                }
            }

        
            if (portId === null || portId === undefined) {
            throw new RequiredError('portId','Required parameter portId was null or undefined when calling deletePort.');
            }

            options.pathParams = { 'port_id': portId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除路由表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteRouteTable(deleteRouteTableRequest?: DeleteRouteTableRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/routetables/{routetable_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let routetableId;

            if (deleteRouteTableRequest !== null && deleteRouteTableRequest !== undefined) {
                if (deleteRouteTableRequest instanceof DeleteRouteTableRequest) {
                    routetableId = deleteRouteTableRequest.routetableId;
                } else {
                    routetableId = deleteRouteTableRequest['routetable_id'];
                }
            }

        
            if (routetableId === null || routetableId === undefined) {
            throw new RequiredError('routetableId','Required parameter routetableId was null or undefined when calling deleteRouteTable.');
            }

            options.pathParams = { 'routetable_id': routetableId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除安全组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSecurityGroup(deleteSecurityGroupRequest?: DeleteSecurityGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/security-groups/{security_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let securityGroupId;

            if (deleteSecurityGroupRequest !== null && deleteSecurityGroupRequest !== undefined) {
                if (deleteSecurityGroupRequest instanceof DeleteSecurityGroupRequest) {
                    securityGroupId = deleteSecurityGroupRequest.securityGroupId;
                } else {
                    securityGroupId = deleteSecurityGroupRequest['security_group_id'];
                }
            }

        
            if (securityGroupId === null || securityGroupId === undefined) {
            throw new RequiredError('securityGroupId','Required parameter securityGroupId was null or undefined when calling deleteSecurityGroup.');
            }

            options.pathParams = { 'security_group_id': securityGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除安全组规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSecurityGroupRule(deleteSecurityGroupRuleRequest?: DeleteSecurityGroupRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/security-group-rules/{security_group_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let securityGroupRuleId;

            if (deleteSecurityGroupRuleRequest !== null && deleteSecurityGroupRuleRequest !== undefined) {
                if (deleteSecurityGroupRuleRequest instanceof DeleteSecurityGroupRuleRequest) {
                    securityGroupRuleId = deleteSecurityGroupRuleRequest.securityGroupRuleId;
                } else {
                    securityGroupRuleId = deleteSecurityGroupRuleRequest['security_group_rule_id'];
                }
            }

        
            if (securityGroupRuleId === null || securityGroupRuleId === undefined) {
            throw new RequiredError('securityGroupRuleId','Required parameter securityGroupRuleId was null or undefined when calling deleteSecurityGroupRule.');
            }

            options.pathParams = { 'security_group_rule_id': securityGroupRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除子网
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSubnet(deleteSubnetRequest?: DeleteSubnetRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/vpcs/{vpc_id}/subnets/{subnet_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let vpcId;
            let subnetId;

            if (deleteSubnetRequest !== null && deleteSubnetRequest !== undefined) {
                if (deleteSubnetRequest instanceof DeleteSubnetRequest) {
                    vpcId = deleteSubnetRequest.vpcId;
                    subnetId = deleteSubnetRequest.subnetId;
                } else {
                    vpcId = deleteSubnetRequest['vpc_id'];
                    subnetId = deleteSubnetRequest['subnet_id'];
                }
            }

        
            if (vpcId === null || vpcId === undefined) {
            throw new RequiredError('vpcId','Required parameter vpcId was null or undefined when calling deleteSubnet.');
            }
            if (subnetId === null || subnetId === undefined) {
            throw new RequiredError('subnetId','Required parameter subnetId was null or undefined when calling deleteSubnet.');
            }

            options.pathParams = { 'vpc_id': vpcId,'subnet_id': subnetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定子网资源实例的标签信息。
         * 该接口为幂等接口：删除的key不存在报404，Key不能为空或者空字符串
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSubnetTag(deleteSubnetTagRequest?: DeleteSubnetTagRequest) {
            const options = {
                method: "DELETE",
                url: "/v2.0/{project_id}/subnets/{subnet_id}/tags/{key}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let subnetId;
            let key;

            if (deleteSubnetTagRequest !== null && deleteSubnetTagRequest !== undefined) {
                if (deleteSubnetTagRequest instanceof DeleteSubnetTagRequest) {
                    subnetId = deleteSubnetTagRequest.subnetId;
                    key = deleteSubnetTagRequest.key;
                } else {
                    subnetId = deleteSubnetTagRequest['subnet_id'];
                    key = deleteSubnetTagRequest['key'];
                }
            }

        
            if (subnetId === null || subnetId === undefined) {
            throw new RequiredError('subnetId','Required parameter subnetId was null or undefined when calling deleteSubnetTag.');
            }
            if (key === null || key === undefined) {
            throw new RequiredError('key','Required parameter key was null or undefined when calling deleteSubnetTag.');
            }

            options.pathParams = { 'subnet_id': subnetId,'key': key, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除对等连接。
         * 可以在在本端或对端任何一端删除对等连接。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteVpcPeering(deleteVpcPeeringRequest?: DeleteVpcPeeringRequest) {
            const options = {
                method: "DELETE",
                url: "/v2.0/vpc/peerings/{peering_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let peeringId;

            if (deleteVpcPeeringRequest !== null && deleteVpcPeeringRequest !== undefined) {
                if (deleteVpcPeeringRequest instanceof DeleteVpcPeeringRequest) {
                    peeringId = deleteVpcPeeringRequest.peeringId;
                } else {
                    peeringId = deleteVpcPeeringRequest['peering_id'];
                }
            }

        
            if (peeringId === null || peeringId === undefined) {
            throw new RequiredError('peeringId','Required parameter peeringId was null or undefined when calling deleteVpcPeering.');
            }

            options.pathParams = { 'peering_id': peeringId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 子网解关联路由表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disassociateRouteTable(disassociateRouteTableRequest?: DisassociateRouteTableRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/routetables/{routetable_id}/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let routetableId;

            if (disassociateRouteTableRequest !== null && disassociateRouteTableRequest !== undefined) {
                if (disassociateRouteTableRequest instanceof DisassociateRouteTableRequest) {
                    routetableId = disassociateRouteTableRequest.routetableId;
                    body = disassociateRouteTableRequest.body
                } else {
                    routetableId = disassociateRouteTableRequest['routetable_id'];
                    body = disassociateRouteTableRequest['body'];
                }
            }

        
            if (routetableId === null || routetableId === undefined) {
            throw new RequiredError('routetableId','Required parameter routetableId was null or undefined when calling disassociateRouteTable.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'routetable_id': routetableId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询提交请求的租户的所有端口，单次查询最多返回2000条数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPorts(listPortsRequest?: ListPortsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/ports",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let name;
            let id;
            let limit;
            let adminStateUp;
            let networkId;
            let macAddress;
            let deviceId;
            let deviceOwner;
            let status;
            let marker;
            let fixedIps;
            let enterpriseProjectId;

            if (listPortsRequest !== null && listPortsRequest !== undefined) {
                if (listPortsRequest instanceof ListPortsRequest) {
                    name = listPortsRequest.name;
                    id = listPortsRequest.id;
                    limit = listPortsRequest.limit;
                    adminStateUp = listPortsRequest.adminStateUp;
                    networkId = listPortsRequest.networkId;
                    macAddress = listPortsRequest.macAddress;
                    deviceId = listPortsRequest.deviceId;
                    deviceOwner = listPortsRequest.deviceOwner;
                    status = listPortsRequest.status;
                    marker = listPortsRequest.marker;
                    fixedIps = listPortsRequest.fixedIps;
                    enterpriseProjectId = listPortsRequest.enterpriseProjectId;
                } else {
                    name = listPortsRequest['name'];
                    id = listPortsRequest['id'];
                    limit = listPortsRequest['limit'];
                    adminStateUp = listPortsRequest['admin_state_up'];
                    networkId = listPortsRequest['network_id'];
                    macAddress = listPortsRequest['mac_address'];
                    deviceId = listPortsRequest['device_id'];
                    deviceOwner = listPortsRequest['device_owner'];
                    status = listPortsRequest['status'];
                    marker = listPortsRequest['marker'];
                    fixedIps = listPortsRequest['fixed_ips'];
                    enterpriseProjectId = listPortsRequest['enterprise_project_id'];
                }
            }

        
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (adminStateUp !== null && adminStateUp !== undefined) {
                localVarQueryParameter['admin_state_up'] = adminStateUp;
            }
            if (networkId !== null && networkId !== undefined) {
                localVarQueryParameter['network_id'] = networkId;
            }
            if (macAddress !== null && macAddress !== undefined) {
                localVarQueryParameter['mac_address'] = macAddress;
            }
            if (deviceId !== null && deviceId !== undefined) {
                localVarQueryParameter['device_id'] = deviceId;
            }
            if (deviceOwner !== null && deviceOwner !== undefined) {
                localVarQueryParameter['device_owner'] = deviceOwner;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (fixedIps !== null && fixedIps !== undefined) {
                localVarQueryParameter['fixed_ips'] = fixedIps;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询提交请求的帐户的所有路由表列表，并根据过滤条件进行过滤
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRouteTables(listRouteTablesRequest?: ListRouteTablesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/routetables",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let limit;
            let marker;
            let id;
            let vpcId;
            let subnetId;

            if (listRouteTablesRequest !== null && listRouteTablesRequest !== undefined) {
                if (listRouteTablesRequest instanceof ListRouteTablesRequest) {
                    limit = listRouteTablesRequest.limit;
                    marker = listRouteTablesRequest.marker;
                    id = listRouteTablesRequest.id;
                    vpcId = listRouteTablesRequest.vpcId;
                    subnetId = listRouteTablesRequest.subnetId;
                } else {
                    limit = listRouteTablesRequest['limit'];
                    marker = listRouteTablesRequest['marker'];
                    id = listRouteTablesRequest['id'];
                    vpcId = listRouteTablesRequest['vpc_id'];
                    subnetId = listRouteTablesRequest['subnet_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (vpcId !== null && vpcId !== undefined) {
                localVarQueryParameter['vpc_id'] = vpcId;
            }
            if (subnetId !== null && subnetId !== undefined) {
                localVarQueryParameter['subnet_id'] = subnetId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询安全组规则列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSecurityGroupRules(listSecurityGroupRulesRequest?: ListSecurityGroupRulesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/security-group-rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let marker;
            let limit;
            let securityGroupId;

            if (listSecurityGroupRulesRequest !== null && listSecurityGroupRulesRequest !== undefined) {
                if (listSecurityGroupRulesRequest instanceof ListSecurityGroupRulesRequest) {
                    marker = listSecurityGroupRulesRequest.marker;
                    limit = listSecurityGroupRulesRequest.limit;
                    securityGroupId = listSecurityGroupRulesRequest.securityGroupId;
                } else {
                    marker = listSecurityGroupRulesRequest['marker'];
                    limit = listSecurityGroupRulesRequest['limit'];
                    securityGroupId = listSecurityGroupRulesRequest['security_group_id'];
                }
            }

        
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (securityGroupId !== null && securityGroupId !== undefined) {
                localVarQueryParameter['security_group_id'] = securityGroupId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询安全组列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSecurityGroups(listSecurityGroupsRequest?: ListSecurityGroupsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/security-groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let limit;
            let marker;
            let vpcId;
            let enterpriseProjectId;

            if (listSecurityGroupsRequest !== null && listSecurityGroupsRequest !== undefined) {
                if (listSecurityGroupsRequest instanceof ListSecurityGroupsRequest) {
                    limit = listSecurityGroupsRequest.limit;
                    marker = listSecurityGroupsRequest.marker;
                    vpcId = listSecurityGroupsRequest.vpcId;
                    enterpriseProjectId = listSecurityGroupsRequest.enterpriseProjectId;
                } else {
                    limit = listSecurityGroupsRequest['limit'];
                    marker = listSecurityGroupsRequest['marker'];
                    vpcId = listSecurityGroupsRequest['vpc_id'];
                    enterpriseProjectId = listSecurityGroupsRequest['enterprise_project_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (vpcId !== null && vpcId !== undefined) {
                localVarQueryParameter['vpc_id'] = vpcId;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户在指定区域和实例类型的所有标签集合
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSubnetTags() {
            const options = {
                method: "GET",
                url: "/v2.0/{project_id}/subnets/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询子网列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSubnets(listSubnetsRequest?: ListSubnetsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/subnets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let limit;
            let marker;
            let vpcId;

            if (listSubnetsRequest !== null && listSubnetsRequest !== undefined) {
                if (listSubnetsRequest instanceof ListSubnetsRequest) {
                    limit = listSubnetsRequest.limit;
                    marker = listSubnetsRequest.marker;
                    vpcId = listSubnetsRequest.vpcId;
                } else {
                    limit = listSubnetsRequest['limit'];
                    marker = listSubnetsRequest['marker'];
                    vpcId = listSubnetsRequest['vpc_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (vpcId !== null && vpcId !== undefined) {
                localVarQueryParameter['vpc_id'] = vpcId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 使用标签过滤实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSubnetsByTags(listSubnetsByTagsRequest?: ListSubnetsByTagsRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/subnets/resource_instances/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (listSubnetsByTagsRequest !== null && listSubnetsByTagsRequest !== undefined) {
                if (listSubnetsByTagsRequest instanceof ListSubnetsByTagsRequest) {
                    body = listSubnetsByTagsRequest.body
                } else {
                    body = listSubnetsByTagsRequest['body'];
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
         * 查询提交请求的租户的所有对等连接。根据过滤条件进行过滤。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVpcPeerings(listVpcPeeringsRequest?: ListVpcPeeringsRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/vpc/peerings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let limit;
            let marker;
            let id;
            let name;
            let status;
            let tenantId;
            let vpcId;

            if (listVpcPeeringsRequest !== null && listVpcPeeringsRequest !== undefined) {
                if (listVpcPeeringsRequest instanceof ListVpcPeeringsRequest) {
                    limit = listVpcPeeringsRequest.limit;
                    marker = listVpcPeeringsRequest.marker;
                    id = listVpcPeeringsRequest.id;
                    name = listVpcPeeringsRequest.name;
                    status = listVpcPeeringsRequest.status;
                    tenantId = listVpcPeeringsRequest.tenantId;
                    vpcId = listVpcPeeringsRequest.vpcId;
                } else {
                    limit = listVpcPeeringsRequest['limit'];
                    marker = listVpcPeeringsRequest['marker'];
                    id = listVpcPeeringsRequest['id'];
                    name = listVpcPeeringsRequest['name'];
                    status = listVpcPeeringsRequest['status'];
                    tenantId = listVpcPeeringsRequest['tenant_id'];
                    vpcId = listVpcPeeringsRequest['vpc_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
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
            if (tenantId !== null && tenantId !== undefined) {
                localVarQueryParameter['tenant_id'] = tenantId;
            }
            if (vpcId !== null && vpcId !== undefined) {
                localVarQueryParameter['vpc_id'] = vpcId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 租户A名下的VPC申请和租户B的VPC建立对等连接，需要等待租户B接受该请求。此接口用于租户拒绝其他租户发起的对等连接请求。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        rejectVpcPeering(rejectVpcPeeringRequest?: RejectVpcPeeringRequest) {
            const options = {
                method: "PUT",
                url: "/v2.0/vpc/peerings/{peering_id}/reject",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let peeringId;

            if (rejectVpcPeeringRequest !== null && rejectVpcPeeringRequest !== undefined) {
                if (rejectVpcPeeringRequest instanceof RejectVpcPeeringRequest) {
                    peeringId = rejectVpcPeeringRequest.peeringId;
                } else {
                    peeringId = rejectVpcPeeringRequest['peering_id'];
                }
            }

        
            if (peeringId === null || peeringId === undefined) {
            throw new RequiredError('peeringId','Required parameter peeringId was null or undefined when calling rejectVpcPeering.');
            }

            options.pathParams = { 'peering_id': peeringId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询单个端口详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPort(showPortRequest?: ShowPortRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/ports/{port_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let portId;

            if (showPortRequest !== null && showPortRequest !== undefined) {
                if (showPortRequest instanceof ShowPortRequest) {
                    portId = showPortRequest.portId;
                } else {
                    portId = showPortRequest['port_id'];
                }
            }

        
            if (portId === null || portId === undefined) {
            throw new RequiredError('portId','Required parameter portId was null or undefined when calling showPort.');
            }

            options.pathParams = { 'port_id': portId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询单租户在VPC服务下的网络资源配额，包括vpc配额、子网配额、安全组配额、安全组规则配额、弹性公网IP配额，vpn配额等。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showQuota(showQuotaRequest?: ShowQuotaRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/quotas",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let type;

            if (showQuotaRequest !== null && showQuotaRequest !== undefined) {
                if (showQuotaRequest instanceof ShowQuotaRequest) {
                    type = showQuotaRequest.type;
                } else {
                    type = showQuotaRequest['type'];
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
         * 查询路由表详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRouteTable(showRouteTableRequest?: ShowRouteTableRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/routetables/{routetable_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let routetableId;

            if (showRouteTableRequest !== null && showRouteTableRequest !== undefined) {
                if (showRouteTableRequest instanceof ShowRouteTableRequest) {
                    routetableId = showRouteTableRequest.routetableId;
                } else {
                    routetableId = showRouteTableRequest['routetable_id'];
                }
            }

        
            if (routetableId === null || routetableId === undefined) {
            throw new RequiredError('routetableId','Required parameter routetableId was null or undefined when calling showRouteTable.');
            }

            options.pathParams = { 'routetable_id': routetableId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询单个安全组详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSecurityGroup(showSecurityGroupRequest?: ShowSecurityGroupRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/security-groups/{security_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let securityGroupId;

            if (showSecurityGroupRequest !== null && showSecurityGroupRequest !== undefined) {
                if (showSecurityGroupRequest instanceof ShowSecurityGroupRequest) {
                    securityGroupId = showSecurityGroupRequest.securityGroupId;
                } else {
                    securityGroupId = showSecurityGroupRequest['security_group_id'];
                }
            }

        
            if (securityGroupId === null || securityGroupId === undefined) {
            throw new RequiredError('securityGroupId','Required parameter securityGroupId was null or undefined when calling showSecurityGroup.');
            }

            options.pathParams = { 'security_group_id': securityGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询单个安全组规则详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSecurityGroupRule(showSecurityGroupRuleRequest?: ShowSecurityGroupRuleRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/security-group-rules/{security_group_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let securityGroupRuleId;

            if (showSecurityGroupRuleRequest !== null && showSecurityGroupRuleRequest !== undefined) {
                if (showSecurityGroupRuleRequest instanceof ShowSecurityGroupRuleRequest) {
                    securityGroupRuleId = showSecurityGroupRuleRequest.securityGroupRuleId;
                } else {
                    securityGroupRuleId = showSecurityGroupRuleRequest['security_group_rule_id'];
                }
            }

        
            if (securityGroupRuleId === null || securityGroupRuleId === undefined) {
            throw new RequiredError('securityGroupRuleId','Required parameter securityGroupRuleId was null or undefined when calling showSecurityGroupRule.');
            }

            options.pathParams = { 'security_group_rule_id': securityGroupRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询子网详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSubnet(showSubnetRequest?: ShowSubnetRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/subnets/{subnet_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let subnetId;

            if (showSubnetRequest !== null && showSubnetRequest !== undefined) {
                if (showSubnetRequest instanceof ShowSubnetRequest) {
                    subnetId = showSubnetRequest.subnetId;
                } else {
                    subnetId = showSubnetRequest['subnet_id'];
                }
            }

        
            if (subnetId === null || subnetId === undefined) {
            throw new RequiredError('subnetId','Required parameter subnetId was null or undefined when calling showSubnet.');
            }

            options.pathParams = { 'subnet_id': subnetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定子网实例的标签信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSubnetTags(showSubnetTagsRequest?: ShowSubnetTagsRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/{project_id}/subnets/{subnet_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let subnetId;

            if (showSubnetTagsRequest !== null && showSubnetTagsRequest !== undefined) {
                if (showSubnetTagsRequest instanceof ShowSubnetTagsRequest) {
                    subnetId = showSubnetTagsRequest.subnetId;
                } else {
                    subnetId = showSubnetTagsRequest['subnet_id'];
                }
            }

        
            if (subnetId === null || subnetId === undefined) {
            throw new RequiredError('subnetId','Required parameter subnetId was null or undefined when calling showSubnetTags.');
            }

            options.pathParams = { 'subnet_id': subnetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询对等连接详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVpcPeering(showVpcPeeringRequest?: ShowVpcPeeringRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/vpc/peerings/{peering_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let peeringId;

            if (showVpcPeeringRequest !== null && showVpcPeeringRequest !== undefined) {
                if (showVpcPeeringRequest instanceof ShowVpcPeeringRequest) {
                    peeringId = showVpcPeeringRequest.peeringId;
                } else {
                    peeringId = showVpcPeeringRequest['peering_id'];
                }
            }

        
            if (peeringId === null || peeringId === undefined) {
            throw new RequiredError('peeringId','Required parameter peeringId was null or undefined when calling showVpcPeering.');
            }

            options.pathParams = { 'peering_id': peeringId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新端口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePort(updatePortRequest?: UpdatePortRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/ports/{port_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let portId;

            if (updatePortRequest !== null && updatePortRequest !== undefined) {
                if (updatePortRequest instanceof UpdatePortRequest) {
                    portId = updatePortRequest.portId;
                    body = updatePortRequest.body
                } else {
                    portId = updatePortRequest['port_id'];
                    body = updatePortRequest['body'];
                }
            }

        
            if (portId === null || portId === undefined) {
            throw new RequiredError('portId','Required parameter portId was null or undefined when calling updatePort.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'port_id': portId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新路由表，包括可以更新路由表的名称，描述，以及新增、更新、删除路由条目
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateRouteTable(updateRouteTableRequest?: UpdateRouteTableRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/routetables/{routetable_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let routetableId;

            if (updateRouteTableRequest !== null && updateRouteTableRequest !== undefined) {
                if (updateRouteTableRequest instanceof UpdateRouteTableRequest) {
                    routetableId = updateRouteTableRequest.routetableId;
                    body = updateRouteTableRequest.body
                } else {
                    routetableId = updateRouteTableRequest['routetable_id'];
                    body = updateRouteTableRequest['body'];
                }
            }

        
            if (routetableId === null || routetableId === undefined) {
            throw new RequiredError('routetableId','Required parameter routetableId was null or undefined when calling updateRouteTable.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'routetable_id': routetableId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新子网。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSubnet(updateSubnetRequest?: UpdateSubnetRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/vpcs/{vpc_id}/subnets/{subnet_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let vpcId;
            let subnetId;

            if (updateSubnetRequest !== null && updateSubnetRequest !== undefined) {
                if (updateSubnetRequest instanceof UpdateSubnetRequest) {
                    vpcId = updateSubnetRequest.vpcId;
                    subnetId = updateSubnetRequest.subnetId;
                    body = updateSubnetRequest.body
                } else {
                    vpcId = updateSubnetRequest['vpc_id'];
                    subnetId = updateSubnetRequest['subnet_id'];
                    body = updateSubnetRequest['body'];
                }
            }

        
            if (vpcId === null || vpcId === undefined) {
            throw new RequiredError('vpcId','Required parameter vpcId was null or undefined when calling updateSubnet.');
            }
            if (subnetId === null || subnetId === undefined) {
            throw new RequiredError('subnetId','Required parameter subnetId was null or undefined when calling updateSubnet.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vpc_id': vpcId,'subnet_id': subnetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新对等连接。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateVpcPeering(updateVpcPeeringRequest?: UpdateVpcPeeringRequest) {
            const options = {
                method: "PUT",
                url: "/v2.0/vpc/peerings/{peering_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let peeringId;

            if (updateVpcPeeringRequest !== null && updateVpcPeeringRequest !== undefined) {
                if (updateVpcPeeringRequest instanceof UpdateVpcPeeringRequest) {
                    peeringId = updateVpcPeeringRequest.peeringId;
                    body = updateVpcPeeringRequest.body
                } else {
                    peeringId = updateVpcPeeringRequest['peering_id'];
                    body = updateVpcPeeringRequest['body'];
                }
            }

        
            if (peeringId === null || peeringId === undefined) {
            throw new RequiredError('peeringId','Required parameter peeringId was null or undefined when calling updateVpcPeering.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'peering_id': peeringId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 申请私有IP。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPrivateip(createPrivateipRequest?: CreatePrivateipRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/privateips",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createPrivateipRequest !== null && createPrivateipRequest !== undefined) {
                if (createPrivateipRequest instanceof CreatePrivateipRequest) {
                    body = createPrivateipRequest.body
                } else {
                    body = createPrivateipRequest['body'];
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
         * 删除私有IP。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePrivateip(deletePrivateipRequest?: DeletePrivateipRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/privateips/{privateip_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let privateipId;

            if (deletePrivateipRequest !== null && deletePrivateipRequest !== undefined) {
                if (deletePrivateipRequest instanceof DeletePrivateipRequest) {
                    privateipId = deletePrivateipRequest.privateipId;
                } else {
                    privateipId = deletePrivateipRequest['privateip_id'];
                }
            }

        
            if (privateipId === null || privateipId === undefined) {
            throw new RequiredError('privateipId','Required parameter privateipId was null or undefined when calling deletePrivateip.');
            }

            options.pathParams = { 'privateip_id': privateipId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定子网下的私有IP列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPrivateips(listPrivateipsRequest?: ListPrivateipsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/subnets/{subnet_id}/privateips",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let subnetId;
            let limit;
            let marker;

            if (listPrivateipsRequest !== null && listPrivateipsRequest !== undefined) {
                if (listPrivateipsRequest instanceof ListPrivateipsRequest) {
                    subnetId = listPrivateipsRequest.subnetId;
                    limit = listPrivateipsRequest.limit;
                    marker = listPrivateipsRequest.marker;
                } else {
                    subnetId = listPrivateipsRequest['subnet_id'];
                    limit = listPrivateipsRequest['limit'];
                    marker = listPrivateipsRequest['marker'];
                }
            }

        
            if (subnetId === null || subnetId === undefined) {
            throw new RequiredError('subnetId','Required parameter subnetId was null or undefined when calling listPrivateips.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'subnet_id': subnetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 显示一个指定网络中的IPv4地址使用情况。
         * 包括此网络中的IP总数以及已用IP总数，以及网络下每一个子网的IP地址总数和可用IP地址总数。
         * 
         * &gt; 须知
         * 
         * - 系统预留地址指的是子网的第1个以及最后4个地址，一般用于网关、DHCP等服务。
         * - 这里以及下文描述的IP地址总数、已用IP地址总数不包含系统预留地址。
         * - 在分配IP时，用户可以指定系统预留的IP地址。但是不论IP是如何分配的，只要是处于系统预留IP地址段的IP均不会被统计到已用IP地址数目和IP地址总数中。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showNetworkIpAvailabilities(showNetworkIpAvailabilitiesRequest?: ShowNetworkIpAvailabilitiesRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/network-ip-availabilities/{network_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let networkId;

            if (showNetworkIpAvailabilitiesRequest !== null && showNetworkIpAvailabilitiesRequest !== undefined) {
                if (showNetworkIpAvailabilitiesRequest instanceof ShowNetworkIpAvailabilitiesRequest) {
                    networkId = showNetworkIpAvailabilitiesRequest.networkId;
                } else {
                    networkId = showNetworkIpAvailabilitiesRequest['network_id'];
                }
            }

        
            if (networkId === null || networkId === undefined) {
            throw new RequiredError('networkId','Required parameter networkId was null or undefined when calling showNetworkIpAvailabilities.');
            }

            options.pathParams = { 'network_id': networkId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 指定ID查询私有IP。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPrivateip(showPrivateipRequest?: ShowPrivateipRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/privateips/{privateip_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let privateipId;

            if (showPrivateipRequest !== null && showPrivateipRequest !== undefined) {
                if (showPrivateipRequest instanceof ShowPrivateipRequest) {
                    privateipId = showPrivateipRequest.privateipId;
                } else {
                    privateipId = showPrivateipRequest['privateip_id'];
                }
            }

        
            if (privateipId === null || privateipId === undefined) {
            throw new RequiredError('privateipId','Required parameter privateipId was null or undefined when calling showPrivateip.');
            }

            options.pathParams = { 'privateip_id': privateipId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建安全组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronCreateSecurityGroup(neutronCreateSecurityGroupRequest?: NeutronCreateSecurityGroupRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/security-groups",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (neutronCreateSecurityGroupRequest !== null && neutronCreateSecurityGroupRequest !== undefined) {
                if (neutronCreateSecurityGroupRequest instanceof NeutronCreateSecurityGroupRequest) {
                    body = neutronCreateSecurityGroupRequest.body
                } else {
                    body = neutronCreateSecurityGroupRequest['body'];
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
         * 创建安全组规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronCreateSecurityGroupRule(neutronCreateSecurityGroupRuleRequest?: NeutronCreateSecurityGroupRuleRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/security-group-rules",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (neutronCreateSecurityGroupRuleRequest !== null && neutronCreateSecurityGroupRuleRequest !== undefined) {
                if (neutronCreateSecurityGroupRuleRequest instanceof NeutronCreateSecurityGroupRuleRequest) {
                    body = neutronCreateSecurityGroupRuleRequest.body
                } else {
                    body = neutronCreateSecurityGroupRuleRequest['body'];
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
         * 删除安全组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronDeleteSecurityGroup(neutronDeleteSecurityGroupRequest?: NeutronDeleteSecurityGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/v2.0/security-groups/{security_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let securityGroupId;

            if (neutronDeleteSecurityGroupRequest !== null && neutronDeleteSecurityGroupRequest !== undefined) {
                if (neutronDeleteSecurityGroupRequest instanceof NeutronDeleteSecurityGroupRequest) {
                    securityGroupId = neutronDeleteSecurityGroupRequest.securityGroupId;
                } else {
                    securityGroupId = neutronDeleteSecurityGroupRequest['security_group_id'];
                }
            }

        
            if (securityGroupId === null || securityGroupId === undefined) {
            throw new RequiredError('securityGroupId','Required parameter securityGroupId was null or undefined when calling neutronDeleteSecurityGroup.');
            }

            options.pathParams = { 'security_group_id': securityGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除安全组规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronDeleteSecurityGroupRule(neutronDeleteSecurityGroupRuleRequest?: NeutronDeleteSecurityGroupRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v2.0/security-group-rules/{security_group_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let securityGroupRuleId;

            if (neutronDeleteSecurityGroupRuleRequest !== null && neutronDeleteSecurityGroupRuleRequest !== undefined) {
                if (neutronDeleteSecurityGroupRuleRequest instanceof NeutronDeleteSecurityGroupRuleRequest) {
                    securityGroupRuleId = neutronDeleteSecurityGroupRuleRequest.securityGroupRuleId;
                } else {
                    securityGroupRuleId = neutronDeleteSecurityGroupRuleRequest['security_group_rule_id'];
                }
            }

        
            if (securityGroupRuleId === null || securityGroupRuleId === undefined) {
            throw new RequiredError('securityGroupRuleId','Required parameter securityGroupRuleId was null or undefined when calling neutronDeleteSecurityGroupRule.');
            }

            options.pathParams = { 'security_group_rule_id': securityGroupRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询提交请求的租户有权限查看的所有安全组规则。单次查询最多返回2000条数据，超过2000后会返回分页标记。分页查询请参考分页查询
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronListSecurityGroupRules(neutronListSecurityGroupRulesRequest?: NeutronListSecurityGroupRulesRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/security-group-rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let limit;
            let marker;
            let id;
            let direction;
            let protocol;
            let ethertype;
            let description;
            let remoteIpPrefix;
            let remoteGroupId;
            let securityGroupId;
            let portRangeMax;
            let portRangeMin;
            let tenantId;

            if (neutronListSecurityGroupRulesRequest !== null && neutronListSecurityGroupRulesRequest !== undefined) {
                if (neutronListSecurityGroupRulesRequest instanceof NeutronListSecurityGroupRulesRequest) {
                    limit = neutronListSecurityGroupRulesRequest.limit;
                    marker = neutronListSecurityGroupRulesRequest.marker;
                    id = neutronListSecurityGroupRulesRequest.id;
                    direction = neutronListSecurityGroupRulesRequest.direction;
                    protocol = neutronListSecurityGroupRulesRequest.protocol;
                    ethertype = neutronListSecurityGroupRulesRequest.ethertype;
                    description = neutronListSecurityGroupRulesRequest.description;
                    remoteIpPrefix = neutronListSecurityGroupRulesRequest.remoteIpPrefix;
                    remoteGroupId = neutronListSecurityGroupRulesRequest.remoteGroupId;
                    securityGroupId = neutronListSecurityGroupRulesRequest.securityGroupId;
                    portRangeMax = neutronListSecurityGroupRulesRequest.portRangeMax;
                    portRangeMin = neutronListSecurityGroupRulesRequest.portRangeMin;
                    tenantId = neutronListSecurityGroupRulesRequest.tenantId;
                } else {
                    limit = neutronListSecurityGroupRulesRequest['limit'];
                    marker = neutronListSecurityGroupRulesRequest['marker'];
                    id = neutronListSecurityGroupRulesRequest['id'];
                    direction = neutronListSecurityGroupRulesRequest['direction'];
                    protocol = neutronListSecurityGroupRulesRequest['protocol'];
                    ethertype = neutronListSecurityGroupRulesRequest['ethertype'];
                    description = neutronListSecurityGroupRulesRequest['description'];
                    remoteIpPrefix = neutronListSecurityGroupRulesRequest['remote_ip_prefix'];
                    remoteGroupId = neutronListSecurityGroupRulesRequest['remote_group_id'];
                    securityGroupId = neutronListSecurityGroupRulesRequest['security_group_id'];
                    portRangeMax = neutronListSecurityGroupRulesRequest['port_range_max'];
                    portRangeMin = neutronListSecurityGroupRulesRequest['port_range_min'];
                    tenantId = neutronListSecurityGroupRulesRequest['tenant_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (direction !== null && direction !== undefined) {
                localVarQueryParameter['direction'] = direction;
            }
            if (protocol !== null && protocol !== undefined) {
                localVarQueryParameter['protocol'] = protocol;
            }
            if (ethertype !== null && ethertype !== undefined) {
                localVarQueryParameter['ethertype'] = ethertype;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }
            if (remoteIpPrefix !== null && remoteIpPrefix !== undefined) {
                localVarQueryParameter['remote_ip_prefix'] = remoteIpPrefix;
            }
            if (remoteGroupId !== null && remoteGroupId !== undefined) {
                localVarQueryParameter['remote_group_id'] = remoteGroupId;
            }
            if (securityGroupId !== null && securityGroupId !== undefined) {
                localVarQueryParameter['security_group_id'] = securityGroupId;
            }
            if (portRangeMax !== null && portRangeMax !== undefined) {
                localVarQueryParameter['port_range_max'] = portRangeMax;
            }
            if (portRangeMin !== null && portRangeMin !== undefined) {
                localVarQueryParameter['port_range_min'] = portRangeMin;
            }
            if (tenantId !== null && tenantId !== undefined) {
                localVarQueryParameter['tenant_id'] = tenantId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询提交请求租户的所有安全组，单次查询最多返回2000条数据，超过2000后会返回分页标记。分页查询请参考分页查询 。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronListSecurityGroups(neutronListSecurityGroupsRequest?: NeutronListSecurityGroupsRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/security-groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let limit;
            let marker;
            let id;
            let name;
            let description;
            let tenantId;

            if (neutronListSecurityGroupsRequest !== null && neutronListSecurityGroupsRequest !== undefined) {
                if (neutronListSecurityGroupsRequest instanceof NeutronListSecurityGroupsRequest) {
                    limit = neutronListSecurityGroupsRequest.limit;
                    marker = neutronListSecurityGroupsRequest.marker;
                    id = neutronListSecurityGroupsRequest.id;
                    name = neutronListSecurityGroupsRequest.name;
                    description = neutronListSecurityGroupsRequest.description;
                    tenantId = neutronListSecurityGroupsRequest.tenantId;
                } else {
                    limit = neutronListSecurityGroupsRequest['limit'];
                    marker = neutronListSecurityGroupsRequest['marker'];
                    id = neutronListSecurityGroupsRequest['id'];
                    name = neutronListSecurityGroupsRequest['name'];
                    description = neutronListSecurityGroupsRequest['description'];
                    tenantId = neutronListSecurityGroupsRequest['tenant_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
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
            if (tenantId !== null && tenantId !== undefined) {
                localVarQueryParameter['tenant_id'] = tenantId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询安全组详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronShowSecurityGroup(neutronShowSecurityGroupRequest?: NeutronShowSecurityGroupRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/security-groups/{security_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let securityGroupId;

            if (neutronShowSecurityGroupRequest !== null && neutronShowSecurityGroupRequest !== undefined) {
                if (neutronShowSecurityGroupRequest instanceof NeutronShowSecurityGroupRequest) {
                    securityGroupId = neutronShowSecurityGroupRequest.securityGroupId;
                } else {
                    securityGroupId = neutronShowSecurityGroupRequest['security_group_id'];
                }
            }

        
            if (securityGroupId === null || securityGroupId === undefined) {
            throw new RequiredError('securityGroupId','Required parameter securityGroupId was null or undefined when calling neutronShowSecurityGroup.');
            }

            options.pathParams = { 'security_group_id': securityGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询安全组规则详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronShowSecurityGroupRule(neutronShowSecurityGroupRuleRequest?: NeutronShowSecurityGroupRuleRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/security-group-rules/{security_group_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let securityGroupRuleId;

            if (neutronShowSecurityGroupRuleRequest !== null && neutronShowSecurityGroupRuleRequest !== undefined) {
                if (neutronShowSecurityGroupRuleRequest instanceof NeutronShowSecurityGroupRuleRequest) {
                    securityGroupRuleId = neutronShowSecurityGroupRuleRequest.securityGroupRuleId;
                } else {
                    securityGroupRuleId = neutronShowSecurityGroupRuleRequest['security_group_rule_id'];
                }
            }

        
            if (securityGroupRuleId === null || securityGroupRuleId === undefined) {
            throw new RequiredError('securityGroupRuleId','Required parameter securityGroupRuleId was null or undefined when calling neutronShowSecurityGroupRule.');
            }

            options.pathParams = { 'security_group_rule_id': securityGroupRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新安全组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronUpdateSecurityGroup(neutronUpdateSecurityGroupRequest?: NeutronUpdateSecurityGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v2.0/security-groups/{security_group_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let securityGroupId;

            if (neutronUpdateSecurityGroupRequest !== null && neutronUpdateSecurityGroupRequest !== undefined) {
                if (neutronUpdateSecurityGroupRequest instanceof NeutronUpdateSecurityGroupRequest) {
                    securityGroupId = neutronUpdateSecurityGroupRequest.securityGroupId;
                    body = neutronUpdateSecurityGroupRequest.body
                } else {
                    securityGroupId = neutronUpdateSecurityGroupRequest['security_group_id'];
                    body = neutronUpdateSecurityGroupRequest['body'];
                }
            }

        
            if (securityGroupId === null || securityGroupId === undefined) {
            throw new RequiredError('securityGroupId','Required parameter securityGroupId was null or undefined when calling neutronUpdateSecurityGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'security_group_id': securityGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 插入一条网络ACL规则到某一网络ACL策略中。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronAddFirewallRule(neutronAddFirewallRuleRequest?: NeutronAddFirewallRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v2.0/fwaas/firewall_policies/{firewall_policy_id}/insert_rule",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let firewallPolicyId;

            if (neutronAddFirewallRuleRequest !== null && neutronAddFirewallRuleRequest !== undefined) {
                if (neutronAddFirewallRuleRequest instanceof NeutronAddFirewallRuleRequest) {
                    firewallPolicyId = neutronAddFirewallRuleRequest.firewallPolicyId;
                    body = neutronAddFirewallRuleRequest.body
                } else {
                    firewallPolicyId = neutronAddFirewallRuleRequest['firewall_policy_id'];
                    body = neutronAddFirewallRuleRequest['body'];
                }
            }

        
            if (firewallPolicyId === null || firewallPolicyId === undefined) {
            throw new RequiredError('firewallPolicyId','Required parameter firewallPolicyId was null or undefined when calling neutronAddFirewallRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'firewall_policy_id': firewallPolicyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建网络ACL组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronCreateFirewallGroup(neutronCreateFirewallGroupRequest?: NeutronCreateFirewallGroupRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/fwaas/firewall_groups",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (neutronCreateFirewallGroupRequest !== null && neutronCreateFirewallGroupRequest !== undefined) {
                if (neutronCreateFirewallGroupRequest instanceof NeutronCreateFirewallGroupRequest) {
                    body = neutronCreateFirewallGroupRequest.body
                } else {
                    body = neutronCreateFirewallGroupRequest['body'];
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
         * 创建网络ACL策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronCreateFirewallPolicy(neutronCreateFirewallPolicyRequest?: NeutronCreateFirewallPolicyRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/fwaas/firewall_policies",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (neutronCreateFirewallPolicyRequest !== null && neutronCreateFirewallPolicyRequest !== undefined) {
                if (neutronCreateFirewallPolicyRequest instanceof NeutronCreateFirewallPolicyRequest) {
                    body = neutronCreateFirewallPolicyRequest.body
                } else {
                    body = neutronCreateFirewallPolicyRequest['body'];
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
         * 创建网络ACL规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronCreateFirewallRule(neutronCreateFirewallRuleRequest?: NeutronCreateFirewallRuleRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/fwaas/firewall_rules",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (neutronCreateFirewallRuleRequest !== null && neutronCreateFirewallRuleRequest !== undefined) {
                if (neutronCreateFirewallRuleRequest instanceof NeutronCreateFirewallRuleRequest) {
                    body = neutronCreateFirewallRuleRequest.body
                } else {
                    body = neutronCreateFirewallRuleRequest['body'];
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
         * 删除网络ACL组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronDeleteFirewallGroup(neutronDeleteFirewallGroupRequest?: NeutronDeleteFirewallGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/v2.0/fwaas/firewall_groups/{firewall_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let firewallGroupId;

            if (neutronDeleteFirewallGroupRequest !== null && neutronDeleteFirewallGroupRequest !== undefined) {
                if (neutronDeleteFirewallGroupRequest instanceof NeutronDeleteFirewallGroupRequest) {
                    firewallGroupId = neutronDeleteFirewallGroupRequest.firewallGroupId;
                } else {
                    firewallGroupId = neutronDeleteFirewallGroupRequest['firewall_group_id'];
                }
            }

        
            if (firewallGroupId === null || firewallGroupId === undefined) {
            throw new RequiredError('firewallGroupId','Required parameter firewallGroupId was null or undefined when calling neutronDeleteFirewallGroup.');
            }

            options.pathParams = { 'firewall_group_id': firewallGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除网络ACL策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronDeleteFirewallPolicy(neutronDeleteFirewallPolicyRequest?: NeutronDeleteFirewallPolicyRequest) {
            const options = {
                method: "DELETE",
                url: "/v2.0/fwaas/firewall_policies/{firewall_policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let firewallPolicyId;

            if (neutronDeleteFirewallPolicyRequest !== null && neutronDeleteFirewallPolicyRequest !== undefined) {
                if (neutronDeleteFirewallPolicyRequest instanceof NeutronDeleteFirewallPolicyRequest) {
                    firewallPolicyId = neutronDeleteFirewallPolicyRequest.firewallPolicyId;
                } else {
                    firewallPolicyId = neutronDeleteFirewallPolicyRequest['firewall_policy_id'];
                }
            }

        
            if (firewallPolicyId === null || firewallPolicyId === undefined) {
            throw new RequiredError('firewallPolicyId','Required parameter firewallPolicyId was null or undefined when calling neutronDeleteFirewallPolicy.');
            }

            options.pathParams = { 'firewall_policy_id': firewallPolicyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除网络ACL规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronDeleteFirewallRule(neutronDeleteFirewallRuleRequest?: NeutronDeleteFirewallRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v2.0/fwaas/firewall_rules/{firewall_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let firewallRuleId;

            if (neutronDeleteFirewallRuleRequest !== null && neutronDeleteFirewallRuleRequest !== undefined) {
                if (neutronDeleteFirewallRuleRequest instanceof NeutronDeleteFirewallRuleRequest) {
                    firewallRuleId = neutronDeleteFirewallRuleRequest.firewallRuleId;
                } else {
                    firewallRuleId = neutronDeleteFirewallRuleRequest['firewall_rule_id'];
                }
            }

        
            if (firewallRuleId === null || firewallRuleId === undefined) {
            throw new RequiredError('firewallRuleId','Required parameter firewallRuleId was null or undefined when calling neutronDeleteFirewallRule.');
            }

            options.pathParams = { 'firewall_rule_id': firewallRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询提交请求的租户有权限操作的所有网络ACL组信息。单次查询最多返回2000条数据，超过2000后会返回分页标记。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronListFirewallGroups(neutronListFirewallGroupsRequest?: NeutronListFirewallGroupsRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/fwaas/firewall_groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let marker;
            let limit;
            let id;
            let name;
            let description;
            let ingressFirewallPolicyId;
            let egressFirewallPolicyId;

            if (neutronListFirewallGroupsRequest !== null && neutronListFirewallGroupsRequest !== undefined) {
                if (neutronListFirewallGroupsRequest instanceof NeutronListFirewallGroupsRequest) {
                    marker = neutronListFirewallGroupsRequest.marker;
                    limit = neutronListFirewallGroupsRequest.limit;
                    id = neutronListFirewallGroupsRequest.id;
                    name = neutronListFirewallGroupsRequest.name;
                    description = neutronListFirewallGroupsRequest.description;
                    ingressFirewallPolicyId = neutronListFirewallGroupsRequest.ingressFirewallPolicyId;
                    egressFirewallPolicyId = neutronListFirewallGroupsRequest.egressFirewallPolicyId;
                } else {
                    marker = neutronListFirewallGroupsRequest['marker'];
                    limit = neutronListFirewallGroupsRequest['limit'];
                    id = neutronListFirewallGroupsRequest['id'];
                    name = neutronListFirewallGroupsRequest['name'];
                    description = neutronListFirewallGroupsRequest['description'];
                    ingressFirewallPolicyId = neutronListFirewallGroupsRequest['ingress_firewall_policy_id'];
                    egressFirewallPolicyId = neutronListFirewallGroupsRequest['egress_firewall_policy_id'];
                }
            }

        
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
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
            if (ingressFirewallPolicyId !== null && ingressFirewallPolicyId !== undefined) {
                localVarQueryParameter['ingress_firewall_policy_id'] = ingressFirewallPolicyId;
            }
            if (egressFirewallPolicyId !== null && egressFirewallPolicyId !== undefined) {
                localVarQueryParameter['egress_firewall_policy_id'] = egressFirewallPolicyId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询提交请求的租户有权限操作的所有网络ACL策略信息。单次查询最多返回2000条数据，超过2000后会返回分页标记。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronListFirewallPolicies(neutronListFirewallPoliciesRequest?: NeutronListFirewallPoliciesRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/fwaas/firewall_policies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let limit;
            let marker;
            let id;
            let name;
            let description;
            let tenantId;

            if (neutronListFirewallPoliciesRequest !== null && neutronListFirewallPoliciesRequest !== undefined) {
                if (neutronListFirewallPoliciesRequest instanceof NeutronListFirewallPoliciesRequest) {
                    limit = neutronListFirewallPoliciesRequest.limit;
                    marker = neutronListFirewallPoliciesRequest.marker;
                    id = neutronListFirewallPoliciesRequest.id;
                    name = neutronListFirewallPoliciesRequest.name;
                    description = neutronListFirewallPoliciesRequest.description;
                    tenantId = neutronListFirewallPoliciesRequest.tenantId;
                } else {
                    limit = neutronListFirewallPoliciesRequest['limit'];
                    marker = neutronListFirewallPoliciesRequest['marker'];
                    id = neutronListFirewallPoliciesRequest['id'];
                    name = neutronListFirewallPoliciesRequest['name'];
                    description = neutronListFirewallPoliciesRequest['description'];
                    tenantId = neutronListFirewallPoliciesRequest['tenant_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
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
            if (tenantId !== null && tenantId !== undefined) {
                localVarQueryParameter['tenant_id'] = tenantId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询提交请求的租户有权限操作的所有网络ACL规则信息。单次查询最多返回2000条数据，超过2000后会返回分页标记。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronListFirewallRules(neutronListFirewallRulesRequest?: NeutronListFirewallRulesRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/fwaas/firewall_rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let marker;
            let limit;
            let id;
            let name;
            let description;
            let action;
            let tenantId;

            if (neutronListFirewallRulesRequest !== null && neutronListFirewallRulesRequest !== undefined) {
                if (neutronListFirewallRulesRequest instanceof NeutronListFirewallRulesRequest) {
                    marker = neutronListFirewallRulesRequest.marker;
                    limit = neutronListFirewallRulesRequest.limit;
                    id = neutronListFirewallRulesRequest.id;
                    name = neutronListFirewallRulesRequest.name;
                    description = neutronListFirewallRulesRequest.description;
                    action = neutronListFirewallRulesRequest.action;
                    tenantId = neutronListFirewallRulesRequest.tenantId;
                } else {
                    marker = neutronListFirewallRulesRequest['marker'];
                    limit = neutronListFirewallRulesRequest['limit'];
                    id = neutronListFirewallRulesRequest['id'];
                    name = neutronListFirewallRulesRequest['name'];
                    description = neutronListFirewallRulesRequest['description'];
                    action = neutronListFirewallRulesRequest['action'];
                    tenantId = neutronListFirewallRulesRequest['tenant_id'];
                }
            }

        
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
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
            if (action !== null && action !== undefined) {
                localVarQueryParameter['action'] = action;
            }
            if (tenantId !== null && tenantId !== undefined) {
                localVarQueryParameter['tenant_id'] = tenantId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 从某一网络ACL策略中移除一条网络ACL规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronRemoveFirewallRule(neutronRemoveFirewallRuleRequest?: NeutronRemoveFirewallRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v2.0/fwaas/firewall_policies/{firewall_policy_id}/remove_rule",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let firewallPolicyId;

            if (neutronRemoveFirewallRuleRequest !== null && neutronRemoveFirewallRuleRequest !== undefined) {
                if (neutronRemoveFirewallRuleRequest instanceof NeutronRemoveFirewallRuleRequest) {
                    firewallPolicyId = neutronRemoveFirewallRuleRequest.firewallPolicyId;
                    body = neutronRemoveFirewallRuleRequest.body
                } else {
                    firewallPolicyId = neutronRemoveFirewallRuleRequest['firewall_policy_id'];
                    body = neutronRemoveFirewallRuleRequest['body'];
                }
            }

        
            if (firewallPolicyId === null || firewallPolicyId === undefined) {
            throw new RequiredError('firewallPolicyId','Required parameter firewallPolicyId was null or undefined when calling neutronRemoveFirewallRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'firewall_policy_id': firewallPolicyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询特定网络ACL组详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronShowFirewallGroup(neutronShowFirewallGroupRequest?: NeutronShowFirewallGroupRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/fwaas/firewall_groups/{firewall_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let firewallGroupId;

            if (neutronShowFirewallGroupRequest !== null && neutronShowFirewallGroupRequest !== undefined) {
                if (neutronShowFirewallGroupRequest instanceof NeutronShowFirewallGroupRequest) {
                    firewallGroupId = neutronShowFirewallGroupRequest.firewallGroupId;
                } else {
                    firewallGroupId = neutronShowFirewallGroupRequest['firewall_group_id'];
                }
            }

        
            if (firewallGroupId === null || firewallGroupId === undefined) {
            throw new RequiredError('firewallGroupId','Required parameter firewallGroupId was null or undefined when calling neutronShowFirewallGroup.');
            }

            options.pathParams = { 'firewall_group_id': firewallGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询特定网络ACL策略详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronShowFirewallPolicy(neutronShowFirewallPolicyRequest?: NeutronShowFirewallPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/fwaas/firewall_policies/{firewall_policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let firewallPolicyId;

            if (neutronShowFirewallPolicyRequest !== null && neutronShowFirewallPolicyRequest !== undefined) {
                if (neutronShowFirewallPolicyRequest instanceof NeutronShowFirewallPolicyRequest) {
                    firewallPolicyId = neutronShowFirewallPolicyRequest.firewallPolicyId;
                } else {
                    firewallPolicyId = neutronShowFirewallPolicyRequest['firewall_policy_id'];
                }
            }

        
            if (firewallPolicyId === null || firewallPolicyId === undefined) {
            throw new RequiredError('firewallPolicyId','Required parameter firewallPolicyId was null or undefined when calling neutronShowFirewallPolicy.');
            }

            options.pathParams = { 'firewall_policy_id': firewallPolicyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询特定网络ACL规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronShowFirewallRule(neutronShowFirewallRuleRequest?: NeutronShowFirewallRuleRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/fwaas/firewall_rules/{firewall_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let firewallRuleId;

            if (neutronShowFirewallRuleRequest !== null && neutronShowFirewallRuleRequest !== undefined) {
                if (neutronShowFirewallRuleRequest instanceof NeutronShowFirewallRuleRequest) {
                    firewallRuleId = neutronShowFirewallRuleRequest.firewallRuleId;
                } else {
                    firewallRuleId = neutronShowFirewallRuleRequest['firewall_rule_id'];
                }
            }

        
            if (firewallRuleId === null || firewallRuleId === undefined) {
            throw new RequiredError('firewallRuleId','Required parameter firewallRuleId was null or undefined when calling neutronShowFirewallRule.');
            }

            options.pathParams = { 'firewall_rule_id': firewallRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新网络ACL组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronUpdateFirewallGroup(neutronUpdateFirewallGroupRequest?: NeutronUpdateFirewallGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v2.0/fwaas/firewall_groups/{firewall_group_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let firewallGroupId;

            if (neutronUpdateFirewallGroupRequest !== null && neutronUpdateFirewallGroupRequest !== undefined) {
                if (neutronUpdateFirewallGroupRequest instanceof NeutronUpdateFirewallGroupRequest) {
                    firewallGroupId = neutronUpdateFirewallGroupRequest.firewallGroupId;
                    body = neutronUpdateFirewallGroupRequest.body
                } else {
                    firewallGroupId = neutronUpdateFirewallGroupRequest['firewall_group_id'];
                    body = neutronUpdateFirewallGroupRequest['body'];
                }
            }

        
            if (firewallGroupId === null || firewallGroupId === undefined) {
            throw new RequiredError('firewallGroupId','Required parameter firewallGroupId was null or undefined when calling neutronUpdateFirewallGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'firewall_group_id': firewallGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新网络ACL策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronUpdateFirewallPolicy(neutronUpdateFirewallPolicyRequest?: NeutronUpdateFirewallPolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v2.0/fwaas/firewall_policies/{firewall_policy_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let firewallPolicyId;

            if (neutronUpdateFirewallPolicyRequest !== null && neutronUpdateFirewallPolicyRequest !== undefined) {
                if (neutronUpdateFirewallPolicyRequest instanceof NeutronUpdateFirewallPolicyRequest) {
                    firewallPolicyId = neutronUpdateFirewallPolicyRequest.firewallPolicyId;
                    body = neutronUpdateFirewallPolicyRequest.body
                } else {
                    firewallPolicyId = neutronUpdateFirewallPolicyRequest['firewall_policy_id'];
                    body = neutronUpdateFirewallPolicyRequest['body'];
                }
            }

        
            if (firewallPolicyId === null || firewallPolicyId === undefined) {
            throw new RequiredError('firewallPolicyId','Required parameter firewallPolicyId was null or undefined when calling neutronUpdateFirewallPolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'firewall_policy_id': firewallPolicyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新网络ACL规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronUpdateFirewallRule(neutronUpdateFirewallRuleRequest?: NeutronUpdateFirewallRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v2.0/fwaas/firewall_rules/{firewall_rule_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let firewallRuleId;

            if (neutronUpdateFirewallRuleRequest !== null && neutronUpdateFirewallRuleRequest !== undefined) {
                if (neutronUpdateFirewallRuleRequest instanceof NeutronUpdateFirewallRuleRequest) {
                    firewallRuleId = neutronUpdateFirewallRuleRequest.firewallRuleId;
                    body = neutronUpdateFirewallRuleRequest.body
                } else {
                    firewallRuleId = neutronUpdateFirewallRuleRequest['firewall_rule_id'];
                    body = neutronUpdateFirewallRuleRequest['body'];
                }
            }

        
            if (firewallRuleId === null || firewallRuleId === undefined) {
            throw new RequiredError('firewallRuleId','Required parameter firewallRuleId was null or undefined when calling neutronUpdateFirewallRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'firewall_rule_id': firewallRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 为指定的VPC资源实例批量添加标签。
         * 此接口为幂等接口：创建时如果请求体中存在重复key则报错。创建时，不允许设置重复key数据，如果数据库已存在该key，就覆盖value的值。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateVpcTags(batchCreateVpcTagsRequest?: BatchCreateVpcTagsRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/vpcs/{vpc_id}/tags/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let vpcId;

            if (batchCreateVpcTagsRequest !== null && batchCreateVpcTagsRequest !== undefined) {
                if (batchCreateVpcTagsRequest instanceof BatchCreateVpcTagsRequest) {
                    vpcId = batchCreateVpcTagsRequest.vpcId;
                    body = batchCreateVpcTagsRequest.body
                } else {
                    vpcId = batchCreateVpcTagsRequest['vpc_id'];
                    body = batchCreateVpcTagsRequest['body'];
                }
            }

        
            if (vpcId === null || vpcId === undefined) {
            throw new RequiredError('vpcId','Required parameter vpcId was null or undefined when calling batchCreateVpcTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vpc_id': vpcId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 为指定的VPC资源实例批量删除标签。
         * 此接口为幂等接口：删除时，如果删除的标签不存在，默认处理成功；删除时不对标签字符集范围做校验。删除时tags结构体不能缺失，key不能为空，或者空字符串。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteVpcTags(batchDeleteVpcTagsRequest?: BatchDeleteVpcTagsRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/vpcs/{vpc_id}/tags/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let vpcId;

            if (batchDeleteVpcTagsRequest !== null && batchDeleteVpcTagsRequest !== undefined) {
                if (batchDeleteVpcTagsRequest instanceof BatchDeleteVpcTagsRequest) {
                    vpcId = batchDeleteVpcTagsRequest.vpcId;
                    body = batchDeleteVpcTagsRequest.body
                } else {
                    vpcId = batchDeleteVpcTagsRequest['vpc_id'];
                    body = batchDeleteVpcTagsRequest['body'];
                }
            }

        
            if (vpcId === null || vpcId === undefined) {
            throw new RequiredError('vpcId','Required parameter vpcId was null or undefined when calling batchDeleteVpcTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vpc_id': vpcId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建虚拟私有云。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createVpc(createVpcRequest?: CreateVpcRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/vpcs",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createVpcRequest !== null && createVpcRequest !== undefined) {
                if (createVpcRequest instanceof CreateVpcRequest) {
                    body = createVpcRequest.body
                } else {
                    body = createVpcRequest['body'];
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
         * 给指定VPC资源实例增加标签信息
         * 此接口为幂等接口：创建时，如果创建的标签已经存在（key相同），则覆盖。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createVpcResourceTag(createVpcResourceTagRequest?: CreateVpcResourceTagRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/vpcs/{vpc_id}/tags",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let vpcId;

            if (createVpcResourceTagRequest !== null && createVpcResourceTagRequest !== undefined) {
                if (createVpcResourceTagRequest instanceof CreateVpcResourceTagRequest) {
                    vpcId = createVpcResourceTagRequest.vpcId;
                    body = createVpcResourceTagRequest.body
                } else {
                    vpcId = createVpcResourceTagRequest['vpc_id'];
                    body = createVpcResourceTagRequest['body'];
                }
            }

        
            if (vpcId === null || vpcId === undefined) {
            throw new RequiredError('vpcId','Required parameter vpcId was null or undefined when calling createVpcResourceTag.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vpc_id': vpcId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建路由
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createVpcRoute(createVpcRouteRequest?: CreateVpcRouteRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/vpc/routes",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createVpcRouteRequest !== null && createVpcRouteRequest !== undefined) {
                if (createVpcRouteRequest instanceof CreateVpcRouteRequest) {
                    body = createVpcRouteRequest.body
                } else {
                    body = createVpcRouteRequest['body'];
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
         * 删除虚拟私有云。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteVpc(deleteVpcRequest?: DeleteVpcRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/vpcs/{vpc_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let vpcId;

            if (deleteVpcRequest !== null && deleteVpcRequest !== undefined) {
                if (deleteVpcRequest instanceof DeleteVpcRequest) {
                    vpcId = deleteVpcRequest.vpcId;
                } else {
                    vpcId = deleteVpcRequest['vpc_id'];
                }
            }

        
            if (vpcId === null || vpcId === undefined) {
            throw new RequiredError('vpcId','Required parameter vpcId was null or undefined when calling deleteVpc.');
            }

            options.pathParams = { 'vpc_id': vpcId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除路由
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteVpcRoute(deleteVpcRouteRequest?: DeleteVpcRouteRequest) {
            const options = {
                method: "DELETE",
                url: "/v2.0/vpc/routes/{route_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let routeId;

            if (deleteVpcRouteRequest !== null && deleteVpcRouteRequest !== undefined) {
                if (deleteVpcRouteRequest instanceof DeleteVpcRouteRequest) {
                    routeId = deleteVpcRouteRequest.routeId;
                } else {
                    routeId = deleteVpcRouteRequest['route_id'];
                }
            }

        
            if (routeId === null || routeId === undefined) {
            throw new RequiredError('routeId','Required parameter routeId was null or undefined when calling deleteVpcRoute.');
            }

            options.pathParams = { 'route_id': routeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定VPC资源实例的标签信息
         * 该接口为幂等接口：删除的key不存在报404，Key不能为空或者空字符串
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteVpcTag(deleteVpcTagRequest?: DeleteVpcTagRequest) {
            const options = {
                method: "DELETE",
                url: "/v2.0/{project_id}/vpcs/{vpc_id}/tags/{key}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let vpcId;
            let key;

            if (deleteVpcTagRequest !== null && deleteVpcTagRequest !== undefined) {
                if (deleteVpcTagRequest instanceof DeleteVpcTagRequest) {
                    vpcId = deleteVpcTagRequest.vpcId;
                    key = deleteVpcTagRequest.key;
                } else {
                    vpcId = deleteVpcTagRequest['vpc_id'];
                    key = deleteVpcTagRequest['key'];
                }
            }

        
            if (vpcId === null || vpcId === undefined) {
            throw new RequiredError('vpcId','Required parameter vpcId was null or undefined when calling deleteVpcTag.');
            }
            if (key === null || key === undefined) {
            throw new RequiredError('key','Required parameter key was null or undefined when calling deleteVpcTag.');
            }

            options.pathParams = { 'vpc_id': vpcId,'key': key, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询提交请求的租户的所有路由列表，并根据过滤条件进行过滤。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVpcRoutes(listVpcRoutesRequest?: ListVpcRoutesRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/vpc/routes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let limit;
            let marker;
            let id;
            let type;
            let vpcId;
            let destination;
            let tenantId;

            if (listVpcRoutesRequest !== null && listVpcRoutesRequest !== undefined) {
                if (listVpcRoutesRequest instanceof ListVpcRoutesRequest) {
                    limit = listVpcRoutesRequest.limit;
                    marker = listVpcRoutesRequest.marker;
                    id = listVpcRoutesRequest.id;
                    type = listVpcRoutesRequest.type;
                    vpcId = listVpcRoutesRequest.vpcId;
                    destination = listVpcRoutesRequest.destination;
                    tenantId = listVpcRoutesRequest.tenantId;
                } else {
                    limit = listVpcRoutesRequest['limit'];
                    marker = listVpcRoutesRequest['marker'];
                    id = listVpcRoutesRequest['id'];
                    type = listVpcRoutesRequest['type'];
                    vpcId = listVpcRoutesRequest['vpc_id'];
                    destination = listVpcRoutesRequest['destination'];
                    tenantId = listVpcRoutesRequest['tenant_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (vpcId !== null && vpcId !== undefined) {
                localVarQueryParameter['vpc_id'] = vpcId;
            }
            if (destination !== null && destination !== undefined) {
                localVarQueryParameter['destination'] = destination;
            }
            if (tenantId !== null && tenantId !== undefined) {
                localVarQueryParameter['tenant_id'] = tenantId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户在指定区域和实例类型的所有标签集合
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVpcTags() {
            const options = {
                method: "GET",
                url: "/v2.0/{project_id}/vpcs/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询虚拟私有云列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVpcs(listVpcsRequest?: ListVpcsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/vpcs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let limit;
            let marker;
            let id;
            let enterpriseProjectId;

            if (listVpcsRequest !== null && listVpcsRequest !== undefined) {
                if (listVpcsRequest instanceof ListVpcsRequest) {
                    limit = listVpcsRequest.limit;
                    marker = listVpcsRequest.marker;
                    id = listVpcsRequest.id;
                    enterpriseProjectId = listVpcsRequest.enterpriseProjectId;
                } else {
                    limit = listVpcsRequest['limit'];
                    marker = listVpcsRequest['marker'];
                    id = listVpcsRequest['id'];
                    enterpriseProjectId = listVpcsRequest['enterprise_project_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 使用标签过滤实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVpcsByTags(listVpcsByTagsRequest?: ListVpcsByTagsRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/vpcs/resource_instances/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (listVpcsByTagsRequest !== null && listVpcsByTagsRequest !== undefined) {
                if (listVpcsByTagsRequest instanceof ListVpcsByTagsRequest) {
                    body = listVpcsByTagsRequest.body
                } else {
                    body = listVpcsByTagsRequest['body'];
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
         * 查询虚拟私有云。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVpc(showVpcRequest?: ShowVpcRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/vpcs/{vpc_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let vpcId;

            if (showVpcRequest !== null && showVpcRequest !== undefined) {
                if (showVpcRequest instanceof ShowVpcRequest) {
                    vpcId = showVpcRequest.vpcId;
                } else {
                    vpcId = showVpcRequest['vpc_id'];
                }
            }

        
            if (vpcId === null || vpcId === undefined) {
            throw new RequiredError('vpcId','Required parameter vpcId was null or undefined when calling showVpc.');
            }

            options.pathParams = { 'vpc_id': vpcId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询路由详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVpcRoute(showVpcRouteRequest?: ShowVpcRouteRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/vpc/routes/{route_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let routeId;

            if (showVpcRouteRequest !== null && showVpcRouteRequest !== undefined) {
                if (showVpcRouteRequest instanceof ShowVpcRouteRequest) {
                    routeId = showVpcRouteRequest.routeId;
                } else {
                    routeId = showVpcRouteRequest['route_id'];
                }
            }

        
            if (routeId === null || routeId === undefined) {
            throw new RequiredError('routeId','Required parameter routeId was null or undefined when calling showVpcRoute.');
            }

            options.pathParams = { 'route_id': routeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定VPC实例的标签信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVpcTags(showVpcTagsRequest?: ShowVpcTagsRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/{project_id}/vpcs/{vpc_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let vpcId;

            if (showVpcTagsRequest !== null && showVpcTagsRequest !== undefined) {
                if (showVpcTagsRequest instanceof ShowVpcTagsRequest) {
                    vpcId = showVpcTagsRequest.vpcId;
                } else {
                    vpcId = showVpcTagsRequest['vpc_id'];
                }
            }

        
            if (vpcId === null || vpcId === undefined) {
            throw new RequiredError('vpcId','Required parameter vpcId was null or undefined when calling showVpcTags.');
            }

            options.pathParams = { 'vpc_id': vpcId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新虚拟私有云。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateVpc(updateVpcRequest?: UpdateVpcRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/vpcs/{vpc_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let vpcId;

            if (updateVpcRequest !== null && updateVpcRequest !== undefined) {
                if (updateVpcRequest instanceof UpdateVpcRequest) {
                    vpcId = updateVpcRequest.vpcId;
                    body = updateVpcRequest.body
                } else {
                    vpcId = updateVpcRequest['vpc_id'];
                    body = updateVpcRequest['body'];
                }
            }

        
            if (vpcId === null || vpcId === undefined) {
            throw new RequiredError('vpcId','Required parameter vpcId was null or undefined when calling updateVpc.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vpc_id': vpcId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): VpcClient {
    return new VpcClient(client);
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