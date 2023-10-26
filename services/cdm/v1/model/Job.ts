import { ConfigValues } from './ConfigValues';


export class Job {
    private 'job_type'?: JobJobTypeEnum | string;
    private 'from-connector-name'?: string;
    private 'to-config-values'?: ConfigValues;
    private 'to-link-name'?: string;
    private 'driver-config-values'?: ConfigValues;
    private 'from-config-values'?: ConfigValues;
    private 'to-connector-name'?: string;
    public name?: string;
    private 'from-link-name'?: string;
    private 'creation-user'?: string;
    private 'creation-date'?: number;
    private 'update-date'?: number;
    private 'is_incre_job'?: boolean;
    public flag?: number;
    private 'files_read'?: number;
    private 'update-user'?: string;
    private 'external_id'?: string;
    public type?: string;
    private 'execute_start_date'?: number;
    private 'delete_rows'?: number;
    public enabled?: boolean;
    private 'bytes_written'?: number;
    public id?: number;
    private 'is_use_sql'?: boolean;
    private 'update_rows'?: number;
    private 'group_name'?: string;
    private 'bytes_read'?: number;
    private 'execute_update_date'?: number;
    private 'write_rows'?: number;
    private 'rows_written'?: number;
    private 'rows_read'?: number;
    private 'files_written'?: number;
    private 'is_incrementing'?: boolean;
    private 'execute_create_date'?: number;
    public status?: string;
    public constructor(fromConnectorName?: string, toConfigValues?: ConfigValues, toLinkName?: string, driverConfigValues?: ConfigValues, fromConfigValues?: ConfigValues) { 
        this['from-connector-name'] = fromConnectorName;
        this['to-config-values'] = toConfigValues;
        this['to-link-name'] = toLinkName;
        this['driver-config-values'] = driverConfigValues;
        this['from-config-values'] = fromConfigValues;
    }
    public withJobType(jobType: JobJobTypeEnum | string): Job {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: JobJobTypeEnum | string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): JobJobTypeEnum | string | undefined {
        return this['job_type'];
    }
    public withFromConnectorName(fromConnectorName: string): Job {
        this['from-connector-name'] = fromConnectorName;
        return this;
    }
    public set fromConnectorName(fromConnectorName: string  | undefined) {
        this['from-connector-name'] = fromConnectorName;
    }
    public get fromConnectorName(): string | undefined {
        return this['from-connector-name'];
    }
    public withToConfigValues(toConfigValues: ConfigValues): Job {
        this['to-config-values'] = toConfigValues;
        return this;
    }
    public set toConfigValues(toConfigValues: ConfigValues  | undefined) {
        this['to-config-values'] = toConfigValues;
    }
    public get toConfigValues(): ConfigValues | undefined {
        return this['to-config-values'];
    }
    public withToLinkName(toLinkName: string): Job {
        this['to-link-name'] = toLinkName;
        return this;
    }
    public set toLinkName(toLinkName: string  | undefined) {
        this['to-link-name'] = toLinkName;
    }
    public get toLinkName(): string | undefined {
        return this['to-link-name'];
    }
    public withDriverConfigValues(driverConfigValues: ConfigValues): Job {
        this['driver-config-values'] = driverConfigValues;
        return this;
    }
    public set driverConfigValues(driverConfigValues: ConfigValues  | undefined) {
        this['driver-config-values'] = driverConfigValues;
    }
    public get driverConfigValues(): ConfigValues | undefined {
        return this['driver-config-values'];
    }
    public withFromConfigValues(fromConfigValues: ConfigValues): Job {
        this['from-config-values'] = fromConfigValues;
        return this;
    }
    public set fromConfigValues(fromConfigValues: ConfigValues  | undefined) {
        this['from-config-values'] = fromConfigValues;
    }
    public get fromConfigValues(): ConfigValues | undefined {
        return this['from-config-values'];
    }
    public withToConnectorName(toConnectorName: string): Job {
        this['to-connector-name'] = toConnectorName;
        return this;
    }
    public set toConnectorName(toConnectorName: string  | undefined) {
        this['to-connector-name'] = toConnectorName;
    }
    public get toConnectorName(): string | undefined {
        return this['to-connector-name'];
    }
    public withName(name: string): Job {
        this['name'] = name;
        return this;
    }
    public withFromLinkName(fromLinkName: string): Job {
        this['from-link-name'] = fromLinkName;
        return this;
    }
    public set fromLinkName(fromLinkName: string  | undefined) {
        this['from-link-name'] = fromLinkName;
    }
    public get fromLinkName(): string | undefined {
        return this['from-link-name'];
    }
    public withCreationUser(creationUser: string): Job {
        this['creation-user'] = creationUser;
        return this;
    }
    public set creationUser(creationUser: string  | undefined) {
        this['creation-user'] = creationUser;
    }
    public get creationUser(): string | undefined {
        return this['creation-user'];
    }
    public withCreationDate(creationDate: number): Job {
        this['creation-date'] = creationDate;
        return this;
    }
    public set creationDate(creationDate: number  | undefined) {
        this['creation-date'] = creationDate;
    }
    public get creationDate(): number | undefined {
        return this['creation-date'];
    }
    public withUpdateDate(updateDate: number): Job {
        this['update-date'] = updateDate;
        return this;
    }
    public set updateDate(updateDate: number  | undefined) {
        this['update-date'] = updateDate;
    }
    public get updateDate(): number | undefined {
        return this['update-date'];
    }
    public withIsIncreJob(isIncreJob: boolean): Job {
        this['is_incre_job'] = isIncreJob;
        return this;
    }
    public set isIncreJob(isIncreJob: boolean  | undefined) {
        this['is_incre_job'] = isIncreJob;
    }
    public get isIncreJob(): boolean | undefined {
        return this['is_incre_job'];
    }
    public withFlag(flag: number): Job {
        this['flag'] = flag;
        return this;
    }
    public withFilesRead(filesRead: number): Job {
        this['files_read'] = filesRead;
        return this;
    }
    public set filesRead(filesRead: number  | undefined) {
        this['files_read'] = filesRead;
    }
    public get filesRead(): number | undefined {
        return this['files_read'];
    }
    public withUpdateUser(updateUser: string): Job {
        this['update-user'] = updateUser;
        return this;
    }
    public set updateUser(updateUser: string  | undefined) {
        this['update-user'] = updateUser;
    }
    public get updateUser(): string | undefined {
        return this['update-user'];
    }
    public withExternalId(externalId: string): Job {
        this['external_id'] = externalId;
        return this;
    }
    public set externalId(externalId: string  | undefined) {
        this['external_id'] = externalId;
    }
    public get externalId(): string | undefined {
        return this['external_id'];
    }
    public withType(type: string): Job {
        this['type'] = type;
        return this;
    }
    public withExecuteStartDate(executeStartDate: number): Job {
        this['execute_start_date'] = executeStartDate;
        return this;
    }
    public set executeStartDate(executeStartDate: number  | undefined) {
        this['execute_start_date'] = executeStartDate;
    }
    public get executeStartDate(): number | undefined {
        return this['execute_start_date'];
    }
    public withDeleteRows(deleteRows: number): Job {
        this['delete_rows'] = deleteRows;
        return this;
    }
    public set deleteRows(deleteRows: number  | undefined) {
        this['delete_rows'] = deleteRows;
    }
    public get deleteRows(): number | undefined {
        return this['delete_rows'];
    }
    public withEnabled(enabled: boolean): Job {
        this['enabled'] = enabled;
        return this;
    }
    public withBytesWritten(bytesWritten: number): Job {
        this['bytes_written'] = bytesWritten;
        return this;
    }
    public set bytesWritten(bytesWritten: number  | undefined) {
        this['bytes_written'] = bytesWritten;
    }
    public get bytesWritten(): number | undefined {
        return this['bytes_written'];
    }
    public withId(id: number): Job {
        this['id'] = id;
        return this;
    }
    public withIsUseSql(isUseSql: boolean): Job {
        this['is_use_sql'] = isUseSql;
        return this;
    }
    public set isUseSql(isUseSql: boolean  | undefined) {
        this['is_use_sql'] = isUseSql;
    }
    public get isUseSql(): boolean | undefined {
        return this['is_use_sql'];
    }
    public withUpdateRows(updateRows: number): Job {
        this['update_rows'] = updateRows;
        return this;
    }
    public set updateRows(updateRows: number  | undefined) {
        this['update_rows'] = updateRows;
    }
    public get updateRows(): number | undefined {
        return this['update_rows'];
    }
    public withGroupName(groupName: string): Job {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withBytesRead(bytesRead: number): Job {
        this['bytes_read'] = bytesRead;
        return this;
    }
    public set bytesRead(bytesRead: number  | undefined) {
        this['bytes_read'] = bytesRead;
    }
    public get bytesRead(): number | undefined {
        return this['bytes_read'];
    }
    public withExecuteUpdateDate(executeUpdateDate: number): Job {
        this['execute_update_date'] = executeUpdateDate;
        return this;
    }
    public set executeUpdateDate(executeUpdateDate: number  | undefined) {
        this['execute_update_date'] = executeUpdateDate;
    }
    public get executeUpdateDate(): number | undefined {
        return this['execute_update_date'];
    }
    public withWriteRows(writeRows: number): Job {
        this['write_rows'] = writeRows;
        return this;
    }
    public set writeRows(writeRows: number  | undefined) {
        this['write_rows'] = writeRows;
    }
    public get writeRows(): number | undefined {
        return this['write_rows'];
    }
    public withRowsWritten(rowsWritten: number): Job {
        this['rows_written'] = rowsWritten;
        return this;
    }
    public set rowsWritten(rowsWritten: number  | undefined) {
        this['rows_written'] = rowsWritten;
    }
    public get rowsWritten(): number | undefined {
        return this['rows_written'];
    }
    public withRowsRead(rowsRead: number): Job {
        this['rows_read'] = rowsRead;
        return this;
    }
    public set rowsRead(rowsRead: number  | undefined) {
        this['rows_read'] = rowsRead;
    }
    public get rowsRead(): number | undefined {
        return this['rows_read'];
    }
    public withFilesWritten(filesWritten: number): Job {
        this['files_written'] = filesWritten;
        return this;
    }
    public set filesWritten(filesWritten: number  | undefined) {
        this['files_written'] = filesWritten;
    }
    public get filesWritten(): number | undefined {
        return this['files_written'];
    }
    public withIsIncrementing(isIncrementing: boolean): Job {
        this['is_incrementing'] = isIncrementing;
        return this;
    }
    public set isIncrementing(isIncrementing: boolean  | undefined) {
        this['is_incrementing'] = isIncrementing;
    }
    public get isIncrementing(): boolean | undefined {
        return this['is_incrementing'];
    }
    public withExecuteCreateDate(executeCreateDate: number): Job {
        this['execute_create_date'] = executeCreateDate;
        return this;
    }
    public set executeCreateDate(executeCreateDate: number  | undefined) {
        this['execute_create_date'] = executeCreateDate;
    }
    public get executeCreateDate(): number | undefined {
        return this['execute_create_date'];
    }
    public withStatus(status: string): Job {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum JobJobTypeEnum {
    NORMAL_JOB = 'NORMAL_JOB',
    BATCH_JOB = 'BATCH_JOB',
    SCENARIO_JOB = 'SCENARIO_JOB'
}
