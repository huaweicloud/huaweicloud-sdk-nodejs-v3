import { RestCustomMultiPictureBody } from './RestCustomMultiPictureBody';


export class SetCustomMultiPictureRequest {
    public conferenceID?: string;
    private 'X-Conference-Authorization'?: string;
    public body?: RestCustomMultiPictureBody;
    public constructor(conferenceID?: string, xConferenceAuthorization?: string) { 
        this['conferenceID'] = conferenceID;
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public withConferenceID(conferenceID: string): SetCustomMultiPictureRequest {
        this['conferenceID'] = conferenceID;
        return this;
    }
    public withXConferenceAuthorization(xConferenceAuthorization: string): SetCustomMultiPictureRequest {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
        return this;
    }
    public set xConferenceAuthorization(xConferenceAuthorization: string  | undefined) {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public get xConferenceAuthorization(): string | undefined {
        return this['X-Conference-Authorization'];
    }
    public withBody(body: RestCustomMultiPictureBody): SetCustomMultiPictureRequest {
        this['body'] = body;
        return this;
    }
}