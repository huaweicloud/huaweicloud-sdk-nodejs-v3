import { RestInviteWithPwdReqBody } from './RestInviteWithPwdReqBody';


export class InviteWithPwdRequest {
    public conferenceID: string;
    public body?: RestInviteWithPwdReqBody;
    public constructor(conferenceID?: any) { 
        this['conferenceID'] = conferenceID;
    }
    public withConferenceID(conferenceID: string): InviteWithPwdRequest {
        this['conferenceID'] = conferenceID;
        return this;
    }
    public withBody(body: RestInviteWithPwdReqBody): InviteWithPwdRequest {
        this['body'] = body;
        return this;
    }
}