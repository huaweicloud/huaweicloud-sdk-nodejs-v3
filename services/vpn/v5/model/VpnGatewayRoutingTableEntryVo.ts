import { NexthopResourceVo } from './NexthopResourceVo';


export class VpnGatewayRoutingTableEntryVo {
    public destination?: string;
    public nexthop?: string;
    private 'outbound_interface_ip'?: string;
    public origin?: string;
    private 'as_path'?: string;
    public med?: number;
    private 'nexthop_resource'?: NexthopResourceVo;
    public constructor() { 
    }
    public withDestination(destination: string): VpnGatewayRoutingTableEntryVo {
        this['destination'] = destination;
        return this;
    }
    public withNexthop(nexthop: string): VpnGatewayRoutingTableEntryVo {
        this['nexthop'] = nexthop;
        return this;
    }
    public withOutboundInterfaceIp(outboundInterfaceIp: string): VpnGatewayRoutingTableEntryVo {
        this['outbound_interface_ip'] = outboundInterfaceIp;
        return this;
    }
    public set outboundInterfaceIp(outboundInterfaceIp: string  | undefined) {
        this['outbound_interface_ip'] = outboundInterfaceIp;
    }
    public get outboundInterfaceIp(): string | undefined {
        return this['outbound_interface_ip'];
    }
    public withOrigin(origin: string): VpnGatewayRoutingTableEntryVo {
        this['origin'] = origin;
        return this;
    }
    public withAsPath(asPath: string): VpnGatewayRoutingTableEntryVo {
        this['as_path'] = asPath;
        return this;
    }
    public set asPath(asPath: string  | undefined) {
        this['as_path'] = asPath;
    }
    public get asPath(): string | undefined {
        return this['as_path'];
    }
    public withMed(med: number): VpnGatewayRoutingTableEntryVo {
        this['med'] = med;
        return this;
    }
    public withNexthopResource(nexthopResource: NexthopResourceVo): VpnGatewayRoutingTableEntryVo {
        this['nexthop_resource'] = nexthopResource;
        return this;
    }
    public set nexthopResource(nexthopResource: NexthopResourceVo  | undefined) {
        this['nexthop_resource'] = nexthopResource;
    }
    public get nexthopResource(): NexthopResourceVo | undefined {
        return this['nexthop_resource'];
    }
}