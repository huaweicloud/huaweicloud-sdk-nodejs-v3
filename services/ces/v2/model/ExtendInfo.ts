

export class ExtendInfo {
    public filter?: ExtendInfoFilterEnum | string;
    public period?: string;
    private 'display_time'?: ExtendInfoDisplayTimeEnum | number;
    private 'refresh_time'?: ExtendInfoRefreshTimeEnum | number;
    public from?: number;
    public to?: number;
    private 'screen_color'?: string;
    private 'enable_screen_auto_play'?: boolean;
    private 'time_interval'?: ExtendInfoTimeIntervalEnum | number;
    private 'enable_legend'?: boolean;
    private 'full_screen_widget_num'?: number;
    public constructor() { 
    }
    public withFilter(filter: ExtendInfoFilterEnum | string): ExtendInfo {
        this['filter'] = filter;
        return this;
    }
    public withPeriod(period: string): ExtendInfo {
        this['period'] = period;
        return this;
    }
    public withDisplayTime(displayTime: ExtendInfoDisplayTimeEnum | number): ExtendInfo {
        this['display_time'] = displayTime;
        return this;
    }
    public set displayTime(displayTime: ExtendInfoDisplayTimeEnum | number  | undefined) {
        this['display_time'] = displayTime;
    }
    public get displayTime(): ExtendInfoDisplayTimeEnum | number | undefined {
        return this['display_time'];
    }
    public withRefreshTime(refreshTime: ExtendInfoRefreshTimeEnum | number): ExtendInfo {
        this['refresh_time'] = refreshTime;
        return this;
    }
    public set refreshTime(refreshTime: ExtendInfoRefreshTimeEnum | number  | undefined) {
        this['refresh_time'] = refreshTime;
    }
    public get refreshTime(): ExtendInfoRefreshTimeEnum | number | undefined {
        return this['refresh_time'];
    }
    public withFrom(from: number): ExtendInfo {
        this['from'] = from;
        return this;
    }
    public withTo(to: number): ExtendInfo {
        this['to'] = to;
        return this;
    }
    public withScreenColor(screenColor: string): ExtendInfo {
        this['screen_color'] = screenColor;
        return this;
    }
    public set screenColor(screenColor: string  | undefined) {
        this['screen_color'] = screenColor;
    }
    public get screenColor(): string | undefined {
        return this['screen_color'];
    }
    public withEnableScreenAutoPlay(enableScreenAutoPlay: boolean): ExtendInfo {
        this['enable_screen_auto_play'] = enableScreenAutoPlay;
        return this;
    }
    public set enableScreenAutoPlay(enableScreenAutoPlay: boolean  | undefined) {
        this['enable_screen_auto_play'] = enableScreenAutoPlay;
    }
    public get enableScreenAutoPlay(): boolean | undefined {
        return this['enable_screen_auto_play'];
    }
    public withTimeInterval(timeInterval: ExtendInfoTimeIntervalEnum | number): ExtendInfo {
        this['time_interval'] = timeInterval;
        return this;
    }
    public set timeInterval(timeInterval: ExtendInfoTimeIntervalEnum | number  | undefined) {
        this['time_interval'] = timeInterval;
    }
    public get timeInterval(): ExtendInfoTimeIntervalEnum | number | undefined {
        return this['time_interval'];
    }
    public withEnableLegend(enableLegend: boolean): ExtendInfo {
        this['enable_legend'] = enableLegend;
        return this;
    }
    public set enableLegend(enableLegend: boolean  | undefined) {
        this['enable_legend'] = enableLegend;
    }
    public get enableLegend(): boolean | undefined {
        return this['enable_legend'];
    }
    public withFullScreenWidgetNum(fullScreenWidgetNum: number): ExtendInfo {
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
export enum ExtendInfoFilterEnum {
    AVERAGE = 'average',
    MIN = 'min',
    MAX = 'max',
    SUM = 'sum'
}
/**
    * @export
    * @enum {string}
    */
export enum ExtendInfoDisplayTimeEnum {
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
export enum ExtendInfoRefreshTimeEnum {
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
export enum ExtendInfoTimeIntervalEnum {
    NUMBER_10000 = 10000,
    NUMBER_30000 = 30000,
    NUMBER_60000 = 60000
}
