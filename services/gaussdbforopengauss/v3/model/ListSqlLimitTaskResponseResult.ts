

export class ListSqlLimitTaskResponseResult {
    private 'task_id'?: string;
    private 'task_scope'?: string;
    private 'limit_type'?: string;
    private 'limit_type_value'?: string;
    private 'task_name'?: string;
    public databases?: string;
    private 'key_words'?: string;
    public status?: string;
    private 'instance_id'?: string;
    private 'rule_name'?: string;
    private 'parallel_size'?: number;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'cpu_utilization'?: number;
    private 'memory_utilization'?: number;
    public constructor() { 
    }
    public withTaskId(taskId: string): ListSqlLimitTaskResponseResult {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withTaskScope(taskScope: string): ListSqlLimitTaskResponseResult {
        this['task_scope'] = taskScope;
        return this;
    }
    public set taskScope(taskScope: string  | undefined) {
        this['task_scope'] = taskScope;
    }
    public get taskScope(): string | undefined {
        return this['task_scope'];
    }
    public withLimitType(limitType: string): ListSqlLimitTaskResponseResult {
        this['limit_type'] = limitType;
        return this;
    }
    public set limitType(limitType: string  | undefined) {
        this['limit_type'] = limitType;
    }
    public get limitType(): string | undefined {
        return this['limit_type'];
    }
    public withLimitTypeValue(limitTypeValue: string): ListSqlLimitTaskResponseResult {
        this['limit_type_value'] = limitTypeValue;
        return this;
    }
    public set limitTypeValue(limitTypeValue: string  | undefined) {
        this['limit_type_value'] = limitTypeValue;
    }
    public get limitTypeValue(): string | undefined {
        return this['limit_type_value'];
    }
    public withTaskName(taskName: string): ListSqlLimitTaskResponseResult {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withDatabases(databases: string): ListSqlLimitTaskResponseResult {
        this['databases'] = databases;
        return this;
    }
    public withKeyWords(keyWords: string): ListSqlLimitTaskResponseResult {
        this['key_words'] = keyWords;
        return this;
    }
    public set keyWords(keyWords: string  | undefined) {
        this['key_words'] = keyWords;
    }
    public get keyWords(): string | undefined {
        return this['key_words'];
    }
    public withStatus(status: string): ListSqlLimitTaskResponseResult {
        this['status'] = status;
        return this;
    }
    public withInstanceId(instanceId: string): ListSqlLimitTaskResponseResult {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withRuleName(ruleName: string): ListSqlLimitTaskResponseResult {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withParallelSize(parallelSize: number): ListSqlLimitTaskResponseResult {
        this['parallel_size'] = parallelSize;
        return this;
    }
    public set parallelSize(parallelSize: number  | undefined) {
        this['parallel_size'] = parallelSize;
    }
    public get parallelSize(): number | undefined {
        return this['parallel_size'];
    }
    public withStartTime(startTime: string): ListSqlLimitTaskResponseResult {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListSqlLimitTaskResponseResult {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withCpuUtilization(cpuUtilization: number): ListSqlLimitTaskResponseResult {
        this['cpu_utilization'] = cpuUtilization;
        return this;
    }
    public set cpuUtilization(cpuUtilization: number  | undefined) {
        this['cpu_utilization'] = cpuUtilization;
    }
    public get cpuUtilization(): number | undefined {
        return this['cpu_utilization'];
    }
    public withMemoryUtilization(memoryUtilization: number): ListSqlLimitTaskResponseResult {
        this['memory_utilization'] = memoryUtilization;
        return this;
    }
    public set memoryUtilization(memoryUtilization: number  | undefined) {
        this['memory_utilization'] = memoryUtilization;
    }
    public get memoryUtilization(): number | undefined {
        return this['memory_utilization'];
    }
}