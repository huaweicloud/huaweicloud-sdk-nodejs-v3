

export class ExtendInfoResp {
    public filter?: ExtendInfoRespFilterEnum | string;
    public period?: string;
    private 'display_time'?: ExtendInfoRespDisplayTimeEnum | number;
    private 'refresh_time'?: ExtendInfoRespRefreshTimeEnum | number;
    public from?: number;
    public to?: number;
    private 'screen_color'?: string;
    private 'enable_screen_auto_play'?: boolean;
    private 'time_interval'?: ExtendInfoRespTimeIntervalEnum | number;
    private 'enable_legend'?: boolean;
    private 'full_screen_widget_num'?: number;
    public constructor() { 
    }
    public withFilter(filter: ExtendInfoRespFilterEnum | string): ExtendInfoResp {
        this['filter'] = filter;
        return this;
    }
    public withPeriod(period: string): ExtendInfoResp {
        this['period'] = period;
        return this;
    }
    public withDisplayTime(displayTime: ExtendInfoRespDisplayTimeEnum | number): ExtendInfoResp {
        this['display_time'] = displayTime;
        return this;
    }
    public set displayTime(displayTime: ExtendInfoRespDisplayTimeEnum | number  | undefined) {
        this['display_time'] = displayTime;
    }
    public get displayTime(): ExtendInfoRespDisplayTimeEnum | number | undefined {
        return this['display_time'];
    }
    public withRefreshTime(refreshTime: ExtendInfoRespRefreshTimeEnum | number): ExtendInfoResp {
        this['refresh_time'] = refreshTime;
        return this;
    }
    public set refreshTime(refreshTime: ExtendInfoRespRefreshTimeEnum | number  | undefined) {
        this['refresh_time'] = refreshTime;
    }
    public get refreshTime(): ExtendInfoRespRefreshTimeEnum | number | undefined {
        return this['refresh_time'];
    }
    public withFrom(from: number): ExtendInfoResp {
        this['from'] = from;
        return this;
    }
    public withTo(to: number): ExtendInfoResp {
        this['to'] = to;
        return this;
    }
    public withScreenColor(screenColor: string): ExtendInfoResp {
        this['screen_color'] = screenColor;
        return this;
    }
    public set screenColor(screenColor: string  | undefined) {
        this['screen_color'] = screenColor;
    }
    public get screenColor(): string | undefined {
        return this['screen_color'];
    }
    public withEnableScreenAutoPlay(enableScreenAutoPlay: boolean): ExtendInfoResp {
        this['enable_screen_auto_play'] = enableScreenAutoPlay;
        return this;
    }
    public set enableScreenAutoPlay(enableScreenAutoPlay: boolean  | undefined) {
        this['enable_screen_auto_play'] = enableScreenAutoPlay;
    }
    public get enableScreenAutoPlay(): boolean | undefined {
        return this['enable_screen_auto_play'];
    }
    public withTimeInterval(timeInterval: ExtendInfoRespTimeIntervalEnum | number): ExtendInfoResp {
        this['time_interval'] = timeInterval;
        return this;
    }
    public set timeInterval(timeInterval: ExtendInfoRespTimeIntervalEnum | number  | undefined) {
        this['time_interval'] = timeInterval;
    }
    public get timeInterval(): ExtendInfoRespTimeIntervalEnum | number | undefined {
        return this['time_interval'];
    }
    public withEnableLegend(enableLegend: boolean): ExtendInfoResp {
        this['enable_legend'] = enableLegend;
        return this;
    }
    public set enableLegend(enableLegend: boolean  | undefined) {
        this['enable_legend'] = enableLegend;
    }
    public get enableLegend(): boolean | undefined {
        return this['enable_legend'];
    }
    public withFullScreenWidgetNum(fullScreenWidgetNum: number): ExtendInfoResp {
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
export enum ExtendInfoRespFilterEnum {
    AVERAGE = 'average',
    MIN = 'min',
    MAX = 'max',
    SUM = 'sum'
}
/**
    * @export
    * @enum {string}
    */
export enum ExtendInfoRespDisplayTimeEnum {
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
export enum ExtendInfoRespRefreshTimeEnum {
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
export enum ExtendInfoRespTimeIntervalEnum {
    NUMBER_10000 = 10000,
    NUMBER_30000 = 30000,
    NUMBER_60000 = 60000
}
