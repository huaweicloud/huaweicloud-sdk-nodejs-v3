

export class ShowLoadBalancerPortsRequest {
    private 'loadbalancer_id'?: string;
    private 'port_id'?: Array<string>;
    private 'ip_address'?: Array<string>;
    private 'ipv6_address'?: Array<string>;
    public type?: Array<string>;
    private 'virsubnet_id'?: Array<string>;
    public constructor(loadbalancerId?: string) { 
        this['loadbalancer_id'] = loadbalancerId;
    }
    public withLoadbalancerId(loadbalancerId: string): ShowLoadBalancerPortsRequest {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: string  | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId(): string | undefined {
        return this['loadbalancer_id'];
    }
    public withPortId(portId: Array<string>): ShowLoadBalancerPortsRequest {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: Array<string>  | undefined) {
        this['port_id'] = portId;
    }
    public get portId(): Array<string> | undefined {
        return this['port_id'];
    }
    public withIpAddress(ipAddress: Array<string>): ShowLoadBalancerPortsRequest {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: Array<string>  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): Array<string> | undefined {
        return this['ip_address'];
    }
    public withIpv6Address(ipv6Address: Array<string>): ShowLoadBalancerPortsRequest {
        this['ipv6_address'] = ipv6Address;
        return this;
    }
    public set ipv6Address(ipv6Address: Array<string>  | undefined) {
        this['ipv6_address'] = ipv6Address;
    }
    public get ipv6Address(): Array<string> | undefined {
        return this['ipv6_address'];
    }
    public withType(type: Array<string>): ShowLoadBalancerPortsRequest {
        this['type'] = type;
        return this;
    }
    public withVirsubnetId(virsubnetId: Array<string>): ShowLoadBalancerPortsRequest {
        this['virsubnet_id'] = virsubnetId;
        return this;
    }
    public set virsubnetId(virsubnetId: Array<string>  | undefined) {
        this['virsubnet_id'] = virsubnetId;
    }
    public get virsubnetId(): Array<string> | undefined {
        return this['virsubnet_id'];
    }
}