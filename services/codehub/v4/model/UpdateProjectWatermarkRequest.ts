import { UpdateWatermarkDto } from './UpdateWatermarkDto';


export class UpdateProjectWatermarkRequest {
    private 'project_id'?: string;
    public body?: UpdateWatermarkDto;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): UpdateProjectWatermarkRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: UpdateWatermarkDto): UpdateProjectWatermarkRequest {
        this['body'] = body;
        return this;
    }
}