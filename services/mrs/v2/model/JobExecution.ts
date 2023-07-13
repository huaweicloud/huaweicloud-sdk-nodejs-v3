

export class JobExecution {
    private 'job_type': string | undefined;
    private 'job_name': string | undefined;
    private 'arguments'?: Array<string> | undefined;
    public properties?: { [key: string]: string; };
    public constructor(jobType?: any, jobName?: any) { 
        this['job_type'] = jobType;
        this['job_name'] = jobName;
    }
    public withJobType(jobType: string): JobExecution {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: string | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType() {
        return this['job_type'];
    }
    public withJobName(jobName: string): JobExecution {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName() {
        return this['job_name'];
    }
    public withArguments(_arguments: Array<string>): JobExecution {
        this['arguments'] = _arguments;
        return this;
    }
    public set _arguments(_arguments: Array<string> | undefined) {
        this['arguments'] = _arguments;
    }
    public get _arguments() {
        return this['arguments'];
    }
    public withProperties(properties: { [key: string]: string; }): JobExecution {
        this['properties'] = properties;
        return this;
    }
}