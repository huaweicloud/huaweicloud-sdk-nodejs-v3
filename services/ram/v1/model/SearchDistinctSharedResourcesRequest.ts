import { SearchDistinctSharedResourcesReqBody } from './SearchDistinctSharedResourcesReqBody';


export class SearchDistinctSharedResourcesRequest {
    private 'X-Security-Token'?: string;
    public body?: SearchDistinctSharedResourcesReqBody;
    public constructor() { 
    }
    public withXSecurityToken(xSecurityToken: string): SearchDistinctSharedResourcesRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withBody(body: SearchDistinctSharedResourcesReqBody): SearchDistinctSharedResourcesRequest {
        this['body'] = body;
        return this;
    }
}