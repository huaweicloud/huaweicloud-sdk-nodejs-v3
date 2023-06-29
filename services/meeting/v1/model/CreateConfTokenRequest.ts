

export class CreateConfTokenRequest {
    public conferenceID: string;
    private 'X-Conference-Authorization'?: string | undefined;
    private 'X-Password': string | undefined;
    private 'X-Login-Type': number | undefined;
    private 'X-Nonce'?: string | undefined;
    public constructor(conferenceID?: any, xPassword?: any, xLoginType?: any) { 
        this['conferenceID'] = conferenceID;
        this['X-Password'] = xPassword;
        this['X-Login-Type'] = xLoginType;
    }
    public withConferenceID(conferenceID: string): CreateConfTokenRequest {
        this['conferenceID'] = conferenceID;
        return this;
    }
    public withXConferenceAuthorization(xConferenceAuthorization: string): CreateConfTokenRequest {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
        return this;
    }
    public set xConferenceAuthorization(xConferenceAuthorization: string | undefined) {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public get xConferenceAuthorization() {
        return this['X-Conference-Authorization'];
    }
    public withXPassword(xPassword: string): CreateConfTokenRequest {
        this['X-Password'] = xPassword;
        return this;
    }
    public set xPassword(xPassword: string | undefined) {
        this['X-Password'] = xPassword;
    }
    public get xPassword() {
        return this['X-Password'];
    }
    public withXLoginType(xLoginType: number): CreateConfTokenRequest {
        this['X-Login-Type'] = xLoginType;
        return this;
    }
    public set xLoginType(xLoginType: number | undefined) {
        this['X-Login-Type'] = xLoginType;
    }
    public get xLoginType() {
        return this['X-Login-Type'];
    }
    public withXNonce(xNonce: string): CreateConfTokenRequest {
        this['X-Nonce'] = xNonce;
        return this;
    }
    public set xNonce(xNonce: string | undefined) {
        this['X-Nonce'] = xNonce;
    }
    public get xNonce() {
        return this['X-Nonce'];
    }
}