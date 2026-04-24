

export class BaselineInstance {
    public id?: string;
    public baseline?: object;
    private 'baseline_id'?: string;
    private 'baseline_name'?: string;
    private 'baseline_version'?: number;
    public priority?: number;
    public dag?: string;
    public status?: string;
    public buffer?: number;
    private 'estimate_complete_time'?: number;
    private 'expect_time'?: number;
    private 'finish_status'?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'execute_time'?: number;
    private 'error_code'?: string;
    private 'error_message'?: string;
    private 'task_instances'?: object;
    private 'owner_id'?: string;
    private 'owner_name'?: string;
    private 'domain_id'?: string;
    private 'domain_name'?: string;
    private 'project_id'?: string;
    private 'instance_id'?: string;
    private 'workspace_id'?: string;
    private 'first_alarm_time'?: number;
    private 'last_alarm_time'?: number;
    private 'sla_time'?: number;
    private 'process_time'?: number;
    private 'recover_time'?: number;
    private 'ignore_time'?: number;
    private 'process_buffer'?: number;
    private 'create_day'?: number;
    private 'instance_type'?: string;
    private 'process_user_id'?: string;
    private 'process_user_name'?: string;
    public constructor() { 
    }
    public withId(id: string): BaselineInstance {
        this['id'] = id;
        return this;
    }
    public withBaseline(baseline: object): BaselineInstance {
        this['baseline'] = baseline;
        return this;
    }
    public withBaselineId(baselineId: string): BaselineInstance {
        this['baseline_id'] = baselineId;
        return this;
    }
    public set baselineId(baselineId: string  | undefined) {
        this['baseline_id'] = baselineId;
    }
    public get baselineId(): string | undefined {
        return this['baseline_id'];
    }
    public withBaselineName(baselineName: string): BaselineInstance {
        this['baseline_name'] = baselineName;
        return this;
    }
    public set baselineName(baselineName: string  | undefined) {
        this['baseline_name'] = baselineName;
    }
    public get baselineName(): string | undefined {
        return this['baseline_name'];
    }
    public withBaselineVersion(baselineVersion: number): BaselineInstance {
        this['baseline_version'] = baselineVersion;
        return this;
    }
    public set baselineVersion(baselineVersion: number  | undefined) {
        this['baseline_version'] = baselineVersion;
    }
    public get baselineVersion(): number | undefined {
        return this['baseline_version'];
    }
    public withPriority(priority: number): BaselineInstance {
        this['priority'] = priority;
        return this;
    }
    public withDag(dag: string): BaselineInstance {
        this['dag'] = dag;
        return this;
    }
    public withStatus(status: string): BaselineInstance {
        this['status'] = status;
        return this;
    }
    public withBuffer(buffer: number): BaselineInstance {
        this['buffer'] = buffer;
        return this;
    }
    public withEstimateCompleteTime(estimateCompleteTime: number): BaselineInstance {
        this['estimate_complete_time'] = estimateCompleteTime;
        return this;
    }
    public set estimateCompleteTime(estimateCompleteTime: number  | undefined) {
        this['estimate_complete_time'] = estimateCompleteTime;
    }
    public get estimateCompleteTime(): number | undefined {
        return this['estimate_complete_time'];
    }
    public withExpectTime(expectTime: number): BaselineInstance {
        this['expect_time'] = expectTime;
        return this;
    }
    public set expectTime(expectTime: number  | undefined) {
        this['expect_time'] = expectTime;
    }
    public get expectTime(): number | undefined {
        return this['expect_time'];
    }
    public withFinishStatus(finishStatus: string): BaselineInstance {
        this['finish_status'] = finishStatus;
        return this;
    }
    public set finishStatus(finishStatus: string  | undefined) {
        this['finish_status'] = finishStatus;
    }
    public get finishStatus(): string | undefined {
        return this['finish_status'];
    }
    public withStartTime(startTime: number): BaselineInstance {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): BaselineInstance {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withExecuteTime(executeTime: number): BaselineInstance {
        this['execute_time'] = executeTime;
        return this;
    }
    public set executeTime(executeTime: number  | undefined) {
        this['execute_time'] = executeTime;
    }
    public get executeTime(): number | undefined {
        return this['execute_time'];
    }
    public withErrorCode(errorCode: string): BaselineInstance {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMessage(errorMessage: string): BaselineInstance {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
    public withTaskInstances(taskInstances: object): BaselineInstance {
        this['task_instances'] = taskInstances;
        return this;
    }
    public set taskInstances(taskInstances: object  | undefined) {
        this['task_instances'] = taskInstances;
    }
    public get taskInstances(): object | undefined {
        return this['task_instances'];
    }
    public withOwnerId(ownerId: string): BaselineInstance {
        this['owner_id'] = ownerId;
        return this;
    }
    public set ownerId(ownerId: string  | undefined) {
        this['owner_id'] = ownerId;
    }
    public get ownerId(): string | undefined {
        return this['owner_id'];
    }
    public withOwnerName(ownerName: string): BaselineInstance {
        this['owner_name'] = ownerName;
        return this;
    }
    public set ownerName(ownerName: string  | undefined) {
        this['owner_name'] = ownerName;
    }
    public get ownerName(): string | undefined {
        return this['owner_name'];
    }
    public withDomainId(domainId: string): BaselineInstance {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withDomainName(domainName: string): BaselineInstance {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withProjectId(projectId: string): BaselineInstance {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withInstanceId(instanceId: string): BaselineInstance {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withWorkspaceId(workspaceId: string): BaselineInstance {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withFirstAlarmTime(firstAlarmTime: number): BaselineInstance {
        this['first_alarm_time'] = firstAlarmTime;
        return this;
    }
    public set firstAlarmTime(firstAlarmTime: number  | undefined) {
        this['first_alarm_time'] = firstAlarmTime;
    }
    public get firstAlarmTime(): number | undefined {
        return this['first_alarm_time'];
    }
    public withLastAlarmTime(lastAlarmTime: number): BaselineInstance {
        this['last_alarm_time'] = lastAlarmTime;
        return this;
    }
    public set lastAlarmTime(lastAlarmTime: number  | undefined) {
        this['last_alarm_time'] = lastAlarmTime;
    }
    public get lastAlarmTime(): number | undefined {
        return this['last_alarm_time'];
    }
    public withSlaTime(slaTime: number): BaselineInstance {
        this['sla_time'] = slaTime;
        return this;
    }
    public set slaTime(slaTime: number  | undefined) {
        this['sla_time'] = slaTime;
    }
    public get slaTime(): number | undefined {
        return this['sla_time'];
    }
    public withProcessTime(processTime: number): BaselineInstance {
        this['process_time'] = processTime;
        return this;
    }
    public set processTime(processTime: number  | undefined) {
        this['process_time'] = processTime;
    }
    public get processTime(): number | undefined {
        return this['process_time'];
    }
    public withRecoverTime(recoverTime: number): BaselineInstance {
        this['recover_time'] = recoverTime;
        return this;
    }
    public set recoverTime(recoverTime: number  | undefined) {
        this['recover_time'] = recoverTime;
    }
    public get recoverTime(): number | undefined {
        return this['recover_time'];
    }
    public withIgnoreTime(ignoreTime: number): BaselineInstance {
        this['ignore_time'] = ignoreTime;
        return this;
    }
    public set ignoreTime(ignoreTime: number  | undefined) {
        this['ignore_time'] = ignoreTime;
    }
    public get ignoreTime(): number | undefined {
        return this['ignore_time'];
    }
    public withProcessBuffer(processBuffer: number): BaselineInstance {
        this['process_buffer'] = processBuffer;
        return this;
    }
    public set processBuffer(processBuffer: number  | undefined) {
        this['process_buffer'] = processBuffer;
    }
    public get processBuffer(): number | undefined {
        return this['process_buffer'];
    }
    public withCreateDay(createDay: number): BaselineInstance {
        this['create_day'] = createDay;
        return this;
    }
    public set createDay(createDay: number  | undefined) {
        this['create_day'] = createDay;
    }
    public get createDay(): number | undefined {
        return this['create_day'];
    }
    public withInstanceType(instanceType: string): BaselineInstance {
        this['instance_type'] = instanceType;
        return this;
    }
    public set instanceType(instanceType: string  | undefined) {
        this['instance_type'] = instanceType;
    }
    public get instanceType(): string | undefined {
        return this['instance_type'];
    }
    public withProcessUserId(processUserId: string): BaselineInstance {
        this['process_user_id'] = processUserId;
        return this;
    }
    public set processUserId(processUserId: string  | undefined) {
        this['process_user_id'] = processUserId;
    }
    public get processUserId(): string | undefined {
        return this['process_user_id'];
    }
    public withProcessUserName(processUserName: string): BaselineInstance {
        this['process_user_name'] = processUserName;
        return this;
    }
    public set processUserName(processUserName: string  | undefined) {
        this['process_user_name'] = processUserName;
    }
    public get processUserName(): string | undefined {
        return this['process_user_name'];
    }
}