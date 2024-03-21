import { TableColumnDTO } from './TableColumnDTO';


export class DataProfileRO {
    private 'dw_id'?: string;
    private 'db_type'?: DataProfileRODbTypeEnum | string;
    private 'database_name'?: string;
    private 'table_name'?: string;
    private 'table_id'?: string;
    private 'column_names'?: Array<TableColumnDTO>;
    private 'fields_name'?: Array<string>;
    public queue?: string;
    public unique?: boolean;
    private 'time_profile'?: boolean;
    public sample?: DataProfileROSampleEnum | string;
    private 'job_id'?: string;
    public cancel?: boolean;
    private 'auto_stop'?: boolean;
    public obsconfig?: object;
    public constructor() { 
    }
    public withDwId(dwId: string): DataProfileRO {
        this['dw_id'] = dwId;
        return this;
    }
    public set dwId(dwId: string  | undefined) {
        this['dw_id'] = dwId;
    }
    public get dwId(): string | undefined {
        return this['dw_id'];
    }
    public withDbType(dbType: DataProfileRODbTypeEnum | string): DataProfileRO {
        this['db_type'] = dbType;
        return this;
    }
    public set dbType(dbType: DataProfileRODbTypeEnum | string  | undefined) {
        this['db_type'] = dbType;
    }
    public get dbType(): DataProfileRODbTypeEnum | string | undefined {
        return this['db_type'];
    }
    public withDatabaseName(databaseName: string): DataProfileRO {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withTableName(tableName: string): DataProfileRO {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withTableId(tableId: string): DataProfileRO {
        this['table_id'] = tableId;
        return this;
    }
    public set tableId(tableId: string  | undefined) {
        this['table_id'] = tableId;
    }
    public get tableId(): string | undefined {
        return this['table_id'];
    }
    public withColumnNames(columnNames: Array<TableColumnDTO>): DataProfileRO {
        this['column_names'] = columnNames;
        return this;
    }
    public set columnNames(columnNames: Array<TableColumnDTO>  | undefined) {
        this['column_names'] = columnNames;
    }
    public get columnNames(): Array<TableColumnDTO> | undefined {
        return this['column_names'];
    }
    public withFieldsName(fieldsName: Array<string>): DataProfileRO {
        this['fields_name'] = fieldsName;
        return this;
    }
    public set fieldsName(fieldsName: Array<string>  | undefined) {
        this['fields_name'] = fieldsName;
    }
    public get fieldsName(): Array<string> | undefined {
        return this['fields_name'];
    }
    public withQueue(queue: string): DataProfileRO {
        this['queue'] = queue;
        return this;
    }
    public withUnique(unique: boolean): DataProfileRO {
        this['unique'] = unique;
        return this;
    }
    public withTimeProfile(timeProfile: boolean): DataProfileRO {
        this['time_profile'] = timeProfile;
        return this;
    }
    public set timeProfile(timeProfile: boolean  | undefined) {
        this['time_profile'] = timeProfile;
    }
    public get timeProfile(): boolean | undefined {
        return this['time_profile'];
    }
    public withSample(sample: DataProfileROSampleEnum | string): DataProfileRO {
        this['sample'] = sample;
        return this;
    }
    public withJobId(jobId: string): DataProfileRO {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withCancel(cancel: boolean): DataProfileRO {
        this['cancel'] = cancel;
        return this;
    }
    public withAutoStop(autoStop: boolean): DataProfileRO {
        this['auto_stop'] = autoStop;
        return this;
    }
    public set autoStop(autoStop: boolean  | undefined) {
        this['auto_stop'] = autoStop;
    }
    public get autoStop(): boolean | undefined {
        return this['auto_stop'];
    }
    public withObsconfig(obsconfig: object): DataProfileRO {
        this['obsconfig'] = obsconfig;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DataProfileRODbTypeEnum {
    DWS = 'DWS',
    DLI = 'DLI'
}
/**
    * @export
    * @enum {string}
    */
export enum DataProfileROSampleEnum {
    N0UNDEFINED = '基于采样数据，采样数量为N条：非0整数，默认值undefined'
}
