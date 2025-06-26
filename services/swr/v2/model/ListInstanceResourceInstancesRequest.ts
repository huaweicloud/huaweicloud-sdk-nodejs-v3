import { ListResourceInstancesRequestBody } from './ListResourceInstancesRequestBody';


export class ListInstanceResourceInstancesRequest {
    private 'resource_type'?: ListInstanceResourceInstancesRequestResourceTypeEnum | string;
    public offset?: number;
    public limit?: number;
    public body?: ListResourceInstancesRequestBody;
    public constructor(resourceType?: string) { 
        this['resource_type'] = resourceType;
    }
    public withResourceType(resourceType: ListInstanceResourceInstancesRequestResourceTypeEnum | string): ListInstanceResourceInstancesRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ListInstanceResourceInstancesRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ListInstanceResourceInstancesRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withOffset(offset: number): ListInstanceResourceInstancesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListInstanceResourceInstancesRequest {
        this['limit'] = limit;
        return this;
    }
    public withBody(body: ListResourceInstancesRequestBody): ListInstanceResourceInstancesRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListInstanceResourceInstancesRequestResourceTypeEnum {
    INSTANCES = 'instances'
}
