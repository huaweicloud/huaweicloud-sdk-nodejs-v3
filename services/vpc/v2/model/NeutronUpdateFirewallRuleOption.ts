

export class NeutronUpdateFirewallRuleOption {
    public action?: NeutronUpdateFirewallRuleOptionActionEnum | string;
    public description?: string;
    private 'destination_ip_address'?: string;
    private 'destination_port'?: string;
    public enabled?: boolean;
    private 'ip_version'?: number;
    public name?: string;
    public protocol?: string;
    private 'source_ip_address'?: string;
    private 'source_port'?: string;
    public constructor() { 
    }
    public withAction(action: NeutronUpdateFirewallRuleOptionActionEnum | string): NeutronUpdateFirewallRuleOption {
        this['action'] = action;
        return this;
    }
    public withDescription(description: string): NeutronUpdateFirewallRuleOption {
        this['description'] = description;
        return this;
    }
    public withDestinationIpAddress(destinationIpAddress: string): NeutronUpdateFirewallRuleOption {
        this['destination_ip_address'] = destinationIpAddress;
        return this;
    }
    public set destinationIpAddress(destinationIpAddress: string  | undefined) {
        this['destination_ip_address'] = destinationIpAddress;
    }
    public get destinationIpAddress(): string | undefined {
        return this['destination_ip_address'];
    }
    public withDestinationPort(destinationPort: string): NeutronUpdateFirewallRuleOption {
        this['destination_port'] = destinationPort;
        return this;
    }
    public set destinationPort(destinationPort: string  | undefined) {
        this['destination_port'] = destinationPort;
    }
    public get destinationPort(): string | undefined {
        return this['destination_port'];
    }
    public withEnabled(enabled: boolean): NeutronUpdateFirewallRuleOption {
        this['enabled'] = enabled;
        return this;
    }
    public withIpVersion(ipVersion: number): NeutronUpdateFirewallRuleOption {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: number  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): number | undefined {
        return this['ip_version'];
    }
    public withName(name: string): NeutronUpdateFirewallRuleOption {
        this['name'] = name;
        return this;
    }
    public withProtocol(protocol: string): NeutronUpdateFirewallRuleOption {
        this['protocol'] = protocol;
        return this;
    }
    public withSourceIpAddress(sourceIpAddress: string): NeutronUpdateFirewallRuleOption {
        this['source_ip_address'] = sourceIpAddress;
        return this;
    }
    public set sourceIpAddress(sourceIpAddress: string  | undefined) {
        this['source_ip_address'] = sourceIpAddress;
    }
    public get sourceIpAddress(): string | undefined {
        return this['source_ip_address'];
    }
    public withSourcePort(sourcePort: string): NeutronUpdateFirewallRuleOption {
        this['source_port'] = sourcePort;
        return this;
    }
    public set sourcePort(sourcePort: string  | undefined) {
        this['source_port'] = sourcePort;
    }
    public get sourcePort(): string | undefined {
        return this['source_port'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NeutronUpdateFirewallRuleOptionActionEnum {
    DENY = 'DENY',
    ALLOW = 'ALLOW'
}
