import { Tags } from './Tags';


export class BatchCreateDeleteTagsRequest {
    private 'resource_id'?: string;
    private 'resource_type'?: BatchCreateDeleteTagsRequestResourceTypeEnum | string;
    public body?: Tags;
    public constructor(resourceId?: string, resourceType?: string) { 
        this['resource_id'] = resourceId;
        this['resource_type'] = resourceType;
    }
    public withResourceId(resourceId: string): BatchCreateDeleteTagsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceType(resourceType: BatchCreateDeleteTagsRequestResourceTypeEnum | string): BatchCreateDeleteTagsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: BatchCreateDeleteTagsRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): BatchCreateDeleteTagsRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withBody(body: Tags): BatchCreateDeleteTagsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchCreateDeleteTagsRequestResourceTypeEnum {
    CLOUD_CONNECTION = 'cloud-connection',
    BANDWIDTH_PACKAGE = 'bandwidth-package'
}
