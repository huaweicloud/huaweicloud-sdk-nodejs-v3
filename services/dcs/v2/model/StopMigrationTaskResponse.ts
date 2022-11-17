import { BackupFilesBody } from './BackupFilesBody';
import { SourceInstanceBody } from './SourceInstanceBody';
import { TargetInstanceBody } from './TargetInstanceBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class StopMigrationTaskResponse extends SdkResponse {
    private 'task_id'?: string | undefined;
    private 'task_name'?: string | undefined;
    public description?: string;
    public status?: StopMigrationTaskResponseStatusEnum;
    private 'migration_type'?: StopMigrationTaskResponseMigrationTypeEnum | undefined;
    private 'migration_method'?: StopMigrationTaskResponseMigrationMethodEnum | undefined;
    private 'ecs_tenant_private_ip'?: string | undefined;
    private 'backup_files'?: BackupFilesBody | undefined;
    private 'network_type'?: StopMigrationTaskResponseNetworkTypeEnum | undefined;
    private 'source_instance'?: SourceInstanceBody | undefined;
    private 'target_instance'?: TargetInstanceBody | undefined;
    private 'created_at'?: string | undefined;
    private 'updated_at'?: string | undefined;
    public constructor() { 
        super();
    }
    public withTaskId(taskId: string): StopMigrationTaskResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
        return this['task_id'];
    }
    public withTaskName(taskName: string): StopMigrationTaskResponse {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName() {
        return this['task_name'];
    }
    public withDescription(description: string): StopMigrationTaskResponse {
        this['description'] = description;
        return this;
    }
    public withStatus(status: StopMigrationTaskResponseStatusEnum): StopMigrationTaskResponse {
        this['status'] = status;
        return this;
    }
    public withMigrationType(migrationType: StopMigrationTaskResponseMigrationTypeEnum): StopMigrationTaskResponse {
        this['migration_type'] = migrationType;
        return this;
    }
    public set migrationType(migrationType: StopMigrationTaskResponseMigrationTypeEnum | undefined) {
        this['migration_type'] = migrationType;
    }
    public get migrationType() {
        return this['migration_type'];
    }
    public withMigrationMethod(migrationMethod: StopMigrationTaskResponseMigrationMethodEnum): StopMigrationTaskResponse {
        this['migration_method'] = migrationMethod;
        return this;
    }
    public set migrationMethod(migrationMethod: StopMigrationTaskResponseMigrationMethodEnum | undefined) {
        this['migration_method'] = migrationMethod;
    }
    public get migrationMethod() {
        return this['migration_method'];
    }
    public withEcsTenantPrivateIp(ecsTenantPrivateIp: string): StopMigrationTaskResponse {
        this['ecs_tenant_private_ip'] = ecsTenantPrivateIp;
        return this;
    }
    public set ecsTenantPrivateIp(ecsTenantPrivateIp: string | undefined) {
        this['ecs_tenant_private_ip'] = ecsTenantPrivateIp;
    }
    public get ecsTenantPrivateIp() {
        return this['ecs_tenant_private_ip'];
    }
    public withBackupFiles(backupFiles: BackupFilesBody): StopMigrationTaskResponse {
        this['backup_files'] = backupFiles;
        return this;
    }
    public set backupFiles(backupFiles: BackupFilesBody | undefined) {
        this['backup_files'] = backupFiles;
    }
    public get backupFiles() {
        return this['backup_files'];
    }
    public withNetworkType(networkType: StopMigrationTaskResponseNetworkTypeEnum): StopMigrationTaskResponse {
        this['network_type'] = networkType;
        return this;
    }
    public set networkType(networkType: StopMigrationTaskResponseNetworkTypeEnum | undefined) {
        this['network_type'] = networkType;
    }
    public get networkType() {
        return this['network_type'];
    }
    public withSourceInstance(sourceInstance: SourceInstanceBody): StopMigrationTaskResponse {
        this['source_instance'] = sourceInstance;
        return this;
    }
    public set sourceInstance(sourceInstance: SourceInstanceBody | undefined) {
        this['source_instance'] = sourceInstance;
    }
    public get sourceInstance() {
        return this['source_instance'];
    }
    public withTargetInstance(targetInstance: TargetInstanceBody): StopMigrationTaskResponse {
        this['target_instance'] = targetInstance;
        return this;
    }
    public set targetInstance(targetInstance: TargetInstanceBody | undefined) {
        this['target_instance'] = targetInstance;
    }
    public get targetInstance() {
        return this['target_instance'];
    }
    public withCreatedAt(createdAt: string): StopMigrationTaskResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): StopMigrationTaskResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
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
