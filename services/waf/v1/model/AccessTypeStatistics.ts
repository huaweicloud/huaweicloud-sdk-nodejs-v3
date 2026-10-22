

export class AccessTypeStatistics {
    private 'access_type'?: AccessTypeStatisticsAccessTypeEnum | string;
    private 'text_request_count'?: number;
    private 'image_request_count'?: number;
    public constructor(accessType?: string, textRequestCount?: number, imageRequestCount?: number) { 
        this['access_type'] = accessType;
        this['text_request_count'] = textRequestCount;
        this['image_request_count'] = imageRequestCount;
    }
    public withAccessType(accessType: AccessTypeStatisticsAccessTypeEnum | string): AccessTypeStatistics {
        this['access_type'] = accessType;
        return this;
    }
    public set accessType(accessType: AccessTypeStatisticsAccessTypeEnum | string  | undefined) {
        this['access_type'] = accessType;
    }
    public get accessType(): AccessTypeStatisticsAccessTypeEnum | string | undefined {
        return this['access_type'];
    }
    public withTextRequestCount(textRequestCount: number): AccessTypeStatistics {
        this['text_request_count'] = textRequestCount;
        return this;
    }
    public set textRequestCount(textRequestCount: number  | undefined) {
        this['text_request_count'] = textRequestCount;
    }
    public get textRequestCount(): number | undefined {
        return this['text_request_count'];
    }
    public withImageRequestCount(imageRequestCount: number): AccessTypeStatistics {
        this['image_request_count'] = imageRequestCount;
        return this;
    }
    public set imageRequestCount(imageRequestCount: number  | undefined) {
        this['image_request_count'] = imageRequestCount;
    }
    public get imageRequestCount(): number | undefined {
        return this['image_request_count'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AccessTypeStatisticsAccessTypeEnum {
    API = 'api',
    WAF = 'waf'
}
