import { RiskHandleInfoAlarmInfo } from './RiskHandleInfoAlarmInfo';
import { RiskHandleInfoBaseLineInfo } from './RiskHandleInfoBaseLineInfo';
import { RiskHandleInfoFreeReportInfo } from './RiskHandleInfoFreeReportInfo';
import { RiskHandleInfoVulInfo } from './RiskHandleInfoVulInfo';


export class RiskHandleInfo {
    private 'free_report_info'?: RiskHandleInfoFreeReportInfo;
    private 'vul_info'?: RiskHandleInfoVulInfo;
    private 'base_line_info'?: RiskHandleInfoBaseLineInfo;
    private 'alarm_info'?: RiskHandleInfoAlarmInfo;
    public constructor() { 
    }
    public withFreeReportInfo(freeReportInfo: RiskHandleInfoFreeReportInfo): RiskHandleInfo {
        this['free_report_info'] = freeReportInfo;
        return this;
    }
    public set freeReportInfo(freeReportInfo: RiskHandleInfoFreeReportInfo  | undefined) {
        this['free_report_info'] = freeReportInfo;
    }
    public get freeReportInfo(): RiskHandleInfoFreeReportInfo | undefined {
        return this['free_report_info'];
    }
    public withVulInfo(vulInfo: RiskHandleInfoVulInfo): RiskHandleInfo {
        this['vul_info'] = vulInfo;
        return this;
    }
    public set vulInfo(vulInfo: RiskHandleInfoVulInfo  | undefined) {
        this['vul_info'] = vulInfo;
    }
    public get vulInfo(): RiskHandleInfoVulInfo | undefined {
        return this['vul_info'];
    }
    public withBaseLineInfo(baseLineInfo: RiskHandleInfoBaseLineInfo): RiskHandleInfo {
        this['base_line_info'] = baseLineInfo;
        return this;
    }
    public set baseLineInfo(baseLineInfo: RiskHandleInfoBaseLineInfo  | undefined) {
        this['base_line_info'] = baseLineInfo;
    }
    public get baseLineInfo(): RiskHandleInfoBaseLineInfo | undefined {
        return this['base_line_info'];
    }
    public withAlarmInfo(alarmInfo: RiskHandleInfoAlarmInfo): RiskHandleInfo {
        this['alarm_info'] = alarmInfo;
        return this;
    }
    public set alarmInfo(alarmInfo: RiskHandleInfoAlarmInfo  | undefined) {
        this['alarm_info'] = alarmInfo;
    }
    public get alarmInfo(): RiskHandleInfoAlarmInfo | undefined {
        return this['alarm_info'];
    }
}