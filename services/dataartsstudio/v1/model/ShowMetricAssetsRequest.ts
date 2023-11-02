import { MetricOpenSearchParams } from './MetricOpenSearchParams';


export class ShowMetricAssetsRequest {
    public workspace?: string;
    public body?: MetricOpenSearchParams;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ShowMetricAssetsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: MetricOpenSearchParams): ShowMetricAssetsRequest {
        this['body'] = body;
        return this;
    }
}