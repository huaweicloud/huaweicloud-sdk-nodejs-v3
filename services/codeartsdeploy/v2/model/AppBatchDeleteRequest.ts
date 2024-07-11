

export class AppBatchDeleteRequest {
    private 'project_id'?: string;
    private 'application_ids'?: Array<string>;
    public constructor(projectId?: string, applicationIds?: Array<string>) { 
        this['project_id'] = projectId;
        this['application_ids'] = applicationIds;
    }
    public withProjectId(projectId: string): AppBatchDeleteRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withApplicationIds(applicationIds: Array<string>): AppBatchDeleteRequest {
        this['application_ids'] = applicationIds;
        return this;
    }
    public set applicationIds(applicationIds: Array<string>  | undefined) {
        this['application_ids'] = applicationIds;
    }
    public get applicationIds(): Array<string> | undefined {
        return this['application_ids'];
    }
}