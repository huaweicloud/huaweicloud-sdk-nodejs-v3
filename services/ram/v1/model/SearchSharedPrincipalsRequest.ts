import { SearchSharedPrincipalsReqBody } from './SearchSharedPrincipalsReqBody';


export class SearchSharedPrincipalsRequest {
    private 'X-Security-Token'?: string;
    public body?: SearchSharedPrincipalsReqBody;
    public constructor() { 
    }
    public withXSecurityToken(xSecurityToken: string): SearchSharedPrincipalsRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withBody(body: SearchSharedPrincipalsReqBody): SearchSharedPrincipalsRequest {
        this['body'] = body;
        return this;
    }
}