import { Column } from './Column';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTableResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    private 'column_count'?: number;
    public columns?: Array<Column>;
    private 'table_type'?: string;
    private 'data_type'?: string;
    private 'data_location'?: string;
    private 'storage_properties'?: Array<object>;
    private 'table_comment'?: string;
    private 'create_table_sql'?: string;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): ShowTableResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ShowTableResponse {
        this['message'] = message;
        return this;
    }
    public withColumnCount(columnCount: number): ShowTableResponse {
        this['column_count'] = columnCount;
        return this;
    }
    public set columnCount(columnCount: number  | undefined) {
        this['column_count'] = columnCount;
    }
    public get columnCount(): number | undefined {
        return this['column_count'];
    }
    public withColumns(columns: Array<Column>): ShowTableResponse {
        this['columns'] = columns;
        return this;
    }
    public withTableType(tableType: string): ShowTableResponse {
        this['table_type'] = tableType;
        return this;
    }
    public set tableType(tableType: string  | undefined) {
        this['table_type'] = tableType;
    }
    public get tableType(): string | undefined {
        return this['table_type'];
    }
    public withDataType(dataType: string): ShowTableResponse {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: string  | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType(): string | undefined {
        return this['data_type'];
    }
    public withDataLocation(dataLocation: string): ShowTableResponse {
        this['data_location'] = dataLocation;
        return this;
    }
    public set dataLocation(dataLocation: string  | undefined) {
        this['data_location'] = dataLocation;
    }
    public get dataLocation(): string | undefined {
        return this['data_location'];
    }
    public withStorageProperties(storageProperties: Array<object>): ShowTableResponse {
        this['storage_properties'] = storageProperties;
        return this;
    }
    public set storageProperties(storageProperties: Array<object>  | undefined) {
        this['storage_properties'] = storageProperties;
    }
    public get storageProperties(): Array<object> | undefined {
        return this['storage_properties'];
    }
    public withTableComment(tableComment: string): ShowTableResponse {
        this['table_comment'] = tableComment;
        return this;
    }
    public set tableComment(tableComment: string  | undefined) {
        this['table_comment'] = tableComment;
    }
    public get tableComment(): string | undefined {
        return this['table_comment'];
    }
    public withCreateTableSql(createTableSql: string): ShowTableResponse {
        this['create_table_sql'] = createTableSql;
        return this;
    }
    public set createTableSql(createTableSql: string  | undefined) {
        this['create_table_sql'] = createTableSql;
    }
    public get createTableSql(): string | undefined {
        return this['create_table_sql'];
    }
}