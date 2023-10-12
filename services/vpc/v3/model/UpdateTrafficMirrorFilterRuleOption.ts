

export class UpdateTrafficMirrorFilterRuleOption {
    public description?: string;
    public protocol?: string;
    public ethertype?: string;
    private 'source_cidr_block'?: string;
    private 'destination_cidr_block'?: string;
    private 'source_port_range'?: string;
    private 'destination_port_range'?: string;
    public priority?: number;
    public action?: string;
    public constructor() { 
    }
    public withDescription(description: string): UpdateTrafficMirrorFilterRuleOption {
        this['description'] = description;
        return this;
    }
    public withProtocol(protocol: string): UpdateTrafficMirrorFilterRuleOption {
        this['protocol'] = protocol;
        return this;
    }
    public withEthertype(ethertype: string): UpdateTrafficMirrorFilterRuleOption {
        this['ethertype'] = ethertype;
        return this;
    }
    public withSourceCidrBlock(sourceCidrBlock: string): UpdateTrafficMirrorFilterRuleOption {
        this['source_cidr_block'] = sourceCidrBlock;
        return this;
    }
    public set sourceCidrBlock(sourceCidrBlock: string  | undefined) {
        this['source_cidr_block'] = sourceCidrBlock;
    }
    public get sourceCidrBlock(): string | undefined {
        return this['source_cidr_block'];
    }
    public withDestinationCidrBlock(destinationCidrBlock: string): UpdateTrafficMirrorFilterRuleOption {
        this['destination_cidr_block'] = destinationCidrBlock;
        return this;
    }
    public set destinationCidrBlock(destinationCidrBlock: string  | undefined) {
        this['destination_cidr_block'] = destinationCidrBlock;
    }
    public get destinationCidrBlock(): string | undefined {
        return this['destination_cidr_block'];
    }
    public withSourcePortRange(sourcePortRange: string): UpdateTrafficMirrorFilterRuleOption {
        this['source_port_range'] = sourcePortRange;
        return this;
    }
    public set sourcePortRange(sourcePortRange: string  | undefined) {
        this['source_port_range'] = sourcePortRange;
    }
    public get sourcePortRange(): string | undefined {
        return this['source_port_range'];
    }
    public withDestinationPortRange(destinationPortRange: string): UpdateTrafficMirrorFilterRuleOption {
        this['destination_port_range'] = destinationPortRange;
        return this;
    }
    public set destinationPortRange(destinationPortRange: string  | undefined) {
        this['destination_port_range'] = destinationPortRange;
    }
    public get destinationPortRange(): string | undefined {
        return this['destination_port_range'];
    }
    public withPriority(priority: number): UpdateTrafficMirrorFilterRuleOption {
        this['priority'] = priority;
        return this;
    }
    public withAction(action: string): UpdateTrafficMirrorFilterRuleOption {
        this['action'] = action;
        return this;
    }
}