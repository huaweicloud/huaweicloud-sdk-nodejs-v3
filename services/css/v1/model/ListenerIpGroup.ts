

export class ListenerIpGroup {
    private 'ipgroup_id'?: string;
    private 'enable_ipgroup'?: boolean;
    public constructor() { 
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
}