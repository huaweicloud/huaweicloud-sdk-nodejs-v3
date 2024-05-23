import { TagResourceReqBody } from './TagResourceReqBody';


export class DeleteTagResourceRequest {
    private 'resource_type'?: DeleteTagResourceRequestResourceTypeEnum | string;
    private 'resource_id'?: string;
    public body?: TagResourceReqBody;
    public constructor(resourceType?: string, resourceId?: string) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
    }
    public withResourceType(resourceType: DeleteTagResourceRequestResourceTypeEnum | string): DeleteTagResourceRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: DeleteTagResourceRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): DeleteTagResourceRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): DeleteTagResourceRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withBody(body: TagResourceReqBody): DeleteTagResourceRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteTagResourceRequestResourceTypeEnum {
    ORGANIZATIONSPOLICIES = 'organizations:policies',
    ORGANIZATIONSOUS = 'organizations:ous',
    ORGANIZATIONSACCOUNTS = 'organizations:accounts',
    ORGANIZATIONSROOTS = 'organizations:roots'
}
