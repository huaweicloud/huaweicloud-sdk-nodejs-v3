import { CreateRequestEip } from './CreateRequestEip';
import { VpnResourceTag } from './VpnResourceTag';


export class CreateVgwRequestBodyContent {
    public name?: string;
    private 'attachment_type'?: CreateVgwRequestBodyContentAttachmentTypeEnum | string;
    private 'er_id'?: string;
    private 'vpc_id'?: string;
    private 'local_subnets'?: Array<string>;
    private 'connect_subnet'?: string;
    private 'bgp_asn'?: number;
    public flavor?: CreateVgwRequestBodyContentFlavorEnum | string;
    private 'availability_zone_ids'?: Array<string>;
    private 'enterprise_project_id'?: string;
    public eip1?: CreateRequestEip;
    public eip2?: CreateRequestEip;
    private 'access_private_ip_1'?: string;
    private 'access_private_ip_2'?: string;
    private 'network_type'?: CreateVgwRequestBodyContentNetworkTypeEnum | string;
    private 'access_vpc_id'?: string;
    private 'access_subnet_id'?: string;
    private 'ha_mode'?: CreateVgwRequestBodyContentHaModeEnum | string;
    public tags?: Array<VpnResourceTag>;
    public constructor() { 
    }
    public withName(name: string): CreateVgwRequestBodyContent {
        this['name'] = name;
        return this;
    }
    public withAttachmentType(attachmentType: CreateVgwRequestBodyContentAttachmentTypeEnum | string): CreateVgwRequestBodyContent {
        this['attachment_type'] = attachmentType;
        return this;
    }
    public set attachmentType(attachmentType: CreateVgwRequestBodyContentAttachmentTypeEnum | string  | undefined) {
        this['attachment_type'] = attachmentType;
    }
    public get attachmentType(): CreateVgwRequestBodyContentAttachmentTypeEnum | string | undefined {
        return this['attachment_type'];
    }
    public withErId(erId: string): CreateVgwRequestBodyContent {
        this['er_id'] = erId;
        return this;
    }
    public set erId(erId: string  | undefined) {
        this['er_id'] = erId;
    }
    public get erId(): string | undefined {
        return this['er_id'];
    }
    public withVpcId(vpcId: string): CreateVgwRequestBodyContent {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withLocalSubnets(localSubnets: Array<string>): CreateVgwRequestBodyContent {
        this['local_subnets'] = localSubnets;
        return this;
    }
    public set localSubnets(localSubnets: Array<string>  | undefined) {
        this['local_subnets'] = localSubnets;
    }
    public get localSubnets(): Array<string> | undefined {
        return this['local_subnets'];
    }
    public withConnectSubnet(connectSubnet: string): CreateVgwRequestBodyContent {
        this['connect_subnet'] = connectSubnet;
        return this;
    }
    public set connectSubnet(connectSubnet: string  | undefined) {
        this['connect_subnet'] = connectSubnet;
    }
    public get connectSubnet(): string | undefined {
        return this['connect_subnet'];
    }
    public withBgpAsn(bgpAsn: number): CreateVgwRequestBodyContent {
        this['bgp_asn'] = bgpAsn;
        return this;
    }
    public set bgpAsn(bgpAsn: number  | undefined) {
        this['bgp_asn'] = bgpAsn;
    }
    public get bgpAsn(): number | undefined {
        return this['bgp_asn'];
    }
    public withFlavor(flavor: CreateVgwRequestBodyContentFlavorEnum | string): CreateVgwRequestBodyContent {
        this['flavor'] = flavor;
        return this;
    }
    public withAvailabilityZoneIds(availabilityZoneIds: Array<string>): CreateVgwRequestBodyContent {
        this['availability_zone_ids'] = availabilityZoneIds;
        return this;
    }
    public set availabilityZoneIds(availabilityZoneIds: Array<string>  | undefined) {
        this['availability_zone_ids'] = availabilityZoneIds;
    }
    public get availabilityZoneIds(): Array<string> | undefined {
        return this['availability_zone_ids'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateVgwRequestBodyContent {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withEip1(eip1: CreateRequestEip): CreateVgwRequestBodyContent {
        this['eip1'] = eip1;
        return this;
    }
    public withEip2(eip2: CreateRequestEip): CreateVgwRequestBodyContent {
        this['eip2'] = eip2;
        return this;
    }
    public withAccessPrivateIp1(accessPrivateIp1: string): CreateVgwRequestBodyContent {
        this['access_private_ip_1'] = accessPrivateIp1;
        return this;
    }
    public set accessPrivateIp1(accessPrivateIp1: string  | undefined) {
        this['access_private_ip_1'] = accessPrivateIp1;
    }
    public get accessPrivateIp1(): string | undefined {
        return this['access_private_ip_1'];
    }
    public withAccessPrivateIp2(accessPrivateIp2: string): CreateVgwRequestBodyContent {
        this['access_private_ip_2'] = accessPrivateIp2;
        return this;
    }
    public set accessPrivateIp2(accessPrivateIp2: string  | undefined) {
        this['access_private_ip_2'] = accessPrivateIp2;
    }
    public get accessPrivateIp2(): string | undefined {
        return this['access_private_ip_2'];
    }
    public withNetworkType(networkType: CreateVgwRequestBodyContentNetworkTypeEnum | string): CreateVgwRequestBodyContent {
        this['network_type'] = networkType;
        return this;
    }
    public set networkType(networkType: CreateVgwRequestBodyContentNetworkTypeEnum | string  | undefined) {
        this['network_type'] = networkType;
    }
    public get networkType(): CreateVgwRequestBodyContentNetworkTypeEnum | string | undefined {
        return this['network_type'];
    }
    public withAccessVpcId(accessVpcId: string): CreateVgwRequestBodyContent {
        this['access_vpc_id'] = accessVpcId;
        return this;
    }
    public set accessVpcId(accessVpcId: string  | undefined) {
        this['access_vpc_id'] = accessVpcId;
    }
    public get accessVpcId(): string | undefined {
        return this['access_vpc_id'];
    }
    public withAccessSubnetId(accessSubnetId: string): CreateVgwRequestBodyContent {
        this['access_subnet_id'] = accessSubnetId;
        return this;
    }
    public set accessSubnetId(accessSubnetId: string  | undefined) {
        this['access_subnet_id'] = accessSubnetId;
    }
    public get accessSubnetId(): string | undefined {
        return this['access_subnet_id'];
    }
    public withHaMode(haMode: CreateVgwRequestBodyContentHaModeEnum | string): CreateVgwRequestBodyContent {
        this['ha_mode'] = haMode;
        return this;
    }
    public set haMode(haMode: CreateVgwRequestBodyContentHaModeEnum | string  | undefined) {
        this['ha_mode'] = haMode;
    }
    public get haMode(): CreateVgwRequestBodyContentHaModeEnum | string | undefined {
        return this['ha_mode'];
    }
    public withTags(tags: Array<VpnResourceTag>): CreateVgwRequestBodyContent {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateVgwRequestBodyContentAttachmentTypeEnum {
    VPC = 'vpc',
    ER = 'er'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateVgwRequestBodyContentFlavorEnum {
    BASIC = 'Basic',
    PROFESSIONAL1 = 'Professional1',
    PROFESSIONAL2 = 'Professional2',
    PROFESSIONAL1_NONFIXEDIP = 'Professional1-NonFixedIP',
    PROFESSIONAL2_NONFIXEDIP = 'Professional2-NonFixedIP'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateVgwRequestBodyContentNetworkTypeEnum {
    PUBLIC = 'public',
    PRIVATE = 'private'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateVgwRequestBodyContentHaModeEnum {
    ACTIVE_ACTIVE = 'active-active',
    ACTIVE_STANDBY = 'active-standby'
}
