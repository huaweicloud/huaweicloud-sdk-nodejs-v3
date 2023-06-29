import { UpdateStartedConfigReqBody } from './UpdateStartedConfigReqBody';


export class UpdateStartedConfConfigRequest {
    public conferenceID: string;
    private 'X-Conference-Authorization': string | undefined;
    public body?: UpdateStartedConfigReqBody;
    public constructor(conferenceID?: any, xConferenceAuthorization?: any) { 
        this['conferenceID'] = conferenceID;
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public withConferenceID(conferenceID: string): UpdateStartedConfConfigRequest {
        this['conferenceID'] = conferenceID;
        return this;
    }
    public withXConferenceAuthorization(xConferenceAuthorization: string): UpdateStartedConfConfigRequest {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
        return this;
    }
    public set xConferenceAuthorization(xConferenceAuthorization: string | undefined) {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public get xConferenceAuthorization() {
        return this['X-Conference-Authorization'];
    }
    public withBody(body: UpdateStartedConfigReqBody): UpdateStartedConfConfigRequest {
        this['body'] = body;
        return this;
    }
}