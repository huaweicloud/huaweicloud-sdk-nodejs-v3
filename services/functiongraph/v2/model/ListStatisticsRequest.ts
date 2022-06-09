

export class ListStatisticsRequest {
    public filter: ListStatisticsRequestFilterEnum;
    public period?: string;
    public option?: ListStatisticsRequestOptionEnum;
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
    public withOption(option: ListStatisticsRequestOptionEnum): ListStatisticsRequest {
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
/**
    * @export
    * @enum {string}
    */
export enum ListStatisticsRequestOptionEnum {
    E_0 = '0',
    E_1 = '1',
    E_2 = '2',
    E_3 = '3'
}
