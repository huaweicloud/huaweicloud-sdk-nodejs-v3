import { PolicyTemplate } from './PolicyTemplate';
import { ResponseEip } from './ResponseEip';
import { VpnResourceTag } from './VpnResourceTag';


export class UpdateResponseVpnGateway {
    public id?: string;
    public name?: string;
    private 'attachment_type'?: UpdateResponseVpnGatewayAttachmentTypeEnum | string;
    private 'ip_version'?: UpdateResponseVpnGatewayIpVersionEnum | string;
    private 'certificate_id'?: string;
    private 'er_id'?: string;
    private 'vpc_id'?: string;
    private 'local_subnets'?: Array<string>;
    private 'local_subnets_v6'?: Array<string>;
    private 'connect_subnet'?: string;
    private 'network_type'?: UpdateResponseVpnGatewayNetworkTypeEnum | string;
    private 'access_vpc_id'?: string;
    private 'access_subnet_id'?: string;
    private 'access_private_ip_1'?: string;
    private 'access_private_ip_2'?: string;
    private 'bgp_asn'?: number;
    public flavor?: string;
    private 'availability_zone_ids'?: Array<string>;
    private 'connection_number'?: number;
    private 'used_connection_number'?: number;
    private 'used_connection_group'?: number;
    private 'enterprise_project_id'?: string;
    private 'ha_mode'?: string;
    public eip1?: ResponseEip;
    public eip2?: ResponseEip;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    private 'policy_template'?: PolicyTemplate;
    public tags?: Array<VpnResourceTag>;
    public constructor() { 
    }
    public withId(id: string): UpdateResponseVpnGateway {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UpdateResponseVpnGateway {
        this['name'] = name;
        return this;
    }
    public withAttachmentType(attachmentType: UpdateResponseVpnGatewayAttachmentTypeEnum | string): UpdateResponseVpnGateway {
        this['attachment_type'] = attachmentType;
        return this;
    }
    public set attachmentType(attachmentType: UpdateResponseVpnGatewayAttachmentTypeEnum | string  | undefined) {
        this['attachment_type'] = attachmentType;
    }
    public get attachmentType(): UpdateResponseVpnGatewayAttachmentTypeEnum | string | undefined {
        return this['attachment_type'];
    }
    public withIpVersion(ipVersion: UpdateResponseVpnGatewayIpVersionEnum | string): UpdateResponseVpnGateway {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: UpdateResponseVpnGatewayIpVersionEnum | string  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): UpdateResponseVpnGatewayIpVersionEnum | string | undefined {
        return this['ip_version'];
    }
    public withCertificateId(certificateId: string): UpdateResponseVpnGateway {
        this['certificate_id'] = certificateId;
        return this;
    }
    public set certificateId(certificateId: string  | undefined) {
        this['certificate_id'] = certificateId;
    }
    public get certificateId(): string | undefined {
        return this['certificate_id'];
    }
    public withErId(erId: string): UpdateResponseVpnGateway {
        this['er_id'] = erId;
        return this;
    }
    public set erId(erId: string  | undefined) {
        this['er_id'] = erId;
    }
    public get erId(): string | undefined {
        return this['er_id'];
    }
    public withVpcId(vpcId: string): UpdateResponseVpnGateway {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withLocalSubnets(localSubnets: Array<string>): UpdateResponseVpnGateway {
        this['local_subnets'] = localSubnets;
        return this;
    }
    public set localSubnets(localSubnets: Array<string>  | undefined) {
        this['local_subnets'] = localSubnets;
    }
    public get localSubnets(): Array<string> | undefined {
        return this['local_subnets'];
    }
    public withLocalSubnetsV6(localSubnetsV6: Array<string>): UpdateResponseVpnGateway {
        this['local_subnets_v6'] = localSubnetsV6;
        return this;
    }
    public set localSubnetsV6(localSubnetsV6: Array<string>  | undefined) {
        this['local_subnets_v6'] = localSubnetsV6;
    }
    public get localSubnetsV6(): Array<string> | undefined {
        return this['local_subnets_v6'];
    }
    public withConnectSubnet(connectSubnet: string): UpdateResponseVpnGateway {
        this['connect_subnet'] = connectSubnet;
        return this;
    }
    public set connectSubnet(connectSubnet: string  | undefined) {
        this['connect_subnet'] = connectSubnet;
    }
    public get connectSubnet(): string | undefined {
        return this['connect_subnet'];
    }
    public withNetworkType(networkType: UpdateResponseVpnGatewayNetworkTypeEnum | string): UpdateResponseVpnGateway {
        this['network_type'] = networkType;
        return this;
    }
    public set networkType(networkType: UpdateResponseVpnGatewayNetworkTypeEnum | string  | undefined) {
        this['network_type'] = networkType;
    }
    public get networkType(): UpdateResponseVpnGatewayNetworkTypeEnum | string | undefined {
        return this['network_type'];
    }
    public withAccessVpcId(accessVpcId: string): UpdateResponseVpnGateway {
        this['access_vpc_id'] = accessVpcId;
        return this;
    }
    public set accessVpcId(accessVpcId: string  | undefined) {
        this['access_vpc_id'] = accessVpcId;
    }
    public get accessVpcId(): string | undefined {
        return this['access_vpc_id'];
    }
    public withAccessSubnetId(accessSubnetId: string): UpdateResponseVpnGateway {
        this['access_subnet_id'] = accessSubnetId;
        return this;
    }
    public set accessSubnetId(accessSubnetId: string  | undefined) {
        this['access_subnet_id'] = accessSubnetId;
    }
    public get accessSubnetId(): string | undefined {
        return this['access_subnet_id'];
    }
    public withAccessPrivateIp1(accessPrivateIp1: string): UpdateResponseVpnGateway {
        this['access_private_ip_1'] = accessPrivateIp1;
        return this;
    }
    public set accessPrivateIp1(accessPrivateIp1: string  | undefined) {
        this['access_private_ip_1'] = accessPrivateIp1;
    }
    public get accessPrivateIp1(): string | undefined {
        return this['access_private_ip_1'];
    }
    public withAccessPrivateIp2(accessPrivateIp2: string): UpdateResponseVpnGateway {
        this['access_private_ip_2'] = accessPrivateIp2;
        return this;
    }
    public set accessPrivateIp2(accessPrivateIp2: string  | undefined) {
        this['access_private_ip_2'] = accessPrivateIp2;
    }
    public get accessPrivateIp2(): string | undefined {
        return this['access_private_ip_2'];
    }
    public withBgpAsn(bgpAsn: number): UpdateResponseVpnGateway {
        this['bgp_asn'] = bgpAsn;
        return this;
    }
    public set bgpAsn(bgpAsn: number  | undefined) {
        this['bgp_asn'] = bgpAsn;
    }
    public get bgpAsn(): number | undefined {
        return this['bgp_asn'];
    }
    public withFlavor(flavor: string): UpdateResponseVpnGateway {
        this['flavor'] = flavor;
        return this;
    }
    public withAvailabilityZoneIds(availabilityZoneIds: Array<string>): UpdateResponseVpnGateway {
        this['availability_zone_ids'] = availabilityZoneIds;
        return this;
    }
    public set availabilityZoneIds(availabilityZoneIds: Array<string>  | undefined) {
        this['availability_zone_ids'] = availabilityZoneIds;
    }
    public get availabilityZoneIds(): Array<string> | undefined {
        return this['availability_zone_ids'];
    }
    public withConnectionNumber(connectionNumber: number): UpdateResponseVpnGateway {
        this['connection_number'] = connectionNumber;
        return this;
    }
    public set connectionNumber(connectionNumber: number  | undefined) {
        this['connection_number'] = connectionNumber;
    }
    public get connectionNumber(): number | undefined {
        return this['connection_number'];
    }
    public withUsedConnectionNumber(usedConnectionNumber: number): UpdateResponseVpnGateway {
        this['used_connection_number'] = usedConnectionNumber;
        return this;
    }
    public set usedConnectionNumber(usedConnectionNumber: number  | undefined) {
        this['used_connection_number'] = usedConnectionNumber;
    }
    public get usedConnectionNumber(): number | undefined {
        return this['used_connection_number'];
    }
    public withUsedConnectionGroup(usedConnectionGroup: number): UpdateResponseVpnGateway {
        this['used_connection_group'] = usedConnectionGroup;
        return this;
    }
    public set usedConnectionGroup(usedConnectionGroup: number  | undefined) {
        this['used_connection_group'] = usedConnectionGroup;
    }
    public get usedConnectionGroup(): number | undefined {
        return this['used_connection_group'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateResponseVpnGateway {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withHaMode(haMode: string): UpdateResponseVpnGateway {
        this['ha_mode'] = haMode;
        return this;
    }
    public set haMode(haMode: string  | undefined) {
        this['ha_mode'] = haMode;
    }
    public get haMode(): string | undefined {
        return this['ha_mode'];
    }
    public withEip1(eip1: ResponseEip): UpdateResponseVpnGateway {
        this['eip1'] = eip1;
        return this;
    }
    public withEip2(eip2: ResponseEip): UpdateResponseVpnGateway {
        this['eip2'] = eip2;
        return this;
    }
    public withCreatedAt(createdAt: Date): UpdateResponseVpnGateway {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): UpdateResponseVpnGateway {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withPolicyTemplate(policyTemplate: PolicyTemplate): UpdateResponseVpnGateway {
        this['policy_template'] = policyTemplate;
        return this;
    }
    public set policyTemplate(policyTemplate: PolicyTemplate  | undefined) {
        this['policy_template'] = policyTemplate;
    }
    public get policyTemplate(): PolicyTemplate | undefined {
        return this['policy_template'];
    }
    public withTags(tags: Array<VpnResourceTag>): UpdateResponseVpnGateway {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateResponseVpnGatewayAttachmentTypeEnum {
    VPC = 'vpc',
    ER = 'er'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateResponseVpnGatewayIpVersionEnum {
    IPV4 = 'ipv4',
    IPV6 = 'ipv6'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateResponseVpnGatewayNetworkTypeEnum {
    PUBLIC = 'public',
    PRIVATE = 'private'
}
