

export class DeleteIpdLabelRequest {
    private 'project_id'?: string;
    private 'label_id'?: string;
    public constructor(projectId?: string, labelId?: string) { 
        this['project_id'] = projectId;
        this['label_id'] = labelId;
    }
    public withProjectId(projectId: string): DeleteIpdLabelRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withLabelId(labelId: string): DeleteIpdLabelRequest {
        this['label_id'] = labelId;
        return this;
    }
    public set labelId(labelId: string  | undefined) {
        this['label_id'] = labelId;
    }
    public get labelId(): string | undefined {
        return this['label_id'];
    }
}