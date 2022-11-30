import { MigrationTaskList } from './MigrationTaskList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMigrationTaskResponse extends SdkResponse {
    public count?: number;
    private 'migration_tasks'?: Array<MigrationTaskList> | undefined;
    private 'target_instance_address'?: string | undefined;
    private 'migration_method'?: ListMigrationTaskResponseMigrationMethodEnum | undefined;
    private 'task_name'?: string | undefined;
    private 'target_instance_id'?: string | undefined;
    private 'source_instance_name'?: string | undefined;
    private 'target_instance_name'?: string | undefined;
    private 'migrate_type'?: ListMigrationTaskResponseMigrateTypeEnum | undefined;
    private 'created_at'?: string | undefined;
    private 'source_instance_id'?: string | undefined;
    private 'task_id'?: string | undefined;
    private 'data_source'?: string | undefined;
    public status?: ListMigrationTaskResponseStatusEnum;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListMigrationTaskResponse {
        this['count'] = count;
        return this;
    }
    public withMigrationTasks(migrationTasks: Array<MigrationTaskList>): ListMigrationTaskResponse {
        this['migration_tasks'] = migrationTasks;
        return this;
    }
    public set migrationTasks(migrationTasks: Array<MigrationTaskList> | undefined) {
        this['migration_tasks'] = migrationTasks;
    }
    public get migrationTasks() {
        return this['migration_tasks'];
    }
    public withTargetInstanceAddress(targetInstanceAddress: string): ListMigrationTaskResponse {
        this['target_instance_address'] = targetInstanceAddress;
        return this;
    }
    public set targetInstanceAddress(targetInstanceAddress: string | undefined) {
        this['target_instance_address'] = targetInstanceAddress;
    }
    public get targetInstanceAddress() {
        return this['target_instance_address'];
    }
    public withMigrationMethod(migrationMethod: ListMigrationTaskResponseMigrationMethodEnum): ListMigrationTaskResponse {
        this['migration_method'] = migrationMethod;
        return this;
    }
    public set migrationMethod(migrationMethod: ListMigrationTaskResponseMigrationMethodEnum | undefined) {
        this['migration_method'] = migrationMethod;
    }
    public get migrationMethod() {
        return this['migration_method'];
    }
    public withTaskName(taskName: string): ListMigrationTaskResponse {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName() {
        return this['task_name'];
    }
    public withTargetInstanceId(targetInstanceId: string): ListMigrationTaskResponse {
        this['target_instance_id'] = targetInstanceId;
        return this;
    }
    public set targetInstanceId(targetInstanceId: string | undefined) {
        this['target_instance_id'] = targetInstanceId;
    }
    public get targetInstanceId() {
        return this['target_instance_id'];
    }
    public withSourceInstanceName(sourceInstanceName: string): ListMigrationTaskResponse {
        this['source_instance_name'] = sourceInstanceName;
        return this;
    }
    public set sourceInstanceName(sourceInstanceName: string | undefined) {
        this['source_instance_name'] = sourceInstanceName;
    }
    public get sourceInstanceName() {
        return this['source_instance_name'];
    }
    public withTargetInstanceName(targetInstanceName: string): ListMigrationTaskResponse {
        this['target_instance_name'] = targetInstanceName;
        return this;
    }
    public set targetInstanceName(targetInstanceName: string | undefined) {
        this['target_instance_name'] = targetInstanceName;
    }
    public get targetInstanceName() {
        return this['target_instance_name'];
    }
    public withMigrateType(migrateType: ListMigrationTaskResponseMigrateTypeEnum): ListMigrationTaskResponse {
        this['migrate_type'] = migrateType;
        return this;
    }
    public set migrateType(migrateType: ListMigrationTaskResponseMigrateTypeEnum | undefined) {
        this['migrate_type'] = migrateType;
    }
    public get migrateType() {
        return this['migrate_type'];
    }
    public withCreatedAt(createdAt: string): ListMigrationTaskResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withSourceInstanceId(sourceInstanceId: string): ListMigrationTaskResponse {
        this['source_instance_id'] = sourceInstanceId;
        return this;
    }
    public set sourceInstanceId(sourceInstanceId: string | undefined) {
        this['source_instance_id'] = sourceInstanceId;
    }
    public get sourceInstanceId() {
        return this['source_instance_id'];
    }
    public withTaskId(taskId: string): ListMigrationTaskResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
        return this['task_id'];
    }
    public withDataSource(dataSource: string): ListMigrationTaskResponse {
        this['data_source'] = dataSource;
        return this;
    }
    public set dataSource(dataSource: string | undefined) {
        this['data_source'] = dataSource;
    }
    public get dataSource() {
        return this['data_source'];
    }
    public withStatus(status: ListMigrationTaskResponseStatusEnum): ListMigrationTaskResponse {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListMigrationTaskResponseMigrationMethodEnum {
    FULL_AMOUNT_MIGRATION = 'full_amount_migration',
    INCREMENTAL_MIGRATION = 'incremental_migration'
}
/**
    * @export
    * @enum {string}
    */
export enum ListMigrationTaskResponseMigrateTypeEnum {
    BACKUPFILE_IMPORT = 'backupfile_import',
    ONLINE_MIGRATION = 'online_migration'
}
/**
    * @export
    * @enum {string}
    */
export enum ListMigrationTaskResponseStatusEnum {
    SUCCESS = 'SUCCESS',
    FAILED = 'FAILED',
    MIGRATING = 'MIGRATING',
    TERMINATED = 'TERMINATED'
}
