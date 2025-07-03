

export class AlarmDataListRequest {
    public page?: number;
    private 'page_size'?: number;
    public region?: string;
    private 'app_name'?: string;
    private 'business_id'?: number;
    private 'monitor_item_id'?: number;
    public status?: string;
    private 'alarm_level'?: string;
    public keyword?: string;
    private 'alarm_start_time'?: string;
    private 'alarm_end_time'?: string;
    private 'collector_id'?: number;
    private 'ip_address'?: string;
    private 'env_list'?: Array<number>;
    public constructor(businessId?: number) { 
        this['business_id'] = businessId;
    }
    public withPage(page: number): AlarmDataListRequest {
        this['page'] = page;
        return this;
    }
    public withPageSize(pageSize: number): AlarmDataListRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withRegion(region: string): AlarmDataListRequest {
        this['region'] = region;
        return this;
    }
    public withAppName(appName: string): AlarmDataListRequest {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withBusinessId(businessId: number): AlarmDataListRequest {
        this['business_id'] = businessId;
        return this;
    }
    public set businessId(businessId: number  | undefined) {
        this['business_id'] = businessId;
    }
    public get businessId(): number | undefined {
        return this['business_id'];
    }
    public withMonitorItemId(monitorItemId: number): AlarmDataListRequest {
        this['monitor_item_id'] = monitorItemId;
        return this;
    }
    public set monitorItemId(monitorItemId: number  | undefined) {
        this['monitor_item_id'] = monitorItemId;
    }
    public get monitorItemId(): number | undefined {
        return this['monitor_item_id'];
    }
    public withStatus(status: string): AlarmDataListRequest {
        this['status'] = status;
        return this;
    }
    public withAlarmLevel(alarmLevel: string): AlarmDataListRequest {
        this['alarm_level'] = alarmLevel;
        return this;
    }
    public set alarmLevel(alarmLevel: string  | undefined) {
        this['alarm_level'] = alarmLevel;
    }
    public get alarmLevel(): string | undefined {
        return this['alarm_level'];
    }
    public withKeyword(keyword: string): AlarmDataListRequest {
        this['keyword'] = keyword;
        return this;
    }
    public withAlarmStartTime(alarmStartTime: string): AlarmDataListRequest {
        this['alarm_start_time'] = alarmStartTime;
        return this;
    }
    public set alarmStartTime(alarmStartTime: string  | undefined) {
        this['alarm_start_time'] = alarmStartTime;
    }
    public get alarmStartTime(): string | undefined {
        return this['alarm_start_time'];
    }
    public withAlarmEndTime(alarmEndTime: string): AlarmDataListRequest {
        this['alarm_end_time'] = alarmEndTime;
        return this;
    }
    public set alarmEndTime(alarmEndTime: string  | undefined) {
        this['alarm_end_time'] = alarmEndTime;
    }
    public get alarmEndTime(): string | undefined {
        return this['alarm_end_time'];
    }
    public withCollectorId(collectorId: number): AlarmDataListRequest {
        this['collector_id'] = collectorId;
        return this;
    }
    public set collectorId(collectorId: number  | undefined) {
        this['collector_id'] = collectorId;
    }
    public get collectorId(): number | undefined {
        return this['collector_id'];
    }
    public withIpAddress(ipAddress: string): AlarmDataListRequest {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): string | undefined {
        return this['ip_address'];
    }
    public withEnvList(envList: Array<number>): AlarmDataListRequest {
        this['env_list'] = envList;
        return this;
    }
    public set envList(envList: Array<number>  | undefined) {
        this['env_list'] = envList;
    }
    public get envList(): Array<number> | undefined {
        return this['env_list'];
    }
}