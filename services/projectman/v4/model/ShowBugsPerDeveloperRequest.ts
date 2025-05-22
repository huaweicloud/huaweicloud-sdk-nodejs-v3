import { MetricRequest2 } from './MetricRequest2';


export class ShowBugsPerDeveloperRequest {
    private 'project_id'?: string;
    public body?: MetricRequest2;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ShowBugsPerDeveloperRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: MetricRequest2): ShowBugsPerDeveloperRequest {
        this['body'] = body;
        return this;
    }
}