import { LabelParam } from './LabelParam';


export class CreateIpdLabelRequest {
    private 'project_id'?: string;
    public body?: LabelParam;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): CreateIpdLabelRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: LabelParam): CreateIpdLabelRequest {
        this['body'] = body;
        return this;
    }
}