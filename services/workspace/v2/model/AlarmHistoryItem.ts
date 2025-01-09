import { AdditionalInfo } from './AdditionalInfo';
import { AlarmCondition } from './AlarmCondition';
import { AlarmMetric } from './AlarmMetric';
import { DataPointInfo } from './DataPointInfo';


export class AlarmHistoryItem {
    private 'record_id'?: string;
    private 'alarm_id'?: string;
    public name?: string;
    public status?: string;
    public type?: string;
    public level?: number;
    private 'begin_time'?: string;
    public metric?: AlarmMetric;
    public condition?: AlarmCondition;
    private 'additional_info'?: AdditionalInfo;
    private 'data_points'?: Array<DataPointInfo>;
    public constructor() { 
    }
    public withRecordId(recordId: string): AlarmHistoryItem {
        this['record_id'] = recordId;
        return this;
    }
    public set recordId(recordId: string  | undefined) {
        this['record_id'] = recordId;
    }
    public get recordId(): string | undefined {
        return this['record_id'];
    }
    public withAlarmId(alarmId: string): AlarmHistoryItem {
        this['alarm_id'] = alarmId;
        return this;
    }
    public set alarmId(alarmId: string  | undefined) {
        this['alarm_id'] = alarmId;
    }
    public get alarmId(): string | undefined {
        return this['alarm_id'];
    }
    public withName(name: string): AlarmHistoryItem {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): AlarmHistoryItem {
        this['status'] = status;
        return this;
    }
    public withType(type: string): AlarmHistoryItem {
        this['type'] = type;
        return this;
    }
    public withLevel(level: number): AlarmHistoryItem {
        this['level'] = level;
        return this;
    }
    public withBeginTime(beginTime: string): AlarmHistoryItem {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withMetric(metric: AlarmMetric): AlarmHistoryItem {
        this['metric'] = metric;
        return this;
    }
    public withCondition(condition: AlarmCondition): AlarmHistoryItem {
        this['condition'] = condition;
        return this;
    }
    public withAdditionalInfo(additionalInfo: AdditionalInfo): AlarmHistoryItem {
        this['additional_info'] = additionalInfo;
        return this;
    }
    public set additionalInfo(additionalInfo: AdditionalInfo  | undefined) {
        this['additional_info'] = additionalInfo;
    }
    public get additionalInfo(): AdditionalInfo | undefined {
        return this['additional_info'];
    }
    public withDataPoints(dataPoints: Array<DataPointInfo>): AlarmHistoryItem {
        this['data_points'] = dataPoints;
        return this;
    }
    public set dataPoints(dataPoints: Array<DataPointInfo>  | undefined) {
        this['data_points'] = dataPoints;
    }
    public get dataPoints(): Array<DataPointInfo> | undefined {
        return this['data_points'];
    }
}