import { MetricRequestV2 } from './MetricRequestV2';


export class ShowBugDensityV2Request {
    private 'project_id'?: string;
    public body?: MetricRequestV2;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ShowBugDensityV2Request {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: MetricRequestV2): ShowBugDensityV2Request {
        this['body'] = body;
        return this;
    }
}