

export class SyncResourceAgentReqResourceInfos {
    private 'region_id'?: string;
    private 'resource_id'?: string;
    public id?: string;
    public constructor() { 
    }
    public withRegionId(regionId: string): SyncResourceAgentReqResourceInfos {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withResourceId(resourceId: string): SyncResourceAgentReqResourceInfos {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withId(id: string): SyncResourceAgentReqResourceInfos {
        this['id'] = id;
        return this;
    }
}