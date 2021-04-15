

export class ServerSchedulerHints {
    public group?: Array<string>;
    public tenancy?: Array<string>;
    private 'dedicated_host_id'?: Array<string> | undefined;
    public constructor() { 
    }
    public withGroup(group: Array<string>): ServerSchedulerHints {
        this['group'] = group;
        return this;
    }
    public withTenancy(tenancy: Array<string>): ServerSchedulerHints {
        this['tenancy'] = tenancy;
        return this;
    }
    public withDedicatedHostId(dedicatedHostId: Array<string>): ServerSchedulerHints {
        this['dedicated_host_id'] = dedicatedHostId;
        return this;
    }
    public set dedicatedHostId(dedicatedHostId: Array<string> | undefined) {
        this['dedicated_host_id'] = dedicatedHostId;
    }
    public get dedicatedHostId() {
        return this['dedicated_host_id'];
    }
}