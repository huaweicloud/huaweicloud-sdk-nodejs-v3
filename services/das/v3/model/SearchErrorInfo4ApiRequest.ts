

export class SearchErrorInfo4ApiRequest {
    private 'connection_id'?: string;
    private 'task_id'?: number;
    private 'file_name'?: string;
    private 'db_name'?: string;
    private 'table_name'?: string;
    public constructor(connectionId?: string, taskId?: number) { 
        this['connection_id'] = connectionId;
        this['task_id'] = taskId;
    }
    public withConnectionId(connectionId: string): SearchErrorInfo4ApiRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withTaskId(taskId: number): SearchErrorInfo4ApiRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: number  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): number | undefined {
        return this['task_id'];
    }
    public withFileName(fileName: string): SearchErrorInfo4ApiRequest {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withDbName(dbName: string): SearchErrorInfo4ApiRequest {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withTableName(tableName: string): SearchErrorInfo4ApiRequest {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
}