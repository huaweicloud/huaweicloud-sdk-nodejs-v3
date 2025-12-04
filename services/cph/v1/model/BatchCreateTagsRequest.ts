import { BatchCreateTagsRequestBody } from './BatchCreateTagsRequestBody';


export class BatchCreateTagsRequest {
    private 'resource_type'?: BatchCreateTagsRequestResourceTypeEnum | string;
    private 'resource_id'?: string;
    public body?: BatchCreateTagsRequestBody;
    public constructor(resourceType?: string, resourceId?: string) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
    }
    public withResourceType(resourceType: BatchCreateTagsRequestResourceTypeEnum | string): BatchCreateTagsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: BatchCreateTagsRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): BatchCreateTagsRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): BatchCreateTagsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withBody(body: BatchCreateTagsRequestBody): BatchCreateTagsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchCreateTagsRequestResourceTypeEnum {
    CPH_SERVER = 'cph-server'
}
