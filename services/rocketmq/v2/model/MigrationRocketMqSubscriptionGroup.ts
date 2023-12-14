

export class MigrationRocketMqSubscriptionGroup {
    public groupName?: string;
    public consumeBroadcastEnable?: boolean;
    public consumeEnable?: boolean;
    public consumeFromMinEnable?: boolean;
    public notifyConsumerIdsChangedEnable?: boolean;
    public retryMaxTimes?: number;
    public retryQueueNums?: number;
    public whichBrokerWhenConsumeSlow?: number;
    public constructor() { 
    }
    public withGroupName(groupName: string): MigrationRocketMqSubscriptionGroup {
        this['groupName'] = groupName;
        return this;
    }
    public withConsumeBroadcastEnable(consumeBroadcastEnable: boolean): MigrationRocketMqSubscriptionGroup {
        this['consumeBroadcastEnable'] = consumeBroadcastEnable;
        return this;
    }
    public withConsumeEnable(consumeEnable: boolean): MigrationRocketMqSubscriptionGroup {
        this['consumeEnable'] = consumeEnable;
        return this;
    }
    public withConsumeFromMinEnable(consumeFromMinEnable: boolean): MigrationRocketMqSubscriptionGroup {
        this['consumeFromMinEnable'] = consumeFromMinEnable;
        return this;
    }
    public withNotifyConsumerIdsChangedEnable(notifyConsumerIdsChangedEnable: boolean): MigrationRocketMqSubscriptionGroup {
        this['notifyConsumerIdsChangedEnable'] = notifyConsumerIdsChangedEnable;
        return this;
    }
    public withRetryMaxTimes(retryMaxTimes: number): MigrationRocketMqSubscriptionGroup {
        this['retryMaxTimes'] = retryMaxTimes;
        return this;
    }
    public withRetryQueueNums(retryQueueNums: number): MigrationRocketMqSubscriptionGroup {
        this['retryQueueNums'] = retryQueueNums;
        return this;
    }
    public withWhichBrokerWhenConsumeSlow(whichBrokerWhenConsumeSlow: number): MigrationRocketMqSubscriptionGroup {
        this['whichBrokerWhenConsumeSlow'] = whichBrokerWhenConsumeSlow;
        return this;
    }
}