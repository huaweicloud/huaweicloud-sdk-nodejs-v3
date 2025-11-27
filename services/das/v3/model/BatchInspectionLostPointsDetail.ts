

export class BatchInspectionLostPointsDetail {
    private 'risk_level'?: string;
    public metric?: string;
    private 'metric_value'?: number;
    private 'deducted_points'?: number;
    private 'deducted_condition'?: string;
    private 'deducted_formula'?: string;
    public suggestions?: string;
    public constructor(riskLevel?: string, metric?: string, metricValue?: number, deductedPoints?: number, deductedCondition?: string, deductedFormula?: string, suggestions?: string) { 
        this['risk_level'] = riskLevel;
        this['metric'] = metric;
        this['metric_value'] = metricValue;
        this['deducted_points'] = deductedPoints;
        this['deducted_condition'] = deductedCondition;
        this['deducted_formula'] = deductedFormula;
        this['suggestions'] = suggestions;
    }
    public withRiskLevel(riskLevel: string): BatchInspectionLostPointsDetail {
        this['risk_level'] = riskLevel;
        return this;
    }
    public set riskLevel(riskLevel: string  | undefined) {
        this['risk_level'] = riskLevel;
    }
    public get riskLevel(): string | undefined {
        return this['risk_level'];
    }
    public withMetric(metric: string): BatchInspectionLostPointsDetail {
        this['metric'] = metric;
        return this;
    }
    public withMetricValue(metricValue: number): BatchInspectionLostPointsDetail {
        this['metric_value'] = metricValue;
        return this;
    }
    public set metricValue(metricValue: number  | undefined) {
        this['metric_value'] = metricValue;
    }
    public get metricValue(): number | undefined {
        return this['metric_value'];
    }
    public withDeductedPoints(deductedPoints: number): BatchInspectionLostPointsDetail {
        this['deducted_points'] = deductedPoints;
        return this;
    }
    public set deductedPoints(deductedPoints: number  | undefined) {
        this['deducted_points'] = deductedPoints;
    }
    public get deductedPoints(): number | undefined {
        return this['deducted_points'];
    }
    public withDeductedCondition(deductedCondition: string): BatchInspectionLostPointsDetail {
        this['deducted_condition'] = deductedCondition;
        return this;
    }
    public set deductedCondition(deductedCondition: string  | undefined) {
        this['deducted_condition'] = deductedCondition;
    }
    public get deductedCondition(): string | undefined {
        return this['deducted_condition'];
    }
    public withDeductedFormula(deductedFormula: string): BatchInspectionLostPointsDetail {
        this['deducted_formula'] = deductedFormula;
        return this;
    }
    public set deductedFormula(deductedFormula: string  | undefined) {
        this['deducted_formula'] = deductedFormula;
    }
    public get deductedFormula(): string | undefined {
        return this['deducted_formula'];
    }
    public withSuggestions(suggestions: string): BatchInspectionLostPointsDetail {
        this['suggestions'] = suggestions;
        return this;
    }
}