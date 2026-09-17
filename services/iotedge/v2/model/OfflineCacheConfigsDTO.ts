

export class OfflineCacheConfigsDTO {
    private 'publish_order'?: string;
    public period?: number;
    public capacity?: number;
    private 'channel_cache_state'?: string;
    public constructor() { 
    }
    public withPublishOrder(publishOrder: string): OfflineCacheConfigsDTO {
        this['publish_order'] = publishOrder;
        return this;
    }
    public set publishOrder(publishOrder: string  | undefined) {
        this['publish_order'] = publishOrder;
    }
    public get publishOrder(): string | undefined {
        return this['publish_order'];
    }
    public withPeriod(period: number): OfflineCacheConfigsDTO {
        this['period'] = period;
        return this;
    }
    public withCapacity(capacity: number): OfflineCacheConfigsDTO {
        this['capacity'] = capacity;
        return this;
    }
    public withChannelCacheState(channelCacheState: string): OfflineCacheConfigsDTO {
        this['channel_cache_state'] = channelCacheState;
        return this;
    }
    public set channelCacheState(channelCacheState: string  | undefined) {
        this['channel_cache_state'] = channelCacheState;
    }
    public get channelCacheState(): string | undefined {
        return this['channel_cache_state'];
    }
}