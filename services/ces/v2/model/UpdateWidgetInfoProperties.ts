import { ThresholdInfo } from './ThresholdInfo';


export class UpdateWidgetInfoProperties {
    public filter?: UpdateWidgetInfoPropertiesFilterEnum | string;
    public topN?: number;
    public order?: UpdateWidgetInfoPropertiesOrderEnum | string;
    public description?: string;
    private 'last_week_compare_enable'?: boolean;
    private 'yesterday_compare_enable'?: boolean;
    private 'legend_location'?: UpdateWidgetInfoPropertiesLegendLocationEnum | string;
    private 'legend_values'?: Array<UpdateWidgetInfoPropertiesLegendValuesEnum> | Array<string>;
    public thresholds?: Array<ThresholdInfo>;
    private 'is_all_compare_enable'?: boolean;
    public constructor() { 
    }
    public withFilter(filter: UpdateWidgetInfoPropertiesFilterEnum | string): UpdateWidgetInfoProperties {
        this['filter'] = filter;
        return this;
    }
    public withTopN(topN: number): UpdateWidgetInfoProperties {
        this['topN'] = topN;
        return this;
    }
    public withOrder(order: UpdateWidgetInfoPropertiesOrderEnum | string): UpdateWidgetInfoProperties {
        this['order'] = order;
        return this;
    }
    public withDescription(description: string): UpdateWidgetInfoProperties {
        this['description'] = description;
        return this;
    }
    public withLastWeekCompareEnable(lastWeekCompareEnable: boolean): UpdateWidgetInfoProperties {
        this['last_week_compare_enable'] = lastWeekCompareEnable;
        return this;
    }
    public set lastWeekCompareEnable(lastWeekCompareEnable: boolean  | undefined) {
        this['last_week_compare_enable'] = lastWeekCompareEnable;
    }
    public get lastWeekCompareEnable(): boolean | undefined {
        return this['last_week_compare_enable'];
    }
    public withYesterdayCompareEnable(yesterdayCompareEnable: boolean): UpdateWidgetInfoProperties {
        this['yesterday_compare_enable'] = yesterdayCompareEnable;
        return this;
    }
    public set yesterdayCompareEnable(yesterdayCompareEnable: boolean  | undefined) {
        this['yesterday_compare_enable'] = yesterdayCompareEnable;
    }
    public get yesterdayCompareEnable(): boolean | undefined {
        return this['yesterday_compare_enable'];
    }
    public withLegendLocation(legendLocation: UpdateWidgetInfoPropertiesLegendLocationEnum | string): UpdateWidgetInfoProperties {
        this['legend_location'] = legendLocation;
        return this;
    }
    public set legendLocation(legendLocation: UpdateWidgetInfoPropertiesLegendLocationEnum | string  | undefined) {
        this['legend_location'] = legendLocation;
    }
    public get legendLocation(): UpdateWidgetInfoPropertiesLegendLocationEnum | string | undefined {
        return this['legend_location'];
    }
    public withLegendValues(legendValues: Array<UpdateWidgetInfoPropertiesLegendValuesEnum> | Array<string>): UpdateWidgetInfoProperties {
        this['legend_values'] = legendValues;
        return this;
    }
    public set legendValues(legendValues: Array<UpdateWidgetInfoPropertiesLegendValuesEnum> | Array<string>  | undefined) {
        this['legend_values'] = legendValues;
    }
    public get legendValues(): Array<UpdateWidgetInfoPropertiesLegendValuesEnum> | Array<string> | undefined {
        return this['legend_values'];
    }
    public withThresholds(thresholds: Array<ThresholdInfo>): UpdateWidgetInfoProperties {
        this['thresholds'] = thresholds;
        return this;
    }
    public withIsAllCompareEnable(isAllCompareEnable: boolean): UpdateWidgetInfoProperties {
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
export enum UpdateWidgetInfoPropertiesFilterEnum {
    TOPN = 'topN'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateWidgetInfoPropertiesOrderEnum {
    ASC = 'asc',
    DESC = 'desc'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateWidgetInfoPropertiesLegendLocationEnum {
    HIDE = 'hide',
    RIGHT = 'right',
    BOTTOM = 'bottom'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateWidgetInfoPropertiesLegendValuesEnum {
    LAST = 'last',
    MAX = 'max',
    MIN = 'min',
    AVG = 'avg',
    SUM = 'sum'
}
