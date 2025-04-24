

export class ListPubMetricsRequest {
    public filter?: ListPubMetricsRequestFilterEnum | string;
    public period?: number;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'channel_id'?: string;
    private 'provider_type'?: ListPubMetricsRequestProviderTypeEnum | string;
    private 'source_name'?: string;
    public constructor(startTime?: number, channelId?: string) { 
        this['start_time'] = startTime;
        this['channel_id'] = channelId;
    }
    public withFilter(filter: ListPubMetricsRequestFilterEnum | string): ListPubMetricsRequest {
        this['filter'] = filter;
        return this;
    }
    public withPeriod(period: number): ListPubMetricsRequest {
        this['period'] = period;
        return this;
    }
    public withStartTime(startTime: number): ListPubMetricsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListPubMetricsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withChannelId(channelId: string): ListPubMetricsRequest {
        this['channel_id'] = channelId;
        return this;
    }
    public set channelId(channelId: string  | undefined) {
        this['channel_id'] = channelId;
    }
    public get channelId(): string | undefined {
        return this['channel_id'];
    }
    public withProviderType(providerType: ListPubMetricsRequestProviderTypeEnum | string): ListPubMetricsRequest {
        this['provider_type'] = providerType;
        return this;
    }
    public set providerType(providerType: ListPubMetricsRequestProviderTypeEnum | string  | undefined) {
        this['provider_type'] = providerType;
    }
    public get providerType(): ListPubMetricsRequestProviderTypeEnum | string | undefined {
        return this['provider_type'];
    }
    public withSourceName(sourceName: string): ListPubMetricsRequest {
        this['source_name'] = sourceName;
        return this;
    }
    public set sourceName(sourceName: string  | undefined) {
        this['source_name'] = sourceName;
    }
    public get sourceName(): string | undefined {
        return this['source_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListPubMetricsRequestFilterEnum {
    AVG = 'AVG',
    MIN = 'MIN',
    MAX = 'MAX'
}
/**
    * @export
    * @enum {string}
    */
export enum ListPubMetricsRequestProviderTypeEnum {
    OFFICIAL = 'OFFICIAL',
    CUSTOM = 'CUSTOM'
}
