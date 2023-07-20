import { BatchSetAlarmNotifyInfo } from './BatchSetAlarmNotifyInfo';
import { SelectedSetAlarmTaskReq } from './SelectedSetAlarmTaskReq';


export class BatchImportSmnInfoReq {
    public jobs?: Array<SelectedSetAlarmTaskReq>;
    private 'alarm_notify_info'?: BatchSetAlarmNotifyInfo;
    public constructor(jobs?: Array<SelectedSetAlarmTaskReq>, alarmNotifyInfo?: BatchSetAlarmNotifyInfo) { 
        this['jobs'] = jobs;
        this['alarm_notify_info'] = alarmNotifyInfo;
    }
    public withJobs(jobs: Array<SelectedSetAlarmTaskReq>): BatchImportSmnInfoReq {
        this['jobs'] = jobs;
        return this;
    }
    public withAlarmNotifyInfo(alarmNotifyInfo: BatchSetAlarmNotifyInfo): BatchImportSmnInfoReq {
        this['alarm_notify_info'] = alarmNotifyInfo;
        return this;
    }
    public set alarmNotifyInfo(alarmNotifyInfo: BatchSetAlarmNotifyInfo  | undefined) {
        this['alarm_notify_info'] = alarmNotifyInfo;
    }
    public get alarmNotifyInfo(): BatchSetAlarmNotifyInfo | undefined {
        return this['alarm_notify_info'];
    }
}