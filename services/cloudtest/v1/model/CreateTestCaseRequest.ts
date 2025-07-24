import { CreateTestCaseRequestBody } from './CreateTestCaseRequestBody';


export class CreateTestCaseRequest {
    private 'project_id'?: string;
    public body?: CreateTestCaseRequestBody;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): CreateTestCaseRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: CreateTestCaseRequestBody): CreateTestCaseRequest {
        this['body'] = body;
        return this;
    }
}