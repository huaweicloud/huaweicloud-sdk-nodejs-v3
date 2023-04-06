import { TrendQueryData } from './TrendQueryData';


export class TrendQueryDataResp {
    private 'query_time'?: number | undefined;
    private 'indicator_name'?: string | undefined;
    private 'object_id'?: string | undefined;
    public unit?: string;
    private 'sub_object_id'?: string | undefined;
    private 'data_points'?: Array<TrendQueryData> | undefined;
    public constructor() { 
    }
    public withQueryTime(queryTime: number): TrendQueryDataResp {
        this['query_time'] = queryTime;
        return this;
    }
    public set queryTime(queryTime: number | undefined) {
        this['query_time'] = queryTime;
    }
    public get queryTime() {
        return this['query_time'];
    }
    public withIndicatorName(indicatorName: string): TrendQueryDataResp {
        this['indicator_name'] = indicatorName;
        return this;
    }
    public set indicatorName(indicatorName: string | undefined) {
        this['indicator_name'] = indicatorName;
    }
    public get indicatorName() {
        return this['indicator_name'];
    }
    public withObjectId(objectId: string): TrendQueryDataResp {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId() {
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
    public set subObjectId(subObjectId: string | undefined) {
        this['sub_object_id'] = subObjectId;
    }
    public get subObjectId() {
        return this['sub_object_id'];
    }
    public withDataPoints(dataPoints: Array<TrendQueryData>): TrendQueryDataResp {
        this['data_points'] = dataPoints;
        return this;
    }
    public set dataPoints(dataPoints: Array<TrendQueryData> | undefined) {
        this['data_points'] = dataPoints;
    }
    public get dataPoints() {
        return this['data_points'];
    }
}