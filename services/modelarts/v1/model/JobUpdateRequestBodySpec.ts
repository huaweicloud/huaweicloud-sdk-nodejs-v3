import { JobUpdateRequestBodySpecSchedulePolicy } from './JobUpdateRequestBodySpecSchedulePolicy';
import { Notification } from './Notification';


export class JobUpdateRequestBodySpec {
    public notification?: Notification;
    private 'schedule_policy'?: JobUpdateRequestBodySpecSchedulePolicy;
    public constructor() { 
    }
    public withNotification(notification: Notification): JobUpdateRequestBodySpec {
        this['notification'] = notification;
        return this;
    }
    public withSchedulePolicy(schedulePolicy: JobUpdateRequestBodySpecSchedulePolicy): JobUpdateRequestBodySpec {
        this['schedule_policy'] = schedulePolicy;
        return this;
    }
    public set schedulePolicy(schedulePolicy: JobUpdateRequestBodySpecSchedulePolicy  | undefined) {
        this['schedule_policy'] = schedulePolicy;
    }
    public get schedulePolicy(): JobUpdateRequestBodySpecSchedulePolicy | undefined {
        return this['schedule_policy'];
    }
}