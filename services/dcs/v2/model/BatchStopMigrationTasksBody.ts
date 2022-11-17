

export class BatchStopMigrationTasksBody {
    private 'migration_tasks': Array<string> | undefined;
    public constructor(migrationTasks?: any) { 
        this['migration_tasks'] = migrationTasks;
    }
    public withMigrationTasks(migrationTasks: Array<string>): BatchStopMigrationTasksBody {
        this['migration_tasks'] = migrationTasks;
        return this;
    }
    public set migrationTasks(migrationTasks: Array<string> | undefined) {
        this['migration_tasks'] = migrationTasks;
    }
    public get migrationTasks() {
        return this['migration_tasks'];
    }
}