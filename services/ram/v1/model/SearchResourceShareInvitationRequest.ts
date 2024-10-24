import { SearchResourceShareInvitationReqBody } from './SearchResourceShareInvitationReqBody';


export class SearchResourceShareInvitationRequest {
    private 'X-Security-Token'?: string;
    public body?: SearchResourceShareInvitationReqBody;
    public constructor() { 
    }
    public withXSecurityToken(xSecurityToken: string): SearchResourceShareInvitationRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withBody(body: SearchResourceShareInvitationReqBody): SearchResourceShareInvitationRequest {
        this['body'] = body;
        return this;
    }
}