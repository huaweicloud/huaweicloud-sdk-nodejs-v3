import { UpdateTestCaseResultRequestBody } from './UpdateTestCaseResultRequestBody';


export class UpdateTestCaseResultRequest {
    private 'project_id'?: string;
    public body?: UpdateTestCaseResultRequestBody;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): UpdateTestCaseResultRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: UpdateTestCaseResultRequestBody): UpdateTestCaseResultRequest {
        this['body'] = body;
        return this;
    }
}