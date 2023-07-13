

export class PrePaidServerSchedulerHints {
    public group?: string;
    public tenancy?: PrePaidServerSchedulerHintsTenancyEnum;
    private 'dedicated_host_id'?: string | undefined;
    public constructor() { 
    }
    public withGroup(group: string): PrePaidServerSchedulerHints {
        this['group'] = group;
        return this;
    }
    public withTenancy(tenancy: PrePaidServerSchedulerHintsTenancyEnum): PrePaidServerSchedulerHints {
        this['tenancy'] = tenancy;
        return this;
    }
    public withDedicatedHostId(dedicatedHostId: string): PrePaidServerSchedulerHints {
        this['dedicated_host_id'] = dedicatedHostId;
        return this;
    }
    public set dedicatedHostId(dedicatedHostId: string | undefined) {
        this['dedicated_host_id'] = dedicatedHostId;
    }
    public get dedicatedHostId() {
        return this['dedicated_host_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PrePaidServerSchedulerHintsTenancyEnum {
    SHARED = 'shared',
    DEDICATED = 'dedicated'
}
