import { OperateUsedJobSchedule } from './OperateUsedJobSchedule';


export class ModifySubscriptionsRequestBody {
    private 'subscription_ids'?: Array<string>;
    private 'job_schedule'?: OperateUsedJobSchedule;
    public constructor(subscriptionIds?: Array<string>, jobSchedule?: OperateUsedJobSchedule) { 
        this['subscription_ids'] = subscriptionIds;
        this['job_schedule'] = jobSchedule;
    }
    public withSubscriptionIds(subscriptionIds: Array<string>): ModifySubscriptionsRequestBody {
        this['subscription_ids'] = subscriptionIds;
        return this;
    }
    public set subscriptionIds(subscriptionIds: Array<string>  | undefined) {
        this['subscription_ids'] = subscriptionIds;
    }
    public get subscriptionIds(): Array<string> | undefined {
        return this['subscription_ids'];
    }
    public withJobSchedule(jobSchedule: OperateUsedJobSchedule): ModifySubscriptionsRequestBody {
        this['job_schedule'] = jobSchedule;
        return this;
    }
    public set jobSchedule(jobSchedule: OperateUsedJobSchedule  | undefined) {
        this['job_schedule'] = jobSchedule;
    }
    public get jobSchedule(): OperateUsedJobSchedule | undefined {
        return this['job_schedule'];
    }
}