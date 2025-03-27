import { PolicyTemplate } from './PolicyTemplate';
import { VpnResourceTag } from './VpnResourceTag';


export class CreateResponseVpnGateway {
    public id?: string;
    public name?: string;
    private 'attachment_type'?: CreateResponseVpnGatewayAttachmentTypeEnum | string;
    private 'ip_version'?: CreateResponseVpnGatewayIpVersionEnum | string;
    private 'certificate_id'?: string;
    private 'er_id'?: string;
    private 'vpc_id'?: string;
    private 'local_subnets'?: Array<string>;
    private 'local_subnets_v6'?: Array<string>;
    private 'connect_subnet'?: string;
    private 'network_type'?: CreateResponseVpnGatewayNetworkTypeEnum | string;
    private 'access_vpc_id'?: string;
    private 'access_subnet_id'?: string;
    private 'bgp_asn'?: number;
    public flavor?: string;
    private 'connection_number'?: number;
    private 'used_connection_number'?: number;
    private 'used_connection_group'?: number;
    private 'enterprise_project_id'?: string;
    private 'ha_mode'?: string;
    private 'policy_template'?: PolicyTemplate;
    public tags?: Array<VpnResourceTag>;
    public constructor() { 
    }
    public withId(id: string): CreateResponseVpnGateway {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateResponseVpnGateway {
        this['name'] = name;
        return this;
    }
    public withAttachmentType(attachmentType: CreateResponseVpnGatewayAttachmentTypeEnum | string): CreateResponseVpnGateway {
        this['attachment_type'] = attachmentType;
        return this;
    }
    public set attachmentType(attachmentType: CreateResponseVpnGatewayAttachmentTypeEnum | string  | undefined) {
        this['attachment_type'] = attachmentType;
    }
    public get attachmentType(): CreateResponseVpnGatewayAttachmentTypeEnum | string | undefined {
        return this['attachment_type'];
    }
    public withIpVersion(ipVersion: CreateResponseVpnGatewayIpVersionEnum | string): CreateResponseVpnGateway {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: CreateResponseVpnGatewayIpVersionEnum | string  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): CreateResponseVpnGatewayIpVersionEnum | string | undefined {
        return this['ip_version'];
    }
    public withCertificateId(certificateId: string): CreateResponseVpnGateway {
        this['certificate_id'] = certificateId;
        return this;
    }
    public set certificateId(certificateId: string  | undefined) {
        this['certificate_id'] = certificateId;
    }
    public get certificateId(): string | undefined {
        return this['certificate_id'];
    }
    public withErId(erId: string): CreateResponseVpnGateway {
        this['er_id'] = erId;
        return this;
    }
    public set erId(erId: string  | undefined) {
        this['er_id'] = erId;
    }
    public get erId(): string | undefined {
        return this['er_id'];
    }
    public withVpcId(vpcId: string): CreateResponseVpnGateway {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withLocalSubnets(localSubnets: Array<string>): CreateResponseVpnGateway {
        this['local_subnets'] = localSubnets;
        return this;
    }
    public set localSubnets(localSubnets: Array<string>  | undefined) {
        this['local_subnets'] = localSubnets;
    }
    public get localSubnets(): Array<string> | undefined {
        return this['local_subnets'];
    }
    public withLocalSubnetsV6(localSubnetsV6: Array<string>): CreateResponseVpnGateway {
        this['local_subnets_v6'] = localSubnetsV6;
        return this;
    }
    public set localSubnetsV6(localSubnetsV6: Array<string>  | undefined) {
        this['local_subnets_v6'] = localSubnetsV6;
    }
    public get localSubnetsV6(): Array<string> | undefined {
        return this['local_subnets_v6'];
    }
    public withConnectSubnet(connectSubnet: string): CreateResponseVpnGateway {
        this['connect_subnet'] = connectSubnet;
        return this;
    }
    public set connectSubnet(connectSubnet: string  | undefined) {
        this['connect_subnet'] = connectSubnet;
    }
    public get connectSubnet(): string | undefined {
        return this['connect_subnet'];
    }
    public withNetworkType(networkType: CreateResponseVpnGatewayNetworkTypeEnum | string): CreateResponseVpnGateway {
        this['network_type'] = networkType;
        return this;
    }
    public set networkType(networkType: CreateResponseVpnGatewayNetworkTypeEnum | string  | undefined) {
        this['network_type'] = networkType;
    }
    public get networkType(): CreateResponseVpnGatewayNetworkTypeEnum | string | undefined {
        return this['network_type'];
    }
    public withAccessVpcId(accessVpcId: string): CreateResponseVpnGateway {
        this['access_vpc_id'] = accessVpcId;
        return this;
    }
    public set accessVpcId(accessVpcId: string  | undefined) {
        this['access_vpc_id'] = accessVpcId;
    }
    public get accessVpcId(): string | undefined {
        return this['access_vpc_id'];
    }
    public withAccessSubnetId(accessSubnetId: string): CreateResponseVpnGateway {
        this['access_subnet_id'] = accessSubnetId;
        return this;
    }
    public set accessSubnetId(accessSubnetId: string  | undefined) {
        this['access_subnet_id'] = accessSubnetId;
    }
    public get accessSubnetId(): string | undefined {
        return this['access_subnet_id'];
    }
    public withBgpAsn(bgpAsn: number): CreateResponseVpnGateway {
        this['bgp_asn'] = bgpAsn;
        return this;
    }
    public set bgpAsn(bgpAsn: number  | undefined) {
        this['bgp_asn'] = bgpAsn;
    }
    public get bgpAsn(): number | undefined {
        return this['bgp_asn'];
    }
    public withFlavor(flavor: string): CreateResponseVpnGateway {
        this['flavor'] = flavor;
        return this;
    }
    public withConnectionNumber(connectionNumber: number): CreateResponseVpnGateway {
        this['connection_number'] = connectionNumber;
        return this;
    }
    public set connectionNumber(connectionNumber: number  | undefined) {
        this['connection_number'] = connectionNumber;
    }
    public get connectionNumber(): number | undefined {
        return this['connection_number'];
    }
    public withUsedConnectionNumber(usedConnectionNumber: number): CreateResponseVpnGateway {
        this['used_connection_number'] = usedConnectionNumber;
        return this;
    }
    public set usedConnectionNumber(usedConnectionNumber: number  | undefined) {
        this['used_connection_number'] = usedConnectionNumber;
    }
    public get usedConnectionNumber(): number | undefined {
        return this['used_connection_number'];
    }
    public withUsedConnectionGroup(usedConnectionGroup: number): CreateResponseVpnGateway {
        this['used_connection_group'] = usedConnectionGroup;
        return this;
    }
    public set usedConnectionGroup(usedConnectionGroup: number  | undefined) {
        this['used_connection_group'] = usedConnectionGroup;
    }
    public get usedConnectionGroup(): number | undefined {
        return this['used_connection_group'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateResponseVpnGateway {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withHaMode(haMode: string): CreateResponseVpnGateway {
        this['ha_mode'] = haMode;
        return this;
    }
    public set haMode(haMode: string  | undefined) {
        this['ha_mode'] = haMode;
    }
    public get haMode(): string | undefined {
        return this['ha_mode'];
    }
    public withPolicyTemplate(policyTemplate: PolicyTemplate): CreateResponseVpnGateway {
        this['policy_template'] = policyTemplate;
        return this;
    }
    public set policyTemplate(policyTemplate: PolicyTemplate  | undefined) {
        this['policy_template'] = policyTemplate;
    }
    public get policyTemplate(): PolicyTemplate | undefined {
        return this['policy_template'];
    }
    public withTags(tags: Array<VpnResourceTag>): CreateResponseVpnGateway {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateResponseVpnGatewayAttachmentTypeEnum {
    VPC = 'vpc',
    ER = 'er'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateResponseVpnGatewayIpVersionEnum {
    IPV4 = 'ipv4',
    IPV6 = 'ipv6'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateResponseVpnGatewayNetworkTypeEnum {
    PUBLIC = 'public',
    PRIVATE = 'private'
}
