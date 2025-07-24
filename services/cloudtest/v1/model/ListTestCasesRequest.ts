import { ListTestCasesRequestBody } from './ListTestCasesRequestBody';


export class ListTestCasesRequest {
    private 'project_id'?: string;
    public body?: ListTestCasesRequestBody;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ListTestCasesRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: ListTestCasesRequestBody): ListTestCasesRequest {
        this['body'] = body;
        return this;
    }
}