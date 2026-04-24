

export class ExportSqlDataReq {
    private 'file_type'?: string;
    private 'field_names'?: Array<string>;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor(fileType?: string) { 
        this['file_type'] = fileType;
    }
    public withFileType(fileType: string): ExportSqlDataReq {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: string  | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType(): string | undefined {
        return this['file_type'];
    }
    public withFieldNames(fieldNames: Array<string>): ExportSqlDataReq {
        this['field_names'] = fieldNames;
        return this;
    }
    public set fieldNames(fieldNames: Array<string>  | undefined) {
        this['field_names'] = fieldNames;
    }
    public get fieldNames(): Array<string> | undefined {
        return this['field_names'];
    }
    public withStartTime(startTime: string): ExportSqlDataReq {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ExportSqlDataReq {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}