import { DeleteTagResourceReqBody } from './DeleteTagResourceReqBody';


export class DeleteTagResourceRequest {
    private 'X-Security-Token'?: string;
    private 'resource_type'?: DeleteTagResourceRequestResourceTypeEnum | string;
    private 'resource_id'?: string;
    public body?: DeleteTagResourceReqBody;
    public constructor(resourceType?: string, resourceId?: string) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
    }
    public withXSecurityToken(xSecurityToken: string): DeleteTagResourceRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
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
    public withBody(body: DeleteTagResourceReqBody): DeleteTagResourceRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteTagResourceRequestResourceTypeEnum {
    IDENTITYCENTERPERMISSIONSET = 'identitycenter:permissionset'
}
