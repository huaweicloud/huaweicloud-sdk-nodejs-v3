import { SearchDistinctSharedPrincipalsReqBody } from './SearchDistinctSharedPrincipalsReqBody';


export class SearchDistinctPrincipalsRequest {
    private 'X-Security-Token'?: string;
    public body?: SearchDistinctSharedPrincipalsReqBody;
    public constructor() { 
    }
    public withXSecurityToken(xSecurityToken: string): SearchDistinctPrincipalsRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withBody(body: SearchDistinctSharedPrincipalsReqBody): SearchDistinctPrincipalsRequest {
        this['body'] = body;
        return this;
    }
}