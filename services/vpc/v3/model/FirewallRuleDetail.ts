

export class FirewallRuleDetail {
    public id?: string;
    public name?: string;
    public description?: string;
    public action?: string;
    private 'project_id'?: string;
    public protocol?: string;
    private 'ip_version'?: number;
    private 'source_ip_address'?: string;
    private 'destination_ip_address'?: string;
    private 'source_port'?: string;
    private 'destination_port'?: string;
    private 'source_address_group_id'?: string;
    private 'destination_address_group_id'?: string;
    public enabled?: boolean;
    public constructor(id?: string, name?: string, description?: string, action?: string, projectId?: string, protocol?: string, ipVersion?: number, sourceIpAddress?: string, destinationIpAddress?: string, sourcePort?: string, destinationPort?: string, sourceAddressGroupId?: string, destinationAddressGroupId?: string, enabled?: boolean) { 
        this['id'] = id;
        this['name'] = name;
        this['description'] = description;
        this['action'] = action;
        this['project_id'] = projectId;
        this['protocol'] = protocol;
        this['ip_version'] = ipVersion;
        this['source_ip_address'] = sourceIpAddress;
        this['destination_ip_address'] = destinationIpAddress;
        this['source_port'] = sourcePort;
        this['destination_port'] = destinationPort;
        this['source_address_group_id'] = sourceAddressGroupId;
        this['destination_address_group_id'] = destinationAddressGroupId;
        this['enabled'] = enabled;
    }
    public withId(id: string): FirewallRuleDetail {
        this['id'] = id;
        return this;
    }
    public withName(name: string): FirewallRuleDetail {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): FirewallRuleDetail {
        this['description'] = description;
        return this;
    }
    public withAction(action: string): FirewallRuleDetail {
        this['action'] = action;
        return this;
    }
    public withProjectId(projectId: string): FirewallRuleDetail {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProtocol(protocol: string): FirewallRuleDetail {
        this['protocol'] = protocol;
        return this;
    }
    public withIpVersion(ipVersion: number): FirewallRuleDetail {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: number  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): number | undefined {
        return this['ip_version'];
    }
    public withSourceIpAddress(sourceIpAddress: string): FirewallRuleDetail {
        this['source_ip_address'] = sourceIpAddress;
        return this;
    }
    public set sourceIpAddress(sourceIpAddress: string  | undefined) {
        this['source_ip_address'] = sourceIpAddress;
    }
    public get sourceIpAddress(): string | undefined {
        return this['source_ip_address'];
    }
    public withDestinationIpAddress(destinationIpAddress: string): FirewallRuleDetail {
        this['destination_ip_address'] = destinationIpAddress;
        return this;
    }
    public set destinationIpAddress(destinationIpAddress: string  | undefined) {
        this['destination_ip_address'] = destinationIpAddress;
    }
    public get destinationIpAddress(): string | undefined {
        return this['destination_ip_address'];
    }
    public withSourcePort(sourcePort: string): FirewallRuleDetail {
        this['source_port'] = sourcePort;
        return this;
    }
    public set sourcePort(sourcePort: string  | undefined) {
        this['source_port'] = sourcePort;
    }
    public get sourcePort(): string | undefined {
        return this['source_port'];
    }
    public withDestinationPort(destinationPort: string): FirewallRuleDetail {
        this['destination_port'] = destinationPort;
        return this;
    }
    public set destinationPort(destinationPort: string  | undefined) {
        this['destination_port'] = destinationPort;
    }
    public get destinationPort(): string | undefined {
        return this['destination_port'];
    }
    public withSourceAddressGroupId(sourceAddressGroupId: string): FirewallRuleDetail {
        this['source_address_group_id'] = sourceAddressGroupId;
        return this;
    }
    public set sourceAddressGroupId(sourceAddressGroupId: string  | undefined) {
        this['source_address_group_id'] = sourceAddressGroupId;
    }
    public get sourceAddressGroupId(): string | undefined {
        return this['source_address_group_id'];
    }
    public withDestinationAddressGroupId(destinationAddressGroupId: string): FirewallRuleDetail {
        this['destination_address_group_id'] = destinationAddressGroupId;
        return this;
    }
    public set destinationAddressGroupId(destinationAddressGroupId: string  | undefined) {
        this['destination_address_group_id'] = destinationAddressGroupId;
    }
    public get destinationAddressGroupId(): string | undefined {
        return this['destination_address_group_id'];
    }
    public withEnabled(enabled: boolean): FirewallRuleDetail {
        this['enabled'] = enabled;
        return this;
    }
}