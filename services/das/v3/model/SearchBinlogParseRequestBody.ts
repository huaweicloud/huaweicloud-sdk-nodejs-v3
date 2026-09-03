import { FilterColumn } from './FilterColumn';


export class SearchBinlogParseRequestBody {
    private 'task_id'?: number;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'db_name'?: string;
    private 'table_name'?: string;
    private 'type_list'?: Array<string>;
    private 'cur_page'?: number;
    private 'per_page'?: number;
    private 'column_list'?: Array<FilterColumn>;
    public constructor(taskId?: number, curPage?: number, perPage?: number) { 
        this['task_id'] = taskId;
        this['cur_page'] = curPage;
        this['per_page'] = perPage;
    }
    public withTaskId(taskId: number): SearchBinlogParseRequestBody {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: number  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): number | undefined {
        return this['task_id'];
    }
    public withStartTime(startTime: number): SearchBinlogParseRequestBody {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): SearchBinlogParseRequestBody {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withDbName(dbName: string): SearchBinlogParseRequestBody {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withTableName(tableName: string): SearchBinlogParseRequestBody {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withTypeList(typeList: Array<string>): SearchBinlogParseRequestBody {
        this['type_list'] = typeList;
        return this;
    }
    public set typeList(typeList: Array<string>  | undefined) {
        this['type_list'] = typeList;
    }
    public get typeList(): Array<string> | undefined {
        return this['type_list'];
    }
    public withCurPage(curPage: number): SearchBinlogParseRequestBody {
        this['cur_page'] = curPage;
        return this;
    }
    public set curPage(curPage: number  | undefined) {
        this['cur_page'] = curPage;
    }
    public get curPage(): number | undefined {
        return this['cur_page'];
    }
    public withPerPage(perPage: number): SearchBinlogParseRequestBody {
        this['per_page'] = perPage;
        return this;
    }
    public set perPage(perPage: number  | undefined) {
        this['per_page'] = perPage;
    }
    public get perPage(): number | undefined {
        return this['per_page'];
    }
    public withColumnList(columnList: Array<FilterColumn>): SearchBinlogParseRequestBody {
        this['column_list'] = columnList;
        return this;
    }
    public set columnList(columnList: Array<FilterColumn>  | undefined) {
        this['column_list'] = columnList;
    }
    public get columnList(): Array<FilterColumn> | undefined {
        return this['column_list'];
    }
}