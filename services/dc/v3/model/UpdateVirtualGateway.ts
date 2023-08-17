

export class UpdateVirtualGateway {
    public name?: string;
    public description?: string;
    private 'local_ep_group'?: Array<string>;
    private 'local_ep_group_ipv6'?: Array<string>;
    public constructor() { 
    }
    public withName(name: string): UpdateVirtualGateway {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateVirtualGateway {
        this['description'] = description;
        return this;
    }
    public withLocalEpGroup(localEpGroup: Array<string>): UpdateVirtualGateway {
        this['local_ep_group'] = localEpGroup;
        return this;
    }
    public set localEpGroup(localEpGroup: Array<string>  | undefined) {
        this['local_ep_group'] = localEpGroup;
    }
    public get localEpGroup(): Array<string> | undefined {
        return this['local_ep_group'];
    }
    public withLocalEpGroupIpv6(localEpGroupIpv6: Array<string>): UpdateVirtualGateway {
        this['local_ep_group_ipv6'] = localEpGroupIpv6;
        return this;
    }
    public set localEpGroupIpv6(localEpGroupIpv6: Array<string>  | undefined) {
        this['local_ep_group_ipv6'] = localEpGroupIpv6;
    }
    public get localEpGroupIpv6(): Array<string> | undefined {
        return this['local_ep_group_ipv6'];
    }
}