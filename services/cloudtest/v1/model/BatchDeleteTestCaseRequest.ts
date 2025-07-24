import { BatchDeleteTestCaseRequestBody } from './BatchDeleteTestCaseRequestBody';


export class BatchDeleteTestCaseRequest {
    private 'project_id'?: string;
    public body?: BatchDeleteTestCaseRequestBody;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): BatchDeleteTestCaseRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: BatchDeleteTestCaseRequestBody): BatchDeleteTestCaseRequest {
        this['body'] = body;
        return this;
    }
}