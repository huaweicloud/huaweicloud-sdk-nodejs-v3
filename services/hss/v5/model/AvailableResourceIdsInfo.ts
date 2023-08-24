

export class AvailableResourceIdsInfo {
    private 'resource_id'?: string;
    private 'current_time'?: string;
    private 'shared_quota'?: string;
    public constructor() { 
    }
    public withResourceId(resourceId: string): AvailableResourceIdsInfo {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withCurrentTime(currentTime: string): AvailableResourceIdsInfo {
        this['current_time'] = currentTime;
        return this;
    }
    public set currentTime(currentTime: string  | undefined) {
        this['current_time'] = currentTime;
    }
    public get currentTime(): string | undefined {
        return this['current_time'];
    }
    public withSharedQuota(sharedQuota: string): AvailableResourceIdsInfo {
        this['shared_quota'] = sharedQuota;
        return this;
    }
    public set sharedQuota(sharedQuota: string  | undefined) {
        this['shared_quota'] = sharedQuota;
    }
    public get sharedQuota(): string | undefined {
        return this['shared_quota'];
    }
}