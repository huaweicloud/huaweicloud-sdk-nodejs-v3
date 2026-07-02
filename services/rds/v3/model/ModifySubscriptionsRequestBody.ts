import { OperateUsedJobScheduleModify } from './OperateUsedJobScheduleModify';


export class ModifySubscriptionsRequestBody {
    private 'subscription_ids'?: Array<string>;
    private 'job_schedule'?: OperateUsedJobScheduleModify;
    public constructor(subscriptionIds?: Array<string>, jobSchedule?: OperateUsedJobScheduleModify) { 
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
    public withJobSchedule(jobSchedule: OperateUsedJobScheduleModify): ModifySubscriptionsRequestBody {
        this['job_schedule'] = jobSchedule;
        return this;
    }
    public set jobSchedule(jobSchedule: OperateUsedJobScheduleModify  | undefined) {
        this['job_schedule'] = jobSchedule;
    }
    public get jobSchedule(): OperateUsedJobScheduleModify | undefined {
        return this['job_schedule'];
    }
}