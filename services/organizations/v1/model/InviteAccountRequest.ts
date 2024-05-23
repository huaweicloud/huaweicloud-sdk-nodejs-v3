import { InviteAccountReqBody } from './InviteAccountReqBody';


export class InviteAccountRequest {
    public body?: InviteAccountReqBody;
    public constructor() { 
    }
    public withBody(body: InviteAccountReqBody): InviteAccountRequest {
        this['body'] = body;
        return this;
    }
}