import { BatchCreateResourceTagsRequestBody } from './BatchCreateResourceTagsRequestBody';


export class BatchCreateResourceTagsRequest {
    private 'resource_type'?: BatchCreateResourceTagsRequestResourceTypeEnum | string;
    private 'resource_id'?: string;
    public body?: BatchCreateResourceTagsRequestBody;
    public constructor(resourceType?: string, resourceId?: string) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
    }
    public withResourceType(resourceType: BatchCreateResourceTagsRequestResourceTypeEnum | string): BatchCreateResourceTagsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: BatchCreateResourceTagsRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): BatchCreateResourceTagsRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): BatchCreateResourceTagsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withBody(body: BatchCreateResourceTagsRequestBody): BatchCreateResourceTagsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchCreateResourceTagsRequestResourceTypeEnum {
    DLI_QUEUE = 'dli_queue',
    DLI_ENHANCED_DATASOURCE = 'dli_enhanced_datasource',
    DLI_DATABASE = 'dli_database',
    DLI_PACKAGE_RESOURCE = 'dli_package_resource',
    DLI_FLINK_JOB = 'dli_flink_job',
    DLI_ELASTIC_RESOURCE_POOL = 'dli_elastic_resource_pool'
}
