

export class ListStatisticsRequest {
    public filter: ListStatisticsRequestFilterEnum;
    public period?: string;
    public constructor(filter?: any) { 
        this['filter'] = filter;
    }
    public withFilter(filter: ListStatisticsRequestFilterEnum): ListStatisticsRequest {
        this['filter'] = filter;
        return this;
    }
    public withPeriod(period: string): ListStatisticsRequest {
        this['period'] = period;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListStatisticsRequestFilterEnum {
    MONITOR_DATA = 'monitor_data',
    MONTHLY_REPORT = 'monthly_report'
}
