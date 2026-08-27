

export class ListModelGroupResourcesRequest {
    private 'group_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'resource_type'?: ListModelGroupResourcesRequestResourceTypeEnum | string;
    public constructor(groupId?: string) { 
        this['group_id'] = groupId;
    }
    public withGroupId(groupId: string): ListModelGroupResourcesRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withOffset(offset: number): ListModelGroupResourcesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListModelGroupResourcesRequest {
        this['limit'] = limit;
        return this;
    }
    public withResourceType(resourceType: ListModelGroupResourcesRequestResourceTypeEnum | string): ListModelGroupResourcesRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ListModelGroupResourcesRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ListModelGroupResourcesRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListModelGroupResourcesRequestResourceTypeEnum {
    DESKTOP = 'DESKTOP',
    DESKTOP_TAG = 'DESKTOP_TAG'
}
