import { SlowlogDownloadRequest } from './SlowlogDownloadRequest';


export class DownloadSlowlogRequest {
    private 'X-Language'?: DownloadSlowlogRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: SlowlogDownloadRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: DownloadSlowlogRequestXLanguageEnum | string): DownloadSlowlogRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: DownloadSlowlogRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): DownloadSlowlogRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): DownloadSlowlogRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: SlowlogDownloadRequest): DownloadSlowlogRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DownloadSlowlogRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
