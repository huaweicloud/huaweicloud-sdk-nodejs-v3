

export class UpdateSqlLimitTaskRequestBody {
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'key_words'?: string;
    private 'parallel_size'?: number;
    private 'task_name'?: string;
    private 'cpu_utilization'?: number;
    private 'memory_utilization'?: number;
    public databases?: string;
    private 'node_id'?: string;
    public constructor(parallelSize?: number, taskName?: string, nodeId?: string) { 
        this['parallel_size'] = parallelSize;
        this['task_name'] = taskName;
        this['node_id'] = nodeId;
    }
    public withStartTime(startTime: string): UpdateSqlLimitTaskRequestBody {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): UpdateSqlLimitTaskRequestBody {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withKeyWords(keyWords: string): UpdateSqlLimitTaskRequestBody {
        this['key_words'] = keyWords;
        return this;
    }
    public set keyWords(keyWords: string  | undefined) {
        this['key_words'] = keyWords;
    }
    public get keyWords(): string | undefined {
        return this['key_words'];
    }
    public withParallelSize(parallelSize: number): UpdateSqlLimitTaskRequestBody {
        this['parallel_size'] = parallelSize;
        return this;
    }
    public set parallelSize(parallelSize: number  | undefined) {
        this['parallel_size'] = parallelSize;
    }
    public get parallelSize(): number | undefined {
        return this['parallel_size'];
    }
    public withTaskName(taskName: string): UpdateSqlLimitTaskRequestBody {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withCpuUtilization(cpuUtilization: number): UpdateSqlLimitTaskRequestBody {
        this['cpu_utilization'] = cpuUtilization;
        return this;
    }
    public set cpuUtilization(cpuUtilization: number  | undefined) {
        this['cpu_utilization'] = cpuUtilization;
    }
    public get cpuUtilization(): number | undefined {
        return this['cpu_utilization'];
    }
    public withMemoryUtilization(memoryUtilization: number): UpdateSqlLimitTaskRequestBody {
        this['memory_utilization'] = memoryUtilization;
        return this;
    }
    public set memoryUtilization(memoryUtilization: number  | undefined) {
        this['memory_utilization'] = memoryUtilization;
    }
    public get memoryUtilization(): number | undefined {
        return this['memory_utilization'];
    }
    public withDatabases(databases: string): UpdateSqlLimitTaskRequestBody {
        this['databases'] = databases;
        return this;
    }
    public withNodeId(nodeId: string): UpdateSqlLimitTaskRequestBody {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
}