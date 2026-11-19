
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSecurityCheckStatisticResponse extends SdkResponse {
    private 'total_host_num'?: number;
    private 'risk_host_num'?: number;
    private 'high_risk_host_num'?: number;
    private 'medium_risk_host_num'?: number;
    private 'low_risk_host_num'?: number;
    private 'safe_host_num'?: number;
    public constructor() { 
        super();
    }
    public withTotalHostNum(totalHostNum: number): ShowSecurityCheckStatisticResponse {
        this['total_host_num'] = totalHostNum;
        return this;
    }
    public set totalHostNum(totalHostNum: number  | undefined) {
        this['total_host_num'] = totalHostNum;
    }
    public get totalHostNum(): number | undefined {
        return this['total_host_num'];
    }
    public withRiskHostNum(riskHostNum: number): ShowSecurityCheckStatisticResponse {
        this['risk_host_num'] = riskHostNum;
        return this;
    }
    public set riskHostNum(riskHostNum: number  | undefined) {
        this['risk_host_num'] = riskHostNum;
    }
    public get riskHostNum(): number | undefined {
        return this['risk_host_num'];
    }
    public withHighRiskHostNum(highRiskHostNum: number): ShowSecurityCheckStatisticResponse {
        this['high_risk_host_num'] = highRiskHostNum;
        return this;
    }
    public set highRiskHostNum(highRiskHostNum: number  | undefined) {
        this['high_risk_host_num'] = highRiskHostNum;
    }
    public get highRiskHostNum(): number | undefined {
        return this['high_risk_host_num'];
    }
    public withMediumRiskHostNum(mediumRiskHostNum: number): ShowSecurityCheckStatisticResponse {
        this['medium_risk_host_num'] = mediumRiskHostNum;
        return this;
    }
    public set mediumRiskHostNum(mediumRiskHostNum: number  | undefined) {
        this['medium_risk_host_num'] = mediumRiskHostNum;
    }
    public get mediumRiskHostNum(): number | undefined {
        return this['medium_risk_host_num'];
    }
    public withLowRiskHostNum(lowRiskHostNum: number): ShowSecurityCheckStatisticResponse {
        this['low_risk_host_num'] = lowRiskHostNum;
        return this;
    }
    public set lowRiskHostNum(lowRiskHostNum: number  | undefined) {
        this['low_risk_host_num'] = lowRiskHostNum;
    }
    public get lowRiskHostNum(): number | undefined {
        return this['low_risk_host_num'];
    }
    public withSafeHostNum(safeHostNum: number): ShowSecurityCheckStatisticResponse {
        this['safe_host_num'] = safeHostNum;
        return this;
    }
    public set safeHostNum(safeHostNum: number  | undefined) {
        this['safe_host_num'] = safeHostNum;
    }
    public get safeHostNum(): number | undefined {
        return this['safe_host_num'];
    }
}