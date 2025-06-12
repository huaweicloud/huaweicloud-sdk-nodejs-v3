

export class ListResourcesTagsRequest {
    private 'resource_type'?: ListResourcesTagsRequestResourceTypeEnum | string;
    public constructor(resourceType?: string) { 
        this['resource_type'] = resourceType;
    }
    public withResourceType(resourceType: ListResourcesTagsRequestResourceTypeEnum | string): ListResourcesTagsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ListResourcesTagsRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ListResourcesTagsRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListResourcesTagsRequestResourceTypeEnum {
    DLI_QUEUE = 'dli_queue',
    DLI_ENHANCED_DATASOURCE = 'dli_enhanced_datasource',
    DLI_DATABASE = 'dli_database',
    DLI_PACKAGE_RESOURCE = 'dli_package_resource',
    DLI_FLINK_JOB = 'dli_flink_job',
    DLI_ELASTIC_RESOURCE_POOL = 'dli_elastic_resource_pool'
}
