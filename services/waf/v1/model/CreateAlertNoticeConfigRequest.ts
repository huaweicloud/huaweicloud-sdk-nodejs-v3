import { AlertNoticeConfig } from './AlertNoticeConfig';


export class CreateAlertNoticeConfigRequest {
    private 'X-Language'?: string;
    private 'Content-Type'?: string;
    public enterpriseProjectId?: string;
    public body?: AlertNoticeConfig;
    public constructor(xLanguage?: string, contentType?: string, enterpriseProjectId?: string) { 
        this['X-Language'] = xLanguage;
        this['Content-Type'] = contentType;
        this['enterpriseProjectId'] = enterpriseProjectId;
    }
    public withXLanguage(xLanguage: string): CreateAlertNoticeConfigRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withContentType(contentType: string): CreateAlertNoticeConfigRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateAlertNoticeConfigRequest {
        this['enterpriseProjectId'] = enterpriseProjectId;
        return this;
    }
    public withBody(body: AlertNoticeConfig): CreateAlertNoticeConfigRequest {
        this['body'] = body;
        return this;
    }
}