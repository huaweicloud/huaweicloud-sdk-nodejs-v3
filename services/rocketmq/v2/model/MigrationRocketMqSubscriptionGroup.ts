

export class MigrationRocketMqSubscriptionGroup {
    private 'group_name'?: string;
    private 'consume_broadcast_enable'?: boolean;
    private 'consume_enable'?: boolean;
    private 'consume_from_min_enable'?: boolean;
    private 'notify_consumer_ids_changed_enable'?: boolean;
    private 'retry_max_times'?: number;
    private 'retry_queue_nums'?: number;
    private 'which_broker_when_consume_slow'?: number;
    public constructor() { 
    }
    public withGroupName(groupName: string): MigrationRocketMqSubscriptionGroup {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withConsumeBroadcastEnable(consumeBroadcastEnable: boolean): MigrationRocketMqSubscriptionGroup {
        this['consume_broadcast_enable'] = consumeBroadcastEnable;
        return this;
    }
    public set consumeBroadcastEnable(consumeBroadcastEnable: boolean  | undefined) {
        this['consume_broadcast_enable'] = consumeBroadcastEnable;
    }
    public get consumeBroadcastEnable(): boolean | undefined {
        return this['consume_broadcast_enable'];
    }
    public withConsumeEnable(consumeEnable: boolean): MigrationRocketMqSubscriptionGroup {
        this['consume_enable'] = consumeEnable;
        return this;
    }
    public set consumeEnable(consumeEnable: boolean  | undefined) {
        this['consume_enable'] = consumeEnable;
    }
    public get consumeEnable(): boolean | undefined {
        return this['consume_enable'];
    }
    public withConsumeFromMinEnable(consumeFromMinEnable: boolean): MigrationRocketMqSubscriptionGroup {
        this['consume_from_min_enable'] = consumeFromMinEnable;
        return this;
    }
    public set consumeFromMinEnable(consumeFromMinEnable: boolean  | undefined) {
        this['consume_from_min_enable'] = consumeFromMinEnable;
    }
    public get consumeFromMinEnable(): boolean | undefined {
        return this['consume_from_min_enable'];
    }
    public withNotifyConsumerIdsChangedEnable(notifyConsumerIdsChangedEnable: boolean): MigrationRocketMqSubscriptionGroup {
        this['notify_consumer_ids_changed_enable'] = notifyConsumerIdsChangedEnable;
        return this;
    }
    public set notifyConsumerIdsChangedEnable(notifyConsumerIdsChangedEnable: boolean  | undefined) {
        this['notify_consumer_ids_changed_enable'] = notifyConsumerIdsChangedEnable;
    }
    public get notifyConsumerIdsChangedEnable(): boolean | undefined {
        return this['notify_consumer_ids_changed_enable'];
    }
    public withRetryMaxTimes(retryMaxTimes: number): MigrationRocketMqSubscriptionGroup {
        this['retry_max_times'] = retryMaxTimes;
        return this;
    }
    public set retryMaxTimes(retryMaxTimes: number  | undefined) {
        this['retry_max_times'] = retryMaxTimes;
    }
    public get retryMaxTimes(): number | undefined {
        return this['retry_max_times'];
    }
    public withRetryQueueNums(retryQueueNums: number): MigrationRocketMqSubscriptionGroup {
        this['retry_queue_nums'] = retryQueueNums;
        return this;
    }
    public set retryQueueNums(retryQueueNums: number  | undefined) {
        this['retry_queue_nums'] = retryQueueNums;
    }
    public get retryQueueNums(): number | undefined {
        return this['retry_queue_nums'];
    }
    public withWhichBrokerWhenConsumeSlow(whichBrokerWhenConsumeSlow: number): MigrationRocketMqSubscriptionGroup {
        this['which_broker_when_consume_slow'] = whichBrokerWhenConsumeSlow;
        return this;
    }
    public set whichBrokerWhenConsumeSlow(whichBrokerWhenConsumeSlow: number  | undefined) {
        this['which_broker_when_consume_slow'] = whichBrokerWhenConsumeSlow;
    }
    public get whichBrokerWhenConsumeSlow(): number | undefined {
        return this['which_broker_when_consume_slow'];
    }
}