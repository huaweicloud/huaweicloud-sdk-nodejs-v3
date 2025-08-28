import { TransactionSwitchReq } from './TransactionSwitchReq';


export class ChangeTransactionSwitchStatusRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: ChangeTransactionSwitchStatusRequestXLanguageEnum | string;
    public body?: TransactionSwitchReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ChangeTransactionSwitchStatusRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: ChangeTransactionSwitchStatusRequestXLanguageEnum | string): ChangeTransactionSwitchStatusRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ChangeTransactionSwitchStatusRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ChangeTransactionSwitchStatusRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: TransactionSwitchReq): ChangeTransactionSwitchStatusRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ChangeTransactionSwitchStatusRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
