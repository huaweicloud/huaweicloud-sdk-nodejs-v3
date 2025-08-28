import { ListInstanceMultiNodesSingleMetric } from './ListInstanceMultiNodesSingleMetric';


export class ListInstanceMultiNodesSingleMetricRequest {
    private 'X-Language'?: ListInstanceMultiNodesSingleMetricRequestXLanguageEnum | string;
    public body?: ListInstanceMultiNodesSingleMetric;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ListInstanceMultiNodesSingleMetricRequestXLanguageEnum | string): ListInstanceMultiNodesSingleMetricRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListInstanceMultiNodesSingleMetricRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListInstanceMultiNodesSingleMetricRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: ListInstanceMultiNodesSingleMetric): ListInstanceMultiNodesSingleMetricRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListInstanceMultiNodesSingleMetricRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
