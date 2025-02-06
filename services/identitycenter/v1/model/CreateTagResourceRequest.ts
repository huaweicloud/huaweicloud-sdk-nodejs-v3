import { TagResourceReqBody } from './TagResourceReqBody';


export class CreateTagResourceRequest {
    private 'X-Security-Token'?: string;
    private 'resource_type'?: CreateTagResourceRequestResourceTypeEnum | string;
    private 'resource_id'?: string;
    public body?: TagResourceReqBody;
    public constructor(resourceType?: string, resourceId?: string) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
    }
    public withXSecurityToken(xSecurityToken: string): CreateTagResourceRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
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
    IDENTITYCENTERPERMISSIONSET = 'identitycenter:permissionset'
}
