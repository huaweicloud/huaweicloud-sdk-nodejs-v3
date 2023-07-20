import { BackupFilesBody } from './BackupFilesBody';
import { SourceInstanceBody } from './SourceInstanceBody';
import { TargetInstanceBody } from './TargetInstanceBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class StopMigrationTaskResponse extends SdkResponse {
    private 'task_id'?: string;
    private 'task_name'?: string;
    public description?: string;
    public status?: StopMigrationTaskResponseStatusEnum | string;
    private 'migration_type'?: StopMigrationTaskResponseMigrationTypeEnum | string;
    private 'migration_method'?: StopMigrationTaskResponseMigrationMethodEnum | string;
    private 'ecs_tenant_private_ip'?: string;
    private 'backup_files'?: BackupFilesBody;
    private 'network_type'?: StopMigrationTaskResponseNetworkTypeEnum | string;
    private 'source_instance'?: SourceInstanceBody;
    private 'target_instance'?: TargetInstanceBody;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public constructor() { 
        super();
    }
    public withTaskId(taskId: string): StopMigrationTaskResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withTaskName(taskName: string): StopMigrationTaskResponse {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withDescription(description: string): StopMigrationTaskResponse {
        this['description'] = description;
        return this;
    }
    public withStatus(status: StopMigrationTaskResponseStatusEnum | string): StopMigrationTaskResponse {
        this['status'] = status;
        return this;
    }
    public withMigrationType(migrationType: StopMigrationTaskResponseMigrationTypeEnum | string): StopMigrationTaskResponse {
        this['migration_type'] = migrationType;
        return this;
    }
    public set migrationType(migrationType: StopMigrationTaskResponseMigrationTypeEnum | string  | undefined) {
        this['migration_type'] = migrationType;
    }
    public get migrationType(): StopMigrationTaskResponseMigrationTypeEnum | string | undefined {
        return this['migration_type'];
    }
    public withMigrationMethod(migrationMethod: StopMigrationTaskResponseMigrationMethodEnum | string): StopMigrationTaskResponse {
        this['migration_method'] = migrationMethod;
        return this;
    }
    public set migrationMethod(migrationMethod: StopMigrationTaskResponseMigrationMethodEnum | string  | undefined) {
        this['migration_method'] = migrationMethod;
    }
    public get migrationMethod(): StopMigrationTaskResponseMigrationMethodEnum | string | undefined {
        return this['migration_method'];
    }
    public withEcsTenantPrivateIp(ecsTenantPrivateIp: string): StopMigrationTaskResponse {
        this['ecs_tenant_private_ip'] = ecsTenantPrivateIp;
        return this;
    }
    public set ecsTenantPrivateIp(ecsTenantPrivateIp: string  | undefined) {
        this['ecs_tenant_private_ip'] = ecsTenantPrivateIp;
    }
    public get ecsTenantPrivateIp(): string | undefined {
        return this['ecs_tenant_private_ip'];
    }
    public withBackupFiles(backupFiles: BackupFilesBody): StopMigrationTaskResponse {
        this['backup_files'] = backupFiles;
        return this;
    }
    public set backupFiles(backupFiles: BackupFilesBody  | undefined) {
        this['backup_files'] = backupFiles;
    }
    public get backupFiles(): BackupFilesBody | undefined {
        return this['backup_files'];
    }
    public withNetworkType(networkType: StopMigrationTaskResponseNetworkTypeEnum | string): StopMigrationTaskResponse {
        this['network_type'] = networkType;
        return this;
    }
    public set networkType(networkType: StopMigrationTaskResponseNetworkTypeEnum | string  | undefined) {
        this['network_type'] = networkType;
    }
    public get networkType(): StopMigrationTaskResponseNetworkTypeEnum | string | undefined {
        return this['network_type'];
    }
    public withSourceInstance(sourceInstance: SourceInstanceBody): StopMigrationTaskResponse {
        this['source_instance'] = sourceInstance;
        return this;
    }
    public set sourceInstance(sourceInstance: SourceInstanceBody  | undefined) {
        this['source_instance'] = sourceInstance;
    }
    public get sourceInstance(): SourceInstanceBody | undefined {
        return this['source_instance'];
    }
    public withTargetInstance(targetInstance: TargetInstanceBody): StopMigrationTaskResponse {
        this['target_instance'] = targetInstance;
        return this;
    }
    public set targetInstance(targetInstance: TargetInstanceBody  | undefined) {
        this['target_instance'] = targetInstance;
    }
    public get targetInstance(): TargetInstanceBody | undefined {
        return this['target_instance'];
    }
    public withCreatedAt(createdAt: string): StopMigrationTaskResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): StopMigrationTaskResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StopMigrationTaskResponseStatusEnum {
    SUCCESS = 'SUCCESS',
    FAILED = 'FAILED',
    MIGRATING = 'MIGRATING',
    TERMINATED = 'TERMINATED'
}
/**
    * @export
    * @enum {string}
    */
export enum StopMigrationTaskResponseMigrationTypeEnum {
    BACKUPFILE_IMPORT = 'backupfile_import',
    ONLINE_MIGRATION = 'online_migration'
}
/**
    * @export
    * @enum {string}
    */
export enum StopMigrationTaskResponseMigrationMethodEnum {
    FULL_AMOUNT_MIGRATION = 'full_amount_migration',
    INCREMENTAL_MIGRATION = 'incremental_migration'
}
/**
    * @export
    * @enum {string}
    */
export enum StopMigrationTaskResponseNetworkTypeEnum {
    VPC = 'vpc',
    VPN = 'vpn'
}
