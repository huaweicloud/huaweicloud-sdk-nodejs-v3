import { ShowUserExecuteTestCaseInfoRequestBody } from './ShowUserExecuteTestCaseInfoRequestBody';


export class ShowUserExecuteTestCaseInfoRequest {
    private 'project_id'?: string;
    public body?: ShowUserExecuteTestCaseInfoRequestBody;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ShowUserExecuteTestCaseInfoRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: ShowUserExecuteTestCaseInfoRequestBody): ShowUserExecuteTestCaseInfoRequest {
        this['body'] = body;
        return this;
    }
}