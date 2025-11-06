import { RepoSubscriptionEventDto } from './RepoSubscriptionEventDto';
import { UpdateRepoWebHookSubscriptionDto } from './UpdateRepoWebHookSubscriptionDto';


export class UpdateRepoNotificationSubscriptionDto {
    public enabled?: boolean;
    private 'config_source'?: UpdateRepoNotificationSubscriptionDtoConfigSourceEnum | string;
    private 'webhook_config'?: UpdateRepoWebHookSubscriptionDto;
    private 'waring_repo_usage_rate'?: UpdateRepoNotificationSubscriptionDtoWaringRepoUsageRateEnum | number;
    private 'subscript_events'?: Array<RepoSubscriptionEventDto>;
    public constructor() { 
    }
    public withEnabled(enabled: boolean): UpdateRepoNotificationSubscriptionDto {
        this['enabled'] = enabled;
        return this;
    }
    public withConfigSource(configSource: UpdateRepoNotificationSubscriptionDtoConfigSourceEnum | string): UpdateRepoNotificationSubscriptionDto {
        this['config_source'] = configSource;
        return this;
    }
    public set configSource(configSource: UpdateRepoNotificationSubscriptionDtoConfigSourceEnum | string  | undefined) {
        this['config_source'] = configSource;
    }
    public get configSource(): UpdateRepoNotificationSubscriptionDtoConfigSourceEnum | string | undefined {
        return this['config_source'];
    }
    public withWebhookConfig(webhookConfig: UpdateRepoWebHookSubscriptionDto): UpdateRepoNotificationSubscriptionDto {
        this['webhook_config'] = webhookConfig;
        return this;
    }
    public set webhookConfig(webhookConfig: UpdateRepoWebHookSubscriptionDto  | undefined) {
        this['webhook_config'] = webhookConfig;
    }
    public get webhookConfig(): UpdateRepoWebHookSubscriptionDto | undefined {
        return this['webhook_config'];
    }
    public withWaringRepoUsageRate(waringRepoUsageRate: UpdateRepoNotificationSubscriptionDtoWaringRepoUsageRateEnum | number): UpdateRepoNotificationSubscriptionDto {
        this['waring_repo_usage_rate'] = waringRepoUsageRate;
        return this;
    }
    public set waringRepoUsageRate(waringRepoUsageRate: UpdateRepoNotificationSubscriptionDtoWaringRepoUsageRateEnum | number  | undefined) {
        this['waring_repo_usage_rate'] = waringRepoUsageRate;
    }
    public get waringRepoUsageRate(): UpdateRepoNotificationSubscriptionDtoWaringRepoUsageRateEnum | number | undefined {
        return this['waring_repo_usage_rate'];
    }
    public withSubscriptEvents(subscriptEvents: Array<RepoSubscriptionEventDto>): UpdateRepoNotificationSubscriptionDto {
        this['subscript_events'] = subscriptEvents;
        return this;
    }
    public set subscriptEvents(subscriptEvents: Array<RepoSubscriptionEventDto>  | undefined) {
        this['subscript_events'] = subscriptEvents;
    }
    public get subscriptEvents(): Array<RepoSubscriptionEventDto> | undefined {
        return this['subscript_events'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateRepoNotificationSubscriptionDtoConfigSourceEnum {
    REPO = 'repo',
    PRODUCT = 'product'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateRepoNotificationSubscriptionDtoWaringRepoUsageRateEnum {
    NUMBER_60 = 60,
    NUMBER_80 = 80,
    NUMBER_90 = 90
}
