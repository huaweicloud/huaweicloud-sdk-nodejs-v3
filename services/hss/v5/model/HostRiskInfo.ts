

export class HostRiskInfo {
    private 'baseline_risk_num'?: number;
    private 'vul_total_num'?: number;
    private 'critical_vul_num'?: number;
    private 'alarm_total_num'?: number;
    private 'critical_alarm_num'?: number;
    private 'unhandled_suspicious_process_num'?: number;
    public constructor() { 
    }
    public withBaselineRiskNum(baselineRiskNum: number): HostRiskInfo {
        this['baseline_risk_num'] = baselineRiskNum;
        return this;
    }
    public set baselineRiskNum(baselineRiskNum: number  | undefined) {
        this['baseline_risk_num'] = baselineRiskNum;
    }
    public get baselineRiskNum(): number | undefined {
        return this['baseline_risk_num'];
    }
    public withVulTotalNum(vulTotalNum: number): HostRiskInfo {
        this['vul_total_num'] = vulTotalNum;
        return this;
    }
    public set vulTotalNum(vulTotalNum: number  | undefined) {
        this['vul_total_num'] = vulTotalNum;
    }
    public get vulTotalNum(): number | undefined {
        return this['vul_total_num'];
    }
    public withCriticalVulNum(criticalVulNum: number): HostRiskInfo {
        this['critical_vul_num'] = criticalVulNum;
        return this;
    }
    public set criticalVulNum(criticalVulNum: number  | undefined) {
        this['critical_vul_num'] = criticalVulNum;
    }
    public get criticalVulNum(): number | undefined {
        return this['critical_vul_num'];
    }
    public withAlarmTotalNum(alarmTotalNum: number): HostRiskInfo {
        this['alarm_total_num'] = alarmTotalNum;
        return this;
    }
    public set alarmTotalNum(alarmTotalNum: number  | undefined) {
        this['alarm_total_num'] = alarmTotalNum;
    }
    public get alarmTotalNum(): number | undefined {
        return this['alarm_total_num'];
    }
    public withCriticalAlarmNum(criticalAlarmNum: number): HostRiskInfo {
        this['critical_alarm_num'] = criticalAlarmNum;
        return this;
    }
    public set criticalAlarmNum(criticalAlarmNum: number  | undefined) {
        this['critical_alarm_num'] = criticalAlarmNum;
    }
    public get criticalAlarmNum(): number | undefined {
        return this['critical_alarm_num'];
    }
    public withUnhandledSuspiciousProcessNum(unhandledSuspiciousProcessNum: number): HostRiskInfo {
        this['unhandled_suspicious_process_num'] = unhandledSuspiciousProcessNum;
        return this;
    }
    public set unhandledSuspiciousProcessNum(unhandledSuspiciousProcessNum: number  | undefined) {
        this['unhandled_suspicious_process_num'] = unhandledSuspiciousProcessNum;
    }
    public get unhandledSuspiciousProcessNum(): number | undefined {
        return this['unhandled_suspicious_process_num'];
    }
}