import { TrendPoint } from './TrendPoint';


export class KeyTrendData {
    public name?: string;
    private 'stat_type'?: KeyTrendDataStatTypeEnum | string;
    public interval?: number;
    private 'trend_list'?: Array<TrendPoint>;
    public constructor() { 
    }
    public withName(name: string): KeyTrendData {
        this['name'] = name;
        return this;
    }
    public withStatType(statType: KeyTrendDataStatTypeEnum | string): KeyTrendData {
        this['stat_type'] = statType;
        return this;
    }
    public set statType(statType: KeyTrendDataStatTypeEnum | string  | undefined) {
        this['stat_type'] = statType;
    }
    public get statType(): KeyTrendDataStatTypeEnum | string | undefined {
        return this['stat_type'];
    }
    public withInterval(interval: number): KeyTrendData {
        this['interval'] = interval;
        return this;
    }
    public withTrendList(trendList: Array<TrendPoint>): KeyTrendData {
        this['trend_list'] = trendList;
        return this;
    }
    public set trendList(trendList: Array<TrendPoint>  | undefined) {
        this['trend_list'] = trendList;
    }
    public get trendList(): Array<TrendPoint> | undefined {
        return this['trend_list'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum KeyTrendDataStatTypeEnum {
    SIZE = 'size',
    STORAGE = 'storage',
    QPS = 'qps',
    TRAFFIC = 'traffic'
}
