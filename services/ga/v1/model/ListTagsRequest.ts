import { ResourceType } from './ResourceType';


export class ListTagsRequest {
    private 'resource_type'?: ResourceType;
    public limit?: number;
    public offset?: number;
    public constructor(resourceType?: ResourceType) { 
        this['resource_type'] = resourceType;
    }
    public withResourceType(resourceType: ResourceType): ListTagsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ResourceType  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ResourceType | undefined {
        return this['resource_type'];
    }
    public withLimit(limit: number): ListTagsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListTagsRequest {
        this['offset'] = offset;
        return this;
    }
}