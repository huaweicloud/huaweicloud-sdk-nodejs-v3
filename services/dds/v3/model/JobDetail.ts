import { JobInstanceInfo } from './JobInstanceInfo';


export class JobDetail {
    public id?: string;
    public name?: string;
    public status?: string;
    public created?: string;
    public ended?: string;
    public progress?: string;
    public instance?: JobInstanceInfo;
    private 'fail_reason'?: string;
    public constructor(id?: string, name?: string, status?: string, created?: string, ended?: string, progress?: string, instance?: JobInstanceInfo, failReason?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['status'] = status;
        this['created'] = created;
        this['ended'] = ended;
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
    public withCreated(created: string): JobDetail {
        this['created'] = created;
        return this;
    }
    public withEnded(ended: string): JobDetail {
        this['ended'] = ended;
        return this;
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