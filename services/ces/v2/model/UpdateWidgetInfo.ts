import { UpdateWidgetInfoLocation } from './UpdateWidgetInfoLocation';
import { UpdateWidgetInfoProperties } from './UpdateWidgetInfoProperties';
import { WidgetMetric } from './WidgetMetric';


export class UpdateWidgetInfo {
    private 'group_id'?: string;
    private 'widget_id'?: string;
    public metrics?: Array<WidgetMetric>;
    public title?: string;
    public threshold?: number;
    private 'threshold_enabled'?: boolean;
    public view?: UpdateWidgetInfoViewEnum | string;
    private 'metric_display_mode'?: UpdateWidgetInfoMetricDisplayModeEnum | string;
    public properties?: UpdateWidgetInfoProperties;
    public location?: UpdateWidgetInfoLocation;
    public unit?: string;
    public constructor(widgetId?: string) { 
        this['widget_id'] = widgetId;
    }
    public withGroupId(groupId: string): UpdateWidgetInfo {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withWidgetId(widgetId: string): UpdateWidgetInfo {
        this['widget_id'] = widgetId;
        return this;
    }
    public set widgetId(widgetId: string  | undefined) {
        this['widget_id'] = widgetId;
    }
    public get widgetId(): string | undefined {
        return this['widget_id'];
    }
    public withMetrics(metrics: Array<WidgetMetric>): UpdateWidgetInfo {
        this['metrics'] = metrics;
        return this;
    }
    public withTitle(title: string): UpdateWidgetInfo {
        this['title'] = title;
        return this;
    }
    public withThreshold(threshold: number): UpdateWidgetInfo {
        this['threshold'] = threshold;
        return this;
    }
    public withThresholdEnabled(thresholdEnabled: boolean): UpdateWidgetInfo {
        this['threshold_enabled'] = thresholdEnabled;
        return this;
    }
    public set thresholdEnabled(thresholdEnabled: boolean  | undefined) {
        this['threshold_enabled'] = thresholdEnabled;
    }
    public get thresholdEnabled(): boolean | undefined {
        return this['threshold_enabled'];
    }
    public withView(view: UpdateWidgetInfoViewEnum | string): UpdateWidgetInfo {
        this['view'] = view;
        return this;
    }
    public withMetricDisplayMode(metricDisplayMode: UpdateWidgetInfoMetricDisplayModeEnum | string): UpdateWidgetInfo {
        this['metric_display_mode'] = metricDisplayMode;
        return this;
    }
    public set metricDisplayMode(metricDisplayMode: UpdateWidgetInfoMetricDisplayModeEnum | string  | undefined) {
        this['metric_display_mode'] = metricDisplayMode;
    }
    public get metricDisplayMode(): UpdateWidgetInfoMetricDisplayModeEnum | string | undefined {
        return this['metric_display_mode'];
    }
    public withProperties(properties: UpdateWidgetInfoProperties): UpdateWidgetInfo {
        this['properties'] = properties;
        return this;
    }
    public withLocation(location: UpdateWidgetInfoLocation): UpdateWidgetInfo {
        this['location'] = location;
        return this;
    }
    public withUnit(unit: string): UpdateWidgetInfo {
        this['unit'] = unit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateWidgetInfoViewEnum {
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
export enum UpdateWidgetInfoMetricDisplayModeEnum {
    SINGLE = 'single',
    MULTIPLE = 'multiple'
}
