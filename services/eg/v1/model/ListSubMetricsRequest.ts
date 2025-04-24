

export class ListSubMetricsRequest {
    public filter?: ListSubMetricsRequestFilterEnum | string;
    public period?: number;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'subscription_id'?: string;
    private 'provider_type'?: ListSubMetricsRequestProviderTypeEnum | string;
    private 'target_id'?: string;
    public constructor(startTime?: number, subscriptionId?: string) { 
        this['start_time'] = startTime;
        this['subscription_id'] = subscriptionId;
    }
    public withFilter(filter: ListSubMetricsRequestFilterEnum | string): ListSubMetricsRequest {
        this['filter'] = filter;
        return this;
    }
    public withPeriod(period: number): ListSubMetricsRequest {
        this['period'] = period;
        return this;
    }
    public withStartTime(startTime: number): ListSubMetricsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListSubMetricsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withSubscriptionId(subscriptionId: string): ListSubMetricsRequest {
        this['subscription_id'] = subscriptionId;
        return this;
    }
    public set subscriptionId(subscriptionId: string  | undefined) {
        this['subscription_id'] = subscriptionId;
    }
    public get subscriptionId(): string | undefined {
        return this['subscription_id'];
    }
    public withProviderType(providerType: ListSubMetricsRequestProviderTypeEnum | string): ListSubMetricsRequest {
        this['provider_type'] = providerType;
        return this;
    }
    public set providerType(providerType: ListSubMetricsRequestProviderTypeEnum | string  | undefined) {
        this['provider_type'] = providerType;
    }
    public get providerType(): ListSubMetricsRequestProviderTypeEnum | string | undefined {
        return this['provider_type'];
    }
    public withTargetId(targetId: string): ListSubMetricsRequest {
        this['target_id'] = targetId;
        return this;
    }
    public set targetId(targetId: string  | undefined) {
        this['target_id'] = targetId;
    }
    public get targetId(): string | undefined {
        return this['target_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSubMetricsRequestFilterEnum {
    AVG = 'AVG',
    MIN = 'MIN',
    MAX = 'MAX'
}
/**
    * @export
    * @enum {string}
    */
export enum ListSubMetricsRequestProviderTypeEnum {
    OFFICIAL = 'OFFICIAL',
    CUSTOM = 'CUSTOM'
}
