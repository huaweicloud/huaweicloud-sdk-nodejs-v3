import { ResourceSharesByTagsReqBody } from './ResourceSharesByTagsReqBody';


export class SearchResourceShareCountByTagsRequest {
    private 'X-Security-Token'?: string;
    public body?: ResourceSharesByTagsReqBody;
    public constructor() { 
    }
    public withXSecurityToken(xSecurityToken: string): SearchResourceShareCountByTagsRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withBody(body: ResourceSharesByTagsReqBody): SearchResourceShareCountByTagsRequest {
        this['body'] = body;
        return this;
    }
}