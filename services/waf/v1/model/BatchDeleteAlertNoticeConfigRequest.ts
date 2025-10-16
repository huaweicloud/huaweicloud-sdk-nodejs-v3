import { AlertNoticeConfigList } from './AlertNoticeConfigList';


export class BatchDeleteAlertNoticeConfigRequest {
    public enterpriseProjectId?: string;
    private 'X-Language'?: string;
    private 'Content-Type'?: string;
    public body?: AlertNoticeConfigList;
    public constructor(enterpriseProjectId?: string, xLanguage?: string) { 
        this['enterpriseProjectId'] = enterpriseProjectId;
        this['X-Language'] = xLanguage;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): BatchDeleteAlertNoticeConfigRequest {
        this['enterpriseProjectId'] = enterpriseProjectId;
        return this;
    }
    public withXLanguage(xLanguage: string): BatchDeleteAlertNoticeConfigRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withContentType(contentType: string): BatchDeleteAlertNoticeConfigRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: AlertNoticeConfigList): BatchDeleteAlertNoticeConfigRequest {
        this['body'] = body;
        return this;
    }
}