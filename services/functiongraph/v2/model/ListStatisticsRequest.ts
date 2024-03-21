

export class ListStatisticsRequest {
    public filter?: ListStatisticsRequestFilterEnum | string;
    public period?: string;
    public option?: string;
    public limit?: string;
    public marker?: string;
    private 'Content-Type'?: string;
    public constructor(filter?: string, contentType?: string) { 
        this['filter'] = filter;
        this['Content-Type'] = contentType;
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
    public withLimit(limit: string): ListStatisticsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListStatisticsRequest {
        this['marker'] = marker;
        return this;
    }
    public withContentType(contentType: string): ListStatisticsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
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
