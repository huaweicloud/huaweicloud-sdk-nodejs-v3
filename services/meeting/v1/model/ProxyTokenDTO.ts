

export class ProxyTokenDTO {
    public accessToken: string;
    public longAccessToken?: string;
    public validPeriod?: number;
    public middleEndUrl?: string;
    public middleEndInnerUrl?: string;
    public enableRerouting?: boolean;
    public constructor(accessToken?: any) { 
        this['accessToken'] = accessToken;
    }
    public withAccessToken(accessToken: string): ProxyTokenDTO {
        this['accessToken'] = accessToken;
        return this;
    }
    public withLongAccessToken(longAccessToken: string): ProxyTokenDTO {
        this['longAccessToken'] = longAccessToken;
        return this;
    }
    public withValidPeriod(validPeriod: number): ProxyTokenDTO {
        this['validPeriod'] = validPeriod;
        return this;
    }
    public withMiddleEndUrl(middleEndUrl: string): ProxyTokenDTO {
        this['middleEndUrl'] = middleEndUrl;
        return this;
    }
    public withMiddleEndInnerUrl(middleEndInnerUrl: string): ProxyTokenDTO {
        this['middleEndInnerUrl'] = middleEndInnerUrl;
        return this;
    }
    public withEnableRerouting(enableRerouting: boolean): ProxyTokenDTO {
        this['enableRerouting'] = enableRerouting;
        return this;
    }
}