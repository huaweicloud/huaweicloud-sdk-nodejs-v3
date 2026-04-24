import { UpdateProjectStatusRequestBody } from './UpdateProjectStatusRequestBody';


export class UpdateProjectStatusRequest {
    private 'project_id'?: string;
    public body?: UpdateProjectStatusRequestBody;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): UpdateProjectStatusRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: UpdateProjectStatusRequestBody): UpdateProjectStatusRequest {
        this['body'] = body;
        return this;
    }
}