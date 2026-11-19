

export class AiOverviewDimensionStats {
    public dimension?: string;
    private 'alarm_count'?: number;
    private 'risk_count'?: number;
    public constructor() { 
    }
    public withDimension(dimension: string): AiOverviewDimensionStats {
        this['dimension'] = dimension;
        return this;
    }
    public withAlarmCount(alarmCount: number): AiOverviewDimensionStats {
        this['alarm_count'] = alarmCount;
        return this;
    }
    public set alarmCount(alarmCount: number  | undefined) {
        this['alarm_count'] = alarmCount;
    }
    public get alarmCount(): number | undefined {
        return this['alarm_count'];
    }
    public withRiskCount(riskCount: number): AiOverviewDimensionStats {
        this['risk_count'] = riskCount;
        return this;
    }
    public set riskCount(riskCount: number  | undefined) {
        this['risk_count'] = riskCount;
    }
    public get riskCount(): number | undefined {
        return this['risk_count'];
    }
}