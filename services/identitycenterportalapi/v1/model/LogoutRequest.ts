

export class LogoutRequest {
    private 'access-token'?: string;
    public constructor(accessToken?: string) { 
        this['access-token'] = accessToken;
    }
    public withAccessToken(accessToken: string): LogoutRequest {
        this['access-token'] = accessToken;
        return this;
    }
    public set accessToken(accessToken: string  | undefined) {
        this['access-token'] = accessToken;
    }
    public get accessToken(): string | undefined {
        return this['access-token'];
    }
}