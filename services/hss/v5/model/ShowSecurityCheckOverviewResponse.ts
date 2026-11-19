
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSecurityCheckOverviewResponse extends SdkResponse {
    private 'risk_rating'?: number;
    public severity?: string;
    private 'scan_time'?: number;
    private 'host_num'?: number;
    private 'risk_num'?: number;
    private 'scheduled_check_status'?: boolean;
    public constructor() { 
        super();
    }
    public withRiskRating(riskRating: number): ShowSecurityCheckOverviewResponse {
        this['risk_rating'] = riskRating;
        return this;
    }
    public set riskRating(riskRating: number  | undefined) {
        this['risk_rating'] = riskRating;
    }
    public get riskRating(): number | undefined {
        return this['risk_rating'];
    }
    public withSeverity(severity: string): ShowSecurityCheckOverviewResponse {
        this['severity'] = severity;
        return this;
    }
    public withScanTime(scanTime: number): ShowSecurityCheckOverviewResponse {
        this['scan_time'] = scanTime;
        return this;
    }
    public set scanTime(scanTime: number  | undefined) {
        this['scan_time'] = scanTime;
    }
    public get scanTime(): number | undefined {
        return this['scan_time'];
    }
    public withHostNum(hostNum: number): ShowSecurityCheckOverviewResponse {
        this['host_num'] = hostNum;
        return this;
    }
    public set hostNum(hostNum: number  | undefined) {
        this['host_num'] = hostNum;
    }
    public get hostNum(): number | undefined {
        return this['host_num'];
    }
    public withRiskNum(riskNum: number): ShowSecurityCheckOverviewResponse {
        this['risk_num'] = riskNum;
        return this;
    }
    public set riskNum(riskNum: number  | undefined) {
        this['risk_num'] = riskNum;
    }
    public get riskNum(): number | undefined {
        return this['risk_num'];
    }
    public withScheduledCheckStatus(scheduledCheckStatus: boolean): ShowSecurityCheckOverviewResponse {
        this['scheduled_check_status'] = scheduledCheckStatus;
        return this;
    }
    public set scheduledCheckStatus(scheduledCheckStatus: boolean  | undefined) {
        this['scheduled_check_status'] = scheduledCheckStatus;
    }
    public get scheduledCheckStatus(): boolean | undefined {
        return this['scheduled_check_status'];
    }
}