import { ExportSqlDataReq } from './ExportSqlDataReq';


export class ExportReplayReportRequest {
    private 'job_id'?: string;
    private 'X-Language'?: ExportReplayReportRequestXLanguageEnum | string;
    public body?: ExportSqlDataReq;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): ExportReplayReportRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: ExportReplayReportRequestXLanguageEnum | string): ExportReplayReportRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ExportReplayReportRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ExportReplayReportRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: ExportSqlDataReq): ExportReplayReportRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExportReplayReportRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
