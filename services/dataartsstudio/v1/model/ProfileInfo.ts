import { ColumnInfo } from './ColumnInfo';


export class ProfileInfo {
    private 'db_type'?: string;
    public cancel?: boolean;
    private 'table_size'?: number;
    private 'database_name'?: string;
    private 'obs_common_config'?: string;
    private 'total_row_count'?: string;
    private 'fields_name'?: Array<string>;
    private 'table_name'?: string;
    public sample?: string;
    private 'update_date'?: string;
    private 'row_count'?: number;
    private 'column_count'?: number;
    public unique?: boolean;
    private 'auto_stop'?: boolean;
    private 'time_profile'?: boolean;
    public queue?: string;
    private 'dw_id'?: string;
    private 'colunms_metric'?: object;
    private 'columns_list'?: Array<ColumnInfo>;
    public constructor() { 
    }
    public withDbType(dbType: string): ProfileInfo {
        this['db_type'] = dbType;
        return this;
    }
    public set dbType(dbType: string  | undefined) {
        this['db_type'] = dbType;
    }
    public get dbType(): string | undefined {
        return this['db_type'];
    }
    public withCancel(cancel: boolean): ProfileInfo {
        this['cancel'] = cancel;
        return this;
    }
    public withTableSize(tableSize: number): ProfileInfo {
        this['table_size'] = tableSize;
        return this;
    }
    public set tableSize(tableSize: number  | undefined) {
        this['table_size'] = tableSize;
    }
    public get tableSize(): number | undefined {
        return this['table_size'];
    }
    public withDatabaseName(databaseName: string): ProfileInfo {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withObsCommonConfig(obsCommonConfig: string): ProfileInfo {
        this['obs_common_config'] = obsCommonConfig;
        return this;
    }
    public set obsCommonConfig(obsCommonConfig: string  | undefined) {
        this['obs_common_config'] = obsCommonConfig;
    }
    public get obsCommonConfig(): string | undefined {
        return this['obs_common_config'];
    }
    public withTotalRowCount(totalRowCount: string): ProfileInfo {
        this['total_row_count'] = totalRowCount;
        return this;
    }
    public set totalRowCount(totalRowCount: string  | undefined) {
        this['total_row_count'] = totalRowCount;
    }
    public get totalRowCount(): string | undefined {
        return this['total_row_count'];
    }
    public withFieldsName(fieldsName: Array<string>): ProfileInfo {
        this['fields_name'] = fieldsName;
        return this;
    }
    public set fieldsName(fieldsName: Array<string>  | undefined) {
        this['fields_name'] = fieldsName;
    }
    public get fieldsName(): Array<string> | undefined {
        return this['fields_name'];
    }
    public withTableName(tableName: string): ProfileInfo {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withSample(sample: string): ProfileInfo {
        this['sample'] = sample;
        return this;
    }
    public withUpdateDate(updateDate: string): ProfileInfo {
        this['update_date'] = updateDate;
        return this;
    }
    public set updateDate(updateDate: string  | undefined) {
        this['update_date'] = updateDate;
    }
    public get updateDate(): string | undefined {
        return this['update_date'];
    }
    public withRowCount(rowCount: number): ProfileInfo {
        this['row_count'] = rowCount;
        return this;
    }
    public set rowCount(rowCount: number  | undefined) {
        this['row_count'] = rowCount;
    }
    public get rowCount(): number | undefined {
        return this['row_count'];
    }
    public withColumnCount(columnCount: number): ProfileInfo {
        this['column_count'] = columnCount;
        return this;
    }
    public set columnCount(columnCount: number  | undefined) {
        this['column_count'] = columnCount;
    }
    public get columnCount(): number | undefined {
        return this['column_count'];
    }
    public withUnique(unique: boolean): ProfileInfo {
        this['unique'] = unique;
        return this;
    }
    public withAutoStop(autoStop: boolean): ProfileInfo {
        this['auto_stop'] = autoStop;
        return this;
    }
    public set autoStop(autoStop: boolean  | undefined) {
        this['auto_stop'] = autoStop;
    }
    public get autoStop(): boolean | undefined {
        return this['auto_stop'];
    }
    public withTimeProfile(timeProfile: boolean): ProfileInfo {
        this['time_profile'] = timeProfile;
        return this;
    }
    public set timeProfile(timeProfile: boolean  | undefined) {
        this['time_profile'] = timeProfile;
    }
    public get timeProfile(): boolean | undefined {
        return this['time_profile'];
    }
    public withQueue(queue: string): ProfileInfo {
        this['queue'] = queue;
        return this;
    }
    public withDwId(dwId: string): ProfileInfo {
        this['dw_id'] = dwId;
        return this;
    }
    public set dwId(dwId: string  | undefined) {
        this['dw_id'] = dwId;
    }
    public get dwId(): string | undefined {
        return this['dw_id'];
    }
    public withColunmsMetric(colunmsMetric: object): ProfileInfo {
        this['colunms_metric'] = colunmsMetric;
        return this;
    }
    public set colunmsMetric(colunmsMetric: object  | undefined) {
        this['colunms_metric'] = colunmsMetric;
    }
    public get colunmsMetric(): object | undefined {
        return this['colunms_metric'];
    }
    public withColumnsList(columnsList: Array<ColumnInfo>): ProfileInfo {
        this['columns_list'] = columnsList;
        return this;
    }
    public set columnsList(columnsList: Array<ColumnInfo>  | undefined) {
        this['columns_list'] = columnsList;
    }
    public get columnsList(): Array<ColumnInfo> | undefined {
        return this['columns_list'];
    }
}