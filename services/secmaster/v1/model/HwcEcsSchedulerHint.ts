

export class HwcEcsSchedulerHint {
    public group?: Array<string>;
    public tenancy?: Array<string>;
    private 'dedicated_host_id'?: Array<string>;
    public constructor() { 
    }
    public withGroup(group: Array<string>): HwcEcsSchedulerHint {
        this['group'] = group;
        return this;
    }
    public withTenancy(tenancy: Array<string>): HwcEcsSchedulerHint {
        this['tenancy'] = tenancy;
        return this;
    }
    public withDedicatedHostId(dedicatedHostId: Array<string>): HwcEcsSchedulerHint {
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