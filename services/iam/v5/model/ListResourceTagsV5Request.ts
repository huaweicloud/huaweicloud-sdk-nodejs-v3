

export class ListResourceTagsV5Request {
    private 'resource_id'?: string;
    private 'resource_type'?: ListResourceTagsV5RequestResourceTypeEnum | string;
    public constructor(resourceId?: string, resourceType?: string) { 
        this['resource_id'] = resourceId;
        this['resource_type'] = resourceType;
    }
    public withResourceId(resourceId: string): ListResourceTagsV5Request {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceType(resourceType: ListResourceTagsV5RequestResourceTypeEnum | string): ListResourceTagsV5Request {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ListResourceTagsV5RequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ListResourceTagsV5RequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListResourceTagsV5RequestResourceTypeEnum {
    AGENCY = 'agency',
    USER = 'user'
}
