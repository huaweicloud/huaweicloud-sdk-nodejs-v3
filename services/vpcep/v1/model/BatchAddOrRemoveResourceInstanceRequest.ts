import { BatchAddOrRemoveResourceInstanceRequestBody } from './BatchAddOrRemoveResourceInstanceRequestBody';


export class BatchAddOrRemoveResourceInstanceRequest {
    private 'resource_type'?: BatchAddOrRemoveResourceInstanceRequestResourceTypeEnum | string;
    private 'resource_id'?: string;
    private 'Content-Type'?: string;
    public body?: BatchAddOrRemoveResourceInstanceRequestBody;
    public constructor(resourceType?: string, resourceId?: string) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
    }
    public withResourceType(resourceType: BatchAddOrRemoveResourceInstanceRequestResourceTypeEnum | string): BatchAddOrRemoveResourceInstanceRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: BatchAddOrRemoveResourceInstanceRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): BatchAddOrRemoveResourceInstanceRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): BatchAddOrRemoveResourceInstanceRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withContentType(contentType: string): BatchAddOrRemoveResourceInstanceRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: BatchAddOrRemoveResourceInstanceRequestBody): BatchAddOrRemoveResourceInstanceRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchAddOrRemoveResourceInstanceRequestResourceTypeEnum {
    ENDPOINT_SERVICE = 'endpoint_service',
    ENDPOINT = 'endpoint'
}
