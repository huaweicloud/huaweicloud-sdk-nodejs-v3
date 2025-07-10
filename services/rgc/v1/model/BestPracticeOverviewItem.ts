

export class BestPracticeOverviewItem {
    public score?: number;
    private 'detection_count'?: number;
    private 'high_risk_count'?: number;
    private 'medium_risk_count'?: number;
    private 'low_risk_count'?: number;
    private 'risk_item_description'?: Array<string>;
    public constructor() { 
    }
    public withScore(score: number): BestPracticeOverviewItem {
        this['score'] = score;
        return this;
    }
    public withDetectionCount(detectionCount: number): BestPracticeOverviewItem {
        this['detection_count'] = detectionCount;
        return this;
    }
    public set detectionCount(detectionCount: number  | undefined) {
        this['detection_count'] = detectionCount;
    }
    public get detectionCount(): number | undefined {
        return this['detection_count'];
    }
    public withHighRiskCount(highRiskCount: number): BestPracticeOverviewItem {
        this['high_risk_count'] = highRiskCount;
        return this;
    }
    public set highRiskCount(highRiskCount: number  | undefined) {
        this['high_risk_count'] = highRiskCount;
    }
    public get highRiskCount(): number | undefined {
        return this['high_risk_count'];
    }
    public withMediumRiskCount(mediumRiskCount: number): BestPracticeOverviewItem {
        this['medium_risk_count'] = mediumRiskCount;
        return this;
    }
    public set mediumRiskCount(mediumRiskCount: number  | undefined) {
        this['medium_risk_count'] = mediumRiskCount;
    }
    public get mediumRiskCount(): number | undefined {
        return this['medium_risk_count'];
    }
    public withLowRiskCount(lowRiskCount: number): BestPracticeOverviewItem {
        this['low_risk_count'] = lowRiskCount;
        return this;
    }
    public set lowRiskCount(lowRiskCount: number  | undefined) {
        this['low_risk_count'] = lowRiskCount;
    }
    public get lowRiskCount(): number | undefined {
        return this['low_risk_count'];
    }
    public withRiskItemDescription(riskItemDescription: Array<string>): BestPracticeOverviewItem {
        this['risk_item_description'] = riskItemDescription;
        return this;
    }
    public set riskItemDescription(riskItemDescription: Array<string>  | undefined) {
        this['risk_item_description'] = riskItemDescription;
    }
    public get riskItemDescription(): Array<string> | undefined {
        return this['risk_item_description'];
    }
}