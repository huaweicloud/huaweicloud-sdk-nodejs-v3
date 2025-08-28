

export class UserProcessAuditLog {
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'process_id'?: string;
    private 'execute_user_name'?: string;
    private 'execute_time'?: string;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): UserProcessAuditLog {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): UserProcessAuditLog {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withProcessId(processId: string): UserProcessAuditLog {
        this['process_id'] = processId;
        return this;
    }
    public set processId(processId: string  | undefined) {
        this['process_id'] = processId;
    }
    public get processId(): string | undefined {
        return this['process_id'];
    }
    public withExecuteUserName(executeUserName: string): UserProcessAuditLog {
        this['execute_user_name'] = executeUserName;
        return this;
    }
    public set executeUserName(executeUserName: string  | undefined) {
        this['execute_user_name'] = executeUserName;
    }
    public get executeUserName(): string | undefined {
        return this['execute_user_name'];
    }
    public withExecuteTime(executeTime: string): UserProcessAuditLog {
        this['execute_time'] = executeTime;
        return this;
    }
    public set executeTime(executeTime: string  | undefined) {
        this['execute_time'] = executeTime;
    }
    public get executeTime(): string | undefined {
        return this['execute_time'];
    }
}