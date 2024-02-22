import { UpdateWidgetInfoLocation } from './UpdateWidgetInfoLocation';
import { UpdateWidgetInfoProperties } from './UpdateWidgetInfoProperties';
import { WidgetMetric } from './WidgetMetric';


export class BaseWidgetInfo {
    public metrics?: Array<WidgetMetric>;
    public title?: string;
    public threshold?: number;
    private 'threshold_enabled'?: boolean;
    public view?: BaseWidgetInfoViewEnum | string;
    private 'metric_display_mode'?: BaseWidgetInfoMetricDisplayModeEnum | string;
    public properties?: UpdateWidgetInfoProperties;
    public location?: UpdateWidgetInfoLocation;
    public unit?: string;
    public constructor() { 
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
    public withProperties(properties: UpdateWidgetInfoProperties): BaseWidgetInfo {
        this['properties'] = properties;
        return this;
    }
    public withLocation(location: UpdateWidgetInfoLocation): BaseWidgetInfo {
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
    LINE = 'line'
}
/**
    * @export
    * @enum {string}
    */
export enum BaseWidgetInfoMetricDisplayModeEnum {
    SINGLE = 'single',
    MULTIPLE = 'multiple'
}
