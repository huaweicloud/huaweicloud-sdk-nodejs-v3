

export class RepoNotificationSubscriptionStateDto {
    private 'config_source'?: RepoNotificationSubscriptionStateDtoConfigSourceEnum | string;
    public enabled?: boolean;
    public constructor() { 
    }
    public withConfigSource(configSource: RepoNotificationSubscriptionStateDtoConfigSourceEnum | string): RepoNotificationSubscriptionStateDto {
        this['config_source'] = configSource;
        return this;
    }
    public set configSource(configSource: RepoNotificationSubscriptionStateDtoConfigSourceEnum | string  | undefined) {
        this['config_source'] = configSource;
    }
    public get configSource(): RepoNotificationSubscriptionStateDtoConfigSourceEnum | string | undefined {
        return this['config_source'];
    }
    public withEnabled(enabled: boolean): RepoNotificationSubscriptionStateDto {
        this['enabled'] = enabled;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RepoNotificationSubscriptionStateDtoConfigSourceEnum {
    REPO = 'repo',
    PRODUCT = 'product'
}
