import { Tag } from './Tag';


export class CreateVirtualInterface {
    public name?: string;
    public description?: string;
    private 'direct_connect_id'?: string;
    public type?: CreateVirtualInterfaceTypeEnum | string;
    private 'service_type'?: CreateVirtualInterfaceServiceTypeEnum | string;
    public vlan?: number;
    public bandwidth?: number;
    private 'local_gateway_v4_ip'?: string;
    private 'remote_gateway_v4_ip'?: string;
    private 'address_family'?: string;
    private 'local_gateway_v6_ip'?: string;
    private 'remote_gateway_v6_ip'?: string;
    private 'vgw_id'?: string;
    private 'gateway_id'?: string;
    private 'route_mode'?: CreateVirtualInterfaceRouteModeEnum | string;
    private 'bgp_asn'?: number;
    private 'bgp_md5'?: string;
    private 'remote_ep_group'?: Array<string>;
    private 'service_ep_group'?: Array<string>;
    private 'enable_bfd'?: boolean;
    private 'enable_nqa'?: boolean;
    private 'lag_id'?: string;
    private 'resource_tenant_id'?: string;
    private 'enterprise_project_id'?: string;
    public tags?: Array<Tag>;
    public constructor(type?: string, vlan?: number, bandwidth?: number, vgwId?: string, routeMode?: string, remoteEpGroup?: Array<string>) { 
        this['type'] = type;
        this['vlan'] = vlan;
        this['bandwidth'] = bandwidth;
        this['vgw_id'] = vgwId;
        this['route_mode'] = routeMode;
        this['remote_ep_group'] = remoteEpGroup;
    }
    public withName(name: string): CreateVirtualInterface {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateVirtualInterface {
        this['description'] = description;
        return this;
    }
    public withDirectConnectId(directConnectId: string): CreateVirtualInterface {
        this['direct_connect_id'] = directConnectId;
        return this;
    }
    public set directConnectId(directConnectId: string  | undefined) {
        this['direct_connect_id'] = directConnectId;
    }
    public get directConnectId(): string | undefined {
        return this['direct_connect_id'];
    }
    public withType(type: CreateVirtualInterfaceTypeEnum | string): CreateVirtualInterface {
        this['type'] = type;
        return this;
    }
    public withServiceType(serviceType: CreateVirtualInterfaceServiceTypeEnum | string): CreateVirtualInterface {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: CreateVirtualInterfaceServiceTypeEnum | string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): CreateVirtualInterfaceServiceTypeEnum | string | undefined {
        return this['service_type'];
    }
    public withVlan(vlan: number): CreateVirtualInterface {
        this['vlan'] = vlan;
        return this;
    }
    public withBandwidth(bandwidth: number): CreateVirtualInterface {
        this['bandwidth'] = bandwidth;
        return this;
    }
    public withLocalGatewayV4Ip(localGatewayV4Ip: string): CreateVirtualInterface {
        this['local_gateway_v4_ip'] = localGatewayV4Ip;
        return this;
    }
    public set localGatewayV4Ip(localGatewayV4Ip: string  | undefined) {
        this['local_gateway_v4_ip'] = localGatewayV4Ip;
    }
    public get localGatewayV4Ip(): string | undefined {
        return this['local_gateway_v4_ip'];
    }
    public withRemoteGatewayV4Ip(remoteGatewayV4Ip: string): CreateVirtualInterface {
        this['remote_gateway_v4_ip'] = remoteGatewayV4Ip;
        return this;
    }
    public set remoteGatewayV4Ip(remoteGatewayV4Ip: string  | undefined) {
        this['remote_gateway_v4_ip'] = remoteGatewayV4Ip;
    }
    public get remoteGatewayV4Ip(): string | undefined {
        return this['remote_gateway_v4_ip'];
    }
    public withAddressFamily(addressFamily: string): CreateVirtualInterface {
        this['address_family'] = addressFamily;
        return this;
    }
    public set addressFamily(addressFamily: string  | undefined) {
        this['address_family'] = addressFamily;
    }
    public get addressFamily(): string | undefined {
        return this['address_family'];
    }
    public withLocalGatewayV6Ip(localGatewayV6Ip: string): CreateVirtualInterface {
        this['local_gateway_v6_ip'] = localGatewayV6Ip;
        return this;
    }
    public set localGatewayV6Ip(localGatewayV6Ip: string  | undefined) {
        this['local_gateway_v6_ip'] = localGatewayV6Ip;
    }
    public get localGatewayV6Ip(): string | undefined {
        return this['local_gateway_v6_ip'];
    }
    public withRemoteGatewayV6Ip(remoteGatewayV6Ip: string): CreateVirtualInterface {
        this['remote_gateway_v6_ip'] = remoteGatewayV6Ip;
        return this;
    }
    public set remoteGatewayV6Ip(remoteGatewayV6Ip: string  | undefined) {
        this['remote_gateway_v6_ip'] = remoteGatewayV6Ip;
    }
    public get remoteGatewayV6Ip(): string | undefined {
        return this['remote_gateway_v6_ip'];
    }
    public withVgwId(vgwId: string): CreateVirtualInterface {
        this['vgw_id'] = vgwId;
        return this;
    }
    public set vgwId(vgwId: string  | undefined) {
        this['vgw_id'] = vgwId;
    }
    public get vgwId(): string | undefined {
        return this['vgw_id'];
    }
    public withGatewayId(gatewayId: string): CreateVirtualInterface {
        this['gateway_id'] = gatewayId;
        return this;
    }
    public set gatewayId(gatewayId: string  | undefined) {
        this['gateway_id'] = gatewayId;
    }
    public get gatewayId(): string | undefined {
        return this['gateway_id'];
    }
    public withRouteMode(routeMode: CreateVirtualInterfaceRouteModeEnum | string): CreateVirtualInterface {
        this['route_mode'] = routeMode;
        return this;
    }
    public set routeMode(routeMode: CreateVirtualInterfaceRouteModeEnum | string  | undefined) {
        this['route_mode'] = routeMode;
    }
    public get routeMode(): CreateVirtualInterfaceRouteModeEnum | string | undefined {
        return this['route_mode'];
    }
    public withBgpAsn(bgpAsn: number): CreateVirtualInterface {
        this['bgp_asn'] = bgpAsn;
        return this;
    }
    public set bgpAsn(bgpAsn: number  | undefined) {
        this['bgp_asn'] = bgpAsn;
    }
    public get bgpAsn(): number | undefined {
        return this['bgp_asn'];
    }
    public withBgpMd5(bgpMd5: string): CreateVirtualInterface {
        this['bgp_md5'] = bgpMd5;
        return this;
    }
    public set bgpMd5(bgpMd5: string  | undefined) {
        this['bgp_md5'] = bgpMd5;
    }
    public get bgpMd5(): string | undefined {
        return this['bgp_md5'];
    }
    public withRemoteEpGroup(remoteEpGroup: Array<string>): CreateVirtualInterface {
        this['remote_ep_group'] = remoteEpGroup;
        return this;
    }
    public set remoteEpGroup(remoteEpGroup: Array<string>  | undefined) {
        this['remote_ep_group'] = remoteEpGroup;
    }
    public get remoteEpGroup(): Array<string> | undefined {
        return this['remote_ep_group'];
    }
    public withServiceEpGroup(serviceEpGroup: Array<string>): CreateVirtualInterface {
        this['service_ep_group'] = serviceEpGroup;
        return this;
    }
    public set serviceEpGroup(serviceEpGroup: Array<string>  | undefined) {
        this['service_ep_group'] = serviceEpGroup;
    }
    public get serviceEpGroup(): Array<string> | undefined {
        return this['service_ep_group'];
    }
    public withEnableBfd(enableBfd: boolean): CreateVirtualInterface {
        this['enable_bfd'] = enableBfd;
        return this;
    }
    public set enableBfd(enableBfd: boolean  | undefined) {
        this['enable_bfd'] = enableBfd;
    }
    public get enableBfd(): boolean | undefined {
        return this['enable_bfd'];
    }
    public withEnableNqa(enableNqa: boolean): CreateVirtualInterface {
        this['enable_nqa'] = enableNqa;
        return this;
    }
    public set enableNqa(enableNqa: boolean  | undefined) {
        this['enable_nqa'] = enableNqa;
    }
    public get enableNqa(): boolean | undefined {
        return this['enable_nqa'];
    }
    public withLagId(lagId: string): CreateVirtualInterface {
        this['lag_id'] = lagId;
        return this;
    }
    public set lagId(lagId: string  | undefined) {
        this['lag_id'] = lagId;
    }
    public get lagId(): string | undefined {
        return this['lag_id'];
    }
    public withResourceTenantId(resourceTenantId: string): CreateVirtualInterface {
        this['resource_tenant_id'] = resourceTenantId;
        return this;
    }
    public set resourceTenantId(resourceTenantId: string  | undefined) {
        this['resource_tenant_id'] = resourceTenantId;
    }
    public get resourceTenantId(): string | undefined {
        return this['resource_tenant_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateVirtualInterface {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<Tag>): CreateVirtualInterface {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateVirtualInterfaceTypeEnum {
    PRIVATE = 'private',
    PUBLIC = 'public'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateVirtualInterfaceServiceTypeEnum {
    VGW = 'VGW',
    GDGW = 'GDGW',
    LGW = 'LGW'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateVirtualInterfaceRouteModeEnum {
    STATIC = 'static',
    BGP = 'bgp'
}
