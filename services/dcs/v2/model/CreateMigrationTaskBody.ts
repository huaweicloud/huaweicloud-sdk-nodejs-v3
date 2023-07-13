import { BackupFilesBody } from './BackupFilesBody';
import { SourceInstanceBody } from './SourceInstanceBody';
import { TargetInstanceBody } from './TargetInstanceBody';


export class CreateMigrationTaskBody {
    private 'task_name': string | undefined;
    public description?: string;
    private 'migration_type': CreateMigrationTaskBodyMigrationTypeEnum | undefined;
    private 'migration_method': CreateMigrationTaskBodyMigrationMethodEnum | undefined;
    private 'backup_files'?: BackupFilesBody | undefined;
    private 'network_type'?: CreateMigrationTaskBodyNetworkTypeEnum | undefined;
    private 'source_instance'?: SourceInstanceBody | undefined;
    private 'target_instance': TargetInstanceBody | undefined;
    public constructor(taskName?: any, migrationType?: any, migrationMethod?: any, targetInstance?: any) { 
        this['task_name'] = taskName;
        this['migration_type'] = migrationType;
        this['migration_method'] = migrationMethod;
        this['target_instance'] = targetInstance;
    }
    public withTaskName(taskName: string): CreateMigrationTaskBody {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName() {
        return this['task_name'];
    }
    public withDescription(description: string): CreateMigrationTaskBody {
        this['description'] = description;
        return this;
    }
    public withMigrationType(migrationType: CreateMigrationTaskBodyMigrationTypeEnum): CreateMigrationTaskBody {
        this['migration_type'] = migrationType;
        return this;
    }
    public set migrationType(migrationType: CreateMigrationTaskBodyMigrationTypeEnum | undefined) {
        this['migration_type'] = migrationType;
    }
    public get migrationType() {
        return this['migration_type'];
    }
    public withMigrationMethod(migrationMethod: CreateMigrationTaskBodyMigrationMethodEnum): CreateMigrationTaskBody {
        this['migration_method'] = migrationMethod;
        return this;
    }
    public set migrationMethod(migrationMethod: CreateMigrationTaskBodyMigrationMethodEnum | undefined) {
        this['migration_method'] = migrationMethod;
    }
    public get migrationMethod() {
        return this['migration_method'];
    }
    public withBackupFiles(backupFiles: BackupFilesBody): CreateMigrationTaskBody {
        this['backup_files'] = backupFiles;
        return this;
    }
    public set backupFiles(backupFiles: BackupFilesBody | undefined) {
        this['backup_files'] = backupFiles;
    }
    public get backupFiles() {
        return this['backup_files'];
    }
    public withNetworkType(networkType: CreateMigrationTaskBodyNetworkTypeEnum): CreateMigrationTaskBody {
        this['network_type'] = networkType;
        return this;
    }
    public set networkType(networkType: CreateMigrationTaskBodyNetworkTypeEnum | undefined) {
        this['network_type'] = networkType;
    }
    public get networkType() {
        return this['network_type'];
    }
    public withSourceInstance(sourceInstance: SourceInstanceBody): CreateMigrationTaskBody {
        this['source_instance'] = sourceInstance;
        return this;
    }
    public set sourceInstance(sourceInstance: SourceInstanceBody | undefined) {
        this['source_instance'] = sourceInstance;
    }
    public get sourceInstance() {
        return this['source_instance'];
    }
    public withTargetInstance(targetInstance: TargetInstanceBody): CreateMigrationTaskBody {
        this['target_instance'] = targetInstance;
        return this;
    }
    public set targetInstance(targetInstance: TargetInstanceBody | undefined) {
        this['target_instance'] = targetInstance;
    }
    public get targetInstance() {
        return this['target_instance'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateMigrationTaskBodyMigrationTypeEnum {
    BACKUPFILE_IMPORT = 'backupfile_import',
    ONLINE_MIGRATION = 'online_migration'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateMigrationTaskBodyMigrationMethodEnum {
    FULL_AMOUNT_MIGRATION = 'full_amount_migration',
    INCREMENTAL_MIGRATION = 'incremental_migration'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateMigrationTaskBodyNetworkTypeEnum {
    VPC = 'vpc',
    VPN = 'vpn'
}
