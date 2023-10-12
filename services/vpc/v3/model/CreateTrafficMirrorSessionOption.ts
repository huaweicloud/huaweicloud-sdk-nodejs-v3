

export class CreateTrafficMirrorSessionOption {
    public name?: string;
    public description?: string;
    private 'traffic_mirror_filter_id'?: string;
    private 'traffic_mirror_sources'?: Array<string>;
    private 'traffic_mirror_target_id'?: string;
    private 'traffic_mirror_target_type'?: string;
    private 'virtual_network_id'?: string;
    private 'packet_length'?: string;
    public priority?: number;
    public enabled?: string;
    public type?: string;
    public constructor(name?: string, trafficMirrorFilterId?: string, trafficMirrorSources?: Array<string>, trafficMirrorTargetId?: string, trafficMirrorTargetType?: string, priority?: number) { 
        this['name'] = name;
        this['traffic_mirror_filter_id'] = trafficMirrorFilterId;
        this['traffic_mirror_sources'] = trafficMirrorSources;
        this['traffic_mirror_target_id'] = trafficMirrorTargetId;
        this['traffic_mirror_target_type'] = trafficMirrorTargetType;
        this['priority'] = priority;
    }
    public withName(name: string): CreateTrafficMirrorSessionOption {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateTrafficMirrorSessionOption {
        this['description'] = description;
        return this;
    }
    public withTrafficMirrorFilterId(trafficMirrorFilterId: string): CreateTrafficMirrorSessionOption {
        this['traffic_mirror_filter_id'] = trafficMirrorFilterId;
        return this;
    }
    public set trafficMirrorFilterId(trafficMirrorFilterId: string  | undefined) {
        this['traffic_mirror_filter_id'] = trafficMirrorFilterId;
    }
    public get trafficMirrorFilterId(): string | undefined {
        return this['traffic_mirror_filter_id'];
    }
    public withTrafficMirrorSources(trafficMirrorSources: Array<string>): CreateTrafficMirrorSessionOption {
        this['traffic_mirror_sources'] = trafficMirrorSources;
        return this;
    }
    public set trafficMirrorSources(trafficMirrorSources: Array<string>  | undefined) {
        this['traffic_mirror_sources'] = trafficMirrorSources;
    }
    public get trafficMirrorSources(): Array<string> | undefined {
        return this['traffic_mirror_sources'];
    }
    public withTrafficMirrorTargetId(trafficMirrorTargetId: string): CreateTrafficMirrorSessionOption {
        this['traffic_mirror_target_id'] = trafficMirrorTargetId;
        return this;
    }
    public set trafficMirrorTargetId(trafficMirrorTargetId: string  | undefined) {
        this['traffic_mirror_target_id'] = trafficMirrorTargetId;
    }
    public get trafficMirrorTargetId(): string | undefined {
        return this['traffic_mirror_target_id'];
    }
    public withTrafficMirrorTargetType(trafficMirrorTargetType: string): CreateTrafficMirrorSessionOption {
        this['traffic_mirror_target_type'] = trafficMirrorTargetType;
        return this;
    }
    public set trafficMirrorTargetType(trafficMirrorTargetType: string  | undefined) {
        this['traffic_mirror_target_type'] = trafficMirrorTargetType;
    }
    public get trafficMirrorTargetType(): string | undefined {
        return this['traffic_mirror_target_type'];
    }
    public withVirtualNetworkId(virtualNetworkId: string): CreateTrafficMirrorSessionOption {
        this['virtual_network_id'] = virtualNetworkId;
        return this;
    }
    public set virtualNetworkId(virtualNetworkId: string  | undefined) {
        this['virtual_network_id'] = virtualNetworkId;
    }
    public get virtualNetworkId(): string | undefined {
        return this['virtual_network_id'];
    }
    public withPacketLength(packetLength: string): CreateTrafficMirrorSessionOption {
        this['packet_length'] = packetLength;
        return this;
    }
    public set packetLength(packetLength: string  | undefined) {
        this['packet_length'] = packetLength;
    }
    public get packetLength(): string | undefined {
        return this['packet_length'];
    }
    public withPriority(priority: number): CreateTrafficMirrorSessionOption {
        this['priority'] = priority;
        return this;
    }
    public withEnabled(enabled: string): CreateTrafficMirrorSessionOption {
        this['enabled'] = enabled;
        return this;
    }
    public withType(type: string): CreateTrafficMirrorSessionOption {
        this['type'] = type;
        return this;
    }
}