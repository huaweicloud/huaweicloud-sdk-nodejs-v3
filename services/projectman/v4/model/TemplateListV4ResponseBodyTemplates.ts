

export class TemplateListV4ResponseBodyTemplates {
    public id?: number;
    private 'project_id'?: number;
    private 'tracker_id'?: number;
    public description?: string;
    private 'issue_field_config'?: string;
    public constructor() { 
    }
    public withId(id: number): TemplateListV4ResponseBodyTemplates {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: number): TemplateListV4ResponseBodyTemplates {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: number  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): number | undefined {
        return this['project_id'];
    }
    public withTrackerId(trackerId: number): TemplateListV4ResponseBodyTemplates {
        this['tracker_id'] = trackerId;
        return this;
    }
    public set trackerId(trackerId: number  | undefined) {
        this['tracker_id'] = trackerId;
    }
    public get trackerId(): number | undefined {
        return this['tracker_id'];
    }
    public withDescription(description: string): TemplateListV4ResponseBodyTemplates {
        this['description'] = description;
        return this;
    }
    public withIssueFieldConfig(issueFieldConfig: string): TemplateListV4ResponseBodyTemplates {
        this['issue_field_config'] = issueFieldConfig;
        return this;
    }
    public set issueFieldConfig(issueFieldConfig: string  | undefined) {
        this['issue_field_config'] = issueFieldConfig;
    }
    public get issueFieldConfig(): string | undefined {
        return this['issue_field_config'];
    }
}