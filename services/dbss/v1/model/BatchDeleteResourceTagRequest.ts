import { ResourceTagDeleteRequest } from './ResourceTagDeleteRequest';


export class BatchDeleteResourceTagRequest {
    private 'resource_type'?: BatchDeleteResourceTagRequestResourceTypeEnum | string;
    private 'resource_id'?: string;
    public body?: ResourceTagDeleteRequest;
    public constructor(resourceType?: string, resourceId?: string) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
    }
    public withResourceType(resourceType: BatchDeleteResourceTagRequestResourceTypeEnum | string): BatchDeleteResourceTagRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: BatchDeleteResourceTagRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): BatchDeleteResourceTagRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): BatchDeleteResourceTagRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withBody(body: ResourceTagDeleteRequest): BatchDeleteResourceTagRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchDeleteResourceTagRequestResourceTypeEnum {
    AUDITINSTANCE = 'auditInstance'
}
