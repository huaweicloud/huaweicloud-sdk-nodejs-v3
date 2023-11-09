

export class AuditLogInfo {
    private 'instance_type'?: string;
    private 'action_id'?: string;
    private 'action_name'?: string;
    private 'instance_id'?: string;
    private 'parent_instance_id'?: string;
    private 'log_level'?: string;
    public input?: string;
    public output?: string;
    private 'error_msg'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public status?: string;
    private 'trigger_type'?: string;
    public constructor() { 
    }
    public withInstanceType(instanceType: string): AuditLogInfo {
        this['instance_type'] = instanceType;
        return this;
    }
    public set instanceType(instanceType: string  | undefined) {
        this['instance_type'] = instanceType;
    }
    public get instanceType(): string | undefined {
        return this['instance_type'];
    }
    public withActionId(actionId: string): AuditLogInfo {
        this['action_id'] = actionId;
        return this;
    }
    public set actionId(actionId: string  | undefined) {
        this['action_id'] = actionId;
    }
    public get actionId(): string | undefined {
        return this['action_id'];
    }
    public withActionName(actionName: string): AuditLogInfo {
        this['action_name'] = actionName;
        return this;
    }
    public set actionName(actionName: string  | undefined) {
        this['action_name'] = actionName;
    }
    public get actionName(): string | undefined {
        return this['action_name'];
    }
    public withInstanceId(instanceId: string): AuditLogInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withParentInstanceId(parentInstanceId: string): AuditLogInfo {
        this['parent_instance_id'] = parentInstanceId;
        return this;
    }
    public set parentInstanceId(parentInstanceId: string  | undefined) {
        this['parent_instance_id'] = parentInstanceId;
    }
    public get parentInstanceId(): string | undefined {
        return this['parent_instance_id'];
    }
    public withLogLevel(logLevel: string): AuditLogInfo {
        this['log_level'] = logLevel;
        return this;
    }
    public set logLevel(logLevel: string  | undefined) {
        this['log_level'] = logLevel;
    }
    public get logLevel(): string | undefined {
        return this['log_level'];
    }
    public withInput(input: string): AuditLogInfo {
        this['input'] = input;
        return this;
    }
    public withOutput(output: string): AuditLogInfo {
        this['output'] = output;
        return this;
    }
    public withErrorMsg(errorMsg: string): AuditLogInfo {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withStartTime(startTime: string): AuditLogInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): AuditLogInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withStatus(status: string): AuditLogInfo {
        this['status'] = status;
        return this;
    }
    public withTriggerType(triggerType: string): AuditLogInfo {
        this['trigger_type'] = triggerType;
        return this;
    }
    public set triggerType(triggerType: string  | undefined) {
        this['trigger_type'] = triggerType;
    }
    public get triggerType(): string | undefined {
        return this['trigger_type'];
    }
}