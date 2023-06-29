import { JobExecution } from './JobExecution';


export class StepConfig {
    private 'job_execution': JobExecution | undefined;
    public constructor(jobExecution?: any) { 
        this['job_execution'] = jobExecution;
    }
    public withJobExecution(jobExecution: JobExecution): StepConfig {
        this['job_execution'] = jobExecution;
        return this;
    }
    public set jobExecution(jobExecution: JobExecution | undefined) {
        this['job_execution'] = jobExecution;
    }
    public get jobExecution() {
        return this['job_execution'];
    }
}