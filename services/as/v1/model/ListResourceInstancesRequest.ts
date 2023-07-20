import { QueryTagsOption } from './QueryTagsOption';


export class ListResourceInstancesRequest {
    private 'resource_type'?: ListResourceInstancesRequestResourceTypeEnum | string;
    public body?: QueryTagsOption;
    public constructor(resourceType?: string) { 
        this['resource_type'] = resourceType;
    }
    public withResourceType(resourceType: ListResourceInstancesRequestResourceTypeEnum | string): ListResourceInstancesRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ListResourceInstancesRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ListResourceInstancesRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withBody(body: QueryTagsOption): ListResourceInstancesRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListResourceInstancesRequestResourceTypeEnum {
    SCALING_GROUP_TAG = 'scaling_group_tag'
}
