import { ReplaceNodeRequest } from './ReplaceNodeRequest';


export class NotifyReplaceNodeRequest {
    private 'X-Language'?: NotifyReplaceNodeRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: ReplaceNodeRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: NotifyReplaceNodeRequestXLanguageEnum | string): NotifyReplaceNodeRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: NotifyReplaceNodeRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): NotifyReplaceNodeRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): NotifyReplaceNodeRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ReplaceNodeRequest): NotifyReplaceNodeRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NotifyReplaceNodeRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
