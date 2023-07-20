import { BackupFilesBody } from './BackupFilesBody';
import { SourceInstanceBody } from './SourceInstanceBody';
import { TargetInstanceBody } from './TargetInstanceBody';


export class CreateMigrationTaskBody {
    private 'task_name'?: string;
    public description?: string;
    private 'migration_type'?: CreateMigrationTaskBodyMigrationTypeEnum | string;
    private 'migration_method'?: CreateMigrationTaskBodyMigrationMethodEnum | string;
    private 'backup_files'?: BackupFilesBody;
    private 'network_type'?: CreateMigrationTaskBodyNetworkTypeEnum | string;
    private 'source_instance'?: SourceInstanceBody;
    private 'target_instance'?: TargetInstanceBody;
    public constructor(taskName?: string, migrationType?: string, migrationMethod?: string, targetInstance?: TargetInstanceBody) { 
        this['task_name'] = taskName;
        this['migration_type'] = migrationType;
        this['migration_method'] = migrationMethod;
        this['target_instance'] = targetInstance;
    }
    public withTaskName(taskName: string): CreateMigrationTaskBody {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withDescription(description: string): CreateMigrationTaskBody {
        this['description'] = description;
        return this;
    }
    public withMigrationType(migrationType: CreateMigrationTaskBodyMigrationTypeEnum | string): CreateMigrationTaskBody {
        this['migration_type'] = migrationType;
        return this;
    }
    public set migrationType(migrationType: CreateMigrationTaskBodyMigrationTypeEnum | string  | undefined) {
        this['migration_type'] = migrationType;
    }
    public get migrationType(): CreateMigrationTaskBodyMigrationTypeEnum | string | undefined {
        return this['migration_type'];
    }
    public withMigrationMethod(migrationMethod: CreateMigrationTaskBodyMigrationMethodEnum | string): CreateMigrationTaskBody {
        this['migration_method'] = migrationMethod;
        return this;
    }
    public set migrationMethod(migrationMethod: CreateMigrationTaskBodyMigrationMethodEnum | string  | undefined) {
        this['migration_method'] = migrationMethod;
    }
    public get migrationMethod(): CreateMigrationTaskBodyMigrationMethodEnum | string | undefined {
        return this['migration_method'];
    }
    public withBackupFiles(backupFiles: BackupFilesBody): CreateMigrationTaskBody {
        this['backup_files'] = backupFiles;
        return this;
    }
    public set backupFiles(backupFiles: BackupFilesBody  | undefined) {
        this['backup_files'] = backupFiles;
    }
    public get backupFiles(): BackupFilesBody | undefined {
        return this['backup_files'];
    }
    public withNetworkType(networkType: CreateMigrationTaskBodyNetworkTypeEnum | string): CreateMigrationTaskBody {
        this['network_type'] = networkType;
        return this;
    }
    public set networkType(networkType: CreateMigrationTaskBodyNetworkTypeEnum | string  | undefined) {
        this['network_type'] = networkType;
    }
    public get networkType(): CreateMigrationTaskBodyNetworkTypeEnum | string | undefined {
        return this['network_type'];
    }
    public withSourceInstance(sourceInstance: SourceInstanceBody): CreateMigrationTaskBody {
        this['source_instance'] = sourceInstance;
        return this;
    }
    public set sourceInstance(sourceInstance: SourceInstanceBody  | undefined) {
        this['source_instance'] = sourceInstance;
    }
    public get sourceInstance(): SourceInstanceBody | undefined {
        return this['source_instance'];
    }
    public withTargetInstance(targetInstance: TargetInstanceBody): CreateMigrationTaskBody {
        this['target_instance'] = targetInstance;
        return this;
    }
    public set targetInstance(targetInstance: TargetInstanceBody  | undefined) {
        this['target_instance'] = targetInstance;
    }
    public get targetInstance(): TargetInstanceBody | undefined {
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
