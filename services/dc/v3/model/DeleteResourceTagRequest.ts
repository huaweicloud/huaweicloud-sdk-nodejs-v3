

export class DeleteResourceTagRequest {
    public key?: string;
    private 'resource_id'?: string;
    private 'resource_type'?: DeleteResourceTagRequestResourceTypeEnum | string;
    public constructor(key?: string, resourceId?: string, resourceType?: string) { 
        this['key'] = key;
        this['resource_id'] = resourceId;
        this['resource_type'] = resourceType;
    }
    public withKey(key: string): DeleteResourceTagRequest {
        this['key'] = key;
        return this;
    }
    public withResourceId(resourceId: string): DeleteResourceTagRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceType(resourceType: DeleteResourceTagRequestResourceTypeEnum | string): DeleteResourceTagRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: DeleteResourceTagRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): DeleteResourceTagRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteResourceTagRequestResourceTypeEnum {
    DC_DIRECTCONNECT = 'dc-directconnect',
    DC_VGW = 'dc-vgw',
    DC_VIF = 'dc-vif',
    DC_LAG = 'dc-lag'
}
