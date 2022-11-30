

export class CreateListenerIpGroupOption {
    private 'ipgroup_id': string | undefined;
    private 'enable_ipgroup'?: boolean | undefined;
    public type?: CreateListenerIpGroupOptionTypeEnum;
    public constructor(ipgroupId?: any) { 
        this['ipgroup_id'] = ipgroupId;
    }
    public withIpgroupId(ipgroupId: string): CreateListenerIpGroupOption {
        this['ipgroup_id'] = ipgroupId;
        return this;
    }
    public set ipgroupId(ipgroupId: string | undefined) {
        this['ipgroup_id'] = ipgroupId;
    }
    public get ipgroupId() {
        return this['ipgroup_id'];
    }
    public withEnableIpgroup(enableIpgroup: boolean): CreateListenerIpGroupOption {
        this['enable_ipgroup'] = enableIpgroup;
        return this;
    }
    public set enableIpgroup(enableIpgroup: boolean | undefined) {
        this['enable_ipgroup'] = enableIpgroup;
    }
    public get enableIpgroup() {
        return this['enable_ipgroup'];
    }
    public withType(type: CreateListenerIpGroupOptionTypeEnum): CreateListenerIpGroupOption {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateListenerIpGroupOptionTypeEnum {
    WHITE = 'white',
    BLACK = 'black'
}
