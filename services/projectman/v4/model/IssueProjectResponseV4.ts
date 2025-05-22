

export class IssueProjectResponseV4 {
    private 'project_id'?: string;
    private 'project_name'?: string;
    private 'project_num_id'?: number;
    public constructor() { 
    }
    public withProjectId(projectId: string): IssueProjectResponseV4 {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProjectName(projectName: string): IssueProjectResponseV4 {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withProjectNumId(projectNumId: number): IssueProjectResponseV4 {
        this['project_num_id'] = projectNumId;
        return this;
    }
    public set projectNumId(projectNumId: number  | undefined) {
        this['project_num_id'] = projectNumId;
    }
    public get projectNumId(): number | undefined {
        return this['project_num_id'];
    }
}