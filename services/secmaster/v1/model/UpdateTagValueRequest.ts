import { UpdateTagValueRequestBody } from './UpdateTagValueRequestBody';


export class UpdateTagValueRequest {
    private 'resource_type'?: string;
    private 'resource_id'?: string;
    public key?: string;
    private 'content-type'?: string;
    public body?: UpdateTagValueRequestBody;
    public constructor(resourceType?: string, resourceId?: string, key?: string, contentType?: string) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
        this['key'] = key;
        this['content-type'] = contentType;
    }
    public withResourceType(resourceType: string): UpdateTagValueRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): UpdateTagValueRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withKey(key: string): UpdateTagValueRequest {
        this['key'] = key;
        return this;
    }
    public withContentType(contentType: string): UpdateTagValueRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withBody(body: UpdateTagValueRequestBody): UpdateTagValueRequest {
        this['body'] = body;
        return this;
    }
}