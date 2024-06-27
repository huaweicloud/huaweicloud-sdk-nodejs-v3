

export class UpdateChDatabaseConfigRequestBody {
    private 'source_instance_id'?: string;
    private 'source_node_id'?: string;
    public database?: string;
    public value?: string;
    public constructor(sourceInstanceId?: string, database?: string, value?: string) { 
        this['source_instance_id'] = sourceInstanceId;
        this['database'] = database;
        this['value'] = value;
    }
    public withSourceInstanceId(sourceInstanceId: string): UpdateChDatabaseConfigRequestBody {
        this['source_instance_id'] = sourceInstanceId;
        return this;
    }
    public set sourceInstanceId(sourceInstanceId: string  | undefined) {
        this['source_instance_id'] = sourceInstanceId;
    }
    public get sourceInstanceId(): string | undefined {
        return this['source_instance_id'];
    }
    public withSourceNodeId(sourceNodeId: string): UpdateChDatabaseConfigRequestBody {
        this['source_node_id'] = sourceNodeId;
        return this;
    }
    public set sourceNodeId(sourceNodeId: string  | undefined) {
        this['source_node_id'] = sourceNodeId;
    }
    public get sourceNodeId(): string | undefined {
        return this['source_node_id'];
    }
    public withDatabase(database: string): UpdateChDatabaseConfigRequestBody {
        this['database'] = database;
        return this;
    }
    public withValue(value: string): UpdateChDatabaseConfigRequestBody {
        this['value'] = value;
        return this;
    }
}