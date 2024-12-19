import { Tag } from './Tag';
import { VifExtendAttribute } from './VifExtendAttribute';
import { VifPeer } from './VifPeer';


export class VirtualInterface {
    public id?: string;
    public name?: string;
    private 'admin_state_up'?: boolean;
    public bandwidth?: number;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    public description?: string;
    private 'direct_connect_id'?: string;
    private 'service_type'?: VirtualInterfaceServiceTypeEnum | string;
    public status?: string;
    private 'tenant_id'?: string;
    public type?: VirtualInterfaceTypeEnum | string;
    private 'vgw_id'?: string;
    public vlan?: number;
    private 'route_limit'?: number;
    private 'enable_nqa'?: boolean;
    private 'enable_bfd'?: boolean;
    private 'lag_id'?: string;
    private 'device_id'?: string;
    private 'enterprise_project_id'?: string;
    public tags?: Array<Tag>;
    private 'local_gateway_v4_ip'?: string;
    private 'remote_gateway_v4_ip'?: string;
    private 'ies_id'?: string;
    public reason?: string;
    private 'rate_limit'?: boolean;
    private 'address_family'?: string;
    private 'local_gateway_v6_ip'?: string;
    private 'remote_gateway_v6_ip'?: string;
    private 'lgw_id'?: string;
    private 'gateway_id'?: string;
    private 'remote_ep_group'?: Array<string>;
    private 'service_ep_group'?: Array<string>;
    private 'bgp_route_limit'?: number;
    public priority?: VirtualInterfacePriorityEnum | string;
    private 'vif_peers'?: Array<VifPeer>;
    private 'extend_attribute'?: VifExtendAttribute;
    public constructor() { 
    }
    public withId(id: string): VirtualInterface {
        this['id'] = id;
        return this;
    }
    public withName(name: string): VirtualInterface {
        this['name'] = name;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): VirtualInterface {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withBandwidth(bandwidth: number): VirtualInterface {
        this['bandwidth'] = bandwidth;
        return this;
    }
    public withCreateTime(createTime: Date): VirtualInterface {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): VirtualInterface {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withDescription(description: string): VirtualInterface {
        this['description'] = description;
        return this;
    }
    public withDirectConnectId(directConnectId: string): VirtualInterface {
        this['direct_connect_id'] = directConnectId;
        return this;
    }
    public set directConnectId(directConnectId: string  | undefined) {
        this['direct_connect_id'] = directConnectId;
    }
    public get directConnectId(): string | undefined {
        return this['direct_connect_id'];
    }
    public withServiceType(serviceType: VirtualInterfaceServiceTypeEnum | string): VirtualInterface {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: VirtualInterfaceServiceTypeEnum | string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): VirtualInterfaceServiceTypeEnum | string | undefined {
        return this['service_type'];
    }
    public withStatus(status: string): VirtualInterface {
        this['status'] = status;
        return this;
    }
    public withTenantId(tenantId: string): VirtualInterface {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withType(type: VirtualInterfaceTypeEnum | string): VirtualInterface {
        this['type'] = type;
        return this;
    }
    public withVgwId(vgwId: string): VirtualInterface {
        this['vgw_id'] = vgwId;
        return this;
    }
    public set vgwId(vgwId: string  | undefined) {
        this['vgw_id'] = vgwId;
    }
    public get vgwId(): string | undefined {
        return this['vgw_id'];
    }
    public withVlan(vlan: number): VirtualInterface {
        this['vlan'] = vlan;
        return this;
    }
    public withRouteLimit(routeLimit: number): VirtualInterface {
        this['route_limit'] = routeLimit;
        return this;
    }
    public set routeLimit(routeLimit: number  | undefined) {
        this['route_limit'] = routeLimit;
    }
    public get routeLimit(): number | undefined {
        return this['route_limit'];
    }
    public withEnableNqa(enableNqa: boolean): VirtualInterface {
        this['enable_nqa'] = enableNqa;
        return this;
    }
    public set enableNqa(enableNqa: boolean  | undefined) {
        this['enable_nqa'] = enableNqa;
    }
    public get enableNqa(): boolean | undefined {
        return this['enable_nqa'];
    }
    public withEnableBfd(enableBfd: boolean): VirtualInterface {
        this['enable_bfd'] = enableBfd;
        return this;
    }
    public set enableBfd(enableBfd: boolean  | undefined) {
        this['enable_bfd'] = enableBfd;
    }
    public get enableBfd(): boolean | undefined {
        return this['enable_bfd'];
    }
    public withLagId(lagId: string): VirtualInterface {
        this['lag_id'] = lagId;
        return this;
    }
    public set lagId(lagId: string  | undefined) {
        this['lag_id'] = lagId;
    }
    public get lagId(): string | undefined {
        return this['lag_id'];
    }
    public withDeviceId(deviceId: string): VirtualInterface {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string  | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId(): string | undefined {
        return this['device_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): VirtualInterface {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<Tag>): VirtualInterface {
        this['tags'] = tags;
        return this;
    }
    public withLocalGatewayV4Ip(localGatewayV4Ip: string): VirtualInterface {
        this['local_gateway_v4_ip'] = localGatewayV4Ip;
        return this;
    }
    public set localGatewayV4Ip(localGatewayV4Ip: string  | undefined) {
        this['local_gateway_v4_ip'] = localGatewayV4Ip;
    }
    public get localGatewayV4Ip(): string | undefined {
        return this['local_gateway_v4_ip'];
    }
    public withRemoteGatewayV4Ip(remoteGatewayV4Ip: string): VirtualInterface {
        this['remote_gateway_v4_ip'] = remoteGatewayV4Ip;
        return this;
    }
    public set remoteGatewayV4Ip(remoteGatewayV4Ip: string  | undefined) {
        this['remote_gateway_v4_ip'] = remoteGatewayV4Ip;
    }
    public get remoteGatewayV4Ip(): string | undefined {
        return this['remote_gateway_v4_ip'];
    }
    public withIesId(iesId: string): VirtualInterface {
        this['ies_id'] = iesId;
        return this;
    }
    public set iesId(iesId: string  | undefined) {
        this['ies_id'] = iesId;
    }
    public get iesId(): string | undefined {
        return this['ies_id'];
    }
    public withReason(reason: string): VirtualInterface {
        this['reason'] = reason;
        return this;
    }
    public withRateLimit(rateLimit: boolean): VirtualInterface {
        this['rate_limit'] = rateLimit;
        return this;
    }
    public set rateLimit(rateLimit: boolean  | undefined) {
        this['rate_limit'] = rateLimit;
    }
    public get rateLimit(): boolean | undefined {
        return this['rate_limit'];
    }
    public withAddressFamily(addressFamily: string): VirtualInterface {
        this['address_family'] = addressFamily;
        return this;
    }
    public set addressFamily(addressFamily: string  | undefined) {
        this['address_family'] = addressFamily;
    }
    public get addressFamily(): string | undefined {
        return this['address_family'];
    }
    public withLocalGatewayV6Ip(localGatewayV6Ip: string): VirtualInterface {
        this['local_gateway_v6_ip'] = localGatewayV6Ip;
        return this;
    }
    public set localGatewayV6Ip(localGatewayV6Ip: string  | undefined) {
        this['local_gateway_v6_ip'] = localGatewayV6Ip;
    }
    public get localGatewayV6Ip(): string | undefined {
        return this['local_gateway_v6_ip'];
    }
    public withRemoteGatewayV6Ip(remoteGatewayV6Ip: string): VirtualInterface {
        this['remote_gateway_v6_ip'] = remoteGatewayV6Ip;
        return this;
    }
    public set remoteGatewayV6Ip(remoteGatewayV6Ip: string  | undefined) {
        this['remote_gateway_v6_ip'] = remoteGatewayV6Ip;
    }
    public get remoteGatewayV6Ip(): string | undefined {
        return this['remote_gateway_v6_ip'];
    }
    public withLgwId(lgwId: string): VirtualInterface {
        this['lgw_id'] = lgwId;
        return this;
    }
    public set lgwId(lgwId: string  | undefined) {
        this['lgw_id'] = lgwId;
    }
    public get lgwId(): string | undefined {
        return this['lgw_id'];
    }
    public withGatewayId(gatewayId: string): VirtualInterface {
        this['gateway_id'] = gatewayId;
        return this;
    }
    public set gatewayId(gatewayId: string  | undefined) {
        this['gateway_id'] = gatewayId;
    }
    public get gatewayId(): string | undefined {
        return this['gateway_id'];
    }
    public withRemoteEpGroup(remoteEpGroup: Array<string>): VirtualInterface {
        this['remote_ep_group'] = remoteEpGroup;
        return this;
    }
    public set remoteEpGroup(remoteEpGroup: Array<string>  | undefined) {
        this['remote_ep_group'] = remoteEpGroup;
    }
    public get remoteEpGroup(): Array<string> | undefined {
        return this['remote_ep_group'];
    }
    public withServiceEpGroup(serviceEpGroup: Array<string>): VirtualInterface {
        this['service_ep_group'] = serviceEpGroup;
        return this;
    }
    public set serviceEpGroup(serviceEpGroup: Array<string>  | undefined) {
        this['service_ep_group'] = serviceEpGroup;
    }
    public get serviceEpGroup(): Array<string> | undefined {
        return this['service_ep_group'];
    }
    public withBgpRouteLimit(bgpRouteLimit: number): VirtualInterface {
        this['bgp_route_limit'] = bgpRouteLimit;
        return this;
    }
    public set bgpRouteLimit(bgpRouteLimit: number  | undefined) {
        this['bgp_route_limit'] = bgpRouteLimit;
    }
    public get bgpRouteLimit(): number | undefined {
        return this['bgp_route_limit'];
    }
    public withPriority(priority: VirtualInterfacePriorityEnum | string): VirtualInterface {
        this['priority'] = priority;
        return this;
    }
    public withVifPeers(vifPeers: Array<VifPeer>): VirtualInterface {
        this['vif_peers'] = vifPeers;
        return this;
    }
    public set vifPeers(vifPeers: Array<VifPeer>  | undefined) {
        this['vif_peers'] = vifPeers;
    }
    public get vifPeers(): Array<VifPeer> | undefined {
        return this['vif_peers'];
    }
    public withExtendAttribute(extendAttribute: VifExtendAttribute): VirtualInterface {
        this['extend_attribute'] = extendAttribute;
        return this;
    }
    public set extendAttribute(extendAttribute: VifExtendAttribute  | undefined) {
        this['extend_attribute'] = extendAttribute;
    }
    public get extendAttribute(): VifExtendAttribute | undefined {
        return this['extend_attribute'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VirtualInterfaceServiceTypeEnum {
    VGW = 'VGW',
    GDGW = 'GDGW',
    LGW = 'LGW'
}
/**
    * @export
    * @enum {string}
    */
export enum VirtualInterfaceTypeEnum {
    PRIVATE = 'private',
    PUBLIC = 'public'
}
/**
    * @export
    * @enum {string}
    */
export enum VirtualInterfacePriorityEnum {
    NORMAL = 'normal',
    LOW = 'low'
}
