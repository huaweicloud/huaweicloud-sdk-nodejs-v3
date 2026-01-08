import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AddClouddcnSubnetsTagsRequest } from './model/AddClouddcnSubnetsTagsRequest';
import { AddClouddcnSubnetsTagsResponse } from './model/AddClouddcnSubnetsTagsResponse';
import { AddExtendCidrOption } from './model/AddExtendCidrOption';
import { AddFirewallRulesRequest } from './model/AddFirewallRulesRequest';
import { AddFirewallRulesRequestBody } from './model/AddFirewallRulesRequestBody';
import { AddFirewallRulesResponse } from './model/AddFirewallRulesResponse';
import { AddResourceTagsRequestBody } from './model/AddResourceTagsRequestBody';
import { AddResourceTagsRequestBodyTag } from './model/AddResourceTagsRequestBodyTag';
import { AddSecurityGroupsRequest } from './model/AddSecurityGroupsRequest';
import { AddSecurityGroupsRequestBody } from './model/AddSecurityGroupsRequestBody';
import { AddSecurityGroupsResponse } from './model/AddSecurityGroupsResponse';
import { AddSourcesToTrafficMirrorSessionRequest } from './model/AddSourcesToTrafficMirrorSessionRequest';
import { AddSourcesToTrafficMirrorSessionRequestBody } from './model/AddSourcesToTrafficMirrorSessionRequestBody';
import { AddSourcesToTrafficMirrorSessionResponse } from './model/AddSourcesToTrafficMirrorSessionResponse';
import { AddVpcExtendCidrRequest } from './model/AddVpcExtendCidrRequest';
import { AddVpcExtendCidrRequestBody } from './model/AddVpcExtendCidrRequestBody';
import { AddVpcExtendCidrResponse } from './model/AddVpcExtendCidrResponse';
import { AddressGroup } from './model/AddressGroup';
import { AddressGroupDependency } from './model/AddressGroupDependency';
import { AllowedAddressPair } from './model/AllowedAddressPair';
import { AssociateSubnetFirewallRequest } from './model/AssociateSubnetFirewallRequest';
import { AssociateSubnetFirewallRequestBody } from './model/AssociateSubnetFirewallRequestBody';
import { AssociateSubnetFirewallResponse } from './model/AssociateSubnetFirewallResponse';
import { BatchCreateClouddcnSubnetsTagsRequest } from './model/BatchCreateClouddcnSubnetsTagsRequest';
import { BatchCreateClouddcnSubnetsTagsResponse } from './model/BatchCreateClouddcnSubnetsTagsResponse';
import { BatchCreateFirewallTagsRequest } from './model/BatchCreateFirewallTagsRequest';
import { BatchCreateFirewallTagsRequestBody } from './model/BatchCreateFirewallTagsRequestBody';
import { BatchCreateFirewallTagsResponse } from './model/BatchCreateFirewallTagsResponse';
import { BatchCreatePortTagsRequest } from './model/BatchCreatePortTagsRequest';
import { BatchCreatePortTagsRequestBody } from './model/BatchCreatePortTagsRequestBody';
import { BatchCreatePortTagsResponse } from './model/BatchCreatePortTagsResponse';
import { BatchCreateRequestBody } from './model/BatchCreateRequestBody';
import { BatchCreateRequestBodySysTags } from './model/BatchCreateRequestBodySysTags';
import { BatchCreateRequestBodyTags } from './model/BatchCreateRequestBodyTags';
import { BatchCreateSecurityGroupRulesOption } from './model/BatchCreateSecurityGroupRulesOption';
import { BatchCreateSecurityGroupRulesRequest } from './model/BatchCreateSecurityGroupRulesRequest';
import { BatchCreateSecurityGroupRulesRequestBody } from './model/BatchCreateSecurityGroupRulesRequestBody';
import { BatchCreateSecurityGroupRulesResponse } from './model/BatchCreateSecurityGroupRulesResponse';
import { BatchCreateSubNetworkInterfaceOption } from './model/BatchCreateSubNetworkInterfaceOption';
import { BatchCreateSubNetworkInterfaceRequest } from './model/BatchCreateSubNetworkInterfaceRequest';
import { BatchCreateSubNetworkInterfaceRequestBody } from './model/BatchCreateSubNetworkInterfaceRequestBody';
import { BatchCreateSubNetworkInterfaceResponse } from './model/BatchCreateSubNetworkInterfaceResponse';
import { BatchDeleteClouddcnSubnetsTagsRequest } from './model/BatchDeleteClouddcnSubnetsTagsRequest';
import { BatchDeleteClouddcnSubnetsTagsResponse } from './model/BatchDeleteClouddcnSubnetsTagsResponse';
import { BatchDeleteFirewallTagsRequest } from './model/BatchDeleteFirewallTagsRequest';
import { BatchDeleteFirewallTagsRequestBody } from './model/BatchDeleteFirewallTagsRequestBody';
import { BatchDeleteFirewallTagsResponse } from './model/BatchDeleteFirewallTagsResponse';
import { BatchDeletePortTagsRequest } from './model/BatchDeletePortTagsRequest';
import { BatchDeletePortTagsRequestBody } from './model/BatchDeletePortTagsRequestBody';
import { BatchDeletePortTagsResponse } from './model/BatchDeletePortTagsResponse';
import { BatchDeleteRequestBody } from './model/BatchDeleteRequestBody';
import { BatchDeleteRequestBodySysTags } from './model/BatchDeleteRequestBodySysTags';
import { BatchDeleteRequestBodyTags } from './model/BatchDeleteRequestBodyTags';
import { BindingVifDetails } from './model/BindingVifDetails';
import { CloudResource } from './model/CloudResource';
import { ClouddcnResource } from './model/ClouddcnResource';
import { ClouddcnSubnet } from './model/ClouddcnSubnet';
import { CountFirewallsByTagsRequest } from './model/CountFirewallsByTagsRequest';
import { CountFirewallsByTagsRequestBody } from './model/CountFirewallsByTagsRequestBody';
import { CountFirewallsByTagsResponse } from './model/CountFirewallsByTagsResponse';
import { CountPortsByTagsRequest } from './model/CountPortsByTagsRequest';
import { CountPortsByTagsRequestBody } from './model/CountPortsByTagsRequestBody';
import { CountPortsByTagsResponse } from './model/CountPortsByTagsResponse';
import { CreateAddressGroupOption } from './model/CreateAddressGroupOption';
import { CreateAddressGroupRequest } from './model/CreateAddressGroupRequest';
import { CreateAddressGroupRequestBody } from './model/CreateAddressGroupRequestBody';
import { CreateAddressGroupResponse } from './model/CreateAddressGroupResponse';
import { CreateClouddcnSubnetOption } from './model/CreateClouddcnSubnetOption';
import { CreateClouddcnSubnetRequest } from './model/CreateClouddcnSubnetRequest';
import { CreateClouddcnSubnetRequestBody } from './model/CreateClouddcnSubnetRequestBody';
import { CreateClouddcnSubnetResponse } from './model/CreateClouddcnSubnetResponse';
import { CreateFirewallOption } from './model/CreateFirewallOption';
import { CreateFirewallRequest } from './model/CreateFirewallRequest';
import { CreateFirewallRequestBody } from './model/CreateFirewallRequestBody';
import { CreateFirewallResponse } from './model/CreateFirewallResponse';
import { CreateFirewallTagRequest } from './model/CreateFirewallTagRequest';
import { CreateFirewallTagRequestBody } from './model/CreateFirewallTagRequestBody';
import { CreateFirewallTagResponse } from './model/CreateFirewallTagResponse';
import { CreatePortTagRequest } from './model/CreatePortTagRequest';
import { CreatePortTagRequestBody } from './model/CreatePortTagRequestBody';
import { CreatePortTagResponse } from './model/CreatePortTagResponse';
import { CreateSecurityGroupOption } from './model/CreateSecurityGroupOption';
import { CreateSecurityGroupRequest } from './model/CreateSecurityGroupRequest';
import { CreateSecurityGroupRequestBody } from './model/CreateSecurityGroupRequestBody';
import { CreateSecurityGroupResponse } from './model/CreateSecurityGroupResponse';
import { CreateSecurityGroupRuleOption } from './model/CreateSecurityGroupRuleOption';
import { CreateSecurityGroupRuleRequest } from './model/CreateSecurityGroupRuleRequest';
import { CreateSecurityGroupRuleRequestBody } from './model/CreateSecurityGroupRuleRequestBody';
import { CreateSecurityGroupRuleResponse } from './model/CreateSecurityGroupRuleResponse';
import { CreateSubNetworkInterfaceOption } from './model/CreateSubNetworkInterfaceOption';
import { CreateSubNetworkInterfaceRequest } from './model/CreateSubNetworkInterfaceRequest';
import { CreateSubNetworkInterfaceRequestBody } from './model/CreateSubNetworkInterfaceRequestBody';
import { CreateSubNetworkInterfaceResponse } from './model/CreateSubNetworkInterfaceResponse';
import { CreateTrafficMirrorFilterOption } from './model/CreateTrafficMirrorFilterOption';
import { CreateTrafficMirrorFilterRequest } from './model/CreateTrafficMirrorFilterRequest';
import { CreateTrafficMirrorFilterRequestBody } from './model/CreateTrafficMirrorFilterRequestBody';
import { CreateTrafficMirrorFilterResponse } from './model/CreateTrafficMirrorFilterResponse';
import { CreateTrafficMirrorFilterRuleOption } from './model/CreateTrafficMirrorFilterRuleOption';
import { CreateTrafficMirrorFilterRuleRequest } from './model/CreateTrafficMirrorFilterRuleRequest';
import { CreateTrafficMirrorFilterRuleRequestBody } from './model/CreateTrafficMirrorFilterRuleRequestBody';
import { CreateTrafficMirrorFilterRuleResponse } from './model/CreateTrafficMirrorFilterRuleResponse';
import { CreateTrafficMirrorSessionOption } from './model/CreateTrafficMirrorSessionOption';
import { CreateTrafficMirrorSessionRequest } from './model/CreateTrafficMirrorSessionRequest';
import { CreateTrafficMirrorSessionRequestBody } from './model/CreateTrafficMirrorSessionRequestBody';
import { CreateTrafficMirrorSessionResponse } from './model/CreateTrafficMirrorSessionResponse';
import { CreateVirsubnetCidrReservationOption } from './model/CreateVirsubnetCidrReservationOption';
import { CreateVirsubnetCidrReservationRequest } from './model/CreateVirsubnetCidrReservationRequest';
import { CreateVirsubnetCidrReservationRequestBody } from './model/CreateVirsubnetCidrReservationRequestBody';
import { CreateVirsubnetCidrReservationResponse } from './model/CreateVirsubnetCidrReservationResponse';
import { CreateVpcOption } from './model/CreateVpcOption';
import { CreateVpcRequest } from './model/CreateVpcRequest';
import { CreateVpcRequestBody } from './model/CreateVpcRequestBody';
import { CreateVpcResponse } from './model/CreateVpcResponse';
import { DeleteAddressGroupRequest } from './model/DeleteAddressGroupRequest';
import { DeleteAddressGroupResponse } from './model/DeleteAddressGroupResponse';
import { DeleteClouddcnSubnetRequest } from './model/DeleteClouddcnSubnetRequest';
import { DeleteClouddcnSubnetResponse } from './model/DeleteClouddcnSubnetResponse';
import { DeleteClouddcnSubnetsTagRequest } from './model/DeleteClouddcnSubnetsTagRequest';
import { DeleteClouddcnSubnetsTagResponse } from './model/DeleteClouddcnSubnetsTagResponse';
import { DeleteFirewallRequest } from './model/DeleteFirewallRequest';
import { DeleteFirewallResponse } from './model/DeleteFirewallResponse';
import { DeleteFirewallTagRequest } from './model/DeleteFirewallTagRequest';
import { DeleteFirewallTagResponse } from './model/DeleteFirewallTagResponse';
import { DeleteIpAddressGroupForceRequest } from './model/DeleteIpAddressGroupForceRequest';
import { DeleteIpAddressGroupForceResponse } from './model/DeleteIpAddressGroupForceResponse';
import { DeletePortTagRequest } from './model/DeletePortTagRequest';
import { DeletePortTagResponse } from './model/DeletePortTagResponse';
import { DeleteResourceTagRequestBody } from './model/DeleteResourceTagRequestBody';
import { DeleteSecurityGroupRequest } from './model/DeleteSecurityGroupRequest';
import { DeleteSecurityGroupResponse } from './model/DeleteSecurityGroupResponse';
import { DeleteSecurityGroupRuleRequest } from './model/DeleteSecurityGroupRuleRequest';
import { DeleteSecurityGroupRuleResponse } from './model/DeleteSecurityGroupRuleResponse';
import { DeleteSubNetworkInterfaceRequest } from './model/DeleteSubNetworkInterfaceRequest';
import { DeleteSubNetworkInterfaceResponse } from './model/DeleteSubNetworkInterfaceResponse';
import { DeleteTrafficMirrorFilterRequest } from './model/DeleteTrafficMirrorFilterRequest';
import { DeleteTrafficMirrorFilterResponse } from './model/DeleteTrafficMirrorFilterResponse';
import { DeleteTrafficMirrorFilterRuleRequest } from './model/DeleteTrafficMirrorFilterRuleRequest';
import { DeleteTrafficMirrorFilterRuleResponse } from './model/DeleteTrafficMirrorFilterRuleResponse';
import { DeleteTrafficMirrorSessionRequest } from './model/DeleteTrafficMirrorSessionRequest';
import { DeleteTrafficMirrorSessionResponse } from './model/DeleteTrafficMirrorSessionResponse';
import { DeleteVirsubnetCidrReservationRequest } from './model/DeleteVirsubnetCidrReservationRequest';
import { DeleteVirsubnetCidrReservationResponse } from './model/DeleteVirsubnetCidrReservationResponse';
import { DeleteVpcRequest } from './model/DeleteVpcRequest';
import { DeleteVpcResponse } from './model/DeleteVpcResponse';
import { Dependency } from './model/Dependency';
import { DisassociateSubnetFirewallRequest } from './model/DisassociateSubnetFirewallRequest';
import { DisassociateSubnetFirewallRequestBody } from './model/DisassociateSubnetFirewallRequestBody';
import { DisassociateSubnetFirewallResponse } from './model/DisassociateSubnetFirewallResponse';
import { FirewallAssociation } from './model/FirewallAssociation';
import { FirewallDetail } from './model/FirewallDetail';
import { FirewallInsertRuleItemOption } from './model/FirewallInsertRuleItemOption';
import { FirewallInsertRuleOption } from './model/FirewallInsertRuleOption';
import { FirewallRemoveRuleItemOption } from './model/FirewallRemoveRuleItemOption';
import { FirewallRemoveRuleOption } from './model/FirewallRemoveRuleOption';
import { FirewallRuleDetail } from './model/FirewallRuleDetail';
import { FirewallUpdateRuleItemOption } from './model/FirewallUpdateRuleItemOption';
import { FirewallUpdateRuleOption } from './model/FirewallUpdateRuleOption';
import { InsertSecurityGroupOption } from './model/InsertSecurityGroupOption';
import { IpExtraSetOption } from './model/IpExtraSetOption';
import { IpExtraSetRespOption } from './model/IpExtraSetRespOption';
import { ListAddressGroupRequest } from './model/ListAddressGroupRequest';
import { ListAddressGroupResponse } from './model/ListAddressGroupResponse';
import { ListAddressGroupsDependencyRequest } from './model/ListAddressGroupsDependencyRequest';
import { ListAddressGroupsDependencyResponse } from './model/ListAddressGroupsDependencyResponse';
import { ListClouddcnSubnetsCountFilterTagsRequest } from './model/ListClouddcnSubnetsCountFilterTagsRequest';
import { ListClouddcnSubnetsCountFilterTagsResponse } from './model/ListClouddcnSubnetsCountFilterTagsResponse';
import { ListClouddcnSubnetsFilterTagsRequest } from './model/ListClouddcnSubnetsFilterTagsRequest';
import { ListClouddcnSubnetsFilterTagsResponse } from './model/ListClouddcnSubnetsFilterTagsResponse';
import { ListClouddcnSubnetsRequest } from './model/ListClouddcnSubnetsRequest';
import { ListClouddcnSubnetsResponse } from './model/ListClouddcnSubnetsResponse';
import { ListClouddcnSubnetsTagsRequest } from './model/ListClouddcnSubnetsTagsRequest';
import { ListClouddcnSubnetsTagsResponse } from './model/ListClouddcnSubnetsTagsResponse';
import { ListFirewallDetail } from './model/ListFirewallDetail';
import { ListFirewallRequest } from './model/ListFirewallRequest';
import { ListFirewallResponse } from './model/ListFirewallResponse';
import { ListFirewallTagsRequest } from './model/ListFirewallTagsRequest';
import { ListFirewallTagsResponse } from './model/ListFirewallTagsResponse';
import { ListFirewallsByTagsRequest } from './model/ListFirewallsByTagsRequest';
import { ListFirewallsByTagsRequestBody } from './model/ListFirewallsByTagsRequestBody';
import { ListFirewallsByTagsResponse } from './model/ListFirewallsByTagsResponse';
import { ListPortTagsRequest } from './model/ListPortTagsRequest';
import { ListPortTagsResponse } from './model/ListPortTagsResponse';
import { ListPortsByTagsRequest } from './model/ListPortsByTagsRequest';
import { ListPortsByTagsRequestBody } from './model/ListPortsByTagsRequestBody';
import { ListPortsByTagsResponse } from './model/ListPortsByTagsResponse';
import { ListPortsRequest } from './model/ListPortsRequest';
import { ListPortsResponse } from './model/ListPortsResponse';
import { ListResourceResp } from './model/ListResourceResp';
import { ListResourcesByTagsRequestBody } from './model/ListResourcesByTagsRequestBody';
import { ListSecurityGroupRulesRequest } from './model/ListSecurityGroupRulesRequest';
import { ListSecurityGroupRulesResponse } from './model/ListSecurityGroupRulesResponse';
import { ListSecurityGroupsRequest } from './model/ListSecurityGroupsRequest';
import { ListSecurityGroupsResponse } from './model/ListSecurityGroupsResponse';
import { ListSubNetworkInterfacesRequest } from './model/ListSubNetworkInterfacesRequest';
import { ListSubNetworkInterfacesResponse } from './model/ListSubNetworkInterfacesResponse';
import { ListTag } from './model/ListTag';
import { ListTrafficMirrorFilterRulesRequest } from './model/ListTrafficMirrorFilterRulesRequest';
import { ListTrafficMirrorFilterRulesResponse } from './model/ListTrafficMirrorFilterRulesResponse';
import { ListTrafficMirrorFiltersRequest } from './model/ListTrafficMirrorFiltersRequest';
import { ListTrafficMirrorFiltersResponse } from './model/ListTrafficMirrorFiltersResponse';
import { ListTrafficMirrorSessionsRequest } from './model/ListTrafficMirrorSessionsRequest';
import { ListTrafficMirrorSessionsResponse } from './model/ListTrafficMirrorSessionsResponse';
import { ListVirsubnetCidrReservationsRequest } from './model/ListVirsubnetCidrReservationsRequest';
import { ListVirsubnetCidrReservationsResponse } from './model/ListVirsubnetCidrReservationsResponse';
import { ListVirsubnetsRequest } from './model/ListVirsubnetsRequest';
import { ListVirsubnetsResponse } from './model/ListVirsubnetsResponse';
import { ListVpcsRequest } from './model/ListVpcsRequest';
import { ListVpcsResponse } from './model/ListVpcsResponse';
import { Match } from './model/Match';
import { MigrateSubNetworkInterfaceOption } from './model/MigrateSubNetworkInterfaceOption';
import { MigrateSubNetworkInterfaceRequest } from './model/MigrateSubNetworkInterfaceRequest';
import { MigrateSubNetworkInterfaceRequestBody } from './model/MigrateSubNetworkInterfaceRequestBody';
import { MigrateSubNetworkInterfaceResponse } from './model/MigrateSubNetworkInterfaceResponse';
import { PageInfo } from './model/PageInfo';
import { Port } from './model/Port';
import { PortExtraDhcpOpt } from './model/PortExtraDhcpOpt';
import { PrivateIpInfo } from './model/PrivateIpInfo';
import { RemoveExtendCidrOption } from './model/RemoveExtendCidrOption';
import { RemoveFirewallRulesRequest } from './model/RemoveFirewallRulesRequest';
import { RemoveFirewallRulesRequestBody } from './model/RemoveFirewallRulesRequestBody';
import { RemoveFirewallRulesResponse } from './model/RemoveFirewallRulesResponse';
import { RemoveSecurityGroupOption } from './model/RemoveSecurityGroupOption';
import { RemoveSecurityGroupsRequest } from './model/RemoveSecurityGroupsRequest';
import { RemoveSecurityGroupsRequestBody } from './model/RemoveSecurityGroupsRequestBody';
import { RemoveSecurityGroupsResponse } from './model/RemoveSecurityGroupsResponse';
import { RemoveSourcesFromTrafficMirrorSessionRequest } from './model/RemoveSourcesFromTrafficMirrorSessionRequest';
import { RemoveSourcesFromTrafficMirrorSessionRequestBody } from './model/RemoveSourcesFromTrafficMirrorSessionRequestBody';
import { RemoveSourcesFromTrafficMirrorSessionResponse } from './model/RemoveSourcesFromTrafficMirrorSessionResponse';
import { RemoveVpcExtendCidrRequest } from './model/RemoveVpcExtendCidrRequest';
import { RemoveVpcExtendCidrRequestBody } from './model/RemoveVpcExtendCidrRequestBody';
import { RemoveVpcExtendCidrResponse } from './model/RemoveVpcExtendCidrResponse';
import { ResourceTag } from './model/ResourceTag';
import { ResourceTags } from './model/ResourceTags';
import { ResponseTag } from './model/ResponseTag';
import { SecurityGroup } from './model/SecurityGroup';
import { SecurityGroupInfo } from './model/SecurityGroupInfo';
import { SecurityGroupRule } from './model/SecurityGroupRule';
import { ShowAddressGroupRequest } from './model/ShowAddressGroupRequest';
import { ShowAddressGroupResponse } from './model/ShowAddressGroupResponse';
import { ShowClouddcnSubnetRequest } from './model/ShowClouddcnSubnetRequest';
import { ShowClouddcnSubnetResponse } from './model/ShowClouddcnSubnetResponse';
import { ShowClouddcnSubnetsTagsRequest } from './model/ShowClouddcnSubnetsTagsRequest';
import { ShowClouddcnSubnetsTagsResponse } from './model/ShowClouddcnSubnetsTagsResponse';
import { ShowFirewallRequest } from './model/ShowFirewallRequest';
import { ShowFirewallResponse } from './model/ShowFirewallResponse';
import { ShowFirewallTagsRequest } from './model/ShowFirewallTagsRequest';
import { ShowFirewallTagsResponse } from './model/ShowFirewallTagsResponse';
import { ShowPortRequest } from './model/ShowPortRequest';
import { ShowPortResponse } from './model/ShowPortResponse';
import { ShowPortTagsRequest } from './model/ShowPortTagsRequest';
import { ShowPortTagsResponse } from './model/ShowPortTagsResponse';
import { ShowQuotaRequest } from './model/ShowQuotaRequest';
import { ShowQuotaResponse } from './model/ShowQuotaResponse';
import { ShowSecurityGroupRequest } from './model/ShowSecurityGroupRequest';
import { ShowSecurityGroupResponse } from './model/ShowSecurityGroupResponse';
import { ShowSecurityGroupRuleRequest } from './model/ShowSecurityGroupRuleRequest';
import { ShowSecurityGroupRuleResponse } from './model/ShowSecurityGroupRuleResponse';
import { ShowSubNetworkInterfaceRequest } from './model/ShowSubNetworkInterfaceRequest';
import { ShowSubNetworkInterfaceResponse } from './model/ShowSubNetworkInterfaceResponse';
import { ShowSubNetworkInterfacesQuantityRequest } from './model/ShowSubNetworkInterfacesQuantityRequest';
import { ShowSubNetworkInterfacesQuantityResponse } from './model/ShowSubNetworkInterfacesQuantityResponse';
import { ShowTrafficMirrorFilterRequest } from './model/ShowTrafficMirrorFilterRequest';
import { ShowTrafficMirrorFilterResponse } from './model/ShowTrafficMirrorFilterResponse';
import { ShowTrafficMirrorFilterRuleRequest } from './model/ShowTrafficMirrorFilterRuleRequest';
import { ShowTrafficMirrorFilterRuleResponse } from './model/ShowTrafficMirrorFilterRuleResponse';
import { ShowTrafficMirrorSessionRequest } from './model/ShowTrafficMirrorSessionRequest';
import { ShowTrafficMirrorSessionResponse } from './model/ShowTrafficMirrorSessionResponse';
import { ShowVirsubnetCidrReservationRequest } from './model/ShowVirsubnetCidrReservationRequest';
import { ShowVirsubnetCidrReservationResponse } from './model/ShowVirsubnetCidrReservationResponse';
import { ShowVirsubnetRequest } from './model/ShowVirsubnetRequest';
import { ShowVirsubnetResponse } from './model/ShowVirsubnetResponse';
import { ShowVpcRequest } from './model/ShowVpcRequest';
import { ShowVpcResponse } from './model/ShowVpcResponse';
import { SubNetworkInterface } from './model/SubNetworkInterface';
import { SubnetCidr } from './model/SubnetCidr';
import { SubnetExtraDhcpOpt } from './model/SubnetExtraDhcpOpt';
import { SysTag } from './model/SysTag';
import { Tag } from './model/Tag';
import { TagEntity } from './model/TagEntity';
import { TrafficMirrorFilter } from './model/TrafficMirrorFilter';
import { TrafficMirrorFilterRule } from './model/TrafficMirrorFilterRule';
import { TrafficMirrorSession } from './model/TrafficMirrorSession';
import { TrafficMirrorSourcesOption } from './model/TrafficMirrorSourcesOption';
import { UpdateAddressGroupOption } from './model/UpdateAddressGroupOption';
import { UpdateAddressGroupRequest } from './model/UpdateAddressGroupRequest';
import { UpdateAddressGroupRequestBody } from './model/UpdateAddressGroupRequestBody';
import { UpdateAddressGroupResponse } from './model/UpdateAddressGroupResponse';
import { UpdateClouddcnSubnetOption } from './model/UpdateClouddcnSubnetOption';
import { UpdateClouddcnSubnetRequest } from './model/UpdateClouddcnSubnetRequest';
import { UpdateClouddcnSubnetRequestBody } from './model/UpdateClouddcnSubnetRequestBody';
import { UpdateClouddcnSubnetResponse } from './model/UpdateClouddcnSubnetResponse';
import { UpdateFirewallOption } from './model/UpdateFirewallOption';
import { UpdateFirewallRequest } from './model/UpdateFirewallRequest';
import { UpdateFirewallRequestBody } from './model/UpdateFirewallRequestBody';
import { UpdateFirewallResponse } from './model/UpdateFirewallResponse';
import { UpdateFirewallRulesRequest } from './model/UpdateFirewallRulesRequest';
import { UpdateFirewallRulesRequestBody } from './model/UpdateFirewallRulesRequestBody';
import { UpdateFirewallRulesResponse } from './model/UpdateFirewallRulesResponse';
import { UpdateSecurityGroupOption } from './model/UpdateSecurityGroupOption';
import { UpdateSecurityGroupRequest } from './model/UpdateSecurityGroupRequest';
import { UpdateSecurityGroupRequestBody } from './model/UpdateSecurityGroupRequestBody';
import { UpdateSecurityGroupResponse } from './model/UpdateSecurityGroupResponse';
import { UpdateSubNetworkInterfaceOption } from './model/UpdateSubNetworkInterfaceOption';
import { UpdateSubNetworkInterfaceRequest } from './model/UpdateSubNetworkInterfaceRequest';
import { UpdateSubNetworkInterfaceRequestBody } from './model/UpdateSubNetworkInterfaceRequestBody';
import { UpdateSubNetworkInterfaceResponse } from './model/UpdateSubNetworkInterfaceResponse';
import { UpdateTrafficMirrorFilterOption } from './model/UpdateTrafficMirrorFilterOption';
import { UpdateTrafficMirrorFilterRequest } from './model/UpdateTrafficMirrorFilterRequest';
import { UpdateTrafficMirrorFilterRequestBody } from './model/UpdateTrafficMirrorFilterRequestBody';
import { UpdateTrafficMirrorFilterResponse } from './model/UpdateTrafficMirrorFilterResponse';
import { UpdateTrafficMirrorFilterRuleOption } from './model/UpdateTrafficMirrorFilterRuleOption';
import { UpdateTrafficMirrorFilterRuleRequest } from './model/UpdateTrafficMirrorFilterRuleRequest';
import { UpdateTrafficMirrorFilterRuleRequestBody } from './model/UpdateTrafficMirrorFilterRuleRequestBody';
import { UpdateTrafficMirrorFilterRuleResponse } from './model/UpdateTrafficMirrorFilterRuleResponse';
import { UpdateTrafficMirrorSessionOption } from './model/UpdateTrafficMirrorSessionOption';
import { UpdateTrafficMirrorSessionRequest } from './model/UpdateTrafficMirrorSessionRequest';
import { UpdateTrafficMirrorSessionRequestBody } from './model/UpdateTrafficMirrorSessionRequestBody';
import { UpdateTrafficMirrorSessionResponse } from './model/UpdateTrafficMirrorSessionResponse';
import { UpdateVirsubnetCidrReservationOption } from './model/UpdateVirsubnetCidrReservationOption';
import { UpdateVirsubnetCidrReservationRequest } from './model/UpdateVirsubnetCidrReservationRequest';
import { UpdateVirsubnetCidrReservationRequestBody } from './model/UpdateVirsubnetCidrReservationRequestBody';
import { UpdateVirsubnetCidrReservationResponse } from './model/UpdateVirsubnetCidrReservationResponse';
import { UpdateVpcOption } from './model/UpdateVpcOption';
import { UpdateVpcRequest } from './model/UpdateVpcRequest';
import { UpdateVpcRequestBody } from './model/UpdateVpcRequestBody';
import { UpdateVpcResponse } from './model/UpdateVpcResponse';
import { Virsubnet } from './model/Virsubnet';
import { VirsubnetCidrReservation } from './model/VirsubnetCidrReservation';
import { Vpc } from './model/Vpc';
import { VpcQuotas } from './model/VpcQuotas';

