import { RestPicLayoutBody } from './RestPicLayoutBody';


export class SaveLayoutRequest {
    public conferenceID?: string;
    private 'X-Conference-Authorization'?: string;
    public body?: RestPicLayoutBody;
    public constructor(conferenceID?: string, xConferenceAuthorization?: string) { 
        this['conferenceID'] = conferenceID;
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public withConferenceID(conferenceID: string): SaveLayoutRequest {
        this['conferenceID'] = conferenceID;
        return this;
    }
    public withXConferenceAuthorization(xConferenceAuthorization: string): SaveLayoutRequest {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
        return this;
    }
    public set xConferenceAuthorization(xConferenceAuthorization: string  | undefined) {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public get xConferenceAuthorization(): string | undefined {
        return this['X-Conference-Authorization'];
    }
    public withBody(body: RestPicLayoutBody): SaveLayoutRequest {
        this['body'] = body;
        return this;
    }
}