import { ResourceSharesByTagsReqBody } from './ResourceSharesByTagsReqBody';


export class ListResourceSharesByTagsRequest {
    public limit?: number;
    public offset?: string;
    private 'X-Security-Token'?: string;
    public body?: ResourceSharesByTagsReqBody;
    public constructor() { 
    }
    public withLimit(limit: number): ListResourceSharesByTagsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListResourceSharesByTagsRequest {
        this['offset'] = offset;
        return this;
    }
    public withXSecurityToken(xSecurityToken: string): ListResourceSharesByTagsRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withBody(body: ResourceSharesByTagsReqBody): ListResourceSharesByTagsRequest {
        this['body'] = body;
        return this;
    }
}