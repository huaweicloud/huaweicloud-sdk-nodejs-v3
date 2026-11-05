

export class PoolMetadataUpdateAnnotations {
    private 'os.modelarts/description'?: string;
    private 'os.modelarts/order.id'?: string;
    private 'os.modelarts.pool/scheduler.queue.strategy'?: string;
    private 'os.modelarts.pool/scheduler.queue.strategy.config'?: string;
    public constructor() { 
    }
    public withOsModelartsDescription(osModelartsDescription: string): PoolMetadataUpdateAnnotations {
        this['os.modelarts/description'] = osModelartsDescription;
        return this;
    }
    public set osModelartsDescription(osModelartsDescription: string  | undefined) {
        this['os.modelarts/description'] = osModelartsDescription;
    }
    public get osModelartsDescription(): string | undefined {
        return this['os.modelarts/description'];
    }
    public withOsModelartsOrderId(osModelartsOrderId: string): PoolMetadataUpdateAnnotations {
        this['os.modelarts/order.id'] = osModelartsOrderId;
        return this;
    }
    public set osModelartsOrderId(osModelartsOrderId: string  | undefined) {
        this['os.modelarts/order.id'] = osModelartsOrderId;
    }
    public get osModelartsOrderId(): string | undefined {
        return this['os.modelarts/order.id'];
    }
    public withOsModelartsPoolSchedulerQueueStrategy(osModelartsPoolSchedulerQueueStrategy: string): PoolMetadataUpdateAnnotations {
        this['os.modelarts.pool/scheduler.queue.strategy'] = osModelartsPoolSchedulerQueueStrategy;
        return this;
    }
    public set osModelartsPoolSchedulerQueueStrategy(osModelartsPoolSchedulerQueueStrategy: string  | undefined) {
        this['os.modelarts.pool/scheduler.queue.strategy'] = osModelartsPoolSchedulerQueueStrategy;
    }
    public get osModelartsPoolSchedulerQueueStrategy(): string | undefined {
        return this['os.modelarts.pool/scheduler.queue.strategy'];
    }
    public withOsModelartsPoolSchedulerQueueStrategyConfig(osModelartsPoolSchedulerQueueStrategyConfig: string): PoolMetadataUpdateAnnotations {
        this['os.modelarts.pool/scheduler.queue.strategy.config'] = osModelartsPoolSchedulerQueueStrategyConfig;
        return this;
    }
    public set osModelartsPoolSchedulerQueueStrategyConfig(osModelartsPoolSchedulerQueueStrategyConfig: string  | undefined) {
        this['os.modelarts.pool/scheduler.queue.strategy.config'] = osModelartsPoolSchedulerQueueStrategyConfig;
    }
    public get osModelartsPoolSchedulerQueueStrategyConfig(): string | undefined {
        return this['os.modelarts.pool/scheduler.queue.strategy.config'];
    }
}