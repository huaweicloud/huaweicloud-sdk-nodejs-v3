

export class RemoteInfosResult {
    private 'segmentation_id'?: number;
    private 'tunnel_ip'?: string;
    private 'tunnel_port'?: number;
    private 'tunnel_type'?: string;
    public constructor(segmentationId?: number, tunnelIp?: string, tunnelPort?: number, tunnelType?: string) { 
        this['segmentation_id'] = segmentationId;
        this['tunnel_ip'] = tunnelIp;
        this['tunnel_port'] = tunnelPort;
        this['tunnel_type'] = tunnelType;
    }
    public withSegmentationId(segmentationId: number): RemoteInfosResult {
        this['segmentation_id'] = segmentationId;
        return this;
    }
    public set segmentationId(segmentationId: number  | undefined) {
        this['segmentation_id'] = segmentationId;
    }
    public get segmentationId(): number | undefined {
        return this['segmentation_id'];
    }
    public withTunnelIp(tunnelIp: string): RemoteInfosResult {
        this['tunnel_ip'] = tunnelIp;
        return this;
    }
    public set tunnelIp(tunnelIp: string  | undefined) {
        this['tunnel_ip'] = tunnelIp;
    }
    public get tunnelIp(): string | undefined {
        return this['tunnel_ip'];
    }
    public withTunnelPort(tunnelPort: number): RemoteInfosResult {
        this['tunnel_port'] = tunnelPort;
        return this;
    }
    public set tunnelPort(tunnelPort: number  | undefined) {
        this['tunnel_port'] = tunnelPort;
    }
    public get tunnelPort(): number | undefined {
        return this['tunnel_port'];
    }
    public withTunnelType(tunnelType: string): RemoteInfosResult {
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