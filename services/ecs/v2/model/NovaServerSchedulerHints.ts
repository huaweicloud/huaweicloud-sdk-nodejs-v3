

export class NovaServerSchedulerHints {
    public tenancy?: Array<NovaServerSchedulerHintsTenancyEnum> | Array<string>;
    private 'dedicated_host_id'?: Array<string>;
    public constructor() { 
    }
    public withTenancy(tenancy: Array<NovaServerSchedulerHintsTenancyEnum> | Array<string>): NovaServerSchedulerHints {
        this['tenancy'] = tenancy;
        return this;
    }
    public withDedicatedHostId(dedicatedHostId: Array<string>): NovaServerSchedulerHints {
        this['dedicated_host_id'] = dedicatedHostId;
        return this;
    }
    public set dedicatedHostId(dedicatedHostId: Array<string>  | undefined) {
        this['dedicated_host_id'] = dedicatedHostId;
    }
    public get dedicatedHostId(): Array<string> | undefined {
        return this['dedicated_host_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NovaServerSchedulerHintsTenancyEnum {
    SHARED = 'shared',
    DEDICATED = 'dedicated'
}
