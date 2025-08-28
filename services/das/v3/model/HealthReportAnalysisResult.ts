import { HealthReportRiskReason } from './HealthReportRiskReason';


export class HealthReportAnalysisResult {
    private 'risk_code'?: string;
    private 'risk_level'?: string;
    private 'risk_content'?: string;
    public reasons?: Array<HealthReportRiskReason>;
    public constructor(riskCode?: string, riskLevel?: string, riskContent?: string, reasons?: Array<HealthReportRiskReason>) { 
        this['risk_code'] = riskCode;
        this['risk_level'] = riskLevel;
        this['risk_content'] = riskContent;
        this['reasons'] = reasons;
    }
    public withRiskCode(riskCode: string): HealthReportAnalysisResult {
        this['risk_code'] = riskCode;
        return this;
    }
    public set riskCode(riskCode: string  | undefined) {
        this['risk_code'] = riskCode;
    }
    public get riskCode(): string | undefined {
        return this['risk_code'];
    }
    public withRiskLevel(riskLevel: string): HealthReportAnalysisResult {
        this['risk_level'] = riskLevel;
        return this;
    }
    public set riskLevel(riskLevel: string  | undefined) {
        this['risk_level'] = riskLevel;
    }
    public get riskLevel(): string | undefined {
        return this['risk_level'];
    }
    public withRiskContent(riskContent: string): HealthReportAnalysisResult {
        this['risk_content'] = riskContent;
        return this;
    }
    public set riskContent(riskContent: string  | undefined) {
        this['risk_content'] = riskContent;
    }
    public get riskContent(): string | undefined {
        return this['risk_content'];
    }
    public withReasons(reasons: Array<HealthReportRiskReason>): HealthReportAnalysisResult {
        this['reasons'] = reasons;
        return this;
    }
}