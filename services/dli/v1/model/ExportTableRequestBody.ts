

export class ExportTableRequestBody {
    private 'data_path'?: string;
    private 'data_type'?: string;
    private 'database_name'?: string;
    private 'table_name'?: string;
    public compress?: string;
    private 'queue_name'?: string;
    private 'export_mode'?: string;
    private 'with_column_header'?: boolean;
    public constructor(dataPath?: string, dataType?: string, databaseName?: string, tableName?: string, compress?: string) { 
        this['data_path'] = dataPath;
        this['data_type'] = dataType;
        this['database_name'] = databaseName;
        this['table_name'] = tableName;
        this['compress'] = compress;
    }
    public withDataPath(dataPath: string): ExportTableRequestBody {
        this['data_path'] = dataPath;
        return this;
    }
    public set dataPath(dataPath: string  | undefined) {
        this['data_path'] = dataPath;
    }
    public get dataPath(): string | undefined {
        return this['data_path'];
    }
    public withDataType(dataType: string): ExportTableRequestBody {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: string  | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType(): string | undefined {
        return this['data_type'];
    }
    public withDatabaseName(databaseName: string): ExportTableRequestBody {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withTableName(tableName: string): ExportTableRequestBody {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withCompress(compress: string): ExportTableRequestBody {
        this['compress'] = compress;
        return this;
    }
    public withQueueName(queueName: string): ExportTableRequestBody {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withExportMode(exportMode: string): ExportTableRequestBody {
        this['export_mode'] = exportMode;
        return this;
    }
    public set exportMode(exportMode: string  | undefined) {
        this['export_mode'] = exportMode;
    }
    public get exportMode(): string | undefined {
        return this['export_mode'];
    }
    public withWithColumnHeader(withColumnHeader: boolean): ExportTableRequestBody {
        this['with_column_header'] = withColumnHeader;
        return this;
    }
    public set withColumnHeader(withColumnHeader: boolean  | undefined) {
        this['with_column_header'] = withColumnHeader;
    }
    public get withColumnHeader(): boolean | undefined {
        return this['with_column_header'];
    }
}