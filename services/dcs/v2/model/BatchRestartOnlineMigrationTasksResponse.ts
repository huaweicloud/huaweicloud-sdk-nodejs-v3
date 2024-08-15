import { BatchRestartMigrationTaskResult } from './BatchRestartMigrationTaskResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchRestartOnlineMigrationTasksResponse extends SdkResponse {
    private 'migration_tasks'?: Array<BatchRestartMigrationTaskResult>;
    public constructor() { 
        super();
    }
    public withMigrationTasks(migrationTasks: Array<BatchRestartMigrationTaskResult>): BatchRestartOnlineMigrationTasksResponse {
        this['migration_tasks'] = migrationTasks;
        return this;
    }
    public set migrationTasks(migrationTasks: Array<BatchRestartMigrationTaskResult>  | undefined) {
        this['migration_tasks'] = migrationTasks;
    }
    public get migrationTasks(): Array<BatchRestartMigrationTaskResult> | undefined {
        return this['migration_tasks'];
    }
}