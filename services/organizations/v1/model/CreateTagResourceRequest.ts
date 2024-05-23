import { TagResourceReqBody } from './TagResourceReqBody';


export class CreateTagResourceRequest {
    private 'resource_type'?: CreateTagResourceRequestResourceTypeEnum | string;
    private 'resource_id'?: string;
    public body?: TagResourceReqBody;
    public constructor(resourceType?: string, resourceId?: string) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
    }
    public withResourceType(resourceType: CreateTagResourceRequestResourceTypeEnum | string): CreateTagResourceRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: CreateTagResourceRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): CreateTagResourceRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): CreateTagResourceRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withBody(body: TagResourceReqBody): CreateTagResourceRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateTagResourceRequestResourceTypeEnum {
    ORGANIZATIONSPOLICIES = 'organizations:policies',
    ORGANIZATIONSOUS = 'organizations:ous',
    ORGANIZATIONSACCOUNTS = 'organizations:accounts',
    ORGANIZATIONSROOTS = 'organizations:roots'
}
