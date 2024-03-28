import { Tag } from './Tag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSqlJobDetailResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    private 'job_id'?: string;
    public owner?: string;
    private 'start_time'?: number;
    public duration?: number;
    private 'export_mode'?: string;
    private 'database_name'?: string;
    private 'table_name'?: string;
    private 'data_path'?: string;
    private 'data_type'?: string;
    private 'with_column_header'?: boolean;
    public delimiter?: string;
    private 'quote_char'?: string;
    private 'escape_char'?: string;
    private 'date_format'?: string;
    private 'timestamp_format'?: string;
    public compress?: string;
    public tags?: Array<Tag>;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): ShowSqlJobDetailResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ShowSqlJobDetailResponse {
        this['message'] = message;
        return this;
    }
    public withJobId(jobId: string): ShowSqlJobDetailResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withOwner(owner: string): ShowSqlJobDetailResponse {
        this['owner'] = owner;
        return this;
    }
    public withStartTime(startTime: number): ShowSqlJobDetailResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withDuration(duration: number): ShowSqlJobDetailResponse {
        this['duration'] = duration;
        return this;
    }
    public withExportMode(exportMode: string): ShowSqlJobDetailResponse {
        this['export_mode'] = exportMode;
        return this;
    }
    public set exportMode(exportMode: string  | undefined) {
        this['export_mode'] = exportMode;
    }
    public get exportMode(): string | undefined {
        return this['export_mode'];
    }
    public withDatabaseName(databaseName: string): ShowSqlJobDetailResponse {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withTableName(tableName: string): ShowSqlJobDetailResponse {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withDataPath(dataPath: string): ShowSqlJobDetailResponse {
        this['data_path'] = dataPath;
        return this;
    }
    public set dataPath(dataPath: string  | undefined) {
        this['data_path'] = dataPath;
    }
    public get dataPath(): string | undefined {
        return this['data_path'];
    }
    public withDataType(dataType: string): ShowSqlJobDetailResponse {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: string  | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType(): string | undefined {
        return this['data_type'];
    }
    public withWithColumnHeader(withColumnHeader: boolean): ShowSqlJobDetailResponse {
        this['with_column_header'] = withColumnHeader;
        return this;
    }
    public set withColumnHeader(withColumnHeader: boolean  | undefined) {
        this['with_column_header'] = withColumnHeader;
    }
    public get withColumnHeader(): boolean | undefined {
        return this['with_column_header'];
    }
    public withDelimiter(delimiter: string): ShowSqlJobDetailResponse {
        this['delimiter'] = delimiter;
        return this;
    }
    public withQuoteChar(quoteChar: string): ShowSqlJobDetailResponse {
        this['quote_char'] = quoteChar;
        return this;
    }
    public set quoteChar(quoteChar: string  | undefined) {
        this['quote_char'] = quoteChar;
    }
    public get quoteChar(): string | undefined {
        return this['quote_char'];
    }
    public withEscapeChar(escapeChar: string): ShowSqlJobDetailResponse {
        this['escape_char'] = escapeChar;
        return this;
    }
    public set escapeChar(escapeChar: string  | undefined) {
        this['escape_char'] = escapeChar;
    }
    public get escapeChar(): string | undefined {
        return this['escape_char'];
    }
    public withDateFormat(dateFormat: string): ShowSqlJobDetailResponse {
        this['date_format'] = dateFormat;
        return this;
    }
    public set dateFormat(dateFormat: string  | undefined) {
        this['date_format'] = dateFormat;
    }
    public get dateFormat(): string | undefined {
        return this['date_format'];
    }
    public withTimestampFormat(timestampFormat: string): ShowSqlJobDetailResponse {
        this['timestamp_format'] = timestampFormat;
        return this;
    }
    public set timestampFormat(timestampFormat: string  | undefined) {
        this['timestamp_format'] = timestampFormat;
    }
    public get timestampFormat(): string | undefined {
        return this['timestamp_format'];
    }
    public withCompress(compress: string): ShowSqlJobDetailResponse {
        this['compress'] = compress;
        return this;
    }
    public withTags(tags: Array<Tag>): ShowSqlJobDetailResponse {
        this['tags'] = tags;
        return this;
    }
}