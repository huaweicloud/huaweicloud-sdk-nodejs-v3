

export class JobExeResult {
    public id?: string;
    private 'create_at'?: number;
    private 'update_at'?: number;
    private 'tenant_id'?: string;
    private 'job_id'?: string;
    private 'job_name'?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'cluster_id'?: string;
    private 'group_id'?: string;
    private 'jar_path'?: string;
    public input?: string;
    public output?: string;
    private 'job_log'?: string;
    private 'job_type'?: number;
    private 'file_action'?: string;
    private 'arguments'?: string;
    public hql?: string;
    private 'job_state'?: number;
    private 'job_final_status'?: number;
    private 'hive_script_path'?: string;
    private 'create_by'?: string;
    private 'finished_step'?: number;
    private 'job_main_id'?: string;
    private 'job_step_id'?: string;
    private 'postpone_at'?: number;
    private 'step_name'?: string;
    private 'step_num'?: number;
    private 'task_num'?: number;
    private 'update_by'?: string;
    private 'spend_time'?: number;
    private 'step_seq'?: number;
    public progress?: string;
    public constructor(id?: string, createAt?: number, updateAt?: number, tenantId?: string, jobId?: string, jobName?: string, startTime?: number, endTime?: number, clusterId?: string, groupId?: string, jarPath?: string, input?: string, jobLog?: string, jobType?: number, fileAction?: string, _arguments?: string, hql?: string, jobState?: number, jobFinalStatus?: number, hiveScriptPath?: string, createBy?: string, finishedStep?: number, jobMainId?: string, jobStepId?: string, postponeAt?: number, stepName?: string, stepNum?: number, taskNum?: number, updateBy?: string, spendTime?: number, stepSeq?: number, progress?: string) { 
        this['id'] = id;
        this['create_at'] = createAt;
        this['update_at'] = updateAt;
        this['tenant_id'] = tenantId;
        this['job_id'] = jobId;
        this['job_name'] = jobName;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['cluster_id'] = clusterId;
        this['group_id'] = groupId;
        this['jar_path'] = jarPath;
        this['input'] = input;
        this['job_log'] = jobLog;
        this['job_type'] = jobType;
        this['file_action'] = fileAction;
        this['arguments'] = _arguments;
        this['hql'] = hql;
        this['job_state'] = jobState;
        this['job_final_status'] = jobFinalStatus;
        this['hive_script_path'] = hiveScriptPath;
        this['create_by'] = createBy;
        this['finished_step'] = finishedStep;
        this['job_main_id'] = jobMainId;
        this['job_step_id'] = jobStepId;
        this['postpone_at'] = postponeAt;
        this['step_name'] = stepName;
        this['step_num'] = stepNum;
        this['task_num'] = taskNum;
        this['update_by'] = updateBy;
        this['spend_time'] = spendTime;
        this['step_seq'] = stepSeq;
        this['progress'] = progress;
    }
    public withId(id: string): JobExeResult {
        this['id'] = id;
        return this;
    }
    public withCreateAt(createAt: number): JobExeResult {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: number  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): number | undefined {
        return this['create_at'];
    }
    public withUpdateAt(updateAt: number): JobExeResult {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: number  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): number | undefined {
        return this['update_at'];
    }
    public withTenantId(tenantId: string): JobExeResult {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withJobId(jobId: string): JobExeResult {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withJobName(jobName: string): JobExeResult {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withStartTime(startTime: number): JobExeResult {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): JobExeResult {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withClusterId(clusterId: string): JobExeResult {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withGroupId(groupId: string): JobExeResult {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withJarPath(jarPath: string): JobExeResult {
        this['jar_path'] = jarPath;
        return this;
    }
    public set jarPath(jarPath: string  | undefined) {
        this['jar_path'] = jarPath;
    }
    public get jarPath(): string | undefined {
        return this['jar_path'];
    }
    public withInput(input: string): JobExeResult {
        this['input'] = input;
        return this;
    }
    public withOutput(output: string): JobExeResult {
        this['output'] = output;
        return this;
    }
    public withJobLog(jobLog: string): JobExeResult {
        this['job_log'] = jobLog;
        return this;
    }
    public set jobLog(jobLog: string  | undefined) {
        this['job_log'] = jobLog;
    }
    public get jobLog(): string | undefined {
        return this['job_log'];
    }
    public withJobType(jobType: number): JobExeResult {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: number  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): number | undefined {
        return this['job_type'];
    }
    public withFileAction(fileAction: string): JobExeResult {
        this['file_action'] = fileAction;
        return this;
    }
    public set fileAction(fileAction: string  | undefined) {
        this['file_action'] = fileAction;
    }
    public get fileAction(): string | undefined {
        return this['file_action'];
    }
    public withArguments(_arguments: string): JobExeResult {
        this['arguments'] = _arguments;
        return this;
    }
    public set _arguments(_arguments: string  | undefined) {
        this['arguments'] = _arguments;
    }
    public get _arguments(): string | undefined {
        return this['arguments'];
    }
    public withHql(hql: string): JobExeResult {
        this['hql'] = hql;
        return this;
    }
    public withJobState(jobState: number): JobExeResult {
        this['job_state'] = jobState;
        return this;
    }
    public set jobState(jobState: number  | undefined) {
        this['job_state'] = jobState;
    }
    public get jobState(): number | undefined {
        return this['job_state'];
    }
    public withJobFinalStatus(jobFinalStatus: number): JobExeResult {
        this['job_final_status'] = jobFinalStatus;
        return this;
    }
    public set jobFinalStatus(jobFinalStatus: number  | undefined) {
        this['job_final_status'] = jobFinalStatus;
    }
    public get jobFinalStatus(): number | undefined {
        return this['job_final_status'];
    }
    public withHiveScriptPath(hiveScriptPath: string): JobExeResult {
        this['hive_script_path'] = hiveScriptPath;
        return this;
    }
    public set hiveScriptPath(hiveScriptPath: string  | undefined) {
        this['hive_script_path'] = hiveScriptPath;
    }
    public get hiveScriptPath(): string | undefined {
        return this['hive_script_path'];
    }
    public withCreateBy(createBy: string): JobExeResult {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withFinishedStep(finishedStep: number): JobExeResult {
        this['finished_step'] = finishedStep;
        return this;
    }
    public set finishedStep(finishedStep: number  | undefined) {
        this['finished_step'] = finishedStep;
    }
    public get finishedStep(): number | undefined {
        return this['finished_step'];
    }
    public withJobMainId(jobMainId: string): JobExeResult {
        this['job_main_id'] = jobMainId;
        return this;
    }
    public set jobMainId(jobMainId: string  | undefined) {
        this['job_main_id'] = jobMainId;
    }
    public get jobMainId(): string | undefined {
        return this['job_main_id'];
    }
    public withJobStepId(jobStepId: string): JobExeResult {
        this['job_step_id'] = jobStepId;
        return this;
    }
    public set jobStepId(jobStepId: string  | undefined) {
        this['job_step_id'] = jobStepId;
    }
    public get jobStepId(): string | undefined {
        return this['job_step_id'];
    }
    public withPostponeAt(postponeAt: number): JobExeResult {
        this['postpone_at'] = postponeAt;
        return this;
    }
    public set postponeAt(postponeAt: number  | undefined) {
        this['postpone_at'] = postponeAt;
    }
    public get postponeAt(): number | undefined {
        return this['postpone_at'];
    }
    public withStepName(stepName: string): JobExeResult {
        this['step_name'] = stepName;
        return this;
    }
    public set stepName(stepName: string  | undefined) {
        this['step_name'] = stepName;
    }
    public get stepName(): string | undefined {
        return this['step_name'];
    }
    public withStepNum(stepNum: number): JobExeResult {
        this['step_num'] = stepNum;
        return this;
    }
    public set stepNum(stepNum: number  | undefined) {
        this['step_num'] = stepNum;
    }
    public get stepNum(): number | undefined {
        return this['step_num'];
    }
    public withTaskNum(taskNum: number): JobExeResult {
        this['task_num'] = taskNum;
        return this;
    }
    public set taskNum(taskNum: number  | undefined) {
        this['task_num'] = taskNum;
    }
    public get taskNum(): number | undefined {
        return this['task_num'];
    }
    public withUpdateBy(updateBy: string): JobExeResult {
        this['update_by'] = updateBy;
        return this;
    }
    public set updateBy(updateBy: string  | undefined) {
        this['update_by'] = updateBy;
    }
    public get updateBy(): string | undefined {
        return this['update_by'];
    }
    public withSpendTime(spendTime: number): JobExeResult {
        this['spend_time'] = spendTime;
        return this;
    }
    public set spendTime(spendTime: number  | undefined) {
        this['spend_time'] = spendTime;
    }
    public get spendTime(): number | undefined {
        return this['spend_time'];
    }
    public withStepSeq(stepSeq: number): JobExeResult {
        this['step_seq'] = stepSeq;
        return this;
    }
    public set stepSeq(stepSeq: number  | undefined) {
        this['step_seq'] = stepSeq;
    }
    public get stepSeq(): number | undefined {
        return this['step_seq'];
    }
    public withProgress(progress: string): JobExeResult {
        this['progress'] = progress;
        return this;
    }
}