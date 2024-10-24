import { SearchSharedResourcesReqBody } from './SearchSharedResourcesReqBody';


export class SearchSharedResourcesRequest {
    private 'X-Security-Token'?: string;
    public body?: SearchSharedResourcesReqBody;
    public constructor() { 
    }
    public withXSecurityToken(xSecurityToken: string): SearchSharedResourcesRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withBody(body: SearchSharedResourcesReqBody): SearchSharedResourcesRequest {
        this['body'] = body;
        return this;
    }
}