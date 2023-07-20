import { MigrationObjectOverviewInfo } from './MigrationObjectOverviewInfo';


export class QueryMigrationObjectProgressInfo {
    private 'migration_object_overview'?: Array<MigrationObjectOverviewInfo>;
    private 'create_time'?: string;
    private 'full_start_time'?: string;
    private 'full_complete_time'?: string;
    private 'incr_start_time'?: string;
    private 'end_time'?: string;
    public constructor() { 
    }
    public withMigrationObjectOverview(migrationObjectOverview: Array<MigrationObjectOverviewInfo>): QueryMigrationObjectProgressInfo {
        this['migration_object_overview'] = migrationObjectOverview;
        return this;
    }
    public set migrationObjectOverview(migrationObjectOverview: Array<MigrationObjectOverviewInfo>  | undefined) {
        this['migration_object_overview'] = migrationObjectOverview;
    }
    public get migrationObjectOverview(): Array<MigrationObjectOverviewInfo> | undefined {
        return this['migration_object_overview'];
    }
    public withCreateTime(createTime: string): QueryMigrationObjectProgressInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withFullStartTime(fullStartTime: string): QueryMigrationObjectProgressInfo {
        this['full_start_time'] = fullStartTime;
        return this;
    }
    public set fullStartTime(fullStartTime: string  | undefined) {
        this['full_start_time'] = fullStartTime;
    }
    public get fullStartTime(): string | undefined {
        return this['full_start_time'];
    }
    public withFullCompleteTime(fullCompleteTime: string): QueryMigrationObjectProgressInfo {
        this['full_complete_time'] = fullCompleteTime;
        return this;
    }
    public set fullCompleteTime(fullCompleteTime: string  | undefined) {
        this['full_complete_time'] = fullCompleteTime;
    }
    public get fullCompleteTime(): string | undefined {
        return this['full_complete_time'];
    }
    public withIncrStartTime(incrStartTime: string): QueryMigrationObjectProgressInfo {
        this['incr_start_time'] = incrStartTime;
        return this;
    }
    public set incrStartTime(incrStartTime: string  | undefined) {
        this['incr_start_time'] = incrStartTime;
    }
    public get incrStartTime(): string | undefined {
        return this['incr_start_time'];
    }
    public withEndTime(endTime: string): QueryMigrationObjectProgressInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}