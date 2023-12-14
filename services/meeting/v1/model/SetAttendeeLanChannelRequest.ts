import { RestSetAttendeeLanChannelBody } from './RestSetAttendeeLanChannelBody';


export class SetAttendeeLanChannelRequest {
    public conferenceID?: string;
    private 'X-Conference-Authorization'?: string;
    public body?: RestSetAttendeeLanChannelBody;
    public constructor(conferenceID?: string, xConferenceAuthorization?: string) { 
        this['conferenceID'] = conferenceID;
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public withConferenceID(conferenceID: string): SetAttendeeLanChannelRequest {
        this['conferenceID'] = conferenceID;
        return this;
    }
    public withXConferenceAuthorization(xConferenceAuthorization: string): SetAttendeeLanChannelRequest {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
        return this;
    }
    public set xConferenceAuthorization(xConferenceAuthorization: string  | undefined) {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public get xConferenceAuthorization(): string | undefined {
        return this['X-Conference-Authorization'];
    }
    public withBody(body: RestSetAttendeeLanChannelBody): SetAttendeeLanChannelRequest {
        this['body'] = body;
        return this;
    }
}