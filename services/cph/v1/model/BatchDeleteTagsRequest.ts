import { BatchDeleteTagsRequestBody } from './BatchDeleteTagsRequestBody';


export class BatchDeleteTagsRequest {
    private 'resource_type'?: BatchDeleteTagsRequestResourceTypeEnum | string;
    private 'resource_id'?: string;
    public body?: BatchDeleteTagsRequestBody;
    public constructor(resourceType?: string, resourceId?: string) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
    }
    public withResourceType(resourceType: BatchDeleteTagsRequestResourceTypeEnum | string): BatchDeleteTagsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: BatchDeleteTagsRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): BatchDeleteTagsRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): BatchDeleteTagsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withBody(body: BatchDeleteTagsRequestBody): BatchDeleteTagsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchDeleteTagsRequestResourceTypeEnum {
    CPH_SERVER = 'cph-server'
}
