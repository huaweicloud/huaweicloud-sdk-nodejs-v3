

export class CreateVifPeer {
    public name?: string;
    public description?: string;
    private 'address_family'?: string;
    private 'local_gateway_ip'?: string;
    private 'remote_gateway_ip'?: string;
    private 'route_mode'?: CreateVifPeerRouteModeEnum | string;
    private 'bgp_asn'?: number;
    private 'bgp_md5'?: string;
    private 'remote_ep_group'?: Array<string>;
    private 'vif_id'?: string;
    public constructor() { 
    }
    public withName(name: string): CreateVifPeer {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateVifPeer {
        this['description'] = description;
        return this;
    }
    public withAddressFamily(addressFamily: string): CreateVifPeer {
        this['address_family'] = addressFamily;
        return this;
    }
    public set addressFamily(addressFamily: string  | undefined) {
        this['address_family'] = addressFamily;
    }
    public get addressFamily(): string | undefined {
        return this['address_family'];
    }
    public withLocalGatewayIp(localGatewayIp: string): CreateVifPeer {
        this['local_gateway_ip'] = localGatewayIp;
        return this;
    }
    public set localGatewayIp(localGatewayIp: string  | undefined) {
        this['local_gateway_ip'] = localGatewayIp;
    }
    public get localGatewayIp(): string | undefined {
        return this['local_gateway_ip'];
    }
    public withRemoteGatewayIp(remoteGatewayIp: string): CreateVifPeer {
        this['remote_gateway_ip'] = remoteGatewayIp;
        return this;
    }
    public set remoteGatewayIp(remoteGatewayIp: string  | undefined) {
        this['remote_gateway_ip'] = remoteGatewayIp;
    }
    public get remoteGatewayIp(): string | undefined {
        return this['remote_gateway_ip'];
    }
    public withRouteMode(routeMode: CreateVifPeerRouteModeEnum | string): CreateVifPeer {
        this['route_mode'] = routeMode;
        return this;
    }
    public set routeMode(routeMode: CreateVifPeerRouteModeEnum | string  | undefined) {
        this['route_mode'] = routeMode;
    }
    public get routeMode(): CreateVifPeerRouteModeEnum | string | undefined {
        return this['route_mode'];
    }
    public withBgpAsn(bgpAsn: number): CreateVifPeer {
        this['bgp_asn'] = bgpAsn;
        return this;
    }
    public set bgpAsn(bgpAsn: number  | undefined) {
        this['bgp_asn'] = bgpAsn;
    }
    public get bgpAsn(): number | undefined {
        return this['bgp_asn'];
    }
    public withBgpMd5(bgpMd5: string): CreateVifPeer {
        this['bgp_md5'] = bgpMd5;
        return this;
    }
    public set bgpMd5(bgpMd5: string  | undefined) {
        this['bgp_md5'] = bgpMd5;
    }
    public get bgpMd5(): string | undefined {
        return this['bgp_md5'];
    }
    public withRemoteEpGroup(remoteEpGroup: Array<string>): CreateVifPeer {
        this['remote_ep_group'] = remoteEpGroup;
        return this;
    }
    public set remoteEpGroup(remoteEpGroup: Array<string>  | undefined) {
        this['remote_ep_group'] = remoteEpGroup;
    }
    public get remoteEpGroup(): Array<string> | undefined {
        return this['remote_ep_group'];
    }
    public withVifId(vifId: string): CreateVifPeer {
        this['vif_id'] = vifId;
        return this;
    }
    public set vifId(vifId: string  | undefined) {
        this['vif_id'] = vifId;
    }
    public get vifId(): string | undefined {
        return this['vif_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateVifPeerRouteModeEnum {
    BGP = 'bgp',
    STATIC = 'static'
}
