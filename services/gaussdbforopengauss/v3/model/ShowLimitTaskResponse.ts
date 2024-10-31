import { LimitTaskRuleInfoOption } from './LimitTaskRuleInfoOption';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLimitTaskResponse extends SdkResponse {
    private 'task_name'?: string;
    private 'limit_type'?: string;
    private 'parallel_size'?: number;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'task_running_time'?: number;
    private 'limit_count'?: number;
    private 'rule_name'?: string;
    private 'memory_utilization'?: number;
    private 'cpu_utilization'?: number;
    private 'limit_task_rule_info_list'?: Array<LimitTaskRuleInfoOption>;
    public constructor() { 
        super();
    }
    public withTaskName(taskName: string): ShowLimitTaskResponse {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withLimitType(limitType: string): ShowLimitTaskResponse {
        this['limit_type'] = limitType;
        return this;
    }
    public set limitType(limitType: string  | undefined) {
        this['limit_type'] = limitType;
    }
    public get limitType(): string | undefined {
        return this['limit_type'];
    }
    public withParallelSize(parallelSize: number): ShowLimitTaskResponse {
        this['parallel_size'] = parallelSize;
        return this;
    }
    public set parallelSize(parallelSize: number  | undefined) {
        this['parallel_size'] = parallelSize;
    }
    public get parallelSize(): number | undefined {
        return this['parallel_size'];
    }
    public withStartTime(startTime: string): ShowLimitTaskResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ShowLimitTaskResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withTaskRunningTime(taskRunningTime: number): ShowLimitTaskResponse {
        this['task_running_time'] = taskRunningTime;
        return this;
    }
    public set taskRunningTime(taskRunningTime: number  | undefined) {
        this['task_running_time'] = taskRunningTime;
    }
    public get taskRunningTime(): number | undefined {
        return this['task_running_time'];
    }
    public withLimitCount(limitCount: number): ShowLimitTaskResponse {
        this['limit_count'] = limitCount;
        return this;
    }
    public set limitCount(limitCount: number  | undefined) {
        this['limit_count'] = limitCount;
    }
    public get limitCount(): number | undefined {
        return this['limit_count'];
    }
    public withRuleName(ruleName: string): ShowLimitTaskResponse {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withMemoryUtilization(memoryUtilization: number): ShowLimitTaskResponse {
        this['memory_utilization'] = memoryUtilization;
        return this;
    }
    public set memoryUtilization(memoryUtilization: number  | undefined) {
        this['memory_utilization'] = memoryUtilization;
    }
    public get memoryUtilization(): number | undefined {
        return this['memory_utilization'];
    }
    public withCpuUtilization(cpuUtilization: number): ShowLimitTaskResponse {
        this['cpu_utilization'] = cpuUtilization;
        return this;
    }
    public set cpuUtilization(cpuUtilization: number  | undefined) {
        this['cpu_utilization'] = cpuUtilization;
    }
    public get cpuUtilization(): number | undefined {
        return this['cpu_utilization'];
    }
    public withLimitTaskRuleInfoList(limitTaskRuleInfoList: Array<LimitTaskRuleInfoOption>): ShowLimitTaskResponse {
        this['limit_task_rule_info_list'] = limitTaskRuleInfoList;
        return this;
    }
    public set limitTaskRuleInfoList(limitTaskRuleInfoList: Array<LimitTaskRuleInfoOption>  | undefined) {
        this['limit_task_rule_info_list'] = limitTaskRuleInfoList;
    }
    public get limitTaskRuleInfoList(): Array<LimitTaskRuleInfoOption> | undefined {
        return this['limit_task_rule_info_list'];
    }
}