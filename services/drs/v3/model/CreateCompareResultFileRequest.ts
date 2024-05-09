import { ExportCompareResultReq } from './ExportCompareResultReq';


export class CreateCompareResultFileRequest {
    private 'X-Language'?: CreateCompareResultFileRequestXLanguageEnum | string;
    private 'Region'?: string;
    private 'job_id'?: string;
    public body?: ExportCompareResultReq;
    public constructor(region?: string, jobId?: string) { 
        this['Region'] = region;
        this['job_id'] = jobId;
    }
    public withXLanguage(xLanguage: CreateCompareResultFileRequestXLanguageEnum | string): CreateCompareResultFileRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CreateCompareResultFileRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CreateCompareResultFileRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withRegion(region: string): CreateCompareResultFileRequest {
        this['Region'] = region;
        return this;
    }
    public set region(region: string  | undefined) {
        this['Region'] = region;
    }
    public get region(): string | undefined {
        return this['Region'];
    }
    public withJobId(jobId: string): CreateCompareResultFileRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withBody(body: ExportCompareResultReq): CreateCompareResultFileRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateCompareResultFileRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
