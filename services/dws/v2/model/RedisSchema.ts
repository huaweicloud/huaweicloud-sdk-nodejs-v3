

export class RedisSchema {
    private 'schema_name'?: string;
    private 'redis_order'?: number;
    public constructor() { 
    }
    public withSchemaName(schemaName: string): RedisSchema {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withRedisOrder(redisOrder: number): RedisSchema {
        this['redis_order'] = redisOrder;
        return this;
    }
    public set redisOrder(redisOrder: number  | undefined) {
        this['redis_order'] = redisOrder;
    }
    public get redisOrder(): number | undefined {
        return this['redis_order'];
    }
}