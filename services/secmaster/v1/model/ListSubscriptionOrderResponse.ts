import { SmnSubscription } from './SmnSubscription';
import { SubscriptionResource } from './SubscriptionResource';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSubscriptionOrderResponse extends SdkResponse {
    private 'csb_version'?: ListSubscriptionOrderResponseCsbVersionEnum | string;
    private 'ecs_count'?: number;
    public resources?: Array<SubscriptionResource>;
    private 'subscription_count'?: number;
    public subscriptions?: Array<SmnSubscription>;
    public constructor() { 
        super();
    }
    public withCsbVersion(csbVersion: ListSubscriptionOrderResponseCsbVersionEnum | string): ListSubscriptionOrderResponse {
        this['csb_version'] = csbVersion;
        return this;
    }
    public set csbVersion(csbVersion: ListSubscriptionOrderResponseCsbVersionEnum | string  | undefined) {
        this['csb_version'] = csbVersion;
    }
    public get csbVersion(): ListSubscriptionOrderResponseCsbVersionEnum | string | undefined {
        return this['csb_version'];
    }
    public withEcsCount(ecsCount: number): ListSubscriptionOrderResponse {
        this['ecs_count'] = ecsCount;
        return this;
    }
    public set ecsCount(ecsCount: number  | undefined) {
        this['ecs_count'] = ecsCount;
    }
    public get ecsCount(): number | undefined {
        return this['ecs_count'];
    }
    public withResources(resources: Array<SubscriptionResource>): ListSubscriptionOrderResponse {
        this['resources'] = resources;
        return this;
    }
    public withSubscriptionCount(subscriptionCount: number): ListSubscriptionOrderResponse {
        this['subscription_count'] = subscriptionCount;
        return this;
    }
    public set subscriptionCount(subscriptionCount: number  | undefined) {
        this['subscription_count'] = subscriptionCount;
    }
    public get subscriptionCount(): number | undefined {
        return this['subscription_count'];
    }
    public withSubscriptions(subscriptions: Array<SmnSubscription>): ListSubscriptionOrderResponse {
        this['subscriptions'] = subscriptions;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSubscriptionOrderResponseCsbVersionEnum {
    BASIC = 'BASIC',
    STANDARD = 'STANDARD',
    PROFESSIONAL = 'PROFESSIONAL',
    NA = 'NA'
}
