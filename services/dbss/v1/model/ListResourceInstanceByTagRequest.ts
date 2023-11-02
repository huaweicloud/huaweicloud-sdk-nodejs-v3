import { ResourceInstanceTagRequest } from './ResourceInstanceTagRequest';


export class ListResourceInstanceByTagRequest {
    private 'resource_type'?: string;
    public limit?: string;
    public offset?: string;
    public body?: ResourceInstanceTagRequest;
    public constructor(resourceType?: string) { 
        this['resource_type'] = resourceType;
    }
    public withResourceType(resourceType: string): ListResourceInstanceByTagRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withLimit(limit: string): ListResourceInstanceByTagRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListResourceInstanceByTagRequest {
        this['offset'] = offset;
        return this;
    }
    public withBody(body: ResourceInstanceTagRequest): ListResourceInstanceByTagRequest {
        this['body'] = body;
        return this;
    }
}