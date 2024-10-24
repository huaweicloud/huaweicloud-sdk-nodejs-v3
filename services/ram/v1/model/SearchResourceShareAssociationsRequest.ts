import { SearchResourceShareAssociationsReqBody } from './SearchResourceShareAssociationsReqBody';


export class SearchResourceShareAssociationsRequest {
    private 'X-Security-Token'?: string;
    public body?: SearchResourceShareAssociationsReqBody;
    public constructor() { 
    }
    public withXSecurityToken(xSecurityToken: string): SearchResourceShareAssociationsRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withBody(body: SearchResourceShareAssociationsReqBody): SearchResourceShareAssociationsRequest {
        this['body'] = body;
        return this;
    }
}