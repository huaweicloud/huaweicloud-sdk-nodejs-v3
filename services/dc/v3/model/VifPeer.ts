

export class VifPeer {
    public id?: string;
    private 'tenant_id'?: string;
    public name?: string;
    public description?: string;
    private 'address_family'?: string;
    private 'local_gateway_ip'?: string;
    private 'remote_gateway_ip'?: string;
    private 'route_mode'?: VifPeerRouteModeEnum | string;
    private 'bgp_asn'?: number;
    private 'bgp_md5'?: string;
    private 'remote_ep_group'?: Array<string>;
    private 'service_ep_group'?: Array<string>;
    private 'device_id'?: string;
    private 'bgp_route_limit'?: number;
    private 'bgp_status'?: string;
    public status?: string;
    private 'vif_id'?: string;
    private 'receive_route_num'?: number;
    private 'enable_nqa'?: boolean;
    private 'enable_bfd'?: boolean;
    public constructor() { 
    }
    public withId(id: string): VifPeer {
        this['id'] = id;
        return this;
    }
    public withTenantId(tenantId: string): VifPeer {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withName(name: string): VifPeer {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): VifPeer {
        this['description'] = description;
        return this;
    }
    public withAddressFamily(addressFamily: string): VifPeer {
        this['address_family'] = addressFamily;
        return this;
    }
    public set addressFamily(addressFamily: string  | undefined) {
        this['address_family'] = addressFamily;
    }
    public get addressFamily(): string | undefined {
        return this['address_family'];
    }
    public withLocalGatewayIp(localGatewayIp: string): VifPeer {
        this['local_gateway_ip'] = localGatewayIp;
        return this;
    }
    public set localGatewayIp(localGatewayIp: string  | undefined) {
        this['local_gateway_ip'] = localGatewayIp;
    }
    public get localGatewayIp(): string | undefined {
        return this['local_gateway_ip'];
    }
    public withRemoteGatewayIp(remoteGatewayIp: string): VifPeer {
        this['remote_gateway_ip'] = remoteGatewayIp;
        return this;
    }
    public set remoteGatewayIp(remoteGatewayIp: string  | undefined) {
        this['remote_gateway_ip'] = remoteGatewayIp;
    }
    public get remoteGatewayIp(): string | undefined {
        return this['remote_gateway_ip'];
    }
    public withRouteMode(routeMode: VifPeerRouteModeEnum | string): VifPeer {
        this['route_mode'] = routeMode;
        return this;
    }
    public set routeMode(routeMode: VifPeerRouteModeEnum | string  | undefined) {
        this['route_mode'] = routeMode;
    }
    public get routeMode(): VifPeerRouteModeEnum | string | undefined {
        return this['route_mode'];
    }
    public withBgpAsn(bgpAsn: number): VifPeer {
        this['bgp_asn'] = bgpAsn;
        return this;
    }
    public set bgpAsn(bgpAsn: number  | undefined) {
        this['bgp_asn'] = bgpAsn;
    }
    public get bgpAsn(): number | undefined {
        return this['bgp_asn'];
    }
    public withBgpMd5(bgpMd5: string): VifPeer {
        this['bgp_md5'] = bgpMd5;
        return this;
    }
    public set bgpMd5(bgpMd5: string  | undefined) {
        this['bgp_md5'] = bgpMd5;
    }
    public get bgpMd5(): string | undefined {
        return this['bgp_md5'];
    }
    public withRemoteEpGroup(remoteEpGroup: Array<string>): VifPeer {
        this['remote_ep_group'] = remoteEpGroup;
        return this;
    }
    public set remoteEpGroup(remoteEpGroup: Array<string>  | undefined) {
        this['remote_ep_group'] = remoteEpGroup;
    }
    public get remoteEpGroup(): Array<string> | undefined {
        return this['remote_ep_group'];
    }
    public withServiceEpGroup(serviceEpGroup: Array<string>): VifPeer {
        this['service_ep_group'] = serviceEpGroup;
        return this;
    }
    public set serviceEpGroup(serviceEpGroup: Array<string>  | undefined) {
        this['service_ep_group'] = serviceEpGroup;
    }
    public get serviceEpGroup(): Array<string> | undefined {
        return this['service_ep_group'];
    }
    public withDeviceId(deviceId: string): VifPeer {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string  | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId(): string | undefined {
        return this['device_id'];
    }
    public withBgpRouteLimit(bgpRouteLimit: number): VifPeer {
        this['bgp_route_limit'] = bgpRouteLimit;
        return this;
    }
    public set bgpRouteLimit(bgpRouteLimit: number  | undefined) {
        this['bgp_route_limit'] = bgpRouteLimit;
    }
    public get bgpRouteLimit(): number | undefined {
        return this['bgp_route_limit'];
    }
    public withBgpStatus(bgpStatus: string): VifPeer {
        this['bgp_status'] = bgpStatus;
        return this;
    }
    public set bgpStatus(bgpStatus: string  | undefined) {
        this['bgp_status'] = bgpStatus;
    }
    public get bgpStatus(): string | undefined {
        return this['bgp_status'];
    }
    public withStatus(status: string): VifPeer {
        this['status'] = status;
        return this;
    }
    public withVifId(vifId: string): VifPeer {
        this['vif_id'] = vifId;
        return this;
    }
    public set vifId(vifId: string  | undefined) {
        this['vif_id'] = vifId;
    }
    public get vifId(): string | undefined {
        return this['vif_id'];
    }
    public withReceiveRouteNum(receiveRouteNum: number): VifPeer {
        this['receive_route_num'] = receiveRouteNum;
        return this;
    }
    public set receiveRouteNum(receiveRouteNum: number  | undefined) {
        this['receive_route_num'] = receiveRouteNum;
    }
    public get receiveRouteNum(): number | undefined {
        return this['receive_route_num'];
    }
    public withEnableNqa(enableNqa: boolean): VifPeer {
        this['enable_nqa'] = enableNqa;
        return this;
    }
    public set enableNqa(enableNqa: boolean  | undefined) {
        this['enable_nqa'] = enableNqa;
    }
    public get enableNqa(): boolean | undefined {
        return this['enable_nqa'];
    }
    public withEnableBfd(enableBfd: boolean): VifPeer {
        this['enable_bfd'] = enableBfd;
        return this;
    }
    public set enableBfd(enableBfd: boolean  | undefined) {
        this['enable_bfd'] = enableBfd;
    }
    public get enableBfd(): boolean | undefined {
        return this['enable_bfd'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VifPeerRouteModeEnum {
    BGP = 'bgp',
    STATIC = 'static'
}
