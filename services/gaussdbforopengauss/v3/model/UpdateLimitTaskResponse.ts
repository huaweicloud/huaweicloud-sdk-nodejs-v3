
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateLimitTaskResponse extends SdkResponse {
    private 'task_id'?: string;
    public databases?: string;
    private 'task_name'?: string;
    private 'key_words'?: string;
    private 'parallel_size'?: number;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'cpu_utilization'?: number;
    private 'memory_utilization'?: number;
    private 'rule_name'?: string;
    public jobId?: string;
    public constructor() { 
        super();
    }
    public withTaskId(taskId: string): UpdateLimitTaskResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withDatabases(databases: string): UpdateLimitTaskResponse {
        this['databases'] = databases;
        return this;
    }
    public withTaskName(taskName: string): UpdateLimitTaskResponse {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withKeyWords(keyWords: string): UpdateLimitTaskResponse {
        this['key_words'] = keyWords;
        return this;
    }
    public set keyWords(keyWords: string  | undefined) {
        this['key_words'] = keyWords;
    }
    public get keyWords(): string | undefined {
        return this['key_words'];
    }
    public withParallelSize(parallelSize: number): UpdateLimitTaskResponse {
        this['parallel_size'] = parallelSize;
        return this;
    }
    public set parallelSize(parallelSize: number  | undefined) {
        this['parallel_size'] = parallelSize;
    }
    public get parallelSize(): number | undefined {
        return this['parallel_size'];
    }
    public withStartTime(startTime: string): UpdateLimitTaskResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): UpdateLimitTaskResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withCpuUtilization(cpuUtilization: number): UpdateLimitTaskResponse {
        this['cpu_utilization'] = cpuUtilization;
        return this;
    }
    public set cpuUtilization(cpuUtilization: number  | undefined) {
        this['cpu_utilization'] = cpuUtilization;
    }
    public get cpuUtilization(): number | undefined {
        return this['cpu_utilization'];
    }
    public withMemoryUtilization(memoryUtilization: number): UpdateLimitTaskResponse {
        this['memory_utilization'] = memoryUtilization;
        return this;
    }
    public set memoryUtilization(memoryUtilization: number  | undefined) {
        this['memory_utilization'] = memoryUtilization;
    }
    public get memoryUtilization(): number | undefined {
        return this['memory_utilization'];
    }
    public withRuleName(ruleName: string): UpdateLimitTaskResponse {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withJobId(jobId: string): UpdateLimitTaskResponse {
        this['jobId'] = jobId;
        return this;
    }
}