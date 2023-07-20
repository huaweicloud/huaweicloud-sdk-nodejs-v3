import { TrendQueryData } from './TrendQueryData';


export class TrendQueryDataResp {
    private 'query_time'?: number;
    private 'indicator_name'?: string;
    private 'object_id'?: string;
    public unit?: string;
    private 'sub_object_id'?: string;
    private 'data_points'?: Array<TrendQueryData>;
    public constructor() { 
    }
    public withQueryTime(queryTime: number): TrendQueryDataResp {
        this['query_time'] = queryTime;
        return this;
    }
    public set queryTime(queryTime: number  | undefined) {
        this['query_time'] = queryTime;
    }
    public get queryTime(): number | undefined {
        return this['query_time'];
    }
    public withIndicatorName(indicatorName: string): TrendQueryDataResp {
        this['indicator_name'] = indicatorName;
        return this;
    }
    public set indicatorName(indicatorName: string  | undefined) {
        this['indicator_name'] = indicatorName;
    }
    public get indicatorName(): string | undefined {
        return this['indicator_name'];
    }
    public withObjectId(objectId: string): TrendQueryDataResp {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withUnit(unit: string): TrendQueryDataResp {
        this['unit'] = unit;
        return this;
    }
    public withSubObjectId(subObjectId: string): TrendQueryDataResp {
        this['sub_object_id'] = subObjectId;
        return this;
    }
    public set subObjectId(subObjectId: string  | undefined) {
        this['sub_object_id'] = subObjectId;
    }
    public get subObjectId(): string | undefined {
        return this['sub_object_id'];
    }
    public withDataPoints(dataPoints: Array<TrendQueryData>): TrendQueryDataResp {
        this['data_points'] = dataPoints;
        return this;
    }
    public set dataPoints(dataPoints: Array<TrendQueryData>  | undefined) {
        this['data_points'] = dataPoints;
    }
    public get dataPoints(): Array<TrendQueryData> | undefined {
        return this['data_points'];
    }
}