import { ReduceVolumeRequestBody } from './ReduceVolumeRequestBody';


export class StartInstanceReduceVolumeActionRequest {
    private 'X-Language'?: StartInstanceReduceVolumeActionRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: ReduceVolumeRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: StartInstanceReduceVolumeActionRequestXLanguageEnum | string): StartInstanceReduceVolumeActionRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: StartInstanceReduceVolumeActionRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): StartInstanceReduceVolumeActionRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): StartInstanceReduceVolumeActionRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ReduceVolumeRequestBody): StartInstanceReduceVolumeActionRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StartInstanceReduceVolumeActionRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
