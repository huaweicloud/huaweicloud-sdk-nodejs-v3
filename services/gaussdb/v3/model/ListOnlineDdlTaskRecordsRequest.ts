

export class ListOnlineDdlTaskRecordsRequest {
    private 'X-Language'?: ListOnlineDdlTaskRecordsRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: ListOnlineDdlTaskRecordsRequestXLanguageEnum | string): ListOnlineDdlTaskRecordsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListOnlineDdlTaskRecordsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListOnlineDdlTaskRecordsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListOnlineDdlTaskRecordsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withLimit(limit: number): ListOnlineDdlTaskRecordsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListOnlineDdlTaskRecordsRequest {
        this['offset'] = offset;
        return this;
    }
    public withStartTime(startTime: string): ListOnlineDdlTaskRecordsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListOnlineDdlTaskRecordsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListOnlineDdlTaskRecordsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
