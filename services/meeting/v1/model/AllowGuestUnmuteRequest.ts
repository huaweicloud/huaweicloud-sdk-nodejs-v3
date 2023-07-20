import { RestAllowUnMuteReqBody } from './RestAllowUnMuteReqBody';


export class AllowGuestUnmuteRequest {
    public conferenceID?: string;
    private 'X-Conference-Authorization'?: string;
    public body?: RestAllowUnMuteReqBody;
    public constructor(conferenceID?: string, xConferenceAuthorization?: string) { 
        this['conferenceID'] = conferenceID;
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public withConferenceID(conferenceID: string): AllowGuestUnmuteRequest {
        this['conferenceID'] = conferenceID;
        return this;
    }
    public withXConferenceAuthorization(xConferenceAuthorization: string): AllowGuestUnmuteRequest {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
        return this;
    }
    public set xConferenceAuthorization(xConferenceAuthorization: string  | undefined) {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public get xConferenceAuthorization(): string | undefined {
        return this['X-Conference-Authorization'];
    }
    public withBody(body: RestAllowUnMuteReqBody): AllowGuestUnmuteRequest {
        this['body'] = body;
        return this;
    }
}