

export class PulsarNodeChannelConnectionInfoResp {
    public token?: string;
    public constructor() { 
    }
    public withToken(token: string): PulsarNodeChannelConnectionInfoResp {
        this['token'] = token;
        return this;
    }
}