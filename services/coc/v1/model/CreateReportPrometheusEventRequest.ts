

export class CreateReportPrometheusEventRequest {
    private 'integration_key'?: string;
    public body?: { [key: string]: object; };
    public constructor(integrationKey?: string) { 
        this['integration_key'] = integrationKey;
    }
    public withIntegrationKey(integrationKey: string): CreateReportPrometheusEventRequest {
        this['integration_key'] = integrationKey;
        return this;
    }
    public set integrationKey(integrationKey: string  | undefined) {
        this['integration_key'] = integrationKey;
    }
    public get integrationKey(): string | undefined {
        return this['integration_key'];
    }
    public withBody(body: { [key: string]: object; }): CreateReportPrometheusEventRequest {
        this['body'] = body;
        return this;
    }
}