import { RunTestCaseRequestBody } from './RunTestCaseRequestBody';


export class RunTestCaseRequest {
    private 'project_id'?: string;
    public body?: RunTestCaseRequestBody;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): RunTestCaseRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: RunTestCaseRequestBody): RunTestCaseRequest {
        this['body'] = body;
        return this;
    }
}