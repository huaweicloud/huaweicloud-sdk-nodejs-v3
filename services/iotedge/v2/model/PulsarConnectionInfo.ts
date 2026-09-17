

export class PulsarConnectionInfo {
    public token?: string;
    public constructor(token?: string) { 
        this['token'] = token;
    }
    public withToken(token: string): PulsarConnectionInfo {
        this['token'] = token;
        return this;
    }
}