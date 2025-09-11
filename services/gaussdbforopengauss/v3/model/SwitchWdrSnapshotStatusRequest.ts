import { SwitchWdrSnapshotRequestBody } from './SwitchWdrSnapshotRequestBody';


export class SwitchWdrSnapshotStatusRequest {
    private 'X-Language'?: SwitchWdrSnapshotStatusRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: SwitchWdrSnapshotRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: SwitchWdrSnapshotStatusRequestXLanguageEnum | string): SwitchWdrSnapshotStatusRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: SwitchWdrSnapshotStatusRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): SwitchWdrSnapshotStatusRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): SwitchWdrSnapshotStatusRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: SwitchWdrSnapshotRequestBody): SwitchWdrSnapshotStatusRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SwitchWdrSnapshotStatusRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
