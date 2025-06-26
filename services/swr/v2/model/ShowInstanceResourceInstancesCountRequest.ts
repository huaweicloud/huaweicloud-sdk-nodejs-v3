import { ListResourceInstancesRequestBody } from './ListResourceInstancesRequestBody';


export class ShowInstanceResourceInstancesCountRequest {
    private 'resource_type'?: ShowInstanceResourceInstancesCountRequestResourceTypeEnum | string;
    public body?: ListResourceInstancesRequestBody;
    public constructor(resourceType?: string) { 
        this['resource_type'] = resourceType;
    }
    public withResourceType(resourceType: ShowInstanceResourceInstancesCountRequestResourceTypeEnum | string): ShowInstanceResourceInstancesCountRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ShowInstanceResourceInstancesCountRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ShowInstanceResourceInstancesCountRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withBody(body: ListResourceInstancesRequestBody): ShowInstanceResourceInstancesCountRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowInstanceResourceInstancesCountRequestResourceTypeEnum {
    INSTANCES = 'instances'
}
