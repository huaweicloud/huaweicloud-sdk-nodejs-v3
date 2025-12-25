import { Mode } from './Mode';
import { Operator } from './Operator';
import { Serverity } from './Serverity';


export class Trigger {
    private 'accumulated_times'?: number;
    public expression?: string;
    private 'job_id'?: string;
    public mode?: Mode;
    public operator?: Operator;
    public severity?: Serverity;
    public constructor() { 
    }
    public withAccumulatedTimes(accumulatedTimes: number): Trigger {
        this['accumulated_times'] = accumulatedTimes;
        return this;
    }
    public set accumulatedTimes(accumulatedTimes: number  | undefined) {
        this['accumulated_times'] = accumulatedTimes;
    }
    public get accumulatedTimes(): number | undefined {
        return this['accumulated_times'];
    }
    public withExpression(expression: string): Trigger {
        this['expression'] = expression;
        return this;
    }
    public withJobId(jobId: string): Trigger {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withMode(mode: Mode): Trigger {
        this['mode'] = mode;
        return this;
    }
    public withOperator(operator: Operator): Trigger {
        this['operator'] = operator;
        return this;
    }
    public withSeverity(severity: Serverity): Trigger {
        this['severity'] = severity;
        return this;
    }
}