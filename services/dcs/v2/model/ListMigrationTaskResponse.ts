import { MigrationTaskList } from './MigrationTaskList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMigrationTaskResponse extends SdkResponse {
    public count?: number;
    private 'migration_tasks'?: Array<MigrationTaskList> | undefined;
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
}