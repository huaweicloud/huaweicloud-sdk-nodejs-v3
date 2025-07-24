import { QueryTaskTestCasesInfo } from './QueryTaskTestCasesInfo';


export class ListTaskTestCasesRequest {
    private 'project_id'?: string;
    public body?: QueryTaskTestCasesInfo;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ListTaskTestCasesRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: QueryTaskTestCasesInfo): ListTaskTestCasesRequest {
        this['body'] = body;
        return this;
    }
}