import { Tags } from './Tags';


export class TagResourceV5Request {
    private 'resource_id'?: string;
    private 'resource_type'?: TagResourceV5RequestResourceTypeEnum | string;
    public body?: Tags;
    public constructor(resourceId?: string, resourceType?: string) { 
        this['resource_id'] = resourceId;
        this['resource_type'] = resourceType;
    }
    public withResourceId(resourceId: string): TagResourceV5Request {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceType(resourceType: TagResourceV5RequestResourceTypeEnum | string): TagResourceV5Request {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: TagResourceV5RequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): TagResourceV5RequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withBody(body: Tags): TagResourceV5Request {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TagResourceV5RequestResourceTypeEnum {
    AGENCY = 'agency',
    USER = 'user'
}
