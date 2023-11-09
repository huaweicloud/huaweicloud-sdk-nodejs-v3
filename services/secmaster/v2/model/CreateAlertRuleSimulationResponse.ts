
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAlertRuleSimulationResponse extends SdkResponse {
    private 'alert_count'?: number;
    public severity?: string;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withAlertCount(alertCount: number): CreateAlertRuleSimulationResponse {
        this['alert_count'] = alertCount;
        return this;
    }
    public set alertCount(alertCount: number  | undefined) {
        this['alert_count'] = alertCount;
    }
    public get alertCount(): number | undefined {
        return this['alert_count'];
    }
    public withSeverity(severity: string): CreateAlertRuleSimulationResponse {
        this['severity'] = severity;
        return this;
    }
    public withXRequestId(xRequestId: string): CreateAlertRuleSimulationResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}