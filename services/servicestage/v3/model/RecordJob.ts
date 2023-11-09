import { RecordJobInfo } from './RecordJobInfo';


export class RecordJob {
    public sequence?: number;
    private 'deploy_type'?: string;
    private 'job_id'?: string;
    private 'job_info'?: RecordJobInfo;
    public constructor() { 
    }
    public withSequence(sequence: number): RecordJob {
        this['sequence'] = sequence;
        return this;
    }
    public withDeployType(deployType: string): RecordJob {
        this['deploy_type'] = deployType;
        return this;
    }
    public set deployType(deployType: string  | undefined) {
        this['deploy_type'] = deployType;
    }
    public get deployType(): string | undefined {
        return this['deploy_type'];
    }
    public withJobId(jobId: string): RecordJob {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withJobInfo(jobInfo: RecordJobInfo): RecordJob {
        this['job_info'] = jobInfo;
        return this;
    }
    public set jobInfo(jobInfo: RecordJobInfo  | undefined) {
        this['job_info'] = jobInfo;
    }
    public get jobInfo(): RecordJobInfo | undefined {
        return this['job_info'];
    }
}