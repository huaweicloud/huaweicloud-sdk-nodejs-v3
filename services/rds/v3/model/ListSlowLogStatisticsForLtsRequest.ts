import { SlowLogStatisticsForLtsRequest } from './SlowLogStatisticsForLtsRequest';


export class ListSlowLogStatisticsForLtsRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: ListSlowLogStatisticsForLtsRequestXLanguageEnum | string;
    public body?: SlowLogStatisticsForLtsRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListSlowLogStatisticsForLtsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: ListSlowLogStatisticsForLtsRequestXLanguageEnum | string): ListSlowLogStatisticsForLtsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListSlowLogStatisticsForLtsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListSlowLogStatisticsForLtsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: SlowLogStatisticsForLtsRequest): ListSlowLogStatisticsForLtsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSlowLogStatisticsForLtsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
