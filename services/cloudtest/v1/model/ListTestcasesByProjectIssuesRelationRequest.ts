import { QueryProjectIssuesRelationTestCasesInfo } from './QueryProjectIssuesRelationTestCasesInfo';


export class ListTestcasesByProjectIssuesRelationRequest {
    private 'project_id'?: string;
    public body?: QueryProjectIssuesRelationTestCasesInfo;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ListTestcasesByProjectIssuesRelationRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: QueryProjectIssuesRelationTestCasesInfo): ListTestcasesByProjectIssuesRelationRequest {
        this['body'] = body;
        return this;
    }
}