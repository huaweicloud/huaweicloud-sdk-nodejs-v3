import { BaseWidgetInfoRespLocation } from './BaseWidgetInfoRespLocation';
import { BaseWidgetInfoRespProperties } from './BaseWidgetInfoRespProperties';
import { WidgetMetricResp } from './WidgetMetricResp';


export class BaseWidgetInfoResp {
    private 'group_id'?: string;
    public metrics?: Array<WidgetMetricResp>;
    public title?: string;
    public threshold?: number;
    private 'threshold_enabled'?: boolean;
    public view?: BaseWidgetInfoRespViewEnum | string;
    private 'metric_display_mode'?: BaseWidgetInfoRespMetricDisplayModeEnum | string;
    public properties?: BaseWidgetInfoRespProperties;
    public location?: BaseWidgetInfoRespLocation;
    public unit?: string;
    public constructor() { 
    }
    public withGroupId(groupId: string): BaseWidgetInfoResp {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withMetrics(metrics: Array<WidgetMetricResp>): BaseWidgetInfoResp {
        this['metrics'] = metrics;
        return this;
    }
    public withTitle(title: string): BaseWidgetInfoResp {
        this['title'] = title;
        return this;
    }
    public withThreshold(threshold: number): BaseWidgetInfoResp {
        this['threshold'] = threshold;
        return this;
    }
    public withThresholdEnabled(thresholdEnabled: boolean): BaseWidgetInfoResp {
        this['threshold_enabled'] = thresholdEnabled;
        return this;
    }
    public set thresholdEnabled(thresholdEnabled: boolean  | undefined) {
        this['threshold_enabled'] = thresholdEnabled;
    }
    public get thresholdEnabled(): boolean | undefined {
        return this['threshold_enabled'];
    }
    public withView(view: BaseWidgetInfoRespViewEnum | string): BaseWidgetInfoResp {
        this['view'] = view;
        return this;
    }
    public withMetricDisplayMode(metricDisplayMode: BaseWidgetInfoRespMetricDisplayModeEnum | string): BaseWidgetInfoResp {
        this['metric_display_mode'] = metricDisplayMode;
        return this;
    }
    public set metricDisplayMode(metricDisplayMode: BaseWidgetInfoRespMetricDisplayModeEnum | string  | undefined) {
        this['metric_display_mode'] = metricDisplayMode;
    }
    public get metricDisplayMode(): BaseWidgetInfoRespMetricDisplayModeEnum | string | undefined {
        return this['metric_display_mode'];
    }
    public withProperties(properties: BaseWidgetInfoRespProperties): BaseWidgetInfoResp {
        this['properties'] = properties;
        return this;
    }
    public withLocation(location: BaseWidgetInfoRespLocation): BaseWidgetInfoResp {
        this['location'] = location;
        return this;
    }
    public withUnit(unit: string): BaseWidgetInfoResp {
        this['unit'] = unit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BaseWidgetInfoRespViewEnum {
    BAR = 'bar',
    LINE = 'line',
    BAR_CHART = 'bar_chart',
    TABLE = 'table',
    CIRCULAR_BAR = 'circular_bar',
    AREA_CHART = 'area_chart'
}
/**
    * @export
    * @enum {string}
    */
export enum BaseWidgetInfoRespMetricDisplayModeEnum {
    SINGLE = 'single',
    MULTIPLE = 'multiple'
}
