import { AlarmRiskInfo } from './AlarmRiskInfo';
import { SecurityRiskResponseAssetRisk } from './SecurityRiskResponseAssetRisk';
import { SecurityRiskResponseBaselineRisk } from './SecurityRiskResponseBaselineRisk';
import { SecurityRiskResponseImageRisk } from './SecurityRiskResponseImageRisk';
import { SecurityRiskResponseSecurityProtectRisk } from './SecurityRiskResponseSecurityProtectRisk';
import { SecurityRiskResponseVulRisk } from './SecurityRiskResponseVulRisk';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecurityRiskResponse extends SdkResponse {
    private 'alarm_risk'?: AlarmRiskInfo;
    private 'baseline_risk'?: SecurityRiskResponseBaselineRisk;
    private 'asset_risk'?: SecurityRiskResponseAssetRisk;
    private 'security_protect_risk'?: SecurityRiskResponseSecurityProtectRisk;
    private 'vul_risk'?: SecurityRiskResponseVulRisk;
    private 'image_risk'?: SecurityRiskResponseImageRisk;
    private 'total_risk_num'?: number;
    public constructor() { 
        super();
    }
    public withAlarmRisk(alarmRisk: AlarmRiskInfo): ListSecurityRiskResponse {
        this['alarm_risk'] = alarmRisk;
        return this;
    }
    public set alarmRisk(alarmRisk: AlarmRiskInfo  | undefined) {
        this['alarm_risk'] = alarmRisk;
    }
    public get alarmRisk(): AlarmRiskInfo | undefined {
        return this['alarm_risk'];
    }
    public withBaselineRisk(baselineRisk: SecurityRiskResponseBaselineRisk): ListSecurityRiskResponse {
        this['baseline_risk'] = baselineRisk;
        return this;
    }
    public set baselineRisk(baselineRisk: SecurityRiskResponseBaselineRisk  | undefined) {
        this['baseline_risk'] = baselineRisk;
    }
    public get baselineRisk(): SecurityRiskResponseBaselineRisk | undefined {
        return this['baseline_risk'];
    }
    public withAssetRisk(assetRisk: SecurityRiskResponseAssetRisk): ListSecurityRiskResponse {
        this['asset_risk'] = assetRisk;
        return this;
    }
    public set assetRisk(assetRisk: SecurityRiskResponseAssetRisk  | undefined) {
        this['asset_risk'] = assetRisk;
    }
    public get assetRisk(): SecurityRiskResponseAssetRisk | undefined {
        return this['asset_risk'];
    }
    public withSecurityProtectRisk(securityProtectRisk: SecurityRiskResponseSecurityProtectRisk): ListSecurityRiskResponse {
        this['security_protect_risk'] = securityProtectRisk;
        return this;
    }
    public set securityProtectRisk(securityProtectRisk: SecurityRiskResponseSecurityProtectRisk  | undefined) {
        this['security_protect_risk'] = securityProtectRisk;
    }
    public get securityProtectRisk(): SecurityRiskResponseSecurityProtectRisk | undefined {
        return this['security_protect_risk'];
    }
    public withVulRisk(vulRisk: SecurityRiskResponseVulRisk): ListSecurityRiskResponse {
        this['vul_risk'] = vulRisk;
        return this;
    }
    public set vulRisk(vulRisk: SecurityRiskResponseVulRisk  | undefined) {
        this['vul_risk'] = vulRisk;
    }
    public get vulRisk(): SecurityRiskResponseVulRisk | undefined {
        return this['vul_risk'];
    }
    public withImageRisk(imageRisk: SecurityRiskResponseImageRisk): ListSecurityRiskResponse {
        this['image_risk'] = imageRisk;
        return this;
    }
    public set imageRisk(imageRisk: SecurityRiskResponseImageRisk  | undefined) {
        this['image_risk'] = imageRisk;
    }
    public get imageRisk(): SecurityRiskResponseImageRisk | undefined {
        return this['image_risk'];
    }
    public withTotalRiskNum(totalRiskNum: number): ListSecurityRiskResponse {
        this['total_risk_num'] = totalRiskNum;
        return this;
    }
    public set totalRiskNum(totalRiskNum: number  | undefined) {
        this['total_risk_num'] = totalRiskNum;
    }
    public get totalRiskNum(): number | undefined {
        return this['total_risk_num'];
    }
}