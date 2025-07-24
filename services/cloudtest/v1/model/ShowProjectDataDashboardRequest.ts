import { TestReportInfoRequestBody } from './TestReportInfoRequestBody';


export class ShowProjectDataDashboardRequest {
    private 'project_id'?: string;
    public body?: TestReportInfoRequestBody;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ShowProjectDataDashboardRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: TestReportInfoRequestBody): ShowProjectDataDashboardRequest {
        this['body'] = body;
        return this;
    }
}