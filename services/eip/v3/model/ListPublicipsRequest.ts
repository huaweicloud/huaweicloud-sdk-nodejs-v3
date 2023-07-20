

export class ListPublicipsRequest {
    public marker?: string;
    public offset?: number;
    public limit?: number;
    public fields?: Array<string>;
    private 'sort_key'?: ListPublicipsRequestSortKeyEnum | string;
    private 'sort_dir'?: ListPublicipsRequestSortDirEnum | string;
    public id?: Array<string>;
    private 'ip_version'?: Array<ListPublicipsRequestIpVersionEnum> | Array<number>;
    private 'public_ip_address'?: Array<string>;
    private 'public_ip_address_like'?: string;
    private 'public_ipv6_address'?: Array<string>;
    private 'public_ipv6_address_like'?: string;
    public type?: Array<ListPublicipsRequestTypeEnum> | Array<string>;
    private 'network_type'?: Array<ListPublicipsRequestNetworkTypeEnum> | Array<string>;
    private 'publicip_pool_name'?: Array<string>;
    public status?: Array<ListPublicipsRequestStatusEnum> | Array<string>;
    private 'alias_like'?: string;
    public alias?: Array<string>;
    public description?: Array<string>;
    private 'vnic.private_ip_address'?: Array<string>;
    private 'vnic.private_ip_address_like'?: string;
    private 'vnic.device_id'?: Array<string>;
    private 'vnic.device_owner'?: Array<string>;
    private 'vnic.vpc_id'?: Array<string>;
    private 'vnic.port_id'?: Array<string>;
    private 'vnic.device_owner_prefixlike'?: string;
    private 'vnic.instance_type'?: Array<string>;
    private 'vnic.instance_id'?: Array<string>;
    private 'bandwidth.id'?: Array<string>;
    private 'bandwidth.name'?: Array<string>;
    private 'bandwidth.name_like'?: Array<string>;
    private 'bandwidth.size'?: Array<number>;
    private 'bandwidth.share_type'?: Array<ListPublicipsRequestBandwidthShareTypeEnum> | Array<string>;
    private 'bandwidth.charge_mode'?: Array<ListPublicipsRequestBandwidthChargeModeEnum> | Array<string>;
    private 'billing_info'?: Array<string>;
    private 'billing_mode'?: ListPublicipsRequestBillingModeEnum | string;
    private 'associate_instance_type'?: Array<ListPublicipsRequestAssociateInstanceTypeEnum> | Array<string>;
    private 'associate_instance_id'?: Array<string>;
    private 'enterprise_project_id'?: Array<string>;
    private 'public_border_group'?: Array<string>;
    private 'allow_share_bandwidth_type_any'?: Array<string>;
    public constructor() { 
    }
    public withMarker(marker: string): ListPublicipsRequest {
        this['marker'] = marker;
        return this;
    }
    public withOffset(offset: number): ListPublicipsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPublicipsRequest {
        this['limit'] = limit;
        return this;
    }
    public withFields(fields: Array<string>): ListPublicipsRequest {
        this['fields'] = fields;
        return this;
    }
    public withSortKey(sortKey: ListPublicipsRequestSortKeyEnum | string): ListPublicipsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: ListPublicipsRequestSortKeyEnum | string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): ListPublicipsRequestSortKeyEnum | string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: ListPublicipsRequestSortDirEnum | string): ListPublicipsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: ListPublicipsRequestSortDirEnum | string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): ListPublicipsRequestSortDirEnum | string | undefined {
        return this['sort_dir'];
    }
    public withId(id: Array<string>): ListPublicipsRequest {
        this['id'] = id;
        return this;
    }
    public withIpVersion(ipVersion: Array<ListPublicipsRequestIpVersionEnum> | Array<number>): ListPublicipsRequest {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: Array<ListPublicipsRequestIpVersionEnum> | Array<number>  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): Array<ListPublicipsRequestIpVersionEnum> | Array<number> | undefined {
        return this['ip_version'];
    }
    public withPublicIpAddress(publicIpAddress: Array<string>): ListPublicipsRequest {
        this['public_ip_address'] = publicIpAddress;
        return this;
    }
    public set publicIpAddress(publicIpAddress: Array<string>  | undefined) {
        this['public_ip_address'] = publicIpAddress;
    }
    public get publicIpAddress(): Array<string> | undefined {
        return this['public_ip_address'];
    }
    public withPublicIpAddressLike(publicIpAddressLike: string): ListPublicipsRequest {
        this['public_ip_address_like'] = publicIpAddressLike;
        return this;
    }
    public set publicIpAddressLike(publicIpAddressLike: string  | undefined) {
        this['public_ip_address_like'] = publicIpAddressLike;
    }
    public get publicIpAddressLike(): string | undefined {
        return this['public_ip_address_like'];
    }
    public withPublicIpv6Address(publicIpv6Address: Array<string>): ListPublicipsRequest {
        this['public_ipv6_address'] = publicIpv6Address;
        return this;
    }
    public set publicIpv6Address(publicIpv6Address: Array<string>  | undefined) {
        this['public_ipv6_address'] = publicIpv6Address;
    }
    public get publicIpv6Address(): Array<string> | undefined {
        return this['public_ipv6_address'];
    }
    public withPublicIpv6AddressLike(publicIpv6AddressLike: string): ListPublicipsRequest {
        this['public_ipv6_address_like'] = publicIpv6AddressLike;
        return this;
    }
    public set publicIpv6AddressLike(publicIpv6AddressLike: string  | undefined) {
        this['public_ipv6_address_like'] = publicIpv6AddressLike;
    }
    public get publicIpv6AddressLike(): string | undefined {
        return this['public_ipv6_address_like'];
    }
    public withType(type: Array<ListPublicipsRequestTypeEnum> | Array<string>): ListPublicipsRequest {
        this['type'] = type;
        return this;
    }
    public withNetworkType(networkType: Array<ListPublicipsRequestNetworkTypeEnum> | Array<string>): ListPublicipsRequest {
        this['network_type'] = networkType;
        return this;
    }
    public set networkType(networkType: Array<ListPublicipsRequestNetworkTypeEnum> | Array<string>  | undefined) {
        this['network_type'] = networkType;
    }
    public get networkType(): Array<ListPublicipsRequestNetworkTypeEnum> | Array<string> | undefined {
        return this['network_type'];
    }
    public withPublicipPoolName(publicipPoolName: Array<string>): ListPublicipsRequest {
        this['publicip_pool_name'] = publicipPoolName;
        return this;
    }
    public set publicipPoolName(publicipPoolName: Array<string>  | undefined) {
        this['publicip_pool_name'] = publicipPoolName;
    }
    public get publicipPoolName(): Array<string> | undefined {
        return this['publicip_pool_name'];
    }
    public withStatus(status: Array<ListPublicipsRequestStatusEnum> | Array<string>): ListPublicipsRequest {
        this['status'] = status;
        return this;
    }
    public withAliasLike(aliasLike: string): ListPublicipsRequest {
        this['alias_like'] = aliasLike;
        return this;
    }
    public set aliasLike(aliasLike: string  | undefined) {
        this['alias_like'] = aliasLike;
    }
    public get aliasLike(): string | undefined {
        return this['alias_like'];
    }
    public withAlias(alias: Array<string>): ListPublicipsRequest {
        this['alias'] = alias;
        return this;
    }
    public withDescription(description: Array<string>): ListPublicipsRequest {
        this['description'] = description;
        return this;
    }
    public withVnicPrivateIpAddress(vnicPrivateIpAddress: Array<string>): ListPublicipsRequest {
        this['vnic.private_ip_address'] = vnicPrivateIpAddress;
        return this;
    }
    public set vnicPrivateIpAddress(vnicPrivateIpAddress: Array<string>  | undefined) {
        this['vnic.private_ip_address'] = vnicPrivateIpAddress;
    }
    public get vnicPrivateIpAddress(): Array<string> | undefined {
        return this['vnic.private_ip_address'];
    }
    public withVnicPrivateIpAddressLike(vnicPrivateIpAddressLike: string): ListPublicipsRequest {
        this['vnic.private_ip_address_like'] = vnicPrivateIpAddressLike;
        return this;
    }
    public set vnicPrivateIpAddressLike(vnicPrivateIpAddressLike: string  | undefined) {
        this['vnic.private_ip_address_like'] = vnicPrivateIpAddressLike;
    }
    public get vnicPrivateIpAddressLike(): string | undefined {
        return this['vnic.private_ip_address_like'];
    }
    public withVnicDeviceId(vnicDeviceId: Array<string>): ListPublicipsRequest {
        this['vnic.device_id'] = vnicDeviceId;
        return this;
    }
    public set vnicDeviceId(vnicDeviceId: Array<string>  | undefined) {
        this['vnic.device_id'] = vnicDeviceId;
    }
    public get vnicDeviceId(): Array<string> | undefined {
        return this['vnic.device_id'];
    }
    public withVnicDeviceOwner(vnicDeviceOwner: Array<string>): ListPublicipsRequest {
        this['vnic.device_owner'] = vnicDeviceOwner;
        return this;
    }
    public set vnicDeviceOwner(vnicDeviceOwner: Array<string>  | undefined) {
        this['vnic.device_owner'] = vnicDeviceOwner;
    }
    public get vnicDeviceOwner(): Array<string> | undefined {
        return this['vnic.device_owner'];
    }
    public withVnicVpcId(vnicVpcId: Array<string>): ListPublicipsRequest {
        this['vnic.vpc_id'] = vnicVpcId;
        return this;
    }
    public set vnicVpcId(vnicVpcId: Array<string>  | undefined) {
        this['vnic.vpc_id'] = vnicVpcId;
    }
    public get vnicVpcId(): Array<string> | undefined {
        return this['vnic.vpc_id'];
    }
    public withVnicPortId(vnicPortId: Array<string>): ListPublicipsRequest {
        this['vnic.port_id'] = vnicPortId;
        return this;
    }
    public set vnicPortId(vnicPortId: Array<string>  | undefined) {
        this['vnic.port_id'] = vnicPortId;
    }
    public get vnicPortId(): Array<string> | undefined {
        return this['vnic.port_id'];
    }
    public withVnicDeviceOwnerPrefixlike(vnicDeviceOwnerPrefixlike: string): ListPublicipsRequest {
        this['vnic.device_owner_prefixlike'] = vnicDeviceOwnerPrefixlike;
        return this;
    }
    public set vnicDeviceOwnerPrefixlike(vnicDeviceOwnerPrefixlike: string  | undefined) {
        this['vnic.device_owner_prefixlike'] = vnicDeviceOwnerPrefixlike;
    }
    public get vnicDeviceOwnerPrefixlike(): string | undefined {
        return this['vnic.device_owner_prefixlike'];
    }
    public withVnicInstanceType(vnicInstanceType: Array<string>): ListPublicipsRequest {
        this['vnic.instance_type'] = vnicInstanceType;
        return this;
    }
    public set vnicInstanceType(vnicInstanceType: Array<string>  | undefined) {
        this['vnic.instance_type'] = vnicInstanceType;
    }
    public get vnicInstanceType(): Array<string> | undefined {
        return this['vnic.instance_type'];
    }
    public withVnicInstanceId(vnicInstanceId: Array<string>): ListPublicipsRequest {
        this['vnic.instance_id'] = vnicInstanceId;
        return this;
    }
    public set vnicInstanceId(vnicInstanceId: Array<string>  | undefined) {
        this['vnic.instance_id'] = vnicInstanceId;
    }
    public get vnicInstanceId(): Array<string> | undefined {
        return this['vnic.instance_id'];
    }
    public withBandwidthId(bandwidthId: Array<string>): ListPublicipsRequest {
        this['bandwidth.id'] = bandwidthId;
        return this;
    }
    public set bandwidthId(bandwidthId: Array<string>  | undefined) {
        this['bandwidth.id'] = bandwidthId;
    }
    public get bandwidthId(): Array<string> | undefined {
        return this['bandwidth.id'];
    }
    public withBandwidthName(bandwidthName: Array<string>): ListPublicipsRequest {
        this['bandwidth.name'] = bandwidthName;
        return this;
    }
    public set bandwidthName(bandwidthName: Array<string>  | undefined) {
        this['bandwidth.name'] = bandwidthName;
    }
    public get bandwidthName(): Array<string> | undefined {
        return this['bandwidth.name'];
    }
    public withBandwidthNameLike(bandwidthNameLike: Array<string>): ListPublicipsRequest {
        this['bandwidth.name_like'] = bandwidthNameLike;
        return this;
    }
    public set bandwidthNameLike(bandwidthNameLike: Array<string>  | undefined) {
        this['bandwidth.name_like'] = bandwidthNameLike;
    }
    public get bandwidthNameLike(): Array<string> | undefined {
        return this['bandwidth.name_like'];
    }
    public withBandwidthSize(bandwidthSize: Array<number>): ListPublicipsRequest {
        this['bandwidth.size'] = bandwidthSize;
        return this;
    }
    public set bandwidthSize(bandwidthSize: Array<number>  | undefined) {
        this['bandwidth.size'] = bandwidthSize;
    }
    public get bandwidthSize(): Array<number> | undefined {
        return this['bandwidth.size'];
    }
    public withBandwidthShareType(bandwidthShareType: Array<ListPublicipsRequestBandwidthShareTypeEnum> | Array<string>): ListPublicipsRequest {
        this['bandwidth.share_type'] = bandwidthShareType;
        return this;
    }
    public set bandwidthShareType(bandwidthShareType: Array<ListPublicipsRequestBandwidthShareTypeEnum> | Array<string>  | undefined) {
        this['bandwidth.share_type'] = bandwidthShareType;
    }
    public get bandwidthShareType(): Array<ListPublicipsRequestBandwidthShareTypeEnum> | Array<string> | undefined {
        return this['bandwidth.share_type'];
    }
    public withBandwidthChargeMode(bandwidthChargeMode: Array<ListPublicipsRequestBandwidthChargeModeEnum> | Array<string>): ListPublicipsRequest {
        this['bandwidth.charge_mode'] = bandwidthChargeMode;
        return this;
    }
    public set bandwidthChargeMode(bandwidthChargeMode: Array<ListPublicipsRequestBandwidthChargeModeEnum> | Array<string>  | undefined) {
        this['bandwidth.charge_mode'] = bandwidthChargeMode;
    }
    public get bandwidthChargeMode(): Array<ListPublicipsRequestBandwidthChargeModeEnum> | Array<string> | undefined {
        return this['bandwidth.charge_mode'];
    }
    public withBillingInfo(billingInfo: Array<string>): ListPublicipsRequest {
        this['billing_info'] = billingInfo;
        return this;
    }
    public set billingInfo(billingInfo: Array<string>  | undefined) {
        this['billing_info'] = billingInfo;
    }
    public get billingInfo(): Array<string> | undefined {
        return this['billing_info'];
    }
    public withBillingMode(billingMode: ListPublicipsRequestBillingModeEnum | string): ListPublicipsRequest {
        this['billing_mode'] = billingMode;
        return this;
    }
    public set billingMode(billingMode: ListPublicipsRequestBillingModeEnum | string  | undefined) {
        this['billing_mode'] = billingMode;
    }
    public get billingMode(): ListPublicipsRequestBillingModeEnum | string | undefined {
        return this['billing_mode'];
    }
    public withAssociateInstanceType(associateInstanceType: Array<ListPublicipsRequestAssociateInstanceTypeEnum> | Array<string>): ListPublicipsRequest {
        this['associate_instance_type'] = associateInstanceType;
        return this;
    }
    public set associateInstanceType(associateInstanceType: Array<ListPublicipsRequestAssociateInstanceTypeEnum> | Array<string>  | undefined) {
        this['associate_instance_type'] = associateInstanceType;
    }
    public get associateInstanceType(): Array<ListPublicipsRequestAssociateInstanceTypeEnum> | Array<string> | undefined {
        return this['associate_instance_type'];
    }
    public withAssociateInstanceId(associateInstanceId: Array<string>): ListPublicipsRequest {
        this['associate_instance_id'] = associateInstanceId;
        return this;
    }
    public set associateInstanceId(associateInstanceId: Array<string>  | undefined) {
        this['associate_instance_id'] = associateInstanceId;
    }
    public get associateInstanceId(): Array<string> | undefined {
        return this['associate_instance_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: Array<string>): ListPublicipsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: Array<string>  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): Array<string> | undefined {
        return this['enterprise_project_id'];
    }
    public withPublicBorderGroup(publicBorderGroup: Array<string>): ListPublicipsRequest {
        this['public_border_group'] = publicBorderGroup;
        return this;
    }
    public set publicBorderGroup(publicBorderGroup: Array<string>  | undefined) {
        this['public_border_group'] = publicBorderGroup;
    }
    public get publicBorderGroup(): Array<string> | undefined {
        return this['public_border_group'];
    }
    public withAllowShareBandwidthTypeAny(allowShareBandwidthTypeAny: Array<string>): ListPublicipsRequest {
        this['allow_share_bandwidth_type_any'] = allowShareBandwidthTypeAny;
        return this;
    }
    public set allowShareBandwidthTypeAny(allowShareBandwidthTypeAny: Array<string>  | undefined) {
        this['allow_share_bandwidth_type_any'] = allowShareBandwidthTypeAny;
    }
    public get allowShareBandwidthTypeAny(): Array<string> | undefined {
        return this['allow_share_bandwidth_type_any'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListPublicipsRequestSortKeyEnum {
    ID = 'id',
    PUBLIC_IP_ADDRESS = 'public_ip_address',
    PUBLIC_IPV6_ADDRESS = 'public_ipv6_address',
    IP_VERSION = 'ip_version',
    CREATED_AT = 'created_at',
    UPDATED_AT = 'updated_at',
    PUBLIC_BORDER_GROUP = 'public_border_group'
}
/**
    * @export
    * @enum {string}
    */
export enum ListPublicipsRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
/**
    * @export
    * @enum {string}
    */
export enum ListPublicipsRequestIpVersionEnum {
    NUMBER_4 = 4,
    NUMBER_6 = 6
}
/**
    * @export
    * @enum {string}
    */
export enum ListPublicipsRequestTypeEnum {
    EIP = 'EIP',
    DUALSTACK = 'DUALSTACK',
    DUALSTACK_SUBNET = 'DUALSTACK_SUBNET'
}
/**
    * @export
    * @enum {string}
    */
export enum ListPublicipsRequestNetworkTypeEnum {
    E_5_TELCOM = '5_telcom',
    E_5_UNION = '5_union',
    E_5_BGP = '5_bgp',
    E_5_SBGP = '5_sbgp',
    E_5_IPV6 = '5_ipv6',
    E_5_GRAYBGP = '5_graybgp'
}
/**
    * @export
    * @enum {string}
    */
export enum ListPublicipsRequestStatusEnum {
    FREEZED = 'FREEZED',
    DOWN = 'DOWN',
    ACTIVE = 'ACTIVE',
    ERROR = 'ERROR'
}
/**
    * @export
    * @enum {string}
    */
export enum ListPublicipsRequestBandwidthShareTypeEnum {
    PER = 'PER',
    WHOLE = 'WHOLE'
}
/**
    * @export
    * @enum {string}
    */
export enum ListPublicipsRequestBandwidthChargeModeEnum {
    BANDWIDTH = 'bandwidth',
    TRAFFIC = 'traffic',
    E_95PEAK_PLUS = '95peak_plus'
}
/**
    * @export
    * @enum {string}
    */
export enum ListPublicipsRequestBillingModeEnum {
    YEARLY_MONTHLY = 'YEARLY_MONTHLY',
    PAY_PER_USE = 'PAY_PER_USE'
}
/**
    * @export
    * @enum {string}
    */
export enum ListPublicipsRequestAssociateInstanceTypeEnum {
    PORT = 'PORT',
    NATGW = 'NATGW',
    ELB = 'ELB',
    VPN = 'VPN',
    ELBV1 = 'ELBV1'
}
