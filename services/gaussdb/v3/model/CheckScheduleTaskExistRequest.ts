import { CheckScheduleTaskExistRequestBody } from './CheckScheduleTaskExistRequestBody';


export class CheckScheduleTaskExistRequest {
    private 'X-Language'?: CheckScheduleTaskExistRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: CheckScheduleTaskExistRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: CheckScheduleTaskExistRequestXLanguageEnum | string): CheckScheduleTaskExistRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CheckScheduleTaskExistRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CheckScheduleTaskExistRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): CheckScheduleTaskExistRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CheckScheduleTaskExistRequestBody): CheckScheduleTaskExistRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CheckScheduleTaskExistRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
