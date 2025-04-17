import { ThresholdInfo } from './ThresholdInfo';


export class BaseWidgetInfoProperties {
    public filter?: BaseWidgetInfoPropertiesFilterEnum | string;
    public topN?: number;
    public order?: BaseWidgetInfoPropertiesOrderEnum | string;
    public description?: string;
    private 'last_week_compare_enable'?: boolean;
    private 'yesterday_compare_enable'?: boolean;
    private 'legend_location'?: BaseWidgetInfoPropertiesLegendLocationEnum | string;
    private 'legend_values'?: Array<BaseWidgetInfoPropertiesLegendValuesEnum> | Array<string>;
    public thresholds?: Array<ThresholdInfo>;
    private 'is_all_compare_enable'?: boolean;
    public constructor() { 
    }
    public withFilter(filter: BaseWidgetInfoPropertiesFilterEnum | string): BaseWidgetInfoProperties {
        this['filter'] = filter;
        return this;
    }
    public withTopN(topN: number): BaseWidgetInfoProperties {
        this['topN'] = topN;
        return this;
    }
    public withOrder(order: BaseWidgetInfoPropertiesOrderEnum | string): BaseWidgetInfoProperties {
        this['order'] = order;
        return this;
    }
    public withDescription(description: string): BaseWidgetInfoProperties {
        this['description'] = description;
        return this;
    }
    public withLastWeekCompareEnable(lastWeekCompareEnable: boolean): BaseWidgetInfoProperties {
        this['last_week_compare_enable'] = lastWeekCompareEnable;
        return this;
    }
    public set lastWeekCompareEnable(lastWeekCompareEnable: boolean  | undefined) {
        this['last_week_compare_enable'] = lastWeekCompareEnable;
    }
    public get lastWeekCompareEnable(): boolean | undefined {
        return this['last_week_compare_enable'];
    }
    public withYesterdayCompareEnable(yesterdayCompareEnable: boolean): BaseWidgetInfoProperties {
        this['yesterday_compare_enable'] = yesterdayCompareEnable;
        return this;
    }
    public set yesterdayCompareEnable(yesterdayCompareEnable: boolean  | undefined) {
        this['yesterday_compare_enable'] = yesterdayCompareEnable;
    }
    public get yesterdayCompareEnable(): boolean | undefined {
        return this['yesterday_compare_enable'];
    }
    public withLegendLocation(legendLocation: BaseWidgetInfoPropertiesLegendLocationEnum | string): BaseWidgetInfoProperties {
        this['legend_location'] = legendLocation;
        return this;
    }
    public set legendLocation(legendLocation: BaseWidgetInfoPropertiesLegendLocationEnum | string  | undefined) {
        this['legend_location'] = legendLocation;
    }
    public get legendLocation(): BaseWidgetInfoPropertiesLegendLocationEnum | string | undefined {
        return this['legend_location'];
    }
    public withLegendValues(legendValues: Array<BaseWidgetInfoPropertiesLegendValuesEnum> | Array<string>): BaseWidgetInfoProperties {
        this['legend_values'] = legendValues;
        return this;
    }
    public set legendValues(legendValues: Array<BaseWidgetInfoPropertiesLegendValuesEnum> | Array<string>  | undefined) {
        this['legend_values'] = legendValues;
    }
    public get legendValues(): Array<BaseWidgetInfoPropertiesLegendValuesEnum> | Array<string> | undefined {
        return this['legend_values'];
    }
    public withThresholds(thresholds: Array<ThresholdInfo>): BaseWidgetInfoProperties {
        this['thresholds'] = thresholds;
        return this;
    }
    public withIsAllCompareEnable(isAllCompareEnable: boolean): BaseWidgetInfoProperties {
        this['is_all_compare_enable'] = isAllCompareEnable;
        return this;
    }
    public set isAllCompareEnable(isAllCompareEnable: boolean  | undefined) {
        this['is_all_compare_enable'] = isAllCompareEnable;
    }
    public get isAllCompareEnable(): boolean | undefined {
        return this['is_all_compare_enable'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BaseWidgetInfoPropertiesFilterEnum {
    TOPN = 'topN'
}
/**
    * @export
    * @enum {string}
    */
export enum BaseWidgetInfoPropertiesOrderEnum {
    ASC = 'asc',
    DESC = 'desc'
}
/**
    * @export
    * @enum {string}
    */
export enum BaseWidgetInfoPropertiesLegendLocationEnum {
    HIDE = 'hide',
    RIGHT = 'right',
    BOTTOM = 'bottom'
}
/**
    * @export
    * @enum {string}
    */
export enum BaseWidgetInfoPropertiesLegendValuesEnum {
    LAST = 'last',
    MAX = 'max',
    MIN = 'min',
    AVG = 'avg',
    SUM = 'sum'
}
