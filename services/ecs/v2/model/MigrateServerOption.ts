

export class MigrateServerOption {
    private 'dedicated_host_id'?: string | undefined;
    public constructor() { 
    }
    public withDedicatedHostId(dedicatedHostId: string): MigrateServerOption {
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