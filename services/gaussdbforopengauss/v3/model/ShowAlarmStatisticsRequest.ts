

export class ShowAlarmStatisticsRequest {
    private 'X-Language'?: ShowAlarmStatisticsRequestXLanguageEnum | string;
    private 'start_time'?: string;
    private 'top_num'?: number;
    public constructor(startTime?: string, topNum?: number) { 
        this['start_time'] = startTime;
        this['top_num'] = topNum;
    }
    public withXLanguage(xLanguage: ShowAlarmStatisticsRequestXLanguageEnum | string): ShowAlarmStatisticsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowAlarmStatisticsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowAlarmStatisticsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withStartTime(startTime: string): ShowAlarmStatisticsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withTopNum(topNum: number): ShowAlarmStatisticsRequest {
        this['top_num'] = topNum;
        return this;
    }
    public set topNum(topNum: number  | undefined) {
        this['top_num'] = topNum;
    }
    public get topNum(): number | undefined {
        return this['top_num'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowAlarmStatisticsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
