import { UpdateTestCaseListInfo } from './UpdateTestCaseListInfo';


export class BatchUpdateVersionTestCasesRequest {
    private 'project_id'?: string;
    public body?: UpdateTestCaseListInfo;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): BatchUpdateVersionTestCasesRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: UpdateTestCaseListInfo): BatchUpdateVersionTestCasesRequest {
        this['body'] = body;
        return this;
    }
}