import { MetricDataPoints } from './MetricDataPoints';
import { QuerySample } from './QuerySample';


export class SampleDataValue {
    public sample?: QuerySample;
    private 'data_points'?: Array<MetricDataPoints>;
    public constructor() { 
    }
    public withSample(sample: QuerySample): SampleDataValue {
        this['sample'] = sample;
        return this;
    }
    public withDataPoints(dataPoints: Array<MetricDataPoints>): SampleDataValue {
        this['data_points'] = dataPoints;
        return this;
    }
    public set dataPoints(dataPoints: Array<MetricDataPoints>  | undefined) {
        this['data_points'] = dataPoints;
    }
    public get dataPoints(): Array<MetricDataPoints> | undefined {
        return this['data_points'];
    }
}