import { ListResourcesByTagRequestBody } from './ListResourcesByTagRequestBody';
import { ResourceType } from './ResourceType';


export class ListResourcesByTagRequest {
    private 'resource_type'?: ResourceType;
    public limit?: number;
    public offset?: number;
    public body?: ListResourcesByTagRequestBody;
    public constructor(resourceType?: ResourceType) { 
        this['resource_type'] = resourceType;
    }
    public withResourceType(resourceType: ResourceType): ListResourcesByTagRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ResourceType  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ResourceType | undefined {
        return this['resource_type'];
    }
    public withLimit(limit: number): ListResourcesByTagRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListResourcesByTagRequest {
        this['offset'] = offset;
        return this;
    }
    public withBody(body: ListResourcesByTagRequestBody): ListResourcesByTagRequest {
        this['body'] = body;
        return this;
    }
}