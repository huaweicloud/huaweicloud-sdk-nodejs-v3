import { BackupFilesBody } from './BackupFilesBody';
import { SourceInstanceBody } from './SourceInstanceBody';
import { TargetInstanceBody } from './TargetInstanceBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMigrationTaskResponse extends SdkResponse {
    private 'task_id'?: string | undefined;
    private 'task_name'?: string | undefined;
    public description?: string;
    public status?: ShowMigrationTaskResponseStatusEnum;
    private 'migration_type'?: ShowMigrationTaskResponseMigrationTypeEnum | undefined;
    private 'migration_method'?: ShowMigrationTaskResponseMigrationMethodEnum | undefined;
    private 'ecs_tenant_private_ip'?: string | undefined;
    private 'backup_files'?: BackupFilesBody | undefined;
    private 'network_type'?: ShowMigrationTaskResponseNetworkTypeEnum | undefined;
    private 'source_instance'?: SourceInstanceBody | undefined;
    private 'target_instance'?: TargetInstanceBody | undefined;
    private 'created_at'?: string | undefined;
    private 'updated_at'?: string | undefined;
    public constructor() { 
        super();
    }
    public withTaskId(taskId: string): ShowMigrationTaskResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
        return this['task_id'];
    }
    public withTaskName(taskName: string): ShowMigrationTaskResponse {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName() {
        return this['task_name'];
    }
    public withDescription(description: string): ShowMigrationTaskResponse {
        this['description'] = description;
        return this;
    }
    public withStatus(status: ShowMigrationTaskResponseStatusEnum): ShowMigrationTaskResponse {
        this['status'] = status;
        return this;
    }
    public withMigrationType(migrationType: ShowMigrationTaskResponseMigrationTypeEnum): ShowMigrationTaskResponse {
        this['migration_type'] = migrationType;
        return this;
    }
    public set migrationType(migrationType: ShowMigrationTaskResponseMigrationTypeEnum | undefined) {
        this['migration_type'] = migrationType;
    }
    public get migrationType() {
        return this['migration_type'];
    }
    public withMigrationMethod(migrationMethod: ShowMigrationTaskResponseMigrationMethodEnum): ShowMigrationTaskResponse {
        this['migration_method'] = migrationMethod;
        return this;
    }
    public set migrationMethod(migrationMethod: ShowMigrationTaskResponseMigrationMethodEnum | undefined) {
        this['migration_method'] = migrationMethod;
    }
    public get migrationMethod() {
        return this['migration_method'];
    }
    public withEcsTenantPrivateIp(ecsTenantPrivateIp: string): ShowMigrationTaskResponse {
        this['ecs_tenant_private_ip'] = ecsTenantPrivateIp;
        return this;
    }
    public set ecsTenantPrivateIp(ecsTenantPrivateIp: string | undefined) {
        this['ecs_tenant_private_ip'] = ecsTenantPrivateIp;
    }
    public get ecsTenantPrivateIp() {
        return this['ecs_tenant_private_ip'];
    }
    public withBackupFiles(backupFiles: BackupFilesBody): ShowMigrationTaskResponse {
        this['backup_files'] = backupFiles;
        return this;
    }
    public set backupFiles(backupFiles: BackupFilesBody | undefined) {
        this['backup_files'] = backupFiles;
    }
    public get backupFiles() {
        return this['backup_files'];
    }
    public withNetworkType(networkType: ShowMigrationTaskResponseNetworkTypeEnum): ShowMigrationTaskResponse {
        this['network_type'] = networkType;
        return this;
    }
    public set networkType(networkType: ShowMigrationTaskResponseNetworkTypeEnum | undefined) {
        this['network_type'] = networkType;
    }
    public get networkType() {
        return this['network_type'];
    }
    public withSourceInstance(sourceInstance: SourceInstanceBody): ShowMigrationTaskResponse {
        this['source_instance'] = sourceInstance;
        return this;
    }
    public set sourceInstance(sourceInstance: SourceInstanceBody | undefined) {
        this['source_instance'] = sourceInstance;
    }
    public get sourceInstance() {
        return this['source_instance'];
    }
    public withTargetInstance(targetInstance: TargetInstanceBody): ShowMigrationTaskResponse {
        this['target_instance'] = targetInstance;
        return this;
    }
    public set targetInstance(targetInstance: TargetInstanceBody | undefined) {
        this['target_instance'] = targetInstance;
    }
    public get targetInstance() {
        return this['target_instance'];
    }
    public withCreatedAt(createdAt: string): ShowMigrationTaskResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ShowMigrationTaskResponse {
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
export enum ShowMigrationTaskResponseStatusEnum {
    SUCCESS = 'SUCCESS',
    FAILED = 'FAILED',
    MIGRATING = 'MIGRATING',
    TERMINATED = 'TERMINATED'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowMigrationTaskResponseMigrationTypeEnum {
    BACKUPFILE_IMPORT = 'backupfile_import',
    ONLINE_MIGRATION = 'online_migration'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowMigrationTaskResponseMigrationMethodEnum {
    FULL_AMOUNT_MIGRATION = 'full_amount_migration',
    INCREMENTAL_MIGRATION = 'incremental_migration'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowMigrationTaskResponseNetworkTypeEnum {
    VPC = 'vpc',
    VPN = 'vpn'
}
