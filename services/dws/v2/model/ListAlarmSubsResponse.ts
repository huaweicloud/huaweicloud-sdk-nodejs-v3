import { AlarmSubscriptionResponse } from './AlarmSubscriptionResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAlarmSubsResponse extends SdkResponse {
    public count?: number;
    private 'alarm_subscriptions'?: Array<AlarmSubscriptionResponse>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListAlarmSubsResponse {
        this['count'] = count;
        return this;
    }
    public withAlarmSubscriptions(alarmSubscriptions: Array<AlarmSubscriptionResponse>): ListAlarmSubsResponse {
        this['alarm_subscriptions'] = alarmSubscriptions;
        return this;
    }
    public set alarmSubscriptions(alarmSubscriptions: Array<AlarmSubscriptionResponse>  | undefined) {
        this['alarm_subscriptions'] = alarmSubscriptions;
    }
    public get alarmSubscriptions(): Array<AlarmSubscriptionResponse> | undefined {
        return this['alarm_subscriptions'];
    }
}