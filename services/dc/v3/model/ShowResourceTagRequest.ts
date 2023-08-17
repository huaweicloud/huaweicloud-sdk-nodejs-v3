

export class ShowResourceTagRequest {
    private 'resource_type'?: ShowResourceTagRequestResourceTypeEnum | string;
    private 'resource_id'?: string;
    public constructor(resourceType?: string, resourceId?: string) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
    }
    public withResourceType(resourceType: ShowResourceTagRequestResourceTypeEnum | string): ShowResourceTagRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ShowResourceTagRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ShowResourceTagRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): ShowResourceTagRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowResourceTagRequestResourceTypeEnum {
    DC_DIRECTCONNECT = 'dc-directconnect',
    DC_VGW = 'dc-vgw',
    DC_VIF = 'dc-vif',
    DC_LAG = 'dc-lag'
}
