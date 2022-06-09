

export class ListenerIpGroup {
    private 'ipgroup_id': string | undefined;
    private 'enable_ipgroup': boolean | undefined;
    public type: string;
    public constructor(ipgroupId?: any, enableIpgroup?: any, type?: any) { 
        this['ipgroup_id'] = ipgroupId;
        this['enable_ipgroup'] = enableIpgroup;
        this['type'] = type;
    }
    public withIpgroupId(ipgroupId: string): ListenerIpGroup {
        this['ipgroup_id'] = ipgroupId;
        return this;
    }
    public set ipgroupId(ipgroupId: string | undefined) {
        this['ipgroup_id'] = ipgroupId;
    }
    public get ipgroupId() {
        return this['ipgroup_id'];
    }
    public withEnableIpgroup(enableIpgroup: boolean): ListenerIpGroup {
        this['enable_ipgroup'] = enableIpgroup;
        return this;
    }
    public set enableIpgroup(enableIpgroup: boolean | undefined) {
        this['enable_ipgroup'] = enableIpgroup;
    }
    public get enableIpgroup() {
        return this['enable_ipgroup'];
    }
    public withType(type: string): ListenerIpGroup {
        this['type'] = type;
        return this;
    }
}