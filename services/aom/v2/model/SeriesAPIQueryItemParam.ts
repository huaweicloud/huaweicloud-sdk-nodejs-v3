import { QuerySeriesOptionParam } from './QuerySeriesOptionParam';


export class SeriesAPIQueryItemParam {
    public series?: Array<QuerySeriesOptionParam>;
    public constructor(series?: Array<QuerySeriesOptionParam>) { 
        this['series'] = series;
    }
    public withSeries(series: Array<QuerySeriesOptionParam>): SeriesAPIQueryItemParam {
        this['series'] = series;
        return this;
    }
}