import { AbuseCondition } from './AbuseCondition';


export class AbuseThreshold {
    private 'time_window_seconds'?: number;
    public conditions?: Array<AbuseCondition>;
    public constructor() { 
    }
    public withTimeWindowSeconds(timeWindowSeconds: number): AbuseThreshold {
        this['time_window_seconds'] = timeWindowSeconds;
        return this;
    }
    public set timeWindowSeconds(timeWindowSeconds: number  | undefined) {
        this['time_window_seconds'] = timeWindowSeconds;
    }
    public get timeWindowSeconds(): number | undefined {
        return this['time_window_seconds'];
    }
    public withConditions(conditions: Array<AbuseCondition>): AbuseThreshold {
        this['conditions'] = conditions;
        return this;
    }
}