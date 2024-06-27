

export class CreateChDatabaseReplicationRequestBody {
    private 'source_instance_id'?: string;
    private 'source_node_id'?: string;
    private 'source_database'?: string;
    public constructor(sourceInstanceId?: string, sourceDatabase?: string) { 
        this['source_instance_id'] = sourceInstanceId;
        this['source_database'] = sourceDatabase;
    }
    public withSourceInstanceId(sourceInstanceId: string): CreateChDatabaseReplicationRequestBody {
        this['source_instance_id'] = sourceInstanceId;
        return this;
    }
    public set sourceInstanceId(sourceInstanceId: string  | undefined) {
        this['source_instance_id'] = sourceInstanceId;
    }
    public get sourceInstanceId(): string | undefined {
        return this['source_instance_id'];
    }
    public withSourceNodeId(sourceNodeId: string): CreateChDatabaseReplicationRequestBody {
        this['source_node_id'] = sourceNodeId;
        return this;
    }
    public set sourceNodeId(sourceNodeId: string  | undefined) {
        this['source_node_id'] = sourceNodeId;
    }
    public get sourceNodeId(): string | undefined {
        return this['source_node_id'];
    }
    public withSourceDatabase(sourceDatabase: string): CreateChDatabaseReplicationRequestBody {
        this['source_database'] = sourceDatabase;
        return this;
    }
    public set sourceDatabase(sourceDatabase: string  | undefined) {
        this['source_database'] = sourceDatabase;
    }
    public get sourceDatabase(): string | undefined {
        return this['source_database'];
    }
}