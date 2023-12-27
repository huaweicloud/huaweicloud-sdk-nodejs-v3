import { JobInstanceInfo } from './JobInstanceInfo';


export class JobDetail {
    public id?: string;
    public name?: string;
    public status?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public progress?: string;
    public instance?: JobInstanceInfo;
    private 'fail_reason'?: string;
    public constructor(id?: string, name?: string, status?: string, startTime?: string, endTime?: string, progress?: string, instance?: JobInstanceInfo, failReason?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['status'] = status;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['progress'] = progress;
        this['instance'] = instance;
        this['fail_reason'] = failReason;
    }
    public withId(id: string): JobDetail {
        this['id'] = id;
        return this;
    }
    public withName(name: string): JobDetail {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): JobDetail {
        this['status'] = status;
        return this;
    }
    public withStartTime(startTime: string): JobDetail {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): JobDetail {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withProgress(progress: string): JobDetail {
        this['progress'] = progress;
        return this;
    }
    public withInstance(instance: JobInstanceInfo): JobDetail {
        this['instance'] = instance;
        return this;
    }
    public withFailReason(failReason: string): JobDetail {
        this['fail_reason'] = failReason;
        return this;
    }
    public set failReason(failReason: string  | undefined) {
        this['fail_reason'] = failReason;
    }
    public get failReason(): string | undefined {
        return this['fail_reason'];
    }
}