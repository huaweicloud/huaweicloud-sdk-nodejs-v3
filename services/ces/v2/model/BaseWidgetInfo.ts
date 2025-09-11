import { BaseWidgetInfoLocation } from './BaseWidgetInfoLocation';
import { BaseWidgetInfoProperties } from './BaseWidgetInfoProperties';
import { WidgetMetric } from './WidgetMetric';


export class BaseWidgetInfo {
    private 'group_id'?: string;
    public metrics?: Array<WidgetMetric>;
    public title?: string;
    public threshold?: number;
    private 'threshold_enabled'?: boolean;
    public view?: BaseWidgetInfoViewEnum | string;
    private 'metric_display_mode'?: BaseWidgetInfoMetricDisplayModeEnum | string;
    public properties?: BaseWidgetInfoProperties;
    public location?: BaseWidgetInfoLocation;
    public unit?: string;
    public constructor(metrics?: Array<WidgetMetric>, title?: string, thresholdEnabled?: boolean, view?: string, metricDisplayMode?: string, location?: BaseWidgetInfoLocation) { 
        this['metrics'] = metrics;
        this['title'] = title;
        this['threshold_enabled'] = thresholdEnabled;
        this['view'] = view;
        this['metric_display_mode'] = metricDisplayMode;
        this['location'] = location;
    }
    public withGroupId(groupId: string): BaseWidgetInfo {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withMetrics(metrics: Array<WidgetMetric>): BaseWidgetInfo {
        this['metrics'] = metrics;
        return this;
    }
    public withTitle(title: string): BaseWidgetInfo {
        this['title'] = title;
        return this;
    }
    public withThreshold(threshold: number): BaseWidgetInfo {
        this['threshold'] = threshold;
        return this;
    }
    public withThresholdEnabled(thresholdEnabled: boolean): BaseWidgetInfo {
        this['threshold_enabled'] = thresholdEnabled;
        return this;
    }
    public set thresholdEnabled(thresholdEnabled: boolean  | undefined) {
        this['threshold_enabled'] = thresholdEnabled;
    }
    public get thresholdEnabled(): boolean | undefined {
        return this['threshold_enabled'];
    }
    public withView(view: BaseWidgetInfoViewEnum | string): BaseWidgetInfo {
        this['view'] = view;
        return this;
    }
    public withMetricDisplayMode(metricDisplayMode: BaseWidgetInfoMetricDisplayModeEnum | string): BaseWidgetInfo {
        this['metric_display_mode'] = metricDisplayMode;
        return this;
    }
    public set metricDisplayMode(metricDisplayMode: BaseWidgetInfoMetricDisplayModeEnum | string  | undefined) {
        this['metric_display_mode'] = metricDisplayMode;
    }
    public get metricDisplayMode(): BaseWidgetInfoMetricDisplayModeEnum | string | undefined {
        return this['metric_display_mode'];
    }
    public withProperties(properties: BaseWidgetInfoProperties): BaseWidgetInfo {
        this['properties'] = properties;
        return this;
    }
    public withLocation(location: BaseWidgetInfoLocation): BaseWidgetInfo {
        this['location'] = location;
        return this;
    }
    public withUnit(unit: string): BaseWidgetInfo {
        this['unit'] = unit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BaseWidgetInfoViewEnum {
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
export enum BaseWidgetInfoMetricDisplayModeEnum {
    SINGLE = 'single',
    MULTIPLE = 'multiple'
}
