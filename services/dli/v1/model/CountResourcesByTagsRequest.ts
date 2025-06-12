import { CountResourcesByTagsRequestBody } from './CountResourcesByTagsRequestBody';


export class CountResourcesByTagsRequest {
    private 'resource_type'?: CountResourcesByTagsRequestResourceTypeEnum | string;
    public body?: CountResourcesByTagsRequestBody;
    public constructor(resourceType?: string) { 
        this['resource_type'] = resourceType;
    }
    public withResourceType(resourceType: CountResourcesByTagsRequestResourceTypeEnum | string): CountResourcesByTagsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: CountResourcesByTagsRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): CountResourcesByTagsRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withBody(body: CountResourcesByTagsRequestBody): CountResourcesByTagsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CountResourcesByTagsRequestResourceTypeEnum {
    DLI_QUEUE = 'dli_queue',
    DLI_ENHANCED_DATASOURCE = 'dli_enhanced_datasource',
    DLI_DATABASE = 'dli_database',
    DLI_PACKAGE_RESOURCE = 'dli_package_resource',
    DLI_FLINK_JOB = 'dli_flink_job',
    DLI_ELASTIC_RESOURCE_POOL = 'dli_elastic_resource_pool'
}
