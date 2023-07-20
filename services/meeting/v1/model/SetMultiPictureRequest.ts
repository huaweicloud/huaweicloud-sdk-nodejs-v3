import { RestMixedPictureBody } from './RestMixedPictureBody';


export class SetMultiPictureRequest {
    public conferenceID?: string;
    private 'X-Conference-Authorization'?: string;
    public body?: RestMixedPictureBody;
    public constructor(conferenceID?: string, xConferenceAuthorization?: string) { 
        this['conferenceID'] = conferenceID;
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public withConferenceID(conferenceID: string): SetMultiPictureRequest {
        this['conferenceID'] = conferenceID;
        return this;
    }
    public withXConferenceAuthorization(xConferenceAuthorization: string): SetMultiPictureRequest {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
        return this;
    }
    public set xConferenceAuthorization(xConferenceAuthorization: string  | undefined) {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public get xConferenceAuthorization(): string | undefined {
        return this['X-Conference-Authorization'];
    }
    public withBody(body: RestMixedPictureBody): SetMultiPictureRequest {
        this['body'] = body;
        return this;
    }
}