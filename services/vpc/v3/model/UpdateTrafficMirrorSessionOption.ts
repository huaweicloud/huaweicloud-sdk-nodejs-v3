

export class UpdateTrafficMirrorSessionOption {
    public name?: string;
    public description?: string;
    private 'traffic_mirror_filter_id'?: string;
    private 'traffic_mirror_target_id'?: string;
    private 'traffic_mirror_target_type'?: string;
    private 'virtual_network_id'?: number;
    private 'packet_length'?: number;
    public priority?: number;
    public enabled?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateTrafficMirrorSessionOption {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateTrafficMirrorSessionOption {
        this['description'] = description;
        return this;
    }
    public withTrafficMirrorFilterId(trafficMirrorFilterId: string): UpdateTrafficMirrorSessionOption {
        this['traffic_mirror_filter_id'] = trafficMirrorFilterId;
        return this;
    }
    public set trafficMirrorFilterId(trafficMirrorFilterId: string  | undefined) {
        this['traffic_mirror_filter_id'] = trafficMirrorFilterId;
    }
    public get trafficMirrorFilterId(): string | undefined {
        return this['traffic_mirror_filter_id'];
    }
    public withTrafficMirrorTargetId(trafficMirrorTargetId: string): UpdateTrafficMirrorSessionOption {
        this['traffic_mirror_target_id'] = trafficMirrorTargetId;
        return this;
    }
    public set trafficMirrorTargetId(trafficMirrorTargetId: string  | undefined) {
        this['traffic_mirror_target_id'] = trafficMirrorTargetId;
    }
    public get trafficMirrorTargetId(): string | undefined {
        return this['traffic_mirror_target_id'];
    }
    public withTrafficMirrorTargetType(trafficMirrorTargetType: string): UpdateTrafficMirrorSessionOption {
        this['traffic_mirror_target_type'] = trafficMirrorTargetType;
        return this;
    }
    public set trafficMirrorTargetType(trafficMirrorTargetType: string  | undefined) {
        this['traffic_mirror_target_type'] = trafficMirrorTargetType;
    }
    public get trafficMirrorTargetType(): string | undefined {
        return this['traffic_mirror_target_type'];
    }
    public withVirtualNetworkId(virtualNetworkId: number): UpdateTrafficMirrorSessionOption {
        this['virtual_network_id'] = virtualNetworkId;
        return this;
    }
    public set virtualNetworkId(virtualNetworkId: number  | undefined) {
        this['virtual_network_id'] = virtualNetworkId;
    }
    public get virtualNetworkId(): number | undefined {
        return this['virtual_network_id'];
    }
    public withPacketLength(packetLength: number): UpdateTrafficMirrorSessionOption {
        this['packet_length'] = packetLength;
        return this;
    }
    public set packetLength(packetLength: number  | undefined) {
        this['packet_length'] = packetLength;
    }
    public get packetLength(): number | undefined {
        return this['packet_length'];
    }
    public withPriority(priority: number): UpdateTrafficMirrorSessionOption {
        this['priority'] = priority;
        return this;
    }
    public withEnabled(enabled: string): UpdateTrafficMirrorSessionOption {
        this['enabled'] = enabled;
        return this;
    }
}