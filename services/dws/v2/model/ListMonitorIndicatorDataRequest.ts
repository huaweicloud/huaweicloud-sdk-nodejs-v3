

export class ListMonitorIndicatorDataRequest {
    public from: string;
    public to: string;
    private 'function'?: string | undefined;
    public period?: string;
    private 'indicator_name': string | undefined;
    public dim0: string;
    public dim1?: string;
    public constructor(from?: any, to?: any, indicatorName?: any, dim0?: any) { 
        this['from'] = from;
        this['to'] = to;
        this['indicator_name'] = indicatorName;
        this['dim0'] = dim0;
    }
    public withFrom(from: string): ListMonitorIndicatorDataRequest {
        this['from'] = from;
        return this;
    }
    public withTo(to: string): ListMonitorIndicatorDataRequest {
        this['to'] = to;
        return this;
    }
    public withFunction(_function: string): ListMonitorIndicatorDataRequest {
        this['function'] = _function;
        return this;
    }
    public set _function(_function: string | undefined) {
        this['function'] = _function;
    }
    public get _function() {
        return this['function'];
    }
    public withPeriod(period: string): ListMonitorIndicatorDataRequest {
        this['period'] = period;
        return this;
    }
    public withIndicatorName(indicatorName: string): ListMonitorIndicatorDataRequest {
        this['indicator_name'] = indicatorName;
        return this;
    }
    public set indicatorName(indicatorName: string | undefined) {
        this['indicator_name'] = indicatorName;
    }
    public get indicatorName() {
        return this['indicator_name'];
    }
    public withDim0(dim0: string): ListMonitorIndicatorDataRequest {
        this['dim0'] = dim0;
        return this;
    }
    public withDim1(dim1: string): ListMonitorIndicatorDataRequest {
        this['dim1'] = dim1;
        return this;
    }
}