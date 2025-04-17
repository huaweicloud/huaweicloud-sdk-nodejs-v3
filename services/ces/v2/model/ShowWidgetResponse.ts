import { BaseWidgetInfoProperties } from './BaseWidgetInfoProperties';
import { UpdateWidgetInfoLocation } from './UpdateWidgetInfoLocation';
import { WidgetIdItem } from './WidgetIdItem';
import { WidgetInfo } from './WidgetInfo';
import { WidgetMetric } from './WidgetMetric';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowWidgetResponse extends SdkResponse {
    private 'widget_id'?: string;
    private 'group_id'?: string;
    public metrics?: Array<WidgetMetric>;
    public title?: string;
    public threshold?: number;
    private 'threshold_enabled'?: boolean;
    public view?: ShowWidgetResponseViewEnum | string;
    private 'metric_display_mode'?: ShowWidgetResponseMetricDisplayModeEnum | string;
    public properties?: BaseWidgetInfoProperties;
    public location?: UpdateWidgetInfoLocation;
    public unit?: string;
    private 'create_time'?: number;
    public constructor(metrics?: Array<WidgetMetric>, title?: string, thresholdEnabled?: boolean, view?: string, metricDisplayMode?: string, location?: UpdateWidgetInfoLocation) { 
        super();
        this['metrics'] = metrics;
        this['title'] = title;
        this['threshold_enabled'] = thresholdEnabled;
        this['view'] = view;
        this['metric_display_mode'] = metricDisplayMode;
        this['location'] = location;
    }
    public withWidgetId(widgetId: string): ShowWidgetResponse {
        this['widget_id'] = widgetId;
        return this;
    }
    public set widgetId(widgetId: string  | undefined) {
        this['widget_id'] = widgetId;
    }
    public get widgetId(): string | undefined {
        return this['widget_id'];
    }
    public withGroupId(groupId: string): ShowWidgetResponse {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withMetrics(metrics: Array<WidgetMetric>): ShowWidgetResponse {
        this['metrics'] = metrics;
        return this;
    }
    public withTitle(title: string): ShowWidgetResponse {
        this['title'] = title;
        return this;
    }
    public withThreshold(threshold: number): ShowWidgetResponse {
        this['threshold'] = threshold;
        return this;
    }
    public withThresholdEnabled(thresholdEnabled: boolean): ShowWidgetResponse {
        this['threshold_enabled'] = thresholdEnabled;
        return this;
    }
    public set thresholdEnabled(thresholdEnabled: boolean  | undefined) {
        this['threshold_enabled'] = thresholdEnabled;
    }
    public get thresholdEnabled(): boolean | undefined {
        return this['threshold_enabled'];
    }
    public withView(view: ShowWidgetResponseViewEnum | string): ShowWidgetResponse {
        this['view'] = view;
        return this;
    }
    public withMetricDisplayMode(metricDisplayMode: ShowWidgetResponseMetricDisplayModeEnum | string): ShowWidgetResponse {
        this['metric_display_mode'] = metricDisplayMode;
        return this;
    }
    public set metricDisplayMode(metricDisplayMode: ShowWidgetResponseMetricDisplayModeEnum | string  | undefined) {
        this['metric_display_mode'] = metricDisplayMode;
    }
    public get metricDisplayMode(): ShowWidgetResponseMetricDisplayModeEnum | string | undefined {
        return this['metric_display_mode'];
    }
    public withProperties(properties: BaseWidgetInfoProperties): ShowWidgetResponse {
        this['properties'] = properties;
        return this;
    }
    public withLocation(location: UpdateWidgetInfoLocation): ShowWidgetResponse {
        this['location'] = location;
        return this;
    }
    public withUnit(unit: string): ShowWidgetResponse {
        this['unit'] = unit;
        return this;
    }
    public withCreateTime(createTime: number): ShowWidgetResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowWidgetResponseViewEnum {
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
export enum ShowWidgetResponseMetricDisplayModeEnum {
    SINGLE = 'single',
    MULTIPLE = 'multiple'
}
