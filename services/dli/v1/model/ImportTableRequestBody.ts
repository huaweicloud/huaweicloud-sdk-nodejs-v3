

export class ImportTableRequestBody {
    private 'data_path'?: string;
    private 'data_type'?: string;
    private 'database_name'?: string;
    private 'table_name'?: string;
    private 'with_column_header'?: boolean;
    public delimiter?: string;
    private 'quote_char'?: string;
    private 'escape_char'?: string;
    private 'date_format'?: string;
    private 'bad_records_path'?: string;
    private 'timestamp_format'?: string;
    private 'queue_name'?: string;
    public overwrite?: boolean;
    private 'partition_spec'?: string;
    public conf?: Array<string>;
    public constructor(dataPath?: string, dataType?: string, databaseName?: string, tableName?: string) { 
        this['data_path'] = dataPath;
        this['data_type'] = dataType;
        this['database_name'] = databaseName;
        this['table_name'] = tableName;
    }
    public withDataPath(dataPath: string): ImportTableRequestBody {
        this['data_path'] = dataPath;
        return this;
    }
    public set dataPath(dataPath: string  | undefined) {
        this['data_path'] = dataPath;
    }
    public get dataPath(): string | undefined {
        return this['data_path'];
    }
    public withDataType(dataType: string): ImportTableRequestBody {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: string  | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType(): string | undefined {
        return this['data_type'];
    }
    public withDatabaseName(databaseName: string): ImportTableRequestBody {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withTableName(tableName: string): ImportTableRequestBody {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withWithColumnHeader(withColumnHeader: boolean): ImportTableRequestBody {
        this['with_column_header'] = withColumnHeader;
        return this;
    }
    public set withColumnHeader(withColumnHeader: boolean  | undefined) {
        this['with_column_header'] = withColumnHeader;
    }
    public get withColumnHeader(): boolean | undefined {
        return this['with_column_header'];
    }
    public withDelimiter(delimiter: string): ImportTableRequestBody {
        this['delimiter'] = delimiter;
        return this;
    }
    public withQuoteChar(quoteChar: string): ImportTableRequestBody {
        this['quote_char'] = quoteChar;
        return this;
    }
    public set quoteChar(quoteChar: string  | undefined) {
        this['quote_char'] = quoteChar;
    }
    public get quoteChar(): string | undefined {
        return this['quote_char'];
    }
    public withEscapeChar(escapeChar: string): ImportTableRequestBody {
        this['escape_char'] = escapeChar;
        return this;
    }
    public set escapeChar(escapeChar: string  | undefined) {
        this['escape_char'] = escapeChar;
    }
    public get escapeChar(): string | undefined {
        return this['escape_char'];
    }
    public withDateFormat(dateFormat: string): ImportTableRequestBody {
        this['date_format'] = dateFormat;
        return this;
    }
    public set dateFormat(dateFormat: string  | undefined) {
        this['date_format'] = dateFormat;
    }
    public get dateFormat(): string | undefined {
        return this['date_format'];
    }
    public withBadRecordsPath(badRecordsPath: string): ImportTableRequestBody {
        this['bad_records_path'] = badRecordsPath;
        return this;
    }
    public set badRecordsPath(badRecordsPath: string  | undefined) {
        this['bad_records_path'] = badRecordsPath;
    }
    public get badRecordsPath(): string | undefined {
        return this['bad_records_path'];
    }
    public withTimestampFormat(timestampFormat: string): ImportTableRequestBody {
        this['timestamp_format'] = timestampFormat;
        return this;
    }
    public set timestampFormat(timestampFormat: string  | undefined) {
        this['timestamp_format'] = timestampFormat;
    }
    public get timestampFormat(): string | undefined {
        return this['timestamp_format'];
    }
    public withQueueName(queueName: string): ImportTableRequestBody {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withOverwrite(overwrite: boolean): ImportTableRequestBody {
        this['overwrite'] = overwrite;
        return this;
    }
    public withPartitionSpec(partitionSpec: string): ImportTableRequestBody {
        this['partition_spec'] = partitionSpec;
        return this;
    }
    public set partitionSpec(partitionSpec: string  | undefined) {
        this['partition_spec'] = partitionSpec;
    }
    public get partitionSpec(): string | undefined {
        return this['partition_spec'];
    }
    public withConf(conf: Array<string>): ImportTableRequestBody {
        this['conf'] = conf;
        return this;
    }
}