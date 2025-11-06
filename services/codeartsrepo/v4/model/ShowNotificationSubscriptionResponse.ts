import { RepoSubscriptionEventDto } from './RepoSubscriptionEventDto';
import { RepoWebHookSubscriptionDto } from './RepoWebHookSubscriptionDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowNotificationSubscriptionResponse extends SdkResponse {
    private 'repository_id'?: number;
    public enabled?: boolean;
    private 'config_source'?: ShowNotificationSubscriptionResponseConfigSourceEnum | string;
    private 'webhook_config'?: RepoWebHookSubscriptionDto;
    private 'waring_repo_usage_rate'?: ShowNotificationSubscriptionResponseWaringRepoUsageRateEnum | number;
    private 'subscript_events'?: Array<RepoSubscriptionEventDto>;
    public constructor() { 
        super();
    }
    public withRepositoryId(repositoryId: number): ShowNotificationSubscriptionResponse {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withEnabled(enabled: boolean): ShowNotificationSubscriptionResponse {
        this['enabled'] = enabled;
        return this;
    }
    public withConfigSource(configSource: ShowNotificationSubscriptionResponseConfigSourceEnum | string): ShowNotificationSubscriptionResponse {
        this['config_source'] = configSource;
        return this;
    }
    public set configSource(configSource: ShowNotificationSubscriptionResponseConfigSourceEnum | string  | undefined) {
        this['config_source'] = configSource;
    }
    public get configSource(): ShowNotificationSubscriptionResponseConfigSourceEnum | string | undefined {
        return this['config_source'];
    }
    public withWebhookConfig(webhookConfig: RepoWebHookSubscriptionDto): ShowNotificationSubscriptionResponse {
        this['webhook_config'] = webhookConfig;
        return this;
    }
    public set webhookConfig(webhookConfig: RepoWebHookSubscriptionDto  | undefined) {
        this['webhook_config'] = webhookConfig;
    }
    public get webhookConfig(): RepoWebHookSubscriptionDto | undefined {
        return this['webhook_config'];
    }
    public withWaringRepoUsageRate(waringRepoUsageRate: ShowNotificationSubscriptionResponseWaringRepoUsageRateEnum | number): ShowNotificationSubscriptionResponse {
        this['waring_repo_usage_rate'] = waringRepoUsageRate;
        return this;
    }
    public set waringRepoUsageRate(waringRepoUsageRate: ShowNotificationSubscriptionResponseWaringRepoUsageRateEnum | number  | undefined) {
        this['waring_repo_usage_rate'] = waringRepoUsageRate;
    }
    public get waringRepoUsageRate(): ShowNotificationSubscriptionResponseWaringRepoUsageRateEnum | number | undefined {
        return this['waring_repo_usage_rate'];
    }
    public withSubscriptEvents(subscriptEvents: Array<RepoSubscriptionEventDto>): ShowNotificationSubscriptionResponse {
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
export enum ShowNotificationSubscriptionResponseConfigSourceEnum {
    REPO = 'repo',
    PRODUCT = 'product'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowNotificationSubscriptionResponseWaringRepoUsageRateEnum {
    NUMBER_60 = 60,
    NUMBER_80 = 80,
    NUMBER_90 = 90
}
