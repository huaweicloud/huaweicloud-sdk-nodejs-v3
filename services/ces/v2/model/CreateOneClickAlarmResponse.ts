
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateOneClickAlarmResponse extends SdkResponse {
    private 'one_click_alarm_id'?: string;
    public constructor() { 
        super();
    }
    public withOneClickAlarmId(oneClickAlarmId: string): CreateOneClickAlarmResponse {
        this['one_click_alarm_id'] = oneClickAlarmId;
        return this;
    }
    public set oneClickAlarmId(oneClickAlarmId: string  | undefined) {
        this['one_click_alarm_id'] = oneClickAlarmId;
    }
    public get oneClickAlarmId(): string | undefined {
        return this['one_click_alarm_id'];
    }
}