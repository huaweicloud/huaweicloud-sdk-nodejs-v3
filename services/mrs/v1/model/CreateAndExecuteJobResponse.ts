
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAndExecuteJobResponse extends SdkResponse {
    public templated?: boolean;
    private 'created_at'?: number;
    private 'updated_at'?: number;
    public id?: string;
    private 'tenant_id'?: string;
    private 'job_id'?: string;
    private 'job_name'?: string;
    private 'input_id'?: string;
    private 'output_id'?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'cluster_id'?: string;
    private 'engine_job_id'?: string;
    private 'return_code'?: string;
    private 'is_public'?: boolean;
    private 'is_protected'?: boolean;
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
    public credentials?: string;
    private 'user_id'?: string;
    private 'job_configs'?: { [key: string]: object; };
    public extra?: { [key: string]: object; };
    private 'data_source_urls'?: { [key: string]: object; };
    public info?: { [key: string]: object; };
    public constructor() { 
        super();
    }
    public withTemplated(templated: boolean): CreateAndExecuteJobResponse {
        this['templated'] = templated;
        return this;
    }
    public withCreatedAt(createdAt: number): CreateAndExecuteJobResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: number  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): number | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: number): CreateAndExecuteJobResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: number  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): number | undefined {
        return this['updated_at'];
    }
    public withId(id: string): CreateAndExecuteJobResponse {
        this['id'] = id;
        return this;
    }
    public withTenantId(tenantId: string): CreateAndExecuteJobResponse {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withJobId(jobId: string): CreateAndExecuteJobResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withJobName(jobName: string): CreateAndExecuteJobResponse {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withInputId(inputId: string): CreateAndExecuteJobResponse {
        this['input_id'] = inputId;
        return this;
    }
    public set inputId(inputId: string  | undefined) {
        this['input_id'] = inputId;
    }
    public get inputId(): string | undefined {
        return this['input_id'];
    }
    public withOutputId(outputId: string): CreateAndExecuteJobResponse {
        this['output_id'] = outputId;
        return this;
    }
    public set outputId(outputId: string  | undefined) {
        this['output_id'] = outputId;
    }
    public get outputId(): string | undefined {
        return this['output_id'];
    }
    public withStartTime(startTime: number): CreateAndExecuteJobResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): CreateAndExecuteJobResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withClusterId(clusterId: string): CreateAndExecuteJobResponse {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withEngineJobId(engineJobId: string): CreateAndExecuteJobResponse {
        this['engine_job_id'] = engineJobId;
        return this;
    }
    public set engineJobId(engineJobId: string  | undefined) {
        this['engine_job_id'] = engineJobId;
    }
    public get engineJobId(): string | undefined {
        return this['engine_job_id'];
    }
    public withReturnCode(returnCode: string): CreateAndExecuteJobResponse {
        this['return_code'] = returnCode;
        return this;
    }
    public set returnCode(returnCode: string  | undefined) {
        this['return_code'] = returnCode;
    }
    public get returnCode(): string | undefined {
        return this['return_code'];
    }
    public withIsPublic(isPublic: boolean): CreateAndExecuteJobResponse {
        this['is_public'] = isPublic;
        return this;
    }
    public set isPublic(isPublic: boolean  | undefined) {
        this['is_public'] = isPublic;
    }
    public get isPublic(): boolean | undefined {
        return this['is_public'];
    }
    public withIsProtected(isProtected: boolean): CreateAndExecuteJobResponse {
        this['is_protected'] = isProtected;
        return this;
    }
    public set isProtected(isProtected: boolean  | undefined) {
        this['is_protected'] = isProtected;
    }
    public get isProtected(): boolean | undefined {
        return this['is_protected'];
    }
    public withGroupId(groupId: string): CreateAndExecuteJobResponse {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withJarPath(jarPath: string): CreateAndExecuteJobResponse {
        this['jar_path'] = jarPath;
        return this;
    }
    public set jarPath(jarPath: string  | undefined) {
        this['jar_path'] = jarPath;
    }
    public get jarPath(): string | undefined {
        return this['jar_path'];
    }
    public withInput(input: string): CreateAndExecuteJobResponse {
        this['input'] = input;
        return this;
    }
    public withOutput(output: string): CreateAndExecuteJobResponse {
        this['output'] = output;
        return this;
    }
    public withJobLog(jobLog: string): CreateAndExecuteJobResponse {
        this['job_log'] = jobLog;
        return this;
    }
    public set jobLog(jobLog: string  | undefined) {
        this['job_log'] = jobLog;
    }
    public get jobLog(): string | undefined {
        return this['job_log'];
    }
    public withJobType(jobType: number): CreateAndExecuteJobResponse {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: number  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): number | undefined {
        return this['job_type'];
    }
    public withFileAction(fileAction: string): CreateAndExecuteJobResponse {
        this['file_action'] = fileAction;
        return this;
    }
    public set fileAction(fileAction: string  | undefined) {
        this['file_action'] = fileAction;
    }
    public get fileAction(): string | undefined {
        return this['file_action'];
    }
    public withArguments(_arguments: string): CreateAndExecuteJobResponse {
        this['arguments'] = _arguments;
        return this;
    }
    public set _arguments(_arguments: string  | undefined) {
        this['arguments'] = _arguments;
    }
    public get _arguments(): string | undefined {
        return this['arguments'];
    }
    public withHql(hql: string): CreateAndExecuteJobResponse {
        this['hql'] = hql;
        return this;
    }
    public withJobState(jobState: number): CreateAndExecuteJobResponse {
        this['job_state'] = jobState;
        return this;
    }
    public set jobState(jobState: number  | undefined) {
        this['job_state'] = jobState;
    }
    public get jobState(): number | undefined {
        return this['job_state'];
    }
    public withJobFinalStatus(jobFinalStatus: number): CreateAndExecuteJobResponse {
        this['job_final_status'] = jobFinalStatus;
        return this;
    }
    public set jobFinalStatus(jobFinalStatus: number  | undefined) {
        this['job_final_status'] = jobFinalStatus;
    }
    public get jobFinalStatus(): number | undefined {
        return this['job_final_status'];
    }
    public withHiveScriptPath(hiveScriptPath: string): CreateAndExecuteJobResponse {
        this['hive_script_path'] = hiveScriptPath;
        return this;
    }
    public set hiveScriptPath(hiveScriptPath: string  | undefined) {
        this['hive_script_path'] = hiveScriptPath;
    }
    public get hiveScriptPath(): string | undefined {
        return this['hive_script_path'];
    }
    public withCreateBy(createBy: string): CreateAndExecuteJobResponse {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withFinishedStep(finishedStep: number): CreateAndExecuteJobResponse {
        this['finished_step'] = finishedStep;
        return this;
    }
    public set finishedStep(finishedStep: number  | undefined) {
        this['finished_step'] = finishedStep;
    }
    public get finishedStep(): number | undefined {
        return this['finished_step'];
    }
    public withJobMainId(jobMainId: string): CreateAndExecuteJobResponse {
        this['job_main_id'] = jobMainId;
        return this;
    }
    public set jobMainId(jobMainId: string  | undefined) {
        this['job_main_id'] = jobMainId;
    }
    public get jobMainId(): string | undefined {
        return this['job_main_id'];
    }
    public withJobStepId(jobStepId: string): CreateAndExecuteJobResponse {
        this['job_step_id'] = jobStepId;
        return this;
    }
    public set jobStepId(jobStepId: string  | undefined) {
        this['job_step_id'] = jobStepId;
    }
    public get jobStepId(): string | undefined {
        return this['job_step_id'];
    }
    public withPostponeAt(postponeAt: number): CreateAndExecuteJobResponse {
        this['postpone_at'] = postponeAt;
        return this;
    }
    public set postponeAt(postponeAt: number  | undefined) {
        this['postpone_at'] = postponeAt;
    }
    public get postponeAt(): number | undefined {
        return this['postpone_at'];
    }
    public withStepName(stepName: string): CreateAndExecuteJobResponse {
        this['step_name'] = stepName;
        return this;
    }
    public set stepName(stepName: string  | undefined) {
        this['step_name'] = stepName;
    }
    public get stepName(): string | undefined {
        return this['step_name'];
    }
    public withStepNum(stepNum: number): CreateAndExecuteJobResponse {
        this['step_num'] = stepNum;
        return this;
    }
    public set stepNum(stepNum: number  | undefined) {
        this['step_num'] = stepNum;
    }
    public get stepNum(): number | undefined {
        return this['step_num'];
    }
    public withTaskNum(taskNum: number): CreateAndExecuteJobResponse {
        this['task_num'] = taskNum;
        return this;
    }
    public set taskNum(taskNum: number  | undefined) {
        this['task_num'] = taskNum;
    }
    public get taskNum(): number | undefined {
        return this['task_num'];
    }
    public withUpdateBy(updateBy: string): CreateAndExecuteJobResponse {
        this['update_by'] = updateBy;
        return this;
    }
    public set updateBy(updateBy: string  | undefined) {
        this['update_by'] = updateBy;
    }
    public get updateBy(): string | undefined {
        return this['update_by'];
    }
    public withCredentials(credentials: string): CreateAndExecuteJobResponse {
        this['credentials'] = credentials;
        return this;
    }
    public withUserId(userId: string): CreateAndExecuteJobResponse {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withJobConfigs(jobConfigs: { [key: string]: object; }): CreateAndExecuteJobResponse {
        this['job_configs'] = jobConfigs;
        return this;
    }
    public set jobConfigs(jobConfigs: { [key: string]: object; }  | undefined) {
        this['job_configs'] = jobConfigs;
    }
    public get jobConfigs(): { [key: string]: object; } | undefined {
        return this['job_configs'];
    }
    public withExtra(extra: { [key: string]: object; }): CreateAndExecuteJobResponse {
        this['extra'] = extra;
        return this;
    }
    public withDataSourceUrls(dataSourceUrls: { [key: string]: object; }): CreateAndExecuteJobResponse {
        this['data_source_urls'] = dataSourceUrls;
        return this;
    }
    public set dataSourceUrls(dataSourceUrls: { [key: string]: object; }  | undefined) {
        this['data_source_urls'] = dataSourceUrls;
    }
    public get dataSourceUrls(): { [key: string]: object; } | undefined {
        return this['data_source_urls'];
    }
    public withInfo(info: { [key: string]: object; }): CreateAndExecuteJobResponse {
        this['info'] = info;
        return this;
    }
}