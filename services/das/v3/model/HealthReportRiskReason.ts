import { HealthReportRiskSuggestion } from './HealthReportRiskSuggestion';


export class HealthReportRiskReason {
    private 'reason_code'?: string;
    private 'reason_content'?: string;
    public suggestions?: Array<HealthReportRiskSuggestion>;
    public constructor(reasonCode?: string, reasonContent?: string, suggestions?: Array<HealthReportRiskSuggestion>) { 
        this['reason_code'] = reasonCode;
        this['reason_content'] = reasonContent;
        this['suggestions'] = suggestions;
    }
    public withReasonCode(reasonCode: string): HealthReportRiskReason {
        this['reason_code'] = reasonCode;
        return this;
    }
    public set reasonCode(reasonCode: string  | undefined) {
        this['reason_code'] = reasonCode;
    }
    public get reasonCode(): string | undefined {
        return this['reason_code'];
    }
    public withReasonContent(reasonContent: string): HealthReportRiskReason {
        this['reason_content'] = reasonContent;
        return this;
    }
    public set reasonContent(reasonContent: string  | undefined) {
        this['reason_content'] = reasonContent;
    }
    public get reasonContent(): string | undefined {
        return this['reason_content'];
    }
    public withSuggestions(suggestions: Array<HealthReportRiskSuggestion>): HealthReportRiskReason {
        this['suggestions'] = suggestions;
        return this;
    }
}