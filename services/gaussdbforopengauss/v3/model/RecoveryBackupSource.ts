import { RestoreTableListDetail } from './RestoreTableListDetail';


export class RecoveryBackupSource {
    private 'instance_id'?: string;
    public type?: string;
    private 'backup_id'?: string;
    private 'restore_time'?: string;
    private 'table_list'?: Array<RestoreTableListDetail>;
    private 'schema_type'?: RecoveryBackupSourceSchemaTypeEnum | string;
    public constructor(instanceId?: string, backupId?: string, restoreTime?: string) { 
        this['instance_id'] = instanceId;
        this['backup_id'] = backupId;
        this['restore_time'] = restoreTime;
    }
    public withInstanceId(instanceId: string): RecoveryBackupSource {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withType(type: string): RecoveryBackupSource {
        this['type'] = type;
        return this;
    }
    public withBackupId(backupId: string): RecoveryBackupSource {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
        return this['backup_id'];
    }
    public withRestoreTime(restoreTime: string): RecoveryBackupSource {
        this['restore_time'] = restoreTime;
        return this;
    }
    public set restoreTime(restoreTime: string  | undefined) {
        this['restore_time'] = restoreTime;
    }
    public get restoreTime(): string | undefined {
        return this['restore_time'];
    }
    public withTableList(tableList: Array<RestoreTableListDetail>): RecoveryBackupSource {
        this['table_list'] = tableList;
        return this;
    }
    public set tableList(tableList: Array<RestoreTableListDetail>  | undefined) {
        this['table_list'] = tableList;
    }
    public get tableList(): Array<RestoreTableListDetail> | undefined {
        return this['table_list'];
    }
    public withSchemaType(schemaType: RecoveryBackupSourceSchemaTypeEnum | string): RecoveryBackupSource {
        this['schema_type'] = schemaType;
        return this;
    }
    public set schemaType(schemaType: RecoveryBackupSourceSchemaTypeEnum | string  | undefined) {
        this['schema_type'] = schemaType;
    }
    public get schemaType(): RecoveryBackupSourceSchemaTypeEnum | string | undefined {
        return this['schema_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RecoveryBackupSourceSchemaTypeEnum {
    INSTANCE = 'INSTANCE 实例级备份',
    DATABASE = 'DATABASE 库级备份',
    DATABASE_TABLE = 'DATABASE_TABLE 表级备份'
}
