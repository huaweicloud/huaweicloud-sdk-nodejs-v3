import { PostNoteRequiredAttributeDto } from './PostNoteRequiredAttributeDto';


export class UpdateProjectNoteRequiredAttributesRequest {
    private 'project_id'?: string;
    public body?: PostNoteRequiredAttributeDto;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): UpdateProjectNoteRequiredAttributesRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: PostNoteRequiredAttributeDto): UpdateProjectNoteRequiredAttributesRequest {
        this['body'] = body;
        return this;
    }
}