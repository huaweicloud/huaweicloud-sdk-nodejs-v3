import { EnlargeVolume } from './EnlargeVolume';


export class StartInstanceEnlargeVolumeActionRequest {
    private 'X-Language'?: StartInstanceEnlargeVolumeActionRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: EnlargeVolume;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: StartInstanceEnlargeVolumeActionRequestXLanguageEnum | string): StartInstanceEnlargeVolumeActionRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: StartInstanceEnlargeVolumeActionRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): StartInstanceEnlargeVolumeActionRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): StartInstanceEnlargeVolumeActionRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: EnlargeVolume): StartInstanceEnlargeVolumeActionRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StartInstanceEnlargeVolumeActionRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
