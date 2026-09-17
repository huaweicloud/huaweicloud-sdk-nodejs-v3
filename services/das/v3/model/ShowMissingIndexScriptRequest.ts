

export class ShowMissingIndexScriptRequest {
    private 'instance_id'?: string;
    private 'table_name'?: string;
    private 'equality_columns'?: string;
    private 'inequality_columns'?: string;
    private 'included_columns'?: string;
    private 'object_id'?: string;
    public constructor(instanceId?: string, tableName?: string, equalityColumns?: string, inequalityColumns?: string, includedColumns?: string, objectId?: string) { 
        this['instance_id'] = instanceId;
        this['table_name'] = tableName;
        this['equality_columns'] = equalityColumns;
        this['inequality_columns'] = inequalityColumns;
        this['included_columns'] = includedColumns;
        this['object_id'] = objectId;
    }
    public withInstanceId(instanceId: string): ShowMissingIndexScriptRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withTableName(tableName: string): ShowMissingIndexScriptRequest {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withEqualityColumns(equalityColumns: string): ShowMissingIndexScriptRequest {
        this['equality_columns'] = equalityColumns;
        return this;
    }
    public set equalityColumns(equalityColumns: string  | undefined) {
        this['equality_columns'] = equalityColumns;
    }
    public get equalityColumns(): string | undefined {
        return this['equality_columns'];
    }
    public withInequalityColumns(inequalityColumns: string): ShowMissingIndexScriptRequest {
        this['inequality_columns'] = inequalityColumns;
        return this;
    }
    public set inequalityColumns(inequalityColumns: string  | undefined) {
        this['inequality_columns'] = inequalityColumns;
    }
    public get inequalityColumns(): string | undefined {
        return this['inequality_columns'];
    }
    public withIncludedColumns(includedColumns: string): ShowMissingIndexScriptRequest {
        this['included_columns'] = includedColumns;
        return this;
    }
    public set includedColumns(includedColumns: string  | undefined) {
        this['included_columns'] = includedColumns;
    }
    public get includedColumns(): string | undefined {
        return this['included_columns'];
    }
    public withObjectId(objectId: string): ShowMissingIndexScriptRequest {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
}