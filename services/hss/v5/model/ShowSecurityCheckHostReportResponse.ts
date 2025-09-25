import { AppResponseInfo } from './AppResponseInfo';
import { SecurityCheckHostResultResponseInfo } from './SecurityCheckHostResultResponseInfo';
import { SecurityCheckRiskEventInfo } from './SecurityCheckRiskEventInfo';
import { SecurityCheckRiskNumInfo } from './SecurityCheckRiskNumInfo';
import { SecurityCheckVulInfo } from './SecurityCheckVulInfo';
import { SecurityConfigInfo } from './SecurityConfigInfo';
import { SecurityConfigItemInfo } from './SecurityConfigItemInfo';
import { SecurityConfigPortInfo } from './SecurityConfigPortInfo';
import { SecurityConfigPwdPolicyInfo } from './SecurityConfigPwdPolicyInfo';
import { SecurityConfigUserChangeInfo } from './SecurityConfigUserChangeInfo';
import { SecurityConfigWeakPwdInfo } from './SecurityConfigWeakPwdInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSecurityCheckHostReportResponse extends SdkResponse {
    private 'host_result'?: SecurityCheckHostResultResponseInfo;
    private 'host_status'?: string;
    private 'scan_period_start'?: number;
    private 'scan_period_end'?: number;
    private 'risk_rating'?: number;
    public severity?: string;
    private 'risk_num'?: number;
    private 'scan_time'?: number;
    public free?: boolean;
    private 'event_num_info'?: SecurityCheckRiskNumInfo;
    private 'vul_num_info'?: SecurityCheckRiskNumInfo;
    private 'baseline_num_info'?: SecurityCheckRiskNumInfo;
    private 'asset_num_info'?: SecurityCheckRiskNumInfo;
    private 'asset_change_num'?: number;
    private 'app_num'?: number;
    private 'port_num'?: number;
    private 'event_list'?: Array<SecurityCheckRiskEventInfo>;
    private 'vul_list'?: Array<SecurityCheckVulInfo>;
    private 'security_config_list'?: Array<SecurityConfigInfo>;
    private 'security_config_item_list'?: Array<SecurityConfigItemInfo>;
    private 'pwd_policy_list'?: Array<SecurityConfigPwdPolicyInfo>;
    private 'weak_pwd_list'?: Array<SecurityConfigWeakPwdInfo>;
    private 'user_change_list'?: Array<SecurityConfigUserChangeInfo>;
    private 'port_list'?: Array<SecurityConfigPortInfo>;
    private 'app_list'?: Array<AppResponseInfo>;
    public constructor() { 
        super();
    }
    public withHostResult(hostResult: SecurityCheckHostResultResponseInfo): ShowSecurityCheckHostReportResponse {
        this['host_result'] = hostResult;
        return this;
    }
    public set hostResult(hostResult: SecurityCheckHostResultResponseInfo  | undefined) {
        this['host_result'] = hostResult;
    }
    public get hostResult(): SecurityCheckHostResultResponseInfo | undefined {
        return this['host_result'];
    }
    public withHostStatus(hostStatus: string): ShowSecurityCheckHostReportResponse {
        this['host_status'] = hostStatus;
        return this;
    }
    public set hostStatus(hostStatus: string  | undefined) {
        this['host_status'] = hostStatus;
    }
    public get hostStatus(): string | undefined {
        return this['host_status'];
    }
    public withScanPeriodStart(scanPeriodStart: number): ShowSecurityCheckHostReportResponse {
        this['scan_period_start'] = scanPeriodStart;
        return this;
    }
    public set scanPeriodStart(scanPeriodStart: number  | undefined) {
        this['scan_period_start'] = scanPeriodStart;
    }
    public get scanPeriodStart(): number | undefined {
        return this['scan_period_start'];
    }
    public withScanPeriodEnd(scanPeriodEnd: number): ShowSecurityCheckHostReportResponse {
        this['scan_period_end'] = scanPeriodEnd;
        return this;
    }
    public set scanPeriodEnd(scanPeriodEnd: number  | undefined) {
        this['scan_period_end'] = scanPeriodEnd;
    }
    public get scanPeriodEnd(): number | undefined {
        return this['scan_period_end'];
    }
    public withRiskRating(riskRating: number): ShowSecurityCheckHostReportResponse {
        this['risk_rating'] = riskRating;
        return this;
    }
    public set riskRating(riskRating: number  | undefined) {
        this['risk_rating'] = riskRating;
    }
    public get riskRating(): number | undefined {
        return this['risk_rating'];
    }
    public withSeverity(severity: string): ShowSecurityCheckHostReportResponse {
        this['severity'] = severity;
        return this;
    }
    public withRiskNum(riskNum: number): ShowSecurityCheckHostReportResponse {
        this['risk_num'] = riskNum;
        return this;
    }
    public set riskNum(riskNum: number  | undefined) {
        this['risk_num'] = riskNum;
    }
    public get riskNum(): number | undefined {
        return this['risk_num'];
    }
    public withScanTime(scanTime: number): ShowSecurityCheckHostReportResponse {
        this['scan_time'] = scanTime;
        return this;
    }
    public set scanTime(scanTime: number  | undefined) {
        this['scan_time'] = scanTime;
    }
    public get scanTime(): number | undefined {
        return this['scan_time'];
    }
    public withFree(free: boolean): ShowSecurityCheckHostReportResponse {
        this['free'] = free;
        return this;
    }
    public withEventNumInfo(eventNumInfo: SecurityCheckRiskNumInfo): ShowSecurityCheckHostReportResponse {
        this['event_num_info'] = eventNumInfo;
        return this;
    }
    public set eventNumInfo(eventNumInfo: SecurityCheckRiskNumInfo  | undefined) {
        this['event_num_info'] = eventNumInfo;
    }
    public get eventNumInfo(): SecurityCheckRiskNumInfo | undefined {
        return this['event_num_info'];
    }
    public withVulNumInfo(vulNumInfo: SecurityCheckRiskNumInfo): ShowSecurityCheckHostReportResponse {
        this['vul_num_info'] = vulNumInfo;
        return this;
    }
    public set vulNumInfo(vulNumInfo: SecurityCheckRiskNumInfo  | undefined) {
        this['vul_num_info'] = vulNumInfo;
    }
    public get vulNumInfo(): SecurityCheckRiskNumInfo | undefined {
        return this['vul_num_info'];
    }
    public withBaselineNumInfo(baselineNumInfo: SecurityCheckRiskNumInfo): ShowSecurityCheckHostReportResponse {
        this['baseline_num_info'] = baselineNumInfo;
        return this;
    }
    public set baselineNumInfo(baselineNumInfo: SecurityCheckRiskNumInfo  | undefined) {
        this['baseline_num_info'] = baselineNumInfo;
    }
    public get baselineNumInfo(): SecurityCheckRiskNumInfo | undefined {
        return this['baseline_num_info'];
    }
    public withAssetNumInfo(assetNumInfo: SecurityCheckRiskNumInfo): ShowSecurityCheckHostReportResponse {
        this['asset_num_info'] = assetNumInfo;
        return this;
    }
    public set assetNumInfo(assetNumInfo: SecurityCheckRiskNumInfo  | undefined) {
        this['asset_num_info'] = assetNumInfo;
    }
    public get assetNumInfo(): SecurityCheckRiskNumInfo | undefined {
        return this['asset_num_info'];
    }
    public withAssetChangeNum(assetChangeNum: number): ShowSecurityCheckHostReportResponse {
        this['asset_change_num'] = assetChangeNum;
        return this;
    }
    public set assetChangeNum(assetChangeNum: number  | undefined) {
        this['asset_change_num'] = assetChangeNum;
    }
    public get assetChangeNum(): number | undefined {
        return this['asset_change_num'];
    }
    public withAppNum(appNum: number): ShowSecurityCheckHostReportResponse {
        this['app_num'] = appNum;
        return this;
    }
    public set appNum(appNum: number  | undefined) {
        this['app_num'] = appNum;
    }
    public get appNum(): number | undefined {
        return this['app_num'];
    }
    public withPortNum(portNum: number): ShowSecurityCheckHostReportResponse {
        this['port_num'] = portNum;
        return this;
    }
    public set portNum(portNum: number  | undefined) {
        this['port_num'] = portNum;
    }
    public get portNum(): number | undefined {
        return this['port_num'];
    }
    public withEventList(eventList: Array<SecurityCheckRiskEventInfo>): ShowSecurityCheckHostReportResponse {
        this['event_list'] = eventList;
        return this;
    }
    public set eventList(eventList: Array<SecurityCheckRiskEventInfo>  | undefined) {
        this['event_list'] = eventList;
    }
    public get eventList(): Array<SecurityCheckRiskEventInfo> | undefined {
        return this['event_list'];
    }
    public withVulList(vulList: Array<SecurityCheckVulInfo>): ShowSecurityCheckHostReportResponse {
        this['vul_list'] = vulList;
        return this;
    }
    public set vulList(vulList: Array<SecurityCheckVulInfo>  | undefined) {
        this['vul_list'] = vulList;
    }
    public get vulList(): Array<SecurityCheckVulInfo> | undefined {
        return this['vul_list'];
    }
    public withSecurityConfigList(securityConfigList: Array<SecurityConfigInfo>): ShowSecurityCheckHostReportResponse {
        this['security_config_list'] = securityConfigList;
        return this;
    }
    public set securityConfigList(securityConfigList: Array<SecurityConfigInfo>  | undefined) {
        this['security_config_list'] = securityConfigList;
    }
    public get securityConfigList(): Array<SecurityConfigInfo> | undefined {
        return this['security_config_list'];
    }
    public withSecurityConfigItemList(securityConfigItemList: Array<SecurityConfigItemInfo>): ShowSecurityCheckHostReportResponse {
        this['security_config_item_list'] = securityConfigItemList;
        return this;
    }
    public set securityConfigItemList(securityConfigItemList: Array<SecurityConfigItemInfo>  | undefined) {
        this['security_config_item_list'] = securityConfigItemList;
    }
    public get securityConfigItemList(): Array<SecurityConfigItemInfo> | undefined {
        return this['security_config_item_list'];
    }
    public withPwdPolicyList(pwdPolicyList: Array<SecurityConfigPwdPolicyInfo>): ShowSecurityCheckHostReportResponse {
        this['pwd_policy_list'] = pwdPolicyList;
        return this;
    }
    public set pwdPolicyList(pwdPolicyList: Array<SecurityConfigPwdPolicyInfo>  | undefined) {
        this['pwd_policy_list'] = pwdPolicyList;
    }
    public get pwdPolicyList(): Array<SecurityConfigPwdPolicyInfo> | undefined {
        return this['pwd_policy_list'];
    }
    public withWeakPwdList(weakPwdList: Array<SecurityConfigWeakPwdInfo>): ShowSecurityCheckHostReportResponse {
        this['weak_pwd_list'] = weakPwdList;
        return this;
    }
    public set weakPwdList(weakPwdList: Array<SecurityConfigWeakPwdInfo>  | undefined) {
        this['weak_pwd_list'] = weakPwdList;
    }
    public get weakPwdList(): Array<SecurityConfigWeakPwdInfo> | undefined {
        return this['weak_pwd_list'];
    }
    public withUserChangeList(userChangeList: Array<SecurityConfigUserChangeInfo>): ShowSecurityCheckHostReportResponse {
        this['user_change_list'] = userChangeList;
        return this;
    }
    public set userChangeList(userChangeList: Array<SecurityConfigUserChangeInfo>  | undefined) {
        this['user_change_list'] = userChangeList;
    }
    public get userChangeList(): Array<SecurityConfigUserChangeInfo> | undefined {
        return this['user_change_list'];
    }
    public withPortList(portList: Array<SecurityConfigPortInfo>): ShowSecurityCheckHostReportResponse {
        this['port_list'] = portList;
        return this;
    }
    public set portList(portList: Array<SecurityConfigPortInfo>  | undefined) {
        this['port_list'] = portList;
    }
    public get portList(): Array<SecurityConfigPortInfo> | undefined {
        return this['port_list'];
    }
    public withAppList(appList: Array<AppResponseInfo>): ShowSecurityCheckHostReportResponse {
        this['app_list'] = appList;
        return this;
    }
    public set appList(appList: Array<AppResponseInfo>  | undefined) {
        this['app_list'] = appList;
    }
    public get appList(): Array<AppResponseInfo> | undefined {
        return this['app_list'];
    }
}