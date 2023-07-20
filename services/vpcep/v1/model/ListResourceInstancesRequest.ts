import { QueryResourceInstanceTagsBody } from './QueryResourceInstanceTagsBody';


export class ListResourceInstancesRequest {
    private 'resource_type'?: string;
    private 'Content-Type'?: string;
    public body?: QueryResourceInstanceTagsBody;
    public constructor(resourceType?: string) { 
        this['resource_type'] = resourceType;
    }
    public withResourceType(resourceType: string): ListResourceInstancesRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withContentType(contentType: string): ListResourceInstancesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: QueryResourceInstanceTagsBody): ListResourceInstancesRequest {
        this['body'] = body;
        return this;
    }
}