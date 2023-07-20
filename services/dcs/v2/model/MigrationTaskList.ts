

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
