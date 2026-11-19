
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSecurityScoreResponse extends SdkResponse {
    private 'security_risk_num'?: number;
    private 'security_score'?: number;
    private 'detect_time'?: number;
    private 'free_health_check_total_host_num'?: number;
    public constructor() { 
        super();
    }
    public withSecurityRiskNum(securityRiskNum: number): ShowSecurityScoreResponse {
        this['security_risk_num'] = securityRiskNum;
        return this;
    }
    public set securityRiskNum(securityRiskNum: number  | undefined) {
        this['security_risk_num'] = securityRiskNum;
    }
    public get securityRiskNum(): number | undefined {
        return this['security_risk_num'];
    }
    public withSecurityScore(securityScore: number): ShowSecurityScoreResponse {
        this['security_score'] = securityScore;
        return this;
    }
    public set securityScore(securityScore: number  | undefined) {
        this['security_score'] = securityScore;
    }
    public get securityScore(): number | undefined {
        return this['security_score'];
    }
    public withDetectTime(detectTime: number): ShowSecurityScoreResponse {
        this['detect_time'] = detectTime;
        return this;
    }
    public set detectTime(detectTime: number  | undefined) {
        this['detect_time'] = detectTime;
    }
    public get detectTime(): number | undefined {
        return this['detect_time'];
    }
    public withFreeHealthCheckTotalHostNum(freeHealthCheckTotalHostNum: number): ShowSecurityScoreResponse {
        this['free_health_check_total_host_num'] = freeHealthCheckTotalHostNum;
        return this;
    }
    public set freeHealthCheckTotalHostNum(freeHealthCheckTotalHostNum: number  | undefined) {
        this['free_health_check_total_host_num'] = freeHealthCheckTotalHostNum;
    }
    public get freeHealthCheckTotalHostNum(): number | undefined {
        return this['free_health_check_total_host_num'];
    }
}