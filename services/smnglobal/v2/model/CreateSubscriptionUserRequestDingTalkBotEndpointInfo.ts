

export class CreateSubscriptionUserRequestDingTalkBotEndpointInfo {
    public endpoint?: string;
    private 'app_key'?: string;
    private 'app_secret'?: string;
    private 'robot_code'?: string;
    public constructor(endpoint?: string, appKey?: string, appSecret?: string, robotCode?: string) { 
        this['endpoint'] = endpoint;
        this['app_key'] = appKey;
        this['app_secret'] = appSecret;
        this['robot_code'] = robotCode;
    }
    public withEndpoint(endpoint: string): CreateSubscriptionUserRequestDingTalkBotEndpointInfo {
        this['endpoint'] = endpoint;
        return this;
    }
    public withAppKey(appKey: string): CreateSubscriptionUserRequestDingTalkBotEndpointInfo {
        this['app_key'] = appKey;
        return this;
    }
    public set appKey(appKey: string  | undefined) {
        this['app_key'] = appKey;
    }
    public get appKey(): string | undefined {
        return this['app_key'];
    }
    public withAppSecret(appSecret: string): CreateSubscriptionUserRequestDingTalkBotEndpointInfo {
        this['app_secret'] = appSecret;
        return this;
    }
    public set appSecret(appSecret: string  | undefined) {
        this['app_secret'] = appSecret;
    }
    public get appSecret(): string | undefined {
        return this['app_secret'];
    }
    public withRobotCode(robotCode: string): CreateSubscriptionUserRequestDingTalkBotEndpointInfo {
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