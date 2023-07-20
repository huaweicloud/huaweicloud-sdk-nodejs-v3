

export class AddJobsReqV11 {
    private 'job_type'?: number;
    private 'job_name'?: string;
    private 'jar_path'?: string;
    private 'arguments'?: string;
    public input?: string;
    public output?: string;
    private 'job_log'?: string;
    private 'hive_script_path'?: string;
    public hql?: string;
    private 'shutdown_cluster'?: boolean;
    private 'submit_job_once_cluster_run'?: boolean;
    private 'file_action'?: string;
    public constructor(jobType?: number, jobName?: string, submitJobOnceClusterRun?: boolean) { 
        this['job_type'] = jobType;
        this['job_name'] = jobName;
        this['submit_job_once_cluster_run'] = submitJobOnceClusterRun;
    }
    public withJobType(jobType: number): AddJobsReqV11 {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: number  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): number | undefined {
        return this['job_type'];
    }
    public withJobName(jobName: string): AddJobsReqV11 {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withJarPath(jarPath: string): AddJobsReqV11 {
        this['jar_path'] = jarPath;
        return this;
    }
    public set jarPath(jarPath: string  | undefined) {
        this['jar_path'] = jarPath;
    }
    public get jarPath(): string | undefined {
        return this['jar_path'];
    }
    public withArguments(_arguments: string): AddJobsReqV11 {
        this['arguments'] = _arguments;
        return this;
    }
    public set _arguments(_arguments: string  | undefined) {
        this['arguments'] = _arguments;
    }
    public get _arguments(): string | undefined {
        return this['arguments'];
    }
    public withInput(input: string): AddJobsReqV11 {
        this['input'] = input;
        return this;
    }
    public withOutput(output: string): AddJobsReqV11 {
        this['output'] = output;
        return this;
    }
    public withJobLog(jobLog: string): AddJobsReqV11 {
        this['job_log'] = jobLog;
        return this;
    }
    public set jobLog(jobLog: string  | undefined) {
        this['job_log'] = jobLog;
    }
    public get jobLog(): string | undefined {
        return this['job_log'];
    }
    public withHiveScriptPath(hiveScriptPath: string): AddJobsReqV11 {
        this['hive_script_path'] = hiveScriptPath;
        return this;
    }
    public set hiveScriptPath(hiveScriptPath: string  | undefined) {
        this['hive_script_path'] = hiveScriptPath;
    }
    public get hiveScriptPath(): string | undefined {
        return this['hive_script_path'];
    }
    public withHql(hql: string): AddJobsReqV11 {
        this['hql'] = hql;
        return this;
    }
    public withShutdownCluster(shutdownCluster: boolean): AddJobsReqV11 {
        this['shutdown_cluster'] = shutdownCluster;
        return this;
    }
    public set shutdownCluster(shutdownCluster: boolean  | undefined) {
        this['shutdown_cluster'] = shutdownCluster;
    }
    public get shutdownCluster(): boolean | undefined {
        return this['shutdown_cluster'];
    }
    public withSubmitJobOnceClusterRun(submitJobOnceClusterRun: boolean): AddJobsReqV11 {
        this['submit_job_once_cluster_run'] = submitJobOnceClusterRun;
        return this;
    }
    public set submitJobOnceClusterRun(submitJobOnceClusterRun: boolean  | undefined) {
        this['submit_job_once_cluster_run'] = submitJobOnceClusterRun;
    }
    public get submitJobOnceClusterRun(): boolean | undefined {
        return this['submit_job_once_cluster_run'];
    }
    public withFileAction(fileAction: string): AddJobsReqV11 {
        this['file_action'] = fileAction;
        return this;
    }
    public set fileAction(fileAction: string  | undefined) {
        this['file_action'] = fileAction;
    }
    public get fileAction(): string | undefined {
        return this['file_action'];
    }
}