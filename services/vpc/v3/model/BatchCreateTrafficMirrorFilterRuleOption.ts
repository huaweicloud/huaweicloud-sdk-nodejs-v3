

export class BatchCreateTrafficMirrorFilterRuleOption {
    public description?: string;
    public direction?: string;
    public protocol?: string;
    public ethertype?: string;
    private 'source_cidr_block'?: string;
    private 'destination_cidr_block'?: string;
    private 'source_port_range'?: string;
    private 'destination_port_range'?: string;
    public action?: string;
    public priority?: number;
    public constructor(direction?: string, protocol?: string, ethertype?: string, action?: string, priority?: number) { 
        this['direction'] = direction;
        this['protocol'] = protocol;
        this['ethertype'] = ethertype;
        this['action'] = action;
        this['priority'] = priority;
    }
    public withDescription(description: string): BatchCreateTrafficMirrorFilterRuleOption {
        this['description'] = description;
        return this;
    }
    public withDirection(direction: string): BatchCreateTrafficMirrorFilterRuleOption {
        this['direction'] = direction;
        return this;
    }
    public withProtocol(protocol: string): BatchCreateTrafficMirrorFilterRuleOption {
        this['protocol'] = protocol;
        return this;
    }
    public withEthertype(ethertype: string): BatchCreateTrafficMirrorFilterRuleOption {
        this['ethertype'] = ethertype;
        return this;
    }
    public withSourceCidrBlock(sourceCidrBlock: string): BatchCreateTrafficMirrorFilterRuleOption {
        this['source_cidr_block'] = sourceCidrBlock;
        return this;
    }
    public set sourceCidrBlock(sourceCidrBlock: string  | undefined) {
        this['source_cidr_block'] = sourceCidrBlock;
    }
    public get sourceCidrBlock(): string | undefined {
        return this['source_cidr_block'];
    }
    public withDestinationCidrBlock(destinationCidrBlock: string): BatchCreateTrafficMirrorFilterRuleOption {
        this['destination_cidr_block'] = destinationCidrBlock;
        return this;
    }
    public set destinationCidrBlock(destinationCidrBlock: string  | undefined) {
        this['destination_cidr_block'] = destinationCidrBlock;
    }
    public get destinationCidrBlock(): string | undefined {
        return this['destination_cidr_block'];
    }
    public withSourcePortRange(sourcePortRange: string): BatchCreateTrafficMirrorFilterRuleOption {
        this['source_port_range'] = sourcePortRange;
        return this;
    }
    public set sourcePortRange(sourcePortRange: string  | undefined) {
        this['source_port_range'] = sourcePortRange;
    }
    public get sourcePortRange(): string | undefined {
        return this['source_port_range'];
    }
    public withDestinationPortRange(destinationPortRange: string): BatchCreateTrafficMirrorFilterRuleOption {
        this['destination_port_range'] = destinationPortRange;
        return this;
    }
    public set destinationPortRange(destinationPortRange: string  | undefined) {
        this['destination_port_range'] = destinationPortRange;
    }
    public get destinationPortRange(): string | undefined {
        return this['destination_port_range'];
    }
    public withAction(action: string): BatchCreateTrafficMirrorFilterRuleOption {
        this['action'] = action;
        return this;
    }
    public withPriority(priority: number): BatchCreateTrafficMirrorFilterRuleOption {
        this['priority'] = priority;
        return this;
    }
}