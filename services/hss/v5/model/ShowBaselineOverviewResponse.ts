import { HostRiskNumInfoResponseInfo } from './HostRiskNumInfoResponseInfo';
import { HostWeakPwdRiskNumInfoResponseInfo } from './HostWeakPwdRiskNumInfoResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBaselineOverviewResponse extends SdkResponse {
    private 'scan_time'?: number;
    private 'host_num'?: number;
    private 'failed_host_num'?: number;
    private 'check_type_num'?: number;
    private 'check_rule_num'?: number;
    private 'check_rule_pass_rate'?: number;
    private 'cn_standard_check_rule_pass_rate'?: number;
    private 'hw_standard_check_rule_pass_rate'?: number;
    private 'check_rule_failed_num'?: number;
    private 'check_rule_high_risk'?: number;
    private 'check_rule_medium_risk'?: number;
    private 'check_rule_low_risk'?: number;
    private 'weak_pwd_total_host'?: number;
    private 'weak_pwd_risk'?: number;
    private 'weak_pwd_normal'?: number;
    private 'weak_pwd_not_protected'?: number;
    private 'host_risks'?: Array<HostRiskNumInfoResponseInfo>;
    private 'weak_pwd_risk_hosts'?: Array<HostWeakPwdRiskNumInfoResponseInfo>;
    public constructor() { 
        super();
    }
    public withScanTime(scanTime: number): ShowBaselineOverviewResponse {
        this['scan_time'] = scanTime;
        return this;
    }
    public set scanTime(scanTime: number  | undefined) {
        this['scan_time'] = scanTime;
    }
    public get scanTime(): number | undefined {
        return this['scan_time'];
    }
    public withHostNum(hostNum: number): ShowBaselineOverviewResponse {
        this['host_num'] = hostNum;
        return this;
    }
    public set hostNum(hostNum: number  | undefined) {
        this['host_num'] = hostNum;
    }
    public get hostNum(): number | undefined {
        return this['host_num'];
    }
    public withFailedHostNum(failedHostNum: number): ShowBaselineOverviewResponse {
        this['failed_host_num'] = failedHostNum;
        return this;
    }
    public set failedHostNum(failedHostNum: number  | undefined) {
        this['failed_host_num'] = failedHostNum;
    }
    public get failedHostNum(): number | undefined {
        return this['failed_host_num'];
    }
    public withCheckTypeNum(checkTypeNum: number): ShowBaselineOverviewResponse {
        this['check_type_num'] = checkTypeNum;
        return this;
    }
    public set checkTypeNum(checkTypeNum: number  | undefined) {
        this['check_type_num'] = checkTypeNum;
    }
    public get checkTypeNum(): number | undefined {
        return this['check_type_num'];
    }
    public withCheckRuleNum(checkRuleNum: number): ShowBaselineOverviewResponse {
        this['check_rule_num'] = checkRuleNum;
        return this;
    }
    public set checkRuleNum(checkRuleNum: number  | undefined) {
        this['check_rule_num'] = checkRuleNum;
    }
    public get checkRuleNum(): number | undefined {
        return this['check_rule_num'];
    }
    public withCheckRulePassRate(checkRulePassRate: number): ShowBaselineOverviewResponse {
        this['check_rule_pass_rate'] = checkRulePassRate;
        return this;
    }
    public set checkRulePassRate(checkRulePassRate: number  | undefined) {
        this['check_rule_pass_rate'] = checkRulePassRate;
    }
    public get checkRulePassRate(): number | undefined {
        return this['check_rule_pass_rate'];
    }
    public withCnStandardCheckRulePassRate(cnStandardCheckRulePassRate: number): ShowBaselineOverviewResponse {
        this['cn_standard_check_rule_pass_rate'] = cnStandardCheckRulePassRate;
        return this;
    }
    public set cnStandardCheckRulePassRate(cnStandardCheckRulePassRate: number  | undefined) {
        this['cn_standard_check_rule_pass_rate'] = cnStandardCheckRulePassRate;
    }
    public get cnStandardCheckRulePassRate(): number | undefined {
        return this['cn_standard_check_rule_pass_rate'];
    }
    public withHwStandardCheckRulePassRate(hwStandardCheckRulePassRate: number): ShowBaselineOverviewResponse {
        this['hw_standard_check_rule_pass_rate'] = hwStandardCheckRulePassRate;
        return this;
    }
    public set hwStandardCheckRulePassRate(hwStandardCheckRulePassRate: number  | undefined) {
        this['hw_standard_check_rule_pass_rate'] = hwStandardCheckRulePassRate;
    }
    public get hwStandardCheckRulePassRate(): number | undefined {
        return this['hw_standard_check_rule_pass_rate'];
    }
    public withCheckRuleFailedNum(checkRuleFailedNum: number): ShowBaselineOverviewResponse {
        this['check_rule_failed_num'] = checkRuleFailedNum;
        return this;
    }
    public set checkRuleFailedNum(checkRuleFailedNum: number  | undefined) {
        this['check_rule_failed_num'] = checkRuleFailedNum;
    }
    public get checkRuleFailedNum(): number | undefined {
        return this['check_rule_failed_num'];
    }
    public withCheckRuleHighRisk(checkRuleHighRisk: number): ShowBaselineOverviewResponse {
        this['check_rule_high_risk'] = checkRuleHighRisk;
        return this;
    }
    public set checkRuleHighRisk(checkRuleHighRisk: number  | undefined) {
        this['check_rule_high_risk'] = checkRuleHighRisk;
    }
    public get checkRuleHighRisk(): number | undefined {
        return this['check_rule_high_risk'];
    }
    public withCheckRuleMediumRisk(checkRuleMediumRisk: number): ShowBaselineOverviewResponse {
        this['check_rule_medium_risk'] = checkRuleMediumRisk;
        return this;
    }
    public set checkRuleMediumRisk(checkRuleMediumRisk: number  | undefined) {
        this['check_rule_medium_risk'] = checkRuleMediumRisk;
    }
    public get checkRuleMediumRisk(): number | undefined {
        return this['check_rule_medium_risk'];
    }
    public withCheckRuleLowRisk(checkRuleLowRisk: number): ShowBaselineOverviewResponse {
        this['check_rule_low_risk'] = checkRuleLowRisk;
        return this;
    }
    public set checkRuleLowRisk(checkRuleLowRisk: number  | undefined) {
        this['check_rule_low_risk'] = checkRuleLowRisk;
    }
    public get checkRuleLowRisk(): number | undefined {
        return this['check_rule_low_risk'];
    }
    public withWeakPwdTotalHost(weakPwdTotalHost: number): ShowBaselineOverviewResponse {
        this['weak_pwd_total_host'] = weakPwdTotalHost;
        return this;
    }
    public set weakPwdTotalHost(weakPwdTotalHost: number  | undefined) {
        this['weak_pwd_total_host'] = weakPwdTotalHost;
    }
    public get weakPwdTotalHost(): number | undefined {
        return this['weak_pwd_total_host'];
    }
    public withWeakPwdRisk(weakPwdRisk: number): ShowBaselineOverviewResponse {
        this['weak_pwd_risk'] = weakPwdRisk;
        return this;
    }
    public set weakPwdRisk(weakPwdRisk: number  | undefined) {
        this['weak_pwd_risk'] = weakPwdRisk;
    }
    public get weakPwdRisk(): number | undefined {
        return this['weak_pwd_risk'];
    }
    public withWeakPwdNormal(weakPwdNormal: number): ShowBaselineOverviewResponse {
        this['weak_pwd_normal'] = weakPwdNormal;
        return this;
    }
    public set weakPwdNormal(weakPwdNormal: number  | undefined) {
        this['weak_pwd_normal'] = weakPwdNormal;
    }
    public get weakPwdNormal(): number | undefined {
        return this['weak_pwd_normal'];
    }
    public withWeakPwdNotProtected(weakPwdNotProtected: number): ShowBaselineOverviewResponse {
        this['weak_pwd_not_protected'] = weakPwdNotProtected;
        return this;
    }
    public set weakPwdNotProtected(weakPwdNotProtected: number  | undefined) {
        this['weak_pwd_not_protected'] = weakPwdNotProtected;
    }
    public get weakPwdNotProtected(): number | undefined {
        return this['weak_pwd_not_protected'];
    }
    public withHostRisks(hostRisks: Array<HostRiskNumInfoResponseInfo>): ShowBaselineOverviewResponse {
        this['host_risks'] = hostRisks;
        return this;
    }
    public set hostRisks(hostRisks: Array<HostRiskNumInfoResponseInfo>  | undefined) {
        this['host_risks'] = hostRisks;
    }
    public get hostRisks(): Array<HostRiskNumInfoResponseInfo> | undefined {
        return this['host_risks'];
    }
    public withWeakPwdRiskHosts(weakPwdRiskHosts: Array<HostWeakPwdRiskNumInfoResponseInfo>): ShowBaselineOverviewResponse {
        this['weak_pwd_risk_hosts'] = weakPwdRiskHosts;
        return this;
    }
    public set weakPwdRiskHosts(weakPwdRiskHosts: Array<HostWeakPwdRiskNumInfoResponseInfo>  | undefined) {
        this['weak_pwd_risk_hosts'] = weakPwdRiskHosts;
    }
    public get weakPwdRiskHosts(): Array<HostWeakPwdRiskNumInfoResponseInfo> | undefined {
        return this['weak_pwd_risk_hosts'];
    }
}