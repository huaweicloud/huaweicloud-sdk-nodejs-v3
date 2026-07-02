import { OperateUsedJobScheduleCreate } from './OperateUsedJobScheduleCreate';
import { PublicationTableInfoRequest } from './PublicationTableInfoRequest';
import { SubscriptionOption } from './SubscriptionOption';


export class CreatePublicationsRequestBody {
    private 'publication_name'?: string;
    private 'publication_database'?: string;
    private 'is_create_snapshot_immediately'?: boolean;
    private 'subscription_options'?: SubscriptionOption;
    private 'job_schedule'?: OperateUsedJobScheduleCreate;
    private 'is_select_all_table'?: boolean;
    private 'extend_tables'?: Array<string>;
    public tables?: Array<PublicationTableInfoRequest>;
    public constructor(publicationName?: string, publicationDatabase?: string, isCreateSnapshotImmediately?: boolean, jobSchedule?: OperateUsedJobScheduleCreate, tables?: Array<PublicationTableInfoRequest>) { 
        this['publication_name'] = publicationName;
        this['publication_database'] = publicationDatabase;
        this['is_create_snapshot_immediately'] = isCreateSnapshotImmediately;
        this['job_schedule'] = jobSchedule;
        this['tables'] = tables;
    }
    public withPublicationName(publicationName: string): CreatePublicationsRequestBody {
        this['publication_name'] = publicationName;
        return this;
    }
    public set publicationName(publicationName: string  | undefined) {
        this['publication_name'] = publicationName;
    }
    public get publicationName(): string | undefined {
        return this['publication_name'];
    }
    public withPublicationDatabase(publicationDatabase: string): CreatePublicationsRequestBody {
        this['publication_database'] = publicationDatabase;
        return this;
    }
    public set publicationDatabase(publicationDatabase: string  | undefined) {
        this['publication_database'] = publicationDatabase;
    }
    public get publicationDatabase(): string | undefined {
        return this['publication_database'];
    }
    public withIsCreateSnapshotImmediately(isCreateSnapshotImmediately: boolean): CreatePublicationsRequestBody {
        this['is_create_snapshot_immediately'] = isCreateSnapshotImmediately;
        return this;
    }
    public set isCreateSnapshotImmediately(isCreateSnapshotImmediately: boolean  | undefined) {
        this['is_create_snapshot_immediately'] = isCreateSnapshotImmediately;
    }
    public get isCreateSnapshotImmediately(): boolean | undefined {
        return this['is_create_snapshot_immediately'];
    }
    public withSubscriptionOptions(subscriptionOptions: SubscriptionOption): CreatePublicationsRequestBody {
        this['subscription_options'] = subscriptionOptions;
        return this;
    }
    public set subscriptionOptions(subscriptionOptions: SubscriptionOption  | undefined) {
        this['subscription_options'] = subscriptionOptions;
    }
    public get subscriptionOptions(): SubscriptionOption | undefined {
        return this['subscription_options'];
    }
    public withJobSchedule(jobSchedule: OperateUsedJobScheduleCreate): CreatePublicationsRequestBody {
        this['job_schedule'] = jobSchedule;
        return this;
    }
    public set jobSchedule(jobSchedule: OperateUsedJobScheduleCreate  | undefined) {
        this['job_schedule'] = jobSchedule;
    }
    public get jobSchedule(): OperateUsedJobScheduleCreate | undefined {
        return this['job_schedule'];
    }
    public withIsSelectAllTable(isSelectAllTable: boolean): CreatePublicationsRequestBody {
        this['is_select_all_table'] = isSelectAllTable;
        return this;
    }
    public set isSelectAllTable(isSelectAllTable: boolean  | undefined) {
        this['is_select_all_table'] = isSelectAllTable;
    }
    public get isSelectAllTable(): boolean | undefined {
        return this['is_select_all_table'];
    }
    public withExtendTables(extendTables: Array<string>): CreatePublicationsRequestBody {
        this['extend_tables'] = extendTables;
        return this;
    }
    public set extendTables(extendTables: Array<string>  | undefined) {
        this['extend_tables'] = extendTables;
    }
    public get extendTables(): Array<string> | undefined {
        return this['extend_tables'];
    }
    public withTables(tables: Array<PublicationTableInfoRequest>): CreatePublicationsRequestBody {
        this['tables'] = tables;
        return this;
    }
}