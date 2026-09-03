import { Column } from './Column';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowExecuteResultWithoutKeyResponse extends SdkResponse {
    private 'column_values'?: Array<object>;
    public metadata?: Array<Column>;
    private 'result_type'?: string;
    public rows?: number;
    private 'time_delay'?: number;
    private 'can_edit'?: boolean;
    private 'can_export'?: boolean;
    private 'edit_db_name'?: string;
    private 'edit_table'?: string;
    private 'edit_primary_keys'?: Array<string>;
    private 'cannot_edit_reason'?: number;
    private 'extend_datas'?: Array<object>;
    private 'data_sum'?: number;
    private 'big_table'?: boolean;
    public warning?: Array<string>;
    public sql?: string;
    private 'explain_sql'?: boolean;
    private 'page_state'?: string;
    private 'exceed_data'?: boolean;
    private 'execute_status'?: string;
    public constructor() { 
        super();
    }
    public withColumnValues(columnValues: Array<object>): ShowExecuteResultWithoutKeyResponse {
        this['column_values'] = columnValues;
        return this;
    }
    public set columnValues(columnValues: Array<object>  | undefined) {
        this['column_values'] = columnValues;
    }
    public get columnValues(): Array<object> | undefined {
        return this['column_values'];
    }
    public withMetadata(metadata: Array<Column>): ShowExecuteResultWithoutKeyResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withResultType(resultType: string): ShowExecuteResultWithoutKeyResponse {
        this['result_type'] = resultType;
        return this;
    }
    public set resultType(resultType: string  | undefined) {
        this['result_type'] = resultType;
    }
    public get resultType(): string | undefined {
        return this['result_type'];
    }
    public withRows(rows: number): ShowExecuteResultWithoutKeyResponse {
        this['rows'] = rows;
        return this;
    }
    public withTimeDelay(timeDelay: number): ShowExecuteResultWithoutKeyResponse {
        this['time_delay'] = timeDelay;
        return this;
    }
    public set timeDelay(timeDelay: number  | undefined) {
        this['time_delay'] = timeDelay;
    }
    public get timeDelay(): number | undefined {
        return this['time_delay'];
    }
    public withCanEdit(canEdit: boolean): ShowExecuteResultWithoutKeyResponse {
        this['can_edit'] = canEdit;
        return this;
    }
    public set canEdit(canEdit: boolean  | undefined) {
        this['can_edit'] = canEdit;
    }
    public get canEdit(): boolean | undefined {
        return this['can_edit'];
    }
    public withCanExport(canExport: boolean): ShowExecuteResultWithoutKeyResponse {
        this['can_export'] = canExport;
        return this;
    }
    public set canExport(canExport: boolean  | undefined) {
        this['can_export'] = canExport;
    }
    public get canExport(): boolean | undefined {
        return this['can_export'];
    }
    public withEditDbName(editDbName: string): ShowExecuteResultWithoutKeyResponse {
        this['edit_db_name'] = editDbName;
        return this;
    }
    public set editDbName(editDbName: string  | undefined) {
        this['edit_db_name'] = editDbName;
    }
    public get editDbName(): string | undefined {
        return this['edit_db_name'];
    }
    public withEditTable(editTable: string): ShowExecuteResultWithoutKeyResponse {
        this['edit_table'] = editTable;
        return this;
    }
    public set editTable(editTable: string  | undefined) {
        this['edit_table'] = editTable;
    }
    public get editTable(): string | undefined {
        return this['edit_table'];
    }
    public withEditPrimaryKeys(editPrimaryKeys: Array<string>): ShowExecuteResultWithoutKeyResponse {
        this['edit_primary_keys'] = editPrimaryKeys;
        return this;
    }
    public set editPrimaryKeys(editPrimaryKeys: Array<string>  | undefined) {
        this['edit_primary_keys'] = editPrimaryKeys;
    }
    public get editPrimaryKeys(): Array<string> | undefined {
        return this['edit_primary_keys'];
    }
    public withCannotEditReason(cannotEditReason: number): ShowExecuteResultWithoutKeyResponse {
        this['cannot_edit_reason'] = cannotEditReason;
        return this;
    }
    public set cannotEditReason(cannotEditReason: number  | undefined) {
        this['cannot_edit_reason'] = cannotEditReason;
    }
    public get cannotEditReason(): number | undefined {
        return this['cannot_edit_reason'];
    }
    public withExtendDatas(extendDatas: Array<object>): ShowExecuteResultWithoutKeyResponse {
        this['extend_datas'] = extendDatas;
        return this;
    }
    public set extendDatas(extendDatas: Array<object>  | undefined) {
        this['extend_datas'] = extendDatas;
    }
    public get extendDatas(): Array<object> | undefined {
        return this['extend_datas'];
    }
    public withDataSum(dataSum: number): ShowExecuteResultWithoutKeyResponse {
        this['data_sum'] = dataSum;
        return this;
    }
    public set dataSum(dataSum: number  | undefined) {
        this['data_sum'] = dataSum;
    }
    public get dataSum(): number | undefined {
        return this['data_sum'];
    }
    public withBigTable(bigTable: boolean): ShowExecuteResultWithoutKeyResponse {
        this['big_table'] = bigTable;
        return this;
    }
    public set bigTable(bigTable: boolean  | undefined) {
        this['big_table'] = bigTable;
    }
    public get bigTable(): boolean | undefined {
        return this['big_table'];
    }
    public withWarning(warning: Array<string>): ShowExecuteResultWithoutKeyResponse {
        this['warning'] = warning;
        return this;
    }
    public withSql(sql: string): ShowExecuteResultWithoutKeyResponse {
        this['sql'] = sql;
        return this;
    }
    public withExplainSql(explainSql: boolean): ShowExecuteResultWithoutKeyResponse {
        this['explain_sql'] = explainSql;
        return this;
    }
    public set explainSql(explainSql: boolean  | undefined) {
        this['explain_sql'] = explainSql;
    }
    public get explainSql(): boolean | undefined {
        return this['explain_sql'];
    }
    public withPageState(pageState: string): ShowExecuteResultWithoutKeyResponse {
        this['page_state'] = pageState;
        return this;
    }
    public set pageState(pageState: string  | undefined) {
        this['page_state'] = pageState;
    }
    public get pageState(): string | undefined {
        return this['page_state'];
    }
    public withExceedData(exceedData: boolean): ShowExecuteResultWithoutKeyResponse {
        this['exceed_data'] = exceedData;
        return this;
    }
    public set exceedData(exceedData: boolean  | undefined) {
        this['exceed_data'] = exceedData;
    }
    public get exceedData(): boolean | undefined {
        return this['exceed_data'];
    }
    public withExecuteStatus(executeStatus: string): ShowExecuteResultWithoutKeyResponse {
        this['execute_status'] = executeStatus;
        return this;
    }
    public set executeStatus(executeStatus: string  | undefined) {
        this['execute_status'] = executeStatus;
    }
    public get executeStatus(): string | undefined {
        return this['execute_status'];
    }
}