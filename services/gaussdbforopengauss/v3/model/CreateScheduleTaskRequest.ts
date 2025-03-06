import { CreateScheduleTaskRequestBody } from './CreateScheduleTaskRequestBody';


export class CreateScheduleTaskRequest {
    private 'X-Language'?: CreateScheduleTaskRequestXLanguageEnum | string;
    public body?: CreateScheduleTaskRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: CreateScheduleTaskRequestXLanguageEnum | string): CreateScheduleTaskRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CreateScheduleTaskRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CreateScheduleTaskRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: CreateScheduleTaskRequestBody): CreateScheduleTaskRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateScheduleTaskRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
