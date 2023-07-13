

export class VaultRemoveResourceReq {
    private 'resource_ids': Array<string> | undefined;
    public constructor(resourceIds?: any) { 
        this['resource_ids'] = resourceIds;
    }
    public withResourceIds(resourceIds: Array<string>): VaultRemoveResourceReq {
        this['resource_ids'] = resourceIds;
        return this;
    }
    public set resourceIds(resourceIds: Array<string> | undefined) {
        this['resource_ids'] = resourceIds;
    }
    public get resourceIds() {
        return this['resource_ids'];
    }
}