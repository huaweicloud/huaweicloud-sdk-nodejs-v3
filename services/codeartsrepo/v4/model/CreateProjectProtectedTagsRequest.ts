import { ProjectProtectedTagDto } from './ProjectProtectedTagDto';


export class CreateProjectProtectedTagsRequest {
    private 'project_id'?: string;
    public body?: ProjectProtectedTagDto;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): CreateProjectProtectedTagsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: ProjectProtectedTagDto): CreateProjectProtectedTagsRequest {
        this['body'] = body;
        return this;
    }
}