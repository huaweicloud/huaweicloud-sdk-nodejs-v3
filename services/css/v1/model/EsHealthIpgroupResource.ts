

export class EsHealthIpgroupResource {
    private 'ipgroup_id'?: string;
    private 'enable_ipgroup'?: boolean;
    public type?: string;
    public constructor() { 
    }
    public withIpgroupId(ipgroupId: string): EsHealthIpgroupResource {
        this['ipgroup_id'] = ipgroupId;
        return this;
    }
    public set ipgroupId(ipgroupId: string  | undefined) {
        this['ipgroup_id'] = ipgroupId;
    }
    public get ipgroupId(): string | undefined {
        return this['ipgroup_id'];
    }
    public withEnableIpgroup(enableIpgroup: boolean): EsHealthIpgroupResource {
        this['enable_ipgroup'] = enableIpgroup;
        return this;
    }
    public set enableIpgroup(enableIpgroup: boolean  | undefined) {
        this['enable_ipgroup'] = enableIpgroup;
    }
    public get enableIpgroup(): boolean | undefined {
        return this['enable_ipgroup'];
    }
    public withType(type: string): EsHealthIpgroupResource {
        this['type'] = type;
        return this;
    }
}