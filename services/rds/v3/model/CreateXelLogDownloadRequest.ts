import { CreateXelLogDownloadRequestBody } from './CreateXelLogDownloadRequestBody';


export class CreateXelLogDownloadRequest {
    private 'X-Language'?: CreateXelLogDownloadRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: CreateXelLogDownloadRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: CreateXelLogDownloadRequestXLanguageEnum | string): CreateXelLogDownloadRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CreateXelLogDownloadRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CreateXelLogDownloadRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): CreateXelLogDownloadRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CreateXelLogDownloadRequestBody): CreateXelLogDownloadRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateXelLogDownloadRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
