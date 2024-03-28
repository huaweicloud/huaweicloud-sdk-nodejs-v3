import { Table } from './Table';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTablesResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    private 'table_count'?: number;
    public tables?: Array<Table>;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): ListTablesResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ListTablesResponse {
        this['message'] = message;
        return this;
    }
    public withTableCount(tableCount: number): ListTablesResponse {
        this['table_count'] = tableCount;
        return this;
    }
    public set tableCount(tableCount: number  | undefined) {
        this['table_count'] = tableCount;
    }
    public get tableCount(): number | undefined {
        return this['table_count'];
    }
    public withTables(tables: Array<Table>): ListTablesResponse {
        this['tables'] = tables;
        return this;
    }
}