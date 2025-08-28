

export class HealthReportLostPointsDetail {
    public metric?: string;
    private 'lost_points'?: number;
    private 'risk_level'?: string;
    public constructor(metric?: string, lostPoints?: number, riskLevel?: string) { 
        this['metric'] = metric;
        this['lost_points'] = lostPoints;
        this['risk_level'] = riskLevel;
    }
    public withMetric(metric: string): HealthReportLostPointsDetail {
        this['metric'] = metric;
        return this;
    }
    public withLostPoints(lostPoints: number): HealthReportLostPointsDetail {
        this['lost_points'] = lostPoints;
        return this;
    }
    public set lostPoints(lostPoints: number  | undefined) {
        this['lost_points'] = lostPoints;
    }
    public get lostPoints(): number | undefined {
        return this['lost_points'];
    }
    public withRiskLevel(riskLevel: string): HealthReportLostPointsDetail {
        this['risk_level'] = riskLevel;
        return this;
    }
    public set riskLevel(riskLevel: string  | undefined) {
        this['risk_level'] = riskLevel;
    }
    public get riskLevel(): string | undefined {
        return this['risk_level'];
    }
}