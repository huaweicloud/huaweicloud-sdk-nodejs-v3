

export class CreateTrafficMirrorFilterRuleOption {
    public description?: string;
    private 'traffic_mirror_filter_id'?: string;
    public direction?: string;
    public protocol?: string;
    public ethertype?: string;
    private 'source_cidr_block'?: string;
    private 'destination_cidr_block'?: string;
    private 'source_port_range'?: string;
    private 'destination_port_range'?: string;
    public action?: string;
    public priority?: number;
    public constructor(trafficMirrorFilterId?: string, direction?: string, protocol?: string, ethertype?: string, action?: string, priority?: number) { 
        this['traffic_mirror_filter_id'] = trafficMirrorFilterId;
        this['direction'] = direction;
        this['protocol'] = protocol;
        this['ethertype'] = ethertype;
        this['action'] = action;
        this['priority'] = priority;
    }
    public withDescription(description: string): CreateTrafficMirrorFilterRuleOption {
        this['description'] = description;
        return this;
    }
    public withTrafficMirrorFilterId(trafficMirrorFilterId: string): CreateTrafficMirrorFilterRuleOption {
        this['traffic_mirror_filter_id'] = trafficMirrorFilterId;
        return this;
    }
    public set trafficMirrorFilterId(trafficMirrorFilterId: string  | undefined) {
        this['traffic_mirror_filter_id'] = trafficMirrorFilterId;
    }
    public get trafficMirrorFilterId(): string | undefined {
        return this['traffic_mirror_filter_id'];
    }
    public withDirection(direction: string): CreateTrafficMirrorFilterRuleOption {
        this['direction'] = direction;
        return this;
    }
    public withProtocol(protocol: string): CreateTrafficMirrorFilterRuleOption {
        this['protocol'] = protocol;
        return this;
    }
    public withEthertype(ethertype: string): CreateTrafficMirrorFilterRuleOption {
        this['ethertype'] = ethertype;
        return this;
    }
    public withSourceCidrBlock(sourceCidrBlock: string): CreateTrafficMirrorFilterRuleOption {
        this['source_cidr_block'] = sourceCidrBlock;
        return this;
    }
    public set sourceCidrBlock(sourceCidrBlock: string  | undefined) {
        this['source_cidr_block'] = sourceCidrBlock;
    }
    public get sourceCidrBlock(): string | undefined {
        return this['source_cidr_block'];
    }
    public withDestinationCidrBlock(destinationCidrBlock: string): CreateTrafficMirrorFilterRuleOption {
        this['destination_cidr_block'] = destinationCidrBlock;
        return this;
    }
    public set destinationCidrBlock(destinationCidrBlock: string  | undefined) {
        this['destination_cidr_block'] = destinationCidrBlock;
    }
    public get destinationCidrBlock(): string | undefined {
        return this['destination_cidr_block'];
    }
    public withSourcePortRange(sourcePortRange: string): CreateTrafficMirrorFilterRuleOption {
        this['source_port_range'] = sourcePortRange;
        return this;
    }
    public set sourcePortRange(sourcePortRange: string  | undefined) {
        this['source_port_range'] = sourcePortRange;
    }
    public get sourcePortRange(): string | undefined {
        return this['source_port_range'];
    }
    public withDestinationPortRange(destinationPortRange: string): CreateTrafficMirrorFilterRuleOption {
        this['destination_port_range'] = destinationPortRange;
        return this;
    }
    public set destinationPortRange(destinationPortRange: string  | undefined) {
        this['destination_port_range'] = destinationPortRange;
    }
    public get destinationPortRange(): string | undefined {
        return this['destination_port_range'];
    }
    public withAction(action: string): CreateTrafficMirrorFilterRuleOption {
        this['action'] = action;
        return this;
    }
    public withPriority(priority: number): CreateTrafficMirrorFilterRuleOption {
        this['priority'] = priority;
        return this;
    }
}