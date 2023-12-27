

export class IDEPrivilageProjectInfo {
    private 'project_id'?: string;
    public ids?: Array<string>;
    public constructor() { 
    }
    public withProjectId(projectId: string): IDEPrivilageProjectInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withIds(ids: Array<string>): IDEPrivilageProjectInfo {
        this['ids'] = ids;
        return this;
    }
}