import { RestSwitchModeReqBody } from './RestSwitchModeReqBody';


export class SwitchModeRequest {
    public conferenceID?: string;
    private 'X-Conference-Authorization'?: string;
    public body?: RestSwitchModeReqBody;
    public constructor(conferenceID?: string, xConferenceAuthorization?: string) { 
        this['conferenceID'] = conferenceID;
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public withConferenceID(conferenceID: string): SwitchModeRequest {
        this['conferenceID'] = conferenceID;
        return this;
    }
    public withXConferenceAuthorization(xConferenceAuthorization: string): SwitchModeRequest {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
        return this;
    }
    public set xConferenceAuthorization(xConferenceAuthorization: string  | undefined) {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public get xConferenceAuthorization(): string | undefined {
        return this['X-Conference-Authorization'];
    }
    public withBody(body: RestSwitchModeReqBody): SwitchModeRequest {
        this['body'] = body;
        return this;
    }
}