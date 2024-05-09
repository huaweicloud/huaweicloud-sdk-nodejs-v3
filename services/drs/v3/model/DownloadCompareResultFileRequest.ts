import { ExportCompareResultReq } from './ExportCompareResultReq';


export class DownloadCompareResultFileRequest {
    private 'X-Language'?: DownloadCompareResultFileRequestXLanguageEnum | string;
    private 'job_id'?: string;
    private 'compare_type'?: string;
    private 'compare_job_id'?: string;
    private 'Region'?: string;
    public body?: ExportCompareResultReq;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withXLanguage(xLanguage: DownloadCompareResultFileRequestXLanguageEnum | string): DownloadCompareResultFileRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: DownloadCompareResultFileRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): DownloadCompareResultFileRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withJobId(jobId: string): DownloadCompareResultFileRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withCompareType(compareType: string): DownloadCompareResultFileRequest {
        this['compare_type'] = compareType;
        return this;
    }
    public set compareType(compareType: string  | undefined) {
        this['compare_type'] = compareType;
    }
    public get compareType(): string | undefined {
        return this['compare_type'];
    }
    public withCompareJobId(compareJobId: string): DownloadCompareResultFileRequest {
        this['compare_job_id'] = compareJobId;
        return this;
    }
    public set compareJobId(compareJobId: string  | undefined) {
        this['compare_job_id'] = compareJobId;
    }
    public get compareJobId(): string | undefined {
        return this['compare_job_id'];
    }
    public withRegion(region: string): DownloadCompareResultFileRequest {
        this['Region'] = region;
        return this;
    }
    public set region(region: string  | undefined) {
        this['Region'] = region;
    }
    public get region(): string | undefined {
        return this['Region'];
    }
    public withBody(body: ExportCompareResultReq): DownloadCompareResultFileRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DownloadCompareResultFileRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
