import { BatchDealResourceTagReq } from './BatchDealResourceTagReq';


export class BatchTagActionRequest {
    private 'resource_type'?: string;
    private 'job_id'?: string;
    private 'X-Language'?: BatchTagActionRequestXLanguageEnum | string;
    public body?: BatchDealResourceTagReq;
    public constructor(resourceType?: string, jobId?: string) { 
        this['resource_type'] = resourceType;
        this['job_id'] = jobId;
    }
    public withResourceType(resourceType: string): BatchTagActionRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withJobId(jobId: string): BatchTagActionRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: BatchTagActionRequestXLanguageEnum | string): BatchTagActionRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchTagActionRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): BatchTagActionRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: BatchDealResourceTagReq): BatchTagActionRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchTagActionRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
