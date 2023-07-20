import { CustomerUpgradeDatabaseVersionReq } from './CustomerUpgradeDatabaseVersionReq';


export class UpgradeDbVersionRequest {
    private 'X-Language'?: UpgradeDbVersionRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: CustomerUpgradeDatabaseVersionReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: UpgradeDbVersionRequestXLanguageEnum | string): UpgradeDbVersionRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: UpgradeDbVersionRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): UpgradeDbVersionRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): UpgradeDbVersionRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CustomerUpgradeDatabaseVersionReq): UpgradeDbVersionRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpgradeDbVersionRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
