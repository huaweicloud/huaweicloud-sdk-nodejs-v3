import { JobSummary } from './JobSummary';
import { NFSSummary } from './NFSSummary';


export class DataSource {
    public job?: JobSummary;
    public nfs?: NFSSummary;
    public constructor(job?: JobSummary) { 
        this['job'] = job;
    }
    public withJob(job: JobSummary): DataSource {
        this['job'] = job;
        return this;
    }
    public withNfs(nfs: NFSSummary): DataSource {
        this['nfs'] = nfs;
        return this;
    }
}