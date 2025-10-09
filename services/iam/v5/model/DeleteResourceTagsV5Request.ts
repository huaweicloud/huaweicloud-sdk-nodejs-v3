

export class DeleteResourceTagsV5Request {
    private 'resource_id'?: string;
    private 'resource_type'?: DeleteResourceTagsV5RequestResourceTypeEnum | string;
    public body?: Array<string>;
    public constructor(resourceId?: string, resourceType?: string) { 
        this['resource_id'] = resourceId;
        this['resource_type'] = resourceType;
    }
    public withResourceId(resourceId: string): DeleteResourceTagsV5Request {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceType(resourceType: DeleteResourceTagsV5RequestResourceTypeEnum | string): DeleteResourceTagsV5Request {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: DeleteResourceTagsV5RequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): DeleteResourceTagsV5RequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withBody(body: Array<string>): DeleteResourceTagsV5Request {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteResourceTagsV5RequestResourceTypeEnum {
    AGENCY = 'agency',
    USER = 'user'
}
