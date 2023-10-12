

export class RedisTable {
    private 'table_name'?: string;
    public id?: number;
    private 'schema_name'?: string;
    private 'logical_cluster_name'?: string;
    public size?: number;
    public status?: string;
    public constructor() { 
    }
    public withTableName(tableName: string): RedisTable {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withId(id: number): RedisTable {
        this['id'] = id;
        return this;
    }
    public withSchemaName(schemaName: string): RedisTable {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withLogicalClusterName(logicalClusterName: string): RedisTable {
        this['logical_cluster_name'] = logicalClusterName;
        return this;
    }
    public set logicalClusterName(logicalClusterName: string  | undefined) {
        this['logical_cluster_name'] = logicalClusterName;
    }
    public get logicalClusterName(): string | undefined {
        return this['logical_cluster_name'];
    }
    public withSize(size: number): RedisTable {
        this['size'] = size;
        return this;
    }
    public withStatus(status: string): RedisTable {
        this['status'] = status;
        return this;
    }
}