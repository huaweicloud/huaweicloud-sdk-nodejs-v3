

export class DeleteDedicatedHostRequest {
    private 'dedicated_host_id'?: string;
    public constructor(dedicatedHostId?: string) { 
        this['dedicated_host_id'] = dedicatedHostId;
    }
    public withDedicatedHostId(dedicatedHostId: string): DeleteDedicatedHostRequest {
        this['dedicated_host_id'] = dedicatedHostId;
        return this;
    }
    public set dedicatedHostId(dedicatedHostId: string  | undefined) {
        this['dedicated_host_id'] = dedicatedHostId;
    }
    public get dedicatedHostId(): string | undefined {
        return this['dedicated_host_id'];
    }
}