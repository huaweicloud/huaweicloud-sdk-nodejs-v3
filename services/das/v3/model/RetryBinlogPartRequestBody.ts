import { ColumnInfo } from './ColumnInfo';


export class RetryBinlogPartRequestBody {
    private 'task_id'?: number;
    private 'error_id'?: Array<string>;
    private 'db_name'?: string;
    private 'table_name'?: string;
    private 'column_list'?: Array<ColumnInfo>;
    public constructor(taskId?: number) { 
        this['task_id'] = taskId;
    }
    public withTaskId(taskId: number): RetryBinlogPartRequestBody {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: number  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): number | undefined {
        return this['task_id'];
    }
    public withErrorId(errorId: Array<string>): RetryBinlogPartRequestBody {
        this['error_id'] = errorId;
        return this;
    }
    public set errorId(errorId: Array<string>  | undefined) {
        this['error_id'] = errorId;
    }
    public get errorId(): Array<string> | undefined {
        return this['error_id'];
    }
    public withDbName(dbName: string): RetryBinlogPartRequestBody {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withTableName(tableName: string): RetryBinlogPartRequestBody {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withColumnList(columnList: Array<ColumnInfo>): RetryBinlogPartRequestBody {
        this['column_list'] = columnList;
        return this;
    }
    public set columnList(columnList: Array<ColumnInfo>  | undefined) {
        this['column_list'] = columnList;
    }
    public get columnList(): Array<ColumnInfo> | undefined {
        return this['column_list'];
    }
}