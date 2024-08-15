import { ReportCustomEventRequestBody } from './ReportCustomEventRequestBody';


export class CreateReportCustomEventRequest {
    private 'integration_key'?: string;
    public body?: ReportCustomEventRequestBody;
    public constructor(integrationKey?: string) { 
        this['integration_key'] = integrationKey;
    }
    public withIntegrationKey(integrationKey: string): CreateReportCustomEventRequest {
        this['integration_key'] = integrationKey;
        return this;
    }
    public set integrationKey(integrationKey: string  | undefined) {
        this['integration_key'] = integrationKey;
    }
    public get integrationKey(): string | undefined {
        return this['integration_key'];
    }
    public withBody(body: ReportCustomEventRequestBody): CreateReportCustomEventRequest {
        this['body'] = body;
        return this;
    }
}