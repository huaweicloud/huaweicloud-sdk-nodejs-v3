

export class UpdateListenerIpGroupOption {
    private 'ipgroup_id'?: string | undefined;
    private 'enable_ipgroup'?: boolean | undefined;
    public type?: UpdateListenerIpGroupOptionTypeEnum;
    public constructor() { 
    }
    public withIpgroupId(ipgroupId: string): UpdateListenerIpGroupOption {
        this['ipgroup_id'] = ipgroupId;
        return this;
    }
    public set ipgroupId(ipgroupId: string | undefined) {
        this['ipgroup_id'] = ipgroupId;
    }
    public get ipgroupId() {
        return this['ipgroup_id'];
    }
    public withEnableIpgroup(enableIpgroup: boolean): UpdateListenerIpGroupOption {
        this['enable_ipgroup'] = enableIpgroup;
        return this;
    }
    public set enableIpgroup(enableIpgroup: boolean | undefined) {
        this['enable_ipgroup'] = enableIpgroup;
    }
    public get enableIpgroup() {
        return this['enable_ipgroup'];
    }
    public withType(type: UpdateListenerIpGroupOptionTypeEnum): UpdateListenerIpGroupOption {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateListenerIpGroupOptionTypeEnum {
    WHITE = 'white',
    BLACK = 'black'
}
