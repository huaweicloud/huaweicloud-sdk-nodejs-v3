import { QueryResourceInstanceRequestBody } from './QueryResourceInstanceRequestBody';


export class CountResourceInstanceRequest {
    private 'resource_type'?: string;
    private 'Content-type'?: string;
    public body?: QueryResourceInstanceRequestBody;
    public constructor(resourceType?: string, contentType?: string) { 
        this['resource_type'] = resourceType;
        this['Content-type'] = contentType;
    }
    public withResourceType(resourceType: string): CountResourceInstanceRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withContentType(contentType: string): CountResourceInstanceRequest {
        this['Content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-type'];
    }
    public withBody(body: QueryResourceInstanceRequestBody): CountResourceInstanceRequest {
        this['body'] = body;
        return this;
    }
}