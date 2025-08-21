

export class ShowResourcePermissionsRequest {
    private 'group_id'?: number;
    private 'resource_id'?: number;
    public offset?: number;
    public limit?: number;
    public constructor(groupId?: number, resourceId?: number) { 
        this['group_id'] = groupId;
        this['resource_id'] = resourceId;
    }
    public withGroupId(groupId: number): ShowResourcePermissionsRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: number  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): number | undefined {
        return this['group_id'];
    }
    public withResourceId(resourceId: number): ShowResourcePermissionsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: number  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): number | undefined {
        return this['resource_id'];
    }
    public withOffset(offset: number): ShowResourcePermissionsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowResourcePermissionsRequest {
        this['limit'] = limit;
        return this;
    }
}