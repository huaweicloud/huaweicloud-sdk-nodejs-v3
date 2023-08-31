import { BaseWidgetInfoLocation } from './BaseWidgetInfoLocation';
import { BaseWidgetInfoProperties } from './BaseWidgetInfoProperties';
import { WidgetIdItem } from './WidgetIdItem';
import { WidgetInfo } from './WidgetInfo';
import { WidgetMetric } from './WidgetMetric';


export class WidgetInfoWithId {
    private 'widget_id'?: string;
    public metrics?: Array<WidgetMetric>;
    public title?: string;
    public threshold?: number;
    private 'threshold_enabled'?: boolean;
    public view?: WidgetInfoWithIdViewEnum | string;
    private 'metric_display_mode'?: WidgetInfoWithIdMetricDisplayModeEnum | string;
    public properties?: BaseWidgetInfoProperties;
    public location?: BaseWidgetInfoLocation;
    public unit?: string;
    private 'create_time'?: number;
    public constructor() { 
    }
    public withWidgetId(widgetId: string): WidgetInfoWithId {
        this['widget_id'] = widgetId;
        return this;
    }
    public set widgetId(widgetId: string  | undefined) {
        this['widget_id'] = widgetId;
    }
    public get widgetId(): string | undefined {
        return this['widget_id'];
    }
    public withMetrics(metrics: Array<WidgetMetric>): WidgetInfoWithId {
        this['metrics'] = metrics;
        return this;
    }
    public withTitle(title: string): WidgetInfoWithId {
        this['title'] = title;
        return this;
    }
    public withThreshold(threshold: number): WidgetInfoWithId {
        this['threshold'] = threshold;
        return this;
    }
    public withThresholdEnabled(thresholdEnabled: boolean): WidgetInfoWithId {
        this['threshold_enabled'] = thresholdEnabled;
        return this;
    }
    public set thresholdEnabled(thresholdEnabled: boolean  | undefined) {
        this['threshold_enabled'] = thresholdEnabled;
    }
    public get thresholdEnabled(): boolean | undefined {
        return this['threshold_enabled'];
    }
    public withView(view: WidgetInfoWithIdViewEnum | string): WidgetInfoWithId {
        this['view'] = view;
        return this;
    }
    public withMetricDisplayMode(metricDisplayMode: WidgetInfoWithIdMetricDisplayModeEnum | string): WidgetInfoWithId {
        this['metric_display_mode'] = metricDisplayMode;
        return this;
    }
    public set metricDisplayMode(metricDisplayMode: WidgetInfoWithIdMetricDisplayModeEnum | string  | undefined) {
        this['metric_display_mode'] = metricDisplayMode;
    }
    public get metricDisplayMode(): WidgetInfoWithIdMetricDisplayModeEnum | string | undefined {
        return this['metric_display_mode'];
    }
    public withProperties(properties: BaseWidgetInfoProperties): WidgetInfoWithId {
        this['properties'] = properties;
        return this;
    }
    public withLocation(location: BaseWidgetInfoLocation): WidgetInfoWithId {
        this['location'] = location;
        return this;
    }
    public withUnit(unit: string): WidgetInfoWithId {
        this['unit'] = unit;
        return this;
    }
    public withCreateTime(createTime: number): WidgetInfoWithId {
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
export enum WidgetInfoWithIdViewEnum {
    BAR = 'bar',
    LINE = 'line'
}
/**
    * @export
    * @enum {string}
    */
export enum WidgetInfoWithIdMetricDisplayModeEnum {
    SINGLE = 'single',
    MULTIPLE = 'multiple'
}
