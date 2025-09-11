import { SchedulerBean } from './SchedulerBean';


export class ConfigReportTopicRequest {
    public scheduler?: SchedulerBean;
    public constructor(scheduler?: SchedulerBean) { 
        this['scheduler'] = scheduler;
    }
    public withScheduler(scheduler: SchedulerBean): ConfigReportTopicRequest {
        this['scheduler'] = scheduler;
        return this;
    }
}