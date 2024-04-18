import { BackupFilesBody } from './BackupFilesBody';
import { SourceInstanceBody } from './SourceInstanceBody';
import { TargetInstanceBody } from './TargetInstanceBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMigrationTaskResponse extends SdkResponse {
    private 'task_id'?: string;
    private 'task_name'?: string;
    public description?: string;
    public status?: ShowMigrationTaskResponseStatusEnum | string;
    private 'migration_type'?: ShowMigrationTaskResponseMigrationTypeEnum | string;
    private 'migration_method'?: ShowMigrationTaskResponseMigrationMethodEnum | string;
    private 'ecs_tenant_private_ip'?: string;
    private 'backup_files'?: BackupFilesBody;
    private 'network_type'?: ShowMigrationTaskResponseNetworkTypeEnum | string;
    private 'source_instance'?: SourceInstanceBody;
    private 'target_instance'?: TargetInstanceBody;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'released_at'?: string;
    public version?: string;
    private 'resume_mode'?: string;
    private 'supported_features'?: Array<string>;
    private 'tenant_vpc_id'?: string;
    private 'tenant_subnet_id'?: string;
    private 'tenant_security_group_id'?: string;
    private 'bandwidth_limit_mb'?: string;
    private 'task_status'?: string;
    public constructor() { 
        super();
    }
    public withTaskId(taskId: string): ShowMigrationTaskResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withTaskName(taskName: string): ShowMigrationTaskResponse {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withDescription(description: string): ShowMigrationTaskResponse {
        this['description'] = description;
        return this;
    }
    public withStatus(status: ShowMigrationTaskResponseStatusEnum | string): ShowMigrationTaskResponse {
        this['status'] = status;
        return this;
    }
    public withMigrationType(migrationType: ShowMigrationTaskResponseMigrationTypeEnum | string): ShowMigrationTaskResponse {
        this['migration_type'] = migrationType;
        return this;
    }
    public set migrationType(migrationType: ShowMigrationTaskResponseMigrationTypeEnum | string  | undefined) {
        this['migration_type'] = migrationType;
    }
    public get migrationType(): ShowMigrationTaskResponseMigrationTypeEnum | string | undefined {
        return this['migration_type'];
    }
    public withMigrationMethod(migrationMethod: ShowMigrationTaskResponseMigrationMethodEnum | string): ShowMigrationTaskResponse {
        this['migration_method'] = migrationMethod;
        return this;
    }
    public set migrationMethod(migrationMethod: ShowMigrationTaskResponseMigrationMethodEnum | string  | undefined) {
        this['migration_method'] = migrationMethod;
    }
    public get migrationMethod(): ShowMigrationTaskResponseMigrationMethodEnum | string | undefined {
        return this['migration_method'];
    }
    public withEcsTenantPrivateIp(ecsTenantPrivateIp: string): ShowMigrationTaskResponse {
        this['ecs_tenant_private_ip'] = ecsTenantPrivateIp;
        return this;
    }
    public set ecsTenantPrivateIp(ecsTenantPrivateIp: string  | undefined) {
        this['ecs_tenant_private_ip'] = ecsTenantPrivateIp;
    }
    public get ecsTenantPrivateIp(): string | undefined {
        return this['ecs_tenant_private_ip'];
    }
    public withBackupFiles(backupFiles: BackupFilesBody): ShowMigrationTaskResponse {
        this['backup_files'] = backupFiles;
        return this;
    }
    public set backupFiles(backupFiles: BackupFilesBody  | undefined) {
        this['backup_files'] = backupFiles;
    }
    public get backupFiles(): BackupFilesBody | undefined {
        return this['backup_files'];
    }
    public withNetworkType(networkType: ShowMigrationTaskResponseNetworkTypeEnum | string): ShowMigrationTaskResponse {
        this['network_type'] = networkType;
        return this;
    }
    public set networkType(networkType: ShowMigrationTaskResponseNetworkTypeEnum | string  | undefined) {
        this['network_type'] = networkType;
    }
    public get networkType(): ShowMigrationTaskResponseNetworkTypeEnum | string | undefined {
        return this['network_type'];
    }
    public withSourceInstance(sourceInstance: SourceInstanceBody): ShowMigrationTaskResponse {
        this['source_instance'] = sourceInstance;
        return this;
    }
    public set sourceInstance(sourceInstance: SourceInstanceBody  | undefined) {
        this['source_instance'] = sourceInstance;
    }
    public get sourceInstance(): SourceInstanceBody | undefined {
        return this['source_instance'];
    }
    public withTargetInstance(targetInstance: TargetInstanceBody): ShowMigrationTaskResponse {
        this['target_instance'] = targetInstance;
        return this;
    }
    public set targetInstance(targetInstance: TargetInstanceBody  | undefined) {
        this['target_instance'] = targetInstance;
    }
    public get targetInstance(): TargetInstanceBody | undefined {
        return this['target_instance'];
    }
    public withCreatedAt(createdAt: string): ShowMigrationTaskResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ShowMigrationTaskResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withReleasedAt(releasedAt: string): ShowMigrationTaskResponse {
        this['released_at'] = releasedAt;
        return this;
    }
    public set releasedAt(releasedAt: string  | undefined) {
        this['released_at'] = releasedAt;
    }
    public get releasedAt(): string | undefined {
        return this['released_at'];
    }
    public withVersion(version: string): ShowMigrationTaskResponse {
        this['version'] = version;
        return this;
    }
    public withResumeMode(resumeMode: string): ShowMigrationTaskResponse {
        this['resume_mode'] = resumeMode;
        return this;
    }
    public set resumeMode(resumeMode: string  | undefined) {
        this['resume_mode'] = resumeMode;
    }
    public get resumeMode(): string | undefined {
        return this['resume_mode'];
    }
    public withSupportedFeatures(supportedFeatures: Array<string>): ShowMigrationTaskResponse {
        this['supported_features'] = supportedFeatures;
        return this;
    }
    public set supportedFeatures(supportedFeatures: Array<string>  | undefined) {
        this['supported_features'] = supportedFeatures;
    }
    public get supportedFeatures(): Array<string> | undefined {
        return this['supported_features'];
    }
    public withTenantVpcId(tenantVpcId: string): ShowMigrationTaskResponse {
        this['tenant_vpc_id'] = tenantVpcId;
        return this;
    }
    public set tenantVpcId(tenantVpcId: string  | undefined) {
        this['tenant_vpc_id'] = tenantVpcId;
    }
    public get tenantVpcId(): string | undefined {
        return this['tenant_vpc_id'];
    }
    public withTenantSubnetId(tenantSubnetId: string): ShowMigrationTaskResponse {
        this['tenant_subnet_id'] = tenantSubnetId;
        return this;
    }
    public set tenantSubnetId(tenantSubnetId: string  | undefined) {
        this['tenant_subnet_id'] = tenantSubnetId;
    }
    public get tenantSubnetId(): string | undefined {
        return this['tenant_subnet_id'];
    }
    public withTenantSecurityGroupId(tenantSecurityGroupId: string): ShowMigrationTaskResponse {
        this['tenant_security_group_id'] = tenantSecurityGroupId;
        return this;
    }
    public set tenantSecurityGroupId(tenantSecurityGroupId: string  | undefined) {
        this['tenant_security_group_id'] = tenantSecurityGroupId;
    }
    public get tenantSecurityGroupId(): string | undefined {
        return this['tenant_security_group_id'];
    }
    public withBandwidthLimitMb(bandwidthLimitMb: string): ShowMigrationTaskResponse {
        this['bandwidth_limit_mb'] = bandwidthLimitMb;
        return this;
    }
    public set bandwidthLimitMb(bandwidthLimitMb: string  | undefined) {
        this['bandwidth_limit_mb'] = bandwidthLimitMb;
    }
    public get bandwidthLimitMb(): string | undefined {
        return this['bandwidth_limit_mb'];
    }
    public withTaskStatus(taskStatus: string): ShowMigrationTaskResponse {
        this['task_status'] = taskStatus;
        return this;
    }
    public set taskStatus(taskStatus: string  | undefined) {
        this['task_status'] = taskStatus;
    }
    public get taskStatus(): string | undefined {
        return this['task_status'];
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
