

export class ShowProjectMemberSettingRequest {
    private 'project_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ShowProjectMemberSettingRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withOffset(offset: number): ShowProjectMemberSettingRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowProjectMemberSettingRequest {
        this['limit'] = limit;
        return this;
    }
}