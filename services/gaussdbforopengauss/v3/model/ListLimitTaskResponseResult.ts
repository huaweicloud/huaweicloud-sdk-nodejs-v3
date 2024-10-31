import { ShowLimitTaskNodeOption } from './ShowLimitTaskNodeOption';


export class ListLimitTaskResponseResult {
    private 'task_id'?: string;
    private 'task_scope'?: string;
    private 'limit_type'?: string;
    private 'limit_type_value'?: string;
    private 'task_name'?: string;
    public databases?: string;
    private 'sql_model'?: string;
    private 'key_words'?: string;
    public status?: string;
    private 'instance_id'?: string;
    private 'rule_name'?: string;
    private 'parallel_size'?: number;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'cpu_utilization'?: number;
    private 'memory_utilization'?: number;
    public created?: string;
    public updated?: string;
    public creator?: string;
    public modifier?: string;
    private 'node_infos'?: Array<ShowLimitTaskNodeOption>;
    public constructor() { 
    }
    public withTaskId(taskId: string): ListLimitTaskResponseResult {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withTaskScope(taskScope: string): ListLimitTaskResponseResult {
        this['task_scope'] = taskScope;
        return this;
    }
    public set taskScope(taskScope: string  | undefined) {
        this['task_scope'] = taskScope;
    }
    public get taskScope(): string | undefined {
        return this['task_scope'];
    }
    public withLimitType(limitType: string): ListLimitTaskResponseResult {
        this['limit_type'] = limitType;
        return this;
    }
    public set limitType(limitType: string  | undefined) {
        this['limit_type'] = limitType;
    }
    public get limitType(): string | undefined {
        return this['limit_type'];
    }
    public withLimitTypeValue(limitTypeValue: string): ListLimitTaskResponseResult {
        this['limit_type_value'] = limitTypeValue;
        return this;
    }
    public set limitTypeValue(limitTypeValue: string  | undefined) {
        this['limit_type_value'] = limitTypeValue;
    }
    public get limitTypeValue(): string | undefined {
        return this['limit_type_value'];
    }
    public withTaskName(taskName: string): ListLimitTaskResponseResult {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withDatabases(databases: string): ListLimitTaskResponseResult {
        this['databases'] = databases;
        return this;
    }
    public withSqlModel(sqlModel: string): ListLimitTaskResponseResult {
        this['sql_model'] = sqlModel;
        return this;
    }
    public set sqlModel(sqlModel: string  | undefined) {
        this['sql_model'] = sqlModel;
    }
    public get sqlModel(): string | undefined {
        return this['sql_model'];
    }
    public withKeyWords(keyWords: string): ListLimitTaskResponseResult {
        this['key_words'] = keyWords;
        return this;
    }
    public set keyWords(keyWords: string  | undefined) {
        this['key_words'] = keyWords;
    }
    public get keyWords(): string | undefined {
        return this['key_words'];
    }
    public withStatus(status: string): ListLimitTaskResponseResult {
        this['status'] = status;
        return this;
    }
    public withInstanceId(instanceId: string): ListLimitTaskResponseResult {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withRuleName(ruleName: string): ListLimitTaskResponseResult {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withParallelSize(parallelSize: number): ListLimitTaskResponseResult {
        this['parallel_size'] = parallelSize;
        return this;
    }
    public set parallelSize(parallelSize: number  | undefined) {
        this['parallel_size'] = parallelSize;
    }
    public get parallelSize(): number | undefined {
        return this['parallel_size'];
    }
    public withStartTime(startTime: string): ListLimitTaskResponseResult {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListLimitTaskResponseResult {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withCpuUtilization(cpuUtilization: number): ListLimitTaskResponseResult {
        this['cpu_utilization'] = cpuUtilization;
        return this;
    }
    public set cpuUtilization(cpuUtilization: number  | undefined) {
        this['cpu_utilization'] = cpuUtilization;
    }
    public get cpuUtilization(): number | undefined {
        return this['cpu_utilization'];
    }
    public withMemoryUtilization(memoryUtilization: number): ListLimitTaskResponseResult {
        this['memory_utilization'] = memoryUtilization;
        return this;
    }
    public set memoryUtilization(memoryUtilization: number  | undefined) {
        this['memory_utilization'] = memoryUtilization;
    }
    public get memoryUtilization(): number | undefined {
        return this['memory_utilization'];
    }
    public withCreated(created: string): ListLimitTaskResponseResult {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): ListLimitTaskResponseResult {
        this['updated'] = updated;
        return this;
    }
    public withCreator(creator: string): ListLimitTaskResponseResult {
        this['creator'] = creator;
        return this;
    }
    public withModifier(modifier: string): ListLimitTaskResponseResult {
        this['modifier'] = modifier;
        return this;
    }
    public withNodeInfos(nodeInfos: Array<ShowLimitTaskNodeOption>): ListLimitTaskResponseResult {
        this['node_infos'] = nodeInfos;
        return this;
    }
    public set nodeInfos(nodeInfos: Array<ShowLimitTaskNodeOption>  | undefined) {
        this['node_infos'] = nodeInfos;
    }
    public get nodeInfos(): Array<ShowLimitTaskNodeOption> | undefined {
        return this['node_infos'];
    }
}