import { PolicyTemplate } from './PolicyTemplate';
import { ResponseEip } from './ResponseEip';
import { VpnResourceTag } from './VpnResourceTag';


export class ResponseVpnGateway {
    public id?: string;
    public name?: string;
    public status?: string;
    private 'attachment_type'?: ResponseVpnGatewayAttachmentTypeEnum | string;
    private 'ip_version'?: ResponseVpnGatewayIpVersionEnum | string;
    private 'certificate_id'?: string;
    private 'er_id'?: string;
    private 'er_attachment_id'?: string;
    private 'vpc_id'?: string;
    private 'local_subnets'?: Array<string>;
    private 'local_subnets_v6'?: Array<string>;
    private 'connect_subnet'?: string;
    private 'network_type'?: ResponseVpnGatewayNetworkTypeEnum | string;
    private 'access_vpc_id'?: string;
    private 'access_subnet_id'?: string;
    private 'access_private_ip_1'?: string;
    private 'access_private_ip_2'?: string;
    private 'bgp_asn'?: number;
    public flavor?: string;
    private 'availability_zone_ids'?: Array<string>;
    private 'public_border_group'?: string;
    private 'connection_number'?: number;
    private 'used_connection_number'?: number;
    private 'used_connection_group'?: number;
    private 'enterprise_project_id'?: string;
    private 'ha_mode'?: string;
    public eip1?: ResponseEip;
    public eip2?: ResponseEip;
    private 'created_at'?: Date;
    private 'applied_at'?: Date;
    private 'updated_at'?: Date;
    private 'policy_template'?: PolicyTemplate;
    private 'supported_flavors'?: Array<string>;
    private 'supported_features'?: Array<string>;
    public tags?: Array<VpnResourceTag>;
    public constructor() { 
    }
    public withId(id: string): ResponseVpnGateway {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ResponseVpnGateway {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): ResponseVpnGateway {
        this['status'] = status;
        return this;
    }
    public withAttachmentType(attachmentType: ResponseVpnGatewayAttachmentTypeEnum | string): ResponseVpnGateway {
        this['attachment_type'] = attachmentType;
        return this;
    }
    public set attachmentType(attachmentType: ResponseVpnGatewayAttachmentTypeEnum | string  | undefined) {
        this['attachment_type'] = attachmentType;
    }
    public get attachmentType(): ResponseVpnGatewayAttachmentTypeEnum | string | undefined {
        return this['attachment_type'];
    }
    public withIpVersion(ipVersion: ResponseVpnGatewayIpVersionEnum | string): ResponseVpnGateway {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: ResponseVpnGatewayIpVersionEnum | string  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): ResponseVpnGatewayIpVersionEnum | string | undefined {
        return this['ip_version'];
    }
    public withCertificateId(certificateId: string): ResponseVpnGateway {
        this['certificate_id'] = certificateId;
        return this;
    }
    public set certificateId(certificateId: string  | undefined) {
        this['certificate_id'] = certificateId;
    }
    public get certificateId(): string | undefined {
        return this['certificate_id'];
    }
    public withErId(erId: string): ResponseVpnGateway {
        this['er_id'] = erId;
        return this;
    }
    public set erId(erId: string  | undefined) {
        this['er_id'] = erId;
    }
    public get erId(): string | undefined {
        return this['er_id'];
    }
    public withErAttachmentId(erAttachmentId: string): ResponseVpnGateway {
        this['er_attachment_id'] = erAttachmentId;
        return this;
    }
    public set erAttachmentId(erAttachmentId: string  | undefined) {
        this['er_attachment_id'] = erAttachmentId;
    }
    public get erAttachmentId(): string | undefined {
        return this['er_attachment_id'];
    }
    public withVpcId(vpcId: string): ResponseVpnGateway {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withLocalSubnets(localSubnets: Array<string>): ResponseVpnGateway {
        this['local_subnets'] = localSubnets;
        return this;
    }
    public set localSubnets(localSubnets: Array<string>  | undefined) {
        this['local_subnets'] = localSubnets;
    }
    public get localSubnets(): Array<string> | undefined {
        return this['local_subnets'];
    }
    public withLocalSubnetsV6(localSubnetsV6: Array<string>): ResponseVpnGateway {
        this['local_subnets_v6'] = localSubnetsV6;
        return this;
    }
    public set localSubnetsV6(localSubnetsV6: Array<string>  | undefined) {
        this['local_subnets_v6'] = localSubnetsV6;
    }
    public get localSubnetsV6(): Array<string> | undefined {
        return this['local_subnets_v6'];
    }
    public withConnectSubnet(connectSubnet: string): ResponseVpnGateway {
        this['connect_subnet'] = connectSubnet;
        return this;
    }
    public set connectSubnet(connectSubnet: string  | undefined) {
        this['connect_subnet'] = connectSubnet;
    }
    public get connectSubnet(): string | undefined {
        return this['connect_subnet'];
    }
    public withNetworkType(networkType: ResponseVpnGatewayNetworkTypeEnum | string): ResponseVpnGateway {
        this['network_type'] = networkType;
        return this;
    }
    public set networkType(networkType: ResponseVpnGatewayNetworkTypeEnum | string  | undefined) {
        this['network_type'] = networkType;
    }
    public get networkType(): ResponseVpnGatewayNetworkTypeEnum | string | undefined {
        return this['network_type'];
    }
    public withAccessVpcId(accessVpcId: string): ResponseVpnGateway {
        this['access_vpc_id'] = accessVpcId;
        return this;
    }
    public set accessVpcId(accessVpcId: string  | undefined) {
        this['access_vpc_id'] = accessVpcId;
    }
    public get accessVpcId(): string | undefined {
        return this['access_vpc_id'];
    }
    public withAccessSubnetId(accessSubnetId: string): ResponseVpnGateway {
        this['access_subnet_id'] = accessSubnetId;
        return this;
    }
    public set accessSubnetId(accessSubnetId: string  | undefined) {
        this['access_subnet_id'] = accessSubnetId;
    }
    public get accessSubnetId(): string | undefined {
        return this['access_subnet_id'];
    }
    public withAccessPrivateIp1(accessPrivateIp1: string): ResponseVpnGateway {
        this['access_private_ip_1'] = accessPrivateIp1;
        return this;
    }
    public set accessPrivateIp1(accessPrivateIp1: string  | undefined) {
        this['access_private_ip_1'] = accessPrivateIp1;
    }
    public get accessPrivateIp1(): string | undefined {
        return this['access_private_ip_1'];
    }
    public withAccessPrivateIp2(accessPrivateIp2: string): ResponseVpnGateway {
        this['access_private_ip_2'] = accessPrivateIp2;
        return this;
    }
    public set accessPrivateIp2(accessPrivateIp2: string  | undefined) {
        this['access_private_ip_2'] = accessPrivateIp2;
    }
    public get accessPrivateIp2(): string | undefined {
        return this['access_private_ip_2'];
    }
    public withBgpAsn(bgpAsn: number): ResponseVpnGateway {
        this['bgp_asn'] = bgpAsn;
        return this;
    }
    public set bgpAsn(bgpAsn: number  | undefined) {
        this['bgp_asn'] = bgpAsn;
    }
    public get bgpAsn(): number | undefined {
        return this['bgp_asn'];
    }
    public withFlavor(flavor: string): ResponseVpnGateway {
        this['flavor'] = flavor;
        return this;
    }
    public withAvailabilityZoneIds(availabilityZoneIds: Array<string>): ResponseVpnGateway {
        this['availability_zone_ids'] = availabilityZoneIds;
        return this;
    }
    public set availabilityZoneIds(availabilityZoneIds: Array<string>  | undefined) {
        this['availability_zone_ids'] = availabilityZoneIds;
    }
    public get availabilityZoneIds(): Array<string> | undefined {
        return this['availability_zone_ids'];
    }
    public withPublicBorderGroup(publicBorderGroup: string): ResponseVpnGateway {
        this['public_border_group'] = publicBorderGroup;
        return this;
    }
    public set publicBorderGroup(publicBorderGroup: string  | undefined) {
        this['public_border_group'] = publicBorderGroup;
    }
    public get publicBorderGroup(): string | undefined {
        return this['public_border_group'];
    }
    public withConnectionNumber(connectionNumber: number): ResponseVpnGateway {
        this['connection_number'] = connectionNumber;
        return this;
    }
    public set connectionNumber(connectionNumber: number  | undefined) {
        this['connection_number'] = connectionNumber;
    }
    public get connectionNumber(): number | undefined {
        return this['connection_number'];
    }
    public withUsedConnectionNumber(usedConnectionNumber: number): ResponseVpnGateway {
        this['used_connection_number'] = usedConnectionNumber;
        return this;
    }
    public set usedConnectionNumber(usedConnectionNumber: number  | undefined) {
        this['used_connection_number'] = usedConnectionNumber;
    }
    public get usedConnectionNumber(): number | undefined {
        return this['used_connection_number'];
    }
    public withUsedConnectionGroup(usedConnectionGroup: number): ResponseVpnGateway {
        this['used_connection_group'] = usedConnectionGroup;
        return this;
    }
    public set usedConnectionGroup(usedConnectionGroup: number  | undefined) {
        this['used_connection_group'] = usedConnectionGroup;
    }
    public get usedConnectionGroup(): number | undefined {
        return this['used_connection_group'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ResponseVpnGateway {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withHaMode(haMode: string): ResponseVpnGateway {
        this['ha_mode'] = haMode;
        return this;
    }
    public set haMode(haMode: string  | undefined) {
        this['ha_mode'] = haMode;
    }
    public get haMode(): string | undefined {
        return this['ha_mode'];
    }
    public withEip1(eip1: ResponseEip): ResponseVpnGateway {
        this['eip1'] = eip1;
        return this;
    }
    public withEip2(eip2: ResponseEip): ResponseVpnGateway {
        this['eip2'] = eip2;
        return this;
    }
    public withCreatedAt(createdAt: Date): ResponseVpnGateway {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withAppliedAt(appliedAt: Date): ResponseVpnGateway {
        this['applied_at'] = appliedAt;
        return this;
    }
    public set appliedAt(appliedAt: Date  | undefined) {
        this['applied_at'] = appliedAt;
    }
    public get appliedAt(): Date | undefined {
        return this['applied_at'];
    }
    public withUpdatedAt(updatedAt: Date): ResponseVpnGateway {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withPolicyTemplate(policyTemplate: PolicyTemplate): ResponseVpnGateway {
        this['policy_template'] = policyTemplate;
        return this;
    }
    public set policyTemplate(policyTemplate: PolicyTemplate  | undefined) {
        this['policy_template'] = policyTemplate;
    }
    public get policyTemplate(): PolicyTemplate | undefined {
        return this['policy_template'];
    }
    public withSupportedFlavors(supportedFlavors: Array<string>): ResponseVpnGateway {
        this['supported_flavors'] = supportedFlavors;
        return this;
    }
    public set supportedFlavors(supportedFlavors: Array<string>  | undefined) {
        this['supported_flavors'] = supportedFlavors;
    }
    public get supportedFlavors(): Array<string> | undefined {
        return this['supported_flavors'];
    }
    public withSupportedFeatures(supportedFeatures: Array<string>): ResponseVpnGateway {
        this['supported_features'] = supportedFeatures;
        return this;
    }
    public set supportedFeatures(supportedFeatures: Array<string>  | undefined) {
        this['supported_features'] = supportedFeatures;
    }
    public get supportedFeatures(): Array<string> | undefined {
        return this['supported_features'];
    }
    public withTags(tags: Array<VpnResourceTag>): ResponseVpnGateway {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ResponseVpnGatewayAttachmentTypeEnum {
    VPC = 'vpc',
    ER = 'er'
}
/**
    * @export
    * @enum {string}
    */
export enum ResponseVpnGatewayIpVersionEnum {
    IPV4 = 'ipv4',
    IPV6 = 'ipv6'
}
/**
    * @export
    * @enum {string}
    */
export enum ResponseVpnGatewayNetworkTypeEnum {
    PUBLIC = 'public',
    PRIVATE = 'private'
}
