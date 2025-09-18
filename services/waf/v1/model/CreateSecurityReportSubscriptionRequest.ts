import { CreateSecurityReportSubscriptionRequestBody } from './CreateSecurityReportSubscriptionRequestBody';


export class CreateSecurityReportSubscriptionRequest {
    private 'Content-Type'?: string;
    public body?: CreateSecurityReportSubscriptionRequestBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): CreateSecurityReportSubscriptionRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: CreateSecurityReportSubscriptionRequestBody): CreateSecurityReportSubscriptionRequest {
        this['body'] = body;
        return this;
    }
}