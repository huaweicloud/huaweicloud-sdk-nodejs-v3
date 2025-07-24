import { CommRequestTestCasePageParam } from './CommRequestTestCasePageParam';


export class BatchShowTestCaseRequest {
    private 'project_id'?: string;
    public body?: CommRequestTestCasePageParam;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): BatchShowTestCaseRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: CommRequestTestCasePageParam): BatchShowTestCaseRequest {
        this['body'] = body;
        return this;
    }
}