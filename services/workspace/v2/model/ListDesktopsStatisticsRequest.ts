

export class ListDesktopsStatisticsRequest {
    private 'desktop_type'?: Array<string>;
    private 'statistics_type'?: Array<ListDesktopsStatisticsRequestStatisticsTypeEnum> | Array<string>;
    public constructor() { 
    }
    public withDesktopType(desktopType: Array<string>): ListDesktopsStatisticsRequest {
        this['desktop_type'] = desktopType;
        return this;
    }
    public set desktopType(desktopType: Array<string>  | undefined) {
        this['desktop_type'] = desktopType;
    }
    public get desktopType(): Array<string> | undefined {
        return this['desktop_type'];
    }
    public withStatisticsType(statisticsType: Array<ListDesktopsStatisticsRequestStatisticsTypeEnum> | Array<string>): ListDesktopsStatisticsRequest {
        this['statistics_type'] = statisticsType;
        return this;
    }
    public set statisticsType(statisticsType: Array<ListDesktopsStatisticsRequestStatisticsTypeEnum> | Array<string>  | undefined) {
        this['statistics_type'] = statisticsType;
    }
    public get statisticsType(): Array<ListDesktopsStatisticsRequestStatisticsTypeEnum> | Array<string> | undefined {
        return this['statistics_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListDesktopsStatisticsRequestStatisticsTypeEnum {
    ATTACH_STATE = 'attach-state',
    LOGIN_STATE = 'login-state',
    RUN_STATE = 'run-state'
}
