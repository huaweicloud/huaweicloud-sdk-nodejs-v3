

export class SubmitJobReqV11 {
    private 'job_name'?: string;
    private 'cluster_id'?: string;
    private 'jar_path'?: string;
    public input?: string;
    public output?: string;
    private 'job_log'?: string;
    private 'job_type'?: number;
    private 'file_action'?: string;
    private 'arguments'?: string;
    public hql?: string;
    private 'hive_script_path'?: string;
    public constructor(jobName?: string, clusterId?: string, jobType?: number) { 
        this['job_name'] = jobName;
        this['cluster_id'] = clusterId;
        this['job_type'] = jobType;
    }
    public withJobName(jobName: string): SubmitJobReqV11 {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withClusterId(clusterId: string): SubmitJobReqV11 {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withJarPath(jarPath: string): SubmitJobReqV11 {
        this['jar_path'] = jarPath;
        return this;
    }
    public set jarPath(jarPath: string  | undefined) {
        this['jar_path'] = jarPath;
    }
    public get jarPath(): string | undefined {
        return this['jar_path'];
    }
    public withInput(input: string): SubmitJobReqV11 {
        this['input'] = input;
        return this;
    }
    public withOutput(output: string): SubmitJobReqV11 {
        this['output'] = output;
        return this;
    }
    public withJobLog(jobLog: string): SubmitJobReqV11 {
        this['job_log'] = jobLog;
        return this;
    }
    public set jobLog(jobLog: string  | undefined) {
        this['job_log'] = jobLog;
    }
    public get jobLog(): string | undefined {
        return this['job_log'];
    }
    public withJobType(jobType: number): SubmitJobReqV11 {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: number  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): number | undefined {
        return this['job_type'];
    }
    public withFileAction(fileAction: string): SubmitJobReqV11 {
        this['file_action'] = fileAction;
        return this;
    }
    public set fileAction(fileAction: string  | undefined) {
        this['file_action'] = fileAction;
    }
    public get fileAction(): string | undefined {
        return this['file_action'];
    }
    public withArguments(_arguments: string): SubmitJobReqV11 {
        this['arguments'] = _arguments;
        return this;
    }
    public set _arguments(_arguments: string  | undefined) {
        this['arguments'] = _arguments;
    }
    public get _arguments(): string | undefined {
        return this['arguments'];
    }
    public withHql(hql: string): SubmitJobReqV11 {
        this['hql'] = hql;
        return this;
    }
    public withHiveScriptPath(hiveScriptPath: string): SubmitJobReqV11 {
        this['hive_script_path'] = hiveScriptPath;
        return this;
    }
    public set hiveScriptPath(hiveScriptPath: string  | undefined) {
        this['hive_script_path'] = hiveScriptPath;
    }
    public get hiveScriptPath(): string | undefined {
        return this['hive_script_path'];
    }
}