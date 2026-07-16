import { PoolMonitorStatistics } from './PoolMonitorStatistics';


export class PoolMonitorDataPoints {
    public timestamp?: number;
    public unit?: string;
    public statistics?: Array<PoolMonitorStatistics>;
    public constructor() { 
    }
    public withTimestamp(timestamp: number): PoolMonitorDataPoints {
        this['timestamp'] = timestamp;
        return this;
    }
    public withUnit(unit: string): PoolMonitorDataPoints {
        this['unit'] = unit;
        return this;
    }
    public withStatistics(statistics: Array<PoolMonitorStatistics>): PoolMonitorDataPoints {
        this['statistics'] = statistics;
        return this;
    }
}