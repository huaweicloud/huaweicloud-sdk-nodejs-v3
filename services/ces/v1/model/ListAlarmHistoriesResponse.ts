import { AlarmHistoryInfo } from './AlarmHistoryInfo';
import { MetaDataForAlarmHistory } from './MetaDataForAlarmHistory';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAlarmHistoriesResponse extends SdkResponse {
    private 'alarm_histories'?: Array<AlarmHistoryInfo>;
    private 'meta_data'?: MetaDataForAlarmHistory;
    public constructor() { 
        super();
    }
    public withAlarmHistories(alarmHistories: Array<AlarmHistoryInfo>): ListAlarmHistoriesResponse {
        this['alarm_histories'] = alarmHistories;
        return this;
    }
    public set alarmHistories(alarmHistories: Array<AlarmHistoryInfo>  | undefined) {
        this['alarm_histories'] = alarmHistories;
    }
    public get alarmHistories(): Array<AlarmHistoryInfo> | undefined {
        return this['alarm_histories'];
    }
    public withMetaData(metaData: MetaDataForAlarmHistory): ListAlarmHistoriesResponse {
        this['meta_data'] = metaData;
        return this;
    }
    public set metaData(metaData: MetaDataForAlarmHistory  | undefined) {
        this['meta_data'] = metaData;
    }
    public get metaData(): MetaDataForAlarmHistory | undefined {
        return this['meta_data'];
    }
}