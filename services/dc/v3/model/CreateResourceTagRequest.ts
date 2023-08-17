import { CreateResourceTagRequestBody } from './CreateResourceTagRequestBody';


export class CreateResourceTagRequest {
    private 'resource_id'?: string;
    private 'resource_type'?: CreateResourceTagRequestResourceTypeEnum | string;
    public body?: CreateResourceTagRequestBody;
    public constructor(resourceId?: string, resourceType?: string) { 
        this['resource_id'] = resourceId;
        this['resource_type'] = resourceType;
    }
    public withResourceId(resourceId: string): CreateResourceTagRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceType(resourceType: CreateResourceTagRequestResourceTypeEnum | string): CreateResourceTagRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: CreateResourceTagRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): CreateResourceTagRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withBody(body: CreateResourceTagRequestBody): CreateResourceTagRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateResourceTagRequestResourceTypeEnum {
    DC_DIRECTCONNECT = 'dc-directconnect',
    DC_VGW = 'dc-vgw',
    DC_VIF = 'dc-vif',
    DC_LAG = 'dc-lag'
}
