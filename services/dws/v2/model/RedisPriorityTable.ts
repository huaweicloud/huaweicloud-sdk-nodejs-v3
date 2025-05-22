

export class RedisPriorityTable {
    private 'schema_name'?: string;
    public id?: number;
    private 'table_name'?: string;
    private 'redis_order'?: number;
    public constructor() { 
    }
    public withSchemaName(schemaName: string): RedisPriorityTable {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withId(id: number): RedisPriorityTable {
        this['id'] = id;
        return this;
    }
    public withTableName(tableName: string): RedisPriorityTable {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withRedisOrder(redisOrder: number): RedisPriorityTable {
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