import { UpdateProjectRequestV4 } from './UpdateProjectRequestV4';


export class UpdateProjectV4Request {
    private 'project_id'?: string;
    public body?: UpdateProjectRequestV4;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): UpdateProjectV4Request {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: UpdateProjectRequestV4): UpdateProjectV4Request {
        this['body'] = body;
        return this;
    }
}