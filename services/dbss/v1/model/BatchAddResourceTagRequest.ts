import { ResourceTagRequest } from './ResourceTagRequest';


export class BatchAddResourceTagRequest {
    private 'resource_type'?: BatchAddResourceTagRequestResourceTypeEnum | string;
    private 'resource_id'?: string;
    public body?: ResourceTagRequest;
    public constructor(resourceType?: string, resourceId?: string) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
    }
    public withResourceType(resourceType: BatchAddResourceTagRequestResourceTypeEnum | string): BatchAddResourceTagRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: BatchAddResourceTagRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): BatchAddResourceTagRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): BatchAddResourceTagRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withBody(body: ResourceTagRequest): BatchAddResourceTagRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchAddResourceTagRequestResourceTypeEnum {
    AUDITINSTANCE = 'auditInstance'
}
