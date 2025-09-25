
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowProtectStatisticsResponse extends SdkResponse {
    private 'vul_library_update_time'?: number;
    private 'protect_days'?: number;
    private 'threat_library_update_time'?: number;
    private 'vul_detected_total_num'?: number;
    private 'baseline_detected_total_num'?: number;
    private 'finger_scan_total_num'?: number;
    private 'alarm_detected_total_num'?: number;
    private 'ransomware_alarm_detected_total_num'?: number;
    private 'file_alarm_detected_total_num'?: number;
    private 'rasp_alarm_detected_total_num'?: number;
    private 'wtp_alarm_detected_total_num'?: number;
    private 'image_risk_total_num'?: number;
    private 'container_alarm_total_num'?: number;
    private 'container_firewall_policy_total_num'?: number;
    private 'auto_kill_virus_status'?: boolean;
    public constructor() { 
        super();
    }
    public withVulLibraryUpdateTime(vulLibraryUpdateTime: number): ShowProtectStatisticsResponse {
        this['vul_library_update_time'] = vulLibraryUpdateTime;
        return this;
    }
    public set vulLibraryUpdateTime(vulLibraryUpdateTime: number  | undefined) {
        this['vul_library_update_time'] = vulLibraryUpdateTime;
    }
    public get vulLibraryUpdateTime(): number | undefined {
        return this['vul_library_update_time'];
    }
    public withProtectDays(protectDays: number): ShowProtectStatisticsResponse {
        this['protect_days'] = protectDays;
        return this;
    }
    public set protectDays(protectDays: number  | undefined) {
        this['protect_days'] = protectDays;
    }
    public get protectDays(): number | undefined {
        return this['protect_days'];
    }
    public withThreatLibraryUpdateTime(threatLibraryUpdateTime: number): ShowProtectStatisticsResponse {
        this['threat_library_update_time'] = threatLibraryUpdateTime;
        return this;
    }
    public set threatLibraryUpdateTime(threatLibraryUpdateTime: number  | undefined) {
        this['threat_library_update_time'] = threatLibraryUpdateTime;
    }
    public get threatLibraryUpdateTime(): number | undefined {
        return this['threat_library_update_time'];
    }
    public withVulDetectedTotalNum(vulDetectedTotalNum: number): ShowProtectStatisticsResponse {
        this['vul_detected_total_num'] = vulDetectedTotalNum;
        return this;
    }
    public set vulDetectedTotalNum(vulDetectedTotalNum: number  | undefined) {
        this['vul_detected_total_num'] = vulDetectedTotalNum;
    }
    public get vulDetectedTotalNum(): number | undefined {
        return this['vul_detected_total_num'];
    }
    public withBaselineDetectedTotalNum(baselineDetectedTotalNum: number): ShowProtectStatisticsResponse {
        this['baseline_detected_total_num'] = baselineDetectedTotalNum;
        return this;
    }
    public set baselineDetectedTotalNum(baselineDetectedTotalNum: number  | undefined) {
        this['baseline_detected_total_num'] = baselineDetectedTotalNum;
    }
    public get baselineDetectedTotalNum(): number | undefined {
        return this['baseline_detected_total_num'];
    }
    public withFingerScanTotalNum(fingerScanTotalNum: number): ShowProtectStatisticsResponse {
        this['finger_scan_total_num'] = fingerScanTotalNum;
        return this;
    }
    public set fingerScanTotalNum(fingerScanTotalNum: number  | undefined) {
        this['finger_scan_total_num'] = fingerScanTotalNum;
    }
    public get fingerScanTotalNum(): number | undefined {
        return this['finger_scan_total_num'];
    }
    public withAlarmDetectedTotalNum(alarmDetectedTotalNum: number): ShowProtectStatisticsResponse {
        this['alarm_detected_total_num'] = alarmDetectedTotalNum;
        return this;
    }
    public set alarmDetectedTotalNum(alarmDetectedTotalNum: number  | undefined) {
        this['alarm_detected_total_num'] = alarmDetectedTotalNum;
    }
    public get alarmDetectedTotalNum(): number | undefined {
        return this['alarm_detected_total_num'];
    }
    public withRansomwareAlarmDetectedTotalNum(ransomwareAlarmDetectedTotalNum: number): ShowProtectStatisticsResponse {
        this['ransomware_alarm_detected_total_num'] = ransomwareAlarmDetectedTotalNum;
        return this;
    }
    public set ransomwareAlarmDetectedTotalNum(ransomwareAlarmDetectedTotalNum: number  | undefined) {
        this['ransomware_alarm_detected_total_num'] = ransomwareAlarmDetectedTotalNum;
    }
    public get ransomwareAlarmDetectedTotalNum(): number | undefined {
        return this['ransomware_alarm_detected_total_num'];
    }
    public withFileAlarmDetectedTotalNum(fileAlarmDetectedTotalNum: number): ShowProtectStatisticsResponse {
        this['file_alarm_detected_total_num'] = fileAlarmDetectedTotalNum;
        return this;
    }
    public set fileAlarmDetectedTotalNum(fileAlarmDetectedTotalNum: number  | undefined) {
        this['file_alarm_detected_total_num'] = fileAlarmDetectedTotalNum;
    }
    public get fileAlarmDetectedTotalNum(): number | undefined {
        return this['file_alarm_detected_total_num'];
    }
    public withRaspAlarmDetectedTotalNum(raspAlarmDetectedTotalNum: number): ShowProtectStatisticsResponse {
        this['rasp_alarm_detected_total_num'] = raspAlarmDetectedTotalNum;
        return this;
    }
    public set raspAlarmDetectedTotalNum(raspAlarmDetectedTotalNum: number  | undefined) {
        this['rasp_alarm_detected_total_num'] = raspAlarmDetectedTotalNum;
    }
    public get raspAlarmDetectedTotalNum(): number | undefined {
        return this['rasp_alarm_detected_total_num'];
    }
    public withWtpAlarmDetectedTotalNum(wtpAlarmDetectedTotalNum: number): ShowProtectStatisticsResponse {
        this['wtp_alarm_detected_total_num'] = wtpAlarmDetectedTotalNum;
        return this;
    }
    public set wtpAlarmDetectedTotalNum(wtpAlarmDetectedTotalNum: number  | undefined) {
        this['wtp_alarm_detected_total_num'] = wtpAlarmDetectedTotalNum;
    }
    public get wtpAlarmDetectedTotalNum(): number | undefined {
        return this['wtp_alarm_detected_total_num'];
    }
    public withImageRiskTotalNum(imageRiskTotalNum: number): ShowProtectStatisticsResponse {
        this['image_risk_total_num'] = imageRiskTotalNum;
        return this;
    }
    public set imageRiskTotalNum(imageRiskTotalNum: number  | undefined) {
        this['image_risk_total_num'] = imageRiskTotalNum;
    }
    public get imageRiskTotalNum(): number | undefined {
        return this['image_risk_total_num'];
    }
    public withContainerAlarmTotalNum(containerAlarmTotalNum: number): ShowProtectStatisticsResponse {
        this['container_alarm_total_num'] = containerAlarmTotalNum;
        return this;
    }
    public set containerAlarmTotalNum(containerAlarmTotalNum: number  | undefined) {
        this['container_alarm_total_num'] = containerAlarmTotalNum;
    }
    public get containerAlarmTotalNum(): number | undefined {
        return this['container_alarm_total_num'];
    }
    public withContainerFirewallPolicyTotalNum(containerFirewallPolicyTotalNum: number): ShowProtectStatisticsResponse {
        this['container_firewall_policy_total_num'] = containerFirewallPolicyTotalNum;
        return this;
    }
    public set containerFirewallPolicyTotalNum(containerFirewallPolicyTotalNum: number  | undefined) {
        this['container_firewall_policy_total_num'] = containerFirewallPolicyTotalNum;
    }
    public get containerFirewallPolicyTotalNum(): number | undefined {
        return this['container_firewall_policy_total_num'];
    }
    public withAutoKillVirusStatus(autoKillVirusStatus: boolean): ShowProtectStatisticsResponse {
        this['auto_kill_virus_status'] = autoKillVirusStatus;
        return this;
    }
    public set autoKillVirusStatus(autoKillVirusStatus: boolean  | undefined) {
        this['auto_kill_virus_status'] = autoKillVirusStatus;
    }
    public get autoKillVirusStatus(): boolean | undefined {
        return this['auto_kill_virus_status'];
    }
}