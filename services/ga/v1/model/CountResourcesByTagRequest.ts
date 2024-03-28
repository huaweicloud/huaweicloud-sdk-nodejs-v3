import { ListResourcesByTagRequestBody } from './ListResourcesByTagRequestBody';
import { ResourceType } from './ResourceType';


export class CountResourcesByTagRequest {
    private 'resource_type'?: ResourceType;
    public body?: ListResourcesByTagRequestBody;
    public constructor(resourceType?: ResourceType) { 
        this['resource_type'] = resourceType;
    }
    public withResourceType(resourceType: ResourceType): CountResourcesByTagRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ResourceType  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ResourceType | undefined {
        return this['resource_type'];
    }
    public withBody(body: ListResourcesByTagRequestBody): CountResourcesByTagRequest {
        this['body'] = body;
        return this;
    }
}