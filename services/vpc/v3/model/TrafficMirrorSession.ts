

export class TrafficMirrorSession {
    public id?: string;
    private 'project_id'?: string;
    public name?: string;
    public description?: string;
    private 'traffic_mirror_filter_id'?: string;
    private 'traffic_mirror_sources'?: Array<string>;
    private 'traffic_mirror_target_id'?: string;
    private 'traffic_mirror_target_type'?: string;
    private 'virtual_network_id'?: number;
    private 'packet_length'?: number;
    public priority?: number;
    public enabled?: boolean;
    public type?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public constructor(id?: string, projectId?: string, name?: string, description?: string, trafficMirrorFilterId?: string, trafficMirrorSources?: Array<string>, trafficMirrorTargetId?: string, trafficMirrorTargetType?: string, virtualNetworkId?: number, packetLength?: number, priority?: number, enabled?: boolean, type?: string, createdAt?: string, updatedAt?: string) { 
        this['id'] = id;
        this['project_id'] = projectId;
        this['name'] = name;
        this['description'] = description;
        this['traffic_mirror_filter_id'] = trafficMirrorFilterId;
        this['traffic_mirror_sources'] = trafficMirrorSources;
        this['traffic_mirror_target_id'] = trafficMirrorTargetId;
        this['traffic_mirror_target_type'] = trafficMirrorTargetType;
        this['virtual_network_id'] = virtualNetworkId;
        this['packet_length'] = packetLength;
        this['priority'] = priority;
        this['enabled'] = enabled;
        this['type'] = type;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
    }
    public withId(id: string): TrafficMirrorSession {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): TrafficMirrorSession {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withName(name: string): TrafficMirrorSession {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): TrafficMirrorSession {
        this['description'] = description;
        return this;
    }
    public withTrafficMirrorFilterId(trafficMirrorFilterId: string): TrafficMirrorSession {
        this['traffic_mirror_filter_id'] = trafficMirrorFilterId;
        return this;
    }
    public set trafficMirrorFilterId(trafficMirrorFilterId: string  | undefined) {
        this['traffic_mirror_filter_id'] = trafficMirrorFilterId;
    }
    public get trafficMirrorFilterId(): string | undefined {
        return this['traffic_mirror_filter_id'];
    }
    public withTrafficMirrorSources(trafficMirrorSources: Array<string>): TrafficMirrorSession {
        this['traffic_mirror_sources'] = trafficMirrorSources;
        return this;
    }
    public set trafficMirrorSources(trafficMirrorSources: Array<string>  | undefined) {
        this['traffic_mirror_sources'] = trafficMirrorSources;
    }
    public get trafficMirrorSources(): Array<string> | undefined {
        return this['traffic_mirror_sources'];
    }
    public withTrafficMirrorTargetId(trafficMirrorTargetId: string): TrafficMirrorSession {
        this['traffic_mirror_target_id'] = trafficMirrorTargetId;
        return this;
    }
    public set trafficMirrorTargetId(trafficMirrorTargetId: string  | undefined) {
        this['traffic_mirror_target_id'] = trafficMirrorTargetId;
    }
    public get trafficMirrorTargetId(): string | undefined {
        return this['traffic_mirror_target_id'];
    }
    public withTrafficMirrorTargetType(trafficMirrorTargetType: string): TrafficMirrorSession {
        this['traffic_mirror_target_type'] = trafficMirrorTargetType;
        return this;
    }
    public set trafficMirrorTargetType(trafficMirrorTargetType: string  | undefined) {
        this['traffic_mirror_target_type'] = trafficMirrorTargetType;
    }
    public get trafficMirrorTargetType(): string | undefined {
        return this['traffic_mirror_target_type'];
    }
    public withVirtualNetworkId(virtualNetworkId: number): TrafficMirrorSession {
        this['virtual_network_id'] = virtualNetworkId;
        return this;
    }
    public set virtualNetworkId(virtualNetworkId: number  | undefined) {
        this['virtual_network_id'] = virtualNetworkId;
    }
    public get virtualNetworkId(): number | undefined {
        return this['virtual_network_id'];
    }
    public withPacketLength(packetLength: number): TrafficMirrorSession {
        this['packet_length'] = packetLength;
        return this;
    }
    public set packetLength(packetLength: number  | undefined) {
        this['packet_length'] = packetLength;
    }
    public get packetLength(): number | undefined {
        return this['packet_length'];
    }
    public withPriority(priority: number): TrafficMirrorSession {
        this['priority'] = priority;
        return this;
    }
    public withEnabled(enabled: boolean): TrafficMirrorSession {
        this['enabled'] = enabled;
        return this;
    }
    public withType(type: string): TrafficMirrorSession {
        this['type'] = type;
        return this;
    }
    public withCreatedAt(createdAt: string): TrafficMirrorSession {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): TrafficMirrorSession {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
}