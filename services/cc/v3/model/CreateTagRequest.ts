import { CreateTagRequestBody } from './CreateTagRequestBody';


export class CreateTagRequest {
    private 'resource_id'?: string;
    private 'resource_type'?: CreateTagRequestResourceTypeEnum | string;
    public body?: CreateTagRequestBody;
    public constructor(resourceId?: string, resourceType?: string) { 
        this['resource_id'] = resourceId;
        this['resource_type'] = resourceType;
    }
    public withResourceId(resourceId: string): CreateTagRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceType(resourceType: CreateTagRequestResourceTypeEnum | string): CreateTagRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: CreateTagRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): CreateTagRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withBody(body: CreateTagRequestBody): CreateTagRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateTagRequestResourceTypeEnum {
    CLOUD_CONNECTION = 'cloud-connection',
    BANDWIDTH_PACKAGE = 'bandwidth-package'
}
