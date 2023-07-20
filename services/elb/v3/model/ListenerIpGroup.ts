

export class ListenerIpGroup {
    private 'ipgroup_id'?: string;
    private 'enable_ipgroup'?: boolean;
    public type?: string;
    public constructor(ipgroupId?: string, enableIpgroup?: boolean, type?: string) { 
        this['ipgroup_id'] = ipgroupId;
        this['enable_ipgroup'] = enableIpgroup;
        this['type'] = type;
    }
    public withIpgroupId(ipgroupId: string): ListenerIpGroup {
        this['ipgroup_id'] = ipgroupId;
        return this;
    }
    public set ipgroupId(ipgroupId: string  | undefined) {
        this['ipgroup_id'] = ipgroupId;
    }
    public get ipgroupId(): string | undefined {
        return this['ipgroup_id'];
    }
    public withEnableIpgroup(enableIpgroup: boolean): ListenerIpGroup {
        this['enable_ipgroup'] = enableIpgroup;
        return this;
    }
    public set enableIpgroup(enableIpgroup: boolean  | undefined) {
        this['enable_ipgroup'] = enableIpgroup;
    }
    public get enableIpgroup(): boolean | undefined {
        return this['enable_ipgroup'];
    }
    public withType(type: string): ListenerIpGroup {
        this['type'] = type;
        return this;
    }
}