import { EventSubscriptionResponse } from './EventSubscriptionResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEventSubsResponse extends SdkResponse {
    public count?: number;
    private 'event_subscriptions'?: Array<EventSubscriptionResponse>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListEventSubsResponse {
        this['count'] = count;
        return this;
    }
    public withEventSubscriptions(eventSubscriptions: Array<EventSubscriptionResponse>): ListEventSubsResponse {
        this['event_subscriptions'] = eventSubscriptions;
        return this;
    }
    public set eventSubscriptions(eventSubscriptions: Array<EventSubscriptionResponse>  | undefined) {
        this['event_subscriptions'] = eventSubscriptions;
    }
    public get eventSubscriptions(): Array<EventSubscriptionResponse> | undefined {
        return this['event_subscriptions'];
    }
}