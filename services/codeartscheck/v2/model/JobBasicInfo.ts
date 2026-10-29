import { JobResultInfo } from './JobResultInfo';
import { ProcessInfo } from './ProcessInfo';


export class JobBasicInfo {
    public executor?: string;
    public finishTime?: string;
    public jobResult?: JobResultInfo;
    public jobType?: string;
    public process?: ProcessInfo;
    public startTime?: string;
    public status?: string;
    public taskId?: string;
    public constructor() { 
    }
    public withExecutor(executor: string): JobBasicInfo {
        this['executor'] = executor;
        return this;
    }
    public withFinishTime(finishTime: string): JobBasicInfo {
        this['finishTime'] = finishTime;
        return this;
    }
    public withJobResult(jobResult: JobResultInfo): JobBasicInfo {
        this['jobResult'] = jobResult;
        return this;
    }
    public withJobType(jobType: string): JobBasicInfo {
        this['jobType'] = jobType;
        return this;
    }
    public withProcess(process: ProcessInfo): JobBasicInfo {
        this['process'] = process;
        return this;
    }
    public withStartTime(startTime: string): JobBasicInfo {
        this['startTime'] = startTime;
        return this;
    }
    public withStatus(status: string): JobBasicInfo {
        this['status'] = status;
        return this;
    }
    public withTaskId(taskId: string): JobBasicInfo {
        this['taskId'] = taskId;
        return this;
    }
}