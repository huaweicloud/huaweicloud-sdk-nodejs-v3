

export class WorkspaceTransformVO {
    private 'target_model_id'?: string;
    private 'target_model_name'?: string;
    public description?: string;
    private 'update_exist_tables'?: boolean;
    public ids?: Array<string>;
    private 'dw_type'?: string;
    private 'connection_id'?: string;
    public database?: string;
    public queue?: string;
    public schema?: string;
    public constructor(targetModelName?: string, dwType?: string) { 
        this['target_model_name'] = targetModelName;
        this['dw_type'] = dwType;
    }
    public withTargetModelId(targetModelId: string): WorkspaceTransformVO {
        this['target_model_id'] = targetModelId;
        return this;
    }
    public set targetModelId(targetModelId: string  | undefined) {
        this['target_model_id'] = targetModelId;
    }
    public get targetModelId(): string | undefined {
        return this['target_model_id'];
    }
    public withTargetModelName(targetModelName: string): WorkspaceTransformVO {
        this['target_model_name'] = targetModelName;
        return this;
    }
    public set targetModelName(targetModelName: string  | undefined) {
        this['target_model_name'] = targetModelName;
    }
    public get targetModelName(): string | undefined {
        return this['target_model_name'];
    }
    public withDescription(description: string): WorkspaceTransformVO {
        this['description'] = description;
        return this;
    }
    public withUpdateExistTables(updateExistTables: boolean): WorkspaceTransformVO {
        this['update_exist_tables'] = updateExistTables;
        return this;
    }
    public set updateExistTables(updateExistTables: boolean  | undefined) {
        this['update_exist_tables'] = updateExistTables;
    }
    public get updateExistTables(): boolean | undefined {
        return this['update_exist_tables'];
    }
    public withIds(ids: Array<string>): WorkspaceTransformVO {
        this['ids'] = ids;
        return this;
    }
    public withDwType(dwType: string): WorkspaceTransformVO {
        this['dw_type'] = dwType;
        return this;
    }
    public set dwType(dwType: string  | undefined) {
        this['dw_type'] = dwType;
    }
    public get dwType(): string | undefined {
        return this['dw_type'];
    }
    public withConnectionId(connectionId: string): WorkspaceTransformVO {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withDatabase(database: string): WorkspaceTransformVO {
        this['database'] = database;
        return this;
    }
    public withQueue(queue: string): WorkspaceTransformVO {
        this['queue'] = queue;
        return this;
    }
    public withSchema(schema: string): WorkspaceTransformVO {
        this['schema'] = schema;
        return this;
    }
}