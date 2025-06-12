import { ListResourcesByTagsRequestBody } from './ListResourcesByTagsRequestBody';


export class ListResourcesByTagsRequest {
    private 'resource_type'?: ListResourcesByTagsRequestResourceTypeEnum | string;
    public limit?: number;
    public offset?: number;
    public body?: ListResourcesByTagsRequestBody;
    public constructor(resourceType?: string) { 
        this['resource_type'] = resourceType;
    }
    public withResourceType(resourceType: ListResourcesByTagsRequestResourceTypeEnum | string): ListResourcesByTagsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ListResourcesByTagsRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ListResourcesByTagsRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withLimit(limit: number): ListResourcesByTagsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListResourcesByTagsRequest {
        this['offset'] = offset;
        return this;
    }
    public withBody(body: ListResourcesByTagsRequestBody): ListResourcesByTagsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListResourcesByTagsRequestResourceTypeEnum {
    DLI_QUEUE = 'dli_queue',
    DLI_ENHANCED_DATASOURCE = 'dli_enhanced_datasource',
    DLI_DATABASE = 'dli_database',
    DLI_PACKAGE_RESOURCE = 'dli_package_resource',
    DLI_FLINK_JOB = 'dli_flink_job',
    DLI_ELASTIC_RESOURCE_POOL = 'dli_elastic_resource_pool'
}
