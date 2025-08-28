import { ActionDistributions } from './ActionDistributions';
import { BotRequestDistributionsNormalBucket } from './BotRequestDistributionsNormalBucket';
import { BotTypeDistributions } from './BotTypeDistributions';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBotMRequestDistributionResponse extends SdkResponse {
    private 'normal_bucket'?: BotRequestDistributionsNormalBucket;
    private 'bot_classification_bucket'?: BotTypeDistributions;
    private 'action_bucket'?: ActionDistributions;
    public constructor() { 
        super();
    }
    public withNormalBucket(normalBucket: BotRequestDistributionsNormalBucket): ListBotMRequestDistributionResponse {
        this['normal_bucket'] = normalBucket;
        return this;
    }
    public set normalBucket(normalBucket: BotRequestDistributionsNormalBucket  | undefined) {
        this['normal_bucket'] = normalBucket;
    }
    public get normalBucket(): BotRequestDistributionsNormalBucket | undefined {
        return this['normal_bucket'];
    }
    public withBotClassificationBucket(botClassificationBucket: BotTypeDistributions): ListBotMRequestDistributionResponse {
        this['bot_classification_bucket'] = botClassificationBucket;
        return this;
    }
    public set botClassificationBucket(botClassificationBucket: BotTypeDistributions  | undefined) {
        this['bot_classification_bucket'] = botClassificationBucket;
    }
    public get botClassificationBucket(): BotTypeDistributions | undefined {
        return this['bot_classification_bucket'];
    }
    public withActionBucket(actionBucket: ActionDistributions): ListBotMRequestDistributionResponse {
        this['action_bucket'] = actionBucket;
        return this;
    }
    public set actionBucket(actionBucket: ActionDistributions  | undefined) {
        this['action_bucket'] = actionBucket;
    }
    public get actionBucket(): ActionDistributions | undefined {
        return this['action_bucket'];
    }
}