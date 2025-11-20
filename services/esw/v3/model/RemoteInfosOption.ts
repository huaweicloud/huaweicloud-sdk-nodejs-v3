

export class RemoteInfosOption {
    private 'segmentation_id'?: number;
    private 'tunnel_ip'?: string;
    private 'tunnel_port'?: number;
    public constructor(segmentationId?: number, tunnelIp?: string) { 
        this['segmentation_id'] = segmentationId;
        this['tunnel_ip'] = tunnelIp;
    }
    public withSegmentationId(segmentationId: number): RemoteInfosOption {
        this['segmentation_id'] = segmentationId;
        return this;
    }
    public set segmentationId(segmentationId: number  | undefined) {
        this['segmentation_id'] = segmentationId;
    }
    public get segmentationId(): number | undefined {
        return this['segmentation_id'];
    }
    public withTunnelIp(tunnelIp: string): RemoteInfosOption {
        this['tunnel_ip'] = tunnelIp;
        return this;
    }
    public set tunnelIp(tunnelIp: string  | undefined) {
        this['tunnel_ip'] = tunnelIp;
    }
    public get tunnelIp(): string | undefined {
        return this['tunnel_ip'];
    }
    public withTunnelPort(tunnelPort: number): RemoteInfosOption {
        this['tunnel_port'] = tunnelPort;
        return this;
    }
    public set tunnelPort(tunnelPort: number  | undefined) {
        this['tunnel_port'] = tunnelPort;
    }
    public get tunnelPort(): number | undefined {
        return this['tunnel_port'];
    }
}