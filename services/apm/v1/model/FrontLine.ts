import { FrontPoint } from './FrontPoint';


export class FrontLine {
    private 'point_list'?: Array<FrontPoint>;
    public title?: string;
    public unit?: string;
    public precision?: number;
    private 'data_type'?: string;
    public visible?: boolean;
    public constructor() { 
    }
    public withPointList(pointList: Array<FrontPoint>): FrontLine {
        this['point_list'] = pointList;
        return this;
    }
    public set pointList(pointList: Array<FrontPoint>  | undefined) {
        this['point_list'] = pointList;
    }
    public get pointList(): Array<FrontPoint> | undefined {
        return this['point_list'];
    }
    public withTitle(title: string): FrontLine {
        this['title'] = title;
        return this;
    }
    public withUnit(unit: string): FrontLine {
        this['unit'] = unit;
        return this;
    }
    public withPrecision(precision: number): FrontLine {
        this['precision'] = precision;
        return this;
    }
    public withDataType(dataType: string): FrontLine {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: string  | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType(): string | undefined {
        return this['data_type'];
    }
    public withVisible(visible: boolean): FrontLine {
        this['visible'] = visible;
        return this;
    }
}