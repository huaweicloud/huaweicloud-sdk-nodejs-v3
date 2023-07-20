

export class JobExecution {
    private 'job_type'?: string;
    private 'job_name'?: string;
    private 'arguments'?: Array<string>;
    public properties?: { [key: string]: string; };
    public constructor(jobType?: string, jobName?: string) { 
        this['job_type'] = jobType;
        this['job_name'] = jobName;
    }
    public withJobType(jobType: string): JobExecution {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): string | undefined {
        return this['job_type'];
    }
    public withJobName(jobName: string): JobExecution {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withArguments(_arguments: Array<string>): JobExecution {
        this['arguments'] = _arguments;
        return this;
    }
    public set _arguments(_arguments: Array<string>  | undefined) {
        this['arguments'] = _arguments;
    }
    public get _arguments(): Array<string> | undefined {
        return this['arguments'];
    }
    public withProperties(properties: { [key: string]: string; }): JobExecution {
        this['properties'] = properties;
        return this;
    }
}