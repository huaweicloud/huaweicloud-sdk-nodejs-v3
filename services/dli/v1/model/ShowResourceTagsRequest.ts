

export class ShowResourceTagsRequest {
    private 'resource_type'?: ShowResourceTagsRequestResourceTypeEnum | string;
    private 'resource_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(resourceType?: string, resourceId?: string) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
    }
    public withResourceType(resourceType: ShowResourceTagsRequestResourceTypeEnum | string): ShowResourceTagsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ShowResourceTagsRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ShowResourceTagsRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): ShowResourceTagsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withLimit(limit: number): ShowResourceTagsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowResourceTagsRequest {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowResourceTagsRequestResourceTypeEnum {
    DLI_QUEUE = 'dli_queue',
    DLI_ENHANCED_DATASOURCE = 'dli_enhanced_datasource',
    DLI_DATABASE = 'dli_database',
    DLI_PACKAGE_RESOURCE = 'dli_package_resource',
    DLI_FLINK_JOB = 'dli_flink_job',
    DLI_ELASTIC_RESOURCE_POOL = 'dli_elastic_resource_pool'
}
