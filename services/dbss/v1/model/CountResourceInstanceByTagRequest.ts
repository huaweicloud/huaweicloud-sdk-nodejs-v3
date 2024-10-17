import { ResourceInstanceTagRequest } from './ResourceInstanceTagRequest';


export class CountResourceInstanceByTagRequest {
    private 'resource_type'?: CountResourceInstanceByTagRequestResourceTypeEnum | string;
    public body?: ResourceInstanceTagRequest;
    public constructor(resourceType?: string) { 
        this['resource_type'] = resourceType;
    }
    public withResourceType(resourceType: CountResourceInstanceByTagRequestResourceTypeEnum | string): CountResourceInstanceByTagRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: CountResourceInstanceByTagRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): CountResourceInstanceByTagRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withBody(body: ResourceInstanceTagRequest): CountResourceInstanceByTagRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CountResourceInstanceByTagRequestResourceTypeEnum {
    AUDITINSTANCE = 'auditInstance'
}
