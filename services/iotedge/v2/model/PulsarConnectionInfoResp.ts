

export class PulsarConnectionInfoResp {
    public token?: string;
    public constructor() { 
    }
    public withToken(token: string): PulsarConnectionInfoResp {
        this['token'] = token;
        return this;
    }
}