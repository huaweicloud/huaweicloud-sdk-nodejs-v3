import { ConditionItem } from './ConditionItem';


export class ConditionInfo {
    private 'expression_type'?: string;
    public conditions?: Array<ConditionItem>;
    public logics?: Array<string>;
    public cron?: string;
    private 'schedule_type'?: string;
    private 'start_type'?: string;
    private 'end_type'?: string;
    private 'end_time'?: string;
    private 'repeat_range'?: string;
    private 'only_once'?: boolean;
    private 'execution_type'?: string;
    public constructor() { 
    }
    public withExpressionType(expressionType: string): ConditionInfo {
        this['expression_type'] = expressionType;
        return this;
    }
    public set expressionType(expressionType: string  | undefined) {
        this['expression_type'] = expressionType;
    }
    public get expressionType(): string | undefined {
        return this['expression_type'];
    }
    public withConditions(conditions: Array<ConditionItem>): ConditionInfo {
        this['conditions'] = conditions;
        return this;
    }
    public withLogics(logics: Array<string>): ConditionInfo {
        this['logics'] = logics;
        return this;
    }
    public withCron(cron: string): ConditionInfo {
        this['cron'] = cron;
        return this;
    }
    public withScheduleType(scheduleType: string): ConditionInfo {
        this['schedule_type'] = scheduleType;
        return this;
    }
    public set scheduleType(scheduleType: string  | undefined) {
        this['schedule_type'] = scheduleType;
    }
    public get scheduleType(): string | undefined {
        return this['schedule_type'];
    }
    public withStartType(startType: string): ConditionInfo {
        this['start_type'] = startType;
        return this;
    }
    public set startType(startType: string  | undefined) {
        this['start_type'] = startType;
    }
    public get startType(): string | undefined {
        return this['start_type'];
    }
    public withEndType(endType: string): ConditionInfo {
        this['end_type'] = endType;
        return this;
    }
    public set endType(endType: string  | undefined) {
        this['end_type'] = endType;
    }
    public get endType(): string | undefined {
        return this['end_type'];
    }
    public withEndTime(endTime: string): ConditionInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withRepeatRange(repeatRange: string): ConditionInfo {
        this['repeat_range'] = repeatRange;
        return this;
    }
    public set repeatRange(repeatRange: string  | undefined) {
        this['repeat_range'] = repeatRange;
    }
    public get repeatRange(): string | undefined {
        return this['repeat_range'];
    }
    public withOnlyOnce(onlyOnce: boolean): ConditionInfo {
        this['only_once'] = onlyOnce;
        return this;
    }
    public set onlyOnce(onlyOnce: boolean  | undefined) {
        this['only_once'] = onlyOnce;
    }
    public get onlyOnce(): boolean | undefined {
        return this['only_once'];
    }
    public withExecutionType(executionType: string): ConditionInfo {
        this['execution_type'] = executionType;
        return this;
    }
    public set executionType(executionType: string  | undefined) {
        this['execution_type'] = executionType;
    }
    public get executionType(): string | undefined {
        return this['execution_type'];
    }
}