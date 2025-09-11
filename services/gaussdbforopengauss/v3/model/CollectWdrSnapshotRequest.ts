import { CollectWdrSnapshotRequestBody } from './CollectWdrSnapshotRequestBody';


export class CollectWdrSnapshotRequest {
    private 'X-Language'?: CollectWdrSnapshotRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: CollectWdrSnapshotRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: CollectWdrSnapshotRequestXLanguageEnum | string): CollectWdrSnapshotRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CollectWdrSnapshotRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CollectWdrSnapshotRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): CollectWdrSnapshotRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CollectWdrSnapshotRequestBody): CollectWdrSnapshotRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CollectWdrSnapshotRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
