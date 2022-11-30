import { QueryResourceInstanceTagsBody } from './QueryResourceInstanceTagsBody';


export class ListResourceInstancesRequest {
    private 'resource_type': string | undefined;
    private 'Content-Type': string | undefined;
    public body?: QueryResourceInstanceTagsBody;
    public constructor(resourceType?: any, contentType?: any) { 
        this['resource_type'] = resourceType;
        this['Content-Type'] = contentType;
    }
    public withResourceType(resourceType: string): ListResourceInstancesRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
    public withContentType(contentType: string): ListResourceInstancesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withBody(body: QueryResourceInstanceTagsBody): ListResourceInstancesRequest {
        this['body'] = body;
        return this;
    }
}