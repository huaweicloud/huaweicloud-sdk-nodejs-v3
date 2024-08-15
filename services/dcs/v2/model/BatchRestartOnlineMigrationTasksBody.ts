import { BatchStopMigrationTasksBody } from './BatchStopMigrationTasksBody';


export class BatchRestartOnlineMigrationTasksBody {
    private 'migration_tasks'?: Array<string>;
    public constructor(migrationTasks?: Array<string>) { 
        this['migration_tasks'] = migrationTasks;
    }
    public withMigrationTasks(migrationTasks: Array<string>): BatchRestartOnlineMigrationTasksBody {
        this['migration_tasks'] = migrationTasks;
        return this;
    }
    public set migrationTasks(migrationTasks: Array<string>  | undefined) {
        this['migration_tasks'] = migrationTasks;
    }
    public get migrationTasks(): Array<string> | undefined {
        return this['migration_tasks'];
    }
}