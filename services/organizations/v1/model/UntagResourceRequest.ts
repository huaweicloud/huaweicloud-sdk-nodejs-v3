import { UntagResourceReqBody } from './UntagResourceReqBody';


export class UntagResourceRequest {
    private 'X-Security-Token'?: string;
    private 'resource_id'?: string;
    public body?: UntagResourceReqBody;
    public constructor(resourceId?: string) { 
        this['resource_id'] = resourceId;
    }
    public withXSecurityToken(xSecurityToken: string): UntagResourceRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withResourceId(resourceId: string): UntagResourceRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withBody(body: UntagResourceReqBody): UntagResourceRequest {
        this['body'] = body;
        return this;
    }
}