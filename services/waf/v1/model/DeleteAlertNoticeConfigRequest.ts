

export class DeleteAlertNoticeConfigRequest {
    private 'Content-Type'?: string;
    private 'X-Language'?: string;
    private 'alert_id'?: string;
    public constructor(contentType?: string, xLanguage?: string, alertId?: string) { 
        this['Content-Type'] = contentType;
        this['X-Language'] = xLanguage;
        this['alert_id'] = alertId;
    }
    public withContentType(contentType: string): DeleteAlertNoticeConfigRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withXLanguage(xLanguage: string): DeleteAlertNoticeConfigRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withAlertId(alertId: string): DeleteAlertNoticeConfigRequest {
        this['alert_id'] = alertId;
        return this;
    }
    public set alertId(alertId: string  | undefined) {
        this['alert_id'] = alertId;
    }
    public get alertId(): string | undefined {
        return this['alert_id'];
    }
}