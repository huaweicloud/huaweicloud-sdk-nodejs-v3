

export class PostPaidServerSchedulerHints {
    public group?: string;
    private 'dedicated_host_id'?: string | undefined;
    public tenancy?: string;
    public constructor() { 
    }
    public withGroup(group: string): PostPaidServerSchedulerHints {
        this['group'] = group;
        return this;
    }
    public withDedicatedHostId(dedicatedHostId: string): PostPaidServerSchedulerHints {
        this['dedicated_host_id'] = dedicatedHostId;
        return this;
    }
    public set dedicatedHostId(dedicatedHostId: string | undefined) {
        this['dedicated_host_id'] = dedicatedHostId;
    }
    public get dedicatedHostId() {
        return this['dedicated_host_id'];
    }
    public withTenancy(tenancy: string): PostPaidServerSchedulerHints {
        this['tenancy'] = tenancy;
        return this;
    }
}