

export class SubscriptionExtension {
    private 'client_id'?: string;
    private 'client_secret'?: string;
    public keyword?: string;
    private 'sign_secret'?: string;
    public header?: { [key: string]: string; };
    private 'app_key'?: string;
    private 'app_secret'?: string;
    private 'robot_code'?: string;
    public constructor() { 
    }
    public withClientId(clientId: string): SubscriptionExtension {
        this['client_id'] = clientId;
        return this;
    }
    public set clientId(clientId: string  | undefined) {
        this['client_id'] = clientId;
    }
    public get clientId(): string | undefined {
        return this['client_id'];
    }
    public withClientSecret(clientSecret: string): SubscriptionExtension {
        this['client_secret'] = clientSecret;
        return this;
    }
    public set clientSecret(clientSecret: string  | undefined) {
        this['client_secret'] = clientSecret;
    }
    public get clientSecret(): string | undefined {
        return this['client_secret'];
    }
    public withKeyword(keyword: string): SubscriptionExtension {
        this['keyword'] = keyword;
        return this;
    }
    public withSignSecret(signSecret: string): SubscriptionExtension {
        this['sign_secret'] = signSecret;
        return this;
    }
    public set signSecret(signSecret: string  | undefined) {
        this['sign_secret'] = signSecret;
    }
    public get signSecret(): string | undefined {
        return this['sign_secret'];
    }
    public withHeader(header: { [key: string]: string; }): SubscriptionExtension {
        this['header'] = header;
        return this;
    }
    public withAppKey(appKey: string): SubscriptionExtension {
        this['app_key'] = appKey;
        return this;
    }
    public set appKey(appKey: string  | undefined) {
        this['app_key'] = appKey;
    }
    public get appKey(): string | undefined {
        return this['app_key'];
    }
    public withAppSecret(appSecret: string): SubscriptionExtension {
        this['app_secret'] = appSecret;
        return this;
    }
    public set appSecret(appSecret: string  | undefined) {
        this['app_secret'] = appSecret;
    }
    public get appSecret(): string | undefined {
        return this['app_secret'];
    }
    public withRobotCode(robotCode: string): SubscriptionExtension {
        this['robot_code'] = robotCode;
        return this;
    }
    public set robotCode(robotCode: string  | undefined) {
        this['robot_code'] = robotCode;
    }
    public get robotCode(): string | undefined {
        return this['robot_code'];
    }
}