export class VpcClient {
    public static newBuilder(): ClientBuilder<VpcClient> {
            let client = new ClientBuilder<VpcClient>(newClient);
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
     * 端口插入安全组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 端口插入安全组
     * @param {string} portId 端口的唯一标识
     * @param {AddSecurityGroupsRequestBody} addSecurityGroupsRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addSecurityGroups(addSecurityGroupsRequest?: AddSecurityGroupsRequest): Promise<AddSecurityGroupsResponse> {
        const options = ParamCreater().addSecurityGroups(addSecurityGroupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 流量镜像会话添加镜像源
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 流量镜像会话添加镜像源
     * @param {string} trafficMirrorSessionId 流量镜像会话ID
     * @param {AddSourcesToTrafficMirrorSessionRequestBody} addSourcesToTrafficMirrorSessionRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addSourcesToTrafficMirrorSession(addSourcesToTrafficMirrorSessionRequest?: AddSourcesToTrafficMirrorSessionRequest): Promise<AddSourcesToTrafficMirrorSessionResponse> {
        const options = ParamCreater().addSourcesToTrafficMirrorSession(addSourcesToTrafficMirrorSessionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 为指定的端口批量添加标签。
     * 此接口为幂等接口：创建时如果请求体中存在重复key则报错。创建时，不允许设置重复key数据，如果数据库已存在该key，就覆盖value的值。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加端口资源标签
     * @param {string} portId 功能说明：端口唯一标识 取值范围：合法UUID 约束：ID对应的端口必须存在
     * @param {BatchCreatePortTagsRequestBody} [batchCreatePortTagsRequestBody] This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreatePortTags(batchCreatePortTagsRequest?: BatchCreatePortTagsRequest): Promise<BatchCreatePortTagsResponse> {
        const options = ParamCreater().batchCreatePortTags(batchCreatePortTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在特定安全组下批量创建安全组规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量创建安全组规则
     * @param {string} securityGroupId 安全组ID
     * @param {BatchCreateSecurityGroupRulesRequestBody} batchCreateSecurityGroupRulesRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateSecurityGroupRules(batchCreateSecurityGroupRulesRequest?: BatchCreateSecurityGroupRulesRequest): Promise<BatchCreateSecurityGroupRulesResponse> {
        const options = ParamCreater().batchCreateSecurityGroupRules(batchCreateSecurityGroupRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量创建辅助弹性网卡
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量创建辅助弹性网卡
     * @param {BatchCreateSubNetworkInterfaceRequestBody} batchCreateSubNetworkInterfaceRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateSubNetworkInterface(batchCreateSubNetworkInterfaceRequest?: BatchCreateSubNetworkInterfaceRequest): Promise<BatchCreateSubNetworkInterfaceResponse> {
        const options = ParamCreater().batchCreateSubNetworkInterface(batchCreateSubNetworkInterfaceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 为指定的端口资源实例批量删除标签。
     * 此接口为幂等接口：删除时，如果删除的标签不存在，默认处理成功；删除时不对标签字符集范围做校验。删除时tags结构体不能缺失，key不能为空，或者空字符串。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除端口资源标签
     * @param {string} portId 功能说明：端口唯一标识 取值范围：合法UUID 约束：ID对应的端口必须存在
     * @param {BatchDeletePortTagsRequestBody} [batchDeletePortTagsRequestBody] This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeletePortTags(batchDeletePortTagsRequest?: BatchDeletePortTagsRequest): Promise<BatchDeletePortTagsResponse> {
        const options = ParamCreater().batchDeletePortTags(batchDeletePortTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 使用标签过滤查询端口实例数量。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询端口资源实例数量
     * @param {CountPortsByTagsRequestBody} [countPortsByTagsRequestBody] This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public countPortsByTags(countPortsByTagsRequest?: CountPortsByTagsRequest): Promise<CountPortsByTagsResponse> {
        const options = ParamCreater().countPortsByTags(countPortsByTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 给指定端口资源实例增加标签信息。
     * 此接口为幂等接口：创建时，如果创建的标签已经存在（key相同），则覆盖。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加端口资源标签
     * @param {string} portId 功能说明：端口唯一标识 取值范围：合法UUID 约束：ID对应的端口必须存在
     * @param {CreatePortTagRequestBody} createPortTagRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPortTag(createPortTagRequest?: CreatePortTagRequest): Promise<CreatePortTagResponse> {
        const options = ParamCreater().createPortTag(createPortTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建安全组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建安全组
     * @param {CreateSecurityGroupRequestBody} createSecurityGroupRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSecurityGroup(createSecurityGroupRequest?: CreateSecurityGroupRequest): Promise<CreateSecurityGroupResponse> {
        const options = ParamCreater().createSecurityGroup(createSecurityGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建安全组规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建安全组规则
     * @param {CreateSecurityGroupRuleRequestBody} createSecurityGroupRuleRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSecurityGroupRule(createSecurityGroupRuleRequest?: CreateSecurityGroupRuleRequest): Promise<CreateSecurityGroupRuleResponse> {
        const options = ParamCreater().createSecurityGroupRule(createSecurityGroupRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建辅助弹性网卡
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建辅助弹性网卡
     * @param {CreateSubNetworkInterfaceRequestBody} createSubNetworkInterfaceRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSubNetworkInterface(createSubNetworkInterfaceRequest?: CreateSubNetworkInterfaceRequest): Promise<CreateSubNetworkInterfaceResponse> {
        const options = ParamCreater().createSubNetworkInterface(createSubNetworkInterfaceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建流量镜像筛选条件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建流量镜像筛选条件
     * @param {CreateTrafficMirrorFilterRequestBody} createTrafficMirrorFilterRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTrafficMirrorFilter(createTrafficMirrorFilterRequest?: CreateTrafficMirrorFilterRequest): Promise<CreateTrafficMirrorFilterResponse> {
        const options = ParamCreater().createTrafficMirrorFilter(createTrafficMirrorFilterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建流量镜像筛选规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建流量镜像筛选规则
     * @param {CreateTrafficMirrorFilterRuleRequestBody} createTrafficMirrorFilterRuleRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTrafficMirrorFilterRule(createTrafficMirrorFilterRuleRequest?: CreateTrafficMirrorFilterRuleRequest): Promise<CreateTrafficMirrorFilterRuleResponse> {
        const options = ParamCreater().createTrafficMirrorFilterRule(createTrafficMirrorFilterRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建流量镜像会话
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建流量镜像会话
     * @param {CreateTrafficMirrorSessionRequestBody} createTrafficMirrorSessionRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTrafficMirrorSession(createTrafficMirrorSessionRequest?: CreateTrafficMirrorSessionRequest): Promise<CreateTrafficMirrorSessionResponse> {
        const options = ParamCreater().createTrafficMirrorSession(createTrafficMirrorSessionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 子网预留网段是子网网段范围的IP网段，此IP网段内的IP不会被子网内的实例占用。用户可以通过创建子网预留网段来预留某个IP网段，用于后续的特殊场景使用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建子网预留网段
     * @param {CreateVirsubnetCidrReservationRequestBody} createVirsubnetCidrReservationRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createVirsubnetCidrReservation(createVirsubnetCidrReservationRequest?: CreateVirsubnetCidrReservationRequest): Promise<CreateVirsubnetCidrReservationResponse> {
        const options = ParamCreater().createVirsubnetCidrReservation(createVirsubnetCidrReservationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定端口的标签信息。
     * 该接口为幂等接口：删除的key不存在报404，key不能为空或者空字符串。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除端口资源标签
     * @param {string} portId 功能说明：端口唯一标识 取值范围：合法UUID 约束：ID对应的端口必须存在
     * @param {string} tagKey 功能说明：标签键
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePortTag(deletePortTagRequest?: DeletePortTagRequest): Promise<DeletePortTagResponse> {
        const options = ParamCreater().deletePortTag(deletePortTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除安全组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除安全组
     * @param {string} securityGroupId 安全组资源ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSecurityGroup(deleteSecurityGroupRequest?: DeleteSecurityGroupRequest): Promise<DeleteSecurityGroupResponse> {
        const options = ParamCreater().deleteSecurityGroup(deleteSecurityGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

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
    public deleteSecurityGroupRule(deleteSecurityGroupRuleRequest?: DeleteSecurityGroupRuleRequest): Promise<DeleteSecurityGroupRuleResponse> {
        const options = ParamCreater().deleteSecurityGroupRule(deleteSecurityGroupRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除辅助弹性网卡
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除辅助弹性网卡
     * @param {string} subNetworkInterfaceId 弹性辅助网卡唯一标识
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSubNetworkInterface(deleteSubNetworkInterfaceRequest?: DeleteSubNetworkInterfaceRequest): Promise<DeleteSubNetworkInterfaceResponse> {
        const options = ParamCreater().deleteSubNetworkInterface(deleteSubNetworkInterfaceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除流量镜像筛选条件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除流量镜像筛选条件
     * @param {string} trafficMirrorFilterId 流量镜像筛选条件ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTrafficMirrorFilter(deleteTrafficMirrorFilterRequest?: DeleteTrafficMirrorFilterRequest): Promise<DeleteTrafficMirrorFilterResponse> {
        const options = ParamCreater().deleteTrafficMirrorFilter(deleteTrafficMirrorFilterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除流量镜像筛选规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除流量镜像筛选规则
     * @param {string} trafficMirrorFilterRuleId 流量镜像筛选条件规则ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTrafficMirrorFilterRule(deleteTrafficMirrorFilterRuleRequest?: DeleteTrafficMirrorFilterRuleRequest): Promise<DeleteTrafficMirrorFilterRuleResponse> {
        const options = ParamCreater().deleteTrafficMirrorFilterRule(deleteTrafficMirrorFilterRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除流量镜像会话
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除流量镜像会话
     * @param {string} trafficMirrorSessionId 流量镜像会话ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTrafficMirrorSession(deleteTrafficMirrorSessionRequest?: DeleteTrafficMirrorSessionRequest): Promise<DeleteTrafficMirrorSessionResponse> {
        const options = ParamCreater().deleteTrafficMirrorSession(deleteTrafficMirrorSessionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当您已创建的子网预留网段不再使用时，您可以通过调用该接口删除子网预留网段资源。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除子网预留网段
     * @param {string} virsubnetCidrReservationId **参数解释**： 子网预留网段的资源ID。 **取值范围**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteVirsubnetCidrReservation(deleteVirsubnetCidrReservationRequest?: DeleteVirsubnetCidrReservationRequest): Promise<DeleteVirsubnetCidrReservationResponse> {
        const options = ParamCreater().deleteVirsubnetCidrReservation(deleteVirsubnetCidrReservationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户在指定Project中实例类型的所有资源标签集合。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询端口项目标签
     * @param {number} [limit] 功能说明：查询记录数 取值范围：1-1000 约束：默认为1000
     * @param {number} [offset] 功能说明：索引位置， 从第一条数据偏移offset条数据后开始查询 约束：默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPortTags(listPortTagsRequest?: ListPortTagsRequest): Promise<ListPortTagsResponse> {
        const options = ParamCreater().listPortTags(listPortTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当您的端口创建成功后，您可以通过调用该接口查询所有端口信息，包括端口ID、IP地址、所属云服务实例等。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询端口列表
     * @param {Array<string>} [id] **参数解释**： 端口的资源ID。 **取值范围**： 带“-”的标准UUID格式。
     * @param {Array<string>} [name] **参数解释**： 端口的名称。 **取值范围**： 默认为空，最大长度不超过255。
     * @param {boolean} [adminStateUp] **参数解释**： 端口的管理状态。 **取值范围**： true，false，默认值true。
     * @param {string} [status] **参数解释**： 端口的状态。 **取值范围**： - ACTIVE：端口处- 于活动状态，可以正常进行网络通信。 - BUILD：端口正在创建或配置中。 - DOWN：端口处于非活动状态，不能进行网络通信。Hana 硬直通虚拟机端口状态总为DOWN。
     * @param {Array<string>} [virsubnetId] **参数解释**： 端口所在的虚拟子网ID。 **取值范围**： 带“-”的标准UUID格式。
     * @param {Array<string>} [deviceId] **参数解释**： 端口所属的设备ID。 **取值范围**： 带“-”的标准UUID格式。
     * @param {Array<string>} [macAddress] **参数解释**： 端口的MAC地址。 **取值范围**： 不涉及
     * @param {Array<string>} [deviceOwner] **参数解释**： 端口所属的设备名称。 **取值范围**： - network:dhcp, 表示DHCP服务 - network:router_interface_distributed, 表示子网网关地址 - compute:xxx, 表示云服务器网卡私有IP地址，其中XXX对应具体的可用区名称，例如compute:aa-bb-cc表示私有IP地址被可用区aa-bb-cc内的云服务器使用 - neutron:VIP_PORT, 表示虚拟IP地址 - neutron:LOADBALANCERV2, 表示共享型ELB - neutron:LOADBALANCERV3, 表示独享型ELB - network:endpoint_interface, 表示VPC终端节点 - network:nat_gateway, 表示NAT网关 - network:ucmp, 表示UCMP端口，为企业路由器服务所用
     * @param {string} [deviceOwnerPrefixlike] **参数解释**： 端口所属的设备名称前缀。 **取值范围**： - network：过滤出device_owner前缀是network的端口，如DHCP端口。 - compute：过滤出device_owner前缀是compute的端口，如云服务器网卡。 - neutron：过滤出device_owner前缀是compute的端口，如虚拟IP地址。
     * @param {Array<string>} [description] **参数解释**： 端口的描述信息。 **取值范围**： 0-255个字符，不能包含“&lt;”和“&gt;”。
     * @param {Array<string>} [bindingHostId] **参数解释**： 端口所在的主机ID。 **取值范围**： 不涉及。
     * @param {Array<string>} [privateIps] **参数解释**： 端口的私有IP地址。 **取值范围**： - private_ips&#x3D;ip_address&#x3D;{ip_address}，其中{ip_address}填IP地址，如192.168.21.22。 - private_ips&#x3D;subnet_cidr_id&#x3D;{subnet_id}，其中{subnet_id}填IPv4子网或IPv6子网的ID，如011fc878-5521-4654-a1ad-f5b0b5820302。
     * @param {Array<string>} [securityGroups] **参数解释**： 端口绑定的安全组列表。 **取值范围**： 不涉及。
     * @param {Array<string>} [vpcId] **参数解释**： 端口所在的VPC的ID。 **取值范围**： 带“-”的标准UUID格式。
     * @param {Array<string>} [allowedAddressPairs] **参数解释**： 端口的IP/Mac对列表。 **取值范围**： - allowed_address_pairs&#x3D;ip_address&#x3D;{ip_address}，其中{ip_address}填IP地址，如192.168.21.22。 - allowed_address_pairs&#x3D;mac_address&#x3D;{mac_address}，其中{mac_address}填MAC地址，如fa:16:3e:b1:da:62。
     * @param {string} [instanceId] **参数解释**： 端口所属的云服务实例ID，例如RDS实例ID。 **取值范围**： 不涉及。
     * @param {string} [instanceType] **参数解释**： 端口所属的云服务实例类型，例如“RDS”。 **取值范围**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPorts(listPortsRequest?: ListPortsRequest): Promise<ListPortsResponse> {
        const options = ParamCreater().listPorts(listPortsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 使用标签过滤查询端口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询端口资源实例列表
     * @param {number} [limit] 功能说明：查询记录数 取值范围：1-1000 约束：默认为1000
     * @param {number} [offset] 功能说明：索引位置， 从第一条数据偏移offset条数据后开始查询 约束：默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数
     * @param {ListPortsByTagsRequestBody} [listPortsByTagsRequestBody] This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPortsByTags(listPortsByTagsRequest?: ListPortsByTagsRequest): Promise<ListPortsByTagsResponse> {
        const options = ParamCreater().listPortsByTags(listPortsByTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询安全组规则列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询安全组规则列表
     * @param {number} [limit] 功能说明：每页返回个数 取值范围：0-2000
     * @param {string} [marker] 分页查询起始的资源ID，为空时查询第一页
     * @param {Array<string>} [id] 功能说明：安全组规则ID，支持多个ID过滤
     * @param {Array<string>} [securityGroupId] 功能说明：安全组规则所属安全组ID，支持多个ID过滤
     * @param {Array<string>} [protocol] 功能说明：安全组规则协议，支持多条过滤
     * @param {Array<string>} [description] 功能说明：安全组规则的描述，支持多个描述同时过滤
     * @param {Array<string>} [remoteGroupId] 功能说明：远端安全组ID，支持多ID过滤
     * @param {string} [direction] 功能说明：安全组规则方向
     * @param {string} [action] 功能说明：安全组规则生效策略。 取值范围：allow表示允许，deny表示拒绝。
     * @param {string} [remoteIpPrefix] 功能说明：远端IP地址 取值范围：cidr格式
     * @param {Array<number>} [priority] 功能说明：优先级，支持多条过滤。
     * @param {Array<string>} [ethertype] 功能说明：IP协议类型，支持多条过滤。 取值范围：IPv4,IPv6,ipv4,ipv6
     * @param {Array<string>} [remoteAddressGroupId] 功能说明：远端IP地址组ID，支持多ID过滤。
     * @param {boolean} [enabled] 功能说明：是否启用安全组规则，不支持多值过滤。 取值范围：true, false。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSecurityGroupRules(listSecurityGroupRulesRequest?: ListSecurityGroupRulesRequest): Promise<ListSecurityGroupRulesResponse> {
        const options = ParamCreater().listSecurityGroupRules(listSecurityGroupRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询某租户下的安全组列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询安全组列表
     * @param {number} [limit] 功能说明：每页返回的个数 取值范围：0-2000
     * @param {string} [marker] 分页查询起始的资源ID，为空时查询第一页
     * @param {Array<string>} [id] 功能说明：安全组资源ID。可以使用该字段精确过滤安全组，支持多个ID
     * @param {Array<string>} [name] 功能说明：安全组名称。可以使用该字段精确过滤满足条件的安全组，支持传入多个name过滤
     * @param {Array<string>} [description] 功能说明：安全组描述新增。可以使用该字段精确过滤安全组，支持传入多个描述进行过滤
     * @param {string} [enterpriseProjectId] 功能说明：企业项目ID。可以使用该字段过滤某个企业项目下的安全组。 取值范围：最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。“0”表示默认企业项目。 约束：若需要查询当前用户所有有权限查看企业项目绑定的安全组，请传参all_granted_eps。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSecurityGroups(listSecurityGroupsRequest?: ListSecurityGroupsRequest): Promise<ListSecurityGroupsResponse> {
        const options = ParamCreater().listSecurityGroups(listSecurityGroupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询辅助弹性网卡列表，单次查询最多返回2000条数据
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户下辅助弹性网卡列表
     * @param {number} [limit] 功能说明：每页返回的个数 取值范围：0-2000
     * @param {string} [marker] 分页查询起始的资源ID，为空时查询第一页
     * @param {Array<string>} [id] 功能说明：辅助弹性网卡ID，支持多ID过滤 使用场景：查询需要的多个辅助弹性网卡信息
     * @param {Array<string>} [virsubnetId] 功能说明：辅助弹性网卡所属虚拟子网的ID，支持多个ID过滤 使用场景：过滤需要的单个或者多个虚拟子网下的辅助弹性网卡
     * @param {Array<string>} [privateIpAddress] 功能说明：辅助弹性网卡的私有IPv4地址，支持多个地址同时过滤 使用场景：通过单个或者多个ip地址过滤查询辅助弹性网卡
     * @param {Array<string>} [macAddress] 功能说明：辅助弹性网卡的mac地址，支持多个同时过滤 使用场景：使用mac地址精确过滤辅助弹性网卡
     * @param {Array<string>} [vpcId] 功能说明：辅助弹性网卡所属的VPC_ID，支持多ID过滤 使用场景：过滤单个或多个VPC下的辅助弹性网卡信息
     * @param {Array<string>} [description] 功能说明：辅助弹性网卡的描述信息，支持多个同时过滤 使用场景：通过描述信息过滤辅助弹性网卡
     * @param {Array<string>} [parentId] 功能说明：辅助弹性网卡的宿主网卡的ID，支持多ID过滤 使用场景：过滤单个或多个宿主网卡下存在的辅助弹性网卡
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSubNetworkInterfaces(listSubNetworkInterfacesRequest?: ListSubNetworkInterfacesRequest): Promise<ListSubNetworkInterfacesResponse> {
        const options = ParamCreater().listSubNetworkInterfaces(listSubNetworkInterfacesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询流量镜像筛选规则列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询流量镜像筛选规则列表
     * @param {string} [id] 使用规则ID过滤或排序
     * @param {string} [description] 使用规则描述过滤
     * @param {string} [trafficMirrorFilterId] 使用筛选条件ID过滤
     * @param {string} [direction] 使用规则方向过滤
     * @param {string} [protocol] 使用规则协议过滤
     * @param {string} [sourceCidrBlock] 使用规则源网段过滤
     * @param {string} [destinationCidrBlock] 使用规则目的网段过滤
     * @param {string} [sourcePortRange] 使用规则源端口范围过滤
     * @param {string} [destinationPortRange] 使用规则目的端口范围过滤
     * @param {string} [action] 使用规则action过滤
     * @param {string} [priority] 使用规则优先级过滤
     * @param {number} [limit] 功能说明：每页返回的个数 取值范围：0-2000
     * @param {string} [marker] 分页查询起始的资源ID，为空时查询第一页
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTrafficMirrorFilterRules(listTrafficMirrorFilterRulesRequest?: ListTrafficMirrorFilterRulesRequest): Promise<ListTrafficMirrorFilterRulesResponse> {
        const options = ParamCreater().listTrafficMirrorFilterRules(listTrafficMirrorFilterRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询流量镜像筛选条件列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询流量镜像筛选条件列表
     * @param {string} [id] 使用ID过滤查询或排序
     * @param {string} [name] 使用name过滤或排序
     * @param {string} [description] 使用description过滤查询
     * @param {string} [createdAt] 使用创建时间戳排序
     * @param {string} [updatedAt] 使用更新时间戳排序
     * @param {number} [limit] 功能说明：每页返回的个数 取值范围：0-2000
     * @param {string} [marker] 分页查询起始的资源ID，为空时查询第一页
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTrafficMirrorFilters(listTrafficMirrorFiltersRequest?: ListTrafficMirrorFiltersRequest): Promise<ListTrafficMirrorFiltersResponse> {
        const options = ParamCreater().listTrafficMirrorFilters(listTrafficMirrorFiltersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询流量镜像会话列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询流量镜像会话列表
     * @param {string} [id] 使用镜像会话ID过滤或排序
     * @param {string} [name] 使用镜像会话名称过滤或排序
     * @param {string} [description] 使用镜像会话描述过滤
     * @param {string} [trafficMirrorFilterId] 使用筛选条件ID过滤
     * @param {string} [trafficMirrorTargetId] 使用镜像目的ID过滤
     * @param {string} [trafficMirrorTargetType] 使用镜像目的类型过滤
     * @param {string} [virtualNetworkId] 使用VNI过滤
     * @param {string} [packetLength] 使用最大传输单元MTU过滤
     * @param {string} [priority] 使用镜像会话优先级过滤
     * @param {string} [enabled] 使用enabled过滤
     * @param {string} [type] 使用镜像源类型过滤
     * @param {string} [createdAt] 使用创建时间戳排序
     * @param {string} [updatedAt] 使用更新时间戳排序
     * @param {number} [limit] 功能说明：每页返回的个数 取值范围：0-2000
     * @param {string} [marker] 分页查询起始的资源ID，为空时查询第一页
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTrafficMirrorSessions(listTrafficMirrorSessionsRequest?: ListTrafficMirrorSessionsRequest): Promise<ListTrafficMirrorSessionsResponse> {
        const options = ParamCreater().listTrafficMirrorSessions(listTrafficMirrorSessionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当您的子网预留网段创建成功后，您可以通过调用该接口查询所有子网预留网段信息，包括子网预留网段名称、IP网段等。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询子网预留网段列表
     * @param {number} [limit] **参数解释**： 每页返回的资源个数。 **取值范围**： 0~2000
     * @param {string} [marker] **参数解释**： 分页查询起始的资源ID，为空时查询第一页。 **取值范围**： 子网预留网段的资源ID。
     * @param {Array<string>} [id] **参数解释**： 子网预留网段的资源ID。可以使用该字段过滤子网预留网段，支持传入多个ID过滤。 **取值范围**： 不涉及。
     * @param {Array<string>} [virsubnetId] **参数解释**： 子网预留网段所在的子网ID。可以使用该字段过滤子网预留网段，支持传入多个ID过滤。 **取值范围**： 不涉及。
     * @param {Array<string>} [cidr] **参数解释**： 子网预留网段的IP网段。可以使用该字段过滤子网预留网段，支持传入多个IP网段过滤。 **取值范围**： 不涉及。
     * @param {Array<number>} [ipVersion] **参数解释**： 子网预留网段所在子网的IP版本。可以使用该字段过滤子网预留网段，支持传入多个IP版本过滤。 **取值范围**： - 4：过滤出IPv4子网预留网段。 - 6：过滤出IPv6子网预留网段。
     * @param {Array<string>} [name] **参数解释**： 子网预留网段的名称。可以使用该字段过滤满足条件的子网预留网段，支持传入多个名称过滤。 **取值范围**： 不涉及。
     * @param {Array<string>} [description] **参数解释**： 子网预留网段的描述信息。可以使用该字段过滤子网预留网段，支持传入多个描述信息进行过滤。 **取值范围**： 不涉及。
     * @param {string} [enterpriseProjectId] **参数解释**： 子网预留网段所属的企业项目ID。可以使用该字段过滤某个企业项目下的子网预留网段。 **取值范围**： - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。“0”表示默认企业项目。 - 若需要查询当前用户所有有权限查看企业项目绑定的子网预留网段，请传参all_granted_eps。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVirsubnetCidrReservations(listVirsubnetCidrReservationsRequest?: ListVirsubnetCidrReservationsRequest): Promise<ListVirsubnetCidrReservationsResponse> {
        const options = ParamCreater().listVirsubnetCidrReservations(listVirsubnetCidrReservationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当您的子网创建成功后，您可以通过调用该接口查询所有子网信息，包括子网的名称、ID等。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询虚拟子网列表
     * @param {number} [limit] **参数解释**： 每页返回的资源个数。 **取值范围**： 0~2000。
     * @param {string} [marker] **参数解释**： 分页查询起始的资源ID，为空时查询第一页。 **取值范围**： 子网的资源ID。
     * @param {Array<string>} [id] **参数解释**： 子网的资源ID，填写后按照ID进行过滤，支持传入多个ID过滤。 **取值范围**： 不涉及。
     * @param {Array<string>} [name] **参数解释**： 子网的名称，填写后按照名称进行过滤，支持传入多个名称过滤。 **取值范围**： 不涉及。
     * @param {Array<string>} [vpcId] **参数解释**： 子网所在VPC的资源ID，填写后按照VPC资源ID进行过滤，支持传入多个ID过滤。 **取值范围**： 不涉及。
     * @param {string} [status] **参数解释**： 子网的状态，填写后按照状态进行过滤，只支持传入单个状态过滤。 **取值范围**： - ACTIVE：表示子网已挂载到VPC上。 - UNKNOWN：表示子网还未挂载到VPC上。 - ERROR：表示子网状态故障。
     * @param {Array<string>} [scope] **参数解释**： 子网的作用域，填写后按照作用域进行过滤，支持传入多个作用域过滤。 **取值范围**： - center：表示作用域为中心。 - {publicBorderGroup}：表示作用域为具体的公网边界组。公网边界组限制子网的可用区范围，可关联多个边缘可用区。
     * @param {Array<string>} [zoneId] **参数解释**： 子网的可用区ID，填写后按照可用区ID进行过滤，支持传入多个可用区ID过滤。 **取值范围**： 不涉及
     * @param {Array<string>} [description] **参数解释**： 子网的描述信息，填写后按照描述信息进行过滤，支持传入多个描述信息过滤。 **取值范围**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVirsubnets(listVirsubnetsRequest?: ListVirsubnetsRequest): Promise<ListVirsubnetsResponse> {
        const options = ParamCreater().listVirsubnets(listVirsubnetsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量迁移辅助弹性网卡
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 迁移辅助弹性网卡
     * @param {MigrateSubNetworkInterfaceRequestBody} migrateSubNetworkInterfaceRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public migrateSubNetworkInterface(migrateSubNetworkInterfaceRequest?: MigrateSubNetworkInterfaceRequest): Promise<MigrateSubNetworkInterfaceResponse> {
        const options = ParamCreater().migrateSubNetworkInterface(migrateSubNetworkInterfaceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 端口移除安全组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 端口移除安全组
     * @param {string} portId 端口的唯一标识
     * @param {RemoveSecurityGroupsRequestBody} removeSecurityGroupsRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public removeSecurityGroups(removeSecurityGroupsRequest?: RemoveSecurityGroupsRequest): Promise<RemoveSecurityGroupsResponse> {
        const options = ParamCreater().removeSecurityGroups(removeSecurityGroupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 流量镜像会话移除镜像源
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 流量镜像会话移除镜像源
     * @param {string} trafficMirrorSessionId 流量镜像会话ID
     * @param {RemoveSourcesFromTrafficMirrorSessionRequestBody} removeSourcesFromTrafficMirrorSessionRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public removeSourcesFromTrafficMirrorSession(removeSourcesFromTrafficMirrorSessionRequest?: RemoveSourcesFromTrafficMirrorSessionRequest): Promise<RemoveSourcesFromTrafficMirrorSessionResponse> {
        const options = ParamCreater().removeSourcesFromTrafficMirrorSession(removeSourcesFromTrafficMirrorSessionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当您的端口创建成功后，您可以通过调用该接口查询单个端口的详细信息，包括端口ID、IP地址、所属云服务实例等。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询端口详情
     * @param {string} portId **参数解释**： 端口的资源ID，可以是弹性网卡的资源ID。 **取值范围**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPort(showPortRequest?: ShowPortRequest): Promise<ShowPortResponse> {
        const options = ParamCreater().showPort(showPortRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定端口的标签信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询端口资源标签
     * @param {string} portId 功能说明：端口唯一标识 取值范围：合法UUID 约束：ID对应的端口必须存在
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPortTags(showPortTagsRequest?: ShowPortTagsRequest): Promise<ShowPortTagsResponse> {
        const options = ParamCreater().showPortTags(showPortTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 您可以通过此接口查询VPC服务相关资源的配额，包括安全组配额、安全组规则配额等。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询配额
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showQuota(showQuotaRequest?: ShowQuotaRequest): Promise<ShowQuotaResponse> {
        const options = ParamCreater().showQuota();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询单个安全组详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询安全组
     * @param {string} securityGroupId 安全组资源ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSecurityGroup(showSecurityGroupRequest?: ShowSecurityGroupRequest): Promise<ShowSecurityGroupResponse> {
        const options = ParamCreater().showSecurityGroup(showSecurityGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询单个安全组规则
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

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询辅助弹性网卡详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户下辅助弹性网卡
     * @param {string} subNetworkInterfaceId 辅助弹性网卡的唯一标识
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSubNetworkInterface(showSubNetworkInterfaceRequest?: ShowSubNetworkInterfaceRequest): Promise<ShowSubNetworkInterfaceResponse> {
        const options = ParamCreater().showSubNetworkInterface(showSubNetworkInterfaceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询辅助弹性网卡数目
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户下辅助弹性网卡数目
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSubNetworkInterfacesQuantity(showSubNetworkInterfacesQuantityRequest?: ShowSubNetworkInterfacesQuantityRequest): Promise<ShowSubNetworkInterfacesQuantityResponse> {
        const options = ParamCreater().showSubNetworkInterfacesQuantity();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询流量镜像筛选条件详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询流量镜像筛选条件详情
     * @param {string} trafficMirrorFilterId 流量镜像筛选条件ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTrafficMirrorFilter(showTrafficMirrorFilterRequest?: ShowTrafficMirrorFilterRequest): Promise<ShowTrafficMirrorFilterResponse> {
        const options = ParamCreater().showTrafficMirrorFilter(showTrafficMirrorFilterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询流量镜像筛选规则详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询流量镜像筛选规则详情
     * @param {string} trafficMirrorFilterRuleId 流量镜像筛选规则ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTrafficMirrorFilterRule(showTrafficMirrorFilterRuleRequest?: ShowTrafficMirrorFilterRuleRequest): Promise<ShowTrafficMirrorFilterRuleResponse> {
        const options = ParamCreater().showTrafficMirrorFilterRule(showTrafficMirrorFilterRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询流量镜像会话详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询流量镜像会话详情
     * @param {string} trafficMirrorSessionId 流量镜像会话ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTrafficMirrorSession(showTrafficMirrorSessionRequest?: ShowTrafficMirrorSessionRequest): Promise<ShowTrafficMirrorSessionResponse> {
        const options = ParamCreater().showTrafficMirrorSession(showTrafficMirrorSessionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当您的子网创建成功后，您可以通过调用该接口查询单个子网的详细信息，包括子网的名称、ID、状态等。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询虚拟子网详情
     * @param {string} virsubnetId **参数解释**： 子网的资源ID。 **取值范围**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVirsubnet(showVirsubnetRequest?: ShowVirsubnetRequest): Promise<ShowVirsubnetResponse> {
        const options = ParamCreater().showVirsubnet(showVirsubnetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当您的子网预留网段创建成功后，您可以通过调用该接口查询单个子网预留网段的详细信息，包括子网预留网段的名称、IP网段等。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询子网预留网段
     * @param {string} virsubnetCidrReservationId **参数解释**： 子网预留网段的资源ID。 **取值范围**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVirsubnetCidrReservation(showVirsubnetCidrReservationRequest?: ShowVirsubnetCidrReservationRequest): Promise<ShowVirsubnetCidrReservationResponse> {
        const options = ParamCreater().showVirsubnetCidrReservation(showVirsubnetCidrReservationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新安全组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新安全组
     * @param {string} securityGroupId 安全组ID
     * @param {UpdateSecurityGroupRequestBody} updateSecurityGroupRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSecurityGroup(updateSecurityGroupRequest?: UpdateSecurityGroupRequest): Promise<UpdateSecurityGroupResponse> {
        const options = ParamCreater().updateSecurityGroup(updateSecurityGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新辅助弹性网卡
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新辅助弹性网卡
     * @param {string} subNetworkInterfaceId 辅助弹性网卡的唯一标识
     * @param {UpdateSubNetworkInterfaceRequestBody} updateSubNetworkInterfaceRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSubNetworkInterface(updateSubNetworkInterfaceRequest?: UpdateSubNetworkInterfaceRequest): Promise<UpdateSubNetworkInterfaceResponse> {
        const options = ParamCreater().updateSubNetworkInterface(updateSubNetworkInterfaceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新流量镜像筛选条件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新流量镜像筛选条件
     * @param {string} trafficMirrorFilterId 流量镜像筛选条件ID
     * @param {UpdateTrafficMirrorFilterRequestBody} updateTrafficMirrorFilterRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTrafficMirrorFilter(updateTrafficMirrorFilterRequest?: UpdateTrafficMirrorFilterRequest): Promise<UpdateTrafficMirrorFilterResponse> {
        const options = ParamCreater().updateTrafficMirrorFilter(updateTrafficMirrorFilterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新流量镜像筛选规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新流量镜像筛选规则
     * @param {string} trafficMirrorFilterRuleId 流量镜像筛选条件规则ID
     * @param {UpdateTrafficMirrorFilterRuleRequestBody} updateTrafficMirrorFilterRuleRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTrafficMirrorFilterRule(updateTrafficMirrorFilterRuleRequest?: UpdateTrafficMirrorFilterRuleRequest): Promise<UpdateTrafficMirrorFilterRuleResponse> {
        const options = ParamCreater().updateTrafficMirrorFilterRule(updateTrafficMirrorFilterRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新流量镜像会话
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新流量镜像会话
     * @param {string} trafficMirrorSessionId 流量镜像会话ID
     * @param {UpdateTrafficMirrorSessionRequestBody} updateTrafficMirrorSessionRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTrafficMirrorSession(updateTrafficMirrorSessionRequest?: UpdateTrafficMirrorSessionRequest): Promise<UpdateTrafficMirrorSessionResponse> {
        const options = ParamCreater().updateTrafficMirrorSession(updateTrafficMirrorSessionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当您的子网预留网段创建成功后，您可以通过调用该接口更新子网预留网段的基本信息，包括子网预留网段的名称、描述信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新子网预留网段
     * @param {string} virsubnetCidrReservationId **参数解释**： 子网预留网段的资源ID。 **取值范围**： 不涉及。
     * @param {UpdateVirsubnetCidrReservationRequestBody} updateVirsubnetCidrReservationRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateVirsubnetCidrReservation(updateVirsubnetCidrReservationRequest?: UpdateVirsubnetCidrReservationRequest): Promise<UpdateVirsubnetCidrReservationResponse> {
        const options = ParamCreater().updateVirsubnetCidrReservation(updateVirsubnetCidrReservationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 网络ACL插入规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 网络ACL插入规则
     * @param {string} firewallId 网络ACL的唯一标识
     * @param {AddFirewallRulesRequestBody} addFirewallRulesRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addFirewallRules(addFirewallRulesRequest?: AddFirewallRulesRequest): Promise<AddFirewallRulesResponse> {
        const options = ParamCreater().addFirewallRules(addFirewallRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 网络ACL绑定子网
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 网络ACL绑定子网
     * @param {string} firewallId 网络ACL唯一标识
     * @param {AssociateSubnetFirewallRequestBody} associateSubnetFirewallRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associateSubnetFirewall(associateSubnetFirewallRequest?: AssociateSubnetFirewallRequest): Promise<AssociateSubnetFirewallResponse> {
        const options = ParamCreater().associateSubnetFirewall(associateSubnetFirewallRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 为指定的网络ACL资源实例批量添加标签。
     * 此接口为幂等接口：创建时如果请求体中存在重复key则报错。创建时，不允许设置重复key数据，如果数据库已存在该key，就覆盖value的值。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加ACL资源标签
     * @param {string} firewallId 功能说明：ACL唯一标识 取值范围：合法UUID 约束：ID对应的ACL必须存在
     * @param {BatchCreateFirewallTagsRequestBody} [batchCreateFirewallTagsRequestBody] This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateFirewallTags(batchCreateFirewallTagsRequest?: BatchCreateFirewallTagsRequest): Promise<BatchCreateFirewallTagsResponse> {
        const options = ParamCreater().batchCreateFirewallTags(batchCreateFirewallTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 为指定的网络ACL资源实例批量删除标签。
     * 此接口为幂等接口：删除时，如果删除的标签不存在，默认处理成功；删除时不对标签字符集范围做校验。删除时tags结构体不能缺失，key不能为空，或者空字符串。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除ACL资源标签
     * @param {string} firewallId 功能说明：ACL唯一标识 取值范围：合法UUID 约束：ID对应的ACL必须存在
     * @param {BatchDeleteFirewallTagsRequestBody} [batchDeleteFirewallTagsRequestBody] This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteFirewallTags(batchDeleteFirewallTagsRequest?: BatchDeleteFirewallTagsRequest): Promise<BatchDeleteFirewallTagsResponse> {
        const options = ParamCreater().batchDeleteFirewallTags(batchDeleteFirewallTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 使用标签过滤查询ACL实例数量。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询ACL资源实例数量
     * @param {CountFirewallsByTagsRequestBody} [countFirewallsByTagsRequestBody] This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public countFirewallsByTags(countFirewallsByTagsRequest?: CountFirewallsByTagsRequest): Promise<CountFirewallsByTagsResponse> {
        const options = ParamCreater().countFirewallsByTags(countFirewallsByTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建网络ACL
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建网络ACL
     * @param {CreateFirewallRequestBody} createFirewallRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createFirewall(createFirewallRequest?: CreateFirewallRequest): Promise<CreateFirewallResponse> {
        const options = ParamCreater().createFirewall(createFirewallRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 给指定IP地址组资源实例增加标签信息
     * 此接口为幂等接口：创建时，如果创建的标签已经存在（key相同），则覆盖。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加ACL资源标签
     * @param {string} firewallId 功能说明：ACL唯一标识 取值范围：合法UUID 约束：ID对应的ACL必须存在
     * @param {CreateFirewallTagRequestBody} createFirewallTagRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createFirewallTag(createFirewallTagRequest?: CreateFirewallTagRequest): Promise<CreateFirewallTagResponse> {
        const options = ParamCreater().createFirewallTag(createFirewallTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除网络ACL
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除网络ACL
     * @param {string} firewallId 网络ACL唯一标识
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteFirewall(deleteFirewallRequest?: DeleteFirewallRequest): Promise<DeleteFirewallResponse> {
        const options = ParamCreater().deleteFirewall(deleteFirewallRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定IP地址组资源实例的标签信息
     * 该接口为幂等接口：删除的key不存在报404，key不能为空或者空字符串
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除ACL资源标签
     * @param {string} firewallId 功能说明：ACL唯一标识 取值范围：合法UUID 约束：ID对应的ACL必须存在
     * @param {string} tagKey 功能说明：标签键
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteFirewallTag(deleteFirewallTagRequest?: DeleteFirewallTagRequest): Promise<DeleteFirewallTagResponse> {
        const options = ParamCreater().deleteFirewallTag(deleteFirewallTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 网络ACL解绑子网
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 网络ACL解绑子网
     * @param {string} firewallId 网络ACL唯一标识
     * @param {DisassociateSubnetFirewallRequestBody} disassociateSubnetFirewallRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disassociateSubnetFirewall(disassociateSubnetFirewallRequest?: DisassociateSubnetFirewallRequest): Promise<DisassociateSubnetFirewallResponse> {
        const options = ParamCreater().disassociateSubnetFirewall(disassociateSubnetFirewallRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询网络ACL列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询网络ACL列表
     * @param {number} [limit] 功能说明：每页返回的个数 取值范围：0~2000
     * @param {string} [marker] 分页查询起始的资源ID，为空时查询第一页
     * @param {Array<string>} [id] ACL唯一标识，填写后接口按照id进行过滤，支持多id同时过滤
     * @param {Array<string>} [name] ACL名称，填写后按照名称进行过滤，支持多名称同时过滤
     * @param {'ACTIVE' | 'INACTIVE'} [status] ACL的状态
     * @param {boolean} [adminStateUp] ACL是否启用
     * @param {Array<string>} [enterpriseProjectId] 功能说明：企业项目ID。可以使用该字段过滤某个企业项目下的ACL。  取值范围：最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。“0”表示默认企业项目。若需要查询当前用户所有企业项目绑定的ACL，请传参all_granted_eps。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFirewall(listFirewallRequest?: ListFirewallRequest): Promise<ListFirewallResponse> {
        const options = ParamCreater().listFirewall(listFirewallRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户在指定Project中实例类型的所有资源标签集合
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询ACL项目标签
     * @param {number} [limit] 功能说明：查询记录数 取值范围：1-1000 约束：默认为1000
     * @param {number} [offset] 功能说明：索引位置， 从第一条数据偏移offset条数据后开始查询 约束：默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFirewallTags(listFirewallTagsRequest?: ListFirewallTagsRequest): Promise<ListFirewallTagsResponse> {
        const options = ParamCreater().listFirewallTags(listFirewallTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 使用标签过滤查询ACL实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询ACL资源实例列表
     * @param {number} [limit] 功能说明：查询记录数 取值范围：1-1000 约束：默认为1000
     * @param {number} [offset] 功能说明：索引位置， 从第一条数据偏移offset条数据后开始查询 约束：默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数
     * @param {ListFirewallsByTagsRequestBody} [listFirewallsByTagsRequestBody] This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFirewallsByTags(listFirewallsByTagsRequest?: ListFirewallsByTagsRequest): Promise<ListFirewallsByTagsResponse> {
        const options = ParamCreater().listFirewallsByTags(listFirewallsByTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 网络ACL移除规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 网络ACL移除规则
     * @param {string} firewallId 网络ACL唯一标识
     * @param {RemoveFirewallRulesRequestBody} removeFirewallRulesRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public removeFirewallRules(removeFirewallRulesRequest?: RemoveFirewallRulesRequest): Promise<RemoveFirewallRulesResponse> {
        const options = ParamCreater().removeFirewallRules(removeFirewallRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询网络ACL详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询网络ACL详情
     * @param {string} firewallId 网络ACL的唯一标识
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showFirewall(showFirewallRequest?: ShowFirewallRequest): Promise<ShowFirewallResponse> {
        const options = ParamCreater().showFirewall(showFirewallRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定ACL实例的标签信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询ACL资源标签
     * @param {string} firewallId 功能说明：ACL唯一标识 取值范围：合法UUID 约束：ID对应的ACL必须存在
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showFirewallTags(showFirewallTagsRequest?: ShowFirewallTagsRequest): Promise<ShowFirewallTagsResponse> {
        const options = ParamCreater().showFirewallTags(showFirewallTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新网络ACL
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新网络ACL
     * @param {string} firewallId 网络ACL的唯一标识
     * @param {UpdateFirewallRequestBody} updateFirewallRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateFirewall(updateFirewallRequest?: UpdateFirewallRequest): Promise<UpdateFirewallResponse> {
        const options = ParamCreater().updateFirewall(updateFirewallRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 网络ACL更新规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 网络ACL更新规则
     * @param {string} firewallId 网络ACL唯一标识
     * @param {UpdateFirewallRulesRequestBody} updateFirewallRulesRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateFirewallRules(updateFirewallRulesRequest?: UpdateFirewallRulesRequest): Promise<UpdateFirewallRulesResponse> {
        const options = ParamCreater().updateFirewallRules(updateFirewallRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加Clouddcn子网的标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加Clouddcn子网标签
     * @param {string} resourceId Clouddcn子网的id
     * @param {AddResourceTagsRequestBody} addClouddcnSubnetsTagsRequestBody 创建clouddcn子网对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addClouddcnSubnetsTags(addClouddcnSubnetsTagsRequest?: AddClouddcnSubnetsTagsRequest): Promise<AddClouddcnSubnetsTagsResponse> {
        const options = ParamCreater().addClouddcnSubnetsTags(addClouddcnSubnetsTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量添加Clouddcn子网的标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加Clouddcn子网标签
     * @param {string} resourceId Clouddcn子网的id
     * @param {BatchCreateRequestBody} listResourcesByTagsRequestBody 查询资源实例列表请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateClouddcnSubnetsTags(batchCreateClouddcnSubnetsTagsRequest?: BatchCreateClouddcnSubnetsTagsRequest): Promise<BatchCreateClouddcnSubnetsTagsResponse> {
        const options = ParamCreater().batchCreateClouddcnSubnetsTags(batchCreateClouddcnSubnetsTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除Clouddcn子网的标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除Clouddcn子网标签
     * @param {string} resourceId Clouddcn子网的id
     * @param {BatchDeleteRequestBody} batchDeleteClouddcnSubnetsTagsRequestBody 查询资源实例列表请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteClouddcnSubnetsTags(batchDeleteClouddcnSubnetsTagsRequest?: BatchDeleteClouddcnSubnetsTagsRequest): Promise<BatchDeleteClouddcnSubnetsTagsResponse> {
        const options = ParamCreater().batchDeleteClouddcnSubnetsTags(batchDeleteClouddcnSubnetsTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建clouddcn子网。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建clouddcn子网
     * @param {CreateClouddcnSubnetRequestBody} createClouddcnSubnetRequestBody 创建clouddcn子网对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createClouddcnSubnet(createClouddcnSubnetRequest?: CreateClouddcnSubnetRequest): Promise<CreateClouddcnSubnetResponse> {
        const options = ParamCreater().createClouddcnSubnet(createClouddcnSubnetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除clouddcn子网
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除clouddcn子网
     * @param {string} clouddcnSubnetId clouddcn子网ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteClouddcnSubnet(deleteClouddcnSubnetRequest?: DeleteClouddcnSubnetRequest): Promise<DeleteClouddcnSubnetResponse> {
        const options = ParamCreater().deleteClouddcnSubnet(deleteClouddcnSubnetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除Clouddcn子网的标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除Clouddcn子网标签
     * @param {string} resourceId Clouddcn子网的id
     * @param {string} tagKey 待删除标签的key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteClouddcnSubnetsTag(deleteClouddcnSubnetsTagRequest?: DeleteClouddcnSubnetsTagRequest): Promise<DeleteClouddcnSubnetsTagResponse> {
        const options = ParamCreater().deleteClouddcnSubnetsTag(deleteClouddcnSubnetsTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询clouddcn子网列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询clouddcn子网列表
     * @param {number} [limit] 每页返回的个数
     * @param {string} [marker] 分页查询起始的资源id，为空时查询第一页
     * @param {string} [vpcId] 按照vpc_id过滤查询 企业项目细粒度授权场景下，该字段必传
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listClouddcnSubnets(listClouddcnSubnetsRequest?: ListClouddcnSubnetsRequest): Promise<ListClouddcnSubnetsResponse> {
        const options = ParamCreater().listClouddcnSubnets(listClouddcnSubnetsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询资源实例列表数目
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源实例列表数目
     * @param {ListResourcesByTagsRequestBody} listResourcesByTagsRequestBody 查询资源实例列表请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listClouddcnSubnetsCountFilterTags(listClouddcnSubnetsCountFilterTagsRequest?: ListClouddcnSubnetsCountFilterTagsRequest): Promise<ListClouddcnSubnetsCountFilterTagsResponse> {
        const options = ParamCreater().listClouddcnSubnetsCountFilterTags(listClouddcnSubnetsCountFilterTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询资源实例列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源实例列表
     * @param {ListResourcesByTagsRequestBody} listResourcesByTagsRequestBody 查询资源实例列表请求体
     * @param {number} [limit] 每页返回的个数
     * @param {number} [offset] 分页起始点
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listClouddcnSubnetsFilterTags(listClouddcnSubnetsFilterTagsRequest?: ListClouddcnSubnetsFilterTagsRequest): Promise<ListClouddcnSubnetsFilterTagsResponse> {
        const options = ParamCreater().listClouddcnSubnetsFilterTags(listClouddcnSubnetsFilterTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Clouddcn子网的项目标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Clouddcn子网项目标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listClouddcnSubnetsTags(listClouddcnSubnetsTagsRequest?: ListClouddcnSubnetsTagsRequest): Promise<ListClouddcnSubnetsTagsResponse> {
        const options = ParamCreater().listClouddcnSubnetsTags();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询clouddcn子网详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询clouddcn子网
     * @param {string} clouddcnSubnetId clouddcn子网ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showClouddcnSubnet(showClouddcnSubnetRequest?: ShowClouddcnSubnetRequest): Promise<ShowClouddcnSubnetResponse> {
        const options = ParamCreater().showClouddcnSubnet(showClouddcnSubnetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Clouddcn子网的标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Clouddcn子网标签
     * @param {string} resourceId Clouddcn子网的id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showClouddcnSubnetsTags(showClouddcnSubnetsTagsRequest?: ShowClouddcnSubnetsTagsRequest): Promise<ShowClouddcnSubnetsTagsResponse> {
        const options = ParamCreater().showClouddcnSubnetsTags(showClouddcnSubnetsTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新clouddcn子网。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新clouddcn子网
     * @param {string} clouddcnSubnetId clouddcn子网ID
     * @param {UpdateClouddcnSubnetRequestBody} updateClouddcnSubnetRequestBody 更新clouddcn子网对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateClouddcnSubnet(updateClouddcnSubnetRequest?: UpdateClouddcnSubnetRequest): Promise<UpdateClouddcnSubnetResponse> {
        const options = ParamCreater().updateClouddcnSubnet(updateClouddcnSubnetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建地址组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建地址组
     * @param {CreateAddressGroupRequestBody} createAddressGroupRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAddressGroup(createAddressGroupRequest?: CreateAddressGroupRequest): Promise<CreateAddressGroupResponse> {
        const options = ParamCreater().createAddressGroup(createAddressGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除地址组，非强制删除，删除前请确保未被其他资源引用
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除地址组
     * @param {string} addressGroupId 地址组的唯一标识
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAddressGroup(deleteAddressGroupRequest?: DeleteAddressGroupRequest): Promise<DeleteAddressGroupResponse> {
        const options = ParamCreater().deleteAddressGroup(deleteAddressGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 强制删除地址组，删除的地址组与安全组规则关联时，会删除地址组与关联的安全组规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 强制删除地址组
     * @param {string} addressGroupId IP地址组的唯一标识，要删除的IP地址组ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteIpAddressGroupForce(deleteIpAddressGroupForceRequest?: DeleteIpAddressGroupForceRequest): Promise<DeleteIpAddressGroupForceResponse> {
        const options = ParamCreater().deleteIpAddressGroupForce(deleteIpAddressGroupForceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询地址组列表，根据过滤条件进行过滤。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询地址组列表
     * @param {number} [limit] 功能说明：每页返回的个数 取值范围：0~2000
     * @param {string} [marker] 分页查询起始的资源ID，为空时查询第一页
     * @param {Array<string>} [id] 地址组唯一标识，填写后接口按照id进行过滤，支持多ID同时过滤
     * @param {Array<string>} [name] 地址组名称，填写后按照名称进行过滤，支持多名称同时过滤
     * @param {number} [ipVersion] IP地址组ip版本，当前只支持ipv4，填写后按照ip版本进行过滤
     * @param {Array<string>} [description] 地址组描述信息，填写后按照地址组描述信息过滤，支持多描述同时过滤
     * @param {string} [enterpriseProjectId] 功能说明：企业项目ID。可以使用该字段过滤某个企业项目下的IP地址组。 取值范围：最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。“0”表示默认企业项目。若需要查询当前用户所有企业项目绑定的IP地址组，请传参all_granted_eps。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAddressGroup(listAddressGroupRequest?: ListAddressGroupRequest): Promise<ListAddressGroupResponse> {
        const options = ParamCreater().listAddressGroup(listAddressGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当您的IP地址组被网络ACL和安全组资源关联时，您可以通过调用该接口查询IP地址组关联的网络ACL或安全组的资源ID和名称。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询IP地址组的关联资源
     * @param {string} [id] **参数解释**： 用IP地址组的资源ID过滤。 **取值范围**： 不涉及。
     * @param {string} [enterpriseProjectId] **参数解释**： 用IP地址组所属的企业项目ID过滤。 **取值范围**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAddressGroupsDependency(listAddressGroupsDependencyRequest?: ListAddressGroupsDependencyRequest): Promise<ListAddressGroupsDependencyResponse> {
        const options = ParamCreater().listAddressGroupsDependency(listAddressGroupsDependencyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询地址组详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询地址组
     * @param {string} addressGroupId 地址组的唯一标识
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAddressGroup(showAddressGroupRequest?: ShowAddressGroupRequest): Promise<ShowAddressGroupResponse> {
        const options = ParamCreater().showAddressGroup(showAddressGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新地址组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新地址组
     * @param {string} addressGroupId 地址组的唯一标识
     * @param {UpdateAddressGroupRequestBody} updateAddressGroupRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAddressGroup(updateAddressGroupRequest?: UpdateAddressGroupRequest): Promise<UpdateAddressGroupResponse> {
        const options = ParamCreater().updateAddressGroup(updateAddressGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加VPC的扩展网段
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加VPC扩展网段
     * @param {string} vpcId VPC资源ID
     * @param {AddVpcExtendCidrRequestBody} addVpcExtendCidrRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addVpcExtendCidr(addVpcExtendCidrRequest?: AddVpcExtendCidrRequest): Promise<AddVpcExtendCidrResponse> {
        const options = ParamCreater().addVpcExtendCidr(addVpcExtendCidrRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建虚拟私有云
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建VPC
     * @param {CreateVpcRequestBody} createVpcRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createVpc(createVpcRequest?: CreateVpcRequest): Promise<CreateVpcResponse> {
        const options = ParamCreater().createVpc(createVpcRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除VPC
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除VPC
     * @param {string} vpcId VPC的资源ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteVpc(deleteVpcRequest?: DeleteVpcRequest): Promise<DeleteVpcResponse> {
        const options = ParamCreater().deleteVpc(deleteVpcRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询vpc列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询VPC列表
     * @param {number} [limit] 功能说明：每页返回的个数 取值范围：0-2000
     * @param {string} [marker] 分页查询起始的资源ID，为空时查询第一页
     * @param {Array<string>} [id] VPC资源ID。可以使用该字段过滤VPC
     * @param {string} [enterpriseProjectId] 功能说明：企业项目ID。可以使用该字段过滤某个企业项目下的VPC。 取值范围：最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。“0”表示默认企业项目。若需要查询当前用户所有企业项目绑定的VPC，请传参all_granted_eps。
     * @param {Array<string>} [name] VPC的name信息，可以使用该字段过滤VPC
     * @param {Array<string>} [description] VPC的描述信息。可以使用该字段过滤VPC
     * @param {Array<string>} [cidr] VPC的CIDR。可以使用该字段过滤VPC
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVpcs(listVpcsRequest?: ListVpcsRequest): Promise<ListVpcsResponse> {
        const options = ParamCreater().listVpcs(listVpcsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 移除VPC扩展网段
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 移除VPC扩展网段
     * @param {string} vpcId VPC资源ID
     * @param {RemoveVpcExtendCidrRequestBody} removeVpcExtendCidrRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public removeVpcExtendCidr(removeVpcExtendCidrRequest?: RemoveVpcExtendCidrRequest): Promise<RemoveVpcExtendCidrResponse> {
        const options = ParamCreater().removeVpcExtendCidr(removeVpcExtendCidrRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询vpc详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询VPC详情
     * @param {string} vpcId VPC资源ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVpc(showVpcRequest?: ShowVpcRequest): Promise<ShowVpcResponse> {
        const options = ParamCreater().showVpc(showVpcRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新vpc
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新VPC
     * @param {string} vpcId VPC资源ID
     * @param {UpdateVpcRequestBody} updateVpcRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateVpc(updateVpcRequest?: UpdateVpcRequest): Promise<UpdateVpcResponse> {
        const options = ParamCreater().updateVpc(updateVpcRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 端口插入安全组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addSecurityGroups(addSecurityGroupsRequest?: AddSecurityGroupsRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/ports/{port_id}/insert-security-groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let portId;

            if (addSecurityGroupsRequest !== null && addSecurityGroupsRequest !== undefined) {
                if (addSecurityGroupsRequest instanceof AddSecurityGroupsRequest) {
                    portId = addSecurityGroupsRequest.portId;
                    body = addSecurityGroupsRequest.body
                } else {
                    portId = addSecurityGroupsRequest['port_id'];
                    body = addSecurityGroupsRequest['body'];
                }
            }

        
            if (portId === null || portId === undefined) {
            throw new RequiredError('portId','Required parameter portId was null or undefined when calling addSecurityGroups.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'port_id': portId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 流量镜像会话添加镜像源
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addSourcesToTrafficMirrorSession(addSourcesToTrafficMirrorSessionRequest?: AddSourcesToTrafficMirrorSessionRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/vpc/traffic-mirror-sessions/{traffic_mirror_session_id}/add-sources",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let trafficMirrorSessionId;

            if (addSourcesToTrafficMirrorSessionRequest !== null && addSourcesToTrafficMirrorSessionRequest !== undefined) {
                if (addSourcesToTrafficMirrorSessionRequest instanceof AddSourcesToTrafficMirrorSessionRequest) {
                    trafficMirrorSessionId = addSourcesToTrafficMirrorSessionRequest.trafficMirrorSessionId;
                    body = addSourcesToTrafficMirrorSessionRequest.body
                } else {
                    trafficMirrorSessionId = addSourcesToTrafficMirrorSessionRequest['traffic_mirror_session_id'];
                    body = addSourcesToTrafficMirrorSessionRequest['body'];
                }
            }

        
            if (trafficMirrorSessionId === null || trafficMirrorSessionId === undefined) {
            throw new RequiredError('trafficMirrorSessionId','Required parameter trafficMirrorSessionId was null or undefined when calling addSourcesToTrafficMirrorSession.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'traffic_mirror_session_id': trafficMirrorSessionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 为指定的端口批量添加标签。
         * 此接口为幂等接口：创建时如果请求体中存在重复key则报错。创建时，不允许设置重复key数据，如果数据库已存在该key，就覆盖value的值。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreatePortTags(batchCreatePortTagsRequest?: BatchCreatePortTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/ports/{port_id}/tags/create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let portId;

            if (batchCreatePortTagsRequest !== null && batchCreatePortTagsRequest !== undefined) {
                if (batchCreatePortTagsRequest instanceof BatchCreatePortTagsRequest) {
                    portId = batchCreatePortTagsRequest.portId;
                    body = batchCreatePortTagsRequest.body
                } else {
                    portId = batchCreatePortTagsRequest['port_id'];
                    body = batchCreatePortTagsRequest['body'];
                }
            }

        
            if (portId === null || portId === undefined) {
            throw new RequiredError('portId','Required parameter portId was null or undefined when calling batchCreatePortTags.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'port_id': portId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在特定安全组下批量创建安全组规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateSecurityGroupRules(batchCreateSecurityGroupRulesRequest?: BatchCreateSecurityGroupRulesRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/vpc/security-groups/{security_group_id}/security-group-rules/batch-create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let securityGroupId;

            if (batchCreateSecurityGroupRulesRequest !== null && batchCreateSecurityGroupRulesRequest !== undefined) {
                if (batchCreateSecurityGroupRulesRequest instanceof BatchCreateSecurityGroupRulesRequest) {
                    securityGroupId = batchCreateSecurityGroupRulesRequest.securityGroupId;
                    body = batchCreateSecurityGroupRulesRequest.body
                } else {
                    securityGroupId = batchCreateSecurityGroupRulesRequest['security_group_id'];
                    body = batchCreateSecurityGroupRulesRequest['body'];
                }
            }

        
            if (securityGroupId === null || securityGroupId === undefined) {
            throw new RequiredError('securityGroupId','Required parameter securityGroupId was null or undefined when calling batchCreateSecurityGroupRules.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'security_group_id': securityGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量创建辅助弹性网卡
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateSubNetworkInterface(batchCreateSubNetworkInterfaceRequest?: BatchCreateSubNetworkInterfaceRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/vpc/sub-network-interfaces/batch-create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchCreateSubNetworkInterfaceRequest !== null && batchCreateSubNetworkInterfaceRequest !== undefined) {
                if (batchCreateSubNetworkInterfaceRequest instanceof BatchCreateSubNetworkInterfaceRequest) {
                    body = batchCreateSubNetworkInterfaceRequest.body
                } else {
                    body = batchCreateSubNetworkInterfaceRequest['body'];
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
         * 为指定的端口资源实例批量删除标签。
         * 此接口为幂等接口：删除时，如果删除的标签不存在，默认处理成功；删除时不对标签字符集范围做校验。删除时tags结构体不能缺失，key不能为空，或者空字符串。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeletePortTags(batchDeletePortTagsRequest?: BatchDeletePortTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/ports/{port_id}/tags/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let portId;

            if (batchDeletePortTagsRequest !== null && batchDeletePortTagsRequest !== undefined) {
                if (batchDeletePortTagsRequest instanceof BatchDeletePortTagsRequest) {
                    portId = batchDeletePortTagsRequest.portId;
                    body = batchDeletePortTagsRequest.body
                } else {
                    portId = batchDeletePortTagsRequest['port_id'];
                    body = batchDeletePortTagsRequest['body'];
                }
            }

        
            if (portId === null || portId === undefined) {
            throw new RequiredError('portId','Required parameter portId was null or undefined when calling batchDeletePortTags.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'port_id': portId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 使用标签过滤查询端口实例数量。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        countPortsByTags(countPortsByTagsRequest?: CountPortsByTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/ports/resource-instances/count",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (countPortsByTagsRequest !== null && countPortsByTagsRequest !== undefined) {
                if (countPortsByTagsRequest instanceof CountPortsByTagsRequest) {
                    body = countPortsByTagsRequest.body
                } else {
                    body = countPortsByTagsRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 给指定端口资源实例增加标签信息。
         * 此接口为幂等接口：创建时，如果创建的标签已经存在（key相同），则覆盖。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPortTag(createPortTagRequest?: CreatePortTagRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/ports/{port_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let portId;

            if (createPortTagRequest !== null && createPortTagRequest !== undefined) {
                if (createPortTagRequest instanceof CreatePortTagRequest) {
                    portId = createPortTagRequest.portId;
                    body = createPortTagRequest.body
                } else {
                    portId = createPortTagRequest['port_id'];
                    body = createPortTagRequest['body'];
                }
            }

        
            if (portId === null || portId === undefined) {
            throw new RequiredError('portId','Required parameter portId was null or undefined when calling createPortTag.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'port_id': portId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建安全组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSecurityGroup(createSecurityGroupRequest?: CreateSecurityGroupRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/vpc/security-groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

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
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建安全组规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSecurityGroupRule(createSecurityGroupRuleRequest?: CreateSecurityGroupRuleRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/vpc/security-group-rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

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
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建辅助弹性网卡
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSubNetworkInterface(createSubNetworkInterfaceRequest?: CreateSubNetworkInterfaceRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/vpc/sub-network-interfaces",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createSubNetworkInterfaceRequest !== null && createSubNetworkInterfaceRequest !== undefined) {
                if (createSubNetworkInterfaceRequest instanceof CreateSubNetworkInterfaceRequest) {
                    body = createSubNetworkInterfaceRequest.body
                } else {
                    body = createSubNetworkInterfaceRequest['body'];
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
         * 创建流量镜像筛选条件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTrafficMirrorFilter(createTrafficMirrorFilterRequest?: CreateTrafficMirrorFilterRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/vpc/traffic-mirror-filters",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createTrafficMirrorFilterRequest !== null && createTrafficMirrorFilterRequest !== undefined) {
                if (createTrafficMirrorFilterRequest instanceof CreateTrafficMirrorFilterRequest) {
                    body = createTrafficMirrorFilterRequest.body
                } else {
                    body = createTrafficMirrorFilterRequest['body'];
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
         * 创建流量镜像筛选规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTrafficMirrorFilterRule(createTrafficMirrorFilterRuleRequest?: CreateTrafficMirrorFilterRuleRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/vpc/traffic-mirror-filter-rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createTrafficMirrorFilterRuleRequest !== null && createTrafficMirrorFilterRuleRequest !== undefined) {
                if (createTrafficMirrorFilterRuleRequest instanceof CreateTrafficMirrorFilterRuleRequest) {
                    body = createTrafficMirrorFilterRuleRequest.body
                } else {
                    body = createTrafficMirrorFilterRuleRequest['body'];
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
         * 创建流量镜像会话
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTrafficMirrorSession(createTrafficMirrorSessionRequest?: CreateTrafficMirrorSessionRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/vpc/traffic-mirror-sessions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createTrafficMirrorSessionRequest !== null && createTrafficMirrorSessionRequest !== undefined) {
                if (createTrafficMirrorSessionRequest instanceof CreateTrafficMirrorSessionRequest) {
                    body = createTrafficMirrorSessionRequest.body
                } else {
                    body = createTrafficMirrorSessionRequest['body'];
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
         * 子网预留网段是子网网段范围的IP网段，此IP网段内的IP不会被子网内的实例占用。用户可以通过创建子网预留网段来预留某个IP网段，用于后续的特殊场景使用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createVirsubnetCidrReservation(createVirsubnetCidrReservationRequest?: CreateVirsubnetCidrReservationRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/vpc/virsubnet-cidr-reservations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createVirsubnetCidrReservationRequest !== null && createVirsubnetCidrReservationRequest !== undefined) {
                if (createVirsubnetCidrReservationRequest instanceof CreateVirsubnetCidrReservationRequest) {
                    body = createVirsubnetCidrReservationRequest.body
                } else {
                    body = createVirsubnetCidrReservationRequest['body'];
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
         * 删除指定端口的标签信息。
         * 该接口为幂等接口：删除的key不存在报404，key不能为空或者空字符串。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePortTag(deletePortTagRequest?: DeletePortTagRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/ports/{port_id}/tags/{tag_key}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let portId;
            
            let tagKey;

            if (deletePortTagRequest !== null && deletePortTagRequest !== undefined) {
                if (deletePortTagRequest instanceof DeletePortTagRequest) {
                    portId = deletePortTagRequest.portId;
                    tagKey = deletePortTagRequest.tagKey;
                } else {
                    portId = deletePortTagRequest['port_id'];
                    tagKey = deletePortTagRequest['tag_key'];
                }
            }

        
            if (portId === null || portId === undefined) {
            throw new RequiredError('portId','Required parameter portId was null or undefined when calling deletePortTag.');
            }
            if (tagKey === null || tagKey === undefined) {
            throw new RequiredError('tagKey','Required parameter tagKey was null or undefined when calling deletePortTag.');
            }

            options.pathParams = { 'port_id': portId,'tag_key': tagKey, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除安全组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSecurityGroup(deleteSecurityGroupRequest?: DeleteSecurityGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/vpc/security-groups/{security_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
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
         * 删除安全组规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSecurityGroupRule(deleteSecurityGroupRuleRequest?: DeleteSecurityGroupRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/vpc/security-group-rules/{security_group_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
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
         * 删除辅助弹性网卡
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSubNetworkInterface(deleteSubNetworkInterfaceRequest?: DeleteSubNetworkInterfaceRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/vpc/sub-network-interfaces/{sub_network_interface_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let subNetworkInterfaceId;

            if (deleteSubNetworkInterfaceRequest !== null && deleteSubNetworkInterfaceRequest !== undefined) {
                if (deleteSubNetworkInterfaceRequest instanceof DeleteSubNetworkInterfaceRequest) {
                    subNetworkInterfaceId = deleteSubNetworkInterfaceRequest.subNetworkInterfaceId;
                } else {
                    subNetworkInterfaceId = deleteSubNetworkInterfaceRequest['sub_network_interface_id'];
                }
            }

        
            if (subNetworkInterfaceId === null || subNetworkInterfaceId === undefined) {
            throw new RequiredError('subNetworkInterfaceId','Required parameter subNetworkInterfaceId was null or undefined when calling deleteSubNetworkInterface.');
            }

            options.pathParams = { 'sub_network_interface_id': subNetworkInterfaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除流量镜像筛选条件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTrafficMirrorFilter(deleteTrafficMirrorFilterRequest?: DeleteTrafficMirrorFilterRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/vpc/traffic-mirror-filters/{traffic_mirror_filter_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let trafficMirrorFilterId;

            if (deleteTrafficMirrorFilterRequest !== null && deleteTrafficMirrorFilterRequest !== undefined) {
                if (deleteTrafficMirrorFilterRequest instanceof DeleteTrafficMirrorFilterRequest) {
                    trafficMirrorFilterId = deleteTrafficMirrorFilterRequest.trafficMirrorFilterId;
                } else {
                    trafficMirrorFilterId = deleteTrafficMirrorFilterRequest['traffic_mirror_filter_id'];
                }
            }

        
            if (trafficMirrorFilterId === null || trafficMirrorFilterId === undefined) {
            throw new RequiredError('trafficMirrorFilterId','Required parameter trafficMirrorFilterId was null or undefined when calling deleteTrafficMirrorFilter.');
            }

            options.pathParams = { 'traffic_mirror_filter_id': trafficMirrorFilterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除流量镜像筛选规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTrafficMirrorFilterRule(deleteTrafficMirrorFilterRuleRequest?: DeleteTrafficMirrorFilterRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/vpc/traffic-mirror-filter-rules/{traffic_mirror_filter_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let trafficMirrorFilterRuleId;

            if (deleteTrafficMirrorFilterRuleRequest !== null && deleteTrafficMirrorFilterRuleRequest !== undefined) {
                if (deleteTrafficMirrorFilterRuleRequest instanceof DeleteTrafficMirrorFilterRuleRequest) {
                    trafficMirrorFilterRuleId = deleteTrafficMirrorFilterRuleRequest.trafficMirrorFilterRuleId;
                } else {
                    trafficMirrorFilterRuleId = deleteTrafficMirrorFilterRuleRequest['traffic_mirror_filter_rule_id'];
                }
            }

        
            if (trafficMirrorFilterRuleId === null || trafficMirrorFilterRuleId === undefined) {
            throw new RequiredError('trafficMirrorFilterRuleId','Required parameter trafficMirrorFilterRuleId was null or undefined when calling deleteTrafficMirrorFilterRule.');
            }

            options.pathParams = { 'traffic_mirror_filter_rule_id': trafficMirrorFilterRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除流量镜像会话
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTrafficMirrorSession(deleteTrafficMirrorSessionRequest?: DeleteTrafficMirrorSessionRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/vpc/traffic-mirror-sessions/{traffic_mirror_session_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let trafficMirrorSessionId;

            if (deleteTrafficMirrorSessionRequest !== null && deleteTrafficMirrorSessionRequest !== undefined) {
                if (deleteTrafficMirrorSessionRequest instanceof DeleteTrafficMirrorSessionRequest) {
                    trafficMirrorSessionId = deleteTrafficMirrorSessionRequest.trafficMirrorSessionId;
                } else {
                    trafficMirrorSessionId = deleteTrafficMirrorSessionRequest['traffic_mirror_session_id'];
                }
            }

        
            if (trafficMirrorSessionId === null || trafficMirrorSessionId === undefined) {
            throw new RequiredError('trafficMirrorSessionId','Required parameter trafficMirrorSessionId was null or undefined when calling deleteTrafficMirrorSession.');
            }

            options.pathParams = { 'traffic_mirror_session_id': trafficMirrorSessionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当您已创建的子网预留网段不再使用时，您可以通过调用该接口删除子网预留网段资源。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteVirsubnetCidrReservation(deleteVirsubnetCidrReservationRequest?: DeleteVirsubnetCidrReservationRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/vpc/virsubnet-cidr-reservations/{virsubnet_cidr_reservation_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let virsubnetCidrReservationId;

            if (deleteVirsubnetCidrReservationRequest !== null && deleteVirsubnetCidrReservationRequest !== undefined) {
                if (deleteVirsubnetCidrReservationRequest instanceof DeleteVirsubnetCidrReservationRequest) {
                    virsubnetCidrReservationId = deleteVirsubnetCidrReservationRequest.virsubnetCidrReservationId;
                } else {
                    virsubnetCidrReservationId = deleteVirsubnetCidrReservationRequest['virsubnet_cidr_reservation_id'];
                }
            }

        
            if (virsubnetCidrReservationId === null || virsubnetCidrReservationId === undefined) {
            throw new RequiredError('virsubnetCidrReservationId','Required parameter virsubnetCidrReservationId was null or undefined when calling deleteVirsubnetCidrReservation.');
            }

            options.pathParams = { 'virsubnet_cidr_reservation_id': virsubnetCidrReservationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户在指定Project中实例类型的所有资源标签集合。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPortTags(listPortTagsRequest?: ListPortTagsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/ports/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;

            if (listPortTagsRequest !== null && listPortTagsRequest !== undefined) {
                if (listPortTagsRequest instanceof ListPortTagsRequest) {
                    limit = listPortTagsRequest.limit;
                    offset = listPortTagsRequest.offset;
                } else {
                    limit = listPortTagsRequest['limit'];
                    offset = listPortTagsRequest['offset'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当您的端口创建成功后，您可以通过调用该接口查询所有端口信息，包括端口ID、IP地址、所属云服务实例等。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPorts(listPortsRequest?: ListPortsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/ports",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let id;
            
            let name;
            
            let adminStateUp;
            
            let status;
            
            let virsubnetId;
            
            let deviceId;
            
            let macAddress;
            
            let deviceOwner;
            
            let deviceOwnerPrefixlike;
            
            let description;
            
            let bindingHostId;
            
            let privateIps;
            
            let securityGroups;
            
            let vpcId;
            
            let allowedAddressPairs;
            
            let instanceId;
            
            let instanceType;

            if (listPortsRequest !== null && listPortsRequest !== undefined) {
                if (listPortsRequest instanceof ListPortsRequest) {
                    id = listPortsRequest.id;
                    name = listPortsRequest.name;
                    adminStateUp = listPortsRequest.adminStateUp;
                    status = listPortsRequest.status;
                    virsubnetId = listPortsRequest.virsubnetId;
                    deviceId = listPortsRequest.deviceId;
                    macAddress = listPortsRequest.macAddress;
                    deviceOwner = listPortsRequest.deviceOwner;
                    deviceOwnerPrefixlike = listPortsRequest.deviceOwnerPrefixlike;
                    description = listPortsRequest.description;
                    bindingHostId = listPortsRequest.bindingHostId;
                    privateIps = listPortsRequest.privateIps;
                    securityGroups = listPortsRequest.securityGroups;
                    vpcId = listPortsRequest.vpcId;
                    allowedAddressPairs = listPortsRequest.allowedAddressPairs;
                    instanceId = listPortsRequest.instanceId;
                    instanceType = listPortsRequest.instanceType;
                } else {
                    id = listPortsRequest['id'];
                    name = listPortsRequest['name'];
                    adminStateUp = listPortsRequest['admin_state_up'];
                    status = listPortsRequest['status'];
                    virsubnetId = listPortsRequest['virsubnet_id'];
                    deviceId = listPortsRequest['device_id'];
                    macAddress = listPortsRequest['mac_address'];
                    deviceOwner = listPortsRequest['device_owner'];
                    deviceOwnerPrefixlike = listPortsRequest['device_owner_prefixlike'];
                    description = listPortsRequest['description'];
                    bindingHostId = listPortsRequest['binding:host_id'];
                    privateIps = listPortsRequest['private_ips'];
                    securityGroups = listPortsRequest['security_groups'];
                    vpcId = listPortsRequest['vpc_id'];
                    allowedAddressPairs = listPortsRequest['allowed_address_pairs'];
                    instanceId = listPortsRequest['instance_id'];
                    instanceType = listPortsRequest['instance_type'];
                }
            }

        
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (adminStateUp !== null && adminStateUp !== undefined) {
                localVarQueryParameter['admin_state_up'] = adminStateUp;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (virsubnetId !== null && virsubnetId !== undefined) {
                localVarQueryParameter['virsubnet_id'] = virsubnetId;
            }
            if (deviceId !== null && deviceId !== undefined) {
                localVarQueryParameter['device_id'] = deviceId;
            }
            if (macAddress !== null && macAddress !== undefined) {
                localVarQueryParameter['mac_address'] = macAddress;
            }
            if (deviceOwner !== null && deviceOwner !== undefined) {
                localVarQueryParameter['device_owner'] = deviceOwner;
            }
            if (deviceOwnerPrefixlike !== null && deviceOwnerPrefixlike !== undefined) {
                localVarQueryParameter['device_owner_prefixlike'] = deviceOwnerPrefixlike;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }
            if (bindingHostId !== null && bindingHostId !== undefined) {
                localVarQueryParameter['binding:host_id'] = bindingHostId;
            }
            if (privateIps !== null && privateIps !== undefined) {
                localVarQueryParameter['private_ips'] = privateIps;
            }
            if (securityGroups !== null && securityGroups !== undefined) {
                localVarQueryParameter['security_groups'] = securityGroups;
            }
            if (vpcId !== null && vpcId !== undefined) {
                localVarQueryParameter['vpc_id'] = vpcId;
            }
            if (allowedAddressPairs !== null && allowedAddressPairs !== undefined) {
                localVarQueryParameter['allowed_address_pairs'] = allowedAddressPairs;
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (instanceType !== null && instanceType !== undefined) {
                localVarQueryParameter['instance_type'] = instanceType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 使用标签过滤查询端口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPortsByTags(listPortsByTagsRequest?: ListPortsByTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/ports/resource-instances/filter",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let limit;
            
            let offset;

            if (listPortsByTagsRequest !== null && listPortsByTagsRequest !== undefined) {
                if (listPortsByTagsRequest instanceof ListPortsByTagsRequest) {
                    limit = listPortsByTagsRequest.limit;
                    offset = listPortsByTagsRequest.offset;
                    body = listPortsByTagsRequest.body
                } else {
                    limit = listPortsByTagsRequest['limit'];
                    offset = listPortsByTagsRequest['offset'];
                    body = listPortsByTagsRequest['body'];
                }
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
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询安全组规则列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSecurityGroupRules(listSecurityGroupRulesRequest?: ListSecurityGroupRulesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/vpc/security-group-rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let id;
            
            let securityGroupId;
            
            let protocol;
            
            let description;
            
            let remoteGroupId;
            
            let direction;
            
            let action;
            
            let remoteIpPrefix;
            
            let priority;
            
            let ethertype;
            
            let remoteAddressGroupId;
            
            let enabled;

            if (listSecurityGroupRulesRequest !== null && listSecurityGroupRulesRequest !== undefined) {
                if (listSecurityGroupRulesRequest instanceof ListSecurityGroupRulesRequest) {
                    limit = listSecurityGroupRulesRequest.limit;
                    marker = listSecurityGroupRulesRequest.marker;
                    id = listSecurityGroupRulesRequest.id;
                    securityGroupId = listSecurityGroupRulesRequest.securityGroupId;
                    protocol = listSecurityGroupRulesRequest.protocol;
                    description = listSecurityGroupRulesRequest.description;
                    remoteGroupId = listSecurityGroupRulesRequest.remoteGroupId;
                    direction = listSecurityGroupRulesRequest.direction;
                    action = listSecurityGroupRulesRequest.action;
                    remoteIpPrefix = listSecurityGroupRulesRequest.remoteIpPrefix;
                    priority = listSecurityGroupRulesRequest.priority;
                    ethertype = listSecurityGroupRulesRequest.ethertype;
                    remoteAddressGroupId = listSecurityGroupRulesRequest.remoteAddressGroupId;
                    enabled = listSecurityGroupRulesRequest.enabled;
                } else {
                    limit = listSecurityGroupRulesRequest['limit'];
                    marker = listSecurityGroupRulesRequest['marker'];
                    id = listSecurityGroupRulesRequest['id'];
                    securityGroupId = listSecurityGroupRulesRequest['security_group_id'];
                    protocol = listSecurityGroupRulesRequest['protocol'];
                    description = listSecurityGroupRulesRequest['description'];
                    remoteGroupId = listSecurityGroupRulesRequest['remote_group_id'];
                    direction = listSecurityGroupRulesRequest['direction'];
                    action = listSecurityGroupRulesRequest['action'];
                    remoteIpPrefix = listSecurityGroupRulesRequest['remote_ip_prefix'];
                    priority = listSecurityGroupRulesRequest['priority'];
                    ethertype = listSecurityGroupRulesRequest['ethertype'];
                    remoteAddressGroupId = listSecurityGroupRulesRequest['remote_address_group_id'];
                    enabled = listSecurityGroupRulesRequest['enabled'];
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
            if (securityGroupId !== null && securityGroupId !== undefined) {
                localVarQueryParameter['security_group_id'] = securityGroupId;
            }
            if (protocol !== null && protocol !== undefined) {
                localVarQueryParameter['protocol'] = protocol;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }
            if (remoteGroupId !== null && remoteGroupId !== undefined) {
                localVarQueryParameter['remote_group_id'] = remoteGroupId;
            }
            if (direction !== null && direction !== undefined) {
                localVarQueryParameter['direction'] = direction;
            }
            if (action !== null && action !== undefined) {
                localVarQueryParameter['action'] = action;
            }
            if (remoteIpPrefix !== null && remoteIpPrefix !== undefined) {
                localVarQueryParameter['remote_ip_prefix'] = remoteIpPrefix;
            }
            if (priority !== null && priority !== undefined) {
                localVarQueryParameter['priority'] = priority;
            }
            if (ethertype !== null && ethertype !== undefined) {
                localVarQueryParameter['ethertype'] = ethertype;
            }
            if (remoteAddressGroupId !== null && remoteAddressGroupId !== undefined) {
                localVarQueryParameter['remote_address_group_id'] = remoteAddressGroupId;
            }
            if (enabled !== null && enabled !== undefined) {
                localVarQueryParameter['enabled'] = enabled;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询某租户下的安全组列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSecurityGroups(listSecurityGroupsRequest?: ListSecurityGroupsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/vpc/security-groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let id;
            
            let name;
            
            let description;
            
            let enterpriseProjectId;

            if (listSecurityGroupsRequest !== null && listSecurityGroupsRequest !== undefined) {
                if (listSecurityGroupsRequest instanceof ListSecurityGroupsRequest) {
                    limit = listSecurityGroupsRequest.limit;
                    marker = listSecurityGroupsRequest.marker;
                    id = listSecurityGroupsRequest.id;
                    name = listSecurityGroupsRequest.name;
                    description = listSecurityGroupsRequest.description;
                    enterpriseProjectId = listSecurityGroupsRequest.enterpriseProjectId;
                } else {
                    limit = listSecurityGroupsRequest['limit'];
                    marker = listSecurityGroupsRequest['marker'];
                    id = listSecurityGroupsRequest['id'];
                    name = listSecurityGroupsRequest['name'];
                    description = listSecurityGroupsRequest['description'];
                    enterpriseProjectId = listSecurityGroupsRequest['enterprise_project_id'];
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
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询辅助弹性网卡列表，单次查询最多返回2000条数据
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSubNetworkInterfaces(listSubNetworkInterfacesRequest?: ListSubNetworkInterfacesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/vpc/sub-network-interfaces",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let id;
            
            let virsubnetId;
            
            let privateIpAddress;
            
            let macAddress;
            
            let vpcId;
            
            let description;
            
            let parentId;

            if (listSubNetworkInterfacesRequest !== null && listSubNetworkInterfacesRequest !== undefined) {
                if (listSubNetworkInterfacesRequest instanceof ListSubNetworkInterfacesRequest) {
                    limit = listSubNetworkInterfacesRequest.limit;
                    marker = listSubNetworkInterfacesRequest.marker;
                    id = listSubNetworkInterfacesRequest.id;
                    virsubnetId = listSubNetworkInterfacesRequest.virsubnetId;
                    privateIpAddress = listSubNetworkInterfacesRequest.privateIpAddress;
                    macAddress = listSubNetworkInterfacesRequest.macAddress;
                    vpcId = listSubNetworkInterfacesRequest.vpcId;
                    description = listSubNetworkInterfacesRequest.description;
                    parentId = listSubNetworkInterfacesRequest.parentId;
                } else {
                    limit = listSubNetworkInterfacesRequest['limit'];
                    marker = listSubNetworkInterfacesRequest['marker'];
                    id = listSubNetworkInterfacesRequest['id'];
                    virsubnetId = listSubNetworkInterfacesRequest['virsubnet_id'];
                    privateIpAddress = listSubNetworkInterfacesRequest['private_ip_address'];
                    macAddress = listSubNetworkInterfacesRequest['mac_address'];
                    vpcId = listSubNetworkInterfacesRequest['vpc_id'];
                    description = listSubNetworkInterfacesRequest['description'];
                    parentId = listSubNetworkInterfacesRequest['parent_id'];
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
            if (virsubnetId !== null && virsubnetId !== undefined) {
                localVarQueryParameter['virsubnet_id'] = virsubnetId;
            }
            if (privateIpAddress !== null && privateIpAddress !== undefined) {
                localVarQueryParameter['private_ip_address'] = privateIpAddress;
            }
            if (macAddress !== null && macAddress !== undefined) {
                localVarQueryParameter['mac_address'] = macAddress;
            }
            if (vpcId !== null && vpcId !== undefined) {
                localVarQueryParameter['vpc_id'] = vpcId;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }
            if (parentId !== null && parentId !== undefined) {
                localVarQueryParameter['parent_id'] = parentId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询流量镜像筛选规则列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTrafficMirrorFilterRules(listTrafficMirrorFilterRulesRequest?: ListTrafficMirrorFilterRulesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/vpc/traffic-mirror-filter-rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let id;
            
            let description;
            
            let trafficMirrorFilterId;
            
            let direction;
            
            let protocol;
            
            let sourceCidrBlock;
            
            let destinationCidrBlock;
            
            let sourcePortRange;
            
            let destinationPortRange;
            
            let action;
            
            let priority;
            
            let limit;
            
            let marker;

            if (listTrafficMirrorFilterRulesRequest !== null && listTrafficMirrorFilterRulesRequest !== undefined) {
                if (listTrafficMirrorFilterRulesRequest instanceof ListTrafficMirrorFilterRulesRequest) {
                    id = listTrafficMirrorFilterRulesRequest.id;
                    description = listTrafficMirrorFilterRulesRequest.description;
                    trafficMirrorFilterId = listTrafficMirrorFilterRulesRequest.trafficMirrorFilterId;
                    direction = listTrafficMirrorFilterRulesRequest.direction;
                    protocol = listTrafficMirrorFilterRulesRequest.protocol;
                    sourceCidrBlock = listTrafficMirrorFilterRulesRequest.sourceCidrBlock;
                    destinationCidrBlock = listTrafficMirrorFilterRulesRequest.destinationCidrBlock;
                    sourcePortRange = listTrafficMirrorFilterRulesRequest.sourcePortRange;
                    destinationPortRange = listTrafficMirrorFilterRulesRequest.destinationPortRange;
                    action = listTrafficMirrorFilterRulesRequest.action;
                    priority = listTrafficMirrorFilterRulesRequest.priority;
                    limit = listTrafficMirrorFilterRulesRequest.limit;
                    marker = listTrafficMirrorFilterRulesRequest.marker;
                } else {
                    id = listTrafficMirrorFilterRulesRequest['id'];
                    description = listTrafficMirrorFilterRulesRequest['description'];
                    trafficMirrorFilterId = listTrafficMirrorFilterRulesRequest['traffic_mirror_filter_id'];
                    direction = listTrafficMirrorFilterRulesRequest['direction'];
                    protocol = listTrafficMirrorFilterRulesRequest['protocol'];
                    sourceCidrBlock = listTrafficMirrorFilterRulesRequest['source_cidr_block'];
                    destinationCidrBlock = listTrafficMirrorFilterRulesRequest['destination_cidr_block'];
                    sourcePortRange = listTrafficMirrorFilterRulesRequest['source_port_range'];
                    destinationPortRange = listTrafficMirrorFilterRulesRequest['destination_port_range'];
                    action = listTrafficMirrorFilterRulesRequest['action'];
                    priority = listTrafficMirrorFilterRulesRequest['priority'];
                    limit = listTrafficMirrorFilterRulesRequest['limit'];
                    marker = listTrafficMirrorFilterRulesRequest['marker'];
                }
            }

        
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }
            if (trafficMirrorFilterId !== null && trafficMirrorFilterId !== undefined) {
                localVarQueryParameter['traffic_mirror_filter_id'] = trafficMirrorFilterId;
            }
            if (direction !== null && direction !== undefined) {
                localVarQueryParameter['direction'] = direction;
            }
            if (protocol !== null && protocol !== undefined) {
                localVarQueryParameter['protocol'] = protocol;
            }
            if (sourceCidrBlock !== null && sourceCidrBlock !== undefined) {
                localVarQueryParameter['source_cidr_block'] = sourceCidrBlock;
            }
            if (destinationCidrBlock !== null && destinationCidrBlock !== undefined) {
                localVarQueryParameter['destination_cidr_block'] = destinationCidrBlock;
            }
            if (sourcePortRange !== null && sourcePortRange !== undefined) {
                localVarQueryParameter['source_port_range'] = sourcePortRange;
            }
            if (destinationPortRange !== null && destinationPortRange !== undefined) {
                localVarQueryParameter['destination_port_range'] = destinationPortRange;
            }
            if (action !== null && action !== undefined) {
                localVarQueryParameter['action'] = action;
            }
            if (priority !== null && priority !== undefined) {
                localVarQueryParameter['priority'] = priority;
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
         * 查询流量镜像筛选条件列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTrafficMirrorFilters(listTrafficMirrorFiltersRequest?: ListTrafficMirrorFiltersRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/vpc/traffic-mirror-filters",
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
            
            let createdAt;
            
            let updatedAt;
            
            let limit;
            
            let marker;

            if (listTrafficMirrorFiltersRequest !== null && listTrafficMirrorFiltersRequest !== undefined) {
                if (listTrafficMirrorFiltersRequest instanceof ListTrafficMirrorFiltersRequest) {
                    id = listTrafficMirrorFiltersRequest.id;
                    name = listTrafficMirrorFiltersRequest.name;
                    description = listTrafficMirrorFiltersRequest.description;
                    createdAt = listTrafficMirrorFiltersRequest.createdAt;
                    updatedAt = listTrafficMirrorFiltersRequest.updatedAt;
                    limit = listTrafficMirrorFiltersRequest.limit;
                    marker = listTrafficMirrorFiltersRequest.marker;
                } else {
                    id = listTrafficMirrorFiltersRequest['id'];
                    name = listTrafficMirrorFiltersRequest['name'];
                    description = listTrafficMirrorFiltersRequest['description'];
                    createdAt = listTrafficMirrorFiltersRequest['created_at'];
                    updatedAt = listTrafficMirrorFiltersRequest['updated_at'];
                    limit = listTrafficMirrorFiltersRequest['limit'];
                    marker = listTrafficMirrorFiltersRequest['marker'];
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
            if (createdAt !== null && createdAt !== undefined) {
                localVarQueryParameter['created_at'] = createdAt;
            }
            if (updatedAt !== null && updatedAt !== undefined) {
                localVarQueryParameter['updated_at'] = updatedAt;
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
         * 查询流量镜像会话列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTrafficMirrorSessions(listTrafficMirrorSessionsRequest?: ListTrafficMirrorSessionsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/vpc/traffic-mirror-sessions",
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
            
            let trafficMirrorFilterId;
            
            let trafficMirrorTargetId;
            
            let trafficMirrorTargetType;
            
            let virtualNetworkId;
            
            let packetLength;
            
            let priority;
            
            let enabled;
            
            let type;
            
            let createdAt;
            
            let updatedAt;
            
            let limit;
            
            let marker;

            if (listTrafficMirrorSessionsRequest !== null && listTrafficMirrorSessionsRequest !== undefined) {
                if (listTrafficMirrorSessionsRequest instanceof ListTrafficMirrorSessionsRequest) {
                    id = listTrafficMirrorSessionsRequest.id;
                    name = listTrafficMirrorSessionsRequest.name;
                    description = listTrafficMirrorSessionsRequest.description;
                    trafficMirrorFilterId = listTrafficMirrorSessionsRequest.trafficMirrorFilterId;
                    trafficMirrorTargetId = listTrafficMirrorSessionsRequest.trafficMirrorTargetId;
                    trafficMirrorTargetType = listTrafficMirrorSessionsRequest.trafficMirrorTargetType;
                    virtualNetworkId = listTrafficMirrorSessionsRequest.virtualNetworkId;
                    packetLength = listTrafficMirrorSessionsRequest.packetLength;
                    priority = listTrafficMirrorSessionsRequest.priority;
                    enabled = listTrafficMirrorSessionsRequest.enabled;
                    type = listTrafficMirrorSessionsRequest.type;
                    createdAt = listTrafficMirrorSessionsRequest.createdAt;
                    updatedAt = listTrafficMirrorSessionsRequest.updatedAt;
                    limit = listTrafficMirrorSessionsRequest.limit;
                    marker = listTrafficMirrorSessionsRequest.marker;
                } else {
                    id = listTrafficMirrorSessionsRequest['id'];
                    name = listTrafficMirrorSessionsRequest['name'];
                    description = listTrafficMirrorSessionsRequest['description'];
                    trafficMirrorFilterId = listTrafficMirrorSessionsRequest['traffic_mirror_filter_id'];
                    trafficMirrorTargetId = listTrafficMirrorSessionsRequest['traffic_mirror_target_id'];
                    trafficMirrorTargetType = listTrafficMirrorSessionsRequest['traffic_mirror_target_type'];
                    virtualNetworkId = listTrafficMirrorSessionsRequest['virtual_network_id'];
                    packetLength = listTrafficMirrorSessionsRequest['packet_length'];
                    priority = listTrafficMirrorSessionsRequest['priority'];
                    enabled = listTrafficMirrorSessionsRequest['enabled'];
                    type = listTrafficMirrorSessionsRequest['type'];
                    createdAt = listTrafficMirrorSessionsRequest['created_at'];
                    updatedAt = listTrafficMirrorSessionsRequest['updated_at'];
                    limit = listTrafficMirrorSessionsRequest['limit'];
                    marker = listTrafficMirrorSessionsRequest['marker'];
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
            if (trafficMirrorFilterId !== null && trafficMirrorFilterId !== undefined) {
                localVarQueryParameter['traffic_mirror_filter_id'] = trafficMirrorFilterId;
            }
            if (trafficMirrorTargetId !== null && trafficMirrorTargetId !== undefined) {
                localVarQueryParameter['traffic_mirror_target_id'] = trafficMirrorTargetId;
            }
            if (trafficMirrorTargetType !== null && trafficMirrorTargetType !== undefined) {
                localVarQueryParameter['traffic_mirror_target_type'] = trafficMirrorTargetType;
            }
            if (virtualNetworkId !== null && virtualNetworkId !== undefined) {
                localVarQueryParameter['virtual_network_id'] = virtualNetworkId;
            }
            if (packetLength !== null && packetLength !== undefined) {
                localVarQueryParameter['packet_length'] = packetLength;
            }
            if (priority !== null && priority !== undefined) {
                localVarQueryParameter['priority'] = priority;
            }
            if (enabled !== null && enabled !== undefined) {
                localVarQueryParameter['enabled'] = enabled;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (createdAt !== null && createdAt !== undefined) {
                localVarQueryParameter['created_at'] = createdAt;
            }
            if (updatedAt !== null && updatedAt !== undefined) {
                localVarQueryParameter['updated_at'] = updatedAt;
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
         * 当您的子网预留网段创建成功后，您可以通过调用该接口查询所有子网预留网段信息，包括子网预留网段名称、IP网段等。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVirsubnetCidrReservations(listVirsubnetCidrReservationsRequest?: ListVirsubnetCidrReservationsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/vpc/virsubnet-cidr-reservations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let id;
            
            let virsubnetId;
            
            let cidr;
            
            let ipVersion;
            
            let name;
            
            let description;
            
            let enterpriseProjectId;

            if (listVirsubnetCidrReservationsRequest !== null && listVirsubnetCidrReservationsRequest !== undefined) {
                if (listVirsubnetCidrReservationsRequest instanceof ListVirsubnetCidrReservationsRequest) {
                    limit = listVirsubnetCidrReservationsRequest.limit;
                    marker = listVirsubnetCidrReservationsRequest.marker;
                    id = listVirsubnetCidrReservationsRequest.id;
                    virsubnetId = listVirsubnetCidrReservationsRequest.virsubnetId;
                    cidr = listVirsubnetCidrReservationsRequest.cidr;
                    ipVersion = listVirsubnetCidrReservationsRequest.ipVersion;
                    name = listVirsubnetCidrReservationsRequest.name;
                    description = listVirsubnetCidrReservationsRequest.description;
                    enterpriseProjectId = listVirsubnetCidrReservationsRequest.enterpriseProjectId;
                } else {
                    limit = listVirsubnetCidrReservationsRequest['limit'];
                    marker = listVirsubnetCidrReservationsRequest['marker'];
                    id = listVirsubnetCidrReservationsRequest['id'];
                    virsubnetId = listVirsubnetCidrReservationsRequest['virsubnet_id'];
                    cidr = listVirsubnetCidrReservationsRequest['cidr'];
                    ipVersion = listVirsubnetCidrReservationsRequest['ip_version'];
                    name = listVirsubnetCidrReservationsRequest['name'];
                    description = listVirsubnetCidrReservationsRequest['description'];
                    enterpriseProjectId = listVirsubnetCidrReservationsRequest['enterprise_project_id'];
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
            if (virsubnetId !== null && virsubnetId !== undefined) {
                localVarQueryParameter['virsubnet_id'] = virsubnetId;
            }
            if (cidr !== null && cidr !== undefined) {
                localVarQueryParameter['cidr'] = cidr;
            }
            if (ipVersion !== null && ipVersion !== undefined) {
                localVarQueryParameter['ip_version'] = ipVersion;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当您的子网创建成功后，您可以通过调用该接口查询所有子网信息，包括子网的名称、ID等。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVirsubnets(listVirsubnetsRequest?: ListVirsubnetsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/vpc/virsubnets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let id;
            
            let name;
            
            let vpcId;
            
            let status;
            
            let scope;
            
            let zoneId;
            
            let description;

            if (listVirsubnetsRequest !== null && listVirsubnetsRequest !== undefined) {
                if (listVirsubnetsRequest instanceof ListVirsubnetsRequest) {
                    limit = listVirsubnetsRequest.limit;
                    marker = listVirsubnetsRequest.marker;
                    id = listVirsubnetsRequest.id;
                    name = listVirsubnetsRequest.name;
                    vpcId = listVirsubnetsRequest.vpcId;
                    status = listVirsubnetsRequest.status;
                    scope = listVirsubnetsRequest.scope;
                    zoneId = listVirsubnetsRequest.zoneId;
                    description = listVirsubnetsRequest.description;
                } else {
                    limit = listVirsubnetsRequest['limit'];
                    marker = listVirsubnetsRequest['marker'];
                    id = listVirsubnetsRequest['id'];
                    name = listVirsubnetsRequest['name'];
                    vpcId = listVirsubnetsRequest['vpc_id'];
                    status = listVirsubnetsRequest['status'];
                    scope = listVirsubnetsRequest['scope'];
                    zoneId = listVirsubnetsRequest['zone_id'];
                    description = listVirsubnetsRequest['description'];
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
            if (vpcId !== null && vpcId !== undefined) {
                localVarQueryParameter['vpc_id'] = vpcId;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (scope !== null && scope !== undefined) {
                localVarQueryParameter['scope'] = scope;
            }
            if (zoneId !== null && zoneId !== undefined) {
                localVarQueryParameter['zone_id'] = zoneId;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量迁移辅助弹性网卡
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        migrateSubNetworkInterface(migrateSubNetworkInterfaceRequest?: MigrateSubNetworkInterfaceRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/vpc/sub-network-interfaces/migrate",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (migrateSubNetworkInterfaceRequest !== null && migrateSubNetworkInterfaceRequest !== undefined) {
                if (migrateSubNetworkInterfaceRequest instanceof MigrateSubNetworkInterfaceRequest) {
                    body = migrateSubNetworkInterfaceRequest.body
                } else {
                    body = migrateSubNetworkInterfaceRequest['body'];
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
         * 端口移除安全组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        removeSecurityGroups(removeSecurityGroupsRequest?: RemoveSecurityGroupsRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/ports/{port_id}/remove-security-groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let portId;

            if (removeSecurityGroupsRequest !== null && removeSecurityGroupsRequest !== undefined) {
                if (removeSecurityGroupsRequest instanceof RemoveSecurityGroupsRequest) {
                    portId = removeSecurityGroupsRequest.portId;
                    body = removeSecurityGroupsRequest.body
                } else {
                    portId = removeSecurityGroupsRequest['port_id'];
                    body = removeSecurityGroupsRequest['body'];
                }
            }

        
            if (portId === null || portId === undefined) {
            throw new RequiredError('portId','Required parameter portId was null or undefined when calling removeSecurityGroups.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'port_id': portId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 流量镜像会话移除镜像源
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        removeSourcesFromTrafficMirrorSession(removeSourcesFromTrafficMirrorSessionRequest?: RemoveSourcesFromTrafficMirrorSessionRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/vpc/traffic-mirror-sessions/{traffic_mirror_session_id}/remove-sources",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let trafficMirrorSessionId;

            if (removeSourcesFromTrafficMirrorSessionRequest !== null && removeSourcesFromTrafficMirrorSessionRequest !== undefined) {
                if (removeSourcesFromTrafficMirrorSessionRequest instanceof RemoveSourcesFromTrafficMirrorSessionRequest) {
                    trafficMirrorSessionId = removeSourcesFromTrafficMirrorSessionRequest.trafficMirrorSessionId;
                    body = removeSourcesFromTrafficMirrorSessionRequest.body
                } else {
                    trafficMirrorSessionId = removeSourcesFromTrafficMirrorSessionRequest['traffic_mirror_session_id'];
                    body = removeSourcesFromTrafficMirrorSessionRequest['body'];
                }
            }

        
            if (trafficMirrorSessionId === null || trafficMirrorSessionId === undefined) {
            throw new RequiredError('trafficMirrorSessionId','Required parameter trafficMirrorSessionId was null or undefined when calling removeSourcesFromTrafficMirrorSession.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'traffic_mirror_session_id': trafficMirrorSessionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当您的端口创建成功后，您可以通过调用该接口查询单个端口的详细信息，包括端口ID、IP地址、所属云服务实例等。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPort(showPortRequest?: ShowPortRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/ports/{port_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
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
         * 查询指定端口的标签信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPortTags(showPortTagsRequest?: ShowPortTagsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/ports/{port_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let portId;

            if (showPortTagsRequest !== null && showPortTagsRequest !== undefined) {
                if (showPortTagsRequest instanceof ShowPortTagsRequest) {
                    portId = showPortTagsRequest.portId;
                } else {
                    portId = showPortTagsRequest['port_id'];
                }
            }

        
            if (portId === null || portId === undefined) {
            throw new RequiredError('portId','Required parameter portId was null or undefined when calling showPortTags.');
            }

            options.pathParams = { 'port_id': portId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 您可以通过此接口查询VPC服务相关资源的配额，包括安全组配额、安全组规则配额等。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showQuota() {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/vpc/quotas",
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
         * 查询单个安全组详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSecurityGroup(showSecurityGroupRequest?: ShowSecurityGroupRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/vpc/security-groups/{security_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
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
         * 查询单个安全组规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSecurityGroupRule(showSecurityGroupRuleRequest?: ShowSecurityGroupRuleRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/vpc/security-group-rules/{security_group_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
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
         * 查询辅助弹性网卡详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSubNetworkInterface(showSubNetworkInterfaceRequest?: ShowSubNetworkInterfaceRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/vpc/sub-network-interfaces/{sub_network_interface_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let subNetworkInterfaceId;

            if (showSubNetworkInterfaceRequest !== null && showSubNetworkInterfaceRequest !== undefined) {
                if (showSubNetworkInterfaceRequest instanceof ShowSubNetworkInterfaceRequest) {
                    subNetworkInterfaceId = showSubNetworkInterfaceRequest.subNetworkInterfaceId;
                } else {
                    subNetworkInterfaceId = showSubNetworkInterfaceRequest['sub_network_interface_id'];
                }
            }

        
            if (subNetworkInterfaceId === null || subNetworkInterfaceId === undefined) {
            throw new RequiredError('subNetworkInterfaceId','Required parameter subNetworkInterfaceId was null or undefined when calling showSubNetworkInterface.');
            }

            options.pathParams = { 'sub_network_interface_id': subNetworkInterfaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询辅助弹性网卡数目
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSubNetworkInterfacesQuantity() {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/vpc/sub-network-interfaces/count",
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
         * 查询流量镜像筛选条件详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTrafficMirrorFilter(showTrafficMirrorFilterRequest?: ShowTrafficMirrorFilterRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/vpc/traffic-mirror-filters/{traffic_mirror_filter_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let trafficMirrorFilterId;

            if (showTrafficMirrorFilterRequest !== null && showTrafficMirrorFilterRequest !== undefined) {
                if (showTrafficMirrorFilterRequest instanceof ShowTrafficMirrorFilterRequest) {
                    trafficMirrorFilterId = showTrafficMirrorFilterRequest.trafficMirrorFilterId;
                } else {
                    trafficMirrorFilterId = showTrafficMirrorFilterRequest['traffic_mirror_filter_id'];
                }
            }

        
            if (trafficMirrorFilterId === null || trafficMirrorFilterId === undefined) {
            throw new RequiredError('trafficMirrorFilterId','Required parameter trafficMirrorFilterId was null or undefined when calling showTrafficMirrorFilter.');
            }

            options.pathParams = { 'traffic_mirror_filter_id': trafficMirrorFilterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询流量镜像筛选规则详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTrafficMirrorFilterRule(showTrafficMirrorFilterRuleRequest?: ShowTrafficMirrorFilterRuleRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/vpc/traffic-mirror-filter-rules/{traffic_mirror_filter_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let trafficMirrorFilterRuleId;

            if (showTrafficMirrorFilterRuleRequest !== null && showTrafficMirrorFilterRuleRequest !== undefined) {
                if (showTrafficMirrorFilterRuleRequest instanceof ShowTrafficMirrorFilterRuleRequest) {
                    trafficMirrorFilterRuleId = showTrafficMirrorFilterRuleRequest.trafficMirrorFilterRuleId;
                } else {
                    trafficMirrorFilterRuleId = showTrafficMirrorFilterRuleRequest['traffic_mirror_filter_rule_id'];
                }
            }

        
            if (trafficMirrorFilterRuleId === null || trafficMirrorFilterRuleId === undefined) {
            throw new RequiredError('trafficMirrorFilterRuleId','Required parameter trafficMirrorFilterRuleId was null or undefined when calling showTrafficMirrorFilterRule.');
            }

            options.pathParams = { 'traffic_mirror_filter_rule_id': trafficMirrorFilterRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询流量镜像会话详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTrafficMirrorSession(showTrafficMirrorSessionRequest?: ShowTrafficMirrorSessionRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/vpc/traffic-mirror-sessions/{traffic_mirror_session_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let trafficMirrorSessionId;

            if (showTrafficMirrorSessionRequest !== null && showTrafficMirrorSessionRequest !== undefined) {
                if (showTrafficMirrorSessionRequest instanceof ShowTrafficMirrorSessionRequest) {
                    trafficMirrorSessionId = showTrafficMirrorSessionRequest.trafficMirrorSessionId;
                } else {
                    trafficMirrorSessionId = showTrafficMirrorSessionRequest['traffic_mirror_session_id'];
                }
            }

        
            if (trafficMirrorSessionId === null || trafficMirrorSessionId === undefined) {
            throw new RequiredError('trafficMirrorSessionId','Required parameter trafficMirrorSessionId was null or undefined when calling showTrafficMirrorSession.');
            }

            options.pathParams = { 'traffic_mirror_session_id': trafficMirrorSessionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当您的子网创建成功后，您可以通过调用该接口查询单个子网的详细信息，包括子网的名称、ID、状态等。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVirsubnet(showVirsubnetRequest?: ShowVirsubnetRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/vpc/virsubnets/{virsubnet_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let virsubnetId;

            if (showVirsubnetRequest !== null && showVirsubnetRequest !== undefined) {
                if (showVirsubnetRequest instanceof ShowVirsubnetRequest) {
                    virsubnetId = showVirsubnetRequest.virsubnetId;
                } else {
                    virsubnetId = showVirsubnetRequest['virsubnet_id'];
                }
            }

        
            if (virsubnetId === null || virsubnetId === undefined) {
            throw new RequiredError('virsubnetId','Required parameter virsubnetId was null or undefined when calling showVirsubnet.');
            }

            options.pathParams = { 'virsubnet_id': virsubnetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当您的子网预留网段创建成功后，您可以通过调用该接口查询单个子网预留网段的详细信息，包括子网预留网段的名称、IP网段等。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVirsubnetCidrReservation(showVirsubnetCidrReservationRequest?: ShowVirsubnetCidrReservationRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/vpc/virsubnet-cidr-reservations/{virsubnet_cidr_reservation_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let virsubnetCidrReservationId;

            if (showVirsubnetCidrReservationRequest !== null && showVirsubnetCidrReservationRequest !== undefined) {
                if (showVirsubnetCidrReservationRequest instanceof ShowVirsubnetCidrReservationRequest) {
                    virsubnetCidrReservationId = showVirsubnetCidrReservationRequest.virsubnetCidrReservationId;
                } else {
                    virsubnetCidrReservationId = showVirsubnetCidrReservationRequest['virsubnet_cidr_reservation_id'];
                }
            }

        
            if (virsubnetCidrReservationId === null || virsubnetCidrReservationId === undefined) {
            throw new RequiredError('virsubnetCidrReservationId','Required parameter virsubnetCidrReservationId was null or undefined when calling showVirsubnetCidrReservation.');
            }

            options.pathParams = { 'virsubnet_cidr_reservation_id': virsubnetCidrReservationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新安全组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSecurityGroup(updateSecurityGroupRequest?: UpdateSecurityGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/vpc/security-groups/{security_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let securityGroupId;

            if (updateSecurityGroupRequest !== null && updateSecurityGroupRequest !== undefined) {
                if (updateSecurityGroupRequest instanceof UpdateSecurityGroupRequest) {
                    securityGroupId = updateSecurityGroupRequest.securityGroupId;
                    body = updateSecurityGroupRequest.body
                } else {
                    securityGroupId = updateSecurityGroupRequest['security_group_id'];
                    body = updateSecurityGroupRequest['body'];
                }
            }

        
            if (securityGroupId === null || securityGroupId === undefined) {
            throw new RequiredError('securityGroupId','Required parameter securityGroupId was null or undefined when calling updateSecurityGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'security_group_id': securityGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新辅助弹性网卡
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSubNetworkInterface(updateSubNetworkInterfaceRequest?: UpdateSubNetworkInterfaceRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/vpc/sub-network-interfaces/{sub_network_interface_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let subNetworkInterfaceId;

            if (updateSubNetworkInterfaceRequest !== null && updateSubNetworkInterfaceRequest !== undefined) {
                if (updateSubNetworkInterfaceRequest instanceof UpdateSubNetworkInterfaceRequest) {
                    subNetworkInterfaceId = updateSubNetworkInterfaceRequest.subNetworkInterfaceId;
                    body = updateSubNetworkInterfaceRequest.body
                } else {
                    subNetworkInterfaceId = updateSubNetworkInterfaceRequest['sub_network_interface_id'];
                    body = updateSubNetworkInterfaceRequest['body'];
                }
            }

        
            if (subNetworkInterfaceId === null || subNetworkInterfaceId === undefined) {
            throw new RequiredError('subNetworkInterfaceId','Required parameter subNetworkInterfaceId was null or undefined when calling updateSubNetworkInterface.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'sub_network_interface_id': subNetworkInterfaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新流量镜像筛选条件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTrafficMirrorFilter(updateTrafficMirrorFilterRequest?: UpdateTrafficMirrorFilterRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/vpc/traffic-mirror-filters/{traffic_mirror_filter_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let trafficMirrorFilterId;

            if (updateTrafficMirrorFilterRequest !== null && updateTrafficMirrorFilterRequest !== undefined) {
                if (updateTrafficMirrorFilterRequest instanceof UpdateTrafficMirrorFilterRequest) {
                    trafficMirrorFilterId = updateTrafficMirrorFilterRequest.trafficMirrorFilterId;
                    body = updateTrafficMirrorFilterRequest.body
                } else {
                    trafficMirrorFilterId = updateTrafficMirrorFilterRequest['traffic_mirror_filter_id'];
                    body = updateTrafficMirrorFilterRequest['body'];
                }
            }

        
            if (trafficMirrorFilterId === null || trafficMirrorFilterId === undefined) {
            throw new RequiredError('trafficMirrorFilterId','Required parameter trafficMirrorFilterId was null or undefined when calling updateTrafficMirrorFilter.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'traffic_mirror_filter_id': trafficMirrorFilterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新流量镜像筛选规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTrafficMirrorFilterRule(updateTrafficMirrorFilterRuleRequest?: UpdateTrafficMirrorFilterRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/vpc/traffic-mirror-filter-rules/{traffic_mirror_filter_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let trafficMirrorFilterRuleId;

            if (updateTrafficMirrorFilterRuleRequest !== null && updateTrafficMirrorFilterRuleRequest !== undefined) {
                if (updateTrafficMirrorFilterRuleRequest instanceof UpdateTrafficMirrorFilterRuleRequest) {
                    trafficMirrorFilterRuleId = updateTrafficMirrorFilterRuleRequest.trafficMirrorFilterRuleId;
                    body = updateTrafficMirrorFilterRuleRequest.body
                } else {
                    trafficMirrorFilterRuleId = updateTrafficMirrorFilterRuleRequest['traffic_mirror_filter_rule_id'];
                    body = updateTrafficMirrorFilterRuleRequest['body'];
                }
            }

        
            if (trafficMirrorFilterRuleId === null || trafficMirrorFilterRuleId === undefined) {
            throw new RequiredError('trafficMirrorFilterRuleId','Required parameter trafficMirrorFilterRuleId was null or undefined when calling updateTrafficMirrorFilterRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'traffic_mirror_filter_rule_id': trafficMirrorFilterRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新流量镜像会话
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTrafficMirrorSession(updateTrafficMirrorSessionRequest?: UpdateTrafficMirrorSessionRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/vpc/traffic-mirror-sessions/{traffic_mirror_session_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let trafficMirrorSessionId;

            if (updateTrafficMirrorSessionRequest !== null && updateTrafficMirrorSessionRequest !== undefined) {
                if (updateTrafficMirrorSessionRequest instanceof UpdateTrafficMirrorSessionRequest) {
                    trafficMirrorSessionId = updateTrafficMirrorSessionRequest.trafficMirrorSessionId;
                    body = updateTrafficMirrorSessionRequest.body
                } else {
                    trafficMirrorSessionId = updateTrafficMirrorSessionRequest['traffic_mirror_session_id'];
                    body = updateTrafficMirrorSessionRequest['body'];
                }
            }

        
            if (trafficMirrorSessionId === null || trafficMirrorSessionId === undefined) {
            throw new RequiredError('trafficMirrorSessionId','Required parameter trafficMirrorSessionId was null or undefined when calling updateTrafficMirrorSession.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'traffic_mirror_session_id': trafficMirrorSessionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当您的子网预留网段创建成功后，您可以通过调用该接口更新子网预留网段的基本信息，包括子网预留网段的名称、描述信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateVirsubnetCidrReservation(updateVirsubnetCidrReservationRequest?: UpdateVirsubnetCidrReservationRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/vpc/virsubnet-cidr-reservations/{virsubnet_cidr_reservation_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let virsubnetCidrReservationId;

            if (updateVirsubnetCidrReservationRequest !== null && updateVirsubnetCidrReservationRequest !== undefined) {
                if (updateVirsubnetCidrReservationRequest instanceof UpdateVirsubnetCidrReservationRequest) {
                    virsubnetCidrReservationId = updateVirsubnetCidrReservationRequest.virsubnetCidrReservationId;
                    body = updateVirsubnetCidrReservationRequest.body
                } else {
                    virsubnetCidrReservationId = updateVirsubnetCidrReservationRequest['virsubnet_cidr_reservation_id'];
                    body = updateVirsubnetCidrReservationRequest['body'];
                }
            }

        
            if (virsubnetCidrReservationId === null || virsubnetCidrReservationId === undefined) {
            throw new RequiredError('virsubnetCidrReservationId','Required parameter virsubnetCidrReservationId was null or undefined when calling updateVirsubnetCidrReservation.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'virsubnet_cidr_reservation_id': virsubnetCidrReservationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 网络ACL插入规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addFirewallRules(addFirewallRulesRequest?: AddFirewallRulesRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/vpc/firewalls/{firewall_id}/insert-rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let firewallId;

            if (addFirewallRulesRequest !== null && addFirewallRulesRequest !== undefined) {
                if (addFirewallRulesRequest instanceof AddFirewallRulesRequest) {
                    firewallId = addFirewallRulesRequest.firewallId;
                    body = addFirewallRulesRequest.body
                } else {
                    firewallId = addFirewallRulesRequest['firewall_id'];
                    body = addFirewallRulesRequest['body'];
                }
            }

        
            if (firewallId === null || firewallId === undefined) {
            throw new RequiredError('firewallId','Required parameter firewallId was null or undefined when calling addFirewallRules.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'firewall_id': firewallId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 网络ACL绑定子网
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associateSubnetFirewall(associateSubnetFirewallRequest?: AssociateSubnetFirewallRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/vpc/firewalls/{firewall_id}/associate-subnets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let firewallId;

            if (associateSubnetFirewallRequest !== null && associateSubnetFirewallRequest !== undefined) {
                if (associateSubnetFirewallRequest instanceof AssociateSubnetFirewallRequest) {
                    firewallId = associateSubnetFirewallRequest.firewallId;
                    body = associateSubnetFirewallRequest.body
                } else {
                    firewallId = associateSubnetFirewallRequest['firewall_id'];
                    body = associateSubnetFirewallRequest['body'];
                }
            }

        
            if (firewallId === null || firewallId === undefined) {
            throw new RequiredError('firewallId','Required parameter firewallId was null or undefined when calling associateSubnetFirewall.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'firewall_id': firewallId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 为指定的网络ACL资源实例批量添加标签。
         * 此接口为幂等接口：创建时如果请求体中存在重复key则报错。创建时，不允许设置重复key数据，如果数据库已存在该key，就覆盖value的值。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateFirewallTags(batchCreateFirewallTagsRequest?: BatchCreateFirewallTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/firewalls/{firewall_id}/tags/create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let firewallId;

            if (batchCreateFirewallTagsRequest !== null && batchCreateFirewallTagsRequest !== undefined) {
                if (batchCreateFirewallTagsRequest instanceof BatchCreateFirewallTagsRequest) {
                    firewallId = batchCreateFirewallTagsRequest.firewallId;
                    body = batchCreateFirewallTagsRequest.body
                } else {
                    firewallId = batchCreateFirewallTagsRequest['firewall_id'];
                    body = batchCreateFirewallTagsRequest['body'];
                }
            }

        
            if (firewallId === null || firewallId === undefined) {
            throw new RequiredError('firewallId','Required parameter firewallId was null or undefined when calling batchCreateFirewallTags.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'firewall_id': firewallId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 为指定的网络ACL资源实例批量删除标签。
         * 此接口为幂等接口：删除时，如果删除的标签不存在，默认处理成功；删除时不对标签字符集范围做校验。删除时tags结构体不能缺失，key不能为空，或者空字符串。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteFirewallTags(batchDeleteFirewallTagsRequest?: BatchDeleteFirewallTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/firewalls/{firewall_id}/tags/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let firewallId;

            if (batchDeleteFirewallTagsRequest !== null && batchDeleteFirewallTagsRequest !== undefined) {
                if (batchDeleteFirewallTagsRequest instanceof BatchDeleteFirewallTagsRequest) {
                    firewallId = batchDeleteFirewallTagsRequest.firewallId;
                    body = batchDeleteFirewallTagsRequest.body
                } else {
                    firewallId = batchDeleteFirewallTagsRequest['firewall_id'];
                    body = batchDeleteFirewallTagsRequest['body'];
                }
            }

        
            if (firewallId === null || firewallId === undefined) {
            throw new RequiredError('firewallId','Required parameter firewallId was null or undefined when calling batchDeleteFirewallTags.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'firewall_id': firewallId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 使用标签过滤查询ACL实例数量。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        countFirewallsByTags(countFirewallsByTagsRequest?: CountFirewallsByTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/firewalls/resource-instances/count",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (countFirewallsByTagsRequest !== null && countFirewallsByTagsRequest !== undefined) {
                if (countFirewallsByTagsRequest instanceof CountFirewallsByTagsRequest) {
                    body = countFirewallsByTagsRequest.body
                } else {
                    body = countFirewallsByTagsRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建网络ACL
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createFirewall(createFirewallRequest?: CreateFirewallRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/vpc/firewalls",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createFirewallRequest !== null && createFirewallRequest !== undefined) {
                if (createFirewallRequest instanceof CreateFirewallRequest) {
                    body = createFirewallRequest.body
                } else {
                    body = createFirewallRequest['body'];
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
         * 给指定IP地址组资源实例增加标签信息
         * 此接口为幂等接口：创建时，如果创建的标签已经存在（key相同），则覆盖。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createFirewallTag(createFirewallTagRequest?: CreateFirewallTagRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/firewalls/{firewall_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let firewallId;

            if (createFirewallTagRequest !== null && createFirewallTagRequest !== undefined) {
                if (createFirewallTagRequest instanceof CreateFirewallTagRequest) {
                    firewallId = createFirewallTagRequest.firewallId;
                    body = createFirewallTagRequest.body
                } else {
                    firewallId = createFirewallTagRequest['firewall_id'];
                    body = createFirewallTagRequest['body'];
                }
            }

        
            if (firewallId === null || firewallId === undefined) {
            throw new RequiredError('firewallId','Required parameter firewallId was null or undefined when calling createFirewallTag.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'firewall_id': firewallId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除网络ACL
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteFirewall(deleteFirewallRequest?: DeleteFirewallRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/vpc/firewalls/{firewall_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let firewallId;

            if (deleteFirewallRequest !== null && deleteFirewallRequest !== undefined) {
                if (deleteFirewallRequest instanceof DeleteFirewallRequest) {
                    firewallId = deleteFirewallRequest.firewallId;
                } else {
                    firewallId = deleteFirewallRequest['firewall_id'];
                }
            }

        
            if (firewallId === null || firewallId === undefined) {
            throw new RequiredError('firewallId','Required parameter firewallId was null or undefined when calling deleteFirewall.');
            }

            options.pathParams = { 'firewall_id': firewallId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定IP地址组资源实例的标签信息
         * 该接口为幂等接口：删除的key不存在报404，key不能为空或者空字符串
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteFirewallTag(deleteFirewallTagRequest?: DeleteFirewallTagRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/firewalls/{firewall_id}/tags/{tag_key}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let firewallId;
            
            let tagKey;

            if (deleteFirewallTagRequest !== null && deleteFirewallTagRequest !== undefined) {
                if (deleteFirewallTagRequest instanceof DeleteFirewallTagRequest) {
                    firewallId = deleteFirewallTagRequest.firewallId;
                    tagKey = deleteFirewallTagRequest.tagKey;
                } else {
                    firewallId = deleteFirewallTagRequest['firewall_id'];
                    tagKey = deleteFirewallTagRequest['tag_key'];
                }
            }

        
            if (firewallId === null || firewallId === undefined) {
            throw new RequiredError('firewallId','Required parameter firewallId was null or undefined when calling deleteFirewallTag.');
            }
            if (tagKey === null || tagKey === undefined) {
            throw new RequiredError('tagKey','Required parameter tagKey was null or undefined when calling deleteFirewallTag.');
            }

            options.pathParams = { 'firewall_id': firewallId,'tag_key': tagKey, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 网络ACL解绑子网
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disassociateSubnetFirewall(disassociateSubnetFirewallRequest?: DisassociateSubnetFirewallRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/vpc/firewalls/{firewall_id}/disassociate-subnets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let firewallId;

            if (disassociateSubnetFirewallRequest !== null && disassociateSubnetFirewallRequest !== undefined) {
                if (disassociateSubnetFirewallRequest instanceof DisassociateSubnetFirewallRequest) {
                    firewallId = disassociateSubnetFirewallRequest.firewallId;
                    body = disassociateSubnetFirewallRequest.body
                } else {
                    firewallId = disassociateSubnetFirewallRequest['firewall_id'];
                    body = disassociateSubnetFirewallRequest['body'];
                }
            }

        
            if (firewallId === null || firewallId === undefined) {
            throw new RequiredError('firewallId','Required parameter firewallId was null or undefined when calling disassociateSubnetFirewall.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'firewall_id': firewallId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询网络ACL列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFirewall(listFirewallRequest?: ListFirewallRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/vpc/firewalls",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let id;
            
            let name;
            
            let status;
            
            let adminStateUp;
            
            let enterpriseProjectId;

            if (listFirewallRequest !== null && listFirewallRequest !== undefined) {
                if (listFirewallRequest instanceof ListFirewallRequest) {
                    limit = listFirewallRequest.limit;
                    marker = listFirewallRequest.marker;
                    id = listFirewallRequest.id;
                    name = listFirewallRequest.name;
                    status = listFirewallRequest.status;
                    adminStateUp = listFirewallRequest.adminStateUp;
                    enterpriseProjectId = listFirewallRequest.enterpriseProjectId;
                } else {
                    limit = listFirewallRequest['limit'];
                    marker = listFirewallRequest['marker'];
                    id = listFirewallRequest['id'];
                    name = listFirewallRequest['name'];
                    status = listFirewallRequest['status'];
                    adminStateUp = listFirewallRequest['admin_state_up'];
                    enterpriseProjectId = listFirewallRequest['enterprise_project_id'];
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
            if (adminStateUp !== null && adminStateUp !== undefined) {
                localVarQueryParameter['admin_state_up'] = adminStateUp;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户在指定Project中实例类型的所有资源标签集合
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFirewallTags(listFirewallTagsRequest?: ListFirewallTagsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/firewalls/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;

            if (listFirewallTagsRequest !== null && listFirewallTagsRequest !== undefined) {
                if (listFirewallTagsRequest instanceof ListFirewallTagsRequest) {
                    limit = listFirewallTagsRequest.limit;
                    offset = listFirewallTagsRequest.offset;
                } else {
                    limit = listFirewallTagsRequest['limit'];
                    offset = listFirewallTagsRequest['offset'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 使用标签过滤查询ACL实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFirewallsByTags(listFirewallsByTagsRequest?: ListFirewallsByTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/firewalls/resource-instances/filter",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let limit;
            
            let offset;

            if (listFirewallsByTagsRequest !== null && listFirewallsByTagsRequest !== undefined) {
                if (listFirewallsByTagsRequest instanceof ListFirewallsByTagsRequest) {
                    limit = listFirewallsByTagsRequest.limit;
                    offset = listFirewallsByTagsRequest.offset;
                    body = listFirewallsByTagsRequest.body
                } else {
                    limit = listFirewallsByTagsRequest['limit'];
                    offset = listFirewallsByTagsRequest['offset'];
                    body = listFirewallsByTagsRequest['body'];
                }
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
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 网络ACL移除规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        removeFirewallRules(removeFirewallRulesRequest?: RemoveFirewallRulesRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/vpc/firewalls/{firewall_id}/remove-rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let firewallId;

            if (removeFirewallRulesRequest !== null && removeFirewallRulesRequest !== undefined) {
                if (removeFirewallRulesRequest instanceof RemoveFirewallRulesRequest) {
                    firewallId = removeFirewallRulesRequest.firewallId;
                    body = removeFirewallRulesRequest.body
                } else {
                    firewallId = removeFirewallRulesRequest['firewall_id'];
                    body = removeFirewallRulesRequest['body'];
                }
            }

        
            if (firewallId === null || firewallId === undefined) {
            throw new RequiredError('firewallId','Required parameter firewallId was null or undefined when calling removeFirewallRules.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'firewall_id': firewallId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询网络ACL详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showFirewall(showFirewallRequest?: ShowFirewallRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/vpc/firewalls/{firewall_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let firewallId;

            if (showFirewallRequest !== null && showFirewallRequest !== undefined) {
                if (showFirewallRequest instanceof ShowFirewallRequest) {
                    firewallId = showFirewallRequest.firewallId;
                } else {
                    firewallId = showFirewallRequest['firewall_id'];
                }
            }

        
            if (firewallId === null || firewallId === undefined) {
            throw new RequiredError('firewallId','Required parameter firewallId was null or undefined when calling showFirewall.');
            }

            options.pathParams = { 'firewall_id': firewallId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定ACL实例的标签信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showFirewallTags(showFirewallTagsRequest?: ShowFirewallTagsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/firewalls/{firewall_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let firewallId;

            if (showFirewallTagsRequest !== null && showFirewallTagsRequest !== undefined) {
                if (showFirewallTagsRequest instanceof ShowFirewallTagsRequest) {
                    firewallId = showFirewallTagsRequest.firewallId;
                } else {
                    firewallId = showFirewallTagsRequest['firewall_id'];
                }
            }

        
            if (firewallId === null || firewallId === undefined) {
            throw new RequiredError('firewallId','Required parameter firewallId was null or undefined when calling showFirewallTags.');
            }

            options.pathParams = { 'firewall_id': firewallId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新网络ACL
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateFirewall(updateFirewallRequest?: UpdateFirewallRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/vpc/firewalls/{firewall_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let firewallId;

            if (updateFirewallRequest !== null && updateFirewallRequest !== undefined) {
                if (updateFirewallRequest instanceof UpdateFirewallRequest) {
                    firewallId = updateFirewallRequest.firewallId;
                    body = updateFirewallRequest.body
                } else {
                    firewallId = updateFirewallRequest['firewall_id'];
                    body = updateFirewallRequest['body'];
                }
            }

        
            if (firewallId === null || firewallId === undefined) {
            throw new RequiredError('firewallId','Required parameter firewallId was null or undefined when calling updateFirewall.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'firewall_id': firewallId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 网络ACL更新规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateFirewallRules(updateFirewallRulesRequest?: UpdateFirewallRulesRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/vpc/firewalls/{firewall_id}/update-rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let firewallId;

            if (updateFirewallRulesRequest !== null && updateFirewallRulesRequest !== undefined) {
                if (updateFirewallRulesRequest instanceof UpdateFirewallRulesRequest) {
                    firewallId = updateFirewallRulesRequest.firewallId;
                    body = updateFirewallRulesRequest.body
                } else {
                    firewallId = updateFirewallRulesRequest['firewall_id'];
                    body = updateFirewallRulesRequest['body'];
                }
            }

        
            if (firewallId === null || firewallId === undefined) {
            throw new RequiredError('firewallId','Required parameter firewallId was null or undefined when calling updateFirewallRules.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'firewall_id': firewallId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加Clouddcn子网的标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addClouddcnSubnetsTags(addClouddcnSubnetsTagsRequest?: AddClouddcnSubnetsTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/clouddcn-subnets/{resource_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceId;

            if (addClouddcnSubnetsTagsRequest !== null && addClouddcnSubnetsTagsRequest !== undefined) {
                if (addClouddcnSubnetsTagsRequest instanceof AddClouddcnSubnetsTagsRequest) {
                    resourceId = addClouddcnSubnetsTagsRequest.resourceId;
                    body = addClouddcnSubnetsTagsRequest.body
                } else {
                    resourceId = addClouddcnSubnetsTagsRequest['resource_id'];
                    body = addClouddcnSubnetsTagsRequest['body'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling addClouddcnSubnetsTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量添加Clouddcn子网的标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateClouddcnSubnetsTags(batchCreateClouddcnSubnetsTagsRequest?: BatchCreateClouddcnSubnetsTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/clouddcn-subnets/{resource_id}/tags/create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceId;

            if (batchCreateClouddcnSubnetsTagsRequest !== null && batchCreateClouddcnSubnetsTagsRequest !== undefined) {
                if (batchCreateClouddcnSubnetsTagsRequest instanceof BatchCreateClouddcnSubnetsTagsRequest) {
                    resourceId = batchCreateClouddcnSubnetsTagsRequest.resourceId;
                    body = batchCreateClouddcnSubnetsTagsRequest.body
                } else {
                    resourceId = batchCreateClouddcnSubnetsTagsRequest['resource_id'];
                    body = batchCreateClouddcnSubnetsTagsRequest['body'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling batchCreateClouddcnSubnetsTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除Clouddcn子网的标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteClouddcnSubnetsTags(batchDeleteClouddcnSubnetsTagsRequest?: BatchDeleteClouddcnSubnetsTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/clouddcn-subnets/{resource_id}/tags/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceId;

            if (batchDeleteClouddcnSubnetsTagsRequest !== null && batchDeleteClouddcnSubnetsTagsRequest !== undefined) {
                if (batchDeleteClouddcnSubnetsTagsRequest instanceof BatchDeleteClouddcnSubnetsTagsRequest) {
                    resourceId = batchDeleteClouddcnSubnetsTagsRequest.resourceId;
                    body = batchDeleteClouddcnSubnetsTagsRequest.body
                } else {
                    resourceId = batchDeleteClouddcnSubnetsTagsRequest['resource_id'];
                    body = batchDeleteClouddcnSubnetsTagsRequest['body'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling batchDeleteClouddcnSubnetsTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建clouddcn子网。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createClouddcnSubnet(createClouddcnSubnetRequest?: CreateClouddcnSubnetRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/vpc/clouddcn-subnets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createClouddcnSubnetRequest !== null && createClouddcnSubnetRequest !== undefined) {
                if (createClouddcnSubnetRequest instanceof CreateClouddcnSubnetRequest) {
                    body = createClouddcnSubnetRequest.body
                } else {
                    body = createClouddcnSubnetRequest['body'];
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
         * 删除clouddcn子网
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteClouddcnSubnet(deleteClouddcnSubnetRequest?: DeleteClouddcnSubnetRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/vpc/clouddcn-subnets/{clouddcn_subnet_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clouddcnSubnetId;

            if (deleteClouddcnSubnetRequest !== null && deleteClouddcnSubnetRequest !== undefined) {
                if (deleteClouddcnSubnetRequest instanceof DeleteClouddcnSubnetRequest) {
                    clouddcnSubnetId = deleteClouddcnSubnetRequest.clouddcnSubnetId;
                } else {
                    clouddcnSubnetId = deleteClouddcnSubnetRequest['clouddcn_subnet_id'];
                }
            }

        
            if (clouddcnSubnetId === null || clouddcnSubnetId === undefined) {
            throw new RequiredError('clouddcnSubnetId','Required parameter clouddcnSubnetId was null or undefined when calling deleteClouddcnSubnet.');
            }

            options.pathParams = { 'clouddcn_subnet_id': clouddcnSubnetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除Clouddcn子网的标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteClouddcnSubnetsTag(deleteClouddcnSubnetsTagRequest?: DeleteClouddcnSubnetsTagRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/clouddcn-subnets/{resource_id}/tags/{tag_key}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceId;
            
            let tagKey;

            if (deleteClouddcnSubnetsTagRequest !== null && deleteClouddcnSubnetsTagRequest !== undefined) {
                if (deleteClouddcnSubnetsTagRequest instanceof DeleteClouddcnSubnetsTagRequest) {
                    resourceId = deleteClouddcnSubnetsTagRequest.resourceId;
                    tagKey = deleteClouddcnSubnetsTagRequest.tagKey;
                } else {
                    resourceId = deleteClouddcnSubnetsTagRequest['resource_id'];
                    tagKey = deleteClouddcnSubnetsTagRequest['tag_key'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling deleteClouddcnSubnetsTag.');
            }
            if (tagKey === null || tagKey === undefined) {
            throw new RequiredError('tagKey','Required parameter tagKey was null or undefined when calling deleteClouddcnSubnetsTag.');
            }

            options.pathParams = { 'resource_id': resourceId,'tag_key': tagKey, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询clouddcn子网列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listClouddcnSubnets(listClouddcnSubnetsRequest?: ListClouddcnSubnetsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/vpc/clouddcn-subnets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let vpcId;

            if (listClouddcnSubnetsRequest !== null && listClouddcnSubnetsRequest !== undefined) {
                if (listClouddcnSubnetsRequest instanceof ListClouddcnSubnetsRequest) {
                    limit = listClouddcnSubnetsRequest.limit;
                    marker = listClouddcnSubnetsRequest.marker;
                    vpcId = listClouddcnSubnetsRequest.vpcId;
                } else {
                    limit = listClouddcnSubnetsRequest['limit'];
                    marker = listClouddcnSubnetsRequest['marker'];
                    vpcId = listClouddcnSubnetsRequest['vpc_id'];
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
         * 查询资源实例列表数目
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listClouddcnSubnetsCountFilterTags(listClouddcnSubnetsCountFilterTagsRequest?: ListClouddcnSubnetsCountFilterTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/clouddcn-subnets/resource-instances/count",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (listClouddcnSubnetsCountFilterTagsRequest !== null && listClouddcnSubnetsCountFilterTagsRequest !== undefined) {
                if (listClouddcnSubnetsCountFilterTagsRequest instanceof ListClouddcnSubnetsCountFilterTagsRequest) {
                    body = listClouddcnSubnetsCountFilterTagsRequest.body
                } else {
                    body = listClouddcnSubnetsCountFilterTagsRequest['body'];
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
         * 查询资源实例列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listClouddcnSubnetsFilterTags(listClouddcnSubnetsFilterTagsRequest?: ListClouddcnSubnetsFilterTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/clouddcn-subnets/resource-instances/filter",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let limit;
            
            let offset;

            if (listClouddcnSubnetsFilterTagsRequest !== null && listClouddcnSubnetsFilterTagsRequest !== undefined) {
                if (listClouddcnSubnetsFilterTagsRequest instanceof ListClouddcnSubnetsFilterTagsRequest) {
                    body = listClouddcnSubnetsFilterTagsRequest.body
                    limit = listClouddcnSubnetsFilterTagsRequest.limit;
                    offset = listClouddcnSubnetsFilterTagsRequest.offset;
                } else {
                    body = listClouddcnSubnetsFilterTagsRequest['body'];
                    limit = listClouddcnSubnetsFilterTagsRequest['limit'];
                    offset = listClouddcnSubnetsFilterTagsRequest['offset'];
                }
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
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Clouddcn子网的项目标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listClouddcnSubnetsTags() {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/clouddcn-subnets/tags",
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
         * 查询clouddcn子网详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showClouddcnSubnet(showClouddcnSubnetRequest?: ShowClouddcnSubnetRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/vpc/clouddcn-subnets/{clouddcn_subnet_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clouddcnSubnetId;

            if (showClouddcnSubnetRequest !== null && showClouddcnSubnetRequest !== undefined) {
                if (showClouddcnSubnetRequest instanceof ShowClouddcnSubnetRequest) {
                    clouddcnSubnetId = showClouddcnSubnetRequest.clouddcnSubnetId;
                } else {
                    clouddcnSubnetId = showClouddcnSubnetRequest['clouddcn_subnet_id'];
                }
            }

        
            if (clouddcnSubnetId === null || clouddcnSubnetId === undefined) {
            throw new RequiredError('clouddcnSubnetId','Required parameter clouddcnSubnetId was null or undefined when calling showClouddcnSubnet.');
            }

            options.pathParams = { 'clouddcn_subnet_id': clouddcnSubnetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Clouddcn子网的标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showClouddcnSubnetsTags(showClouddcnSubnetsTagsRequest?: ShowClouddcnSubnetsTagsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/clouddcn-subnets/{resource_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceId;

            if (showClouddcnSubnetsTagsRequest !== null && showClouddcnSubnetsTagsRequest !== undefined) {
                if (showClouddcnSubnetsTagsRequest instanceof ShowClouddcnSubnetsTagsRequest) {
                    resourceId = showClouddcnSubnetsTagsRequest.resourceId;
                } else {
                    resourceId = showClouddcnSubnetsTagsRequest['resource_id'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling showClouddcnSubnetsTags.');
            }

            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新clouddcn子网。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateClouddcnSubnet(updateClouddcnSubnetRequest?: UpdateClouddcnSubnetRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/vpc/clouddcn-subnets/{clouddcn_subnet_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clouddcnSubnetId;

            if (updateClouddcnSubnetRequest !== null && updateClouddcnSubnetRequest !== undefined) {
                if (updateClouddcnSubnetRequest instanceof UpdateClouddcnSubnetRequest) {
                    clouddcnSubnetId = updateClouddcnSubnetRequest.clouddcnSubnetId;
                    body = updateClouddcnSubnetRequest.body
                } else {
                    clouddcnSubnetId = updateClouddcnSubnetRequest['clouddcn_subnet_id'];
                    body = updateClouddcnSubnetRequest['body'];
                }
            }

        
            if (clouddcnSubnetId === null || clouddcnSubnetId === undefined) {
            throw new RequiredError('clouddcnSubnetId','Required parameter clouddcnSubnetId was null or undefined when calling updateClouddcnSubnet.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'clouddcn_subnet_id': clouddcnSubnetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建地址组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAddressGroup(createAddressGroupRequest?: CreateAddressGroupRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/vpc/address-groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createAddressGroupRequest !== null && createAddressGroupRequest !== undefined) {
                if (createAddressGroupRequest instanceof CreateAddressGroupRequest) {
                    body = createAddressGroupRequest.body
                } else {
                    body = createAddressGroupRequest['body'];
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
         * 删除地址组，非强制删除，删除前请确保未被其他资源引用
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAddressGroup(deleteAddressGroupRequest?: DeleteAddressGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/vpc/address-groups/{address_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let addressGroupId;

            if (deleteAddressGroupRequest !== null && deleteAddressGroupRequest !== undefined) {
                if (deleteAddressGroupRequest instanceof DeleteAddressGroupRequest) {
                    addressGroupId = deleteAddressGroupRequest.addressGroupId;
                } else {
                    addressGroupId = deleteAddressGroupRequest['address_group_id'];
                }
            }

        
            if (addressGroupId === null || addressGroupId === undefined) {
            throw new RequiredError('addressGroupId','Required parameter addressGroupId was null or undefined when calling deleteAddressGroup.');
            }

            options.pathParams = { 'address_group_id': addressGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 强制删除地址组，删除的地址组与安全组规则关联时，会删除地址组与关联的安全组规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteIpAddressGroupForce(deleteIpAddressGroupForceRequest?: DeleteIpAddressGroupForceRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/vpc/address-groups/{address_group_id}/force",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let addressGroupId;

            if (deleteIpAddressGroupForceRequest !== null && deleteIpAddressGroupForceRequest !== undefined) {
                if (deleteIpAddressGroupForceRequest instanceof DeleteIpAddressGroupForceRequest) {
                    addressGroupId = deleteIpAddressGroupForceRequest.addressGroupId;
                } else {
                    addressGroupId = deleteIpAddressGroupForceRequest['address_group_id'];
                }
            }

        
            if (addressGroupId === null || addressGroupId === undefined) {
            throw new RequiredError('addressGroupId','Required parameter addressGroupId was null or undefined when calling deleteIpAddressGroupForce.');
            }

            options.pathParams = { 'address_group_id': addressGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询地址组列表，根据过滤条件进行过滤。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAddressGroup(listAddressGroupRequest?: ListAddressGroupRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/vpc/address-groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let id;
            
            let name;
            
            let ipVersion;
            
            let description;
            
            let enterpriseProjectId;

            if (listAddressGroupRequest !== null && listAddressGroupRequest !== undefined) {
                if (listAddressGroupRequest instanceof ListAddressGroupRequest) {
                    limit = listAddressGroupRequest.limit;
                    marker = listAddressGroupRequest.marker;
                    id = listAddressGroupRequest.id;
                    name = listAddressGroupRequest.name;
                    ipVersion = listAddressGroupRequest.ipVersion;
                    description = listAddressGroupRequest.description;
                    enterpriseProjectId = listAddressGroupRequest.enterpriseProjectId;
                } else {
                    limit = listAddressGroupRequest['limit'];
                    marker = listAddressGroupRequest['marker'];
                    id = listAddressGroupRequest['id'];
                    name = listAddressGroupRequest['name'];
                    ipVersion = listAddressGroupRequest['ip_version'];
                    description = listAddressGroupRequest['description'];
                    enterpriseProjectId = listAddressGroupRequest['enterprise_project_id'];
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
            if (ipVersion !== null && ipVersion !== undefined) {
                localVarQueryParameter['ip_version'] = ipVersion;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当您的IP地址组被网络ACL和安全组资源关联时，您可以通过调用该接口查询IP地址组关联的网络ACL或安全组的资源ID和名称。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAddressGroupsDependency(listAddressGroupsDependencyRequest?: ListAddressGroupsDependencyRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/vpc/list-address-groups-dependency",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let id;
            
            let enterpriseProjectId;

            if (listAddressGroupsDependencyRequest !== null && listAddressGroupsDependencyRequest !== undefined) {
                if (listAddressGroupsDependencyRequest instanceof ListAddressGroupsDependencyRequest) {
                    id = listAddressGroupsDependencyRequest.id;
                    enterpriseProjectId = listAddressGroupsDependencyRequest.enterpriseProjectId;
                } else {
                    id = listAddressGroupsDependencyRequest['id'];
                    enterpriseProjectId = listAddressGroupsDependencyRequest['enterprise_project_id'];
                }
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
         * 查询地址组详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAddressGroup(showAddressGroupRequest?: ShowAddressGroupRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/vpc/address-groups/{address_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let addressGroupId;

            if (showAddressGroupRequest !== null && showAddressGroupRequest !== undefined) {
                if (showAddressGroupRequest instanceof ShowAddressGroupRequest) {
                    addressGroupId = showAddressGroupRequest.addressGroupId;
                } else {
                    addressGroupId = showAddressGroupRequest['address_group_id'];
                }
            }

        
            if (addressGroupId === null || addressGroupId === undefined) {
            throw new RequiredError('addressGroupId','Required parameter addressGroupId was null or undefined when calling showAddressGroup.');
            }

            options.pathParams = { 'address_group_id': addressGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新地址组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAddressGroup(updateAddressGroupRequest?: UpdateAddressGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/vpc/address-groups/{address_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let addressGroupId;

            if (updateAddressGroupRequest !== null && updateAddressGroupRequest !== undefined) {
                if (updateAddressGroupRequest instanceof UpdateAddressGroupRequest) {
                    addressGroupId = updateAddressGroupRequest.addressGroupId;
                    body = updateAddressGroupRequest.body
                } else {
                    addressGroupId = updateAddressGroupRequest['address_group_id'];
                    body = updateAddressGroupRequest['body'];
                }
            }

        
            if (addressGroupId === null || addressGroupId === undefined) {
            throw new RequiredError('addressGroupId','Required parameter addressGroupId was null or undefined when calling updateAddressGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'address_group_id': addressGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加VPC的扩展网段
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addVpcExtendCidr(addVpcExtendCidrRequest?: AddVpcExtendCidrRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/vpc/vpcs/{vpc_id}/add-extend-cidr",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let vpcId;

            if (addVpcExtendCidrRequest !== null && addVpcExtendCidrRequest !== undefined) {
                if (addVpcExtendCidrRequest instanceof AddVpcExtendCidrRequest) {
                    vpcId = addVpcExtendCidrRequest.vpcId;
                    body = addVpcExtendCidrRequest.body
                } else {
                    vpcId = addVpcExtendCidrRequest['vpc_id'];
                    body = addVpcExtendCidrRequest['body'];
                }
            }

        
            if (vpcId === null || vpcId === undefined) {
            throw new RequiredError('vpcId','Required parameter vpcId was null or undefined when calling addVpcExtendCidr.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vpc_id': vpcId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建虚拟私有云
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createVpc(createVpcRequest?: CreateVpcRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/vpc/vpcs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

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
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除VPC
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteVpc(deleteVpcRequest?: DeleteVpcRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/vpc/vpcs/{vpc_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
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
         * 查询vpc列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVpcs(listVpcsRequest?: ListVpcsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/vpc/vpcs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let id;
            
            let enterpriseProjectId;
            
            let name;
            
            let description;
            
            let cidr;

            if (listVpcsRequest !== null && listVpcsRequest !== undefined) {
                if (listVpcsRequest instanceof ListVpcsRequest) {
                    limit = listVpcsRequest.limit;
                    marker = listVpcsRequest.marker;
                    id = listVpcsRequest.id;
                    enterpriseProjectId = listVpcsRequest.enterpriseProjectId;
                    name = listVpcsRequest.name;
                    description = listVpcsRequest.description;
                    cidr = listVpcsRequest.cidr;
                } else {
                    limit = listVpcsRequest['limit'];
                    marker = listVpcsRequest['marker'];
                    id = listVpcsRequest['id'];
                    enterpriseProjectId = listVpcsRequest['enterprise_project_id'];
                    name = listVpcsRequest['name'];
                    description = listVpcsRequest['description'];
                    cidr = listVpcsRequest['cidr'];
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
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }
            if (cidr !== null && cidr !== undefined) {
                localVarQueryParameter['cidr'] = cidr;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 移除VPC扩展网段
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        removeVpcExtendCidr(removeVpcExtendCidrRequest?: RemoveVpcExtendCidrRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/vpc/vpcs/{vpc_id}/remove-extend-cidr",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let vpcId;

            if (removeVpcExtendCidrRequest !== null && removeVpcExtendCidrRequest !== undefined) {
                if (removeVpcExtendCidrRequest instanceof RemoveVpcExtendCidrRequest) {
                    vpcId = removeVpcExtendCidrRequest.vpcId;
                    body = removeVpcExtendCidrRequest.body
                } else {
                    vpcId = removeVpcExtendCidrRequest['vpc_id'];
                    body = removeVpcExtendCidrRequest['body'];
                }
            }

        
            if (vpcId === null || vpcId === undefined) {
            throw new RequiredError('vpcId','Required parameter vpcId was null or undefined when calling removeVpcExtendCidr.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vpc_id': vpcId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询vpc详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVpc(showVpcRequest?: ShowVpcRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/vpc/vpcs/{vpc_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
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
         * 更新vpc
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateVpc(updateVpcRequest?: UpdateVpcRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/vpc/vpcs/{vpc_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
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
            localVarHeaderParameter['Content-Type'] = 'application/json';

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