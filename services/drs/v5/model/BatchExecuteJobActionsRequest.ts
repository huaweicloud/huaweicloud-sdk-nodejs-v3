import { BatchJobActionReq } from './BatchJobActionReq';


export class BatchExecuteJobActionsRequest {
    private 'X-Language'?: BatchExecuteJobActionsRequestXLanguageEnum | string;
    public body?: BatchJobActionReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: BatchExecuteJobActionsRequestXLanguageEnum | string): BatchExecuteJobActionsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchExecuteJobActionsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): BatchExecuteJobActionsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: BatchJobActionReq): BatchExecuteJobActionsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchExecuteJobActionsRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
