
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCompletionRateResponse extends SdkResponse {
    private 'dividend_value'?: string;
    private 'divisor_value'?: string;
    private 'metric_name'?: string;
    private 'metric_value'?: string;
    private 'project_id'?: string;
    private 'project_name'?: string;
    public constructor() { 
        super();
    }
    public withDividendValue(dividendValue: string): ShowCompletionRateResponse {
        this['dividend_value'] = dividendValue;
        return this;
    }
    public set dividendValue(dividendValue: string  | undefined) {
        this['dividend_value'] = dividendValue;
    }
    public get dividendValue(): string | undefined {
        return this['dividend_value'];
    }
    public withDivisorValue(divisorValue: string): ShowCompletionRateResponse {
        this['divisor_value'] = divisorValue;
        return this;
    }
    public set divisorValue(divisorValue: string  | undefined) {
        this['divisor_value'] = divisorValue;
    }
    public get divisorValue(): string | undefined {
        return this['divisor_value'];
    }
    public withMetricName(metricName: string): ShowCompletionRateResponse {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withMetricValue(metricValue: string): ShowCompletionRateResponse {
        this['metric_value'] = metricValue;
        return this;
    }
    public set metricValue(metricValue: string  | undefined) {
        this['metric_value'] = metricValue;
    }
    public get metricValue(): string | undefined {
        return this['metric_value'];
    }
    public withProjectId(projectId: string): ShowCompletionRateResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProjectName(projectName: string): ShowCompletionRateResponse {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
}