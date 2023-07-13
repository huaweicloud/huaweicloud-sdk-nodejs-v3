

export class JobExeResult {
    public id: string;
    private 'create_at': number | undefined;
    private 'update_at': number | undefined;
    private 'tenant_id': string | undefined;
    private 'job_id': string | undefined;
    private 'job_name': string | undefined;
    private 'start_time': number | undefined;
    private 'end_time': number | undefined;
    private 'cluster_id': string | undefined;
    private 'group_id': string | undefined;
    private 'jar_path': string | undefined;
    public input: string;
    public output?: string;
    private 'job_log': string | undefined;
    private 'job_type': number | undefined;
    private 'file_action': string | undefined;
    private 'arguments': string | undefined;
    public hql: string;
    private 'job_state': number | undefined;
    private 'job_final_status': number | undefined;
    private 'hive_script_path': string | undefined;
    private 'create_by': string | undefined;
    private 'finished_step': number | undefined;
    private 'job_main_id': string | undefined;
    private 'job_step_id': string | undefined;
    private 'postpone_at': number | undefined;
    private 'step_name': string | undefined;
    private 'step_num': number | undefined;
    private 'task_num': number | undefined;
    private 'update_by': string | undefined;
    private 'spend_time': number | undefined;
    private 'step_seq': number | undefined;
    public progress: string;
    public constructor(id?: any, createAt?: any, updateAt?: any, tenantId?: any, jobId?: any, jobName?: any, startTime?: any, endTime?: any, clusterId?: any, groupId?: any, jarPath?: any, input?: any, jobLog?: any, jobType?: any, fileAction?: any, _arguments?: any, hql?: any, jobState?: any, jobFinalStatus?: any, hiveScriptPath?: any, createBy?: any, finishedStep?: any, jobMainId?: any, jobStepId?: any, postponeAt?: any, stepName?: any, stepNum?: any, taskNum?: any, updateBy?: any, spendTime?: any, stepSeq?: any, progress?: any) { 
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
    public set createAt(createAt: number | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt() {
        return this['create_at'];
    }
    public withUpdateAt(updateAt: number): JobExeResult {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: number | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt() {
        return this['update_at'];
    }
    public withTenantId(tenantId: string): JobExeResult {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId() {
        return this['tenant_id'];
    }
    public withJobId(jobId: string): JobExeResult {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withJobName(jobName: string): JobExeResult {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName() {
        return this['job_name'];
    }
    public withStartTime(startTime: number): JobExeResult {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: number): JobExeResult {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withClusterId(clusterId: string): JobExeResult {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withGroupId(groupId: string): JobExeResult {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId() {
        return this['group_id'];
    }
    public withJarPath(jarPath: string): JobExeResult {
        this['jar_path'] = jarPath;
        return this;
    }
    public set jarPath(jarPath: string | undefined) {
        this['jar_path'] = jarPath;
    }
    public get jarPath() {
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
    public set jobLog(jobLog: string | undefined) {
        this['job_log'] = jobLog;
    }
    public get jobLog() {
        return this['job_log'];
    }
    public withJobType(jobType: number): JobExeResult {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: number | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType() {
        return this['job_type'];
    }
    public withFileAction(fileAction: string): JobExeResult {
        this['file_action'] = fileAction;
        return this;
    }
    public set fileAction(fileAction: string | undefined) {
        this['file_action'] = fileAction;
    }
    public get fileAction() {
        return this['file_action'];
    }
    public withArguments(_arguments: string): JobExeResult {
        this['arguments'] = _arguments;
        return this;
    }
    public set _arguments(_arguments: string | undefined) {
        this['arguments'] = _arguments;
    }
    public get _arguments() {
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
    public set jobState(jobState: number | undefined) {
        this['job_state'] = jobState;
    }
    public get jobState() {
        return this['job_state'];
    }
    public withJobFinalStatus(jobFinalStatus: number): JobExeResult {
        this['job_final_status'] = jobFinalStatus;
        return this;
    }
    public set jobFinalStatus(jobFinalStatus: number | undefined) {
        this['job_final_status'] = jobFinalStatus;
    }
    public get jobFinalStatus() {
        return this['job_final_status'];
    }
    public withHiveScriptPath(hiveScriptPath: string): JobExeResult {
        this['hive_script_path'] = hiveScriptPath;
        return this;
    }
    public set hiveScriptPath(hiveScriptPath: string | undefined) {
        this['hive_script_path'] = hiveScriptPath;
    }
    public get hiveScriptPath() {
        return this['hive_script_path'];
    }
    public withCreateBy(createBy: string): JobExeResult {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy() {
        return this['create_by'];
    }
    public withFinishedStep(finishedStep: number): JobExeResult {
        this['finished_step'] = finishedStep;
        return this;
    }
    public set finishedStep(finishedStep: number | undefined) {
        this['finished_step'] = finishedStep;
    }
    public get finishedStep() {
        return this['finished_step'];
    }
    public withJobMainId(jobMainId: string): JobExeResult {
        this['job_main_id'] = jobMainId;
        return this;
    }
    public set jobMainId(jobMainId: string | undefined) {
        this['job_main_id'] = jobMainId;
    }
    public get jobMainId() {
        return this['job_main_id'];
    }
    public withJobStepId(jobStepId: string): JobExeResult {
        this['job_step_id'] = jobStepId;
        return this;
    }
    public set jobStepId(jobStepId: string | undefined) {
        this['job_step_id'] = jobStepId;
    }
    public get jobStepId() {
        return this['job_step_id'];
    }
    public withPostponeAt(postponeAt: number): JobExeResult {
        this['postpone_at'] = postponeAt;
        return this;
    }
    public set postponeAt(postponeAt: number | undefined) {
        this['postpone_at'] = postponeAt;
    }
    public get postponeAt() {
        return this['postpone_at'];
    }
    public withStepName(stepName: string): JobExeResult {
        this['step_name'] = stepName;
        return this;
    }
    public set stepName(stepName: string | undefined) {
        this['step_name'] = stepName;
    }
    public get stepName() {
        return this['step_name'];
    }
    public withStepNum(stepNum: number): JobExeResult {
        this['step_num'] = stepNum;
        return this;
    }
    public set stepNum(stepNum: number | undefined) {
        this['step_num'] = stepNum;
    }
    public get stepNum() {
        return this['step_num'];
    }
    public withTaskNum(taskNum: number): JobExeResult {
        this['task_num'] = taskNum;
        return this;
    }
    public set taskNum(taskNum: number | undefined) {
        this['task_num'] = taskNum;
    }
    public get taskNum() {
        return this['task_num'];
    }
    public withUpdateBy(updateBy: string): JobExeResult {
        this['update_by'] = updateBy;
        return this;
    }
    public set updateBy(updateBy: string | undefined) {
        this['update_by'] = updateBy;
    }
    public get updateBy() {
        return this['update_by'];
    }
    public withSpendTime(spendTime: number): JobExeResult {
        this['spend_time'] = spendTime;
        return this;
    }
    public set spendTime(spendTime: number | undefined) {
        this['spend_time'] = spendTime;
    }
    public get spendTime() {
        return this['spend_time'];
    }
    public withStepSeq(stepSeq: number): JobExeResult {
        this['step_seq'] = stepSeq;
        return this;
    }
    public set stepSeq(stepSeq: number | undefined) {
        this['step_seq'] = stepSeq;
    }
    public get stepSeq() {
        return this['step_seq'];
    }
    public withProgress(progress: string): JobExeResult {
        this['progress'] = progress;
        return this;
    }
}