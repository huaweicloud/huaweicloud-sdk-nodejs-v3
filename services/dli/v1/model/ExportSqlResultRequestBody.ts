

export class ExportSqlResultRequestBody {
    private 'data_path'?: string;
    public compress?: string;
    private 'data_type'?: string;
    private 'queue_name'?: string;
    private 'export_mode'?: ExportSqlResultRequestBodyExportModeEnum | string;
    private 'with_column_header'?: boolean;
    private 'limit_num'?: number;
    private 'encoding_type'?: string;
    public constructor(dataPath?: string, dataType?: string) { 
        this['data_path'] = dataPath;
        this['data_type'] = dataType;
    }
    public withDataPath(dataPath: string): ExportSqlResultRequestBody {
        this['data_path'] = dataPath;
        return this;
    }
    public set dataPath(dataPath: string  | undefined) {
        this['data_path'] = dataPath;
    }
    public get dataPath(): string | undefined {
        return this['data_path'];
    }
    public withCompress(compress: string): ExportSqlResultRequestBody {
        this['compress'] = compress;
        return this;
    }
    public withDataType(dataType: string): ExportSqlResultRequestBody {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: string  | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType(): string | undefined {
        return this['data_type'];
    }
    public withQueueName(queueName: string): ExportSqlResultRequestBody {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withExportMode(exportMode: ExportSqlResultRequestBodyExportModeEnum | string): ExportSqlResultRequestBody {
        this['export_mode'] = exportMode;
        return this;
    }
    public set exportMode(exportMode: ExportSqlResultRequestBodyExportModeEnum | string  | undefined) {
        this['export_mode'] = exportMode;
    }
    public get exportMode(): ExportSqlResultRequestBodyExportModeEnum | string | undefined {
        return this['export_mode'];
    }
    public withWithColumnHeader(withColumnHeader: boolean): ExportSqlResultRequestBody {
        this['with_column_header'] = withColumnHeader;
        return this;
    }
    public set withColumnHeader(withColumnHeader: boolean  | undefined) {
        this['with_column_header'] = withColumnHeader;
    }
    public get withColumnHeader(): boolean | undefined {
        return this['with_column_header'];
    }
    public withLimitNum(limitNum: number): ExportSqlResultRequestBody {
        this['limit_num'] = limitNum;
        return this;
    }
    public set limitNum(limitNum: number  | undefined) {
        this['limit_num'] = limitNum;
    }
    public get limitNum(): number | undefined {
        return this['limit_num'];
    }
    public withEncodingType(encodingType: string): ExportSqlResultRequestBody {
        this['encoding_type'] = encodingType;
        return this;
    }
    public set encodingType(encodingType: string  | undefined) {
        this['encoding_type'] = encodingType;
    }
    public get encodingType(): string | undefined {
        return this['encoding_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExportSqlResultRequestBodyExportModeEnum {
    ERRORIFEXISTS = 'ErrorIfExists',
    OVERWRITE = 'Overwrite'
}
