import { RestSetInterpreterGroupBody } from './RestSetInterpreterGroupBody';


export class SetInterpreterGroupRequest {
    public conferenceID?: string;
    private 'X-Conference-Authorization'?: string;
    public body?: RestSetInterpreterGroupBody;
    public constructor(conferenceID?: string, xConferenceAuthorization?: string) { 
        this['conferenceID'] = conferenceID;
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public withConferenceID(conferenceID: string): SetInterpreterGroupRequest {
        this['conferenceID'] = conferenceID;
        return this;
    }
    public withXConferenceAuthorization(xConferenceAuthorization: string): SetInterpreterGroupRequest {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
        return this;
    }
    public set xConferenceAuthorization(xConferenceAuthorization: string  | undefined) {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public get xConferenceAuthorization(): string | undefined {
        return this['X-Conference-Authorization'];
    }
    public withBody(body: RestSetInterpreterGroupBody): SetInterpreterGroupRequest {
        this['body'] = body;
        return this;
    }
}