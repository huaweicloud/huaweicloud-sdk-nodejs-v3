

export class SearchCorpDigitalInfoListRequest {
    public conferenceID?: string;
    private 'X-Conference-Authorization'?: string;
    public type?: string;
    public language?: string;
    public constructor(conferenceID?: string, xConferenceAuthorization?: string, type?: string, language?: string) { 
        this['conferenceID'] = conferenceID;
        this['X-Conference-Authorization'] = xConferenceAuthorization;
        this['type'] = type;
        this['language'] = language;
    }
    public withConferenceID(conferenceID: string): SearchCorpDigitalInfoListRequest {
        this['conferenceID'] = conferenceID;
        return this;
    }
    public withXConferenceAuthorization(xConferenceAuthorization: string): SearchCorpDigitalInfoListRequest {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
        return this;
    }
    public set xConferenceAuthorization(xConferenceAuthorization: string  | undefined) {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public get xConferenceAuthorization(): string | undefined {
        return this['X-Conference-Authorization'];
    }
    public withType(type: string): SearchCorpDigitalInfoListRequest {
        this['type'] = type;
        return this;
    }
    public withLanguage(language: string): SearchCorpDigitalInfoListRequest {
        this['language'] = language;
        return this;
    }
}