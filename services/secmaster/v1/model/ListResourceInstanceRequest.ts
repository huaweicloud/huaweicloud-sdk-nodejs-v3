import { QueryResourceInstanceRequestBody } from './QueryResourceInstanceRequestBody';


export class ListResourceInstanceRequest {
    private 'resource_type'?: string;
    public limit?: string;
    public offset?: string;
    private 'Content-type'?: string;
    public body?: QueryResourceInstanceRequestBody;
    public constructor(resourceType?: string, contentType?: string) { 
        this['resource_type'] = resourceType;
        this['Content-type'] = contentType;
    }
    public withResourceType(resourceType: string): ListResourceInstanceRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withLimit(limit: string): ListResourceInstanceRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListResourceInstanceRequest {
        this['offset'] = offset;
        return this;
    }
    public withContentType(contentType: string): ListResourceInstanceRequest {
        this['Content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-type'];
    }
    public withBody(body: QueryResourceInstanceRequestBody): ListResourceInstanceRequest {
        this['body'] = body;
        return this;
    }
}