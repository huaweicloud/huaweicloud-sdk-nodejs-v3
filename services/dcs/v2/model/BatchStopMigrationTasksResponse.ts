import { StopMigrationTaskResult } from './StopMigrationTaskResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchStopMigrationTasksResponse extends SdkResponse {
    private 'migration_tasks'?: Array<StopMigrationTaskResult>;
    public constructor() { 
        super();
    }
    public withMigrationTasks(migrationTasks: Array<StopMigrationTaskResult>): BatchStopMigrationTasksResponse {
        this['migration_tasks'] = migrationTasks;
        return this;
    }
    public set migrationTasks(migrationTasks: Array<StopMigrationTaskResult>  | undefined) {
        this['migration_tasks'] = migrationTasks;
    }
    public get migrationTasks(): Array<StopMigrationTaskResult> | undefined {
        return this['migration_tasks'];
    }
}