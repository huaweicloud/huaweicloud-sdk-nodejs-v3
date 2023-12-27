import { DependJob } from './DependJob';


export class Cron {
    private 'start_time'?: string;
    private 'end_time'?: string;
    public expression?: string;
    private 'expression_time_zone'?: string;
    public period?: string;
    private 'depend_pre_period'?: boolean;
    private 'depend_jobs'?: Array<DependJob>;
    public constructor(startTime?: string, expression?: string, period?: string) { 
        this['start_time'] = startTime;
        this['expression'] = expression;
        this['period'] = period;
    }
    public withStartTime(startTime: string): Cron {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): Cron {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withExpression(expression: string): Cron {
        this['expression'] = expression;
        return this;
    }
    public withExpressionTimeZone(expressionTimeZone: string): Cron {
        this['expression_time_zone'] = expressionTimeZone;
        return this;
    }
    public set expressionTimeZone(expressionTimeZone: string  | undefined) {
        this['expression_time_zone'] = expressionTimeZone;
    }
    public get expressionTimeZone(): string | undefined {
        return this['expression_time_zone'];
    }
    public withPeriod(period: string): Cron {
        this['period'] = period;
        return this;
    }
    public withDependPrePeriod(dependPrePeriod: boolean): Cron {
        this['depend_pre_period'] = dependPrePeriod;
        return this;
    }
    public set dependPrePeriod(dependPrePeriod: boolean  | undefined) {
        this['depend_pre_period'] = dependPrePeriod;
    }
    public get dependPrePeriod(): boolean | undefined {
        return this['depend_pre_period'];
    }
    public withDependJobs(dependJobs: Array<DependJob>): Cron {
        this['depend_jobs'] = dependJobs;
        return this;
    }
    public set dependJobs(dependJobs: Array<DependJob>  | undefined) {
        this['depend_jobs'] = dependJobs;
    }
    public get dependJobs(): Array<DependJob> | undefined {
        return this['depend_jobs'];
    }
}