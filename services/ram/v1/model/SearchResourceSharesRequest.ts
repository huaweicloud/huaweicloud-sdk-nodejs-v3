import { SearchResourceSharesReqBody } from './SearchResourceSharesReqBody';


export class SearchResourceSharesRequest {
    private 'X-Security-Token'?: string;
    public body?: SearchResourceSharesReqBody;
    public constructor() { 
    }
    public withXSecurityToken(xSecurityToken: string): SearchResourceSharesRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withBody(body: SearchResourceSharesReqBody): SearchResourceSharesRequest {
        this['body'] = body;
        return this;
    }
}