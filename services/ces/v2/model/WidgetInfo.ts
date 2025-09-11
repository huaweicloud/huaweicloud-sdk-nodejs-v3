import { BaseWidgetInfoResp } from './BaseWidgetInfoResp';
import { BaseWidgetInfoRespLocation } from './BaseWidgetInfoRespLocation';
import { BaseWidgetInfoRespProperties } from './BaseWidgetInfoRespProperties';
import { WidgetMetricResp } from './WidgetMetricResp';


export class WidgetInfo {
    private 'group_id'?: string;
    public metrics?: Array<WidgetMetricResp>;
    public title?: string;
    public threshold?: number;
    private 'threshold_enabled'?: boolean;
    public view?: WidgetInfoViewEnum | string;
    private 'metric_display_mode'?: WidgetInfoMetricDisplayModeEnum | string;
    public properties?: BaseWidgetInfoRespProperties;
    public location?: BaseWidgetInfoRespLocation;
    public unit?: string;
    private 'create_time'?: number;
    public constructor() { 
    }
    public withGroupId(groupId: string): WidgetInfo {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withMetrics(metrics: Array<WidgetMetricResp>): WidgetInfo {
        this['metrics'] = metrics;
        return this;
    }
    public withTitle(title: string): WidgetInfo {
        this['title'] = title;
        return this;
    }
    public withThreshold(threshold: number): WidgetInfo {
        this['threshold'] = threshold;
        return this;
    }
    public withThresholdEnabled(thresholdEnabled: boolean): WidgetInfo {
        this['threshold_enabled'] = thresholdEnabled;
        return this;
    }
    public set thresholdEnabled(thresholdEnabled: boolean  | undefined) {
        this['threshold_enabled'] = thresholdEnabled;
    }
    public get thresholdEnabled(): boolean | undefined {
        return this['threshold_enabled'];
    }
    public withView(view: WidgetInfoViewEnum | string): WidgetInfo {
        this['view'] = view;
        return this;
    }
    public withMetricDisplayMode(metricDisplayMode: WidgetInfoMetricDisplayModeEnum | string): WidgetInfo {
        this['metric_display_mode'] = metricDisplayMode;
        return this;
    }
    public set metricDisplayMode(metricDisplayMode: WidgetInfoMetricDisplayModeEnum | string  | undefined) {
        this['metric_display_mode'] = metricDisplayMode;
    }
    public get metricDisplayMode(): WidgetInfoMetricDisplayModeEnum | string | undefined {
        return this['metric_display_mode'];
    }
    public withProperties(properties: BaseWidgetInfoRespProperties): WidgetInfo {
        this['properties'] = properties;
        return this;
    }
    public withLocation(location: BaseWidgetInfoRespLocation): WidgetInfo {
        this['location'] = location;
        return this;
    }
    public withUnit(unit: string): WidgetInfo {
        this['unit'] = unit;
        return this;
    }
    public withCreateTime(createTime: number): WidgetInfo {
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
export enum WidgetInfoViewEnum {
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
export enum WidgetInfoMetricDisplayModeEnum {
    SINGLE = 'single',
    MULTIPLE = 'multiple'
}
