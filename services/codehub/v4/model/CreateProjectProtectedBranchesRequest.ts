import { ProtectedBranchBodyApiDto } from './ProtectedBranchBodyApiDto';


export class CreateProjectProtectedBranchesRequest {
    private 'project_id'?: string;
    public body?: ProtectedBranchBodyApiDto;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): CreateProjectProtectedBranchesRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: ProtectedBranchBodyApiDto): CreateProjectProtectedBranchesRequest {
        this['body'] = body;
        return this;
    }
}