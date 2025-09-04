

export class OfflineCacheConfigsDTO {
    private 'publish_order'?: string;
    public period?: number;
    public capacity?: number;
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
}