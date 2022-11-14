import { UpdateAlertNoticeConfigRequestBody } from './UpdateAlertNoticeConfigRequestBody';


export class UpdateAlertNoticeConfigRequest {
    private 'Content-Type': string | undefined;
    private 'X-Language': string | undefined;
    private 'alert_id': string | undefined;
    public body?: UpdateAlertNoticeConfigRequestBody;
    public constructor(contentType?: any, xLanguage?: any, alertId?: any) { 
        this['Content-Type'] = contentType;
        this['X-Language'] = xLanguage;
        this['alert_id'] = alertId;
    }
    public withContentType(contentType: string): UpdateAlertNoticeConfigRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withXLanguage(xLanguage: string): UpdateAlertNoticeConfigRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
    public withAlertId(alertId: string): UpdateAlertNoticeConfigRequest {
        this['alert_id'] = alertId;
        return this;
    }
    public set alertId(alertId: string | undefined) {
        this['alert_id'] = alertId;
    }
    public get alertId() {
        return this['alert_id'];
    }
    public withBody(body: UpdateAlertNoticeConfigRequestBody): UpdateAlertNoticeConfigRequest {
        this['body'] = body;
        return this;
    }
}