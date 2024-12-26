

export class SearchPrivateCorpDigitalInfoRequest {
    public conferenceID?: string;
    private 'X-Conference-Authorization'?: string;
    public account?: string;
    public language?: string;
    public constructor(conferenceID?: string, xConferenceAuthorization?: string, account?: string, language?: string) { 
        this['conferenceID'] = conferenceID;
        this['X-Conference-Authorization'] = xConferenceAuthorization;
        this['account'] = account;
        this['language'] = language;
    }
    public withConferenceID(conferenceID: string): SearchPrivateCorpDigitalInfoRequest {
        this['conferenceID'] = conferenceID;
        return this;
    }
    public withXConferenceAuthorization(xConferenceAuthorization: string): SearchPrivateCorpDigitalInfoRequest {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
        return this;
    }
    public set xConferenceAuthorization(xConferenceAuthorization: string  | undefined) {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public get xConferenceAuthorization(): string | undefined {
        return this['X-Conference-Authorization'];
    }
    public withAccount(account: string): SearchPrivateCorpDigitalInfoRequest {
        this['account'] = account;
        return this;
    }
    public withLanguage(language: string): SearchPrivateCorpDigitalInfoRequest {
        this['language'] = language;
        return this;
    }
}