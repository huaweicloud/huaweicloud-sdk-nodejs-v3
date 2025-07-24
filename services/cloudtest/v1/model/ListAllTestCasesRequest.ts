import { TestCasesQueryInfo } from './TestCasesQueryInfo';


export class ListAllTestCasesRequest {
    private 'project_id'?: string;
    public body?: TestCasesQueryInfo;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ListAllTestCasesRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: TestCasesQueryInfo): ListAllTestCasesRequest {
        this['body'] = body;
        return this;
    }
}