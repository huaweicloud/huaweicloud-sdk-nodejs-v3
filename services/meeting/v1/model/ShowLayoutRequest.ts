

export class ShowLayoutRequest {
    public conferenceID: string;
    private 'X-Conference-Authorization': string | undefined;
    public constructor(conferenceID?: any, xConferenceAuthorization?: any) { 
        this['conferenceID'] = conferenceID;
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public withConferenceID(conferenceID: string): ShowLayoutRequest {
        this['conferenceID'] = conferenceID;
        return this;
    }
    public withXConferenceAuthorization(xConferenceAuthorization: string): ShowLayoutRequest {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
        return this;
    }
    public set xConferenceAuthorization(xConferenceAuthorization: string | undefined) {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public get xConferenceAuthorization() {
        return this['X-Conference-Authorization'];
    }
}