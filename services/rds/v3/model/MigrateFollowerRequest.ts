import { FollowerMigrateRequest } from './FollowerMigrateRequest';


export class MigrateFollowerRequest {
    private 'X-Language'?: MigrateFollowerRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: FollowerMigrateRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: MigrateFollowerRequestXLanguageEnum | string): MigrateFollowerRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: MigrateFollowerRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): MigrateFollowerRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): MigrateFollowerRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: FollowerMigrateRequest): MigrateFollowerRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MigrateFollowerRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
