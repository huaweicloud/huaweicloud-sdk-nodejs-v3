import { PublicationTableInfoResponse } from './PublicationTableInfoResponse';
import { SubscriptionOptionsResult } from './SubscriptionOptionsResult';
import { UsedJobSchedule } from './UsedJobSchedule';


export class QueryPublicationInfo {
    public id?: string;
    public status?: string;
    private 'publication_name'?: string;
    private 'publication_database'?: string;
    private 'subscription_count'?: number;
    private 'subscription_options'?: SubscriptionOptionsResult;
    private 'job_schedule'?: UsedJobSchedule;
    private 'is_select_all_table'?: boolean;
    private 'extend_tables'?: Array<string>;
    public tables?: Array<PublicationTableInfoResponse>;
    public constructor() { 
    }
    public withId(id: string): QueryPublicationInfo {
        this['id'] = id;
        return this;
    }
    public withStatus(status: string): QueryPublicationInfo {
        this['status'] = status;
        return this;
    }
    public withPublicationName(publicationName: string): QueryPublicationInfo {
        this['publication_name'] = publicationName;
        return this;
    }
    public set publicationName(publicationName: string  | undefined) {
        this['publication_name'] = publicationName;
    }
    public get publicationName(): string | undefined {
        return this['publication_name'];
    }
    public withPublicationDatabase(publicationDatabase: string): QueryPublicationInfo {
        this['publication_database'] = publicationDatabase;
        return this;
    }
    public set publicationDatabase(publicationDatabase: string  | undefined) {
        this['publication_database'] = publicationDatabase;
    }
    public get publicationDatabase(): string | undefined {
        return this['publication_database'];
    }
    public withSubscriptionCount(subscriptionCount: number): QueryPublicationInfo {
        this['subscription_count'] = subscriptionCount;
        return this;
    }
    public set subscriptionCount(subscriptionCount: number  | undefined) {
        this['subscription_count'] = subscriptionCount;
    }
    public get subscriptionCount(): number | undefined {
        return this['subscription_count'];
    }
    public withSubscriptionOptions(subscriptionOptions: SubscriptionOptionsResult): QueryPublicationInfo {
        this['subscription_options'] = subscriptionOptions;
        return this;
    }
    public set subscriptionOptions(subscriptionOptions: SubscriptionOptionsResult  | undefined) {
        this['subscription_options'] = subscriptionOptions;
    }
    public get subscriptionOptions(): SubscriptionOptionsResult | undefined {
        return this['subscription_options'];
    }
    public withJobSchedule(jobSchedule: UsedJobSchedule): QueryPublicationInfo {
        this['job_schedule'] = jobSchedule;
        return this;
    }
    public set jobSchedule(jobSchedule: UsedJobSchedule  | undefined) {
        this['job_schedule'] = jobSchedule;
    }
    public get jobSchedule(): UsedJobSchedule | undefined {
        return this['job_schedule'];
    }
    public withIsSelectAllTable(isSelectAllTable: boolean): QueryPublicationInfo {
        this['is_select_all_table'] = isSelectAllTable;
        return this;
    }
    public set isSelectAllTable(isSelectAllTable: boolean  | undefined) {
        this['is_select_all_table'] = isSelectAllTable;
    }
    public get isSelectAllTable(): boolean | undefined {
        return this['is_select_all_table'];
    }
    public withExtendTables(extendTables: Array<string>): QueryPublicationInfo {
        this['extend_tables'] = extendTables;
        return this;
    }
    public set extendTables(extendTables: Array<string>  | undefined) {
        this['extend_tables'] = extendTables;
    }
    public get extendTables(): Array<string> | undefined {
        return this['extend_tables'];
    }
    public withTables(tables: Array<PublicationTableInfoResponse>): QueryPublicationInfo {
        this['tables'] = tables;
        return this;
    }
}