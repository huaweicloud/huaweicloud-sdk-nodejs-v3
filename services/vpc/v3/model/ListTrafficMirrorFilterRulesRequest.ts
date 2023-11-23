

export class ListTrafficMirrorFilterRulesRequest {
    public id?: string;
    public description?: string;
    private 'traffic_mirror_filter_id'?: string;
    public direction?: string;
    public protocol?: string;
    private 'source_cidr_block'?: string;
    private 'destination_cidr_block'?: string;
    private 'source_port_range'?: string;
    private 'destination_port_range'?: string;
    public action?: string;
    public priority?: string;
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withId(id: string): ListTrafficMirrorFilterRulesRequest {
        this['id'] = id;
        return this;
    }
    public withDescription(description: string): ListTrafficMirrorFilterRulesRequest {
        this['description'] = description;
        return this;
    }
    public withTrafficMirrorFilterId(trafficMirrorFilterId: string): ListTrafficMirrorFilterRulesRequest {
        this['traffic_mirror_filter_id'] = trafficMirrorFilterId;
        return this;
    }
    public set trafficMirrorFilterId(trafficMirrorFilterId: string  | undefined) {
        this['traffic_mirror_filter_id'] = trafficMirrorFilterId;
    }
    public get trafficMirrorFilterId(): string | undefined {
        return this['traffic_mirror_filter_id'];
    }
    public withDirection(direction: string): ListTrafficMirrorFilterRulesRequest {
        this['direction'] = direction;
        return this;
    }
    public withProtocol(protocol: string): ListTrafficMirrorFilterRulesRequest {
        this['protocol'] = protocol;
        return this;
    }
    public withSourceCidrBlock(sourceCidrBlock: string): ListTrafficMirrorFilterRulesRequest {
        this['source_cidr_block'] = sourceCidrBlock;
        return this;
    }
    public set sourceCidrBlock(sourceCidrBlock: string  | undefined) {
        this['source_cidr_block'] = sourceCidrBlock;
    }
    public get sourceCidrBlock(): string | undefined {
        return this['source_cidr_block'];
    }
    public withDestinationCidrBlock(destinationCidrBlock: string): ListTrafficMirrorFilterRulesRequest {
        this['destination_cidr_block'] = destinationCidrBlock;
        return this;
    }
    public set destinationCidrBlock(destinationCidrBlock: string  | undefined) {
        this['destination_cidr_block'] = destinationCidrBlock;
    }
    public get destinationCidrBlock(): string | undefined {
        return this['destination_cidr_block'];
    }
    public withSourcePortRange(sourcePortRange: string): ListTrafficMirrorFilterRulesRequest {
        this['source_port_range'] = sourcePortRange;
        return this;
    }
    public set sourcePortRange(sourcePortRange: string  | undefined) {
        this['source_port_range'] = sourcePortRange;
    }
    public get sourcePortRange(): string | undefined {
        return this['source_port_range'];
    }
    public withDestinationPortRange(destinationPortRange: string): ListTrafficMirrorFilterRulesRequest {
        this['destination_port_range'] = destinationPortRange;
        return this;
    }
    public set destinationPortRange(destinationPortRange: string  | undefined) {
        this['destination_port_range'] = destinationPortRange;
    }
    public get destinationPortRange(): string | undefined {
        return this['destination_port_range'];
    }
    public withAction(action: string): ListTrafficMirrorFilterRulesRequest {
        this['action'] = action;
        return this;
    }
    public withPriority(priority: string): ListTrafficMirrorFilterRulesRequest {
        this['priority'] = priority;
        return this;
    }
    public withLimit(limit: number): ListTrafficMirrorFilterRulesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListTrafficMirrorFilterRulesRequest {
        this['marker'] = marker;
        return this;
    }
}