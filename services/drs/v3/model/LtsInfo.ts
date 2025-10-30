import { LtsInfoJob } from './LtsInfoJob';


export class LtsInfo {
    public job?: LtsInfoJob;
    public constructor() { 
    }
    public withJob(job: LtsInfoJob): LtsInfo {
        this['job'] = job;
        return this;
    }
}