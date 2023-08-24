

export class FirewallInsertRuleItemOption {
    public name?: string;
    public description?: string;
    public action?: string;
    public protocol?: string;
    private 'ip_version'?: number;
    private 'source_ip_address'?: string;
    private 'destination_ip_address'?: string;
    private 'source_port'?: string;
    private 'destination_port'?: string;
    private 'source_address_group_id'?: string;
    private 'destination_address_group_id'?: string;
    public constructor(action?: string, protocol?: string, ipVersion?: number) { 
        this['action'] = action;
        this['protocol'] = protocol;
        this['ip_version'] = ipVersion;
    }
    public withName(name: string): FirewallInsertRuleItemOption {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): FirewallInsertRuleItemOption {
        this['description'] = description;
        return this;
    }
    public withAction(action: string): FirewallInsertRuleItemOption {
        this['action'] = action;
        return this;
    }
    public withProtocol(protocol: string): FirewallInsertRuleItemOption {
        this['protocol'] = protocol;
        return this;
    }
    public withIpVersion(ipVersion: number): FirewallInsertRuleItemOption {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: number  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): number | undefined {
        return this['ip_version'];
    }
    public withSourceIpAddress(sourceIpAddress: string): FirewallInsertRuleItemOption {
        this['source_ip_address'] = sourceIpAddress;
        return this;
    }
    public set sourceIpAddress(sourceIpAddress: string  | undefined) {
        this['source_ip_address'] = sourceIpAddress;
    }
    public get sourceIpAddress(): string | undefined {
        return this['source_ip_address'];
    }
    public withDestinationIpAddress(destinationIpAddress: string): FirewallInsertRuleItemOption {
        this['destination_ip_address'] = destinationIpAddress;
        return this;
    }
    public set destinationIpAddress(destinationIpAddress: string  | undefined) {
        this['destination_ip_address'] = destinationIpAddress;
    }
    public get destinationIpAddress(): string | undefined {
        return this['destination_ip_address'];
    }
    public withSourcePort(sourcePort: string): FirewallInsertRuleItemOption {
        this['source_port'] = sourcePort;
        return this;
    }
    public set sourcePort(sourcePort: string  | undefined) {
        this['source_port'] = sourcePort;
    }
    public get sourcePort(): string | undefined {
        return this['source_port'];
    }
    public withDestinationPort(destinationPort: string): FirewallInsertRuleItemOption {
        this['destination_port'] = destinationPort;
        return this;
    }
    public set destinationPort(destinationPort: string  | undefined) {
        this['destination_port'] = destinationPort;
    }
    public get destinationPort(): string | undefined {
        return this['destination_port'];
    }
    public withSourceAddressGroupId(sourceAddressGroupId: string): FirewallInsertRuleItemOption {
        this['source_address_group_id'] = sourceAddressGroupId;
        return this;
    }
    public set sourceAddressGroupId(sourceAddressGroupId: string  | undefined) {
        this['source_address_group_id'] = sourceAddressGroupId;
    }
    public get sourceAddressGroupId(): string | undefined {
        return this['source_address_group_id'];
    }
    public withDestinationAddressGroupId(destinationAddressGroupId: string): FirewallInsertRuleItemOption {
        this['destination_address_group_id'] = destinationAddressGroupId;
        return this;
    }
    public set destinationAddressGroupId(destinationAddressGroupId: string  | undefined) {
        this['destination_address_group_id'] = destinationAddressGroupId;
    }
    public get destinationAddressGroupId(): string | undefined {
        return this['destination_address_group_id'];
    }
}