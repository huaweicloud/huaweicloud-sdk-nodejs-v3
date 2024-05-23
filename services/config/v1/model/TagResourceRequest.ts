import { TagsReq } from './TagsReq';


export class TagResourceRequest {
    private 'resource_type'?: TagResourceRequestResourceTypeEnum | string;
    private 'resource_id'?: string;
    public body?: TagsReq;
    public constructor(resourceType?: string, resourceId?: string) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
    }
    public withResourceType(resourceType: TagResourceRequestResourceTypeEnum | string): TagResourceRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: TagResourceRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): TagResourceRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): TagResourceRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withBody(body: TagsReq): TagResourceRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TagResourceRequestResourceTypeEnum {
    CONFIGPOLICYASSIGNMENTS = 'config:policyAssignments'
}
