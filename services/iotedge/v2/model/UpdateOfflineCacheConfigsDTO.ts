

export class UpdateOfflineCacheConfigsDTO {
    private 'publish_order'?: string;
    public period?: number;
    public capacity?: number;
    public constructor() { 
    }
    public withPublishOrder(publishOrder: string): UpdateOfflineCacheConfigsDTO {
        this['publish_order'] = publishOrder;
        return this;
    }
    public set publishOrder(publishOrder: string  | undefined) {
        this['publish_order'] = publishOrder;
    }
    public get publishOrder(): string | undefined {
        return this['publish_order'];
    }
    public withPeriod(period: number): UpdateOfflineCacheConfigsDTO {
        this['period'] = period;
        return this;
    }
    public withCapacity(capacity: number): UpdateOfflineCacheConfigsDTO {
        this['capacity'] = capacity;
        return this;
    }
}