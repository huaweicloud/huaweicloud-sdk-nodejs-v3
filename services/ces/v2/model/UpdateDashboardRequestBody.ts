import { DashBoardNameItem } from './DashBoardNameItem';
import { ExtendInfo } from './ExtendInfo';
import { IsFavoriteItem } from './IsFavoriteItem';
import { WidgetDisplayMode } from './WidgetDisplayMode';


export class UpdateDashboardRequestBody {
    private 'dashboard_name'?: string;
    private 'is_favorite'?: boolean;
    private 'row_widget_num'?: number;
    public filter?: UpdateDashboardRequestBodyFilterEnum | string;
    public period?: UpdateDashboardRequestBodyPeriodEnum | number;
    private 'display_time'?: UpdateDashboardRequestBodyDisplayTimeEnum | number;
    private 'refresh_time'?: UpdateDashboardRequestBodyRefreshTimeEnum | number;
    public from?: number;
    public to?: number;
    private 'screen_color'?: string;
    private 'enable_screen_auto_play'?: boolean;
    private 'time_interval'?: UpdateDashboardRequestBodyTimeIntervalEnum | number;
    private 'enable_legend'?: boolean;
    private 'full_screen_widget_num'?: number;
    public constructor() { 
    }
    public withDashboardName(dashboardName: string): UpdateDashboardRequestBody {
        this['dashboard_name'] = dashboardName;
        return this;
    }
    public set dashboardName(dashboardName: string  | undefined) {
        this['dashboard_name'] = dashboardName;
    }
    public get dashboardName(): string | undefined {
        return this['dashboard_name'];
    }
    public withIsFavorite(isFavorite: boolean): UpdateDashboardRequestBody {
        this['is_favorite'] = isFavorite;
        return this;
    }
    public set isFavorite(isFavorite: boolean  | undefined) {
        this['is_favorite'] = isFavorite;
    }
    public get isFavorite(): boolean | undefined {
        return this['is_favorite'];
    }
    public withRowWidgetNum(rowWidgetNum: number): UpdateDashboardRequestBody {
        this['row_widget_num'] = rowWidgetNum;
        return this;
    }
    public set rowWidgetNum(rowWidgetNum: number  | undefined) {
        this['row_widget_num'] = rowWidgetNum;
    }
    public get rowWidgetNum(): number | undefined {
        return this['row_widget_num'];
    }
    public withFilter(filter: UpdateDashboardRequestBodyFilterEnum | string): UpdateDashboardRequestBody {
        this['filter'] = filter;
        return this;
    }
    public withPeriod(period: UpdateDashboardRequestBodyPeriodEnum | number): UpdateDashboardRequestBody {
        this['period'] = period;
        return this;
    }
    public withDisplayTime(displayTime: UpdateDashboardRequestBodyDisplayTimeEnum | number): UpdateDashboardRequestBody {
        this['display_time'] = displayTime;
        return this;
    }
    public set displayTime(displayTime: UpdateDashboardRequestBodyDisplayTimeEnum | number  | undefined) {
        this['display_time'] = displayTime;
    }
    public get displayTime(): UpdateDashboardRequestBodyDisplayTimeEnum | number | undefined {
        return this['display_time'];
    }
    public withRefreshTime(refreshTime: UpdateDashboardRequestBodyRefreshTimeEnum | number): UpdateDashboardRequestBody {
        this['refresh_time'] = refreshTime;
        return this;
    }
    public set refreshTime(refreshTime: UpdateDashboardRequestBodyRefreshTimeEnum | number  | undefined) {
        this['refresh_time'] = refreshTime;
    }
    public get refreshTime(): UpdateDashboardRequestBodyRefreshTimeEnum | number | undefined {
        return this['refresh_time'];
    }
    public withFrom(from: number): UpdateDashboardRequestBody {
        this['from'] = from;
        return this;
    }
    public withTo(to: number): UpdateDashboardRequestBody {
        this['to'] = to;
        return this;
    }
    public withScreenColor(screenColor: string): UpdateDashboardRequestBody {
        this['screen_color'] = screenColor;
        return this;
    }
    public set screenColor(screenColor: string  | undefined) {
        this['screen_color'] = screenColor;
    }
    public get screenColor(): string | undefined {
        return this['screen_color'];
    }
    public withEnableScreenAutoPlay(enableScreenAutoPlay: boolean): UpdateDashboardRequestBody {
        this['enable_screen_auto_play'] = enableScreenAutoPlay;
        return this;
    }
    public set enableScreenAutoPlay(enableScreenAutoPlay: boolean  | undefined) {
        this['enable_screen_auto_play'] = enableScreenAutoPlay;
    }
    public get enableScreenAutoPlay(): boolean | undefined {
        return this['enable_screen_auto_play'];
    }
    public withTimeInterval(timeInterval: UpdateDashboardRequestBodyTimeIntervalEnum | number): UpdateDashboardRequestBody {
        this['time_interval'] = timeInterval;
        return this;
    }
    public set timeInterval(timeInterval: UpdateDashboardRequestBodyTimeIntervalEnum | number  | undefined) {
        this['time_interval'] = timeInterval;
    }
    public get timeInterval(): UpdateDashboardRequestBodyTimeIntervalEnum | number | undefined {
        return this['time_interval'];
    }
    public withEnableLegend(enableLegend: boolean): UpdateDashboardRequestBody {
        this['enable_legend'] = enableLegend;
        return this;
    }
    public set enableLegend(enableLegend: boolean  | undefined) {
        this['enable_legend'] = enableLegend;
    }
    public get enableLegend(): boolean | undefined {
        return this['enable_legend'];
    }
    public withFullScreenWidgetNum(fullScreenWidgetNum: number): UpdateDashboardRequestBody {
        this['full_screen_widget_num'] = fullScreenWidgetNum;
        return this;
    }
    public set fullScreenWidgetNum(fullScreenWidgetNum: number  | undefined) {
        this['full_screen_widget_num'] = fullScreenWidgetNum;
    }
    public get fullScreenWidgetNum(): number | undefined {
        return this['full_screen_widget_num'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateDashboardRequestBodyFilterEnum {
    AVERAGE = 'average',
    MIN = 'min',
    MAX = 'max',
    SUM = 'sum'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateDashboardRequestBodyPeriodEnum {
    NUMBER_1 = 1,
    NUMBER_60 = 60,
    NUMBER_300 = 300,
    NUMBER_1200 = 1200,
    NUMBER_3600 = 3600,
    NUMBER_14400 = 14400,
    NUMBER_86400 = 86400
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateDashboardRequestBodyDisplayTimeEnum {
    NUMBER_0 = 0,
    NUMBER_5 = 5,
    NUMBER_15 = 15,
    NUMBER_30 = 30,
    NUMBER_60 = 60,
    NUMBER_120 = 120,
    NUMBER_180 = 180,
    NUMBER_720 = 720,
    NUMBER_1440 = 1440,
    NUMBER_10080 = 10080,
    NUMBER_43200 = 43200
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateDashboardRequestBodyRefreshTimeEnum {
    NUMBER_0 = 0,
    NUMBER_10 = 10,
    NUMBER_60 = 60,
    NUMBER_300 = 300,
    NUMBER_1200 = 1200
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateDashboardRequestBodyTimeIntervalEnum {
    NUMBER_10000 = 10000,
    NUMBER_30000 = 30000,
    NUMBER_60000 = 60000
}
