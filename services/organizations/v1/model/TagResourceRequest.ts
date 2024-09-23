import { TagResourceReqBody } from './TagResourceReqBody';


export class TagResourceRequest {
    private 'X-Security-Token'?: string;
    private 'resource_id'?: string;
    public body?: TagResourceReqBody;
    public constructor(resourceId?: string) { 
        this['resource_id'] = resourceId;
    }
    public withXSecurityToken(xSecurityToken: string): TagResourceRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
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
    public withBody(body: TagResourceReqBody): TagResourceRequest {
        this['body'] = body;
        return this;
    }
}