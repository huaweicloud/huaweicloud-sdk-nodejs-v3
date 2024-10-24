import { TagResourceReqBody } from './TagResourceReqBody';


export class BatchCreateResourceShareTagsRequest {
    private 'resource_share_id'?: string;
    private 'X-Security-Token'?: string;
    public body?: TagResourceReqBody;
    public constructor(resourceShareId?: string) { 
        this['resource_share_id'] = resourceShareId;
    }
    public withResourceShareId(resourceShareId: string): BatchCreateResourceShareTagsRequest {
        this['resource_share_id'] = resourceShareId;
        return this;
    }
    public set resourceShareId(resourceShareId: string  | undefined) {
        this['resource_share_id'] = resourceShareId;
    }
    public get resourceShareId(): string | undefined {
        return this['resource_share_id'];
    }
    public withXSecurityToken(xSecurityToken: string): BatchCreateResourceShareTagsRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withBody(body: TagResourceReqBody): BatchCreateResourceShareTagsRequest {
        this['body'] = body;
        return this;
    }
}