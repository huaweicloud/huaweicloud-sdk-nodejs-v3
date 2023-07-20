import { CreateTableReqColumn } from './CreateTableReqColumn';
import { TmsTagEntity } from './TmsTagEntity';


export class CreateTableReq {
    private 'table_name'?: string;
    private 'data_location'?: string;
    public description?: string;
    public columns?: Array<CreateTableReqColumn>;
    private 'data_type'?: string;
    private 'data_path'?: string;
    private 'with_column_header'?: boolean;
    public delimiter?: string;
    private 'quote_char'?: string;
    private 'escape_char'?: string;
    private 'date_format'?: string;
    private 'timestamp_format'?: string;
    private 'select_statement'?: string;
    public tags?: Array<TmsTagEntity>;
    public constructor(tableName?: string, dataLocation?: string, columns?: Array<CreateTableReqColumn>) { 
        this['table_name'] = tableName;
        this['data_location'] = dataLocation;
        this['columns'] = columns;
    }
    public withTableName(tableName: string): CreateTableReq {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withDataLocation(dataLocation: string): CreateTableReq {
        this['data_location'] = dataLocation;
        return this;
    }
    public set dataLocation(dataLocation: string  | undefined) {
        this['data_location'] = dataLocation;
    }
    public get dataLocation(): string | undefined {
        return this['data_location'];
    }
    public withDescription(description: string): CreateTableReq {
        this['description'] = description;
        return this;
    }
    public withColumns(columns: Array<CreateTableReqColumn>): CreateTableReq {
        this['columns'] = columns;
        return this;
    }
    public withDataType(dataType: string): CreateTableReq {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: string  | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType(): string | undefined {
        return this['data_type'];
    }
    public withDataPath(dataPath: string): CreateTableReq {
        this['data_path'] = dataPath;
        return this;
    }
    public set dataPath(dataPath: string  | undefined) {
        this['data_path'] = dataPath;
    }
    public get dataPath(): string | undefined {
        return this['data_path'];
    }
    public withWithColumnHeader(withColumnHeader: boolean): CreateTableReq {
        this['with_column_header'] = withColumnHeader;
        return this;
    }
    public set withColumnHeader(withColumnHeader: boolean  | undefined) {
        this['with_column_header'] = withColumnHeader;
    }
    public get withColumnHeader(): boolean | undefined {
        return this['with_column_header'];
    }
    public withDelimiter(delimiter: string): CreateTableReq {
        this['delimiter'] = delimiter;
        return this;
    }
    public withQuoteChar(quoteChar: string): CreateTableReq {
        this['quote_char'] = quoteChar;
        return this;
    }
    public set quoteChar(quoteChar: string  | undefined) {
        this['quote_char'] = quoteChar;
    }
    public get quoteChar(): string | undefined {
        return this['quote_char'];
    }
    public withEscapeChar(escapeChar: string): CreateTableReq {
        this['escape_char'] = escapeChar;
        return this;
    }
    public set escapeChar(escapeChar: string  | undefined) {
        this['escape_char'] = escapeChar;
    }
    public get escapeChar(): string | undefined {
        return this['escape_char'];
    }
    public withDateFormat(dateFormat: string): CreateTableReq {
        this['date_format'] = dateFormat;
        return this;
    }
    public set dateFormat(dateFormat: string  | undefined) {
        this['date_format'] = dateFormat;
    }
    public get dateFormat(): string | undefined {
        return this['date_format'];
    }
    public withTimestampFormat(timestampFormat: string): CreateTableReq {
        this['timestamp_format'] = timestampFormat;
        return this;
    }
    public set timestampFormat(timestampFormat: string  | undefined) {
        this['timestamp_format'] = timestampFormat;
    }
    public get timestampFormat(): string | undefined {
        return this['timestamp_format'];
    }
    public withSelectStatement(selectStatement: string): CreateTableReq {
        this['select_statement'] = selectStatement;
        return this;
    }
    public set selectStatement(selectStatement: string  | undefined) {
        this['select_statement'] = selectStatement;
    }
    public get selectStatement(): string | undefined {
        return this['select_statement'];
    }
    public withTags(tags: Array<TmsTagEntity>): CreateTableReq {
        this['tags'] = tags;
        return this;
    }
}