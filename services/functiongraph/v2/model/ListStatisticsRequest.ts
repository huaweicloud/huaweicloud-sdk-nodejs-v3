

export class ListStatisticsRequest {
    public filter?: ListStatisticsRequestFilterEnum | string;
    public period?: string;
    public option?: string;
    public constructor(filter?: string) { 
        this['filter'] = filter;
    }
    public withFilter(filter: ListStatisticsRequestFilterEnum | string): ListStatisticsRequest {
        this['filter'] = filter;
        return this;
    }
    public withPeriod(period: string): ListStatisticsRequest {
        this['period'] = period;
        return this;
    }
    public withOption(option: string): ListStatisticsRequest {
        this['option'] = option;
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
