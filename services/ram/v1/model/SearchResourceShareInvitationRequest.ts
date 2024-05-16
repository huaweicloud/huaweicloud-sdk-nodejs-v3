import { SearchResourceShareInvitationReqBody } from './SearchResourceShareInvitationReqBody';


export class SearchResourceShareInvitationRequest {
    public body?: SearchResourceShareInvitationReqBody;
    public constructor() { 
    }
    public withBody(body: SearchResourceShareInvitationReqBody): SearchResourceShareInvitationRequest {
        this['body'] = body;
        return this;
    }
}