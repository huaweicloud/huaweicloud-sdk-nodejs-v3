import { MetricRequest3 } from './MetricRequest3';


export class ShowCompletionRateRequest {
    private 'project_id'?: string;
    public body?: MetricRequest3;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ShowCompletionRateRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: MetricRequest3): ShowCompletionRateRequest {
        this['body'] = body;
        return this;
    }
}