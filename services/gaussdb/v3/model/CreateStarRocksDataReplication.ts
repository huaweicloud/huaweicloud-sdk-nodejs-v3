

export class CreateStarRocksDataReplication {
    private 'source_instance_id'?: string;
    private 'source_node_id'?: string;
    private 'source_database'?: string;
    private 'target_database'?: string;
    private 'task_name'?: string;
    public constructor(sourceInstanceId?: string, sourceDatabase?: string, targetDatabase?: string, taskName?: string) { 
        this['source_instance_id'] = sourceInstanceId;
        this['source_database'] = sourceDatabase;
        this['target_database'] = targetDatabase;
        this['task_name'] = taskName;
    }
    public withSourceInstanceId(sourceInstanceId: string): CreateStarRocksDataReplication {
        this['source_instance_id'] = sourceInstanceId;
        return this;
    }
    public set sourceInstanceId(sourceInstanceId: string  | undefined) {
        this['source_instance_id'] = sourceInstanceId;
    }
    public get sourceInstanceId(): string | undefined {
        return this['source_instance_id'];
    }
    public withSourceNodeId(sourceNodeId: string): CreateStarRocksDataReplication {
        this['source_node_id'] = sourceNodeId;
        return this;
    }
    public set sourceNodeId(sourceNodeId: string  | undefined) {
        this['source_node_id'] = sourceNodeId;
    }
    public get sourceNodeId(): string | undefined {
        return this['source_node_id'];
    }
    public withSourceDatabase(sourceDatabase: string): CreateStarRocksDataReplication {
        this['source_database'] = sourceDatabase;
        return this;
    }
    public set sourceDatabase(sourceDatabase: string  | undefined) {
        this['source_database'] = sourceDatabase;
    }
    public get sourceDatabase(): string | undefined {
        return this['source_database'];
    }
    public withTargetDatabase(targetDatabase: string): CreateStarRocksDataReplication {
        this['target_database'] = targetDatabase;
        return this;
    }
    public set targetDatabase(targetDatabase: string  | undefined) {
        this['target_database'] = targetDatabase;
    }
    public get targetDatabase(): string | undefined {
        return this['target_database'];
    }
    public withTaskName(taskName: string): CreateStarRocksDataReplication {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
}