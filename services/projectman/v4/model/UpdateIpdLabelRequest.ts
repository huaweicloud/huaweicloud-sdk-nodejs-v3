import { LabelParam } from './LabelParam';


export class UpdateIpdLabelRequest {
    private 'project_id'?: string;
    private 'label_id'?: string;
    public body?: LabelParam;
    public constructor(projectId?: string, labelId?: string) { 
        this['project_id'] = projectId;
        this['label_id'] = labelId;
    }
    public withProjectId(projectId: string): UpdateIpdLabelRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withLabelId(labelId: string): UpdateIpdLabelRequest {
        this['label_id'] = labelId;
        return this;
    }
    public set labelId(labelId: string  | undefined) {
        this['label_id'] = labelId;
    }
    public get labelId(): string | undefined {
        return this['label_id'];
    }
    public withBody(body: LabelParam): UpdateIpdLabelRequest {
        this['body'] = body;
        return this;
    }
}