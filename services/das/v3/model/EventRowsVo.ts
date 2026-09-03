import { RowPairDto } from './RowPairDto';


export class EventRowsVo {
    private 'event_id'?: number;
    private 'file_name'?: string;
    public position?: number;
    public timestamp?: number;
    private 'db_name'?: string;
    private 'table_name'?: string;
    private 'sql_type'?: string;
    private 'sql_statement'?: string;
    private 'column_names'?: Array<string>;
    private 'primary_keys'?: Array<string>;
    private 'affect_rows'?: number;
    private 'row_pairs'?: Array<RowPairDto>;
    public constructor() { 
    }
    public withEventId(eventId: number): EventRowsVo {
        this['event_id'] = eventId;
        return this;
    }
    public set eventId(eventId: number  | undefined) {
        this['event_id'] = eventId;
    }
    public get eventId(): number | undefined {
        return this['event_id'];
    }
    public withFileName(fileName: string): EventRowsVo {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withPosition(position: number): EventRowsVo {
        this['position'] = position;
        return this;
    }
    public withTimestamp(timestamp: number): EventRowsVo {
        this['timestamp'] = timestamp;
        return this;
    }
    public withDbName(dbName: string): EventRowsVo {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withTableName(tableName: string): EventRowsVo {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withSqlType(sqlType: string): EventRowsVo {
        this['sql_type'] = sqlType;
        return this;
    }
    public set sqlType(sqlType: string  | undefined) {
        this['sql_type'] = sqlType;
    }
    public get sqlType(): string | undefined {
        return this['sql_type'];
    }
    public withSqlStatement(sqlStatement: string): EventRowsVo {
        this['sql_statement'] = sqlStatement;
        return this;
    }
    public set sqlStatement(sqlStatement: string  | undefined) {
        this['sql_statement'] = sqlStatement;
    }
    public get sqlStatement(): string | undefined {
        return this['sql_statement'];
    }
    public withColumnNames(columnNames: Array<string>): EventRowsVo {
        this['column_names'] = columnNames;
        return this;
    }
    public set columnNames(columnNames: Array<string>  | undefined) {
        this['column_names'] = columnNames;
    }
    public get columnNames(): Array<string> | undefined {
        return this['column_names'];
    }
    public withPrimaryKeys(primaryKeys: Array<string>): EventRowsVo {
        this['primary_keys'] = primaryKeys;
        return this;
    }
    public set primaryKeys(primaryKeys: Array<string>  | undefined) {
        this['primary_keys'] = primaryKeys;
    }
    public get primaryKeys(): Array<string> | undefined {
        return this['primary_keys'];
    }
    public withAffectRows(affectRows: number): EventRowsVo {
        this['affect_rows'] = affectRows;
        return this;
    }
    public set affectRows(affectRows: number  | undefined) {
        this['affect_rows'] = affectRows;
    }
    public get affectRows(): number | undefined {
        return this['affect_rows'];
    }
    public withRowPairs(rowPairs: Array<RowPairDto>): EventRowsVo {
        this['row_pairs'] = rowPairs;
        return this;
    }
    public set rowPairs(rowPairs: Array<RowPairDto>  | undefined) {
        this['row_pairs'] = rowPairs;
    }
    public get rowPairs(): Array<RowPairDto> | undefined {
        return this['row_pairs'];
    }
}