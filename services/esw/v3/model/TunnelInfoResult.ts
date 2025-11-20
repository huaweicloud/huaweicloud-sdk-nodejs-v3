

export class TunnelInfoResult {
    private 'vpc_id'?: string;
    private 'virsubnet_id'?: string;
    private 'tunnel_ip'?: string;
    private 'tunnel_port'?: number;
    private 'tunnel_type'?: string;
    public constructor(vpcId?: string, virsubnetId?: string, tunnelIp?: string, tunnelPort?: number, tunnelType?: string) { 
        this['vpc_id'] = vpcId;
        this['virsubnet_id'] = virsubnetId;
        this['tunnel_ip'] = tunnelIp;
        this['tunnel_port'] = tunnelPort;
        this['tunnel_type'] = tunnelType;
    }
    public withVpcId(vpcId: string): TunnelInfoResult {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withVirsubnetId(virsubnetId: string): TunnelInfoResult {
        this['virsubnet_id'] = virsubnetId;
        return this;
    }
    public set virsubnetId(virsubnetId: string  | undefined) {
        this['virsubnet_id'] = virsubnetId;
    }
    public get virsubnetId(): string | undefined {
        return this['virsubnet_id'];
    }
    public withTunnelIp(tunnelIp: string): TunnelInfoResult {
        this['tunnel_ip'] = tunnelIp;
        return this;
    }
    public set tunnelIp(tunnelIp: string  | undefined) {
        this['tunnel_ip'] = tunnelIp;
    }
    public get tunnelIp(): string | undefined {
        return this['tunnel_ip'];
    }
    public withTunnelPort(tunnelPort: number): TunnelInfoResult {
        this['tunnel_port'] = tunnelPort;
        return this;
    }
    public set tunnelPort(tunnelPort: number  | undefined) {
        this['tunnel_port'] = tunnelPort;
    }
    public get tunnelPort(): number | undefined {
        return this['tunnel_port'];
    }
    public withTunnelType(tunnelType: string): TunnelInfoResult {
        this['tunnel_type'] = tunnelType;
        return this;
    }
    public set tunnelType(tunnelType: string  | undefined) {
        this['tunnel_type'] = tunnelType;
    }
    public get tunnelType(): string | undefined {
        return this['tunnel_type'];
    }
}