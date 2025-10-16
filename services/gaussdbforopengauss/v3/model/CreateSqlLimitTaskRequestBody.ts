import { CreateLimitTaskNodeOption } from './CreateLimitTaskNodeOption';


export class CreateSqlLimitTaskRequestBody {
    private 'task_scope'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'sql_model'?: string;
    private 'limit_type'?: string;
    private 'limit_type_value'?: string;
    private 'key_words'?: string;
    private 'task_name'?: string;
    private 'parallel_size'?: number;
    private 'cpu_utilization'?: number;
    private 'memory_utilization'?: number;
    public databases?: string;
    private 'node_infos'?: Array<CreateLimitTaskNodeOption>;
    public constructor(taskScope?: string, limitType?: string, taskName?: string, parallelSize?: number) { 
        this['task_scope'] = taskScope;
        this['limit_type'] = limitType;
        this['task_name'] = taskName;
        this['parallel_size'] = parallelSize;
    }
    public withTaskScope(taskScope: string): CreateSqlLimitTaskRequestBody {
        this['task_scope'] = taskScope;
        return this;
    }
    public set taskScope(taskScope: string  | undefined) {
        this['task_scope'] = taskScope;
    }
    public get taskScope(): string | undefined {
        return this['task_scope'];
    }
    public withStartTime(startTime: string): CreateSqlLimitTaskRequestBody {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): CreateSqlLimitTaskRequestBody {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withSqlModel(sqlModel: string): CreateSqlLimitTaskRequestBody {
        this['sql_model'] = sqlModel;
        return this;
    }
    public set sqlModel(sqlModel: string  | undefined) {
        this['sql_model'] = sqlModel;
    }
    public get sqlModel(): string | undefined {
        return this['sql_model'];
    }
    public withLimitType(limitType: string): CreateSqlLimitTaskRequestBody {
        this['limit_type'] = limitType;
        return this;
    }
    public set limitType(limitType: string  | undefined) {
        this['limit_type'] = limitType;
    }
    public get limitType(): string | undefined {
        return this['limit_type'];
    }
    public withLimitTypeValue(limitTypeValue: string): CreateSqlLimitTaskRequestBody {
        this['limit_type_value'] = limitTypeValue;
        return this;
    }
    public set limitTypeValue(limitTypeValue: string  | undefined) {
        this['limit_type_value'] = limitTypeValue;
    }
    public get limitTypeValue(): string | undefined {
        return this['limit_type_value'];
    }
    public withKeyWords(keyWords: string): CreateSqlLimitTaskRequestBody {
        this['key_words'] = keyWords;
        return this;
    }
    public set keyWords(keyWords: string  | undefined) {
        this['key_words'] = keyWords;
    }
    public get keyWords(): string | undefined {
        return this['key_words'];
    }
    public withTaskName(taskName: string): CreateSqlLimitTaskRequestBody {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withParallelSize(parallelSize: number): CreateSqlLimitTaskRequestBody {
        this['parallel_size'] = parallelSize;
        return this;
    }
    public set parallelSize(parallelSize: number  | undefined) {
        this['parallel_size'] = parallelSize;
    }
    public get parallelSize(): number | undefined {
        return this['parallel_size'];
    }
    public withCpuUtilization(cpuUtilization: number): CreateSqlLimitTaskRequestBody {
        this['cpu_utilization'] = cpuUtilization;
        return this;
    }
    public set cpuUtilization(cpuUtilization: number  | undefined) {
        this['cpu_utilization'] = cpuUtilization;
    }
    public get cpuUtilization(): number | undefined {
        return this['cpu_utilization'];
    }
    public withMemoryUtilization(memoryUtilization: number): CreateSqlLimitTaskRequestBody {
        this['memory_utilization'] = memoryUtilization;
        return this;
    }
    public set memoryUtilization(memoryUtilization: number  | undefined) {
        this['memory_utilization'] = memoryUtilization;
    }
    public get memoryUtilization(): number | undefined {
        return this['memory_utilization'];
    }
    public withDatabases(databases: string): CreateSqlLimitTaskRequestBody {
        this['databases'] = databases;
        return this;
    }
    public withNodeInfos(nodeInfos: Array<CreateLimitTaskNodeOption>): CreateSqlLimitTaskRequestBody {
        this['node_infos'] = nodeInfos;
        return this;
    }
    public set nodeInfos(nodeInfos: Array<CreateLimitTaskNodeOption>  | undefined) {
        this['node_infos'] = nodeInfos;
    }
    public get nodeInfos(): Array<CreateLimitTaskNodeOption> | undefined {
        return this['node_infos'];
    }
}