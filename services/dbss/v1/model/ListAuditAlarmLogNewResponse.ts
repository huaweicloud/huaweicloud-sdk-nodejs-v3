import { AlarmLogResponseNewAlarmLog } from './AlarmLogResponseNewAlarmLog';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAuditAlarmLogNewResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'alarm_log'?: Array<AlarmLogResponseNewAlarmLog>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListAuditAlarmLogNewResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withAlarmLog(alarmLog: Array<AlarmLogResponseNewAlarmLog>): ListAuditAlarmLogNewResponse {
        this['alarm_log'] = alarmLog;
        return this;
    }
    public set alarmLog(alarmLog: Array<AlarmLogResponseNewAlarmLog>  | undefined) {
        this['alarm_log'] = alarmLog;
    }
    public get alarmLog(): Array<AlarmLogResponseNewAlarmLog> | undefined {
        return this['alarm_log'];
    }
}