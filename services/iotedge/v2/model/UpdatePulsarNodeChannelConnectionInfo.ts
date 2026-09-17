

export class UpdatePulsarNodeChannelConnectionInfo {
    public token?: string;
    public constructor() { 
    }
    public withToken(token: string): UpdatePulsarNodeChannelConnectionInfo {
        this['token'] = token;
        return this;
    }
}