import { PauseConferenceReq } from './PauseConferenceReq';


export class PauseConferenceRequest {
    public conferenceID?: string;
    private 'X-Conference-Authorization'?: string;
    public body?: PauseConferenceReq;
    public constructor(conferenceID?: string, xConferenceAuthorization?: string) { 
        this['conferenceID'] = conferenceID;
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public withConferenceID(conferenceID: string): PauseConferenceRequest {
        this['conferenceID'] = conferenceID;
        return this;
    }
    public withXConferenceAuthorization(xConferenceAuthorization: string): PauseConferenceRequest {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
        return this;
    }
    public set xConferenceAuthorization(xConferenceAuthorization: string  | undefined) {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public get xConferenceAuthorization(): string | undefined {
        return this['X-Conference-Authorization'];
    }
    public withBody(body: PauseConferenceReq): PauseConferenceRequest {
        this['body'] = body;
        return this;
    }
}