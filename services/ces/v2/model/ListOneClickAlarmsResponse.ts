import { ListOneClickAlarmsRespOneClickAlarms } from './ListOneClickAlarmsRespOneClickAlarms';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListOneClickAlarmsResponse extends SdkResponse {
    private 'one_click_alarms'?: Array<ListOneClickAlarmsRespOneClickAlarms>;
    public constructor() { 
        super();
    }
    public withOneClickAlarms(oneClickAlarms: Array<ListOneClickAlarmsRespOneClickAlarms>): ListOneClickAlarmsResponse {
        this['one_click_alarms'] = oneClickAlarms;
        return this;
    }
    public set oneClickAlarms(oneClickAlarms: Array<ListOneClickAlarmsRespOneClickAlarms>  | undefined) {
        this['one_click_alarms'] = oneClickAlarms;
    }
    public get oneClickAlarms(): Array<ListOneClickAlarmsRespOneClickAlarms> | undefined {
        return this['one_click_alarms'];
    }
}