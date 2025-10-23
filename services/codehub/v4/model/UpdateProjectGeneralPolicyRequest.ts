import { UpdateGeneralPolicyDto } from './UpdateGeneralPolicyDto';


export class UpdateProjectGeneralPolicyRequest {
    private 'project_id'?: string;
    public body?: UpdateGeneralPolicyDto;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): UpdateProjectGeneralPolicyRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: UpdateGeneralPolicyDto): UpdateProjectGeneralPolicyRequest {
        this['body'] = body;
        return this;
    }
}