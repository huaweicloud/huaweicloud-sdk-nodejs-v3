import { RestAllowAudienceReqBody } from './RestAllowAudienceReqBody';


export class AllowAudienceJoinRequest {
    public conferenceID?: string;
    private 'X-Conference-Authorization'?: string;
    public body?: RestAllowAudienceReqBody;
    public constructor(conferenceID?: string, xConferenceAuthorization?: string) { 
        this['conferenceID'] = conferenceID;
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public withConferenceID(conferenceID: string): AllowAudienceJoinRequest {
        this['conferenceID'] = conferenceID;
        return this;
    }
    public withXConferenceAuthorization(xConferenceAuthorization: string): AllowAudienceJoinRequest {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
        return this;
    }
    public set xConferenceAuthorization(xConferenceAuthorization: string  | undefined) {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public get xConferenceAuthorization(): string | undefined {
        return this['X-Conference-Authorization'];
    }
    public withBody(body: RestAllowAudienceReqBody): AllowAudienceJoinRequest {
        this['body'] = body;
        return this;
    }
}