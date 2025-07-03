

export class AlarmNotifyListRequest {
    public page?: number;
    private 'page_size'?: number;
    private 'alarm_data_id'?: number;
    public region?: string;
    public constructor(alarmDataId?: number, region?: string) { 
        this['alarm_data_id'] = alarmDataId;
        this['region'] = region;
    }
    public withPage(page: number): AlarmNotifyListRequest {
        this['page'] = page;
        return this;
    }
    public withPageSize(pageSize: number): AlarmNotifyListRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withAlarmDataId(alarmDataId: number): AlarmNotifyListRequest {
        this['alarm_data_id'] = alarmDataId;
        return this;
    }
    public set alarmDataId(alarmDataId: number  | undefined) {
        this['alarm_data_id'] = alarmDataId;
    }
    public get alarmDataId(): number | undefined {
        return this['alarm_data_id'];
    }
    public withRegion(region: string): AlarmNotifyListRequest {
        this['region'] = region;
        return this;
    }
}