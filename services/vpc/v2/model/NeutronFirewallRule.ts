

export class NeutronFirewallRule {
    public id?: string;
    public name?: string;
    public description?: string;
    public action?: NeutronFirewallRuleActionEnum | string;
    public protocol?: string;
    private 'ip_version'?: number;
    public enabled?: boolean;
    private 'public'?: boolean;
    private 'destination_ip_address'?: string;
    private 'destination_port'?: string;
    private 'source_ip_address'?: string;
    private 'source_port'?: string;
    private 'tenant_id'?: string;
    private 'project_id'?: string;
    public constructor(id?: string, name?: string, description?: string, action?: string, protocol?: string, ipVersion?: number, enabled?: boolean, _public?: boolean, destinationIpAddress?: string, destinationPort?: string, sourceIpAddress?: string, sourcePort?: string, tenantId?: string, projectId?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['description'] = description;
        this['action'] = action;
        this['protocol'] = protocol;
        this['ip_version'] = ipVersion;
        this['enabled'] = enabled;
        this['public'] = _public;
        this['destination_ip_address'] = destinationIpAddress;
        this['destination_port'] = destinationPort;
        this['source_ip_address'] = sourceIpAddress;
        this['source_port'] = sourcePort;
        this['tenant_id'] = tenantId;
        this['project_id'] = projectId;
    }
    public withId(id: string): NeutronFirewallRule {
        this['id'] = id;
        return this;
    }
    public withName(name: string): NeutronFirewallRule {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): NeutronFirewallRule {
        this['description'] = description;
        return this;
    }
    public withAction(action: NeutronFirewallRuleActionEnum | string): NeutronFirewallRule {
        this['action'] = action;
        return this;
    }
    public withProtocol(protocol: string): NeutronFirewallRule {
        this['protocol'] = protocol;
        return this;
    }
    public withIpVersion(ipVersion: number): NeutronFirewallRule {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: number  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): number | undefined {
        return this['ip_version'];
    }
    public withEnabled(enabled: boolean): NeutronFirewallRule {
        this['enabled'] = enabled;
        return this;
    }
    public withPublic(_public: boolean): NeutronFirewallRule {
        this['public'] = _public;
        return this;
    }
    public set _public(_public: boolean  | undefined) {
        this['public'] = _public;
    }
    public get _public(): boolean | undefined {
        return this['public'];
    }
    public withDestinationIpAddress(destinationIpAddress: string): NeutronFirewallRule {
        this['destination_ip_address'] = destinationIpAddress;
        return this;
    }
    public set destinationIpAddress(destinationIpAddress: string  | undefined) {
        this['destination_ip_address'] = destinationIpAddress;
    }
    public get destinationIpAddress(): string | undefined {
        return this['destination_ip_address'];
    }
    public withDestinationPort(destinationPort: string): NeutronFirewallRule {
        this['destination_port'] = destinationPort;
        return this;
    }
    public set destinationPort(destinationPort: string  | undefined) {
        this['destination_port'] = destinationPort;
    }
    public get destinationPort(): string | undefined {
        return this['destination_port'];
    }
    public withSourceIpAddress(sourceIpAddress: string): NeutronFirewallRule {
        this['source_ip_address'] = sourceIpAddress;
        return this;
    }
    public set sourceIpAddress(sourceIpAddress: string  | undefined) {
        this['source_ip_address'] = sourceIpAddress;
    }
    public get sourceIpAddress(): string | undefined {
        return this['source_ip_address'];
    }
    public withSourcePort(sourcePort: string): NeutronFirewallRule {
        this['source_port'] = sourcePort;
        return this;
    }
    public set sourcePort(sourcePort: string  | undefined) {
        this['source_port'] = sourcePort;
    }
    public get sourcePort(): string | undefined {
        return this['source_port'];
    }
    public withTenantId(tenantId: string): NeutronFirewallRule {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withProjectId(projectId: string): NeutronFirewallRule {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NeutronFirewallRuleActionEnum {
    DENY = 'DENY',
    ALLOW = 'ALLOW'
}
