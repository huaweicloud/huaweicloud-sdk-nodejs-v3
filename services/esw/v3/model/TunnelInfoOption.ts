

export class TunnelInfoOption {
    private 'vpc_id'?: string;
    private 'virsubnet_id'?: string;
    private 'tunnel_ip'?: string;
    public constructor(vpcId?: string, virsubnetId?: string) { 
        this['vpc_id'] = vpcId;
        this['virsubnet_id'] = virsubnetId;
    }
    public withVpcId(vpcId: string): TunnelInfoOption {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withVirsubnetId(virsubnetId: string): TunnelInfoOption {
        this['virsubnet_id'] = virsubnetId;
        return this;
    }
    public set virsubnetId(virsubnetId: string  | undefined) {
        this['virsubnet_id'] = virsubnetId;
    }
    public get virsubnetId(): string | undefined {
        return this['virsubnet_id'];
    }
    public withTunnelIp(tunnelIp: string): TunnelInfoOption {
        this['tunnel_ip'] = tunnelIp;
        return this;
    }
    public set tunnelIp(tunnelIp: string  | undefined) {
        this['tunnel_ip'] = tunnelIp;
    }
    public get tunnelIp(): string | undefined {
        return this['tunnel_ip'];
    }
}