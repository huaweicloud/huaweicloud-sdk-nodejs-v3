import { CreateBuildJobScm } from './CreateBuildJobScm';
import { JobPipelineInfoParameters } from './JobPipelineInfoParameters';


export class JobPipelineInfoItems {
    public scms?: Array<CreateBuildJobScm>;
    public parameters?: Array<JobPipelineInfoParameters>;
    private 'job_name'?: string;
    private 'job_name_massage'?: string;
    private 'job_name_regex'?: string;
    private 'source_code'?: string;
    public constructor() { 
    }
    public withScms(scms: Array<CreateBuildJobScm>): JobPipelineInfoItems {
        this['scms'] = scms;
        return this;
    }
    public withParameters(parameters: Array<JobPipelineInfoParameters>): JobPipelineInfoItems {
        this['parameters'] = parameters;
        return this;
    }
    public withJobName(jobName: string): JobPipelineInfoItems {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withJobNameMassage(jobNameMassage: string): JobPipelineInfoItems {
        this['job_name_massage'] = jobNameMassage;
        return this;
    }
    public set jobNameMassage(jobNameMassage: string  | undefined) {
        this['job_name_massage'] = jobNameMassage;
    }
    public get jobNameMassage(): string | undefined {
        return this['job_name_massage'];
    }
    public withJobNameRegex(jobNameRegex: string): JobPipelineInfoItems {
        this['job_name_regex'] = jobNameRegex;
        return this;
    }
    public set jobNameRegex(jobNameRegex: string  | undefined) {
        this['job_name_regex'] = jobNameRegex;
    }
    public get jobNameRegex(): string | undefined {
        return this['job_name_regex'];
    }
    public withSourceCode(sourceCode: string): JobPipelineInfoItems {
        this['source_code'] = sourceCode;
        return this;
    }
    public set sourceCode(sourceCode: string  | undefined) {
        this['source_code'] = sourceCode;
    }
    public get sourceCode(): string | undefined {
        return this['source_code'];
    }
}