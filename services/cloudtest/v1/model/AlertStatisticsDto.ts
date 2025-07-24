

export class AlertStatisticsDto {
    private 'block_alert_count'?: number;
    private 'exception_alert_count'?: number;
    private 'fail_alert_count'?: number;
    private 'service_id'?: string;
    private 'statistics_time'?: number;
    private 'timeout_alert_count'?: number;
    public constructor() { 
    }
    public withBlockAlertCount(blockAlertCount: number): AlertStatisticsDto {
        this['block_alert_count'] = blockAlertCount;
        return this;
    }
    public set blockAlertCount(blockAlertCount: number  | undefined) {
        this['block_alert_count'] = blockAlertCount;
    }
    public get blockAlertCount(): number | undefined {
        return this['block_alert_count'];
    }
    public withExceptionAlertCount(exceptionAlertCount: number): AlertStatisticsDto {
        this['exception_alert_count'] = exceptionAlertCount;
        return this;
    }
    public set exceptionAlertCount(exceptionAlertCount: number  | undefined) {
        this['exception_alert_count'] = exceptionAlertCount;
    }
    public get exceptionAlertCount(): number | undefined {
        return this['exception_alert_count'];
    }
    public withFailAlertCount(failAlertCount: number): AlertStatisticsDto {
        this['fail_alert_count'] = failAlertCount;
        return this;
    }
    public set failAlertCount(failAlertCount: number  | undefined) {
        this['fail_alert_count'] = failAlertCount;
    }
    public get failAlertCount(): number | undefined {
        return this['fail_alert_count'];
    }
    public withServiceId(serviceId: string): AlertStatisticsDto {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withStatisticsTime(statisticsTime: number): AlertStatisticsDto {
        this['statistics_time'] = statisticsTime;
        return this;
    }
    public set statisticsTime(statisticsTime: number  | undefined) {
        this['statistics_time'] = statisticsTime;
    }
    public get statisticsTime(): number | undefined {
        return this['statistics_time'];
    }
    public withTimeoutAlertCount(timeoutAlertCount: number): AlertStatisticsDto {
        this['timeout_alert_count'] = timeoutAlertCount;
        return this;
    }
    public set timeoutAlertCount(timeoutAlertCount: number  | undefined) {
        this['timeout_alert_count'] = timeoutAlertCount;
    }
    public get timeoutAlertCount(): number | undefined {
        return this['timeout_alert_count'];
    }
}