

export class OBSCommonConfig {
    private 'column_map'?: object;
    public path?: string;
    public delimiter?: string;
    public quote?: string;
    public escape?: string;
    public header?: boolean;
    private 'data_type'?: string;
    private 'date_format'?: string;
    private 'timestamp_format'?: string;
    private 'null_value'?: string;
    public comment?: string;
    private 'parse_mode'?: string;
    private 'join_table'?: string;
    public constructor() { 
    }
    public withColumnMap(columnMap: object): OBSCommonConfig {
        this['column_map'] = columnMap;
        return this;
    }
    public set columnMap(columnMap: object  | undefined) {
        this['column_map'] = columnMap;
    }
    public get columnMap(): object | undefined {
        return this['column_map'];
    }
    public withPath(path: string): OBSCommonConfig {
        this['path'] = path;
        return this;
    }
    public withDelimiter(delimiter: string): OBSCommonConfig {
        this['delimiter'] = delimiter;
        return this;
    }
    public withQuote(quote: string): OBSCommonConfig {
        this['quote'] = quote;
        return this;
    }
    public withEscape(escape: string): OBSCommonConfig {
        this['escape'] = escape;
        return this;
    }
    public withHeader(header: boolean): OBSCommonConfig {
        this['header'] = header;
        return this;
    }
    public withDataType(dataType: string): OBSCommonConfig {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: string  | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType(): string | undefined {
        return this['data_type'];
    }
    public withDateFormat(dateFormat: string): OBSCommonConfig {
        this['date_format'] = dateFormat;
        return this;
    }
    public set dateFormat(dateFormat: string  | undefined) {
        this['date_format'] = dateFormat;
    }
    public get dateFormat(): string | undefined {
        return this['date_format'];
    }
    public withTimestampFormat(timestampFormat: string): OBSCommonConfig {
        this['timestamp_format'] = timestampFormat;
        return this;
    }
    public set timestampFormat(timestampFormat: string  | undefined) {
        this['timestamp_format'] = timestampFormat;
    }
    public get timestampFormat(): string | undefined {
        return this['timestamp_format'];
    }
    public withNullValue(nullValue: string): OBSCommonConfig {
        this['null_value'] = nullValue;
        return this;
    }
    public set nullValue(nullValue: string  | undefined) {
        this['null_value'] = nullValue;
    }
    public get nullValue(): string | undefined {
        return this['null_value'];
    }
    public withComment(comment: string): OBSCommonConfig {
        this['comment'] = comment;
        return this;
    }
    public withParseMode(parseMode: string): OBSCommonConfig {
        this['parse_mode'] = parseMode;
        return this;
    }
    public set parseMode(parseMode: string  | undefined) {
        this['parse_mode'] = parseMode;
    }
    public get parseMode(): string | undefined {
        return this['parse_mode'];
    }
    public withJoinTable(joinTable: string): OBSCommonConfig {
        this['join_table'] = joinTable;
        return this;
    }
    public set joinTable(joinTable: string  | undefined) {
        this['join_table'] = joinTable;
    }
    public get joinTable(): string | undefined {
        return this['join_table'];
    }
}