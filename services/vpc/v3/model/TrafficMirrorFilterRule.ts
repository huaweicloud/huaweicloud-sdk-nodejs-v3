

export class TrafficMirrorFilterRule {
    public id?: string;
    private 'project_id'?: string;
    public description?: string;
    private 'traffic_mirror_filter_id'?: string;
    public direction?: string;
    private 'source_cidr_block'?: string;
    private 'destination_cidr_block'?: string;
    private 'source_port_range'?: string;
    private 'destination_port_range'?: string;
    public ethertype?: string;
    public protocol?: string;
    public action?: string;
    public priority?: number;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public constructor(id?: string, projectId?: string, description?: string, trafficMirrorFilterId?: string, direction?: string, sourceCidrBlock?: string, destinationCidrBlock?: string, sourcePortRange?: string, destinationPortRange?: string, ethertype?: string, protocol?: string, action?: string, priority?: number, createdAt?: Date, updatedAt?: Date) { 
        this['id'] = id;
        this['project_id'] = projectId;
        this['description'] = description;
        this['traffic_mirror_filter_id'] = trafficMirrorFilterId;
        this['direction'] = direction;
        this['source_cidr_block'] = sourceCidrBlock;
        this['destination_cidr_block'] = destinationCidrBlock;
        this['source_port_range'] = sourcePortRange;
        this['destination_port_range'] = destinationPortRange;
        this['ethertype'] = ethertype;
        this['protocol'] = protocol;
        this['action'] = action;
        this['priority'] = priority;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
    }
    public withId(id: string): TrafficMirrorFilterRule {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): TrafficMirrorFilterRule {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withDescription(description: string): TrafficMirrorFilterRule {
        this['description'] = description;
        return this;
    }
    public withTrafficMirrorFilterId(trafficMirrorFilterId: string): TrafficMirrorFilterRule {
        this['traffic_mirror_filter_id'] = trafficMirrorFilterId;
        return this;
    }
    public set trafficMirrorFilterId(trafficMirrorFilterId: string  | undefined) {
        this['traffic_mirror_filter_id'] = trafficMirrorFilterId;
    }
    public get trafficMirrorFilterId(): string | undefined {
        return this['traffic_mirror_filter_id'];
    }
    public withDirection(direction: string): TrafficMirrorFilterRule {
        this['direction'] = direction;
        return this;
    }
    public withSourceCidrBlock(sourceCidrBlock: string): TrafficMirrorFilterRule {
        this['source_cidr_block'] = sourceCidrBlock;
        return this;
    }
    public set sourceCidrBlock(sourceCidrBlock: string  | undefined) {
        this['source_cidr_block'] = sourceCidrBlock;
    }
    public get sourceCidrBlock(): string | undefined {
        return this['source_cidr_block'];
    }
    public withDestinationCidrBlock(destinationCidrBlock: string): TrafficMirrorFilterRule {
        this['destination_cidr_block'] = destinationCidrBlock;
        return this;
    }
    public set destinationCidrBlock(destinationCidrBlock: string  | undefined) {
        this['destination_cidr_block'] = destinationCidrBlock;
    }
    public get destinationCidrBlock(): string | undefined {
        return this['destination_cidr_block'];
    }
    public withSourcePortRange(sourcePortRange: string): TrafficMirrorFilterRule {
        this['source_port_range'] = sourcePortRange;
        return this;
    }
    public set sourcePortRange(sourcePortRange: string  | undefined) {
        this['source_port_range'] = sourcePortRange;
    }
    public get sourcePortRange(): string | undefined {
        return this['source_port_range'];
    }
    public withDestinationPortRange(destinationPortRange: string): TrafficMirrorFilterRule {
        this['destination_port_range'] = destinationPortRange;
        return this;
    }
    public set destinationPortRange(destinationPortRange: string  | undefined) {
        this['destination_port_range'] = destinationPortRange;
    }
    public get destinationPortRange(): string | undefined {
        return this['destination_port_range'];
    }
    public withEthertype(ethertype: string): TrafficMirrorFilterRule {
        this['ethertype'] = ethertype;
        return this;
    }
    public withProtocol(protocol: string): TrafficMirrorFilterRule {
        this['protocol'] = protocol;
        return this;
    }
    public withAction(action: string): TrafficMirrorFilterRule {
        this['action'] = action;
        return this;
    }
    public withPriority(priority: number): TrafficMirrorFilterRule {
        this['priority'] = priority;
        return this;
    }
    public withCreatedAt(createdAt: Date): TrafficMirrorFilterRule {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): TrafficMirrorFilterRule {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
}