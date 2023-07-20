import { JobExecution } from './JobExecution';


export class StepConfig {
    private 'job_execution'?: JobExecution;
    public constructor(jobExecution?: JobExecution) { 
        this['job_execution'] = jobExecution;
    }
    public withJobExecution(jobExecution: JobExecution): StepConfig {
        this['job_execution'] = jobExecution;
        return this;
    }
    public set jobExecution(jobExecution: JobExecution  | undefined) {
        this['job_execution'] = jobExecution;
    }
    public get jobExecution(): JobExecution | undefined {
        return this['job_execution'];
    }
}