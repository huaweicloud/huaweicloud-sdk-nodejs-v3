

export class ListTrafficMirrorSessionsRequest {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'traffic_mirror_filter_id'?: string;
    private 'traffic_mirror_target_id'?: string;
    private 'traffic_mirror_target_type'?: string;
    private 'virtual_network_id'?: string;
    private 'packet_length'?: string;
    public priority?: string;
    public enabled?: string;
    public type?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withId(id: string): ListTrafficMirrorSessionsRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListTrafficMirrorSessionsRequest {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ListTrafficMirrorSessionsRequest {
        this['description'] = description;
        return this;
    }
    public withTrafficMirrorFilterId(trafficMirrorFilterId: string): ListTrafficMirrorSessionsRequest {
        this['traffic_mirror_filter_id'] = trafficMirrorFilterId;
        return this;
    }
    public set trafficMirrorFilterId(trafficMirrorFilterId: string  | undefined) {
        this['traffic_mirror_filter_id'] = trafficMirrorFilterId;
    }
    public get trafficMirrorFilterId(): string | undefined {
        return this['traffic_mirror_filter_id'];
    }
    public withTrafficMirrorTargetId(trafficMirrorTargetId: string): ListTrafficMirrorSessionsRequest {
        this['traffic_mirror_target_id'] = trafficMirrorTargetId;
        return this;
    }
    public set trafficMirrorTargetId(trafficMirrorTargetId: string  | undefined) {
        this['traffic_mirror_target_id'] = trafficMirrorTargetId;
    }
    public get trafficMirrorTargetId(): string | undefined {
        return this['traffic_mirror_target_id'];
    }
    public withTrafficMirrorTargetType(trafficMirrorTargetType: string): ListTrafficMirrorSessionsRequest {
        this['traffic_mirror_target_type'] = trafficMirrorTargetType;
        return this;
    }
    public set trafficMirrorTargetType(trafficMirrorTargetType: string  | undefined) {
        this['traffic_mirror_target_type'] = trafficMirrorTargetType;
    }
    public get trafficMirrorTargetType(): string | undefined {
        return this['traffic_mirror_target_type'];
    }
    public withVirtualNetworkId(virtualNetworkId: string): ListTrafficMirrorSessionsRequest {
        this['virtual_network_id'] = virtualNetworkId;
        return this;
    }
    public set virtualNetworkId(virtualNetworkId: string  | undefined) {
        this['virtual_network_id'] = virtualNetworkId;
    }
    public get virtualNetworkId(): string | undefined {
        return this['virtual_network_id'];
    }
    public withPacketLength(packetLength: string): ListTrafficMirrorSessionsRequest {
        this['packet_length'] = packetLength;
        return this;
    }
    public set packetLength(packetLength: string  | undefined) {
        this['packet_length'] = packetLength;
    }
    public get packetLength(): string | undefined {
        return this['packet_length'];
    }
    public withPriority(priority: string): ListTrafficMirrorSessionsRequest {
        this['priority'] = priority;
        return this;
    }
    public withEnabled(enabled: string): ListTrafficMirrorSessionsRequest {
        this['enabled'] = enabled;
        return this;
    }
    public withType(type: string): ListTrafficMirrorSessionsRequest {
        this['type'] = type;
        return this;
    }
    public withCreatedAt(createdAt: string): ListTrafficMirrorSessionsRequest {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ListTrafficMirrorSessionsRequest {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withLimit(limit: number): ListTrafficMirrorSessionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListTrafficMirrorSessionsRequest {
        this['marker'] = marker;
        return this;
    }
}