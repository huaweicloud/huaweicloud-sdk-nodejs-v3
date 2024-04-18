

export class MigrationTaskList {
    private 'task_id'?: string;
    private 'task_name'?: string;
    public status?: MigrationTaskListStatusEnum | string;
    private 'migration_type'?: MigrationTaskListMigrationTypeEnum | string;
    private 'migration_method'?: MigrationTaskListMigrationMethodEnum | string;
    private 'ecs_tenant_private_ip'?: string;
    private 'data_source'?: string;
    private 'source_instance_name'?: string;
    private 'source_instance_id'?: string;
    private 'target_instance_addrs'?: string;
    private 'target_instance_name'?: string;
    private 'target_instance_id'?: string;
    private 'created_at'?: string;
    public description?: string;
    private 'source_instance_status'?: string;
    private 'target_instance_status'?: string;
    private 'source_instance_subnet_id'?: string;
    private 'target_instance_subnet_id'?: string;
    private 'source_instance_spec_code'?: string;
    private 'target_instance_spec_code'?: string;
    private 'error_message'?: string;
    private 'released_at'?: string;
    public version?: string;
    private 'resume_mode'?: string;
    private 'supported_features'?: Array<string>;
    public constructor() { 
    }
    public withTaskId(taskId: string): MigrationTaskList {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withTaskName(taskName: string): MigrationTaskList {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withStatus(status: MigrationTaskListStatusEnum | string): MigrationTaskList {
        this['status'] = status;
        return this;
    }
    public withMigrationType(migrationType: MigrationTaskListMigrationTypeEnum | string): MigrationTaskList {
        this['migration_type'] = migrationType;
        return this;
    }
    public set migrationType(migrationType: MigrationTaskListMigrationTypeEnum | string  | undefined) {
        this['migration_type'] = migrationType;
    }
    public get migrationType(): MigrationTaskListMigrationTypeEnum | string | undefined {
        return this['migration_type'];
    }
    public withMigrationMethod(migrationMethod: MigrationTaskListMigrationMethodEnum | string): MigrationTaskList {
        this['migration_method'] = migrationMethod;
        return this;
    }
    public set migrationMethod(migrationMethod: MigrationTaskListMigrationMethodEnum | string  | undefined) {
        this['migration_method'] = migrationMethod;
    }
    public get migrationMethod(): MigrationTaskListMigrationMethodEnum | string | undefined {
        return this['migration_method'];
    }
    public withEcsTenantPrivateIp(ecsTenantPrivateIp: string): MigrationTaskList {
        this['ecs_tenant_private_ip'] = ecsTenantPrivateIp;
        return this;
    }
    public set ecsTenantPrivateIp(ecsTenantPrivateIp: string  | undefined) {
        this['ecs_tenant_private_ip'] = ecsTenantPrivateIp;
    }
    public get ecsTenantPrivateIp(): string | undefined {
        return this['ecs_tenant_private_ip'];
    }
    public withDataSource(dataSource: string): MigrationTaskList {
        this['data_source'] = dataSource;
        return this;
    }
    public set dataSource(dataSource: string  | undefined) {
        this['data_source'] = dataSource;
    }
    public get dataSource(): string | undefined {
        return this['data_source'];
    }
    public withSourceInstanceName(sourceInstanceName: string): MigrationTaskList {
        this['source_instance_name'] = sourceInstanceName;
        return this;
    }
    public set sourceInstanceName(sourceInstanceName: string  | undefined) {
        this['source_instance_name'] = sourceInstanceName;
    }
    public get sourceInstanceName(): string | undefined {
        return this['source_instance_name'];
    }
    public withSourceInstanceId(sourceInstanceId: string): MigrationTaskList {
        this['source_instance_id'] = sourceInstanceId;
        return this;
    }
    public set sourceInstanceId(sourceInstanceId: string  | undefined) {
        this['source_instance_id'] = sourceInstanceId;
    }
    public get sourceInstanceId(): string | undefined {
        return this['source_instance_id'];
    }
    public withTargetInstanceAddrs(targetInstanceAddrs: string): MigrationTaskList {
        this['target_instance_addrs'] = targetInstanceAddrs;
        return this;
    }
    public set targetInstanceAddrs(targetInstanceAddrs: string  | undefined) {
        this['target_instance_addrs'] = targetInstanceAddrs;
    }
    public get targetInstanceAddrs(): string | undefined {
        return this['target_instance_addrs'];
    }
    public withTargetInstanceName(targetInstanceName: string): MigrationTaskList {
        this['target_instance_name'] = targetInstanceName;
        return this;
    }
    public set targetInstanceName(targetInstanceName: string  | undefined) {
        this['target_instance_name'] = targetInstanceName;
    }
    public get targetInstanceName(): string | undefined {
        return this['target_instance_name'];
    }
    public withTargetInstanceId(targetInstanceId: string): MigrationTaskList {
        this['target_instance_id'] = targetInstanceId;
        return this;
    }
    public set targetInstanceId(targetInstanceId: string  | undefined) {
        this['target_instance_id'] = targetInstanceId;
    }
    public get targetInstanceId(): string | undefined {
        return this['target_instance_id'];
    }
    public withCreatedAt(createdAt: string): MigrationTaskList {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withDescription(description: string): MigrationTaskList {
        this['description'] = description;
        return this;
    }
    public withSourceInstanceStatus(sourceInstanceStatus: string): MigrationTaskList {
        this['source_instance_status'] = sourceInstanceStatus;
        return this;
    }
    public set sourceInstanceStatus(sourceInstanceStatus: string  | undefined) {
        this['source_instance_status'] = sourceInstanceStatus;
    }
    public get sourceInstanceStatus(): string | undefined {
        return this['source_instance_status'];
    }
    public withTargetInstanceStatus(targetInstanceStatus: string): MigrationTaskList {
        this['target_instance_status'] = targetInstanceStatus;
        return this;
    }
    public set targetInstanceStatus(targetInstanceStatus: string  | undefined) {
        this['target_instance_status'] = targetInstanceStatus;
    }
    public get targetInstanceStatus(): string | undefined {
        return this['target_instance_status'];
    }
    public withSourceInstanceSubnetId(sourceInstanceSubnetId: string): MigrationTaskList {
        this['source_instance_subnet_id'] = sourceInstanceSubnetId;
        return this;
    }
    public set sourceInstanceSubnetId(sourceInstanceSubnetId: string  | undefined) {
        this['source_instance_subnet_id'] = sourceInstanceSubnetId;
    }
    public get sourceInstanceSubnetId(): string | undefined {
        return this['source_instance_subnet_id'];
    }
    public withTargetInstanceSubnetId(targetInstanceSubnetId: string): MigrationTaskList {
        this['target_instance_subnet_id'] = targetInstanceSubnetId;
        return this;
    }
    public set targetInstanceSubnetId(targetInstanceSubnetId: string  | undefined) {
        this['target_instance_subnet_id'] = targetInstanceSubnetId;
    }
    public get targetInstanceSubnetId(): string | undefined {
        return this['target_instance_subnet_id'];
    }
    public withSourceInstanceSpecCode(sourceInstanceSpecCode: string): MigrationTaskList {
        this['source_instance_spec_code'] = sourceInstanceSpecCode;
        return this;
    }
    public set sourceInstanceSpecCode(sourceInstanceSpecCode: string  | undefined) {
        this['source_instance_spec_code'] = sourceInstanceSpecCode;
    }
    public get sourceInstanceSpecCode(): string | undefined {
        return this['source_instance_spec_code'];
    }
    public withTargetInstanceSpecCode(targetInstanceSpecCode: string): MigrationTaskList {
        this['target_instance_spec_code'] = targetInstanceSpecCode;
        return this;
    }
    public set targetInstanceSpecCode(targetInstanceSpecCode: string  | undefined) {
        this['target_instance_spec_code'] = targetInstanceSpecCode;
    }
    public get targetInstanceSpecCode(): string | undefined {
        return this['target_instance_spec_code'];
    }
    public withErrorMessage(errorMessage: string): MigrationTaskList {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
    public withReleasedAt(releasedAt: string): MigrationTaskList {
        this['released_at'] = releasedAt;
        return this;
    }
    public set releasedAt(releasedAt: string  | undefined) {
        this['released_at'] = releasedAt;
    }
    public get releasedAt(): string | undefined {
        return this['released_at'];
    }
    public withVersion(version: string): MigrationTaskList {
        this['version'] = version;
        return this;
    }
    public withResumeMode(resumeMode: string): MigrationTaskList {
        this['resume_mode'] = resumeMode;
        return this;
    }
    public set resumeMode(resumeMode: string  | undefined) {
        this['resume_mode'] = resumeMode;
    }
    public get resumeMode(): string | undefined {
        return this['resume_mode'];
    }
    public withSupportedFeatures(supportedFeatures: Array<string>): MigrationTaskList {
        this['supported_features'] = supportedFeatures;
        return this;
    }
    public set supportedFeatures(supportedFeatures: Array<string>  | undefined) {
        this['supported_features'] = supportedFeatures;
    }
    public get supportedFeatures(): Array<string> | undefined {
        return this['supported_features'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MigrationTaskListStatusEnum {
    SUCCESS = 'SUCCESS',
    FAILED = 'FAILED',
    MIGRATING = 'MIGRATING',
    TERMINATED = 'TERMINATED'
}
/**
    * @export
    * @enum {string}
    */
export enum MigrationTaskListMigrationTypeEnum {
    BACKUPFILE_IMPORT = 'backupfile_import',
    ONLINE_MIGRATION = 'online_migration'
}
/**
    * @export
    * @enum {string}
    */
export enum MigrationTaskListMigrationMethodEnum {
    FULL_AMOUNT_MIGRATION = 'full_amount_migration',
    INCREMENTAL_MIGRATION = 'incremental_migration'
}
