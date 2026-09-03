

export class CreateSubscriptionUserRequestDingdingEndpointInfo {
    public endpoint?: string;
    public keyword?: string;
    private 'sign_secret'?: string;
    public constructor(endpoint?: string) { 
        this['endpoint'] = endpoint;
    }
    public withEndpoint(endpoint: string): CreateSubscriptionUserRequestDingdingEndpointInfo {
        this['endpoint'] = endpoint;
        return this;
    }
    public withKeyword(keyword: string): CreateSubscriptionUserRequestDingdingEndpointInfo {
        this['keyword'] = keyword;
        return this;
    }
    public withSignSecret(signSecret: string): CreateSubscriptionUserRequestDingdingEndpointInfo {
        this['sign_secret'] = signSecret;
        return this;
    }
    public set signSecret(signSecret: string  | undefined) {
        this['sign_secret'] = signSecret;
    }
    public get signSecret(): string | undefined {
        return this['sign_secret'];
    }
}