

export class ShowAlarmHistoryRecordRequest {
    private 'X-Language'?: ShowAlarmHistoryRecordRequestXLanguageEnum | string;
    private 'start_time'?: string;
    public offset?: number;
    public limit?: number;
    public level?: ShowAlarmHistoryRecordRequestLevelEnum | number;
    public constructor(startTime?: string, offset?: number, limit?: number) { 
        this['start_time'] = startTime;
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withXLanguage(xLanguage: ShowAlarmHistoryRecordRequestXLanguageEnum | string): ShowAlarmHistoryRecordRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowAlarmHistoryRecordRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowAlarmHistoryRecordRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withStartTime(startTime: string): ShowAlarmHistoryRecordRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withOffset(offset: number): ShowAlarmHistoryRecordRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowAlarmHistoryRecordRequest {
        this['limit'] = limit;
        return this;
    }
    public withLevel(level: ShowAlarmHistoryRecordRequestLevelEnum | number): ShowAlarmHistoryRecordRequest {
        this['level'] = level;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowAlarmHistoryRecordRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowAlarmHistoryRecordRequestLevelEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3,
    NUMBER_4 = 4
}
