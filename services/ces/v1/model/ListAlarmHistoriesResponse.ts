import { AlarmHistoryInfoResp } from './AlarmHistoryInfoResp';
import { MetaDataForAlarmHistoryResp } from './MetaDataForAlarmHistoryResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAlarmHistoriesResponse extends SdkResponse {
    private 'alarm_histories'?: Array<AlarmHistoryInfoResp>;
    private 'meta_data'?: MetaDataForAlarmHistoryResp;
    public constructor() { 
        super();
    }
    public withAlarmHistories(alarmHistories: Array<AlarmHistoryInfoResp>): ListAlarmHistoriesResponse {
        this['alarm_histories'] = alarmHistories;
        return this;
    }
    public set alarmHistories(alarmHistories: Array<AlarmHistoryInfoResp>  | undefined) {
        this['alarm_histories'] = alarmHistories;
    }
    public get alarmHistories(): Array<AlarmHistoryInfoResp> | undefined {
        return this['alarm_histories'];
    }
    public withMetaData(metaData: MetaDataForAlarmHistoryResp): ListAlarmHistoriesResponse {
        this['meta_data'] = metaData;
        return this;
    }
    public set metaData(metaData: MetaDataForAlarmHistoryResp  | undefined) {
        this['meta_data'] = metaData;
    }
    public get metaData(): MetaDataForAlarmHistoryResp | undefined {
        return this['meta_data'];
    }
}