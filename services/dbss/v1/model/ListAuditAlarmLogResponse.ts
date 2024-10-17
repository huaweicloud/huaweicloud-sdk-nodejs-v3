import { AlarmLogResponseAlarmLog } from './AlarmLogResponseAlarmLog';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAuditAlarmLogResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'alarm_log'?: Array<AlarmLogResponseAlarmLog>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListAuditAlarmLogResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withAlarmLog(alarmLog: Array<AlarmLogResponseAlarmLog>): ListAuditAlarmLogResponse {
        this['alarm_log'] = alarmLog;
        return this;
    }
    public set alarmLog(alarmLog: Array<AlarmLogResponseAlarmLog>  | undefined) {
        this['alarm_log'] = alarmLog;
    }
    public get alarmLog(): Array<AlarmLogResponseAlarmLog> | undefined {
        return this['alarm_log'];
    }
}