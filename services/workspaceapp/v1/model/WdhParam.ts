

export class WdhParam {
    private 'dedicated_host_id'?: string;
    public tenancy?: string;
    public constructor() { 
    }
    public withDedicatedHostId(dedicatedHostId: string): WdhParam {
        this['dedicated_host_id'] = dedicatedHostId;
        return this;
    }
    public set dedicatedHostId(dedicatedHostId: string  | undefined) {
        this['dedicated_host_id'] = dedicatedHostId;
    }
    public get dedicatedHostId(): string | undefined {
        return this['dedicated_host_id'];
    }
    public withTenancy(tenancy: string): WdhParam {
        this['tenancy'] = tenancy;
        return this;
    }
}