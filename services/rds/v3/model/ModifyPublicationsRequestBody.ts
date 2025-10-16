import { OperateUsedJobSchedule } from './OperateUsedJobSchedule';
import { PublicationTableInfoRequest } from './PublicationTableInfoRequest';
import { SubscriptionOption } from './SubscriptionOption';


export class ModifyPublicationsRequestBody {
    private 'subscription_options'?: SubscriptionOption;
    private 'job_schedule'?: OperateUsedJobSchedule;
    private 'is_select_all_table'?: boolean;
    private 'extend_tables'?: Array<string>;
    public tables?: Array<PublicationTableInfoRequest>;
    public constructor() { 
    }
    public withSubscriptionOptions(subscriptionOptions: SubscriptionOption): ModifyPublicationsRequestBody {
        this['subscription_options'] = subscriptionOptions;
        return this;
    }
    public set subscriptionOptions(subscriptionOptions: SubscriptionOption  | undefined) {
        this['subscription_options'] = subscriptionOptions;
    }
    public get subscriptionOptions(): SubscriptionOption | undefined {
        return this['subscription_options'];
    }
    public withJobSchedule(jobSchedule: OperateUsedJobSchedule): ModifyPublicationsRequestBody {
        this['job_schedule'] = jobSchedule;
        return this;
    }
    public set jobSchedule(jobSchedule: OperateUsedJobSchedule  | undefined) {
        this['job_schedule'] = jobSchedule;
    }
    public get jobSchedule(): OperateUsedJobSchedule | undefined {
        return this['job_schedule'];
    }
    public withIsSelectAllTable(isSelectAllTable: boolean): ModifyPublicationsRequestBody {
        this['is_select_all_table'] = isSelectAllTable;
        return this;
    }
    public set isSelectAllTable(isSelectAllTable: boolean  | undefined) {
        this['is_select_all_table'] = isSelectAllTable;
    }
    public get isSelectAllTable(): boolean | undefined {
        return this['is_select_all_table'];
    }
    public withExtendTables(extendTables: Array<string>): ModifyPublicationsRequestBody {
        this['extend_tables'] = extendTables;
        return this;
    }
    public set extendTables(extendTables: Array<string>  | undefined) {
        this['extend_tables'] = extendTables;
    }
    public get extendTables(): Array<string> | undefined {
        return this['extend_tables'];
    }
    public withTables(tables: Array<PublicationTableInfoRequest>): ModifyPublicationsRequestBody {
        this['tables'] = tables;
        return this;
    }
}