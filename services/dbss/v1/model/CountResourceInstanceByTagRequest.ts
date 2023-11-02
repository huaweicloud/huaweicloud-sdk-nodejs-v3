import { ResourceInstanceTagRequest } from './ResourceInstanceTagRequest';


export class CountResourceInstanceByTagRequest {
    private 'resource_type'?: string;
    public body?: ResourceInstanceTagRequest;
    public constructor(resourceType?: string) { 
        this['resource_type'] = resourceType;
    }
    public withResourceType(resourceType: string): CountResourceInstanceByTagRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withBody(body: ResourceInstanceTagRequest): CountResourceInstanceByTagRequest {
        this['body'] = body;
        return this;
    }
}