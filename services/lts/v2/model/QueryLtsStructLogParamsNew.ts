import { TimeRange } from './TimeRange';


export class QueryLtsStructLogParamsNew {
    public query: string;
    public format: string;
    private 'time_range': TimeRange | undefined;
    private 'whether_to_rows'?: boolean | undefined;
    public constructor(query?: any, format?: any, timeRange?: any) { 
        this['query'] = query;
        this['format'] = format;
        this['time_range'] = timeRange;
    }
    public withQuery(query: string): QueryLtsStructLogParamsNew {
        this['query'] = query;
        return this;
    }
    public withFormat(format: string): QueryLtsStructLogParamsNew {
        this['format'] = format;
        return this;
    }
    public withTimeRange(timeRange: TimeRange): QueryLtsStructLogParamsNew {
        this['time_range'] = timeRange;
        return this;
    }
    public set timeRange(timeRange: TimeRange | undefined) {
        this['time_range'] = timeRange;
    }
    public get timeRange() {
        return this['time_range'];
    }
    public withWhetherToRows(whetherToRows: boolean): QueryLtsStructLogParamsNew {
        this['whether_to_rows'] = whetherToRows;
        return this;
    }
    public set whetherToRows(whetherToRows: boolean | undefined) {
        this['whether_to_rows'] = whetherToRows;
    }
    public get whetherToRows() {
        return this['whether_to_rows'];
    }
}